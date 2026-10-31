// Glossa · latín · semana 4: Pasiva, infinitivo y «dicitur quod»
window.CONTENT.la.semanas.push({
  n: 4,
  lecciones: [
    {
      id: "la4-1",
      titulo: "La pasiva (I): -tur y -ntur",
      min: 35,
      intro: "En tu página casi nada «hace» algo: el término «se define», el predicado «se predica», una palabra «se dice» de otra. Es la voz pasiva, y se reconoce por la *-r* final: *significat* (significa) → *significātur* (es significado, se significa).",
      bloques: [
        {
          t: "p",
          x: "La **activa** dice quién hace la acción: *Magister discipulōs docet* (el maestro enseña a los alumnos). La **pasiva** convierte en sujeto a quien la recibe: *Discipulī ā magistrō docentur* (los alumnos son enseñados por el maestro). En presente basta con cambiar la terminación: *-t* → *-tur* y *-nt* → *-ntur*."
        },
        {
          t: "tabla",
          cab: ["Persona", "Activa", "Pasiva", "Español (pasiva)"],
          audio: [1, 2],
          filas: [
            ["yo", "amō", "amor", "soy amado"],
            ["tú", "amās", "amāris", "eres amado"],
            ["él, ella", "amat", "amātur", "es amado"],
            ["nosotros", "amāmus", "amāmur", "somos amados"],
            ["vosotros", "amātis", "amāminī", "sois amados"],
            ["ellos, ellas", "amant", "amantur", "son amados"]
          ]
        },
        {
          t: "p",
          x: "En los libros de lógica casi todo va en 3.ª persona: fíjate sobre todo en *-tur* (singular) y *-ntur* (plural). Estos verbos de la 1.ª y la 2.ª conjugación los verás en cada página:"
        },
        {
          t: "tabla",
          cab: ["Activa", "Pasiva", "Pasiva plural", "Español"],
          audio: [0, 1, 2],
          filas: [
            ["significat", "significātur", "significantur", "se significa, es significado"],
            ["praedicat", "praedicātur", "praedicantur", "se predica"],
            ["vocat", "vocātur", "vocantur", "se llama, es llamado"],
            ["appellat", "appellātur", "appellantur", "se denomina"],
            ["dēmōnstrat", "dēmōnstrātur", "dēmōnstrantur", "se demuestra"],
            ["explicat", "explicātur", "explicantur", "se explica"],
            ["cōnsīderat", "cōnsīderātur", "cōnsīderantur", "se considera"],
            ["docet", "docētur", "docentur", "se enseña"],
            ["continet", "continētur", "continentur", "se contiene"],
            ["videt", "vidētur", "videntur", "es visto; parece"]
          ]
        },
        {
          t: "p",
          x: "Para decir **por quién**, usa *ā* (ante consonante) o *ab* (ante vocal) + ablativo: *ā magistrō* (por el maestro), *ā logicīs* (por los lógicos), *ab Aristotele* (por Aristóteles). Es el **agente**. Muchas veces suena mejor pasar la frase a activa: *Hoc ā magistrō explicātur* = «esto lo explica el maestro»."
        },
        {
          t: "nota",
          x: "En español solemos traducir la pasiva latina con «se»: *Logica docētur* = «se enseña lógica». Y ojo con *vidētur*: con agente es «es visto», pero casi siempre significa **«parece»**: *Haec sententia mihi vēra vidētur* (esta opinión me parece verdadera)."
        },
        {
          t: "ej",
          items: [
            ["Sapientia ā philosophō amātur.", "La sabiduría es amada por el filósofo."],
            ["Discipulī ā magistrō docentur.", "Los alumnos son enseñados por el maestro."],
            ["Logica in scholā docētur.", "En la escuela se enseña lógica."],
            ["Praedicātum dē subiectō praedicātur.", "El predicado se predica del sujeto."],
            ["Quid hōc nōmine significātur?", "¿Qué se significa con este nombre?"],
            ["Hoc ab Aristotele dēmōnstrātur.", "Esto lo demuestra Aristóteles."],
            ["Hoc ā magistrō explicātur.", "Esto lo explica el maestro."],
            ["Haec sententia mihi vēra vidētur.", "Esta opinión me parece verdadera."],
            ["Quōmodo vocāris? — Alvarus vocor.", "¿Cómo te llamas? — Me llamo Álvaro."]
          ]
        }
      ],
      vocab: [
        ["significātur", "se significa, es significado"],
        ["praedicātur dē…", "se predica de… (+ ablativo)"],
        ["vocātur", "se llama, es llamado"],
        ["appellātur", "se denomina, recibe el nombre de"],
        ["Quōmodo vocāris?", "¿Cómo te llamas?"],
        ["Alvarus vocor.", "Me llamo Álvaro."],
        ["docētur", "se enseña, es enseñado"],
        ["continētur", "se contiene, está contenido"],
        ["dēmōnstrātur", "se demuestra"],
        ["explicātur", "se explica"],
        ["cōnsīderātur", "se considera"],
        ["mihi vidētur", "me parece"],
        ["ā magistrō", "por el maestro (agente: ā + ablativo)"],
        ["ab Aristotele", "por Aristóteles (ab, ante vocal)"]
      ],
      ejercicios: [
        { t: "mc", q: "«Significātur» significa…", ops: ["se significa, es significado", "significa", "significan"], ok: 0 },
        {
          t: "mc",
          q: "Pasa a pasiva: *Magister discipulōs docet.*",
          ops: ["Discipulī ā magistrō docentur.", "Discipulōs ā magistrō docet.", "Magister ā discipulīs docētur."],
          ok: 0
        },
        {
          t: "mc",
          q: "¿Por qué se dice *ab Aristotele* y no *ā Aristotele*?",
          ops: ["Porque «Aristotele» empieza por vocal", "Porque es un nombre propio", "Porque está en plural"],
          ok: 0
        },
        {
          t: "mc",
          q: "*Haec sententia mihi vēra vidētur* significa…",
          ops: ["Esta opinión me parece verdadera.", "Esta opinión ve la verdad.", "Veo que esta opinión es mía."],
          ok: 0
        },
        { t: "oir", x: "praedicantur", ops: ["praedicantur", "praedicātur", "praedicant"], ok: 0 },
        { t: "oir", x: "docētur", ops: ["docētur", "docentur", "docet"], ok: 0 },
        { t: "orden", es: "La lógica se enseña en la escuela.", x: "Logica in scholā docētur." },
        { t: "orden", es: "La sabiduría es amada por el filósofo.", x: "Sapientia ā philosophō amātur." }
      ]
    },
    {
      id: "la4-2",
      titulo: "La pasiva (II): dīcitur, compōnitur, dēfīnītur",
      min: 40,
      intro: "Hoy completas la pasiva con la 3.ª y la 4.ª conjugación. Son las formas más repetidas de la lógica: *dīcitur* (se dice), *compōnitur* (se compone), *intellegitur* (se entiende), *dēfīnītur* (se define).",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "3.ª: legō", "4.ª: audiō", "Español"],
          audio: [1, 2],
          filas: [
            ["yo", "legor", "audior", "soy leído / soy oído"],
            ["tú", "legeris", "audīris", "eres leído / oído"],
            ["él, ella", "legitur", "audītur", "es leído / oído"],
            ["nosotros", "legimur", "audīmur", "somos leídos / oídos"],
            ["vosotros", "legiminī", "audīminī", "sois leídos / oídos"],
            ["ellos, ellas", "leguntur", "audiuntur", "son leídos / oídos"]
          ]
        },
        {
          t: "p",
          x: "En la 3.ª la vocal cambia como en la activa: *legit* → *legitur*, *legunt* → *leguntur*; y «tú» es *legeris*, con *e*. En la 4.ª la *ī* es larga: *audītur*, *dēfīnītur*. Los verbos en *-iō* de la 3.ª (*accipiō*, *cōnficiō*) hacen *accipitur* / *accipiuntur*, *cōnficitur* / *cōnficiuntur*."
        },
        {
          t: "tabla",
          cab: ["Activa", "Pasiva", "Pasiva plural", "Español"],
          audio: [0, 1, 2],
          filas: [
            ["dīcit", "dīcitur", "dīcuntur", "se dice; se llama"],
            ["compōnit", "compōnitur", "compōnuntur", "se compone"],
            ["intellegit", "intellegitur", "intelleguntur", "se entiende"],
            ["dīvidit", "dīviditur", "dīviduntur", "se divide"],
            ["cognōscit", "cognōscitur", "cognōscuntur", "se conoce"],
            ["sūmit", "sūmitur", "sūmuntur", "se toma"],
            ["accipit", "accipitur", "accipiuntur", "se toma, se entiende"],
            ["dēfīnit", "dēfīnītur", "dēfīniuntur", "se define"],
            ["scit", "scītur", "sciuntur", "se sabe"]
          ]
        },
        {
          t: "p",
          x: "*Dīcitur* tiene dos sentidos. Solo, «se dice»: *Hoc ab omnibus dīcitur* (esto lo dice todo el mundo). Con un nombre o un adjetivo en nominativo, «se llama»: *Haec prōpositiō vēra dīcitur* (esta proposición se llama verdadera). Igual funcionan *vocātur* y *appellātur*."
        },
        {
          t: "nota",
          x: "¿Persona o cosa? El agente, que es una persona, lleva *ā/ab*: *ā logicīs dēfīnītur* (lo definen los lógicos). El medio o instrumento, que es una cosa, va en ablativo **sin** preposición: *verbīs explicātur* (se explica con palabras), *oculīs vidētur* (se ve con los ojos)."
        },
        {
          t: "ej",
          items: [
            ["Terminus ā logicīs dēfīnītur.", "Los lógicos definen el término."],
            ["Prōpositiō ex terminīs compōnitur.", "La proposición se compone de términos."],
            ["Prōpositiō in terminōs resolvitur.", "La proposición se descompone en términos."],
            ["Ex terminīs simplex prōpositiō cōnficitur.", "Con términos se forma una proposición simple."],
            ["Quid hōc nōmine intellegitur?", "¿Qué se entiende con este nombre?"],
            ["Hoc verbum multīs modīs accipitur.", "Esta palabra se toma en muchos sentidos."],
            ["Liber Sēnecae ā discipulīs legitur.", "Los alumnos leen el libro de Séneca."],
            ["Vōx magistrī ab omnibus audītur.", "Todos oyen la voz del maestro."]
          ]
        }
      ],
      vocab: [
        ["dīcitur", "se dice; se llama, es llamado"],
        ["dēfīnītur", "se define"],
        ["compōnitur ex…", "se compone de… (+ ablativo)"],
        ["intellegitur", "se entiende"],
        ["dīviditur in…", "se divide en… (+ acusativo)"],
        ["resolvitur in…", "se descompone, se analiza en…"],
        ["cognōscitur", "se conoce"],
        ["accipitur", "se toma, se entiende (en un sentido)"],
        ["sūmitur", "se toma (en un sentido)"],
        ["cōnficitur", "se forma, se hace"],
        ["scītur", "se sabe"],
        ["legitur", "se lee"],
        ["multīs modīs", "de muchas maneras, en muchos sentidos"],
        ["logicus, logicī (m.)", "lógico, el que estudia lógica"],
        ["simplex prōpositiō", "proposición simple"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "*Prōpositiō ex terminīs compōnitur* significa…",
          ops: ["La proposición se compone de términos.", "La proposición compone los términos.", "Los términos se componen de proposiciones."],
          ok: 0
        },
        { t: "mc", q: "La pasiva de *dīcunt* (dicen) es…", ops: ["dīcuntur", "dīcitur", "dīcimur"], ok: 0 },
        { t: "mc", q: "*audīris* significa…", ops: ["eres oído", "es oído", "oyes"], ok: 0 },
        {
          t: "mc",
          q: "En *verbīs explicātur*, ¿por qué no hay *ā*?",
          ops: ["Porque «verbīs» es el medio, no una persona", "Porque está en plural", "Porque el verbo es de la 1.ª conjugación"],
          ok: 0
        },
        { t: "oir", x: "dēfīnītur", ops: ["dēfīnītur", "dēfīnit", "dēfīniuntur"], ok: 0 },
        { t: "oir", x: "intelleguntur", ops: ["intelleguntur", "intellegitur", "intellegunt"], ok: 0 },
        { t: "orden", es: "El término es definido por los lógicos.", x: "Terminus ā logicīs dēfīnītur." },
        { t: "orden", es: "La proposición se divide en términos.", x: "Prōpositiō in terminōs dīviditur." }
      ]
    },
    {
      id: "la4-3",
      titulo: "El término y la proposición",
      min: 35,
      intro: "Tu página habla del término «a modo de predicado y de sujeto» y «a modo de extremo». Hoy ves qué significa: las partes de la proposición categórica y la cópula *est*, que las une.",
      bloques: [
        {
          t: "p",
          x: "Aristóteles define la **proposición** como un enunciado que afirma o niega algo de algo. Eso es predicar: *dīcere aliquid dē aliquō*, «decir algo de algo». Así lo leían los escolásticos, en la traducción latina de Boecio:"
        },
        {
          t: "ej",
          items: [
            ["Prōpositiō est ōrātiō affirmātīva vel negātīva alicuius dē aliquō.", "La proposición es un enunciado que afirma o niega algo de algo. (Aristóteles)"],
            ["Terminum autem vocō in quem resolvitur prōpositiō, ut praedicātum et dē quō praedicātur.", "Llamo término a aquello en que se descompone la proposición, como el predicado y aquello de lo que se predica. (Aristóteles)"]
          ]
        },
        {
          t: "p",
          x: "La **proposición categórica** (*prōpositiō catēgorica*) es la más simple: dice un predicado de un sujeto, sin «si…» ni «o…». Las que unen varias proposiciones con «si», «y» u «o» se llaman hipotéticas."
        },
        {
          t: "tabla",
          cab: ["Latín", "Qué es", "En «Homō est animal»"],
          audio: [0, 2],
          filas: [
            ["subiectum", "el sujeto: aquello de lo que se dice algo", "homō"],
            ["praedicātum", "el predicado: lo que se dice del sujeto", "animal"],
            ["cōpula", "la cópula: el verbo «est», que los une", "est"],
            ["extrēma", "los extremos: sujeto y predicado, uno a cada lado de la cópula", "homō, animal"]
          ]
        },
        {
          t: "p",
          x: "Los **términos** son las piezas en que se descompone la proposición: el sujeto y el predicado. Cada uno es una **parte principal** (*pars prīncipālis*) y se llama también **extremo** (*extrēmum*), porque queda a un lado de la cópula. De ahí las fórmulas de tu página: *per modum extrēmī* (a modo de extremo) y *per modum praedicātī et subiectī*."
        },
        {
          t: "p",
          x: "La **cualidad** (*quālitās*) de la proposición: si la cópula afirma, es **afirmativa** (*Homō est animal*); si lleva *nōn*, es **negativa** (*Homō nōn est lapis*). La **negación** (*negātiō*) va con la cópula, no con los términos."
        },
        {
          t: "nota",
          x: "Si no ves *est*, búscalo dentro del verbo: los lógicos leen *Sōcratēs currit* como *Sōcratēs est currēns* («Sócrates es alguien que corre»). Así toda proposición categórica tiene la forma «S *est* P»."
        },
        {
          t: "ej",
          items: [
            ["Homō est animal.", "El hombre es animal."],
            ["In hāc prōpositiōne «homō» est subiectum.", "En esta proposición, «hombre» es el sujeto."],
            ["Animal dē homine praedicātur.", "«Animal» se predica de «hombre»."],
            ["Subiectum et praedicātum per cōpulam coniunguntur.", "El sujeto y el predicado se unen mediante la cópula."],
            ["Homō nōn est lapis.", "El hombre no es una piedra."],
            ["Terminus est pars prōpositiōnis.", "El término es parte de la proposición."]
          ]
        }
      ],
      vocab: [
        ["cōpula, cōpulae (f.)", "cópula: el «est» que une sujeto y predicado"],
        ["extrēmum, extrēmī (n.)", "extremo: el sujeto o el predicado de una proposición"],
        ["prōpositiō catēgorica", "proposición categórica"],
        ["affirmātīvus, affirmātīva, affirmātīvum", "afirmativo"],
        ["negātīvus, negātīva, negātīvum", "negativo"],
        ["coniungō, coniungere", "unir, juntar"],
        ["negātiō, negātiōnis (f.)", "negación"],
        ["Sōcratēs currit.", "Sócrates corre. (el ejemplo clásico de los lógicos)"],
        ["pars prīncipālis", "parte principal"],
        ["in hāc prōpositiōne", "en esta proposición"]
      ],
      ejercicios: [
        { t: "mc", q: "En *Sōcratēs est philosophus*, el predicado es…", ops: ["philosophus", "Sōcratēs", "est"], ok: 0 },
        {
          t: "mc",
          q: "¿Qué es la cópula?",
          ops: ["El verbo «est», que une sujeto y predicado", "El sujeto de la proposición", "Una proposición negativa"],
          ok: 0
        },
        { t: "mc", q: "*Homō nōn est lapis* es una proposición…", ops: ["negativa", "afirmativa", "hipotética"], ok: 0 },
        {
          t: "mc",
          q: "¿Por qué el sujeto y el predicado se llaman «extremos»?",
          ops: ["Porque quedan a los dos lados de la cópula", "Porque son las palabras más largas", "Porque siempre son falsos"],
          ok: 0
        },
        { t: "oir", x: "praedicātum", ops: ["praedicātum", "praedicātur", "praedicant"], ok: 0 },
        { t: "oir", x: "subiectī", ops: ["subiectī", "subiectum", "subiectō"], ok: 0 },
        { t: "orden", es: "El término es parte de la proposición.", x: "Terminus est pars prōpositiōnis." },
        { t: "orden", es: "El sujeto y el predicado se unen mediante la cópula.", x: "Subiectum et praedicātum per cōpulam coniunguntur." }
      ]
    },
    {
      id: "la4-4",
      titulo: "El infinitivo: dīcere y dīcī",
      min: 35,
      intro: "El infinitivo es «definir» o «ser definido». En lógica aparece sin parar: *potest dīcī* (puede decirse), *dēbet intellegī* (debe entenderse). Hoy aprendes sus dos voces.",
      bloques: [
        {
          t: "tabla",
          cab: ["Conjugación", "Activo", "Pasivo", "Español"],
          audio: [1, 2],
          filas: [
            ["1.ª", "significāre", "significārī", "significar / ser significado"],
            ["2.ª", "vidēre", "vidērī", "ver / ser visto, parecer"],
            ["3.ª", "dīcere", "dīcī", "decir / ser dicho"],
            ["3.ª en -iō", "accipere", "accipī", "tomar / ser tomado"],
            ["4.ª", "dēfīnīre", "dēfīnīrī", "definir / ser definido"]
          ]
        },
        {
          t: "p",
          x: "La regla: en la 1.ª, la 2.ª y la 4.ª, la *-e* final del activo pasa a *-ī*: *-āre* → *-ārī*, *-ēre* → *-ērī*, *-īre* → *-īrī*. En la 3.ª se cambia todo *-ere* por *-ī*: *dīcere* → *dīcī*, *compōnere* → *compōnī*, *intellegere* → *intellegī*. El infinitivo de *sum* es *esse* (ser)."
        },
        {
          t: "nota",
          x: "¡Ojo! *dīcī* o *compōnī* parecen plurales de la 2.ª declinación, como *amīcī*, pero son infinitivos. Lo decide el contexto: después de *potest*, *dēbet* o *vidētur* casi siempre es un infinitivo."
        },
        {
          t: "p",
          x: "Usos que verás a diario: con **potest / possunt** (puede / pueden), **dēbet / dēbent** (debe / deben) y **vidētur** (parece). Con infinitivo pasivo equivalen al «se» español: *potest dīcī* = «se puede decir». El infinitivo también puede ser sujeto: *Difficile est terminum dēfīnīre* (es difícil definir el término)."
        },
        {
          t: "tabla",
          cab: ["Latín", "Español"],
          audio: [0],
          filas: [
            ["potest dīcī", "puede decirse, se puede decir"],
            ["dēbet intellegī", "debe entenderse"],
            ["nōn potest dēfīnīrī", "no puede definirse"],
            ["possunt dīvidī", "pueden dividirse"],
            ["vidētur esse", "parece ser"],
            ["necesse est dīcere", "es necesario decir"],
            ["oportet distinguere", "hay que distinguir"]
          ]
        },
        {
          t: "ej",
          items: [
            ["Difficile est terminum dēfīnīre.", "Es difícil definir el término."],
            ["Terminus multīs modīs dēfīnīrī potest.", "El término puede definirse de muchas maneras."],
            ["Hoc nōn dēbet dīcī.", "Esto no debe decirse."],
            ["Haec prōpositiō vidētur esse vēra.", "Esta proposición parece ser verdadera."],
            ["Logica docet bene dēfīnīre et dīvidere.", "La lógica enseña a definir y dividir bien."],
            ["Discipulus bene cōgitāre discit.", "El alumno aprende a pensar bien."],
            ["Facile est errāre.", "Es fácil equivocarse."],
            ["Oportet distinguere.", "Hay que distinguir."]
          ]
        }
      ],
      vocab: [
        ["potest dīcī", "puede decirse, se puede decir"],
        ["dēbet intellegī", "debe entenderse"],
        ["potest / possunt", "puede / pueden"],
        ["dēbeō, dēbēre", "deber"],
        ["necesse est", "es necesario"],
        ["oportet", "hay que, conviene (+ infinitivo)"],
        ["difficile est", "es difícil"],
        ["facile est", "es fácil"],
        ["vidētur esse", "parece ser"],
        ["dīcere / dīcī", "decir / ser dicho"],
        ["dēfīnīre / dēfīnīrī", "definir / ser definido"],
        ["compōnere / compōnī", "componer / ser compuesto"],
        ["esse", "ser (infinitivo de sum)"]
      ],
      ejercicios: [
        { t: "mc", q: "El infinitivo pasivo de *dīcere* es…", ops: ["dīcī", "dīcerī", "dīcitur"], ok: 0 },
        { t: "mc", q: "El infinitivo pasivo de *dēfīnīre* es…", ops: ["dēfīnīrī", "dēfīnī", "dēfīnītur"], ok: 0 },
        { t: "mc", q: "*Potest dīcī* significa…", ops: ["se puede decir", "puede decir", "se dice"], ok: 0 },
        {
          t: "mc",
          q: "En *Prōpositiō ex terminīs compōnī dēbet*, *compōnī* es…",
          ops: ["infinitivo pasivo: «ser compuesta»", "nominativo plural", "genitivo singular"],
          ok: 0
        },
        { t: "oir", x: "intellegī", ops: ["intellegī", "intellegit", "intellegere"], ok: 0 },
        { t: "oir", x: "significārī", ops: ["significārī", "significāre", "significātur"], ok: 0 },
        { t: "orden", es: "Es difícil definir el término.", x: "Difficile est terminum dēfīnīre." },
        { t: "orden", es: "Esto no debe decirse.", x: "Hoc nōn dēbet dīcī." }
      ]
    },
    {
      id: "la4-5",
      titulo: "Acusativo con infinitivo",
      min: 40,
      intro: "Para decir «el Filósofo dice que el hombre es animal», el latín clásico no usa «que»: pone el sujeto en acusativo y el verbo en infinitivo: *Philosophus dīcit hominem esse animal*. Es la construcción más típica del latín culto, y la encontrarás en cualquier libro de lógica.",
      bloques: [
        {
          t: "p",
          x: "Tras verbos de **decir, pensar, saber o percibir** (*dīcit, affirmat, negat, putat, scit, videt*), lo que en español va con «que…» se convierte en **sujeto en acusativo + infinitivo**. Para traducir, pon «que», convierte el acusativo en sujeto y conjuga el infinitivo. Si hay predicado, también va en acusativo: *Dīcō Sōcratem esse philosophum* (digo que Sócrates es filósofo)."
        },
        {
          t: "tabla",
          cab: ["Latín", "Palabra por palabra", "Español"],
          audio: [0],
          filas: [
            ["Philosophus dīcit hominem esse animal.", "el Filósofo dice hombre ser animal", "El Filósofo dice que el hombre es animal."],
            ["Scīmus terminum esse partem prōpositiōnis.", "sabemos término ser parte de la proposición", "Sabemos que el término es parte de la proposición."],
            ["Magister negat hanc prōpositiōnem esse vēram.", "el maestro niega esta proposición ser verdadera", "El maestro niega que esta proposición sea verdadera."],
            ["Putō tē bene intellegere.", "creo te bien entender", "Creo que entiendes bien."],
            ["Magister videt Titum dormīre.", "el maestro ve a Tito dormir", "El maestro ve que Tito duerme."]
          ]
        },
        {
          t: "nota",
          x: "*Philosophus*, con mayúscula, es Aristóteles (*Aristotelēs*): los escolásticos lo llaman sin más «el Filósofo». Y fíjate en *animal*: es neutro, así que su acusativo es igual que el nominativo; en *hominem esse animal*, el sujeto lo marca *hominem*."
        },
        {
          t: "p",
          x: "El infinitivo puede ser pasivo: *Dīcimus praedicātum dē subiectō praedicārī* (decimos que el predicado se predica del sujeto). Y si el sujeto del infinitivo es el mismo que el del verbo principal, se usa *sē*: *Discipulus dīcit sē nōn intellegere* (el alumno dice que él no entiende)."
        },
        {
          t: "p",
          x: "Con *dīcitur* y *vidētur* el latín prefiere la construcción personal: *Terminus dīcitur esse signum* (se dice que el término es un signo; literalmente, «el término es dicho ser signo»). El sujeto se queda en nominativo. Con expresiones impersonales como *cōnstat* (consta), *patet* o *manifestum est* (es evidente) se usa también acusativo + infinitivo."
        },
        {
          t: "ej",
          items: [
            ["Logicī docent hominem esse animal ratiōnāle.", "Los lógicos enseñan que el hombre es un animal racional."],
            ["Dīcimus praedicātum dē subiectō praedicārī.", "Decimos que el predicado se predica del sujeto."],
            ["Discipulus dīcit sē nōn intellegere.", "El alumno dice que no entiende."],
            ["Magister, nōn intellegō.", "Maestro, no lo entiendo."],
            ["Quid dīcis? — Dīcō terminum esse signum.", "¿Qué dices? — Digo que el término es un signo."],
            ["Magister ostendit hanc prōpositiōnem esse falsam.", "El maestro muestra que esta proposición es falsa."],
            ["Terminus dīcitur esse signum.", "Se dice que el término es un signo."],
            ["Cōnstat logicam esse artem.", "Consta que la lógica es un arte."],
            ["Patet prōpositiōnem ex terminīs compōnī.", "Es evidente que la proposición se compone de términos."]
          ]
        }
      ],
      vocab: [
        ["Philosophus dīcit hominem esse animal.", "El Filósofo dice que el hombre es animal."],
        ["dīcit sē…", "dice que él (mismo)…"],
        ["negō, negāre", "negar, decir que no"],
        ["affirmō, affirmāre", "afirmar"],
        ["cōnstat", "consta, es sabido (que)"],
        ["manifestum est", "es evidente, está claro"],
        ["scīmus", "sabemos"],
        ["animal ratiōnāle", "animal racional (la definición clásica del hombre)"],
        ["Aristotelēs, Aristotelis (m.)", "Aristóteles"],
        ["ostendō, ostendere", "mostrar, hacer ver"],
        ["nōn intellegō", "no entiendo"],
        ["Quid dīcis?", "¿Qué dices?"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "*Philosophus dīcit hominem esse animal* significa…",
          ops: ["El Filósofo dice que el hombre es animal.", "El Filósofo le dice al hombre que es animal.", "El hombre dice que el Filósofo es animal."],
          ok: 0
        },
        { t: "mc", q: "En el acusativo con infinitivo, el sujeto del infinitivo va en…", ops: ["acusativo", "nominativo", "genitivo"], ok: 0 },
        { t: "mc", q: "En *Discipulus dīcit sē nōn intellegere*, ¿quién no entiende?", ops: ["El propio alumno", "El maestro", "Otra persona"], ok: 0 },
        { t: "mc", q: "Completa: *Scīmus ___ esse partem prōpositiōnis.*", ops: ["terminum", "terminus", "terminī"], ok: 0 },
        { t: "oir", x: "hominem", ops: ["hominem", "homine", "hominēs"], ok: 0 },
        { t: "orden", es: "El Filósofo dice que el hombre es animal.", x: "Philosophus dīcit hominem esse animal." },
        { t: "orden", es: "Sabemos que el término es parte de la proposición.", x: "Scīmus terminum esse partem prōpositiōnis." }
      ]
    },
    {
      id: "la4-6",
      titulo: "«Dīcitur quod»: las fórmulas de la escuela",
      min: 40,
      intro: "Los escolásticos escribían un latín propio: en vez del acusativo con infinitivo usan a menudo *quod* + verbo conjugado, como nuestro «que». Hoy aprendes las fórmulas que ordenan cada página: *dīcitur quod*, *sciendum est quod*, *respondētur quod*…",
      bloques: [
        {
          t: "p",
          x: "Latín clásico: *Dīcunt hominem esse animal*. Latín escolástico: *Dīcunt quod homō est animal*. Las dos significan «dicen que el hombre es animal», pero la segunda se traduce casi palabra por palabra. Tras *quod* el sujeto vuelve al nominativo y el verbo va conjugado: *Sciō quod hoc est vērum* (sé que esto es verdad)."
        },
        {
          t: "tabla",
          cab: ["Fórmula", "Español", "Para qué sirve"],
          audio: [0],
          filas: [
            ["dīcitur quod…", "se dice que…", "presenta una opinión"],
            ["vidētur quod…", "parece que…", "abre una objeción, que luego se rechaza"],
            ["sciendum est quod…", "hay que saber que…", "introduce un principio o una distinción"],
            ["notandum (est) quod…", "hay que notar que…; nótese que…", "llama la atención sobre un detalle"],
            ["respondētur quod…", "se responde que…", "contesta a una objeción"],
            ["ut patet", "como es evidente", "remite a algo ya claro"],
            ["id est", "esto es, es decir", "aclara con otras palabras"],
            ["scīlicet", "a saber, es decir", "precisa o enumera"]
          ]
        },
        {
          t: "nota",
          x: "*Sciendum* y *notandum* son formas verbales con sentido de obligación («lo que hay que saber», «lo que hay que notar»); las estudiarás en la semana 7. Por ahora, apréndelas como fórmulas. *Scīlicet* viene de *scīre licet*, «se puede saber»; en los impresos suele ir abreviado *scil.* o *sc.*"
        },
        {
          t: "p",
          x: "Así se ordena un artículo (*articulus*) de santo Tomás: 1) *Vidētur quod…*: las objeciones (*obiectiōnēs*), lo que «parece» pero el autor no admite; desde la segunda, cada una empieza por *Praetereā* (además). 2) *Sed contrā…*: una autoridad en sentido contrario. 3) *Respondeō dīcendum quod…*: la respuesta del maestro. 4) *Ad prīmum…*: la respuesta a cada objeción."
        },
        {
          t: "nota",
          x: "Tras *vidētur quod* santo Tomás suele poner el verbo en subjuntivo (*vidētur quod nōn sit*): lo verás en la semana 5, y por eso esta semana solo la ves sin verbo. Justo después de la pregunta, la fórmula va a menudo sola y abre las objeciones: *Vidētur quod sīc* (parece que sí), *Vidētur quod nōn* (parece que no)."
        },
        {
          t: "ej",
          items: [
            ["Dīcitur quod terminus est pars prōpositiōnis.", "Se dice que el término es parte de la proposición."],
            ["Vidētur quod nōn.", "Parece que no."],
            ["Sciendum est quod terminus est signum.", "Hay que saber que el término es un signo."],
            ["Notandum quod «homō» hīc est subiectum.", "Nótese que aquí «hombre» es el sujeto."],
            ["Respondētur quod hoc nōn est vērum.", "Se responde que esto no es verdad."],
            ["Prōpositiō ex terminīs compōnitur, ut patet ex dictīs.", "La proposición se compone de términos, como consta por lo dicho."],
            ["Probātur: nam prōpositiō in terminōs resolvitur.", "Se prueba: pues la proposición se descompone en términos."],
            ["Terminus, id est nōmen vel verbum, pars prōpositiōnis est.", "El término, es decir, el nombre o el verbo, es parte de la proposición."],
            ["Duo sunt extrēma, scīlicet subiectum et praedicātum.", "Hay dos extremos, a saber: el sujeto y el predicado."],
            ["Dē hāc rē auctōrēs variē sentiunt.", "Sobre este asunto los autores opinan de distinta manera."]
          ]
        }
      ],
      vocab: [
        ["dīcitur quod…", "se dice que…"],
        ["vidētur quod…", "parece que… (abre una objeción)"],
        ["sciendum est quod…", "hay que saber que…"],
        ["notandum (est) quod…", "hay que notar que…; nótese que…"],
        ["respondētur quod…", "se responde que…"],
        ["ut patet", "como es evidente"],
        ["ex dictīs", "por lo dicho, por lo que se ha dicho"],
        ["scīlicet", "a saber, es decir"],
        ["sed contrā", "pero en contra (cita una autoridad contraria)"],
        ["respondeō dīcendum quod…", "respondo que hay que decir que…"],
        ["ad prīmum", "a la primera (objeción)"],
        ["praetereā", "además (abre una nueva objeción)"],
        ["probātur", "se prueba"],
        ["sciō quod…", "sé que… (quod + verbo conjugado)"],
        ["variē sentiunt", "opinan de distinta manera"],
        ["obiectiō, obiectiōnis (f.)", "objeción"]
      ],
      ejercicios: [
        { t: "mc", q: "*Sciendum est quod…* significa…", ops: ["Hay que saber que…", "Se sabe que…", "Sabemos que…"], ok: 0 },
        {
          t: "mc",
          q: "En un artículo de santo Tomás, *Vidētur quod…* introduce…",
          ops: ["una objeción que el autor va a rechazar", "la respuesta del maestro", "la conclusión final"],
          ok: 0
        },
        { t: "mc", q: "*scīlicet* significa…", ops: ["a saber, es decir", "por tanto", "sin embargo"], ok: 0 },
        {
          t: "mc",
          q: "La versión escolástica de *Dīcunt hominem esse animal* es…",
          ops: ["Dīcunt quod homō est animal.", "Dīcunt quod hominem esse animal.", "Dīcunt hominem quod est animal."],
          ok: 0
        },
        { t: "oir", x: "respondētur", ops: ["respondētur", "respondet", "respondent"], ok: 0 },
        { t: "orden", es: "Se dice que el término es parte de la proposición.", x: "Dīcitur quod terminus est pars prōpositiōnis." },
        { t: "orden", es: "Hay que saber que el término es un signo.", x: "Sciendum est quod terminus est signum." }
      ]
    },
    {
      id: "la4-7",
      titulo: "Cuarta y quinta declinación: intellēctus y rēs",
      min: 40,
      intro: "Dos declinaciones pequeñas con palabras clave de la filosofía: *intellēctus* (entendimiento), *sēnsus* (sentido), *āctus* (acto), *rēs* (cosa), *speciēs* (especie). Con ellas leerás la definición escolástica de la verdad.",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural"],
          audio: [1, 2],
          filas: [
            ["nominativo", "intellēctus", "intellēctūs"],
            ["genitivo", "intellēctūs", "intellēctuum"],
            ["dativo", "intellēctuī", "intellēctibus"],
            ["acusativo", "intellēctum", "intellēctūs"],
            ["ablativo", "intellēctū", "intellēctibus"]
          ]
        },
        {
          t: "p",
          x: "**4.ª declinación.** Casi todas sus palabras son masculinas en *-us*, como *amīcus*, pero el genitivo acaba en *-ūs*, con *u* larga: *intellēctūs* (del entendimiento). Así vienen en el diccionario: *intellēctus, intellēctūs (m.)*. Ojo: *intellēctūs* puede ser genitivo singular o nominativo y acusativo plural; decide el contexto."
        },
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural"],
          audio: [1, 2],
          filas: [
            ["nominativo", "rēs", "rēs"],
            ["genitivo", "reī", "rērum"],
            ["dativo", "reī", "rēbus"],
            ["acusativo", "rem", "rēs"],
            ["ablativo", "rē", "rēbus"]
          ]
        },
        {
          t: "p",
          x: "**5.ª declinación.** Pocas palabras, casi todas femeninas en *-ēs*. El genitivo acaba en *-ēī* tras vocal (*diēī, speciēī*) y en *-eī*, con *e* breve, tras consonante (*reī, fideī*). Ya conoces *Dē rērum nātūrā* (semana 1): «sobre la naturaleza de las cosas». En lógica, *speciēs* es la especie y *genus* el género: *homō* es una especie del género *animal*."
        },
        {
          t: "tabla",
          cab: ["Nominativo", "Genitivo", "Español"],
          audio: [0, 1],
          filas: [
            ["intellēctus", "intellēctūs", "entendimiento, intelecto"],
            ["sēnsus", "sēnsūs", "sentido"],
            ["āctus", "āctūs", "acto; acción"],
            ["cāsus", "cāsūs", "caso; caída; azar"],
            ["mōtus", "mōtūs", "movimiento"],
            ["effectus", "effectūs", "efecto"],
            ["rēs", "reī", "cosa, realidad, asunto"],
            ["speciēs", "speciēī", "especie; aspecto"],
            ["fidēs", "fideī", "fe, confianza"],
            ["diēs", "diēī", "día (masculino)"]
          ]
        },
        {
          t: "nota",
          x: "*Rēs* es la palabra comodín del latín: «cosa, asunto, realidad». En lógica se opone a la palabra y al concepto: *in rē* = «en la realidad»; *ā parte reī* = «por parte de la cosa», es decir, en la realidad y no solo en la mente."
        },
        {
          t: "ej",
          items: [
            ["Intellēctus rem intellegit.", "El entendimiento entiende la cosa."],
            ["Sēnsus singulāria cognōscit, intellēctus ūniversālia.", "El sentido conoce lo singular; el entendimiento, lo universal."],
            ["Nihil est in intellēctū quod nōn sit prius in sēnsū.", "Nada hay en el entendimiento que no esté antes en el sentido."],
            ["Puer est philosophus in potentiā, nōn in āctū.", "El niño es filósofo en potencia, no en acto."],
            ["Causa et effectus.", "La causa y el efecto."],
            ["Homō est speciēs animālis.", "El hombre es una especie de animal."],
            ["Nōminātīvus dīcitur cāsus rēctus; cēterī cāsūs oblīquī vocantur.", "El nominativo se llama caso recto; los demás casos se llaman oblicuos."],
            ["Fidēs et ratiō.", "La fe y la razón."]
          ]
        },
        {
          t: "nota",
          x: "El axioma *Nihil est in intellēctū quod nōn sit prius in sēnsū* lo cita santo Tomás: fíjate en los ablativos de la 4.ª, *intellēctū* y *sēnsū*. (*Sit*, «esté», es subjuntivo: semana 5.)"
        }
      ],
      vocab: [
        ["intellēctus, intellēctūs (m.)", "entendimiento, intelecto"],
        ["āctus, āctūs (m.)", "acto; acción"],
        ["cāsus, cāsūs (m.)", "caso (gramatical); caída; azar"],
        ["in āctū / in potentiā", "en acto / en potencia"],
        ["potentia, potentiae (f.)", "potencia, capacidad"],
        ["mōtus, mōtūs (m.)", "movimiento"],
        ["effectus, effectūs (m.)", "efecto"],
        ["rēs, reī (f.)", "cosa, realidad, asunto"],
        ["fidēs, fideī (f.)", "fe; confianza"],
        ["diēs, diēī (m.)", "día"],
        ["ā parte reī", "en la realidad (lit. «por parte de la cosa»)"],
        ["genus et speciēs", "género y especie"],
        ["cāsus rēctus / oblīquus", "caso recto (nominativo) / oblicuo (los demás)"]
      ],
      ejercicios: [
        { t: "mc", q: "El genitivo singular de *intellēctus* es…", ops: ["intellēctūs", "intellēctī", "intellēctum"], ok: 0 },
        { t: "mc", q: "El genitivo singular de *rēs* es…", ops: ["reī", "rērum", "rēs"], ok: 0 },
        {
          t: "mc",
          q: "En *Dē rērum nātūrā*, ¿qué es *rērum*?",
          ops: ["genitivo plural: «de las cosas»", "genitivo singular: «de la cosa»", "acusativo: «la cosa»"],
          ok: 0
        },
        { t: "mc", q: "*in āctū* significa…", ops: ["en acto", "en potencia", "por azar"], ok: 0 },
        { t: "oir", x: "speciem", ops: ["speciem", "speciēs", "speciē"], ok: 0 },
        { t: "oir", x: "sēnsū", ops: ["sēnsū", "sēnsum", "sēnsibus"], ok: 0 },
        { t: "orden", es: "El entendimiento entiende la cosa.", x: "Intellēctus rem intellegit." },
        { t: "orden", es: "El niño es filósofo en potencia.", x: "Puer est philosophus in potentiā." }
      ]
    },
    {
      id: "la4-8",
      titulo: "Verdadero y falso: «adaequātiō reī et intellēctūs»",
      min: 35,
      intro: "¿Cuándo es verdadera una proposición? La respuesta clásica de la escolástica cabe en cuatro palabras que ya puedes leer: *adaequātiō reī et intellēctūs*. Hoy la entiendes y repasas la semana.",
      bloques: [
        {
          t: "p",
          x: "Una proposición es **verdadera** (*vēra*) si dice que es lo que es, o que no es lo que no es; es **falsa** (*falsa*) si dice lo contrario. *Sōcratēs currit* es verdadera mientras Sócrates corre, y falsa en cuanto se para. La verdad está en el entendimiento que afirma o niega, en el **juicio** (*iūdicium*), pero se mide por la cosa."
        },
        {
          t: "tabla",
          cab: ["Latín", "Español"],
          audio: [0],
          filas: [
            ["Vēritās est adaequātiō reī et intellēctūs.", "La verdad es la adecuación de la cosa y el entendimiento."],
            ["Prōpositiō vēra est, sī rēs ita est sīcut dīcitur.", "La proposición es verdadera si la cosa es tal como se dice."],
            ["Prōpositiō falsa est, sī rēs nōn ita est sīcut dīcitur.", "La proposición es falsa si la cosa no es como se dice."],
            ["Intellēctus compōnit et dīvidit.", "El entendimiento compone y divide (afirma y niega)."],
            ["Vērum et falsum sunt in intellēctū.", "Lo verdadero y lo falso están en el entendimiento."]
          ]
        },
        {
          t: "p",
          x: "*Adaequātiō* viene de *aequus* (igual): «igualación, correspondencia». Fíjate en los dos genitivos que acabas de aprender: *reī* (5.ª) e *intellēctūs* (4.ª), «de la cosa» y «del entendimiento». Santo Tomás atribuye la fórmula a Isaac Israelí; la verás de nuevo en los textos reales."
        },
        {
          t: "nota",
          x: "*Vērum* y *falsum* en neutro funcionan como sustantivos: «lo verdadero», «lo falso». *Vērum est quod…* = «es verdad que…». Y en lógica *compōnere* y *dīvidere* son «afirmar» y «negar»: el entendimiento compone (*S est P*) o divide (*S nōn est P*)."
        },
        {
          t: "ej",
          items: [
            ["Haec prōpositiō vēra est: Homō est animal.", "Esta proposición es verdadera: «El hombre es animal»."],
            ["Haec prōpositiō falsa est: Homō est lapis.", "Esta proposición es falsa: «El hombre es una piedra»."],
            ["Prōpositiō vēra est quandō rēs ita est sīcut dīcitur.", "La proposición es verdadera cuando la cosa es tal como se dice."],
            ["Vērum est quod Sōcratēs currit.", "Es verdad que Sócrates corre."],
            ["Sōcratēs rē vērā currit.", "Sócrates corre de verdad."],
            ["Intellēctus vērum dīcit, quandō dīcit id quod est.", "El entendimiento dice la verdad cuando dice lo que es."],
            ["Dīcitur quod vēritās est in intellēctū.", "Se dice que la verdad está en el entendimiento."],
            ["Sed sciendum est quod rēs est mēnsūra vēritātis.", "Pero hay que saber que la cosa es la medida de la verdad."]
          ]
        }
      ],
      vocab: [
        ["vērum et falsum", "lo verdadero y lo falso"],
        ["adaequātiō reī et intellēctūs", "adecuación de la cosa y el entendimiento (definición de la verdad)"],
        ["aequus, aequa, aequum", "igual; justo"],
        ["ita… sīcut…", "así… como…; tal… como…"],
        ["sī", "si (condicional)"],
        ["quandō", "cuando"],
        ["vērum est quod…", "es verdad que…"],
        ["compōnit et dīvidit", "compone y divide (afirma y niega)"],
        ["mēnsūra, mēnsūrae (f.)", "medida"],
        ["iūdicium, iūdiciī (n.)", "juicio"],
        ["in intellēctū", "en el entendimiento"],
        ["rē vērā", "en realidad, de verdad"],
        ["vērum dīcere", "decir la verdad"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "*adaequātiō reī et intellēctūs* significa…",
          ops: ["adecuación de la cosa y el entendimiento", "la cosa es igual a la verdad", "adecuación de las cosas a los sentidos"],
          ok: 0
        },
        { t: "mc", q: "En esa fórmula, *reī* e *intellēctūs* están en…", ops: ["genitivo", "dativo", "nominativo"], ok: 0 },
        {
          t: "mc",
          q: "*Sōcratēs currit* es verdadera…",
          ops: ["si Sócrates de verdad corre", "si la dice un maestro", "siempre, porque es afirmativa"],
          ok: 0
        },
        {
          t: "mc",
          q: "*Vērum est quod Sōcratēs currit* significa…",
          ops: ["Es verdad que Sócrates corre.", "Sócrates busca la verdad.", "Lo verdadero corre."],
          ok: 0
        },
        { t: "oir", x: "falsa", ops: ["falsa", "falsum", "falsae"], ok: 0 },
        { t: "oir", x: "intellēctū", ops: ["intellēctū", "intellēctum", "intellēctuī"], ok: 0 },
        { t: "orden", es: "La verdad es la adecuación de la cosa y el entendimiento.", x: "Vēritās est adaequātiō reī et intellēctūs." },
        { t: "orden", es: "El entendimiento compone y divide.", x: "Intellēctus compōnit et dīvidit." }
      ]
    }
  ],
  lecturas: [
    {
      id: "la4-r1",
      titulo: "Quid est terminus?",
      nivel: "Inicial",
      texto: "Discipulus magistrum interrogat: «Magister, quid est terminus?»\nMagister respondet: «Terminus dīcitur pars prōpositiōnis. Prōpositiō enim ex terminīs compōnitur, sīcut domus ex lapidibus.»\nDiscipulus: «Quot terminī sunt in hāc prōpositiōne: “Homō est animal”?»\nMagister: «Duo: homō et animal. Homō est subiectum, animal est praedicātum. Verbum “est” nōn est terminus, sed cōpula, quae terminōs coniungit.»\nDiscipulus: «Cūr autem “terminus” vocātur?»\nMagister: «Quia prōpositiō in terminōs resolvitur, et ibi resolūtiō terminātur: “terminus” enim fīnem significat. Subiectum et praedicātum etiam extrēma dīcuntur, quia ūnum est in prīncipiō, alterum in fīne, cōpula in mediō.»\nDiscipulus: «Nunc intellegō!»",
      traduccion: "Un alumno pregunta al maestro: «Maestro, ¿qué es un término?».\nEl maestro responde: «Se llama término a una parte de la proposición. Pues la proposición se compone de términos, como una casa de piedras».\nEl alumno: «¿Cuántos términos hay en esta proposición: \"El hombre es animal\"?».\nEl maestro: «Dos: hombre y animal. \"Hombre\" es el sujeto; \"animal\", el predicado. El verbo \"es\" no es un término, sino la cópula, que une los términos».\nEl alumno: «¿Y por qué se llama \"término\"?».\nEl maestro: «Porque la proposición se descompone en términos, y ahí termina el análisis: \"terminus\" significa \"fin\". El sujeto y el predicado se llaman también extremos, porque uno está al principio, el otro al final y la cópula en medio».\nEl alumno: «¡Ahora lo entiendo!».",
      notas: "Es la definición de Aristóteles: *Terminum autem vocō in quem resolvitur prōpositiō*, «llamo término a aquello en que se descompone la proposición». Por eso tu página habla del término *per modum terminantis resolutionem propositionis*: «como lo que pone fin al análisis de la proposición».",
      glosa: {
        discipulus: "alumno",
        magistrum: "al maestro (acusativo)",
        interrogat: "pregunta",
        magister: "maestro (también vocativo: «¡maestro!»)",
        quid: "qué",
        est: "es",
        terminus: "término; también «límite, fin»",
        respondet: "responde",
        "dīcitur": "se dice; se llama (pasiva de dīcō)",
        pars: "parte",
        "prōpositiōnis": "de la proposición (genitivo)",
        "prōpositiō": "proposición",
        enim: "pues, en efecto (va en segundo lugar)",
        ex: "de, a partir de (+ ablativo)",
        "terminīs": "términos (ablativo plural)",
        "compōnitur": "se compone (pasiva de compōnō)",
        "sīcut": "así como, como",
        domus: "casa (4.ª declinación, femenino)",
        lapidibus: "piedras (ablativo plural de lapis)",
        quot: "¿cuántos? (invariable)",
        "terminī": "términos (nominativo plural)",
        sunt: "son, hay",
        in: "en (+ ablativo); en, hacia (+ acusativo)",
        "hāc": "esta (ablativo femenino de hic)",
        "prōpositiōne": "proposición (ablativo)",
        "homō": "hombre, ser humano",
        animal: "animal",
        duo: "dos",
        et: "y",
        subiectum: "sujeto",
        "praedicātum": "predicado",
        verbum: "verbo, palabra",
        "nōn": "no",
        sed: "sino, pero",
        "cōpula": "cópula, unión",
        quae: "que, la cual (relativo femenino)",
        "terminōs": "los términos (acusativo plural)",
        coniungit: "une, junta",
        "cūr": "por qué",
        autem: "y, pues (va en segundo lugar)",
        "vocātur": "se llama, es llamado (pasiva de vocō)",
        quia: "porque",
        resolvitur: "se descompone, se analiza (pasiva de resolvō)",
        ibi: "allí, ahí",
        "resolūtiō": "el análisis, la descomposición",
        "terminātur": "termina, acaba (pasiva de terminō: «es terminada»)",
        "fīnem": "fin, límite (acusativo de fīnis)",
        significat: "significa",
        etiam: "también",
        "extrēma": "extremos (nominativo plural de extrēmum)",
        "dīcuntur": "se llaman (pasiva plural de dīcō)",
        "ūnum": "uno",
        "prīncipiō": "principio (ablativo de prīncipium)",
        alterum: "el otro",
        "fīne": "final (ablativo de fīnis)",
        "mediō": "medio, centro (ablativo de medium)",
        nunc: "ahora",
        "intellegō": "entiendo"
      },
      preguntas: [
        { q: "Según el maestro, ¿de qué se compone la proposición?", ops: ["De términos", "De silogismos", "De piedras"], ok: 0 },
        { q: "En «Homō est animal», ¿qué es «est»?", ops: ["La cópula", "Un término", "El sujeto"], ok: 0 },
        {
          q: "¿Por qué el sujeto y el predicado se llaman también «extremos»?",
          ops: ["Porque uno está al principio y el otro al final", "Porque son las palabras más importantes", "Porque son difíciles de definir"],
          ok: 0
        }
      ]
    },
    {
      id: "la4-r2",
      titulo: "Prōpositiō vēra et falsa",
      nivel: "Inicial",
      texto: "Magister in tabulā duās prōpositiōnēs scrībit: “Sōcratēs est homō” et “Sōcratēs est lapis”. Deinde discipulōs interrogat: «Quae prōpositiō vēra est, et quae falsa?»\nMārcus respondet: «Prīma vēra est, secunda falsa, quia Sōcratēs rē vērā homō est, nōn lapis.»\n«Bene» inquit magister. «Prōpositiō vēra dīcitur quandō rēs ita est sīcut dīcitur; falsa, quandō rēs nōn ita est. Haec rēgula ab omnibus logicīs docētur.»\nTum Titus interrogat: «Et haec prōpositiō, “Titus dormit”, estne vēra an falsa?»\nMagister rīdet: «Nunc falsa est, quia vigilās. Sed sī in scholā dormīs, vēra est!»",
      traduccion: "El maestro escribe dos proposiciones en la pizarra: «Sócrates es hombre» y «Sócrates es una piedra». Después pregunta a los alumnos: «¿Qué proposición es verdadera y cuál es falsa?».\nMarco responde: «La primera es verdadera y la segunda falsa, porque Sócrates es de verdad un hombre, no una piedra».\n«Bien», dice el maestro. «Una proposición se llama verdadera cuando la cosa es tal como se dice; falsa, cuando la cosa no es así. Esta regla la enseñan todos los lógicos».\nEntonces Tito pregunta: «¿Y esta proposición, \"Tito duerme\", es verdadera o falsa?».\nEl maestro se ríe: «Ahora es falsa, porque estás despierto. ¡Pero si duermes en clase, es verdadera!».",
      glosa: {
        magister: "maestro",
        in: "en (+ ablativo)",
        "tabulā": "tablilla, pizarra (ablativo de tabula)",
        "duās": "dos (acusativo femenino de duo)",
        "prōpositiōnēs": "proposiciones (acusativo plural)",
        "scrībit": "escribe",
        "sōcratēs": "Sócrates (nombre)",
        est: "es, está",
        "homō": "hombre",
        et: "y",
        lapis: "piedra",
        deinde: "después, luego",
        "discipulōs": "a los alumnos (acusativo plural)",
        interrogat: "pregunta",
        quae: "qué, cuál (interrogativo femenino)",
        "prōpositiō": "proposición",
        "vēra": "verdadera",
        falsa: "falsa",
        "mārcus": "Marco (nombre)",
        respondet: "responde",
        "prīma": "la primera",
        secunda: "la segunda",
        quia: "porque",
        "rē": "cosa (ablativo de rēs); «rē vērā» = en realidad, de verdad",
        "vērā": "verdadera (ablativo); «rē vērā» = en realidad",
        "nōn": "no",
        bene: "bien",
        inquit: "dice (solo con palabras citadas)",
        "dīcitur": "se llama; se dice (pasiva de dīcō)",
        "quandō": "cuando",
        "rēs": "la cosa, la realidad",
        ita: "así",
        "sīcut": "como, tal como",
        haec: "esta (femenino de hic)",
        "rēgula": "regla",
        ab: "por (agente, ante vocal)",
        omnibus: "todos (ablativo plural de omnis)",
        "logicīs": "lógicos (ablativo plural de logicus)",
        "docētur": "se enseña, es enseñada (pasiva de doceō)",
        tum: "entonces",
        titus: "Tito (nombre)",
        dormit: "duerme",
        estne: "¿es? (est + -ne)",
        an: "o (en preguntas dobles)",
        "rīdet": "se ríe, sonríe",
        nunc: "ahora",
        "vigilās": "estás despierto (de vigilō)",
        sed: "pero",
        "sī": "si",
        "scholā": "escuela, clase (ablativo)",
        "dormīs": "duermes"
      },
      preguntas: [
        { q: "¿Qué proposición es verdadera?", ops: ["«Sōcratēs est homō»", "«Sōcratēs est lapis»", "Las dos"], ok: 0 },
        {
          q: "Según el maestro, ¿cuándo es verdadera una proposición?",
          ops: ["Cuando la cosa es tal como se dice", "Cuando la escribe el maestro", "Cuando tiene sujeto y predicado"],
          ok: 0
        },
        { q: "¿Por qué es falsa ahora «Titus dormit»?", ops: ["Porque Tito está despierto", "Porque Tito no está en clase", "Porque no tiene cópula"], ok: 0 }
      ]
    },
    {
      id: "la4-r3",
      titulo: "Subiectum, praedicātum, cōpula",
      nivel: "Intermedio",
      texto: "Omnis prōpositiō catēgorica tribus partibus cōnstat: subiectō, praedicātō et cōpulā. Subiectum est id dē quō aliquid dīcitur; praedicātum est id quod dē subiectō dīcitur; cōpula est verbum “est”, quō praedicātum cum subiectō coniungitur. In hāc prōpositiōne, “Homō est animal”, homō est subiectum, animal praedicātum, est cōpula.\n\nSed nōn semper cōpula vidētur. In prōpositiōne “Sōcratēs currit” cōpula nōn appāret. Logicī tamen dīcunt hanc prōpositiōnem idem significāre quod “Sōcratēs est currēns”. Ita in omnī prōpositiōne catēgoricā tria inveniuntur.\n\nSī cōpula affirmat, prōpositiō dīcitur affirmātīva; sī negātiō cōpulae adiungitur, ut in “Homō nōn est lapis”, prōpositiō est negātīva. Negātiō enim nōn est terminus, sed cōpulam afficit.",
      traduccion: "Toda proposición categórica consta de tres partes: sujeto, predicado y cópula. El sujeto es aquello de lo que se dice algo; el predicado es lo que se dice del sujeto; la cópula es el verbo «es», con el que el predicado se une al sujeto. En la proposición «El hombre es animal», «hombre» es el sujeto, «animal» el predicado y «es» la cópula.\n\nPero la cópula no siempre se ve. En la proposición «Sócrates corre» la cópula no aparece. Sin embargo, los lógicos dicen que esta proposición significa lo mismo que «Sócrates es alguien que corre». Así, en toda proposición categórica se encuentran tres partes.\n\nSi la cópula afirma, la proposición se llama afirmativa; si a la cópula se le añade una negación, como en «El hombre no es una piedra», la proposición es negativa. Pues la negación no es un término, sino que afecta a la cópula.",
      glosa: {
        omnis: "toda (de omnis, omne)",
        "prōpositiō": "proposición",
        "catēgorica": "categórica: dice un predicado de un sujeto",
        tribus: "tres (ablativo de trēs)",
        partibus: "partes (ablativo plural de pars)",
        "cōnstat": "consta (de + ablativo)",
        "subiectō": "sujeto (ablativo)",
        "praedicātō": "predicado (ablativo)",
        et: "y",
        "cōpulā": "cópula (ablativo)",
        subiectum: "sujeto",
        est: "es",
        id: "aquello, eso",
        "dē": "de, acerca de (+ ablativo)",
        "quō": "el cual (ablativo de quī): «dē quō» = de lo que; «quō» = con el que",
        aliquid: "algo",
        "dīcitur": "se dice; se llama (pasiva)",
        "praedicātum": "predicado",
        quod: "lo que (relativo); tras «idem»: «lo mismo que»",
        "cōpula": "cópula",
        verbum: "verbo",
        cum: "con (+ ablativo)",
        coniungitur: "se une (pasiva de coniungō)",
        in: "en (+ ablativo)",
        "hāc": "esta (ablativo femenino de hic)",
        "prōpositiōne": "proposición (ablativo)",
        "homō": "hombre",
        animal: "animal",
        sed: "pero; sino",
        "nōn": "no",
        semper: "siempre",
        "vidētur": "se ve, es visto (aquí no es «parece»)",
        "sōcratēs": "Sócrates (nombre)",
        currit: "corre",
        "appāret": "aparece, se ve",
        "logicī": "los lógicos",
        tamen: "sin embargo",
        "dīcunt": "dicen",
        hanc: "esta (acusativo femenino de hic)",
        "prōpositiōnem": "proposición (acusativo: sujeto del infinitivo)",
        idem: "lo mismo",
        "significāre": "significar (infinitivo: acusativo con infinitivo)",
        "currēns": "que corre (participio de currō)",
        ita: "así",
        "omnī": "toda (ablativo de omnis)",
        "catēgoricā": "categórica (ablativo)",
        tria: "tres cosas (neutro plural de trēs)",
        inveniuntur: "se encuentran (pasiva de inveniō)",
        "sī": "si",
        affirmat: "afirma",
        "affirmātīva": "afirmativa",
        "negātiō": "negación",
        "cōpulae": "a la cópula (dativo)",
        adiungitur: "se añade, se une (pasiva de adiungō)",
        ut: "como",
        lapis: "piedra",
        "negātīva": "negativa",
        enim: "pues, en efecto",
        terminus: "término",
        "cōpulam": "la cópula (acusativo)",
        afficit: "afecta, modifica (de afficiō)"
      },
      preguntas: [
        { q: "¿De cuántas partes consta la proposición categórica?", ops: ["De tres", "De dos", "De cuatro"], ok: 0 },
        {
          q: "Según los lógicos, «Sōcratēs currit» significa lo mismo que…",
          ops: ["«Sōcratēs est currēns»", "«Sōcratēs est homō»", "«Sōcratēs nōn currit»"],
          ok: 0
        },
        { q: "¿Qué hace negativa una proposición?", ops: ["Una negación añadida a la cópula", "Un sujeto falso", "Que no tenga predicado"], ok: 0 }
      ]
    },
    {
      id: "la4-r4",
      titulo: "Intellēctus et rēs",
      nivel: "Intermedio",
      texto: "Homō duōbus modīs rēs cognōscit: per sēnsūs et per intellēctum. Sēnsūs rēs singulārēs percipiunt: oculus hunc colōrem videt, auris hanc vōcem audit. Intellēctus autem nātūram reī intellegit. Sēnsus videt hunc hominem; intellēctus intellegit hominem esse animal ratiōnāle.\n\nSed quōmodo rēs in intellēctū est? Nōn enim lapis ipse in mente est, sed speciēs lapidis, id est similitūdō reī. Per speciem rēs ab intellēctū cognōscitur.\n\nQuandō intellēctus dē rē dīcit id quod rēs est, vērum dīcit; quandō dīcit id quod rēs nōn est, falsum. Ideō vēritās dēfīnītur adaequātiō reī et intellēctūs: intellēctus enim reī aequātur.",
      traduccion: "El hombre conoce las cosas de dos maneras: por los sentidos y por el entendimiento. Los sentidos perciben las cosas singulares: el ojo ve este color; el oído oye esta voz. El entendimiento, en cambio, entiende la naturaleza de la cosa. El sentido ve a este hombre; el entendimiento entiende que el hombre es un animal racional.\n\nPero ¿cómo está la cosa en el entendimiento? Porque en la mente no está la piedra misma, sino la especie de la piedra, es decir, una semejanza de la cosa. Por medio de la especie, el entendimiento conoce la cosa.\n\nCuando el entendimiento dice de la cosa lo que la cosa es, dice la verdad; cuando dice lo que la cosa no es, dice algo falso. Por eso la verdad se define como adecuación de la cosa y el entendimiento: el entendimiento se iguala a la cosa.",
      notas: "La frase de la piedra viene de Aristóteles (*Dē animā* III, 8), y santo Tomás la cita así (*Summa theologiae* I, q. 85, a. 2): *lapis nōn est in animā, sed speciēs lapidis*. Aquí *speciēs* no es la especie de la lógica, sino la semejanza de la cosa en el entendimiento.",
      glosa: {
        "homō": "el hombre, el ser humano",
        "duōbus": "dos (ablativo de duo)",
        "modīs": "maneras, modos (ablativo plural de modus)",
        "rēs": "las cosas (acusativo plural); la cosa (nominativo)",
        "cognōscit": "conoce",
        per: "por, por medio de (+ acusativo)",
        "sēnsūs": "los sentidos (plural de sēnsus, 4.ª)",
        et: "y",
        "intellēctum": "el entendimiento (acusativo)",
        "singulārēs": "singulares, individuales (acusativo plural)",
        percipiunt: "perciben",
        oculus: "el ojo",
        hunc: "este (acusativo masculino de hic)",
        "colōrem": "color (acusativo de color)",
        videt: "ve",
        auris: "el oído, la oreja",
        hanc: "esta (acusativo femenino de hic)",
        "vōcem": "voz (acusativo de vōx)",
        audit: "oye",
        "intellēctus": "el entendimiento (nominativo, 4.ª)",
        autem: "en cambio, pero (va en segundo lugar)",
        "nātūram": "la naturaleza (acusativo)",
        "reī": "de la cosa (genitivo de rēs); a la cosa (dativo)",
        intellegit: "entiende",
        "sēnsus": "el sentido (nominativo, 4.ª)",
        hominem: "hombre (acusativo: objeto de «videt»; en «hominem esse», sujeto del infinitivo)",
        esse: "ser (infinitivo)",
        animal: "animal",
        "ratiōnāle": "racional (neutro)",
        sed: "pero; sino",
        "quōmodo": "¿cómo?",
        in: "en (+ ablativo)",
        "intellēctū": "el entendimiento (ablativo, 4.ª)",
        est: "está, es",
        "nōn": "no",
        enim: "pues, en efecto",
        lapis: "la piedra",
        ipse: "mismo",
        mente: "la mente (ablativo de mēns)",
        "speciēs": "especie: forma o semejanza de la cosa en la mente (5.ª)",
        lapidis: "de la piedra (genitivo)",
        id: "«id est» = es decir; «id quod» = lo que",
        "similitūdō": "semejanza",
        speciem: "especie (acusativo)",
        ab: "por (agente, ante vocal)",
        "cognōscitur": "es conocida, se conoce (pasiva)",
        "quandō": "cuando",
        "dē": "de, acerca de (+ ablativo)",
        "rē": "la cosa (ablativo)",
        "dīcit": "dice",
        quod: "lo que (relativo)",
        "vērum": "lo verdadero, la verdad",
        falsum: "lo falso",
        "ideō": "por eso",
        "vēritās": "la verdad",
        "dēfīnītur": "se define (pasiva de dēfīniō)",
        "adaequātiō": "adecuación, correspondencia",
        "intellēctūs": "del entendimiento (genitivo, 4.ª)",
        "aequātur": "se iguala (pasiva de aequō, + dativo)"
      },
      preguntas: [
        { q: "¿Qué conocen los sentidos, según el texto?", ops: ["Las cosas singulares", "La naturaleza de las cosas", "Las proposiciones"], ok: 0 },
        { q: "Cuando conocemos una piedra, ¿qué hay en la mente?", ops: ["La «speciēs», una semejanza de la piedra", "La piedra misma", "Nada"], ok: 0 },
        {
          q: "¿Cómo se define la verdad?",
          ops: ["Como adecuación de la cosa y el entendimiento", "Como amor a la sabiduría", "Como parte de la proposición"],
          ok: 0
        }
      ]
    },
    {
      id: "la4-r5",
      titulo: "Estne cōpula terminus?",
      nivel: "Intermedio",
      texto: "Dīcitur ā quibusdam quod cōpula est terminus. Nam terminus est pars ex quā prōpositiō compōnitur; cōpula autem est pars prōpositiōnis; ergō cōpula est terminus.\n\nSed sciendum est quod terminus duōbus modīs accipitur. Ūnō modō lātē, prō omnī parte quae prōpositiōnem compōnit; et sīc cōpula vērē dīcitur terminus. Aliō modō propriē, prō parte prīncipālī, id est prō extrēmō, scīlicet prō subiectō vel praedicātō; et sīc cōpula nōn est terminus, quia nōn est extrēmum, sed extrēma coniungit.\n\nNotandum est etiam quod auctōrēs dē hāc rē variē sentiunt, quia in terminō dīversa officia cōnsīderant. Ad argūmentum ergō respondētur quod cōpula est quidem pars prōpositiōnis, sed nōn prīncipālis, ut patet ex dictīs.",
      traduccion: "Algunos dicen que la cópula es un término. Pues el término es una parte de la que se compone la proposición; ahora bien, la cópula es parte de la proposición; luego la cópula es un término.\n\nPero hay que saber que «término» se toma en dos sentidos. En un sentido amplio, por cualquier parte que compone la proposición; y así la cópula se llama con verdad término. En otro sentido, el propio, por la parte principal, es decir, por el extremo, a saber, por el sujeto o el predicado; y así la cópula no es un término, porque no es un extremo, sino que une los extremos.\n\nHay que notar también que los autores opinan de distinta manera sobre este asunto, porque consideran en el término funciones diversas. Al argumento, por tanto, se responde que la cópula es, ciertamente, parte de la proposición, pero no la principal, como consta por lo dicho.",
      notas: "Compara con la primera frase de tu página: *Varie de definitione termini sentiunt Authores, secundum quod considerant in eo diversos respectus vel officia, sive partis componentis quomodocunque, sive partis principalis…* Ya reconoces la idea: unos toman el término como cualquier parte que compone la proposición; otros, solo como parte principal, el extremo.",
      glosa: {
        "dīcitur": "se dice (pasiva de dīcō); «dīcitur quod» = se dice que",
        "ā": "por (agente, ante consonante)",
        quibusdam: "algunos (ablativo plural de quīdam)",
        quod: "que (conjunción tras dīcitur, sciendum est…)",
        "cōpula": "la cópula",
        est: "es",
        terminus: "término",
        nam: "pues, porque",
        pars: "parte",
        ex: "de (+ ablativo)",
        "quā": "la cual (ablativo femenino de quī): «ex quā» = de la que",
        "prōpositiō": "la proposición",
        "compōnitur": "se compone (pasiva)",
        autem: "ahora bien, y (va en segundo lugar)",
        "prōpositiōnis": "de la proposición (genitivo)",
        "ergō": "luego, por tanto",
        sed: "pero; sino",
        sciendum: "«sciendum est» = hay que saber",
        "duōbus": "dos (ablativo)",
        "modīs": "modos, sentidos (ablativo plural)",
        accipitur: "se toma, se entiende (pasiva de accipiō)",
        "ūnō": "uno (ablativo)",
        "modō": "modo, sentido (ablativo)",
        "lātē": "en sentido amplio (adverbio de lātus)",
        "prō": "por, en lugar de (+ ablativo)",
        "omnī": "toda, cualquier (ablativo de omnis)",
        parte: "parte (ablativo)",
        quae: "que (relativo femenino)",
        "prōpositiōnem": "la proposición (acusativo)",
        "compōnit": "compone",
        et: "y",
        "sīc": "así",
        "vērē": "con verdad, verdaderamente",
        "aliō": "otro (ablativo)",
        "propriē": "en sentido propio",
        "prīncipālī": "principal (ablativo)",
        id: "«id est» = es decir",
        "extrēmō": "extremo (ablativo)",
        "scīlicet": "a saber",
        "subiectō": "sujeto (ablativo)",
        vel: "o",
        "praedicātō": "predicado (ablativo)",
        "nōn": "no",
        quia: "porque",
        "extrēmum": "extremo",
        "extrēma": "los extremos (acusativo plural neutro)",
        coniungit: "une",
        notandum: "«notandum est» = hay que notar",
        etiam: "también",
        "auctōrēs": "los autores",
        "dē": "sobre, acerca de (+ ablativo)",
        "hāc": "esta (ablativo femenino de hic)",
        "rē": "asunto, cosa (ablativo de rēs)",
        "variē": "de distinta manera",
        sentiunt: "opinan, piensan (de sentiō)",
        in: "en (+ ablativo)",
        "terminō": "término (ablativo)",
        "dīversa": "diversas, distintas (acusativo plural neutro)",
        officia: "funciones, oficios (acusativo plural de officium)",
        "cōnsīderant": "consideran",
        ad: "a, respecto a (+ acusativo)",
        "argūmentum": "el argumento (acusativo)",
        "respondētur": "se responde (pasiva de respondeō)",
        quidem: "ciertamente, sin duda",
        "prīncipālis": "principal",
        ut: "como",
        patet: "es evidente, consta",
        "dictīs": "lo dicho (ablativo plural de dictum); «ex dictīs» = por lo dicho"
      },
      preguntas: [
        {
          q: "¿Qué opinan «algunos» al principio del texto?",
          ops: ["Que la cópula es un término", "Que la cópula no existe", "Que el sujeto no es un término"],
          ok: 0
        },
        {
          q: "En sentido propio, ¿qué es un término?",
          ops: ["Un extremo: el sujeto o el predicado", "Cualquier parte de la proposición", "Solo la cópula"],
          ok: 0
        },
        {
          q: "¿Por qué opinan de distinta manera los autores?",
          ops: ["Porque consideran en el término funciones diversas", "Porque no conocen a Aristóteles", "Porque leen libros distintos"],
          ok: 0
        },
        { q: "«ut patet ex dictīs» significa…", ops: ["como consta por lo dicho", "como dicen los autores", "como se dirá después"], ok: 0 }
      ]
    }
  ]
});
