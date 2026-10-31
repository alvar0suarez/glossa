// Glossa · latín · semana 3: Tercera declinación y verbos
window.CONTENT.la.semanas.push({
  n: 3,
  lecciones: [
    {
      id: "la3-1",
      titulo: "La tercera declinación: ratiō, ratiōnis",
      min: 40,
      intro: "En la primera frase de tu página, casi la mitad de los sustantivos y adjetivos son de la tercera declinación: *dēfīnītiōne, auctōrēs, partis, resolūtiōnem, prōpositiōnis*. Su nominativo es imprevisible y la raíz sale del genitivo; por eso el diccionario da siempre los dos: *ratiō, ratiōnis*.",
      bloques: [
        {
          t: "p",
          x: "Quita la *-is* del genitivo y tendrás la raíz: *ratiōn-is* → *ratiōn-*. A esa raíz se añaden todas las terminaciones; solo el nominativo singular va por libre."
        },
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural", "Sirve para"],
          audio: [1, 2],
          filas: [
            ["Nominativo", "ratiō", "ratiōnēs", "sujeto"],
            ["Genitivo", "ratiōnis", "ratiōnum", "«de»"],
            ["Dativo", "ratiōnī", "ratiōnibus", "«a, para»"],
            ["Acusativo", "ratiōnem", "ratiōnēs", "objeto directo"],
            ["Ablativo", "ratiōne", "ratiōnibus", "«con, por, en»"]
          ]
        },
        {
          t: "nota",
          x: "Ojo: aquí *-is* es genitivo singular (*ratiōnis*, de la razón), no dativo o ablativo plural como en la 2.ª (*amīcīs*). Nominativo y acusativo plural son iguales (*ratiōnēs*): lo decide el verbo. Y el vocativo es igual que el nominativo: *Ō homō!*"
        },
        {
          t: "tabla",
          cab: ["Nominativo", "Genitivo", "Español", "De la raíz viene…"],
          audio: [0, 1],
          filas: [
            ["homō", "hominis", "ser humano, hombre", "homínido"],
            ["lēx", "lēgis", "ley", "legal"],
            ["vōx", "vōcis", "voz; palabra", "vocal, vocablo"],
            ["mēns", "mentis", "mente", "mental"],
            ["virtūs", "virtūtis", "virtud; fuerza", "virtuoso"],
            ["ōrdō", "ōrdinis", "orden", "ordinal"],
            ["lapis", "lapidis", "piedra", "lápida"],
            ["quaestiō", "quaestiōnis", "cuestión", "cuestionar"]
          ]
        },
        {
          t: "p",
          x: "Las palabras en *-tiō, -tiōnis* son femeninas y dan el español «-ción»: *dēfīnītiō, prōpositiō, ōrātiō, quaestiō, distīnctiō*. Las de *-tās, -tātis* también son femeninas y dan «-dad»: *vēritās* (verdad), *quālitās* (cualidad), *quantitās* (cantidad)."
        },
        {
          t: "ej",
          items: [
            ["Ratiō hominem ā bēstiīs distinguit.", "La razón distingue al hombre de las bestias."],
            ["Mēns hominis vēritātem quaerit.", "La mente del hombre busca la verdad."],
            ["Prōpositiō ex terminīs cōnstat.", "La proposición consta de términos."],
            ["Logica lēgēs cōgitātiōnis docet.", "La lógica enseña las leyes del pensamiento."],
            ["Magister clārā vōce legit.", "El maestro lee con voz clara."],
            ["Quaestiō difficilis est.", "La cuestión es difícil."],
            ["Sine ōrdine nūlla est scientia.", "Sin orden no hay ciencia."]
          ]
        }
      ],
      vocab: [
        ["ratiō, ratiōnis (f.)", "razón; noción, aspecto"],
        ["homō, hominis (m.)", "ser humano, hombre"],
        ["lēx, lēgis (f.)", "ley"],
        ["mēns, mentis (f.)", "mente (gen. pl. mentium)"],
        ["virtūs, virtūtis (f.)", "virtud; fuerza"],
        ["quālitās, quālitātis (f.)", "cualidad"],
        ["quantitās, quantitātis (f.)", "cantidad"],
        ["ōrdō, ōrdinis (m.)", "orden"],
        ["lapis, lapidis (m.)", "piedra"],
        ["quaestiō, quaestiōnis (f.)", "cuestión, pregunta"],
        ["distīnctiō, distīnctiōnis (f.)", "distinción"],
        ["significātiō, significātiōnis (f.)", "significación, significado"],
        ["cōgitātiō, cōgitātiōnis (f.)", "pensamiento"],
        ["opīniō, opīniōnis (f.)", "opinión"]
      ],
      ejercicios: [
        { t: "mc", q: "El genitivo de «homō» es…", ops: ["hominis", "homōnis", "homī"], ok: 0 },
        {
          t: "mc",
          q: "¿De dónde sacas la raíz de un sustantivo de la 3.ª?",
          ops: ["Del genitivo singular, quitando -is", "Del nominativo singular", "Del vocativo singular"],
          ok: 0
        },
        { t: "oir", x: "ratiōnem", ops: ["ratiōnem", "ratiōnēs", "ratiōne"], ok: 0 },
        {
          t: "mc",
          q: "En «*Ratiō hominem ā bēstiīs distinguit*», «hominem» es…",
          ops: ["el objeto directo (acusativo)", "el sujeto (nominativo)", "un genitivo: «del hombre»"],
          ok: 0
        },
        { t: "mc", q: "«*lēgēs*» puede ser…", ops: ["nominativo o acusativo plural", "genitivo singular", "ablativo singular"], ok: 0 },
        { t: "mc", q: "«*quaestiō*» es femenina porque…", ops: ["todas las palabras en -tiō son femeninas", "acaba en -ō", "significa «pregunta»"], ok: 0 },
        { t: "oir", x: "vōcis", ops: ["vōcis", "vōcēs", "vōcī"], ok: 0 },
        { t: "orden", es: "La razón distingue al hombre de las bestias.", x: "Ratiō hominem ā bēstiīs distinguit." }
      ]
    },
    {
      id: "la3-2",
      titulo: "Neutros y temas en -i: corpus, genus, pars, animal",
      min: 40,
      intro: "Dos grupos más de la tercera: los neutros (*corpus, genus, tempus*) y los temas en *-i* (*pars, ars, animal*). Tu primera frase dice dos veces *partis*: «de parte».",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural"],
          audio: [1, 2],
          filas: [
            ["Nom. y acus.", "corpus", "corpora"],
            ["Genitivo", "corporis", "corporum"],
            ["Dativo", "corporī", "corporibus"],
            ["Ablativo", "corpore", "corporibus"]
          ]
        },
        {
          t: "p",
          x: "Regla de oro de los neutros, en cualquier declinación: el acusativo es igual que el nominativo, y en plural los dos acaban en *-a*: *verbum → verba*, *corpus → corpora*, *nōmen → nōmina*."
        },
        {
          t: "tabla",
          cab: ["Nominativo", "Genitivo", "Plural", "Español"],
          audio: [0, 1, 2],
          filas: [
            ["genus", "generis", "genera", "género, clase"],
            ["tempus", "temporis", "tempora", "tiempo"],
            ["nōmen", "nōminis", "nōmina", "nombre, sustantivo"],
            ["opus", "operis", "opera", "obra"],
            ["caput", "capitis", "capita", "cabeza; capítulo"]
          ]
        },
        {
          t: "nota",
          x: "*Genus, corpus, tempus* acaban en *-us*, pero no son de la 2.ª: son neutros de la 3.ª, y el genitivo lo delata (*generis*). De esa raíz viene el español: *gener-* → general, *corpor-* → corporal, *tempor-* → temporal. En gramática, *genus* es el género (masculino, femenino, neutro) y *tempus*, el tiempo verbal."
        },
        {
          t: "p",
          x: "**Temas en -i.** Se declinan casi igual, pero el genitivo plural acaba en *-ium*. Pasa sobre todo en monosílabos cuya raíz acaba en dos consonantes (*pars, partis → partium*; *ars → artium*; *mēns → mentium*; pero *vōx, vōcis → vōcum*) y en los parisílabos, con tantas sílabas en nominativo como en genitivo (*ignis, ignis → ignium*). Los neutros en *-al, -ar* y *-e* van más lejos: ablativo en *-ī* y plural en *-ia*: *animal → animālī, animālia*."
        },
        {
          t: "tabla",
          cab: ["Caso", "pars (f.)", "animal (n.)"],
          audio: [1, 2],
          filas: [
            ["Nom. sg.", "pars", "animal"],
            ["Gen. sg.", "partis", "animālis"],
            ["Dat. sg.", "partī", "animālī"],
            ["Acus. sg.", "partem", "animal"],
            ["Abl. sg.", "parte", "animālī"],
            ["Nom. y acus. pl.", "partēs", "animālia"],
            ["Gen. pl.", "partium", "animālium"],
            ["Dat. y abl. pl.", "partibus", "animālibus"]
          ]
        },
        {
          t: "ej",
          items: [
            ["Homō ex corpore et animā cōnstat.", "El hombre consta de cuerpo y alma."],
            ["Animal genus est, homō speciēs.", "Animal es el género; hombre, la especie."],
            ["Nōmen et verbum partēs ōrātiōnis sunt.", "El nombre y el verbo son partes de la oración."],
            ["Dialectica est ars artium, scientia scientiārum.", "La dialéctica es el arte de las artes, la ciencia de las ciencias. (Pedro Hispano)"],
            ["Omne animal corpus est, sed nōn omne corpus animal.", "Todo animal es cuerpo, pero no todo cuerpo es animal."],
            ["Tempus fugit.", "El tiempo vuela."]
          ]
        },
        {
          t: "nota",
          x: "*Ēns, entis* (ente, lo que es) se declina como *pars*, pero es neutro: plural *entia*, genitivo plural *entium*. Es la palabra central de la metafísica escolástica: *ēns reāle* (ente real) frente a *ēns ratiōnis* (ente de razón, lo que solo existe en la mente)."
        }
      ],
      vocab: [
        ["corpus, corporis (n.)", "cuerpo"],
        ["genus, generis (n.)", "género, clase"],
        ["tempus, temporis (n.)", "tiempo"],
        ["opus, operis (n.)", "obra, trabajo"],
        ["caput, capitis (n.)", "cabeza; capítulo"],
        ["pars, partis (f.)", "parte (gen. pl. partium)"],
        ["ars, artis (f.)", "arte, técnica (gen. pl. artium)"],
        ["animal, animālis (n.)", "animal, ser vivo que siente"],
        ["mors, mortis (f.)", "muerte (gen. pl. mortium)"],
        ["ēns, entis (n.)", "ente, lo que es"],
        ["ēns ratiōnis", "ente de razón: lo que solo existe en la mente"],
        ["partēs ōrātiōnis", "las partes de la oración"],
        ["ars artium", "el arte de las artes (así llamaban a la lógica)"],
        ["Tempus fugit.", "El tiempo vuela."]
      ],
      ejercicios: [
        { t: "mc", q: "El plural de «corpus» es…", ops: ["corpora", "corpī", "corporēs"], ok: 0 },
        { t: "mc", q: "¿De qué género es «genus, generis»?", ops: ["neutro", "masculino, como amīcus", "femenino"], ok: 0 },
        { t: "oir", x: "generis", ops: ["generis", "genera", "genus"], ok: 0 },
        { t: "mc", q: "«*ars artium*» significa…", ops: ["el arte de las artes", "las artes del arte", "un arte entre otros"], ok: 0 },
        { t: "mc", q: "El ablativo singular de «animal» es…", ops: ["animālī", "animāle", "animālō"], ok: 0 },
        { t: "oir", x: "partium", ops: ["partium", "partem", "partibus"], ok: 0 },
        { t: "orden", es: "El nombre y el verbo son partes de la oración.", x: "Nōmen et verbum partēs ōrātiōnis sunt." }
      ]
    },
    {
      id: "la3-3",
      titulo: "Adjetivos de la tercera: omnis, ūniversālis, simplex",
      min: 35,
      intro: "Los adjetivos que más leerás en lógica son de la tercera: *omnis, ūniversālis, singulāris, commūnis, simplex*. En tu página, *partis principalis* es «de parte principal»: sustantivo y adjetivo de la tercera, en genitivo.",
      bloques: [
        {
          t: "p",
          x: "Hay dos tipos principales. Los de **dos terminaciones** tienen una forma para masculino y femenino y otra para el neutro: *omnis* (m. y f.), *omne* (n.). Los de **una terminación** usan la misma forma para los tres géneros en el nominativo, y el diccionario da el genitivo para que saques la raíz: *simplex, simplicis*; *prūdēns, prūdentis*."
        },
        {
          t: "tabla",
          cab: ["Caso", "m. y f.", "n."],
          audio: [1, 2],
          filas: [
            ["Nom. sg.", "omnis", "omne"],
            ["Gen. sg.", "omnis", "omnis"],
            ["Dat. y abl. sg.", "omnī", "omnī"],
            ["Acus. sg.", "omnem", "omne"],
            ["Nom. y acus. pl.", "omnēs", "omnia"],
            ["Gen. pl.", "omnium", "omnium"],
            ["Dat. y abl. pl.", "omnibus", "omnibus"]
          ]
        },
        {
          t: "nota",
          x: "Señales de un adjetivo de la 3.ª: ablativo singular en *-ī* (*omnī, simplicī*), genitivo plural en *-ium* (*omnium*) y neutro plural en *-ia* (*omnia, simplicia*). Ya conocías *omnia* (todas las cosas): es el neutro plural de *omnis*."
        },
        {
          t: "tabla",
          cab: ["Adjetivo", "Ejemplo", "Español"],
          audio: [0, 1],
          filas: [
            ["commūnis, commūne", "nōmen commūne", "nombre común"],
            ["ūniversālis, ūniversāle", "prōpositiō ūniversālis", "proposición universal"],
            ["singulāris, singulāre", "terminus singulāris", "término singular"],
            ["ratiōnālis, ratiōnāle", "animal ratiōnāle", "animal racional"],
            ["simplex, simplicis", "terminus simplex", "término simple"],
            ["prūdēns, prūdentis", "magister prūdēns", "maestro prudente"]
          ]
        },
        {
          t: "p",
          x: "El adjetivo concuerda en género, número y caso, pero no tiene por qué compartir terminación: *homō bonus*, *animal ratiōnāle*, *prōpositiō ūniversālis*, *magistrō prūdentī* (al maestro prudente)."
        },
        {
          t: "ej",
          items: [
            ["Omnis homō mortālis est.", "Todo hombre es mortal."],
            ["Sōcratēs homō est; ergō Sōcratēs mortālis est.", "Sócrates es hombre; luego Sócrates es mortal."],
            ["Ratiō omnibus hominibus commūnis est.", "La razón es común a todos los hombres."],
            ["«Omnis homō currit» ūniversālis est; «Sōcratēs currit», singulāris.", "«Todo hombre corre» es universal; «Sócrates corre», singular."],
            ["Terminus simplex ex ūnā vōce cōnstat, ut «homō».", "Un término simple consta de una sola palabra, como «homō»."],
            ["Sēneca sapiēns et prūdēns est.", "Séneca es sabio y prudente."]
          ]
        },
        {
          t: "nota",
          x: "En neutro, estos adjetivos funcionan como sustantivos: *ūniversāle* (un universal: lo que se dice de muchos, como «hombre»), *singulāre* (lo singular), *commūne* (lo común). La gran disputa medieval se llamaba *quaestiō dē ūniversālibus*: ¿existen los universales fuera de la mente?"
        }
      ],
      vocab: [
        ["omnis, omne", "todo, cada; (pl.) todos"],
        ["commūnis, commūne", "común"],
        ["ūniversālis, ūniversāle", "universal"],
        ["singulāris, singulāre", "singular, de uno solo"],
        ["particulāris, particulāre", "particular"],
        ["simplex, simplicis", "simple, no compuesto"],
        ["prūdēns, prūdentis", "prudente, sensato"],
        ["ratiōnālis, ratiōnāle", "racional"],
        ["mortālis, mortāle", "mortal"],
        ["facilis, facile", "fácil"],
        ["difficilis, difficile", "difícil"],
        ["similis, simile", "semejante, parecido"],
        ["sapiēns, sapientis", "sabio"],
        ["nātūrālis, nātūrāle", "natural"],
        ["terminus commūnis", "término común: vale para muchos («homō»)"],
        ["terminus singulāris", "término singular: vale para uno («Sōcratēs»)"],
        ["quaestiō dē ūniversālibus", "la cuestión de los universales"]
      ],
      ejercicios: [
        { t: "mc", q: "Concuerda: «animal ___» (racional)", ops: ["ratiōnāle", "ratiōnālis", "ratiōnālem"], ok: 0 },
        { t: "mc", q: "Concuerda: «prōpositiō ___» (universal)", ops: ["ūniversālis", "ūniversāle", "ūniversālia"], ok: 0 },
        { t: "mc", q: "«*omnium*» significa…", ops: ["de todos", "a todos", "todas las cosas"], ok: 0 },
        { t: "oir", x: "omnibus", ops: ["omnibus", "omnēs", "omnium"], ok: 0 },
        { t: "mc", q: "Un *terminus singulāris* es, por ejemplo…", ops: ["«Sōcratēs»", "«homō»", "«animal»"], ok: 0 },
        { t: "oir", x: "simplicia", ops: ["simplicia", "simplicī", "simplicem"], ok: 0 },
        { t: "orden", es: "Todo hombre es mortal.", x: "Omnis homō mortālis est." }
      ]
    },
    {
      id: "la3-4",
      titulo: "Is, hic, ille: él, este, aquel",
      min: 35,
      intro: "Los demostrativos señalan y recogen lo ya dicho, y una página de lógica está llena de ellos. En tu primera frase, *in eo* es «en él», es decir, en el término.",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "m.", "f.", "n."],
          audio: [1, 2, 3],
          filas: [
            ["Nom. sg.", "is", "ea", "id"],
            ["Gen. sg.", "eius", "eius", "eius"],
            ["Dat. sg.", "eī", "eī", "eī"],
            ["Acus. sg.", "eum", "eam", "id"],
            ["Abl. sg.", "eō", "eā", "eō"],
            ["Nom. pl.", "eī", "eae", "ea"],
            ["Gen. pl.", "eōrum", "eārum", "eōrum"],
            ["Dat. y abl. pl.", "eīs", "eīs", "eīs"],
            ["Acus. pl.", "eōs", "eās", "ea"]
          ]
        },
        {
          t: "p",
          x: "*Is, ea, id* es «él, ella, ello» y también «ese»: recoge algo ya nombrado. *Eius* equivale a «su» (de él, de ella): *Aristotelēs et liber eius* (Aristóteles y su libro)."
        },
        {
          t: "tabla",
          cab: ["Caso", "hic (este)", "ille (aquel)"],
          audio: [1, 2],
          filas: [
            ["Nom. sg.", "hic, haec, hoc", "ille, illa, illud"],
            ["Gen. sg.", "huius", "illīus"],
            ["Dat. sg.", "huic", "illī"],
            ["Acus. sg.", "hunc, hanc, hoc", "illum, illam, illud"],
            ["Abl. sg.", "hōc, hāc, hōc", "illō, illā, illō"],
            ["Nom. pl.", "hī, hae, haec", "illī, illae, illa"],
            ["Gen. pl.", "hōrum, hārum, hōrum", "illōrum, illārum, illōrum"],
            ["Dat. y abl. pl.", "hīs", "illīs"],
            ["Acus. pl.", "hōs, hās, haec", "illōs, illās, illa"]
          ]
        },
        {
          t: "nota",
          x: "Los tres tienen el genitivo singular en *-ius* y el dativo en *-ī*, iguales en los tres géneros (*eius, huius, illīus*; *eī, huic, illī*). El resto se parece a *bonus, bona, bonum*. Ojo con *haec*: puede ser femenino singular (esta) o neutro plural (estas cosas)."
        },
        {
          t: "p",
          x: "En los textos escolásticos, cuando se nombran dos cosas, *hic* es «este», el último nombrado, e *ille* «aquel», el primero. Y hay fórmulas fijas que verás a diario: *id est* (es decir), *hoc est* (esto es), *ad hoc* (para esto), *in hōc* (en esto), *eō quod* (porque, por el hecho de que)."
        },
        {
          t: "ej",
          items: [
            ["Haec est quaestiō: quid est terminus?", "Esta es la cuestión: ¿qué es el término?"],
            ["Hic liber dē logicā est, ille dē nātūrā.", "Este libro trata de lógica; aquel, de la naturaleza."],
            ["Platō et Aristotelēs philosophī sunt: hic discipulus, ille magister.", "Platón y Aristóteles son filósofos: este (Aristóteles), el discípulo; aquel (Platón), el maestro."],
            ["Aristotelēs magnus philosophus est; discipulī librōs eius legunt.", "Aristóteles es un gran filósofo; los alumnos leen sus libros."],
            ["Magister discipulum vocat et eī librum dat.", "El maestro llama al alumno y le da un libro."],
            ["Homō est animal ratiōnāle, id est, animal cum ratiōne.", "El hombre es un animal racional, es decir, un animal con razón."],
            ["Hoc vērum est, illud falsum.", "Esto es verdadero; aquello, falso."]
          ]
        },
        {
          t: "nota",
          x: "No confundas *hic* (este) con el adverbio *hīc* (aquí), con *ī* larga. Y para «su» referido al sujeto de la frase el latín usa *suus*, no *eius*: *Sēneca librum suum legit* (Séneca lee su propio libro), pero *Sēneca librum eius legit* (Séneca lee el libro de él, de otro)."
        }
      ],
      vocab: [
        ["is, ea, id", "él, ella, ello; ese"],
        ["eius", "su, de él, de ella (genitivo de is)"],
        ["hic, haec, hoc", "este, esta, esto"],
        ["ille, illa, illud", "aquel, aquella, aquello"],
        ["suus, sua, suum", "su, suyo (cuando se refiere al sujeto)"],
        ["id est", "es decir (i. e.)"],
        ["hoc est", "esto es, o sea"],
        ["ad hoc", "para esto, con este fin"],
        ["in hōc", "en esto"],
        ["in eō", "en él, en ello"],
        ["eō quod", "porque, por el hecho de que"],
        ["hōc modō", "de este modo"],
        ["huiusmodī", "de este tipo, semejante"],
        ["hīc", "aquí (no confundir con hic, «este»)"],
        ["nōn hoc, sed illud", "no esto, sino aquello"]
      ],
      ejercicios: [
        { t: "mc", q: "«*eius*» significa…", ops: ["su, de él o de ella", "a él", "ellos"], ok: 0 },
        {
          t: "mc",
          q: "En «*Platō et Aristotelēs: hic discipulus, ille magister*», «hic» es…",
          ops: ["Aristóteles, el último nombrado", "Platón, el primero nombrado", "el maestro"],
          ok: 0
        },
        { t: "oir", x: "huius", ops: ["huius", "huic", "hunc"], ok: 0 },
        { t: "mc", q: "«*id est*» equivale a…", ops: ["es decir", "eso es verdad", "eso está aquí"], ok: 0 },
        { t: "mc", q: "En tu página, «*in eo*» significa…", ops: ["en él (en el término)", "voy a él", "en ellos"], ok: 0 },
        { t: "oir", x: "illīus", ops: ["illīus", "illīs", "illud"], ok: 0 },
        { t: "orden", es: "Esta es la cuestión: ¿qué es el término?", x: "Haec est quaestiō: quid est terminus?" }
      ]
    },
    {
      id: "la3-5",
      titulo: "Ipse, īdem y el relativo quī, quae, quod",
      min: 40,
      intro: "El relativo *quī, quae, quod* sostiene casi todas las definiciones: *genus est id quod…* (el género es aquello que…). Hoy, además, *ipse* (mismo) e *īdem* (el mismo).",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "m.", "f.", "n."],
          audio: [1, 2, 3],
          filas: [
            ["Nom. sg.", "quī", "quae", "quod"],
            ["Gen. sg.", "cuius", "cuius", "cuius"],
            ["Dat. sg.", "cui", "cui", "cui"],
            ["Acus. sg.", "quem", "quam", "quod"],
            ["Abl. sg.", "quō", "quā", "quō"],
            ["Nom. pl.", "quī", "quae", "quae"],
            ["Gen. pl.", "quōrum", "quārum", "quōrum"],
            ["Dat. y abl. pl.", "quibus", "quibus", "quibus"],
            ["Acus. pl.", "quōs", "quās", "quae"]
          ]
        },
        {
          t: "p",
          x: "La regla: el relativo copia el **género y el número** de la palabra a la que se refiere (su antecedente), pero toma el **caso** que pide su función dentro de su propia oración. En *liber quem magister legit* (el libro que lee el maestro), *quem* es masculino singular como *liber*, y acusativo porque es el objeto de *legit*."
        },
        {
          t: "ej",
          items: [
            ["Homō quī cōgitat", "el hombre que piensa"],
            ["Ars quae docet bene cōgitāre", "el arte que enseña a pensar bien"],
            ["Liber quem magister legit", "el libro que lee el maestro"],
            ["Discipulus cuius liber hīc est", "el alumno cuyo libro está aquí"],
            ["Genus est id quod multās speciēs continet.", "El género es lo que contiene muchas especies."],
            ["Terminus est vōx quae aliquid significat.", "El término es una palabra que significa algo."]
          ]
        },
        {
          t: "nota",
          x: "Del genitivo *cuius* viene el español «cuyo», y del acusativo *quem*, «quien». *Id quod* (lo que) e *is quī* (el que) son las fórmulas de casi todas las definiciones escolásticas."
        },
        {
          t: "tabla",
          cab: ["Caso", "ipse (mismo)", "īdem (el mismo)"],
          audio: [1, 2],
          filas: [
            ["Nom. sg.", "ipse, ipsa, ipsum", "īdem, eadem, idem"],
            ["Gen. sg.", "ipsīus", "eiusdem"],
            ["Dat. sg.", "ipsī", "eīdem"],
            ["Acus. sg.", "ipsum, ipsam, ipsum", "eundem, eandem, idem"],
            ["Abl. sg.", "ipsō, ipsā, ipsō", "eōdem, eādem, eōdem"],
            ["Nom. pl.", "ipsī, ipsae, ipsa", "eīdem, eaedem, eadem"],
            ["Gen. pl.", "ipsōrum, ipsārum, ipsōrum", "eōrundem, eārundem, eōrundem"],
            ["Dat. y abl. pl.", "ipsīs", "eīsdem"],
            ["Acus. pl.", "ipsōs, ipsās, ipsa", "eōsdem, eāsdem, eadem"]
          ]
        },
        {
          t: "p",
          x: "*Īdem* es *is* + *-dem* y se declina como *is*; la *m* pasa a *n* delante de la *d* (*eundem, eōrundem*). *Ipse* subraya: *Aristotelēs ipse* (el propio Aristóteles), *ipsa vēritās* (la verdad misma)."
        },
        {
          t: "ej",
          items: [
            ["Aristotelēs ipse hoc dīcit.", "Lo dice el propio Aristóteles."],
            ["Sōcratēs et Platō eiusdem speciēī sunt.", "Sócrates y Platón son de la misma especie."],
            ["Dēfīnītiō et dēfīnītum idem significant.", "La definición y lo definido significan lo mismo."],
            ["Nōn est idem «homō» et «animal».", "«Hombre» y «animal» no son lo mismo."],
            ["Eōdem modō equum dēfīnīmus.", "Del mismo modo definimos el caballo."]
          ]
        },
        {
          t: "nota",
          x: "*Ipse* no es reflexivo: solo refuerza. El reflexivo es *sē*: *per sē* (por sí mismo, de suyo), *sē ipsum nōscit* (se conoce a sí mismo). Por eso *Nōsce tē ipsum* es, al pie de la letra, «conoce a ti mismo»."
        }
      ],
      vocab: [
        ["quī, quae, quod", "que, el cual, quien (relativo)"],
        ["id quod", "lo que"],
        ["is quī", "el que, quien"],
        ["in quō", "en el cual, en lo que"],
        ["dē quō", "del cual, sobre el cual"],
        ["aliquid", "algo"],
        ["īdem, eadem, idem", "el mismo, la misma, lo mismo"],
        ["eōdem modō", "del mismo modo"],
        ["eiusdem generis", "del mismo género"],
        ["Nōn est idem.", "No es lo mismo."],
        ["eō ipsō", "por eso mismo, por el mero hecho"],
        ["per sē", "por sí, de suyo (por su esencia)"],
        ["Aristotelēs ipse dīcit.", "Lo dice el propio Aristóteles."],
        ["dēfīnītum, dēfīnītī (n.)", "lo definido"]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «liber ___ legō» (el libro que leo)", ops: ["quem", "quī", "quod"], ok: 0 },
        { t: "mc", q: "Completa: «ars ___ docet» (el arte que enseña)", ops: ["quae", "quam", "quī"], ok: 0 },
        { t: "mc", q: "Completa: «Genus est id ___ speciēs continet.»", ops: ["quod", "quae", "quem"], ok: 0 },
        { t: "oir", x: "eundem", ops: ["eundem", "eandem", "eōdem"], ok: 0 },
        {
          t: "mc",
          q: "«*Sōcratēs et Platō eiusdem speciēī sunt*» significa…",
          ops: ["Sócrates y Platón son de la misma especie.", "Sócrates y Platón son de su especie.", "Sócrates y Platón son la especie misma."],
          ok: 0
        },
        { t: "mc", q: "El español «cuyo» viene de…", ops: ["cuius", "cui", "quō"], ok: 0 },
        { t: "orden", es: "El género es lo que contiene muchas especies.", x: "Genus est id quod multās speciēs continet." }
      ]
    },
    {
      id: "la3-6",
      titulo: "El presente: amō, doceō, legō, audiō",
      min: 40,
      intro: "Hasta ahora has visto sobre todo la 3.ª persona. Hoy, el presente completo de las cuatro conjugaciones: lo necesitas para seguir una discusión escolástica (*dīcō, respondeō, dēfīniō*) y para tu conversación diaria en latín.",
      bloques: [
        {
          t: "p",
          x: "El infinitivo dice la conjugación: 1.ª *-āre* (*amāre*), 2.ª *-ēre* (*docēre*), 3.ª *-ere* con *e* breve (*legere*), 4.ª *-īre* (*audīre*). Por eso el diccionario da dos formas: *legō, legere*."
        },
        {
          t: "tabla",
          cab: ["Persona", "1.ª amāre", "2.ª docēre", "3.ª legere", "4.ª audīre"],
          audio: [1, 2, 3, 4],
          filas: [
            ["ego", "amō", "doceō", "legō", "audiō"],
            ["tū", "amās", "docēs", "legis", "audīs"],
            ["is, ea", "amat", "docet", "legit", "audit"],
            ["nōs", "amāmus", "docēmus", "legimus", "audīmus"],
            ["vōs", "amātis", "docētis", "legitis", "audītis"],
            ["eī, eae", "amant", "docent", "legunt", "audiunt"]
          ]
        },
        {
          t: "p",
          x: "Las terminaciones son siempre *-ō, -s, -t, -mus, -tis, -nt*; lo que cambia es la vocal que las une a la raíz. La 3.ª es la irregular: *legis, legit, legimus*, pero *legunt*. Y la vocal larga atrae el acento: *LE-gi-mus*, pero *au-DĪ-mus*."
        },
        {
          t: "nota",
          x: "¿*legere* o *docēre*? Solo la raya lo dice, y en los libros antiguos no hay rayas: mira la 1.ª persona en el diccionario (*legō* frente a *doceō*). Por eso las tarjetas te dan las dos formas."
        },
        {
          t: "ej",
          items: [
            ["Quid legis? Logicam legō.", "¿Qué lees? Leo lógica."],
            ["Magister interrogat; nōs respondēmus.", "El maestro pregunta; nosotros respondemos."],
            ["Hominem dēfīnīmus: animal ratiōnāle.", "Definimos al hombre: animal racional."],
            ["Quid significat «genus»?", "¿Qué significa «genus»?"],
            ["Nōn intellegō. Iterum, quaesō.", "No lo entiendo. Otra vez, por favor."],
            ["Rēctē dīcis, sed nōn tōtum.", "Dices bien, pero no todo."],
            ["Variē dē dēfīnītiōne terminī sentiunt auctōrēs.", "Los autores opinan de distinta manera sobre la definición del término."]
          ]
        },
        {
          t: "nota",
          x: "La última frase es el comienzo de tu página, con ortografía moderna. *Sentiunt* (opinan) es de *sentiō, sentīre* (4.ª), y el *cōnsīderant* (consideran) que viene después es de *cōnsīderō, cōnsīderāre* (1.ª)."
        }
      ],
      vocab: [
        ["dīcō, dīcere", "decir"],
        ["dēfīniō, dēfīnīre", "definir"],
        ["sentiō, sentīre", "sentir; opinar"],
        ["cōnsīderō, cōnsīderāre", "considerar"],
        ["intellegō, intellegere", "entender, comprender"],
        ["contineō, continēre", "contener"],
        ["dīvidō, dīvidere", "dividir"],
        ["distinguō, distinguere", "distinguir"],
        ["sciō, scīre", "saber"],
        ["putō, putāre", "pensar, creer"],
        ["interrogō, interrogāre", "preguntar"],
        ["Nōn intellegō.", "No lo entiendo."],
        ["Rēctē dīcis.", "Tienes razón. (Dices bien.)"],
        ["quaesō", "por favor"],
        ["variē", "de distinta manera"]
      ],
      ejercicios: [
        { t: "mc", q: "«*legimus*» significa…", ops: ["leemos", "leen", "leéis"], ok: 0 },
        { t: "mc", q: "¿De qué conjugación es «*audīre*»?", ops: ["4.ª", "2.ª", "3.ª"], ok: 0 },
        { t: "oir", x: "legunt", ops: ["legunt", "legit", "legimus"], ok: 0 },
        { t: "mc", q: "Completa: «Nōs hominem ___» (definimos)", ops: ["dēfīnīmus", "dēfīniunt", "dēfīnit"], ok: 0 },
        { t: "oir", x: "docētis", ops: ["docētis", "docēmus", "docent"], ok: 0 },
        { t: "mc", q: "En tu página, «*sentiunt Authores*» significa…", ops: ["opinan los autores", "se sientan los autores", "escriben los autores"], ok: 0 },
        { t: "orden", es: "¿Qué lees? Leo lógica.", x: "Quid legis? Logicam legō." }
      ]
    },
    {
      id: "la3-7",
      titulo: "Capiō, possum y eō",
      min: 35,
      intro: "Tres verbos que se salen un poco de las tablas: *capiō* (tomar, captar), *possum* (poder) y *eō* (ir). *Potest* aparece en cualquier argumento: «puede ser», «no puede ser».",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "capere (tomar)", "posse (poder)", "īre (ir)"],
          audio: [1, 2, 3],
          filas: [
            ["ego", "capiō", "possum", "eō"],
            ["tū", "capis", "potes", "īs"],
            ["is, ea", "capit", "potest", "it"],
            ["nōs", "capimus", "possumus", "īmus"],
            ["vōs", "capitis", "potestis", "ītis"],
            ["eī, eae", "capiunt", "possunt", "eunt"]
          ]
        },
        {
          t: "p",
          x: "**Capiō** es de la 3.ª mixta: infinitivo en *-ere* como *legere*, pero conserva la *-i-* en *capiō* y *capiunt*, como *audiō*. Siguen este modelo *faciō* (hacer), *accipiō* (recibir; entender) y *concipiō* (concebir)."
        },
        {
          t: "p",
          x: "**Possum** es *pot-* (capaz) + *sum*: *pot-* delante de vocal (*potes, potest*) y *pos-* delante de *s* (*possum, possunt*). Va con infinitivo, como en español: *dēfīnīre possumus* (podemos definir)."
        },
        {
          t: "p",
          x: "**Eō** tiene una raíz mínima, *i-*, que se vuelve *e-* delante de vocal: *eō, eunt*. Lo verás sobre todo en compuestos: *redeō* (volver), *exeō* (salir), *trānseō* (pasar)."
        },
        {
          t: "nota",
          x: "No confundas *eō* (voy) con *eō*, ablativo de *is* (*in eō, eō quod*); ni *īs* (vas) con *is* (él); ni *it* (va) con *id* (ello). Con *sum* se forman también *adsum* (estar presente) y *absum* (estar ausente): *adest, abest*."
        },
        {
          t: "ej",
          items: [
            ["Hoc esse nōn potest.", "Esto no puede ser."],
            ["Hominem dēfīnīre possumus, Sōcratem nōn possumus.", "Podemos definir al hombre; a Sócrates, no."],
            ["Quid facis? Logicam discō.", "¿Qué haces? Estudio lógica."],
            ["Discipulus verba magistrī nōn capit.", "El alumno no capta las palabras del maestro."],
            ["Ā genere ad speciem īmus.", "Vamos del género a la especie."],
            ["Discipulī ē scholā exeunt et domum redeunt.", "Los alumnos salen de la escuela y vuelven a casa."],
            ["Hunc terminum sīc accipiō.", "Este término lo entiendo así."],
            ["Magister adest; Titus abest.", "El maestro está presente; Tito falta."]
          ]
        }
      ],
      vocab: [
        ["capiō, capere", "tomar, coger; captar"],
        ["faciō, facere", "hacer"],
        ["concipiō, concipere", "concebir (de aquí conceptus)"],
        ["possum, posse", "poder"],
        ["Esse nōn potest.", "No puede ser."],
        ["eō, īre", "ir"],
        ["redeō, redīre", "volver"],
        ["exeō, exīre", "salir"],
        ["trānseō, trānsīre", "pasar, atravesar"],
        ["adsum, adesse", "estar presente"],
        ["absum, abesse", "estar ausente, faltar"],
        ["discō, discere", "aprender, estudiar"],
        ["sīc", "así"],
        ["Quid facis?", "¿Qué haces?"],
        ["Quō īs?", "¿Adónde vas?"]
      ],
      ejercicios: [
        { t: "mc", q: "«*possumus*» significa…", ops: ["podemos", "pueden", "ponemos"], ok: 0 },
        { t: "mc", q: "Completa: «Hominem dēfīnīre ___» (puedo)", ops: ["possum", "potest", "possunt"], ok: 0 },
        { t: "oir", x: "capiunt", ops: ["capiunt", "capiō", "capit"], ok: 0 },
        { t: "mc", q: "«*eunt*» significa…", ops: ["van", "son", "vas"], ok: 0 },
        { t: "oir", x: "potestis", ops: ["potestis", "potest", "possumus"], ok: 0 },
        { t: "mc", q: "¿En qué forma se ve que «capiō» no se conjuga como «legō»?", ops: ["capiunt", "capit", "capimus"], ok: 0 },
        { t: "orden", es: "Esto no puede ser.", x: "Hoc esse nōn potest." }
      ]
    },
    {
      id: "la3-8",
      titulo: "Definir: género, diferencia y los cinco predicables",
      min: 40,
      intro: "Tu página trata de la *dēfīnītiō*. La definición clásica une el género y la diferencia específica: *animal* + *ratiōnāle* = *homō*. Porfirio clasificó en cinco las maneras de decir algo de algo: los *quīnque praedicābilia*.",
      bloques: [
        {
          t: "p",
          x: "Definir es decir *quid est*: qué es una cosa. La definición perfecta tiene dos piezas: el **género próximo**, lo que la cosa comparte con otras (*animal*), y la **diferencia específica**, lo que la separa de ellas (*ratiōnāle*). Los escolásticos lo resumen así: *dēfīnītiō fit per genus proximum et differentiam specificam*."
        },
        {
          t: "tabla",
          cab: ["Predicable", "Qué es", "Ejemplo", "En español"],
          audio: [0, 2],
          filas: [
            ["genus", "lo común a varias especies", "animal", "animal"],
            ["speciēs", "la esencia completa de varios individuos", "homō", "hombre"],
            ["differentia", "lo que separa una especie de las otras del mismo género", "ratiōnāle", "racional"],
            ["proprium", "lo que no es la esencia, pero la acompaña siempre", "rīsibile", "capaz de reír"],
            ["accidēns", "lo que puede estar o faltar sin que la cosa deje de ser lo que es", "album", "blanco"]
          ]
        },
        {
          t: "nota",
          x: "Porfirio (s. III) escribió la *Īsagōgē*, una introducción a las *Categorías* de Aristóteles. Boecio la tradujo al latín, y durante mil años fue lo primero que leía un estudiante de lógica. Juan de Santo Tomás dedica a los predicables varias cuestiones de su *Ars logica*."
        },
        {
          t: "p",
          x: "**Lo propio** (*proprium*) se da *omnī et sōlī et semper*: en todos los de la especie, solo en ellos y siempre, aunque no sea la esencia; así, ser capaz de reír (*rīsibile*) en el hombre. **El accidente** (*accidēns*) puede estar o faltar: Sócrates está sentado o de pie, y sigue siendo hombre."
        },
        {
          t: "p",
          x: "**Indīviduum** (individuo) es Sócrates, Platón o este caballo: lo que queda debajo de la especie ínfima y ya no se divide en otros; de ahí su nombre, *in-dīviduum*, «no dividido». El individuo no se define: *Sōcratem dēfīnīre nōn possumus*."
        },
        {
          t: "ej",
          items: [
            ["Homō est animal ratiōnāle.", "El hombre es un animal racional."],
            ["Animal est genus; homō est speciēs.", "Animal es el género; hombre, la especie."],
            ["Ratiōnāle est differentia quae hominem ab aliīs animālibus distinguit.", "Racional es la diferencia que distingue al hombre de los demás animales."],
            ["Rīsibile est proprium hominis.", "Ser capaz de reír es propio del hombre."],
            ["Accidēns est quod adest et abest praeter subiectī corruptiōnem.", "Accidente es lo que está presente o ausente sin que se destruya el sujeto. (Porfirio)"],
            ["Sōcratēs est indīviduum.", "Sócrates es un individuo."],
            ["Homō et equus differunt ratiōne.", "El hombre y el caballo se diferencian por la razón."]
          ]
        },
        {
          t: "nota",
          x: "Prueba de una buena definición: dale la vuelta. «Todo hombre es animal racional» y «todo animal racional es hombre»: si las dos son verdaderas, la definición vale. *Animal bipēs* (animal de dos pies) no vale: también el gallo tiene dos pies."
        }
      ],
      vocab: [
        ["speciēs, speciēī (f.)", "especie"],
        ["proprium, propriī (n.)", "lo propio, propiedad"],
        ["accidēns, accidentis (n.)", "accidente"],
        ["indīviduum, indīviduī (n.)", "individuo"],
        ["quīnque praedicābilia", "los cinco predicables"],
        ["genus proximum", "género próximo"],
        ["differentia specifica", "diferencia específica"],
        ["per accidēns", "por accidente, no por esencia"],
        ["essentia, essentiae (f.)", "esencia"],
        ["substantia, substantiae (f.)", "sustancia"],
        ["differō, differre", "diferir, diferenciarse (irregular: differt, differunt)"],
        ["conveniō, convenīre", "convenir; darse en, corresponder a"],
        ["rīsibilis, rīsibile", "capaz de reír"],
        ["bipēs, bipedis", "bípedo"],
        ["omnī et sōlī et semper", "a todos, solo a ellos y siempre (lo propio)"]
      ],
      ejercicios: [
        { t: "mc", q: "En «*Homō est animal ratiōnāle*», «animal» es…", ops: ["el género", "la diferencia", "un accidente"], ok: 0 },
        { t: "mc", q: "Ser capaz de reír (*rīsibile*) es, para el hombre…", ops: ["un propio (proprium)", "su género", "un accidente"], ok: 0 },
        { t: "mc", q: "Estar sentado, para Sócrates, es…", ops: ["un accidente", "su especie", "su diferencia"], ok: 0 },
        { t: "mc", q: "¿Cuál de estos es un *indīviduum*?", ops: ["Platō", "homō", "animal"], ok: 0 },
        { t: "oir", x: "speciēs", ops: ["speciēs", "speciem", "speciē"], ok: 0 },
        {
          t: "mc",
          q: "¿Por qué «animal bípedo» es una mala definición del hombre?",
          ops: ["No vale solo para el hombre: el gallo también es bípedo", "Le falta el genitivo", "Es demasiado corta"],
          ok: 0
        },
        { t: "orden", es: "Animal es el género; hombre, la especie.", x: "Animal est genus; homō est speciēs." }
      ]
    }
  ],
  lecturas: [
    {
      id: "la3-r1",
      titulo: "Homō est animal ratiōnāle",
      nivel: "Inicial",
      texto: "Quid est homō? Philosophī respondent: «Homō est animal ratiōnāle.» Haec dēfīnītiō duās partēs habet.\n\nPrīma pars, «animal», genus est. Homō enim animal est, sīcut equus, leō et canis. Sed nec equus nec leō nec canis ratiōnem habet.\n\nSecunda pars, «ratiōnāle», differentia est. Ratiō enim hominem ab aliīs animālibus distinguit. Genus commūne est hominī et equō; differentia propria est hominis.\n\nItaque bona dēfīnītiō genus et differentiam continet. Eam facile probāmus: omnis homō est animal ratiōnāle, et omne animal ratiōnāle est homō. Dēfīnītiō et dēfīnītum idem significant.",
      traduccion: "¿Qué es el hombre? Los filósofos responden: «El hombre es un animal racional». Esta definición tiene dos partes.\n\nLa primera parte, «animal», es el género. Porque el hombre es un animal, igual que el caballo, el león y el perro. Pero ni el caballo ni el león ni el perro tienen razón.\n\nLa segunda parte, «racional», es la diferencia. Porque la razón distingue al hombre de los demás animales. El género es común al hombre y al caballo; la diferencia es propia del hombre.\n\nAsí pues, una buena definición contiene el género y la diferencia. Es fácil comprobarla: todo hombre es animal racional, y todo animal racional es hombre. La definición y lo definido significan lo mismo.",
      glosa: {
        quid: "qué",
        est: "es",
        "homō": "el hombre, el ser humano",
        "philosophī": "los filósofos",
        respondent: "responden (de respondeō, 2.ª)",
        animal: "animal (neutro de la 3.ª)",
        "ratiōnāle": "racional (neutro de ratiōnālis: concuerda con animal)",
        haec: "esta (femenino de hic)",
        "dēfīnītiō": "definición",
        "duās": "dos (acusativo femenino)",
        "partēs": "partes (acusativo plural de pars)",
        habet: "tiene",
        "prīma": "primera",
        pars: "parte",
        genus: "el género (neutro de la 3.ª)",
        enim: "pues, porque (va en segundo lugar)",
        "sīcut": "igual que, como",
        equus: "el caballo",
        "leō": "el león (leō, leōnis)",
        et: "y",
        canis: "el perro",
        sed: "pero",
        nec: "ni («nec… nec…» = ni… ni…)",
        "ratiōnem": "razón (acusativo de ratiō)",
        secunda: "segunda",
        differentia: "la diferencia",
        "ratiō": "la razón",
        hominem: "al hombre (acusativo de homō)",
        ab: "de (+ ablativo: separación)",
        "aliīs": "los demás, otros (ablativo plural de alius)",
        "animālibus": "animales (ablativo plural de animal)",
        distinguit: "distingue, separa",
        "commūne": "común (neutro: concuerda con genus)",
        "hominī": "al hombre (dativo de homō)",
        "equō": "al caballo (dativo)",
        propria: "propia («propria hominis» = propia del hombre)",
        hominis: "del hombre (genitivo de homō)",
        itaque: "así pues, por tanto",
        bona: "buena",
        differentiam: "la diferencia (acusativo)",
        continet: "contiene",
        eam: "la (acusativo femenino de is: la definición)",
        facile: "fácilmente (neutro de facilis usado como adverbio)",
        "probāmus": "comprobamos (de probō, 1.ª)",
        omnis: "todo (masculino)",
        omne: "todo (neutro: concuerda con animal)",
        "dēfīnītum": "lo definido",
        idem: "lo mismo (neutro de īdem)",
        significant: "significan"
      },
      preguntas: [
        { q: "En la definición «animal racional», ¿qué parte es el género?", ops: ["animal", "racional", "hombre"], ok: 0 },
        { q: "¿Qué distingue al hombre de los demás animales?", ops: ["La razón", "El cuerpo", "Tener dos pies"], ok: 0 },
        {
          q: "¿Cómo se comprueba la definición?",
          ops: ["Dándole la vuelta: todo animal racional es hombre", "Preguntando a un filósofo", "Contando sus palabras"],
          ok: 0
        }
      ]
    },
    {
      id: "la3-r2",
      titulo: "Genus et speciēs",
      nivel: "Inicial",
      texto: "Sōcratēs et Platō hominēs sunt; Būcephalus equus est. Omnēs animālia sunt.\n\nSōcratēs indīviduum est: ūnus homō, nōn multī. Homō speciēs est: Sōcratem, Platōnem et omnēs hominēs continet. Animal genus est: hominem, equum, leōnem et multās aliās speciēs continet.\n\nGenus dē speciē praedicāmus: «Homō est animal.» Speciem dē indīviduō praedicāmus: «Sōcratēs est homō.» Nōmen autem indīviduī ūnī sōlī convenit.\n\nPorphyrius quīnque praedicābilia numerat: genus, speciem, differentiam, proprium, accidēns. Differentia speciem ab aliā speciē distinguit: homō ratiōnem habet, equus nōn habet. Proprium convenit omnī et sōlī et semper: omnis homō, et sōlus homō, rīdēre potest. Accidēns adest et abest: Sōcratēs nunc sedet, nunc ambulat, sed semper homō est.",
      traduccion: "Sócrates y Platón son hombres; Bucéfalo es un caballo. Todos son animales.\n\nSócrates es un individuo: un solo hombre, no muchos. Hombre es una especie: contiene a Sócrates, a Platón y a todos los hombres. Animal es un género: contiene al hombre, al caballo, al león y otras muchas especies.\n\nEl género lo predicamos de la especie: «El hombre es animal». La especie la predicamos del individuo: «Sócrates es hombre». En cambio, el nombre del individuo conviene a uno solo.\n\nPorfirio enumera cinco predicables: género, especie, diferencia, propio y accidente. La diferencia distingue una especie de otra: el hombre tiene razón; el caballo, no. Lo propio conviene a todos, solo a ellos y siempre: todo hombre, y solo el hombre, puede reír. El accidente está o falta: Sócrates unas veces está sentado y otras pasea, pero siempre es hombre.",
      glosa: {
        "sōcratēs": "Sócrates (nombre)",
        et: "y",
        "platō": "Platón (nombre)",
        "hominēs": "hombres (plural de homō)",
        sunt: "son",
        "būcephalus": "Bucéfalo (el caballo de Alejandro Magno)",
        equus: "caballo",
        est: "es",
        "omnēs": "todos (plural de omnis)",
        "animālia": "animales (plural de animal)",
        "indīviduum": "individuo",
        "ūnus": "uno solo",
        "homō": "hombre",
        "nōn": "no",
        "multī": "muchos",
        "speciēs": "especie (también acusativo plural: especies)",
        "sōcratem": "a Sócrates (acusativo)",
        "platōnem": "a Platón (acusativo de Platō, Platōnis)",
        continet: "contiene",
        animal: "animal",
        genus: "género",
        hominem: "al hombre (acusativo)",
        equum: "al caballo (acusativo)",
        "leōnem": "al león (acusativo de leō, leōnis)",
        "multās": "muchas (acusativo femenino plural)",
        "aliās": "otras (acusativo femenino plural de alius)",
        "dē": "de, acerca de (+ ablativo)",
        "speciē": "especie (ablativo)",
        "praedicāmus": "predicamos, decimos (de praedicō, 1.ª)",
        speciem: "la especie (acusativo de speciēs)",
        "indīviduō": "individuo (ablativo)",
        "nōmen": "el nombre",
        autem: "en cambio, pero (va en segundo lugar)",
        "indīviduī": "del individuo (genitivo)",
        "ūnī": "a uno (dativo de ūnus)",
        "sōlī": "solo (dativo de sōlus: «ūnī sōlī» = a uno solo)",
        convenit: "conviene, se aplica (de conveniō, 4.ª)",
        porphyrius: "Porfirio (nombre)",
        "quīnque": "cinco",
        "praedicābilia": "predicables (neutro plural de praedicābile)",
        numerat: "enumera, cuenta",
        differentiam: "la diferencia (acusativo)",
        proprium: "lo propio",
        "accidēns": "el accidente",
        differentia: "la diferencia",
        ab: "de (+ ablativo)",
        "aliā": "otra (ablativo femenino de alius)",
        distinguit: "distingue",
        "ratiōnem": "razón (acusativo)",
        habet: "tiene",
        "omnī": "a todo, a todos (dativo de omnis)",
        semper: "siempre",
        omnis: "todo",
        "sōlus": "solo, únicamente",
        "rīdēre": "reír (infinitivo)",
        potest: "puede (de possum)",
        adest: "está presente (de adsum)",
        abest: "está ausente, falta (de absum)",
        nunc: "ahora («nunc… nunc…» = unas veces… otras…)",
        sedet: "está sentado (de sedeō)",
        ambulat: "pasea, camina",
        sed: "pero"
      },
      preguntas: [
        { q: "¿Qué es Sócrates, según el texto?", ops: ["Un individuo", "Una especie", "Un género"], ok: 0 },
        { q: "¿Qué contiene el género «animal»?", ops: ["Muchas especies: hombre, caballo, león…", "Solo a Sócrates y a Platón", "Solo al hombre"], ok: 0 },
        { q: "¿Qué ejemplo de accidente da el texto?", ops: ["Estar sentado o pasear", "Poder reír", "Tener razón"], ok: 0 }
      ]
    },
    {
      id: "la3-r3",
      titulo: "Arbor Porphyriāna",
      nivel: "Intermedio",
      texto: "Logicī arborem pingunt quae ā Porphyriō nōmen habet. Haec arbor nōn in hortō crēscit, sed in librīs.\n\nIn summā arbore est substantia, genus generālissimum: suprā eam nūllum genus est. Substantia aut corporea est aut incorporea. Substantia corporea est corpus. Corpus aut animātum est aut inanimātum: lapis inanimātus est, planta animāta. Corpus animātum est vīvēns. Vīvēns aut sēnsibile est aut īnsēnsibile: planta nōn sentit, animal sentit. Animal aut ratiōnāle est aut irratiōnāle. Animal ratiōnāle est homō.\n\nHomō est speciēs speciālissima: sub eā nūlla alia speciēs est, sed sōla indīvidua, ut Sōcratēs et Platō. Corpus, vīvēns et animal sunt genera subalterna: eadem et genera et speciēs sunt. Animal enim speciēs est vīventis et genus hominis.\n\nSīc ā summō ad īmum dēscendimus, et ab īmō ad summum ascendimus. Itaque dēfīnītiō hominis tōtam arborem continet: homō est substantia corporea, animāta, sēnsibilis, ratiōnālis.",
      traduccion: "Los lógicos dibujan un árbol que toma su nombre de Porfirio. Este árbol no crece en un huerto, sino en los libros.\n\nEn lo alto del árbol está la sustancia, el género supremo: por encima de ella no hay ningún género. La sustancia es o corpórea o incorpórea. La sustancia corpórea es el cuerpo. El cuerpo es o animado o inanimado: la piedra es inanimada; la planta, animada. El cuerpo animado es el viviente. El viviente es o sensible o insensible: la planta no siente; el animal, sí. El animal es o racional o irracional. El animal racional es el hombre.\n\nEl hombre es la especie ínfima: por debajo de ella no hay ninguna otra especie, sino solo individuos, como Sócrates y Platón. Cuerpo, viviente y animal son géneros subalternos: son a la vez géneros y especies. Porque el animal es especie del viviente y género del hombre.\n\nAsí bajamos de lo más alto a lo más bajo, y subimos de lo más bajo a lo más alto. Por eso la definición del hombre contiene el árbol entero: el hombre es una sustancia corpórea, animada, sensible y racional.",
      notas: "El árbol se dibujaba de arriba abajo: *substantia → corpus → vīvēns → animal → homō → Sōcratēs, Platō*, con las diferencias que dividen cada género a los lados (*corporea / incorporea, animātum / inanimātum, sēnsibile / īnsēnsibile, ratiōnāle / irratiōnāle*). *Genus generālissimum* es el género supremo; *speciēs speciālissima*, la especie ínfima.",
      glosa: {
        "logicī": "los lógicos",
        arborem: "un árbol (acusativo de arbor, arboris, femenino)",
        pingunt: "pintan, dibujan",
        quae: "que (relativo femenino: se refiere a arbor)",
        "ā": "de (+ ablativo)",
        "porphyriō": "Porfirio (ablativo)",
        "nōmen": "nombre",
        habet: "tiene («ā Porphyriō nōmen habet» = toma su nombre de Porfirio)",
        haec: "este (femenino de hic)",
        arbor: "árbol (femenino)",
        "nōn": "no",
        in: "en (+ ablativo)",
        "hortō": "huerto, jardín (ablativo)",
        "crēscit": "crece",
        sed: "sino, pero",
        "librīs": "libros (ablativo plural)",
        "summā": "lo más alto de (ablativo de summus: «in summā arbore» = en lo alto del árbol)",
        arbore: "árbol (ablativo)",
        est: "es, está",
        substantia: "la sustancia",
        genus: "género",
        "generālissimum": "generalísimo, supremo",
        "suprā": "por encima de (+ acusativo)",
        eam: "ella (acusativo de ea: la sustancia)",
        "nūllum": "ningún (neutro)",
        aut: "o («aut… aut…» = o… o…)",
        corporea: "corpórea",
        incorporea: "incorpórea",
        corpus: "cuerpo",
        "animātum": "animado, con vida",
        "inanimātum": "inanimado, sin vida",
        lapis: "la piedra",
        "inanimātus": "inanimado (masculino: concuerda con lapis)",
        planta: "la planta",
        "animāta": "animada (femenino: concuerda con planta)",
        "vīvēns": "viviente, ser vivo (participio de vīvō)",
        "sēnsibile": "sensible, capaz de sentir (neutro)",
        "īnsēnsibile": "insensible, sin sentidos (neutro)",
        sentit: "siente",
        animal: "animal",
        "ratiōnāle": "racional",
        "irratiōnāle": "irracional",
        "homō": "el hombre",
        "speciēs": "especie",
        "speciālissima": "especialísima: la especie ínfima",
        sub: "debajo de (+ ablativo)",
        "eā": "ella (ablativo de ea: la especie)",
        "nūlla": "ninguna",
        alia: "otra",
        "sōla": "solo, únicamente (neutro plural, con indīvidua)",
        "indīvidua": "individuos (plural de indīviduum)",
        ut: "como, por ejemplo",
        "sōcratēs": "Sócrates (nombre)",
        et: "y",
        "platō": "Platón (nombre)",
        sunt: "son",
        genera: "géneros (plural de genus)",
        subalterna: "subalternos: intermedios",
        eadem: "los mismos (neutro plural de īdem)",
        enim: "pues, porque",
        "vīventis": "del viviente (genitivo de vīvēns)",
        hominis: "del hombre (genitivo)",
        "sīc": "así",
        "summō": "lo más alto (ablativo de summum)",
        ad: "a, hacia (+ acusativo)",
        "īmum": "lo más bajo (acusativo)",
        "dēscendimus": "bajamos",
        ab: "desde (+ ablativo)",
        "īmō": "lo más bajo (ablativo)",
        summum: "lo más alto (acusativo)",
        ascendimus: "subimos",
        itaque: "por eso, así pues",
        "dēfīnītiō": "la definición",
        "tōtam": "entero (acusativo femenino de tōtus)",
        continet: "contiene",
        "sēnsibilis": "sensible (femenino: concuerda con substantia)",
        "ratiōnālis": "racional (femenino: concuerda con substantia)"
      },
      preguntas: [
        { q: "¿Qué hay en lo más alto del árbol?", ops: ["La sustancia, el género supremo", "El hombre", "Sócrates y Platón"], ok: 0 },
        { q: "¿Qué hay debajo de la especie «hombre»?", ops: ["Solo individuos, como Sócrates y Platón", "Otras especies", "El animal"], ok: 0 },
        {
          q: "¿Por qué «animal» es un género subalterno?",
          ops: ["Es especie del viviente y género del hombre", "Porque no siente", "Porque está en lo más alto"],
          ok: 0
        }
      ]
    },
    {
      id: "la3-r4",
      titulo: "Dē partibus ōrātiōnis",
      nivel: "Intermedio",
      texto: "Magister: «Partēs ōrātiōnis quot sunt?»\nDiscipulus: «Octō.»\nMagister: «Quae?»\nDiscipulus: «Nōmen, prōnōmen, verbum, adverbium, participium, coniūnctiō, praepositiō, interiectiō.»\nMagister: «Nōmen quid est?»\nDiscipulus: «Pars ōrātiōnis cum cāsū, quae corpus aut rem significat, ut homō, lapis, ars.»\nMagister: «Nōminī accidunt quot?»\nDiscipulus: «Sex: quālitās, comparātiō, genus, numerus, figūra, cāsus.»\nMagister: «Prōnōmen quid est?»\nDiscipulus: «Pars ōrātiōnis quae locum nōminis tenet, ut ego, tū, ille.»\nMagister: «Verbum quid est?»\nDiscipulus: «Pars ōrātiōnis cum tempore et persōnā, sine cāsū, ut legō, legis, legit.»\n\nHaec Dōnātus in Arte minōre docet, et omnēs puerī ea memoriā tenent. Grammaticī octō partēs ōrātiōnis numerant; logicī, ut Aristotelēs, duās tantum: nōmen et verbum.",
      traduccion: "Maestro: «¿Cuántas son las partes de la oración?»\nAlumno: «Ocho».\nMaestro: «¿Cuáles?»\nAlumno: «Nombre, pronombre, verbo, adverbio, participio, conjunción, preposición, interjección».\nMaestro: «¿Qué es el nombre?»\nAlumno: «La parte de la oración con caso que significa un cuerpo o una cosa, como hombre, piedra, arte».\nMaestro: «¿Cuántas propiedades tiene el nombre?»\nAlumno: «Seis: cualidad, comparación, género, número, figura y caso».\nMaestro: «¿Qué es el pronombre?»\nAlumno: «La parte de la oración que ocupa el lugar del nombre, como yo, tú, aquel».\nMaestro: «¿Qué es el verbo?»\nAlumno: «La parte de la oración con tiempo y persona, sin caso, como leo, lees, lee».\n\nEsto enseña Donato en el Arte menor, y todos los niños se lo saben de memoria. Los gramáticos cuentan ocho partes de la oración; los lógicos, como Aristóteles, solo dos: el nombre y el verbo.",
      notas: "Adaptado del *Ars minor* de Elio Donato (s. IV), la gramática con la que aprendían latín los niños de toda la Edad Media, en preguntas y respuestas para aprender de memoria. Las preguntas y las listas son las de Donato; las definiciones están simplificadas. Fíjate en *accidunt* («le acontecen»): las propiedades del nombre son sus «accidentes», la misma palabra que el *accidēns* de Porfirio. Y en gramática *genus* es el género: masculino, femenino o neutro.",
      glosa: {
        magister: "maestro",
        "partēs": "partes (plural de pars)",
        "ōrātiōnis": "de la oración (genitivo de ōrātiō)",
        quot: "¿cuántos?, ¿cuántas?",
        sunt: "son",
        discipulus: "alumno",
        "octō": "ocho",
        quae: "¿cuáles? (en la pregunta); que (relativo femenino)",
        "nōmen": "nombre, sustantivo",
        "prōnōmen": "pronombre",
        verbum: "verbo",
        adverbium: "adverbio",
        participium: "participio",
        "coniūnctiō": "conjunción",
        "praepositiō": "preposición",
        "interiectiō": "interjección",
        quid: "qué",
        est: "es",
        pars: "parte",
        cum: "con (+ ablativo)",
        "cāsū": "caso (ablativo de cāsus)",
        corpus: "cuerpo",
        aut: "o",
        rem: "cosa (acusativo de rēs)",
        significat: "significa",
        ut: "como, por ejemplo",
        "homō": "hombre",
        lapis: "piedra",
        ars: "arte",
        "nōminī": "al nombre (dativo de nōmen)",
        accidunt: "le acontecen, le corresponden (de accidō; de aquí accidēns)",
        sex: "seis",
        "quālitās": "cualidad (si es nombre propio o común)",
        "comparātiō": "comparación (grados del adjetivo)",
        genus: "género (masculino, femenino, neutro)",
        numerus: "número (singular, plural)",
        "figūra": "figura (simple o compuesto)",
        "cāsus": "caso",
        locum: "el lugar (acusativo de locus)",
        "nōminis": "del nombre (genitivo de nōmen)",
        tenet: "ocupa, tiene (de teneō)",
        ego: "yo",
        "tū": "tú",
        ille: "aquel, él",
        tempore: "tiempo (ablativo de tempus)",
        et: "y",
        "persōnā": "persona (ablativo)",
        sine: "sin (+ ablativo)",
        "legō": "leo",
        legis: "lees",
        legit: "lee",
        haec: "estas cosas (neutro plural de hic)",
        "dōnātus": "Donato (gramático romano, s. IV)",
        in: "en (+ ablativo)",
        arte: "arte (ablativo de ars: el «Ars minor», su gramática breve)",
        "minōre": "menor (ablativo de minor)",
        docet: "enseña",
        "omnēs": "todos",
        "puerī": "los niños",
        ea: "estas cosas, las (acusativo neutro plural de is)",
        "memoriā": "memoria (ablativo: «memoriā tenent» = saben de memoria)",
        tenent: "tienen, retienen",
        "grammaticī": "los gramáticos",
        numerant: "cuentan, enumeran",
        "logicī": "los lógicos",
        "aristotelēs": "Aristóteles (nombre)",
        "duās": "dos (acusativo femenino)",
        tantum: "solamente"
      },
      preguntas: [
        { q: "¿Cuántas partes de la oración enumera el alumno?", ops: ["Ocho", "Dos", "Seis"], ok: 0 },
        { q: "¿Qué tiene el verbo que no tiene el nombre?", ops: ["Tiempo y persona", "Caso", "Género"], ok: 0 },
        {
          q: "Para los lógicos, ¿cuáles son las partes de la oración?",
          ops: ["Solo el nombre y el verbo", "Las ocho de Donato", "El pronombre y el adverbio"],
          ok: 0
        }
      ]
    },
    {
      id: "la3-r5",
      titulo: "«Quid est…?»",
      nivel: "Intermedio",
      texto: "Magister: «Hodiē dēfīnītiōnēs quaerimus. Mārce, quid est homō?»\nMārcus: «Homō est animal bipēs, magister.»\nMagister: «Etiam gallus bipēs est. Estne gallus homō?»\nMārcus: «Minimē!»\nMagister: «Audī fābulam. Platō hominem sīc dēfīnit: “animal bipēs implūme”. Diogenēs gallum capit, plūmās eius ēvellit, in scholam Platōnis venit et clāmat: “Ecce homō Platōnis!”»\nDiscipulī rīdent.\nMagister: «Bona dēfīnītiō omnī et sōlī dēfīnītō convenit. Tite, quid tū dīcis?»\nTitus: «Homō est animal quod rīdet.»\nMagister: «Rīdēre proprium hominis est, nōn essentia. Quis genus et differentiam dat?»\nMārcus: «Homō est animal ratiōnāle!»\nMagister: «Optimē. Nunc tū, Tite: quid est triangulum?»\nTitus: «Triangulum est figūra quae trēs angulōs habet.»\nMagister: «Rēctē. Et quid est somnus?»\nTitus: «Somnus est id quod discipulī in scholā quaerunt!»",
      traduccion: "Maestro: «Hoy buscamos definiciones. Marco, ¿qué es el hombre?»\nMarco: «El hombre es un animal bípedo, maestro».\nMaestro: «También el gallo es bípedo. ¿Es el gallo un hombre?»\nMarco: «¡De ninguna manera!»\nMaestro: «Escucha una historia. Platón define así al hombre: “animal bípedo sin plumas”. Diógenes coge un gallo, le arranca las plumas, entra en la escuela de Platón y grita: “¡Aquí tenéis al hombre de Platón!”»\nLos alumnos se ríen.\nMaestro: «Una buena definición conviene a todo lo definido y solo a lo definido. Tito, ¿tú qué dices?»\nTito: «El hombre es un animal que ríe».\nMaestro: «Reír es propio del hombre, pero no es su esencia. ¿Quién da el género y la diferencia?»\nMarco: «¡El hombre es un animal racional!»\nMaestro: «Muy bien. Ahora tú, Tito: ¿qué es un triángulo?»\nTito: «Un triángulo es una figura que tiene tres ángulos».\nMaestro: «Correcto. ¿Y qué es el sueño?»\nTito: «¡El sueño es lo que buscan los alumnos en la escuela!»",
      notas: "La anécdota la cuenta Diógenes Laercio (*Vidas de los filósofos*, VI, 40), que añade que después completaron la definición con «de uñas anchas». *Omnī et sōlī dēfīnītō convenit* es la regla de oro: la definición vale para todo lo definido y solo para ello, igual que lo propio.",
      glosa: {
        magister: "maestro (también vocativo)",
        "hodiē": "hoy",
        "dēfīnītiōnēs": "definiciones (acusativo plural)",
        quaerimus: "buscamos",
        "mārce": "¡Marco! (vocativo de Mārcus)",
        quid: "qué",
        est: "es",
        "homō": "el hombre",
        "mārcus": "Marco (nombre)",
        animal: "animal",
        "bipēs": "bípedo, de dos pies",
        etiam: "también, incluso",
        gallus: "el gallo",
        estne: "¿es? (est + -ne)",
        "minimē": "de ninguna manera, en absoluto",
        "audī": "escucha (imperativo de audiō)",
        "fābulam": "una historia (acusativo de fābula)",
        "platō": "Platón (nombre)",
        hominem: "al hombre (acusativo)",
        "sīc": "así",
        "dēfīnit": "define",
        "implūme": "sin plumas (neutro de implūmis: concuerda con animal)",
        "diogenēs": "Diógenes (el filósofo cínico)",
        gallum: "un gallo (acusativo)",
        capit: "coge, toma",
        "plūmās": "las plumas (acusativo plural)",
        eius: "su, de él (del gallo)",
        "ēvellit": "arranca (de ēvellō)",
        in: "en; a (+ acusativo: dirección)",
        scholam: "a la escuela (acusativo)",
        "platōnis": "de Platón (genitivo)",
        venit: "llega, viene",
        et: "y",
        "clāmat": "grita",
        ecce: "¡aquí está!, ¡mirad!",
        "discipulī": "los alumnos",
        "rīdent": "se ríen",
        bona: "buena",
        "dēfīnītiō": "definición",
        "omnī": "a todo (dativo de omnis)",
        "sōlī": "solo (dativo de sōlus)",
        "dēfīnītō": "a lo definido (dativo de dēfīnītum)",
        convenit: "conviene, se aplica",
        tite: "¡Tito! (vocativo de Titus)",
        "tū": "tú",
        "dīcis": "dices",
        titus: "Tito (nombre)",
        quod: "que (relativo neutro: se refiere a animal)",
        "rīdet": "ríe",
        "rīdēre": "reír (infinitivo)",
        proprium: "lo propio",
        hominis: "del hombre (genitivo)",
        "nōn": "no",
        essentia: "esencia",
        quis: "quién",
        genus: "el género",
        differentiam: "la diferencia (acusativo)",
        dat: "da",
        "ratiōnāle": "racional",
        "optimē": "muy bien",
        nunc: "ahora",
        triangulum: "triángulo",
        "figūra": "figura",
        quae: "que (relativo femenino: se refiere a figūra)",
        "trēs": "tres",
        "angulōs": "ángulos (acusativo plural)",
        habet: "tiene",
        "rēctē": "bien, correctamente",
        somnus: "el sueño (el dormir)",
        id: "lo («id quod» = lo que)",
        "scholā": "la escuela (ablativo)",
        quaerunt: "buscan"
      },
      preguntas: [
        {
          q: "¿Por qué no vale la definición de Marco, «animal bípedo»?",
          ops: ["Porque también el gallo es bípedo", "Porque el hombre no es un animal", "Porque le falta un verbo"],
          ok: 0
        },
        { q: "¿Qué lleva Diógenes a la escuela de Platón?", ops: ["Un gallo desplumado", "Un libro", "Una piedra"], ok: 0 },
        { q: "Para el maestro, «reír» es…", ops: ["propio del hombre, pero no su esencia", "la esencia del hombre", "un accidente del gallo"], ok: 0 }
      ]
    }
  ]
});
