// Pruebas de la lógica pura: node tools/test-core.js
const C = require('../js/core.js');
let fails = 0;
const eq = (got, exp, msg) => { if (got !== exp) { fails++; console.log('FALLA', msg, '→', JSON.stringify(got), 'esperado', JSON.stringify(exp)); } };
// latín -> voz española
const lat = { 'Cicerō': 'kíkero', 'Sēneca': 'séneka', 'philosophia': 'filosófia', 'sapientia': 'sapiéntia', 'vīta': 'huíta', 'amīcus': 'amíkus', 'discipulus': 'diskípulus', 'magister': 'maguíster', 'cōgitō': 'kóguito', 'quaerit': 'cuáirit', 'Caesar': 'káisar', 'Iūlius': 'yúlius', 'populusque': 'populúscue', 'servus': 'sérwus', 'syllogismus': 'siloguísmus', 'quomodocunque': 'cuomodokúncue' };
for (const [k, v] of Object.entries(lat)) eq(C.latinWordToSpanish(k), v, 'latín ' + k);
// impresos antiguos
eq(C.modernizeLatin('ſecundùm quod conſiderant in eo diuerſos reſpectus'), 'secundum quod considerant in eo diversos respectus', 'antiguo 1');
eq(C.modernizeLatin('vt à primo, & ſimpliciori'), 'ut a primo, et simpliciori', 'antiguo 2');
eq(C.modernizeLatin('habitudinē partis ſyllogiſticæ, nō ſolùm'), 'habitudinem partis syllogisticae, non solum', 'antiguo 3');
eq(C.modernizeLatin('ſiuè per modum prædicati'), 'sive per modum praedicati', 'antiguo 4');
eq(C.modernizeLatin('vltimum elementum, vel'), 'ultimum elementum, vel', 'antiguo 5');
// claves de glosa
eq(C.foldKey('ſecundùm'), C.foldKey('secundum'), 'fold 1');
eq(C.foldKey('diuerſos'), C.foldKey('diversos'), 'fold 2');
eq(C.normKey('Sēnecae'), 'senecae', 'norm');
// comparación de pronunciación
eq(C.similarity('Dziękuję bardzo.', 'dziękuję bardzo'), 1, 'sim exacta');
const s1 = C.similarity('dziekuje bardzo', 'Dziękuję bardzo.'); if (!(s1 > 0.8 && s1 < 1)) { fails++; console.log('FALLA sim sin tildes', s1); }
const s2 = C.similarity('jestem w domu', 'Mam czas.'); if (!(s2 < 0.5)) { fails++; console.log('FALLA sim distinta', s2); }
eq(C.bestMatch(['mam czasu', 'mam czas'], 'Mam czas.').text, 'mam czas', 'mejor alternativa');
// JSON dentro de texto
eq(JSON.stringify(C.extractJSON('Aquí va:\n```json\n{"a": 1}\n```')), '{"a":1}', 'json fence');
eq(JSON.stringify(C.extractJSON('Claro. {"a": [1, 2]} Fin.')), '{"a":[1,2]}', 'json suelto');
eq(C.extractJSON('nada'), undefined, 'json ausente');
// fechas y repaso
eq(C.weekOf('2026-11-02', '2026-10-31'), 1, 'semana antes');
eq(C.weekOf('2026-11-02', '2026-12-24'), 8, 'semana Nochebuena');
eq(C.weekRange('2026-11-02', 5), '30 nov-6 dic', 'rango');
let st = C.schedule(null, 2, 100); eq(st[0], 101, 'srs 1'); st = C.schedule(st, 2, 101); eq(st[0], 104, 'srs 2'); st = C.schedule(st, 0, 104); eq(st[0], 104, 'srs fallo');
eq(C.dayLabel(C.dayNum('2026-11-02'), C.dayNum('2026-10-31')), 'lunes 2 nov', 'día');
console.log(fails ? fails + ' FALLOS' : 'core: todo bien');
process.exit(fails ? 1 : 0);
