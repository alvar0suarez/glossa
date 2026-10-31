// Glossa · interfaz: rutas, vistas y eventos.
// render() compone el HTML de la vista y lo aplica sobre el DOM que ya hay, nodo a nodo (sin reconstruirlo):
// así un toque nunca mueve la página ni pierde el foco. Solo un cambio de ruta vuelve arriba.
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
      if (touch && sw > 0 && iw > sw * 1.25) z = iw / sw;
      // Respaldo: la página se ha cargado «alejada», como una web de escritorio en un móvil.
      const vv = window.visualViewport;
      if (vv && vv.scale > 0.2 && vv.scale < 0.85 && iw >= 600) z = Math.max(z, 1 / vv.scale);
      z = Math.min(4, Math.round(z * 100) / 100);
      const ew = iw / z, wide = ew >= 680, mid = wide && ew <= 900;
      const changed = wide !== o.matches || mid !== o.mid || z !== o.zoom;
      o.matches = wide; o.mid = mid; o.zoom = z;
      de.classList.toggle('wide', wide); de.classList.toggle('mid', mid); de.classList.toggle('zoomed', z > 1);
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
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em class="t">$1</em>');
  const todayStr = () => K.localDateStr();
  const today = () => K.todayNum();
  const isStandalone = () => (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent || '');
  const lower = c => courseOf(c).nombre.toLowerCase();
  const corto = c => courseOf(c).nombre.split(' ')[0];
  const pct = (a, b) => (b > 0 ? Math.round(a / b * 100) : 0);
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const clip = (s, n) => { s = String(s == null ? '' : s).trim(); return s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s; };
  const str = v => typeof v === 'string' && v.trim().length > 0;
  const cleanT = s => String(s || '').replace(/…/g, ' ').replace(/\s+/g, ' ').trim();
  const WORD_RE = /[\p{L}\p{M}'’-]+/u;
  function rng(seed) {
    let a = (seed >>> 0) || 1;
    return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function shuf(arr, R) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); const x = a[i]; a[i] = a[j]; a[j] = x; } return a; }

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
    cross: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    camera: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h3l2-2.5h6L17 8h3v11H4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
    rec: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="6" fill="currentColor"/></svg>',
    stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="6.5" width="11" height="11" rx="2" fill="currentColor"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
    undo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 14L4 9l5-5M4 9h10.5a5.5 5.5 0 0 1 0 11H11" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" fill="currentColor"/></svg>'
  };

  // ---------------- Datos ----------------
  // Documentos: perfil · <c> · <c>-tarjetas · <c>-propias · <c>-generadas · <c>-niveles (unidades de los niveles 2 y 3).
  // Campos nuevos en <c>: prog (por dónde vas en cada lección), ejs (ejercicios por día: {n, ok}), fallos (ejercicios fallados).
  function defaultFor(k) {
    if (k === 'perfil') return {
      cursoActivo: 'pl', nombre: '', pareja: { nombre: '', familia: '' }, cursos: {},
      ajustes: {
        nuevas: { pl: 30, la: 20 }, rate: 0.9, pausa: 4, voces: { pl: '', es: '' }, autoAudio: true, escucharme: true,
        drill: { pl: 'producir', la: 'entender' }, ia: { key: '', modelo: 'claude-sonnet-5-5', rapido: 'claude-haiku-5-5' },
        minutos: {}, vozpro: {}
      },
      ui: { ocultarInstalar: false, ultimaCopia: '' }
    };
    if (/-tarjetas$/.test(k)) return { c: {}, nh: { d: 0, n: 0 } };
    if (/-propias$/.test(k)) return { c: {} };
    if (/-generadas$/.test(k)) return { l: [] };
    if (/-niveles$/.test(k)) return { u: {} };
    return { lec: {}, lee: {}, min: {}, ctrl: {}, err: [], par: { ultima: '', n: 0 }, prog: {}, ejs: {}, fallos: {} };
  }
  const P = () => ST.doc('perfil');
  const L = c => ST.doc(c);
  const T = c => ST.doc(c + '-tarjetas');
  const PR = c => ST.doc(c + '-propias');
  const G = c => ST.doc(c + '-generadas');
  const NV = c => ST.doc(c + '-niveles');
  const inicio = c => (P().cursos[c] && P().cursos[c].inicio) || START;
  const curWeek = c => K.weekOf(inicio(c), todayStr());
  const nuevasDia = c => (P().ajustes.nuevas[c] != null ? P().ajustes.nuevas[c] : 20);
  const ella = () => (P().pareja.nombre || '').trim() || 'tu chica';
  const aiReady = () => !!(P().ajustes.ia.key || '').trim();

  // Cursos en curso o en pausa (perfil.cursos[c].estado). Polaco y latín empiezan en curso.
  const EN_CURSO = { pl: 1, la: 1 };
  const estadoDe = c => { const x = P().cursos[c]; return (x && x.estado) || (EN_CURSO[c] ? 'curso' : 'pausa'); };
  const enCurso = c => estadoDe(c) === 'curso';
  const running = () => ACTIVE.filter(co => enCurso(co.id));
  function setEstado(c, estado, desdeHoy) {
    const x = Object.assign({}, P().cursos[c], { estado });
    if (desdeHoy) x.inicio = todayStr();
    P().cursos[c] = x; ST.mark('perfil');
  }
  function startBtn(c, cls) {
    const again = !!(P().cursos[c] && P().cursos[c].estado);
    return `<button class="btn ${cls || 'small primary'}" data-act="${again ? 'course-resume' : 'course-start'}" data-c="${c}">${again ? 'Reanudar' : 'Empezar'}</button>`;
  }

  // ---------------- Contenido ----------------
  const C = c => CONTENT[c];
  for (const k in CONTENT) if (Array.isArray(CONTENT[k].semanas)) CONTENT[k].semanas.sort((a, b) => a.n - b.n);
  const weekData = (c, n) => (C(c).semanas || []).find(s => s.n === n) || null;
  const semTitulo = (c, w) => (C(c).semanasTitulos || [])[w - 1] || 'Semana ' + w;
  function niveles(c) {
    const n = C(c).niveles;
    return Array.isArray(n) && n.length ? n : [{ n: 1, nombre: 'Nivel 1', lema: courseOf(c).meta, semanas: [1, 2, 3, 4, 5, 6, 7, 8] }];
  }
  // Ids de los niveles generados: <c>-n2u1-1 (lección), <c>-n2u1-r1 (lectura)
  const GEN_RE = /^([a-z]+)-n(\d+)u(\d+)-(r?)(\d+)$/;
  const ukey = (n, u) => 'n' + n + 'u' + u;
  const genId = (c, k, j, r) => c + '-' + k + '-' + (r ? 'r' : '') + (j + 1);
  function allLessons(c) {
    const out = [];
    for (const s of C(c).semanas || []) (s.lecciones || []).forEach((l, i) => out.push(Object.assign({ semana: s.n, num: i + 1, nv: 1, un: s.n, uk: ukey(1, s.n) }, l)));
    for (const lv of niveles(c)) {
      if (!Array.isArray(lv.temario)) continue;
      lv.temario.forEach((_, i) => {
        const k = ukey(lv.n, i + 1), g = NV(c).u[k];
        if (g && Array.isArray(g.lecciones)) g.lecciones.forEach((l, j) => { if (l && l.id) out.push(Object.assign({ num: j + 1, nv: lv.n, un: i + 1, uk: k }, l)); });
      });
    }
    return out;
  }
  function allReadings(c) {
    const out = [];
    for (const s of C(c).semanas || []) (s.lecturas || []).forEach(r => out.push(Object.assign({ semana: s.n, nv: 1, un: s.n, uk: ukey(1, s.n) }, r)));
    for (const lv of niveles(c)) {
      if (!Array.isArray(lv.temario)) continue;
      lv.temario.forEach((_, i) => {
        const k = ukey(lv.n, i + 1), g = NV(c).u[k];
        if (g && Array.isArray(g.lecturas)) g.lecturas.forEach(r => { if (r && r.id) out.push(Object.assign({ nv: lv.n, un: i + 1, uk: k }, r)); });
      });
    }
    for (const g of G(c).l) out.push(Object.assign({ gen: true }, g));
    return out;
  }
  const lessonById = (c, id) => allLessons(c).find(l => l.id === id) || null;
  const readingById = (c, id) => allReadings(c).find(r => r.id === id) || null;
  const nextLesson = c => allLessons(c).find(l => !L(c).lec[l.id]) || null;
  const nextReading = c => allReadings(c).find(r => !L(c).lee[r.id] && !r.antiguo) || allReadings(c).find(r => !L(c).lee[r.id]) || null;
  function courseOfItem(id) {
    const m = GEN_RE.exec(id || '');
    if (m && CONTENT[m[1]]) return m[1];
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
    let due = 0, fresh = 0, learned = 0, cons = 0, seen = 0;
    for (const id of defs.keys()) {
      const s = st[id];
      if (s) { seen++; if (s[3] > 0 || s[4] > 0) learned++; if (s[1] >= 21) cons++; if (s[0] <= td) due++; } else fresh++;
    }
    return { due, fresh: Math.min(fresh, Math.max(0, nuevasDia(c) - newToday(c))), unseen: fresh, learned, cons, seen, total: defs.size };
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

  // ---------------- Niveles, unidades y ruta ----------------
  // Nivel 1 = las 8 semanas del curso (unidad = semana). Niveles 2 y 3: un temario de 8 unidades que Claude prepara.
  function unitsOf(c, n) {
    const lv = niveles(c).find(x => x.n === n);
    if (!lv) return [];
    if (!Array.isArray(lv.temario)) return (lv.semanas || []).map(w => {
      const wd = weekData(c, w), k = ukey(n, w);
      return {
        key: k, nv: n, un: w, semana: w, titulo: semTitulo(c, w), resumen: (C(c).programa || [])[w - 1] || '', ready: !!wd, gen: false,
        lecciones: wd ? wd.lecciones.map((l, i) => Object.assign({ semana: w, num: i + 1, nv: n, un: w, uk: k }, l)) : [],
        lecturas: wd ? (wd.lecturas || []).map(r => Object.assign({ semana: w, nv: n, un: w, uk: k }, r)) : []
      };
    });
    return lv.temario.map((tema, i) => {
      const k = ukey(n, i + 1), g = NV(c).u[k], plan = g && g.plan;
      const ls = plan ? (plan.lecciones || []).map((p, j) => {
        const l = g.lecciones && g.lecciones[j];
        return l && l.id ? Object.assign({ num: j + 1, nv: n, un: i + 1, uk: k }, l) : { id: genId(c, k, j), titulo: p.titulo, foco: p.foco, num: j + 1, nv: n, un: i + 1, uk: k, pend: true };
      }) : [];
      const rs = plan ? (plan.lecturas || []).map((p, j) => {
        const r = g.lecturas && g.lecturas[j];
        return r && r.id ? Object.assign({ nv: n, un: i + 1, uk: k }, r) : { id: genId(c, k, j, true), titulo: p.titulo, foco: p.foco, nv: n, un: i + 1, uk: k, pend: true };
      }) : [];
      return { key: k, nv: n, un: i + 1, tema, titulo: (plan && plan.titulo) || tema, resumen: plan && Array.isArray(plan.objetivos) ? plan.objetivos.join(' · ') : '', ready: !!plan, gen: true, lecciones: ls, lecturas: rs };
    });
  }
  function unitOrder(u) {
    const ls = u.lecciones.map(x => Object.assign({ r: false }, x)), rs = u.lecturas.map(x => Object.assign({ r: true }, x));
    if (!u.gen) return ls.concat(rs);
    const out = [];
    ls.forEach((l, i) => { out.push(l); if (i === 2 && rs.length) out.push(rs.shift()); });
    return out.concat(rs);
  }
  function unitStats(c, u) {
    const ld = u.lecciones.filter(l => !l.pend && L(c).lec[l.id]).length, rd = u.lecturas.filter(r => !r.pend && L(c).lee[r.id]).length;
    return { ld, lt: u.lecciones.length, rd, rt: u.lecturas.length, done: u.ready && u.lecciones.length > 0 && ld === u.lecciones.length && rd === u.lecturas.length };
  }
  function levelStats(c, n) {
    const lv = niveles(c).find(x => x.n === n);
    const s = { done: 0, total: 0, rdone: 0, rtotal: 0, missing: 0, p: 0 };
    if (!lv) return s;
    for (const u of unitsOf(c, n)) {
      if (!u.ready) {
        if (u.gen) { s.total += 6; s.rtotal += 2; } else s.missing++;
        continue;
      }
      const st = unitStats(c, u);
      s.done += st.ld; s.total += st.lt; s.rdone += st.rd; s.rtotal += st.rt;
    }
    s.p = s.total ? s.done / s.total : 0;
    return s;
  }
  function nivelAbierto(c, n) {
    if (n <= 1) return true;
    const x = P().cursos[c];
    if (x && x.abierto >= n) return true;
    if (!nivelAbierto(c, n - 1)) return false;
    const s = levelStats(c, n - 1);
    return !s.missing && s.total > 0 && s.p >= 0.8;
  }
  function currentUnit(c) {
    const nl = nextLesson(c);
    if (nl) return { nv: nl.nv, uk: nl.uk };
    for (const lv of niveles(c)) {
      if (!nivelAbierto(c, lv.n)) break;
      for (const u of unitsOf(c, lv.n)) if (!unitStats(c, u).done) return { nv: lv.n, uk: u.key };
    }
    return null;
  }
  const curLevelNum = c => { const u = currentUnit(c); return u ? u.nv : 1; };
  function unitTitle(c, uk) {
    const m = /^n(\d+)u(\d+)$/.exec(uk || ''); if (!m) return '';
    const u = unitsOf(c, +m[1]).find(x => x.key === uk);
    return u ? u.titulo : '';
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
  // kind: una clave ('lec'), varias (['aud', 'esc']) o nada (todo el día)
  function minutes(c, kind, dayS) {
    const d = L(c).min[dayS || todayStr()] || {};
    const kinds = Array.isArray(kind) ? kind : kind ? [kind] : null;
    let s = kinds ? kinds.reduce((a, k) => a + (d[k] || 0), 0) : Object.values(d).reduce((a, b) => a + b, 0);
    if ((!dayS || dayS === todayStr()) && ACT.c === c && ACT.kind && (!kinds || kinds.indexOf(ACT.kind) >= 0)) s += ACT.acc;
    return Math.round(s / 60);
  }
  function streak() {
    const tot = ds => ACTIVE.reduce((a, co) => a + minutes(co.id, null, ds), 0);
    let n = 0, d = today();
    if (tot(K.dayStr(d)) < 20) d -= 1;
    while (n < 400 && tot(K.dayStr(d)) >= 20) { n++; d--; }
    return n;
  }

  // ---------------- Resultados de ejercicios ----------------
  function logEx(c, ok) {
    const d = todayStr(), e = L(c).ejs, x = e[d] || (e[d] = { n: 0, ok: 0 });
    x.n++; if (ok) x.ok++;
    ST.mark(c);
  }
  function accuracy(c, days) {
    const td = today(); let n = 0, ok = 0;
    for (let d = td - days + 1; d <= td; d++) { const x = L(c).ejs[K.dayStr(d)]; if (x) { n += x.n || 0; ok += x.ok || 0; } }
    return { n, ok };
  }
  const errOf = e => 'err:' + K.hash(e.mejor + '|' + e.dijiste);
  const errItems = c => L(c).err.filter(e => e.dijiste && e.mejor && !e.dom && K.normSentence(e.dijiste) !== K.normSentence(e.mejor));
  const errCount = c => Object.keys(L(c).fallos).length + errItems(c).length;
  function noteFallo(c, it, ok, mode, first) {
    if (!it || !it.k) return;
    const f = L(c).fallos;
    if (!ok) {
      const x = f[it.k];
      f[it.k] = { n: (x ? x.n : 0) + 1, d: todayStr(), q: clip(questionText(it), 90), a: clip(answerOf(it), 90) };
      const keys = Object.keys(f);
      if (keys.length > 200) keys.sort((a, b) => (f[a].d < f[b].d ? -1 : 1)).slice(0, keys.length - 200).forEach(k => { delete f[k]; });
      ST.mark(c);
      return;
    }
    if (first && (mode === 'mezcla' || mode === 'errores')) {
      if (f[it.k]) { delete f[it.k]; ST.mark(c); }
      if (it.tipo === 'corr') { const e = L(c).err.find(x => errOf(x) === it.k); if (e) { e.dom = 1; ST.mark(c); } }
    }
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
    if (co.voz === 'grc-erasmo') {
      o.voice = P().ajustes.voces.es;
      VO.TTS.speak(K.greekToSpanish ? K.greekToSpanish(text) : text, 'es-ES', o);
      return;
    }
    o.voice = P().ajustes.voces[c] || '';
    VO.TTS.speak(text, co.voz || 'es-ES', o);
  }
  const sayEs = (text, o) => VO.TTS.speak(text, 'es-ES', Object.assign({ rate: P().ajustes.rate, voice: P().ajustes.voces.es }, o || {}));
  const sayBtn = (c, text, label, antiguo, cls) => `<button class="say${cls ? ' ' + cls : ''}" type="button" data-say="${esc(text)}" data-c="${c}"${antiguo ? ' data-antiguo="1"' : ''} aria-label="${esc(label || 'Escuchar')}">${I.play}</button>`;
  const canHear = c => VO.STT.ok && !!courseOf(c).oido;
  // Si el micrófono falla sin remedio (sin permiso, sin soporte), los «decir» pasan a «Ver respuesta» hasta recargar.
  const micOk = c => canHear(c) && !ui.noMic;
  function sttError(err) {
    if (err === 'not-allowed' || err === 'service-not-allowed') return 'Sin permiso para el micrófono. Actívalo en los ajustes del navegador para esta app.';
    if (err === 'no-speech') return 'No te he oído. Pulsa y habla cerca del móvil.';
    if (err === 'network') return 'El reconocimiento de voz necesita conexión a internet.';
    if (err === 'no-support') return 'Este navegador no reconoce la voz. Usa Chrome.';
    if (err === 'language-not-supported') return 'El móvil no reconoce este idioma.';
    return 'No he podido escucharte (' + err + ').';
  }
  const verdict = s => s >= 0.85 ? ['okmsg', '¡Bien dicho!'] : s >= 0.6 ? ['midmsg', 'Casi. Escucha el modelo y repite.'] : ['badmsg', 'Otra vez: escucha el modelo.'];

  // ---------------- Estado de la interfaz y rutas ----------------
  const ui = {
    view: 'hoy', param: null, course: 'pl', ex: {}, word: null, sheet: null, update: null, installEvt: null, flow: false, ply: null,
    gen: { busy: false, err: '' }, texto: { busy: false, err: '', progress: '' }, rec: {}, showDrill: false, showTr: {}, iaTest: '',
    nivel: {}, open: {}, persist: ''
  };
  const ACT_OF = { repasar: 'rep', practicar: 'rep', ejercicios: 'rep', errores: 'rep', leccion: 'lec', lectura: 'lee', drill: 'aud', grabar: 'hab', chat: 'con', texto: 'lee' };
  const VIEWS = ['hoy', 'aprender', 'leccion', 'lectura', 'texto', 'repasar', 'practicar', 'ejercicios', 'errores', 'hablar', 'drill', 'grabar', 'chat', 'escucha', 'pareja', 'progreso', 'ajustes'];
  const splitParam = p => { const s = String(p || ''), i = s.indexOf('/'); return i < 0 ? [s, ''] : [s.slice(0, i), s.slice(i + 1)]; };

  function setCourse(c) {
    if (!CONTENT[c] || c === ui.course) return;
    commitAct(); drillStop(); stopRec(); vocStop(); hfStop();
    ui.course = c; P().cursoActivo = c; ST.mark('perfil');
    ses = null; DR.items = [];
    const a = ACT_OF[ui.view]; if (a) { ACT.kind = null; setAct(a); }
  }
  function parseHash() {
    const h = decodeURIComponent((location.hash || '#hoy').slice(1));
    const i = h.indexOf('/');
    return i < 0 ? { view: h || 'hoy', param: null } : { view: h.slice(0, i), param: h.slice(i + 1) };
  }
  // Historial: cada entrada guarda su profundidad (d), la ruta anterior (prev) y el scroll (y),
  // para que «Volver» y el gesto atrás de Android hagan lo mismo y la página vuelva a su sitio.
  let lastHash = '';
  const navState = () => history.state || {};
  const scrollY = () => Math.max(window.scrollY || 0, document.body.scrollTop || 0);
  function saveScroll() { try { history.replaceState(Object.assign({}, navState(), { y: Math.round(scrollY()) }), ''); } catch (e) { /* nada */ } }
  function setHashQuiet(h) { try { history.replaceState(navState(), '', h); } catch (e) { /* nada */ } lastHash = location.hash; }
  function go(view, param, o) {
    const h = '#' + view + (param ? '/' + encodeURIComponent(param) : '');
    if (location.hash === h) { route(); return; }
    saveScroll();
    const s = navState();
    if (o && o.replace) history.replaceState({ d: s.d || 0, prev: s.prev || '' }, '', h);
    else history.pushState({ d: (s.d || 0) + 1, prev: location.hash }, '', h);
    route();
  }
  const viewOf = h => decodeURIComponent(String(h || '').replace(/^#/, '')).split('/')[0];
  function back(to, param) {
    const s = navState();
    if (s.d > 0 && s.prev && viewOf(s.prev) === to) history.back();
    else go(to, param || null, { replace: true });
  }
  function closeFlow(to) { if (navState().d > 0) history.back(); else go(to, null, { replace: true }); }
  function route(pop) {
    lastHash = location.hash;
    const r = parseHash();
    VO.TTS.stop(); drillStop(); VO.STT.stop(); stopRec(); vocStop(); hfStop();
    ui.view = VIEWS.indexOf(r.view) >= 0 ? r.view : 'hoy';
    ui.param = r.param; ui.word = null; ui.sheet = null;
    if ((ui.view === 'leccion' || ui.view === 'lectura') && ui.param) { const c = courseOfItem(splitParam(ui.param)[0]); if (c) setCourse(c); }
    if (ui.view === 'pareja' && ui.course !== 'pl') setCourse('pl');
    const a = ACT_OF[ui.view];
    if (a) setAct(a); else { commitAct(); ACT.kind = null; }
    const y = pop === true ? navState().y : 0;
    render({ top: true });
    if (y > 0) { window.scrollTo(0, y); document.body.scrollTop = y; }
    // al entrar en un ejercicio o una tarjeta, que suene sin tener que tocar el altavoz
    if (ui.ply) autoPlay(ui.ply);
    else if (ui.view === 'repasar' && ses && ses.pos < ses.queue.length && !ses.flip && P().ajustes.autoAudio) { const d = ses.defs.get(ses.queue[ses.pos]); if (d) say(ui.course, d.t); }
  }
  function toast(msg) {
    const el = $('#toast');
    if (el) { el.textContent = msg; el.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => { el.hidden = true; }, 3400); }
  }

  // ---------------- Pintar sin reconstruir ----------------
  // Empareja los nodos nuevos con los que ya hay (por posición, tipo y data-key/id) y solo cambia lo distinto.
  // data-keep: no tocar lo escrito en un campo · data-own: el contenido lo gestiona otro módulo (VozPro).
  const keyOf = n => (n.nodeType === 1 ? (n.getAttribute('data-key') || n.id || '') : '');
  const same = (a, b) => a.nodeType === b.nodeType && a.nodeName === b.nodeName && keyOf(a) === keyOf(b) && (a.nodeName !== 'INPUT' || a.type === b.type);
  function morphKids(from, to) {
    let f = from.firstChild, t = to.firstChild;
    while (t) {
      const tn = t.nextSibling;
      if (!f) { from.appendChild(t); t = tn; continue; }
      if (same(f, t)) { patchNode(f, t); f = f.nextSibling; t = tn; continue; }
      const fn = f.nextSibling;
      if (fn && same(fn, t) && !(tn && same(f, tn))) { from.removeChild(f); f = fn; continue; }
      from.insertBefore(t, f); t = tn;
    }
    while (f) { const n = f.nextSibling; from.removeChild(f); f = n; }
  }
  function patchNode(f, t) {
    if (f.nodeType !== 1) { if (f.nodeValue !== t.nodeValue) f.nodeValue = t.nodeValue; return; }
    if (f.hasAttribute('data-own') && t.hasAttribute('data-own')) return;
    const keep = f.hasAttribute('data-keep');
    const fa = f.attributes;
    for (let i = fa.length - 1; i >= 0; i--) { const n = fa[i].name; if (!t.hasAttribute(n) && !(keep && n === 'open')) f.removeAttribute(n); }
    for (const a of Array.from(t.attributes)) { if (keep && a.name === 'open') continue; if (f.getAttribute(a.name) !== a.value) f.setAttribute(a.name, a.value); }
    const tag = f.nodeName, focused = document.activeElement === f;
    if (tag === 'INPUT') {
      if (f.type === 'checkbox' || f.type === 'radio') f.checked = t.hasAttribute('checked');
      else if (f.type !== 'file' && !keep && !focused) { const v = t.getAttribute('value') || ''; if (f.value !== v) f.value = v; }
      return;
    }
    if (tag === 'TEXTAREA') { if (!keep && !focused && f.value !== t.value) f.value = t.value; return; }
    morphKids(f, t);
    if (tag === 'SELECT' && !focused) { const o = f.querySelector('option[selected]'); f.selectedIndex = o ? o.index : 0; }
  }
  function patchHtml(el, html) { const tpl = document.createElement('div'); tpl.innerHTML = html; morphKids(el, tpl); }
  function render(o) {
    o = o || {};
    const wy = window.scrollY, by = document.body.scrollTop;
    ui.flow = false; ui.ply = null;
    const main = viewHtml();
    document.body.dataset.course = ui.course;
    document.body.classList.toggle('flow', ui.flow);
    document.body.classList.toggle('sheet-open', !!(ui.word && ui.view === 'lectura' && !WIDE_Q.matches));
    patchHtml($('#app'), `<div class="shell">${rail()}<div class="content">${ui.flow ? '' : topbar()}<div id="status" role="status">${statusHtml()}</div><main id="main" class="v-${ui.view}">${main}</main></div>${ui.flow ? '' : tabs()}</div>${sheetHtml()}`);
    if (o.top) { window.scrollTo(0, 0); document.body.scrollTop = 0; $$('.col-side').forEach(e => { e.scrollTop = 0; }); }
    else {
      if (Math.abs(window.scrollY - wy) > 1) window.scrollTo(window.scrollX, wy);
      if (Math.abs(document.body.scrollTop - by) > 1) document.body.scrollTop = by;
    }
    afterRender();
  }
  function afterRender() {
    if (ui.view === 'ajustes') mountVozPro();
    if (ui.view === 'chat') chatScroll();
  }
  function mountVozPro() {
    const el = document.getElementById('vozpro');
    if (!el || !window.VozPro || el.__vp) return;
    el.__vp = true;
    try { window.VozPro.renderSettings(el, P().ajustes, () => ST.mark('perfil')); } catch (e) { el.hidden = true; }
  }
  function renderStatus() { const el = $('#status'); if (el) el.innerHTML = statusHtml(); }

  // ---------------- Marco ----------------
  const NAV = [['hoy', I.home, 'Hoy'], ['aprender', I.book, 'Aprender'], ['practicar', I.cards, 'Practicar'], ['hablar', I.talk, 'Hablar'], ['progreso', I.chart, 'Progreso']];
  const TAB_OF = { leccion: 'aprender', lectura: 'aprender', texto: 'aprender', repasar: 'practicar', ejercicios: 'practicar', errores: 'practicar', drill: 'hablar', grabar: 'hablar', chat: 'hablar', escucha: 'hablar', pareja: 'hablar', ajustes: 'progreso' };
  function navItem(n, rail) {
    const on = ui.view === n[0] || ((!rail || n[0] !== 'progreso') && TAB_OF[ui.view] === n[0]);
    let extra = '';
    if (n[0] === 'practicar') { const cc = cardCounts(ui.course), x = cc.due + cc.fresh; if (x) extra = `<b class="badge" aria-label="${x} tarjetas para hoy">${x}</b>`; }
    return `<button class="${on ? 'on' : ''}" data-go="${n[0]}"${on ? ' aria-current="page"' : ''}>${n[1]}<span>${n[2]}</span>${extra}</button>`;
  }
  function rail() {
    return `<aside class="rail" aria-label="Navegación"><div class="rail-brand"><img src="icons/icon-192.png" alt="" class="logo" width="38" height="38"><span>Glossa</span></div>
      <div class="rail-courses" role="group" aria-label="Idioma">${ACTIVE.map(co => `<button class="rc ${co.id === ui.course ? 'on' : ''}${enCurso(co.id) ? '' : ' paused'}" data-course="${co.id}" data-course-set="${co.id}" aria-pressed="${co.id === ui.course}" title="${esc(co.nombre)}${enCurso(co.id) ? '' : ' (en pausa)'}"><i class="dot${enCurso(co.id) ? '' : ' hollow'}"></i>${esc(corto(co.id))}</button>`).join('')}<button class="rc more" data-act="courses">Idiomas</button></div>
      <nav class="rail-nav">${NAV.concat([['ajustes', I.gear, 'Ajustes']]).map(n => navItem(n, true)).join('')}</nav></aside>`;
  }
  function topbar() {
    const co = courseOf(ui.course);
    return `<header class="top"><div class="brand"><img src="icons/icon-192.png" alt="" class="logo" width="30" height="30">Glossa</div>
      <button class="course-btn" data-act="courses" aria-haspopup="dialog"><i class="dot${enCurso(co.id) ? '' : ' hollow'}"></i>${esc(co.nombre)}<span class="chev" aria-hidden="true">▾</span></button>
      <button class="icon-btn" data-go="ajustes" aria-label="Ajustes">${I.gear}</button></header>`;
  }
  function tabs() { return `<nav class="tabs" aria-label="Secciones">${NAV.map(n => navItem(n, false)).join('')}</nav>`; }
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
      case 'practicar': return vPracticar();
      case 'ejercicios': return vSesion('mezcla');
      case 'errores': return vSesion('errores');
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
      return `<div class="overlay" data-act="sheet-close"></div><div class="sheet" role="dialog" aria-modal="true" aria-label="Tus idiomas"><div class="sheet-in"><div class="sheet-top"><strong>Tus idiomas</strong><button class="x" data-act="sheet-close" aria-label="Cerrar">${I.close}</button></div>
        <ul class="course-list">${ACTIVE.map(co => courseRow(co)).join('')}</ul><p class="hint">Los idiomas en pausa no aparecen en Hoy. Al empezar uno, su semana 1 cuenta desde ese día.</p></div></div>`;
    }
    if (ui.word && ui.view === 'lectura' && !WIDE_Q.matches) return `<div class="sheet word-sheet" role="dialog" aria-label="Traducción"><div class="sheet-in">${wordPanel()}</div></div>`;
    return '';
  }
  function courseRow(co) {
    const c = co.id, on = c === ui.course, run = enCurso(c);
    const info = run ? (allLessons(c).length ? `En curso · semana ${curWeek(c)} de 8` : 'En curso · lecciones en preparación') : 'En pausa';
    return `<li class="course-li" data-course="${c}"><button class="course-row ${on ? 'on' : ''}" data-course-set="${c}" aria-pressed="${on}"><i class="dot${run ? '' : ' hollow'}"></i><span><strong>${esc(co.nombre)}</strong><span class="muted small">${esc(co.meta)} · ${info}</span></span></button>${run ? '' : startBtn(c)}</li>`;
  }
  const backBtn = (to, label, param) => `<button class="back" data-act="back" data-to="${to}"${param ? ` data-param="${esc(param)}"` : ''}>${I.back}<span>${esc(label)}</span></button>`;
  const flowBar = (title, to, right) => `<header class="flowhead"><button class="icon-btn close" data-act="close" data-to="${to}" aria-label="Cerrar">${I.close}</button><div class="fh-main"><h1 class="fh-title">${title}</h1></div>${right || ''}</header>`;
  const actbar = (inner, tone) => `<div class="actbar${tone ? ' ' + tone : ''}" data-key="actbar"><div class="actbar-in">${inner}</div></div>`;
  const pausedBanner = c => `<div class="banner row-between"><span>${esc(courseOf(c).nombre)} está en pausa: no sale en Hoy.</span>${startBtn(c)}</div>`;

  // ---------------- Hoy ----------------
  // Plan diario por idioma: [clave de tiempo, nombre, minutos, vista, (claves que cuentan)]
  const TAREAS = {
    pl: [['rep', 'Tarjetas', 20, 'repasar'], ['aud', 'Audio para hablar', 30, 'drill'], ['lec', 'Lección del día', 60, 'leccion'], ['esc', 'Escucha nativa', 60, 'escucha'], ['lee', 'Lectura', 30, 'lectura'], ['con', 'Conversación', 45, 'chat']],
    la: [['rep', 'Tarjetas', 20, 'repasar'], ['lee', 'Lectura', 75, 'lectura'], ['lec', 'Lección y ejercicios', 30, 'leccion'], ['con', 'Escribir y hablar', 30, 'chat'], ['aud', 'Escucha', 25, 'drill']],
    it: [['rep', 'Tarjetas', 10, 'repasar'], ['lec', 'Lección del día', 20, 'leccion'], ['aud', 'Audio y escucha', 15, 'drill', ['aud', 'esc']]],
    grc: [['rep', 'Tarjetas', 15, 'repasar'], ['lec', 'Lección del día', 25, 'leccion'], ['lee', 'Lectura', 20, 'lectura']]
  };
  const EXTRA = { pl: 15 };   // sesión con ella
  const baseTasks = c => TAREAS[c] || TAREAS.la;
  const baseMin = c => baseTasks(c).reduce((a, t) => a + t[2], 0) + (EXTRA[c] || 0);
  function tasksFor(c) {
    const base = baseTasks(c), want = Number(P().ajustes.minutos[c]), b = baseMin(c), ex = EXTRA[c] || 0;
    if (!(want > 0) || want === b) return base;
    const target = Math.max(5 * base.length, want - ex), f = target / (b - ex);
    const out = base.map(t => [t[0], t[1], Math.max(5, Math.round(t[2] * f / 5) * 5), t[3], t[4]]);
    // el redondeo a 5 minutos no debe cambiar el total que has elegido
    const big = out.reduce((m, t, i) => (t[2] > out[m][2] ? i : m), 0);
    out[big][2] = Math.max(5, out[big][2] + target - out.reduce((a, t) => a + t[2], 0));
    return out;
  }
  const dayGoal = c => tasksFor(c).reduce((a, t) => a + t[2], 0) + (EXTRA[c] || 0);
  function parEstado() {
    const p = L('pl').par, td = today();
    if (!p.ultima) return { due: true, hoy: false, next: td };
    const last = K.dayNum(p.ultima);
    return { due: td - last >= 2, hoy: last === td, next: last + 2 };
  }
  function hoyCol(c) {
    const co = courseOf(c), w = curWeek(c), tasks = tasksFor(c), goal = dayGoal(c), done = minutes(c);
    const nl = nextLesson(c), nr = nextReading(c), cc = cardCounts(c), any = allLessons(c).length > 0;
    const lv2 = nl && nl.nv > 1;
    const sub = {
      rep: cc.due + cc.fresh ? `${cc.due + cc.fresh} para hoy` : (cc.total ? 'Al día. Si te sobra tiempo, ejercicios variados' : 'Termina una lección para tener tarjetas'),
      aud: courseOf(c).oido ? 'Frases de tus lecciones, sin mirar la pantalla' : 'Escucha y entiende tus frases',
      lec: nl ? nl.titulo : any ? 'Prepara la siguiente unidad en tu ruta' : 'Se está preparando',
      esc: 'Vídeos y pódcast de nativos',
      lee: nr ? nr.titulo : 'Crea una lectura nueva',
      con: aiReady() ? 'Con Claude, sobre los temas de la semana' : 'Necesita tu clave de Claude (Ajustes)'
    };
    if (c === 'it') sub.aud = 'Audio para hablar o escucha nativa';
    const target = { leccion: nl ? nl.id : '', lectura: nr ? nr.id : '' };
    const eyebrow = lv2 ? `${esc(co.nombre)} · nivel ${nl.nv} · unidad ${nl.un}` : `${esc(co.nombre)} · semana ${w} de 8 · ${esc(K.weekRange(inicio(c), w))}`;
    let h = `<section class="hoy-col" data-course="${c}"><div class="hero"><p class="eyebrow">${eyebrow}</p><h2 class="hero-title">${esc(lv2 ? unitTitle(c, nl.uk) : semTitulo(c, w))}</h2>`;
    if (co.fechaMeta) {
      const dd = K.dayNum(co.fechaMeta) - today();
      h += `<p class="sub">${dd > 0 ? `Faltan <strong>${dd} días</strong> para ${esc(co.textoFecha)} con la familia de ${esc(ella())}.` : dd === 0 ? `<strong>Hoy es ${esc(co.textoFecha)}.</strong> Wesołych Świąt!` : 'Después de Navidad: a consolidar.'}</p>`;
    } else h += `<p class="sub">${esc(co.meta)}.</p>`;
    h += `<div class="meter"><div class="meter-top"><span>Hoy</span><span class="num">${done} / ${goal} min</span></div><div class="bar" role="progressbar" aria-label="Minutos de hoy" aria-valuemin="0" aria-valuemax="${goal}" aria-valuenow="${Math.min(done, goal)}"><i style="width:${Math.min(100, pct(done, goal))}%"></i></div></div></div>`;
    if (K.dayNum(todayStr()) < K.dayNum(inicio(c))) h += `<p class="hint">Empiezas el ${esc(K.dayLabel(K.dayNum(inicio(c)), today()))}. Puedes adelantar ya la semana 1.</p>`;
    if (!lv2 && !weekData(c, w)) h += `<p class="banner">${any ? `Las lecciones de la semana ${w} se están preparando.` : 'Las lecciones se están preparando.'} Mientras, repasa tus tarjetas o crea una lectura con Claude.</p>`;
    h += '<ol class="tasks">';
    for (const [k, name, m, view, kinds] of tasks) {
      const got = minutes(c, kinds || k), p = Math.min(100, pct(got, m));
      const goView = view === 'leccion' && !nl && any ? 'aprender' : view;
      h += `<li class="task${p >= 100 ? ' done' : ''}"><button class="task-go" data-go="${goView}" data-param="${esc(target[goView] || '')}" data-course-go="${c}"><span class="task-main"><strong>${esc(name)}</strong><span class="muted">${esc(sub[k])}</span></span><span class="task-min num">${p >= 100 ? I.check : ''}${got}/${m} min</span></button><div class="bar thin"><i style="width:${p}%"></i></div></li>`;
    }
    if (c === 'pl') {
      const pe = parEstado(), got = minutes('pl', 'par');
      if (pe.hoy || pe.due) h += `<li class="task par${pe.hoy ? ' done' : ''}"><button class="task-go" data-go="pareja" data-course-go="pl"><span class="task-main"><strong>Con ${esc(ella())}</strong><span class="muted">${pe.hoy ? 'Hecha hoy' : 'Toca hoy: 15 minutos'}</span></span><span class="task-min num">${pe.hoy ? I.check : ''}${got}/15 min</span></button></li>`;
    }
    h += '</ol>';
    if (c === 'pl') { const pe = parEstado(); if (!pe.hoy && !pe.due) h += `<p class="hint">Próxima sesión con ${esc(ella())}: ${esc(K.dayLabel(pe.next, today()))}.</p>`; }
    return h + '</section>';
  }
  function pausedCard(c) {
    const co = courseOf(c);
    return `<section class="card paused-card" data-course="${c}"><p class="eyebrow">${esc(co.nombre)} · en pausa</p><h2>${esc(co.meta)}</h2><p class="muted">Plan de unos ${dayGoal(c)} minutos al día. ${P().cursos[c] && P().cursos[c].estado ? 'Al reanudar, sigues donde lo dejaste.' : 'Al empezar, la semana 1 cuenta desde hoy.'}</p>${startBtn(c, 'primary')}</section>`;
  }
  function vHoy() {
    let h = '<h1 class="sr">Hoy</h1>';
    if (!isStandalone() && !P().ui.ocultarInstalar) {
      const how = ui.installEvt ? `<button class="btn small primary" data-act="install">Instalar</button>` : `<span class="muted small">${isIOS ? 'Safari: Compartir › Añadir a pantalla de inicio.' : 'Chrome: menú ⋮ › Instalar aplicación.'}</span>`;
      h += `<div class="banner install"><div><strong>Instala Glossa en tu móvil</strong><p class="muted small">Se abre como una app, a pantalla completa y sin conexión.</p></div><div class="row-btns">${how}<button class="btn small ghost" data-act="hide-install">Ahora no</button></div></div>`;
    }
    const run = running();
    if (!run.length) {
      h += `<div class="card center empty"><p class="big">No tienes ningún idioma en curso.</p><p class="muted">Elige uno para empezar hoy.</p></div><ul class="course-list">${ACTIVE.map(co => courseRow(co)).join('')}</ul>`;
      return h;
    }
    const grid = WIDE_Q.matches && run.length > 1;
    if (grid) h += `<div class="hoy-grid">${run.map(co => hoyCol(co.id)).join('')}</div>`;
    else {
      const cur = enCurso(ui.course) ? ui.course : null;
      h += cur ? hoyCol(cur) : pausedCard(ui.course);
      const others = run.filter(co => co.id !== cur);
      if (others.length) h += `<div class="others">${others.map(co => `<button class="other" data-course="${co.id}" data-course-set="${co.id}"><i class="dot"></i>${esc(co.nombre)}<span class="num">${minutes(co.id)} / ${dayGoal(co.id)} min</span><span class="chev" aria-hidden="true">›</span></button>`).join('')}</div>`;
    }
    const paused = ACTIVE.filter(co => !enCurso(co.id) && (grid || co.id !== ui.course));
    if (paused.length) h += `<button class="paused-row" data-act="courses"><span class="muted">En pausa:</span> ${paused.map(co => `<span class="pz" data-course="${co.id}"><i class="dot hollow"></i>${esc(co.nombre)}</span>`).join('')}<span class="chev" aria-hidden="true">›</span></button>`;
    h += `<p class="hint center">Racha: <strong>${streak()} días</strong> seguidos con al menos 20 minutos. El tiempo se cuenta solo mientras usas cada sección.</p>`;
    return h;
  }

  // ---------------- Aprender: tu ruta ----------------
  function lessonRow(c, l) {
    const done = L(c).lec[l.id], pr = L(c).prog[l.id], busy = GEN.busy === l.id;
    const sub = l.pend ? (busy ? 'Preparando…' : 'Por preparar' + (l.foco ? ' · ' + l.foco : ''))
      : `${l.min} min · ${l.vocab.length} tarjetas${done ? ' · hecha' : pr && pr.p && pr.p !== 'aprende' ? ' · a medias' : ''}`;
    return `<li><button class="row${done ? ' done' : ''}${l.pend ? ' pend' : ''}" data-go="leccion" data-param="${esc(l.id)}"><span class="n num">${done ? I.check : l.pend ? I.spark : l.num}</span><span class="row-main"><strong>${esc(l.titulo)}</strong><span class="muted">${esc(clip(sub, 120))}</span></span></button></li>`;
  }
  function readingRow(c, r) {
    const done = L(c).lee[r.id];
    const sub = r.pend ? (GEN.busy === r.id ? 'Preparando…' : 'Lectura por preparar') : `${r.nivel || 'Hecha para ti'}${done ? ' · leída' : ''}`;
    return `<li><button class="row${done ? ' done' : ''}${r.pend ? ' pend' : ''}" data-go="lectura" data-param="${esc(r.id)}"><span class="n num">${done ? I.check : r.pend ? I.spark : (r.gen ? (r.origen === 'propio' ? 'TÚ' : 'IA') : 'L')}</span><span class="row-main"><strong class="t">${esc(r.titulo)}</strong><span class="muted">${esc(sub)}</span></span></button></li>`;
  }
  function vAprender() {
    const c = ui.course, lvs = niveles(c), cu = currentUnit(c);
    const sel = ui.nivel[c] || (cu ? cu.nv : 1);
    const lv = lvs.find(x => x.n === sel) || lvs[0];
    let h = `<h1 class="page">Aprender ${esc(lower(c))}</h1>`;
    if (!enCurso(c)) h += pausedBanner(c);
    if (lvs.length > 1) h += `<div class="seg wide levels" role="tablist" aria-label="Niveles">${lvs.map(x => `<button role="tab" aria-selected="${x.n === lv.n}" aria-pressed="${x.n === lv.n}" data-act="nivel" data-n="${x.n}">${nivelAbierto(c, x.n) ? '' : I.lock}${esc(x.nombre || 'Nivel ' + x.n)}</button>`).join('')}</div>`;
    h += levelHtml(c, lv, cu);
    const gens = G(c).l;
    h += `<h2>Lecturas hechas para ti</h2>`;
    h += gens.length ? `<ol class="list">${gens.map(r => readingRow(c, Object.assign({ gen: true }, r))).join('')}</ol>` : `<p class="muted">Aún no tienes. Pide una a Claude o trae un texto tuyo.</p>`;
    h += `<div class="card-grid"><div class="card"><p><strong>Una lectura nueva</strong></p><p class="muted small">Claude escribe un texto de tu nivel con las palabras que ya sabes, con traducción palabra por palabra.</p>
      <button class="btn primary" data-act="gen-reading" ${ui.gen.busy ? 'disabled' : ''}>${ui.gen.busy ? 'Escribiendo… (hasta un minuto)' : 'Crear lectura'}</button>${ui.gen.err ? `<p class="err">${esc(ui.gen.err)}</p>` : ''}</div>
      <div class="card"><p><strong>Tu propio texto</strong></p><p class="muted small">Pega un párrafo o haz una foto a una página${c === 'la' ? ' (también impresos antiguos)' : ''}: se convierte en una lectura con cada palabra explicada.</p><button class="btn" data-go="texto">Añadir texto o foto</button></div></div>`;
    return h;
  }
  function levelHtml(c, lv, cu) {
    const s = levelStats(c, lv.n), open = nivelAbierto(c, lv.n), p = pct(s.done, s.total);
    let h = `<section class="level"><div class="level-head"><p class="eyebrow">${esc(lv.nombre || 'Nivel ' + lv.n)}</p><h2>${esc(lv.lema || '')}</h2>`;
    if (s.total) h += `<div class="meter"><div class="meter-top"><span>${s.done} de ${s.total} lecciones${s.rtotal ? ` · ${s.rdone} de ${s.rtotal} lecturas` : ''}</span><span class="num">${p} %</span></div><div class="bar"><i style="width:${p}%"></i></div></div>`;
    if (s.missing && lv.semanas) h += `<p class="hint">${s.missing === lv.semanas.length ? 'Las semanas de este nivel se están preparando.' : `Faltan ${s.missing} semanas por llegar; aparecerán aquí.`}</p>`;
    h += '</div>';
    if (!open) {
      const prev = levelStats(c, lv.n - 1);
      h += `<div class="card locked"><p>${I.lock}<strong>Se abre al completar el 80 % del nivel ${lv.n - 1}.</strong> Llevas el ${pct(prev.done, prev.total)} %.</p><p class="muted small">Si quieres adelantar, puedes abrirlo ya: Claude preparará cada unidad cuando la necesites.</p><button class="btn" data-act="abrir-nivel" data-n="${lv.n}">Abrir ya</button></div>`;
      h += `<ol class="units locked-list">${unitsOf(c, lv.n).map(u => `<li class="unit off"><div class="unit-head static"><span class="unit-n num">${u.un}</span><span class="unit-main"><span class="unit-k">Unidad ${u.un}</span><strong>${esc(u.titulo)}</strong></span></div></li>`).join('')}</ol>`;
      return h + '</section>';
    }
    if (cu && cu.nv === lv.n) {
      const nl = nextLesson(c);
      if (nl && nl.nv === lv.n) h += `<button class="btn primary big wide continuar" data-go="leccion" data-param="${esc(nl.id)}"><span>Continuar<small>${esc(lessonMeta(nl))} · ${esc(clip(nl.titulo, 60))}</small></span>${I.next}</button>`;
      else if (lv.temario) {
        const u = unitsOf(c, lv.n).find(x => x.key === cu.uk), pend = u && u.ready && unitOrder(u).find(x => x.pend && !x.r);
        if (pend) h += `<button class="btn primary big wide continuar" data-go="leccion" data-param="${esc(pend.id)}"><span>Continuar<small>Unidad ${u.un} · ${esc(clip(pend.titulo, 60))}</small></span>${I.next}</button>`;
      }
    }
    h += `<ol class="units">${unitsOf(c, lv.n).map(u => unitHtml(c, u, cu)).join('')}</ol>`;
    return h + '</section>';
  }
  function unitHtml(c, u, cu) {
    const st = unitStats(c, u), isCur = !!(cu && cu.uk === u.key), ok = c + ':' + u.key;
    const open = ui.open[ok] != null ? ui.open[ok] : isCur;
    const thisWeek = u.semana && u.nv === 1 && u.semana === curWeek(c) && enCurso(c);
    const label = (u.semana ? 'Semana ' + u.semana : 'Unidad ' + u.un) + (thisWeek ? ' · esta semana' : '');
    const info = u.ready ? `${st.ld}/${st.lt} lecciones${st.rt ? ` · ${st.rd}/${st.rt} lecturas` : ''}` : (u.gen ? 'Por preparar' : 'Se está preparando');
    let h = `<li class="unit${isCur ? ' cur' : ''}${st.done ? ' done' : ''}${u.ready ? '' : ' off'}" data-u="${u.key}">`;
    h += `<button class="unit-head" data-act="unit" data-u="${u.key}" aria-expanded="${open}"><span class="unit-n num">${st.done ? I.check : u.un}</span><span class="unit-main"><span class="unit-k">${esc(label)}</span><strong>${esc(u.titulo)}</strong><span class="muted small">${esc(info)}</span></span><span class="chev" aria-hidden="true">›</span></button>`;
    if (u.ready) h += `<div class="bar thin"><i style="width:${pct(st.ld + st.rd, st.lt + st.rt)}%"></i></div>`;
    if (open) h += unitBody(c, u);
    return h + '</li>';
  }
  function unitBody(c, u) {
    let h = `<div class="unit-body">`;
    if (u.resumen) h += `<p class="muted small">${esc(u.resumen)}</p>`;
    if (!u.ready) {
      h += u.gen ? genUnitCta(c, u) : `<p class="muted">Esta semana se está preparando. Aparecerá aquí en cuanto esté lista.</p>`;
      return h + '</div>';
    }
    const order = unitOrder(u);
    h += `<ol class="list">${order.map(x => (x.r ? readingRow(c, x) : lessonRow(c, x))).join('')}</ol>`;
    if (u.gen) {
      const pend = order.find(x => x.pend);
      if (pend) {
        const busy = GEN.busy === pend.id, err = GEN.err[pend.id];
        h += busy ? `<div class="genbox inline"><span class="spin" aria-hidden="true"></span><span>Preparando «${esc(clip(pend.titulo, 50))}»… <span class="muted" id="genprog">${esc(GEN.prog)}</span></span></div>`
          : `${err ? `<p class="err small">${esc(err)}</p>` : ''}<button class="btn small" data-act="gen-item" data-id="${esc(pend.id)}" ${GEN.busy || !aiReady() ? 'disabled' : ''}>${I.spark}${err ? 'Reintentar' : 'Preparar la siguiente'}</button>${aiReady() ? '' : ' <span class="muted small">Necesita tu clave de Claude.</span>'}`;
      }
    }
    return h + '</div>';
  }
  function genUnitCta(c, u) {
    const k = 'plan:' + c + ':' + u.key, busy = GEN.busy === k, err = GEN.err[k];
    if (busy) return `<div class="genbox"><span class="spin" aria-hidden="true"></span><p><strong>Preparando el plan de la unidad…</strong></p><p class="muted small">Suele tardar entre 20 y 40 s. <span id="genprog">${esc(GEN.prog)}</span></p></div>`;
    if (!aiReady()) return `<p class="muted">Claude prepara cada unidad de este nivel a tu medida. Necesita tu clave de la API.</p><button class="btn" data-go="ajustes">Añadir clave en Ajustes</button>`;
    return `${err ? `<p class="err small">${esc(err)}</p>` : ''}<p class="muted small">Claude prepara la unidad a tu medida: 6 lecciones y 2 lecturas sobre «${esc(u.tema)}», a partir de lo que ya sabes.</p><button class="btn primary" data-act="gen-plan" data-u="${u.key}" ${GEN.busy ? 'disabled' : ''}>${I.spark}${err ? 'Reintentar' : 'Preparar unidad'}</button>`;
  }

  // ---------------- Lección: Aprende › Vocabulario › Practica › Resumen ----------------
  const PASOS = [['aprende', 'Aprende'], ['vocab', 'Vocabulario'], ['practica', 'Practica'], ['resumen', 'Resumen']];
  const progOf = (c, id) => L(c).prog[id] || null;
  function progSet(c, id, o) {
    const p = L(c).prog;
    p[id] = Object.assign(p[id] || {}, o, { t: Date.now() });
    const keys = Object.keys(p);
    if (keys.length > 60) keys.sort((a, b) => p[a].t - p[b].t).slice(0, keys.length - 60).forEach(k => { delete p[k]; });
    ST.mark(c);
    return p[id];
  }
  const lessonMeta = l => (l.nv > 1 ? `Nivel ${l.nv} · unidad ${l.un} · lección ${l.num}` : `Semana ${l.semana} · lección ${l.num}`);
  function blockHtml(c, b) {
    if (b.t === 'p') return `<p>${fmt(b.x)}</p>`;
    if (b.t === 'nota') return `<aside class="note">${fmt(b.x)}</aside>`;
    if (b.t === 'ej') return `<ul class="examples">${b.items.map(it => `<li>${sayBtn(c, it[0])}<span><span class="t" lang="${c}">${esc(it[0])}</span><span class="muted">${esc(it[1])}</span></span></li>`).join('')}</ul>`;
    if (b.t === 'tabla') {
      const aud = b.audio || [];
      return `<div class="tablewrap"><table><thead><tr>${b.cab.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${b.filas.map(f => `<tr>${f.map((cell, j) => `<td>${aud.indexOf(j) >= 0 ? `<span class="cellsay">${sayBtn(c, cell)}<span class="t" lang="${c}">${esc(cell)}</span></span>` : esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    }
    return '';
  }
  function noLessons(c) {
    const any = allLessons(c).length > 0;
    return backBtn('aprender', 'Aprender') + `<h1 class="page">Lecciones de ${esc(lower(c))}</h1><div class="card center empty"><p class="big">${any ? 'Has hecho todas las lecciones disponibles.' : 'Las lecciones se están preparando.'}</p><p class="muted">${any ? 'Sigue en tu ruta: el nivel siguiente se prepara a tu medida.' : 'Aparecerán aquí en cuanto estén listas. Mientras, puedes crear una lectura con Claude.'}</p><button class="btn primary" data-go="aprender">Ir a tu ruta</button></div>`;
  }
  function vLeccion() {
    const c = ui.course, [id, sub] = splitParam(ui.param);
    let l = id ? lessonById(c, id) : null;
    if (!l && id && GEN_RE.test(id)) return vPreparar(c, id);
    if (!l) { l = nextLesson(c); if (l) ui.param = l.id; }
    if (!l) return noLessons(c);
    if (sub === 'todo') return vLeccionTodo(c, l);
    ui.flow = true;
    const pr = progOf(c, l.id) || {}, done = !!L(c).lec[l.id];
    let paso = PASOS.some(p => p[0] === sub) ? sub : (pr.p || 'aprende');
    if (paso === 'resumen' && !pr.res && !done) paso = 'practica';
    if (pr.p !== paso) progSet(c, l.id, { p: paso });
    let body = '', bar = '';
    if (paso === 'aprende') {
      body = `<section class="paso" data-key="p-aprende-${esc(l.id)}"><p class="lead">${fmt(l.intro)}</p>${(l.bloques || []).map(b => blockHtml(c, b)).join('')}</section>`;
      bar = actbar(`<div class="actbar-btns"><button class="btn primary big" id="main-act" data-act="paso" data-p="vocab">Seguir: vocabulario${I.next}</button></div>`);
    } else if (paso === 'vocab') {
      const on = VOC.on && VOC.id === l.id;
      body = !l.vocab.length ? `<section class="paso" data-key="p-vocab-${esc(l.id)}"><div class="card center empty"><p>Esta lección no añade palabras nuevas: trabaja con las que ya conoces.</p></div></section>`
        : `<section class="paso" data-key="p-vocab-${esc(l.id)}"><p class="muted">${l.vocab.length} palabras y frases. Toca cada una para oírla y repítela en voz alta.</p><ul class="vgrid">${l.vocab.map((v, i) => `<li><button class="vcard${on && VOC.i === i ? ' playing' : ''}" data-act="voc-say" data-i="${i}"><span class="vt t" lang="${c}">${esc(v[0])}</span><span class="ve">${esc(v[1])}</span><span class="vi" aria-hidden="true">${I.play}</span></button></li>`).join('')}</ul></section>`;
      bar = actbar(`<div class="actbar-btns">${l.vocab.length ? `<button class="btn${on ? ' danger' : ''}" data-act="${on ? 'voc-stop' : 'voc-all'}">${on ? I.stop + 'Parar' : I.play + 'Escuchar todo'}</button>` : ''}<button class="btn primary big" id="main-act" data-act="paso" data-p="practica">Seguir: practicar${I.next}</button></div>`);
    } else if (paso === 'practica') {
      const s = lessonSession(c, l);
      if (!s.items.length) {
        body = `<section class="paso" data-key="p-practica-${esc(l.id)}"><div class="card center empty"><p>Esta lección no tiene ejercicios.</p></div></section>`;
        bar = actbar(`<div class="actbar-btns"><button class="btn primary big" id="main-act" data-act="lesson-finish">Terminar la lección${I.next}</button></div>`);
      } else {
        ui.ply = s;
        const p = playerParts(s);
        body = `<section class="paso" data-key="p-practica-${esc(l.id)}">${p.body}</section>`; bar = p.bar;
      }
    } else {
      body = resumenHtml(c, l); bar = resumenBar(c, l);
    }
    const head = `<header class="flowhead"><button class="icon-btn close" data-act="close" data-to="aprender" aria-label="Cerrar la lección">${I.close}</button><div class="fh-main"><p class="eyebrow">${esc(lessonMeta(l))}${done ? ' · hecha' : ''}</p><h1 class="fh-title">${esc(l.titulo)}</h1></div><button class="btn small ghost" data-go="leccion" data-param="${esc(l.id)}/todo">Ver todo</button></header>`;
    return head + stepper(c, l, paso) + body + bar;
  }
  function stepper(c, l, paso) {
    const pr = progOf(c, l.id) || {}, done = !!L(c).lec[l.id], idx = PASOS.findIndex(p => p[0] === paso);
    return `<nav class="stepper" aria-label="Pasos de la lección">${PASOS.map((p, i) => {
      const can = p[0] !== 'resumen' || !!pr.res || done;
      const cls = i === idx ? 'on' : (i < idx ? 'past' : '');
      return `<button class="step ${cls}" data-act="paso" data-p="${p[0]}" ${can ? '' : 'disabled'}${i === idx ? ' aria-current="step"' : ''}><span class="step-n num">${i < idx ? I.check : i + 1}</span><span class="step-l">${p[1]}</span></button>`;
    }).join('')}</nav>`;
  }
  function resumenHtml(c, l) {
    const pr = progOf(c, l.id) || {}, res = pr.res, nl = nextLesson(c);
    let h = `<section class="paso resumen" data-key="p-resumen-${esc(l.id)}"><div class="card center done-card"><span class="done-badge">${I.check}</span><h2>Lección terminada</h2>`;
    if (res && res.n) h += `<p class="score num">${res.ok} de ${res.n}</p><p class="muted">ejercicios bien a la primera${res.ok === res.n ? '. ¡Perfecto!' : '. Los fallos han vuelto hasta salir bien.'}</p>`;
    h += '</div>';
    if (l.vocab.length) h += `<h2>${l.vocab.length} tarjetas a tu repaso</h2><p class="muted small">Salen en Tarjetas desde hoy, con un máximo de ${nuevasDia(c)} nuevas al día.</p><ul class="mini-cards">${l.vocab.map(v => `<li><span class="t" lang="${c}">${esc(v[0])}</span><span class="muted">${esc(v[1])}</span></li>`).join('')}</ul>`;
    if (nl) h += `<p class="next-up"><span class="muted small">A continuación</span><strong>${esc(nl.titulo)}</strong><span class="muted small">${esc(lessonMeta(nl))}</span></p>`;
    h += `<div class="row-btns"><button class="btn ghost" data-act="ply-reset">Repetir los ejercicios</button><button class="btn ghost" data-go="leccion" data-param="${esc(l.id)}/todo">Ver la lección entera</button></div></section>`;
    return h;
  }
  function resumenBar(c, l) {
    const nl = nextLesson(c);
    return actbar(`<div class="actbar-btns"><button class="btn" data-go="aprender" data-replace="1">Volver a la ruta</button>${nl ? `<button class="btn primary big" id="main-act" data-go="leccion" data-param="${esc(nl.id)}" data-replace="1">Siguiente lección${I.next}</button>` : ''}</div>`);
  }
  function vLeccionTodo(c, l) {
    const done = L(c).lec[l.id];
    const left = `<p class="lead">${fmt(l.intro)}</p>${(l.bloques || []).map(b => blockHtml(c, b)).join('')}`;
    const right = `<h2>Vocabulario</h2><ul class="vocab">${l.vocab.map(v => `<li>${sayBtn(c, v[0])}<span class="t" lang="${c}">${esc(v[0])}</span><span class="muted">${esc(v[1])}</span></li>`).join('')}</ul>
      <h2>Ejercicios</h2>${(l.ejercicios || []).map((e, i) => inlineEx(c, l.id + '#' + i, lessonItem(l, e, i))).join('')}
      <div class="endbar">${done ? `<p class="hint">Lección terminada el ${esc(done)}. Sus tarjetas ya están en tu repaso.</p>` : `<button class="btn primary wide" data-act="lesson-done" data-id="${esc(l.id)}">Marcar como hecha y añadir ${l.vocab.length} tarjetas</button>`}</div>`;
    return `${backBtn('leccion', 'Lección paso a paso', l.id)}<p class="eyebrow">${esc(lessonMeta(l))} · ${l.min} min</p><h1 class="page">${esc(l.titulo)}</h1><div class="two lesson"><div class="col-main">${left}</div><div class="col-side">${right}</div></div>`;
  }
  // Vocabulario: escuchar todo, con pausa para repetir
  const VOC = { on: false, id: null, i: 0, timer: null };
  function vocPlay(c, l) {
    vocStop();
    VOC.on = true; VOC.id = l.id; VOC.i = 0;
    const step = () => {
      if (!VOC.on) return;
      if (VOC.i >= l.vocab.length) { VOC.on = false; render(); return; }
      vocMark();
      say(c, l.vocab[VOC.i][0], { onend: () => { if (!VOC.on) return; VOC.timer = setTimeout(() => { VOC.i++; step(); }, Math.max(1400, (P().ajustes.pausa || 4) * 550)); } });
    };
    render(); step();
  }
  function vocMark() { $$('.vcard').forEach(b => b.classList.toggle('playing', VOC.on && Number(b.dataset.i) === VOC.i)); }
  function vocStop() { if (!VOC.on) return; VOC.on = false; clearTimeout(VOC.timer); VO.TTS.stop(); vocMark(); }

  // ---------------- Reproductor de ejercicios ----------------
  // Un ejercicio cada vez; los fallos vuelven al final hasta que salen bien. Sesiones: lección (se guarda
  // en <c>.prog), mezcla (ejercicios variados) y errores. Los ejercicios sueltos (Ver todo, lecturas) usan las mismas piezas.
  const PLY = {};
  const freshSt = () => ({ pick: null, built: [], res: null, heard: null, score: null, err: '', listening: false, reveal: false });
  // Ejercicio de una lección como pieza del reproductor. Si la respuesta de un «mc» está en el idioma
  // (sale en las tarjetas o los ejemplos de la lección), sus opciones se muestran en serif y se pueden oír.
  function lessonItem(l, e, i) {
    const it = Object.assign({ k: 'ex:' + l.id + '#' + i, seed: K.hash(l.id).length + i * 7 + 3 }, e);
    if (e.t === 'mc' && Array.isArray(e.ops) && e.ops[e.ok]) {
      const ans = K.normSentence(e.ops[e.ok]), forms = new Set();
      (l.vocab || []).forEach(v => forms.add(K.normSentence(v[0])));
      (l.bloques || []).forEach(b => { if (b.t === 'ej') b.items.forEach(x => forms.add(K.normSentence(x[0]))); if (b.t === 'tabla') b.filas.forEach(f => (b.audio || []).forEach(j => forms.add(K.normSentence(f[j] || '')))); });
      if (ans && forms.has(ans)) { it.opsT = true; it.say = e.ops[e.ok]; }
    }
    return it;
  }
  const curItem = s => s.items[s.q[s.i]];
  function plyNew(key, c, items, o) {
    const s = { key, c, items, q: items.map((_, i) => i), i: 0, r: {}, fin: {}, done: false, mode: o.mode, lid: o.lid || '', t0: Date.now(), st: freshSt() };
    const sv = o.saved;
    if (sv && Array.isArray(sv.q)) {
      s.q = sv.q.filter(i => i >= 0 && i < items.length);
      if (!s.q.length) s.q = items.map((_, i) => i);
      s.i = clamp(sv.i || 0, 0, s.q.length);
      s.r = sv.r || {}; s.fin = sv.fin || {};
    }
    return s;
  }
  function lessonSession(c, l) {
    const key = 'L:' + l.id;
    if (!PLY[key]) {
      const items = (l.ejercicios || []).map((e, i) => lessonItem(l, e, i));
      const pr = progOf(c, l.id);
      PLY[key] = plyNew(key, c, items, { mode: 'leccion', lid: l.id, saved: pr && pr.pl });
      if (PLY[key].i >= PLY[key].q.length) PLY[key] = plyNew(key, c, items, { mode: 'leccion', lid: l.id });
    }
    return PLY[key];
  }
  function plySave(s) { if (s.mode === 'leccion') progSet(s.c, s.lid, { p: 'practica', pl: { q: s.q, i: s.i, r: s.r, fin: s.fin } }); }
  function plyScore(s) { let n = 0, ok = 0; for (const k of Object.keys(s.r)) { if (s.r[k] >= 0) n++; if (s.r[k] === 1) ok++; } return { n, ok }; }
  function plyAnswered(s, ok) {
    const idx = s.q[s.i], first = s.r[idx] == null;
    if (first) s.r[idx] = ok ? 1 : 0;
    if (ok) s.fin[idx] = 1; else s.q.push(idx);
    plySave(s);
    return first;
  }
  function plySkipMark(s) { const idx = s.q[s.i]; s.fin[idx] = 1; if (s.r[idx] == null) s.r[idx] = -1; plySave(s); }
  function plyNext(s) {
    VO.STT.stop();
    s.i++; s.st = freshSt();
    if (s.i >= s.q.length) { plyFinish(s); render({ top: true }); return; }
    plySave(s);
    render();
    const pl = $('.player');
    if (pl && pl.getBoundingClientRect().top < 0) pl.scrollIntoView({ block: 'start' });
    autoPlay(s); focusMain();
  }
  function plyFinish(s) {
    s.done = true;
    if (s.mode !== 'leccion') return;
    const c = s.c, l = lessonById(c, s.lid);
    progSet(c, s.lid, { p: 'resumen', res: plyScore(s), pl: null });
    delete PLY[s.key];
    if (l && !L(c).lec[l.id]) { L(c).lec[l.id] = todayStr(); ST.mark(c); commitAct(); ses = null; }
    setHashQuiet('#leccion/' + encodeURIComponent(s.lid) + '/resumen');
    ui.param = s.lid + '/resumen';
    if (l) prefetch(c, l);
  }
  function autoPlay(s) {
    const it = s && !s.done && curItem(s);
    if (!it) return;
    if (it.t === 'oir') say(s.c, it.x);
    else if (it.tipo === 'sig' && it.say && P().ajustes.autoAudio) say(s.c, it.say);
  }
  function focusMain() { const b = $('#main-act'); if (b && document.activeElement !== b) { try { b.focus({ preventScroll: true }); } catch (e) { /* nada */ } } }
  function answerOf(it) { if (it.t === 'mc' || it.t === 'oir') return it.ops[it.ok]; return it.x || ''; }
  const answerIsTarget = it => it.t !== 'mc' || !!it.opsT;
  function audioOf(it) { if (it.t === 'mc') return it.say || (it.opsT ? it.ops[it.ok] : ''); return it.x || ''; }
  function questionText(it) {
    if (it.t === 'mc') return it.show != null ? (it.showEs ? '«' + it.show + '»' : it.show) : String(it.q || '').replace(/\*/g, '');
    if (it.t === 'oir') return 'Escucha: ' + it.x;
    if (it.t === 'hueco') return it.x.split(' ').map((tk, i) => (i === it.w ? tk.replace(WORD_RE, '___') : tk)).join(' ');
    return it.es || it.x || '';
  }
  function playerParts(s) {
    const total = s.items.length, fin = Object.keys(s.fin).length, it = curItem(s);
    const body = `<div class="player"><div class="ply-top"><div class="bar ply-bar" role="progressbar" aria-label="Ejercicios hechos" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${fin}"><i style="width:${pct(fin, total)}%"></i></div><span class="num small muted">${fin}/${total}</span></div><div class="item" data-key="it-${esc(s.key)}-${s.i}">${itemHtml(s.c, it, s.st, 'P', s.i)}</div></div>`;
    return { body, bar: plyBar(s) };
  }
  function blankTok(tk, it, st) {
    const m = /^([^\p{L}]*)([\p{L}\p{M}'’-]+)(.*)$/u.exec(tk) || [tk, '', tk, ''];
    const fill = st.res ? `<span class="blank ${st.res === 'ok' ? 'ok' : 'bad'}">${esc(it.ops[st.pick])}</span>${st.res === 'bad' ? ` <span class="blank ok">${esc(it.ops[it.ok])}</span>` : ''}` : '<span class="blank" aria-label="hueco">&nbsp;</span>';
    return esc(m[1]) + fill + esc(m[3]);
  }
  function itemHtml(c, it, st, k, salt) {
    const lg = `lang="${c}"`, ans = !!st.res, ke = esc(k), seed = (it.seed || 7) + (salt || 0) * 31;
    const opts = (ops, target) => {
      const order = K.shuffle(ops.map((_, j) => j), seed);
      return `<div class="opts${target ? ' t' : ''}">${order.map((j, n) => {
        let cls = 'opt', mark = `<span class="key" aria-hidden="true">${n + 1}</span>`;
        if (ans) {
          if (j === it.ok) { cls += ' ok'; mark = `<span class="key">${I.check}</span>`; }
          else if (j === st.pick) { cls += ' bad'; mark = `<span class="key">${I.cross}</span>`; }
          else cls += ' dim';
        }
        return `<button class="${cls}" data-act="ex-pick" data-k="${ke}" data-j="${j}" data-n="${n + 1}"${target ? ' ' + lg : ''} aria-disabled="${ans}">${mark}<span class="ol">${esc(ops[j])}</span></button>`;
      }).join('')}</div>`;
    };
    if (it.t === 'mc') {
      let h = `<p class="itype">${it.tipo === 'sig' ? 'Significado' : it.tipo === 'inv' ? 'Al revés' : it.tipo === 'corr' ? 'Corrige' : 'Elige'}</p>`;
      if (it.show != null) h += `<div class="show">${it.showEs ? `<span class="show-es">«${esc(it.show)}»</span>` : `<span class="show-t t" ${lg}>${esc(it.show)}</span>${it.say ? sayBtn(c, it.say, 'Escuchar') : ''}`}</div>`;
      return h + `<p class="q">${fmt(it.q)}</p>` + opts(it.ops, !!it.opsT);
    }
    if (it.t === 'oir') return `<p class="itype">Escucha</p><div class="listen">${sayBtn(c, it.x, 'Escuchar', false, 'big')}<button class="btn small ghost" data-act="slow" data-text="${esc(it.x)}">Más despacio</button></div><p class="q">¿Qué has oído?</p>${opts(it.ops, true)}`;
    if (it.t === 'hueco') {
      const shown = it.x.split(' ').map((tk, i) => (i === it.w ? blankTok(tk, it, st) : esc(tk))).join(' ');
      return `<p class="itype">Completa</p><p class="cloze t" ${lg}>${shown}</p>${it.es ? `<p class="muted cloze-es">«${esc(it.es)}»</p>` : ''}${opts(it.ops, true)}`;
    }
    if (it.t === 'orden') {
      const toks = it.x.split(' '), pool = K.shuffle(toks.map((_, j) => j), K.hash(it.x).length + 7 + (salt || 0)), used = new Set(st.built);
      const tone = ans ? (st.res === 'ok' ? ' ok' : ' bad') : '';
      return `<p class="itype">Ordena</p><p class="q">«${esc(it.es)}»</p><div class="built t${tone}" ${lg} aria-live="polite">${st.built.map((j, n) => `<button class="chip on" data-act="ex-unbuild" data-k="${ke}" data-n="${n}" aria-disabled="${ans}">${esc(toks[j])}</button>`).join('') || '<span class="muted ph">Toca las palabras en orden</span>'}</div>
        <div class="pool t" ${lg}>${pool.map(j => `<button class="chip" data-act="ex-build" data-k="${ke}" data-j="${j}" ${used.has(j) || ans ? 'disabled' : ''}>${esc(toks[j])}</button>`).join('')}</div>`;
    }
    if (it.t === 'decir') return `<p class="itype">Dilo</p><p class="q">Dilo en ${esc(lower(c))}:</p><p class="show-es big-es">«${esc(it.es)}»</p>`;
    return '';
  }
  function feedbackHtml(c, it, st, salt, inPlayer) {
    const au = audioOf(it), ans = answerOf(it), tgt = answerIsTarget(it);
    const line = (txt, isT) => `<p class="fb-ans"><span class="${isT ? 't' : ''}"${isT ? ` lang="${c}"` : ''}>${esc(txt)}</span>${au ? sayBtn(c, au, 'Escuchar') : ''}</p>`;
    if (st.res === 'skip' || (!st.res && st.reveal)) return `<p class="fb-msg">Así se dice:</p>` + line(ans, tgt);
    if (it.t === 'decir') {
      const v = verdict(st.score || 0);
      return `<p class="fb-msg ${v[0]}">${st.res === 'ok' ? I.check : I.cross}${esc(v[1])}</p><p class="small heard">Te he oído: «<span class="t">${esc(st.heard || '')}</span>»</p>` + line(it.x, true) + (st.res === 'bad' && inPlayer ? '<p class="small muted">Te lo vuelvo a poner al final.</p>' : '');
    }
    if (st.res === 'ok') return `<p class="fb-msg okmsg">${I.check}${['¡Bien!', '¡Correcto!', '¡Eso es!'][(salt || 0) % 3]}</p>` + (au ? line(au, true) : '');
    return `<p class="fb-msg badmsg">${I.cross}No es eso</p>` + line(ans, tgt) + (it.nota ? `<p class="small muted">${esc(it.nota)}</p>` : '') + (inPlayer ? '<p class="small muted">Te lo vuelvo a poner al final.</p>' : '');
  }
  function plyBar(s) {
    const c = s.c, it = curItem(s), st = s.st;
    let fb = '', btns = '';
    if (st.res) {
      fb = feedbackHtml(c, it, st, s.i, true);
      btns = `<button class="btn primary big" id="main-act" data-act="ex-next">Continuar${I.next}</button>`;
    } else if (it.t === 'orden') {
      btns = `${st.built.length ? `<button class="btn" data-act="ex-clear" data-k="P">Borrar</button>` : ''}<button class="btn primary big" id="main-act" data-act="ex-check" data-k="P" aria-disabled="${!st.built.length}">Comprobar</button>`;
    } else if (it.t === 'decir') {
      if (st.err) fb = `<p class="fb-msg err">${esc(st.err)}</p>`;
      btns = micOk(c)
        ? `<button class="btn" data-act="ex-skip">Saltar</button><button class="btn primary big mic${st.listening ? ' on' : ''}" id="main-act" data-act="ex-say" data-k="P" aria-disabled="${st.listening}">${I.mic}${st.listening ? 'Te escucho…' : 'Hablar'}</button>`
        : `<button class="btn" data-act="ex-skip">Saltar</button><button class="btn primary big" id="main-act" data-act="ex-reveal" data-k="P">Ver respuesta</button>`;
    } else {
      btns = `<button class="btn primary big" id="main-act" aria-disabled="true">Elige una respuesta</button>`;
    }
    return actbar(`<div class="fb" aria-live="polite">${fb}</div><div class="actbar-btns">${btns}</div>`, st.res || '');
  }
  // Ejercicios sueltos, con su resultado debajo
  function inlineEx(c, key, it) {
    const e = ui.ex[key] || (ui.ex[key] = { st: freshSt() });
    e.c = c; e.it = it; e.mode = 'I';
    const st = e.st, ke = esc(key);
    let foot = '';
    if (it.t === 'orden' && !st.res) foot = `<div class="exfoot"><button class="btn small" data-act="ex-check" data-k="${ke}" aria-disabled="${!st.built.length}">Comprobar</button>${st.built.length ? `<button class="btn small ghost" data-act="ex-clear" data-k="${ke}">Borrar</button>` : ''}</div>`;
    if (it.t === 'decir' && !st.res) {
      foot = `<div class="exfoot">${micOk(c) ? `<button class="btn mic${st.listening ? ' on' : ''}" data-act="ex-say" data-k="${ke}" aria-disabled="${st.listening}">${I.mic}${st.listening ? 'Te escucho…' : 'Hablar'}</button>` : ''}${st.reveal ? '' : `<button class="btn small ghost" data-act="ex-reveal" data-k="${ke}">Ver respuesta</button>`}</div>`;
      if (st.err) foot += `<p class="err small">${esc(st.err)}</p>`;
    }
    const res = st.res || st.reveal ? `<div class="exres ${st.res || 'skip'}">${feedbackHtml(c, it, st, 0, false)}${st.res ? `<button class="btn tiny ghost" data-act="ex-reset" data-k="${ke}">Otra vez</button>` : ''}</div>` : '';
    return `<div class="ex" data-key="ex-${ke}">${itemHtml(c, it, st, key, 0)}${foot}${res}</div>`;
  }
  function exRef(k) {
    if (k === 'P') { const s = ui.ply; return s && !s.done ? { c: s.c, it: curItem(s), st: s.st, mode: 'P', s } : null; }
    const e = ui.ex[k]; return e && e.it ? e : null;
  }
  function resolve(e, ok) {
    const st = e.st;
    if (st.res) return;
    st.res = ok ? 'ok' : 'bad';
    const first = e.mode === 'P' ? plyAnswered(e.s, ok) : true;
    logEx(e.c, ok);
    noteFallo(e.c, e.it, ok, e.mode === 'P' ? e.s.mode : 'suelto', first);
    render();
    const au = audioOf(e.it);
    if (au && P().ajustes.autoAudio) say(e.c, au);
    if (e.mode === 'P') focusMain();
  }
  function listenFor(e) {
    const st = e.st, target = e.it.x;
    st.listening = true; st.err = ''; st.heard = null; st.score = null;
    render(); VO.TTS.stop();
    VO.STT.listen(courseOf(e.c).oido, {
      maxMs: 7000,
      onresult: alts => { const b = K.bestMatch(alts, target); st.heard = b.text; st.score = b.score; },
      onerror: err => { st.err = sttError(err); if (/^(not-allowed|service-not-allowed|no-support|audio-capture|language-not-supported)$/.test(err)) ui.noMic = true; },
      onend: () => { st.listening = false; if (st.heard != null && !st.res) { st.err = ''; resolve(e, st.score >= 0.6); } else render(); }
    });
  }

  // ---------------- Practicar: tarjetas, ejercicios variados y errores ----------------
  // Banco de lo aprendido: tarjetas de lecciones hechas y propias, frases de ejemplo, ejercicios originales.
  function practiceBank(c) {
    const cards = [], sents = [], exs = [], seenS = new Set(), words = new Map();
    const addWords = t => String(t).split(' ').forEach(tk => { const m = WORD_RE.exec(tk); if (m && m[0].length >= 2 && m[0] === m[0].toLowerCase()) words.set(K.foldKey(m[0]), m[0]); });
    for (const d of cardDefs(c).values()) {
      const t = cleanT(d.t), es = cleanT(d.es);
      if (!t || !es) continue;
      const x = { id: d.id, t, es, wc: t.split(' ').length };
      cards.push(x); addWords(t);
      const ns = K.normSentence(t);
      if (x.wc >= 3 && !seenS.has(ns)) { seenS.add(ns); sents.push({ key: 'card:' + d.id, t, es, card: x }); }
    }
    for (const l of allLessons(c)) {
      if (!L(c).lec[l.id]) continue;
      (l.ejercicios || []).forEach((e, i) => exs.push(lessonItem(l, e, i)));
      (l.bloques || []).forEach((b, bi) => {
        if (b.t !== 'ej') return;
        b.items.forEach((it, ii) => {
          const t = cleanT(it[0]), ns = K.normSentence(t);
          if (!t || !it[1] || t.split(' ').length < 3 || seenS.has(ns)) return;
          seenS.add(ns); sents.push({ key: 'ej:' + l.id + '#' + bi + '#' + ii, t, es: cleanT(it[1]) }); addWords(t);
        });
      });
    }
    return { cards, sents, exs, words: Array.from(words.values()) };
  }
  function distract(pool, d, get, n, R, score, skip) {
    const seen = new Set([K.normSentence(get(d))]), out = [];
    const cands = pool.filter(x => x !== d && !(skip && skip(x))).map(x => ({ x, s: (score ? score(x) : 0) + R() })).sort((a, b) => b.s - a.s);
    for (const o of cands) {
      const v = get(o.x), k = K.normSentence(v);
      if (!v || !k || seen.has(k)) continue;
      seen.add(k); out.push(v);
      if (out.length >= n) break;
    }
    return out;
  }
  const sameMeaning = (a, b) => K.normSentence(a.es) === K.normSentence(b.es);
  const sameText = (a, b) => K.normSentence(a.t) === K.normSentence(b.t);
  function sentFor(bank, d) {
    if (d.wc >= 3) return bank.sents.find(s => s.card === d) || { key: 'card:' + d.id, t: d.t, es: d.es };
    const fk = K.foldKey(d.t);
    return bank.sents.find(s => s.t.split(' ').some(tk => { const m = WORD_RE.exec(tk); return m && K.foldKey(m[0]) === fk; })) || null;
  }
  function mkHueco(c, s, k, bank, R, word) {
    const toks = s.t.split(' ');
    if (toks.length < 3 || toks.length > 16) return null;
    let cands = [];
    toks.forEach((tk, i) => { const m = WORD_RE.exec(tk); if (m && m[0].length >= 3) cands.push(i); });
    if (word) { const fk = K.foldKey(word); cands = cands.filter(i => K.foldKey(WORD_RE.exec(toks[i])[0]) === fk); }
    if (!cands.length) return null;
    const w = cands[Math.floor(R() * cands.length)], ans = WORD_RE.exec(toks[w])[0];
    const inSent = new Set(toks.map(tk => { const m = WORD_RE.exec(tk); return m ? K.foldKey(m[0]) : ''; }));
    const cap = ans[0] !== ans[0].toLowerCase();
    const ds = bank.words.filter(x => !inSent.has(K.foldKey(x)))
      .map(x => ({ x, s: K.similarity(x, ans.toLowerCase()) + R() * 0.2 })).sort((a, b) => b.s - a.s).slice(0, 3)
      .map(o => (cap ? o.x[0].toUpperCase() + o.x.slice(1) : o.x));
    if (ds.length < 2) return null;
    return { t: 'hueco', k, x: s.t, w, es: s.es, ops: [ans].concat(ds), ok: 0, seed: Math.floor(R() * 9000) + 1 };
  }
  function makeItem(c, ty, d, bank, R) {
    const k = 'card:' + d.id + ':' + ty, seed = Math.floor(R() * 9000) + 1;
    if (ty === 'sig') {
      const ds = distract(bank.cards, d, x => x.es, 3, R, x => -Math.abs(x.wc - d.wc) * 0.4, x => sameText(x, d));
      return ds.length >= 2 ? { t: 'mc', tipo: 'sig', k, show: d.t, say: d.t, q: '¿Qué significa?', ops: [d.es].concat(ds), ok: 0, seed } : null;
    }
    if (ty === 'inv') {
      const ds = distract(bank.cards, d, x => x.t, 3, R, x => -Math.abs(x.wc - d.wc) * 0.4, x => sameMeaning(x, d));
      return ds.length >= 2 ? { t: 'mc', tipo: 'inv', k, show: d.es, showEs: true, say: d.t, q: `¿Cómo se dice en ${lower(c)}?`, ops: [d.t].concat(ds), ok: 0, opsT: true, seed } : null;
    }
    if (ty === 'oir') {
      if (!VO.TTS.ok || d.t.length > 70) return null;
      const ds = distract(bank.cards, d, x => x.t, 3, R, x => K.similarity(x.t, d.t) * 3 - Math.abs(x.wc - d.wc) * 0.3, x => sameMeaning(x, d));
      if (ds.length < 2) return null;
      return { t: 'oir', k, x: d.t, ops: [d.t].concat(ds), ok: 0, seed };
    }
    if (ty === 'decir') return micOk(c) && d.t.length <= 80 ? { t: 'decir', k, es: d.es, x: d.t } : null;
    if (ty === 'orden') return d.wc >= 3 && d.wc <= 9 ? { t: 'orden', k, es: d.es, x: d.t } : null;
    if (ty === 'hueco') { const s = sentFor(bank, d); return s ? mkHueco(c, s, k, bank, R, d.wc === 1 ? d.t : null) : null; }
    return null;
  }
  // Rehace un ejercicio a partir de su clave. null: ahora no se puede (p. ej. «decir» sin micrófono);
  // false: su origen ya no existe (el contenido ha cambiado) y el fallo se puede olvidar.
  function rebuildItem(c, k, bank, R) {
    let m;
    if ((m = /^ex:(.+)#(\d+)$/.exec(k))) { const l = lessonById(c, m[1]), e = l && (l.ejercicios || [])[+m[2]]; if (!e) return false; const it = lessonItem(l, e, +m[2]); it.seed += Math.floor(R() * 50); return it; }
    if ((m = /^rq:(.+)#(\d+)$/.exec(k))) { const r = readingById(c, m[1]), q = r && (r.preguntas || [])[+m[2]]; return q ? { t: 'mc', k, q: q.q, ops: q.ops, ok: q.ok, seed: Math.floor(R() * 9000) + 1 } : false; }
    if ((m = /^card:(.+):(\w+)$/.exec(k))) { const d = bank.cards.find(x => x.id === m[1]); return d ? makeItem(c, m[2], d, bank, R) : false; }
    if ((m = /^ej:(.+)#(\d+)#(\d+):(\w+)$/.exec(k))) {
      const s = bank.sents.find(x => x.key === 'ej:' + m[1] + '#' + m[2] + '#' + m[3]);
      if (!s) return false;
      return m[4] === 'orden' ? (s.t.split(' ').length <= 9 ? { t: 'orden', k, es: s.es, x: s.t } : null) : mkHueco(c, s, k, bank, R);
    }
    if (/^err:/.test(k)) { const e = errItems(c).find(x => errOf(x) === k); return e ? errItem(e, R) : null; }
    return null;
  }
  function errItem(e, R) {
    return { t: 'mc', tipo: 'corr', k: errOf(e), q: '¿Cuál es la forma correcta?', ops: [e.mejor, e.dijiste], ok: 0, opsT: true, say: e.mejor, nota: e.exp || '', seed: Math.floor(R() * 9000) + 1 };
  }
  function cardWeight(c, d) {
    const s = T(c).c[d.id], f = L(c).fallos;
    let w = s ? 1 : 0.7;
    if (s) { w += Math.min(3, s[4]) * 2; if (s[2] < 230) w += 2; if (s[1] < 7) w += 1; if (s[1] >= 21) w *= 0.5; }
    for (const ty of ['sig', 'inv', 'oir', 'hueco', 'orden', 'decir']) if (f['card:' + d.id + ':' + ty]) w += 4;
    return w;
  }
  function spread(items) {
    const out = [], rest = items.slice(), tipo = it => it.tipo || it.t;
    while (rest.length) {
      const last = out[out.length - 1];
      let i = rest.findIndex(x => !last || tipo(x) !== tipo(last));
      if (i < 0) i = 0;
      out.push(rest.splice(i, 1)[0]);
    }
    return out;
  }
  function buildMix(c, n) {
    const R = rng(Date.now() % 2147483647), bank = practiceBank(c), f = L(c).fallos, out = [], used = new Set();
    if (bank.cards.length < 3 && !bank.exs.length) return [];
    const add = it => { if (it && !used.has(it.k) && out.length < n) { out.push(it); used.add(it.k); return true; } return false; };
    // 1) lo último que has fallado
    const fk = Object.keys(f).sort((a, b) => (f[a].d < f[b].d ? 1 : -1)).slice(0, 12);
    let nf = 0;
    for (const k of shuf(fk, R)) { if (nf >= 4) break; if (add(rebuildItem(c, k, bank, R))) nf++; }
    // 2) ejercicios originales de tus lecciones
    let no = 0;
    for (const e of shuf(bank.exs, R)) { if (no >= 3) break; if (e.t === 'decir' && !micOk(c)) continue; if (add(e)) no++; }
    // 3) tarjetas, con más peso las difíciles y las falladas
    const types = shuf(['sig', 'inv', 'oir', 'hueco', 'orden', 'decir'], R);
    const order = bank.cards.map(d => ({ d, key: Math.pow(R(), 1 / cardWeight(c, d)) })).sort((a, b) => b.key - a.key).map(x => x.d);
    let ti = 0;
    for (const d of order) {
      if (out.length >= n) break;
      for (let a = 0; a < types.length; a++) {
        const ty = types[(ti + a) % types.length];
        if (add(makeItem(c, ty, d, bank, R))) { ti = (ti + a + 1) % types.length; break; }
      }
    }
    // 4) frases de ejemplo, si aún faltan
    for (const s of shuf(bank.sents, R)) {
      if (out.length >= n) break;
      if (s.key.indexOf('ej:') === 0) add(R() < 0.5 && s.t.split(' ').length <= 9 ? { t: 'orden', k: s.key + ':orden', es: s.es, x: s.t } : mkHueco(c, s, s.key + ':hueco', bank, R));
    }
    return spread(shuf(out, R));
  }
  function buildErrores(c) {
    const R = rng(Date.now() % 2147483647), bank = practiceBank(c), f = L(c).fallos, out = [], used = new Set();
    for (const k of Object.keys(f).sort((a, b) => (f[a].d < f[b].d ? 1 : -1))) {
      if (out.length >= 20) break;
      const it = rebuildItem(c, k, bank, R);
      if (it === false) { delete f[k]; ST.mark(c); continue; }
      if (it && !used.has(it.k)) { out.push(it); used.add(it.k); }
    }
    for (const e of errItems(c)) {
      if (out.length >= 26) break;
      const it = errItem(e, R);
      if (!used.has(it.k)) { out.push(it); used.add(it.k); }
    }
    return out;
  }
  function sessionFor(kind, c, fresh) {
    const key = (kind === 'errores' ? 'E:' : 'M:') + c;
    if (fresh || !PLY[key]) {
      const items = kind === 'errores' ? buildErrores(c) : buildMix(c, 15);
      PLY[key] = items.length ? plyNew(key, c, items, { mode: kind }) : null;
      if (!PLY[key]) delete PLY[key];
    }
    return PLY[key] || null;
  }
  function vPracticar() {
    const c = ui.course, cc = cardCounts(c), acc = accuracy(c, 7), nerr = errCount(c), ms = PLY['M:' + c], hear = canHear(c);
    const has = cc.total >= 3 || practiceBank(c).exs.length > 0;
    let h = `<h1 class="page">Practicar ${esc(lower(c))}</h1>`;
    if (!enCurso(c)) h += pausedBanner(c);
    h += `<div class="hub">`;
    const pend = cc.due + cc.fresh;
    h += `<section class="card hub-card"><div class="hub-top"><span class="hub-ico">${I.cards}</span><div><h2>Tarjetas</h2><p class="muted">${cc.total ? (pend ? `<strong>${pend}</strong> para hoy · ${cc.learned} aprendidas` : `Al día · ${cc.learned} aprendidas`) : 'Termina una lección para tener tarjetas.'}</p></div></div>
      ${cc.total ? `<button class="btn ${pend ? 'primary' : ''} wide" data-go="repasar">${pend ? 'Repasar tarjetas' : 'Abrir tarjetas'}</button>` : `<button class="btn wide" data-go="leccion">Ir a la lección</button>`}</section>`;
    h += `<section class="card hub-card"><div class="hub-top"><span class="hub-ico">${I.spark}</span><div><h2>Ejercicios variados</h2><p class="muted">Unos 15 con lo que ya has aprendido: significado, al revés, escucha, ordenar, huecos${hear ? ' y decir' : ''}. Insisten en lo que te cuesta.</p></div></div>
      ${!has ? '<p class="hint">Termina tu primera lección para tener con qué practicar.</p>' : ms && !ms.done ? `<div class="row-btns"><button class="btn primary" data-go="ejercicios">Seguir (${Object.keys(ms.fin).length}/${ms.items.length})</button><button class="btn" data-act="ses-new" data-kind="mezcla">Empezar otra</button></div>` : `<button class="btn primary wide" data-act="ses-new" data-kind="mezcla">Empezar</button>`}</section>`;
    h += `<section class="card hub-card"><div class="hub-top"><span class="hub-ico err-ico">${I.cross}</span><div><h2>Tus errores${nerr ? ` <span class="pill num">${nerr}</span>` : ''}</h2><p class="muted">Lo que has fallado en los ejercicios y lo que te han corregido. Cada acierto lo quita de la lista.</p></div></div>
      ${nerr ? `<button class="btn wide" data-act="ses-new" data-kind="errores">Practicar mis errores</button>` : '<p class="hint">Nada pendiente. ¡Bien!</p>'}</section></div>`;
    h += `<p class="hint center">${acc.n ? `Últimos 7 días: <strong>${pct(acc.ok, acc.n)} %</strong> de aciertos en ${acc.n} ejercicios.` : 'Tus aciertos de la semana aparecerán aquí y en Progreso.'}</p>`;
    return h;
  }
  function vSesion(kind) {
    const c = ui.course, s = sessionFor(kind, c, false), title = kind === 'errores' ? 'Tus errores' : 'Ejercicios variados';
    if (!s) return backBtn('practicar', 'Practicar') + `<h1 class="page">${title}</h1><div class="card center empty"><p class="big">${kind === 'errores' ? 'No tienes errores pendientes.' : 'Aún no hay nada que practicar.'}</p><p class="muted">${kind === 'errores' ? 'Lo que falles en los ejercicios aparecerá aquí.' : 'Termina tu primera lección y vuelve.'}</p><button class="btn primary" data-go="${kind === 'errores' ? 'practicar' : 'leccion'}">${kind === 'errores' ? 'Volver a Practicar' : 'Ir a la lección'}</button></div>`;
    ui.flow = true;
    const head = flowBar(`${title} · ${esc(lower(c))}`, 'practicar');
    if (s.done) return head + sesionResumen(s, kind);
    ui.ply = s;
    const p = playerParts(s);
    return head + p.body + p.bar;
  }
  function sesionResumen(s, kind) {
    const sc = plyScore(s), mins = Math.max(1, Math.round((Date.now() - s.t0) / 60000));
    const wrong = s.items.filter((it, i) => s.r[i] === 0);
    let h = `<section class="paso resumen" data-key="ses-fin-${esc(s.key)}-${s.t0}"><div class="card center done-card"><span class="done-badge">${I.check}</span><h2>Sesión terminada</h2><p class="score num">${sc.ok} de ${sc.n}</p><p class="muted">bien a la primera · ${mins} min</p></div>`;
    if (wrong.length) h += `<h2>Lo que más te ha costado</h2><ul class="corr">${wrong.map(it => `<li><span class="muted small">${esc(clip(questionText(it), 90))}</span><span class="ok t" lang="${s.c}">${esc(answerOf(it))}</span></li>`).join('')}</ul><p class="hint">Quedan en Tus errores hasta que los aciertes en otra sesión.</p>`;
    h += '</section>';
    return h + actbar(`<div class="actbar-btns"><button class="btn" data-act="close" data-to="practicar">Volver</button><button class="btn primary big" id="main-act" data-act="ses-new" data-kind="${kind}">Otra sesión${I.next}</button></div>`);
  }
  // Tarjetas (SM-2)
  let ses = null;
  function buildSession(c) {
    const defs = cardDefs(c), st = T(c).c, td = today();
    const due = [], fresh = [];
    for (const id of defs.keys()) { const s = st[id]; if (s) { if (s[0] <= td) due.push([id, s[0]]); } else fresh.push(id); }
    due.sort((a, b) => a[1] - b[1]);
    const allow = Math.max(0, nuevasDia(c) - newToday(c));
    return { c, day: td, queue: due.map(x => x[0]).concat(fresh.slice(0, allow)), pos: 0, flip: false, hechas: 0, defs, hist: [] };
  }
  function vRepasar() {
    const c = ui.course, cc = cardCounts(c);
    if (!ses || ses.c !== c || ses.day !== today() || (ses.pos >= ses.queue.length && !ses.hechas && cc.due + cc.fresh > 0)) ses = buildSession(c);
    ui.flow = true;
    const total = ses.queue.length, left = total - ses.pos;
    const undo = ses.hist.length ? `<button class="btn small ghost" data-act="undo">${I.undo}Deshacer</button>` : '';
    let h = flowBar(`Tarjetas · ${esc(lower(c))}`, 'practicar', undo);
    if (ses.pos >= total) {
      const more = cc.due + cc.fresh;
      h += `<section class="paso resumen" data-key="rep-fin"><div class="card center done-card"><span class="done-badge">${I.check}</span><h2>${ses.hechas ? `Hecho: ${ses.hechas} repasos` : 'No tienes tarjetas pendientes'}</h2><p class="muted">${cc.total ? `Llevas ${cc.learned} de ${cc.total} tarjetas aprendidas; ${cc.cons} ya consolidadas.` : 'Termina una lección para que sus palabras pasen aquí.'}</p></div></section>`;
      return h + actbar(`<div class="actbar-btns">${more ? `<button class="btn" data-act="rep-more">Seguir con ${more} más</button>` : `<button class="btn" data-act="close" data-to="practicar">Volver</button>`}${cc.total ? `<button class="btn primary big" id="main-act" data-act="ses-new" data-kind="mezcla">Ejercicios variados${I.next}</button>` : `<button class="btn primary big" id="main-act" data-go="leccion">Ir a la lección</button>`}</div>`);
    }
    const id = ses.queue[ses.pos], d = ses.defs.get(id), st = T(c).c[id];
    h += `<div class="ply-top"><div class="bar ply-bar" role="progressbar" aria-label="Tarjetas repasadas" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${ses.pos}"><i style="width:${pct(ses.pos, total)}%"></i></div><span class="num small muted" aria-label="Quedan ${left}">${left}</span></div>`;
    h += `<div class="review"><button class="flash${ses.flip ? ' flipped' : ''}" data-act="card-say" data-key="card-${esc(id)}-${ses.pos}" aria-label="Escuchar otra vez">${st ? '' : '<span class="tag">Nueva</span>'}<span class="front t" lang="${c}">${esc(d.t)}</span><span class="flash-play" aria-hidden="true">${I.play}</span>${ses.flip ? `<span class="backside"><span class="es">${esc(d.es)}</span><span class="muted small">${esc(d.src)}</span></span>` : '<span class="muted small flash-hint">¿Lo sabes? Dilo en voz alta y comprueba.</span>'}</button></div>`;
    if (!ses.flip) h += actbar(`<div class="actbar-btns"><button class="btn primary big" id="main-act" data-act="flip">Mostrar respuesta</button></div>`);
    else {
      const td = today(), lbl = g => K.intervalLabel(K.schedule(st, g, td)[1]);
      h += actbar(`<div class="grades">${[['g0', 'Otra vez'], ['g1', 'Difícil'], ['g2', 'Bien'], ['g3', 'Fácil']].map((x, g) => `<button class="${x[0]}" data-act="grade" data-g="${g}"${g === 2 ? ' id="main-act"' : ''}><span>${x[1]}</span><small>${lbl(g)}</small></button>`).join('')}</div>`);
    }
    return h;
  }
  function gradeCard(g) {
    if (!ses || ses.pos >= ses.queue.length) return;
    const id = ses.queue[ses.pos], c = ses.c, st = T(c).c[id], td = today();
    ses.hist.push({ id, prev: st ? st.slice() : null, nh: Object.assign({}, T(c).nh), queue: ses.queue.slice(), pos: ses.pos, hechas: ses.hechas });
    if (ses.hist.length > 30) ses.hist.shift();
    if (!st) { const nh = T(c).nh; if (nh && nh.d === td) nh.n++; else T(c).nh = { d: td, n: 1 }; }
    T(c).c[id] = K.schedule(st, g, td);
    if (g === 0) ses.queue.splice(Math.min(ses.queue.length, ses.pos + 4), 0, id);
    ses.pos++; ses.flip = false; ses.hechas++;
    ST.mark(c + '-tarjetas');
    touch(); render();
    if (P().ajustes.autoAudio && ses.pos < ses.queue.length) { const nd = ses.defs.get(ses.queue[ses.pos]); if (nd) say(c, nd.t); }
  }
  function undoGrade() {
    if (!ses || !ses.hist.length) return;
    const h = ses.hist.pop(), c = ses.c;
    if (h.prev) T(c).c[h.id] = h.prev; else delete T(c).c[h.id];
    T(c).nh = h.nh; ses.queue = h.queue; ses.pos = h.pos; ses.hechas = h.hechas; ses.flip = true;
    ST.mark(c + '-tarjetas'); render();
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
    return `<div class="sheet-top">${sayBtn(ui.course, w.w, 'Escuchar', w.antiguo)}<strong class="t">${esc(w.w)}</strong><button class="x" data-act="word-close" aria-label="Cerrar">${I.close}</button></div>
      <p>${w.gloss ? esc(w.gloss) : '<span class="muted">Sin traducción guardada.</span>'}</p>${w.ai ? `<p class="ai">${esc(w.ai)}</p>` : ''}
      <div class="row-btns"><button class="btn small" data-act="word-card">Añadir a mis tarjetas</button>${aiReady() ? `<button class="btn small ghost" data-act="word-ask" ${w.busy ? 'disabled' : ''}>${w.busy ? 'Preguntando…' : 'Explícamela'}</button>` : ''}</div>`;
  }
  function vLectura() {
    const c = ui.course, [rid] = splitParam(ui.param);
    let r = rid ? readingById(c, rid) : null;
    if (!r && rid && GEN_RE.test(rid)) return vPreparar(c, rid);
    if (!r) r = nextReading(c);
    if (!r) return backBtn('aprender', 'Aprender') + `<h1 class="page">Lecturas</h1><div class="card center empty"><p class="big">Has leído todas las lecturas.</p><p class="muted">Crea una nueva en Aprender: Claude la escribe con lo que ya sabes.</p><button class="btn primary" data-go="aprender">Ir a Aprender</button></div>`;
    ui.param = r.id;
    let idx = 0;
    const body = String(r.texto).split(/([\p{L}\u0300-\u036f]+)/u).map((part, k) => {
      if (k % 2 === 0) return esc(part).replace(/\n/g, '<br>');
      const i = idx++;
      return `<span class="w${ui.word && ui.word.i === i ? ' sel' : ''}" data-act="word" data-i="${i}">${esc(part)}</span>`;
    }).join('');
    const done = L(c).lee[r.id], showTr = ui.showTr[r.id];
    const qs = (r.preguntas || []).length ? `<h2>Comprensión</h2>${r.preguntas.map((q, i) => inlineEx(c, r.id + '#' + i, { t: 'mc', k: 'rq:' + r.id + '#' + i, q: q.q, ops: q.ops, ok: q.ok, seed: K.hash(r.id).length + i * 7 + 3 })).join('')}` : '';
    const main = `<div class="reading-tools"><button class="btn small" data-act="read-all">${I.play}Escuchar</button><button class="btn small ghost" data-act="stop">Parar</button>${r.traduccion ? `<button class="btn small ghost" data-act="tr-toggle" aria-pressed="${!!showTr}">${showTr ? 'Ocultar traducción' : 'Ver traducción'}</button>` : ''}</div>
      <p class="hint">Toca cualquier palabra para ver qué significa.</p><div class="reading t${r.antiguo ? ' antiguo' : ''}" lang="${c}">${body}</div>
      ${showTr ? `<div class="card tr"><p class="eyebrow">Traducción</p><p>${esc(r.traduccion).replace(/\n/g, '<br>')}</p></div>` : ''}
      ${r.notas ? `<aside class="note">${fmt(r.notas)}</aside>` : ''}`;
    const side = `<div class="gloss-panel card">${wordPanel()}</div>${qs}
      <div class="endbar">${done ? `<p class="hint">Leída el ${esc(done.d)}.</p>` : `<button class="btn primary wide" data-act="reading-done" data-id="${esc(r.id)}">Marcar como leída</button>`}${r.gen ? `<button class="btn ghost small" data-act="gen-delete" data-id="${esc(r.id)}">Borrar esta lectura</button>` : ''}</div>`;
    const eyebrow = r.gen ? esc(r.nivel || 'Hecha para ti') : r.nv > 1 ? `Lectura · nivel ${r.nv} · unidad ${r.un}` : 'Lectura · semana ' + r.semana + ' · ' + esc(r.nivel || '');
    return `${backBtn('aprender', 'Aprender')}<p class="eyebrow">${eyebrow}</p><h1 class="page t">${esc(r.titulo)}</h1><div class="two reading-two"><div class="col-main">${main}</div><div class="col-side">${side}</div></div>`;
  }

  // ---------------- Texto propio ----------------
  function vTexto() {
    const c = ui.course, st = ui.texto;
    let h = `${backBtn('aprender', 'Aprender')}<h1 class="page">Tu propio texto</h1><p class="lead">Pega un párrafo en ${esc(lower(c))} o haz una foto a una página. Claude lo transcribe, explica cada palabra y lo traduce; queda guardado en tus lecturas.</p>`;
    if (!aiReady()) return h + `<div class="card"><p>Para esto la app necesita tu clave de la API de Claude.</p><button class="btn primary" data-go="ajustes">Añadir clave en Ajustes</button></div>`;
    h += `<form class="card form" data-act="texto-send"><label class="field"><span>Texto</span><textarea id="txt" rows="7" lang="${c}" data-keep placeholder="${c === 'la' ? 'Varie de definitione termini sentiunt auctores…' : 'Pega aquí tu texto…'}" ${st.busy ? 'disabled' : ''}></textarea></label>
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
      const ta = $('#txt'); if (ta) ta.value = '';
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

  // ---------------- Hablar ----------------
  function vHablar() {
    const c = ui.course, hear = canHear(c);
    let h = `<h1 class="page">Hablar ${esc(lower(c))}</h1><div class="menu">`;
    h += `<button class="card menu-item" data-go="drill"><strong>Audio para hablar</strong><span class="muted">${courseOf(c).oido ? `Oyes la frase en español, la dices en ${esc(lower(c))}${hear ? ', la app te escucha' : ''} y oyes cómo se dice. Sin mirar la pantalla.` : 'Oyes la frase, piensas qué significa y oyes la traducción.'}</span></button>`;
    h += `<button class="card menu-item" data-go="grabar"><strong>Repite y grábate</strong><span class="muted">Escucha el modelo, grábate${hear ? ' y comprueba tu pronunciación' : ' y compárate'}.</span></button>`;
    h += `<button class="card menu-item" data-go="chat"><strong>Conversación con Claude</strong><span class="muted">${c === 'pl' ? 'Charla, conoce a sus padres o ensaya la cena de Nochebuena.' : c === 'la' ? 'Una clase de lógica en latín o un comentario de tu lectura.' : c === 'it' ? 'Una reunión, una llamada o la pausa del café.' : 'Una charla sencilla sobre filosofía.'}${hear ? ' También manos libres.' : ''} Corrección al final.</span></button>`;
    if (c === 'pl') h += `<button class="card menu-item" data-go="pareja"><strong>${I.heart} Sesión con ${esc(ella())}</strong><span class="muted">15 minutos cada 2 o 3 días. La app te prepara qué practicar con ella.</span></button>`;
    if ((courseOf(c).escucha || []).length) h += `<button class="card menu-item" data-go="escucha"><strong>Escucha nativa</strong><span class="muted">Vídeos y pódcast de nativos. Apunta aquí el tiempo.</span></button>`;
    return h + '</div>';
  }
  // Audio para hablar
  const DR = { on: false, items: [], i: 0, timer: null, c: null, phase: '', heard: null, score: null };
  const drillMode = c => P().ajustes.drill[c] || (courseOf(c).oido ? 'producir' : 'entender');
  function drillItems(c) {
    const out = [];
    for (const l of allLessons(c)) if (L(c).lec[l.id]) l.vocab.forEach(v => out.push({ t: v[0].replace(/…/g, '').trim(), es: v[1] }));
    if (!out.length) { const nl = nextLesson(c) || allLessons(c)[0]; if (nl) nl.vocab.forEach(v => out.push({ t: v[0].replace(/…/g, '').trim(), es: v[1] })); }
    return K.shuffle(out, (Date.now() % 9973) + 1);
  }
  function vDrill() {
    const c = ui.course, mode = drillMode(c);
    if (!DR.items.length || DR.c !== c) { DR.items = drillItems(c); DR.i = 0; DR.c = c; }
    const it = DR.items[DR.i];
    const listen = mode === 'producir' && canHear(c);
    let h = `${backBtn('hablar', 'Hablar')}<h1 class="page">Audio para hablar</h1>`;
    if (!VO.TTS.ok) h += `<p class="banner warn">Este navegador no tiene voz sintética. Abre Glossa con Chrome.</p>`;
    if (!it) return h + `<div class="card center empty"><p>Aún no hay frases: aparecerán cuando tengas lecciones.</p></div>`;
    h += `<div class="seg wide" role="group" aria-label="Modo"><button aria-pressed="${mode === 'producir'}" data-act="drill-mode" data-m="producir">Español → ${esc(lower(c))}</button><button aria-pressed="${mode === 'entender'}" data-act="drill-mode" data-m="entender">${esc(courseOf(c).nombre)} → español</button></div>
      <div class="card center drillcard"><p class="eyebrow num" id="dcount">${DR.i + 1} de ${DR.items.length}</p><p class="phase" id="dphase">${esc(DR.phase || (DR.on ? '' : 'Pulsa Empezar y deja el móvil a un lado'))}</p>
      <p class="t big ${ui.showDrill ? '' : 'blur'}" id="dt" lang="${c}">${esc(it.t)}</p><p class="muted ${ui.showDrill ? '' : 'blur'}" id="des">${esc(it.es)}</p><p class="heard" id="dheard"></p></div>
      <div class="row-btns center"><button class="btn primary" data-act="drill-toggle">${DR.on ? 'Pausar' : 'Empezar'}</button><button class="btn" data-act="drill-next">Siguiente</button><button class="btn ghost" data-act="drill-show">${ui.showDrill ? 'Ocultar texto' : 'Ver texto'}</button></div>
      <label class="field"><span>Pausa para responder: <strong id="pausav">${P().ajustes.pausa} s</strong></span><input type="range" min="2" max="8" step="1" value="${P().ajustes.pausa}" data-set="pausa"></label>
      ${listen ? `<label class="check"><input type="checkbox" data-set="escucharme" ${P().ajustes.escucharme ? 'checked' : ''}> Escucharme y comprobar lo que digo</label>` : ''}
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
    const c = DR.c, co = courseOf(c), pausa = (P().ajustes.pausa || 4) * 1000, mode = drillMode(c);
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
    for (const l of allLessons(c)) for (const b of l.bloques || []) if (b.t === 'ej') b.items.forEach(it => out.push({ t: it[0], es: it[1] }));
    return out.length ? out : [{ t: '', es: '' }];
  }
  function stopRec() { if (VO.REC.active) VO.REC.cancel(); if (ui.rec) ui.rec.recording = false; }
  function vGrabar() {
    const c = ui.course, items = grabarItems(c), r = ui.rec;
    if (r.c !== c) { ui.rec = { c, i: 0 }; }
    const it = items[ui.rec.i % items.length], st = ui.rec;
    let h = `${backBtn('hablar', 'Hablar')}<h1 class="page">Repite y grábate</h1>`;
    if (!it.t) return h + `<div class="card center empty"><p>Aún no hay frases: aparecerán cuando tengas lecciones.</p></div>`;
    let res = '';
    if (st.err) res += `<p class="err small">${esc(st.err)}</p>`;
    if (st.heard != null) { const v = verdict(st.score); res += `<p class="heard">Te he oído: «<span class="t">${esc(st.heard)}</span>»</p><p class="${v[0]}">${v[1]}</p>`; }
    return h + `<div class="card center"><p class="t big" lang="${c}">${esc(it.t)}</p><p class="muted">${esc(it.es)}</p>
      <div class="row-btns center">${sayBtn(c, it.t, 'Escuchar el modelo')}<button class="btn small" data-act="slow" data-text="${esc(it.t)}">Más despacio</button></div></div>
      <div class="row-btns center">
        ${VO.REC.ok ? `<button class="btn ${st.recording ? 'danger' : 'primary'}" data-act="rec-toggle">${st.recording ? I.stop + 'Parar' : I.rec + 'Grabarme'}</button>` : ''}
        ${canHear(c) ? `<button class="btn mic ${st.listening ? 'on' : ''}" data-act="rec-check" data-x="${esc(it.t)}" ${st.listening ? 'disabled' : ''}>${I.mic}${st.listening ? 'Te escucho…' : 'Comprobar pronunciación'}</button>` : ''}
      </div>
      ${st.url ? `<p class="muted small center">Tu grabación:</p><audio controls src="${st.url}"></audio>` : ''}${res}
      <div class="row-btns center"><button class="btn ghost" data-act="g-prev">Anterior</button><button class="btn" data-act="g-next">Otra frase</button></div>
      <p class="hint">Escucha el modelo dos o tres veces, grábate y compara. ${canHear(c) ? '«Comprobar pronunciación» te dice qué ha entendido el móvil.' : ''}</p>`;
  }
  // Escucha nativa
  function vEscucha() {
    const c = ui.course, links = courseOf(c).escucha || [];
    return `${backBtn('hablar', 'Hablar')}<h1 class="page">Escucha nativa</h1><p>Lo único que la app no puede darte: gente de verdad hablando. Escucha, y al volver apunta el tiempo.</p>
      ${links.length ? `<ul class="links">${links.map(l => `<li><a href="${esc(l[0])}" target="_blank" rel="noopener">${esc(l[1])}</a><span class="muted">${esc(l[2])}</span></li>`).join('')}</ul>` : '<p class="muted">Para este idioma aún no hay enlaces guardados.</p>'}
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
    return `${backBtn('hablar', 'Hablar')}<h1 class="page">Sesión con ${esc(ella())}</h1><p class="lead">${esc(status)} Dale el móvil cuando haga falta: lo que tiene que leer está en polaco.</p>
      <div class="two"><div>
        <section class="card step"><p class="eyebrow">1 · Que te pregunte · 5 min</p><p class="muted small">Que te haga estas preguntas en polaco, sin traducir. Tú respondes como puedas.</p>
          <ul class="examples">${(pj.preguntas || []).map(q => `<li>${sayBtn(c, q[0])}<span><span class="t big2" lang="pl">${esc(q[0])}</span><span class="muted">${esc(q[1])}</span></span></li>`).join('')}</ul></section>
        <section class="card step"><p class="eyebrow">2 · Que te corrija · 5 min</p><p class="muted small">Léelas en voz alta. Que te corrija la pronunciación y repite hasta que te diga «dobrze».</p>
          <ul class="examples">${frases.map(f => `<li>${sayBtn(c, f)}<span class="t" lang="pl">${esc(f)}</span></li>`).join('')}</ul>
          ${pj.reto ? `<aside class="note"><strong>Reto:</strong> <span class="t" lang="pl">${esc(pj.reto[0])}</span><br><span class="muted">${esc(pj.reto[1])}</span></aside>` : ''}</section>
      </div><div>
        <section class="card step"><p class="eyebrow">3 · Que te cuente · 5 min</p><p>${esc(pj.tema || 'Que te cuente algo de su familia o de cómo celebran la Navidad, despacio. Pregúntale dos cosas.')}</p></section>
        <form class="card form" data-act="par-done"><label class="field"><span>Lo que te ha corregido (opcional, una cosa por línea)</span><textarea id="par-notas" rows="4" lang="pl" data-keep placeholder="Wesołych Świąt = ¡Feliz Navidad!"></textarea></label>
          <p class="hint">Si escribes «polaco = español», se crea una tarjeta. Lo demás queda en tus correcciones.</p>
          <button class="btn primary wide" type="submit">Sesión hecha (15 min)</button></form>
      </div></div>`;
  }

  // ---------------- Conversación con Claude ----------------
  const ESCENAS = {
    pl: [['libre', 'Charla libre'], ['padres', 'Conocer a sus padres'], ['mesa', 'Cena de Nochebuena']],
    la: [['logica', 'Clase de lógica'], ['texto', 'Comenta tu lectura'], ['libre', 'Charla libre']],
    it: [['libre', 'Charla libre'], ['reunion', 'Una reunión'], ['cafe', 'Pausa del café']],
    grc: [['filosofia', 'Charla filosófica'], ['texto', 'Comenta tu lectura']]
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
    if (c === 'it') {
      const escena = sc === 'reunion' ? 'Estáis en una reunión de equipo. Eres su responsable italiana: le preguntas por su proyecto, los plazos y sus propuestas. Le tratas de Lei.'
        : sc === 'cafe' ? 'Pausa del café con un colega italiano: charla informal, de tú, sobre el fin de semana, la comida o el trabajo.'
          : 'Charla sencilla sobre los temas de esta semana: ' + (C(c).temasChat || []).join(', ') + '.';
      return `Eres un compañero de conversación para un hispanohablante que aprende italiano para el trabajo. Va por la semana ${w} de 8 (nivel A1-A2). Gramática de esta semana: ${prog}${yo}\nEscena: ${escena}\nReglas:\n- Escribe SOLO en italiano, con frases cortas (máximo 12 palabras).\n- Usa sobre todo palabras que ya conoce: ${words}.\n- Haz una sola pregunta sencilla en cada turno.\n- Si escribe en español o se atasca, dale en una línea la frase italiana que necesita, entre comillas, y sigue.\n- No corrijas durante la charla. Nada de traducciones: solo tu turno en italiano.`;
    }
    if (c === 'grc') {
      const lect = nextReading('grc');
      const escena = sc === 'texto' && lect ? `Comentáis la lectura «${lect.titulo}»: hazle preguntas sencillas sobre ella.` : 'Eres un filósofo ateniense que charla con un discípulo sobre la virtud, el alma y el saber, con ejemplos sencillos.';
      return `Eres un interlocutor en griego antiguo (ático) para un hispanohablante que lo aprende para leer filosofía. Va por la semana ${w} de 8 (nivel inicial). Gramática de esta semana: ${prog}${yo}\nEscena: ${escena}\nReglas:\n- Escribe SOLO en griego ático sencillo, con acentos y espíritus, en frases cortas (máximo 10 palabras).\n- Usa sobre todo palabras que ya conoce: ${words}.\n- Haz una pregunta sencilla en cada turno.\n- Si escribe en español, dale en una línea la frase griega que necesita, entre comillas, y sigue.\n- No corrijas durante la charla. Nada de traducciones: solo tu turno en griego.`;
    }
    return `Eres un compañero de conversación en ${lower(c)} para un hispanohablante principiante. Frases cortas, una pregunta por turno, solo en ${lower(c)}.`;
  }
  // Manos libres: escucha › envía al callar › Claude responde › lo oyes › vuelve a escuchar
  const HF = { on: false, c: null, phase: '', misses: 0, turns: 0 };
  const HF_TXT = { escucho: 'Te escucho… habla cuando quieras', pienso: 'Claude está pensando…', hablo: 'Claude te contesta…' };
  function hfStart(c) {
    const st = chatState(c);
    if (st.busy) return;
    HF.on = true; HF.c = c; HF.misses = 0; HF.turns = 0; st.err = '';
    VO.TTS.stop();
    if (!st.turns.length) { HF.phase = 'pienso'; chatCall(c, { quiet: true }).then(hfAfter); }
    else hfListen();
  }
  function hfListen() {
    if (!HF.on) return;
    if (ui.view !== 'chat' || ui.course !== HF.c) { hfStop(); return; }
    const c = HF.c, st = chatState(c);
    HF.phase = 'escucho'; render();
    let text = '', error = '';
    VO.STT.listen(courseOf(c).oido, {
      maxMs: 15000,
      onresult: alts => { text = String(alts[0] || '').trim(); },
      onerror: err => { error = err; },
      onend: () => {
        if (!HF.on) return;
        if (text) {
          HF.misses = 0; HF.turns++;
          st.turns.push({ role: 'user', content: text.slice(0, 1500) }); st.review = null;
          HF.phase = 'pienso';
          chatCall(c, { quiet: true }).then(hfAfter);
          return;
        }
        if (/not-allowed|service-not-allowed|no-support|language-not-supported|network|audio-capture/.test(error)) { hfStop(); st.err = sttError(error); render(); return; }
        if (++HF.misses >= 3) { hfStop(); render(); toast('No te oigo. Pulsa «Manos libres» para seguir.'); return; }
        hfListen();
      }
    });
  }
  function hfAfter(reply) {
    if (!HF.on) return;
    if (!reply) { hfStop(); render(); return; }
    if (HF.turns >= 40) { hfStop(); render(); toast('Pausa: llevas un buen rato. Pulsa «Manos libres» para seguir.'); return; }
    HF.phase = 'hablo'; render();
    say(HF.c, reply, { onend: () => { if (HF.on) setTimeout(hfListen, 300); } });
  }
  function hfStop() { if (!HF.on && !HF.phase) return; HF.on = false; HF.phase = ''; VO.STT.stop(); VO.TTS.stop(); }
  function vChat() {
    const c = ui.course, st = chatState(c), hear = canHear(c), hf = HF.on && HF.c === c;
    let h = `${backBtn('hablar', 'Hablar')}<h1 class="page">Conversación</h1>`;
    if (!aiReady()) return h + `<div class="card"><p>La conversación usa Claude con tu propia clave de la API: te cuesta unos céntimos al día y la clave se queda en este móvil.</p><button class="btn primary" data-go="ajustes">Añadir clave en Ajustes</button></div>`;
    const scenes = ESCENAS[c] || [['libre', 'Charla libre']];
    h += `<div class="chips" role="group" aria-label="Escena">${scenes.map(e => `<button class="chip ${st.esc === e[0] ? 'on' : ''}" data-act="chat-scene" data-s="${e[0]}" aria-pressed="${st.esc === e[0]}" ${st.busy || hf ? 'disabled' : ''}>${esc(e[1])}</button>`).join('')}</div>`;
    let log = `<div class="chatlog" id="chatlog" aria-live="polite">`;
    if (!st.turns.length) log += `<p class="muted">Elige una escena y pulsa Empezar.${hear ? ' Con «Manos libres» hablas sin tocar la pantalla.' : ''}</p>`;
    st.turns.forEach((t, i) => {
      if (t.role === 'assistant') {
        const live = i === st.turns.length - 1 && st.busy;
        log += `<div class="msg ai"><p class="t" lang="${c}" ${live ? 'id="streaming"' : ''}>${esc(t.content) || '<span class="muted">Pensando…</span>'}</p>${t.content && !live ? `<div class="msg-tools">${sayBtn(c, t.content)}<button class="btn tiny ghost" data-act="chat-tr" data-i="${i}" ${t.trBusy ? 'disabled' : ''}>${t.trBusy ? 'Traduciendo…' : 'Traducir'}</button></div>${t.tr ? `<p class="tr">${esc(t.tr)}</p>` : ''}` : ''}</div>`;
      } else log += `<div class="msg me"><p class="t" lang="${c}">${esc(t.content)}</p></div>`;
    });
    log += '</div>';
    if (st.err) log += `<p class="err">${esc(st.err)}</p>`;
    let bar = '';
    if (hf) {
      // Manos libres: sin pestañas ni cabecera; el estado y un botón grande de parar, abajo, al alcance del pulgar
      ui.flow = true;
      bar = actbar(`<div class="hf" data-key="hf"><div class="hf-row"><span class="hf-dot ${HF.phase}" aria-hidden="true">${HF.phase === 'escucho' ? I.mic : HF.phase === 'hablo' ? I.play : I.talk}</span><p class="hf-phase" aria-live="polite">${esc(HF_TXT[HF.phase] || '')}</p></div><button class="hf-stop" data-act="hf-stop">${I.stop}<span>Parar manos libres</span></button></div>`);
    } else if (!st.turns.length) {
      log += `<div class="row-btns"><button class="btn primary" data-act="chat-start" ${st.busy ? 'disabled' : ''}>Empezar</button>${hear ? `<button class="btn" data-act="hf-start" ${st.busy ? 'disabled' : ''}>${I.mic}Manos libres</button>` : ''}</div>`;
    } else {
      log += `<form class="composer" data-act="chat-send"><label for="chatin" class="sr">Tu mensaje</label><textarea id="chatin" rows="2" lang="${c}" data-keep placeholder="${c === 'la' ? 'Scrībe Latīnē…' : 'Escribe en ' + esc(lower(c)) + '…'}" ${st.busy ? 'disabled' : ''}></textarea>
        ${hear ? `<button class="btn mic icon ${st.listening ? 'on' : ''}" type="button" data-act="chat-mic" aria-label="Dictar" ${st.busy || st.listening ? 'disabled' : ''}>${I.mic}</button>` : ''}<button class="btn primary" type="submit" ${st.busy ? 'disabled' : ''}>Enviar</button></form>`;
    }
    if (st.turns.length) log += `<div class="row-btns">${st.busy && !hf ? '<button class="btn ghost" data-act="chat-stop">Parar</button>' : ''}${hear && !hf ? `<button class="btn" data-act="hf-start" ${st.busy ? 'disabled' : ''}>${I.mic}Manos libres</button>` : ''}<button class="btn" data-act="chat-review" ${st.busy || !st.turns.some(t => t.role === 'user') ? 'disabled' : ''}>Terminar y corregir</button><button class="btn ghost" data-act="chat-reset" ${st.busy || hf ? 'disabled' : ''}>Nueva conversación</button></div>`;
    const review = st.review ? reviewHtml(c, st.review) : (WIDE_Q.matches ? `<div class="card muted small">Cuando termines, pulsa «Terminar y corregir»: aquí verás tus errores y las palabras que te habrían servido.</div>` : '');
    return h + `<div class="two chat-two"><div class="col-main">${log}</div><div class="col-side">${review}</div></div>` + bar;
  }
  function chatScroll() {
    const box = $('#chatlog'), st = chatState(ui.course);
    if (!box) return;
    const n = st.turns.length * 2 + (st.busy ? 1 : 0);
    if (box.__n !== n) { box.__n = n; box.scrollTop = box.scrollHeight; }
  }
  function reviewHtml(c, r) {
    if (r === 'busy') return `<div class="card"><p class="muted">Revisando tus mensajes…</p></div>`;
    let h = `<div class="card review-card"><h2>Corrección</h2><p>${esc(r.resumen || '')}</p>`;
    if (r.correcciones && r.correcciones.length) h += `<ul class="corr">${r.correcciones.map(x => `<li><span class="bad t">${esc(x.dijiste)}</span><span class="ok t">${esc(x.mejor)}</span><span class="muted">${esc(x.explicacion)}</span></li>`).join('')}</ul>`;
    else h += '<p class="okmsg">Sin errores importantes.</p>';
    if (r.palabras && r.palabras.length) h += `<h3>Palabras que te habrían servido</h3><ul class="vocab">${r.palabras.map((p, i) => `<li>${sayBtn(c, p.t)}<span class="t">${esc(p.t)}</span><span class="muted">${esc(p.es)}</span><button class="btn tiny" data-act="rev-card" data-i="${i}">Añadir</button></li>`).join('')}</ul>`;
    return h + '</div>';
  }
  async function chatCall(c, o) {
    o = o || {};
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
        onText: text => {
          reply.content = text;
          const el = $('#streaming'), box = $('#chatlog');
          if (el) el.textContent = text;
          if (box && box.scrollHeight - box.scrollTop - box.clientHeight < 90) box.scrollTop = box.scrollHeight;
        } });
      reply.content = res.text.trim();
      touch();
    } catch (e) {
      reply.content = (e && e.text) || '';
      if (!reply.content) st.turns.pop();
      st.err = AI.message(e);
    } finally {
      st.busy = false; st.ctl = null;
      if (ui.view === 'chat') render();
      if (reply.content && !o.quiet && P().ajustes.autoAudio && ui.view === 'chat') say(c, reply.content);
    }
    return st.err ? '' : reply.content;
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
    const temas = C(c).temasChat || ['la vida diaria'], tema = temas[(G(c).l.length + w) % temas.length];
    const prog = (C(c).programa || [])[w - 1] || '';
    const extra = c === 'la' ? '\n- Latín con vocabulario filosófico y escolástico. Marca con macrón TODAS las vocales largas (ā ē ī ō ū), también en las claves de la glosa.' : c === 'pl' ? '\n- Polaco natural de nivel A1-A2, con todos los signos diacríticos.' : c === 'grc' ? '\n- Griego ático con acentos y espíritus, vocabulario filosófico.' : '';
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

  // ---------------- Niveles 2 y 3: unidades que prepara Claude ----------------
  // Prompts: genPlanPrompt (plan de la unidad), genLessonPrompt (una lección), genReadingPrompt (una lectura)
  // y glossPrompt (palabras que faltan en la glosa). Todo se valida antes de guardarse en <c>-niveles.
  const GEN = { busy: '', err: {}, prog: '' };
  function unitInfo(c, uk) {
    const m = /^n(\d+)u(\d+)$/.exec(uk), n = +m[1], u = +m[2], lv = niveles(c).find(x => x.n === n) || { n, nombre: 'Nivel ' + n, lema: '' };
    return { n, u, lv, tema: Array.isArray(lv.temario) ? lv.temario[u - 1] || '' : '' };
  }
  const IDIOMA_REGLAS = {
    pl: 'Polaco correcto y natural, con todos los signos diacríticos.',
    la: 'Latín correcto; marca con macrón TODAS las vocales largas (ā ē ī ō ū), también en vocab, ejemplos y claves de la glosa.',
    grc: 'Griego ático correcto, con acentos y espíritus; en el vocabulario, el enunciado del diccionario (λόγος, -ου, ὁ).',
    it: 'Italiano correcto y natural, registro profesional cuando toque (Lei).'
  };
  function learnerContext(c) {
    const words = shuf(knownWords(c, 400), rng(K.hash(todayStr()).length + 11)).slice(0, 70);
    const f = L(c).fallos, fx = Object.keys(f).sort((a, b) => (f[a].d < f[b].d ? 1 : -1)).slice(0, 6).map(k => `${f[k].q} → ${f[k].a}`);
    const ex = L(c).err.slice(0, 5).map(e => (e.dijiste ? `«${e.dijiste}» → «${e.mejor}»` : `«${e.mejor}»`));
    const done = allLessons(c).filter(l => L(c).lec[l.id]).length;
    return `Hispanohablante de España${P().nombre ? ', se llama ' + P().nombre : ''}; estudia unas horas al día. Lleva ${done} lecciones hechas.\n`
      + `Programa ya estudiado (nivel 1): ${(C(c).programa || []).join(' | ')}\n`
      + (words.length ? `Muestra de su vocabulario: ${words.join(', ')}.\n` : '')
      + (fx.length || ex.length ? `Errores recientes: ${fx.concat(ex).join('; ')}.\n` : '');
  }
  const LESSON_SCHEMA = '{"titulo": "título breve en español", "min": 40, "intro": "2 o 3 frases: qué aprende y para qué", "vocab": [["palabra o frase en el idioma", "traducción"]], "bloques": [{"t": "p", "x": "explicación; *cursiva* para formas del idioma"}, {"t": "tabla", "cab": ["col 1", "col 2"], "filas": [["…", "…"]], "audio": [0]}, {"t": "nota", "x": "truco o aviso"}, {"t": "ej", "items": [["frase de ejemplo", "traducción"]]}], "ejercicios": [{"t": "mc", "q": "pregunta", "ops": ["correcta", "otra", "otra"], "ok": 0}, {"t": "oir", "x": "palabra", "ops": ["palabra", "parecida", "parecida"], "ok": 0}, {"t": "orden", "es": "frase en español", "x": "frase en el idioma, palabras separadas por espacios"}, {"t": "decir", "es": "frase en español", "x": "frase en el idioma"}]}';
  function styleRules(c) {
    const co = courseOf(c);
    return `Reglas:\n- Español de España, de tú, conciso y correcto. Nada de relleno ni de saludos.\n- ${IDIOMA_REGLAS[c] || 'Idioma correcto y natural.'}\n- Construye sobre lo que ya sabe y no repitas su vocabulario: las tarjetas (vocab) deben ser nuevas.\n`
      + (co.oido ? '- Puedes usar ejercicios «decir» (como mucho 2).\n' : '- NO uses ejercicios «decir»: este idioma no tiene reconocimiento de voz.\n')
      + '- En «oir», x es exactamente una de las opciones y ok su posición. En «orden», x tiene de 3 a 9 palabras separadas por espacios.\n';
  }
  function genPlanPrompt(c, uk) {
    const info = unitInfo(c, uk), co = courseOf(c);
    return `Eres el autor de un curso de ${lower(c)} (${co.meta.toLowerCase()}). PLAN DE UNIDAD: prepara la unidad ${info.u} de 8 del ${info.lv.nombre} («${info.lv.lema}»). Tema de la unidad: «${info.tema}».\n`
      + `El alumno:\n${learnerContext(c)}`
      + `Devuelve SOLO un JSON con esta forma:\n{"titulo": "título breve de la unidad, en español", "objetivos": ["3 o 4 objetivos concretos"], "lecciones": [{"titulo": "…", "foco": "qué gramática, vocabulario o texto trabaja, en una frase"}], "lecturas": [{"titulo": "…", "foco": "…"}]}\n`
      + 'Exactamente 6 lecciones y 2 lecturas, de menos a más difícil, con progresión clara desde lo que ya sabe. Español de España, de tú, conciso.';
  }
  function genLessonPrompt(c, uk, j) {
    const info = unitInfo(c, uk), g = NV(c).u[uk], plan = g.plan, p = plan.lecciones[j];
    return `Eres el autor de un curso de ${lower(c)} (${courseOf(c).meta.toLowerCase()}). Escribe la LECCIÓN COMPLETA ${j + 1} de ${plan.lecciones.length} de la unidad «${plan.titulo}» (${info.lv.nombre}: ${info.lv.lema}; tema: ${info.tema}).\n`
      + `Título: «${p.titulo}». Foco: ${p.foco}\nObjetivos de la unidad: ${(plan.objetivos || []).join('; ')}\nLecciones de la unidad: ${plan.lecciones.map((x, i) => (i + 1) + '. ' + x.titulo).join(' | ')}\n`
      + `El alumno:\n${learnerContext(c)}${styleRules(c)}`
      + '- Entre 12 y 20 tarjetas en vocab. Bloques: explicación clara, una tabla si hay paradigma (audio = columnas en el idioma), ejemplos (ej) y alguna nota.\n- Entre 6 y 9 ejercicios variados.\n'
      + `Devuelve SOLO un JSON con esta forma:\n${LESSON_SCHEMA}`;
  }
  function genReadingPrompt(c, uk, j) {
    const info = unitInfo(c, uk), g = NV(c).u[uk], plan = g.plan, p = plan.lecturas[j];
    return `Eres el autor de un curso de ${lower(c)} (${courseOf(c).meta.toLowerCase()}). Escribe la LECTURA DE UNIDAD ${j + 1} de la unidad «${plan.titulo}» (${info.lv.nombre}: ${info.lv.lema}; tema: ${info.tema}).\n`
      + `Título: «${p.titulo}». Foco: ${p.foco}\nEl alumno:\n${learnerContext(c)}${styleRules(c)}`
      + '- Entre 120 y 220 palabras. Si el foco es un texto real, selecciona o adapta con fidelidad y dilo en las notas.\n- La glosa incluye TODAS las palabras distintas del texto, en minúsculas y escritas como aparecen.\n- 3 preguntas de comprensión en español.\n'
      + 'Devuelve SOLO un JSON con esta forma:\n{"titulo": "…", "nivel": "nivel orientativo, p. ej. B1", "texto": "…", "traduccion": "traducción al español, natural y fiel", "glosa": {"forma": "traducción; análisis breve si ayuda"}, "preguntas": [{"q": "…", "ops": ["correcta", "otra", "otra"], "ok": 0}], "notas": "2 a 4 notas breves sobre lo difícil"}';
  }
  const glossPrompt = (c, r, words) => `GLOSA QUE FALTA. Texto en ${lower(c)}:\n<<<\n${r.texto}\n>>>\nDa la traducción al español, con un análisis breve si ayuda, de estas formas del texto: ${words.join(', ')}.\nDevuelve SOLO un JSON {"forma": "significado"} con exactamente esas formas, en minúsculas.`;
  const validOps = ops => Array.isArray(ops) && ops.length >= 2 && ops.length <= 6 && ops.every(o => str(String(o == null ? '' : o))) && new Set(ops.map(String)).size === ops.length;
  const fixStars = s => ((s.replace(/\*\*/g, '').split('*').length - 1) % 2 ? s.replace(/\*/g, '') : s);
  function validatePlan(raw, tema) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw { code: 'bad_json' };
    const item = x => ({ titulo: clip(x.titulo, 90), foco: clip(x.foco || '', 300) });
    const ls = (Array.isArray(raw.lecciones) ? raw.lecciones : []).filter(x => x && str(x.titulo)).slice(0, 8).map(item);
    const rs = (Array.isArray(raw.lecturas) ? raw.lecturas : []).filter(x => x && str(x.titulo)).slice(0, 3).map(item);
    if (ls.length < 3) throw { code: 'bad_json' };
    return { titulo: clip(str(raw.titulo) ? raw.titulo : tema, 90), objetivos: (Array.isArray(raw.objetivos) ? raw.objetivos : []).filter(str).slice(0, 6).map(x => clip(x, 180)), lecciones: ls, lecturas: rs };
  }
  function validateLesson(c, raw, id, p) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw { code: 'bad_json' };
    const seen = new Set();
    for (const l of allLessons(c)) l.vocab.forEach(v => seen.add(K.normKey(v[0])));
    for (const k of Object.keys(PR(c).c)) seen.add(K.normKey(PR(c).c[k].t));
    const vocab = [];
    for (const v of Array.isArray(raw.vocab) ? raw.vocab : []) {
      if (!Array.isArray(v) || !str(v[0]) || !str(v[1])) continue;
      const k = K.normKey(v[0].trim());
      if (seen.has(k)) continue;
      seen.add(k); vocab.push([clip(v[0], 160), clip(v[1], 240)]);
      if (vocab.length >= 30) break;
    }
    const bloques = [];
    for (const b of Array.isArray(raw.bloques) ? raw.bloques : []) {
      if (!b || typeof b !== 'object') continue;
      if ((b.t === 'p' || b.t === 'nota') && str(b.x)) bloques.push({ t: b.t, x: fixStars(clip(b.x, 2400)) });
      else if (b.t === 'ej' && Array.isArray(b.items)) {
        const items = b.items.filter(it => Array.isArray(it) && str(it[0]) && str(it[1])).slice(0, 16).map(it => [clip(it[0], 240), clip(it[1], 240)]);
        if (items.length) bloques.push({ t: 'ej', items });
      } else if (b.t === 'tabla' && Array.isArray(b.cab) && b.cab.length && Array.isArray(b.filas)) {
        const cab = b.cab.slice(0, 6).map(x => clip(x, 60));
        const filas = b.filas.filter(Array.isArray).slice(0, 24).map(f => { const r = f.slice(0, cab.length).map(x => clip(x == null ? '' : x, 120)); while (r.length < cab.length) r.push(''); return r; });
        const audio = (Array.isArray(b.audio) ? b.audio : []).map(Number).filter(j => Number.isInteger(j) && j >= 0 && j < cab.length);
        if (filas.length) bloques.push({ t: 'tabla', cab, filas, audio });
      }
    }
    const ejercicios = [], oido = !!courseOf(c).oido;
    for (const e of Array.isArray(raw.ejercicios) ? raw.ejercicios : []) {
      if (!e || typeof e !== 'object') continue;
      if (e.t === 'mc' && str(e.q) && validOps(e.ops)) {
        const ops = e.ops.map(String), ok = Number(e.ok);
        if (Number.isInteger(ok) && ok >= 0 && ok < ops.length) ejercicios.push({ t: 'mc', q: fixStars(clip(e.q, 300)), ops, ok });
      } else if (e.t === 'oir' && str(e.x) && validOps(e.ops)) {
        const ops = e.ops.map(String), ok = ops.indexOf(String(e.x));
        if (ok >= 0) ejercicios.push({ t: 'oir', x: String(e.x), ops, ok });
      } else if (e.t === 'orden' && str(e.es) && str(e.x) && e.x.trim().split(/\s+/).length >= 2) ejercicios.push({ t: 'orden', es: clip(e.es, 240), x: e.x.trim().replace(/\s+/g, ' ') });
      else if (e.t === 'decir' && oido && str(e.es) && str(e.x)) ejercicios.push({ t: 'decir', es: clip(e.es, 240), x: clip(e.x, 240) });
    }
    // Las tarjetas repetidas se quitan sin rechazar la lección (una lección de gramática puede no traer palabras nuevas).
    if (!str(raw.intro) || ejercicios.length < 3 || !bloques.length) throw { code: 'bad_json' };
    return { id, titulo: clip(str(raw.titulo) ? raw.titulo : p.titulo, 120), min: clamp(Math.round(Number(raw.min) || 40), 15, 90), intro: fixStars(clip(raw.intro, 1500)), vocab, bloques, ejercicios, d: todayStr() };
  }
  function validateReading(c, raw, id, p, nivel) {
    if (!raw || typeof raw !== 'object' || !str(raw.texto)) throw { code: 'bad_json' };
    const glosa = {};
    if (raw.glosa && typeof raw.glosa === 'object') for (const k of Object.keys(raw.glosa).slice(0, 1500)) { const v = raw.glosa[k]; if (str(String(v == null ? '' : v))) glosa[String(k).toLowerCase()] = clip(v, 240); }
    const preguntas = (Array.isArray(raw.preguntas) ? raw.preguntas : []).filter(q => q && str(q.q) && validOps(q.ops)).map(q => ({ q: clip(q.q, 300), ops: q.ops.map(String), ok: Number(q.ok) })).filter(q => Number.isInteger(q.ok) && q.ok >= 0 && q.ok < q.ops.length).slice(0, 5);
    return { id, titulo: clip(str(raw.titulo) ? raw.titulo : p.titulo, 120), nivel: clip(str(raw.nivel) ? raw.nivel : nivel, 40), texto: clip(raw.texto, 6000), traduccion: str(raw.traduccion) ? clip(raw.traduccion, 6000) : '', glosa, preguntas, notas: raw.notas ? clip(Array.isArray(raw.notas) ? raw.notas.join(' ') : String(raw.notas), 1500) : '', d: todayStr() };
  }
  const missingGloss = r => Array.from(new Set(K.words(r.texto).filter(w => glossFor(r, w) == null).map(w => w.toLowerCase())));
  function genProgress(t) { GEN.prog = 'Recibiendo… ' + Math.round(t.length / 1000) + ' mil caracteres'; const el = $('#genprog'); if (el) el.textContent = GEN.prog; }
  async function genPlanRaw(c, uk) {
    const a = P().ajustes.ia, info = unitInfo(c, uk);
    const raw = await AI.json({ key: a.key, model: a.modelo, maxTokens: 16000, effort: 'medium', messages: [{ role: 'user', content: genPlanPrompt(c, uk) }], onText: genProgress });
    const plan = validatePlan(raw, info.tema);
    NV(c).u[uk] = Object.assign({ lecciones: [], lecturas: [] }, NV(c).u[uk], { plan, d: todayStr() });
    ST.mark(c + '-niveles');
  }
  async function genPlan(c, uk) {
    const k = 'plan:' + c + ':' + uk;
    if (GEN.busy) return;
    if (!aiReady()) { GEN.err[k] = AI.message({ code: 'no_key' }); render(); return; }
    GEN.busy = k; GEN.err[k] = ''; GEN.prog = ''; render();
    try { await genPlanRaw(c, uk); } catch (e) { GEN.err[k] = AI.message(e) || 'No se ha podido preparar.'; }
    GEN.busy = ''; GEN.prog = ''; render();
  }
  async function genItem(c, id) {
    const m = GEN_RE.exec(id || '');
    if (!m || GEN.busy) return;
    if (!aiReady()) { GEN.err[id] = AI.message({ code: 'no_key' }); render(); return; }
    const n = +m[2], uk = ukey(n, +m[3]), isR = m[4] === 'r', j = +m[5] - 1;
    GEN.busy = id; GEN.err[id] = ''; GEN.prog = ''; render();
    try {
      if (!NV(c).u[uk] || !NV(c).u[uk].plan) await genPlanRaw(c, uk);
      const plan = NV(c).u[uk].plan, p = (isR ? plan.lecturas : plan.lecciones)[j];
      if (!p) throw { code: 'bad_json' };
      const a = P().ajustes.ia;
      const raw = await AI.json({ key: a.key, model: a.modelo, maxTokens: 16000, effort: 'medium', messages: [{ role: 'user', content: isR ? genReadingPrompt(c, uk, j) : genLessonPrompt(c, uk, j) }], onText: genProgress });
      const item = isR ? validateReading(c, raw, id, p, 'Nivel ' + n) : validateLesson(c, raw, id, p);
      if (isR) {
        const miss = missingGloss(item);
        if (miss.length) {
          try {
            const more = await AI.json({ key: a.key, model: a.modelo, maxTokens: 4000, effort: 'low', messages: [{ role: 'user', content: glossPrompt(c, item, miss.slice(0, 120)) }] });
            if (more && typeof more === 'object') for (const k of Object.keys(more)) if (str(String(more[k] == null ? '' : more[k])) && item.glosa[k.toLowerCase()] == null) item.glosa[k.toLowerCase()] = clip(more[k], 240);
          } catch (e) { /* se guarda igual: la hoja de la palabra ofrece «Explícamela» */ }
        }
      }
      const g = NV(c).u[uk], arr = isR ? (g.lecturas = Array.isArray(g.lecturas) ? g.lecturas : []) : (g.lecciones = Array.isArray(g.lecciones) ? g.lecciones : []);
      while (arr.length < j) arr.push(null);
      arr[j] = item;
      ST.mark(c + '-niveles');
    } catch (e) { GEN.err[id] = AI.message(e) || 'No se ha podido preparar.'; }
    GEN.busy = ''; GEN.prog = '';
    render();
  }
  // Tras terminar una lección: adelanta lo siguiente que haya que preparar (si ya estás en los niveles nuevos)
  function prefetch(c, l) {
    if (!aiReady() || GEN.busy) return;
    if (!(l.nv > 1 || !nextLesson(c))) return;
    for (const lv of niveles(c)) {
      if (!Array.isArray(lv.temario) || !nivelAbierto(c, lv.n)) continue;
      for (const u of unitsOf(c, lv.n)) {
        if (!u.ready) { genPlan(c, u.key); return; }
        const pend = unitOrder(u).find(x => x.pend);
        if (pend) { genItem(c, pend.id); return; }
        if (!unitStats(c, u).done) return;
      }
    }
  }
  function vPreparar(c, id) {
    const m = GEN_RE.exec(id), n = +m[2], u = +m[3], uk = ukey(n, u), isR = m[4] === 'r', j = +m[5] - 1;
    const g = NV(c).u[uk], plan = g && g.plan, p = plan && (isR ? plan.lecturas : plan.lecciones)[j];
    const what = isR ? 'lectura' : 'lección', busy = GEN.busy === id, err = GEN.err[id];
    let h = `${backBtn('aprender', 'Aprender')}<p class="eyebrow">Nivel ${n} · unidad ${u} · ${what} ${j + 1}</p><h1 class="page">${esc(p ? p.titulo : unitInfo(c, uk).tema || 'Nueva unidad')}</h1>`;
    if (!nivelAbierto(c, n)) return h + `<div class="card locked"><p>${I.lock}<strong>El nivel ${n} todavía está cerrado.</strong></p><button class="btn" data-act="abrir-nivel" data-n="${n}">Abrir ya</button></div>`;
    if (!aiReady()) return h + `<div class="card"><p>Claude prepara esta ${what} a tu medida con tu clave de la API.</p><button class="btn primary" data-go="ajustes">Añadir clave en Ajustes</button></div>`;
    if (err) return h + `<div class="card center"><p class="err">${esc(err)}</p><button class="btn primary" data-act="gen-item" data-id="${esc(id)}">Reintentar</button></div>`;
    if (!busy && !GEN.busy) setTimeout(() => { if (splitParam(ui.param)[0] === id && !GEN.busy && !GEN.err[id]) genItem(c, id); }, 0);
    return h + `<div class="card center genbox"><span class="spin" aria-hidden="true"></span><p><strong>${busy ? `Preparando la ${what}…` : 'Esperando turno…'}</strong></p><p class="muted">Claude la escribe a tu medida, con lo que ya sabes. Suele tardar entre 30 y 60 s.</p><p class="muted small" id="genprog">${esc(busy ? GEN.prog : '')}</p></div>`;
  }

  // ---------------- Progreso ----------------
  const CONTROL = ['Grabar 2 minutos hablando del tema de la semana', 'Leer en voz alta un texto nuevo y entender el 80 %', 'Escuchar un audio nuevo de 3 minutos y resumirlo', 'Tener los repasos de tarjetas al día', 'Mantener 10-15 minutos de conversación sin cambiar de idioma'];
  const HITOS = {
    pl: [[2, '400 palabras; presentarte durante 2 minutos'], [4, '900 palabras; 5 minutos de conversación'], [6, '1.500 palabras; 15 minutos sobre tu trabajo'], [8, '2.000 palabras; 15 minutos sin pasarte al español']],
    la: [[2, '400 palabras; leer en voz alta sin trabarte'], [4, '800 palabras; entender «dicitur quod» y la pasiva'], [6, 'Leer un artículo de la Suma adaptado'], [8, 'Leer con ayuda la página de Juan de Santo Tomás']],
    it: [[2, '300 palabras; presentarte y hablar de tu trabajo'], [4, 'Escribir un correo formal sencillo'], [6, 'Proponer y negociar en una reunión'], [8, 'Opinar 5 minutos en una reunión']],
    grc: [[2, 'Leer en voz alta con soltura; 300 palabras'], [4, 'Traducir frases adaptadas de Platón'], [6, 'Reconocer participios y el genitivo absoluto'], [8, 'Leer con notas a Heráclito y la caverna']]
  };
  const DIA1 = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
  function minutesChart(c) {
    const td = today(), goal = dayGoal(c), days = [];
    for (let d = td - 13; d <= td; d++) days.push({ d, m: minutes(c, null, K.dayStr(d)) });
    const max = Math.max(goal, ...days.map(x => x.m), 10), total = days.reduce((a, x) => a + x.m, 0), act = days.filter(x => x.m > 0).length;
    const bars = days.map(x => {
      const lab = K.dayLabel(x.d, td), h = x.m ? Math.max(2, Math.round(x.m / max * 100)) : 0;
      return `<div class="cb${x.d === td ? ' today' : ''}" style="--h:${h}%" tabindex="0" role="img" aria-label="${esc(lab)}: ${x.m} min" data-tip="${esc(lab)} · ${x.m} min"><span class="cv num">${x.d === td && x.m ? x.m : ''}</span><i></i><span class="cd">${DIA1[new Date(x.d * 864e5).getUTCDay()]}</span></div>`;
    }).join('');
    return `<section class="card chart"><div class="row-between"><h2>Minutos al día</h2><span class="muted small">últimos 14 días</span></div>
      <div class="cbars" style="--goal:${Math.round(goal / max * 100)}%"><span class="goal" aria-hidden="true"><span>meta ${goal}</span></span>${bars}</div>
      <p class="muted small">${total} min en 14 días · ${act} ${act === 1 ? 'día' : 'días'} con estudio · media de ${Math.round(total / 14)} min al día</p>
      <details class="table-view" data-keep><summary>Ver en tabla</summary><table><thead><tr><th>Día</th><th>Minutos</th></tr></thead><tbody>${days.slice().reverse().map(x => `<tr><td>${esc(K.dayLabel(x.d, td))}</td><td class="num">${x.m}</td></tr>`).join('')}</tbody></table></details></section>`;
  }
  function vProgreso() {
    const c = ui.course, w = curWeek(c), run = running(), tot = ACTIVE.reduce((a, co) => a + minutes(co.id), 0), sk = streak(), np = L('pl').par.n || 0;
    const skTxt = tot >= 20 ? 'hoy ya cuenta' : sk ? `te faltan ${20 - tot} min para sumar hoy` : `con ${20 - tot} min más hoy, empiezas la racha`;
    let h = `<h1 class="page">Progreso</h1><div class="card streak"><span class="bignum num">${sk}</span><span><strong>${sk === 1 ? 'día seguido' : 'días seguidos'}</strong><span class="muted small">con al menos 20 minutos · hoy llevas ${tot} min: ${skTxt}${np ? ` · ${np} ${np === 1 ? 'sesión' : 'sesiones'} con ${esc(ella())}` : ''}</span></span></div>`;
    const tabsC = ACTIVE.filter(co => enCurso(co.id) || co.id === c);
    if (tabsC.length > 1) h += `<div class="chips" role="group" aria-label="Idioma">${tabsC.map(co => `<button class="chip ${co.id === c ? 'on' : ''}" data-course="${co.id}" data-course-set="${co.id}" aria-pressed="${co.id === c}">${esc(co.nombre)}</button>`).join('')}</div>`;
    const lvN = curLevelNum(c), lv = niveles(c).find(x => x.n === lvN) || {}, ls = levelStats(c, lvN), cc = cardCounts(c), acc = accuracy(c, 7);
    h += `<div class="pgrid" data-course="${c}">`;
    h += `<section class="card stat"><p class="eyebrow">${esc(lv.nombre || 'Nivel ' + lvN)}</p><p class="bignum num">${pct(ls.done, ls.total)} %</p><p class="muted small">${ls.total ? `${ls.done} de ${ls.total} lecciones${ls.rtotal ? ` · ${ls.rdone} de ${ls.rtotal} lecturas` : ''}` : 'Las lecciones se están preparando'}</p><div class="bar"><i style="width:${pct(ls.done, ls.total)}%"></i></div></section>`;
    h += `<section class="card stat"><p class="eyebrow">Palabras y frases</p><p class="bignum num">${cc.cons}</p><p class="muted small">consolidadas (repaso a 3 semanas o más)</p><dl class="kv"><dt>Aprendiendo</dt><dd class="num">${cc.seen - cc.cons}</dd><dt>Por estrenar</dt><dd class="num">${cc.unseen}</dd><dt>Total</dt><dd class="num">${cc.total}</dd></dl></section>`;
    h += `<section class="card stat"><p class="eyebrow">Aciertos · 7 días</p>${acc.n ? `<p class="bignum num">${pct(acc.ok, acc.n)} %</p><p class="muted small">${acc.ok} de ${acc.n} ejercicios</p>` : `<p class="bignum num muted">—</p><p class="muted small">Aún no has hecho ejercicios esta semana.</p>`}<dl class="kv"><dt>Hoy</dt><dd class="num">${minutes(c)} min</dd><dt>Para hoy</dt><dd class="num">${cc.due + cc.fresh} tarjetas</dd></dl></section></div>`;
    h += minutesChart(c);
    const ctrl = L(c).ctrl[w] || [], hitos = HITOS[c] || [];
    h += `<div class="two"><div><h2>Control del domingo · semana ${w}</h2><p class="muted small">${esc(courseOf(c).nombre)}. Si no llegas al hito, repite la semana antes de avanzar.</p><ul class="checks">${CONTROL.map((x, i) => `<li><label><input type="checkbox" data-act="ctrl" data-i="${i}" ${ctrl[i] ? 'checked' : ''}> ${esc(x)}</label></li>`).join('')}</ul></div>`;
    h += `<div>${hitos.length ? `<h2>Hitos</h2><div class="tablewrap"><table><thead><tr><th>Semana</th><th>Meta</th></tr></thead><tbody>${hitos.map(x => `<tr class="${x[0] === w || (x[0] === w + 1 && w % 2) ? 'cur' : ''}"><td class="num">${x[0]}</td><td>${esc(x[1])}</td></tr>`).join('')}</tbody></table></div>` : ''}</div></div>`;
    const f = L(c).fallos, fk = Object.keys(f).sort((a, b) => (f[a].d < f[b].d ? 1 : -1)).slice(0, 8), err = L(c).err.slice(0, 8);
    if (fk.length || err.length) {
      h += `<div class="row-between"><h2>Errores recientes</h2>${errCount(c) ? `<button class="btn small" data-act="ses-new" data-kind="errores">Practicarlos</button>` : ''}</div><ul class="corr">`;
      const when = d => (d ? K.dayLabel(K.dayNum(d), today()) : '');
      h += fk.map(k => `<li><span class="muted small">${esc(f[k].q)}</span><span class="ok t" lang="${c}">${esc(f[k].a)}</span><span class="muted small">Ejercicio · ${esc(when(f[k].d))}${f[k].n > 1 ? ` · ${f[k].n} veces` : ''}</span></li>`).join('');
      h += err.map(e => `<li>${e.dijiste ? `<span class="bad t">${esc(e.dijiste)}</span>` : ''}<span class="ok t">${esc(e.mejor)}</span><span class="muted small">${esc(e.exp || '')}${e.src ? ' · ' + esc(e.src) : ''}${e.d ? ' · ' + esc(when(e.d)) : ''}${e.dom ? ' · superado' : ''}</span></li>`).join('') + '</ul>';
    }
    const others = run.filter(co => co.id !== c);
    if (others.length) h += `<h2>Tus otros idiomas</h2><div class="others">${others.map(co => { const k = cardCounts(co.id); return `<button class="other" data-course="${co.id}" data-course-set="${co.id}"><i class="dot"></i>${esc(co.nombre)}<span class="num">${k.learned} palabras · ${minutes(co.id)} min hoy</span><span class="chev" aria-hidden="true">›</span></button>`; }).join('')}</div>`;
    return h;
  }

  // ---------------- Ajustes ----------------
  function planRow(c) {
    const run = enCurso(c);
    return `<div class="plan-row" data-course="${c}"><div class="row-between"><strong class="plan-name"><i class="dot${run ? '' : ' hollow'}"></i>${esc(courseOf(c).nombre)} <span class="muted small">· ${run ? 'en curso' : 'en pausa'}</span></strong>${run ? `<button class="btn small ghost" data-act="course-pause" data-c="${c}">Pausar</button>` : startBtn(c)}</div>
      <div class="field-row three"><label class="field"><span>Inicio</span><input type="date" data-set="inicio.${c}" value="${esc(inicio(c))}"></label><label class="field"><span>Minutos al día</span><input type="number" min="10" max="600" step="5" inputmode="numeric" data-set="minutos.${c}" value="${dayGoal(c)}"></label><label class="field"><span>Tarjetas nuevas</span><input type="number" min="0" max="80" inputmode="numeric" data-set="nuevas.${c}" value="${nuevasDia(c)}"></label></div></div>`;
  }
  function vAjustes() {
    const p = P(), a = p.ajustes;
    const vopts = (code, sel) => ['<option value="">Automática</option>'].concat(VO.TTS.list(code).map(v => `<option value="${esc(v.name)}" ${v.name === sel ? 'selected' : ''}>${esc(v.name)} (${esc(v.lang)})</option>`)).join('');
    let h = `<h1 class="page">Ajustes</h1><div class="settings">`;
    h += `<section class="card form"><h2>Tú</h2>
      <label class="field"><span>Tu nombre</span><input type="text" id="f-nombre" data-set="nombre" value="${esc(p.nombre)}" autocomplete="given-name"></label>
      <label class="field"><span>Nombre de tu chica</span><input type="text" id="f-ella" data-set="pareja.nombre" value="${esc(p.pareja.nombre)}"></label>
      <label class="field"><span>Su familia: quién es quién</span><textarea id="f-familia" rows="4" data-set="pareja.familia" placeholder="Ewa: su madre&#10;Marek: su padre&#10;Zosia: su abuela">${esc(p.pareja.familia)}</textarea></label>
      <p class="hint">Se usa en tus conversaciones con Claude para practicar con los nombres reales.</p></section>`;
    h += `<section class="card form"><h2>Idiomas y plan</h2><p class="muted small">Los idiomas en pausa no salen en Hoy. «Minutos al día» reparte el plan diario en esa proporción.</p>${ACTIVE.map(co => planRow(co.id)).join('')}</section>`;
    h += `<section class="card form"><h2>Voz</h2>
      <label class="field"><span>Velocidad: <strong id="ratev">${a.rate}</strong></span><input type="range" min="0.6" max="1.2" step="0.05" value="${a.rate}" data-set="rate"></label>
      <label class="field"><span>Voz polaca</span><select data-set="voces.pl">${vopts('pl', a.voces.pl)}</select></label>
      ${ACTIVE.some(co => co.id === 'it') ? `<label class="field"><span>Voz italiana</span><select data-set="voces.it">${vopts('it', a.voces.it)}</select></label>` : ''}
      <label class="field"><span>Voz española (lee el latín, el griego y las preguntas)</span><select data-set="voces.es">${vopts('es', a.voces.es)}</select></label>
      <label class="check"><input type="checkbox" data-set="autoAudio" ${a.autoAudio ? 'checked' : ''}> Leer en voz alta tarjetas y respuestas automáticamente</label>
      <label class="check"><input type="checkbox" data-set="escucharme" ${a.escucharme ? 'checked' : ''}> Escucharme con el micrófono en el audio para hablar</label>
      <div class="row-btns">${sayBtn('pl', 'Dzień dobry! Miło mi Panią poznać.', 'Probar voz polaca')}<span class="muted">Polaco</span>${sayBtn('la', 'Cōgitō, ergō sum. Vīta brevis, ars longa.', 'Probar latín')}<span class="muted">Latín</span>${ACTIVE.some(co => co.id === 'it') ? sayBtn('it', 'Buongiorno, piacere di conoscerLa.', 'Probar italiano') + '<span class="muted">Italiano</span>' : ''}</div>
      ${VO.TTS.ok && !VO.TTS.list('pl').length ? '<p class="hint">No veo ninguna voz polaca. En los ajustes del móvil busca «texto a voz», elige como motor «Servicios de voz de Google» e instala en él la voz polaca. Después cierra y vuelve a abrir Glossa.</p>' : ''}
      ${VO.STT.ok ? '' : '<p class="hint">Este navegador no reconoce la voz: abre Glossa con Chrome para usar el micrófono.</p>'}</section>`;
    h += `<section class="card form" id="vozpro" data-own${window.VozPro ? '' : ' hidden'}></section>`;
    h += `<section class="card form"><h2>Claude</h2><p class="muted small">La conversación, las correcciones, las lecturas nuevas, tus textos y los niveles 2 y 3 usan Claude con tu propia clave de la API. Se guarda solo en este móvil y nunca sale en las copias de seguridad.</p>
      <label class="field"><span>Clave de la API</span><input type="password" id="f-key" data-set="ia.key" value="${esc(a.ia.key)}" autocomplete="off" spellcheck="false" placeholder="sk-ant-…"></label>
      <div class="field-row"><label class="field"><span>Modelo principal</span><input type="text" data-set="ia.modelo" value="${esc(a.ia.modelo)}" spellcheck="false"></label><label class="field"><span>Modelo rápido</span><input type="text" data-set="ia.rapido" value="${esc(a.ia.rapido)}" spellcheck="false"></label></div>
      <div class="row-btns"><button class="btn" data-act="ia-test" ${aiReady() ? '' : 'disabled'}>Probar la clave</button><span class="small ${/^Funciona/.test(ui.iaTest) ? 'okmsg' : 'muted'}">${esc(ui.iaTest)}</span></div>
      <p class="hint">La clave se crea en la consola de Claude (platform.claude.com), en «API Keys»; el saldo se carga en «Billing».</p></section>`;
    h += `<section class="card form"><h2>Tus datos</h2><p class="muted small">Tu progreso vive en este móvil. Haz una copia de vez en cuando${p.ui.ultimaCopia ? ` (la última, el ${esc(p.ui.ultimaCopia)})` : ''}.</p>
      <div class="row-btns"><button class="btn" data-act="backup-save">Guardar copia</button><label class="btn ghost filebtn">Restaurar copia<input type="file" accept="application/json,.json,text/plain" data-act="backup-load" hidden></label></div>
      ${G(ui.course).l.length ? `<button class="btn ghost small" data-act="gen-clear">Borrar tus lecturas de ${esc(lower(ui.course))} (${G(ui.course).l.length})</button>` : ''}
      <p class="hint">${esc(ui.persist)}</p></section>`;
    h += `<section class="card form"><h2>App</h2><p class="muted small">Glossa ${esc(VERSION)}${isStandalone() ? ' · instalada' : ''}.</p>
      ${!isStandalone() && ui.installEvt ? '<button class="btn primary" data-act="install">Instalar Glossa</button>' : ''}
      ${!isStandalone() && !ui.installEvt ? `<p class="hint">${isIOS ? 'Para instalarla: Safari › Compartir › Añadir a pantalla de inicio.' : 'Para instalarla: Chrome › menú ⋮ › Instalar aplicación.'}</p>` : ''}
      <button class="btn ghost small" data-act="check-update">Buscar actualizaciones</button>
      <details class="tech" data-keep><summary>Información técnica</summary><p class="muted small">Pantalla ${(window.screen && screen.width) || '?'}×${(window.screen && screen.height) || '?'} · página ${window.innerWidth} px · escala ${window.visualViewport ? visualViewport.scale.toFixed(2) : '?'} · ampliación ${WIDE_Q.zoom}</p></details></section>`;
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
    else if (path.indexOf('nuevas.') === 0) a.nuevas[path.slice(7)] = clamp(Math.round(Number(v) || 0), 0, 80);
    else if (path.indexOf('minutos.') === 0) { const cc = path.slice(8), m = Math.round(Number(v) || 0); if (m > 0) a.minutos[cc] = clamp(m, 10, 600); else delete a.minutos[cc]; rerender = true; }
    else if (path === 'rate') { a.rate = clamp(Number(v) || 0.9, 0.6, 1.2); const s = $('#ratev'); if (s) s.textContent = a.rate; }
    else if (path === 'pausa') { a.pausa = clamp(Math.round(Number(v) || 4), 2, 8); const s = $('#pausav'); if (s) s.textContent = a.pausa + ' s'; }
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
      ses = null; Object.keys(PLY).forEach(k => { delete PLY[k]; }); ui.ex = {};
      ui.course = CONTENT[P().cursoActivo] ? P().cursoActivo : ACTIVE[0].id;
      toast('Copia restaurada.'); render();
    };
    fr.readAsText(file);
  }

  // ---------------- Eventos ----------------
  document.addEventListener('pointerdown', touch, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') { commitAct(); drillStop(); ST.flush(); applyUpdate(window.__swReg); }
    else { UPD.since = Date.now(); UPD.touched = false; if (window.__swReg) window.__swReg.update().catch(() => {}); }
  });
  window.addEventListener('pagehide', () => { commitAct(); ST.flush(); });
  window.addEventListener('popstate', () => { if (location.hash !== lastHash) route(true); });
  window.addEventListener('hashchange', () => { if (location.hash !== lastHash) route(true); });
  WIDE_Q.addEventListener && WIDE_Q.addEventListener('change', () => render());
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); ui.installEvt = e; if (ui.view === 'hoy' || ui.view === 'ajustes') render(); });
  window.addEventListener('appinstalled', () => { ui.installEvt = null; toast('Glossa instalada.'); render(); });
  // Con el teclado de pantalla abierto: sin barras fijas encima del campo, y el campo a la vista
  const TYPING = 'input[type="text"], input[type="password"], input[type="number"], input[type="date"], textarea';
  const TOUCH = (navigator.maxTouchPoints || 0) > 0 || 'ontouchstart' in window;
  document.addEventListener('focusin', e => {
    const el = e.target;
    if (!TOUCH || !el.matches || !el.matches(TYPING)) return;
    document.body.classList.add('typing');
    setTimeout(() => {
      if (document.activeElement !== el) return;
      const r = el.getBoundingClientRect(), vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      if (r.bottom > vh - 8 || r.top < 0) el.scrollIntoView({ block: 'center' });
    }, 350);
  });
  document.addEventListener('focusout', e => { if (e.target.matches && e.target.matches(TYPING)) setTimeout(() => { const a = document.activeElement; if (!(a && a.matches && a.matches(TYPING))) document.body.classList.remove('typing'); }, 60); });

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
      ta.value = '';
      st.turns.push({ role: 'user', content: txt.slice(0, 1500) }); st.review = null;
      chatCall(c);
    } else if (act === 'texto-send') {
      const txt = ($('#txt') || {}).value || '';
      if (K.wordCount(txt) < 3) { ui.texto.err = 'Pega al menos una frase.'; render(); return; }
      prepararTexto(c, { texto: txt.slice(0, 6000), antiguo: !!($('#txt-antiguo') || {}).checked });
    } else if (act === 'par-done') {
      const ta = $('#par-notas'), notas = ((ta || {}).value || '').split('\n').map(s => s.trim()).filter(Boolean);
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
      if (ta) ta.value = '';
      toast('Sesión apuntada' + (cards ? ` · ${cards} tarjetas nuevas` : '') + '.');
      go('hoy');
    }
  });
  document.addEventListener('keydown', e => {
    touch();
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    const tg = e.target, typing = tg && (tg.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName));
    if (typing) return;
    const onBtn = tg && tg.closest && tg.closest('button');
    if (ui.view === 'repasar' && ses && ses.pos < ses.queue.length) {
      if ((e.key === ' ' || (e.key === 'Enter' && !onBtn)) && !ses.flip) { e.preventDefault(); ses.flip = true; render(); focusMain(); return; }
      if (ses.flip && /^[1-4]$/.test(e.key)) { e.preventDefault(); gradeCard(Number(e.key) - 1); return; }
    }
    const s = ui.ply;
    if (s && !s.done) {
      if (/^[1-9]$/.test(e.key) && !s.st.res) { const b = $(`.player .opt[data-n="${e.key}"]`); if (b) { e.preventDefault(); b.click(); } return; }
      if (e.key === 'Enter' && !onBtn) { const b = $('#main-act'); if (b && b.getAttribute('aria-disabled') !== 'true') { e.preventDefault(); b.click(); } }
    }
  });
  document.addEventListener('click', e => {
    if (ui.word && ui.view === 'lectura' && !WIDE_Q.matches && !e.target.closest('.word-sheet') && !e.target.closest('.w')) {
      ui.word = null; const sh = $('.word-sheet'); if (sh) sh.remove(); document.body.classList.remove('sheet-open');
      const sel = $('.w.sel'); if (sel) sel.classList.remove('sel');
    }
    const el = e.target.closest('button, [data-act], [data-go], [data-course-set]');
    if (!el || el.disabled || el.classList.contains('disabled') || el.getAttribute('aria-disabled') === 'true') return;
    touch();
    if (el.dataset.say != null) { say(el.dataset.c || ui.course, el.dataset.say, { antiguo: !!el.dataset.antiguo }); return; }
    if (el.dataset.courseSet) { switchCourse(el.dataset.courseSet); return; }
    if (el.dataset.go) { if (el.dataset.courseGo) setCourse(el.dataset.courseGo); go(el.dataset.go, el.dataset.param || null, { replace: !!el.dataset.replace }); return; }
    const act = el.dataset.act;
    if (act) onAct(act, el);
  });
  // Cambiar de idioma desde una lección, una lectura o una sesión lleva a la portada de esa sección
  const HUB_OF = { leccion: 'aprender', lectura: 'aprender', repasar: 'practicar', ejercicios: 'practicar', errores: 'practicar', pareja: 'hablar' };
  function switchCourse(c) {
    const was = ui.course;
    setCourse(c); ui.sheet = null;
    if (was !== ui.course && HUB_OF[ui.view]) go(HUB_OF[ui.view], null, { replace: true }); else render();
  }
  function onAct(act, el) {
    const c = ui.course;
    switch (act) {
      case 'courses': ui.sheet = 'courses'; render(); break;
      case 'sheet-close': ui.sheet = null; render(); break;
      case 'install': if (ui.installEvt) { ui.installEvt.prompt(); ui.installEvt.userChoice.finally(() => { ui.installEvt = null; render(); }); } break;
      case 'hide-install': P().ui.ocultarInstalar = true; ST.mark('perfil'); render(); break;
      case 'update': if (ui.update && ui.update.waiting) ui.update.waiting.postMessage('skipWaiting'); else location.reload(); break;
      case 'check-update': if (window.__swReg) { toast('Comprobando… Si hay una versión nueva, verás un aviso arriba.'); window.__swReg.update().catch(() => toast('No he podido comprobarlo: ¿estás sin conexión?')); } else toast('Las actualizaciones funcionan con la app instalada.'); break;
      case 'back': back(el.dataset.to || 'hoy', el.dataset.param); break;
      case 'close': closeFlow(el.dataset.to || 'hoy'); break;
      // idiomas
      case 'course-start': case 'course-resume': {
        const cc = el.dataset.c; setEstado(cc, 'curso', act === 'course-start');
        toast(act === 'course-start' ? `${courseOf(cc).nombre}: empiezas hoy.` : `${courseOf(cc).nombre}: de nuevo en curso.`);
        switchCourse(cc); break;
      }
      case 'course-pause': setEstado(el.dataset.c, 'pausa'); toast(`${courseOf(el.dataset.c).nombre} en pausa.`); render(); break;
      // ruta
      case 'nivel': ui.nivel[c] = Number(el.dataset.n); render(); break;
      case 'abrir-nivel': { const n = Number(el.dataset.n); P().cursos[c] = Object.assign({}, P().cursos[c], { abierto: Math.max(n, (P().cursos[c] || {}).abierto || 0) }); ST.mark('perfil'); ui.nivel[c] = n; render(); break; }
      case 'unit': { const k = c + ':' + el.dataset.u, cu = currentUnit(c), cur = ui.open[k] != null ? ui.open[k] : !!(cu && cu.uk === el.dataset.u); ui.open[k] = !cur; render(); break; }
      case 'gen-plan': genPlan(c, el.dataset.u); break;
      case 'gen-item': GEN.err[el.dataset.id] = ''; genItem(c, el.dataset.id); break;
      // lección
      case 'paso': {
        const [id] = splitParam(ui.param), l = lessonById(c, id), p = el.dataset.p;
        if (!l) break;
        vocStop(); progSet(c, l.id, { p });
        setHashQuiet('#leccion/' + encodeURIComponent(l.id) + '/' + p); ui.param = l.id + '/' + p;
        render({ top: true });
        if (p === 'practica') { autoPlay(ui.ply); }
        break;
      }
      case 'voc-all': { const l = lessonById(c, splitParam(ui.param)[0]); if (l) vocPlay(c, l); break; }
      case 'voc-stop': vocStop(); render(); break;
      case 'voc-say': { const l = lessonById(c, splitParam(ui.param)[0]), v = l && l.vocab[Number(el.dataset.i)]; if (!v) break; if (VOC.on) { vocStop(); render(); } say(c, v[0]); break; }
      case 'ply-reset': { const [id] = splitParam(ui.param); delete PLY['L:' + id]; progSet(c, id, { p: 'practica', pl: null }); setHashQuiet('#leccion/' + encodeURIComponent(id) + '/practica'); ui.param = id + '/practica'; render({ top: true }); autoPlay(ui.ply); break; }
      case 'lesson-finish': { const [id] = splitParam(ui.param), l = lessonById(c, id); if (!l) break; plyFinish({ mode: 'leccion', c, lid: id, key: 'L:' + id, r: {} }); render({ top: true }); break; }
      case 'lesson-done': {
        const l = lessonById(c, el.dataset.id); if (!l) break;
        L(c).lec[l.id] = todayStr(); ST.mark(c); commitAct(); ses = null;
        toast(`Lección hecha: ${l.vocab.length} tarjetas nuevas en tu repaso.`); render(); break;
      }
      // ejercicios
      case 'ex-pick': { const e = exRef(el.dataset.k); if (!e || e.st.res || e.it.ops == null) break; const j = Number(el.dataset.j); e.st.pick = j; resolve(e, j === e.it.ok); break; }
      case 'ex-build': { const e = exRef(el.dataset.k); if (e && !e.st.res) { e.st.built.push(Number(el.dataset.j)); render(); } break; }
      case 'ex-unbuild': { const e = exRef(el.dataset.k); if (e && !e.st.res) { e.st.built.splice(Number(el.dataset.n), 1); render(); } break; }
      case 'ex-clear': { const e = exRef(el.dataset.k); if (e && !e.st.res) { e.st.built = []; render(); } break; }
      case 'ex-check': {
        const e = exRef(el.dataset.k); if (!e || e.st.res || !e.st.built.length) break;
        const toks = e.it.x.split(' ');
        resolve(e, K.normSentence(e.st.built.map(j => toks[j]).join(' ')) === K.normSentence(e.it.x)); break;
      }
      case 'ex-say': { const e = exRef(el.dataset.k); if (e && !e.st.res && !e.st.listening) listenFor(e); break; }
      case 'ex-reveal': {
        const e = exRef(el.dataset.k); if (!e) break;
        if (e.mode === 'P') { if (e.st.res) break; e.st.res = 'skip'; plySkipMark(e.s); } else e.st.reveal = true;
        render(); if (P().ajustes.autoAudio) say(e.c, e.it.x); if (e.mode === 'P') focusMain(); break;
      }
      case 'ex-skip': { const s = ui.ply; if (s && !s.done) { plySkipMark(s); plyNext(s); } break; }
      case 'ex-next': { const s = ui.ply; if (s && !s.done && s.st.res) plyNext(s); break; }
      case 'ex-reset': { const e = ui.ex[el.dataset.k]; if (e) { e.st = freshSt(); render(); } break; }
      case 'ses-new': {
        const kind = el.dataset.kind === 'errores' ? 'errores' : 'mezcla', s = sessionFor(kind, c, true);
        const view = kind === 'errores' ? 'errores' : 'ejercicios';
        if (ui.view === view) { render({ top: true }); autoPlay(s); }
        else go(view, null, { replace: ui.view === 'repasar' || ui.view === 'ejercicios' || ui.view === 'errores' });
        break;
      }
      // tarjetas
      case 'flip': if (ses) { ses.flip = true; render(); focusMain(); } break;
      case 'grade': gradeCard(Number(el.dataset.g)); break;
      case 'undo': undoGrade(); break;
      case 'rep-more': ses = buildSession(c); render({ top: true }); break;
      case 'card-say': if (ses && ses.pos < ses.queue.length) { const d = ses.defs.get(ses.queue[ses.pos]); if (d) say(c, d.t); } break;
      // lectura
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
      case 'gen-delete': { G(c).l = G(c).l.filter(r => r.id !== el.dataset.id); ST.mark(c + '-generadas'); go('aprender', null, { replace: true }); break; }
      case 'gen-reading': genReading(c); break;
      case 'gen-clear': G(c).l = []; ST.mark(c + '-generadas'); render(); break;
      // hablar
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
      // conversación
      case 'chat-scene': { const st = chatState(c); st.esc = el.dataset.s; st.turns = []; st.review = null; st.err = ''; render(); break; }
      case 'chat-start': chatCall(c); break;
      case 'chat-stop': { const st = chatState(c); if (st.ctl) st.ctl.abort(); break; }
      case 'chat-reset': { const st = chatState(c); st.turns = []; st.review = null; st.err = ''; render(); break; }
      case 'chat-review': hfStop(); chatReview(c); break;
      case 'chat-tr': translateMsg(c, Number(el.dataset.i)); break;
      case 'chat-mic': {
        const st = chatState(c);
        st.listening = true; render(); VO.TTS.stop();
        let said = '';
        VO.STT.listen(courseOf(c).oido, {
          maxMs: 10000,
          onresult: alts => { said = alts[0] || ''; },
          onerror: err => { st.err = sttError(err); },
          onend: () => { st.listening = false; if (ui.view !== 'chat') return; render(); const ta = $('#chatin'); if (ta && said) { ta.value = (ta.value ? ta.value + ' ' : '') + said; ta.focus(); } }
        });
        break;
      }
      case 'hf-start': hfStart(c); break;
      case 'hf-stop': { const st = chatState(c); hfStop(); if (st.ctl) st.ctl.abort(); render(); break; }
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
  }

  // ---------------- Arranque ----------------
  // Actualizaciones: si llega una versión nueva al abrir o volver a la app (antes de tocar nada),
  // o mientras está en segundo plano, se instala sola. Si ya la estás usando, aparece «Actualizar».
  const UPD = { since: Date.now(), touched: false };
  ['pointerdown', 'keydown'].forEach(t => window.addEventListener(t, () => { UPD.touched = true; }, true));
  const applyUpdate = reg => { if (reg && reg.waiting) reg.waiting.postMessage('skipWaiting'); };
  function registerSW() {
    if (!('serviceWorker' in navigator)) return;
    if (!(location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) return;
    navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).then(reg => {
      window.__swReg = reg;
      const ready = () => {
        if (!navigator.serviceWorker.controller || !reg.waiting) return;
        if (document.visibilityState === 'hidden' || (!UPD.touched && Date.now() - UPD.since < 30000)) applyUpdate(reg);
        else { ui.update = reg; renderStatus(); }
      };
      ready();
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        if (nw) nw.addEventListener('statechange', () => { if (nw.state === 'installed') ready(); });
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
    if (window.VozPro && typeof window.VozPro.setConfigSource === 'function') { try { window.VozPro.setConfigSource(() => P().ajustes.vozpro); } catch (e) { /* VozPro no disponible */ } }
    ui.course = CONTENT[P().cursoActivo] ? P().cursoActivo : ACTIVE[0].id;
    if (!$('#toast')) { const t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role', 'status'); t.hidden = true; document.body.appendChild(t); }
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    if (!location.hash) history.replaceState(null, '', '#hoy');
    route();
    registerSW();
    ST.persist().then(ok => { ui.persist = ok ? 'El navegador no borrará tus datos.' : ''; if (ui.view === 'ajustes') render(); });
  }
  boot();
})();
