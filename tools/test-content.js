// Comprueba los cursos.
//   node tools/test-content.js                      todas las semanas de todos los cursos
//   node tools/test-content.js courses/pl-3.js      la semana 1 del curso más ese archivo
// Cada semana nueva vive en courses/<curso>-<n>.js y hace window.CONTENT.<curso>.semanas.push({...}).
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
global.window = {};
const load = f => require(path.join(ROOT, f));
load('courses/index.js');
const C = require('../js/core.js');
let problems = 0;
const bad = (...a) => { problems++; console.log('✗', ...a); };
const ACTIVE = window.COURSES.filter(c => c.estado === 'activo');
for (const co of ACTIVE) load(`courses/${co.id}.js`);

const args = process.argv.slice(2).map(f => f.replace(/^\.\//, ''));
const weekFiles = args.length ? args : fs.readdirSync(path.join(ROOT, 'courses')).filter(f => /^[a-z]+-\d+\.js$/.test(f)).sort((a, b) => {
  const [, ca, na] = a.match(/^([a-z]+)-(\d+)/), [, cb, nb] = b.match(/^([a-z]+)-(\d+)/);
  return ca === cb ? na - nb : ca < cb ? -1 : 1;
}).map(f => 'courses/' + f);
const fileOfWeek = {};
for (const f of weekFiles) {
  const m = path.basename(f).match(/^([a-z]+)-(\d+)\.js$/);
  if (!m) { bad('nombre de archivo raro (debe ser courses/<curso>-<n>.js):', f); continue; }
  const [, cid, nStr] = m, n = +nStr;
  const data = window.CONTENT[cid];
  if (!data) { bad(f, 'no hay curso', cid); continue; }
  const before = data.semanas.length;
  try { load(f); } catch (e) { bad(f, 'no se puede cargar:', e.message); continue; }
  const added = data.semanas.slice(before);
  if (added.length !== 1) bad(f, 'debe añadir exactamente una semana y añade', added.length);
  for (const s of added) { if (s.n !== n) bad(f, `la semana dice n: ${s.n} y el archivo es la ${n}`); fileOfWeek[cid + s.n] = f; }
}

const str = v => typeof v === 'string' && v.trim().length > 0;
const stars = s => typeof s === 'string' && (s.replace(/\*\*/g, '').split('*').length - 1) % 2 === 1;
for (const co of ACTIVE) {
  const data = window.CONTENT[co.id];
  if (!data) { bad('falta contenido de', co.id); continue; }
  data.semanas.sort((a, b) => a.n - b.n);
  if (data.semanasTitulos.length !== 8 || data.programa.length !== 8) bad(co.id, 'títulos o programa sin 8 semanas');
  const vseen = new Map(), ids = new Set(), nseen = new Set(); let nv = 0, nr = 0, nl = 0;
  for (const s of data.semanas) {
    const where = fileOfWeek[co.id + s.n] || `courses/${co.id}.js`;
    if (nseen.has(s.n)) bad(co.id, 'semana repetida', s.n); nseen.add(s.n);
    if (!Array.isArray(s.lecciones) || !s.lecciones.length) { bad(where, 'sin lecciones'); continue; }
    for (const l of s.lecciones) {
      nl++;
      const at = `${where} ${l.id}`;
      if (ids.has(l.id)) bad('id repetido', l.id); ids.add(l.id);
      if (!new RegExp(`^${co.id}${s.n}-\\d+$`).test(l.id)) bad(at, `id de lección debe ser ${co.id}${s.n}-<número>`);
      if (!str(l.titulo) || !str(l.intro) || !(l.min > 0)) bad(at, 'falta titulo, intro o min');
      if (stars(l.intro)) bad(at, 'asteriscos desparejados en intro');
      if (!Array.isArray(l.vocab) || !Array.isArray(l.bloques) || !Array.isArray(l.ejercicios)) { bad(at, 'vocab, bloques o ejercicios no son listas'); continue; }
      for (const v of l.vocab) {
        nv++;
        if (!Array.isArray(v) || !str(v[0]) || !str(v[1])) { bad(at, 'tarjeta mal formada', JSON.stringify(v)); continue; }
        const k = C.normKey(v[0]);
        if (vseen.has(k)) bad(at, 'vocabulario repetido:', v[0], '(ya está en', vseen.get(k) + ')'); else vseen.set(k, l.id);
      }
      for (const b of l.bloques) {
        if (b.t === 'tabla') {
          if (!Array.isArray(b.cab) || !Array.isArray(b.filas)) { bad(at, 'tabla sin cab o filas'); continue; }
          for (const f of b.filas) if (f.length !== b.cab.length) bad(at, 'fila con columnas distintas', JSON.stringify(f));
          for (const j of b.audio || []) if (!(j >= 0 && j < b.cab.length)) bad(at, 'columna de audio fuera de la tabla', j);
        } else if (b.t === 'p' || b.t === 'nota') {
          if (!str(b.x)) bad(at, 'bloque', b.t, 'sin texto x'); else if (stars(b.x)) bad(at, 'asteriscos desparejados en', b.x.slice(0, 50));
        } else if (b.t === 'ej') {
          if (!Array.isArray(b.items) || b.items.some(it => !Array.isArray(it) || !str(it[0]) || !str(it[1]))) bad(at, 'ejemplos mal formados');
        } else bad(at, 'tipo de bloque desconocido', b.t);
      }
      for (const e of l.ejercicios) {
        if (!['mc', 'oir', 'orden', 'decir'].includes(e.t)) { bad(at, 'tipo de ejercicio desconocido', e.t); continue; }
        if (e.t === 'mc' && (!str(e.q) || stars(e.q))) bad(at, 'mc sin pregunta o con asteriscos desparejados');
        if ((e.t === 'mc' || e.t === 'oir') && (!Array.isArray(e.ops) || e.ops.length < 2 || !(e.ok >= 0 && e.ok < e.ops.length))) bad(at, 'opciones o respuesta mal', JSON.stringify(e).slice(0, 80));
        if (e.ops && new Set(e.ops).size !== e.ops.length) bad(at, 'opciones repetidas', JSON.stringify(e.ops));
        if (e.t === 'oir' && e.ops && e.ops[e.ok] !== e.x) bad(at, 'oir: ops[ok] debe ser igual a x', e.x);
        if (e.t === 'orden' && (!str(e.es) || !str(e.x) || e.x.split(' ').length < 2)) bad(at, 'orden necesita es y una x de 2 palabras o más', e.x);
        if (e.t === 'decir' && !co.oido) bad(at, 'decir en un idioma sin reconocimiento de voz');
        if (e.t === 'decir' && (!str(e.es) || !str(e.x))) bad(at, 'decir incompleto');
      }
    }
    for (const r of s.lecturas || []) {
      nr++;
      const at = `${where} ${r.id}`;
      if (ids.has(r.id)) bad('id repetido', r.id); ids.add(r.id);
      if (!new RegExp(`^${co.id}${s.n}-r\\d+$`).test(r.id)) bad(at, `id de lectura debe ser ${co.id}${s.n}-r<número>`);
      if (!str(r.titulo) || !str(r.texto) || !str(r.nivel)) { bad(at, 'falta titulo, texto o nivel'); continue; }
      if (!str(r.traduccion)) bad(at, 'lectura sin traducción');
      const glosa = r.glosa || {}, keys = Object.keys(glosa);
      for (const k of keys) if (!str(glosa[k])) bad(at, 'glosa vacía para', k);
      const missing = new Set();
      for (const w of C.words(r.texto)) {
        const low = w.toLowerCase();
        if (!(low in glosa) && !keys.some(k => C.normKey(k) === C.normKey(w)) && !keys.some(k => C.foldKey(k) === C.foldKey(w))) missing.add(w);
      }
      if (missing.size) bad(at, 'palabras sin glosa:', Array.from(missing).join(', '));
      if (!Array.isArray(r.preguntas) || !r.preguntas.length) bad(at, 'sin preguntas');
      else for (const q of r.preguntas) if (!str(q.q) || !Array.isArray(q.ops) || !(q.ok >= 0 && q.ok < q.ops.length)) bad(at, 'pregunta mal', JSON.stringify(q).slice(0, 80));
    }
    if (co.id === 'pl') {
      const p = s.pareja;
      if (!(p && str(p.tema) && Array.isArray(p.preguntas) && p.preguntas.length && Array.isArray(p.frases) && p.frases.length)) bad(where, 'semana', s.n, 'sin sesión con ella (pareja)');
      else {
        if (p.preguntas.some(q => !Array.isArray(q) || !str(q[0]) || !str(q[1]))) bad(where, 'pareja.preguntas debe ser [[pl, es], …]');
        if (p.reto && (!Array.isArray(p.reto) || !str(p.reto[0]) || !str(p.reto[1]))) bad(where, 'pareja.reto debe ser [pl, es]');
      }
    }
  }
  console.log(`${co.id} · semanas ${data.semanas.map(s => s.n).join(',')} · lecciones ${nl} · tarjetas ${nv} · lecturas ${nr}`);
}
console.log(problems ? problems + ' PROBLEMAS' : 'contenido: todo bien');
process.exit(problems ? 1 : 0);
