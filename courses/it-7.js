// Glossa · italiano · semana 7: Imperfetto y charla con colegas
window.CONTENT.it.semanas.push({
  n: 7,
  lecciones: [
    {
      id: "it7-1",
      titulo: "El imperfetto: cómo era y qué hacías",
      min: 45,
      intro: "Con el *imperfetto* describes cómo eran las cosas y cuentas lo que hacías antes: tu época de estudiante, tu primer trabajo, cómo era tu ciudad. Es justo lo que te preguntarán los colegas en la mesa, y tienes ventaja: funciona casi igual que el imperfecto español (*lavoravo* = trabajaba).",
      bloques: [
        {
          t: "p",
          x: "Se forma quitando *-re* al infinitivo y añadiendo **-vo, -vi, -va, -vamo, -vate, -vano**. Las tres conjugaciones funcionan igual: *lavora-re* → *lavoravo*, *prende-re* → *prendevo*, *dormi-re* → *dormivo*."
        },
        {
          t: "tabla",
          cab: ["Persona", "lavorare", "prendere", "dormire"],
          audio: [1, 2, 3],
          filas: [
            ["io", "lavoravo", "prendevo", "dormivo"],
            ["tu", "lavoravi", "prendevi", "dormivi"],
            ["lui, lei, Lei", "lavorava", "prendeva", "dormiva"],
            ["noi", "lavoravamo", "prendevamo", "dormivamo"],
            ["voi", "lavoravate", "prendevate", "dormivate"],
            ["loro", "lavoravano", "prendevano", "dormivano"]
          ]
        },
        {
          t: "nota",
          x: "Compáralo con el español: *-ava* = «-aba» (*lavorava*, trabajaba) y *-eva*, *-iva* = «-ía» (*prendeva*, cogía; *dormiva*, dormía). El acento cae donde en español: *lavoRAvo*, *lavoRAvano* (trabajaba, trabajaban). Solo cambia en *noi* y *voi*, que lo llevan en *-va-*: *lavoraVAmo*, *lavoraVAte*, y no «lavoRAvamo», como «trabajábamos»."
        },
        {
          t: "p",
          x: "Casi todos los verbos son regulares en *imperfetto*, también los irregulares de la semana 3: *andavo*, *venivo*, *stavo*, *uscivo*, *potevo*, *volevo*, *dovevo*. Solo *essere* es irregular de verdad, y se parece mucho al español. *Fare*, *dire* y *bere* toman la raíz larga que ya conoces de *facciamo*, *diciamo* y *bevo*."
        },
        {
          t: "tabla",
          cab: ["Persona", "essere", "fare", "dire", "bere"],
          audio: [1, 2, 3, 4],
          filas: [
            ["io", "ero", "facevo", "dicevo", "bevevo"],
            ["tu", "eri", "facevi", "dicevi", "bevevi"],
            ["lui, lei, Lei", "era", "faceva", "diceva", "beveva"],
            ["noi", "eravamo", "facevamo", "dicevamo", "bevevamo"],
            ["voi", "eravate", "facevate", "dicevate", "bevevate"],
            ["loro", "erano", "facevano", "dicevano", "bevevano"]
          ]
        },
        {
          t: "p",
          x: "Se usa para: **costumbres** del pasado (*Da studente lavoravo in un bar*); **descripciones** de personas, lugares y situaciones (*L'ufficio era piccolo*); **edad, hora y tiempo** (*Avevo vent'anni*, *Erano le otto*, *Pioveva*); y acciones **en curso** (*Mentre parlavi, scrivevo*)."
        },
        {
          t: "ej",
          items: [
            ["Da bambino giocavo a calcio tutti i giorni.", "De niño jugaba al fútbol todos los días."],
            ["Quando ero studente, vivevo con tre amici.", "Cuando era estudiante, vivía con tres amigos."],
            ["Il mio primo ufficio era piccolo e non aveva finestre.", "Mi primera oficina era pequeña y no tenía ventanas."],
            ["Avevo ventidue anni e tanta voglia di lavorare.", "Tenía veintidós años y muchas ganas de trabajar."],
            ["Erano le otto e pioveva.", "Eran las ocho y llovía."],
            ["Di solito facevamo la pausa alle undici.", "Normalmente hacíamos la pausa a las once."],
            ["Mentre Giulia parlava, Marco scriveva il verbale.", "Mientras Giulia hablaba, Marco escribía el acta."],
            ["Prima prendevo la macchina, adesso vado in bici.", "Antes cogía el coche; ahora voy en bici."]
          ]
        },
        {
          t: "nota",
          x: "«De niño» es *da bambino* (ella: *da bambina*), no «di bambino». Igual *da piccolo* (de pequeño), *da giovane* (de joven) y *da studente* (de estudiante). Otras expresiones que suelen ir con *imperfetto*: *una volta* (antes, en otros tiempos), *prima* (antes), *di solito* (normalmente), *sempre*, *spesso* (a menudo), *ogni estate* (cada verano; *estate* es «verano», no «estado») y *mentre* (mientras)."
        }
      ],
      vocab: [
        ["ero, eri, era", "era, eras, era (imperfetto de essere)"],
        ["eravamo, eravate, erano", "éramos, erais, eran (acento: E-ra-no)"],
        ["avevo, avevi, aveva", "tenía, tenías, tenía"],
        ["facevo (fare)", "hacía (yo)"],
        ["dicevo (dire)", "decía (yo)"],
        ["bevevo (bere)", "bebía (yo)"],
        ["lavoravano", "trabajaban (acento: la-vo-RA-va-no)"],
        ["da bambino, da bambina", "de niño, de niña"],
        ["da piccolo", "de pequeño"],
        ["da studente", "de estudiante"],
        ["da giovane", "de joven (acento: GIO-va-ne)"],
        ["una volta", "antes, en otros tiempos; una vez"],
        ["prima", "antes"],
        ["mentre", "mientras"],
        ["ogni estate", "cada verano (estate = verano)"],
        ["Avevo vent'anni.", "Tenía veinte años."],
        ["Erano le otto.", "Eran las ocho."],
        ["Pioveva.", "Llovía."],
        ["Faceva freddo.", "Hacía frío."],
        ["Da bambino giocavo a calcio.", "De niño jugaba al fútbol."],
        ["avere voglia di", "tener ganas de"]
      ],
      ejercicios: [
        { t: "mc", q: "*Imperfetto* de *lavorare*, «nosotros»:", ops: ["lavoravamo", "lavoravano", "lavoriamo"], ok: 0 },
        { t: "mc", q: "Completa: «Quando ___ studente, vivevo a Madrid.»", ops: ["ero", "sono stato", "era"], ok: 0 },
        { t: "mc", q: "«De niño» se dice…", ops: ["da bambino", "di bambino", "come bambino"], ok: 0 },
        { t: "mc", q: "*Imperfetto* de *fare*, «yo»:", ops: ["facevo", "farevo", "faccio"], ok: 0 },
        { t: "oir", x: "lavoravamo", ops: ["lavoravamo", "lavoravano", "lavoravate"], ok: 0 },
        { t: "orden", es: "De niño jugaba al fútbol todos los días.", x: "Da bambino giocavo a calcio tutti i giorni." },
        { t: "decir", es: "De niño jugaba al fútbol.", x: "Da bambino giocavo a calcio." },
        { t: "decir", es: "Hacía frío y llovía.", x: "Faceva freddo e pioveva." }
      ]
    },
    {
      id: "it7-2",
      titulo: "¿Imperfetto o passato prossimo?",
      min: 45,
      intro: "Es la gran pregunta de la semana, y la regla te favorece: si en español dirías «trabajaba», usa el *imperfetto*; si dirías «trabajé» o «he trabajado», el *passato prossimo*. Con eso contarás a tus colegas qué pasó sin sonar a libro de texto.",
      bloques: [
        {
          t: "p",
          x: "En España usamos tres pasados; en el italiano hablado del norte, como el de Milán, bastan dos. El *passato prossimo* sirve a la vez para «he trabajado» y para «trabajé»: *Ieri ho lavorato fino alle otto* (Ayer trabajé hasta las ocho). Existe un tercero, el *passato remoto* (*lavorai*), pero en el norte casi solo aparece en libros y en textos de historia."
        },
        {
          t: "tabla",
          cab: ["Español", "Italiano", "Tiempo"],
          audio: [1],
          filas: [
            ["trabajaba", "lavoravo", "imperfetto"],
            ["trabajé · he trabajado", "ho lavorato", "passato prossimo"],
            ["estaba", "ero", "imperfetto"],
            ["estuve · he estado", "sono stato", "passato prossimo"],
            ["llegaba", "arrivavo", "imperfetto"],
            ["llegué · he llegado", "sono arrivato", "passato prossimo"]
          ]
        },
        {
          t: "p",
          x: "En una historia, el *imperfetto* pinta el **fondo** (cómo era todo, qué estaba pasando) y el *passato prossimo* cuenta los **hechos** que la hacen avanzar (qué pasó). Pistas: *mentre* (mientras) suele ir con *imperfetto*; *all'improvviso* (de repente), *a un certo punto* (en un momento dado) y *poi* (luego) anuncian un hecho, en *passato prossimo*."
        },
        {
          t: "ej",
          items: [
            ["Pioveva quando sono uscito dall'ufficio.", "Llovía cuando salí de la oficina."],
            ["Mentre lavoravo, è arrivata una mail di Giulia.", "Mientras trabajaba, llegó un correo de Giulia."],
            ["Ero in riunione quando hai chiamato.", "Estaba en una reunión cuando llamaste."],
            ["Stavo presentando i dati quando è andata via la luce.", "Estaba presentando los datos cuando se fue la luz."],
            ["Di solito pranzavo alle due, ma ieri ho pranzato all'una.", "Normalmente comía a las dos, pero ayer comí a la una."],
            ["Ho vissuto a Londra per tre anni.", "Viví tres años en Londres."],
            ["Vivevo a Londra quando ho cambiato lavoro.", "Vivía en Londres cuando cambié de trabajo."]
          ]
        },
        {
          t: "nota",
          x: "Un periodo cerrado y medido (*per tre anni*, *tutta la mattina*, *dalle nove alle sei*) va en *passato prossimo* aunque sea largo: *Ho lavorato tutta la mattina* (Estuve trabajando toda la mañana). Pasa lo mismo en español: «viví tres años en Londres», no «vivía tres años»."
        },
        {
          t: "p",
          x: "Para algo que estaba en marcha justo en ese momento, usa también *stavo* + gerundio, como «estaba haciendo»: *Stavo scrivendo una mail quando mi hai chiamato*. El gerundio: *-are* → *-ando* (*lavorando*), *-ere* e *-ire* → *-endo* (*scrivendo*, *dormendo*); *fare* → *facendo*. Y *stavo per* + infinitivo es «estaba a punto de»: *Stavo per uscire*."
        },
        { t: "p", x: "Algunos verbos cambian de sentido según el tiempo, igual que en español:" },
        {
          t: "tabla",
          cab: ["Imperfetto", "Español", "Passato prossimo", "Español"],
          audio: [0, 2],
          filas: [
            ["sapevo", "sabía", "ho saputo", "me enteré"],
            ["conoscevo", "conocía", "ho conosciuto", "conocí (por primera vez)"],
            ["volevo", "quería", "ho voluto", "quise"],
            ["dovevo", "tenía que (¿y lo hice?)", "ho dovuto", "tuve que (y lo hice)"],
            ["potevo", "podía", "ho potuto", "pude"]
          ]
        },
        {
          t: "ej",
          items: [
            ["Non lo sapevo!", "¡No lo sabía!"],
            ["Ho saputo della riunione solo stamattina.", "No me he enterado de la reunión hasta esta mañana."],
            ["Ho conosciuto Giulia in una videochiamata.", "Conocí a Giulia en una videollamada."],
            ["Dovevo finire il report, ma non ho avuto tempo.", "Tenía que terminar el informe, pero no he tenido tiempo."],
            ["Ieri ho dovuto lavorare fino a tardi.", "Ayer tuve que trabajar hasta tarde."]
          ]
        },
        {
          t: "nota",
          x: "El *imperfetto* de cortesía: *Volevo chiederti una cosa* (Quería preguntarte una cosa), *Volevo sapere se…* (Quería saber si…). Suaviza una petición, igual que en español, y en la oficina lo oirás a diario. Con *Lei*: *Dottor Ferrari, volevo chiederLe una cosa.*"
        }
      ],
      vocab: [
        ["Ero in riunione quando hai chiamato.", "Estaba en una reunión cuando llamaste."],
        ["Pioveva quando sono uscito.", "Llovía cuando salí."],
        ["Mentre lavoravo, è arrivata una mail.", "Mientras trabajaba, llegó un correo."],
        ["Ho lavorato tutta la mattina.", "Estuve trabajando toda la mañana."],
        ["Ho vissuto a Londra per tre anni.", "Viví tres años en Londres."],
        ["stavo + gerundio", "estaba + gerundio (stavo scrivendo = estaba escribiendo)"],
        ["Stavo per uscire.", "Estaba a punto de salir."],
        ["È andata via la luce.", "Se fue la luz."],
        ["all'improvviso", "de repente"],
        ["a un certo punto", "en un momento dado"],
        ["sapevo / ho saputo", "sabía / me enteré"],
        ["Non lo sapevo!", "¡No lo sabía!"],
        ["conoscevo / ho conosciuto", "conocía / conocí"],
        ["volevo / ho voluto", "quería / quise"],
        ["dovevo / ho dovuto", "tenía que / tuve que"],
        ["Volevo chiederti una cosa.", "Quería preguntarte una cosa."],
        ["Volevo sapere se…", "Quería saber si…"],
        ["fino a tardi", "hasta tarde"],
        ["cambiare lavoro", "cambiar de trabajo"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "«Ayer trabajé hasta las ocho»:",
          ops: ["Ieri ho lavorato fino alle otto.", "Ieri lavoravo fino alle otto.", "Ieri sono lavorato fino alle otto."],
          ok: 0
        },
        { t: "mc", q: "Completa: «___ in riunione quando hai chiamato.»", ops: ["Ero", "Sono stato", "Sarò"], ok: 0 },
        { t: "mc", q: "Completa: «Mentre lavoravo, ___ una mail di Giulia.»", ops: ["è arrivata", "arrivava", "è arrivato"], ok: 0 },
        {
          t: "mc",
          q: "«No me enteré de la reunión hasta esta mañana»:",
          ops: ["Ho saputo della riunione solo stamattina.", "Sapevo della riunione solo stamattina.", "Ho conosciuto la riunione solo stamattina."],
          ok: 0
        },
        {
          t: "mc",
          q: "«Viví tres años en Londres» es un periodo cerrado, así que…",
          ops: ["Ho vissuto a Londra per tre anni.", "Vivevo a Londra per tre anni.", "Vivo a Londra da tre anni."],
          ok: 0
        },
        { t: "oir", x: "stavo scrivendo", ops: ["stavo scrivendo", "sto scrivendo", "stava scrivendo"], ok: 0 },
        { t: "orden", es: "Estaba en una reunión cuando llamaste.", x: "Ero in riunione quando hai chiamato." },
        { t: "decir", es: "Quería preguntarte una cosa.", x: "Volevo chiederti una cosa." }
      ]
    },
    {
      id: "it7-3",
      titulo: "Contar experiencias: «Sei mai stato a…?»",
      min: 40,
      intro: "En la mesa y en los viajes de trabajo siempre sale la misma pregunta: *Sei mai stato a Napoli?* Hoy aprendes a preguntar por experiencias, contar las tuyas y decir qué te gustó.",
      bloques: [
        {
          t: "p",
          x: "Para las experiencias («¿has estado alguna vez…?», «nunca he probado…») se usa el *passato prossimo* con *mai* (alguna vez; con *non*, nunca), *già* (ya), *non… ancora* (todavía no) y *appena* (acabar de). Estas palabras van entre el auxiliar y el participio: *Sei mai stato…?*, *Ho già mangiato*, *Non ho ancora finito*, *Sono appena arrivato*."
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["Sei mai stato a Napoli?", "¿Has estado alguna vez en Nápoles? (a él)"],
            ["Sei mai stata a Madrid?", "¿Has estado alguna vez en Madrid? (a ella)"],
            ["È mai stato in Spagna, dottor Ferrari?", "¿Ha estado alguna vez en España, doctor Ferrari?"],
            ["No, non ci sono mai stato.", "No, no he estado nunca."],
            ["Sì, ci sono stato due volte.", "Sí, he estado dos veces."],
            ["Hai mai assaggiato la cotoletta?", "¿Has probado alguna vez la cotoletta?"],
            ["Non l'ho ancora assaggiata.", "Todavía no la he probado."],
            ["Ho già mangiato, grazie.", "Ya he comido, gracias."],
            ["Sono appena tornato da Roma.", "Acabo de volver de Roma."]
          ]
        },
        {
          t: "nota",
          x: "La negación es doble y obligatoria: *Non sono mai stato a Napoli*, como «no he estado nunca en Nápoles». En una pregunta y sin *non*, *mai* significa «alguna vez»: *Sei mai stato…?* Y recuerda *ci* (semana 5): *Ci sono stato* = he estado (allí)."
        },
        {
          t: "nota",
          x: "Concordancias: con *essere*, el participio concuerda con el sujeto: Carlos dice *sono stato*; Giulia, *sono stata*. Con *la* (o *li*, *le*) delante también concuerda: *la cotoletta* → *L'ho assaggiata*. Y ojo con «probar»: la comida se *assaggia* (también se dice *provare*); probarse ropa o intentar algo es *provare*."
        },
        {
          t: "p",
          x: "Para preguntar qué tal fue: *Com'è andata?* (¿Qué tal fue?, ¿cómo salió?) o *Com'è stato il viaggio?* (¿Qué tal el viaje?). Para que te lo describan: *Com'era?* (¿Cómo era?). *Piacere* en pasado lleva *essere* y concuerda con lo que gusta: *Mi è piaciuto il museo*, *Mi è piaciuta Roma*, *Mi sono piaciuti i Navigli*, *Mi sono piaciute le persone*."
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["Com'è andata la trasferta?", "¿Qué tal fue el viaje de trabajo?"],
            ["Ti è piaciuta Roma?", "¿Te gustó Roma?"],
            ["Sì, mi è piaciuta moltissimo.", "Sí, me gustó muchísimo."],
            ["Mi sono piaciute le persone.", "Me gustó la gente."],
            ["Com'era l'albergo?", "¿Cómo era el hotel?"],
            ["Era piccolo, ma molto carino.", "Era pequeño, pero muy mono."],
            ["È stata un'esperienza fantastica.", "Fue una experiencia fantástica."],
            ["È stata la prima volta.", "Fue la primera vez."]
          ]
        },
        {
          t: "nota",
          x: "«Hace dos años» es *due anni fa*: *fa* va detrás. Igual *una settimana fa* (hace una semana) y *tanto tempo fa* (hace mucho tiempo)."
        },
        {
          t: "ej",
          items: [
            ["Due anni fa sono andato in Sicilia per la prima volta.", "Hace dos años fui a Sicilia por primera vez."],
            ["Faceva caldissimo e il mare era bellissimo.", "Hacía muchísimo calor y el mar era precioso."],
            ["Abbiamo mangiato benissimo.", "Comimos de maravilla."],
            ["Non ho mai visto un posto così bello.", "Nunca he visto un sitio tan bonito."],
            ["Ci tornerò di sicuro.", "Volveré seguro."]
          ]
        }
      ],
      vocab: [
        ["Sei mai stato a…?", "¿Has estado alguna vez en…? (a él)"],
        ["Sei mai stata a…?", "¿Has estado alguna vez en…? (a ella)"],
        ["È mai stato in Spagna?", "¿Ha estado (usted) alguna vez en España?"],
        ["Ci sono stato due volte.", "He estado dos veces."],
        ["per la prima volta", "por primera vez"],
        ["non… ancora", "todavía no"],
        ["assaggiare", "probar (comida)"],
        ["Non l'ho ancora assaggiata.", "Todavía no la he probado."],
        ["Com'era?", "¿Cómo era?"],
        ["Ti è piaciuto?", "¿Te gustó?"],
        ["Mi è piaciuta moltissimo.", "Me gustó muchísimo (algo femenino)."],
        ["Mi sono piaciuti.", "Me gustaron."],
        ["due anni fa", "hace dos años"],
        ["tanto tempo fa", "hace mucho tiempo"],
        ["carino, carina", "mono, bonito; majo"],
        ["il posto", "el sitio, el lugar"],
        ["Ci tornerò di sicuro.", "Volveré seguro."]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "Le preguntas a Marco si ha estado alguna vez en Madrid:",
          ops: ["Sei mai stato a Madrid?", "Hai mai stato a Madrid?", "Sei mai stata a Madrid?"],
          ok: 0
        },
        { t: "mc", q: "«No he estado nunca (allí)»:", ops: ["Non ci sono mai stato.", "Non ci ho mai stato.", "Ci non sono mai stato."], ok: 0 },
        { t: "mc", q: "Completa: «Mi è ___ molto Roma.»", ops: ["piaciuta", "piaciuto", "piaciute"], ok: 0 },
        { t: "mc", q: "«Hace dos años» se dice…", ops: ["due anni fa", "fa due anni", "ha due anni"], ok: 0 },
        { t: "oir", x: "sono appena tornato", ops: ["sono appena tornato", "sono appena tornata", "non sono ancora tornato"], ok: 0 },
        { t: "orden", es: "Todavía no he probado la cotoletta.", x: "Non ho ancora assaggiato la cotoletta." },
        { t: "decir", es: "¿Has estado alguna vez en Madrid? (a ella)", x: "Sei mai stata a Madrid?" },
        { t: "decir", es: "Me gustó mucho (el viaje).", x: "Mi è piaciuto molto." }
      ]
    },
    {
      id: "it7-4",
      titulo: "Charla con colegas: fin de semana, viajes y fútbol",
      min: 45,
      intro: "En Italia las relaciones de trabajo se hacen en la máquina del café y en la mesa. El lunes te preguntarán por tu fin de semana, y Marco, por el Inter: hoy preparas las respuestas y las reacciones que hacen que una charla fluya.",
      bloques: [
        {
          t: "tabla",
          cab: ["Pregunta", "Respuesta", "Español"],
          audio: [0, 1],
          filas: [
            ["Com'è andato il weekend?", "Benissimo, grazie! E il tuo?", "¿Qué tal el finde? — ¡Muy bien, gracias! ¿Y el tuyo?"],
            ["Cosa hai fatto di bello?", "Niente di speciale: mi sono riposato.", "¿Qué hiciste? — Nada especial: descansé."],
            ["Sei andato da qualche parte?", "Sì, sono andato al lago di Como.", "¿Fuiste a algún sitio? — Sí, fui al lago de Como."],
            ["Che tempo faceva?", "C'era un bel sole.", "¿Qué tiempo hacía? — Hacía un sol estupendo."],
            ["Dove vai in vacanza quest'estate?", "Ancora non lo so.", "¿Adónde vas de vacaciones este verano? — Todavía no lo sé."],
            ["Hai programmi per stasera?", "No, perché?", "¿Tienes planes para esta noche? — No, ¿por qué?"]
          ]
        },
        {
          t: "nota",
          x: "*Cosa hai fatto di bello?* (literalmente, «¿qué has hecho de bonito?») es la pregunta típica del lunes. No esperan un informe: dos frases y devuelves la pregunta, *E tu?* (al director, *E Lei?*). Para el fin de semana se dice *il weekend* o *il fine settimana*, en masculino."
        },
        { t: "p", x: "Las reacciones mantienen viva la charla. Estas son las más frecuentes:" },
        {
          t: "tabla",
          cab: ["Italiano", "Cuándo", "Español"],
          audio: [0],
          filas: [
            ["Davvero?", "sorpresa", "¿De verdad?"],
            ["Che bello!", "algo agradable", "¡Qué bien!"],
            ["Che fortuna!", "buena suerte", "¡Qué suerte!"],
            ["Beato te!", "envidia sana (a ella: Beata te!)", "¡Qué suerte tienes!"],
            ["Che peccato!", "algo malo, sin gravedad", "¡Qué pena!"],
            ["Ci credo!", "algo lógico", "¡Normal! ¡Ya me imagino!"],
            ["Dai!", "incredulidad, o para animar", "¡Venga ya! ¡Vamos!"],
            ["Magari!", "un deseo", "¡Ojalá!"]
          ]
        },
        {
          t: "nota",
          x: "*Magari* tiene dos usos: como respuesta, es «¡ojalá!» (*Vieni in Sicilia con noi? — Magari!*); dentro de una frase, «a lo mejor» (*Magari ci vediamo dopo*: a lo mejor nos vemos luego)."
        },
        {
          t: "p",
          x: "Fútbol: Milán tiene dos equipos y una rivalidad seria. Marco es del Inter (*interista*); los del Milan son *milanisti*. Los dos juegan en San Siro, y su partido, *il derby*, es el derbi de la *Madonnina*, por la estatua dorada que corona el Duomo. Preguntar *Per chi tifi?* (¿De qué equipo eres?) es la forma más rápida de romper el hielo."
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["Per chi tifi?", "¿De qué equipo eres?"],
            ["Tifo per il Real Madrid.", "Soy del Real Madrid."],
            ["Sono interista.", "Soy del Inter."],
            ["Hai visto la partita ieri sera?", "¿Viste el partido anoche?"],
            ["Abbiamo vinto due a uno.", "Ganamos dos a uno."],
            ["Abbiamo perso.", "Perdimos."],
            ["Hanno pareggiato zero a zero.", "Empataron a cero."],
            ["Chi ha segnato?", "¿Quién marcó?"],
            ["Che partita!", "¡Menudo partido!"]
          ]
        },
        {
          t: "nota",
          x: "Falsos amigos del fútbol: *la partita* es el partido (*il partito* es un partido político); *la squadra* es el equipo; *il tifoso* es el hincha (de *tifo*, el tifus: el fútbol como fiebre); y *il Milan* es el equipo, *Milano* la ciudad. Ojo: *l'Inter* es femenino, como *la Juve* o *la Roma*. Participios irregulares: *vincere* → *ho vinto*, *perdere* → *ho perso*."
        },
        {
          t: "ej",
          items: [
            ["Sono andato in Puglia con la famiglia.", "Fui a Puglia con la familia."],
            ["Al mare c'era troppa gente.", "En la playa había demasiada gente."],
            ["Qual è il tuo piatto preferito?", "¿Cuál es tu plato favorito?"],
            ["Conosci un buon ristorante qui vicino?", "¿Conoces un buen restaurante por aquí cerca?"],
            ["A che ora si cena in Spagna? — Verso le dieci!", "¿A qué hora se cena en España? — ¡Sobre las diez!"],
            ["Hai visto la partita? — Sì, purtroppo!", "¿Viste el partido? — ¡Sí, por desgracia!"],
            ["Sabato andiamo a San Siro, vieni anche tu?", "El sábado vamos a San Siro, ¿te vienes?"]
          ]
        }
      ],
      vocab: [
        ["Cosa hai fatto di bello?", "¿Qué hiciste? (lit. «¿qué has hecho de bonito?»)"],
        ["Mi sono riposato.", "He descansado."],
        ["Sei andato da qualche parte?", "¿Fuiste a algún sitio?"],
        ["Che tempo faceva?", "¿Qué tiempo hacía?"],
        ["Hai programmi per stasera?", "¿Tienes planes para esta noche?"],
        ["Che fortuna!", "¡Qué suerte!"],
        ["Beato te! / Beata te!", "¡Qué suerte tienes! (a él / a ella)"],
        ["Ci credo!", "¡Normal!, ¡ya me imagino!"],
        ["Per chi tifi?", "¿De qué equipo eres?"],
        ["tifare per", "ser hincha de"],
        ["il tifoso, la tifosa", "el hincha, la hincha"],
        ["la squadra", "el equipo"],
        ["vincere", "ganar (acento: VIN-ce-re; ho vinto)"],
        ["perdere", "perder (acento: PER-de-re; ho perso)"],
        ["pareggiare", "empatar"],
        ["segnare", "marcar (un gol)"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "El lunes Marco te pregunta: «Cosa hai fatto di bello?». Quiere saber…",
          ops: ["qué hiciste el fin de semana", "si te gusta tu trabajo", "qué harás el fin de semana"],
          ok: 0
        },
        { t: "mc", q: "*La partita* es…", ops: ["el partido (de fútbol)", "el partido político", "la salida"], ok: 0 },
        { t: "mc", q: "Giulia vuelve de una semana en Sicilia. Le dices…", ops: ["Beata te!", "Beato te!", "Che peccato!"], ok: 0 },
        { t: "mc", q: "«Ganamos dos a uno»:", ops: ["Abbiamo vinto due a uno.", "Abbiamo vincito due a uno.", "Siamo vinti due a uno."], ok: 0 },
        { t: "oir", x: "pareggiato", ops: ["pareggiato", "parcheggiato", "passeggiato"], ok: 0 },
        { t: "orden", es: "¿Viste el partido anoche?", x: "Hai visto la partita ieri sera?" },
        { t: "decir", es: "¿Qué tal el fin de semana?", x: "Com'è andato il weekend?" },
        { t: "decir", es: "¿De qué equipo eres?", x: "Per chi tifi?" }
      ]
    },
    {
      id: "it7-5",
      titulo: "Comparar: più… di, più… che, migliore",
      min: 45,
      intro: "En la charla comparas todo el rato: Milán y Madrid, el café de aquí y el de allí, el Inter y tu equipo. El italiano compara casi como el español, con dos trampas: «que» suele ser *di*, y «mejor» puede ser *migliore* o *meglio*.",
      bloques: [
        {
          t: "p",
          x: "**più** (más) o **meno** (menos) + adjetivo + **di** cuando comparas dos nombres o pronombres: *Milano è più piccola di Madrid*, *Marco è più alto di me*. *Di* se une al artículo: *del, dello, della, dell', dei, degli, delle*."
        },
        {
          t: "ej",
          items: [
            ["Milano è più piccola di Madrid.", "Milán es más pequeña que Madrid."],
            ["Marco è più alto di me.", "Marco es más alto que yo."],
            ["Il treno è meno caro dell'aereo.", "El tren es menos caro que el avión."],
            ["L'ufficio di Milano è più grande del nostro.", "La oficina de Milán es más grande que la nuestra."],
            ["Oggi fa meno freddo di ieri.", "Hoy hace menos frío que ayer."],
            ["La riunione è durata più di due ore.", "La reunión duró más de dos horas."]
          ]
        },
        {
          t: "nota",
          x: "La trampa: donde el español dice «que», el italiano suele decir *di*. Y detrás va *me*, *te*, no *io*, *tu*: «más alto que yo» = *più alto di me*; «menos que tú» = *meno di te*. Con números, igual que en español: *più di venti* (más de veinte)."
        },
        {
          t: "p",
          x: "**più… che** cuando comparas dos adjetivos, dos verbos, dos cantidades o dos complementos con preposición (*a Milano* frente a *a Madrid*):"
        },
        {
          t: "ej",
          items: [
            ["È più facile parlare che scrivere.", "Es más fácil hablar que escribir."],
            ["Al lavoro bevo più caffè che acqua.", "En el trabajo bebo más café que agua."],
            ["D'inverno fa più freddo a Milano che a Madrid.", "En invierno hace más frío en Milán que en Madrid."],
            ["La riunione è stata più lunga che utile.", "La reunión fue más larga que útil."],
            ["Si mangia meglio qui che in centro.", "Aquí se come mejor que en el centro."]
          ]
        },
        {
          t: "nota",
          x: "Igualdad, «tan… como»: *come* o *quanto*. *Il risotto è buono come la paella*; *Non è così difficile come pensavo* (No es tan difícil como pensaba)."
        },
        {
          t: "p",
          x: "Cuatro formas especiales. *Migliore* y *peggiore* son adjetivos y acompañan a un nombre; *meglio* y *peggio* son adverbios y acompañan a un verbo:"
        },
        {
          t: "tabla",
          cab: ["Español", "Con un nombre", "Con un verbo"],
          audio: [1, 2],
          filas: [
            ["bueno · bien", "buono", "bene"],
            ["mejor", "migliore", "meglio"],
            ["malo · mal", "cattivo", "male"],
            ["peor", "peggiore", "peggio"]
          ]
        },
        {
          t: "ej",
          items: [
            ["Questo ristorante è migliore di quello di ieri.", "Este restaurante es mejor que el de ayer."],
            ["Parli italiano meglio di me!", "¡Hablas italiano mejor que yo!"],
            ["Sto meglio, grazie.", "Estoy mejor, gracias."],
            ["È meglio partire presto.", "Es mejor salir pronto."],
            ["Il traffico di Milano è peggiore di quello di Madrid?", "¿El tráfico de Milán es peor que el de Madrid?"]
          ]
        },
        {
          t: "nota",
          x: "El español usa «mejor» para todo; el italiano no. Si puedes decir «un ___ mejor», es *migliore*; si responde a «¿cómo?», es *meglio*. Con la comida también se dice *più buono*: *Questa pizza è più buona*. Y *maggiore* y *minore* son «mayor» y «menor» (*mio fratello maggiore*); para el tamaño se prefiere *più grande*. Ojo también con *presto*: suele ser «pronto, temprano» (*partire presto*, salir temprano), no «rápido»."
        },
        {
          t: "p",
          x: "**El más…**: artículo + nombre + *più* + adjetivo + *di*: *il ristorante più caro di Milano*, *la collega più simpatica dell'ufficio*. Sin nombre: *Marco è il più simpatico*. Es como en español. Lo que no existe es el neutro «lo»: «lo más importante» es *la cosa più importante*."
        },
        {
          t: "ej",
          items: [
            ["Qual è il piatto più tipico di Milano?", "¿Cuál es el plato más típico de Milán?"],
            ["Marco è il collega più simpatico dell'ufficio.", "Marco es el compañero más simpático de la oficina."],
            ["Secondo me, il risotto è il migliore.", "Para mí, el risotto es el mejor."],
            ["Il lunedì è il giorno peggiore della settimana.", "El lunes es el peor día de la semana."],
            ["È la cosa più importante.", "Es lo más importante."]
          ]
        },
        {
          t: "nota",
          x: "Para «muy», el italiano tiene *-issimo*, como nuestro «-ísimo», y lo usa todavía más: *buonissimo*, *bellissimo*, *carissimo*, *stanchissimo*, y en adverbios *benissimo*, *malissimo*. *Era buonissimo!* es el mejor elogio a un plato."
        }
      ],
      vocab: [
        ["più… di", "más… que (ante nombre o pronombre)"],
        ["meno… di", "menos… que"],
        ["più… che", "más… que (entre adjetivos, verbos o complementos)"],
        ["più alto di me", "más alto que yo"],
        ["più di due ore", "más de dos horas"],
        ["Milano è più piccola di Madrid.", "Milán es más pequeña que Madrid."],
        ["È più facile parlare che scrivere.", "Es más fácil hablar que escribir."],
        ["D'inverno fa più freddo a Milano che a Madrid.", "En invierno hace más frío en Milán que en Madrid."],
        ["(così)… come", "tan… como"],
        ["Non è così difficile come pensavo.", "No es tan difícil como pensaba."],
        ["migliore", "mejor (adjetivo: un posto migliore)"],
        ["meglio", "mejor (adverbio: parlo meglio)"],
        ["peggiore", "peor (adjetivo)"],
        ["peggio", "peor (adverbio)"],
        ["Sto meglio, grazie.", "Estoy mejor, gracias."],
        ["È meglio partire presto.", "Es mejor salir pronto."],
        ["maggiore, minore", "mayor, menor"],
        ["il più… di", "el más… de"],
        ["il migliore, il peggiore", "el mejor, el peor"],
        ["la cosa più importante", "lo más importante"],
        ["economico", "barato, económico (acento: e-co-NO-mi-co)"],
        ["buonissimo", "buenísimo, riquísimo (acento: buo-NIS-si-mo)"],
        ["secondo me", "para mí, en mi opinión"]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «Marco è più alto ___ me.»", ops: ["di", "che", "come"], ok: 0 },
        { t: "mc", q: "Completa: «È più facile parlare ___ scrivere.»", ops: ["che", "di", "del"], ok: 0 },
        { t: "mc", q: "Completa: «Il treno è più economico ___ macchina.»", ops: ["della", "di", "che"], ok: 0 },
        { t: "mc", q: "«Hoy hablas mejor»:", ops: ["Oggi parli meglio.", "Oggi parli migliore.", "Oggi parli più bene."], ok: 0 },
        { t: "mc", q: "«Lo más importante» se dice…", ops: ["la cosa più importante", "lo più importante", "la più cosa importante"], ok: 0 },
        { t: "oir", x: "migliore", ops: ["migliore", "maggiore", "minore"], ok: 0 },
        { t: "orden", es: "Milán es más pequeña que Madrid.", x: "Milano è più piccola di Madrid." },
        { t: "decir", es: "Estoy mejor, gracias.", x: "Sto meglio, grazie." }
      ]
    },
    {
      id: "it7-6",
      titulo: "La pausa pranzo y el aperitivo",
      min: 40,
      intro: "La comida con los colegas también es trabajo: ahí se habla de todo y se conoce de verdad a la gente. Hoy aprendes cómo se come en una oficina italiana y cómo funciona el *aperitivo* milanés, para no pedir un *cappuccino* después de comer.",
      bloques: [
        {
          t: "p",
          x: "La *pausa pranzo* suele caer entre las 12:30 y las 14:00, mucho antes que en España, y dura una hora o menos. Muchas empresas tienen *mensa* (comedor); otras dan *buoni pasto* (tiques de comida) para el bar o la *trattoria* de al lado. En la *mensa* coges una bandeja (*il vassoio*) y eliges:"
        },
        {
          t: "tabla",
          cab: ["Italiano", "Qué es", "Ejemplo"],
          audio: [0, 2],
          filas: [
            ["il primo", "pasta, arroz o sopa", "risotto alla milanese"],
            ["il secondo", "carne o pescado", "cotoletta alla milanese"],
            ["il contorno", "guarnición, en plato aparte", "insalata mista"],
            ["la frutta", "fruta, muy habitual de postre", "una mela"],
            ["il dolce", "el postre", "tiramisù"],
            ["il caffè", "un espresso, para terminar", "un caffè, per favore"]
          ]
        },
        {
          t: "nota",
          x: "Falsos amigos de la mesa: *il pranzo* es nuestra comida del mediodía (y «la comida», los alimentos, es *il cibo*); *la colazione* es el desayuno; *la merenda*, la merienda. Y el *contorno* no viene con el *secondo*: se pide aparte."
        },
        {
          t: "ej",
          items: [
            ["Andiamo a pranzo?", "¿Vamos a comer?"],
            ["A che ora fate la pausa pranzo?", "¿A qué hora hacéis la pausa para comer?"],
            ["Cosa prendi?", "¿Qué vas a tomar?"],
            ["Prendo un primo e un contorno.", "Tomo un primero y una guarnición."],
            ["Per me solo un'insalata, grazie.", "Para mí solo una ensalada, gracias."],
            ["Acqua naturale o frizzante?", "¿Agua sin gas o con gas?"],
            ["Buon appetito! — Grazie, altrettanto!", "¡Que aproveche! — ¡Gracias, igualmente!"],
            ["Prendiamo un caffè?", "¿Tomamos un café?"],
            ["Oggi offro io!", "¡Hoy invito yo!"],
            ["Facciamo alla romana?", "¿Pagamos a escote?"]
          ]
        },
        {
          t: "nota",
          x: "Reglas no escritas: el *cappuccino* es solo para el desayuno; después de comer se toma *un caffè* (es decir, un espresso), de pie en la barra y en un minuto. Y nada de *parmigiano* en la pasta con pescado."
        },
        {
          t: "p",
          x: "El *aperitivo* es el ritual milanés al salir del trabajo, más o menos entre las 18:30 y las 21:00. Pides una bebida (*uno Spritz*, *un Negroni*, *un analcolico*) y te ponen algo de picar, los *stuzzichini*; muchos bares tienen bufé incluido. Si es tan abundante que sustituye a la cena, se llama *apericena*."
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["Andiamo a fare un aperitivo?", "¿Vamos a tomar algo?"],
            ["Ci vediamo per l'aperitivo?", "¿Quedamos para el aperitivo?"],
            ["Cosa bevi?", "¿Qué bebes?"],
            ["Per me uno Spritz.", "Para mí, un Spritz."],
            ["Un analcolico, per favore.", "Algo sin alcohol, por favor."],
            ["Ne prendiamo un altro?", "¿Nos tomamos otro?"],
            ["Tocca a me.", "Me toca a mí (pagar)."],
            ["Cin cin!", "¡Chinchín!"],
            ["Alla salute!", "¡Salud!"]
          ]
        },
        {
          t: "nota",
          x: "*Uno Spritz*, *lo spumante*, *gli stuzzichini*: delante de *s* + consonante (y de *z*, *ps*, *gn*) el artículo es *uno*, *lo*, *gli*. Al brindar, mira a los ojos, y no brindes con agua: dicen que trae mala suerte."
        }
      ],
      vocab: [
        ["la pausa pranzo", "la pausa para comer"],
        ["il pranzo", "la comida (del mediodía)"],
        ["il cibo", "la comida, los alimentos"],
        ["il buono pasto", "el tique de comida"],
        ["il vassoio", "la bandeja"],
        ["il primo", "el primer plato (pasta, arroz, sopa)"],
        ["il secondo", "el segundo plato (carne o pescado)"],
        ["il contorno", "la guarnición (aparte)"],
        ["Andiamo a pranzo?", "¿Vamos a comer?"],
        ["Cosa prendi?", "¿Qué vas a tomar?"],
        ["Prendo un primo e un contorno.", "Tomo un primero y una guarnición."],
        ["Acqua naturale o frizzante?", "¿Agua sin gas o con gas?"],
        ["Buon appetito!", "¡Que aproveche!"],
        ["Tocca a me.", "Me toca a mí."],
        ["Facciamo alla romana?", "¿Pagamos a escote?"],
        ["l'aperitivo", "el aperitivo (al salir del trabajo)"],
        ["gli stuzzichini", "algo de picar, las tapitas"],
        ["l'apericena", "aperitivo que sustituye a la cena"],
        ["un analcolico", "una bebida sin alcohol (acento: a-nal-CO-li-co)"],
        ["Per me uno Spritz.", "Para mí, un Spritz."],
        ["Cin cin!", "¡Chinchín!"]
      ],
      ejercicios: [
        { t: "mc", q: "Acabas de comer con Marco y vais al bar. Pides…", ops: ["un caffè", "un cappuccino", "uno Spritz"], ok: 0 },
        { t: "mc", q: "*Il contorno* es…", ops: ["la guarnición, que se pide aparte", "el postre", "el primer plato"], ok: 0 },
        { t: "mc", q: "Completa: «Per me ___ Spritz.»", ops: ["uno", "un", "una"], ok: 0 },
        { t: "mc", q: "*Facciamo alla romana?* significa…", ops: ["¿Pagamos a escote?", "¿Comemos comida romana?", "¿Vamos a Roma?"], ok: 0 },
        { t: "oir", x: "pranzo", ops: ["pranzo", "prezzo", "prendo"], ok: 0 },
        { t: "orden", es: "Tomo un primero y una guarnición.", x: "Prendo un primo e un contorno." },
        { t: "decir", es: "¡Invito yo!", x: "Offro io!" },
        { t: "decir", es: "¿Vamos a tomar un aperitivo?", x: "Andiamo a fare un aperitivo?" }
      ]
    },
    {
      id: "it7-7",
      titulo: "Repaso: el lunes, en la máquina del café",
      min: 40,
      intro: "Repaso de la semana con una charla de lunes en la sede de Milán. Lee el diálogo en voz alta haciendo de Carlos y fíjate en cada pasado: ¿es fondo (*imperfetto*) o hecho (*passato prossimo*)?",
      bloques: [
        { t: "p", x: "Lunes, nueve de la mañana. Carlos y Marco charlan junto a la *macchinetta del caffè* (la máquina del café); al rato llega Giulia." },
        {
          t: "ej",
          items: [
            ["Ciao, Carlos! Allora, com'è andato il weekend?", "Marco: ¡Hola, Carlos! A ver, ¿qué tal el finde?"],
            ["Benissimo! Sabato sono andato al lago di Como.", "Carlos: ¡Genial! El sábado fui al lago de Como."],
            ["Che bello! Che tempo faceva?", "Marco: ¡Qué bien! ¿Qué tiempo hacía?"],
            ["C'era un bel sole, ma faceva più freddo che a Madrid.", "Carlos: Hacía sol, pero más frío que en Madrid."],
            ["Ci credo! E ieri sera hai visto il derby?", "Marco: ¡Normal! ¿Y anoche viste el derbi?"],
            ["Sì, in un bar vicino all'albergo. C'erano solo interisti!", "Carlos: Sí, en un bar cerca del hotel. ¡Solo había gente del Inter!"],
            ["Abbiamo vinto tre a uno! Che partita!", "Marco: ¡Ganamos tres a uno! ¡Menudo partido!"],
            ["Lo so! Ma quando avete segnato il terzo gol, stavo ordinando una birra e non l'ho visto.", "Carlos: ¡Ya lo sé! Pero cuando marcasteis el tercero, estaba pidiendo una cerveza y no lo vi."],
            ["Che peccato! È stato il gol più bello della partita.", "Marco: ¡Qué pena! Fue el gol más bonito del partido."],
            ["Buongiorno, ragazzi! Di cosa parlate? Di calcio, come sempre?", "Giulia: ¡Buenos días, chicos! ¿De qué habláis? ¿De fútbol, como siempre?"],
            ["Ovviamente! E tu, Giulia, cosa hai fatto di bello?", "Marco: ¡Pues claro! ¿Y tú, Giulia, qué hiciste?"],
            ["Niente: ero stanchissima e sono rimasta a casa. Ho dormito tutta la domenica!", "Giulia: Nada: estaba agotada y me quedé en casa. ¡Dormí todo el domingo!"],
            ["Beata te! Io, dopo il derby, ho dormito quattro ore.", "Marco: ¡Qué suerte! Yo, después del derbi, dormí cuatro horas."],
            ["Carlos, volevo chiederti una cosa: hai mai assaggiato la cotoletta alla milanese?", "Giulia: Carlos, quería preguntarte una cosa: ¿has probado alguna vez la cotoletta alla milanese?"],
            ["No, non l'ho ancora assaggiata.", "Carlos: No, todavía no la he probado."],
            ["Allora oggi andiamo a pranzo nella trattoria qui sotto. La loro cotoletta è la migliore di Milano!", "Giulia: Pues hoy vamos a comer a la trattoria de aquí abajo. ¡Su cotoletta es la mejor de Milán!"],
            ["Dai, non esagerare! Quella di mia nonna era molto più buona.", "Marco: ¡Venga, no exageres! La de mi abuela estaba mucho más rica."],
            ["Sì, ma tua nonna non ci invita a pranzo!", "Giulia: Ya, ¡pero tu abuela no nos invita a comer!"],
            ["Allora a mezzogiorno e mezzo tutti in trattoria. Offro io!", "Carlos: Pues a las doce y media, todos a la trattoria. ¡Invito yo!"]
          ]
        },
        {
          t: "nota",
          x: "*Ragazzi* (chicos) se dice entre colegas de cualquier edad. Y *mia nonna*, *tua nonna*: con un familiar en singular, el posesivo va sin artículo (*il mio collega*, pero *mia nonna*)."
        },
        {
          t: "tabla",
          cab: ["Frase", "Tiempo", "Por qué"],
          audio: [0],
          filas: [
            ["Sabato sono andato al lago di Como.", "passato prossimo", "un hecho: qué hiciste"],
            ["Faceva più freddo che a Madrid.", "imperfetto", "descripción: cómo era el día"],
            ["C'erano solo interisti.", "imperfetto", "descripción del sitio"],
            ["Stavo ordinando una birra…", "imperfetto (stavo + gerundio)", "lo que estaba en marcha"],
            ["…quando avete segnato il terzo gol.", "passato prossimo", "el hecho que lo interrumpe"],
            ["Ero stanchissima.", "imperfetto", "un estado"],
            ["Ho dormito tutta la domenica.", "passato prossimo", "un periodo cerrado"],
            ["Quella di mia nonna era più buona.", "imperfetto", "descripción: cómo era"],
            ["Volevo chiederti una cosa.", "imperfetto", "cortesía"]
          ]
        },
        {
          t: "nota",
          x: "Comparativos, en resumen: *più/meno… di* ante nombres y pronombres (*più alto di me*); *più… che* entre dos adjetivos, verbos o complementos (*più freddo a Milano che a Madrid*); *migliore* y *peggiore* con nombres, *meglio* y *peggio* con verbos; y *il più… di* para «el más… de» (*la migliore di Milano*)."
        },
        {
          t: "nota",
          x: "*Non esagerare!*: el imperativo negativo de *tu* es *non* + infinitivo. *Non preoccuparti!* (¡No te preocupes!), *Non dimenticare!* (¡No te olvides!)."
        },
        {
          t: "p",
          x: "Ahora tú: cuéntale en voz alta a Marco tu último fin de semana en cinco frases. Los hechos, en *passato prossimo* (*Sabato sono andato…*); el tiempo y los sitios, en *imperfetto* (*Faceva…*, *C'era…*). Termina con una comparación: *… era più bello di…*"
        }
      ],
      vocab: [
        ["Allora…", "a ver…, bueno…, entonces…"],
        ["Di cosa parlate?", "¿De qué habláis?"],
        ["come sempre", "como siempre"],
        ["ovviamente", "claro, obviamente"],
        ["ragazzi", "chicos (también entre colegas adultos)"],
        ["rimanere (rimango; sono rimasto)", "quedarse"],
        ["Sono rimasto a casa.", "Me quedé en casa."],
        ["stanchissimo", "agotado, cansadísimo (acento: stan-CHIS-si-mo)"],
        ["Non esagerare!", "¡No exageres!"],
        ["Non preoccuparti!", "¡No te preocupes!"],
        ["la trattoria", "restaurante sencillo de cocina casera"],
        ["qui sotto", "aquí abajo"],
        ["vicino all'albergo", "cerca del hotel"],
        ["il terzo gol", "el tercer gol"],
        ["Stavo ordinando una birra.", "Estaba pidiendo una cerveza."],
        ["invitare a pranzo", "invitar a comer"],
        ["C'era un bel sole.", "Hacía un sol estupendo."],
        ["C'erano solo interisti.", "Solo había gente del Inter."],
        ["mia nonna", "mi abuela (sin artículo: familiar en singular)"],
        ["Quella di mia nonna era più buona.", "La de mi abuela estaba más rica."]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "En el diálogo, *faceva più freddo* va en *imperfetto* porque…",
          ops: ["describe cómo era el día", "es un hecho cerrado", "es algo que pasó de repente"],
          ok: 0
        },
        { t: "mc", q: "Completa: «Sabato ___ al lago di Como.»", ops: ["sono andato", "andavo", "ho andato"], ok: 0 },
        {
          t: "mc",
          q: "Giulia dice «sono rimasta a casa». ¿Por qué *rimasta*?",
          ops: ["Concuerda con Giulia: essere + femenino", "Porque es imperfetto", "Porque es plural"],
          ok: 0
        },
        { t: "mc", q: "Completa: «La loro cotoletta è ___ di Milano.»", ops: ["la migliore", "la meglio", "più migliore"], ok: 0 },
        { t: "oir", x: "c'erano", ops: ["c'erano", "c'era", "erano"], ok: 0 },
        { t: "orden", es: "Hacía más frío que en Madrid.", x: "Faceva più freddo che a Madrid." },
        { t: "decir", es: "Me quedé en casa.", x: "Sono rimasto a casa." },
        { t: "decir", es: "Hacía un sol estupendo.", x: "C'era un bel sole." }
      ]
    }
  ],
  lecturas: [
    {
      id: "it7-r1",
      titulo: "Quando ero studente…",
      nivel: "A2",
      texto: "Quando ero studente, vivevo a Madrid con tre amici in un appartamento piccolo e vecchio. Studiavo ingegneria e mi alzavo sempre tardi, così arrivavo all'università di corsa. Non avevamo molti soldi: di solito mangiavamo pasta, ma non era buona come la pasta italiana! Javi, il mio coinquilino, cucinava meglio di tutti noi, ma era anche il più disordinato della casa.\n\nIl fine settimana lavoravo in un bar del centro. Era un lavoro duro, ma mi piaceva, perché parlavo con tante persone diverse. I clienti erano spesso turisti, e io rispondevo in inglese… o con le mani. La domenica sera tornavo a casa stanchissimo, ma contento.\n\nUna sera d'estate è entrato nel bar un gruppo di ingegneri italiani. Erano simpaticissimi: parlavano di calcio e di cibo e ridevano tantissimo. Abbiamo chiacchierato fino a tardi e alla fine uno di loro mi ha detto: «Se un giorno vuoi lavorare in Italia, chiamami!»\n\nNon l'ho mai chiamato, ma quella sera ho capito una cosa: volevo lavorare con gli italiani. Molti anni dopo, eccomi qui, a Milano!",
      traduccion: "Cuando era estudiante, vivía en Madrid con tres amigos en un piso pequeño y viejo. Estudiaba ingeniería y siempre me levantaba tarde, así que llegaba a la universidad corriendo. No teníamos mucho dinero: normalmente comíamos pasta, ¡pero no estaba tan buena como la pasta italiana! Javi, mi compañero de piso, cocinaba mejor que todos nosotros, pero también era el más desordenado de la casa.\n\nLos fines de semana trabajaba en un bar del centro. Era un trabajo duro, pero me gustaba, porque hablaba con mucha gente distinta. Muchas veces los clientes eran turistas, y yo contestaba en inglés… o con las manos. Los domingos por la noche volvía a casa agotado, pero contento.\n\nUna noche de verano entró en el bar un grupo de ingenieros italianos. Eran simpatiquísimos: hablaban de fútbol y de comida y se reían muchísimo. Estuvimos charlando hasta tarde y, al final, uno de ellos me dijo: «Si algún día quieres trabajar en Italia, ¡llámame!».\n\nNunca lo llamé, pero aquella noche entendí una cosa: quería trabajar con italianos. Muchos años después, ¡aquí estoy, en Milán!",
      glosa: {
        quando: "cuando",
        ero: "era (yo; imperfetto de essere)",
        studente: "estudiante",
        vivevo: "vivía (imperfetto de vivere)",
        a: "a, en («a Madrid» = en Madrid; «a casa» = a casa; «fino a tardi» = hasta tarde)",
        madrid: "Madrid",
        con: "con",
        tre: "tres",
        amici: "amigos (plural de amico)",
        in: "en («in un bar» = en un bar; «in inglese» = en inglés; «in Italia» = en Italia)",
        un: "un",
        appartamento: "piso, apartamento",
        piccolo: "pequeño",
        e: "y",
        vecchio: "viejo",
        studiavo: "estudiaba",
        ingegneria: "ingeniería",
        mi: "me («mi alzavo» = me levantaba; «mi piaceva» = me gustaba; «mi ha detto» = me dijo)",
        alzavo: "levantaba («mi alzavo» = me levantaba; de alzarsi)",
        sempre: "siempre",
        tardi: "tarde",
        "così": "así que, por eso",
        arrivavo: "llegaba",
        all: "a la (a + l', ante vocal: «all'università» = a la universidad)",
        "università": "universidad",
        di: "de («di corsa» = corriendo; «di solito» = normalmente; «di tutti noi» = que todos nosotros)",
        corsa: "carrera («di corsa» = corriendo, a toda prisa)",
        non: "no",
        avevamo: "teníamos (imperfetto de avere)",
        molti: "muchos",
        soldi: "dinero (siempre en plural: i soldi)",
        solito: "«di solito» = normalmente (se acentúa SO-li-to)",
        mangiavamo: "comíamos",
        pasta: "pasta",
        ma: "pero",
        era: "era, estaba (imperfetto de essere)",
        buona: "buena",
        come: "como («buona come» = tan buena como)",
        la: "la",
        italiana: "italiana",
        javi: "Javi (diminutivo de Javier)",
        il: "el",
        mio: "mi («il mio coinquilino»: con posesivo, el italiano usa artículo)",
        coinquilino: "compañero de piso",
        cucinava: "cocinaba",
        meglio: "mejor (adverbio: «cucinava meglio» = cocinaba mejor)",
        tutti: "todos",
        noi: "nosotros («di tutti noi» = que todos nosotros)",
        anche: "también",
        "più": "más («il più disordinato» = el más desordenado)",
        disordinato: "desordenado",
        della: "de la (di + la)",
        casa: "casa",
        fine: "fin («il fine settimana» = el fin de semana; «alla fine» = al final)",
        settimana: "semana",
        lavoravo: "trabajaba",
        bar: "bar, cafetería",
        del: "del (di + il)",
        centro: "centro",
        lavoro: "trabajo",
        duro: "duro",
        piaceva: "gustaba («mi piaceva» = me gustaba; imperfetto de piacere)",
        "perché": "porque",
        parlavo: "hablaba",
        tante: "muchas",
        persone: "personas",
        diverse: "distintas, diferentes",
        i: "los",
        clienti: "clientes",
        erano: "eran (imperfetto de essere; se acentúa E-ra-no)",
        spesso: "a menudo",
        turisti: "turistas",
        io: "yo",
        rispondevo: "contestaba (imperfetto de rispondere)",
        inglese: "inglés",
        o: "o",
        le: "las",
        mani: "manos (plural irregular de la mano)",
        domenica: "domingo («la domenica» = los domingos)",
        sera: "tarde-noche («la domenica sera» = los domingos por la noche; «una sera» = una noche)",
        tornavo: "volvía",
        stanchissimo: "agotado, cansadísimo",
        contento: "contento",
        una: "una",
        d: "de (di ante vocal: «d'estate» = de verano)",
        estate: "verano (¡no «estado»!)",
        "è": "ha (auxiliar: «è entrato» = entró)",
        entrato: "entrado («è entrato» = entró; passato prossimo con essere)",
        nel: "en el (in + il)",
        gruppo: "grupo",
        ingegneri: "ingenieros",
        italiani: "italianos",
        simpaticissimi: "simpatiquísimos",
        parlavano: "hablaban (se acentúa par-LA-va-no)",
        calcio: "fútbol",
        cibo: "comida",
        ridevano: "se reían (imperfetto de ridere)",
        tantissimo: "muchísimo",
        abbiamo: "hemos («abbiamo chiacchierato» = charlamos)",
        chiacchierato: "charlado (de chiacchierare: charlar)",
        fino: "hasta («fino a tardi» = hasta tarde)",
        alla: "a la («alla fine» = al final)",
        uno: "uno («uno di loro» = uno de ellos)",
        loro: "ellos",
        ha: "ha («mi ha detto» = me dijo)",
        detto: "dicho (participio de dire)",
        se: "si (condicional)",
        giorno: "día («un giorno» = algún día)",
        vuoi: "quieres (volere)",
        lavorare: "trabajar",
        italia: "Italia",
        chiamami: "llámame (imperativo de chiamare + mi; se acentúa CHIA-ma-mi)",
        l: "lo (ante vocal: «l'ho chiamato» = lo he llamado)",
        ho: "he («ho capito» = entendí)",
        mai: "nunca («non… mai»)",
        chiamato: "llamado",
        quella: "aquella",
        capito: "entendido (de capire: «ho capito» = entendí)",
        cosa: "cosa",
        volevo: "quería (imperfetto de volere)",
        gli: "los (ante vocal: «gli italiani»)",
        anni: "años",
        dopo: "después",
        eccomi: "aquí estoy (ecco + mi; se acentúa EC-co-mi)",
        qui: "aquí",
        milano: "Milán"
      },
      preguntas: [
        { q: "¿Con quién vivía Carlos cuando era estudiante?", ops: ["Con tres amigos", "Con su familia", "Con un compañero italiano"], ok: 0 },
        { q: "¿Dónde trabajaba los fines de semana?", ops: ["En un bar del centro", "En la universidad", "En un restaurante italiano"], ok: 0 },
        { q: "¿Quién cocinaba mejor en el piso?", ops: ["Javi", "Carlos", "Nadie: solo comían pasta"], ok: 0 },
        {
          q: "¿Qué entendió Carlos aquella noche de verano?",
          ops: ["Que quería trabajar con italianos", "Que tenía que estudiar más", "Que la pasta italiana era mejor"],
          ok: 0
        }
      ],
      notas: "Carlos escribió este texto para la *newsletter* de la empresa: Francesca, de Recursos Humanos, pide un recuerdo a cada colega nuevo. Fíjate en el reparto: lo que Carlos *hacía* de estudiante va en *imperfetto* (*vivevo, studiavo, lavoravo*); lo que pasó *una sera d'estate*, en *passato prossimo* (*è entrato, abbiamo chiacchierato, mi ha detto, ho capito*). *Volevo lavorare con gli italiani* es un deseo, un estado: *imperfetto*. Y ojo: *estate* es «verano», no «estado»."
    },
    {
      id: "it7-r2",
      titulo: "Pranzo in mensa",
      nivel: "A2",
      texto: "Martedì, a mezzogiorno e mezzo, Marco è passato dalla scrivania di Carlos: «Andiamo a pranzo? Oggi in mensa c'è il risotto alla milanese!»\n\nLa mensa era al piano terra ed era piena di gente. C'era una lunga fila, ma andava veloce. Carlos ha preso un vassoio e ha guardato il menù: c'erano due primi, due secondi, i contorni, la frutta e il dolce. Ha scelto il risotto e un contorno di verdure. Marco, invece, ha preso la pasta e anche la cotoletta: «Ho una fame da lupo!»\n\nAl tavolo c'erano già Giulia e Chiara. Tutti e quattro hanno parlato del weekend, del derby e delle vacanze. «In Spagna pranziamo molto più tardi, verso le due o le tre», ha detto Carlos. «Alle tre? Per me alle tre è già ora di merenda!» ha risposto Chiara, e tutti hanno riso.\n\nIl risotto era buonissimo, molto migliore di quello che Carlos cucinava a Madrid. Dopo pranzo sono andati al bar per un caffè. Carlos ha ordinato un cappuccino e i colleghi l'hanno guardato a bocca aperta. «Un cappuccino dopo pranzo? No, Carlos!» ha detto Giulia ridendo. «Il cappuccino si beve solo a colazione.»",
      traduccion: "El martes, a las doce y media, Marco se pasó por la mesa de Carlos: «¿Vamos a comer? ¡Hoy en el comedor hay risotto a la milanesa!».\n\nEl comedor estaba en la planta baja y estaba lleno de gente. Había una cola larga, pero avanzaba rápido. Carlos cogió una bandeja y miró el menú: había dos primeros, dos segundos, las guarniciones, la fruta y el postre. Eligió el risotto y una guarnición de verduras. Marco, en cambio, cogió la pasta y también la cotoletta: «¡Tengo un hambre de lobo!».\n\nEn la mesa ya estaban Giulia y Chiara. Los cuatro hablaron del fin de semana, del derbi y de las vacaciones. «En España comemos mucho más tarde, sobre las dos o las tres», dijo Carlos. «¿A las tres? ¡Para mí a las tres ya es hora de merendar!», respondió Chiara, y todos se rieron.\n\nEl risotto estaba buenísimo, mucho mejor que el que Carlos cocinaba en Madrid. Después de comer fueron al bar a tomar un café. Carlos pidió un capuchino y sus compañeros se lo quedaron mirando boquiabiertos. «¿Un capuchino después de comer? ¡No, Carlos!», dijo Giulia riéndose. «El capuchino solo se toma en el desayuno».",
      glosa: {
        "martedì": "el martes",
        a: "a («a mezzogiorno e mezzo» = a las doce y media; «a bocca aperta» = con la boca abierta; «a colazione» = en el desayuno)",
        mezzogiorno: "mediodía, las doce",
        e: "y",
        mezzo: "media («mezzogiorno e mezzo» = las doce y media)",
        marco: "Marco",
        "è": "ha (auxiliar: «è passato» = pasó); es («c'è» = hay; «è già ora» = ya es hora)",
        passato: "pasado («è passato da» = se pasó por)",
        dalla: "por la (da + la: «passare da» = pasarse por)",
        scrivania: "mesa de trabajo, escritorio",
        di: "de («di gente» = de gente; «di verdure» = de verduras)",
        carlos: "Carlos",
        andiamo: "vamos (andare)",
        pranzo: "comida del mediodía («a pranzo» = a comer; «dopo pranzo» = después de comer)",
        oggi: "hoy",
        in: "en («in mensa» = en el comedor; «in Spagna» = en España)",
        mensa: "comedor de empresa",
        c: "ahí: «c'è» = hay; «c'era», «c'erano» = había (ci ante vocal)",
        il: "el",
        risotto: "risotto (arroz cremoso)",
        alla: "a la («alla milanese» = a la milanesa)",
        milanese: "milanés, milanesa (el «risotto alla milanese» lleva azafrán)",
        la: "la",
        era: "era, estaba (imperfetto de essere)",
        al: "en el, al (a + il: «al piano terra» = en la planta baja; «al tavolo» = en la mesa; «al bar» = al bar)",
        piano: "planta, piso («piano terra» = planta baja)",
        terra: "tierra («piano terra» = planta baja)",
        ed: "y (e ante vocal)",
        piena: "llena",
        gente: "gente",
        una: "una",
        lunga: "larga",
        fila: "cola, fila",
        ma: "pero",
        andava: "iba, avanzaba (imperfetto de andare)",
        veloce: "rápido",
        ha: "ha (auxiliar: «ha preso» = cogió; «ha detto» = dijo)",
        preso: "cogido (participio de prendere: «ha preso» = cogió, se sirvió)",
        un: "un",
        vassoio: "bandeja",
        guardato: "mirado (de guardare: mirar, ¡no «guardar»!)",
        "menù": "menú",
        erano: "eran («c'erano» = había, plural)",
        due: "dos",
        primi: "primeros platos",
        secondi: "segundos platos",
        i: "los",
        contorni: "guarniciones",
        frutta: "fruta",
        dolce: "postre; dulce",
        scelto: "elegido (participio de scegliere: «ha scelto» = eligió)",
        contorno: "guarnición",
        verdure: "verduras",
        invece: "en cambio",
        pasta: "pasta",
        anche: "también",
        cotoletta: "escalope empanado (la «cotoletta alla milanese»)",
        ho: "tengo («ho una fame da lupo» = tengo un hambre de lobo)",
        fame: "hambre («avere fame» = tener hambre)",
        da: "de («una fame da lupo» = un hambre de lobo)",
        lupo: "lobo",
        tavolo: "mesa",
        "già": "ya",
        giulia: "Giulia",
        chiara: "Chiara",
        tutti: "todos («tutti e quattro» = los cuatro)",
        quattro: "cuatro",
        hanno: "han («hanno parlato» = hablaron; «hanno riso» = se rieron)",
        parlato: "hablado",
        del: "del (di + il)",
        weekend: "fin de semana",
        derby: "derbi (Inter-Milan)",
        delle: "de las (di + le)",
        vacanze: "vacaciones",
        spagna: "España",
        pranziamo: "comemos (pranzare: comer al mediodía)",
        molto: "mucho («molto più tardi» = mucho más tarde; «molto migliore» = mucho mejor)",
        "più": "más",
        tardi: "tarde",
        verso: "hacia, sobre («verso le due» = sobre las dos)",
        le: "las («le due» = las dos)",
        o: "o",
        tre: "tres",
        detto: "dicho («ha detto» = dijo)",
        alle: "a las (a + le)",
        per: "para («per me» = para mí; «per un caffè» = a tomar un café)",
        me: "mí («per me» = para mí)",
        ora: "hora («è ora di» = es hora de)",
        merenda: "merienda",
        risposto: "respondido (participio de rispondere)",
        riso: "reído (participio de ridere: «hanno riso» = se rieron); también, «arroz»",
        buonissimo: "buenísimo (se acentúa buo-NIS-si-mo)",
        migliore: "mejor (adjetivo)",
        quello: "el, aquel («quello che» = el que)",
        che: "que",
        cucinava: "cocinaba",
        madrid: "Madrid",
        dopo: "después de («dopo pranzo» = después de comer)",
        sono: "han (auxiliar: «sono andati» = fueron)",
        andati: "ido («sono andati» = fueron)",
        bar: "bar, cafetería",
        "caffè": "café (un espresso)",
        ordinato: "pedido (de ordinare: pedir en un bar)",
        cappuccino: "capuchino",
        colleghi: "compañeros de trabajo (plural de collega)",
        l: "lo (ante vocal: «l'hanno guardato» = lo miraron)",
        bocca: "boca («a bocca aperta» = boquiabiertos)",
        aperta: "abierta",
        no: "no",
        ridendo: "riendo (gerundio de ridere)",
        si: "se («si beve» = se bebe)",
        beve: "bebe (bere)",
        solo: "solo",
        colazione: "desayuno"
      },
      preguntas: [
        { q: "¿Qué eligió Carlos en la *mensa*?", ops: ["Risotto y una guarnición de verduras", "Pasta y cotoletta", "Solo fruta y postre"], ok: 0 },
        {
          q: "¿Por qué se rieron todos en la mesa?",
          ops: ["Porque Chiara dijo que a las tres ya es hora de merendar", "Porque Marco tenía un hambre de lobo", "Porque Carlos no entendía el menú"],
          ok: 0
        },
        {
          q: "¿Qué error cometió Carlos en el bar?",
          ops: ["Pidió un capuchino después de comer", "Pidió un Spritz a mediodía", "Se olvidó de pagar el café"],
          ok: 0
        }
      ],
      notas: "*C'era una lunga fila, ma andava veloce*: descripciones, en *imperfetto*. *Ha preso, ha guardato, ha scelto*: los pasos de Carlos, en *passato prossimo* (*scegliere* → *scelto*, *ridere* → *riso*). *Ha guardato* es «miró»: *guardare* no es «guardar». *Molto migliore di quello che…* = «mucho mejor que el que…»."
    },
    {
      id: "it7-r3",
      titulo: "Aperitivo sui Navigli",
      nivel: "B1",
      texto: "Venerdì sera, dopo il lavoro, Giulia ha portato Carlos sui Navigli per un vero aperitivo milanese. Era una bella serata e lungo i canali c'era tantissima gente: impiegati in giacca e cravatta, studenti, turisti. I locali erano pieni e la musica si sentiva da lontano.\n\nMarco e Chiara li aspettavano già a un tavolino vicino all'acqua. Giulia ha ordinato uno Spritz, Chiara un analcolico e Marco un Negroni sbagliato.\n«Lo sai che il Negroni sbagliato è nato qui a Milano?» ha chiesto Marco. «Si racconta che una sera un barista preparava un Negroni e, invece del gin, ha preso per errore una bottiglia di spumante.»\n«Un errore fortunato!» ha detto Carlos, e ne ha ordinato uno anche lui.\n\nCon i drink sono arrivati gli stuzzichini: olive, patatine, pizzette e focaccia. «In Spagna, con una birra, spesso ti danno una tapa», ha spiegato Carlos. «Ma qui è quasi una cena!»\n«Infatti si chiama apericena», ha risposto Chiara. «E sui Navigli costa meno che in centro.»\n\nMentre il sole tramontava, Giulia ha raccontato che una volta i Navigli servivano per trasportare le merci: le barche portavano a Milano anche il marmo per il Duomo.\n«È stata la serata più bella della settimana», ha detto Carlos alla fine. «Cin cin!»",
      traduccion: "El viernes por la noche, después del trabajo, Giulia llevó a Carlos a los Navigli a tomar un auténtico aperitivo milanés. Hacía una noche estupenda y a lo largo de los canales había muchísima gente: oficinistas de traje y corbata, estudiantes, turistas. Los bares estaban llenos y la música se oía desde lejos.\n\nMarco y Chiara ya los esperaban en una mesita junto al agua. Giulia pidió un Spritz; Chiara, algo sin alcohol, y Marco, un Negroni sbagliato.\n«¿Sabes que el Negroni sbagliato nació aquí, en Milán?», preguntó Marco. «Se cuenta que una noche un camarero estaba preparando un Negroni y, en vez de la ginebra, cogió por error una botella de espumoso».\n«¡Un error con suerte!», dijo Carlos, y él también pidió uno.\n\nCon las bebidas llegaron los aperitivos: aceitunas, patatas fritas, pizzas pequeñitas y focaccia. «En España, con una cerveza, muchas veces te ponen una tapa», explicó Carlos. «¡Pero esto es casi una cena!».\n«De hecho, se llama apericena», respondió Chiara. «Y en los Navigli cuesta menos que en el centro».\n\nMientras se ponía el sol, Giulia contó que antiguamente los Navigli servían para transportar mercancías: las barcas llevaban a Milán incluso el mármol para el Duomo.\n«Ha sido la noche más bonita de la semana», dijo Carlos al final. «¡Chinchín!»",
      glosa: {
        "venerdì": "el viernes",
        sera: "tarde-noche («venerdì sera» = el viernes por la noche; «una sera» = una noche)",
        dopo: "después de",
        il: "el",
        lavoro: "trabajo",
        giulia: "Giulia",
        ha: "ha (auxiliar: «ha portato» = llevó; «ha detto» = dijo)",
        portato: "llevado (de portare: llevar)",
        carlos: "Carlos",
        sui: "a los, en los (su + i: «sui Navigli»)",
        navigli: "los Navigli, canales de Milán (hoy, zona de bares)",
        per: "para, por («per errore» = por error)",
        un: "un",
        vero: "verdadero, auténtico",
        aperitivo: "aperitivo",
        milanese: "milanés",
        era: "era («era una bella serata» = hacía una noche estupenda)",
        una: "una",
        bella: "bonita, estupenda",
        serata: "noche, velada (la noche en cuanto a lo que dura)",
        e: "y",
        lungo: "a lo largo de (preposición)",
        i: "los",
        canali: "canales",
        c: "ahí: «c'era» = había (ci ante vocal)",
        tantissima: "muchísima",
        gente: "gente",
        impiegati: "empleados, oficinistas",
        in: "en; de («in giacca e cravatta» = de traje y corbata; «in centro» = en el centro)",
        giacca: "chaqueta («in giacca e cravatta» = de traje y corbata)",
        cravatta: "corbata",
        studenti: "estudiantes",
        turisti: "turistas",
        locali: "locales, bares",
        erano: "estaban, eran (imperfetto de essere)",
        pieni: "llenos",
        la: "la",
        musica: "música (se acentúa MU-si-ca)",
        si: "se («si sentiva» = se oía; «si racconta» = se cuenta; «si chiama» = se llama)",
        sentiva: "oía (de sentire: oír, sentir)",
        da: "desde («da lontano» = desde lejos)",
        lontano: "lejos",
        marco: "Marco",
        chiara: "Chiara",
        li: "los (a Giulia y a Carlos)",
        aspettavano: "esperaban (imperfetto de aspettare)",
        "già": "ya",
        a: "a, en («a un tavolino» = en una mesita; «a Milano» = en Milán, a Milán)",
        tavolino: "mesita (de terraza)",
        vicino: "cerca («vicino a» = cerca de, junto a)",
        all: "a la (a + l': «vicino all'acqua» = junto al agua)",
        acqua: "agua",
        ordinato: "pedido (de ordinare: pedir en un bar)",
        uno: "uno («uno Spritz»: uno ante s + consonante; «ne ha ordinato uno» = pidió uno)",
        spritz: "Spritz (aperitivo de vino espumoso con Aperol o Campari)",
        analcolico: "bebida sin alcohol (se acentúa a-nal-CO-li-co)",
        negroni: "Negroni (cóctel de ginebra, Campari y vermú)",
        sbagliato: "equivocado («Negroni sbagliato» = Negroni equivocado)",
        lo: "lo («lo sai che…?» = ¿sabes que…?)",
        sai: "sabes (sapere)",
        che: "que",
        "è": "ha (auxiliar: «è nato» = nació; «è stata» = ha sido); es («è quasi una cena» = es casi una cena)",
        nato: "nacido («è nato» = nació)",
        qui: "aquí",
        milano: "Milán",
        chiesto: "preguntado (participio de chiedere)",
        racconta: "cuenta («si racconta» = se cuenta)",
        barista: "camarero (de barra)",
        preparava: "preparaba, estaba preparando (imperfetto: el fondo)",
        invece: "en vez («invece del gin» = en vez de la ginebra)",
        del: "del (di + il)",
        gin: "ginebra",
        preso: "cogido (participio de prendere: «ha preso» = cogió; el hecho)",
        errore: "error («per errore» = por error)",
        bottiglia: "botella",
        di: "de",
        spumante: "vino espumoso",
        fortunato: "afortunado, con suerte",
        detto: "dicho («ha detto» = dijo)",
        ne: "de eso («ne ha ordinato uno» = pidió uno de esos)",
        anche: "también («anche lui» = él también)",
        lui: "él",
        con: "con",
        drink: "bebidas, copas",
        sono: "han («sono arrivati» = llegaron)",
        arrivati: "llegado («sono arrivati» = llegaron)",
        gli: "los («gli stuzzichini»: gli ante s + consonante)",
        stuzzichini: "aperitivos, cosas para picar",
        olive: "aceitunas",
        patatine: "patatas fritas (de bolsa)",
        pizzette: "pizzas pequeñitas",
        focaccia: "focaccia (pan plano con aceite)",
        spagna: "España",
        birra: "cerveza",
        spesso: "a menudo",
        ti: "te («ti danno» = te dan, te ponen)",
        danno: "dan (dare)",
        tapa: "tapa",
        spiegato: "explicado (de spiegare)",
        ma: "pero",
        quasi: "casi",
        cena: "cena",
        infatti: "de hecho, en efecto",
        chiama: "llama («si chiama» = se llama)",
        apericena: "aperitivo-cena: aperitivo que sustituye a la cena",
        risposto: "respondido («ha risposto» = respondió)",
        costa: "cuesta (costare)",
        meno: "menos («meno che in centro» = menos que en el centro)",
        centro: "centro",
        mentre: "mientras",
        sole: "sol",
        tramontava: "se ponía (imperfetto de tramontare: ponerse el sol)",
        raccontato: "contado (de raccontare)",
        volta: "vez («una volta» = antes, antiguamente)",
        servivano: "servían (imperfetto de servire)",
        trasportare: "transportar",
        le: "las",
        merci: "mercancías (plural de la merce)",
        barche: "barcas (plural de la barca)",
        portavano: "llevaban",
        marmo: "mármol",
        duomo: "catedral (el Duomo de Milán)",
        stata: "sido («è stata» = ha sido; femenino, concuerda con «serata»)",
        "più": "más («la più bella» = la más bonita)",
        della: "de la (di + la)",
        settimana: "semana",
        alla: "a la («alla fine» = al final)",
        fine: "fin («alla fine» = al final)",
        cin: "«Cin cin!» = ¡chinchín!"
      },
      preguntas: [
        { q: "¿Qué pide Chiara?", ops: ["Una bebida sin alcohol", "Un Spritz", "Un Negroni sbagliato"], ok: 0 },
        {
          q: "Según Marco, ¿cómo nació el *Negroni sbagliato*?",
          ops: ["Un camarero usó espumoso en vez de ginebra, por error", "Un cliente pidió un Negroni sin alcohol", "Lo inventaron en un bar de Turín"],
          ok: 0
        },
        { q: "¿Qué le sorprende a Carlos de los *stuzzichini*?", ops: ["Que son casi una cena", "Que son muy caros", "Que no hay tapas"], ok: 0 },
        {
          q: "¿Para qué servían antes los Navigli?",
          ops: ["Para transportar mercancías, como el mármol del Duomo", "Para los aperitivos de los milaneses", "Para nadar en verano"],
          ok: 0
        }
      ],
      notas: "*Preparava* (estaba preparando: el fondo) frente a *ha preso* (cogió: el hecho que lo cambia todo), como en la lección 2. *Costa meno che in centro*: *che*, porque comparas dos complementos con preposición. *La serata più bella della settimana*: superlativo con *di*. Y *uno Spritz*, *gli stuzzichini*: *uno* y *gli* ante *s* + consonante."
    }
  ]
});
