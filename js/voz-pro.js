// Glossa · voces premium (window.VozPro): Google Cloud, Azure, OpenAI o ElevenLabs con la clave del usuario.
// Las llamadas salen directamente del navegador; la clave vive solo en este móvil (ajustes.vozpro.clave).
// Todo lo sintetizado se guarda en Cache Storage: repetirlo no cuesta y suena sin conexión.
// Si no puede sonar, speak() devuelve false y Voice.TTS usa la voz del móvil.
//
// API (comprobada en la documentación oficial, octubre de 2026):
// · Google Cloud Text-to-Speech: POST https://texttospeech.googleapis.com/v1/text:synthesize?key=…
//   {input:{text}, voice:{languageCode, name}, audioConfig:{audioEncoding:'MP3', speakingRate}} → {audioContent: base64}.
//   Voces: GET /v1/voices?languageCode=…&key=… → {voices:[{name, languageCodes, ssmlGender}]}; nombres «pl-PL-Chirp3-HD-Kore».
//   El polaco tiene Chirp 3 HD, WaveNet y Standard (no Neural2). CORS: las APIs de Google lo admiten (guía CORS del cliente
//   JavaScript de Google); la ficha de TTS no habla de claves de API, pero su documento de descubrimiento declara «key».
// · Azure AI Speech: POST https://<región>.tts.speech.microsoft.com/cognitiveservices/v1 con SSML y las cabeceras
//   Ocp-Apim-Subscription-Key, Content-Type: application/ssml+xml y X-Microsoft-OutputFormat (el User-Agent lo pone el
//   navegador). Voces: GET …/cognitiveservices/voices/list. La documentación no habla de CORS y recomienda su SDK.
// · OpenAI: POST https://api.openai.com/v1/audio/speech {model:'gpt-4o-mini-tts', input, voice, instructions,
//   response_format:'mp3', speed}. Sin lista de voces. CORS sin documentar (funciona desde el navegador).
//   OpenAI apaga gpt-4o-mini-tts el 6 de enero de 2027 (página de deprecaciones).
// · ElevenLabs: POST https://api.elevenlabs.io/v1/text-to-speech/<voice_id>?output_format=… con xi-api-key
//   {text, model_id:'eleven_multilingual_v2', voice_settings:{…, speed 0.7–1.2}}. Voces: GET /v1/voices. CORS sin documentar;
//   su documentación pide no poner la clave en código de cliente: aquí solo vive en el móvil (mejor con límite de créditos).
//
// window.VozPro:
//   setConfigSource(fn)   fn() → ajustes.vozpro (o undefined)
//   enabledFor(tag)       servicio y clave puestos, y usar[tag] !== false
//   speak(text, tag, {rate, onend}) → Promise<boolean>
//                         true: suena (o se ha parado); false: no ha podido sonar y quien llama debe usar otra voz.
//                         onend(motivo) llega siempre una sola vez: 'end' | 'error' | 'stop' | 'timeout' | 'fail' (= false).
//                         rate < 0.8 (p. ej. «Más despacio», 0.6) reproduce el mismo audio más lento (rate / 0.9).
//   stop()
//   prefetch(items, onProgress) → Promise<{total, hechos, nuevos, guardados, fallos, caracteres, error, cancelado}>
//                         items: [{text, tag}] con el texto ya listo para la voz (latín y griego ya en grafía española).
//                         Si onProgress devuelve false, se detiene.
//   renderSettings(el, ajustes, save)   tarjeta de Ajustes dentro de el (crea ajustes.vozpro si falta)
//   usage() → {mes: 'YYYY-MM', chars, por}   caracteres sintetizados este mes (solo lo que no estaba guardado)
//   clearCache(), cacheInfo() → {n, bytes}, normText(text)
(function (root) {
  'use strict';

  const TAGS = ['pl-PL', 'it-IT', 'es-ES', 'el-GR'];
  const LANG = { pl: 'pl-PL', it: 'it-IT', es: 'es-ES', el: 'el-GR' };
  const FILAS = [['pl-PL', 'Polaco'], ['it-IT', 'Italiano'], ['es-ES', 'Español: latín, griego y preguntas']];
  const CACHE = 'vozpro-audio-1';    // sin «glossa-»: el service worker borra esas cachés en cada versión nueva
  const CAP = 300 * 1048576;         // tope del audio guardado; al pasarlo se borra lo más antiguo
  const LS = 'vozpro:';              // sin «glossa:»: Store carga esas claves de localStorage como documentos
  const VEL = 0.95;
  const MAXC = 400, MAXS = 250;      // caracteres por petición y por frase (las frases largas se parten por las comas)
  const T = { first: 9000, synth: 20000, list: 15000, clip: 10000, extra: 2500 };   // plazos en ms (las pruebas los acortan)

  // ---------- Utilidades ----------
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const num = (v, d) => (v !== null && v !== '' && isFinite(Number(v)) ? Number(v) : d);
  const r2 = v => Math.round(v * 100) / 100;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
  const gen = g => (/^f/i.test(g || '') ? ' (mujer)' : /^m/i.test(g || '') ? ' (hombre)' : '');
  const fmtN = n => Number(n || 0).toLocaleString('es-ES');
  const mb = b => (b / 1048576).toLocaleString('es-ES', { maximumFractionDigits: 1 }) + ' MB';
  const vel = v => Number(v).toFixed(2).replace(/0$/, '');
  const host = () => (root.location && root.location.host) || 'tu web';
  function fnv(s, h) { for (const ch of String(s)) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619); } return (h >>> 0).toString(16).padStart(8, '0'); }
  const MEM = {};
  function leer(k) { try { const v = root.localStorage.getItem(LS + k); return v ? JSON.parse(v) : null; } catch (e) { return MEM[k] || null; } }
  function guardar(k, v) { MEM[k] = v; try { root.localStorage.setItem(LS + k, JSON.stringify(v)); } catch (e) { /* solo en memoria */ } }

  // ---------- Errores ----------
  const MSG = {
    clave: 'La clave no es válida', permiso: 'La clave no tiene permiso para este servicio', cuota: 'Has llegado al límite de uso o de saldo',
    red: 'No hay conexión con el servicio o el navegador ha bloqueado la llamada', tiempo: 'El servicio tarda demasiado en responder',
    servicio: 'El servicio falla ahora mismo', peticion: 'El servicio ha rechazado la petición', noexiste: 'No encuentro esa voz o esa dirección',
    formato: 'El servicio no ha devuelto audio', sinred: 'Sin conexión: solo suena el audio ya guardado',
    config: 'Falta elegir el servicio, la clave o la región', audio: 'El móvil no ha podido reproducir el audio'
  };
  function fallo(code, status, det) { const e = new Error(code); e.code = code; e.status = status || 0; e.detalle = det || ''; return e; }
  function mensaje(e) {
    let m = MSG[e && e.code] || 'No ha funcionado';
    if (e && e.status) m += ' (' + e.status + ')';
    if (e && e.detalle) m += ': ' + e.detalle;
    return m + '.';
  }
  function codigo(st, det) {
    if ((st === 401 || st === 402) && /quota|credit/i.test(det)) return 'cuota';   // ElevenLabs sin créditos
    if (st === 401) return 'clave';
    if (st === 402 || st === 429) return 'cuota';
    if (st === 403) return 'permiso';
    if (st === 404) return 'noexiste';
    if (st === 408) return 'tiempo';
    return st >= 500 ? 'servicio' : 'peticion';
  }
  function detalle(txt) {
    let m = '';
    try {
      const j = JSON.parse(txt), d = j && (j.error || j.detail || j);
      m = typeof d === 'string' ? d : (d && (d.message || (Array.isArray(d) && d[0] && d[0].msg) || d.status)) || '';
    } catch (e) { m = String(txt || '').replace(/<[^>]*>/g, ' '); }
    m = String(m).replace(/\s+/g, ' ').trim().replace(/\.$/, '');
    return m.length > 160 ? m.slice(0, 157) + '…' : m;
  }
  async function req(url, init, como, ms) {
    const ctl = typeof AbortController === 'function' ? new AbortController() : null;
    const reloj = setTimeout(() => { if (ctl) ctl.abort(); }, ms);
    try {
      let res;
      try { res = await root.fetch(url, Object.assign({ credentials: 'omit' }, init, ctl ? { signal: ctl.signal } : null)); }
      catch (e) { throw fallo(e && e.name === 'AbortError' ? 'tiempo' : 'red'); }
      if (!res.ok) {
        let det = '';
        try { det = detalle(await res.text()); } catch (e) { /* sin cuerpo */ }
        throw fallo(codigo(res.status, det), res.status, det);
      }
      try { return como === 'json' ? await res.json() : await res.blob(); }
      catch (e) { throw fallo(e && e.name === 'AbortError' ? 'tiempo' : 'formato', res.status); }
    } finally { clearTimeout(reloj); }
  }
  function b64Blob(b64) {
    const bin = root.atob(b64), u = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    return new Blob([u], { type: 'audio/mpeg' });
  }
  // Comprueba que llega audio y corrige su tipo según los primeros bytes (MP3, WAV u Ogg).
  async function audioDe(blob) {
    if (!blob || !blob.size) throw fallo('formato');
    let h;
    try { h = new Uint8Array(await blob.slice(0, 4).arrayBuffer()); } catch (e) { return blob; }
    const s = String.fromCharCode(h[0] || 0, h[1] || 0, h[2] || 0, h[3] || 0);
    if (s[0] === '{' || s[0] === '<') throw fallo('formato');
    const t = s === 'RIFF' ? 'audio/wav' : s === 'OggS' ? 'audio/ogg' : (s.slice(0, 3) === 'ID3' || (h[0] === 0xFF && (h[1] & 0xE0) === 0xE0)) ? 'audio/mpeg' : '';
    return t && t !== blob.type ? new Blob([blob], { type: t }) : blob;
  }

  // ---------- Proveedores ----------
  const G_TIPO = { 'Chirp3-HD': 'Chirp 3 HD', Neural2: 'Neural2', Wavenet: 'WaveNet', Standard: 'Estándar' };
  const G_RANGO = { 'Chirp3-HD': 0, Neural2: 1, Wavenet: 2, Standard: 3 };
  const AZ_PREF = {
    'pl-PL': ['pl-PL-ZofiaNeural', 'pl-PL-MarekNeural', 'pl-PL-AgnieszkaNeural'],
    'it-IT': ['it-IT-ElsaNeural', 'it-IT-IsabellaNeural', 'it-IT-DiegoNeural'],
    'es-ES': ['es-ES-ElviraNeural', 'es-ES-AlvaroNeural'],
    'el-GR': ['el-GR-AthinaNeural', 'el-GR-NestorasNeural']
  };
  const OA_VOCES = ['coral', 'marin', 'cedar', 'alloy', 'ash', 'ballad', 'echo', 'fable', 'nova', 'onyx', 'sage', 'shimmer', 'verse'];
  const OA_IDIOMA = {
    'pl-PL': 'Speak Polish as a native speaker from Poland, with standard Polish pronunciation.',
    'it-IT': 'Speak Italian as a native speaker from Italy, with standard Italian pronunciation.',
    'es-ES': 'Speak Spanish from Spain (Castilian, with z and soft c pronounced as θ). The text may be Latin or Ancient Greek respelled in Spanish spelling: read it exactly as written, as if it were Spanish, stressing the vowels that carry a written accent. Never translate or correct it.',
    'el-GR': 'Speak Modern Greek as a native speaker from Greece.'
  };
  const oaInstr = (tag, v) => OA_IDIOMA[tag] + ' ' + (v < 0.9 ? 'Speak slowly' : v < 1 ? 'Speak slightly slowly' : 'Speak at a natural pace') + ', clearly, for a language learner. Do not add any words.';
  const EL_VOZ = 'JBFqnCBsd6RMkjVDRZzb';   // «George», voz de serie de la guía rápida de ElevenLabs
  const azUrl = (c, path) => 'https://' + c.region + '.tts.speech.microsoft.com/' + path;
  // Lista completa de voces (Azure y ElevenLabs la dan de una vez): una petición para todos los idiomas.
  const TODAS = { firma: '', p: null };
  function todas(c, pide) {
    const f = firma(c);
    if (TODAS.firma !== f || !TODAS.p) { TODAS.firma = f; TODAS.p = pide().catch(e => { TODAS.p = null; throw e; }); }
    return TODAS.p;
  }

  const PROV = {
    google: {
      nombre: 'Google Cloud', etiqueta: 'Google Cloud (recomendado)', modelo: 'v1-mp3', gratis: 1000000, ph: 'AIza…',
      ayuda: h => `Clave: en console.cloud.google.com crea un proyecto, activa «Cloud Text-to-Speech API» y la facturación, y en Credenciales crea una clave de API (restríngela a esa API y a ${h}/*). Gratis cada mes: 1 millón de caracteres con Chirp 3 HD; después, 30 $ por millón.`,
      voz: tag => tag + '-Chirp3-HD-Kore',
      vel: v => clamp(v, 0.25, 2),
      corto: id => { const m = /-(Chirp3-HD|Neural2|Wavenet|Standard)-(.+)$/.exec(id); return m ? m[2] + ' · ' + G_TIPO[m[1]] : id; },
      async synth(c, s) {
        const j = await req('https://texttospeech.googleapis.com/v1/text:synthesize?key=' + encodeURIComponent(c.clave), {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ input: { text: s.text }, voice: { languageCode: s.tag, name: s.voz }, audioConfig: { audioEncoding: 'MP3', speakingRate: s.vel } })
        }, 'json', T.synth);
        if (!j || typeof j.audioContent !== 'string' || !j.audioContent) throw fallo('formato');
        return b64Blob(j.audioContent);
      },
      async voces(c, tag) {
        const j = await req('https://texttospeech.googleapis.com/v1/voices?languageCode=' + tag + '&key=' + encodeURIComponent(c.clave), {}, 'json', T.list);
        return ((j && j.voices) || []).map(v => {
          const m = /^([a-z]{2,3}-[A-Z]{2})-(Chirp3-HD|Neural2|Wavenet|Standard)-(.+)$/.exec((v && v.name) || '');
          return m && m[1] === tag ? { id: v.name, rank: G_RANGO[m[2]], label: m[3] + ' · ' + G_TIPO[m[2]] + gen(v.ssmlGender) } : null;
        }).filter(Boolean);
      }
    },
    azure: {
      nombre: 'Azure', etiqueta: 'Microsoft Azure', modelo: 'mp3-24k', gratis: 500000, ph: 'Clave 1 del recurso', region: true,
      ayuda: () => 'Clave y región: en portal.azure.com crea un recurso «Voz» (Speech) con el plan gratuito F0 y copia la clave 1 y la región (por ejemplo, westeurope). Gratis: 500.000 caracteres al mes; después, unos 15 $ por millón.',
      voz: tag => AZ_PREF[tag][0],
      vel: v => clamp(v, 0.5, 2),
      corto: id => id.replace(/^[a-z]{2,3}-[A-Z]{2}-/, '').replace(/Neural$/, ''),
      async synth(c, s) {
        const pct = Math.round((s.vel - 1) * 100);
        const ssml = `<speak version='1.0' xml:lang='${s.tag}'><voice name='${esc(s.voz)}'><prosody rate='${pct < 0 ? pct : '+' + pct}%'>${esc(s.text)}</prosody></voice></speak>`;
        return req(azUrl(c, 'cognitiveservices/v1'), {
          method: 'POST', body: ssml,
          headers: { 'Ocp-Apim-Subscription-Key': c.clave, 'Content-Type': 'application/ssml+xml', 'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3' }
        }, 'blob', T.synth);
      },
      async voces(c, tag) {
        const all = await todas(c, () => req(azUrl(c, 'cognitiveservices/voices/list'), { headers: { 'Ocp-Apim-Subscription-Key': c.clave } }, 'json', T.list).then(j => (Array.isArray(j) ? j : [])));
        const pref = AZ_PREF[tag] || [];
        return all.filter(v => v && v.Locale === tag && /Neural$/.test(v.ShortName || '') && v.ShortName.indexOf(':') < 0).map(v => {
          const i = pref.indexOf(v.ShortName), multi = /Multilingual/i.test(v.ShortName);
          return { id: v.ShortName, rank: i >= 0 ? i : multi ? 20 : 10, label: (v.DisplayName || v.LocalName || v.ShortName) + gen(v.Gender) + (multi ? ' · multilingüe' : '') };
        });
      }
    },
    openai: {
      nombre: 'OpenAI', etiqueta: 'OpenAI', modelo: 'gpt-4o-mini-tts', gratis: 0, ph: 'sk-…', sinLista: true,
      ayuda: () => 'Clave: en platform.openai.com › API keys (necesita saldo). Sin plan gratuito: unos 0,015 $ por minuto de audio. OpenAI retira este modelo el 6 de enero de 2027.',
      voz: () => OA_VOCES[0],
      vel: v => clamp(v, 0.25, 4),
      corto: id => id,
      async synth(c, s) {
        return req('https://api.openai.com/v1/audio/speech', {
          method: 'POST', headers: { 'Authorization': 'Bearer ' + c.clave, 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: 'gpt-4o-mini-tts', input: s.text, voice: s.voz, instructions: oaInstr(s.tag, s.vel), response_format: 'mp3', speed: s.vel })
        }, 'blob', T.synth);
      }
    },
    elevenlabs: {
      nombre: 'ElevenLabs', etiqueta: 'ElevenLabs (la más cara)', modelo: 'eleven_multilingual_v2', gratis: 10000, ph: 'sk_…',
      ayuda: () => 'La opción más cara (unos 80 $ por millón de caracteres). Clave: en elevenlabs.io › Developers › API keys; ponle un límite de créditos. Gratis: 10.000 caracteres al mes; después, planes desde 6 $ al mes.',
      voz: () => EL_VOZ,
      vel: v => clamp(v, 0.7, 1.2),
      corto: id => (id === EL_VOZ ? 'George' : id),
      async synth(c, s) {
        return req('https://api.elevenlabs.io/v1/text-to-speech/' + encodeURIComponent(s.voz) + '?output_format=mp3_44100_64', {
          method: 'POST', headers: { 'xi-api-key': c.clave, 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: s.text, model_id: 'eleven_multilingual_v2', voice_settings: { stability: 0.5, similarity_boost: 0.75, speed: s.vel } })
        }, 'blob', T.synth);
      },
      async voces(c, tag) {
        const lang = tag.slice(0, 2);
        const all = await todas(c, () => req('https://api.elevenlabs.io/v1/voices', { headers: { 'xi-api-key': c.clave } }, 'json', T.list).then(j => (j && Array.isArray(j.voices) ? j.voices : [])));
        return all.filter(v => v && v.voice_id).map(v => {
          const lab = v.labels || {};
          const nativa = (v.verified_languages || []).some(l => l && l.language === lang) || lab.language === lang;
          return { id: v.voice_id, rank: nativa ? 0 : v.category === 'premade' ? 2 : 1, label: (v.name || v.voice_id) + (nativa ? ' · nativa' : '') + (lab.accent ? ' · ' + lab.accent : '') };
        });
      }
    }
  };

  // ---------- Configuración ----------
  let fuente = null;
  function setConfigSource(fn) { fuente = typeof fn === 'function' ? fn : null; }
  function conf() { try { const c = fuente ? fuente() : null; return c && typeof c === 'object' ? c : null; } catch (e) { return null; } }
  function snap(c) {
    c = c || {};
    return {
      proveedor: PROV[c.proveedor] ? c.proveedor : '', clave: String(c.clave || '').trim(), region: String(c.region || '').trim().toLowerCase(),
      voces: c.voces && typeof c.voces === 'object' ? c.voces : {}, velocidad: num(c.velocidad, VEL), usar: c.usar && typeof c.usar === 'object' ? c.usar : {}
    };
  }
  function listo(c) { const s = snap(c), p = PROV[s.proveedor]; return !!(p && s.clave && (!p.region || /^[a-z0-9]+$/.test(s.region))); }
  function normTag(tag) {
    const m = /^([a-z]{2,3})(?:[-_]([a-z]{2}))?$/i.exec(String(tag || '').trim());
    if (!m) return '';
    const t = m[2] ? m[1].toLowerCase() + '-' + m[2].toUpperCase() : LANG[m[1].toLowerCase()] || '';
    return TAGS.indexOf(t) >= 0 ? t : '';
  }
  function enabledFor(tag) { const c = conf(), t = normTag(tag); return !!(t && c && listo(c) && !(c.usar && c.usar[t] === false)); }

  // Voces: la elegida; si no, la de serie (o la mejor de la lista si la de serie no está en ella).
  const LISTAS = {};
  function listaGuardada(prov, tag) {
    const k = prov + '|' + tag;
    if (!LISTAS[k]) { const v = leer('voces:' + k); if (v && Array.isArray(v.l)) LISTAS[k] = v.l; }
    return LISTAS[k] || null;
  }
  function guardaLista(prov, tag, l) { const k = prov + '|' + tag; LISTAS[k] = l; guardar('voces:' + k, { t: Date.now(), l }); }
  function vozAuto(c, tag) {
    const def = PROV[c.proveedor].voz(tag), l = PROV[c.proveedor].sinLista ? null : listaGuardada(c.proveedor, tag);
    return l && l.length && !l.some(v => v.id === def) ? l.reduce((a, v) => (v.rank < a.rank ? v : a)).id : def;
  }
  function vozDe(c, tag) { const v = typeof c.voces[tag] === 'string' ? c.voces[tag].trim() : ''; return v || vozAuto(c, tag); }
  function spec(c, tag, text) { const p = PROV[c.proveedor]; return { prov: c.proveedor, p, tag, text, voz: vozDe(c, tag), vel: r2(p.vel(c.velocidad)) }; }

  // ---------- Texto ----------
  // Igual que la limpieza de Voice.TTS y además espacios y asteriscos: speak() y prefetch() dan la misma clave.
  function normText(t) { return String(t == null ? '' : t).replace(/[…«»"“”*]/g, ' ').replace(/—/g, ', ').replace(/\s+/g, ' ').trim(); }
  function trocea(t) {
    if (t.length <= MAXC) return [t];
    const frases = t.match(/[^.!?;:…]+(?:[.!?;:…]+["»”’)\]]*\s*|$)/g) || [t];
    const out = [];
    let buf = '';
    const suelta = () => { if (buf.trim()) out.push(buf.trim()); buf = ''; };
    for (const f of frases) {
      if (f.trim().length > MAXS) { suelta(); parte(f.trim()).forEach(x => out.push(x)); continue; }
      if (buf && (buf + f).trim().length > MAXC) suelta();
      buf += f;
    }
    suelta();
    return out;
  }
  function parte(f) {
    const out = [];
    let r = f;
    while (r.length > MAXS) {
      let i = Math.max(r.lastIndexOf(', ', MAXS - 1), r.lastIndexOf('; ', MAXS - 1), r.lastIndexOf(': ', MAXS - 1));
      if (i < MAXS * 0.4) i = r.lastIndexOf(' ', MAXS - 1);
      if (i <= 0) i = MAXS - 1;
      out.push(r.slice(0, i + 1).trim());
      r = r.slice(i + 1).trim();
    }
    if (r) out.push(r);
    return out;
  }
  // «Más despacio» (rate 0.6) reproduce el mismo audio más lento; las velocidades normales usan el audio tal cual.
  const ritmo = r => (typeof r === 'number' && r > 0 && r < 0.8 ? clamp(r / 0.9, 0.5, 1) : 1);

  // ---------- Fallos seguidos: se deja de llamar un rato (lo guardado sigue sonando) ----------
  let BLOQ = { firma: '', hasta: 0, e: null };
  let ULTIMO = null;   // último fallo, para enseñarlo en Ajustes
  const ESPERA = { clave: Infinity, permiso: Infinity, cuota: 300000, red: 30000, tiempo: 30000, servicio: 30000 };
  function firma(c) { return c.proveedor + '|' + c.region + '|' + fnv(c.clave, 2166136261); }
  function anota(c, e) {
    ULTIMO = { t: Date.now(), prov: c.proveedor, e };
    const ms = ESPERA[e && e.code];
    if (ms) BLOQ = { firma: firma(c), hasta: Date.now() + ms, e };
  }
  function cortado(c) {
    if (root.navigator && root.navigator.onLine === false) return fallo('sinred');
    return BLOQ.firma === firma(c) && Date.now() < BLOQ.hasta ? BLOQ.e : null;
  }
  function desbloquea() { BLOQ = { firma: '', hasta: 0, e: null }; }

  // ---------- Caché de audio (Cache Storage) ----------
  let cajaP = null;
  function caja() {
    if (!root.caches || typeof root.caches.open !== 'function') return Promise.resolve(null);
    if (!cajaP) cajaP = root.caches.open(CACHE).catch(() => { cajaP = null; return null; });
    return cajaP;
  }
  const urlClip = k => (root.location && /^https?:$/.test(root.location.protocol) ? root.location.origin : 'https://glossa.invalid') + '/__vozpro/' + k;
  async function claveClip(s) {
    const txt = [s.prov, s.p.modelo, s.voz, s.vel.toFixed(2), s.tag, s.text].join('\u0001');
    try {
      if (root.crypto && root.crypto.subtle && typeof TextEncoder === 'function') {
        const d = new Uint8Array(await root.crypto.subtle.digest('SHA-256', new TextEncoder().encode(txt)));
        let h = '';
        for (let i = 0; i < 16; i++) h += d[i].toString(16).padStart(2, '0');
        return s.prov + '-' + h;
      }
    } catch (e) { /* sin crypto.subtle */ }
    return s.prov + '-' + fnv(txt, 2166136261) + fnv(txt, 0x9747b28c) + txt.length.toString(16);
  }
  function meta() { const m = leer('cache'); return m && typeof m.n === 'number' ? { n: m.n, bytes: m.bytes || 0 } : { n: 0, bytes: 0 }; }
  async function deCache(k) {
    try { const c = await caja(); if (!c) return null; const r = await c.match(urlClip(k)); return r ? await r.blob() : null; } catch (e) { return null; }
  }
  async function aCache(k, blob) {
    const c = await caja();
    if (!c) return;
    const resp = () => new Response(blob, { headers: { 'Content-Type': blob.type || 'audio/mpeg', 'X-Bytes': String(blob.size), 'X-T': String(Date.now()) } });
    try { await c.put(urlClip(k), resp()); } catch (e) {
      await poda(CAP * 0.6);   // sin espacio: se hace sitio y se reintenta una vez
      try { await c.put(urlClip(k), resp()); } catch (e2) { return; }
    }
    const m = meta();
    m.n += 1; m.bytes += blob.size;
    guardar('cache', m);
    if (m.bytes > CAP) poda(CAP * 0.85);
  }
  async function quitaDeCache(k) {
    try {
      const c = await caja(), u = urlClip(k), r = c && await c.match(u);
      if (!r) return;
      await c.delete(u);
      const m = meta();
      guardar('cache', { n: Math.max(0, m.n - 1), bytes: Math.max(0, m.bytes - (Number(r.headers.get('X-Bytes')) || 0)) });
    } catch (e) { /* nada */ }
  }
  let podando = null;
  function poda(objetivo) {   // borra lo más antiguo hasta bajar del objetivo y rehace la cuenta
    if (!podando) {
      podando = (async () => {
        const c = await caja();
        if (!c) return;
        const xs = [];
        for (const rq of await c.keys()) {
          const r = await c.match(rq);
          xs.push({ rq, b: r ? Number(r.headers.get('X-Bytes')) || 0 : 0, t: r ? Number(r.headers.get('X-T')) || 0 : 0 });
        }
        xs.sort((a, b) => a.t - b.t);
        let total = xs.reduce((a, x) => a + x.b, 0), n = xs.length;
        for (const x of xs) { if (total <= objetivo) break; await c.delete(x.rq); total -= x.b; n -= 1; }
        guardar('cache', { n, bytes: total });
      })().catch(() => {}).then(() => { podando = null; });
    }
    return podando;
  }
  async function clearCache() {
    try { if (root.caches) await root.caches.delete(CACHE); } catch (e) { /* nada */ }
    cajaP = null;
    guardar('cache', { n: 0, bytes: 0 });
  }

  // ---------- Uso del mes (solo lo sintetizado de verdad) ----------
  function mes() { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0'); }
  function usage() {
    const u = leer('uso'), m = mes();
    return u && u.mes === m ? { mes: m, chars: u.chars || 0, por: Object.assign({}, u.por) } : { mes: m, chars: 0, por: {} };
  }
  function cuenta(prov, n) { const u = usage(); u.chars += n; u.por[prov] = (u.por[prov] || 0) + n; guardar('uso', u); }

  // ---------- Conseguir un clip: caché o servicio (una sola petición por clip aunque lo pidan dos a la vez) ----------
  const enCurso = new Map();
  async function consigue(c, s) {
    const k = await claveClip(s), b = await deCache(k);
    if (b) return { k, blob: b, nuevo: false };
    let pr = enCurso.get(k), nuevo = false;
    if (!pr) {
      const corte = cortado(c);
      if (corte) throw corte;
      pr = sintetiza(c, s, k);
      nuevo = true;
      enCurso.set(k, pr);
      pr.then(() => enCurso.delete(k), () => enCurso.delete(k));
    }
    return { k, blob: await pr, nuevo };
  }
  async function sintetiza(c, s, k) {
    let blob;
    try { blob = await audioDe(await s.p.synth(c, s)); } catch (e) {
      const err = e && e.code ? e : fallo('formato');
      anota(c, err);
      throw err;
    }
    cuenta(s.prov, s.text.length);
    await aCache(k, blob);
    return blob;
  }
  function plazo(pr, ms) {
    return new Promise((res, rej) => {
      const t = setTimeout(() => rej(fallo('tiempo')), ms);
      pr.then(v => { clearTimeout(t); res(v); }, e => { clearTimeout(t); rej(e); });
    });
  }

  // ---------- Reproducir ----------
  // Un HTMLAudioElement por clip y una URL de objeto que se revoca al acabar. Resuelve 'end', 'error', 'timeout',
  // 'stop' o 'bloqueado' (el navegador no deja sonar sin un toque).
  function suena(job, blob, pb, largo) {
    return new Promise(res => {
      let a = null, url = '', hecho = false, reloj = 0;
      const acaba = motivo => {
        if (hecho) return;
        hecho = true;
        clearTimeout(reloj);
        if (job.parar === parar) job.parar = null;
        if (a) {
          a.onended = a.onerror = a.onloadedmetadata = null;
          try { a.pause(); a.removeAttribute('src'); a.load(); } catch (e) { /* nada */ }
        }
        if (url) URL.revokeObjectURL(url);
        res(motivo);
      };
      const parar = () => acaba('stop');
      job.parar = parar;
      try {
        a = new root.Audio();
        url = URL.createObjectURL(blob);
        a.onended = () => acaba('end');
        a.onerror = () => acaba('error');
        a.onloadedmetadata = () => {
          const d = a.duration;
          if (isFinite(d) && d > 0) { clearTimeout(reloj); reloj = setTimeout(() => acaba('timeout'), d * 1000 / pb + T.extra); }
        };
        reloj = setTimeout(() => acaba('timeout'), T.clip + largo * 150 / pb);
        a.preload = 'auto';
        a.src = url;
        a.defaultPlaybackRate = pb; a.playbackRate = pb;
        if ('preservesPitch' in a) a.preservesPitch = true;
        const empieza = () => { if (!hecho && !job.empezado) { job.empezado = true; job.resolve(true); } };
        const p = a.play();
        if (p && typeof p.then === 'function') p.then(empieza, e => acaba(e && e.name === 'NotAllowedError' ? 'bloqueado' : 'error'));
        else empieza();
      } catch (e) { acaba('error'); }
    });
  }

  let actual = null;
  function speak(text, tag, o) { return habla(text, tag, o || {}, false); }
  function stop() { if (actual) actual.fin('stop'); }
  // prueba = true (botón Probar): suena aunque el idioma esté desactivado y espera más al servicio.
  function habla(text, tag, o, prueba) {
    if (actual) actual.fin('stop');
    const job = { acabado: false, empezado: false, parar: null, resolve: null };
    job.fin = motivo => {
      if (job.acabado) return;
      job.acabado = true;
      if (actual === job) actual = null;
      if (job.parar) job.parar();
      job.resolve(motivo !== 'fail');
      if (typeof o.onend === 'function') { try { o.onend(motivo); } catch (e) { setTimeout(() => { throw e; }, 0); } }
    };
    actual = job;
    return new Promise(resolve => {
      job.resolve = resolve;
      corre(job, text, tag, o, prueba).catch(e => {
        if (typeof o._error === 'function') o._error(e);
        job.fin(job.empezado ? 'error' : 'fail');
      });
    });
  }
  async function corre(job, text, tag, o, prueba) {
    const t = normTag(tag), c0 = conf();
    if (!t || !c0 || !listo(c0) || (!prueba && c0.usar && c0.usar[t] === false)) throw fallo('config');
    const c = snap(c0), limpio = normText(text);
    if (!limpio) throw fallo('config');
    const trozos = trocea(limpio), pb = ritmo(o.rate);
    let sig = consigue(c, spec(c, t, trozos[0]));
    for (let i = 0; i < trozos.length; i++) {
      const pr = sig;
      pr.catch(() => {});
      let r;
      try { r = await (i === 0 ? plazo(pr, prueba ? T.synth + 1000 : T.first) : pr); } catch (e) {
        if (job.acabado) return;
        if (i === 0 && e && e.code === 'tiempo') anota(c, e);   // muy lento: un rato con la voz del móvil
        throw e;
      }
      if (job.acabado) return;
      // mientras suena un trozo se pide el siguiente
      sig = i + 1 < trozos.length ? consigue(c, spec(c, t, trozos[i + 1])) : null;
      if (sig) sig.catch(() => {});
      const fin = await suena(job, r.blob, pb, trozos[i].length);
      if (job.acabado) return;
      if (fin !== 'end') {
        if (!job.empezado) { if (fin === 'error') quitaDeCache(r.k); throw fallo('audio'); }
        job.fin(fin === 'bloqueado' ? 'error' : fin);
        return;
      }
    }
    job.fin('end');
  }

  // ---------- Descargar audio para usarlo sin conexión ----------
  async function prefetch(items, onProgress) {
    const c0 = conf(), res = { total: 0, hechos: 0, nuevos: 0, guardados: 0, fallos: 0, caracteres: 0, error: '', cancelado: false };
    if (!c0 || !listo(c0)) { res.error = MSG.config + '.'; return res; }
    const c = snap(c0), cola = [], vistos = new Set();
    for (const it of Array.isArray(items) ? items : []) {
      const t = it && normTag(it.tag);
      if (!t || c.usar[t] === false) continue;
      for (const tr of trocea(normText(it.text))) {
        const k = t + '\u0001' + tr;
        if (!tr || vistos.has(k)) continue;
        vistos.add(k);
        cola.push({ t, tr });
      }
    }
    res.total = cola.length;
    let i = 0, parar = false;
    const avisa = () => { if (typeof onProgress === 'function') { try { if (onProgress(Object.assign({}, res)) === false) parar = true; } catch (e) { /* nada */ } } };
    const obrero = async () => {
      while (!parar && i < cola.length) {
        const x = cola[i++];
        try {
          const r = await consigue(c, spec(c, x.t, x.tr));
          if (r.nuevo) { res.nuevos++; res.caracteres += x.tr.length; } else res.guardados++;
        } catch (e) {
          res.fallos++;
          res.error = mensaje(e);
          if (e && /^(clave|permiso|cuota|sinred|red|config)$/.test(e.code)) parar = true;
        }
        res.hechos++;
        avisa();
      }
    };
    avisa();
    await Promise.all([obrero(), obrero(), obrero()]);
    res.cancelado = res.hechos < res.total;
    return res;
  }

  // ---------- Tarjeta de Ajustes ----------
  const UI = { estado: null, msg: {}, carga: 0, el: null };
  const DEF = () => ({ proveedor: '', clave: '', region: '', voces: {}, velocidad: VEL, usar: { 'pl-PL': true, 'it-IT': true, 'es-ES': true } });
  function asegura(aj) {
    let c = aj.vozpro;
    if (!c || typeof c !== 'object' || Array.isArray(c)) c = aj.vozpro = DEF();
    const d = DEF();
    for (const k of Object.keys(d)) if (c[k] == null || typeof c[k] !== typeof d[k]) c[k] = d[k];
    if (!PROV[c.proveedor]) c.proveedor = '';
    return c;
  }
  const vivo = el => (UI.el && UI.el.isConnected ? UI.el : el);
  function muestra(tag) {
    if (tag === 'es-ES') {
      const K = root.Core || {};
      return (K.latinToSpanish ? K.latinToSpanish('Cōgitō, ergō sum.') : 'kóguito, érgo sum.') + ' ' + (K.greekToSpanish ? K.greekToSpanish('γνῶθι σεαυτόν.') : 'gnózi seautón.');
    }
    return { 'pl-PL': 'Dzień dobry! Miło mi Panią poznać.', 'it-IT': 'Buongiorno! Piacere di conoscerla.', 'el-GR': 'Καλημέρα! Χαίρω πολύ.' }[tag] || 'Hola.';
  }
  function estado(c) {
    const f = firma(snap(c));
    if (UI.estado && UI.estado.firma === f) return UI.estado;
    if (ULTIMO && ULTIMO.prov === c.proveedor) return { cls: 'err', txt: 'Último fallo: ' + mensaje(ULTIMO.e) };
    return { cls: 'muted', txt: '' };
  }
  function usoTxt(c) {
    const u = usage(), p = PROV[c.proveedor];
    if (!p) return u.chars ? 'Este mes: ' + fmtN(u.chars) + ' caracteres generados.' : '';
    return 'Este mes con ' + p.nombre + ': ' + fmtN(u.por[c.proveedor] || 0) + ' caracteres generados' + (p.gratis ? ' de ' + fmtN(p.gratis) + ' gratis.' : '.');
  }
  function cacheTxt() { const m = meta(); return m.n ? 'Guardados: ' + fmtN(m.n) + ' audios · ' + mb(m.bytes) : 'Aún no hay audio guardado.'; }
  function opciones(c, tag) {
    const p = PROV[c.proveedor], sel = typeof c.voces[tag] === 'string' ? c.voces[tag] : '';
    const l = (p.sinLista ? OA_VOCES.map((id, i) => ({ id, rank: i, label: id })) : listaGuardada(c.proveedor, tag)) || [];
    const auto = vozAuto(c, tag), a = l.find(v => v.id === auto);
    let h = `<option value="">Automática: ${esc(a ? a.label : p.corto(auto))}</option>`;
    if (sel && !l.some(v => v.id === sel)) h += `<option value="${esc(sel)}" selected>${esc(p.corto(sel))}</option>`;
    const orden = l.slice().sort((x, y) => x.rank - y.rank || String(x.label).localeCompare(String(y.label), 'es'));
    return h + orden.map(v => `<option value="${esc(v.id)}"${v.id === sel ? ' selected' : ''}>${esc(v.label)}</option>`).join('');
  }
  function pinta(el) {
    const c = asegura(el._vozpro.ajustes), p = PROV[c.proveedor];
    let h = '<h2>Voces premium</h2><p class="muted small">Voces más naturales de un servicio externo, con tu propia clave. La clave se guarda solo en este móvil y no sale en las copias. El audio queda guardado: repetirlo no cuesta y suena sin conexión.</p>';
    h += `<label class="field"><span>Servicio</span><select data-vp="proveedor"><option value="">Ninguno: voces del móvil</option>${Object.keys(PROV).map(id => `<option value="${id}"${id === c.proveedor ? ' selected' : ''}>${esc(PROV[id].etiqueta)}</option>`).join('')}</select></label>`;
    if (!p) h += '<p class="hint">Recomendado: Google Cloud. Suena natural en polaco y el uso normal de Glossa cabe en su plan gratuito.</p>';
    else {
      const ok = listo(c), est = estado(c);
      h += `<p class="hint">${esc(p.ayuda(host()))}</p>`;
      h += `<label class="field"><span>Clave de la API</span><input type="password" data-vp="clave" value="${esc(c.clave)}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(p.ph)}"></label>`;
      if (p.region) h += `<label class="field"><span>Región del recurso</span><input type="text" data-vp="region" value="${esc(c.region)}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="westeurope"></label>`;
      h += `<div class="row-btns">${p.sinLista ? '' : `<button class="btn small" type="button" data-vp-act="comprobar"${ok ? '' : ' disabled'}>Comprobar la clave</button>`}<span class="small ${est.cls}" data-vp-estado role="status">${esc(est.txt)}</span></div>`;
      for (const [tag, nombre] of FILAS) {
        h += `<div class="field"><span>${esc(nombre)}</span><select data-vp="voz" data-tag="${tag}" aria-label="Voz: ${esc(nombre)}">${opciones(c, tag)}</select>`
          + `<div class="row-btns" style="margin:4px 0 0"><label class="check" style="margin:0"><input type="checkbox" data-vp="usar" data-tag="${tag}" aria-label="Usar la voz premium: ${esc(nombre)}"${c.usar[tag] !== false ? ' checked' : ''}> Usar</label>`
          + `<button class="btn small" type="button" data-vp-act="probar" data-tag="${tag}" aria-label="Probar la voz: ${esc(nombre)}"${ok ? '' : ' disabled'}>Probar</button><span class="small muted" data-vp-msg="${tag}" role="status">${esc(UI.msg[tag] || '')}</span></div></div>`;
      }
      const v = num(c.velocidad, VEL);
      h += `<label class="field"><span>Velocidad: <strong data-vp-vel>${vel(v)}</strong></span><input type="range" min="0.7" max="1.2" step="0.05" value="${v}" data-vp="velocidad"></label>`;
      h += '<p class="hint">Si cambias la voz o la velocidad, el audio se vuelve a generar la próxima vez que suene.</p>';
    }
    h += `<p class="muted small" data-vp-uso>${esc(usoTxt(c))}</p><div class="row-btns"><button class="btn small ghost" type="button" data-vp-act="borrar">Borrar audio guardado</button><span class="small muted" data-vp-cache>${esc(cacheTxt())}</span></div>`;
    el.innerHTML = h;
  }
  function pie(el) {
    const d = vivo(el), c = asegura(d._vozpro.ajustes);
    const u = d.querySelector('[data-vp-uso]'), k = d.querySelector('[data-vp-cache]');
    if (u) u.textContent = usoTxt(c);
    if (k) k.textContent = cacheTxt();
  }
  function ponEstado(el, est) {
    UI.estado = est;
    const s = vivo(el).querySelector('[data-vp-estado]');
    if (s) { s.className = 'small ' + est.cls; s.textContent = est.txt; }
  }
  function botones(el) {   // activa «Comprobar» y «Probar» en cuanto hay clave escrita (aún sin guardar)
    const c = el._vozpro.ajustes.vozpro, p = PROV[c.proveedor];
    if (!p) return;
    const ki = el.querySelector('[data-vp="clave"]'), ri = el.querySelector('[data-vp="region"]');
    const ok = !!(ki && ki.value.trim()) && (!p.region || !!(ri && /^[a-z0-9]+$/i.test(ri.value.trim())));
    el.querySelectorAll('[data-vp-act="comprobar"], [data-vp-act="probar"]').forEach(b => { b.disabled = !ok; });
  }
  async function cargaVoces(el, forzar) {
    const c = snap(asegura(el._vozpro.ajustes)), p = PROV[c.proveedor];
    if (!p || p.sinLista || !listo(c)) return;
    const f = firma(c), yo = ++UI.carga;
    if (forzar) TODAS.firma = '';
    ponEstado(el, { firma: f, cls: 'muted', txt: 'Comprobando…' });
    let est;
    try {
      for (const [tag] of FILAS) guardaLista(c.proveedor, tag, await p.voces(c, tag));
      desbloquea();
      ULTIMO = null;
      est = { firma: f, cls: 'okmsg', txt: 'Funciona. Elige voz y pulsa Probar.' };
    } catch (e) {
      anota(c, e);
      est = { firma: f, cls: 'err', txt: 'No funciona: ' + mensaje(e) };
    }
    if (yo !== UI.carga) return;   // hay una comprobación más reciente
    const d = vivo(el), ahora = asegura(d._vozpro.ajustes);
    if (firma(snap(ahora)) !== f) return;
    d.querySelectorAll('select[data-vp="voz"]').forEach(s => { s.innerHTML = opciones(ahora, s.dataset.tag); });
    ponEstado(el, est);
  }
  async function probar(el, tag) {
    const msg = t => { UI.msg[tag] = t; const s = vivo(el).querySelector(`[data-vp-msg="${tag}"]`); if (s) s.textContent = t; };
    try { if (root.Voice && root.Voice.TTS) root.Voice.TTS.stop(); } catch (e) { /* nada */ }
    desbloquea();
    msg('Generando…');
    let err = null;
    const ok = await habla(muestra(tag), tag, {
      onend: m => { if (m !== 'fail') { msg(m === 'end' || m === 'stop' ? '' : 'Se ha cortado.'); pie(el); } },
      _error: e => { err = e; }
    }, true);
    if (ok) { if (UI.msg[tag] === 'Generando…') msg('Sonando…'); } else msg('No ha funcionado: ' + mensaje(err || (ULTIMO && ULTIMO.e)));
    pie(el);
  }
  function engancha(el) {
    el.addEventListener('change', ev => {
      const t = ev.target, k = t && t.dataset ? t.dataset.vp : '';
      if (!k || !el._vozpro) return;
      const c = asegura(el._vozpro.ajustes), guarda = el._vozpro.save;
      if (k === 'proveedor') {
        const nuevo = PROV[t.value] ? t.value : '', antes = c.proveedor, de = c.claveDe || antes;
        if (nuevo === antes) return;
        if (nuevo && c.clave && de && de !== nuevo) { c.clave = ''; c.claveDe = ''; }   // la clave de un servicio no viaja a otro
        c.proveedor = nuevo; c.voces = {};
        UI.estado = null; UI.msg = {};
        guarda(); pinta(el);
        if (listo(c) && !PROV[nuevo].sinLista) cargaVoces(el, false);
      } else if (k === 'clave') {
        const v = String(t.value || '').trim();
        if (v !== c.clave) { c.clave = v; c.claveDe = v ? c.proveedor : ''; UI.estado = null; guarda(); }
        botones(el);
        if (listo(c)) cargaVoces(el, true);
      } else if (k === 'region') {
        const v = String(t.value || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
        t.value = v;
        if (v !== c.region) { c.region = v; UI.estado = null; guarda(); }
        botones(el);
        if (listo(c)) cargaVoces(el, true);
      } else if (k === 'voz') { c.voces[t.dataset.tag] = t.value; guarda(); }
      else if (k === 'usar') { c.usar[t.dataset.tag] = !!t.checked; guarda(); }
      else if (k === 'velocidad') { c.velocidad = r2(clamp(num(t.value, VEL), 0.5, 2)); guarda(); }
    });
    el.addEventListener('input', ev => {
      const t = ev.target, k = t && t.dataset ? t.dataset.vp : '';
      if (k === 'velocidad') { const o = el.querySelector('[data-vp-vel]'); if (o) o.textContent = vel(num(t.value, VEL)); }
      else if (k === 'clave' || k === 'region') botones(el);
    });
    el.addEventListener('click', ev => {
      const b = ev.target && ev.target.closest ? ev.target.closest('[data-vp-act]') : null;
      if (!b || b.disabled || !el._vozpro) return;
      const act = b.dataset.vpAct;
      if (act === 'comprobar') cargaVoces(el, true);
      else if (act === 'probar') probar(el, b.dataset.tag);
      else if (act === 'borrar') {
        if (typeof root.confirm === 'function' && !root.confirm('¿Borrar todo el audio guardado? Se volverá a generar cuando lo escuches.')) return;
        clearCache().then(() => pie(el));
      }
    });
  }
  function renderSettings(el, ajustes, save) {
    if (!el || !ajustes || typeof ajustes !== 'object') return;
    asegura(ajustes);
    if (!fuente) fuente = () => ajustes.vozpro;
    el._vozpro = { ajustes, save: typeof save === 'function' ? save : () => {} };
    UI.el = el;
    pinta(el);
    if (!el._vozproOn) { el._vozproOn = true; engancha(el); }
    // Con clave y sin lista de voces todavía: se cargan solas (una vez por clave y sesión).
    const c = snap(ajustes.vozpro), p = PROV[c.proveedor];
    if (p && !p.sinLista && listo(c) && FILAS.some(([t]) => !listaGuardada(c.proveedor, t)) && !(UI.estado && UI.estado.firma === firma(c))) cargaVoces(el, false);
  }

  root.VozPro = {
    setConfigSource, enabledFor, speak, stop, prefetch, renderSettings, usage, clearCache, cacheInfo: meta, normText,
    // para las pruebas
    _t: T, _trocea: trocea,
    _reset() { desbloquea(); ULTIMO = null; UI.estado = null; UI.msg = {}; TODAS.firma = ''; if (actual) actual.fin('stop'); }
  };
})(window);
