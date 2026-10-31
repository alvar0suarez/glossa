// Glossa · curso de griego antiguo (meta: leer filosofía griega). Pronunciación erasmiana a la española.
// Cada semana vive en courses/grc-<n>.js y se añade con window.CONTENT.grc.semanas.push({...}).
window.CONTENT = window.CONTENT || {};
window.CONTENT.grc = {
  semanasTitulos: ["El alfabeto y las primeras palabras", "Primera y segunda declinación", "El verbo: voz media y pronombres", "Tercera declinación e infinitivo", "Los tiempos del pasado", "Participios y verbos contractos", "Verbos en -μι, modos y oraciones", "Textos reales: Heráclito, Platón y Aristóteles"],
  programa: [
    "Alfabeto, pronunciación erasmiana a la española, acentos y espíritus; el artículo; εἰμί en presente; vocabulario filosófico básico (λόγος, ψυχή, ἀρετή, σοφία, φιλοσοφία).",
    "Primera y segunda declinación (sustantivos y adjetivos); el artículo completo; presente activo de los verbos en -ω (λύω); las preposiciones más frecuentes.",
    "Presente medio-pasivo; pronombres personales; αὐτός, οὗτος, ἐκεῖνος; τίς y τις; las partículas μέν… δέ, γάρ, οὖν, ἀλλά.",
    "Tercera declinación (φύσις, πόλις, σῶμα, γένος, ἀνήρ); adjetivos de la tercera (πᾶς, ἀληθής); el infinitivo y el acusativo con infinitivo.",
    "Imperfecto y aoristo (aumento, aoristo sigmático y temático); futuro; verbos de decir y de pensar.",
    "Participios (presente y aoristo) y genitivo absoluto; verbos contractos (ποιέω, τιμάω, δηλόω); comparativos y superlativos.",
    "Perfecto; subjuntivo y optativo para reconocerlos; oraciones finales, condicionales y relativas; verbos en -μι (δίδωμι, τίθημι, ἵστημι) y οἶδα.",
    "Textos reales con notas: Heráclito, Parménides, Platón (Apología y la caverna) y Aristóteles (Metafísica y Ética a Nicómaco)."
  ],
  temasChat: ["la filosofía", "Sócrates y sus discípulos", "la virtud", "el alma", "el ser y el conocer"],
  niveles: [
    {"n": 1, "nombre": "Nivel 1", "lema": "Leer filosofía griega", "semanas": [1, 2, 3, 4, 5, 6, 7, 8]},
    {"n": 2, "nombre": "Nivel 2", "lema": "Platón y Aristóteles con ayuda", "temario": ["Platón, Apología (selección)", "Platón, Critón y Eutifrón (selección)", "Platón, Menón: la reminiscencia", "Platón, República VII: la caverna completa", "Aristóteles, Categorías 1–5", "Aristóteles, Sobre la interpretación 1–4", "Aristóteles, Metafísica A 1–2", "Aristóteles, Ética a Nicómaco I"]},
    {"n": 3, "nombre": "Nivel 3", "lema": "Autonomía", "temario": ["Presocráticos: Heráclito y Parménides", "Platón, Fedón (selección)", "Platón, Teeteto: qué es el conocimiento", "Aristóteles, Física II", "Aristóteles, Sobre el alma III", "Aristóteles, Analíticos segundos I (selección)", "Plotino, Enéadas (selección)", "Sexto Empírico, Esbozos pirrónicos (selección)"]}
  ],
  semanas: []
};
