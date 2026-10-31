// Glossa · Claude por la API de Anthropic, llamada directamente desde el móvil con la clave del usuario.
// La clave se guarda solo en este dispositivo. Respuestas en streaming (SSE).
(function (root) {
  'use strict';
  const URL_API = 'https://api.anthropic.com/v1/messages';

  function codeFor(status) {
    if (status === 401) return 'auth';
    if (status === 403) return 'forbidden';
    if (status === 404) return 'model';
    if (status === 413) return 'too_large';
    if (status === 429) return 'rate';
    if (status === 529 || status >= 500) return 'overloaded';
    return 'bad_request';
  }

  // o: {key, model, system, messages, maxTokens, effort, onText(textSoFar), signal}
  async function run(o) {
    if (!o.key) throw { code: 'no_key' };
    const body = { model: o.model, max_tokens: o.maxTokens || 2048, stream: true, messages: o.messages };
    if (o.system) body.system = o.system;
    if (o.effort) body.output_config = { effort: o.effort };
    let res;
    try {
      res = await fetch(URL_API, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-api-key': o.key,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify(body),
        signal: o.signal
      });
    } catch (e) {
      if (e && e.name === 'AbortError') throw { code: 'cancelled', text: '' };
      throw { code: 'network', message: String(e && e.message || e) };
    }
    if (!res.ok) {
      let msg = '';
      try { const j = await res.json(); msg = (j && j.error && j.error.message) || ''; } catch (e) { /* sin cuerpo */ }
      if (res.status === 400 && body.output_config && /output_config|effort/i.test(msg) && !o._retry) {
        return run(Object.assign({}, o, { effort: null, _retry: true }));
      }
      throw { code: codeFor(res.status), status: res.status, message: msg };
    }
    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let buf = '', text = '', stop = null;
    try {
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true }).replace(/\r\n/g, '\n');
        let i;
        while ((i = buf.indexOf('\n\n')) >= 0) {
          const chunk = buf.slice(0, i); buf = buf.slice(i + 2);
          const data = chunk.split('\n').filter(l => l.indexOf('data:') === 0).map(l => l.slice(5).trim()).join('');
          if (!data) continue;
          let ev; try { ev = JSON.parse(data); } catch (e) { continue; }
          if (ev.type === 'content_block_delta' && ev.delta && ev.delta.type === 'text_delta') {
            text += ev.delta.text;
            if (o.onText) o.onText(text);
          } else if (ev.type === 'message_delta' && ev.delta && ev.delta.stop_reason) {
            stop = ev.delta.stop_reason;
          } else if (ev.type === 'error') {
            const t = ev.error && ev.error.type;
            throw { code: t === 'overloaded_error' ? 'overloaded' : t === 'rate_limit_error' ? 'rate' : 'stream', message: ev.error && ev.error.message, text };
          }
        }
      }
    } catch (e) {
      if (e && e.name === 'AbortError') throw { code: 'cancelled', text };
      if (e && e.code) throw e;
      throw { code: 'network', message: String(e && e.message || e), text };
    }
    if (!text.trim()) throw { code: stop === 'max_tokens' ? 'too_long' : 'empty', text };
    return { text, stop };
  }

  async function json(o) {
    const r = await run(o);
    const v = root.Core.extractJSON(r.text);
    if (v === undefined) throw { code: r.stop === 'max_tokens' ? 'too_long' : 'bad_json', text: r.text };
    return v;
  }

  function message(e) {
    const c = e && e.code;
    switch (c) {
      case 'cancelled': return '';
      case 'no_key': return 'Falta tu clave de la API de Claude. Añádela en Ajustes.';
      case 'auth': return 'La clave de la API no es válida. Revísala en Ajustes.';
      case 'forbidden': return 'Tu cuenta de la API no tiene permiso para esto. Revisa la consola de Claude.';
      case 'model': return 'El modelo elegido no existe o no está disponible. Revisa el nombre en Ajustes.';
      case 'rate': return 'Has llegado a un límite de uso o te has quedado sin saldo en la API. Prueba en un rato o revisa tu saldo.';
      case 'overloaded': return 'Claude está saturado ahora mismo. Vuelve a intentarlo en un momento.';
      case 'network': return 'No hay conexión con Claude. Comprueba tu internet.';
      case 'too_long': return 'La respuesta no cabía entera. Prueba con un texto más corto.';
      case 'too_large': return 'El texto o la imagen son demasiado grandes. Prueba con menos.';
      case 'bad_json': return 'La respuesta ha llegado con un formato raro. Vuelve a intentarlo.';
      case 'empty': return 'Claude no ha devuelto nada. Vuelve a intentarlo.';
      default: return 'No se ha podido completar' + (e && e.message ? ': ' + e.message : '.') ;
    }
  }

  // Imagen (File/Blob) -> JPEG en base64, con el lado mayor como mucho de 1568 px
  function imageToBase64(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const max = 1568, s = Math.min(1, max / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        resolve(c.toDataURL('image/jpeg', 0.88).split(',')[1]);
      };
      img.onerror = () => { URL.revokeObjectURL(url); reject({ code: 'image' }); };
      img.src = url;
    });
  }

  root.AI = { run, json, message, imageToBase64 };
})(window);
