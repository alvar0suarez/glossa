// Glossa · voz: lectura en voz alta (TTS), reconocimiento de voz (STT) y grabadora.
(function (root) {
  'use strict';
  const synth = root.speechSynthesis;
  const tagOf = v => String(v.lang || '').replace('_', '-').toLowerCase();
  const VP = () => root.VozPro;

  // Lectura en voz alta. Si hay voces premium (js/voz-pro.js) para ese idioma, suenan ellas; si fallan, la voz del móvil.
  // Una sola cola para las dos: sin o.queue se corta lo que esté sonando; con o.queue se espera a que acabe.
  // o.onend llega siempre una sola vez (al acabar, con error, al parar o por tiempo).
  const TTS = {
    ok: !!(synth && root.SpeechSynthesisUtterance), voices: [], safety: null, onvoices: null, cola: [], actual: null,
    load() {
      if (!this.ok) return;
      const set = () => { try { this.voices = synth.getVoices() || []; } catch (e) { this.voices = []; } if (this.onvoices) this.onvoices(); };
      set();
      try { synth.addEventListener('voiceschanged', set); } catch (e) { /* sin evento */ }
    },
    list(prefix) { return this.voices.filter(v => tagOf(v).indexOf(prefix) === 0); },
    pick(tag, pref) {
      const t = tag.toLowerCase(), list = this.list(t.slice(0, 2));
      return list.find(v => v.name === pref) ||
        list.find(v => tagOf(v) === t && /google/i.test(v.name)) ||
        list.find(v => tagOf(v) === t) || list.find(v => /google/i.test(v.name)) || list[0] || null;
    },
    speak(text, tag, o) {
      o = o || {};
      const job = { text, tag, o, done: false, cut: false, timer: 0 };
      job.end = () => {
        if (job.done) return;
        job.done = true;
        clearTimeout(job.timer);
        if (this.actual === job) this.actual = null;
        try { if (o.onend) o.onend(); } finally { this._next(); }
      };
      if (!o.queue) this._cut();
      this.cola.push(job);
      this._next();
    },
    stop() { clearTimeout(this.safety); this._cut(); },
    _next() {
      if (this.actual) return;
      const job = this.cola.shift();
      if (!job) return;
      this.actual = job;
      this._run(job);
    },
    // Corta lo que suena y vacía la cola. Sus onend llegan justo después, como con speechSynthesis.cancel().
    _cut() {
      const jobs = (this.actual ? [this.actual] : []).concat(this.cola.splice(0));
      this.actual = null;
      jobs.forEach(j => { j.cut = true; clearTimeout(j.timer); });
      const vp = VP();
      if (vp && vp.stop) { try { vp.stop(); } catch (e) { /* nada */ } }
      if (this.ok) { try { synth.cancel(); } catch (e) { /* nada */ } }
      jobs.forEach(j => setTimeout(j.end, 0));
    },
    _run(job) {
      const clean = String(job.text || '').replace(/[…«»"“”]/g, ' ').replace(/—/g, ', ').trim();
      if (!clean) { job.timer = setTimeout(job.end, 300); return; }
      const vp = VP();
      let pro = false;
      try { pro = !!(vp && vp.enabledFor && vp.enabledFor(job.tag)); } catch (e) { pro = false; }
      if (!pro) { this._device(job, clean); return; }
      const device = () => { if (!job.done && !job.cut && this.actual === job) this._device(job, clean); };
      let p = null;
      try { p = vp.speak(clean, job.tag, { rate: job.o.rate, onend: why => { if (why !== 'fail' && !job.cut) job.end(); } }); } catch (e) { p = null; }
      Promise.resolve(p).then(ok => { if (!ok) device(); }, device);
      // red de seguridad por si las voces premium no avisaran nunca
      job.timer = setTimeout(() => { if (this.actual === job) { try { vp.stop(); } catch (e) { /* nada */ } } job.end(); }, 30000 + clean.length * 250);
    },
    _device(job, clean) {
      const o = job.o;
      clearTimeout(job.timer);
      if (!this.ok) { job.timer = setTimeout(job.end, 300); return; }
      try {
        const u = new root.SpeechSynthesisUtterance(clean);
        u.lang = job.tag;
        const v = this.pick(job.tag, o.voice); if (v) u.voice = v;
        u.rate = o.rate || 0.9;
        u.onend = job.end; u.onerror = job.end;
        if (!o.queue) synth.cancel();
        synth.speak(u);
        this.safety = job.timer = setTimeout(job.end, 2000 + clean.length * 120 / u.rate);
      } catch (e) { job.timer = setTimeout(job.end, 300); }
    }
  };

  const SR = root.SpeechRecognition || root.webkitSpeechRecognition;
  const STT = {
    ok: !!SR, current: null,
    // Escucha una frase. o.onresult(alternativas[]), o.onerror(código), o.onend()
    listen(tag, o) {
      o = o || {};
      this.stop();
      if (!SR) { setTimeout(() => { if (o.onerror) o.onerror('no-support'); if (o.onend) o.onend(); }, 0); return { stop() {} }; }
      let r;
      try { r = new SR(); } catch (e) { setTimeout(() => { if (o.onerror) o.onerror('no-support'); if (o.onend) o.onend(); }, 0); return { stop() {} }; }
      r.lang = tag; r.interimResults = false; r.maxAlternatives = 5; r.continuous = false;
      let done = false, got = [], timer = null;
      const finish = err => {
        if (done) return; done = true; clearTimeout(timer);
        if (this.current === ctl) this.current = null;
        if (got.length) { if (o.onresult) o.onresult(got); } else if (o.onerror) o.onerror(err || 'no-speech');
        if (o.onend) o.onend();
      };
      r.onresult = ev => {
        const res = ev.results[ev.results.length - 1];
        if (!res) return;
        const alts = [];
        for (let i = 0; i < res.length; i++) if (res[i] && res[i].transcript) alts.push(res[i].transcript);
        if (alts.length) got = alts;
      };
      r.onerror = ev => finish((ev && ev.error) || 'error');
      r.onend = () => finish(null);
      const ctl = { stop() { try { r.stop(); } catch (e) { /* nada */ } } };
      timer = setTimeout(() => ctl.stop(), o.maxMs || 8000);
      this.current = ctl;
      try { r.start(); } catch (e) { finish('start-failed'); }
      return ctl;
    },
    stop() { if (this.current) { const c = this.current; this.current = null; c.stop(); } }
  };

  const REC = {
    ok: !!(root.navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia && root.MediaRecorder),
    mr: null, chunks: [], stream: null,
    get active() { return !!this.mr; },
    async start() {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.chunks = [];
      this.mr = new root.MediaRecorder(this.stream);
      this.mr.ondataavailable = e => { if (e.data && e.data.size) this.chunks.push(e.data); };
      this.mr.start();
    },
    stop() {
      return new Promise(resolve => {
        const mr = this.mr;
        if (!mr) { resolve(null); return; }
        mr.onstop = () => {
          const blob = new Blob(this.chunks, { type: mr.mimeType || 'audio/webm' });
          if (this.stream) this.stream.getTracks().forEach(t => t.stop());
          this.mr = null; this.stream = null;
          resolve(blob.size ? URL.createObjectURL(blob) : null);
        };
        try { mr.stop(); } catch (e) { this.mr = null; resolve(null); }
      });
    },
    cancel() { if (this.mr) { try { this.mr.stop(); } catch (e) { /* nada */ } } if (this.stream) this.stream.getTracks().forEach(t => t.stop()); this.mr = null; this.stream = null; }
  };

  root.Voice = { TTS, STT, REC };
})(window);
