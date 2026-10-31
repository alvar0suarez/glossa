// Glossa · latín · semana 6: El pasado y los participios
window.CONTENT.la.semanas.push({
  n: 6,
  lecciones: [
    {
      id: "la6-1",
      titulo: "El perfecto: «dīxit», «fuit»",
      min: 40,
      intro: "El perfecto cuenta lo que ya pasó: *Aristotelēs multōs librōs scrīpsit* (Aristóteles escribió muchos libros). En tu página sirve para remitir a lo ya explicado: *ut suprā dīximus*, «como hemos dicho más arriba».",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "Terminación", "sum → fuī", "dīcō → dīxī", "Español"],
          audio: [2, 3],
          filas: [
            ["ego", "-ī", "fuī", "dīxī", "fui / dije"],
            ["tū", "-istī", "fuistī", "dīxistī", "fuiste / dijiste"],
            ["is, ea", "-it", "fuit", "dīxit", "fue / dijo"],
            ["nōs", "-imus", "fuimus", "dīximus", "fuimos / dijimos"],
            ["vōs", "-istis", "fuistis", "dīxistis", "fuisteis / dijisteis"],
            ["eī, eae", "-ērunt", "fuērunt", "dīxērunt", "fueron / dijeron"]
          ]
        },
        {
          t: "p",
          x: "El perfecto tiene un **tema** propio (*fu-*, *dīx-*), y a ese tema se le añaden siempre las mismas terminaciones, en todos los verbos sin excepción. Si sabes el tema, sabes el tiempo entero."
        },
        {
          t: "p",
          x: "Una forma latina vale por dos tiempos españoles: *dīxit* es «dijo» o «ha dicho», según el contexto. En las remisiones escolásticas suena mejor el compuesto: *ut dīximus*, «como hemos dicho»."
        },
        {
          t: "ej",
          items: [
            ["Aristotelēs multōs librōs scrīpsit.", "Aristóteles escribió muchos libros."],
            ["Platō magister Aristotelis fuit.", "Platón fue el maestro de Aristóteles."],
            ["Aristotelēs Platōnem audīvit.", "Aristóteles fue alumno de Platón (lit. «escuchó a Platón»)."],
            ["Aristotelēs Alexandrum docuit.", "Aristóteles enseñó a Alejandro."],
            ["Quid dīxit magister?", "¿Qué dijo el maestro?"],
            ["Quis hoc fēcit?", "¿Quién hizo esto?"],
            ["Magister discipulīs librum dedit.", "El maestro dio un libro a los alumnos."],
            ["Discipulus magistrum in scholā nōn vīdit.", "El alumno no vio al maestro en la escuela."],
            ["Ut suprā dīximus, terminus pars prōpositiōnis est.", "Como hemos dicho más arriba, el término es parte de la proposición."]
          ]
        },
        {
          t: "nota",
          x: "Los escolásticos llaman a Aristóteles simplemente *Philosophus*, «el Filósofo». Si lees *dīxit Philosophus* o *ut dīcit Philosophus*, es él."
        },
        {
          t: "nota",
          x: "Ojo con *-it*: en algunos verbos el perfecto solo se distingue del presente por una vocal larga (*legit*, «lee»; *lēgit*, «leyó»; *venit*, «viene»; *vēnit*, «vino»), y en los libros antiguos no hay rayas. En cambio, *-istī*, *-istis* y *-ērunt* son marcas seguras de perfecto (salvo *erunt*, «serán», que es futuro de *esse*)."
        }
      ],
      vocab: [
        ["fuit", "fue, estuvo (perfecto de est)"],
        ["fuērunt", "fueron, estuvieron"],
        ["dīxit", "dijo, ha dicho"],
        ["dīximus", "dijimos, hemos dicho"],
        ["scrīpsit", "escribió"],
        ["fēcit", "hizo"],
        ["dedit", "dio"],
        ["vīdit", "vio"],
        ["docuit", "enseñó"],
        ["audīvit", "oyó; fue alumno de"],
        ["ut suprā dīximus", "como hemos dicho más arriba"],
        ["dīxit Philosophus", "dijo el Filósofo (Aristóteles)"],
        ["ōlim", "antaño; una vez"],
        ["posteā", "después, más tarde"],
        ["deinde", "luego, a continuación"],
        ["diū", "mucho tiempo"]
      ],
      ejercicios: [
        { t: "mc", q: "«Dīxērunt» significa…", ops: ["dijeron", "dicen", "dirán"], ok: 0 },
        { t: "mc", q: "¿Qué terminación de perfecto corresponde a «tú»?", ops: ["-istī", "-imus", "-ērunt"], ok: 0 },
        {
          t: "mc",
          q: "«Aristotelēs Platōnem audīvit» quiere decir…",
          ops: ["Aristóteles fue alumno de Platón.", "Aristóteles oye a Platón.", "Platón escuchó a Aristóteles."],
          ok: 0
        },
        { t: "oir", x: "dīxit", ops: ["dīxit", "dīcit", "dūxit"], ok: 0 },
        { t: "oir", x: "fuērunt", ops: ["fuērunt", "fuerant", "fuistis"], ok: 0 },
        { t: "mc", q: "¿Cuál significa «hemos dicho»?", ops: ["dīximus", "dīcimus", "dīxistis"], ok: 0 },
        { t: "orden", es: "Aristóteles escribió muchos libros.", x: "Aristotelēs multōs librōs scrīpsit." },
        { t: "orden", es: "Como hemos dicho más arriba, el término es parte de la proposición.", x: "Ut suprā dīximus, terminus pars prōpositiōnis est." }
      ]
    },
    {
      id: "la6-2",
      titulo: "Cinco maneras de formar el perfecto",
      min: 40,
      intro: "El tema de perfecto no se deduce del presente, pero casi siempre sigue uno de cinco modelos. Desde hoy cada verbo nuevo llega con su **enunciado** completo (*dīcō, dīcere, dīxī, dictum*): con él reconocerás cualquier forma que aparezca en tu página.",
      bloques: [
        {
          t: "p",
          x: "El enunciado tiene cuatro formas: presente (*dīcō*, digo), infinitivo (*dīcere*, decir), perfecto (*dīxī*, dije) y **supino** (*dictum*). Del supino salen el participio (*dictus*, dicho) y muchas palabras españolas: *dictum* → «dicho», *factum* → «hecho»."
        },
        {
          t: "tabla",
          cab: ["Modelo", "Enunciado", "Español"],
          audio: [1],
          filas: [
            ["-vī", "amō, amāre, amāvī, amātum", "amar"],
            ["-vī", "audiō, audīre, audīvī, audītum", "oír"],
            ["-uī", "doceō, docēre, docuī, doctum", "enseñar"],
            ["-uī", "pōnō, pōnere, posuī, positum", "poner"],
            ["-sī", "scrībō, scrībere, scrīpsī, scrīptum", "escribir"],
            ["-sī (c + s = x)", "dīcō, dīcere, dīxī, dictum", "decir"],
            ["reduplicación", "dō, dare, dedī, datum", "dar"],
            ["reduplicación", "discō, discere, didicī", "aprender"],
            ["alargamiento", "videō, vidēre, vīdī, vīsum", "ver"],
            ["alargamiento", "legō, legere, lēgī, lēctum", "leer"],
            ["alargamiento", "faciō, facere, fēcī, factum", "hacer"],
            ["irregular", "sum, esse, fuī, futūrus", "ser, estar"]
          ]
        },
        {
          t: "p",
          x: "Cómo se reconoce cada modelo: **-vī** y **-uī** añaden una *v* o una *u* (*amā-vī*, *doc-uī*); **-sī** añade una *s*, que con *c* o *g* se escribe *x* (*dīc-sī* → *dīxī*) y tras *b* suena *ps* (*scrīb-sī* → *scrīpsī*); la **reduplicación** repite la primera consonante (*de-dī*, *di-dicī*); el **alargamiento** alarga la vocal de la raíz, a veces cambiándola (*legō* → *lēgī*, *faciō* → *fēcī*)."
        },
        {
          t: "ej",
          items: [
            ["Aristotelēs terminum dēfīnīvit.", "Aristóteles definió el término."],
            ["Magister sententiam suam posuit.", "El maestro expuso su opinión."],
            ["Porphyrius Īsagōgēn scrīpsit.", "Porfirio escribió la Isagoge."],
            ["Aristotelēs Lycēum condidit.", "Aristóteles fundó el Liceo."],
            ["Logicam ā magistrō didicimus.", "Aprendimos lógica con el maestro."],
            ["Hoc in librō vīdī.", "Esto lo vi en el libro."],
            ["Discipulī librum lēgērunt.", "Los alumnos leyeron el libro."],
            ["Boēthius librōs Aristotelis in Latīnum vertit.", "Boecio tradujo al latín los libros de Aristóteles."]
          ]
        },
        {
          t: "nota",
          x: "Algunos verbos no cambian: *vertō* (traduzco) → *vertī* (traduje); *solvō* (resuelvo) → *solvī*. *Boēthius Aristotelem vertit* puede ser «Boecio traduce» o «Boecio tradujo»: decide el contexto."
        },
        {
          t: "nota",
          x: "Muchos términos de lógica salen del supino: *dēfīnītum* → *dēfīnītiō*, *āctum* → *āctiō*, *lēctum* → *lēctiō* (lección), *(prō)positum* → *prōpositiō*. Si sabes el supino, entiendes la familia entera."
        },
        {
          t: "nota",
          x: "En los impresos verás perfectos abreviados: *audiit* = *audīvit*, *dēfīniērunt* = *dēfīnīvērunt*, *cognōrunt* = *cognōvērunt*. Se cae la *v* y a veces la sílaba siguiente; el sentido no cambia."
        }
      ],
      vocab: [
        ["dīcō, dīcere, dīxī, dictum", "decir"],
        ["faciō, facere, fēcī, factum", "hacer"],
        ["dō, dare, dedī, datum", "dar"],
        ["videō, vidēre, vīdī, vīsum", "ver"],
        ["scrībō, scrībere, scrīpsī, scrīptum", "escribir"],
        ["doceō, docēre, docuī, doctum", "enseñar"],
        ["legō, legere, lēgī, lēctum", "leer"],
        ["audiō, audīre, audīvī, audītum", "oír, escuchar"],
        ["pōnō, pōnere, posuī, positum", "poner; afirmar, sentar (una tesis)"],
        ["discō, discere, didicī", "aprender"],
        ["dēfīniō, dēfīnīre, dēfīnīvī, dēfīnītum", "definir"],
        ["vertō, vertere, vertī, versum", "girar; traducir"],
        ["sum, esse, fuī, futūrus", "ser, estar"],
        ["veniō, venīre, vēnī, ventum", "venir"],
        ["agō, agere, ēgī, āctum", "hacer, actuar; «agere dē» = tratar de"],
        ["cognōscō, cognōscere, cognōvī, cognitum", "conocer (en perfecto, «saber»: cognōvī = sé)"],
        ["amō, amāre, amāvī, amātum", "amar"]
      ],
      ejercicios: [
        { t: "mc", q: "¿Qué modelo sigue «docuī»?", ops: ["-uī", "-sī", "reduplicación"], ok: 0 },
        { t: "mc", q: "El perfecto de «faciō» es…", ops: ["fēcī", "facuī", "faxī"], ok: 0 },
        { t: "mc", q: "«Dedit» es el perfecto de…", ops: ["dō (dar)", "dīcō (decir)", "doceō (enseñar)"], ok: 0 },
        { t: "mc", q: "«Didicimus» significa…", ops: ["aprendimos", "aprendemos", "enseñamos"], ok: 0 },
        { t: "mc", q: "«Dēfīnītiō» se forma sobre…", ops: ["el supino dēfīnītum", "el presente dēfīniō", "el perfecto dēfīnīvī"], ok: 0 },
        { t: "oir", x: "vīdit", ops: ["vīdit", "videt", "vīcit"], ok: 0 },
        { t: "oir", x: "scrīpsit", ops: ["scrīpsit", "scrībit", "scrīptum"], ok: 0 },
        { t: "orden", es: "Boecio tradujo al latín los libros de Aristóteles.", x: "Boēthius librōs Aristotelis in Latīnum vertit." }
      ]
    },
    {
      id: "la6-3",
      titulo: "Imperfecto y futuro, para reconocerlos",
      min: 35,
      intro: "Dos tiempos que basta con reconocer. El imperfecto (*docēbat*, «enseñaba») describe el pasado; el futuro (*vidēbimus*, «veremos») es el de los autores cuando anuncian lo que explicarán más adelante: *ut posteā vidēbimus*.",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "Imperfecto", "Español", "esse", "Español"],
          audio: [1, 3],
          filas: [
            ["ego", "docēbam", "enseñaba", "eram", "era, estaba"],
            ["tū", "docēbās", "enseñabas", "erās", "eras"],
            ["is, ea", "docēbat", "enseñaba", "erat", "era"],
            ["nōs", "docēbāmus", "enseñábamos", "erāmus", "éramos"],
            ["vōs", "docēbātis", "enseñabais", "erātis", "erais"],
            ["eī, eae", "docēbant", "enseñaban", "erant", "eran"]
          ]
        },
        {
          t: "p",
          x: "La marca del imperfecto es **-ba-**, como la «-aba» de «enseñaba». En la 3.ª y la 4.ª conjugación va tras una *-ē-*: *legēbat* (leía), *audiēbat* (oía). En pasiva solo cambian las terminaciones, que ya conoces: *dīcēbātur* (se decía), *vocābātur* (era llamado)."
        },
        {
          t: "tabla",
          cab: ["Verbos", "Futuro", "Español"],
          audio: [1],
          filas: [
            ["1.ª y 2.ª: -bō, -bis, -bit…", "vocābō, vocābis, vocābit", "llamaré, llamarás, llamará"],
            ["1.ª y 2.ª", "vidēbimus, vidēbitis, vidēbunt", "veremos, veréis, verán"],
            ["3.ª y 4.ª: -am, -ēs, -et…", "dīcam, dīcēs, dīcet", "diré, dirás, dirá"],
            ["3.ª y 4.ª", "dīcēmus, dīcētis, dīcent", "diremos, diréis, dirán"],
            ["esse", "erō, eris, erit", "seré, serás, será"],
            ["esse", "erimus, eritis, erunt", "seremos, seréis, serán"]
          ]
        },
        {
          t: "nota",
          x: "La trampa de la 3.ª conjugación: su futuro parece un presente. *dīcet* es «dirá» (el presente es *dīcit*) y *legent* es «leerán» (el presente es *legunt*). En pasiva: *dīcētur*, «se dirá», como en *ut īnfrā dīcētur*, «como se dirá más abajo»."
        },
        {
          t: "ej",
          items: [
            ["Aristotelēs ambulāns docēbat.", "Aristóteles enseñaba paseando."],
            ["Thōmās in scholā tacēbat.", "Tomás callaba en clase."],
            ["Condiscipulī eum «bovem mūtum» vocābant.", "Sus compañeros lo llamaban «el buey mudo»."],
            ["Ut posteā vidēbimus…", "Como veremos después…"],
            ["Dē hōc īnfrā dīcēmus.", "De esto hablaremos más abajo."],
            ["Dīcere recūsābō.", "Me negaré a decirlo. (Porfirio)"],
            ["Crās erit bellum nāvāle, aut nōn erit.", "Mañana habrá una batalla naval, o no la habrá. (ejemplo de Aristóteles)"]
          ]
        },
        {
          t: "nota",
          x: "Con la batalla naval, Aristóteles se preguntó si una frase sobre el futuro es ya hoy verdadera o falsa. Los lógicos medievales lo discutieron como el problema de los *futūra contingentia*, los futuros que pueden ser o no ser."
        }
      ],
      vocab: [
        ["erit", "será, estará"],
        ["erunt", "serán, estarán"],
        ["ut posteā vidēbimus", "como veremos después"],
        ["ut īnfrā dīcētur", "como se dirá más abajo"],
        ["dīcēbātur", "se decía"],
        ["taceō, tacēre, tacuī, tacitum", "callar"],
        ["vocō, vocāre, vocāvī, vocātum", "llamar"],
        ["recūsō, recūsāre, recūsāvī, recūsātum", "rechazar, negarse a"],
        ["ambulō, ambulāre, ambulāvī, ambulātum", "pasear, andar"],
        ["crās", "mañana"],
        ["herī", "ayer"],
        ["hodiē", "hoy"],
        ["semper", "siempre"],
        ["bōs, bovis (m./f.)", "buey, vaca"]
      ],
      ejercicios: [
        { t: "mc", q: "«Docēbat» significa…", ops: ["enseñaba", "enseñó", "enseñará"], ok: 0 },
        { t: "mc", q: "«Dīcet» significa…", ops: ["dirá", "dice", "dijo"], ok: 0 },
        { t: "mc", q: "«Ut posteā vidēbimus» significa…", ops: ["como veremos después", "como vimos antes", "como vemos ahora"], ok: 0 },
        { t: "mc", q: "¿Qué tiempo es «erunt»?", ops: ["futuro: «serán»", "perfecto: «fueron»", "imperfecto: «eran»"], ok: 0 },
        { t: "oir", x: "erat", ops: ["erat", "erit", "erant"], ok: 0 },
        { t: "oir", x: "legent", ops: ["legent", "legunt", "legēbant"], ok: 0 },
        { t: "orden", es: "Tomás callaba en clase.", x: "Thōmās in scholā tacēbat." }
      ]
    },
    {
      id: "la6-4",
      titulo: "Pluscuamperfecto y futuro perfecto",
      min: 30,
      intro: "Con el tema de perfecto se forman dos tiempos más. El pluscuamperfecto (*dīxerat*, «había dicho») es frecuente en las biografías; el futuro perfecto (*dīxerit*) basta con reconocerlo cuando aparezca.",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "Pluscuamperfecto", "Español", "Futuro perfecto", "Español"],
          audio: [1, 3],
          filas: [
            ["ego", "dīxeram", "había dicho", "dīxerō", "habré dicho"],
            ["tū", "dīxerās", "habías dicho", "dīxeris", "habrás dicho"],
            ["is, ea", "dīxerat", "había dicho", "dīxerit", "habrá dicho"],
            ["nōs", "dīxerāmus", "habíamos dicho", "dīxerimus", "habremos dicho"],
            ["vōs", "dīxerātis", "habíais dicho", "dīxeritis", "habréis dicho"],
            ["eī, eae", "dīxerant", "habían dicho", "dīxerint", "habrán dicho"]
          ]
        },
        {
          t: "p",
          x: "Truco: pluscuamperfecto = tema de perfecto + imperfecto de *esse* (*dīx-* + *eram*); futuro perfecto = tema de perfecto + futuro de *esse* (*dīx-* + *erō*), salvo en la 3.ª del plural, que acaba en *-erint*: *dīxerint*."
        },
        {
          t: "p",
          x: "El futuro perfecto marca lo que habrá ocurrido antes de otra acción futura. El español suele usar un presente o un subjuntivo: *Sī hoc intellēxeris, tōtum librum intellegēs*, «Si entiendes esto, entenderás todo el libro»."
        },
        {
          t: "ej",
          items: [
            ["Aristotelēs vīgintī annōs in Acadēmīā fuerat.", "Aristóteles había estado veinte años en la Academia."],
            ["Boēthius multōs librōs verterat.", "Boecio había traducido muchos libros."],
            ["Thōmās lēctiōnem iam intellēxerat.", "Tomás ya había entendido la lección."],
            ["Ut suprā dīxerāmus…", "Como habíamos dicho más arriba…"],
            ["Cum terminum dēfīnīverimus, dē prōpositiōne agēmus.", "Cuando hayamos definido el término, trataremos de la proposición."],
            ["Sī hoc intellēxeris, tōtum librum intellegēs.", "Si entiendes esto, entenderás todo el libro."]
          ]
        },
        {
          t: "nota",
          x: "*Dīxerit* también puede ser perfecto de subjuntivo («haya dicho»): las dos formas casi coinciden. En los textos escolásticos, *dīxerit aliquis* («dirá alguno») anuncia una objeción que el autor va a responder."
        }
      ],
      vocab: [
        ["fuerat", "había sido, había estado"],
        ["dīxerat", "había dicho"],
        ["dīxerit aliquis", "dirá alguno (anuncia una objeción)"],
        ["intellegō, intellegere, intellēxī, intellēctum", "entender"],
        ["maneō, manēre, mānsī, mānsum", "quedarse, permanecer"],
        ["relinquō, relinquere, relīquī, relictum", "dejar, abandonar"],
        ["capiō, capere, cēpī, captum", "coger, tomar"],
        ["incipiō, incipere, incēpī, inceptum", "empezar"],
        ["mittō, mittere, mīsī, missum", "enviar"],
        ["teneō, tenēre, tenuī, tentum", "tener, sujetar; sostener (una opinión)"],
        ["iam", "ya"],
        ["nōndum", "todavía no"],
        ["anteā", "antes"],
        ["tōtus, tōta, tōtum", "todo, entero"],
        ["vīgintī", "veinte"]
      ],
      ejercicios: [
        { t: "mc", q: "«Lēgerat» significa…", ops: ["había leído", "leyó", "habrá leído"], ok: 0 },
        { t: "mc", q: "¿Cuál significa «habíamos dicho»?", ops: ["dīxerāmus", "dīximus", "dīxerimus"], ok: 0 },
        {
          t: "mc",
          q: "En «Sī hoc intellēxeris, tōtum librum intellegēs», «intellēxeris» es…",
          ops: ["futuro perfecto", "perfecto", "pluscuamperfecto"],
          ok: 0
        },
        { t: "mc", q: "En un texto escolástico, «dīxerit aliquis» anuncia…", ops: ["una objeción", "la conclusión", "una cita de Aristóteles"], ok: 0 },
        { t: "oir", x: "fuerat", ops: ["fuerat", "fuerit", "fuērunt"], ok: 0 },
        { t: "oir", x: "dīxerant", ops: ["dīxerant", "dīxerint", "dīxērunt"], ok: 0 },
        { t: "orden", es: "Aristóteles había estado veinte años en la Academia.", x: "Aristotelēs vīgintī annōs in Acadēmīā fuerat." }
      ]
    },
    {
      id: "la6-5",
      titulo: "Perfecto pasivo: «dictum est»",
      min: 40,
      intro: "El perfecto pasivo es quizá la forma verbal más típica de los libros escolásticos: *ut dictum est* (como se ha dicho), *terminus suprā dēfīnītus est* (el término se ha definido más arriba). Se forma con dos palabras, como el español «ha sido dicho».",
      bloques: [
        {
          t: "p",
          x: "Se forma con el **participio** (que sale del supino: *dictum* → *dictus, dicta, dictum*) y el presente de *esse*. El participio concuerda con el sujeto como un adjetivo: *terminus dēfīnītus est*, *prōpositiō dēfīnīta est*, *nōmen dēfīnītum est*."
        },
        {
          t: "tabla",
          cab: ["Sujeto", "Perfecto pasivo", "Español"],
          audio: [1],
          filas: [
            ["terminus (m.)", "dēfīnītus est", "ha sido definido"],
            ["prōpositiō (f.)", "dēfīnīta est", "ha sido definida"],
            ["nōmen (n.)", "dēfīnītum est", "ha sido definido"],
            ["terminī (m. pl.)", "dēfīnītī sunt", "han sido definidos"],
            ["prōpositiōnēs (f. pl.)", "dēfīnītae sunt", "han sido definidas"],
            ["nōmina (n. pl.)", "dēfīnīta sunt", "han sido definidos"],
            ["(sin sujeto)", "dictum est", "se ha dicho, se dijo"]
          ]
        },
        {
          t: "nota",
          x: "*Dictum est* no es «es dicho», sino «ha sido dicho», «se dijo»: *est* + participio = pasado. Con *erat* se sube un escalón: *dictum erat*, «se había dicho»."
        },
        {
          t: "p",
          x: "Los **deponentes** (forma pasiva y sentido activo, como *sequitur*) forman el perfecto igual, pero con sentido activo: *nātus est* (nació), *mortuus est* (murió), *secūtus est* (siguió), *locūtus est* (habló). Los verás en todas las biografías."
        },
        {
          t: "ej",
          items: [
            ["Ut dictum est, terminus pars prōpositiōnis est.", "Como se ha dicho, el término es parte de la proposición."],
            ["Hoc ab Aristotele dictum est.", "Esto lo dijo Aristóteles (lit. «fue dicho por Aristóteles»)."],
            ["Terminus suprā dēfīnītus est.", "El término se ha definido más arriba."],
            ["Liber ā Boēthiō in Latīnum versus est.", "El libro fue traducido al latín por Boecio."],
            ["Aristotelēs Stagīrae nātus est.", "Aristóteles nació en Estagira."],
            ["Boēthius iussū rēgis occīsus est.", "Boecio fue ejecutado por orden del rey."],
            ["Thōmās in itinere mortuus est.", "Tomás murió durante un viaje."],
            ["Quid dictum est?", "¿Qué se ha dicho?"]
          ]
        },
        {
          t: "nota",
          x: "*Factum est* es «sucedió», «ocurrió»: *et ita factum est*, «y así sucedió». Viene de *fīō* (hacerse, llegar a ser), que usa como perfecto *factus sum*."
        }
      ],
      vocab: [
        ["ut dictum est", "como se ha dicho"],
        ["dēfīnītum est", "se ha definido"],
        ["factum est", "sucedió; se hizo"],
        ["dēfīnītus, dēfīnīta, dēfīnītum", "definido"],
        ["nāscor, nāscī, nātus sum", "nacer"],
        ["morior, morī, mortuus sum", "morir"],
        ["sequor, sequī, secūtus sum", "seguir"],
        ["loquor, loquī, locūtus sum", "hablar"],
        ["occīdō, occīdere, occīdī, occīsum", "matar"],
        ["appellō, appellāre, appellāvī, appellātum", "llamar, nombrar"],
        ["explicō, explicāre, explicāvī, explicātum", "explicar"],
        ["dīvidō, dīvidere, dīvīsī, dīvīsum", "dividir"],
        ["dēmōnstrō, dēmōnstrāre, dēmōnstrāvī, dēmōnstrātum", "demostrar"],
        ["carcer, carceris (m.)", "cárcel"],
        ["iter, itineris (n.)", "camino, viaje"]
      ],
      ejercicios: [
        { t: "mc", q: "«Ut dictum est» significa…", ops: ["como se ha dicho", "como se dice", "como se dirá"], ok: 0 },
        { t: "mc", q: "Concuerda: «Prōpositiō suprā ___ est.»", ops: ["dēfīnīta", "dēfīnītus", "dēfīnītum"], ok: 0 },
        {
          t: "mc",
          q: "«Aristotelēs Stagīrae nātus est» significa…",
          ops: ["Aristóteles nació en Estagira.", "Aristóteles nace en Estagira.", "Aristóteles murió en Estagira."],
          ok: 0
        },
        { t: "mc", q: "«Dictum erat» significa…", ops: ["se había dicho", "se ha dicho", "se dirá"], ok: 0 },
        { t: "oir", x: "mortuus est", ops: ["mortuus est", "mortuī sunt", "mōtus est"], ok: 0 },
        { t: "orden", es: "Como se ha dicho, el término es parte de la proposición.", x: "Ut dictum est, terminus pars prōpositiōnis est." },
        { t: "orden", es: "El libro fue traducido al latín por Boecio.", x: "Liber ā Boēthiō in Latīnum versus est." }
      ]
    },
    {
      id: "la6-6",
      titulo: "Tres participios: «legēns», «dictus», «futūrus»",
      min: 40,
      intro: "Los participios son adjetivos hechos de verbos, y la escolástica vive de ellos: *terminus praedictus* (el término antes dicho), *pars compōnēns* (la parte que compone, en la primera frase de tu página). Hasta *subiectum* y *praedicātum* son participios.",
      bloques: [
        {
          t: "tabla",
          cab: ["Verbo", "Presente: -ns", "Perfecto: -tus, -sus", "Futuro: -tūrus, -sūrus"],
          audio: [1, 2, 3],
          filas: [
            ["legō (leer)", "legēns", "lēctus", "lēctūrus"],
            ["dīcō (decir)", "dīcēns", "dictus", "dictūrus"],
            ["doceō (enseñar)", "docēns", "doctus", "doctūrus"],
            ["pōnō (poner)", "pōnēns", "positus", "positūrus"],
            ["audiō (oír)", "audiēns", "audītus", "audītūrus"]
          ]
        },
        {
          t: "p",
          x: "El **presente** (*legēns*, «que lee», «leyendo») es activo y simultáneo; se declina como *pars, partis*: *legēns, legentis*. El **perfecto** (*lēctus*, «leído») es pasivo y anterior; el **futuro** (*lēctūrus*, «que va a leer») es activo y posterior. Estos dos se declinan como *bonus, bona, bonum*."
        },
        {
          t: "p",
          x: "El participio de presente ha dado muchas palabras de la filosofía: *ēns, entis* («lo que es», el ente), *accidēns* (lo que sobreviene, el accidente), *praesēns* (presente). Y los de perfecto, usados como sustantivos, dan *subiectum* (lo puesto debajo), *praedicātum* (lo predicado) y *obiectum* (lo puesto delante)."
        },
        {
          t: "nota",
          x: "*Praedictus* (*prae* + *dictus*, «dicho antes») es el «susodicho» escolástico: *terminus praedictus*, *praedicta dēfīnītiō* (la definición antedicha). No lo confundas con *praedicātum* (predicado), que viene de otro verbo, *praedicō, praedicāre*."
        },
        {
          t: "p",
          x: "El participio de futuro es raro, pero su *-ūrus* lo delata: *futūrus* («que será», de ahí «futuro»), *moritūrus* («que va a morir»). Con *esse* indica intención: *dictūrus sum*, «voy a decir»."
        },
        {
          t: "ej",
          items: [
            ["Discipulī, magistrum audientēs, tacēbant.", "Los alumnos, mientras escuchaban al maestro, callaban."],
            ["Boēthius, mortem exspectāns, librum scrīpsit.", "Boecio, esperando la muerte, escribió un libro."],
            ["Terminus praedictus nōmen est.", "El término antedicho es un nombre."],
            ["Liber ā Thōmā scrīptus «Summa» vocātur.", "El libro escrito por Tomás se llama «Suma»."],
            ["prōpositiō ex terminīs composita", "una proposición compuesta de términos"],
            ["Avē, Imperātor, moritūrī tē salūtant!", "¡Salve, emperador, los que van a morir te saludan!"],
            ["Dē hōc dictūrus sum.", "Voy a hablar de esto."]
          ]
        }
      ],
      vocab: [
        ["praedictus, praedicta, praedictum", "antedicho, susodicho"],
        ["futūrus, futūra, futūrum", "futuro, que será"],
        ["praesēns, praesentis", "presente"],
        ["pars compōnēns", "parte que compone"],
        ["compōnō, compōnere, composuī, compositum", "componer"],
        ["compositus, composita, compositum", "compuesto"],
        ["subiciō, subicere, subiēcī, subiectum", "poner debajo, someter"],
        ["exspectō, exspectāre, exspectāvī, exspectātum", "esperar, aguardar"],
        ["moritūrus, moritūra, moritūrum", "que va a morir"],
        ["dictūrus sum", "voy a decir"],
        ["scrīptus, scrīpta, scrīptum", "escrito"],
        ["legēns, legentis", "que lee; lector"]
      ],
      ejercicios: [
        { t: "mc", q: "«Discipulus legēns» es…", ops: ["el alumno que lee", "el alumno leído", "el alumno que va a leer"], ok: 0 },
        { t: "mc", q: "«Liber lēctus» es…", ops: ["el libro leído", "el libro que lee", "el libro que se leerá"], ok: 0 },
        { t: "mc", q: "«Terminus praedictus» significa…", ops: ["el término antedicho", "el término predicado", "el término que se dirá"], ok: 0 },
        { t: "mc", q: "El genitivo de «legēns» es…", ops: ["legentis", "legēnsis", "legentī"], ok: 0 },
        { t: "mc", q: "«Moritūrī» son…", ops: ["los que van a morir", "los muertos", "los que matan"], ok: 0 },
        { t: "oir", x: "dīcēns", ops: ["dīcēns", "dīcentis", "docēns"], ok: 0 },
        { t: "orden", es: "Boecio, esperando la muerte, escribió un libro.", x: "Boēthius, mortem exspectāns, librum scrīpsit." }
      ]
    },
    {
      id: "la6-7",
      titulo: "El ablativo absoluto: «hīs positīs»",
      min: 35,
      intro: "Un sustantivo y un participio en ablativo, sueltos y casi siempre al principio de la frase, sitúan lo que viene: *hīs positīs*, «sentado esto». Es la manera escolástica de pasar de los preliminares al argumento, y la encontrarás en casi cada capítulo de lógica.",
      bloques: [
        {
          t: "p",
          x: "El **ablativo absoluto** es un sustantivo (o pronombre) y un participio, los dos en ablativo, que no dependen de nada en el resto de la frase. El español tiene una construcción gemela: *Platōne mortuō*, «muerto Platón»."
        },
        {
          t: "tabla",
          cab: ["Latín", "Literal", "Traducción natural"],
          audio: [0],
          filas: [
            ["hīs positīs", "puestas estas cosas", "sentado esto"],
            ["quō dictō", "dicho lo cual", "dicho esto"],
            ["hīs praemissīs", "dichas antes estas cosas", "dicho lo anterior"],
            ["suppositō quod…", "supuesto que…", "suponiendo que…"],
            ["dēfīnītiōne datā", "dada la definición", "una vez dada la definición"],
            ["Platōne mortuō", "muerto Platón", "cuando murió Platón"],
            ["magistrō docente", "enseñando el maestro", "mientras el maestro enseñaba"],
            ["Deō volente", "queriendo Dios", "si Dios quiere"]
          ]
        },
        {
          t: "p",
          x: "Con participio de **perfecto**, lo del ablativo ocurre antes (*quō dictō*: primero se dice); con participio de **presente**, a la vez (*magistrō docente*: mientras enseña). Traduce con «después de», «una vez que», «cuando», «mientras» o un gerundio, lo que suene más natural."
        },
        {
          t: "nota",
          x: "*Suppositō* y *positō* se usan también con una oración detrás: *suppositō quod terminus sit signum…*, «suponiendo que el término es un signo…». Y las *praemissae* (de *praemittō*, «enviar delante») son las **premisas** del silogismo: las proposiciones que van delante de la conclusión."
        },
        {
          t: "ej",
          items: [
            ["Hīs positīs, dēfīnītiōnem terminī dabimus.", "Sentado esto, daremos la definición del término."],
            ["Quō dictō, magister tacuit.", "Dicho esto, el maestro calló."],
            ["Alexandrō mortuō, Aristotelēs Athēnīs discessit.", "Muerto Alejandro, Aristóteles se marchó de Atenas."],
            ["Magistrō docente, discipulī audiēbant.", "Mientras el maestro enseñaba, los alumnos escuchaban."],
            ["Hīs praemissīs, ad quaestiōnem respondeō.", "Dicho lo anterior, respondo a la cuestión."],
            ["Suppositō quod Sōcratēs currat, Sōcratēs movētur.", "Suponiendo que Sócrates corre, Sócrates se mueve."],
            ["Dēfīnītiōne datā, ad dīvīsiōnem trānsīmus.", "Dada la definición, pasamos a la división."]
          ]
        },
        {
          t: "nota",
          x: "No lo confundas con el agente de la pasiva: *ā magistrō dictum* es «dicho por el maestro» (con *ā*); *magistrō dīcente*, sin preposición, es «mientras el maestro decía»."
        }
      ],
      vocab: [
        ["hīs positīs", "sentado esto"],
        ["quō dictō", "dicho esto"],
        ["hīs praemissīs", "dicho lo anterior"],
        ["suppositō quod…", "suponiendo que…"],
        ["dēfīnītiōne datā", "dada la definición"],
        ["Deō volente", "si Dios quiere"],
        ["suppōnō, suppōnere, supposuī, suppositum", "suponer"],
        ["respondeō, respondēre, respondī, respōnsum", "responder"],
        ["discēdō, discēdere, discessī, discessum", "marcharse, apartarse"],
        ["trānseō, trānsīre, trānsiī, trānsitum", "pasar (a otro tema)"],
        ["cōnstituō, cōnstituere, cōnstituī, cōnstitūtum", "establecer"],
        ["dīvīsiō, dīvīsiōnis (f.)", "división"],
        ["currō, currere, cucurrī, cursum", "correr"],
        ["moveō, movēre, mōvī, mōtum", "mover"]
      ],
      ejercicios: [
        { t: "mc", q: "«Hīs positīs» significa…", ops: ["sentado esto", "en estas posiciones", "puestos aquí"], ok: 0 },
        { t: "mc", q: "En «Platōne mortuō, Aristotelēs Athēnās relīquit», ¿quién murió?", ops: ["Platón", "Aristóteles", "Alejandro"], ok: 0 },
        { t: "mc", q: "«Magistrō docente» significa…", ops: ["mientras el maestro enseñaba", "enseñado por el maestro", "para enseñar al maestro"], ok: 0 },
        { t: "mc", q: "¿Cuál expresa algo anterior a la acción principal?", ops: ["quō dictō", "magistrō docente", "Deō volente"], ok: 0 },
        { t: "oir", x: "hīs positīs", ops: ["hīs positīs", "hīs dictīs", "hīs praemissīs"], ok: 0 },
        { t: "orden", es: "Dicho esto, el maestro calló.", x: "Quō dictō, magister tacuit." },
        { t: "orden", es: "Muerto Alejandro, Aristóteles se marchó de Atenas.", x: "Alexandrō mortuō, Aristotelēs Athēnīs discessit." }
      ]
    },
    {
      id: "la6-8",
      titulo: "De Aristóteles a Alcalá: la historia de tu página",
      min: 40,
      intro: "La página que quieres leer es el último eslabón de una cadena de veinte siglos: Aristóteles, Porfirio, Boecio, santo Tomás y las universidades. Hoy la recorres en latín, con los tiempos de esta semana.",
      bloques: [
        {
          t: "tabla",
          cab: ["Quién", "En latín", "Español"],
          audio: [1],
          filas: [
            ["Aristóteles (s. IV a. C.)", "Aristotelēs librōs logicae scrīpsit, quī Organon appellantur.", "Aristóteles escribió los libros de lógica que se llaman Órganon."],
            ["Porfirio (s. III)", "Porphyrius Īsagōgēn, id est intrōductiōnem in Catēgoriās, composuit.", "Porfirio compuso la Isagoge, es decir, una introducción a las Categorías."],
            ["Boecio (s. VI)", "Boēthius Aristotelem in Latīnum vertit; in carcere Cōnsōlātiōnem scrīpsit.", "Boecio tradujo a Aristóteles al latín; en la cárcel escribió la Consolación."],
            ["Santo Tomás (s. XIII)", "Thōmās Aquīnās Parisiīs docuit et Aristotelem explicāvit.", "Tomás de Aquino enseñó en París y comentó a Aristóteles."],
            ["Juan de Santo Tomás (s. XVII)", "Iōannēs ā Sānctō Thōmā Complūtī docuit et Artem logicam scrīpsit.", "Juan de Santo Tomás enseñó en Alcalá y escribió el Ars logica."]
          ]
        },
        {
          t: "p",
          x: "El **Órganon** («instrumento») reúne seis obras: *Catēgoriae* (los términos), *Dē interpretātiōne* (las proposiciones), *Analytica priōra* (el silogismo), *Analytica posteriōra* (la demostración), *Topica* (los argumentos probables) y *Dē sophisticīs elenchīs* (las falacias). Tu libro sigue el mismo orden: término, proposición, silogismo."
        },
        {
          t: "p",
          x: "En las *Catēgoriae*, Aristóteles reparte todo lo que hay en diez géneros supremos, que los latinos llamaron *praedicāmenta*: la **sustancia** (lo que existe por sí: un hombre, un caballo) y nueve **accidentes**, que existen en ella."
        },
        {
          t: "tabla",
          cab: ["Categoría", "Pregunta", "Ejemplos de Aristóteles"],
          audio: [0, 1],
          filas: [
            ["substantia", "quid est?", "homō, equus (hombre, caballo)"],
            ["quantitās", "quantum?", "bicubitum (de dos codos)"],
            ["quālitās", "quāle?", "album, grammaticum (blanco, gramático)"],
            ["relātiō", "ad quid?", "duplum, dīmidium (doble, mitad)"],
            ["ubi", "ubi?", "in Lycēō, in forō (en el Liceo, en el foro)"],
            ["quandō", "quandō?", "herī, annō priōre (ayer, el año pasado)"],
            ["situs", "quōmodo positum?", "iacet, sedet (está tumbado, está sentado)"],
            ["habitus", "quid habet?", "calceātus, armātus (calzado, armado)"],
            ["āctiō", "quid facit?", "secat, ūrit (corta, quema)"],
            ["passiō", "quid patitur?", "secātur, ūritur (es cortado, es quemado)"]
          ]
        },
        {
          t: "p",
          x: "Las universidades convirtieron estos libros en programa de estudios. En las portadas, el lugar de impresión va en **locativo**, un caso que responde a «¿dónde?» y que solo tienen los nombres de ciudad y unas pocas palabras (*domī*, en casa; *rūrī*, en el campo): *Rōmae* (en Roma), *Complūtī* (en Alcalá). Si el nombre es plural, se usa el ablativo: *Athēnīs* (en Atenas), *Parisiīs* (en París)."
        },
        {
          t: "tabla",
          cab: ["Universidad", "En latín", "Para recordar"],
          audio: [1],
          filas: [
            ["París", "Parisiīs", "Santo Tomás enseñó allí en el siglo XIII."],
            ["Salamanca", "Salmanticae", "Fundada en 1218. Allí enseñaron Francisco de Vitoria y Domingo de Soto."],
            ["Alcalá de Henares", "Complūtī", "Fundada por Cisneros en 1499. Allí enseñó Juan de Santo Tomás y allí se imprimió su curso."],
            ["Coímbra", "Conimbricae", "Sus jesuitas, los «Conimbricenses», comentaron a Aristóteles. Allí estudió Juan de Santo Tomás."]
          ]
        },
        {
          t: "nota",
          x: "Una portada típica: *Complūtī, apud…, annō MDCXXXI*, «en Alcalá, en casa de [el impresor], año 1631». *Apud* + nombre es el impresor, y el año va en números romanos."
        },
        {
          t: "nota",
          x: "Salamanca tiene su refrán latino: *Quod nātūra nōn dat, Salmantica nōn praestat*, «lo que la naturaleza no da, Salamanca no lo presta»."
        }
      ],
      vocab: [
        ["praedicāmentum, praedicāmentī (n.)", "categoría, predicamento"],
        ["relātiō, relātiōnis (f.)", "relación"],
        ["āctiō, āctiōnis (f.)", "acción"],
        ["passiō, passiōnis (f.)", "pasión: el recibir una acción"],
        ["situs, sitūs (m.)", "posición, postura"],
        ["habitus, habitūs (m.)", "hábito; el llevar algo puesto"],
        ["ūniversitās, ūniversitātis (f.)", "universidad; totalidad"],
        ["Parisiīs", "en París"],
        ["Salmanticae", "en Salamanca"],
        ["Complūtī", "en Alcalá de Henares"],
        ["Conimbricae", "en Coímbra"],
        ["apud", "en casa de; en la obra de (+ acusativo): «apud Aristotelem» = en Aristóteles"],
        ["imprimō, imprimere, impressī, impressum", "imprimir"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "¿Por qué las obras de lógica de Aristóteles se llaman «Órganon»?",
          ops: ["Porque la lógica es el instrumento de las ciencias", "Porque se cantaban con órgano", "Porque tratan del cuerpo humano"],
          ok: 0
        },
        { t: "mc", q: "«Complūtī» en una portada significa…", ops: ["en Alcalá de Henares", "en Coímbra", "impreso completo"], ok: 0 },
        { t: "mc", q: "*Calceātus* (calzado) es un ejemplo de la categoría…", ops: ["habitus", "situs", "passiō"], ok: 0 },
        { t: "mc", q: "¿Qué categoría no es un accidente?", ops: ["substantia", "quālitās", "relātiō"], ok: 0 },
        { t: "mc", q: "¿Dónde enseñó Juan de Santo Tomás?", ops: ["En Alcalá de Henares", "En París", "En Salamanca"], ok: 0 },
        { t: "oir", x: "quālitās", ops: ["quālitās", "quantitās", "quālis"], ok: 0 },
        { t: "orden", es: "Tomás enseñó en París.", x: "Thōmās Parisiīs docuit." }
      ]
    }
  ],
  lecturas: [
    {
      id: "la6-r1",
      titulo: "Vīta Aristotelis",
      nivel: "Intermedio",
      texto: "Aristotelēs Stagīrae, prope Macedoniam, nātus est. Pater eius medicus rēgis Macedonum fuit. Adulēscēns septendecim annōrum Athēnās vēnit et in Acadēmīā Platōnem audīvit. Vīgintī annōs ibi mānserat, cum Platō mortuus est.\n\nPosteā Philippus, rēx Macedonum, eum vocāvit, et Aristotelēs Alexandrum, fīlium rēgis, docuit. Deinde Athēnās rediit et scholam suam, Lycēum, condidit. Ibi ambulāns docēbat; itaque discipulī eius Peripatēticī appellātī sunt.\n\nMultōs librōs scrīpsit dē nātūrā, dē animā, dē mōribus, dē rē pūblicā. Librī eius dē logicā posteā Organon dictī sunt, id est «īnstrūmentum», quia logica īnstrūmentum est omnis scientiae.\n\nAlexandrō mortuō, Aristotelēs Chalcidem fūgit, «nē Athēniēnsēs», ut dīxit, «bis in philosophiam peccārent». Ibi annō post mortuus est. Scholasticī eum saepe nōn Aristotelem, sed simpliciter «Philosophum» appellant.",
      traduccion: "Aristóteles nació en Estagira, cerca de Macedonia. Su padre fue médico del rey de los macedonios. A los diecisiete años llegó a Atenas y en la Academia fue alumno de Platón. Llevaba allí veinte años cuando murió Platón.\n\nDespués Filipo, rey de los macedonios, lo llamó, y Aristóteles enseñó a Alejandro, el hijo del rey. Luego volvió a Atenas y fundó su propia escuela, el Liceo. Allí enseñaba paseando; por eso sus discípulos fueron llamados peripatéticos.\n\nEscribió muchos libros sobre la naturaleza, el alma, la moral y la política. Sus libros de lógica recibieron más tarde el nombre de Órganon, es decir, «instrumento», porque la lógica es el instrumento de todo saber.\n\nMuerto Alejandro, Aristóteles huyó a Calcis «para que los atenienses», como él dijo, «no pecaran dos veces contra la filosofía». Allí murió un año después. Los escolásticos a menudo no lo llaman Aristóteles, sino simplemente «el Filósofo».",
      notas: "Lo de pecar «dos veces» alude a Sócrates, al que Atenas había condenado a muerte. Fíjate en *nātus est* y *mortuus est*: forma pasiva y sentido activo, porque *nāscor* y *morior* son deponentes. *Alexandrō mortuō* es un ablativo absoluto, y *mānserat*, un pluscuamperfecto.",
      glosa: {
        "aristotelēs": "Aristóteles (nombre)",
        "stagīrae": "en Estagira (locativo: el caso de «dónde» con nombres de ciudad)",
        prope: "cerca de (+ acusativo)",
        macedoniam: "Macedonia (acusativo)",
        "nātus": "nacido; «nātus est» = nació (perfecto de nāscor, deponente)",
        est: "es; con participio forma el perfecto: «nātus est» = nació; «id est» = es decir",
        pater: "padre",
        eius: "su, de él (genitivo de is)",
        medicus: "médico",
        "rēgis": "del rey (genitivo de rēx)",
        macedonum: "de los macedonios (genitivo plural de Macedo)",
        fuit: "fue (perfecto de sum)",
        "adulēscēns": "joven (participio de presente de adolēscō, «crecer»: «el que está creciendo»)",
        septendecim: "diecisiete",
        "annōrum": "de años (genitivo plural): «de diecisiete años»",
        "athēnās": "a Atenas (acusativo de dirección, sin preposición)",
        "vēnit": "llegó, vino (perfecto de veniō: alargamiento)",
        et: "y",
        in: "en (+ ablativo)",
        "acadēmīā": "la Academia (ablativo): la escuela de Platón",
        "platōnem": "a Platón (acusativo)",
        "audīvit": "escuchó; aquí, «fue alumno de» (perfecto de audiō, en -vī)",
        "vīgintī": "veinte",
        "annōs": "años (acusativo de duración: «durante veinte años»)",
        ibi: "allí",
        "mānserat": "había permanecido (pluscuamperfecto de maneō)",
        cum: "cuando",
        "platō": "Platón",
        mortuus: "muerto; «mortuus est» = murió (perfecto de morior, deponente)",
        "posteā": "después",
        philippus: "Filipo (rey de Macedonia, padre de Alejandro)",
        "rēx": "rey",
        eum: "lo, a él (acusativo de is)",
        "vocāvit": "llamó (perfecto de vocō, en -vī)",
        alexandrum: "a Alejandro (acusativo): Alejandro Magno",
        "fīlium": "hijo (acusativo)",
        docuit: "enseñó (perfecto de doceō, en -uī)",
        deinde: "luego",
        rediit: "volvió (perfecto de redeō)",
        scholam: "escuela (acusativo)",
        suam: "suya, propia (acusativo)",
        "lycēum": "el Liceo (acusativo): la escuela de Aristóteles",
        condidit: "fundó (perfecto de condō, con reduplicación: con-didī)",
        "ambulāns": "paseando (participio de presente de ambulō)",
        "docēbat": "enseñaba (imperfecto de doceō)",
        itaque: "por eso",
        "discipulī": "discípulos",
        "peripatēticī": "peripatéticos: «los que pasean» (palabra griega)",
        "appellātī": "llamados; «appellātī sunt» = fueron llamados (perfecto pasivo de appellō)",
        sunt: "son; con participio, perfecto pasivo: «appellātī sunt» = fueron llamados",
        "multōs": "muchos (acusativo)",
        "librōs": "libros (acusativo)",
        "scrīpsit": "escribió (perfecto de scrībō, en -sī)",
        "dē": "sobre, acerca de (+ ablativo)",
        "nātūrā": "la naturaleza (ablativo)",
        "animā": "el alma (ablativo de anima)",
        "mōribus": "las costumbres, la moral (ablativo plural de mōs)",
        "rē": "cosa (ablativo de rēs): «rēs pūblica» = el Estado, la política",
        "pūblicā": "pública (ablativo)",
        "librī": "los libros",
        "logicā": "la lógica (ablativo)",
        organon: "Órganon (palabra griega: «instrumento»)",
        "dictī": "llamados; «dictī sunt» = fueron llamados (perfecto pasivo de dīcō)",
        id: "eso; «id est» = es decir",
        "īnstrūmentum": "instrumento, herramienta",
        quia: "porque",
        logica: "la lógica",
        omnis: "de toda (genitivo de omnis)",
        scientiae: "ciencia, saber (genitivo)",
        "alexandrō": "Alejandro (ablativo)",
        "mortuō": "muerto (ablativo): «Alexandrō mortuō» = muerto Alejandro (ablativo absoluto)",
        chalcidem: "a Calcis (acusativo de Chalcis, ciudad de la isla de Eubea)",
        "fūgit": "huyó (perfecto de fugiō: alargamiento)",
        "nē": "para que no (+ subjuntivo)",
        "athēniēnsēs": "los atenienses",
        ut: "como",
        "dīxit": "dijo (perfecto de dīcō, en -sī: dīc-s-it)",
        bis: "dos veces",
        philosophiam: "la filosofía (acusativo): «peccāre in» = pecar contra",
        "peccārent": "pecaran (imperfecto de subjuntivo de peccō)",
        "annō": "año (ablativo): «annō post» = un año después",
        post: "después",
        "scholasticī": "los escolásticos",
        saepe: "a menudo",
        "nōn": "no",
        aristotelem: "Aristóteles (acusativo)",
        sed: "sino",
        simpliciter: "simplemente, sin más",
        philosophum: "«el Filósofo» (acusativo)",
        appellant: "llaman (presente de appellō)"
      },
      preguntas: [
        { q: "¿De quién fue alumno Aristóteles en la Academia?", ops: ["De Platón", "De Filipo", "De Alejandro"], ok: 0 },
        {
          q: "¿Por qué sus discípulos se llamaron peripatéticos?",
          ops: ["Porque Aristóteles enseñaba paseando", "Porque venían de Macedonia", "Porque estudiaban la naturaleza"],
          ok: 0
        },
        {
          q: "¿Por qué los libros de lógica se llamaron Órganon?",
          ops: ["Porque la lógica es el instrumento de todo saber", "Porque los escribió en Calcis", "Porque hablan de música"],
          ok: 0
        },
        { q: "¿Cómo llaman a menudo los escolásticos a Aristóteles?", ops: ["«el Filósofo»", "«el Maestro»", "«el Macedonio»"], ok: 0 }
      ]
    },
    {
      id: "la6-r2",
      titulo: "Porphyrius et Īsagōgē",
      nivel: "Intermedio",
      texto: "Porphyrius Tyrī, in Phoenīciā, nātus est. Prīmum Malchus vocābātur, quod nōmen «rēgem» significat. Longīnus autem, magister eius, eum Porphyrium appellāvit, id est «purpurātum», quia purpura color rēgum est.\n\nRōmae Plōtīnum audīvit et librōs eius ēdidit. Posteā, ut amīcus Rōmānus Catēgoriās Aristotelis intellegeret, parvum librum composuit: Īsagōgēn, id est «intrōductiōnem». In eō quīnque vōcēs explicat: genus, speciem, differentiam, proprium, accidēns.\n\nSed magnam quaestiōnem nōn solvit: utrum genera et speciēs in rēbus sint an in sōlō intellēctū. «Dīcere recūsābō», inquit, «altissimum enim negōtium est.» Ita nāta est quaestiō dē ūniversālibus, dē quā magistrī per multa saecula disputāvērunt.\n\nBoēthius hunc librum in Latīnum vertit, et per mīlle annōs discipulī logicam ab Īsagōgē incēpērunt.",
      traduccion: "Porfirio nació en Tiro, en Fenicia. Al principio se llamaba Malco, nombre que significa «rey». Pero Longino, su maestro, lo llamó Porfirio, es decir, «vestido de púrpura», porque la púrpura es el color de los reyes.\n\nEn Roma fue alumno de Plotino y publicó sus libros. Más tarde, para que un amigo romano entendiera las Categorías de Aristóteles, compuso un librito: la Isagoge, es decir, la «Introducción». En él explica cinco términos: el género, la especie, la diferencia, el propio y el accidente.\n\nPero no resolvió una gran cuestión: si los géneros y las especies están en las cosas o solo en el entendimiento. «Me negaré a decirlo», dice, «pues es un asunto altísimo». Así nació la cuestión de los universales, sobre la que los maestros disputaron durante muchos siglos.\n\nBoecio tradujo este libro al latín, y durante mil años los alumnos empezaron la lógica por la Isagoge.",
      notas: "La negativa de Porfirio es real; en la traducción de Boecio dice *dicere recusabo; altissimum enim negotium est*. *Recūsābō* es un futuro. *Vertit* y *solvit* son perfectos que se escriben igual que el presente: aquí el relato está en pasado. El «propio» es lo que solo tiene una especie, como la capacidad de reír en el hombre.",
      glosa: {
        porphyrius: "Porfirio (nombre)",
        "tyrī": "en Tiro (locativo de Tyrus, ciudad de Fenicia)",
        in: "en (+ ablativo); con acusativo, «a»: «in Latīnum» = al latín",
        "phoenīciā": "Fenicia (ablativo): la costa del actual Líbano",
        "nātus": "nacido; «nātus est» = nació (perfecto de nāscor)",
        est: "es; «nātus est» = nació; «id est» = es decir",
        "prīmum": "al principio",
        malchus: "Malco (su nombre de nacimiento)",
        "vocābātur": "se llamaba (imperfecto pasivo de vocō)",
        quod: "el cual (relativo neutro): «quod nōmen» = nombre que",
        "nōmen": "nombre",
        "rēgem": "«rey» (acusativo de rēx)",
        significat: "significa",
        "longīnus": "Longino (filósofo griego, su maestro en Atenas)",
        autem: "pero, por su parte",
        magister: "maestro",
        eius: "su, de él (genitivo de is)",
        eum: "lo, a él",
        porphyrium: "Porfirio (acusativo)",
        "appellāvit": "llamó (perfecto de appellō, en -vī)",
        id: "eso; «id est» = es decir",
        "purpurātum": "«vestido de púrpura» (acusativo de purpurātus)",
        quia: "porque",
        purpura: "la púrpura",
        color: "color",
        "rēgum": "de los reyes (genitivo plural de rēx)",
        "rōmae": "en Roma (locativo)",
        "plōtīnum": "a Plotino (acusativo): filósofo, maestro de Porfirio",
        "audīvit": "escuchó; aquí, «fue alumno de» (perfecto de audiō)",
        et: "y",
        "librōs": "libros (acusativo)",
        "ēdidit": "publicó, editó (perfecto de ēdō: ē-didī, reduplicación)",
        "posteā": "después",
        ut: "para que (+ subjuntivo)",
        "amīcus": "amigo",
        "rōmānus": "romano",
        "catēgoriās": "las Categorías (acusativo plural): la obra de Aristóteles",
        aristotelis: "de Aristóteles (genitivo)",
        intellegeret: "entendiera (imperfecto de subjuntivo de intellegō)",
        parvum: "pequeño (acusativo)",
        librum: "libro (acusativo)",
        composuit: "compuso (perfecto de compōnō, en -uī)",
        "īsagōgēn": "la Isagoge (acusativo griego en -ēn): en griego, «introducción»",
        "intrōductiōnem": "introducción (acusativo)",
        "eō": "él (ablativo de is): «in eō» = en él",
        "quīnque": "cinco",
        "vōcēs": "voces, términos (acusativo plural de vōx): los cinco predicables",
        explicat: "explica",
        genus: "el género (acusativo)",
        speciem: "la especie (acusativo de speciēs)",
        differentiam: "la diferencia (acusativo)",
        proprium: "el propio (acusativo): lo que solo tiene una especie",
        "accidēns": "el accidente (participio de accidō, «sobrevenir»)",
        sed: "pero",
        magnam: "gran (acusativo)",
        "quaestiōnem": "cuestión (acusativo)",
        "nōn": "no",
        solvit: "resolvió (perfecto de solvō: igual que el presente)",
        utrum: "si (pregunta indirecta): «utrum… an…» = si… o…",
        genera: "los géneros (plural de genus)",
        "speciēs": "las especies",
        "rēbus": "las cosas (ablativo plural de rēs)",
        sint: "están, existen (subjuntivo de sum)",
        an: "o (en preguntas dobles)",
        "sōlō": "solo (ablativo)",
        "intellēctū": "el entendimiento (ablativo de intellēctus)",
        "dīcere": "decir (infinitivo)",
        "recūsābō": "me negaré (futuro de recūsō)",
        inquit: "dice, dijo (solo con citas directas)",
        altissimum: "altísimo, muy profundo (superlativo de altus)",
        enim: "pues",
        "negōtium": "asunto, tarea",
        ita: "así",
        "nāta": "nacida; «nāta est» = nació (perfecto de nāscor)",
        "quaestiō": "la cuestión",
        "dē": "sobre, acerca de (+ ablativo)",
        "ūniversālibus": "los universales (ablativo plural)",
        "quā": "la cual (ablativo femenino del relativo)",
        "magistrī": "los maestros",
        per: "durante (+ acusativo)",
        multa: "muchos (acusativo neutro plural)",
        saecula: "siglos (acusativo plural de saeculum)",
        "disputāvērunt": "disputaron, discutieron (perfecto de disputō)",
        "boēthius": "Boecio (nombre)",
        hunc: "este (acusativo de hic)",
        "latīnum": "el latín (acusativo)",
        vertit: "tradujo (perfecto de vertō: igual que el presente)",
        "mīlle": "mil",
        "annōs": "años (acusativo de duración)",
        "discipulī": "los alumnos",
        logicam: "la lógica (acusativo)",
        ab: "desde, por (+ ablativo)",
        "īsagōgē": "la Isagoge (ablativo)",
        "incēpērunt": "empezaron (perfecto de incipiō: alargamiento)"
      },
      preguntas: [
        { q: "¿Qué significaba Malco, el primer nombre de Porfirio?", ops: ["rey", "púrpura", "maestro"], ok: 0 },
        {
          q: "¿Para qué escribió Porfirio la Isagoge?",
          ops: ["Para que un amigo romano entendiera las Categorías", "Para resolver la cuestión de los universales", "Para traducir a Plotino al latín"],
          ok: 0
        },
        {
          q: "¿Qué hizo Porfirio con la cuestión de los géneros y las especies?",
          ops: ["Se negó a resolverla", "La resolvió en pocas líneas", "Se la dejó a su maestro Longino"],
          ok: 0
        }
      ]
    },
    {
      id: "la6-r3",
      titulo: "Boēthius in carcere",
      nivel: "Intermedio",
      texto: "Boēthius Rōmae nātus est, ex familiā nōbilī. Linguam Graecam bene didicit et librōs philosophōrum Graecōrum lēgit. Cōnsul fuit, et rēgī Theodoricō diū servīvit.\n\nMagnum cōnsilium cēperat: omnēs librōs Aristotelis et Platōnis in Latīnum vertere. Nōn omnēs vertit, sed multōs librōs Aristotelis dē logicā vertit et explicāvit. Per hōs librōs magistrī mediī aevī Aristotelem cognōvērunt.\n\nSed inimīcī eum falsō accūsāvērunt, et rēx eum in carcerem mīsit. In carcere, mortem exspectāns, librum scrīpsit quī «Dē cōnsōlātiōne philosophiae» īnscrībitur. In eō Philosophia, quasi fēmina gravis et pulchra, eī appāret et eum cōnsōlātur: «Quid igitur, ō mortālēs, extrā petitis intrā vōs positam fēlīcitātem?»\n\nPaulō post Boēthius occīsus est. Liber autem, in carcere scrīptus, per tōtum medium aevum lēctus est. Ideō Boēthius «ultimus Rōmānōrum, prīmus scholasticōrum» appellātur.",
      traduccion: "Boecio nació en Roma, en una familia noble. Aprendió bien el griego y leyó los libros de los filósofos griegos. Fue cónsul y sirvió mucho tiempo al rey Teodorico.\n\nSe había propuesto un gran plan: traducir al latín todos los libros de Aristóteles y de Platón. No los tradujo todos, pero sí tradujo y explicó muchos libros de lógica de Aristóteles. Gracias a estos libros, los maestros de la Edad Media conocieron a Aristóteles.\n\nPero sus enemigos lo acusaron falsamente, y el rey lo metió en la cárcel. En la cárcel, esperando la muerte, escribió un libro que se titula «La consolación de la filosofía». En él, la Filosofía, como una mujer venerable y hermosa, se le aparece y lo consuela: «¿Por qué, pues, mortales, buscáis fuera la felicidad que está puesta dentro de vosotros?»\n\nPoco después Boecio fue ejecutado. Pero el libro, escrito en la cárcel, se leyó durante toda la Edad Media. Por eso a Boecio lo llaman «el último de los romanos, el primero de los escolásticos».",
      notas: "La pregunta de la Filosofía es una frase real de la *Cōnsōlātiō* (libro II): fíjate en *positam*, participio de perfecto de *pōnō*, «puesta». *Cēperat* es pluscuamperfecto: el plan venía de antes. *Mortem exspectāns* es un participio de presente: «esperando la muerte». El apodo del final no es medieval, sino moderno (se suele atribuir al historiador Martin Grabmann); aquí va en latín.",
      glosa: {
        "boēthius": "Boecio (nombre)",
        "rōmae": "en Roma (locativo)",
        "nātus": "nacido; «nātus est» = nació",
        est: "es; con participio, perfecto: «nātus est» = nació",
        ex: "de (+ ablativo)",
        "familiā": "familia (ablativo)",
        "nōbilī": "noble (ablativo de nōbilis)",
        linguam: "lengua (acusativo)",
        graecam: "griega (acusativo)",
        bene: "bien",
        didicit: "aprendió (perfecto de discō: reduplicación)",
        et: "y",
        "librōs": "libros (acusativo)",
        "philosophōrum": "de los filósofos (genitivo plural)",
        "graecōrum": "griegos (genitivo plural)",
        "lēgit": "leyó (perfecto de legō: alargamiento; el presente es legit)",
        "cōnsul": "cónsul: el cargo más alto de Roma",
        fuit: "fue (perfecto de sum)",
        "rēgī": "al rey (dativo de rēx)",
        "theodoricō": "Teodorico (dativo): rey de los ostrogodos en Italia",
        "diū": "mucho tiempo",
        "servīvit": "sirvió (perfecto de serviō, + dativo)",
        magnum: "gran (acusativo)",
        "cōnsilium": "plan; «cōnsilium capere» = proponerse algo",
        "cēperat": "había tomado (pluscuamperfecto de capiō)",
        "omnēs": "todos (acusativo plural)",
        aristotelis: "de Aristóteles (genitivo)",
        "platōnis": "de Platón (genitivo)",
        in: "en (+ ablativo); con acusativo, «a»: «in Latīnum» = al latín; «in carcerem» = a la cárcel",
        "latīnum": "el latín (acusativo)",
        vertere: "traducir (infinitivo de vertō)",
        "nōn": "no",
        vertit: "tradujo (perfecto de vertō: igual que el presente)",
        sed: "pero",
        "multōs": "muchos (acusativo)",
        "dē": "sobre (+ ablativo)",
        "logicā": "la lógica (ablativo)",
        "explicāvit": "explicó, comentó (perfecto de explicō)",
        per: "por medio de; durante (+ acusativo)",
        "hōs": "estos (acusativo plural de hic)",
        "magistrī": "los maestros",
        "mediī": "medio (genitivo): «medium aevum» = la Edad Media",
        "aevī": "edad, época (genitivo de aevum)",
        aristotelem: "a Aristóteles (acusativo)",
        "cognōvērunt": "conocieron (perfecto de cognōscō, en -vī)",
        "inimīcī": "los enemigos",
        eum: "lo, a él",
        "falsō": "falsamente",
        "accūsāvērunt": "acusaron (perfecto de accūsō)",
        "rēx": "el rey",
        carcerem: "la cárcel (acusativo)",
        "mīsit": "envió, metió (perfecto de mittō, en -sī)",
        carcere: "la cárcel (ablativo): «in carcere» = en la cárcel",
        mortem: "la muerte (acusativo de mors)",
        "exspectāns": "esperando (participio de presente de exspectō)",
        librum: "un libro (acusativo)",
        "scrīpsit": "escribió (perfecto de scrībō)",
        "quī": "que, el cual (relativo masculino)",
        "cōnsōlātiōne": "la consolación, el consuelo (ablativo de cōnsōlātiō)",
        philosophiae: "de la filosofía (genitivo)",
        "īnscrībitur": "se titula (presente pasivo de īnscrībō)",
        "eō": "él (ablativo de is): «in eō» = en él",
        philosophia: "la Filosofía (aquí, como persona)",
        quasi: "como, a modo de",
        "fēmina": "mujer",
        gravis: "seria, venerable",
        pulchra: "hermosa",
        "eī": "le, a él (dativo de is)",
        "appāret": "aparece (presente de appāreō)",
        "cōnsōlātur": "consuela (deponente)",
        quid: "¿por qué? (aquí; normalmente «¿qué?»)",
        igitur: "pues, entonces",
        "ō": "¡oh!",
        "mortālēs": "mortales (vocativo plural)",
        "extrā": "fuera",
        petitis: "buscáis (presente de petō)",
        "intrā": "dentro de (+ acusativo)",
        "vōs": "vosotros (acusativo)",
        positam: "puesta (participio de perfecto de pōnō, acusativo femenino)",
        "fēlīcitātem": "la felicidad (acusativo de fēlīcitās)",
        "paulō": "poco: «paulō post» = poco después",
        post: "después",
        "occīsus": "muerto, ejecutado; «occīsus est» = fue ejecutado (perfecto pasivo de occīdō)",
        liber: "el libro",
        autem: "en cambio, pero",
        "scrīptus": "escrito (participio de perfecto de scrībō)",
        "tōtum": "toda (acusativo)",
        medium: "medio: «medium aevum» = la Edad Media",
        aevum: "edad, época (acusativo)",
        "lēctus": "leído; «lēctus est» = fue leído (perfecto pasivo de legō)",
        "ideō": "por eso",
        ultimus: "el último",
        "rōmānōrum": "de los romanos (genitivo plural)",
        "prīmus": "el primero",
        "scholasticōrum": "de los escolásticos (genitivo plural)",
        "appellātur": "es llamado (presente pasivo de appellō)"
      },
      preguntas: [
        {
          q: "¿Qué plan se había propuesto Boecio?",
          ops: ["Traducir al latín todo Aristóteles y Platón", "Escribir la historia de Roma", "Reformar el ejército de Teodorico"],
          ok: 0
        },
        {
          q: "¿Dónde escribió «La consolación de la filosofía»?",
          ops: ["En la cárcel, esperando la muerte", "En Atenas, de joven", "En la corte, siendo cónsul"],
          ok: 0
        },
        { q: "Según la Filosofía, ¿dónde está la felicidad?", ops: ["Dentro de nosotros", "En la fortuna", "En los libros griegos"], ok: 0 }
      ]
    },
    {
      id: "la6-r4",
      titulo: "Thōmās Aquīnās, bōs mūtus",
      nivel: "Intermedio",
      texto: "Thōmās in Ītaliā, prope oppidum Aquīnum, nātus est; inde nōmen Aquīnās. Iuvenis Ōrdinem Praedicātōrum intrāvit. Familia eius repugnābat: frātrēs eum cēpērunt et ūnum annum domī tenuērunt. Sed Thōmās cōnsilium nōn mūtāvit.\n\nPosteā Colōniae Albertum Magnum audīvit. Thōmās corpore magnus erat et in scholā semper tacēbat; itaque condiscipulī eum «bovem mūtum» vocābant. Ōlim condiscipulus quīdam, quī eum tardum putābat, lēctiōnem eī explicāre voluit. Thōmās humiliter audiēbat. Sed condiscipulus errāvit, et Thōmās, rem tōtam clārē explicāns, eum corrēxit.\n\nAlbertus, Thōmā in disputātiōne audītō, discipulīs dīxit: «Nōs vocāmus istum bovem mūtum, sed ipse adhūc tālem dabit in doctrīnā mūgītum, quod in tōtō mundō sonābit.»\n\nEt ita factum est. Thōmās Parisiīs docuit, Summam theologiae scrīpsit, et annō MCCLXXIV mortuus est.",
      traduccion: "Tomás nació en Italia, cerca de la ciudad de Aquino; de ahí el nombre «de Aquino». De joven entró en la Orden de Predicadores. Su familia se oponía: sus hermanos lo apresaron y lo retuvieron un año en casa. Pero Tomás no cambió de decisión.\n\nDespués, en Colonia, fue alumno de Alberto Magno. Tomás era grande de cuerpo y en clase siempre callaba; por eso sus compañeros lo llamaban «el buey mudo». Una vez, un compañero que lo tenía por torpe quiso explicarle la lección. Tomás escuchaba con humildad. Pero el compañero se equivocó, y Tomás, explicando con claridad toda la cuestión, lo corrigió.\n\nAlberto, tras oír a Tomás en una disputa, dijo a sus alumnos: «Nosotros lo llamamos el buey mudo, pero él dará todavía con su doctrina un mugido tal que resonará en todo el mundo».\n\nY así sucedió. Tomás enseñó en París, escribió la Suma de teología y murió en el año 1274.",
      notas: "Las palabras de Alberto vienen de la primera biografía de santo Tomás, escrita por Guillermo de Tocco. *Dabit* y *sonābit* son futuros, y *Thōmā audītō* es un ablativo absoluto. Las fechas de los impresos van en números romanos: M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1; una cifra menor delante de una mayor se resta (IV = 4).",
      glosa: {
        "thōmās": "Tomás (nombre)",
        in: "en (+ ablativo)",
        "ītaliā": "Italia (ablativo)",
        prope: "cerca de (+ acusativo)",
        oppidum: "ciudad, pueblo (acusativo)",
        "aquīnum": "Aquino (acusativo): ciudad entre Roma y Nápoles",
        "nātus": "nacido; «nātus est» = nació",
        est: "es; «nātus est» = nació; «factum est» = sucedió",
        inde: "de ahí",
        "nōmen": "nombre",
        "aquīnās": "«de Aquino»",
        iuvenis: "de joven",
        "ōrdinem": "la orden (acusativo de ōrdō): «Ōrdō Praedicātōrum» = la Orden de Predicadores, los dominicos",
        "praedicātōrum": "de los Predicadores (genitivo plural)",
        "intrāvit": "entró en (perfecto de intrō)",
        familia: "familia",
        eius: "su, de él",
        "repugnābat": "se oponía (imperfecto de repugnō)",
        "frātrēs": "los hermanos",
        eum: "lo, a él",
        "cēpērunt": "apresaron, cogieron (perfecto de capiō: alargamiento)",
        et: "y",
        "ūnum": "un (acusativo)",
        annum: "año (acusativo de duración: «durante un año»)",
        "domī": "en casa (locativo de domus)",
        "tenuērunt": "retuvieron (perfecto de teneō, en -uī)",
        sed: "pero",
        "cōnsilium": "decisión, propósito (acusativo)",
        "nōn": "no",
        "mūtāvit": "cambió (perfecto de mūtō)",
        "posteā": "después",
        "colōniae": "en Colonia (locativo)",
        albertum: "a Alberto (acusativo)",
        magnum: "Magno (acusativo): Alberto Magno, maestro dominico",
        "audīvit": "escuchó; aquí, «fue alumno de»",
        corpore: "de cuerpo (ablativo de corpus)",
        magnus: "grande",
        erat: "era (imperfecto de sum)",
        "scholā": "la escuela, la clase (ablativo)",
        semper: "siempre",
        "tacēbat": "callaba (imperfecto de taceō)",
        itaque: "por eso",
        "condiscipulī": "los compañeros de estudios",
        bovem: "buey (acusativo de bōs)",
        "mūtum": "mudo (acusativo)",
        "vocābant": "llamaban (imperfecto de vocō)",
        "ōlim": "una vez",
        condiscipulus: "compañero de estudios",
        "quīdam": "un, cierto",
        "quī": "que, el cual",
        tardum: "lento, torpe (acusativo)",
        "putābat": "creía, consideraba (imperfecto de putō)",
        "lēctiōnem": "la lección (acusativo de lēctiō)",
        "eī": "le, a él (dativo)",
        "explicāre": "explicar",
        voluit: "quiso (perfecto de volō)",
        humiliter: "humildemente",
        "audiēbat": "escuchaba (imperfecto de audiō)",
        "errāvit": "se equivocó (perfecto de errō)",
        rem: "el asunto, la cuestión (acusativo de rēs)",
        "tōtam": "entera (acusativo)",
        "clārē": "claramente",
        "explicāns": "explicando (participio de presente de explicō)",
        "corrēxit": "corrigió (perfecto de corrigō, en -sī: corrēg-s-it)",
        albertus: "Alberto",
        "thōmā": "Tomás (ablativo)",
        "disputātiōne": "disputa (ablativo): el debate reglado de las escuelas",
        "audītō": "oído (participio de perfecto, ablativo): «Thōmā audītō» = tras oír a Tomás (ablativo absoluto)",
        "discipulīs": "a los alumnos (dativo plural)",
        "dīxit": "dijo",
        "nōs": "nosotros",
        "vocāmus": "llamamos",
        istum: "a este (acusativo de iste)",
        ipse: "él mismo",
        "adhūc": "todavía, algún día",
        "tālem": "tal (acusativo)",
        dabit: "dará (futuro de dō)",
        "doctrīnā": "la doctrina, la enseñanza (ablativo)",
        "mūgītum": "mugido (acusativo de mūgītus)",
        quod: "que (latín medieval; en clásico sería «ut»): «tālem… quod» = tal… que",
        "tōtō": "todo (ablativo)",
        "mundō": "el mundo (ablativo)",
        "sonābit": "resonará (futuro de sonō)",
        ita: "así",
        factum: "hecho; «factum est» = sucedió",
        "parisiīs": "en París (locativo)",
        docuit: "enseñó (perfecto de doceō)",
        summam: "la Suma (acusativo): «Summa theologiae», su gran obra",
        theologiae: "de teología (genitivo)",
        "scrīpsit": "escribió",
        "annō": "en el año (ablativo)",
        mcclxxiv: "1274 en números romanos: M (1000) + CC (200) + LXX (70) + IV (4)",
        mortuus: "muerto; «mortuus est» = murió"
      },
      preguntas: [
        { q: "¿Por qué lo llamaban «buey mudo»?", ops: ["Porque era grande y callaba en clase", "Porque no sabía latín", "Porque venía del campo"], ok: 0 },
        {
          q: "¿Qué pasó cuando un compañero quiso explicarle la lección?",
          ops: ["El compañero se equivocó y Tomás lo corrigió", "Tomás no entendió nada", "Alberto los echó de clase"],
          ok: 0
        },
        {
          q: "¿Qué anunció Alberto Magno?",
          ops: ["Que el «mugido» de Tomás resonaría en todo el mundo", "Que Tomás nunca hablaría en público", "Que Tomás volvería con su familia"],
          ok: 0
        },
        { q: "¿En qué año murió santo Tomás?", ops: ["1274", "1224", "1474"], ok: 0 }
      ]
    },
    {
      id: "la6-r5",
      titulo: "Decem praedicāmenta",
      nivel: "Intermedio",
      texto: "Aristotelēs in librō Catēgoriārum omnia quae sunt in decem genera dīvīsit. Haec genera Graecē «catēgoriae», Latīnē «praedicāmenta» appellantur. Prīmum est substantia, ut homō vel equus. Cētera novem accidentia sunt, quia nōn per sē sunt, sed in substantiā.\n\nExemplum sit magister noster. Quid est? Homō: substantia. Quantus? Sex pedēs altus: quantitās. Quālis? Doctus et bonus: quālitās. Ad quid? Pater est, et magister discipulōrum: relātiō. Ubi? In scholā: ubi. Quandō? Hodiē: quandō. Quōmodo positus? Sedet: situs. Quid habet? Calceātus est: habitus. Quid facit? Docet: āctiō. Quid patitur? Ā discipulīs audītur: passiō.\n\nUt haec memoriā tenērent, ōlim discipulī hōs versūs discēbant:\n«Arbor sex servōs fervōre refrīgerat ūstōs,\nrūrī crās stābō, nec tunicātus erō.»",
      traduccion: "Aristóteles, en el libro de las Categorías, dividió todo lo que existe en diez géneros. Estos géneros se llaman en griego «categorías» y en latín «predicamentos». El primero es la sustancia, como un hombre o un caballo. Los otros nueve son accidentes, porque no existen por sí mismos, sino en una sustancia.\n\nSirva de ejemplo nuestro maestro. ¿Qué es? Un hombre: sustancia. ¿De qué tamaño? De seis pies de alto: cantidad. ¿Cómo es? Sabio y bueno: cualidad. ¿Respecto a qué? Es padre, y maestro de sus alumnos: relación. ¿Dónde? En la escuela: lugar. ¿Cuándo? Hoy: tiempo. ¿En qué postura? Está sentado: posición. ¿Qué lleva? Va calzado: hábito. ¿Qué hace? Enseña: acción. ¿Qué recibe? Los alumnos lo escuchan: pasión.\n\nPara retener todo esto en la memoria, antaño los alumnos aprendían estos versos:\n«El árbol refresca a seis siervos quemados por el calor;\nmañana estaré de pie en el campo, y no llevaré túnica.»",
      notas: "Cada categoría tiene su ejemplo en los versos: *arbor* (sustancia), *sex* (cantidad), *servōs* (relación: no hay siervo sin señor), *fervōre* (cualidad), *refrīgerat* (acción), *ūstōs* (pasión), *rūrī* (lugar), *crās* (tiempo), *stābō* (posición) y *tunicātus* (hábito). Fíjate en los participios de perfecto *ūstōs* y *tunicātus*, y en los futuros *stābō* y *erō*.",
      glosa: {
        "aristotelēs": "Aristóteles",
        in: "en (+ ablativo); con acusativo, «en» al dividir: «in decem genera» = en diez géneros",
        "librō": "libro (ablativo)",
        "catēgoriārum": "de las Categorías (genitivo plural)",
        omnia: "todas las cosas (acusativo neutro plural)",
        quae: "que (relativo neutro plural)",
        sunt: "son, existen",
        decem: "diez",
        genera: "géneros (acusativo plural de genus)",
        "dīvīsit": "dividió (perfecto de dīvidō, en -sī)",
        haec: "estos (neutro plural de hic)",
        "graecē": "en griego",
        "catēgoriae": "categorías («predicaciones», en griego)",
        "latīnē": "en latín",
        "praedicāmenta": "predicamentos, categorías (plural de praedicāmentum)",
        appellantur: "se llaman (presente pasivo de appellō)",
        "prīmum": "el primero (neutro)",
        est: "es",
        substantia: "sustancia: lo que existe por sí",
        ut: "como, por ejemplo; con subjuntivo, «para que»",
        "homō": "hombre",
        vel: "o",
        equus: "caballo",
        "cētera": "los demás (neutro plural)",
        novem: "nueve",
        accidentia: "accidentes (plural de accidēns, participio de accidō)",
        quia: "porque",
        "nōn": "no",
        per: "por: «per sē» = por sí mismo",
        "sē": "sí mismo",
        sed: "sino",
        "substantiā": "una sustancia (ablativo)",
        exemplum: "ejemplo",
        sit: "sea (subjuntivo de sum): «exemplum sit…» = sirva de ejemplo…",
        magister: "maestro",
        noster: "nuestro",
        quid: "qué",
        quantus: "¿de qué tamaño?",
        sex: "seis (en los versos, la cantidad)",
        "pedēs": "pies (acusativo de extensión): «sex pedēs altus» = de seis pies de alto",
        altus: "alto",
        "quantitās": "cantidad",
        "quālis": "¿cómo?, ¿de qué clase?",
        doctus: "docto, sabio (participio de doceō: «enseñado»)",
        et: "y",
        bonus: "bueno",
        "quālitās": "cualidad",
        ad: "a, hacia (+ acusativo): «ad quid?» = ¿respecto a qué?",
        pater: "padre",
        "discipulōrum": "de los alumnos (genitivo plural)",
        "relātiō": "relación (de referō, relātum: «referir»)",
        ubi: "¿dónde?; como categoría, el lugar",
        "scholā": "la escuela (ablativo)",
        "quandō": "¿cuándo?; como categoría, el tiempo",
        "hodiē": "hoy",
        "quōmodo": "cómo",
        positus: "colocado (participio de perfecto de pōnō)",
        sedet: "está sentado",
        situs: "posición, postura",
        habet: "tiene, lleva",
        "calceātus": "calzado (participio de calceō)",
        habitus: "hábito: el llevar algo puesto",
        facit: "hace",
        docet: "enseña",
        "āctiō": "acción",
        patitur: "padece, recibe (deponente: patior)",
        "ā": "por (agente de la pasiva)",
        "discipulīs": "los alumnos (ablativo plural)",
        "audītur": "es escuchado (presente pasivo de audiō)",
        "passiō": "pasión: el recibir una acción",
        "memoriā": "en la memoria (ablativo): «memoriā tenēre» = recordar",
        "tenērent": "retuvieran (imperfecto de subjuntivo de teneō)",
        "ōlim": "antaño",
        "discipulī": "los alumnos",
        "hōs": "estos (acusativo plural de hic)",
        "versūs": "versos (acusativo plural de versus)",
        "discēbant": "aprendían (imperfecto de discō)",
        arbor: "el árbol → sustancia",
        "servōs": "a los siervos (acusativo plural) → relación",
        "fervōre": "por el calor (ablativo de fervor) → cualidad",
        "refrīgerat": "refresca → acción",
        "ūstōs": "quemados (participio de perfecto de ūrō, acusativo plural) → pasión",
        "rūrī": "en el campo (locativo de rūs) → lugar",
        "crās": "mañana → tiempo",
        "stābō": "estaré de pie (futuro de stō) → posición",
        nec: "y no",
        "tunicātus": "vestido con túnica (participio) → hábito",
        "erō": "estaré (futuro de sum)"
      },
      preguntas: [
        { q: "¿Cuál es la primera categoría?", ops: ["La sustancia", "La cantidad", "La relación"], ok: 0 },
        {
          q: "¿Por qué las otras nueve son accidentes?",
          ops: ["Porque no existen por sí mismas, sino en una sustancia", "Porque ocurren por casualidad", "Porque son menos importantes para la lógica"],
          ok: 0
        },
        { q: "«Calceātus est» es un ejemplo de…", ops: ["hábito (habitus)", "acción (āctiō)", "lugar (ubi)"], ok: 0 },
        { q: "En los versos, ¿qué categoría representa «crās»?", ops: ["el tiempo (quandō)", "el lugar (ubi)", "la cantidad (quantitās)"], ok: 0 }
      ]
    }
  ]
});
