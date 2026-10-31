// Glossa · interfaz: rutas, vistas y eventos.
(function () {
  'use strict';
  const K = window.Core, ST = window.Store, VO = window.Voice, AI = window.AI;
  const COURSES = window.COURSES, CONTENT = window.CONTENT;
  const ACTIVE = COURSES.filter(c => c.estado === 'activo' && CONTENT[c.id]);
  const courseOf = id => COURSES.find(c => c.id === id) || ACTIVE[0];
  const VERSION = window.GLOSSA_VERSION || 'dev';
  const START = '2026-11-02';
  // Disposición según el ancho real. Si el navegador simula una pantalla de escritorio en un móvil
  // (Chrome «Sitio de escritorio», p. ej. en la pantalla exterior del Fold), se amplía la página
  // para que se vea como en un móvil. Pone las clases .wide y .mid en <html>.
  const WIDE_Q = (() => {
    const fns = [], de = document.documentElement;
    const o = { matches: false, mid: false, zoom: 1, addEventListener(type, fn) { fns.push(fn); } };
    const touch = (navigator.maxTouchPoints || 0) > 0 || 'ontouchstart' in window;
    function measure() {
      const iw = window.innerWidth || de.clientWidth || 400, ih = window.innerHeight || de.clientHeight || 800;
      const s1 = (window.screen && screen.width) || iw, s2 = (window.screen && screen.height) || ih;
      const sw = iw > ih ? Math.max(s1, s2) : Math.min(s1, s2);
      let z = 1;
      if (touch && sw > 0 && iw > sw * 1.25) z = Math.min(4, Math.round(iw / sw * 100) / 100);
      const ew = iw / z, wide = ew >= 680, mid = wide && ew <= 900;
      const changed = wide !== o.matches || mid !== o.mid || z !== o.zoom;
      o.matches = wide; o.mid = mid; o.zoom = z;
      de.classList.toggle('wide', wide); de.classList.toggle('mid', mid);
      de.style.zoom = z === 1 ? '' : String(z);
      de.style.setProperty('--z', String(z));
      return changed;
    }
    measure();
    let t = 0;
    window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(() => { if (measure()) fns.forEach(f => f()); }, 120); });
    return o;
  })();

  const $ = (s, el) => (el || document).querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em class="t">$1</em>');
  const todayStr = () => K.localDateStr();
  const today = () => K.todayNum();
  const isStandalone = () => (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent || '');
  const lower = c => courseOf(c).nombre.toLowerCase();

  const I = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    cards: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="13" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 4h11a2 2 0 0 1 2 2v11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    talk: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20V11M12 20V5M19 20v-7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    gear: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M5.5 18.5l2.1-2.1M16.4 7.6l2.1-2.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    mic: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    camera: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h3l2-2.5h6L17 8h3v11H4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
    rec: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="6" fill="currentColor"/></svg>',
    stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="6.5" width="11" height="11" rx="2" fill="currentColor"/></svg>'
  };

  // ---------------- Datos ----------------
  function defaultFor(k) {
    if (k === 'perfil') return {
      cursoActivo: 'pl', nombre: '', pareja: { nombre: '', familia: '' }, cursos: {},
      ajustes: {
        nuevas: { pl: 30, la: 20 }, rate: 0.9, pausa: 4, voces: { pl: '', es: '' }, autoAudio: true, escucharme: true,
        drill: { pl: 'producir', la: 'entender' }, ia: { key: '', modelo: 'claude-sonnet-5-5', rapido: 'claude-haiku-5-5' }
      },
      ui: { ocultarInstalar: false, ultimaCopia: '' }
    };
    if (/-tarjetas$/.test(k)) return { c: {}, nh: { d: 0, n: 0 } };
    if (/-propias$/.test(k)) return { c: {} };
    if (/-generadas$/.test(k)) return { l: [] };
    return { lec: {}, lee: {}, min: {}, ctrl: {}, err: [], par: { ultima: '', n: 0 } };
  }
  const P = () => ST.doc('perfil');
  const L = c => ST.doc(c);
  const T = c => ST.doc(c + '-tarjetas');
  const PR = c => ST.doc(c + '-propias');
  const G = c => ST.doc(c + '-generadas');
  const inicio = c => (P().cursos[c] && P().cursos[c].inicio) || START;
  const curWeek = c => K.weekOf(inicio(c), todayStr());
  const nuevasDia = c => (P().ajustes.nuevas[c] != null ? P().ajustes.nuevas[c] : 20);
  const ella = () => (P().pareja.nombre || '').trim() || 'tu chica';
  const aiReady = () => !!(P().ajustes.ia.key || '').trim();

  // ---------------- Contenido ----------------
  const C = c => CONTENT[c];
  for (const k in CONTENT) if (Array.isArray(CONTENT[k].semanas)) CONTENT[k].semanas.sort((a, b) => a.n - b.n);
  const weekData = (c, n) => (C(c).semanas || []).find(s => s.n === n) || null;
  function allLessons(c) {
    const out = [];
    for (const s of C(c).semanas) s.lecciones.forEach((l, i) => out.push(Object.assign({ semana: s.n, num: i + 1 }, l)));
    return out;
  }
  function allReadings(c) {
    const out = [];
    for (const s of C(c).semanas) (s.lecturas || []).forEach(r => out.push(Object.assign({ semana: s.n }, r)));
    for (const g of G(c).l) out.push(Object.assign({ gen: true }, g));
    return out;
  }
  const lessonById = (c, id) => allLessons(c).find(l => l.id === id) || null;
  const readingById = (c, id) => allReadings(c).find(r => r.id === id) || null;
  const nextLesson = c => allLessons(c).find(l => !L(c).lec[l.id]) || null;
  const nextReading = c => allReadings(c).find(r => !L(c).lee[r.id] && !r.antiguo) || allReadings(c).find(r => !L(c).lee[r.id]) || null;
  function courseOfItem(id) {
    for (const co of ACTIVE) if (lessonById(co.id, id) || readingById(co.id, id)) return co.id;
    return null;
  }
  function cardDefs(c) {
    const defs = new Map();
    for (const l of allLessons(c)) {
      if (!L(c).lec[l.id]) continue;
      l.vocab.forEach((v, i) => defs.set(l.id + ':' + i, { id: l.id + ':' + i, t: v[0], es: v[1], src: l.titulo }));
    }
    for (const id of Object.keys(PR(c).c)) { const x = PR(c).c[id]; defs.set(id, { id, t: x.t, es: x.es, src: x.src || 'Añadida por ti' }); }
    return defs;
  }
  function newToday(c) { const nh = T(c).nh; return nh && nh.d === today() ? nh.n : 0; }
  function cardCounts(c) {
    const defs = cardDefs(c), st = T(c).c, td = today();
    let due = 0, fresh = 0, learned = 0;
    for (const id of defs.keys()) { const s = st[id]; if (s) { if (s[3] > 0 || s[4] > 0) learned++; if (s[0] <= td) due++; } else fresh++; }
    return { due, fresh: Math.min(fresh, Math.max(0, nuevasDia(c) - newToday(c))), learned, total: defs.size };
  }
  function knownWords(c, max) {
    const defs = cardDefs(c), st = T(c).c, out = [];
    for (const [id, d] of defs) if (st[id]) out.push(d.t.replace(/…/g, ''));
    const nl = nextLesson(c);
    if (nl) nl.vocab.forEach(v => out.push(v[0].replace(/…/g, '')));
    return Array.from(new Set(out)).slice(0, max || 160);
  }
  function hardestCards(c, n) {
    const defs = cardDefs(c), st = T(c).c;
    return Array.from(defs.values()).filter(d => st[d.id] && (st[d.id][4] > 0 || st[d.id][2] < 230))
      .sort((a, b) => (st[b.id][4] - st[a.id][4]) || (st[a.id][2] - st[b.id][2])).slice(0, n);
  }
  function addCard(c, t, es, src) {
    t = String(t || '').trim(); es = String(es || '').trim();
    if (!t || !es) return false;
    const id = 'p:' + K.hash(K.normKey(t));
    if (PR(c).c[id]) return false;
    PR(c).c[id] = { t: t.slice(0, 160), es: es.slice(0, 240), src: src || 'Añadida por ti', d: todayStr() };
    ST.mark(c + '-propias');
    return true;
  }

  // ---------------- Tiempo de estudio ----------------
  const ACT = { kind: null, c: 'pl', acc: 0, touch: Date.now() };
  const touch = () => { ACT.touch = Date.now(); };
  function addSeconds(c, kind, s) {
    const m = L(c).min, d = todayStr();
    m[d] = m[d] || {};
    m[d][kind] = Math.max(0, (m[d][kind] || 0) + Math.round(s));
    ST.mark(c);
  }
  function commitAct() { if (ACT.kind && ACT.acc > 0) { addSeconds(ACT.c, ACT.kind, ACT.acc); ACT.acc = 0; } }
  function setAct(kind) { if (ACT.kind === kind && ACT.c === ui.course) return; commitAct(); ACT.kind = kind; ACT.c = ui.course; touch(); }
  setInterval(() => { if (ACT.kind && document.visibilityState === 'visible' && Date.now() - ACT.touch < 120000) ACT.acc += 15; }, 15000);
  setInterval(() => { if (ACT.acc >= 180) commitAct(); }, 60000);
  function minutes(c, kind, dayS) {
    const d = L(c).min[dayS || todayStr()] || {};
    let s = kind ? (d[kind] || 0) : Object.values(d).reduce((a, b) => a + b, 0);
    if ((!dayS || dayS === todayStr()) && ACT.c === c && ACT.kind && (!kind || ACT.kind === kind)) s += ACT.acc;
    return Math.round(s / 60);
  }
  function weekMinutes(c) {
    // Bloque de 7 días desde el inicio; la semana 1 incluye lo estudiado antes de empezar.
    const s0 = K.dayNum(inicio(c)), t = today(), diff = t - s0;
    let from = diff < 0 ? t - 6 : s0 + Math.floor(diff / 7) * 7;
    if (diff >= 0 && diff < 7) from = s0 - 7;
    let s = 0;
    for (let d = from; d <= t; d++) s += minutes(c, null, K.dayStr(d));
    return s;
  }
  function streak() {
    const tot = ds => ACTIVE.reduce((a, co) => a + minutes(co.id, null, ds), 0);
    let n = 0, d = today();
    if (tot(K.dayStr(d)) < 20) d -= 1;
    while (n < 400 && tot(K.dayStr(d)) >= 20) { n++; d--; }
    return n;
  }

  // ---------------- Voz ----------------
  function say(c, text, o) {
    o = Object.assign({ rate: P().ajustes.rate }, o || {});
    const co = courseOf(c);
    if (co.voz === 'la-clasico') {
      o.voice = P().ajustes.voces.es;
      VO.TTS.speak(K.latinToSpanish(o.antiguo ? K.modernizeLatin(text) : text), 'es-ES', o);
      return;
    }
    o.voice = P().ajustes.voces[c] || '';
    VO.TTS.speak(text, co.voz || 'es-ES', o);
  }
  const sayEs = (text, o) => VO.TTS.speak(text, 'es-ES', Object.assign({ rate: P().ajustes.rate, voice: P().ajustes.voces.es }, o || {}));
  const sayBtn = (c, text, label, antiguo) => `<button class="say" type="button" data-say="${esc(text)}" data-c="${c}"${antiguo ? ' data-antiguo="1"' : ''} aria-label="${esc(label || 'Escuchar')}">${I.play}</button>`;
  const canHear = c => VO.STT.ok && !!courseOf(c).oido;
  function sttError(err) {
    if (err === 'not-allowed' || err === 'service-not-allowed') return 'Sin permiso para el micrófono. Actívalo en los ajustes del navegador para esta app.';
    if (err === 'no-speech') return 'No te he oído. Pulsa y habla cerca del móvil.';
    if (err === 'network') return 'El reconocimiento de voz necesita conexión a internet.';
    if (err === 'no-support') return 'Este navegador no reconoce la voz. Usa Chrome.';
    if (err === 'language-not-supported') return 'El móvil no reconoce este idioma.';
    return 'No he podido escucharte (' + err + ').';
  }
  const verdict = s => s >= 0.85 ? ['okmsg', '¡Bien dicho!'] : s >= 0.6 ? ['midmsg', 'Casi. Escucha el modelo y repite.'] : ['badmsg', 'Otra vez: escucha el modelo.'];

  // ---------------- Estado de la interfaz ----------------
  const ui = {
    view: 'hoy', param: null, course: 'pl', week: null, ex: {}, word: null, sheet: null, update: null, installEvt: null,
    gen: { busy: false, err: '' }, texto: { busy: false, err: '', progress: '' }, rec: {}, showDrill: false, showTr: {}, backup: null, iaTest: ''
  };
  const ACT_OF = { repasar: 'rep', leccion: 'lec', lectura: 'lee', drill: 'aud', grabar: 'hab', chat: 'con', texto: 'lee' };
  const VIEWS = ['hoy', 'aprender', 'leccion', 'lectura', 'texto', 'repasar', 'hablar', 'drill', 'grabar', 'chat', 'escucha', 'pareja', 'progreso', 'ajustes'];

  function setCourse(c) {
    if (!CONTENT[c] || c === ui.course) return;
    commitAct(); drillStop(); stopRec();
    ui.course = c; P().cursoActivo = c; ST.mark('perfil');
    ui.week = null; ses = null; DR.items = [];
    const a = ACT_OF[ui.view]; if (a) { ACT.kind = null; setAct(a); }
  }
  function parseHash() {
    const h = decodeURIComponent((location.hash || '#hoy').slice(1));
    const i = h.indexOf('/');
    return i < 0 ? { view: h || 'hoy', param: null } : { view: h.slice(0, i), param: h.slice(i + 1) };
  }
  function go(view, param) {
    const h = '#' + view + (param ? '/' + encodeURIComponent(param) : '');
    if (location.hash === h) route(); else location.hash = h;
  }
  function route() {
    const r = parseHash();
    VO.TTS.stop(); drillStop(); VO.STT.stop(); stopRec();
    ui.view = VIEWS.indexOf(r.view) >= 0 ? r.view : 'hoy';
    ui.param = r.param; ui.word = null; ui.sheet = null;
    if ((ui.view === 'leccion' || ui.view === 'lectura') && ui.param) { const c = courseOfItem(ui.param); if (c) setCourse(c); }
    if (ui.view === 'pareja' && ui.course !== 'pl') setCourse('pl');
    const a = ACT_OF[ui.view];
    if (a) setAct(a); else { commitAct(); ACT.kind = null; }
    render();
    window.scrollTo(0, 0);
  }
  function toast(msg) {
    const el = $('#toast');
    if (el) { el.textContent = msg; el.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => { el.hidden = true; }, 3400); }
  }

  // ---------------- Marco ----------------
  const NAV = [['hoy', I.home, 'Hoy'], ['aprender', I.book, 'Aprender'], ['repasar', I.cards, 'Repasar'], ['hablar', I.talk, 'Hablar'], ['progreso', I.chart, 'Progreso']];
  const TAB_OF = { leccion: 'aprender', lectura: 'aprender', texto: 'aprender', drill: 'hablar', grabar: 'hablar', chat: 'hablar', escucha: 'hablar', pareja: 'hablar', ajustes: 'progreso' };
  function render() {
    document.body.dataset.course = ui.course;
    document.body.classList.toggle('sheet-open', !!(ui.word && ui.view === 'lectura' && !WIDE_Q.matches));
    $('#app').innerHTML = `<div class="shell">${rail()}<div class="content">${topbar()}<div id="status" role="status">${statusHtml()}</div><main id="main" class="v-${ui.view}">${viewHtml()}</main></div>${tabs()}</div><div id="toast" class="toast" hidden></div>${sheetHtml()}`;
    if (ui.view === 'chat') { const box = $('#chatlog'); if (box) box.scrollTop = box.scrollHeight; }
  }
  function renderStatus() { const el = $('#status'); if (el) el.innerHTML = statusHtml(); }
  function navBtn(n, cls) {
    const on = ui.view === n[0] || TAB_OF[ui.view] === n[0];
    let extra = '';
    if (n[0] === 'repasar') { const cc = cardCounts(ui.course); const x = cc.due + cc.fresh; if (x) extra = `<b class="badge">${x}</b>`; }
    return `<button class="${on ? 'on' : ''}" data-go="${n[0]}">${n[1]}<span>${n[2]}</span>${extra}</button>`;
  }
  function rail() {
    const items = NAV.concat([['ajustes', I.gear, 'Ajustes']]).map(n => {
      const on = ui.view === n[0] || (n[0] !== 'progreso' && TAB_OF[ui.view] === n[0]);
      let extra = '';
      if (n[0] === 'repasar') { const cc = cardCounts(ui.course); const x = cc.due + cc.fresh; if (x) extra = `<b class="badge">${x}</b>`; }
      return `<button class="${on ? 'on' : ''}" data-go="${n[0]}">${n[1]}<span>${n[2]}</span>${extra}</button>`;
    }).join('');
    return `<aside class="rail" aria-label="Navegación"><div class="rail-brand"><img src="icons/icon-192.png" alt="" class="logo"><span>Glossa</span></div>
      <div class="rail-courses" role="group" aria-label="Idioma">${ACTIVE.map(co => `<button class="rc ${co.id === ui.course ? 'on' : ''}" data-course="${co.id}" data-course-set="${co.id}" aria-pressed="${co.id === ui.course}"><i class="dot"></i>${esc(co.nombre)}</button>`).join('')}<button class="rc more" data-act="courses">Más idiomas</button></div>
      <nav class="rail-nav">${items}</nav></aside>`;
  }
  function topbar() {
    const co = courseOf(ui.course);
    return `<header class="top"><div class="brand"><img src="icons/icon-192.png" alt="" class="logo">Glossa</div>
      <button class="course-btn" data-act="courses" aria-haspopup="dialog"><i class="dot"></i>${esc(co.nombre)}<span class="chev" aria-hidden="true">▾</span></button>
      <button class="icon-btn" data-go="ajustes" aria-label="Ajustes">${I.gear}</button></header>`;
  }
  function tabs() { return `<nav class="tabs" aria-label="Secciones">${NAV.map(n => navBtn(n, 'tabs')).join('')}</nav>`; }
  function statusHtml() {
    let h = '';
    if (ST.error) h += `<p class="banner warn">${esc(ST.error)}</p>`;
    if (ui.update) h += `<div class="banner row-between"><span>Hay una versión nueva de Glossa.</span><button class="btn small primary" data-act="update">Actualizar</button></div>`;
    return h;
  }
  function viewHtml() {
    switch (ui.view) {
      case 'aprender': return vAprender();
      case 'leccion': return vLeccion();
      case 'lectura': return vLectura();
      case 'texto': return vTexto();
      case 'repasar': return vRepasar();
      case 'hablar': return vHablar();
      case 'drill': return vDrill();
      case 'grabar': return vGrabar();
      case 'chat': return vChat();
      case 'escucha': return vEscucha();
      case 'pareja': return vPareja();
      case 'progreso': return vProgreso();
      case 'ajustes': return vAjustes();
      default: return vHoy();
    }
  }
  function sheetHtml() {
    if (ui.sheet === 'courses') {
      return `<div class="overlay" data-act="sheet-close"></div><div class="sheet" role="dialog" aria-label="Elegir idioma"><div class="sheet-in"><div class="sheet-top"><strong>Tus idiomas</strong><button class="x" data-act="sheet-close" aria-label="Cerrar">×</button></div>
        <ul class="course-list">${COURSES.map(co => co.estado === 'activo' && CONTENT[co.id]
          ? `<li><button class="course-row ${co.id === ui.course ? 'on' : ''}" data-course="${co.id}" data-course-set="${co.id}"><i class="dot"></i><span><strong>${esc(co.nombre)}</strong><span class="muted">${esc(co.meta)} · semana ${curWeek(co.id)} de 8</span></span></button></li>`
          : `<li><div class="course-row off"><i class="dot"></i><span><strong>${esc(co.nombre)}</strong><span class="muted">Próximamente. Pídeselo a Claude y se añadirá aquí.</span></span></div></li>`).join('')}</ul></div></div>`;
    }
    if (ui.word && ui.view === 'lectura' && !WIDE_Q.matches) return `<div class="sheet word-sheet" role="dialog" aria-label="Traducción"><div class="sheet-in">${wordPanel()}</div></div>`;
    return '';
  }

  // ---------------- Hoy ----------------
  const TAREAS = {
    pl: [['rep', 'Tarjetas', 20, 'repasar'], ['aud', 'Audio para hablar', 30, 'drill'], ['lec', 'Lección del día', 60, 'leccion'], ['esc', 'Escucha nativa', 60, 'escucha'], ['lee', 'Lectura', 30, 'lectura'], ['con', 'Conversación', 45, 'chat']],
    otro: [['rep', 'Tarjetas', 20, 'repasar'], ['lee', 'Lectura', 75, 'lectura'], ['lec', 'Lección y ejercicios', 30, 'leccion'], ['con', 'Escribir y hablar', 30, 'chat'], ['aud', 'Escucha', 25, 'drill']]
  };
  const tasksFor = c => TAREAS[c] || TAREAS.otro;
  function parEstado() {
    const p = L('pl').par, td = today();
    if (!p.ultima) return { due: true, hoy: false, next: td };
    const last = K.dayNum(p.ultima);
    return { due: td - last >= 2, hoy: last === td, next: last + 2 };
  }
  function hoyCol(c) {
    const co = courseOf(c), w = curWeek(c), titles = C(c).semanasTitulos;
    const tasks = tasksFor(c);
    const goal = tasks.reduce((a, t) => a + t[2], 0) + (c === 'pl' ? 15 : 0);
    const done = minutes(c);
    const nl = nextLesson(c), nr = nextReading(c), cc = cardCounts(c);
    const sub = {
      rep: cc.due + cc.fresh ? `${cc.due + cc.fresh} para hoy` : (cc.total ? 'Todo al día' : 'Termina una lección para tener tarjetas'),
      aud: c === 'pl' ? 'Frases de tus lecciones, sin mirar la pantalla' : 'Escucha y entiende tus frases',
      lec: nl ? nl.titulo : 'Lecciones disponibles hechas',
      esc: 'Vídeos y podcasts de polacos de verdad',
      lee: nr ? nr.titulo : 'Crea una lectura nueva',
      con: aiReady() ? 'Con Claude, sobre los temas de la semana' : 'Necesita tu clave de Claude (Ajustes)'
    };
    const target = { leccion: nl ? nl.id : '', lectura: nr ? nr.id : '' };
    let h = `<section class="hoy-col" data-course="${c}"><div class="hero"><p class="eyebrow">${esc(co.nombre)} · semana ${w} de 8 · ${esc(K.weekRange(inicio(c), w))}</p><h2 class="hero-title">${esc(titles[w - 1])}</h2>`;
    if (co.fechaMeta) {
      const dd = K.dayNum(co.fechaMeta) - today();
      h += `<p class="sub">${dd > 0 ? `Faltan <strong>${dd} días</strong> para ${esc(co.textoFecha)} con la familia de ${esc(ella())}.` : dd === 0 ? `<strong>Hoy es ${esc(co.textoFecha)}.</strong> Wesołych Świąt!` : 'Después de Navidad: a consolidar.'}</p>`;
    } else h += `<p class="sub">${esc(co.meta)}.</p>`;
    h += `<div class="meter"><div class="meter-top"><span>Hoy</span><span class="num">${done} / ${goal} min</span></div><div class="bar"><i style="width:${Math.min(100, Math.round(done / goal * 100))}%"></i></div></div></div>`;
    if (K.dayNum(todayStr()) < K.dayNum(inicio(c))) h += `<p class="hint">Empiezas el ${esc(K.dayLabel(K.dayNum(inicio(c)), today()))}. Puedes adelantar ya la semana 1.</p>`;
    if (!weekData(c, w)) h += `<p class="banner">La semana ${w} aún no está en la app. Pídesela a Claude y aparecerá al actualizar. Mientras, repasa y crea lecturas.</p>`;
    h += '<ol class="tasks">';
    for (const [k, name, m, view] of tasks) {
      const got = minutes(c, k), pct = Math.min(100, Math.round(got / m * 100));
      h += `<li class="task${pct >= 100 ? ' done' : ''}"><button class="task-go" data-go="${view}" data-param="${esc(target[view] || '')}" data-course-go="${c}"><span class="task-main"><strong>${esc(name)}</strong><span class="muted">${esc(sub[k])}</span></span><span class="task-min num">${pct >= 100 ? I.check : ''}${got}/${m} min</span></button><div class="bar thin"><i style="width:${pct}%"></i></div></li>`;
    }
    if (c === 'pl') {
      const pe = parEstado(), got = minutes('pl', 'par');
      if (pe.hoy || pe.due) h += `<li class="task par${pe.hoy ? ' done' : ''}"><button class="task-go" data-go="pareja" data-course-go="pl"><span class="task-main"><strong>Con ${esc(ella())}</strong><span class="muted">${pe.hoy ? 'Hecha hoy' : 'Toca hoy: 15 minutos'}</span></span><span class="task-min num">${pe.hoy ? I.check : ''}${got}/15 min</span></button></li>`;
    }
    h += '</ol>';
    if (c === 'pl') { const pe = parEstado(); if (!pe.hoy && !pe.due) h += `<p class="hint">Próxima sesión con ${esc(ella())}: ${esc(K.dayLabel(pe.next, today()))}.</p>`; }
    return h + '</section>';
  }
  function vHoy() {
    let h = '<h1 class="sr">Hoy</h1>';
    if (!isStandalone() && !P().ui.ocultarInstalar) {
      const how = ui.installEvt ? `<button class="btn small primary" data-act="install">Instalar</button>` : `<span class="muted small">${isIOS ? 'Safari: Compartir › Añadir a pantalla de inicio.' : 'Chrome: menú ⋮ › Instalar aplicación.'}</span>`;
      h += `<div class="banner install"><div><strong>Instala Glossa en tu móvil</strong><p class="muted small">Se abre como una app, a pantalla completa y sin conexión.</p></div><div class="row-btns">${how}<button class="btn small ghost" data-act="hide-install">Ahora no</button></div></div>`;
    }
    if (WIDE_Q.matches && ACTIVE.length > 1) {
      h += `<div class="hoy-grid">${ACTIVE.map(co => hoyCol(co.id)).join('')}</div>`;
    } else {
      h += hoyCol(ui.course);
      const others = ACTIVE.filter(co => co.id !== ui.course);
      if (others.length) h += `<div class="others">${others.map(co => `<button class="other" data-course="${co.id}" data-course-set="${co.id}"><i class="dot"></i>${esc(co.nombre)} <span class="num">${minutes(co.id)} min hoy</span><span aria-hidden="true">›</span></button>`).join('')}</div>`;
    }
    h += `<p class="hint center">Racha: <strong>${streak()} días</strong> seguidos con al menos 20 minutos. El tiempo se cuenta solo mientras usas cada sección.</p>`;
    return h;
  }

  // ---------------- Aprender ----------------
  function readingRow(c, r) {
    const done = L(c).lee[r.id];
    return `<li><button class="row${done ? ' done' : ''}" data-go="lectura" data-param="${esc(r.id)}"><span class="n num">${done ? I.check : (r.gen ? (r.origen === 'propio' ? 'TÚ' : 'IA') : 'L')}</span><span class="row-main"><strong class="t">${esc(r.titulo)}</strong><span class="muted">${esc(r.nivel || 'Hecha para ti')}${done ? ' · leída' : ''}</span></span></button></li>`;
  }
  function vAprender() {
    const c = ui.course, cw = curWeek(c), w = ui.week || cw, titles = C(c).semanasTitulos;
    let h = `<h1 class="page">Aprender ${esc(lower(c))}</h1><div class="weeks" role="tablist" aria-label="Semanas">`;
    for (let i = 1; i <= 8; i++) h += `<button role="tab" class="${i === w ? 'on' : ''} ${weekData(c, i) ? '' : 'empty'} ${i === cw ? 'cur' : ''}" aria-selected="${i === w}" data-act="week" data-n="${i}">${i}</button>`;
    h += `</div><h2>Semana ${w}: ${esc(titles[w - 1])}</h2><p class="muted small">${esc((C(c).programa || [])[w - 1] || '')}</p>`;
    const wd = weekData(c, w);
    if (!wd) h += `<p class="banner">Esta semana aún no está en la app. Pídesela a Claude («prepara la semana ${w} de ${esc(lower(c))} en Glossa») y aparecerá al actualizar.</p>`;
    else {
      h += `<div class="two"><div><h3>Lecciones</h3><ol class="list">`;
      wd.lecciones.forEach((l, i) => {
        const done = L(c).lec[l.id];
        h += `<li><button class="row${done ? ' done' : ''}" data-go="leccion" data-param="${l.id}"><span class="n num">${done ? I.check : i + 1}</span><span class="row-main"><strong>${esc(l.titulo)}</strong><span class="muted">${l.min} min · ${l.vocab.length} tarjetas${done ? ' · hecha' : ''}</span></span></button></li>`;
      });
      h += `</ol></div><div><h3>Lecturas</h3><ol class="list">${(wd.lecturas || []).map(r => readingRow(c, Object.assign({ semana: w }, r))).join('')}</ol></div></div>`;
    }
    const gens = G(c).l;
    h += `<h2>Tus lecturas</h2>`;
    h += gens.length ? `<ol class="list">${gens.map(r => readingRow(c, Object.assign({ gen: true }, r))).join('')}</ol>` : `<p class="muted">Aún no tienes. Pide una a Claude o trae un texto tuyo.</p>`;
    h += `<div class="card-grid"><div class="card"><p><strong>Una lectura nueva para ti</strong></p><p class="muted small">Claude escribe un texto de tu nivel con las palabras que ya sabes, con traducción palabra por palabra.</p>
      <button class="btn primary" data-act="gen-reading" ${ui.gen.busy ? 'disabled' : ''}>${ui.gen.busy ? 'Escribiendo… (hasta un minuto)' : 'Crear lectura'}</button>${ui.gen.err ? `<p class="err">${esc(ui.gen.err)}</p>` : ''}</div>
      <div class="card"><p><strong>Tu propio texto</strong></p><p class="muted small">Pega un párrafo o haz una foto a una página${c === 'la' ? ' (también impresos antiguos)' : ''}: se convierte en una lectura con cada palabra explicada.</p><button class="btn" data-go="texto">Añadir texto o foto</button></div></div>`;
    return h;
  }

  // ---------------- Lección ----------------
  function blockHtml(c, b) {
    if (b.t === 'p') return `<p>${fmt(b.x)}</p>`;
    if (b.t === 'nota') return `<aside class="note">${fmt(b.x)}</aside>`;
    if (b.t === 'ej') return `<ul class="examples">${b.items.map(it => `<li>${sayBtn(c, it[0])}<span><span class="t">${esc(it[0])}</span><span class="muted">${esc(it[1])}</span></span></li>`).join('')}</ul>`;
    if (b.t === 'tabla') {
      const aud = b.audio || [];
      return `<div class="tablewrap"><table><thead><tr>${b.cab.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${b.filas.map(f => `<tr>${f.map((cell, j) => `<td>${aud.indexOf(j) >= 0 ? `<span class="cellsay">${sayBtn(c, cell)}<span class="t">${esc(cell)}</span></span>` : esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    }
    return '';
  }
  function exState(k) { ui.ex[k] = ui.ex[k] || { pick: null, built: [], checked: false }; return ui.ex[k]; }
  function exerciseHtml(c, lid, e, i) {
    const key = lid + '#' + i, st = exState(key);
    if (e.t === 'mc' || e.t === 'oir') {
      const order = K.shuffle(e.ops.map((_, j) => j), K.hash(lid).length + i * 7 + 3);
      const q = e.t === 'oir' ? `<div class="qline">${sayBtn(c, e.x, 'Escuchar la palabra')}<span>Escucha y elige lo que oyes</span></div>` : `<p class="q">${fmt(e.q)}</p>`;
      const opts = order.map(j => {
        let cls = '';
        if (st.pick != null) { if (j === e.ok) cls = 'ok'; else if (j === st.pick) cls = 'bad'; }
        return `<button class="opt ${cls}" data-act="ex-pick" data-k="${esc(key)}" data-j="${j}" ${st.pick != null ? 'disabled' : ''}>${esc(e.ops[j])}</button>`;
      }).join('');
      return `<div class="ex">${q}<div class="opts">${opts}</div></div>`;
    }
    if (e.t === 'orden') {
      const tokens = e.x.split(' ');
      const pool = K.shuffle(tokens.map((_, j) => j), K.hash(e.x).length + 7);
      const used = new Set(st.built);
      const ok = st.checked && K.normSentence(st.built.map(j => tokens[j]).join(' ')) === K.normSentence(e.x);
      return `<div class="ex"><p class="q">Ordena: «${esc(e.es)}»</p><div class="built t" aria-live="polite">${st.built.map((j, n) => `<button class="chip on" data-act="ex-unbuild" data-k="${esc(key)}" data-n="${n}">${esc(tokens[j])}</button>`).join('') || '<span class="muted">Toca las palabras en orden</span>'}</div>
        <div class="pool t">${pool.map(j => `<button class="chip" data-act="ex-build" data-k="${esc(key)}" data-j="${j}" ${used.has(j) ? 'disabled' : ''}>${esc(tokens[j])}</button>`).join('')}</div>
        <div class="exfoot"><button class="btn small" data-act="ex-check" data-k="${esc(key)}" ${st.built.length ? '' : 'disabled'}>Comprobar</button>${st.checked ? `<span class="${ok ? 'okmsg' : 'badmsg'}">${ok ? 'Correcto' : 'Casi: ' + esc(e.x)}</span>${sayBtn(c, e.x)}` : ''}</div></div>`;
    }
    if (e.t === 'decir') {
      const hear = canHear(c);
      let res = '';
      if (st.err) res += `<p class="err small">${esc(st.err)}</p>`;
      if (st.heard != null) { const v = verdict(st.score); res += `<p class="heard">Te he oído: «<span class="t">${esc(st.heard)}</span>»</p><p class="${v[0]}">${v[1]}</p>`; }
      if (st.reveal || st.heard != null) res += `<p class="answer"><span class="t">${esc(e.x)}</span>${sayBtn(c, e.x)}</p>`;
      return `<div class="ex"><p class="q">Dilo en ${esc(lower(c))}: «${esc(e.es)}»</p><div class="exfoot">${hear ? `<button class="btn mic ${st.listening ? 'on' : ''}" data-act="ex-say" data-k="${esc(key)}" data-x="${esc(e.x)}" ${st.listening ? 'disabled' : ''}>${I.mic}${st.listening ? 'Escuchando…' : 'Hablar'}</button>` : ''}<button class="btn small ghost" data-act="ex-reveal" data-k="${esc(key)}">Ver respuesta</button></div>${res}</div>`;
    }
    return '';
  }
  function vLeccion() {
    const c = ui.course;
    const l = lessonById(c, ui.param) || nextLesson(c);
    if (!l) return `<h1 class="page">Lecciones</h1><p class="banner">Has terminado las lecciones que hay en la app. Pídele a Claude la semana siguiente.</p><button class="btn" data-go="aprender">Ver lecciones</button>`;
    ui.param = l.id;
    const done = L(c).lec[l.id];
    const left = `<p class="lead">${fmt(l.intro)}</p>${l.bloques.map(b => blockHtml(c, b)).join('')}`;
    const right = `<h2>Vocabulario</h2><ul class="vocab">${l.vocab.map(v => `<li>${sayBtn(c, v[0])}<span class="t">${esc(v[0])}</span><span class="muted">${esc(v[1])}</span></li>`).join('')}</ul>
      <h2>Ejercicios</h2>${l.ejercicios.map((e, i) => exerciseHtml(c, l.id, e, i)).join('')}
      <div class="endbar">${done ? `<p class="hint">Lección terminada el ${esc(done)}. Sus tarjetas ya están en Repasar.</p>` : `<button class="btn primary wide" data-act="lesson-done" data-id="${l.id}">Terminar lección y añadir ${l.vocab.length} tarjetas</button>`}</div>`;
    return `<button class="back" data-go="aprender">Aprender</button><p class="eyebrow">Semana ${l.semana} · Lección ${l.num} · ${l.min} min</p><h1 class="page">${esc(l.titulo)}</h1><div class="two lesson"><div class="col-main">${left}</div><div class="col-side">${right}</div></div>`;
  }

  // ---------------- Lectura ----------------
  function glossFor(r, w) {
    const g = r.glosa || {}, low = w.toLowerCase();
    if (g[low] != null) return g[low];
    const nk = K.normKey(w); for (const k in g) if (K.normKey(k) === nk) return g[k];
    const fk = K.foldKey(w); for (const k in g) if (K.foldKey(k) === fk) return g[k];
    return null;
  }
  function wordPanel() {
    const w = ui.word;
    if (!w) return `<p class="muted">Toca una palabra del texto para ver qué significa.</p>`;
    return `<div class="sheet-top">${sayBtn(ui.course, w.w, 'Escuchar', w.antiguo)}<strong class="t">${esc(w.w)}</strong><button class="x" data-act="word-close" aria-label="Cerrar">×</button></div>
      <p>${w.gloss ? esc(w.gloss) : '<span class="muted">Sin traducción guardada.</span>'}</p>${w.ai ? `<p class="ai">${esc(w.ai)}</p>` : ''}
      <div class="row-btns"><button class="btn small" data-act="word-card">Añadir a mis tarjetas</button>${aiReady() ? `<button class="btn small ghost" data-act="word-ask" ${w.busy ? 'disabled' : ''}>${w.busy ? 'Preguntando…' : 'Explícamela'}</button>` : ''}</div>`;
  }
  function vLectura() {
    const c = ui.course;
    const r = readingById(c, ui.param) || nextReading(c);
    if (!r) return `<h1 class="page">Lecturas</h1><p class="banner">Has leído todas las lecturas. Crea una nueva en Aprender.</p><button class="btn" data-go="aprender">Ir a Aprender</button>`;
    ui.param = r.id;
    let idx = 0;
    const body = String(r.texto).split(/([\p{L}\u0300-\u036f]+)/u).map((part, k) => {
      if (k % 2 === 0) return esc(part).replace(/\n/g, '<br>');
      const i = idx++;
      return `<span class="w${ui.word && ui.word.i === i ? ' sel' : ''}" data-act="word" data-i="${i}">${esc(part)}</span>`;
    }).join('');
    const done = L(c).lee[r.id];
    const showTr = ui.showTr[r.id];
    const qs = (r.preguntas || []).length ? `<h2>Comprensión</h2>${r.preguntas.map((q, i) => exerciseHtml(c, r.id, { t: 'mc', q: q.q, ops: q.ops, ok: q.ok }, i)).join('')}` : '';
    const main = `<div class="reading-tools"><button class="btn small" data-act="read-all">${I.play}Escuchar</button><button class="btn small ghost" data-act="stop">Parar</button>${r.traduccion ? `<button class="btn small ghost" data-act="tr-toggle">${showTr ? 'Ocultar traducción' : 'Ver traducción'}</button>` : ''}</div>
      <p class="hint">Toca cualquier palabra para ver qué significa.</p><div class="reading t${r.antiguo ? ' antiguo' : ''}" lang="${c}">${body}</div>
      ${showTr ? `<div class="card tr"><p class="eyebrow">Traducción</p><p>${esc(r.traduccion).replace(/\n/g, '<br>')}</p></div>` : ''}
      ${r.notas ? `<aside class="note">${fmt(r.notas)}</aside>` : ''}`;
    const side = `<div class="gloss-panel card">${wordPanel()}</div>${qs}
      <div class="endbar">${done ? `<p class="hint">Leída el ${esc(done.d)}.</p>` : `<button class="btn primary wide" data-act="reading-done" data-id="${esc(r.id)}">Marcar como leída</button>`}${r.gen ? `<button class="btn ghost small" data-act="gen-delete" data-id="${esc(r.id)}">Borrar esta lectura</button>` : ''}</div>`;
    return `<button class="back" data-go="aprender">Aprender</button><p class="eyebrow">${r.gen ? esc(r.nivel || 'Hecha para ti') : 'Lectura · semana ' + r.semana + ' · ' + esc(r.nivel || '')}</p><h1 class="page t">${esc(r.titulo)}</h1><div class="two reading-two"><div class="col-main">${main}</div><div class="col-side">${side}</div></div>`;
  }

  // ---------------- Texto propio ----------------
  function vTexto() {
    const c = ui.course, st = ui.texto;
    let h = `<button class="back" data-go="aprender">Aprender</button><h1 class="page">Tu propio texto</h1><p class="lead">Pega un párrafo en ${esc(lower(c))} o haz una foto a una página. Claude lo transcribe, explica cada palabra y lo traduce; queda guardado en tus lecturas.</p>`;
    if (!aiReady()) return h + `<div class="card"><p>Para esto la app necesita tu clave de la API de Claude.</p><button class="btn primary" data-go="ajustes">Añadir clave en Ajustes</button></div>`;
    h += `<form class="card form" data-act="texto-send"><label class="field"><span>Texto</span><textarea id="txt" rows="7" lang="${c}" placeholder="${c === 'la' ? 'Varie de definitione termini sentiunt auctores…' : 'Pega aquí tu texto…'}" ${st.busy ? 'disabled' : ''}></textarea></label>
      ${c === 'la' ? `<label class="check"><input type="checkbox" id="txt-antiguo"> Es un impreso antiguo (ſ, v por u, &, abreviaturas)</label>` : ''}
      <div class="row-btns"><button class="btn primary" type="submit" ${st.busy ? 'disabled' : ''}>Preparar lectura</button>
      <label class="btn filebtn ${st.busy ? 'disabled' : ''}">${I.camera}Desde una foto<input type="file" accept="image/*" data-act="texto-foto" hidden ${st.busy ? 'disabled' : ''}></label></div>
      <p class="hint">Mejor media página cada vez (hasta unas 300 palabras). Cada página cuesta unos céntimos de tu saldo de la API.</p></form>`;
    if (st.busy) h += `<p class="banner" id="tprog">${esc(st.progress || 'Preparando…')}</p>`;
    if (st.err) h += `<p class="err">${esc(st.err)}</p>`;
    return h;
  }
  function textoPrompt(c, fromImage, antiguo, texto) {
    const idioma = lower(c);
    let p = `Eres profesor de ${idioma} para un hispanohablante. Su objetivo: ${courseOf(c).meta.toLowerCase()}. Va por la semana ${curWeek(c)} de 8 de un curso intensivo.\n`;
    p += fromImage
      ? 'La imagen es una página o un fragmento de un libro. Transcribe el texto principal tal como aparece (respeta la ortografía original: ſ, u/v, &, æ, acentos, mayúsculas y abreviaturas). Omite números de página, encabezados, letras capitulares decorativas sueltas y notas al margen. Si la página es larga, quédate con las primeras 300 palabras, terminando en un punto.\n'
      : `Este es el texto:\n<<<\n${texto}\n>>>\n`;
    if (antiguo || fromImage) p += 'Si es un impreso antiguo, en la glosa indica primero la forma moderna o del diccionario (por ejemplo, «ſecundùm»: «= secundum: según»).\n';
    p += `Devuelve SOLO un JSON con esta forma:\n{"titulo": "título breve en español", "texto": "el texto completo, tal cual", "glosa": {"cada palabra distinta del texto, en minúsculas y escrita como aparece": "traducción al español; análisis breve (caso, persona, tiempo) cuando ayude"}, "traduccion": "traducción completa al español, natural y fiel", "notas": "de 2 a 5 notas breves en español sobre las construcciones más difíciles", "antiguo": true o false}\nLa glosa debe incluir TODAS las palabras distintas del texto.`;
    return p;
  }
  async function prepararTexto(c, o) {
    const st = ui.texto;
    st.busy = true; st.err = ''; st.progress = o.imagen ? 'Leyendo la foto y explicando cada palabra… (puede tardar un minuto)' : 'Explicando cada palabra… (puede tardar un minuto)';
    render();
    const prompt = textoPrompt(c, !!o.imagen, o.antiguo, o.texto);
    const content = o.imagen ? [{ type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: o.imagen } }, { type: 'text', text: prompt }] : prompt;
    try {
      const a = P().ajustes.ia;
      const r = await AI.json({ key: a.key, model: a.modelo, maxTokens: 16000, effort: 'low', messages: [{ role: 'user', content }],
        onText: t => { const el = $('#tprog'); if (el) el.textContent = 'Recibiendo… ' + Math.round(t.length / 1000) + ' mil caracteres'; } });
      if (!r || typeof r.texto !== 'string' || !r.texto.trim()) throw { code: 'bad_json' };
      const item = saveGenerated(c, r, { origen: 'propio', nivel: o.imagen ? 'Tu foto' : 'Tu texto', antiguo: !!(o.antiguo || r.antiguo) });
      st.busy = false;
      go('lectura', item.id);
      return;
    } catch (e) { st.err = AI.message(e); }
    st.busy = false; render();
  }
  function saveGenerated(c, r, extra) {
    const glosa = {};
    if (r.glosa && typeof r.glosa === 'object') for (const k of Object.keys(r.glosa).slice(0, 1200)) glosa[String(k).toLowerCase()] = String(r.glosa[k]).slice(0, 240);
    const preguntas = Array.isArray(r.preguntas) ? r.preguntas.filter(q => q && q.q && Array.isArray(q.ops) && q.ops.length >= 2).slice(0, 4).map(q => ({ q: String(q.q), ops: q.ops.slice(0, 4).map(String), ok: Math.min(Math.max(0, Number(q.ok) || 0), Math.min(3, q.ops.length - 1)) })) : [];
    const item = Object.assign({
      id: 'g' + Date.now().toString(36), titulo: String(r.titulo || 'Lectura').slice(0, 120), texto: String(r.texto).slice(0, 6000), glosa, preguntas,
      traduccion: r.traduccion ? String(r.traduccion).slice(0, 6000) : '', notas: r.notas ? String(Array.isArray(r.notas) ? r.notas.join(' ') : r.notas).slice(0, 1500) : '',
      semana: curWeek(c), d: todayStr()
    }, extra);
    G(c).l.unshift(item);
    G(c).l = G(c).l.slice(0, 40);
    ST.mark(c + '-generadas');
    return item;
  }

  // ---------------- Repasar ----------------
  let ses = null;
  function buildSession(c) {
    const defs = cardDefs(c), st = T(c).c, td = today();
    const due = [], fresh = [];
    for (const id of defs.keys()) { const s = st[id]; if (s) { if (s[0] <= td) due.push([id, s[0]]); } else fresh.push(id); }
    due.sort((a, b) => a[1] - b[1]);
    const allow = Math.max(0, nuevasDia(c) - newToday(c));
    return { c, day: td, queue: due.map(x => x[0]).concat(fresh.slice(0, allow)), pos: 0, flip: false, hechas: 0, defs };
  }
  function vRepasar() {
    const c = ui.course, cc = cardCounts(c);
    if (!ses || ses.c !== c || ses.day !== today() || (ses.pos >= ses.queue.length && cc.due + cc.fresh > 0)) ses = buildSession(c);
    let h = `<h1 class="page">Repasar ${esc(lower(c))}</h1>`;
    if (ses.pos >= ses.queue.length) {
      return h + `<div class="card center"><p class="big">${ses.hechas ? `Hecho: ${ses.hechas} repasos.` : 'No tienes tarjetas pendientes.'}</p><p class="muted">${cc.total ? `Llevas ${cc.learned} de ${cc.total} tarjetas aprendidas.` : 'Termina una lección para que sus palabras pasen aquí.'}</p>${cc.total ? '' : '<button class="btn primary" data-go="leccion">Ir a la lección del día</button>'}</div>`;
    }
    const id = ses.queue[ses.pos], d = ses.defs.get(id), st = T(c).c[id];
    h += `<div class="review"><p class="eyebrow num">${ses.queue.length - ses.pos} por repasar${st ? '' : ' · tarjeta nueva'}</p>
      <div class="flash"><div class="front t">${esc(d.t)}</div>${sayBtn(c, d.t)}${ses.flip ? `<div class="backside"><p class="es">${esc(d.es)}</p><p class="muted small">${esc(d.src)}</p></div>` : ''}</div>`;
    if (!ses.flip) h += `<button class="btn primary wide" data-act="flip">Mostrar respuesta</button>`;
    else {
      const td = today(), lbl = g => K.intervalLabel(K.schedule(st, g, td)[1]);
      h += `<div class="grades"><button class="g0" data-act="grade" data-g="0">Otra vez<small>${lbl(0)}</small></button><button class="g1" data-act="grade" data-g="1">Difícil<small>${lbl(1)}</small></button><button class="g2" data-act="grade" data-g="2">Bien<small>${lbl(2)}</small></button><button class="g3" data-act="grade" data-g="3">Fácil<small>${lbl(3)}</small></button></div>`;
    }
    return h + '</div>';
  }
  function gradeCard(g) {
    if (!ses || ses.pos >= ses.queue.length) return;
    const id = ses.queue[ses.pos], c = ses.c, st = T(c).c[id], td = today();
    if (!st) { const nh = T(c).nh; if (nh && nh.d === td) nh.n++; else T(c).nh = { d: td, n: 1 }; }
    T(c).c[id] = K.schedule(st, g, td);
    if (g === 0) ses.queue.splice(Math.min(ses.queue.length, ses.pos + 4), 0, id);
    ses.pos++; ses.flip = false; ses.hechas++;
    ST.mark(c + '-tarjetas');
    touch(); render();
    if (P().ajustes.autoAudio && ses.pos < ses.queue.length) { const nd = ses.defs.get(ses.queue[ses.pos]); if (nd) say(c, nd.t); }
  }

  // ---------------- Hablar ----------------
  function vHablar() {
    const c = ui.course;
    let h = `<h1 class="page">Hablar ${esc(lower(c))}</h1><div class="menu">`;
    h += `<button class="card menu-item" data-go="drill"><strong>Audio para hablar</strong><span class="muted">${c === 'pl' ? 'Oyes la frase en español, la dices en polaco' + (canHear(c) ? ', la app te escucha' : '') + ' y oyes cómo se dice. Sin mirar la pantalla.' : 'Oyes la frase, piensas qué significa y oyes la traducción.'}</span></button>`;
    h += `<button class="card menu-item" data-go="grabar"><strong>Repite y grábate</strong><span class="muted">Escucha el modelo, grábate${canHear(c) ? ' y comprueba tu pronunciación' : ' y compárate'}.</span></button>`;
    h += `<button class="card menu-item" data-go="chat"><strong>Conversación con Claude</strong><span class="muted">${c === 'pl' ? 'Charla, conoce a sus padres o ensaya la cena de Nochebuena.' : 'Una clase de lógica en latín o un comentario de tu lectura.'} Corrección al final.</span></button>`;
    if (c === 'pl') {
      h += `<button class="card menu-item" data-go="pareja"><strong>${I.heart} Sesión con ${esc(ella())}</strong><span class="muted">15 minutos cada 2 o 3 días. La app te prepara qué practicar con ella.</span></button>`;
      h += `<button class="card menu-item" data-go="escucha"><strong>Escucha nativa</strong><span class="muted">Vídeos y podcasts de polacos de verdad. Apunta aquí el tiempo.</span></button>`;
    }
    return h + '</div>';
  }
  // Audio para hablar
  const DR = { on: false, items: [], i: 0, timer: null, c: null, phase: '', heard: null, score: null };
  function drillItems(c) {
    const out = [];
    for (const l of allLessons(c)) if (L(c).lec[l.id]) l.vocab.forEach(v => out.push({ t: v[0].replace(/…/g, '').trim(), es: v[1] }));
    if (!out.length) { const nl = nextLesson(c) || allLessons(c)[0]; if (nl) nl.vocab.forEach(v => out.push({ t: v[0].replace(/…/g, '').trim(), es: v[1] })); }
    return K.shuffle(out, (Date.now() % 9973) + 1);
  }
  function vDrill() {
    const c = ui.course, mode = P().ajustes.drill[c] || (c === 'pl' ? 'producir' : 'entender');
    if (!DR.items.length || DR.c !== c) { DR.items = drillItems(c); DR.i = 0; DR.c = c; }
    const it = DR.items[DR.i];
    const listen = mode === 'producir' && canHear(c);
    let h = `<button class="back" data-go="hablar">Hablar</button><h1 class="page">Audio para hablar</h1>`;
    if (!VO.TTS.ok) h += `<p class="banner warn">Este navegador no tiene voz sintética. Abre Glossa con Chrome.</p>`;
    h += `<div class="seg wide" role="group" aria-label="Modo"><button aria-pressed="${mode === 'producir'}" data-act="drill-mode" data-m="producir">Español → ${esc(lower(c))}</button><button aria-pressed="${mode === 'entender'}" data-act="drill-mode" data-m="entender">${esc(courseOf(c).nombre)} → español</button></div>
      <div class="card center drillcard"><p class="eyebrow num" id="dcount">${DR.i + 1} de ${DR.items.length}</p><p class="phase" id="dphase">${esc(DR.phase || (DR.on ? '' : 'Pulsa Empezar y deja el móvil a un lado'))}</p>
      <p class="t big ${ui.showDrill ? '' : 'blur'}" id="dt">${it ? esc(it.t) : ''}</p><p class="muted ${ui.showDrill ? '' : 'blur'}" id="des">${it ? esc(it.es) : ''}</p><p class="heard" id="dheard"></p></div>
      <div class="row-btns center"><button class="btn primary" data-act="drill-toggle">${DR.on ? 'Pausar' : 'Empezar'}</button><button class="btn" data-act="drill-next">Siguiente</button><button class="btn ghost" data-act="drill-show">${ui.showDrill ? 'Ocultar texto' : 'Ver texto'}</button></div>
      <label class="field"><span>Pausa para responder: <strong id="pausav">${P().ajustes.pausa} s</strong></span><input type="range" min="2" max="8" step="1" value="${P().ajustes.pausa}" data-set="pausa"></label>
      ${mode === 'producir' && canHear(c) ? `<label class="check"><input type="checkbox" data-set="escucharme" ${P().ajustes.escucharme ? 'checked' : ''}> Escucharme y comprobar lo que digo</label>` : ''}
      ${listen && P().ajustes.escucharme ? '<p class="hint">La primera vez, el móvil te pedirá permiso para el micrófono.</p>' : ''}`;
    return h;
  }
  function drillUi() {
    const it = DR.items[DR.i];
    const set = (id, v) => { const el = $(id); if (el) el.textContent = v; };
    set('#dphase', DR.phase); set('#dcount', (DR.i + 1) + ' de ' + DR.items.length);
    if (it) { set('#dt', it.t); set('#des', it.es); }
    const hd = $('#dheard');
    if (hd) {
      if (DR.heard != null) { const v = verdict(DR.score); hd.className = 'heard ' + v[0]; hd.textContent = 'Te he oído: «' + DR.heard + '»'; }
      else { hd.className = 'heard'; hd.textContent = ''; }
    }
  }
  function drillStep() {
    if (!DR.on) return;
    const it = DR.items[DR.i];
    if (!it) { drillStop(); render(); return; }
    touch();
    const c = DR.c, co = courseOf(c), pausa = (P().ajustes.pausa || 4) * 1000, mode = P().ajustes.drill[c] || 'producir';
    const listen = mode === 'producir' && P().ajustes.escucharme && canHear(c);
    const seq = mode === 'producir'
      ? [['es', '¿Cómo se dice: ' + it.es + '?', 'Escucha'], listen ? ['listen', pausa + 3000, 'Dilo tú, en voz alta'] : ['wait', pausa, 'Dilo tú, en voz alta'], ['t', it.t, 'Así se dice'], ['wait', 2200, 'Repite'], ['t', it.t, 'Otra vez'], ['wait', 1600, 'Repite']]
      : [['t', it.t, 'Escucha'], ['wait', pausa, '¿Qué significa?'], ['es', it.es, 'Significa'], ['wait', 900, ''], ['t', it.t, 'Repite'], ['wait', 1600, 'Repite']];
    DR.heard = null; DR.score = null; drillUi();
    let k = 0;
    const next = () => {
      if (!DR.on) return;
      if (k >= seq.length) { DR.i = (DR.i + 1) % DR.items.length; if (DR.i === 0) DR.items = drillItems(c); drillStep(); return; }
      const [kind, val, label] = seq[k++];
      DR.phase = label; drillUi(); touch();
      if (kind === 'wait') DR.timer = setTimeout(next, val);
      else if (kind === 'listen') {
        VO.STT.listen(co.oido, {
          maxMs: val,
          onresult: alts => { const b = K.bestMatch(alts, it.t); DR.heard = b.text; DR.score = b.score; },
          onerror: err => { if (err === 'not-allowed' || err === 'service-not-allowed') { P().ajustes.escucharme = false; ST.mark('perfil'); toast('Sin permiso de micrófono: sigo sin escucharte.'); } },
          onend: () => { if (!DR.on) return; drillUi(); DR.timer = setTimeout(next, 500); }
        });
      } else if (kind === 'es') sayEs(val, { onend: next });
      else say(c, val, { onend: next });
    };
    next();
  }
  function drillStop() { DR.on = false; DR.phase = ''; clearTimeout(DR.timer); VO.TTS.stop(); VO.STT.stop(); }
  // Repite y grábate
  function grabarItems(c) {
    const out = [];
    for (const l of allLessons(c)) for (const b of l.bloques) if (b.t === 'ej') b.items.forEach(it => out.push({ t: it[0], es: it[1] }));
    return out.length ? out : [{ t: '', es: '' }];
  }
  function stopRec() { if (VO.REC.active) VO.REC.cancel(); if (ui.rec) ui.rec.recording = false; }
  function vGrabar() {
    const c = ui.course, items = grabarItems(c), r = ui.rec;
    if (r.c !== c) { ui.rec = { c, i: 0 }; }
    const it = items[ui.rec.i % items.length], st = ui.rec;
    let res = '';
    if (st.err) res += `<p class="err small">${esc(st.err)}</p>`;
    if (st.heard != null) { const v = verdict(st.score); res += `<p class="heard">Te he oído: «<span class="t">${esc(st.heard)}</span>»</p><p class="${v[0]}">${v[1]}</p>`; }
    return `<button class="back" data-go="hablar">Hablar</button><h1 class="page">Repite y grábate</h1>
      <div class="card center"><p class="t big">${esc(it.t)}</p><p class="muted">${esc(it.es)}</p>
      <div class="row-btns center">${sayBtn(c, it.t, 'Escuchar el modelo')}<button class="btn small" data-act="slow" data-text="${esc(it.t)}">Más despacio</button></div></div>
      <div class="row-btns center">
        ${VO.REC.ok ? `<button class="btn ${st.recording ? 'danger' : 'primary'}" data-act="rec-toggle">${st.recording ? I.stop + 'Parar' : I.rec + 'Grabarme'}</button>` : ''}
        ${canHear(c) ? `<button class="btn mic ${st.listening ? 'on' : ''}" data-act="rec-check" data-x="${esc(it.t)}" ${st.listening ? 'disabled' : ''}>${I.mic}${st.listening ? 'Escuchando…' : 'Comprobar pronunciación'}</button>` : ''}
      </div>
      ${st.url ? `<p class="muted small center">Tu grabación:</p><audio controls src="${st.url}"></audio>` : ''}${res}
      <div class="row-btns center"><button class="btn ghost" data-act="g-prev">Anterior</button><button class="btn" data-act="g-next">Otra frase</button></div>
      <p class="hint">Escucha el modelo dos o tres veces, grábate y compara. ${canHear(c) ? '«Comprobar pronunciación» te dice qué ha entendido el móvil.' : ''}</p>`;
  }
  // Escucha nativa
  function vEscucha() {
    const c = ui.course, links = courseOf(c).escucha || [];
    return `<button class="back" data-go="hablar">Hablar</button><h1 class="page">Escucha nativa</h1><p>Lo único que la app no puede darte: gente de verdad hablando. Escucha, y al volver apunta el tiempo.</p>
      <ul class="links">${links.map(l => `<li><a href="${esc(l[0])}" target="_blank" rel="noopener">${esc(l[1])}</a><span class="muted">${esc(l[2])}</span></li>`).join('')}</ul>
      <div class="card"><p>Hoy llevas <strong class="num">${minutes(c, 'esc')} min</strong> de escucha nativa.</p><div class="row-btns"><button class="btn" data-act="log-esc" data-m="15">+15 min</button><button class="btn" data-act="log-esc" data-m="30">+30 min</button><button class="btn ghost" data-act="log-esc" data-m="-15">−15 min</button></div></div>`;
  }
  // Sesión con ella
  function vPareja() {
    const c = 'pl', w = curWeek(c), wd = weekData(c, w) || weekData(c, 1), pj = (wd && wd.pareja) || {};
    const pe = parEstado();
    const hard = hardestCards(c, 4).map(d => d.t);
    const errs = L(c).err.slice(0, 4).map(e => e.mejor).filter(Boolean);
    const frases = Array.from(new Set((pj.frases || []).concat(errs, hard))).slice(0, 10);
    const status = pe.hoy ? 'Sesión de hoy hecha. La próxima, ' + K.dayLabel(pe.next, today()) + '.' : pe.due ? 'Toca hoy. Son 15 minutos.' : 'Próxima sesión: ' + K.dayLabel(pe.next, today()) + '. Puedes adelantarla.';
    return `<button class="back" data-go="hablar">Hablar</button><h1 class="page">Sesión con ${esc(ella())}</h1><p class="lead">${esc(status)} Dale el móvil cuando haga falta: lo que tiene que leer está en polaco.</p>
      <div class="two"><div>
        <section class="card step"><p class="eyebrow">1 · Que te pregunte · 5 min</p><p class="muted small">Que te haga estas preguntas en polaco, sin traducir. Tú respondes como puedas.</p>
          <ul class="examples">${(pj.preguntas || []).map(q => `<li>${sayBtn(c, q[0])}<span><span class="t big2">${esc(q[0])}</span><span class="muted">${esc(q[1])}</span></span></li>`).join('')}</ul></section>
        <section class="card step"><p class="eyebrow">2 · Que te corrija · 5 min</p><p class="muted small">Léelas en voz alta. Que te corrija la pronunciación y repite hasta que te diga «dobrze».</p>
          <ul class="examples">${frases.map(f => `<li>${sayBtn(c, f)}<span class="t">${esc(f)}</span></li>`).join('')}</ul>
          ${pj.reto ? `<aside class="note"><strong>Reto:</strong> <span class="t">${esc(pj.reto[0])}</span><br><span class="muted">${esc(pj.reto[1])}</span></aside>` : ''}</section>
      </div><div>
        <section class="card step"><p class="eyebrow">3 · Que te cuente · 5 min</p><p>${esc(pj.tema || 'Que te cuente algo de su familia o de cómo celebran la Navidad, despacio. Pregúntale dos cosas.')}</p></section>
        <form class="card form" data-act="par-done"><label class="field"><span>Lo que te ha corregido (opcional, una cosa por línea)</span><textarea id="par-notas" rows="4" lang="pl" placeholder="Wesołych Świąt = ¡Feliz Navidad!"></textarea></label>
          <p class="hint">Si escribes «polaco = español», se crea una tarjeta. Lo demás queda en tus correcciones.</p>
          <button class="btn primary wide" type="submit">Sesión hecha (15 min)</button></form>
      </div></div>`;
  }

  // ---------------- Conversación con Claude ----------------
  const ESCENAS = {
    pl: [['libre', 'Charla libre'], ['padres', 'Conocer a sus padres'], ['mesa', 'Cena de Nochebuena']],
    la: [['logica', 'Clase de lógica'], ['texto', 'Comenta tu lectura'], ['libre', 'Charla libre']]
  };
  const CH = {};
  function chatState(c) { if (!CH[c]) CH[c] = { esc: (ESCENAS[c] || [['libre', 'Charla libre']])[0][0], turns: [], busy: false, ctl: null, review: null, err: '', listening: false }; return CH[c]; }
  function chatRules(c, sc) {
    const w = curWeek(c), words = knownWords(c, 150).join(', '), prog = (C(c).programa || [])[w - 1] || '';
    const yo = P().nombre ? ` El alumno se llama ${P().nombre}.` : '';
    if (c === 'pl') {
      const fam = (P().pareja.familia || '').trim();
      const famTxt = fam ? ` La familia de su novia: ${fam.replace(/\n+/g, '; ')}.` : '';
      const novia = P().pareja.nombre ? ` Su novia se llama ${P().pareja.nombre}.` : '';
      const escena = sc === 'padres' ? 'Interpretas a la madre de su novia, que le conoce hoy en su casa. Le tratas de usted (Pan) al principio. Eres amable y curiosa: pregúntale por él, su trabajo, España y su familia.'
        : sc === 'mesa' ? 'Es la cena de Nochebuena (Wigilia) con la familia de su novia. Interpretas al padre, sentado a su lado: le ofreces platos (barszcz, pierogi, karp), le preguntas si le gustan y le das conversación sencilla.'
          : 'Charla amistosa y sencilla sobre los temas de esta semana: ' + C(c).temasChat.join(', ') + '.';
      return `Eres un compañero de conversación para un hispanohablante que aprende polaco para pasar la Navidad con la familia de su novia. Va por la semana ${w} de 8 de un curso intensivo (nivel A1-A2). Gramática de esta semana: ${prog}${yo}${novia}${famTxt}\nEscena: ${escena}\nReglas:\n- Escribe SOLO en polaco, con frases muy cortas (máximo 12 palabras) y vocabulario básico.\n- Usa sobre todo palabras que ya conoce: ${words}.\n- Haz una sola pregunta sencilla en cada turno para que siga hablando.\n- Si escribe en español o se atasca, dale en una línea la frase polaca que necesita, entre comillas, y sigue.\n- No corrijas sus errores durante la charla: continúa con naturalidad.\n- Nada de traducciones ni explicaciones: solo tu turno en polaco.`;
    }
    if (c === 'la') {
      const lect = nextReading('la');
      const escena = sc === 'logica' ? 'Eres un maestro de lógica escolástica en una universidad del siglo XVII. Conversas con un discípulo nuevo sobre qué es la lógica, el término, la proposición y el silogismo, con ejemplos sencillos.'
        : sc === 'texto' ? `Comentáis la lectura «${lect ? lect.titulo : 'Logica in scholā'}»: hazle preguntas sencillas sobre ella.`
          : 'Charla sencilla sobre lo que hace hoy y sobre filosofía.';
      return `Eres un interlocutor en latín para un hispanohablante que aprende latín para leer lógica y filosofía escolástica. Va por la semana ${w} de 8 (nivel inicial). Gramática de esta semana: ${prog}${yo}\nEscena: ${escena}\nReglas:\n- Escribe SOLO en latín sencillo, en frases cortas (máximo 10 palabras), y marca las vocales largas con macrón (ā ē ī ō ū).\n- Usa sobre todo la gramática de su semana y palabras que ya conoce: ${words}.\n- Haz una pregunta sencilla en cada turno.\n- Si escribe en español, dale en una línea la frase latina que necesita, entre comillas, y sigue.\n- No corrijas durante la charla. Nada de traducciones ni explicaciones: solo tu turno en latín.`;
    }
    return `Eres un compañero de conversación en ${lower(c)} para un hispanohablante principiante. Frases cortas, una pregunta por turno, solo en ${lower(c)}.`;
  }
  function vChat() {
    const c = ui.course, st = chatState(c);
    let h = `<button class="back" data-go="hablar">Hablar</button><h1 class="page">Conversación</h1>`;
    if (!aiReady()) return h + `<div class="card"><p>La conversación usa Claude con tu propia clave de la API: te cuesta unos céntimos al día y la clave se queda en este móvil.</p><button class="btn primary" data-go="ajustes">Añadir clave en Ajustes</button></div>`;
    const scenes = ESCENAS[c] || [['libre', 'Charla libre']];
    h += `<div class="chips" role="group" aria-label="Escena">${scenes.map(e => `<button class="chip ${st.esc === e[0] ? 'on' : ''}" data-act="chat-scene" data-s="${e[0]}" ${st.busy ? 'disabled' : ''}>${esc(e[1])}</button>`).join('')}</div>`;
    let log = `<div class="chatlog" id="chatlog" aria-live="polite">`;
    if (!st.turns.length) log += `<p class="muted">Elige una escena y pulsa Empezar.${canHear(c) ? ' Para hablar en vez de escribir, pulsa el micrófono.' : ''}</p>`;
    st.turns.forEach((t, i) => {
      if (t.role === 'assistant') {
        const live = i === st.turns.length - 1 && st.busy;
        log += `<div class="msg ai"><p class="t" ${live ? 'id="streaming"' : ''}>${esc(t.content) || '<span class="muted">Pensando…</span>'}</p>${t.content && !live ? `<div class="msg-tools">${sayBtn(c, t.content)}<button class="btn tiny ghost" data-act="chat-tr" data-i="${i}" ${t.trBusy ? 'disabled' : ''}>${t.trBusy ? 'Traduciendo…' : 'Traducir'}</button></div>${t.tr ? `<p class="tr">${esc(t.tr)}</p>` : ''}` : ''}</div>`;
      } else log += `<div class="msg me"><p class="t">${esc(t.content)}</p></div>`;
    });
    log += '</div>';
    if (st.err) log += `<p class="err">${esc(st.err)}</p>`;
    if (!st.turns.length) log += `<button class="btn primary wide" data-act="chat-start" ${st.busy ? 'disabled' : ''}>Empezar</button>`;
    else {
      log += `<form class="composer" data-act="chat-send"><label for="chatin" class="sr">Tu mensaje</label><textarea id="chatin" rows="2" lang="${c}" placeholder="${c === 'la' ? 'Scrībe Latīnē…' : 'Escribe en ' + esc(lower(c)) + '…'}" ${st.busy ? 'disabled' : ''}></textarea>
        ${canHear(c) ? `<button class="btn mic icon ${st.listening ? 'on' : ''}" type="button" data-act="chat-mic" aria-label="Hablar" ${st.busy || st.listening ? 'disabled' : ''}>${I.mic}</button>` : ''}<button class="btn primary" type="submit" ${st.busy ? 'disabled' : ''}>Enviar</button></form>
        <div class="row-btns">${st.busy ? '<button class="btn ghost" data-act="chat-stop">Parar</button>' : ''}<button class="btn" data-act="chat-review" ${st.busy || !st.turns.some(t => t.role === 'user') ? 'disabled' : ''}>Terminar y corregir</button><button class="btn ghost" data-act="chat-reset" ${st.busy ? 'disabled' : ''}>Nueva conversación</button></div>`;
    }
    const review = st.review ? reviewHtml(c, st.review) : (WIDE_Q.matches ? `<div class="card muted small">Cuando termines, pulsa «Terminar y corregir»: aquí verás tus errores y las palabras que te habrían servido.</div>` : '');
    return h + `<div class="two chat-two"><div class="col-main">${log}</div><div class="col-side">${review}</div></div>`;
  }
  function reviewHtml(c, r) {
    if (r === 'busy') return `<div class="card"><p class="muted">Revisando tus mensajes…</p></div>`;
    let h = `<div class="card review-card"><h2>Corrección</h2><p>${esc(r.resumen || '')}</p>`;
    if (r.correcciones && r.correcciones.length) h += `<ul class="corr">${r.correcciones.map(x => `<li><span class="bad t">${esc(x.dijiste)}</span><span class="ok t">${esc(x.mejor)}</span><span class="muted">${esc(x.explicacion)}</span></li>`).join('')}</ul>`;
    else h += '<p class="okmsg">Sin errores importantes.</p>';
    if (r.palabras && r.palabras.length) h += `<h3>Palabras que te habrían servido</h3><ul class="vocab">${r.palabras.map((p, i) => `<li>${sayBtn(c, p.t)}<span class="t">${esc(p.t)}</span><span class="muted">${esc(p.es)}</span><button class="btn tiny" data-act="rev-card" data-i="${i}">Añadir</button></li>`).join('')}</ul>`;
    return h + '</div>';
  }
  async function chatCall(c) {
    const st = chatState(c), a = P().ajustes.ia;
    st.busy = true; st.err = ''; st.ctl = new AbortController();
    let hist = st.turns.slice(-20);
    if (hist.length && hist[0].role === 'user') hist = hist.slice(1);
    const messages = [{ role: 'user', content: 'Empieza tú: saluda y haz una primera pregunta sencilla.' }].concat(hist.map(t => ({ role: t.role, content: t.content })));
    const reply = { role: 'assistant', content: '' };
    st.turns.push(reply);
    render();
    try {
      const res = await AI.run({ key: a.key, model: a.modelo, system: chatRules(c, st.esc), messages, maxTokens: 1500, effort: 'low', signal: st.ctl.signal,
        onText: text => { reply.content = text; const el = $('#streaming'); if (el) el.textContent = text; } });
      reply.content = res.text.trim();
      touch();
    } catch (e) {
      reply.content = (e && e.text) || '';
      if (!reply.content) st.turns.pop();
      st.err = AI.message(e);
    } finally {
      st.busy = false; st.ctl = null;
      if (ui.view === 'chat') render();
      if (reply.content && P().ajustes.autoAudio && ui.view === 'chat') say(c, reply.content);
    }
  }
  async function chatReview(c) {
    const st = chatState(c), a = P().ajustes.ia;
    const transcript = st.turns.map(t => (t.role === 'user' ? 'ALUMNO: ' : 'TÚ: ') + t.content).join('\n');
    const idioma = c === 'la' ? 'latín (marca las vocales largas con macrón)' : lower(c);
    const prompt = `Eres profesor de ${idioma} para hispanohablantes. Revisa SOLO los mensajes del ALUMNO de esta conversación (semana ${curWeek(c)} de 8, nivel inicial).\nDevuelve únicamente un JSON con esta forma:\n{"resumen": "una o dos frases en español sobre cómo lo ha hecho", "correcciones": [{"dijiste": "lo que escribió", "mejor": "versión correcta y natural", "explicacion": "breve, en español"}], "palabras": [{"t": "palabra o frase útil", "es": "traducción al español"}]}\nComo mucho 6 correcciones (las más útiles) y 6 palabras que le habrían servido. Si no hay errores, "correcciones": [].\n\nConversación:\n${transcript}`;
    st.review = 'busy'; render();
    try {
      const r = await AI.json({ key: a.key, model: a.modelo, maxTokens: 6000, effort: 'medium', messages: [{ role: 'user', content: prompt }] });
      st.review = { resumen: String((r && r.resumen) || ''), correcciones: Array.isArray(r && r.correcciones) ? r.correcciones.slice(0, 8) : [], palabras: Array.isArray(r && r.palabras) ? r.palabras.slice(0, 8) : [] };
      st.review.correcciones.forEach(x => L(c).err.unshift({ d: todayStr(), dijiste: String(x.dijiste || ''), mejor: String(x.mejor || ''), exp: String(x.explicacion || ''), src: 'Conversación' }));
      L(c).err = L(c).err.slice(0, 80);
      ST.mark(c);
    } catch (e) { st.review = null; st.err = AI.message(e); }
    if (ui.view === 'chat') render();
  }
  async function translateMsg(c, i) {
    const st = chatState(c), t = st.turns[i], a = P().ajustes.ia;
    if (!t) return;
    t.trBusy = true; render();
    try {
      const r = await AI.run({ key: a.key, model: a.rapido, maxTokens: 1000, effort: 'low', messages: [{ role: 'user', content: `Traduce al español este mensaje en ${lower(c)}, de forma natural y en una sola línea, sin comentarios:\n${t.content}` }] });
      t.tr = r.text.trim();
    } catch (e) { st.err = AI.message(e); }
    t.trBusy = false; if (ui.view === 'chat') render();
  }
  async function askWord() {
    const w = ui.word, a = P().ajustes.ia;
    if (!w) return;
    w.busy = true; render();
    try {
      const r = await AI.run({ key: a.key, model: a.rapido, maxTokens: 1000, effort: 'low', messages: [{ role: 'user', content: `Palabra en ${lower(ui.course)}: «${w.w}». Aparece en esta frase: «${w.sent}». Responde en español en una sola línea: forma del diccionario — significado aquí — forma gramatical. Nada más.` }] });
      w.ai = r.text.trim();
    } catch (e) { w.ai = AI.message(e); }
    w.busy = false; if (ui.word === w) render();
  }
  async function genReading(c) {
    if (!aiReady()) { ui.gen.err = AI.message({ code: 'no_key' }); render(); return; }
    ui.gen.busy = true; ui.gen.err = ''; render();
    const w = curWeek(c), words = knownWords(c, 160).join(', ');
    const temas = C(c).temasChat, tema = temas[(G(c).l.length + w) % temas.length];
    const prog = (C(c).programa || [])[w - 1] || '';
    const extra = c === 'la' ? '\n- Latín con vocabulario filosófico y escolástico. Marca con macrón TODAS las vocales largas (ā ē ī ō ū), también en las claves de la glosa.' : c === 'pl' ? '\n- Polaco natural de nivel A1-A2, con todos los signos diacríticos.' : '';
    const prompt = `Escribe una lectura graduada en ${lower(c)} para un hispanohablante en la semana ${w} de 8 de un curso intensivo. Su objetivo: ${courseOf(c).meta.toLowerCase()}. Tema: ${tema}.\n- Entre 90 y 140 palabras, en frases cortas. Gramática de su semana: ${prog}\n- Usa sobre todo estas palabras que ya conoce: ${words}. Como mucho 8 palabras nuevas.${extra}\nDevuelve SOLO un JSON con esta forma:\n{"titulo": "título en ${lower(c)}", "texto": "el texto", "glosa": {"cada forma del texto en minúsculas, tal como aparece": "traducción al español; nota gramatical breve si ayuda"}, "traduccion": "traducción al español", "preguntas": [{"q": "pregunta en español", "ops": ["respuesta correcta", "incorrecta", "incorrecta"], "ok": 0}]}\nLa glosa debe incluir TODAS las palabras distintas del texto. Escribe 3 preguntas de comprensión.`;
    try {
      const a = P().ajustes.ia;
      const r = await AI.json({ key: a.key, model: a.modelo, maxTokens: 8000, effort: 'medium', messages: [{ role: 'user', content: prompt }] });
      if (!r || typeof r.texto !== 'string' || typeof r.titulo !== 'string') throw { code: 'bad_json' };
      const item = saveGenerated(c, r, { origen: 'ia', nivel: 'Hecha para ti · semana ' + w });
      ui.gen.busy = false;
      go('lectura', item.id);
      return;
    } catch (e) { ui.gen.err = AI.message(e); }
    ui.gen.busy = false; render();
  }

  // ---------------- Progreso ----------------
  const CONTROL = ['Grabar 2 minutos hablando del tema de la semana', 'Leer en voz alta un texto nuevo y entender el 80 %', 'Escuchar un audio nuevo de 3 minutos y resumirlo', 'Tener los repasos de tarjetas al día', 'Mantener 10-15 minutos de conversación sin cambiar de idioma'];
  const HITOS = {
    pl: [[2, '400 palabras; presentarte durante 2 minutos'], [4, '900 palabras; 5 minutos de conversación'], [6, '1.500 palabras; 15 minutos sobre tu trabajo'], [8, '2.000 palabras; 15 minutos sin pasarte al español']],
    la: [[2, '400 palabras; leer en voz alta sin trabarte'], [4, '800 palabras; entender «dicitur quod» y la pasiva'], [6, 'Leer un artículo de la Suma adaptado'], [8, 'Leer con ayuda la página de Juan de Santo Tomás']]
  };
  function vProgreso() {
    const c = ui.course, w = curWeek(c);
    let h = `<h1 class="page">Progreso</h1><div class="stats">`;
    for (const co of ACTIVE) {
      const cc = cardCounts(co.id), lessons = allLessons(co.id), ld = lessons.filter(l => L(co.id).lec[l.id]).length, rd = Object.keys(L(co.id).lee).length;
      h += `<div class="card stat" data-course="${co.id}"><p class="eyebrow">${esc(co.nombre)}</p><p class="bignum num">${cc.learned}</p><p class="muted">palabras y frases aprendidas</p><dl class="kv"><dt>Para hoy</dt><dd class="num">${cc.due + cc.fresh}</dd><dt>Lecciones</dt><dd class="num">${ld} de ${lessons.length}</dd><dt>Lecturas</dt><dd class="num">${rd}</dd><dt>Hoy</dt><dd class="num">${minutes(co.id)} min</dd><dt>Esta semana</dt><dd class="num">${weekMinutes(co.id)} min</dd></dl></div>`;
    }
    h += `</div><p class="hint">Racha: <strong>${streak()} días</strong>.${L('pl').par.n ? ` Sesiones con ${esc(ella())}: ${L('pl').par.n}.` : ''}</p>`;
    const ctrl = L(c).ctrl[w] || [];
    h += `<div class="two"><div><h2>Control del domingo · semana ${w}</h2><p class="muted small">${esc(courseOf(c).nombre)}. Si no llegas al hito, repite la semana antes de avanzar.</p><ul class="checks">${CONTROL.map((x, i) => `<li><label><input type="checkbox" data-act="ctrl" data-i="${i}" ${ctrl[i] ? 'checked' : ''}> ${esc(x)}</label></li>`).join('')}</ul></div>`;
    const hitos = HITOS[c] || [];
    h += `<div><h2>Hitos</h2><div class="tablewrap"><table><thead><tr><th>Semana</th><th>Meta</th></tr></thead><tbody>${hitos.map(x => `<tr class="${x[0] === w || x[0] === w + 1 && w % 2 ? 'cur' : ''}"><td class="num">${x[0]}</td><td>${esc(x[1])}</td></tr>`).join('')}</tbody></table></div></div></div>`;
    const err = L(c).err.slice(0, 10);
    if (err.length) h += `<h2>Tus últimas correcciones</h2><ul class="corr">${err.map(e => `<li>${e.dijiste ? `<span class="bad t">${esc(e.dijiste)}</span>` : ''}<span class="ok t">${esc(e.mejor)}</span><span class="muted">${esc(e.exp || '')}${e.src ? ' · ' + esc(e.src) : ''}</span></li>`).join('')}</ul>`;
    return h;
  }

  // ---------------- Ajustes ----------------
  function vAjustes() {
    const p = P(), a = p.ajustes;
    const vopts = (code, sel) => ['<option value="">Automática</option>'].concat(VO.TTS.list(code).map(v => `<option value="${esc(v.name)}" ${v.name === sel ? 'selected' : ''}>${esc(v.name)} (${esc(v.lang)})</option>`)).join('');
    let h = `<h1 class="page">Ajustes</h1><div class="settings">`;
    h += `<section class="card form"><h2>Tú</h2>
      <label class="field"><span>Tu nombre</span><input type="text" id="f-nombre" data-set="nombre" value="${esc(p.nombre)}" autocomplete="given-name"></label>
      <label class="field"><span>Nombre de tu chica</span><input type="text" id="f-ella" data-set="pareja.nombre" value="${esc(p.pareja.nombre)}"></label>
      <label class="field"><span>Su familia: quién es quién</span><textarea id="f-familia" rows="4" data-set="pareja.familia" placeholder="Ewa: su madre&#10;Marek: su padre&#10;Zosia: su abuela">${esc(p.pareja.familia)}</textarea></label>
      <p class="hint">Se usa en tus conversaciones con Claude para practicar con los nombres reales.</p></section>`;
    h += `<section class="card form"><h2>Plan</h2>${ACTIVE.map(co => `<div class="field-row"><label class="field"><span>Inicio de ${esc(lower(co.id))}</span><input type="date" data-set="inicio.${co.id}" value="${esc(inicio(co.id))}"></label><label class="field"><span>Tarjetas nuevas al día</span><input type="number" min="0" max="80" data-set="nuevas.${co.id}" value="${nuevasDia(co.id)}"></label></div>`).join('')}</section>`;
    h += `<section class="card form"><h2>Voz</h2>
      <label class="field"><span>Velocidad: <strong id="ratev">${a.rate}</strong></span><input type="range" min="0.6" max="1.2" step="0.05" value="${a.rate}" data-set="rate"></label>
      <label class="field"><span>Voz polaca</span><select data-set="voces.pl">${vopts('pl', a.voces.pl)}</select></label>
      <label class="field"><span>Voz española (lee el latín y las preguntas)</span><select data-set="voces.es">${vopts('es', a.voces.es)}</select></label>
      <label class="check"><input type="checkbox" data-set="autoAudio" ${a.autoAudio ? 'checked' : ''}> Leer en voz alta tarjetas y respuestas automáticamente</label>
      <label class="check"><input type="checkbox" data-set="escucharme" ${a.escucharme ? 'checked' : ''}> Escucharme con el micrófono en el audio para hablar</label>
      <div class="row-btns">${sayBtn('pl', 'Dzień dobry! Miło mi Panią poznać.', 'Probar voz polaca')}<span class="muted">Polaco</span>${sayBtn('la', 'Cōgitō, ergō sum. Vīta brevis, ars longa.', 'Probar latín')}<span class="muted">Latín</span></div>
      ${VO.TTS.ok && !VO.TTS.list('pl').length ? '<p class="hint">No veo ninguna voz polaca. En los ajustes del móvil busca «texto a voz», elige como motor «Servicios de voz de Google» e instala en él la voz polaca. Después cierra y vuelve a abrir Glossa.</p>' : ''}
      ${VO.STT.ok ? '' : '<p class="hint">Este navegador no reconoce la voz: abre Glossa con Chrome para usar el micrófono.</p>'}</section>`;
    h += `<section class="card form"><h2>Claude</h2><p class="muted small">La conversación, las correcciones, las lecturas nuevas y tus textos usan Claude con tu propia clave de la API. Se guarda solo en este móvil y nunca sale en las copias de seguridad.</p>
      <label class="field"><span>Clave de la API</span><input type="password" id="f-key" data-set="ia.key" value="${esc(a.ia.key)}" autocomplete="off" spellcheck="false" placeholder="sk-ant-…"></label>
      <div class="field-row"><label class="field"><span>Modelo principal</span><input type="text" data-set="ia.modelo" value="${esc(a.ia.modelo)}" spellcheck="false"></label><label class="field"><span>Modelo rápido</span><input type="text" data-set="ia.rapido" value="${esc(a.ia.rapido)}" spellcheck="false"></label></div>
      <div class="row-btns"><button class="btn" data-act="ia-test" ${aiReady() ? '' : 'disabled'}>Probar la clave</button><span class="small ${/^Funciona/.test(ui.iaTest) ? 'okmsg' : 'muted'}">${esc(ui.iaTest)}</span></div>
      <p class="hint">La clave se crea en la consola de Claude (platform.claude.com), en «API Keys»; el saldo se carga en «Billing».</p></section>`;
    h += `<section class="card form"><h2>Tus datos</h2><p class="muted small">Tu progreso vive en este móvil. Haz una copia de vez en cuando${p.ui.ultimaCopia ? ` (la última, el ${esc(p.ui.ultimaCopia)})` : ''}.</p>
      <div class="row-btns"><button class="btn" data-act="backup-save">Guardar copia</button><label class="btn ghost filebtn">Restaurar copia<input type="file" accept="application/json,.json,text/plain" data-act="backup-load" hidden></label></div>
      ${G(ui.course).l.length ? `<button class="btn ghost small" data-act="gen-clear">Borrar tus lecturas de ${esc(lower(ui.course))} (${G(ui.course).l.length})</button>` : ''}
      <p class="hint" id="persist-note"></p></section>`;
    h += `<section class="card form"><h2>App</h2><p class="muted small">Glossa ${esc(VERSION)}${isStandalone() ? ' · instalada' : ''}.</p>
      ${!isStandalone() && ui.installEvt ? '<button class="btn primary" data-act="install">Instalar Glossa</button>' : ''}
      ${!isStandalone() && !ui.installEvt ? `<p class="hint">${isIOS ? 'Para instalarla: Safari › Compartir › Añadir a pantalla de inicio.' : 'Para instalarla: Chrome › menú ⋮ › Instalar aplicación.'}</p>` : ''}
      <button class="btn ghost small" data-act="check-update">Buscar actualizaciones</button></section>`;
    return h + '</div>';
  }
  function setSetting(path, el) {
    const p = P(), a = p.ajustes;
    const v = el.type === 'checkbox' ? el.checked : el.value;
    let rerender = false;
    if (path === 'nombre') p.nombre = String(v).slice(0, 40);
    else if (path === 'pareja.nombre') p.pareja.nombre = String(v).slice(0, 40);
    else if (path === 'pareja.familia') p.pareja.familia = String(v).slice(0, 800);
    else if (path.indexOf('inicio.') === 0) { if (/^\d{4}-\d{2}-\d{2}$/.test(v)) { p.cursos[path.slice(7)] = Object.assign({}, p.cursos[path.slice(7)], { inicio: v }); rerender = true; } }
    else if (path.indexOf('nuevas.') === 0) a.nuevas[path.slice(7)] = Math.max(0, Math.min(80, Math.round(Number(v) || 0)));
    else if (path === 'rate') { a.rate = Math.max(0.6, Math.min(1.2, Number(v) || 0.9)); const s = $('#ratev'); if (s) s.textContent = a.rate; }
    else if (path === 'pausa') { a.pausa = Math.max(2, Math.min(8, Math.round(Number(v) || 4))); const s = $('#pausav'); if (s) s.textContent = a.pausa + ' s'; }
    else if (path.indexOf('voces.') === 0) a.voces[path.slice(6)] = String(v);
    else if (path === 'autoAudio') a.autoAudio = !!v;
    else if (path === 'escucharme') { a.escucharme = !!v; rerender = ui.view === 'drill'; }
    else if (path === 'ia.key') { a.ia.key = String(v).trim(); ui.iaTest = ''; rerender = true; }
    else if (path === 'ia.modelo') a.ia.modelo = String(v).trim() || 'claude-sonnet-5-5';
    else if (path === 'ia.rapido') a.ia.rapido = String(v).trim() || 'claude-haiku-5-5';
    ST.mark('perfil');
    if (rerender) render();
  }

  // ---------------- Copias ----------------
  function saveBackup() {
    const blob = new Blob([JSON.stringify(ST.exportData())], { type: 'application/json' });
    const name = 'glossa-copia-' + todayStr() + '.json';
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
    P().ui.ultimaCopia = todayStr(); ST.mark('perfil');
    toast('Copia guardada en Descargas: ' + name);
  }
  function loadBackup(file) {
    const fr = new FileReader();
    fr.onload = () => {
      let obj = null;
      try { obj = JSON.parse(fr.result); } catch (e) { obj = null; }
      if (!ST.importData(obj)) { toast('Ese archivo no es una copia de Glossa.'); return; }
      ses = null; ui.course = CONTENT[P().cursoActivo] ? P().cursoActivo : ACTIVE[0].id;
      toast('Copia restaurada.'); render();
    };
    fr.readAsText(file);
  }

  // ---------------- Eventos ----------------
  document.addEventListener('pointerdown', touch, { passive: true });
  document.addEventListener('keydown', touch);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') { commitAct(); drillStop(); ST.flush(); }
    else if (window.__swReg) window.__swReg.update().catch(() => {});
  });
  window.addEventListener('pagehide', () => { commitAct(); ST.flush(); });
  window.addEventListener('hashchange', route);
  WIDE_Q.addEventListener && WIDE_Q.addEventListener('change', () => render());
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); ui.installEvt = e; if (ui.view === 'hoy' || ui.view === 'ajustes') render(); });
  window.addEventListener('appinstalled', () => { ui.installEvt = null; toast('Glossa instalada.'); render(); });

  document.addEventListener('change', e => {
    const el = e.target;
    if (!el.dataset) return;
    if (el.dataset.set) setSetting(el.dataset.set, el);
    if (el.dataset.act === 'ctrl') {
      const c = ui.course, w = curWeek(c), arr = (L(c).ctrl[w] || []).slice();
      arr[Number(el.dataset.i)] = el.checked; L(c).ctrl[w] = arr; ST.mark(c);
    }
    if (el.dataset.act === 'backup-load' && el.files && el.files[0]) loadBackup(el.files[0]);
    if (el.dataset.act === 'texto-foto' && el.files && el.files[0]) {
      const f = el.files[0], c = ui.course;
      AI.imageToBase64(f).then(b64 => prepararTexto(c, { imagen: b64 })).catch(() => { ui.texto.err = 'No he podido leer esa imagen.'; render(); });
    }
  });
  document.addEventListener('input', e => {
    const el = e.target;
    if (el.dataset && (el.dataset.set === 'pausa' || el.dataset.set === 'rate')) setSetting(el.dataset.set, el);
  });
  document.addEventListener('submit', e => {
    const f = e.target, act = f.dataset && f.dataset.act;
    if (!act) return;
    e.preventDefault();
    const c = ui.course;
    if (act === 'chat-send') {
      const ta = $('#chatin'), txt = ta ? ta.value.trim() : '';
      const st = chatState(c);
      if (!txt || st.busy) return;
      st.turns.push({ role: 'user', content: txt.slice(0, 1500) }); st.review = null;
      chatCall(c);
    } else if (act === 'texto-send') {
      const txt = ($('#txt') || {}).value || '';
      if (K.wordCount(txt) < 3) { ui.texto.err = 'Pega al menos una frase.'; render(); return; }
      prepararTexto(c, { texto: txt.slice(0, 6000), antiguo: !!($('#txt-antiguo') || {}).checked });
    } else if (act === 'par-done') {
      const notas = (($('#par-notas') || {}).value || '').split('\n').map(s => s.trim()).filter(Boolean);
      let cards = 0;
      notas.forEach(n => {
        const m = n.split(/\s+=\s+/);
        if (m.length === 2 && m[0] && m[1]) { if (addCard('pl', m[0], m[1], 'Con ' + ella())) cards++; }
        else L('pl').err.unshift({ d: todayStr(), dijiste: '', mejor: n, exp: 'Corrección de ' + ella(), src: 'Sesión' });
      });
      const p = L('pl').par;
      if (p.ultima !== todayStr()) { p.n = (p.n || 0) + 1; addSeconds('pl', 'par', 15 * 60); }
      p.ultima = todayStr();
      ST.mark('pl');
      toast('Sesión apuntada' + (cards ? ` · ${cards} tarjetas nuevas` : '') + '.');
      go('hoy');
    }
  });
  document.addEventListener('click', e => {
    if (ui.word && ui.view === 'lectura' && !WIDE_Q.matches && !e.target.closest('.word-sheet') && !e.target.closest('.w')) {
      ui.word = null; const sh = $('.word-sheet'); if (sh) sh.remove(); document.body.classList.remove('sheet-open');
      const sel = $('.w.sel'); if (sel) sel.classList.remove('sel');
    }
    const el = e.target.closest('button, [data-act], [data-go], [data-course-set]');
    if (!el || el.disabled || el.classList.contains('disabled')) return;
    touch();
    if (el.dataset.say != null) { say(el.dataset.c || ui.course, el.dataset.say, { antiguo: !!el.dataset.antiguo }); return; }
    if (el.dataset.courseSet) { setCourse(el.dataset.courseSet); ui.sheet = null; render(); return; }
    if (el.dataset.go) { if (el.dataset.courseGo) setCourse(el.dataset.courseGo); go(el.dataset.go, el.dataset.param || null); return; }
    const act = el.dataset.act;
    if (!act) return;
    const c = ui.course;
    switch (act) {
      case 'courses': ui.sheet = 'courses'; render(); break;
      case 'sheet-close': ui.sheet = null; render(); break;
      case 'install': if (ui.installEvt) { ui.installEvt.prompt(); ui.installEvt.userChoice.finally(() => { ui.installEvt = null; render(); }); } break;
      case 'hide-install': P().ui.ocultarInstalar = true; ST.mark('perfil'); render(); break;
      case 'update': if (ui.update && ui.update.waiting) ui.update.waiting.postMessage('skipWaiting'); else location.reload(); break;
      case 'check-update': if (window.__swReg) { toast('Comprobando… Si hay una versión nueva, verás un aviso arriba.'); window.__swReg.update().catch(() => toast('No he podido comprobarlo: ¿estás sin conexión?')); } else toast('Las actualizaciones funcionan con la app instalada.'); break;
      case 'week': ui.week = Number(el.dataset.n); render(); break;
      case 'lesson-done': {
        const l = lessonById(c, el.dataset.id); if (!l) break;
        L(c).lec[l.id] = todayStr(); ST.mark(c); commitAct(); ses = null;
        toast(`Lección terminada: ${l.vocab.length} tarjetas nuevas en Repasar.`); go('aprender'); break;
      }
      case 'ex-pick': { const st = ui.ex[el.dataset.k]; if (st && st.pick == null) { st.pick = Number(el.dataset.j); render(); } break; }
      case 'ex-build': { const st = ui.ex[el.dataset.k]; if (st) { st.built.push(Number(el.dataset.j)); st.checked = false; render(); } break; }
      case 'ex-unbuild': { const st = ui.ex[el.dataset.k]; if (st) { st.built.splice(Number(el.dataset.n), 1); st.checked = false; render(); } break; }
      case 'ex-check': { const st = ui.ex[el.dataset.k]; if (st) { st.checked = true; render(); } break; }
      case 'ex-reveal': { const st = exState(el.dataset.k); st.reveal = true; render(); break; }
      case 'ex-say': {
        const st = exState(el.dataset.k), target = el.dataset.x;
        st.listening = true; st.err = ''; render();
        VO.TTS.stop();
        VO.STT.listen(courseOf(c).oido, {
          maxMs: 7000,
          onresult: alts => { const b = K.bestMatch(alts, target); st.heard = b.text; st.score = b.score; },
          onerror: err => { st.err = sttError(err); },
          onend: () => { st.listening = false; if (ui.view === 'leccion') render(); }
        });
        break;
      }
      case 'word': {
        const r = readingById(c, ui.param); if (!r) break;
        const w = el.textContent, key = K.foldKey(w);
        const sents = r.texto.split(/(?<=[.!?»;:])\s+/);
        const sent = sents.find(s => K.foldKey(s).indexOf(key) >= 0) || '';
        ui.word = { w, i: Number(el.dataset.i), gloss: glossFor(r, w), sent: sent.slice(0, 300), antiguo: !!r.antiguo };
        render(); say(c, w, { antiguo: !!r.antiguo }); break;
      }
      case 'word-close': ui.word = null; render(); break;
      case 'word-card': {
        const w = ui.word; if (!w) break;
        const meaning = w.ai || w.gloss;
        if (!meaning) { toast(aiReady() ? 'Primero pulsa «Explícamela».' : 'Esta palabra no tiene traducción guardada.'); break; }
        toast(addCard(c, w.w, meaning, 'Lectura') ? 'Añadida a tus tarjetas.' : 'Ya estaba en tus tarjetas.'); break;
      }
      case 'word-ask': askWord(); break;
      case 'read-all': { const r = readingById(c, ui.param); if (r) say(c, r.texto.replace(/—/g, ''), { antiguo: !!r.antiguo }); break; }
      case 'stop': VO.TTS.stop(); break;
      case 'tr-toggle': ui.showTr[ui.param] = !ui.showTr[ui.param]; render(); break;
      case 'reading-done': {
        const r = readingById(c, el.dataset.id); if (!r) break;
        L(c).lee[r.id] = { d: todayStr() }; ST.mark(c); commitAct(); toast('Lectura marcada como leída.'); render(); break;
      }
      case 'gen-delete': { G(c).l = G(c).l.filter(r => r.id !== el.dataset.id); ST.mark(c + '-generadas'); go('aprender'); break; }
      case 'gen-reading': genReading(c); break;
      case 'gen-clear': G(c).l = []; ST.mark(c + '-generadas'); render(); break;
      case 'flip': if (ses) { ses.flip = true; render(); } break;
      case 'grade': gradeCard(Number(el.dataset.g)); break;
      case 'drill-mode': P().ajustes.drill[c] = el.dataset.m; ST.mark('perfil'); drillStop(); render(); break;
      case 'drill-toggle': if (DR.on) { drillStop(); render(); } else { DR.on = true; DR.c = c; render(); drillStep(); } break;
      case 'drill-next': { const was = DR.on; drillStop(); DR.i = (DR.i + 1) % Math.max(1, DR.items.length); render(); if (was) { DR.on = true; render(); drillStep(); } break; }
      case 'drill-show': ui.showDrill = !ui.showDrill; render(); break;
      case 'slow': say(c, el.dataset.text, { rate: 0.6 }); break;
      case 'rec-toggle': {
        const st = ui.rec;
        if (st.recording) {
          VO.REC.stop().then(url => { st.recording = false; if (st.url) URL.revokeObjectURL(st.url); st.url = url; render(); });
        } else {
          VO.TTS.stop();
          VO.REC.start().then(() => { st.recording = true; st.err = ''; render(); }).catch(err => { st.err = (err && err.name === 'NotAllowedError') ? 'Sin permiso para el micrófono.' : 'No he podido usar el micrófono.'; render(); });
        }
        break;
      }
      case 'rec-check': {
        const st = ui.rec, target = el.dataset.x;
        st.listening = true; st.err = ''; render(); VO.TTS.stop();
        VO.STT.listen(courseOf(c).oido, {
          maxMs: 8000,
          onresult: alts => { const b = K.bestMatch(alts, target); st.heard = b.text; st.score = b.score; },
          onerror: err => { st.err = sttError(err); },
          onend: () => { st.listening = false; if (ui.view === 'grabar') render(); }
        });
        break;
      }
      case 'g-next': case 'g-prev': {
        const n = grabarItems(c).length, st = ui.rec;
        st.i = ((st.i || 0) + (act === 'g-next' ? 1 : n - 1)) % n;
        if (st.url) URL.revokeObjectURL(st.url);
        st.url = null; st.heard = null; st.score = null; st.err = '';
        render(); break;
      }
      case 'log-esc': addSeconds(c, 'esc', Number(el.dataset.m) * 60); render(); break;
      case 'chat-scene': { const st = chatState(c); st.esc = el.dataset.s; st.turns = []; st.review = null; st.err = ''; render(); break; }
      case 'chat-start': chatCall(c); break;
      case 'chat-stop': { const st = chatState(c); if (st.ctl) st.ctl.abort(); break; }
      case 'chat-reset': { const st = chatState(c); st.turns = []; st.review = null; st.err = ''; render(); break; }
      case 'chat-review': chatReview(c); break;
      case 'chat-tr': translateMsg(c, Number(el.dataset.i)); break;
      case 'chat-mic': {
        const st = chatState(c);
        st.listening = true; render(); VO.TTS.stop();
        VO.STT.listen(courseOf(c).oido, {
          maxMs: 10000,
          onresult: alts => { const ta = $('#chatin'); const prev = ta ? ta.value : ''; st.draft = (prev ? prev + ' ' : '') + alts[0]; },
          onerror: err => { st.err = sttError(err); },
          onend: () => { st.listening = false; if (ui.view !== 'chat') return; render(); const ta = $('#chatin'); if (ta && st.draft != null) { ta.value = st.draft; st.draft = null; ta.focus(); } }
        });
        break;
      }
      case 'rev-card': {
        const st = chatState(c), p = st.review && st.review.palabras && st.review.palabras[Number(el.dataset.i)];
        if (p) toast(addCard(c, String(p.t), String(p.es), 'Conversación') ? 'Añadida a tus tarjetas.' : 'Ya estaba en tus tarjetas.');
        break;
      }
      case 'ia-test': {
        const a = P().ajustes.ia;
        ui.iaTest = 'Probando…'; render();
        AI.run({ key: a.key, model: a.rapido, maxTokens: 600, effort: 'low', messages: [{ role: 'user', content: 'Responde solo con la palabra: listo' }] })
          .then(() => { ui.iaTest = 'Funciona.'; }).catch(err => { ui.iaTest = AI.message(err); }).finally(() => { if (ui.view === 'ajustes') render(); });
        break;
      }
      case 'backup-save': saveBackup(); break;
    }
  });

  // ---------------- Arranque ----------------
  function registerSW() {
    if (!('serviceWorker' in navigator)) return;
    if (!(location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) return;
    navigator.serviceWorker.register('sw.js').then(reg => {
      window.__swReg = reg;
      const show = () => { ui.update = reg; renderStatus(); };
      if (reg.waiting && navigator.serviceWorker.controller) show();
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        if (nw) nw.addEventListener('statechange', () => { if (nw.state === 'installed' && navigator.serviceWorker.controller) show(); });
      });
    }).catch(() => { /* sin service worker */ });
    let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (reloaded) return; reloaded = true; location.reload(); });
  }
  async function boot() {
    VO.TTS.load();
    VO.TTS.onvoices = () => { if (ui.view === 'ajustes') render(); };
    await ST.init(defaultFor);
    ST.onerror = () => renderStatus();
    ui.course = CONTENT[P().cursoActivo] ? P().cursoActivo : ACTIVE[0].id;
    if (!location.hash) history.replaceState(null, '', '#hoy');
    route();
    registerSW();
    ST.persist().then(ok => { const el = $('#persist-note'); if (el) el.textContent = ok ? 'El navegador no borrará tus datos.' : ''; });
  }
  boot();
})();
