// Glossa · latín · semana 8: La página de Juan de Santo Tomás
window.CONTENT.la.semanas.push({
  n: 8,
  lecciones: [
    {
      id: "la8-1",
      titulo: "Las citas: D. Thom., q., a., lect., §",
      min: 35,
      intro: "Las páginas escolásticas están llenas de citas abreviadas y, sin la clave, parecen ruido. Hoy aprendes a descifrarlas, empezando por la de tu página: *D. Thom. 1. Periherm. lect. 8. §. Excludit*.",
      bloques: [
        {
          t: "tabla",
          cab: ["Abreviatura", "Se lee", "Significa"],
          audio: [1],
          filas: [
            ["D. Thom., S. Thom.", "Dīvus Thōmās, Sānctus Thōmās", "santo Tomás de Aquino"],
            ["Arist.", "Aristotelēs", "Aristóteles"],
            ["Philosophus", "Philosophus", "el Filósofo: Aristóteles"],
            ["Commentator", "Commentātor", "el Comentador: Averroes"],
            ["lib., l.", "liber", "libro"],
            ["cap., c.", "caput", "capítulo"],
            ["lect.", "lēctiō", "lección de un comentario"],
            ["q.", "quaestiō", "cuestión"],
            ["a., art.", "articulus", "artículo"],
            ["ad 1, ad 2", "ad prīmum, ad secundum", "respuesta a la 1.ª, a la 2.ª objeción"],
            ["1. p.", "prīma pars", "primera parte (de la Suma)"],
            ["§", "paragraphus", "párrafo"],
            ["ibid.", "ibīdem", "en el mismo lugar"],
            ["n.", "numerus", "número de párrafo (ediciones modernas)"]
          ]
        },
        {
          t: "p",
          x: "El número que va **delante** del título es el libro: *1. Periherm.* es «libro 1 del Perihermeneias». Los títulos se abrevian: *Priorum* es «de los (Analíticos) primeros», los *Analytica priora*; *Periherm.* es *Perihermeneias*, en griego «Sobre la interpretación»."
        },
        {
          t: "tabla",
          cab: ["En tu página", "Desarrollado", "Qué es"],
          audio: [1],
          filas: [
            ["in 1, Priorum", "in prīmō Priōrum", "Aristóteles, Primeros analíticos, libro 1"],
            ["D. Thom. 1. Periherm. lect. 8. §. Excludit", "Dīvus Thōmās, in prīmō Perihermeneias, lēctiōne octāvā, paragraphō «Exclūdit»", "santo Tomás, comentario al libro 1 del Perihermeneias, lección 8, párrafo que empieza «Excludit»"],
            ["Et ibidem lect. 5. §. Oſtendit", "et ibīdem, lēctiōne quīntā, paragraphō «Ostendit»", "en la misma obra, lección 5, párrafo que empieza «Ostendit»"]
          ]
        },
        {
          t: "nota",
          x: "El § no lleva número: se cita por la primera palabra del párrafo, en cursiva (*Excludit*, *Ostendit*). Las ediciones modernas numeran los párrafos; en Corpus Thomisticum, la frase que cita tu página es *lib. 1, l. 8, n. 17*: libro 1, lección 8 (ahí *l.* es *lēctiō*, no *liber*), número 17."
        },
        {
          t: "ej",
          items: [
            ["in prīmā parte, quaestiōne secundā, articulō tertiō", "D. Thom. 1. p. q. 2. a. 3.: Suma teológica, 1.ª parte, cuestión 2, artículo 3 (las cinco vías)"],
            ["ad prīmum", "ad 1: respuesta a la primera objeción"],
            ["in prīmō Priōrum, capite prīmō", "Arist. 1. Prior. cap. 1: Primeros analíticos, libro 1, capítulo 1 (donde define el término)"],
            ["in tertiō dē Animā", "Arist. 3. de Anima: Acerca del alma, libro 3"],
            ["ut dīcit Philosophus", "como dice el Filósofo (Aristóteles)"],
            ["ibīdem, lēctiōne quīntā", "ibid. lect. 5: en el mismo lugar, lección 5"]
          ]
        }
      ],
      vocab: [
        ["Dīvus Thōmās", "santo Tomás de Aquino (abrev. D. Thom.)"],
        ["ut dīcit Philosophus", "como dice el Filósofo, es decir, Aristóteles"],
        ["lēctiō, lēctiōnis (f.)", "lección de un comentario (abrev. lect.)"],
        ["articulus", "artículo (abrev. a., art.)"],
        ["paragraphus", "párrafo (signo §)"],
        ["ibīdem", "en el mismo lugar (abrev. ibid.)"],
        ["prīma pars", "primera parte de la Suma (abrev. 1. p.)"],
        ["Analytica Priōra", "los Primeros analíticos (en las citas, «Priorum»)"],
        ["Perihermeneias", "Sobre la interpretación, de Aristóteles (abrev. Periherm.)"],
        ["expositiō, expositiōnis (f.)", "comentario, explicación de un texto"],
        ["inquit", "dice (en las citas)"]
      ],
      ejercicios: [
        { t: "mc", q: "«lect. 8» significa…", ops: ["lección 8 (de un comentario)", "lectura de 8 páginas", "línea 8"], ok: 0 },
        {
          t: "mc",
          q: "«D. Thom. 1. p. q. 2. a. 3.» remite a…",
          ops: ["la Suma teológica: 1.ª parte, cuestión 2, artículo 3", "el comentario al Perihermeneias, libro 1, lección 2", "la página 2 del libro 3"],
          ok: 0
        },
        {
          t: "mc",
          q: "«§. Excludit» indica…",
          ops: ["el párrafo que empieza con la palabra «Excludit»", "que santo Tomás rechaza esa opinión", "el párrafo número 8"],
          ok: 0
        },
        { t: "mc", q: "En una página escolástica, *Philosophus* a secas es…", ops: ["Aristóteles", "Platón", "santo Tomás"], ok: 0 },
        { t: "mc", q: "«ad 1» es…", ops: ["la respuesta a la primera objeción", "el primer artículo", "la primera línea del texto"], ok: 0 },
        { t: "oir", x: "ibīdem", ops: ["ibīdem", "item", "idem"], ok: 0 },
        { t: "orden", es: "Como dice el Filósofo.", x: "Ut dīcit Philosophus." },
        { t: "orden", es: "Santo Tomás, en el mismo lugar, lección quinta.", x: "Dīvus Thōmās, ibīdem, lēctiōne quīntā." }
      ]
    },
    {
      id: "la8-2",
      titulo: "Cómo está hecha una página escolástica",
      min: 35,
      intro: "Casi todas las páginas escolásticas siguen el mismo guion: opiniones, pregunta, prueba, objeciones y respuestas, conclusión. Si sabes en qué paso estás, sabes qué buscar en cada frase de tu página.",
      bloques: [
        {
          t: "tabla",
          cab: ["Paso", "Fórmulas típicas", "En tu página"],
          audio: [1],
          filas: [
            ["Título", "Dēfīnītiō terminī. Quid sit terminus.", "Definitio termini."],
            ["Opiniones de los autores", "Variē sentiunt auctōrēs. Prīma sententia… Aliī dīcunt…", "Varie… ſentiunt Authores"],
            ["La pregunta", "Oportet vidēre… Quaeritur utrum…", "ſed oportet videre, quænam…"],
            ["Prueba", "Probātur… Cum enim… Ratiō est quia…", "Cùm enim mens noſtra…"],
            ["Objeción y respuesta", "Dīcēs… Respondētur… Licet… tamen…", "Et licet Ariſtoteles… tamen…"],
            ["Autoridades", "Ut dīcit Philosophus… Unde Dīvus Thōmās…", "Vnde D. Thom. 1. Periherm."],
            ["Conclusión", "Ergō… Datur ergō… Dīcendum est…", "Datur ergo…"]
          ]
        },
        {
          t: "p",
          x: "En la *Suma* de santo Tomás el guion es fijo: *Utrum…?* (la pregunta), *Vidētur quod…* (las objeciones), *Sed contrā* (una autoridad en contra), *Respondeō dīcendum quod…* (la tesis del maestro) y *Ad prīmum ergō dīcendum…* (la respuesta a cada objeción). Los cursos del siglo XVII, como el de Juan de Santo Tomás, son más libres, pero usan las mismas piezas."
        },
        {
          t: "nota",
          x: "Tu página no lleva rótulos («Obiectio», «Respondetur»): los pasos se reconocen por las conjunciones. *Cum enim* abre la prueba; *Et licet… tamen* plantea una objeción y la resuelve en la misma frase; *Unde* trae una autoridad; *Datur ergo* saca la conclusión."
        },
        {
          t: "ej",
          items: [
            ["Quaeritur utrum terminus sit signum.", "Se pregunta si el término es un signo."],
            ["Vidētur quod nōn.", "Parece que no. (empiezan las objeciones)"],
            ["Sed contrā est quod dīcit Philosophus.", "Pero en contra está lo que dice el Filósofo."],
            ["Respondeō dīcendum quod terminus est ultimum elementum.", "Respondo: hay que decir que el término es el último elemento."],
            ["Dīcēs: Aristotelēs aliter dēfīnit terminum.", "Dirás: Aristóteles define el término de otra manera."],
            ["Respondētur Aristotelem ibi contractē loquī.", "Se responde que allí Aristóteles habla de modo restringido."],
            ["Prīma sententia est quod terminus est pars prīncipālis.", "La primera opinión es que el término es la parte principal."]
          ]
        }
      ],
      vocab: [
        ["vidētur quod nōn", "parece que no (abre las objeciones)"],
        ["solūtiō, solūtiōnis (f.)", "solución, respuesta a una objeción"],
        ["probātiō, probātiōnis (f.)", "prueba"],
        ["dīcēs", "dirás (abre una objeción)"],
        ["respondētur", "se responde"],
        ["status quaestiōnis", "el planteamiento de la cuestión"],
        ["prīma sententia", "la primera opinión"],
        ["aliī dīcunt", "otros dicen"]
      ],
      ejercicios: [
        { t: "mc", q: "*Cùm enim mens noſtra…* abre…", ops: ["la prueba", "una objeción", "la conclusión"], ok: 0 },
        {
          t: "mc",
          q: "*Et licet Ariſtoteles… tamen…* es…",
          ops: ["una objeción resuelta en la misma frase", "la definición del término", "una cita de santo Tomás"],
          ok: 0
        },
        { t: "mc", q: "*Datur ergo…* marca…", ops: ["la conclusión", "el título", "una pregunta"], ok: 0 },
        {
          t: "mc",
          q: "En la *Suma*, *Respondeō dīcendum quod…* introduce…",
          ops: ["la tesis del maestro", "la primera objeción", "una autoridad en contra"],
          ok: 0
        },
        {
          t: "mc",
          q: "¿Qué hace el primer párrafo de tu página (*Varie… ſentiunt Authores*)?",
          ops: ["Resume las opiniones y plantea la pregunta", "Da la conclusión final", "Responde a una objeción"],
          ok: 0
        },
        { t: "oir", x: "respondētur", ops: ["respondētur", "respondit", "respondeō"], ok: 0 },
        { t: "orden", es: "Parece que no.", x: "Vidētur quod nōn." },
        { t: "orden", es: "Se pregunta si el término es un signo.", x: "Quaeritur utrum terminus sit signum." }
      ]
    },
    {
      id: "la8-3",
      titulo: "Las palabras de la página: analizar y componer",
      min: 35,
      intro: "Todo el argumento gira en torno a una imagen: descomponer (*resolūtiō*) y componer (*compositiō*). Con estas palabras ves el esqueleto de la página antes de leerla.",
      bloques: [
        {
          t: "tabla",
          cab: ["Latín", "Español", "En tu página"],
          audio: [0],
          filas: [
            ["resolūtiō", "análisis, descomposición", "reſolutio, reſolutionem"],
            ["resolvere", "descomponer, analizar", "reſoluitur, reſoluuntur"],
            ["compositiō", "composición", "compoſitionis, compoſitionem"],
            ["compōnere", "componer", "componitur, componentis"],
            ["ultimum elementum", "el último elemento", "vltimum elementum"],
            ["prīncipium", "principio, punto de partida", "principium compoſitionis"],
            ["extrēmum", "extremo: sujeto o predicado", "per modum extremi"],
            ["praedicātum, subiectum", "predicado, sujeto", "prædicati, & ſubiecti"],
            ["ēnūntiātiō", "enunciación: oración que afirma o niega", "partes enuntiationis"],
            ["dictiō", "dicción: palabra como parte de una enunciación", "ſub vocabulo dictionis"],
            ["habitūdō", "relación, condición", "habitudinē partis"],
            ["illātīvus", "ilativo: que sirve para inferir", "illatiuæ"]
          ]
        },
        {
          t: "p",
          x: "El argumento en una línea: el silogismo se descompone en proposiciones, y las proposiciones en términos. El término es el *ultimum elementum*, el final del análisis (*terminus resolūtiōnis*); por eso es también el comienzo de la composición (*prīncipium compositiōnis*)."
        },
        {
          t: "ej",
          items: [
            ["Syllogismus resolvitur in prōpositiōnēs.", "El silogismo se descompone en proposiciones."],
            ["Prōpositiō resolvitur in terminōs.", "La proposición se descompone en términos."],
            ["Terminus est ultimum elementum resolūtiōnis.", "El término es el último elemento del análisis."],
            ["Idem est terminus resolūtiōnis et prīncipium compositiōnis.", "El final del análisis y el principio de la composición son lo mismo."],
            ["Syllogismus cōnstat ex tribus terminīs.", "El silogismo consta de tres términos."],
            ["Nōmen et verbum sunt partēs ēnūntiātiōnis.", "El nombre y el verbo son partes de la enunciación."],
            ["Māteria prīma est ultimum prīncipium resolūtiōnis.", "La materia prima es el último principio del análisis."]
          ]
        },
        {
          t: "nota",
          x: "Ojo con *terminus*: la página juega con sus dos sentidos, «término lógico» y «final, límite». *Terminus resolūtiōnis* es «el final del análisis», y la conclusión dice que lo llamamos término porque en él *terminātur*, «termina», todo análisis."
        }
      ],
      vocab: [
        ["resolūtiō, resolūtiōnis (f.)", "análisis, descomposición"],
        ["resolvō, resolvere, resolvī, resolūtum", "descomponer, analizar"],
        ["compositiō, compositiōnis (f.)", "composición"],
        ["ultimum elementum", "el último elemento"],
        ["prīncipium", "principio, punto de partida"],
        ["extrēmum", "extremo: sujeto o predicado de una proposición"],
        ["praedicātum", "predicado"],
        ["subiectum", "sujeto"],
        ["ēnūntiātiō, ēnūntiātiōnis (f.)", "enunciación: oración que afirma o niega"],
        ["dictiō, dictiōnis (f.)", "dicción: palabra como parte de la enunciación"],
        ["habitūdō, habitūdinis (f.)", "relación, condición"],
        ["illātīvus, illātīva, illātīvum", "ilativo: que sirve para inferir"],
        ["māteria prīma", "materia prima"],
        ["analyticus, analytica, analyticum", "analítico, resolutivo"],
        ["syllogisticus, syllogistica, syllogisticum", "silogístico"],
        ["logicālis, logicāle", "lógico (latín escolástico)"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "*terminus resolūtiōnis* significa…",
          ops: ["el final del análisis", "el término de la proposición", "la definición del análisis"],
          ok: 0
        },
        { t: "mc", q: "Según la página, ¿en qué se resuelve la proposición?", ops: ["En predicado y sujeto", "En silogismos", "En materia y forma"], ok: 0 },
        { t: "mc", q: "*habitudinē*, con raya sobre la *ē*, se lee…", ops: ["habitūdinem", "habitūdine", "habitūdinēs"], ok: 0 },
        { t: "mc", q: "Una *ēnūntiātiō* es…", ops: ["una oración que afirma o niega", "una palabra suelta", "un silogismo completo"], ok: 0 },
        { t: "mc", q: "*illātīvus* viene de *illātum*, supino de…", ops: ["īnferō (inferir)", "illūminō (iluminar)", "lātus (ancho)"], ok: 0 },
        { t: "oir", x: "resolūtiō", ops: ["resolūtiō", "solūtiō", "resolvitur"], ok: 0 },
        { t: "orden", es: "El silogismo consta de tres términos.", x: "Syllogismus cōnstat ex tribus terminīs." },
        { t: "orden", es: "La proposición se descompone en términos.", x: "Prōpositiō resolvitur in terminōs." }
      ]
    },
    {
      id: "la8-4",
      titulo: "Los conectores de la página",
      min: 35,
      intro: "La página avanza a golpe de conectores: *cum enim*, *licet… tamen*, *quātenus*, *unde*, *ergō*. Si los reconoces, sabes qué papel tiene cada frase antes de entenderla entera.",
      bloques: [
        {
          t: "tabla",
          cab: ["En tu página", "Moderno", "Función"],
          audio: [1],
          filas: [
            ["ſecundùm quod", "secundum quod", "según que, en la medida en que"],
            ["Et quidem…, ſed…", "et quidem…, sed…", "concede y corrige: «es verdad que…, pero…»"],
            ["vt pertinet ad præſens", "ut pertinet ad praesēns", "en lo que toca al asunto presente"],
            ["Cùm enim…", "cum enim…", "pues, como… (abre la prueba)"],
            ["oportet quod ſit", "oportet quod sit", "es necesario que haya"],
            ["alioquin, vel… vel…", "aliōquīn, vel… vel…", "de lo contrario, o… o…"],
            ["licet… tamen…", "licet… tamen…", "aunque… sin embargo…"],
            ["quatenus", "quātenus", "en cuanto, en la medida en que"],
            ["id eſt", "id est", "es decir"],
            ["Cæterum", "cēterum", "por lo demás; pero"],
            ["Vnde", "unde", "de ahí, por eso"],
            ["Datur ergo", "datur ergō", "hay, por tanto (la conclusión)"],
            ["nō ſolùm…, ſed etiam…", "nōn sōlum…, sed etiam…", "no solo…, sino también…"]
          ]
        },
        {
          t: "p",
          x: "*ut* con indicativo significa «como» o «en cuanto»: *ut dēservit* (en cuanto sirve), *ut induit* (en cuanto reviste), *ut ā prīmō* (como por lo primero; aquí sin verbo). Con subjuntivo sería «para que» o «de modo que». En esta página nunca lleva subjuntivo."
        },
        {
          t: "nota",
          x: "*Datur* es la pasiva de *dō* («se da»), pero en latín escolástico significa «hay, existe»: *Datur ultimum elementum* (existe un último elemento); *Nōn datur resolūtiō in īnfīnītum* (no hay análisis al infinito)."
        },
        {
          t: "ej",
          items: [
            ["Et quidem omnēs sententiae vērae sunt, sed ūna convenientior est.", "Es verdad que todas las opiniones son verdaderas, pero una es más adecuada."],
            ["Licet Aristotelēs aliter dēfīnierit, tamen ibi contractē loquitur.", "Aunque Aristóteles lo definió de otro modo, allí habla de modo restringido."],
            ["Terminus est pars ēnūntiātiōnis, quātenus eam compōnit.", "El término es parte de la enunciación, en cuanto la compone."],
            ["Nōn sōlum syllogismus, sed etiam ēnūntiātiō resolvitur.", "No solo se descompone el silogismo, sino también la enunciación."],
            ["Aliōquīn prōcēdētur in īnfīnītum.", "De lo contrario, se procederá al infinito."],
            ["Datur ergō ratiō commūnis.", "Hay, por tanto, una noción común."],
            ["Unde Dīvus Thōmās dīcit…", "Por eso dice santo Tomás…"]
          ]
        }
      ],
      vocab: [
        ["et quidem…, sed…", "es verdad que…, pero…"],
        ["ut pertinet ad praesēns", "en lo que toca al asunto presente"],
        ["cum enim", "pues, como… (+ subjuntivo)"],
        ["oportet quod", "es necesario que (+ subjuntivo)"],
        ["aliōquīn", "de lo contrario"],
        ["vel… vel…", "o… o…"],
        ["licet… tamen…", "aunque… sin embargo…"],
        ["quātenus sunt extrēma", "en cuanto son extremos"],
        ["cēterum", "por lo demás; pero"],
        ["datur", "hay, existe (lit. «se da»)"],
        ["nōn sōlum… sed etiam…", "no solo… sino también…"],
        ["alibī", "en otro lugar"],
        ["sīcut etiam", "así como también"],
        ["praesertim", "sobre todo"],
        ["in tōtā suā lātitūdine", "en toda su amplitud"],
        ["contractē", "de modo restringido"]
      ],
      ejercicios: [
        { t: "mc", q: "*licet… tamen…* significa…", ops: ["aunque… sin embargo…", "porque… por tanto…", "si… entonces…"], ok: 0 },
        { t: "mc", q: "En *vt deſeruit ad fabricam*, *vt* significa…", ops: ["en cuanto", "para que", "de modo que"], ok: 0 },
        {
          t: "mc",
          q: "*Datur ergo aliqua ratio communis* significa…",
          ops: ["Hay, por tanto, una noción común.", "Da, pues, una razón a la comunidad.", "Por tanto, se da cuenta de algo común."],
          ok: 0
        },
        { t: "mc", q: "*alioquin* significa…", ops: ["de lo contrario", "en otro lugar", "por lo demás"], ok: 0 },
        { t: "mc", q: "En *nō ſolùm ſyllogiſmi*, *nō* se lee…", ops: ["nōn", "nō", "nam"], ok: 0 },
        { t: "oir", x: "quātenus", ops: ["quātenus", "quantum", "tamen"], ok: 0 },
        {
          t: "orden",
          es: "Aunque Aristóteles lo definió así, sin embargo allí habla de modo restringido.",
          x: "Licet Aristotelēs sīc dēfīnierit, tamen ibi contractē loquitur."
        },
        { t: "orden", es: "No solo el silogismo, sino también la enunciación.", x: "Nōn sōlum syllogismus, sed etiam ēnūntiātiō." }
      ]
    },
    {
      id: "la8-5",
      titulo: "Repaso: el subjuntivo de la página",
      min: 35,
      intro: "Tu página tiene siete subjuntivos y cada uno dice algo distinto: una pregunta indirecta, una causa, una concesión, un mandato. Hoy los repasas uno a uno, con sus frases.",
      bloques: [
        {
          t: "tabla",
          cab: ["Frase (grafía moderna)", "Por qué va en subjuntivo", "Traducción"],
          audio: [0],
          filas: [
            ["quaenam convenientius explicet", "pregunta indirecta (tras «oportet vidēre»)", "cuál explica con más propiedad"],
            ["cum mēns nostra resolūtōriē prōcēdat", "cum causal: «como, puesto que»", "como nuestra mente procede analizando"],
            ["oportet quod sit ultimum elementum", "oportet quod: «es necesario que»", "es necesario que haya un último elemento"],
            ["ultrā quod nōn fīat resolūtiō", "subordinada que depende de otro subjuntivo", "más allá del cual no se haga análisis"],
            ["licet Aristotelēs dēfīnierit", "licet concesivo: «aunque»", "aunque Aristóteles definió"],
            ["dictiō sit sōla", "mandato o propuesta", "sea solo dicción"],
            ["vidētur quod ipse imposuerit", "vidētur quod: «parece que»", "parece que él mismo puso"]
          ]
        },
        {
          t: "p",
          x: "La **pregunta indirecta** depende de un verbo de ver, saber o preguntar, y su verbo va en subjuntivo: *vidēre quaenam explicet* (ver cuál explica). El español usa indicativo («hay que ver cuál explica»): no traduzcas «cuál explique»."
        },
        {
          t: "p",
          x: "El tiempo marca la relación con el verbo principal: presente (*explicet*, *sit*) para lo simultáneo, perfecto (*dēfīnierit*, *imposuerit*) para lo anterior. Por eso *licet Aristotelēs dēfīnierit* es «aunque Aristóteles definió»."
        },
        {
          t: "nota",
          x: "Si *cum* lleva subjuntivo, no es «con»: es «como, puesto que» (causal), «aunque» (concesivo) o «cuando» (narrativo). Con ablativo sí es la preposición «con»."
        },
        {
          t: "ej",
          items: [
            ["Oportet vidēre quaenam sententia vēra sit.", "Hay que ver qué opinión es verdadera."],
            ["Discipulus quaerit quid sit terminus.", "El alumno pregunta qué es el término."],
            ["Nesciō utrum Aristotelēs hoc dīxerit.", "No sé si Aristóteles dijo esto."],
            ["Cum logica sit analytica, resolūtōriē prōcēdit.", "Como la lógica es analítica, procede analizando."],
            ["Licet hae cōnsīderātiōnēs vērae sint, ūna convenientior est.", "Aunque estas consideraciones son verdaderas, una es más adecuada."],
            ["Vidētur quod Aristotelēs hoc nōmen imposuerit.", "Parece que Aristóteles puso este nombre."]
          ]
        }
      ],
      vocab: [
        ["oportet vidēre", "hay que ver"],
        ["quaenam", "cuál (de ellos); qué"],
        ["nesciō utrum…", "no sé si…"],
        ["quid sit terminus", "qué es el término (pregunta indirecta)"],
        ["licet sint vērae", "aunque sean verdaderas"],
        ["ultrā quod", "más allá del cual"],
        ["impōnō, impōnere, imposuī, impositum", "imponer; poner (un nombre)"],
        ["nōmen impōnere", "poner nombre"],
        ["convenientius", "con más propiedad, más adecuadamente"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "En *oportet videre, quænam couuenientiùs explicet*, *explicet* va en subjuntivo porque…",
          ops: ["es una pregunta indirecta", "es una orden", "depende de «cum»"],
          ok: 0
        },
        {
          t: "mc",
          q: "*Licet Ariſtoteles… definierit* se traduce…",
          ops: ["aunque Aristóteles definió", "si Aristóteles definiera", "porque Aristóteles definió"],
          ok: 0
        },
        { t: "mc", q: "En *Cùm enim mens noſtra… procedat*, *cum* significa…", ops: ["como, puesto que", "con", "cuando quiera que"], ok: 0 },
        {
          t: "mc",
          q: "*Nomen ergo, & verbum dictio ſit ſola* es…",
          ops: ["un mandato o propuesta: «sean solo dicción»", "una pregunta: «¿es solo dicción?»", "un pasado: «fue solo dicción»"],
          ok: 0
        },
        { t: "mc", q: "*impoſuerit* es…", ops: ["perfecto de subjuntivo de impōnō", "futuro de impōnō", "presente de subjuntivo de impōnō"], ok: 0 },
        { t: "oir", x: "dēfīnierit", ops: ["dēfīnierit", "dēfīnīvit", "dēfīniet"], ok: 0 },
        { t: "orden", es: "Hay que ver qué opinión es verdadera.", x: "Oportet vidēre quaenam sententia vēra sit." },
        { t: "orden", es: "No sé si Aristóteles dijo esto.", x: "Nesciō utrum Aristotelēs hoc dīxerit." }
      ]
    },
    {
      id: "la8-6",
      titulo: "Repaso: participios, gerundio y gerundivo",
      min: 35,
      intro: "Juan de Santo Tomás condensa mucho con participios: *partis compōnentis*, *per modum terminantis*, *habitūdinem īnferentis*. Hoy repasas cómo deshacerlos, y el gerundio de *ad significandum*.",
      bloques: [
        {
          t: "tabla",
          cab: ["En la página (grafía moderna)", "Qué es", "Traducción"],
          audio: [0],
          filas: [
            ["partis compōnentis", "participio de presente, genitivo", "de parte que compone"],
            ["per modum terminantis resolūtiōnem", "participio de presente con objeto directo", "a modo de lo que pone fin al análisis"],
            ["ōrdinem compōnentis ēnūntiātiōnem", "participio de presente sustantivado", "el papel de lo que compone la enunciación"],
            ["habitūdinem īnferentis", "participio de presente sustantivado", "la relación de lo que infiere"],
            ["expōnēns illud verbum", "participio de presente, nominativo", "explicando aquel dicho"],
            ["composita logicālia", "participio de perfecto sustantivado", "los compuestos lógicos"],
            ["ex modō loquendī", "gerundio en genitivo", "por su manera de hablar"],
            ["ad significandum partēs", "gerundio en acusativo, con objeto", "para significar las partes"]
          ]
        },
        {
          t: "p",
          x: "El participio de presente (*-ns, -ntis*) es un adjetivo verbal: «que hace». Sustantivado en genitivo equivale a «de lo que hace»: *per modum terminantis* = «a modo de lo que termina». Puede llevar objeto, como un verbo: *compōnentis ēnūntiātiōnem*, «de lo que compone la enunciación»."
        },
        {
          t: "p",
          x: "Gerundio y gerundivo. El latín clásico prefiere el gerundivo concertado: *ad significandās partēs*. El escolástico usa mucho el gerundio con objeto directo: *ad significandum partēs*. Las dos significan «para significar las partes»."
        },
        {
          t: "nota",
          x: "El gerundivo con *est* expresa obligación y llena los cursos: *Terminus dēfīniendus est* (hay que definir el término), *Dīcendum est quod…* (hay que decir que…), *Notandum est…* (hay que notar…)."
        },
        {
          t: "ej",
          items: [
            ["Terminus est pars compōnēns ēnūntiātiōnem.", "El término es una parte que compone la enunciación."],
            ["Expōnēns verbum Aristotelis, Dīvus Thōmās dīcit…", "Explicando el dicho de Aristóteles, santo Tomás dice…"],
            ["Composita logicālia resolvuntur in terminōs.", "Los compuestos lógicos se descomponen en términos."],
            ["Hoc nōmen impositum est ad significandās partēs ēnūntiātiōnis.", "Este nombre se puso para significar las partes de la enunciación."],
            ["Terminus dēfīniendus est ut ultimum elementum.", "Hay que definir el término como último elemento."],
            ["Notandum est quod terminus duplex est.", "Hay que notar que el término es de dos clases."]
          ]
        }
      ],
      vocab: [
        ["compōnēns, compōnentis", "que compone; componente"],
        ["per modum terminantis", "a modo de lo que termina"],
        ["īnferēns, īnferentis", "que infiere"],
        ["expōnēns, expōnentis", "que explica; explicando"],
        ["īnferō, īnferre, intulī, illātum", "inferir, sacar una conclusión"],
        ["expōnō, expōnere, exposuī, expositum", "exponer, explicar un texto"],
        ["ex modō loquendī", "por la manera de hablar"],
        ["ad significandum partēs", "para significar las partes"],
        ["dēfīniendus est", "hay que definirlo"],
        ["terminō, termināre, termināvī, terminātum", "terminar, poner fin"],
        ["composita logicālia", "los compuestos lógicos"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "*per modum terminantis reſolutionem* significa…",
          ops: ["a modo de lo que pone fin al análisis", "a modo de análisis terminado", "para terminar el análisis"],
          ok: 0
        },
        {
          t: "mc",
          q: "En *ex modo loquendi*, *loquendi* es…",
          ops: ["gerundio en genitivo: «de hablar»", "participio: «hablando»", "infinitivo pasivo"],
          ok: 0
        },
        {
          t: "mc",
          q: "*ad ſignificandum partes* equivale en latín clásico a…",
          ops: ["ad significandās partēs", "ad significantēs partēs", "ad significātās partēs"],
          ok: 0
        },
        {
          t: "mc",
          q: "*Terminus dēfīniendus est* significa…",
          ops: ["Hay que definir el término.", "El término está definido.", "El término define."],
          ok: 0
        },
        { t: "mc", q: "*exponens illud verbum* se traduce…", ops: ["explicando aquel dicho", "aquel dicho explicado", "para explicar aquel dicho"], ok: 0 },
        { t: "oir", x: "īnferentis", ops: ["īnferentis", "īnferendī", "īnferiōris"], ok: 0 },
        { t: "orden", es: "Hay que definir el término.", x: "Terminus dēfīniendus est." },
        { t: "orden", es: "El término es una parte que compone la enunciación.", x: "Terminus est pars compōnēns ēnūntiātiōnem." }
      ]
    },
    {
      id: "la8-7",
      titulo: "Repaso: la pasiva y el impersonal",
      min: 35,
      intro: "La lógica habla de lo que *se* hace: *resolvitur*, *compōnitur*, *dīcitur*, *datur*. Hoy repasas la pasiva de tu página, también en futuro (*dīcētur*, *prōcēdētur*), y el verbo *fīō*.",
      bloques: [
        {
          t: "tabla",
          cab: ["En la página (grafía moderna)", "Forma", "Traducción"],
          audio: [0],
          filas: [
            ["analytica dīcitur", "presente pasivo", "se llama analítica"],
            ["composita resolvuntur", "presente pasivo, plural", "los compuestos se descomponen"],
            ["in quod resolvitur prōpositiō", "presente pasivo", "en lo que se resuelve la proposición"],
            ["ex simplicibus compōnitur", "presente pasivo", "se compone de elementos simples"],
            ["omnis resolūtiō terminātur", "presente pasivo con sentido medio", "todo análisis termina"],
            ["dīcētur etiam", "futuro pasivo", "se llamará también"],
            ["prōcēdētur in īnfīnītum", "futuro pasivo impersonal", "se procederá al infinito"],
            ["nōn fīet perfecta resolūtiō", "futuro de fīō", "el análisis no será completo"],
            ["datur aliqua ratiō", "presente pasivo de dō", "hay una noción"]
          ]
        },
        {
          t: "p",
          x: "Futuro pasivo: en la 1.ª y la 2.ª conjugación, *-bitur* (*vocābitur*, se llamará); en la 3.ª y la 4.ª, *-ētur* (*dīcētur*, *prōcēdētur*). No confundas *dīcētur* (se dirá) con *dīcitur* (se dice): solo cambia una vocal."
        },
        {
          t: "p",
          x: "Los verbos intransitivos tienen pasiva impersonal, sin sujeto: *prōcēditur*, «se procede»; *prōcēdētur*, «se procederá». En español, «se» impersonal."
        },
        {
          t: "nota",
          x: "*Fīō* sirve de pasiva de *faciō*: *fit* (se hace), *fīat* (que se haga), *fīet* (se hará). *Nōn fīet perfecta resolūtiō*: «no se hará un análisis completo», es decir, quedará incompleto."
        },
        {
          t: "ej",
          items: [
            ["Logica analytica dīcitur.", "La lógica se llama analítica."],
            ["Pars ēnūntiātiōnis terminus vocābitur.", "La parte de la enunciación se llamará término."],
            ["Prōpositiō resolvitur in subiectum et praedicātum.", "La proposición se resuelve en sujeto y predicado."],
            ["Ēnūntiātiō ex terminīs compōnitur.", "La enunciación se compone de términos."],
            ["Sīc prōcēditur in scientiīs.", "Así se procede en las ciencias."],
            ["Nōn fīet perfecta resolūtiō.", "El análisis no será completo."],
            ["Terminus dīcētur prīmum elementum.", "El término se llamará primer elemento."]
          ]
        }
      ],
      vocab: [
        ["dīcētur", "se dirá, se llamará (futuro pasivo)"],
        ["vocābitur", "se llamará (futuro pasivo de vocō)"],
        ["prōcēditur", "se procede (impersonal)"],
        ["in īnfīnītum", "al infinito"],
        ["fīet", "se hará; habrá (futuro de fīō)"],
        ["terminātur", "termina, se acaba"],
        ["fīō, fierī, factus sum", "hacerse; ser hecho; ocurrir"],
        ["cōnstat ex…", "consta de…"],
        ["ab arte", "por el arte (complemento agente)"],
        ["ratiō commūnis", "noción común"]
      ],
      ejercicios: [
        { t: "mc", q: "*dicetur* significa…", ops: ["se dirá, se llamará", "se dice", "se decía"], ok: 0 },
        {
          t: "mc",
          q: "*procedetur in infinitum* es…",
          ops: ["impersonal: «se procederá al infinito»", "activo: «procederá al infinito»", "pasado: «se procedió al infinito»"],
          ok: 0
        },
        {
          t: "mc",
          q: "*non fiet perfecta reſolutio* significa…",
          ops: ["el análisis no será completo", "no se hizo un análisis perfecto", "que no se haga un análisis perfecto"],
          ok: 0
        },
        {
          t: "mc",
          q: "En *quæ analytica ab Ariſtotele dicitur*, *ab Ariſtotele* es…",
          ops: ["el agente: «por Aristóteles»", "el origen: «desde Aristóteles»", "el tema: «sobre Aristóteles»"],
          ok: 0
        },
        { t: "mc", q: "*vocābitur* es…", ops: ["futuro pasivo de vocō", "presente pasivo de vocō", "perfecto de vocō"], ok: 0 },
        { t: "oir", x: "dīcētur", ops: ["dīcētur", "dīcitur", "dīcēbātur"], ok: 0 },
        { t: "orden", es: "La enunciación se compone de términos.", x: "Ēnūntiātiō ex terminīs compōnitur." },
        { t: "orden", es: "Así se procede en las ciencias.", x: "Sīc prōcēditur in scientiīs." }
      ]
    },
    {
      id: "la8-8",
      titulo: "Después del curso: seguir leyendo",
      min: 30,
      intro: "Ya lees la página de Juan de Santo Tomás. Esta lección te deja un plan para seguir con él, con santo Tomás y con la filosofía en latín cuando acabe el curso.",
      bloques: [
        {
          t: "p",
          x: "**1. Termina el capítulo.** La foto corta el pie de la página; en tu PDF siguen la cita de la lección 5 y la definición del término: «voz significativa por convención a partir de la cual se construye una proposición u oración simple»; y, para abarcar también el término mental y el escrito, «signo a partir del cual se construye una proposición simple». El capítulo 2 define el signo, la doctrina por la que Juan de Santo Tomás es más conocido hoy."
        },
        {
          t: "p",
          x: "**2. Sigue las citas.** Busca el comentario de santo Tomás al *Perihermeneias* en Corpus Thomisticum (corpusthomisticum.org): está en latín, es gratuito y tiene los párrafos numerados. La frase que cita tu página es *lib. 1, l. 8, n. 17* (libro 1, lección 8, número 17). The Logic Museum (logicmuseum.com) da el mismo texto con la traducción inglesa al lado."
        },
        {
          t: "p",
          x: "**3. Ayudas para comprobar, no para leer.** La edición de B. Reiser (Turín, Marietti; la *Lógica* salió en 1930) trae el texto con ortografía moderna. Para contrastar tu traducción: *Outlines of Formal Logic* (F. C. Wade, 1955) traduce estas Súmulas al inglés, y la edición de J. Deely del *Tractatus de signis* (1985) es bilingüe latín-inglés."
        },
        {
          t: "p",
          x: "**4. Un ritmo que aguante.** Media página al día: primero entera y sin diccionario; luego con una foto en «Tu propio texto», que glosa cada palabra; al final, en voz alta. Las fórmulas nuevas, a tarjetas."
        },
        {
          t: "p",
          x: "**5. Qué leer después.** Por este orden: los capítulos 2 y 3 de las Súmulas (el signo y las divisiones del término); el *De ente et essentia* de santo Tomás, breve y muy claro; y el *Tractatus de signis* de Juan de Santo Tomás (Lógica, 2.ª parte, cuestiones 21 a 23), con la edición de Deely al lado."
        },
        {
          t: "tabla",
          cab: ["Fórmula", "Español"],
          audio: [0],
          filas: [
            ["Probātur prīmō…", "Se prueba, en primer lugar…"],
            ["Cōnfirmātur…", "Se confirma… (una segunda prueba)"],
            ["Obiciēs…", "Objetarás… (abre una objeción)"],
            ["Respondētur negandō cōnsequentiam.", "Se responde negando la consecuencia."],
            ["Distinguō…", "Distingo… (lo acepto en un sentido y lo niego en otro)"],
            ["Concēdō. Negō.", "Lo concedo. Lo niego."],
            ["Quod erat probandum.", "Lo que había que probar."]
          ]
        },
        {
          t: "nota",
          x: "En la conversación con la IA, habla de tu página: *Quid est terminus?* *Cūr terminus est ultimum elementum?* *Cūr logica analytica dīcitur?* *Quid Aristotelēs dictiōnem vocat?*"
        },
        {
          t: "ej",
          items: [
            ["Hodiē dīmidiam pāginam legō.", "Hoy leo media página."],
            ["Locum citātum apud Dīvum Thōmam quaerō.", "Busco en santo Tomás el lugar citado."],
            ["Quod nōn intellegō, in tabellā scrībō.", "Lo que no entiendo, lo apunto en una tarjeta."],
            ["Cotīdiē legere pergō.", "Sigo leyendo cada día."],
            ["Tolle, lege.", "Toma y lee. (san Agustín, Confesiones, VIII)"]
          ]
        }
      ],
      vocab: [
        ["quod erat probandum", "lo que había que probar"],
        ["distinguō", "distingo (acepto en un sentido, niego en otro)"],
        ["concēdō", "lo concedo"],
        ["negō", "lo niego"],
        ["obiciēs", "objetarás (abre una objeción)"],
        ["cōnfirmātur", "se confirma (segunda prueba)"],
        ["tolle, lege", "toma y lee"],
        ["cotīdiē", "cada día"],
        ["pāgina", "página"],
        ["legere pergō", "sigo leyendo"],
        ["ēditiō, ēditiōnis (f.)", "edición"],
        ["locus citātus", "el lugar citado (abrev. loc. cit.)"],
        ["cōnsequentia", "consecuencia, inferencia"]
      ],
      ejercicios: [
        { t: "mc", q: "*Obiciēs…* abre…", ops: ["una objeción", "la conclusión", "una cita"], ok: 0 },
        {
          t: "mc",
          q: "*Distinguō*, en una disputa, significa…",
          ops: ["acepto la frase en un sentido y la niego en otro", "lo niego todo", "paso a otro tema"],
          ok: 0
        },
        {
          t: "mc",
          q: "¿Para qué sirve una traducción como la de Wade?",
          ops: ["Para comprobar tu lectura después de leer el latín", "Para leerla en lugar del latín", "Para aprender las abreviaturas"],
          ok: 0
        },
        { t: "mc", q: "*Quod erat probandum* significa…", ops: ["lo que había que probar", "lo que no se puede probar", "lo que se probará mañana"], ok: 0 },
        { t: "oir", x: "concēdō", ops: ["concēdō", "concidō", "condō"], ok: 0 },
        { t: "orden", es: "Hoy leo media página.", x: "Hodiē dīmidiam pāginam legō." },
        { t: "orden", es: "Sigo leyendo cada día.", x: "Cotīdiē legere pergō." }
      ]
    }
  ],
  lecturas: [
    {
      id: "la8-r1",
      titulo: "Definitio termini (1): las opiniones de los autores",
      nivel: "Texto real",
      antiguo: true,
      texto: "LIBER PRIMVS.\nDe his, quæ ſpectant ad primam operationem intellectus.\n\nCAPVT PRIMVM.\nDefinitio termini.\n\nVARIE de definitione termini ſentiunt Authores, ſecundùm quod conſiderant in eo diuerſos reſpectus, vel officia, ſiuè partis componentis quomodocunque, ſiuè partis principalis, & per modum extremi tantùm, ſiuè per modum terminantis reſolutionem propoſitionis, & ſyllogiſmi, ſiuè per modum prædicati, & ſubiecti. Et quidem conſiderationes iſtæ veræ ſunt, & omnes in termino locum habent, ſed oportet videre, quænam couuenientiùs explicet naturam termini, vt pertinet ad præſens.",
      traduccion: "LIBRO PRIMERO.\nSobre lo que atañe a la primera operación del entendimiento.\n\nCAPÍTULO PRIMERO.\nDefinición del término.\n\nLos autores opinan de distinta manera sobre la definición del término, según los diversos aspectos o funciones que consideran en él: ya el de parte que compone, del modo que sea; ya el de parte principal, y solo a modo de extremo; ya a modo de lo que pone fin al análisis de la proposición y del silogismo; ya a modo de predicado y sujeto. Y, ciertamente, estas consideraciones son verdaderas y todas tienen cabida en el término; pero hay que ver cuál de ellas explica con más propiedad la naturaleza del término, en lo que toca a nuestro asunto presente.",
      notas: "**Dónde estás.** El *Liber primus* de las Súmulas trata de la «primera operación del entendimiento», la simple aprehensión: captar algo sin afirmar ni negar. La segunda es el juicio (la proposición) y la tercera el razonamiento (el silogismo); por eso la lógica empieza por el término. **Los autores.** No los nombra, como era habitual, y resume cuatro maneras de ver el término: cualquier parte que compone la proposición; solo las partes principales, que hacen de extremos; lo que pone fin al análisis de la proposición y del silogismo; el predicado y el sujeto, como en Aristóteles. Las da todas por verdaderas y plantea la pregunta del capítulo: cuál explica mejor la naturaleza del término. **Imprenta.** En mayúsculas la U se escribe V (*PRIMVS*, *CAPVT*). *couuenientiùs* es una errata: el cajista puso, seguramente, una *n* del revés; lee *conuenientiùs*, es decir, *convenientius*. El acento grave de *ſecundùm*, *tantùm* o *ſiuè* marca palabras invariables (adverbios, preposiciones, conjunciones) y no se pronuncia.",
      glosa: {
        liber: "libro",
        primvs: "= prīmus: primero (en mayúsculas la u se escribe V)",
        de: "sobre, acerca de (+ ablativo)",
        his: "= hīs: estas cosas (ablativo plural de hic; «dē hīs, quae…» = sobre lo que…)",
        "quæ": "= quae: que (relativo neutro plural: «las cosas que»)",
        "ſpectant": "= spectant: atañen, se refieren (a: ad)",
        ad: "a, hacia (+ acusativo); «ad praesēns» = a lo presente",
        primam: "= prīmam: primera (acusativo)",
        operationem: "= operātiōnem: operación (acusativo de operātiō)",
        intellectus: "= intellēctūs: del entendimiento (genitivo de intellēctus, 4.ª declinación)",
        capvt: "= caput: capítulo (literalmente, «cabeza»)",
        primvm: "= prīmum: primero (neutro, con caput)",
        definitio: "= dēfīnītiō: definición",
        termini: "= terminī: del término (genitivo de terminus)",
        varie: "= variē: de distinta manera (adverbio; la V grande es la letra capitular)",
        definitione: "= dēfīnītiōne: la definición (ablativo, con dē)",
        "ſentiunt": "= sentiunt: opinan (de sentiō)",
        authores: "= auctōrēs: los autores (con la grafía th de la época)",
        "ſecundùm": "= secundum: según; «secundum quod» = según que, en la medida en que",
        quod: "que (con secundum: «según que»)",
        "conſiderant": "= cōnsīderant: consideran",
        in: "en (+ ablativo)",
        eo: "= eō: él (ablativo de is: «in eō» = en el término)",
        "diuerſos": "= dīversōs: diversos (acusativo plural)",
        "reſpectus": "= respectūs: aspectos, relaciones (acusativo plural, 4.ª declinación)",
        vel: "o",
        officia: "funciones (acusativo plural de officium)",
        "ſiuè": "= sīve: ya, o bien («sīve… sīve…» = ya… ya…)",
        partis: "de parte (genitivo de pars): «sīve partis…» = ya [la función] de parte…",
        componentis: "= compōnentis: que compone (genitivo del participio compōnēns)",
        quomodocunque: "= quōmodocumque: del modo que sea",
        principalis: "= prīncipālis: principal (genitivo)",
        per: "por; «per modum» = a modo de",
        modum: "modo (acusativo de modus)",
        extremi: "= extrēmī: de extremo (genitivo de extrēmum: sujeto o predicado de una proposición)",
        "tantùm": "= tantum: solo, solamente",
        terminantis: "= terminantis: de lo que termina, pone fin (genitivo del participio termināns)",
        "reſolutionem": "= resolūtiōnem: el análisis, la descomposición (acusativo)",
        "propoſitionis": "= prōpositiōnis: de la proposición (genitivo)",
        "ſyllogiſmi": "= syllogismī: del silogismo (genitivo)",
        "prædicati": "= praedicātī: de predicado (genitivo)",
        "ſubiecti": "= subiectī: de sujeto (genitivo)",
        et: "y; «et quidem» = y ciertamente",
        quidem: "ciertamente, por cierto",
        "conſiderationes": "= cōnsīderātiōnēs: consideraciones, enfoques",
        "iſtæ": "= istae: estas",
        "veræ": "= vērae: verdaderas",
        "ſunt": "= sunt: son",
        omnes: "= omnēs: todas",
        termino: "= terminō: el término (ablativo, con in)",
        locum: "lugar (acusativo); «locum habent» = tienen cabida",
        habent: "tienen",
        "ſed": "= sed: pero",
        oportet: "es necesario, hay que (+ infinitivo)",
        videre: "= vidēre: ver (infinitivo)",
        "quænam": "= quaenam: cuál (de ellas): interrogativo que abre una pregunta indirecta",
        "couuenientiùs": "= conuenientiùs = convenientius: con más propiedad (comparativo del adverbio). Errata del impresor: la primera u es, seguramente, una n puesta del revés",
        explicet: "explica (presente de subjuntivo de explicō, por ser pregunta indirecta)",
        naturam: "= nātūram: la naturaleza (acusativo)",
        vt: "= ut: según, en cuanto (+ indicativo)",
        pertinet: "atañe, corresponde",
        "præſens": "= praesēns: lo presente; «ad praesēns» = al asunto presente"
      },
      preguntas: [
        {
          q: "¿Por qué difieren los autores al definir el término?",
          ops: ["Porque consideran en él aspectos o funciones distintos", "Porque unos siguen a Aristóteles y otros a santo Tomás", "Porque no conocen la lógica"],
          ok: 0
        },
        {
          q: "¿Qué opina Juan de Santo Tomás de esas consideraciones?",
          ops: ["Que todas son verdaderas, pero hay que ver cuál explica mejor el término", "Que todas son falsas", "Que solo vale la de predicado y sujeto"],
          ok: 0
        },
        {
          q: "*quænam couuenientiùs explicet* es…",
          ops: ["una pregunta indirecta: «cuál explica con más propiedad»", "una orden: «¡explicad mejor!»", "una condición: «si explica mejor»"],
          ok: 0
        },
        { q: "*CAPVT PRIMVM* se lee…", ops: ["caput prīmum", "capvt prīmvm", "capitum prīmum"], ok: 0 }
      ]
    },
    {
      id: "la8-r2",
      titulo: "Definitio termini (2): el último elemento del análisis",
      nivel: "Texto real",
      antiguo: true,
      texto: "Cùm enim mens noſtra in ſcientijs reſolutoriè procedat, & præſertim in Logica, quæ analytica ab Ariſtotele dicitur, quia reſolutoria, oportet quod ſit deſignabile vltimum elementum, ſeu terminus huius reſolutionis, vltra quod non fiat reſolutio ab arte; ſicut etiam in naturali generatione materia prima eſt vltimum principium reſolutionis, alioquin, vel procedetur in infinitum, vel non fiet perfecta reſolutio. Et quia idem eſt terminus reſolutionis, & principium compoſitionis, id quod fuerit vltimum elementum in quod compoſita Logicalia reſoluuntur, dicetur etiam […] quia ab hoc, vt à primo, & ſimpliciori conuenit incipere.",
      traduccion: "Pues, como nuestra mente procede en las ciencias por análisis, y sobre todo en la Lógica, a la que Aristóteles llama «analítica» por ser resolutiva, es necesario que haya un último elemento señalable, o sea, un término de este análisis, más allá del cual el arte ya no descomponga; así como también en la generación natural la materia prima es el último principio del análisis. De lo contrario, o se procederá al infinito, o el análisis no será completo. Y como el término del análisis y el principio de la composición son una misma cosa, lo que resulte ser el último elemento en que se descomponen los compuestos lógicos se llamará también […] porque conviene empezar por él, como por lo primero y más simple.",
      notas: "**El argumento.** Conocer científicamente es analizar: *resolūtiō* traduce el griego *análysis*, y por eso dos libros de lógica de Aristóteles se llaman *Analíticos*. El silogismo se descompone en proposiciones, y estas en términos. Ese análisis tiene que acabar en un último elemento; si no, iría al infinito o quedaría incompleto, igual que en la generación natural el análisis acaba en la materia prima. Y como el final del análisis es el principio de la composición, ese último elemento es también lo primero con que se construye todo lo lógico: por eso conviene empezar por él. **La foto corta aquí** el pie de la columna, y no falta una línea sino varias. Según la traducción inglesa de F. C. Wade (1955), dicen más o menos: «…se llamará también lo primero, a partir de lo cual se compone lo demás. Teniendo esto en cuenta, decimos que ahora tratamos del término como último elemento: en él termina todo análisis de lo compuesto en lógica, incluso el de la proposición misma y el de la oración», y la columna siguiente remata: «porque conviene empezar por él, como por lo primero y más simple». Léelo en tu PDF. **Imprenta.** *ſicut* está partido a final de línea, «ſic | ut», sin guion: la *u* (y no *v*) delata que es el interior de una palabra. *ſcientijs* = *scientiis*. *oportet quod ſit* es latín escolástico; un clásico habría escrito *oportet esse*.",
      glosa: {
        "cùm": "= cum: como, puesto que (+ subjuntivo: «cum… prōcēdat»)",
        enim: "pues, en efecto (va en segundo lugar)",
        mens: "= mēns: la mente",
        "noſtra": "= nostra: nuestra",
        in: "en (+ ablativo); «in quod» = en el cual (+ acusativo: idea de movimiento)",
        "ſcientijs": "= scientiīs: las ciencias (ablativo plural; ij = ii)",
        "reſolutoriè": "= resolūtōriē: analizando, por descomposición (adverbio)",
        procedat: "= prōcēdat: procede (presente de subjuntivo, por cum)",
        "præſertim": "= praesertim: sobre todo",
        logica: "= logicā: la lógica (ablativo, con in)",
        "quæ": "= quae: la cual (relativo: la lógica)",
        analytica: "analítica (del griego analýein, «desatar, descomponer»)",
        ab: "por (agente con pasiva); desde («ab hōc» = por esto)",
        "ariſtotele": "= Aristotele: Aristóteles (ablativo, con ab)",
        dicitur: "= dīcitur: es llamada, se llama",
        quia: "porque",
        "reſolutoria": "= resolūtōria: resolutiva, que analiza (se sobrentiende «est»)",
        oportet: "es necesario",
        quod: "que (oportet quod + subjuntivo = es necesario que); en «ultrā quod», «id quod», «in quod»: el cual, lo que",
        "ſit": "= sit: haya (presente de subjuntivo de sum)",
        "deſignabile": "= dēsignābile: señalable, que se puede indicar (neutro de dēsignābilis)",
        vltimum: "= ultimum: último",
        elementum: "elemento",
        "ſeu": "= seu: o, o sea",
        terminus: "término; aquí también «final, límite» (terminus resolūtiōnis = final del análisis)",
        huius: "de este (genitivo de hic)",
        "reſolutionis": "= resolūtiōnis: del análisis (genitivo)",
        vltra: "= ultrā: más allá de (+ acusativo)",
        non: "= nōn: no",
        fiat: "= fīat: se haga (presente de subjuntivo de fīō)",
        "reſolutio": "= resolūtiō: el análisis, la descomposición",
        arte: "el arte (ablativo; «ab arte» = por el arte, es decir, por la lógica)",
        "ſicut": "= sīcut: así como (en la página, partido «ſic | ut» a final de línea)",
        etiam: "también",
        naturali: "= nātūrālī: natural (ablativo)",
        generatione: "= generātiōne: la generación (ablativo)",
        materia: "= māteria: materia; «māteria prīma» = materia prima",
        prima: "= prīma: primera",
        "eſt": "= est: es",
        principium: "= prīncipium: principio",
        alioquin: "= aliōquīn: de lo contrario",
        vel: "o; «vel… vel…» = o… o…",
        procedetur: "= prōcēdētur: se procederá (futuro pasivo impersonal)",
        infinitum: "= īnfīnītum: el infinito; «in īnfīnītum» = al infinito",
        fiet: "= fīet: se hará, habrá (futuro de fīō)",
        perfecta: "completa, acabada",
        et: "y",
        idem: "lo mismo (neutro de īdem)",
        "compoſitionis": "= compositiōnis: de la composición (genitivo)",
        id: "lo, aquello; «id quod» = lo que",
        fuerit: "sea, haya resultado ser (futuro perfecto de sum)",
        "compoſita": "= composita: los compuestos (neutro plural del participio compositus)",
        logicalia: "= logicālia: lógicos (neutro plural de logicālis)",
        "reſoluuntur": "= resolvuntur: se resuelven, se descomponen",
        dicetur: "= dīcētur: se llamará (futuro pasivo)",
        hoc: "= hōc: esto (ablativo; «ab hōc» = por esto)",
        vt: "= ut: como",
        "à": "= ā: desde, por (el acento no se pronuncia)",
        primo: "= prīmō: lo primero (ablativo)",
        "ſimpliciori": "= simpliciōrī: más simple (ablativo del comparativo)",
        conuenit: "= convenit: conviene",
        incipere: "empezar"
      },
      preguntas: [
        {
          q: "¿Por qué se llama «analítica» a la lógica?",
          ops: ["Porque es resolutiva: descompone", "Porque es muy antigua", "Porque estudia la materia prima"],
          ok: 0
        },
        {
          q: "¿Qué pasaría si el análisis no tuviera un último elemento?",
          ops: ["Iría al infinito o quedaría incompleto", "La lógica sería más fácil", "No habría silogismos verdaderos"],
          ok: 0
        },
        {
          q: "¿Qué papel tiene la materia prima en el argumento?",
          ops: ["Es una comparación: el último principio del análisis en la naturaleza", "Es el tema del capítulo", "Es una objeción contra Aristóteles"],
          ok: 0
        },
        {
          q: "¿Por qué conviene empezar la lógica por el término?",
          ops: ["Porque es lo primero y más simple", "Porque lo manda Aristóteles", "Porque es lo más difícil"],
          ok: 0
        }
      ]
    },
    {
      id: "la8-r3",
      titulo: "Definitio termini (3): la definición de los Analíticos",
      nivel: "Texto real",
      antiguo: true,
      texto: "Et licet Ariſtoteles in 1, Priorum definierit terminum per id, in quod reſoluitur propoſitio, vt in prædicatum, & ſubiectum, tamen ibi non definiuit terminum in tota ſua latitudine, ſed contractè, vt deſeruit ad fabricam, & compoſitionem ſyllogiſticam, in qua ſyllogiſmus conſtat ex tribus terminis, quatenus ſunt extrema in propoſitionibus, & induunt habitudinē partis ſyllogiſticæ, id eſt, illatiuæ.",
      traduccion: "Y aunque Aristóteles, en el libro 1 de los Primeros analíticos, definió el término por aquello en que se resuelve la proposición, como en predicado y sujeto, sin embargo allí no definió el término en toda su amplitud, sino de modo restringido, en cuanto sirve para la construcción y composición del silogismo, en la cual el silogismo consta de tres términos, en cuanto son extremos en las proposiciones y revisten la condición de parte silogística, es decir, ilativa.",
      notas: "**Una objeción, resuelta en una sola frase.** *Licet… tamen…*: Aristóteles, en los *Primeros analíticos* (I, 1), define el término como «aquello en que se resuelve la proposición, como en predicado y sujeto»; la cursiva del impreso marca la cita. Eso parece reducir el término al sujeto y al predicado. Juan de Santo Tomás responde que allí Aristóteles lo define *contractè*, de modo restringido: solo en cuanto sirve para construir silogismos, donde hay tres términos que hacen de extremos en las premisas y permiten sacar la conclusión (*illatiuæ*, de *illātiō*, «inferencia»). En «Todo hombre es mortal; Pedro es hombre; luego Pedro es mortal», los tres términos son *hombre*, *mortal* y *Pedro*. **Imprenta.** *in 1, Priorum* = *in prīmō (librō) Priōrum*, de los *Analytica priora*; la coma tras el *1* está así en el impreso. *habitudinē* = *habitudinem*: la raya sobre la vocal vale por una *m*.",
      glosa: {
        et: "y",
        licet: "aunque (+ subjuntivo: «licet… dēfīnierit»)",
        "ariſtoteles": "= Aristotelēs: Aristóteles",
        in: "en (+ ablativo; con acusativo, «hacia, en» con idea de movimiento: «in quod resolvitur» = en lo que se resuelve)",
        priorum: "= Priōrum: de los (Analíticos) primeros, los Analytica priora; «in 1, Priorum» = en el libro 1 de los Primeros analíticos",
        definierit: "= dēfīnierit: definió (perfecto de subjuntivo, por licet)",
        terminum: "el término (acusativo)",
        per: "por, mediante",
        id: "aquello; «id est» = es decir",
        quod: "el cual, lo cual («in quod» = en lo cual)",
        "reſoluitur": "= resolvitur: se resuelve, se descompone",
        "propoſitio": "= prōpositiō: la proposición",
        vt: "= ut: como («ut in…» = como en…); «ut dēservit» = en cuanto sirve",
        "prædicatum": "= praedicātum: el predicado (acusativo, con in)",
        "ſubiectum": "= subiectum: el sujeto",
        tamen: "sin embargo (responde a licet)",
        ibi: "allí (en ese libro)",
        non: "= nōn: no",
        definiuit: "= dēfīnīvit: definió (perfecto de indicativo)",
        tota: "= tōtā: toda (ablativo)",
        "ſua": "= suā: su (ablativo)",
        latitudine: "= lātitūdine: amplitud, extensión (ablativo; «in tōtā suā lātitūdine» = en toda su amplitud)",
        "ſed": "= sed: sino",
        "contractè": "= contractē: de modo restringido (adverbio de contractus, «contraído, reducido»)",
        "deſeruit": "= dēservit: sirve (para: ad)",
        ad: "a, para (+ acusativo)",
        fabricam: "la fábrica, la construcción (acusativo)",
        "compoſitionem": "= compositiōnem: la composición (acusativo)",
        "ſyllogiſticam": "= syllogisticam: silogística (acusativo)",
        qua: "= quā: la cual (ablativo; «in quā» = en la cual, la composición)",
        "ſyllogiſmus": "= syllogismus: el silogismo",
        "conſtat": "= cōnstat: consta (de: ex)",
        ex: "de, a partir de (+ ablativo)",
        tribus: "tres (ablativo de trēs)",
        terminis: "= terminīs: términos (ablativo plural)",
        quatenus: "= quātenus: en cuanto, en la medida en que",
        "ſunt": "= sunt: son",
        extrema: "= extrēma: extremos (neutro plural)",
        "propoſitionibus": "= prōpositiōnibus: las proposiciones (ablativo plural)",
        induunt: "revisten, toman (de induō, «vestirse»)",
        "habitudinē": "= habitūdinem: la relación, la condición (acusativo; la raya sobre la ē vale por una m)",
        partis: "de parte (genitivo de pars)",
        "ſyllogiſticæ": "= syllogisticae: silogística (genitivo)",
        "eſt": "= est: es; «id est» = es decir",
        "illatiuæ": "= illātīvae: ilativa, que sirve para sacar la conclusión (genitivo)"
      },
      preguntas: [
        {
          q: "¿Cómo definió Aristóteles el término en los Primeros analíticos?",
          ops: ["Como aquello en que se resuelve la proposición: predicado y sujeto", "Como la materia prima del silogismo", "Como cualquier palabra de una oración"],
          ok: 0
        },
        {
          q: "¿Por qué esa definición es *contractè*, restringida?",
          ops: ["Porque mira al término solo en cuanto sirve para construir silogismos", "Porque Aristóteles se equivocó", "Porque solo vale para los nombres propios"],
          ok: 0
        },
        { q: "¿De cuántos términos consta un silogismo?", ops: ["De tres", "De dos", "De cuatro"], ok: 0 },
        { q: "*habitudinē* se lee…", ops: ["habitudinem", "habitudine", "habitudines"], ok: 0 }
      ]
    },
    {
      id: "la8-r4",
      titulo: "Definitio termini (4): «dictio» en Aristóteles y santo Tomás",
      nivel: "Texto real",
      antiguo: true,
      texto: "Cæterum alibi conſiderauit Ariſtoteles terminum ſub vniuerſaliori ratione, vt etiam eſt communis nomini, & verbo, & non ſub vocabulo termini, ſed ſub vocabulo dictionis, vt induit ordinem componentis enuntiationem, non habitudinem inferentis in ſyllogiſmo. Vnde D. Thom. 1. Periherm. lect. 8. §. Excludit, exponens illud verbum Ariſtotelis, Nomen ergo, & verbum dictio ſit ſola, inquit: & videtur ex modo loquendi, quod ipſe impoſuerit hoc nomen ad ſignificandum partes enuntiationis.",
      traduccion: "Por lo demás, en otro lugar Aristóteles consideró el término bajo una noción más universal, en cuanto es común también al nombre y al verbo, y no con el nombre de «término», sino con el de «dicción», en cuanto reviste el papel de lo que compone la enunciación, no la relación de lo que infiere en el silogismo. Por eso santo Tomás (libro 1 del Perihermeneias, lección 8, párrafo «Excludit»), explicando aquel dicho de Aristóteles, «Sean, pues, el nombre y el verbo solo dicción», dice: «Y parece, por su manera de hablar, que él mismo puso este nombre para significar las partes de la enunciación».",
      notas: "**Un sentido más amplio.** En el *Perihermeneias* (*Sobre la interpretación*) Aristóteles estudia el nombre y el verbo como partes de la enunciación, la oración que afirma o niega, y los llama *dictio* (en griego *phásis*): palabras que dicen algo pero que, solas, no afirman ni niegan. Ahí el término no se mira como pieza del silogismo (*inferentis*) sino como pieza de la enunciación (*componentis*), y por eso vale para el nombre y para el verbo. **La autoridad.** Santo Tomás, al comentar ese pasaje, nota que Aristóteles usa *dictio* precisamente para las partes de la enunciación. **La cita.** *D. Thom. 1. Periherm. lect. 8. §. Excludit* = comentario de santo Tomás al libro 1 del *Perihermeneias*, lección 8, párrafo que empieza «Excludit». En Corpus Thomisticum, la frase citada es *lib. 1, l. 8, n. 17* (libro 1, lección 8, número 17), en el párrafo que empieza «Deinde cum dicit: nomen ergo et verbum etc., excludit…». En tu foto la *h* de *Periherm.* apenas se ve: salió mal entintada. La cursiva del impreso marca las citas y las palabras mencionadas como palabras (*termini*, *dictionis*).",
      glosa: {
        "cæterum": "= cēterum: por lo demás, pero (en los impresos, «cæterum»)",
        alibi: "= alibī: en otro lugar (aquí, en el Perihermeneias)",
        "conſiderauit": "= cōnsīderāvit: consideró (perfecto)",
        "ariſtoteles": "= Aristotelēs: Aristóteles",
        terminum: "el término (acusativo)",
        "ſub": "= sub: bajo (+ ablativo)",
        "vniuerſaliori": "= ūniversāliōrī: más universal (ablativo del comparativo)",
        ratione: "= ratiōne: noción, razón (ablativo; «sub… ratiōne» = bajo una noción)",
        vt: "= ut: en cuanto (+ indicativo)",
        etiam: "también, incluso",
        "eſt": "= est: es",
        communis: "= commūnis: común (a: + dativo)",
        nomini: "= nōminī: al nombre (dativo de nōmen)",
        verbo: "= verbō: al verbo (dativo)",
        non: "= nōn: no",
        vocabulo: "= vocābulō: palabra, nombre (ablativo de vocābulum: «sub vocābulō terminī» = con el nombre de «término»)",
        termini: "= terminī: de «término» (genitivo)",
        "ſed": "= sed: sino",
        dictionis: "= dictiōnis: de «dicción» (genitivo de dictiō, «palabra»)",
        induit: "reviste, toma (de induō)",
        ordinem: "= ōrdinem: el orden, el papel (acusativo de ōrdō)",
        componentis: "= compōnentis: de lo que compone (genitivo del participio compōnēns)",
        enuntiationem: "= ēnūntiātiōnem: la enunciación, oración que afirma o niega (acusativo, objeto de compōnentis)",
        habitudinem: "= habitūdinem: la relación, la condición (acusativo)",
        inferentis: "= īnferentis: de lo que infiere (genitivo del participio īnferēns)",
        in: "en (+ ablativo)",
        "ſyllogiſmo": "= syllogismō: el silogismo (ablativo)",
        vnde: "= unde: por eso, de ahí",
        d: "= Dīvus: santo (abreviado: «D. Thom.»)",
        thom: "= Thōmās: Tomás (abreviado: santo Tomás de Aquino)",
        periherm: "= Perihermeneias: el libro de Aristóteles «Sobre la interpretación»; aquí, el comentario de santo Tomás a ese libro («1. Periherm.» = libro 1)",
        lect: "= lēctiō: lección (abreviado; cada lección del comentario)",
        excludit: "= exclūdit: «excluye»; aquí es la primera palabra del párrafo citado (§ Excludit)",
        exponens: "= expōnēns: explicando, al comentar (participio de presente de expōnō)",
        illud: "aquel (neutro)",
        verbum: "palabra, dicho («illud verbum Aristotelis» = aquel dicho de Aristóteles); en la cita, «el verbo»",
        "ariſtotelis": "= Aristotelis: de Aristóteles (genitivo)",
        nomen: "= nōmen: nombre; en la cita, «el nombre» (sustantivo); en «hoc nōmen», «este nombre», es decir, la palabra dictiō",
        ergo: "= ergō: pues, así pues",
        dictio: "= dictiō: dicción, palabra (traduce el griego phásis)",
        "ſit": "= sit: sea (subjuntivo de mandato)",
        "ſola": "= sōla: sola, solamente",
        inquit: "dice (el sujeto es santo Tomás; tras los dos puntos vienen sus palabras)",
        videtur: "= vidētur: parece",
        ex: "por, a partir de (+ ablativo)",
        modo: "= modō: el modo (ablativo)",
        loquendi: "= loquendī: de hablar (gerundio en genitivo; «ex modō loquendī» = por su manera de hablar)",
        quod: "que («vidētur… quod…» = parece que…)",
        "ipſe": "= ipse: él mismo (Aristóteles)",
        "impoſuerit": "= imposuerit: puso (perfecto de subjuntivo de impōnō: «impōnere nōmen» = poner nombre)",
        hoc: "este (neutro)",
        ad: "para (+ acusativo; «ad significandum» = para significar)",
        "ſignificandum": "= significandum: significar (gerundio en acusativo, con objeto «partēs»)",
        partes: "= partēs: las partes (acusativo plural)",
        enuntiationis: "= ēnūntiātiōnis: de la enunciación (genitivo)"
      },
      preguntas: [
        {
          q: "¿Con qué nombre consideró Aristóteles el término «en otro lugar»?",
          ops: ["dictio (dicción)", "terminus (término)", "syllogismus (silogismo)"],
          ok: 0
        },
        { q: "Como *dictio*, el término es parte…", ops: ["de la enunciación", "solo del silogismo", "de la materia prima"], ok: 0 },
        {
          q: "¿Para qué cita a santo Tomás?",
          ops: ["Para confirmar que Aristóteles usó «dictio» para las partes de la enunciación", "Para corregir a Aristóteles", "Para definir el silogismo"],
          ok: 0
        },
        {
          q: "«D. Thom. 1. Periherm. lect. 8. §. Excludit» remite a…",
          ops: ["el comentario de santo Tomás al Perihermeneias, libro 1, lección 8, párrafo «Excludit»", "la Suma teológica, cuestión 8", "una carta de santo Tomás"],
          ok: 0
        }
      ]
    },
    {
      id: "la8-r5",
      titulo: "Definitio termini (5): la conclusión",
      nivel: "Texto real",
      antiguo: true,
      texto: "Datur ergo ſecundùm Ariſtotelem, & D. Thomam aliqua ratio communis partibus enuntiationis, quam Philoſophus dictionem, nos terminum vocamus, quia in ipſa omnis reſolutio terminatur, nō ſolùm ſyllogiſmi, ſed etiam enuntiationis, quæ ex ſimplicibus componitur, & in illa reſoluitur. Et ibidem lect. 5. §. Oſtendit, dicit […]",
      traduccion: "Hay, por tanto, según Aristóteles y santo Tomás, una noción común a las partes de la enunciación, que el Filósofo llama «dicción» y nosotros llamamos «término», porque en ella termina todo análisis, no solo el del silogismo, sino también el de la enunciación, que se compone de elementos simples y se resuelve en ellos. Y en el mismo lugar, lección 5, párrafo «Ostendit», dice […]",
      notas: "**La conclusión.** *Datur ergo*: hay una noción común a las partes de la enunciación, que Aristóteles llama *dictio* y nosotros *terminus*. ¿Por qué ese nombre? Porque en ella *terminatur*, «termina», todo análisis: el del silogismo y también el de la enunciación, que se compone de elementos simples y se resuelve en ellos. Así responde a la pregunta del principio: lo que mejor explica la naturaleza del término es verlo como último elemento del análisis, y no solo como sujeto o predicado; por eso su definición tiene que valer también para el nombre y el verbo. **Lo que viene.** La foto corta la cita de la lección 5; según la traducción de Wade, santo Tomás dice allí que «nombre» se toma en sentido común por cualquier dicción, incluso el verbo. Más adelante, en este mismo capítulo, da su definición; en la traducción de Wade: «voz significativa por convención a partir de la cual se construye una proposición u oración simple», y, para abarcar el término mental y el escrito, «signo a partir del cual se construye una proposición simple». **Imprenta.** *nō* = *nōn*: la raya sobre la vocal vale por la *n*. En *in illa reſoluitur*, *illa* es neutro plural: «se resuelve en ellos», los elementos simples.",
      glosa: {
        datur: "hay, existe (lit. «se da»: pasiva de dō, muy usada en latín escolástico)",
        ergo: "= ergō: por tanto",
        "ſecundùm": "= secundum: según (+ acusativo)",
        "ariſtotelem": "= Aristotelem: Aristóteles (acusativo)",
        d: "= Dīvum: santo (abreviado; aquí en acusativo)",
        thomam: "= Thōmam: Tomás (acusativo)",
        aliqua: "alguna, cierta",
        ratio: "= ratiō: noción, razón",
        communis: "= commūnis: común (a: + dativo)",
        partibus: "a las partes (dativo plural de pars)",
        enuntiationis: "= ēnūntiātiōnis: de la enunciación (genitivo)",
        quam: "la cual (acusativo: la ratiō)",
        "philoſophus": "= Philosophus: el Filósofo, es decir, Aristóteles",
        dictionem: "= dictiōnem: «dicción» (acusativo: «llamar algo + acusativo»)",
        nos: "= nōs: nosotros",
        terminum: "«término» (acusativo)",
        vocamus: "= vocāmus: llamamos",
        quia: "porque",
        in: "en (+ ablativo); «in illa» = en ellos (+ acusativo neutro plural: idea de movimiento)",
        "ipſa": "= ipsā: ella misma (ablativo: la ratiō)",
        omnis: "todo, toda",
        "reſolutio": "= resolūtiō: análisis, descomposición",
        terminatur: "= terminātur: termina, se acaba (pasiva de terminō)",
        "nō": "= nōn: no (la raya sobre la ō vale por la n)",
        "ſolùm": "= sōlum: solo («nōn sōlum… sed etiam…» = no solo… sino también…)",
        "ſyllogiſmi": "= syllogismī: del silogismo",
        "ſed": "= sed: sino",
        etiam: "también",
        "quæ": "= quae: la cual (la enunciación)",
        ex: "de, a partir de (+ ablativo)",
        "ſimplicibus": "= simplicibus: elementos simples (ablativo plural neutro)",
        componitur: "= compōnitur: se compone",
        illa: "aquellos, esos elementos (acusativo neutro plural)",
        "reſoluitur": "= resolvitur: se resuelve, se descompone",
        et: "y",
        ibidem: "= ibīdem: en el mismo lugar (en la misma obra: el comentario al Perihermeneias)",
        lect: "= lēctiō: lección (abreviado)",
        "oſtendit": "= ostendit: «muestra»; primera palabra del párrafo citado (§ Ostendit)",
        dicit: "= dīcit: dice (el sujeto, «D. Thom.», está en la línea que corta la foto)"
      },
      preguntas: [
        {
          q: "¿Qué llama Aristóteles *dictio*?",
          ops: ["Lo mismo que nosotros llamamos «término»", "El silogismo entero", "La conclusión de un razonamiento"],
          ok: 0
        },
        {
          q: "¿Por qué esa noción común se llama «término»?",
          ops: ["Porque en ella termina todo análisis, del silogismo y de la enunciación", "Porque aparece al final del libro", "Porque así lo decidió santo Tomás"],
          ok: 0
        },
        { q: "*nō ſolùm… ſed etiam…* significa…", ops: ["no solo… sino también…", "ni… ni…", "o… o…"], ok: 0 },
        {
          q: "*Et ibidem lect. 5* remite a…",
          ops: ["la lección 5 de la misma obra, el comentario al Perihermeneias", "el capítulo 5 de los Primeros analíticos", "la página 5 del libro de Juan de Santo Tomás"],
          ok: 0
        }
      ]
    }
  ]
});
