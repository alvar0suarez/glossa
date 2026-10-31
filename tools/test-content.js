// Comprueba los cursos: node tools/test-content.js
global.window = {};
require('../courses/index.js'); require('../courses/pl.js'); require('../courses/la.js');
const C = require('../js/core.js');
let problems = 0;
const bad = (...a) => { problems++; console.log(...a); };
for (const co of window.COURSES.filter(c => c.estado === 'activo')) {
  const data = window.CONTENT[co.id];
  if (!data) { bad('falta contenido de', co.id); continue; }
  if (data.semanasTitulos.length !== 8 || data.programa.length !== 8) bad(co.id, 'títulos o programa sin 8 semanas');
  const vseen = new Map(), ids = new Set(); let nv = 0, nr = 0;
  for (const s of data.semanas) {
    for (const l of s.lecciones) {
      if (ids.has(l.id)) bad('id repetido', l.id); ids.add(l.id);
      for (const v of l.vocab) { nv++; const k = C.normKey(v[0]); if (vseen.has(k)) bad(co.id, 'vocabulario repetido', v[0], l.id, vseen.get(k)); else vseen.set(k, l.id); if (!v[1]) bad('sin traducción', v[0]); }
      for (const e of l.ejercicios) {
        if (e.ops && (e.ok < 0 || e.ok >= e.ops.length)) bad('respuesta fuera de rango', l.id);
        if (e.t === 'oir' && e.ops[e.ok] !== e.x) bad('oir no coincide', l.id, e.x);
        if (e.t === 'decir' && !co.oido) bad('decir en un idioma sin reconocimiento', l.id);
        if (e.t === 'decir' && (!e.es || !e.x)) bad('decir incompleto', l.id);
        if (!['mc', 'oir', 'orden', 'decir'].includes(e.t)) bad('tipo desconocido', e.t, l.id);
      }
      for (const b of l.bloques) if (b.t === 'tabla') for (const f of b.filas) if (f.length !== b.cab.length) bad('fila con columnas distintas', l.id, f);
    }
    for (const r of s.lecturas || []) {
      nr++;
      if (ids.has(r.id)) bad('id repetido', r.id); ids.add(r.id);
      const keys = Object.keys(r.glosa);
      for (const w of C.words(r.texto)) {
        const low = w.toLowerCase();
        if (!(low in r.glosa) && !keys.some(k => C.normKey(k) === C.normKey(w)) && !keys.some(k => C.foldKey(k) === C.foldKey(w))) bad(co.id, r.id, 'palabra sin glosa:', w);
      }
      for (const q of r.preguntas) if (q.ok >= q.ops.length) bad('pregunta mal', r.id);
      if (!r.traduccion) bad('lectura sin traducción', r.id);
    }
    if (co.id === 'pl' && !(s.pareja && s.pareja.preguntas && s.pareja.frases)) bad('semana', s.n, 'sin sesión con ella');
  }
  console.log(co.id, '· semanas', data.semanas.length, '· tarjetas', nv, '· lecturas', nr);
}
console.log(problems ? problems + ' PROBLEMAS' : 'contenido: todo bien');
process.exit(problems ? 1 : 0);
