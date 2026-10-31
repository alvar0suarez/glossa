// Glossa · voz: lectura en voz alta (TTS), reconocimiento de voz (STT) y grabadora.
(function (root) {
  'use strict';
  const synth = root.speechSynthesis;
  const tagOf = v => String(v.lang || '').replace('_', '-').toLowerCase();

  const TTS = {
    ok: !!(synth && root.SpeechSynthesisUtterance), voices: [], safety: null, onvoices: null,
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
      let done = false;
      const end = () => { if (done) return; done = true; clearTimeout(this.safety); if (o.onend) o.onend(); };
      const clean = String(text || '').replace(/[…«»"“”]/g, ' ').replace(/—/g, ', ').trim();
      if (!this.ok || !clean) { setTimeout(end, 300); return; }
      try {
        const u = new root.SpeechSynthesisUtterance(clean);
        u.lang = tag;
        const v = this.pick(tag, o.voice); if (v) u.voice = v;
        u.rate = o.rate || 0.9;
        u.onend = end; u.onerror = end;
        if (!o.queue) synth.cancel();
        synth.speak(u);
        clearTimeout(this.safety);
        this.safety = setTimeout(end, 2000 + clean.length * 120 / u.rate);
      } catch (e) { setTimeout(end, 300); }
    },
    stop() { clearTimeout(this.safety); if (this.ok) { try { synth.cancel(); } catch (e) { /* nada */ } } }
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
