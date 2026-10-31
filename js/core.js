// Glossa · lógica pura: fechas, repaso espaciado, latín y griego para la voz, texto y comparación.
// Sin dependencias del navegador: también la usan las pruebas con Node (tools/).
(function (root) {
  'use strict';

  // ---------- Fechas (días como enteros, en hora local) ----------
  const DAY_MS = 86400000;
  function localDateStr(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function dayNum(str) {
    const p = String(str).split('-').map(Number);
    return Math.round(Date.UTC(p[0], p[1] - 1, p[2]) / DAY_MS);
  }
  function dayStr(n) { return new Date(n * DAY_MS).toISOString().slice(0, 10); }
  function todayNum() { return dayNum(localDateStr()); }
  function weekOf(startStr, todayStr) {
    const diff = dayNum(todayStr) - dayNum(startStr);
    if (diff < 0) return 1;
    return Math.min(8, Math.floor(diff / 7) + 1);
  }
  const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  function weekRange(startStr, w) {
    const a = dayNum(startStr) + (w - 1) * 7, b = a + 6;
    const fa = dayStr(a), fb = dayStr(b);
    const da = Number(fa.slice(8)), db = Number(fb.slice(8));
    const ma = MESES[Number(fa.slice(5, 7)) - 1], mb = MESES[Number(fb.slice(5, 7)) - 1];
    return ma === mb ? da + '-' + db + ' ' + ma : da + ' ' + ma + '-' + db + ' ' + mb;
  }
  function dayLabel(n, today) {
    const diff = n - today;
    if (diff === 0) return 'hoy';
    if (diff === 1) return 'mañana';
    if (diff === -1) return 'ayer';
    const s = dayStr(n);
    return DIAS[new Date(n * DAY_MS).getUTCDay()] + ' ' + Number(s.slice(8)) + ' ' + MESES[Number(s.slice(5, 7)) - 1];
  }

  // ---------- Repaso espaciado (variante de SM-2) ----------
  // Estado de una tarjeta: [vence (día), intervalo (días), facilidad x100, repeticiones, fallos, último día]
  // Notas: 0 = otra vez, 1 = difícil, 2 = bien, 3 = fácil
  function schedule(st, grade, today) {
    let ivl = st ? st[1] : 0, ef = st ? st[2] : 250, reps = st ? st[3] : 0, lapses = st ? st[4] : 0, due;
    if (grade === 0) {
      reps = 0; lapses += 1; ivl = 0; ef = Math.max(130, ef - 20); due = today;
    } else {
      if (grade === 1) { ivl = reps === 0 ? 1 : Math.max(1, Math.round(ivl * 1.2)); ef = Math.max(130, ef - 15); }
      else if (grade === 2) { ivl = reps === 0 ? 1 : reps === 1 ? 3 : Math.round(ivl * ef / 100); }
      else { ivl = reps === 0 ? 4 : Math.max(4, Math.round(ivl * ef / 100 * 1.3)); ef += 15; }
      ivl = Math.max(1, Math.min(ivl, 365));
      reps += 1; due = today + ivl;
    }
    return [due, ivl, ef, reps, lapses, today];
  }
  function intervalLabel(days) {
    if (days <= 0) return 'ahora';
    if (days < 14) return days + ' d';
    if (days < 60) return Math.round(days / 7) + ' sem';
    return Math.round(days / 30) + ' mes';
  }

  // ---------- Latín clásico -> grafía española para la voz del móvil ----------
  const VOW = 'aeiouyāēīōūȳ';
  const LONG = 'āēīōūȳ';
  const PLAIN = { 'ā': 'a', 'ē': 'e', 'ī': 'i', 'ō': 'o', 'ū': 'u', 'ȳ': 'i', 'y': 'i' };
  const ACUTE = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' };
  const STOPS = 'pbtdcgk';
  const QUE_EXC = ['atque', 'neque', 'quoque', 'itaque', 'usque', 'quisque', 'quique', 'quaeque', 'quodque', 'utique', 'undique', 'ubique', 'denique', 'quandoque', 'plerumque', 'utrumque', 'cuique', 'unusquisque', 'quicumque', 'quaecumque', 'quodcumque'];
  const EU_WORDS = ['heu', 'eheu', 'seu', 'ceu', 'neu', 'neuter', 'neutra', 'neutrum'];
  const isV = ch => VOW.indexOf(ch) >= 0;

  function tokenizeLatin(word) {
    const w = word.replace(/j/g, 'i');
    const out = [];
    const eu = EU_WORDS.indexOf(word.replace(/[āēīōū]/g, m => PLAIN[m])) >= 0;
    for (let i = 0; i < w.length; i++) {
      const c = w[i], n = w[i + 1], p = w[i - 1];
      if (isV(c)) {
        if (c === 'u' && p === 'q') continue;
        if (c === 'i' && n && isV(n) && (i === 0 || (p && isV(p)))) { out.push({ v: false, s: 'y', w: 1 }); continue; }
        const pair = c + (n || '');
        if (pair === 'ae' || pair === 'oe' || pair === 'au' || (eu && pair === 'eu')) {
          out.push({ v: true, s: pair, long: true, diph: true }); i++; continue;
        }
        out.push({ v: true, s: c, long: LONG.indexOf(c) >= 0, diph: false });
        continue;
      }
      if (c === 'q' && n === 'u') { out.push({ v: false, s: 'qu', w: 1 }); i++; continue; }
      if (c === 'g' && n === 'u' && p === 'n' && w[i + 2] && isV(w[i + 2])) { out.push({ v: false, s: 'gu', w: 1 }); i++; continue; }
      if ((c === 'c' || c === 'p' || c === 't' || c === 'r') && n === 'h') { out.push({ v: false, s: c + 'h', w: 1 }); i++; continue; }
      if (c === 'h') { out.push({ v: false, s: 'h', w: 0 }); continue; }
      if (c === 'x' || c === 'z') { out.push({ v: false, s: c, w: 2 }); continue; }
      out.push({ v: false, s: c, w: 1 });
    }
    return out;
  }
  function stressIndex(tokens, encliticBase) {
    const nuc = [];
    tokens.forEach((t, i) => { if (t.v) nuc.push(i); });
    const n = nuc.length;
    if (encliticBase !== undefined && encliticBase > 0) return encliticBase - 1;
    if (n <= 1) return -1;
    if (n === 2) return 0;
    const pen = nuc[n - 2], next = nuc[n - 1];
    const T = tokens[pen];
    let heavy = T.long || T.diph;
    if (!heavy) {
      const cons = tokens.slice(pen + 1, next).filter(t => !t.v && t.w > 0);
      let weight = cons.reduce((a, t) => a + t.w, 0);
      if (cons.length === 2 && STOPS.indexOf(cons[0].s) >= 0 && (cons[1].s === 'l' || cons[1].s === 'r')) weight = 1;
      heavy = weight >= 2;
    }
    return heavy ? n - 2 : n - 3;
  }
  function latinWordToSpanish(word) {
    const lower = word.toLowerCase();
    const plain = lower.replace(/[āēīōūȳ]/g, m => PLAIN[m]);
    let base = null;
    if (plain.length > 4 && /que$/.test(plain) && QUE_EXC.indexOf(plain) < 0 && !/cumque$|cunque$/.test(plain)) base = lower.slice(0, -3);
    else if (plain.length > 3 && /ne$/.test(plain) && /[tsmrn]$/.test(plain.slice(0, -2)) && ['bene', 'sine', 'paene', 'pone', 'mane'].indexOf(plain) < 0) base = lower.slice(0, -2);
    const tokens = tokenizeLatin(lower);
    let encl;
    if (base) encl = tokenizeLatin(base).filter(t => t.v).length;
    const st = stressIndex(tokens, encl);
    let vi = -1, out = '';
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i], next = tokens[i + 1];
      if (t.v) {
        vi++;
        let s = t.s.replace(/[āēīōūȳy]/g, m => PLAIN[m]);
        if (s === 'ae') s = 'ai'; else if (s === 'oe') s = 'oi';
        if (vi === st) s = ACUTE[s[0]] + s.slice(1);
        out += s;
        continue;
      }
      const nv = next && next.v ? next.s.replace(/[āēīōūȳy]/g, m => PLAIN[m]) : '';
      const prev = out.slice(-1);
      switch (t.s) {
        case 'c': case 'k': case 'ch': out += prev === 'k' ? '' : 'k'; break;
        case 'qu': out += 'cu'; break;
        case 'g': out += (nv[0] === 'e' || nv[0] === 'i') ? 'gu' : 'g'; break;
        case 'gu': out += (nv[0] === 'e' || nv[0] === 'i') ? 'gü' : 'gu'; break;
        case 'v': out += nv[0] === 'u' ? 'w' : 'hu'; break;
        case 'y': out += 'y'; break;
        case 'ph': out += 'f'; break;
        case 'th': out += 't'; break;
        case 'rh': out += 'r'; break;
        case 'h': break;
        case 'z': out += 's'; break;
        case 'r': out += 'r'; break;
        default:
          if (prev === t.s && t.s !== 'r') break;
          out += t.s;
      }
    }
    return out;
  }
  function latinToSpanish(text) {
    return String(text).replace(/[A-Za-zĀāĒēĪīŌōŪūȲȳ]+/g, w => latinWordToSpanish(w));
  }

  // ---------- Griego antiguo -> grafía española (pronunciación erasmiana de los institutos) ----------
  // θ = z, χ = j, φ = f, ψ = ps, ξ = x, ζ = ds, η = e, ω = o, υ = u; κ y γ con la ortografía española
  // (ca/que/qui, ga/gue/gui; γ ante γ κ χ ξ = n); ῥ inicial = rr; consonantes dobles simples (λλ = l, no «ll»).
  // Diptongos αι ει οι υι αυ ευ ηυ, ου = u; iota suscrita muda; la diéresis separa; espíritu áspero = j.
  // Tilde española en la vocal con acento griego (agudo, grave o circunflejo); en los diptongos, en la vocal
  // abierta (ῥεῖ → rréi). Si hay dos acentos (ἄνθρωπός τις), vale el primero. «;» = «?» y «·» = «,».
  // o.upsilon = 'i' lee la υ suelta como i (ψυχή → psijé) en lugar de u (psujé).
  const GRC_VOW = { 'α': 'a', 'ε': 'e', 'η': 'e', 'ι': 'i', 'ο': 'o', 'υ': 'u', 'ω': 'o' };
  const GRC_CONS = { 'β': 'b', 'δ': 'd', 'ζ': 'ds', 'θ': 'z', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': 'x', 'π': 'p', 'σ': 's', 'ς': 's', 'τ': 't', 'φ': 'f', 'χ': 'j', 'ψ': 'ps' };
  const GRC_DIPH = { 'αι': 'ai', 'ει': 'ei', 'οι': 'oi', 'υι': 'ui', 'αυ': 'au', 'ευ': 'eu', 'ηυ': 'eu', 'ου': 'u' };
  const GRC_ALT = { 'ϐ': 'β', 'ϑ': 'θ', 'ϕ': 'φ', 'ϖ': 'π', 'ϰ': 'κ', 'ϱ': 'ρ', 'ϲ': 'σ', 'ϵ': 'ε', 'ϳ': 'ι' };
  const GRC_MARK = { '̀': 'acc', '́': 'acc', '͂': 'acc', '̂': 'acc', '̃': 'acc', '̓': 'sm', '̓': 'sm', '̔': 'ro', 'ͅ': 'sub', '̈': 'dia' };
  // Espíritus y acentos sueltos delante de una mayúscula (῾Ο, ῎Α): se pasan detrás de la letra.
  const GRC_FRONT = { '῾': '̔', '῝': '̔̀', '῞': '̔́', '῟': '̔͂', '᾿': '̓', '῍': '̓̀', '῎': '̓́', '῏': '̓͂' };

  function greekWordToSpanish(w, up) {
    const L = [];
    for (const ch of w) {
      const m = GRC_MARK[ch];
      if (m) { if (L.length) L[L.length - 1][m] = true; continue; }
      if (ch >= '̀' && ch <= 'ͯ') continue;
      const b = ch.toLowerCase();
      L.push({ b: GRC_ALT[b] || b });
    }
    const T = [];
    for (let i = 0; i < L.length; i++) {
      const x = L[i], y = L[i + 1];
      if (GRC_VOW[x.b]) {
        // diptongo: los signos van en la segunda vocal; si la primera lleva acento, espíritu o diéresis, no lo es
        const d = y && GRC_DIPH[x.b + y.b];
        if (d && !y.dia && !x.dia && !x.acc && !x.sm && !x.ro) { T.push({ v: d, acc: y.acc, ro: y.ro }); i++; continue; }
        T.push({ v: x.b === 'υ' ? up : GRC_VOW[x.b], acc: x.acc, ro: x.ro });
      } else T.push({ c: x.b });
    }
    let out = '', stressed = false;
    for (let i = 0; i < T.length; i++) {
      const t = T[i], n = T[i + 1];
      if (t.v) {
        let s = t.v;
        if (t.acc && !stressed) { s = s === 'ui' ? 'uí' : ACUTE[s[0]] + s.slice(1); stressed = true; }
        out += (t.ro ? 'j' : '') + s;
        continue;
      }
      const front = !!(n && n.v && (n.v[0] === 'e' || n.v[0] === 'i'));
      if (t.c === 'γ') out += n && n.c && 'γκχξ'.indexOf(n.c) >= 0 ? 'n' : front ? 'gu' : 'g';
      else if (t.c === 'κ') out += n && n.c === 'κ' ? '' : front ? 'qu' : 'c';
      else if (t.c === 'ρ') out += i === 0 ? 'rr' : 'r';
      else if (n && n.c === t.c) continue;
      else out += GRC_CONS[t.c] != null ? GRC_CONS[t.c] : t.c;
    }
    return out;
  }
  function greekToSpanish(text, o) {
    const up = o && o.upsilon === 'i' ? 'i' : 'u';
    let s = String(text == null ? '' : text).normalize('NFD');
    s = s.replace(/([᾿῾῍-῏῝-῟])([Ͱ-Ͽ])/g, (m, d, l) => l + GRC_FRONT[d]);
    s = s.replace(/[᾽᾿῾῀῁῍-῏῝-῟῭-`´ʹ͵ͺ΄΅ʹʼ]/g, '');
    s = s.replace(/([Ͱ-Ͽ][̀-ͯ]*)[’']/g, '$1');   // elisión: ἀλλ’ ἐγώ
    s = s.replace(/;/g, '?').replace(/[··]/g, ',');
    s = s.replace(/[Ͱ-Ͽ][̀-ͯͰ-Ͽ]*/g, w => greekWordToSpanish(w, up));
    return s.normalize('NFC').toLowerCase();
  }

  // ---------- Impresos antiguos: ſ, v/u, æ, &, abreviaturas ----------
  const ABBR = { 'nō': 'non', 'nõ': 'non', 'quã': 'quam', 'tũ': 'tum', 'cũ': 'cum' };
  function matchCase(src, dst) { return src[0] === src[0].toUpperCase() && src[0] !== src[0].toLowerCase() ? dst[0].toUpperCase() + dst.slice(1) : dst; }
  function modernWord(w) {
    const lower = w.toLowerCase();
    if (ABBR[lower]) return matchCase(w, ABBR[lower]);
    let s = w.replace(/ſ/g, 's').replace(/æ/g, 'ae').replace(/Æ/g, 'Ae').replace(/œ/g, 'oe').replace(/Œ/g, 'Oe');
    // vocal con raya o tilde = abreviatura de m/n (habitudinē = habitudinem; cōtra = contra)
    s = s.normalize('NFD').replace(/([aeiouAEIOU])[̃̄](.?)/g, (m, v, nx) => {
      if (!nx) return v + 'm';
      return v + ('bpm'.indexOf(nx.toLowerCase()) >= 0 ? 'm' : 'n') + nx;
    }).replace(/[̀́̂]/g, '').normalize('NFC');
    // v inicial ante consonante = u (vt = ut, vltimum = ultimum)
    s = s.replace(/^([Vv])(?=[^aeiouAEIOU])/, (m, v) => v === 'V' ? 'U' : 'u');
    // u entre vocales = v (diuersos = diversos, siue = sive)
    s = s.replace(/([aeiouAEIOU])u(?=[aeiouAEIOU])/g, '$1v');
    return s;
  }
  function modernizeLatin(text) {
    return String(text).replace(/&/g, 'et').replace(/[\p{L}̀-ͯ]+/gu, w => modernWord(w));
  }

  // ---------- Texto ----------
  function stripMacrons(s) { return String(s).replace(/[āēīōūȳĀĒĪŌŪȲ]/g, m => ({ 'Ā': 'A', 'Ē': 'E', 'Ī': 'I', 'Ō': 'O', 'Ū': 'U', 'Ȳ': 'Y' })[m] || PLAIN[m]); }
  function normKey(s) { return stripMacrons(String(s).toLowerCase()); }
  function foldKey(s) {
    return String(s).toLowerCase().replace(/ſ/g, 's').replace(/æ/g, 'ae').replace(/œ/g, 'oe')
      .normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC').replace(/j/g, 'i').replace(/v/g, 'u');
  }
  function words(text) { return String(text).match(/[\p{L}]+/gu) || []; }
  function normSentence(s) { return words(normKey(s)).join(' '); }
  function shuffle(arr, seed) {
    const a = arr.slice();
    let x = seed || 1;
    for (let i = a.length - 1; i > 0; i--) {
      x = (x * 9301 + 49297) % 233280;
      const j = Math.floor(x / 233280 * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function hash(s) { let h = 2166136261; for (const ch of String(s)) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); }
  function wordCount(s) { return words(s).length; }

  // ---------- Comparar lo que dices con lo que tocaba ----------
  function lev(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    let prev = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  function similarity(a, b) {
    const x = Array.from(words(String(a).toLowerCase()).join(' ')), y = Array.from(words(String(b).toLowerCase()).join(' '));
    if (!x.length && !y.length) return 1;
    return 1 - lev(x, y) / Math.max(x.length, y.length);
  }
  function bestMatch(alts, target) {
    let best = { text: '', score: -1 };
    for (const a of alts || []) { const sc = similarity(a, target); if (sc > best.score) best = { text: a, score: sc }; }
    if (best.score < 0) best.score = 0;
    return best;
  }

  // ---------- JSON dentro de una respuesta ----------
  function extractJSON(text) {
    let t = String(text || '').trim();
    const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (fence) t = fence[1].trim();
    try { return JSON.parse(t); } catch (e) { /* sigue */ }
    const a = t.search(/[[{]/), b = Math.max(t.lastIndexOf('}'), t.lastIndexOf(']'));
    if (a >= 0 && b > a) { try { return JSON.parse(t.slice(a, b + 1)); } catch (e) { /* sigue */ } }
    return undefined;
  }

  const api = { DAY_MS, localDateStr, dayNum, dayStr, todayNum, weekOf, weekRange, dayLabel, schedule, intervalLabel,
    tokenizeLatin, latinWordToSpanish, latinToSpanish, greekToSpanish, modernizeLatin, stripMacrons, normKey, foldKey, words, normSentence,
    shuffle, hash, wordCount, lev, similarity, bestMatch, extractJSON };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Core = api;
})(typeof window !== 'undefined' ? window : globalThis);
