// Glossa · latín · semana 2: Los casos
window.CONTENT.la.semanas.push({
  n: 2,
  lecciones: [
    {
      id: "la2-1",
      titulo: "El dativo: a quién, para quién",
      min: 35,
      intro: "El dativo dice a quién o para quién: es el objeto indirecto. En lógica lo verás tras *convenit* («es propio de»): *Hoc convenit terminō*, «esto es propio del término». Y abre cada carta de Séneca: *Sēneca Lūcīliō suō salūtem*.",
      bloques: [
        {
          t: "tabla",
          cab: ["Nominativo", "Dativo sing.", "Dativo pl.", "Español"],
          audio: [0, 1, 2],
          filas: [
            ["puella", "puellae", "puellīs", "niña"],
            ["dominus", "dominō", "dominīs", "señor"],
            ["verbum", "verbō", "verbīs", "palabra"],
            ["puer", "puerō", "puerīs", "niño"],
            ["liber", "librō", "librīs", "libro"]
          ]
        },
        {
          t: "p",
          x: "Terminaciones: en la 1.ª, *-ae* (singular) e *-īs* (plural); en la 2.ª, *-ō* e *-īs*. Ojo con *puellae*: puede ser genitivo («de la niña»), dativo («a la niña») o nominativo plural («las niñas»). Lo decide el resto de la frase."
        },
        {
          t: "ej",
          items: [
            ["Magister discipulō librum dat.", "El maestro le da un libro al alumno."],
            ["Sēneca Lūcīliō epistulam scrībit.", "Séneca le escribe una carta a Lucilio."],
            ["Puer puellae rosam dat.", "El niño le da una rosa a la niña."],
            ["Magister puerīs fābulam nārrat.", "El maestro les cuenta un cuento a los niños."],
            ["Discipulī magistrō respondent.", "Los alumnos le responden al maestro."],
            ["Hoc convenit terminō.", "Esto es propio del término."]
          ]
        },
        {
          t: "p",
          x: "**Mihi est** = «tengo» (literalmente, «para mí hay»). Lo que se tiene va en nominativo y el poseedor, en dativo: *Mihi liber est* (tengo un libro), *Tibi multī amīcī sunt* (tienes muchos amigos). Así se dice también el nombre: *Mihi nōmen est Alvarus*, «me llamo Álvaro»."
        },
        {
          t: "ej",
          items: [
            ["Mihi nōmen est Alvarus.", "Me llamo Álvaro."],
            ["Quid tibi nōmen est?", "¿Cómo te llamas?"],
            ["Mihi liber est.", "Tengo un libro."],
            ["Lūcīliō multī librī sunt.", "Lucilio tiene muchos libros."],
            ["Glōria in excelsīs Deō.", "Gloria a Dios en las alturas."]
          ]
        },
        {
          t: "nota",
          x: "En español, «escribe **a** Lucilio» y «va **a** la escuela» llevan la misma «a». En latín no: quien recibe va en dativo, sin preposición (*Lūcīliō scrībit*); el lugar adonde se va lleva *ad* + acusativo (*ad scholam*). Lo verás en la lección 4."
        },
        { t: "nota", x: "En Navidad oirás *Glōria in excelsīs Deō*: *Deō* es dativo, «a Dios». Y en misa se responde *Deō grātiās*, «demos gracias a Dios»." }
      ],
      vocab: [
        ["dō, dare", "dar"],
        ["nārrō, nārrāre", "contar, narrar"],
        ["respondeō, respondēre", "responder (a alguien: dativo)"],
        ["mōnstrō, mōnstrāre", "mostrar, señalar"],
        ["puella, puellae (f.)", "niña, muchacha"],
        ["puer, puerī (m.)", "niño, muchacho"],
        ["dominus, dominī (m.)", "señor, dueño"],
        ["fābula, fābulae (f.)", "cuento, historia"],
        ["rosa, rosae (f.)", "rosa"],
        ["mihi", "a mí, para mí (dativo de ego)"],
        ["tibi", "a ti, para ti (dativo de tū)"],
        ["nōbīs, vōbīs", "a nosotros, a vosotros (dativo)"],
        ["Mihi nōmen est…", "Me llamo…"],
        ["Quid tibi nōmen est?", "¿Cómo te llamas?"],
        ["Mihi liber est.", "Tengo un libro."],
        ["grātus, grāta, grātum", "grato, agradable (+ dativo)"],
        ["Hoc convenit terminō.", "Esto es propio del término."],
        ["Deō grātiās!", "¡Gracias a Dios! (en misa, «demos gracias a Dios»)"]
      ],
      ejercicios: [
        { t: "mc", q: "En «Magister discipulō librum dat», ¿a quién da el maestro el libro?", ops: ["al alumno", "a los alumnos", "al maestro"], ok: 0 },
        { t: "mc", q: "El dativo singular de «dominus» es…", ops: ["dominō", "dominī", "dominum"], ok: 0 },
        { t: "mc", q: "El dativo plural de «puella» es…", ops: ["puellīs", "puellae", "puellās"], ok: 0 },
        { t: "mc", q: "«Mihi liber est» significa…", ops: ["Tengo un libro.", "Dame un libro.", "Soy un libro."], ok: 0 },
        { t: "oir", x: "puerō", ops: ["puerō", "puerī", "puerum"], ok: 0 },
        { t: "mc", q: "En *Glōria in excelsīs Deō*, «Deō» es…", ops: ["dativo: «a Dios»", "ablativo: «con Dios»", "genitivo: «de Dios»"], ok: 0 },
        { t: "orden", es: "Séneca le escribe una carta a Lucilio.", x: "Sēneca Lūcīliō epistulam scrībit." },
        { t: "orden", es: "Me llamo Álvaro.", x: "Mihi nōmen est Alvarus." }
      ]
    },
    {
      id: "la2-2",
      titulo: "El ablativo: con qué y cómo",
      min: 35,
      intro: "El ablativo es el caso de las circunstancias: con qué, cómo, dónde, desde dónde. La primera frase de tu página ya tiene dos: *dē dēfīnītiōne* («sobre la definición») e *in eō* («en él»).",
      bloques: [
        {
          t: "tabla",
          cab: ["Nominativo", "Ablativo sing.", "Ablativo pl.", "Español"],
          audio: [0, 1, 2],
          filas: [
            ["puella", "puellā", "puellīs", "niña"],
            ["dominus", "dominō", "dominīs", "señor"],
            ["verbum", "verbō", "verbīs", "palabra"],
            ["puer", "puerō", "puerīs", "niño"],
            ["liber", "librō", "librīs", "libro"]
          ]
        },
        {
          t: "p",
          x: "Fíjate en la raya: *puella* (nominativo, *a* breve) frente a *puellā* (ablativo, *ā* larga). En la 2.ª, dativo y ablativo singular coinciden (*dominō*), y en plural los dos casos son iguales en ambas declinaciones (*puellīs*, *dominīs*)."
        },
        { t: "p", x: "**Ablativo de instrumento** (¿con qué?): va solo, sin preposición." },
        {
          t: "ej",
          items: [
            ["Discipulus pennā scrībit.", "El alumno escribe con una pluma."],
            ["Magister verbīs et exemplīs docet.", "El maestro enseña con palabras y ejemplos."],
            ["Philosophus nōn oculīs, sed animō videt.", "El filósofo no ve con los ojos, sino con la mente."],
            ["Sēneca linguā Latīnā scrībit.", "Séneca escribe en latín (literalmente, «con la lengua latina»)."]
          ]
        },
        {
          t: "p",
          x: "**Ablativo de modo** (¿cómo?): *cum* + ablativo. Si el sustantivo lleva adjetivo, *cum* es opcional y suele ir en medio: *cum cūrā* (con cuidado), *magnā cūrā* o *magnā cum cūrā* (con gran cuidado)."
        },
        {
          t: "ej",
          items: [
            ["Discipulus cum cūrā legit.", "El alumno lee con cuidado."],
            ["Magister cum gaudiō docet.", "El maestro enseña con alegría."],
            ["Quōmodo scrībit Sēneca? Magnā cum dīligentiā.", "¿Cómo escribe Séneca? Con gran esmero."],
            ["Nūllō modō!", "¡De ningún modo!"]
          ]
        },
        {
          t: "nota",
          x: "Trampa del español: «con» no siempre es *cum*. Para el instrumento, nada: *pennā scrībit* (escribe con pluma). *Cum* es para la compañía y el modo: *cum amīcō ambulat* (pasea con un amigo), *cum cūrā legit* (lee con cuidado). *Cum pennā scrībit* sonaría a «escribe en compañía de su pluma»."
        },
        {
          t: "nota",
          x: "Los escolásticos usan el ablativo de modo a cada paso: *nūllō modō* (de ningún modo), *aliquō modō* (de algún modo), *eōdem modō* (del mismo modo). Tu página dice *quomodocunque*, «de cualquier modo»."
        }
      ],
      vocab: [
        ["penna, pennae (f.)", "pluma (para escribir)"],
        ["cūra, cūrae (f.)", "cuidado; preocupación"],
        ["cum cūrā", "con cuidado"],
        ["magnā cum cūrā", "con gran cuidado"],
        ["gaudium, gaudiī (n.)", "alegría, gozo"],
        ["dīligentia, dīligentiae (f.)", "diligencia, esmero"],
        ["oculus, oculī (m.)", "ojo"],
        ["exemplum, exemplī (n.)", "ejemplo"],
        ["lingua, linguae (f.)", "lengua; idioma"],
        ["Latīnus, Latīna, Latīnum", "latino"],
        ["tabula, tabulae (f.)", "tablilla, pizarra"],
        ["modus, modī (m.)", "modo, manera"],
        ["nūllō modō", "de ningún modo"],
        ["quōmodo?", "¿cómo?, ¿de qué modo?"]
      ],
      ejercicios: [
        { t: "mc", q: "El ablativo singular de «puella» es…", ops: ["puellā", "puellae", "puellam"], ok: 0 },
        {
          t: "mc",
          q: "«Discipulus pennā scrībit» significa…",
          ops: ["El alumno escribe con una pluma.", "El alumno escribe una pluma.", "El alumno le escribe a la pluma."],
          ok: 0
        },
        { t: "mc", q: "«Escribe con una pluma» (instrumento) se dice…", ops: ["pennā scrībit", "cum pennā scrībit", "ad pennam scrībit"], ok: 0 },
        { t: "mc", q: "«magnā cum cūrā» significa…", ops: ["con gran cuidado", "por una gran causa", "sin ningún cuidado"], ok: 0 },
        { t: "mc", q: "«Nūllō modō!» significa…", ops: ["¡De ningún modo!", "¡De este modo!", "¡Sin nada!"], ok: 0 },
        { t: "oir", x: "verbīs", ops: ["verbīs", "verba", "verbō"], ok: 0 },
        { t: "orden", es: "El alumno lee con cuidado.", x: "Discipulus cum cūrā legit." },
        { t: "orden", es: "El maestro enseña con palabras y ejemplos.", x: "Magister verbīs et exemplīs docet." }
      ]
    },
    {
      id: "la2-3",
      titulo: "Preposiciones con ablativo",
      min: 35,
      intro: "Hoy ves ocho preposiciones que piden ablativo, y con ellas empiezan los títulos de muchos tratados: *Dē interpretātiōne*, *Dē ente et essentiā*. Con ellas dices dónde, desde dónde, con quién, sobre qué y sin qué.",
      bloques: [
        {
          t: "tabla",
          cab: ["Preposición", "Significa", "Ejemplo", "Traducción"],
          audio: [0, 2],
          filas: [
            ["in", "en, sobre (lugar)", "in scholā", "en la escuela"],
            ["ā, ab", "desde, de (origen)", "ā Sēnecā", "de parte de Séneca"],
            ["cum", "con (compañía, modo)", "cum amīcīs", "con los amigos"],
            ["dē", "sobre, acerca de; desde arriba", "dē signīs", "sobre los signos"],
            ["ē, ex", "de, desde dentro; a partir de", "ex librō", "del libro"],
            ["sine", "sin", "sine causā", "sin motivo"],
            ["prō", "por, en favor de; en lugar de", "prō amīcō", "por un amigo"],
            ["sub", "bajo, debajo de", "sub mēnsā", "debajo de la mesa"]
          ]
        },
        {
          t: "p",
          x: "*ā* y *ē* van ante consonante; *ab* y *ex*, ante vocal o *h*: *ā magistrō*, *ab amīcō*; *ē scholā*, *ex īnsulā*. *Ex* también se usa ante consonante: *ex terminīs*, *ex librō*."
        },
        {
          t: "ej",
          items: [
            ["Discipulī cum magistrō in scholā sunt.", "Los alumnos están en la escuela con el maestro."],
            ["In pāginā prīmā dēfīnītiō terminī est.", "En la primera página está la definición del término."],
            ["Lūcīlius epistulam ā Sēnecā accipit.", "Lucilio recibe una carta de Séneca."],
            ["Magister dē signīs disputat.", "El maestro diserta sobre los signos."],
            ["Ex terminīs fit prōpositiō.", "De los términos se forma la proposición."],
            ["Amīcus prō amīcō respondet.", "Un amigo responde por su amigo."],
            ["Liber sub mēnsā iacet.", "El libro está tirado debajo de la mesa."]
          ]
        },
        {
          t: "nota",
          x: "Con los pronombres personales, *cum* va detrás y pegado: *mēcum* (conmigo), *tēcum* (contigo), *nōbīscum* (con nosotros), *vōbīscum* (con vosotros). Lo oirás en misa: *Dominus vōbīscum*, «el Señor esté con vosotros»."
        },
        {
          t: "p",
          x: "Títulos que ya puedes leer: *Dē interpretātiōne* (Aristóteles: sobre el nombre, el verbo y la oración), *Dē cōnsōlātiōne philosophiae* (Boecio: sobre el consuelo de la filosofía), *Dē ente et essentiā* (santo Tomás: sobre el ente y la esencia)."
        }
      ],
      vocab: [
        ["ā, ab", "desde, de (+ ablativo)"],
        ["cum", "con (+ ablativo)"],
        ["dē", "sobre, acerca de; desde arriba (+ ablativo)"],
        ["ē, ex", "de, desde dentro; a partir de (+ ablativo)"],
        ["sine", "sin (+ ablativo)"],
        ["prō", "por, en favor de; en lugar de (+ ablativo)"],
        ["sub", "bajo, debajo de (+ ablativo)"],
        ["tēcum", "contigo"],
        ["nōbīscum, vōbīscum", "con nosotros, con vosotros"],
        ["sine causā", "sin motivo"],
        ["mēnsa, mēnsae (f.)", "mesa"],
        ["pāgina, pāginae (f.)", "página"],
        ["accipiō, accipere", "recibir, aceptar"],
        ["disputō, disputāre", "discutir, disertar (dē: sobre algo)"],
        ["iaceō, iacēre", "yacer, estar tendido"]
      ],
      ejercicios: [
        { t: "mc", q: "¿Cuál de estas preposiciones pide ablativo?", ops: ["sine", "ad", "per"], ok: 0 },
        {
          t: "mc",
          q: "Delante de «amīcō», ¿«ā» o «ab»?",
          ops: ["ab, porque «amīcō» empieza por vocal", "ā, porque «amīcō» empieza por vocal", "da igual"],
          ok: 0
        },
        {
          t: "mc",
          q: "«Liber sub mēnsā iacet» significa…",
          ops: ["El libro está debajo de la mesa.", "El libro está sobre la mesa.", "El libro está junto a la mesa."],
          ok: 0
        },
        {
          t: "mc",
          q: "«Dominus vōbīscum» significa…",
          ops: ["El Señor esté con vosotros.", "El Señor habla de vosotros.", "El Señor está sin vosotros."],
          ok: 0
        },
        { t: "mc", q: "En el título *Dē interpretātiōne*, «dē» significa…", ops: ["sobre, acerca de", "desde dentro de", "sin"], ok: 0 },
        { t: "oir", x: "ex librō", ops: ["ex librō", "ā librō", "in librō"], ok: 0 },
        { t: "orden", es: "Los alumnos están en la escuela con el maestro.", x: "Discipulī cum magistrō in scholā sunt." },
        { t: "orden", es: "Lucilio recibe una carta de Séneca.", x: "Lūcīlius epistulam ā Sēnecā accipit." }
      ]
    },
    {
      id: "la2-4",
      titulo: "Preposiciones con acusativo; in con dos casos",
      min: 35,
      intro: "Hoy ves nueve preposiciones que piden acusativo, y dos ya están en tu página: *secundum* y *per* (*per modum*). La clave del día es *in*: con ablativo dice dónde estás; con acusativo, adónde vas.",
      bloques: [
        {
          t: "tabla",
          cab: ["Preposición", "Significa", "Ejemplo", "Traducción"],
          audio: [0, 2],
          filas: [
            ["ad", "a, hacia; junto a", "ad scholam", "a la escuela"],
            ["in", "a, hacia dentro", "in bibliothēcam", "a la biblioteca (entrando)"],
            ["per", "a través de, por", "per viam", "por el camino"],
            ["post", "después de; detrás de", "post scholam", "después de clase"],
            ["ante", "antes de; delante de", "ante iānuam", "delante de la puerta"],
            ["propter", "a causa de", "propter fūmum", "a causa del humo"],
            ["contrā", "contra", "contrā Gentīlēs", "contra los gentiles"],
            ["inter", "entre", "inter amīcōs", "entre amigos"],
            ["secundum", "según", "secundum nātūram", "según la naturaleza"]
          ]
        },
        {
          t: "p",
          x: "**in + ablativo** = dónde, sin movimiento: *Magister in scholā est*, «el maestro está en la escuela». **in + acusativo** = adónde, con movimiento hacia dentro: *Magister in scholam intrat*, «el maestro entra en la escuela». *Sub* funciona igual: *sub mēnsā* (debajo de la mesa), *sub mēnsam* (hacia debajo de la mesa)."
        },
        {
          t: "ej",
          items: [
            ["Magister in scholam intrat.", "El maestro entra en la escuela."],
            ["Magister in scholā est.", "El maestro está en la escuela."],
            ["Discipulī ad scholam ambulant.", "Los alumnos van andando a la escuela."],
            ["Fūmus per fenestram intrat.", "El humo entra por la ventana."],
            ["Inter nōmen et verbum magna differentia est.", "Entre el nombre y el verbo hay una gran diferencia."],
            ["Secundum nātūram vīvit.", "Vive según la naturaleza."],
            ["Post hoc, ergō propter hoc.", "Después de esto, luego a causa de esto."]
          ]
        },
        {
          t: "nota",
          x: "*Post hoc, ergō propter hoc* es una falacia clásica: confunde *post* (lo que viene después) con *propter* (lo que es causa). El gallo canta antes del amanecer, pero no hace salir el sol."
        },
        {
          t: "nota",
          x: "Para ir hacia una persona también se usa *ad*: *ad magistrum venit* (acude al maestro). Pero «dar algo a alguien» es dativo, sin preposición: *magistrō librum dat*. Y santo Tomás escribió la *Summa contrā Gentīlēs*, «contra los gentiles» (*Gentīlēs* es un acusativo de la 3.ª)."
        }
      ],
      vocab: [
        ["ad", "a, hacia; junto a (+ acusativo)"],
        ["per", "a través de, por (+ acusativo)"],
        ["post", "después de; detrás de (+ acusativo)"],
        ["ante", "antes de; delante de (+ acusativo)"],
        ["propter", "a causa de (+ acusativo)"],
        ["contrā", "contra (+ acusativo)"],
        ["inter", "entre (+ acusativo)"],
        ["secundum nātūram", "según la naturaleza"],
        ["in scholam intrat", "entra en la escuela (in + acusativo: movimiento)"],
        ["intrō, intrāre", "entrar"],
        ["ambulō, ambulāre", "pasear, andar"],
        ["vīvō, vīvere", "vivir"],
        ["via, viae (f.)", "camino, vía"],
        ["iānua, iānuae (f.)", "puerta"],
        ["fenestra, fenestrae (f.)", "ventana"],
        ["differentia, differentiae (f.)", "diferencia"],
        ["Post hoc, ergō propter hoc.", "Después de esto, luego a causa de esto (falacia)."]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "«Magister in scholam intrat» significa…",
          ops: ["El maestro entra en la escuela.", "El maestro está en la escuela.", "El maestro sale de la escuela."],
          ok: 0
        },
        { t: "mc", q: "Completa: «Discipulus in ___ est» (está en la escuela).", ops: ["scholā", "scholam", "scholae"], ok: 0 },
        { t: "mc", q: "¿Cuál de estas preposiciones pide acusativo?", ops: ["propter", "sine", "cum"], ok: 0 },
        {
          t: "mc",
          q: "*Post hoc, ergō propter hoc* es una falacia porque…",
          ops: ["toma lo que viene después por lo que es causa", "confunde el sujeto con el predicado", "usa mal el ablativo"],
          ok: 0
        },
        { t: "mc", q: "«inter amīcōs» significa…", ops: ["entre amigos", "contra los amigos", "sin amigos"], ok: 0 },
        { t: "oir", x: "ad scholam", ops: ["ad scholam", "in scholā", "ā scholā"], ok: 0 },
        { t: "orden", es: "Los alumnos van andando a la escuela.", x: "Discipulī ad scholam ambulant." },
        { t: "orden", es: "Vive según la naturaleza.", x: "Secundum nātūram vīvit." }
      ]
    },
    {
      id: "la2-5",
      titulo: "Vocativo e imperativo",
      min: 35,
      intro: "Para conversar en latín con tu tutor de IA necesitas llamar a alguien (vocativo) y pedirle algo (imperativo). *Dīc mihi, magister…* («dime, maestro…») abre muchos diálogos medievales.",
      bloques: [
        {
          t: "tabla",
          cab: ["Nominativo", "Vocativo", "Regla"],
          audio: [0, 1],
          filas: [
            ["dominus", "domine", "-us → -e"],
            ["Mārcus", "Mārce", "-us → -e"],
            ["amīcus", "amīce", "-us → -e"],
            ["Lūcīlius", "Lūcīlī", "-ius → -ī"],
            ["fīlius", "fīlī", "-ius → -ī"],
            ["meus", "mī", "mī fīlī: hijo mío"],
            ["magister", "magister", "igual que el nominativo"],
            ["puella", "puella", "igual que el nominativo"],
            ["discipulī", "discipulī", "plural: igual que el nominativo"]
          ]
        },
        {
          t: "p",
          x: "Solo cambian los masculinos de la 2.ª en *-us* (→ *-e*) y en *-ius* (→ *-ī*). Todo lo demás tiene el vocativo igual que el nominativo. Va entre comas, a menudo detrás de la primera palabra (*Dīc mihi, Mārce, …*), y puede llevar *ō*: *Ō amīce!*"
        },
        {
          t: "tabla",
          cab: ["Infinitivo", "A uno", "A varios", "Español"],
          audio: [1, 2],
          filas: [
            ["amāre", "amā", "amāte", "¡ama! / ¡amad!"],
            ["vidēre", "vidē", "vidēte", "¡mira! / ¡mirad!"],
            ["legere", "lege", "legite", "¡lee! / ¡leed!"],
            ["scrībere", "scrībe", "scrībite", "¡escribe! / ¡escribid!"],
            ["audīre", "audī", "audīte", "¡escucha! / ¡escuchad!"],
            ["dīcere", "dīc", "dīcite", "¡di! / ¡decid!"]
          ]
        },
        {
          t: "p",
          x: "El imperativo singular es el infinitivo sin *-re*: *amā-re* → *amā*, *audī-re* → *audī*, *lege-re* → *lege*. El plural añade *-te* (*amāte*, *audīte*); en verbos como *legere* la *e* pasa a *i*: *legite*, *scrībite*. *Dīc* es irregular, sin *-e* (como *dūc*, «guía», y *fac*, «haz»), pero su plural es regular: *dīcite*."
        },
        {
          t: "ej",
          items: [
            ["Dīc mihi, magister: quid est signum?", "Dime, maestro: ¿qué es un signo?"],
            ["Audī, Lūcīlī!", "¡Escucha, Lucilio!"],
            ["Lege, Mārce, et scrībe!", "¡Lee, Marco, y escribe!"],
            ["Audīte, discipulī!", "¡Escuchad, alumnos!"],
            ["Venī mēcum, amīce!", "¡Ven conmigo, amigo!"],
            ["Venīte, adōrēmus!", "¡Venid, adoremos! (del villancico «Adeste fidēlēs»)"],
            ["Avē, Marīa, grātiā plēna, Dominus tēcum.", "Dios te salve, María, llena eres de gracia, el Señor es contigo."]
          ]
        },
        {
          t: "nota",
          x: "Para prohibir no se usa *nōn* con el imperativo, sino *nōlī* (a uno) o *nōlīte* (a varios) + infinitivo: *Nōlī dormīre, Tite!* (¡no duermas, Tito!), *Nōlīte clāmāre!* (¡no gritéis!)."
        },
        { t: "nota", x: "*Salvē* y *valē* también son imperativos («¡que estés bien!»), así que tienen plural: *Salvēte, discipulī!*, *Valēte, amīcī!*" }
      ],
      vocab: [
        ["Dīc mihi…", "Dime…"],
        ["dīc! / dīcite!", "¡di! / ¡decid!"],
        ["audī! / audīte!", "¡escucha! / ¡escuchad!"],
        ["lege! / legite!", "¡lee! / ¡leed!"],
        ["scrībe! / scrībite!", "¡escribe! / ¡escribid!"],
        ["respondē! / respondēte!", "¡responde! / ¡responded!"],
        ["venī! / venīte!", "¡ven! / ¡venid!"],
        ["tacē! / tacēte!", "¡calla! / ¡callad!"],
        ["Nōlī dormīre!", "¡No duermas! (nōlī + infinitivo)"],
        ["Ignōsce mihi!", "¡Perdóname! (ignōscō pide dativo)"],
        ["Salvēte!", "¡Hola! (a varios)"],
        ["Valēte!", "¡Adiós! (a varios)"],
        ["fīlius, fīliī (m.)", "hijo"],
        ["mī fīlī!", "¡hijo mío!"],
        ["rēctē", "bien, correctamente"],
        ["optimē", "muy bien, perfectamente"],
        ["clāmō, clāmāre", "gritar"]
      ],
      ejercicios: [
        { t: "mc", q: "El vocativo de «Lūcīlius» es…", ops: ["Lūcīlī", "Lūcīle", "Lūcīlius"], ok: 0 },
        { t: "mc", q: "El vocativo de «Mārcus» es…", ops: ["Mārce", "Mārcī", "Mārcus"], ok: 0 },
        { t: "mc", q: "El vocativo de «magister» es…", ops: ["magister", "magistre", "magistrī"], ok: 0 },
        { t: "mc", q: "«Audīte!» se dice…", ops: ["a varias personas", "a una persona", "a nadie: es una pregunta"], ok: 0 },
        { t: "mc", q: "El imperativo singular de «dīcere» es…", ops: ["dīc", "dīce", "dīcite"], ok: 0 },
        { t: "oir", x: "scrībite", ops: ["scrībite", "scrībe", "scrībit"], ok: 0 },
        { t: "orden", es: "Dime, maestro: ¿qué es un signo?", x: "Dīc mihi, magister: quid est signum?" },
        { t: "orden", es: "¡No duermas, Tito!", x: "Nōlī dormīre, Tite!" }
      ]
    },
    {
      id: "la2-6",
      titulo: "Las tablas completas: seis casos",
      min: 40,
      intro: "Hoy juntas los seis casos, en singular y plural, de cinco modelos. Con estas dos tablas reconocerás casi cualquier sustantivo de la 1.ª y la 2.ª declinación de tu página.",
      bloques: [
        {
          t: "tabla",
          cab: ["Singular", "puella", "dominus", "verbum", "puer", "liber"],
          audio: [1, 2, 3, 4, 5],
          filas: [
            ["Nominativo", "puella", "dominus", "verbum", "puer", "liber"],
            ["Vocativo", "puella", "domine", "verbum", "puer", "liber"],
            ["Acusativo", "puellam", "dominum", "verbum", "puerum", "librum"],
            ["Genitivo", "puellae", "dominī", "verbī", "puerī", "librī"],
            ["Dativo", "puellae", "dominō", "verbō", "puerō", "librō"],
            ["Ablativo", "puellā", "dominō", "verbō", "puerō", "librō"]
          ]
        },
        {
          t: "tabla",
          cab: ["Plural", "puella", "dominus", "verbum", "puer", "liber"],
          audio: [1, 2, 3, 4, 5],
          filas: [
            ["Nominativo", "puellae", "dominī", "verba", "puerī", "librī"],
            ["Vocativo", "puellae", "dominī", "verba", "puerī", "librī"],
            ["Acusativo", "puellās", "dominōs", "verba", "puerōs", "librōs"],
            ["Genitivo", "puellārum", "dominōrum", "verbōrum", "puerōrum", "librōrum"],
            ["Dativo", "puellīs", "dominīs", "verbīs", "puerīs", "librīs"],
            ["Ablativo", "puellīs", "dominīs", "verbīs", "puerīs", "librīs"]
          ]
        },
        {
          t: "p",
          x: "Cuatro reglas que ahorran memoria: (1) en el neutro, nominativo, vocativo y acusativo son iguales, y en plural acaban en *-a*; (2) dativo y ablativo plural son siempre iguales (*-īs*); (3) el genitivo plural acaba en *-rum*; (4) el vocativo solo cambia en *-us* → *-e* (y *-ius* → *-ī*)."
        },
        {
          t: "p",
          x: "*puer* conserva la *e* en todos los casos (*puerī*, *puerō*); *liber* la pierde (*librī*, *librō*), igual que *magister* (*magistrī*). Por eso el diccionario da siempre el genitivo: *puer, puerī*; *liber, librī*. El genitivo te da la raíz de todos los demás casos."
        },
        {
          t: "tabla",
          cab: ["Caso", "Responde a", "Uso principal", "Ejemplo"],
          audio: [3],
          filas: [
            ["Nominativo", "¿quién?", "sujeto", "Puer legit."],
            ["Vocativo", "(llamada)", "llamar a alguien", "Puer, venī!"],
            ["Acusativo", "¿qué?, ¿adónde?", "objeto directo; ad, in con movimiento", "Puer librum legit."],
            ["Genitivo", "¿de quién?", "posesión, relación", "liber puerī"],
            ["Dativo", "¿a quién?, ¿para quién?", "objeto indirecto; poseedor con est", "Puerō librum dat."],
            ["Ablativo", "¿con qué?, ¿cómo?, ¿dónde?", "instrumento, modo; tras in, cum, dē…", "Puer pennā scrībit."]
          ]
        },
        {
          t: "ej",
          items: [
            ["Mārce, dā puerō librum magistrī!", "¡Marco, dale al niño el libro del maestro!"],
            ["Puer cum puellā ex scholā venit.", "El niño viene de la escuela con la niña."],
            ["Verba puerōrum magistrō grāta sunt.", "Al maestro le gustan las palabras de los niños."],
            ["Agricola in agrō labōrat.", "El campesino trabaja en el campo."],
            ["Poēta fēminae dōnum dat.", "El poeta le da un regalo a la mujer."],
            ["Philosophus ā prīncipiīs incipit.", "El filósofo empieza por los principios."]
          ]
        },
        {
          t: "nota",
          x: "Los masculinos de la 1.ª (*poēta*, *agricola*) se declinan como *puella*, pero son masculinos: *poēta bonus*. Y *vir, virī* (hombre, varón) va como *puer*: *virō*, *virum*, *virōrum*."
        }
      ],
      vocab: [
        ["vir, virī (m.)", "hombre, varón"],
        ["ager, agrī (m.)", "campo"],
        ["fēmina, fēminae (f.)", "mujer"],
        ["poēta, poētae (m.)", "poeta (masculino de la 1.ª)"],
        ["agricola, agricolae (m.)", "campesino (masculino de la 1.ª)"],
        ["dōnum, dōnī (n.)", "regalo"],
        ["caelum, caelī (n.)", "cielo"],
        ["locus, locī (m.)", "lugar"],
        ["numerus, numerī (m.)", "número"],
        ["studium, studiī (n.)", "estudio; afán"],
        ["argūmentum, argūmentī (n.)", "argumento, prueba"],
        ["prīncipium, prīncipiī (n.)", "principio, comienzo"],
        ["cōnsilium, cōnsiliī (n.)", "consejo; plan"],
        ["capitulum, capitulī (n.)", "capítulo (abreviado cap.)"],
        ["articulus, articulī (m.)", "artículo (abreviado art.)"],
        ["labōrō, labōrāre", "trabajar"],
        ["incipiō, incipere", "empezar"]
      ],
      ejercicios: [
        { t: "mc", q: "El genitivo plural de «verbum» es…", ops: ["verbōrum", "verbīs", "verba"], ok: 0 },
        { t: "mc", q: "¿Qué forma puede ser genitivo singular, dativo singular o nominativo plural?", ops: ["puellae", "puellīs", "puellā"], ok: 0 },
        {
          t: "mc",
          q: "«liber, librī»: el genitivo te dice que la palabra…",
          ops: ["pierde la e: librō, librum", "conserva la e: liberō, liberum", "es neutra"],
          ok: 0
        },
        { t: "mc", q: "El acusativo plural de «puer» es…", ops: ["puerōs", "puerī", "puerīs"], ok: 0 },
        {
          t: "mc",
          q: "En un neutro como «verbum», ¿qué casos coinciden siempre?",
          ops: ["nominativo, vocativo y acusativo", "genitivo, dativo y ablativo", "nominativo, genitivo y dativo"],
          ok: 0
        },
        { t: "oir", x: "dominōrum", ops: ["dominōrum", "dominōs", "dominīs"], ok: 0 },
        { t: "orden", es: "¡Marco, dale al niño el libro del maestro!", x: "Mārce, dā puerō librum magistrī!" },
        { t: "orden", es: "El campesino trabaja en el campo.", x: "Agricola in agrō labōrat." }
      ]
    },
    {
      id: "la2-7",
      titulo: "Adjetivos y posesivos",
      min: 35,
      intro: "Los adjetivos de la 1.ª y la 2.ª se declinan como *dominus*, *puella* y *verbum*, y concuerdan con su sustantivo en género, número y caso. Los posesivos *meus, tuus, noster, vester* son adjetivos de este tipo.",
      bloques: [
        {
          t: "tabla",
          cab: ["Tipo", "Masculino", "Femenino", "Neutro", "Español"],
          audio: [1, 2, 3],
          filas: [
            ["-us, -a, -um", "bonus", "bona", "bonum", "bueno"],
            ["-er que conserva la e", "līber", "lībera", "līberum", "libre"],
            ["-er que conserva la e", "miser", "misera", "miserum", "desgraciado"],
            ["-er que pierde la e", "pulcher", "pulchra", "pulchrum", "hermoso"],
            ["-er que pierde la e", "sacer", "sacra", "sacrum", "sagrado"]
          ]
        },
        {
          t: "p",
          x: "Como *puer* y *liber*: *līber* conserva la *e* (*līberī*, *līberō*); *pulcher* la pierde (*pulchrī*, *pulchrō*). Te lo dice el femenino del diccionario: *lībera* frente a *pulchra*. No confundas *liber, librī* (libro, con *i* breve) con *līber, lībera, līberum* (libre, con *ī* larga)."
        },
        {
          t: "ej",
          items: [
            ["cum amīcō bonō", "con un buen amigo"],
            ["in librō pulchrō", "en un libro hermoso"],
            ["Puer puellae pulchrae rosam dat.", "El niño le da una rosa a la niña hermosa."],
            ["Magister dē verbīs vērīs disputat.", "El maestro diserta sobre palabras verdaderas."],
            ["Sententia magistrī vēra est, sententia Titī falsa.", "La opinión del maestro es verdadera; la de Tito, falsa."],
            ["Liber antīquus obscūrus est, liber novus clārus.", "El libro antiguo es oscuro; el nuevo, claro."],
            ["Vīta sine amīcīs misera est.", "La vida sin amigos es desgraciada."]
          ]
        },
        {
          t: "nota",
          x: "Concordar no es rimar: *poēta* es masculino aunque se declina como *puella*, así que se dice *poēta bonus*. En tu página, *diuerſos reſpectus* («diversos aspectos») une un adjetivo de la 2.ª con un sustantivo de la 4.ª: coinciden en género, número y caso, no en la terminación."
        },
        {
          t: "tabla",
          cab: ["Posesivo", "Masculino", "Femenino", "Neutro"],
          audio: [1, 2, 3],
          filas: [
            ["mi, mío", "meus", "mea", "meum"],
            ["tu, tuyo", "tuus", "tua", "tuum"],
            ["nuestro", "noster", "nostra", "nostrum"],
            ["vuestro", "vester", "vestra", "vestrum"]
          ]
        },
        {
          t: "p",
          x: "*meus* y *tuus* van como *bonus*; *noster* y *vester* pierden la *e*, como *pulcher*. Suelen ir detrás del sustantivo (*liber meus*, *magister noster*), y si el poseedor es obvio, el latín los omite. El vocativo masculino de *meus* es *mī*: *mī Lūcīlī!*"
        },
        {
          t: "ej",
          items: [
            ["Liber meus in mēnsā tuā est.", "Mi libro está en tu mesa."],
            ["Magister noster bene docet.", "Nuestro maestro enseña bien."],
            ["Mī Lūcīlī, epistula tua mihi grāta est.", "Querido Lucilio, tu carta me resulta grata."],
            ["Pater noster, quī es in caelīs, sānctificētur nōmen tuum.", "Padre nuestro, que estás en los cielos, santificado sea tu nombre."]
          ]
        }
      ],
      vocab: [
        ["līber, lībera, līberum", "libre"],
        ["miser, misera, miserum", "desgraciado, pobre"],
        ["pulcher, pulchra, pulchrum", "hermoso, bello"],
        ["sacer, sacra, sacrum", "sagrado"],
        ["meus, mea, meum", "mi, mío"],
        ["tuus, tua, tuum", "tu, tuyo"],
        ["noster, nostra, nostrum", "nuestro"],
        ["vester, vestra, vestrum", "vuestro"],
        ["Pater noster", "Padre nuestro (pater es de la 3.ª declinación)"],
        ["doctus, docta, doctum", "docto, sabio"],
        ["clārus, clāra, clārum", "claro; famoso"],
        ["obscūrus, obscūra, obscūrum", "oscuro"],
        ["novus, nova, novum", "nuevo"],
        ["antīquus, antīqua, antīquum", "antiguo"],
        ["certus, certa, certum", "cierto, seguro"],
        ["falsus, falsa, falsum", "falso"],
        ["plēnus, plēna, plēnum", "lleno (de: + ablativo o genitivo)"]
      ],
      ejercicios: [
        { t: "mc", q: "Concuerda: «cum amīcō ___»", ops: ["bonō", "bonum", "bona"], ok: 0 },
        { t: "mc", q: "El femenino de «pulcher» es…", ops: ["pulchra", "pulchera", "pulchrum"], ok: 0 },
        { t: "mc", q: "El femenino de «līber» (libre) es…", ops: ["lībera", "lībra", "līberum"], ok: 0 },
        { t: "mc", q: "Completa: «Poēta ___ est» (el poeta es bueno).", ops: ["bonus", "bona", "bonum"], ok: 0 },
        { t: "mc", q: "«Pater noster» significa…", ops: ["Padre nuestro", "Padre vuestro", "Padre mío"], ok: 0 },
        { t: "oir", x: "nostrōs", ops: ["nostrōs", "vestrōs", "nostrīs"], ok: 0 },
        { t: "orden", es: "Mi libro está en tu mesa.", x: "Liber meus in mēnsā tuā est." },
        { t: "orden", es: "Querido Lucilio, tu carta me resulta grata.", x: "Mī Lūcīlī, epistula tua mihi grāta est." }
      ]
    },
    {
      id: "la2-8",
      titulo: "Las palabras de la lógica",
      min: 40,
      intro: "Con estas diez palabras se explica qué es un término, el tema de tu página: el término es un signo, hablado (*vōx*) o pensado (*conceptus*), y funciona como nombre o verbo, sujeto o predicado. Varias son de la 3.ª o la 4.ª declinación: de momento apréndelas como bloques; sus tablas llegan en las semanas 3 y 4.",
      bloques: [
        {
          t: "tabla",
          cab: ["Latín", "Español", "Declinación"],
          audio: [0],
          filas: [
            ["signum, signī", "signo, señal", "2.ª, neutro"],
            ["vōx, vōcis", "voz; palabra hablada", "3.ª, femenino"],
            ["conceptus, conceptūs", "concepto", "4.ª, masculino"],
            ["nōmen, nōminis", "nombre, sustantivo", "3.ª, neutro"],
            ["verbum, verbī", "verbo; palabra", "2.ª, neutro"],
            ["ōrātiō, ōrātiōnis", "oración, enunciado; discurso", "3.ª, femenino"],
            ["subiectum, subiectī", "sujeto", "2.ª, neutro"],
            ["praedicātum, praedicātī", "predicado", "2.ª, neutro"],
            ["significāre", "significar", "verbo, como amāre"],
            ["praedicāre", "afirmar algo de algo, predicar", "verbo, como amāre"]
          ]
        },
        {
          t: "p",
          x: "La cadena viene de Aristóteles: las **voces** son signos de los **conceptos**, y los conceptos representan las cosas. El humo es **signo natural** del fuego: significa por naturaleza, igual para todos. La palabra es signo **ad placitum**, «por convención»: los romanos dicen *rosa* y los griegos *rhodon*, pero el concepto es el mismo."
        },
        {
          t: "ej",
          items: [
            ["Fūmus signum ignis est.", "El humo es signo del fuego."],
            ["Vōx signum conceptūs est.", "La palabra es signo del concepto."],
            ["Vōx significat ad placitum.", "La palabra significa por convención."],
            ["Nōmen significat sine tempore, verbum cum tempore.", "El nombre significa sin tiempo; el verbo, con tiempo."],
            ["Prōpositiō ex nōmine et verbō cōnstat.", "La proposición consta de nombre y verbo."],
            ["In «Homō currit» subiectum est «homō», praedicātum «currit».", "En «El hombre corre», el sujeto es «hombre», y el predicado, «corre»."],
            ["Praedicāre est dīcere aliquid dē aliquō.", "Predicar es decir algo de algo."]
          ]
        },
        {
          t: "nota",
          x: "*praedicāre* (como *amāre*, con *i* breve) es «afirmar algo de algo»: de ahí *praedicātum*, «predicado», y también el «predicar» del sermón. No lo confundas con *praedīcere* (con *ī* larga), «predecir»."
        },
        {
          t: "nota",
          x: "En lógica, *ōrātiō* no es solo la oración gramatical: es cualquier expresión cuyas partes significan por separado, con verbo (*homō currit*, «el hombre corre») o sin él (*homō albus*, «hombre blanco»)."
        },
        { t: "p", x: "Tu página habla del término *per modum praedicātī et subiectī*, «a modo de predicado y de sujeto»: ya sabes qué son las dos piezas." }
      ],
      vocab: [
        ["signum, signī (n.)", "signo, señal"],
        ["vōx, vōcis (f.)", "voz; palabra hablada (3.ª declinación)"],
        ["conceptus, conceptūs (m.)", "concepto (4.ª declinación)"],
        ["nōmen, nōminis (n.)", "nombre; sustantivo (3.ª declinación)"],
        ["ōrātiō, ōrātiōnis (f.)", "oración, enunciado; discurso (3.ª declinación)"],
        ["subiectum, subiectī (n.)", "sujeto"],
        ["praedicātum, praedicātī (n.)", "predicado"],
        ["significō, significāre", "significar"],
        ["praedicō, praedicāre", "afirmar algo de algo; predicar"],
        ["ad placitum", "por convención, a voluntad"],
        ["signum nātūrāle", "signo natural"],
        ["fūmus, fūmī (m.)", "humo"],
        ["ignis, ignis (m.)", "fuego (3.ª declinación)"],
        ["Nōmen significat sine tempore.", "El nombre significa sin tiempo."],
        ["Verbum significat cum tempore.", "El verbo significa con tiempo."],
        ["aliquid dē aliquō", "algo de algo"],
        ["cōnstat ex", "consta de (+ ablativo)"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "«Fūmus signum ignis est» significa…",
          ops: ["El humo es signo del fuego.", "El fuego es signo del humo.", "El humo apaga el fuego."],
          ok: 0
        },
        { t: "mc", q: "En «Homō currit», el predicado es…", ops: ["currit", "homō", "la frase entera"], ok: 0 },
        { t: "mc", q: "Según Aristóteles, ¿qué significa «con tiempo»?", ops: ["el verbo", "el nombre", "el sujeto"], ok: 0 },
        { t: "mc", q: "Una palabra significa *ad placitum*, es decir…", ops: ["por convención", "por naturaleza", "por error"], ok: 0 },
        { t: "mc", q: "«Praedicāre», en lógica, es…", ops: ["afirmar algo de algo", "predecir el futuro", "preguntar algo a alguien"], ok: 0 },
        { t: "oir", x: "conceptus", ops: ["conceptus", "conceptum", "praeceptum"], ok: 0 },
        { t: "orden", es: "El nombre significa sin tiempo.", x: "Nōmen significat sine tempore." },
        { t: "orden", es: "La palabra es signo del concepto.", x: "Vōx signum conceptūs est." }
      ]
    }
  ],
  lecturas: [
    {
      id: "la2-r1",
      titulo: "Magister et discipulī",
      nivel: "Inicial",
      texto: "Magister in scholam intrat.\nMagister: «Salvēte, discipulī!»\nDiscipulī: «Salvē, magister!»\nMagister: «Audīte! Hodiē dē nōmine et verbō disputāmus. Mārce, tabulam spectā et lege!»\nMārcus: «Homō currit.»\nMagister: «Rēctē. Dīc mihi, Mārce: quid est “homō”?»\nMārcus: «Nōmen est, magister.»\nMagister: «Et quid est “currit”?»\nMārcus: «Verbum.»\nMagister: «Optimē! Nunc scrībe in tabulā: “Puer legit.”»\nMārcus scrībit. Magister Titum spectat.\nMagister: «Tite, ubi est subiectum?»\nTitus nihil respondet: dormit!\nMagister: «Tite! Nōlī dormīre! Audī et respondē!»\nTitus: «Ignōsce mihi, magister! Subiectum est “puer”, praedicātum “legit”.»\nMagister: «Bene, Tite. Nunc, discipulī, librōs aperīte, legite et scrībite!»",
      traduccion: "El maestro entra en el aula.\nMaestro: «¡Hola, alumnos!»\nAlumnos: «¡Hola, maestro!»\nMaestro: «¡Escuchad! Hoy tratamos del nombre y del verbo. Marco, mira la pizarra y lee.»\nMarco: «El hombre corre.»\nMaestro: «Correcto. Dime, Marco: ¿qué es “hombre”?»\nMarco: «Es un nombre, maestro.»\nMaestro: «¿Y qué es “corre”?»\nMarco: «Un verbo.»\nMaestro: «¡Muy bien! Ahora escribe en la pizarra: “El niño lee.”»\nMarco escribe. El maestro mira a Tito.\nMaestro: «Tito, ¿dónde está el sujeto?»\nTito no responde nada: ¡está dormido!\nMaestro: «¡Tito! ¡No duermas! ¡Escucha y responde!»\nTito: «¡Perdóname, maestro! El sujeto es “niño”, y el predicado, “lee”.»\nMaestro: «Bien, Tito. Ahora, alumnos, abrid los libros, leed y escribid.»",
      notas: "Fíjate en los vocativos (*Mārce*, *Tite*, *discipulī*, *magister*) y en los imperativos, en singular (*spectā*, *lege*, *dīc*, *scrībe*, *audī*) y en plural (*audīte*, *aperīte*, *legite*, *scrībite*). *Nōlī dormīre!* es «¡no duermas!».",
      glosa: {
        magister: "maestro; también vocativo: ¡maestro!",
        in: "en (+ ablativo: lugar); a, hacia dentro (+ acusativo: movimiento)",
        scholam: "el aula, la escuela (acusativo: in + acusativo = movimiento)",
        intrat: "entra",
        "salvēte": "¡hola! (a varios: imperativo plural de salvē)",
        "discipulī": "los alumnos (nominativo plural); ¡alumnos! (vocativo)",
        "salvē": "¡hola! (a uno)",
        "audīte": "¡escuchad! (imperativo plural de audiō)",
        "hodiē": "hoy",
        "dē": "sobre, acerca de (+ ablativo)",
        "nōmine": "el nombre (ablativo de nōmen, 3.ª declinación)",
        et: "y",
        "verbō": "el verbo (ablativo de verbum)",
        "disputāmus": "tratamos, discutimos (1.ª persona del plural de disputō: la -mus final = «nosotros»; el presente completo llega en la semana 3)",
        "mārce": "¡Marco! (vocativo de Mārcus)",
        tabulam: "la pizarra, la tablilla (acusativo)",
        "spectā": "¡mira! (imperativo de spectō)",
        lege: "¡lee! (imperativo de legō)",
        "mārcus": "Marco (nombre)",
        "homō": "el hombre, el ser humano (3.ª declinación)",
        currit: "corre",
        "rēctē": "correcto, bien",
        "dīc": "¡di! (imperativo irregular de dīcō)",
        mihi: "me, a mí (dativo de ego)",
        quid: "qué",
        est: "es, está",
        "nōmen": "nombre, sustantivo (3.ª declinación)",
        verbum: "verbo",
        "optimē": "¡muy bien!",
        nunc: "ahora",
        "scrībe": "¡escribe! (imperativo de scrībō)",
        "tabulā": "la pizarra (ablativo: in + ablativo = lugar)",
        puer: "el niño",
        legit: "lee",
        "scrībit": "escribe",
        titum: "a Tito (acusativo de Titus)",
        spectat: "mira",
        tite: "¡Tito! (vocativo de Titus)",
        ubi: "dónde",
        subiectum: "el sujeto",
        titus: "Tito (nombre)",
        nihil: "nada",
        respondet: "responde",
        dormit: "duerme",
        "nōlī": "no (+ infinitivo: «nōlī dormīre» = no duermas)",
        "dormīre": "dormir (infinitivo)",
        "audī": "¡escucha! (imperativo de audiō)",
        "respondē": "¡responde! (imperativo de respondeō)",
        "ignōsce": "¡perdona! (imperativo de ignōscō, que pide dativo: «ignōsce mihi» = perdóname)",
        "praedicātum": "el predicado",
        bene: "bien",
        "librōs": "los libros (acusativo plural)",
        "aperīte": "¡abrid! (imperativo plural de aperiō)",
        legite: "¡leed! (imperativo plural de legō)",
        "scrībite": "¡escribid! (imperativo plural de scrībō)"
      },
      preguntas: [
        { q: "¿Qué es «homō», según Marco?", ops: ["Un nombre", "Un verbo", "Un predicado"], ok: 0 },
        { q: "¿Por qué no responde Tito a la primera?", ops: ["Porque está dormido", "Porque no sabe la respuesta", "Porque no está en clase"], ok: 0 },
        { q: "En «Puer legit», ¿cuál es el predicado?", ops: ["legit", "puer", "Tite"], ok: 0 },
        { q: "¿Qué manda el maestro al final?", ops: ["Abrir los libros, leer y escribir", "Salir del aula", "Dormir un rato"], ok: 0 }
      ]
    },
    {
      id: "la2-r2",
      titulo: "Dē signīs",
      nivel: "Intermedio",
      texto: "Agricola in agrō labōrat. Subitō in silvā fūmum videt. Ignem nōn videt, sed cōgitat: «Ubi fūmus, ibi ignis.» Fūmus enim signum ignis est: nōn sē mōnstrat, sed ignem.\n\nEtiam verba signa sunt. Magister discipulīs dīcit: «rosa». Discipulī vōcem audiunt, sed dē rosā cōgitant. Vōx enim conceptum significat, et conceptus rosam. Verba igitur signa conceptuum sunt.\n\nSed inter fūmum et verbum magna differentia est. Fūmus nātūrā ignem significat: signum nātūrāle est. Verbum autem ad placitum significat: Rōmānī «rosa» dīcunt, Graecī «rhodon», sed conceptus īdem est. Terminī quoque, ut «homō» et «currit», signa ad placitum sunt.",
      traduccion: "Un campesino trabaja en el campo. De repente ve humo en el bosque. No ve el fuego, pero piensa: «Donde hay humo, hay fuego». Pues el humo es signo del fuego: no se muestra a sí mismo, sino al fuego.\n\nTambién las palabras son signos. El maestro dice a los alumnos: «rosa». Los alumnos oyen la palabra, pero piensan en una rosa. Pues la palabra significa el concepto, y el concepto, la rosa. Por tanto, las palabras son signos de los conceptos.\n\nPero entre el humo y la palabra hay una gran diferencia. El humo significa el fuego por naturaleza: es un signo natural. La palabra, en cambio, significa por convención: los romanos dicen «rosa»; los griegos, «rhodon», pero el concepto es el mismo. También los términos, como «homō» y «currit», son signos por convención.",
      notas: "La idea viene de Aristóteles (*Dē interpretātiōne*, cap. 1): las palabras cambian de una lengua a otra, pero los conceptos son los mismos para todos. *Ad placitum* («por convención») es la etiqueta escolástica de los signos que significan por acuerdo; el humo, en cambio, es un *signum nātūrāle*.",
      glosa: {
        agricola: "el campesino (1.ª declinación, pero masculino)",
        in: "en (+ ablativo)",
        "agrō": "el campo (ablativo de ager)",
        "labōrat": "trabaja",
        "subitō": "de repente",
        "silvā": "el bosque (ablativo de silva)",
        "fūmum": "humo (acusativo de fūmus)",
        videt: "ve",
        ignem: "el fuego (acusativo de ignis, 3.ª declinación)",
        "nōn": "no",
        sed: "pero; sino",
        "cōgitat": "piensa",
        ubi: "donde",
        "fūmus": "el humo",
        ibi: "allí",
        ignis: "fuego; en «signum ignis», «del fuego» (genitivo: en esta palabra de la 3.ª, igual que el nominativo)",
        enim: "pues, en efecto",
        signum: "signo, señal",
        est: "es; hay",
        "sē": "a sí mismo (pronombre reflexivo, acusativo)",
        "mōnstrat": "muestra",
        etiam: "también",
        verba: "las palabras",
        signa: "signos (plural de signum)",
        sunt: "son",
        magister: "el maestro",
        "discipulīs": "a los alumnos (dativo plural)",
        "dīcit": "dice",
        rosa: "rosa",
        "discipulī": "los alumnos",
        "vōcem": "la voz, la palabra hablada (acusativo de vōx, 3.ª declinación)",
        audiunt: "oyen",
        "dē": "en, sobre (+ ablativo)",
        "rosā": "la rosa (ablativo)",
        "cōgitant": "piensan",
        "vōx": "la voz, la palabra hablada (3.ª declinación)",
        conceptum: "el concepto (acusativo de conceptus, 4.ª declinación)",
        significat: "significa",
        et: "y",
        conceptus: "el concepto (4.ª declinación)",
        rosam: "la rosa (acusativo)",
        igitur: "por tanto",
        conceptuum: "de los conceptos (genitivo plural de conceptus, 4.ª declinación)",
        inter: "entre (+ acusativo)",
        verbum: "la palabra (aquí, acusativo tras inter)",
        magna: "grande",
        differentia: "diferencia",
        "nātūrā": "por naturaleza (ablativo de nātūra)",
        "nātūrāle": "natural (3.ª declinación)",
        autem: "en cambio",
        ad: "a, según (+ acusativo)",
        placitum: "lo acordado («ad placitum» = por convención)",
        "rōmānī": "los romanos",
        "dīcunt": "dicen",
        "graecī": "los griegos",
        rhodon: "rosa, en griego (ῥόδον)",
        "īdem": "el mismo",
        "terminī": "los términos",
        quoque: "también",
        ut: "como",
        "homō": "hombre, ser humano (3.ª declinación)",
        currit: "corre"
      },
      preguntas: [
        { q: "¿Qué ve el campesino en el bosque?", ops: ["Humo", "Fuego", "Una rosa"], ok: 0 },
        { q: "Según el texto, ¿de qué son signos las palabras?", ops: ["De los conceptos", "Del fuego", "De otras palabras"], ok: 0 },
        {
          q: "¿Por qué el humo es un signo natural?",
          ops: ["Porque significa el fuego por naturaleza", "Porque así lo acordaron los romanos", "Porque es una palabra griega"],
          ok: 0
        },
        {
          q: "¿Qué cambia entre «rosa» y «rhodon»?",
          ops: ["La palabra; el concepto es el mismo", "El concepto; la palabra es la misma", "Nada: son signos naturales"],
          ok: 0
        }
      ]
    },
    {
      id: "la2-r3",
      titulo: "Sēneca Lūcīliō suō (carta inventada)",
      nivel: "Inicial",
      texto: "Sēneca Lūcīliō suō salūtem.\n\nGrātiās tibi agō, mī Lūcīlī: epistula tua mihi grāta est. In epistulā dē librīs tuīs scrībis. Multī librī tibi sunt, sed cavē! Nōn multī librī animum docent, sed bonī. Lege igitur librōs bonōs, et lege cum cūrā.\n\nDē philosophiā quoque scrībis. Philosophia nōn in verbīs est, sed in vītā; nōn lūdus est, sed medicīna animī. Cōgitā dē vītā tuā, et scrībe mihi dē animō tuō, nōn dē fāmā.\n\nEgo in vīllā meā sum. Vīlla parva est, sed hortus pulcher. Cum amīcīs ambulō et dē nātūrā disputō. Sine amīcīs vīta misera est.\n\nValē, et scrībe mihi saepe.",
      traduccion: "Séneca saluda a su querido Lucilio.\n\nTe doy las gracias, querido Lucilio: tu carta me resulta grata. En ella me escribes sobre tus libros. Tienes muchos libros, pero ¡cuidado! No son muchos libros los que educan el alma, sino los buenos. Lee, pues, libros buenos, y léelos con cuidado.\n\nTambién me escribes sobre la filosofía. La filosofía no está en las palabras, sino en la vida; no es un juego, sino la medicina del alma. Piensa en tu vida, y escríbeme sobre tu ánimo, no sobre tu fama.\n\nYo estoy en mi casa de campo. La casa es pequeña, pero el jardín es hermoso. Paseo con mis amigos y converso sobre la naturaleza. Sin amigos, la vida es desgraciada.\n\nAdiós, y escríbeme a menudo.",
      notas: "Carta inventada para este curso, al estilo de las *Epistulae mōrālēs*: no es un texto de Séneca. Las cartas auténticas sí empiezan así: *Sēneca Lūcīliō suō salūtem* (se sobrentiende *dīcit*: «le dice salud»), y acaban con *Valē*.",
      glosa: {
        "sēneca": "Séneca",
        "lūcīliō": "a Lucilio (dativo)",
        "suō": "a su querido (dativo de suus, «suyo»)",
        "salūtem": "salud, saludo (acusativo de salūs; se sobrentiende «dīcit»: le dice «salud»)",
        "grātiās": "gracias (acusativo plural)",
        tibi: "a ti (dativo de tū)",
        "agō": "doy («grātiās agō» = doy las gracias)",
        "mī": "mío, querido (vocativo de meus)",
        "lūcīlī": "¡Lucilio! (vocativo de Lūcīlius)",
        epistula: "la carta",
        tua: "tu (de tuus)",
        mihi: "me, a mí, para mí (dativo de ego)",
        "grāta": "grata, agradable (+ dativo)",
        est: "es, está",
        in: "en (+ ablativo)",
        "epistulā": "la carta (ablativo)",
        "dē": "sobre, acerca de (+ ablativo)",
        "librīs": "los libros (ablativo plural)",
        "tuīs": "tus (ablativo plural de tuus)",
        "scrībis": "escribes (2.ª persona del singular de scrībō: la -s final = «tú»; el presente completo llega en la semana 3)",
        "multī": "muchos",
        "librī": "libros",
        sunt: "son, hay («tibi sunt» = tienes)",
        sed: "pero; sino",
        "cavē": "¡cuidado! (imperativo de caveō)",
        "nōn": "no",
        animum: "el alma, la mente (acusativo)",
        docent: "enseñan, educan",
        "bonī": "buenos",
        lege: "¡lee! (imperativo)",
        igitur: "pues, por tanto",
        "librōs": "libros (acusativo plural)",
        "bonōs": "buenos (acusativo plural)",
        et: "y",
        cum: "con (+ ablativo)",
        "cūrā": "cuidado (ablativo: «cum cūrā» = con cuidado)",
        "philosophiā": "la filosofía (ablativo)",
        quoque: "también",
        philosophia: "la filosofía",
        "verbīs": "las palabras (ablativo plural)",
        "vītā": "la vida (ablativo)",
        "lūdus": "juego",
        "medicīna": "medicina",
        "animī": "del alma (genitivo)",
        "cōgitā": "¡piensa! (imperativo de cōgitō)",
        "tuā": "tu (ablativo de tua)",
        "scrībe": "¡escribe! (imperativo)",
        "animō": "el ánimo, el alma (ablativo)",
        "tuō": "tu (ablativo de tuus)",
        "fāmā": "la fama (ablativo)",
        ego: "yo",
        "vīllā": "la casa de campo (ablativo de vīlla)",
        "meā": "mi (ablativo de mea)",
        sum: "estoy, soy",
        "vīlla": "la casa de campo",
        parva: "pequeña",
        hortus: "el jardín, el huerto",
        pulcher: "hermoso",
        "amīcīs": "los amigos (ablativo plural)",
        "ambulō": "paseo (1.ª persona del singular de ambulō: la -ō final = «yo»)",
        "nātūrā": "la naturaleza (ablativo)",
        "disputō": "converso, discuto (1.ª persona del singular de disputō: la -ō final = «yo»)",
        sine: "sin (+ ablativo)",
        "vīta": "la vida",
        misera: "desgraciada",
        "valē": "¡adiós!, ¡cuídate!",
        saepe: "a menudo"
      },
      preguntas: [
        {
          q: "¿Qué consejo da Séneca sobre los libros?",
          ops: ["Leer libros buenos, y con cuidado", "Leer muchos libros deprisa", "No leer ningún libro"],
          ok: 0
        },
        { q: "Según Séneca, ¿dónde está la filosofía?", ops: ["En la vida, no en las palabras", "En los libros griegos", "En la fama"], ok: 0 },
        {
          q: "¿Qué hace Séneca en su casa de campo?",
          ops: ["Pasea con amigos y conversa sobre la naturaleza", "Escribe libros de lógica", "Trabaja el campo él solo"],
          ok: 0
        }
      ]
    },
    {
      id: "la2-r4",
      titulo: "In bibliothēcā",
      nivel: "Inicial",
      texto: "Post scholam Mārcus et Titus in bibliothēcam intrant. Bibliothēca magna et quiēta est. In armāriīs multī librī sunt: librī Aristotelis, Boēthiī, Augustīnī.\n\nMonachus librōs cūrat. Discipulīs librōs dat et dīcit: «Librōs cum cūrā aperīte! Nōlīte in librīs scrībere!» Mārcus librum Boēthiī accipit, Titus librum Aristotelis.\n\nMārcus ad mēnsam sedet et magnā cum cūrā legit. Titus autem per fenestram hortum spectat.\n\nIn angulō vir doctus sedet et librum antīquum pennā dēscrībit, nam librī rārī et cārī sunt.\n\nVesperī monachus dīcit: «Discipulī, librōs mihi reddite!» Titus librum reddit et dīcit: «Aristotelēs difficilis est!» Monachus rīdet: «Difficilis, sed pulcher. Crās venī iterum, Tite!»",
      traduccion: "Después de clase, Marco y Tito entran en la biblioteca. La biblioteca es grande y silenciosa. En los armarios hay muchos libros: libros de Aristóteles, de Boecio, de Agustín.\n\nUn monje cuida los libros. Da los libros a los alumnos y dice: «¡Abrid los libros con cuidado! ¡No escribáis en los libros!». Marco recibe un libro de Boecio; Tito, uno de Aristóteles.\n\nMarco se sienta a la mesa y lee con gran cuidado. Tito, en cambio, mira el jardín por la ventana.\n\nEn un rincón está sentado un sabio que copia un libro antiguo con una pluma, pues los libros son raros y caros.\n\nPor la tarde, el monje dice: «Alumnos, devolvedme los libros». Tito devuelve el libro y dice: «¡Aristóteles es difícil!». El monje sonríe: «Difícil, pero hermoso. Vuelve mañana, Tito».",
      notas: "*magnā cum cūrā*: ablativo de modo con adjetivo. *pennā*: ablativo de instrumento, sin preposición. Y compara *in bibliothēcam intrant* (movimiento, acusativo) con *in armāriīs sunt* (lugar, ablativo).",
      glosa: {
        post: "después de (+ acusativo)",
        scholam: "la clase, la escuela (acusativo)",
        "mārcus": "Marco (nombre)",
        et: "y",
        titus: "Tito (nombre)",
        in: "a, hacia dentro (+ acusativo); en (+ ablativo)",
        "bibliothēcam": "la biblioteca (acusativo: in + acusativo = movimiento)",
        intrant: "entran",
        "bibliothēca": "la biblioteca",
        magna: "grande",
        "quiēta": "tranquila, silenciosa",
        est: "es, está",
        "armāriīs": "los armarios (ablativo plural de armārium)",
        "multī": "muchos",
        "librī": "libros (nominativo plural)",
        sunt: "son, hay",
        aristotelis: "de Aristóteles (genitivo de Aristotelēs, 3.ª declinación)",
        "boēthiī": "de Boecio (genitivo de Boēthius)",
        "augustīnī": "de Agustín (genitivo de Augustīnus)",
        monachus: "el monje",
        "librōs": "los libros (acusativo plural)",
        "cūrat": "cuida",
        "discipulīs": "a los alumnos (dativo plural)",
        dat: "da",
        "dīcit": "dice",
        cum: "con (+ ablativo)",
        "cūrā": "cuidado (ablativo de modo)",
        "aperīte": "¡abrid! (imperativo plural de aperiō)",
        "nōlīte": "no (a varios, + infinitivo: «nōlīte scrībere» = no escribáis)",
        "librīs": "los libros (ablativo plural)",
        "scrībere": "escribir (infinitivo)",
        librum: "el libro (acusativo)",
        accipit: "recibe",
        ad: "junto a, a (+ acusativo)",
        "mēnsam": "la mesa (acusativo)",
        sedet: "está sentado, se sienta",
        "magnā": "grande (ablativo: «magnā cum cūrā» = con gran cuidado)",
        legit: "lee",
        autem: "en cambio",
        per: "a través de, por (+ acusativo)",
        fenestram: "la ventana (acusativo)",
        hortum: "el jardín (acusativo)",
        spectat: "mira",
        "angulō": "el rincón (ablativo de angulus)",
        vir: "hombre, varón",
        doctus: "docto, sabio",
        "antīquum": "antiguo (acusativo)",
        "pennā": "con una pluma (ablativo de instrumento)",
        "dēscrībit": "copia",
        nam: "pues, porque",
        "rārī": "raros, escasos",
        "cārī": "caros",
        "vesperī": "por la tarde",
        "discipulī": "¡alumnos! (vocativo plural)",
        mihi: "a mí (dativo)",
        reddite: "¡devolved! (imperativo plural de reddō)",
        reddit: "devuelve",
        "aristotelēs": "Aristóteles",
        difficilis: "difícil (3.ª declinación)",
        "rīdet": "sonríe, se ríe",
        sed: "pero",
        pulcher: "hermoso",
        "crās": "mañana",
        "venī": "¡ven! (imperativo de veniō)",
        iterum: "otra vez",
        tite: "¡Tito! (vocativo)"
      },
      preguntas: [
        { q: "¿Quién cuida los libros?", ops: ["Un monje", "Marco", "El sabio del rincón"], ok: 0 },
        { q: "¿Qué hace Tito mientras Marco lee?", ops: ["Mira el jardín por la ventana", "Lee con gran cuidado", "Copia un libro antiguo"], ok: 0 },
        {
          q: "¿Por qué copia el sabio un libro?",
          ops: ["Porque los libros son raros y caros", "Porque el monje se lo manda", "Porque su libro está roto"],
          ok: 0
        }
      ]
    },
    {
      id: "la2-r5",
      titulo: "Nōmen et verbum",
      nivel: "Intermedio",
      texto: "In ōrātiōne «Homō currit» duo terminī sunt: «homō» et «currit». «Homō» nōmen est, «currit» verbum.\n\nQuid significat nōmen? «Homō» hominem significat, sed sine tempore: nec praesēns nec praeteritum. Verbum autem significat cum tempore: «currit» tempus praesēns significat, «cucurrit» praeteritum.\n\nNōmen sōlum nec vērum nec falsum est; etiam verbum sōlum nec vērum nec falsum est. Sed nōmen cum verbō ōrātiōnem facit, et ōrātiō «Homō currit» aut vēra aut falsa est.\n\nIn hāc ōrātiōne «homō» subiectum est, «currit» praedicātum. Sīc ex nōminibus et verbīs fīunt prōpositiōnēs, et ex prōpositiōnibus syllogismī. Hoc Aristotelēs in librō «Dē interpretātiōne» docet.",
      traduccion: "En la oración «Homō currit» («El hombre corre») hay dos términos: «homō» y «currit». «Homō» es un nombre; «currit», un verbo.\n\n¿Qué significa el nombre? «Homō» significa el hombre, pero sin tiempo: ni presente ni pasado. El verbo, en cambio, significa con tiempo: «currit» significa el tiempo presente; «cucurrit» (corrió), el pasado.\n\nEl nombre solo no es ni verdadero ni falso; tampoco el verbo solo es verdadero ni falso. Pero el nombre con el verbo forma una oración, y la oración «Homō currit» es o verdadera o falsa.\n\nEn esta oración, «homō» es el sujeto, y «currit», el predicado. Así, de nombres y verbos se forman las proposiciones, y de proposiciones, los silogismos. Esto lo enseña Aristóteles en el libro «Sobre la interpretación».",
      notas: "Es la doctrina de Aristóteles en *Dē interpretātiōne*, cap. 1–3: el nombre significa sin tiempo, el verbo con tiempo, y solo su unión es verdadera o falsa. *cucurrit* es el perfecto de *currit*: lo estudiarás en la semana 6.",
      glosa: {
        in: "en (+ ablativo)",
        "ōrātiōne": "la oración, el enunciado (ablativo de ōrātiō, 3.ª declinación)",
        "homō": "hombre, ser humano (3.ª declinación)",
        currit: "corre",
        duo: "dos",
        "terminī": "términos",
        sunt: "son, hay",
        et: "y",
        "nōmen": "nombre, sustantivo",
        est: "es",
        verbum: "verbo",
        quid: "qué",
        significat: "significa",
        hominem: "al hombre (acusativo de homō)",
        sed: "pero",
        sine: "sin (+ ablativo)",
        tempore: "tiempo (ablativo de tempus, 3.ª declinación)",
        nec: "ni («nec… nec…» = ni… ni…)",
        "praesēns": "presente",
        praeteritum: "pasado, pretérito",
        autem: "en cambio",
        cum: "con (+ ablativo)",
        tempus: "tiempo (acusativo; en este neutro es igual que el nominativo)",
        cucurrit: "corrió (perfecto de currō; el perfecto llega en la semana 6)",
        "sōlum": "solo, por sí solo",
        "vērum": "verdadero",
        falsum: "falso",
        etiam: "también",
        "verbō": "el verbo (ablativo)",
        "ōrātiōnem": "una oración (acusativo de ōrātiō)",
        facit: "hace, forma",
        "ōrātiō": "la oración, el enunciado",
        aut: "o («aut… aut…» = o… o…)",
        "vēra": "verdadera",
        falsa: "falsa",
        "hāc": "esta (ablativo femenino de hic, haec, hoc, que verás en la semana 3: «in hāc ōrātiōne» = en esta oración)",
        subiectum: "sujeto",
        "praedicātum": "predicado",
        "sīc": "así",
        ex: "de, a partir de (+ ablativo)",
        "nōminibus": "nombres (ablativo plural de nōmen)",
        "verbīs": "verbos (ablativo plural)",
        "fīunt": "se forman, se hacen (de fierī)",
        "prōpositiōnēs": "proposiciones (nominativo plural de prōpositiō)",
        "prōpositiōnibus": "proposiciones (ablativo plural)",
        "syllogismī": "silogismos (nominativo plural)",
        hoc: "esto (acusativo neutro de hic, haec, hoc: es el objeto de docet)",
        "aristotelēs": "Aristóteles",
        "librō": "el libro (ablativo)",
        "dē": "sobre (+ ablativo)",
        "interpretātiōne": "la interpretación (ablativo); «Dē interpretātiōne» = «Sobre la interpretación», obra de Aristóteles",
        docet: "enseña"
      },
      preguntas: [
        {
          q: "¿Qué diferencia hay entre el nombre y el verbo?",
          ops: ["El verbo significa con tiempo; el nombre, sin tiempo", "El nombre es verdadero; el verbo, falso", "Ninguna: los dos significan con tiempo"],
          ok: 0
        },
        { q: "¿Qué puede ser verdadero o falso?", ops: ["La oración «Homō currit»", "El nombre «homō» solo", "El verbo «currit» solo"], ok: 0 },
        { q: "En «Homō currit», ¿cuál es el sujeto?", ops: ["homō", "currit", "cucurrit"], ok: 0 }
      ]
    }
  ]
});
