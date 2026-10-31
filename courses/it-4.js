// Glossa · italiano · semana 4: El pasado: passato prossimo
window.CONTENT.it.semanas.push({
  n: 4,
  lecciones: [
    {
      id: "it4-1",
      titulo: "Passato prossimo (1): ho lavorato",
      min: 40,
      intro: "En cada reunión y en cada correo vas a contar lo que ya has hecho: *Ho mandato i dati*, *Abbiamo finito i test*. El passato prossimo se forma como nuestro pretérito perfecto: **avere** + participio.",
      bloques: [
        {
          t: "p",
          x: "Se construye igual que «he trabajado»: presente de **avere** (*ho, hai, ha, abbiamo, avete, hanno*) + **participio**. El participio regular sale del infinitivo: **-are → -ato**, **-ere → -uto**, **-ire → -ito**."
        },
        {
          t: "tabla",
          cab: ["Infinitivo", "Participio", "Español"],
          audio: [0, 1],
          filas: [
            ["lavorare", "lavorato", "trabajado"],
            ["parlare", "parlato", "hablado"],
            ["mandare", "mandato", "mandado, enviado"],
            ["ricevere", "ricevuto", "recibido"],
            ["conoscere", "conosciuto", "conocido"],
            ["finire", "finito", "terminado"],
            ["capire", "capito", "entendido"],
            ["avere", "avuto", "tenido"],
            ["dovere", "dovuto", "tenido que"],
            ["potere", "potuto", "podido"]
          ]
        },
        {
          t: "tabla",
          cab: ["", "Avere + participio", "Español"],
          audio: [1],
          filas: [
            ["io", "ho lavorato", "he trabajado; trabajé"],
            ["tu", "hai lavorato", "has trabajado; trabajaste"],
            ["lui, lei, Lei", "ha lavorato", "ha trabajado; trabajó (él, ella, usted)"],
            ["noi", "abbiamo lavorato", "hemos trabajado; trabajamos"],
            ["voi", "avete lavorato", "habéis trabajado; trabajasteis"],
            ["loro", "hanno lavorato", "han trabajado; trabajaron"]
          ]
        },
        {
          t: "nota",
          x: "**Un solo pasado para «he trabajado» y «trabajé».** En España distinguimos «esta mañana he trabajado» de «ayer trabajé»; en italiano las dos son *ho lavorato*: *Stamattina ho lavorato da casa*, *Ieri ho lavorato fino alle otto*. Existe otro pasado, el *passato remoto* (*lavorai*), pero en una oficina de Milán prácticamente no lo oirás."
        },
        {
          t: "p",
          x: "Con **avere** el participio no cambia, como en español: *Giulia ha lavorato*, *Giulia e Chiara hanno lavorato* (hay una excepción con los pronombres *lo* y *la*, que verás cuando estudies los pronombres). La negación va delante del auxiliar: *Non ho capito*. Y con *Lei*, 3.ª persona, como con «usted»: *Dottor Ferrari, ha ricevuto la mia email?*"
        },
        {
          t: "nota",
          x: "**Sin «a» personal.** El complemento directo de persona va sin «a»: *Ho chiamato Marco* (He llamado a Marco), *Ho aspettato Giulia* (He esperado a Giulia), *Ho conosciuto il dottor Ferrari* (He conocido al doctor Ferrari). La «a» solo aparece con verbos como *scrivere a* o *telefonare a*: *Ho scritto al cliente*."
        },
        {
          t: "ej",
          items: [
            ["Ho parlato con Giulia.", "He hablado con Giulia."],
            ["Abbiamo lavorato tutto il giorno.", "Hemos trabajado todo el día."],
            ["Ieri ho lavorato fino alle otto.", "Ayer trabajé hasta las ocho."],
            ["Hai ricevuto la mia email?", "¿Has recibido mi correo? (a Giulia, de tú)"],
            ["Dottor Ferrari, ha ricevuto la mia email?", "Doctor Ferrari, ¿ha recibido mi correo? (de usted)"],
            ["Non ho capito la domanda.", "No he entendido la pregunta."],
            ["Ho controllato i dati.", "He revisado los datos."],
            ["Ho dovuto chiamare il cliente.", "He tenido que llamar al cliente."],
            ["Non abbiamo potuto finire.", "No hemos podido terminar."],
            ["Hanno avuto un problema con il server.", "Han tenido un problema con el servidor."]
          ]
        }
      ],
      vocab: [
        ["ho lavorato", "he trabajado; trabajé"],
        ["hai lavorato", "has trabajado; trabajaste"],
        ["ha lavorato", "ha trabajado; trabajó (él, ella, usted)"],
        ["abbiamo lavorato", "hemos trabajado; trabajamos"],
        ["avete lavorato", "habéis trabajado; trabajasteis"],
        ["hanno lavorato", "han trabajado; trabajaron"],
        ["ieri", "ayer"],
        ["Ieri ho lavorato fino alle otto.", "Ayer trabajé hasta las ocho."],
        ["Ho parlato con Giulia.", "He hablado con Giulia."],
        ["Hai ricevuto la mia email?", "¿Has recibido mi correo? (de tú)"],
        ["Ha ricevuto la mia email?", "¿Ha recibido mi correo? (de usted)"],
        ["Non ho capito.", "No lo he entendido."],
        ["Ho controllato i dati.", "He revisado los datos."],
        ["Ho preparato la presentazione.", "He preparado la presentación."],
        ["Ho chiamato Marco.", "He llamado a Marco (sin «a» en italiano)."],
        ["Ho conosciuto il dottor Ferrari.", "He conocido al doctor Ferrari."],
        ["Ho dovuto lavorare fino a tardi.", "He tenido que trabajar hasta tarde."],
        ["Non abbiamo potuto finire.", "No hemos podido terminar."],
        ["Ho dimenticato la password.", "Se me ha olvidado la contraseña."],
        ["Abbiamo finito i test.", "Hemos terminado las pruebas."]
      ],
      ejercicios: [
        { t: "mc", q: "Participio de *ricevere*:", ops: ["ricevuto", "ricevito", "ricevato"], ok: 0 },
        {
          t: "mc",
          q: "Ayer trabajaste hasta las ocho. Dices:",
          ops: ["Ieri ho lavorato fino alle otto.", "Ieri sono lavorato fino alle otto.", "Ieri ho lavorare fino alle otto."],
          ok: 0
        },
        {
          t: "mc",
          q: "Le preguntas al dottor Ferrari si ha recibido tu correo:",
          ops: ["Ha ricevuto la mia email?", "Hai ricevuto la mia email?", "Avete ricevuto la mia email?"],
          ok: 0
        },
        { t: "mc", q: "«He llamado a Marco» es…", ops: ["Ho chiamato Marco.", "Ho chiamato a Marco.", "Ho chiamata Marco."], ok: 0 },
        { t: "oir", x: "abbiamo finito", ops: ["abbiamo finito", "avete finito", "hanno finito"], ok: 0 },
        { t: "orden", es: "He preparado la presentación.", x: "Ho preparato la presentazione." },
        { t: "decir", es: "No lo he entendido.", x: "Non ho capito." },
        { t: "decir", es: "Hemos trabajado todo el día.", x: "Abbiamo lavorato tutto il giorno." }
      ]
    },
    {
      id: "it4-2",
      titulo: "Passato prossimo (2): participios irregulares",
      min: 40,
      intro: "Los verbos que más usarás en el trabajo (*fare, dire, scrivere, leggere, vedere, prendere, mettere*) tienen el participio irregular. La buena noticia: muchos también lo son en español, y se parecen.",
      bloques: [
        {
          t: "tabla",
          cab: ["Infinitivo", "Participio", "Español"],
          audio: [0, 1],
          filas: [
            ["fare", "fatto", "hacer · hecho"],
            ["dire", "detto", "decir · dicho"],
            ["scrivere", "scritto", "escribir · escrito"],
            ["leggere", "letto", "leer · leído"],
            ["vedere", "visto", "ver · visto"],
            ["prendere", "preso", "coger, tomar · cogido, tomado"],
            ["mettere", "messo", "poner · puesto"],
            ["aprire", "aperto", "abrir · abierto"],
            ["chiudere", "chiuso", "cerrar · cerrado"],
            ["chiedere", "chiesto", "preguntar, pedir · preguntado, pedido"],
            ["rispondere", "risposto", "responder · respondido"],
            ["risolvere", "risolto", "resolver · resuelto"]
          ]
        },
        {
          t: "p",
          x: "Se agrupan por la terminación: **-tto** (*fatto, detto, scritto, letto*), **-so** (*preso, messo, chiuso*), **-sto** (*visto, chiesto, risposto*), **-erto** (*aperto*) y **-olto** (*risolto*). Todos van con **avere**, como los regulares: *ho fatto, hai detto, abbiamo scritto*."
        },
        {
          t: "nota",
          x: "**Truco:** si el participio es irregular en español, muchas veces lo es también en italiano, y se parecen: hecho, *fatto*; dicho, *detto*; escrito, *scritto*; puesto, *messo*; abierto, *aperto*; resuelto, *risolto*. Los que hay que aprender aparte son *letto, preso, chiuso, chiesto* y *risposto*."
        },
        {
          t: "nota",
          x: "**Dobles consonantes:** *fatto, detto, scritto, letto, messo* se pronuncian con la consonante alargada: «fat-to», «mes-so». Si dices *fato*, has dicho «destino»."
        },
        {
          t: "nota",
          x: "**Acento:** en español todos los infinitivos son agudos (poner, meter, leer). En italiano, muchos en *-ere* son esdrújulos: *PREN-de-re, MET-te-re, SCRI-ve-re, LEG-ge-re, CHIE-de-re, ri-SPON-de-re*. Otros son llanos: *ve-DE-re, a-VE-re*."
        },
        {
          t: "nota",
          x: "**Falso amigo:** *ho preso* no tiene nada que ver con la cárcel: es «he cogido, he tomado». *Ho preso il treno delle otto* (He cogido el tren de las ocho), *Ho preso un caffè* (Me he tomado un café), *Ho preso appunti* (He tomado apuntes)."
        },
        {
          t: "p",
          x: "**Fare** sirve para muchas cosas en la oficina: *Abbiamo fatto una riunione* (Hemos tenido una reunión), *Ho fatto una telefonata* (He hecho una llamada), *Ho fatto una pausa* (He hecho una pausa)."
        },
        {
          t: "ej",
          items: [
            ["Che cosa hai fatto ieri?", "¿Qué hiciste ayer?"],
            ["Giulia ha detto di sì.", "Giulia ha dicho que sí."],
            ["Ho scritto al cliente.", "He escrito al cliente."],
            ["Hai letto la relazione?", "¿Has leído el informe?"],
            ["Abbiamo visto i risultati.", "Hemos visto los resultados."],
            ["Ho messo la presentazione nella cartella condivisa.", "He puesto la presentación en la carpeta compartida."],
            ["Ho aperto il file, ma è vuoto.", "He abierto el archivo, pero está vacío."],
            ["Abbiamo chiuso il progetto in tempo.", "Hemos cerrado el proyecto a tiempo."],
            ["Ho chiesto a Chiara il numero di Marco.", "Le he pedido a Chiara el número de Marco."],
            ["Il cliente ha risposto subito.", "El cliente ha respondido enseguida."],
            ["Marco ha risolto il problema.", "Marco ha resuelto el problema."]
          ]
        }
      ],
      vocab: [
        ["ho fatto", "he hecho; hice (de «fare»)"],
        ["ho detto", "he dicho; dije (de «dire»)"],
        ["ho scritto", "he escrito; escribí (de «scrivere»)"],
        ["ho letto", "he leído; leí (de «leggere»)"],
        ["ho visto", "he visto; vi (de «vedere»)"],
        ["ho preso", "he cogido, he tomado; cogí (de «prendere»)"],
        ["ho messo", "he puesto; puse (de «mettere»)"],
        ["ho aperto", "he abierto; abrí (de «aprire»)"],
        ["ho chiuso", "he cerrado; cerré (de «chiudere»)"],
        ["ho chiesto", "he preguntado, he pedido (de «chiedere»)"],
        ["ho risposto", "he respondido (de «rispondere»)"],
        ["ho risolto", "he resuelto (de «risolvere»)"],
        ["Che cosa hai fatto ieri?", "¿Qué hiciste ayer?"],
        ["Abbiamo fatto una riunione.", "Hemos tenido una reunión."],
        ["Giulia ha detto di sì.", "Giulia ha dicho que sí."],
        ["Ho preso un caffè.", "Me he tomado un café."],
        ["Ho preso appunti.", "He tomado apuntes."],
        ["Dove hai messo il file?", "¿Dónde has puesto el archivo?"],
        ["la cartella condivisa", "la carpeta compartida"],
        ["la relazione", "el informe (y también «relación»)"],
        ["Il cliente ha risposto subito.", "El cliente ha respondido enseguida. (acento: SU-bi-to)"],
        ["Ho chiesto a Chiara.", "Se lo he preguntado a Chiara."]
      ],
      ejercicios: [
        { t: "mc", q: "Participio de *scrivere*:", ops: ["scritto", "scrivuto", "scrivito"], ok: 0 },
        { t: "mc", q: "Participio de *mettere*:", ops: ["messo", "mettuto", "metto"], ok: 0 },
        { t: "mc", q: "Participio de *chiudere*:", ops: ["chiuso", "chiuduto", "chiudito"], ok: 0 },
        { t: "mc", q: "*Ho preso un caffè* significa…", ops: ["Me he tomado un café.", "Me han detenido en un café.", "He pagado un café."], ok: 0 },
        {
          t: "mc",
          q: "«¿Qué ha dicho Giulia?» en italiano:",
          ops: ["Che cosa ha detto Giulia?", "Che cosa ha dito Giulia?", "Che cosa ha dicuto Giulia?"],
          ok: 0
        },
        { t: "oir", x: "detto", ops: ["detto", "letto", "fatto"], ok: 0 },
        { t: "orden", es: "¿Dónde has puesto el archivo?", x: "Dove hai messo il file?" },
        { t: "decir", es: "¿Qué hiciste ayer?", x: "Che cosa hai fatto ieri?" }
      ]
    },
    {
      id: "it4-3",
      titulo: "Passato prossimo (3): con essere",
      min: 45,
      intro: "*Sono andato a Milano*, nunca «ho andato»: los verbos de movimiento y de cambio forman el pasado con **essere**, y su participio concuerda como un adjetivo. Es el error típico de los hispanohablantes, así que merece una lección entera.",
      bloques: [
        {
          t: "p",
          x: "Unos cuantos verbos muy frecuentes usan **essere** como auxiliar. Casi todos indican **movimiento** hacia un sitio o desde él (*andare, venire, arrivare, partire, tornare, uscire, entrare*), **permanencia** (*stare, restare, rimanere*) o **cambio** (*nascere, diventare*), y ninguno lleva complemento directo."
        },
        {
          t: "tabla",
          cab: ["", "Masculino", "Femenino"],
          audio: [1, 2],
          filas: [
            ["io", "sono andato", "sono andata"],
            ["tu", "sei andato", "sei andata"],
            ["lui, lei, Lei", "è andato", "è andata"],
            ["noi", "siamo andati", "siamo andate"],
            ["voi", "siete andati", "siete andate"],
            ["loro", "sono andati", "sono andate"]
          ]
        },
        {
          t: "nota",
          x: "El participio concuerda con el sujeto: **-o, -a, -i, -e**. Tú dices *sono andato*; Giulia, *sono andata*. Un grupo mixto va en masculino: *Giulia e Marco sono arrivati*. Solo mujeres, en femenino: *Giulia e Chiara sono arrivate*."
        },
        {
          t: "tabla",
          cab: ["Infinitivo", "Passato prossimo", "Español"],
          audio: [0, 1],
          filas: [
            ["andare", "sono andato", "he ido; fui"],
            ["venire", "sono venuto", "he venido; vine"],
            ["arrivare", "sono arrivato", "he llegado; llegué"],
            ["partire", "sono partito", "me he ido, he salido (de viaje)"],
            ["tornare", "sono tornato", "he vuelto; volví"],
            ["uscire", "sono uscito", "he salido; salí"],
            ["entrare", "sono entrato", "he entrado; entré"],
            ["rimanere", "sono rimasto", "me he quedado; me quedé"],
            ["essere, stare", "sono stato", "he sido, he estado; fui, estuve"],
            ["nascere", "sono nato", "nací"],
            ["diventare", "sono diventato", "me he convertido en, he llegado a ser"],
            ["succedere", "è successo", "ha pasado, ha ocurrido"]
          ]
        },
        {
          t: "nota",
          x: "Irregulares de este grupo: *venuto, rimasto, stato, nato* y *successo*. Fíjate en **sono stato**: es el pasado de *essere* y de *stare*, «he sido» y «he estado». Nunca «ho stato»: *Sono stato in ferie* (He estado de vacaciones)."
        },
        {
          t: "nota",
          x: "*Partire* es irse de viaje, o salir un tren o un avión: *Il dottor Ferrari è partito per Roma*. *Uscire* es salir de un sitio: *Sono uscito dall'ufficio alle sette*. Y no todos los verbos de movimiento van con essere: *viaggiare* (viajar) y *camminare* (andar) llevan avere: *Ho viaggiato molto*."
        },
        {
          t: "p",
          x: "Los **reflexivos** también van con essere, y concuerdan igual: *Mi sono alzato alle sei* (Me he levantado a las seis); Giulia dice *Mi sono alzata*. En plural: *Ci siamo trovati bene* (Hemos estado a gusto)."
        },
        {
          t: "nota",
          x: "Con *Lei*, el participio concuerda con la persona real: *Dottor Ferrari, è arrivato bene?*; a una mujer, *Dottoressa, è arrivata bene?*"
        },
        {
          t: "nota",
          x: "*Dovere, potere* y *volere* + un verbo que va con essere: lo más cuidado es usar essere, y entonces el participio concuerda: *Sono dovuto partire presto* (He tenido que irme temprano), *Giulia è dovuta partire*. También oirás, y es correcto, *Ho dovuto partire presto*."
        },
        {
          t: "ej",
          items: [
            ["Giulia è arrivata in ufficio alle otto.", "Giulia ha llegado a la oficina a las ocho."],
            ["Marco è uscito presto.", "Marco ha salido temprano."],
            ["Siamo rimasti in ufficio fino alle nove.", "Nos hemos quedado en la oficina hasta las nueve."],
            ["Il dottor Ferrari è partito per Roma.", "El doctor Ferrari se ha ido a Roma."],
            ["Chiara e Giulia sono venute alla riunione.", "Chiara y Giulia han venido a la reunión."],
            ["Sono stato in ferie una settimana.", "He estado una semana de vacaciones."],
            ["Sono nato a Madrid.", "Nací en Madrid."],
            ["Cos'è successo?", "¿Qué ha pasado?"],
            ["È andato tutto bene.", "Ha ido todo bien."],
            ["Mi sono alzato alle sei.", "Me he levantado a las seis."]
          ]
        }
      ],
      vocab: [
        ["sono andato / sono andata", "he ido; fui (hombre / mujer)"],
        ["è andato / è andata", "ha ido; fue (él / ella; usted)"],
        ["siamo andati / siamo andate", "hemos ido; fuimos (grupo mixto / solo mujeres)"],
        ["sono venuto / sono venuta", "he venido; vine (de «venire»)"],
        ["sono stato / sono stata", "he estado, he sido; estuve, fui"],
        ["sono rimasto / sono rimasta", "me he quedado; me quedé (de «rimanere»)"],
        ["sono nato / sono nata", "nací (de «nascere»)"],
        ["Sono arrivato in ufficio alle otto.", "He llegado a la oficina a las ocho."],
        ["Sono tornato a casa tardi.", "He vuelto tarde a casa."],
        ["Marco è uscito presto.", "Marco ha salido temprano."],
        ["Il dottor Ferrari è partito per Roma.", "El doctor Ferrari se ha ido a Roma."],
        ["Siamo rimasti in ufficio fino alle nove.", "Nos hemos quedado en la oficina hasta las nueve."],
        ["Sono stato in ferie.", "He estado de vacaciones."],
        ["Cos'è successo?", "¿Qué ha pasado?"],
        ["È andato tutto bene.", "Ha ido todo bien."],
        ["Mi sono alzato alle sei.", "Me he levantado a las seis."],
        ["Ci siamo trovati bene.", "Hemos estado a gusto."],
        ["È arrivato bene, dottore?", "¿Ha llegado bien, doctor? (de usted)"],
        ["Ho viaggiato molto.", "He viajado mucho («viaggiare» va con avere)."],
        ["Sono dovuto partire presto.", "He tenido que irme temprano."]
      ],
      ejercicios: [
        { t: "mc", q: "Carlos cuenta: «Ieri ___ in ufficio alle otto.»", ops: ["sono arrivato", "ho arrivato", "sono arrivata"], ok: 0 },
        { t: "mc", q: "Giulia cuenta: «Ieri sera sono ___ a casa tardi.»", ops: ["tornata", "tornato", "tornate"], ok: 0 },
        {
          t: "mc",
          q: "«Giulia y Marco han ido a Roma»:",
          ops: ["Giulia e Marco sono andati a Roma.", "Giulia e Marco sono andate a Roma.", "Giulia e Marco hanno andato a Roma."],
          ok: 0
        },
        { t: "mc", q: "Carlos dice «He estado de vacaciones»:", ops: ["Sono stato in ferie.", "Ho stato in ferie.", "Sono stata in ferie."], ok: 0 },
        { t: "mc", q: "Le preguntas al dottor Ferrari si ha llegado bien:", ops: ["È arrivato bene?", "Sei arrivato bene?", "Ha arrivato bene?"], ok: 0 },
        { t: "oir", x: "sono arrivate", ops: ["sono arrivate", "sono arrivati", "sono arrivato"], ok: 0 },
        { t: "orden", es: "Nos hemos quedado en la oficina hasta las nueve.", x: "Siamo rimasti in ufficio fino alle nove." },
        { t: "decir", es: "¿Qué ha pasado?", x: "Cos'è successo?" }
      ]
    },
    {
      id: "it4-4",
      titulo: "¿Cuándo? Ieri, fa, già, non… ancora",
      min: 35,
      intro: "En el trabajo no basta con decir qué has hecho: hay que decir cuándo y, sobre todo, si ya está hecho o todavía no. *Ho già mandato il preventivo* o *Non ho ancora finito* son frases que dirás todas las semanas.",
      bloques: [
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["ieri mattina", "ayer por la mañana"],
            ["ieri pomeriggio", "ayer por la tarde"],
            ["ieri sera", "anoche, ayer por la noche"],
            ["l'altro ieri", "anteayer"],
            ["stamattina", "esta mañana"],
            ["lunedì scorso", "el lunes pasado"],
            ["la settimana scorsa", "la semana pasada"],
            ["il mese scorso", "el mes pasado"],
            ["l'anno scorso", "el año pasado"],
            ["due giorni fa", "hace dos días"],
            ["un'ora fa", "hace una hora"],
            ["poco fa", "hace un rato"]
          ]
        },
        {
          t: "nota",
          x: "**Fa va detrás:** *due giorni fa* = hace dos días; *una settimana fa* = hace una semana. Nunca «fa due giorni». Pero si la acción **sigue**, no es *fa*, sino *da* + presente: *Lavoro qui da due anni* (Trabajo aquí desde hace dos años)."
        },
        {
          t: "nota",
          x: "*Scorso* concuerda como un adjetivo: *il mese scorso*, *la settimana scorsa*. Los días de la semana son masculinos (*lunedì scorso*, *sabato scorso*), menos *domenica*: *domenica scorsa*."
        },
        {
          t: "p",
          x: "**Ya, todavía no, acabar de, nunca.** *Già*, *ancora*, *appena* y *mai* van **entre el auxiliar y el participio**; *non*, como siempre, delante del auxiliar:"
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["Ho già mandato il preventivo.", "Ya he mandado el presupuesto."],
            ["Non ho ancora finito.", "Todavía no he terminado."],
            ["Ho appena parlato con Giulia.", "Acabo de hablar con Giulia."],
            ["Non sono mai stato a Milano.", "Nunca he estado en Milán."]
          ]
        },
        {
          t: "nota",
          x: "*Appena* equivale a nuestro «acabar de», pero va con el passato prossimo: *Ho appena finito* = acabo de terminar. A *Hai già finito?* se responde *Sì!* o *Non ancora* (todavía no)."
        },
        {
          t: "nota",
          x: "El «ya» español tiene muchos usos. *Già* es el de «ya está hecho»; «ya no» se dice *non… più*: *Non lavora più qui* (Ya no trabaja aquí)."
        },
        {
          t: "ej",
          items: [
            ["Hai già letto la relazione?", "¿Ya has leído el informe?"],
            ["No, non ancora.", "No, todavía no."],
            ["Il cliente non ha ancora risposto.", "El cliente todavía no ha respondido."],
            ["Ho appena ricevuto la tua email.", "Acabo de recibir tu correo."],
            ["Marco è tornato due giorni fa.", "Marco volvió hace dos días."],
            ["La settimana scorsa abbiamo fatto tre riunioni.", "La semana pasada tuvimos tres reuniones."],
            ["Stamattina sono arrivato presto.", "Esta mañana he llegado temprano."],
            ["Ieri sera Marco ha visto la partita dell'Inter.", "Anoche Marco vio el partido del Inter."],
            ["Non sono mai stato a Milano.", "Nunca he estado en Milán."]
          ]
        }
      ],
      vocab: [
        ["ieri mattina", "ayer por la mañana"],
        ["ieri pomeriggio", "ayer por la tarde"],
        ["ieri sera", "anoche, ayer por la noche"],
        ["l'altro ieri", "anteayer"],
        ["stamattina", "esta mañana"],
        ["lunedì scorso", "el lunes pasado"],
        ["domenica scorsa", "el domingo pasado (acento: do-ME-ni-ca)"],
        ["la settimana scorsa", "la semana pasada"],
        ["il mese scorso", "el mes pasado"],
        ["l'anno scorso", "el año pasado"],
        ["due giorni fa", "hace dos días"],
        ["un'ora fa", "hace una hora"],
        ["poco fa", "hace un rato"],
        ["Ho già mandato il preventivo.", "Ya he mandado el presupuesto."],
        ["Non ho ancora finito.", "Todavía no he terminado."],
        ["Non ancora.", "Todavía no."],
        ["Ho appena parlato con Giulia.", "Acabo de hablar con Giulia."],
        ["Non sono mai stato a Milano.", "Nunca he estado en Milán."],
        ["Non lavora più qui.", "Ya no trabaja aquí."],
        ["Lavoro qui da due anni.", "Trabajo aquí desde hace dos años."]
      ],
      ejercicios: [
        { t: "mc", q: "«Hace dos días» es…", ops: ["due giorni fa", "fa due giorni", "da due giorni"], ok: 0 },
        { t: "mc", q: "Completa: «La settimana ___ ho lavorato da casa.»", ops: ["scorsa", "scorso", "fa"], ok: 0 },
        { t: "mc", q: "«Todavía no he terminado»:", ops: ["Non ho ancora finito.", "Ho non ancora finito.", "Non ho già finito."], ok: 0 },
        {
          t: "mc",
          q: "«Acabo de recibir tu correo»:",
          ops: ["Ho appena ricevuto la tua email.", "Finisco di ricevere la tua email.", "Ho già ricevuto la tua email."],
          ok: 0
        },
        { t: "mc", q: "«Trabajo aquí desde hace dos años»:", ops: ["Lavoro qui da due anni.", "Lavoro qui due anni fa.", "Lavoro qui fa due anni."], ok: 0 },
        { t: "oir", x: "stamattina", ops: ["stamattina", "stasera", "stanotte"], ok: 0 },
        { t: "orden", es: "El cliente todavía no ha respondido.", x: "Il cliente non ha ancora risposto." },
        { t: "decir", es: "Nunca he estado en Milán.", x: "Non sono mai stato a Milano." }
      ]
    },
    {
      id: "it4-5",
      titulo: "«Com'è andata?»: contar tu semana",
      min: 35,
      intro: "Los lunes, en la pausa del café o al empezar una videollamada, alguien te preguntará *Com'è andata la settimana?* o *Com'è andato il weekend?* Hoy juntas el passato prossimo con conectores y reacciones para contarlo con naturalidad, y no como una lista.",
      bloques: [
        {
          t: "tabla",
          cab: ["Pregunta", "Español"],
          audio: [0],
          filas: [
            ["Com'è andata la settimana?", "¿Qué tal ha ido la semana?"],
            ["Com'è andato il weekend?", "¿Qué tal el fin de semana?"],
            ["Com'è andata la riunione?", "¿Qué tal ha ido la reunión?"],
            ["Com'è andato il viaggio, dottore?", "¿Qué tal el viaje, doctor?"],
            ["Che cosa hai fatto di bello?", "¿Qué has hecho de bueno?"]
          ]
        },
        {
          t: "nota",
          x: "*Com'è andata?* concuerda con lo que «ha ido»: *la settimana*, *la riunione* → *andata*; *il weekend*, *il viaggio* → *andato*. Sin sujeto se usa el femenino: *Allora, com'è andata?* (Bueno, ¿qué tal ha ido?)."
        },
        {
          t: "tabla",
          cab: ["Respuesta", "Español"],
          audio: [0],
          filas: [
            ["È andata benissimo!", "¡Ha ido genial!"],
            ["È andata bene, grazie.", "Ha ido bien, gracias."],
            ["Così così.", "Regular."],
            ["Niente di speciale.", "Nada especial."],
            ["È stata una settimana pesante.", "Ha sido una semana dura."],
            ["Non è andata molto bene.", "No ha ido muy bien."]
          ]
        },
        {
          t: "p",
          x: "Para ordenar lo que cuentas: **prima** (primero), **poi** (luego), **dopo** (después), **alla fine** (al final). Para valorarlo: **per fortuna** (por suerte), **purtroppo** (por desgracia)."
        },
        {
          t: "ej",
          items: [
            ["Lunedì e martedì ho fatto i test con Marco.", "El lunes y el martes hice las pruebas con Marco."],
            ["Mercoledì il server non ha funzionato per tre ore.", "El miércoles el servidor no funcionó durante tres horas."],
            ["Per fortuna i tecnici hanno risolto il problema.", "Por suerte, los técnicos resolvieron el problema."],
            ["Giovedì sono rimasto in ufficio fino alle nove.", "El jueves me quedé en la oficina hasta las nueve."],
            ["Prima ho controllato i dati, poi ho scritto la relazione.", "Primero revisé los datos y luego escribí el informe."],
            ["Alla fine è andato tutto bene.", "Al final todo ha ido bien."],
            ["E tu? Che cosa hai fatto di bello?", "¿Y tú? ¿Qué has hecho de bueno?"]
          ]
        },
        {
          t: "nota",
          x: "**Lunedì**, sin artículo, es un lunes concreto, el último: *Lunedì ho avuto tre riunioni* (El lunes tuve tres reuniones). Con artículo, **il lunedì** es «todos los lunes»: *Il lunedì facciamo sempre una riunione*."
        },
        {
          t: "tabla",
          cab: ["Reacción", "Español"],
          audio: [0],
          filas: [
            ["Davvero?", "¿De verdad?"],
            ["Che bello!", "¡Qué bien!"],
            ["Meno male!", "¡Menos mal!"],
            ["Mi dispiace.", "Lo siento."],
            ["Che peccato!", "¡Qué pena!"]
          ]
        },
        { t: "nota", x: "*Che bello!* vale para cualquier buena noticia, no solo para cosas bonitas: *Il cliente ha detto di sì! — Che bello!*" }
      ],
      vocab: [
        ["Com'è andata la settimana?", "¿Qué tal ha ido la semana?"],
        ["Com'è andato il weekend?", "¿Qué tal el fin de semana?"],
        ["Com'è andata?", "¿Qué tal ha ido?"],
        ["Che cosa hai fatto di bello?", "¿Qué has hecho de bueno?"],
        ["È andata benissimo!", "¡Ha ido genial!"],
        ["Così così.", "Regular, así así."],
        ["È stata una settimana pesante.", "Ha sido una semana dura."],
        ["Niente di speciale.", "Nada especial."],
        ["dopo", "después"],
        ["alla fine", "al final"],
        ["per fortuna", "por suerte"],
        ["Ho lavorato da casa.", "He trabajado desde casa."],
        ["Il server non ha funzionato.", "El servidor no ha funcionado."],
        ["Davvero?", "¿De verdad?"],
        ["Che bello!", "¡Qué bien!"],
        ["Meno male!", "¡Menos mal!"],
        ["Mi dispiace.", "Lo siento."],
        ["Che peccato!", "¡Qué pena!"]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «Com'è ___ il viaggio?»", ops: ["andato", "andata", "andati"], ok: 0 },
        { t: "mc", q: "Giulia te cuenta que su presentación ha ido mal. Respondes:", ops: ["Mi dispiace.", "Meno male!", "Che bello!"], ok: 0 },
        {
          t: "mc",
          q: "*È stata una settimana pesante* significa…",
          ops: ["Ha sido una semana dura.", "Ha sido una semana aburrida.", "Ha sido una semana corta."],
          ok: 0
        },
        {
          t: "mc",
          q: "«El lunes tuve tres reuniones» (este lunes, uno concreto):",
          ops: ["Lunedì ho avuto tre riunioni.", "Il lunedì ho avuto tre riunioni.", "Lunedì sono avuto tre riunioni."],
          ok: 0
        },
        { t: "oir", x: "Meno male!", ops: ["Meno male!", "Non male!", "Che male!"], ok: 0 },
        { t: "orden", es: "Al final todo ha ido bien.", x: "Alla fine è andato tutto bene." },
        { t: "decir", es: "¿Qué tal ha ido la semana?", x: "Com'è andata la settimana?" },
        { t: "decir", es: "Ha sido una semana dura.", x: "È stata una settimana pesante." }
      ]
    },
    {
      id: "it4-6",
      titulo: "El correo formal: «Gentile dottor Ferrari»",
      min: 45,
      intro: "Al dottor Ferrari le escribirás de *Lei* y con fórmulas fijas. Son pocas y se repiten en todos los correos de trabajo: apréndelas como bloques y tus correos sonarán profesionales desde el primer día.",
      bloques: [
        {
          t: "tabla",
          cab: ["Parte", "Italiano", "Español"],
          audio: [1],
          filas: [
            ["Asunto", "Oggetto: riunione di giovedì", "Asunto: reunión del jueves"],
            ["Saludo", "Gentile dottor Ferrari,", "Estimado doctor Ferrari:"],
            ["Motivo", "Le scrivo per confermare la riunione di giovedì.", "Le escribo para confirmar la reunión del jueves."],
            ["Contexto", "Come concordato al telefono, …", "Tal como acordamos por teléfono, …"],
            ["Adjunto", "In allegato trova l'ordine del giorno.", "Le adjunto el orden del día."],
            ["Cierre", "Resto in attesa di un Suo riscontro.", "Quedo a la espera de su respuesta."],
            ["Despedida", "Cordiali saluti,", "Un cordial saludo,"]
          ]
        },
        {
          t: "nota",
          x: "**Gentile** es el saludo estándar, para hombres y mujeres: *Gentile dottor Ferrari*, *Gentile dottoressa…*, *Gentile signora…*. *Egregio* es más solemne y se usa casi solo con hombres. Detrás del saludo va coma, no dos puntos como en español."
        },
        {
          t: "nota",
          x: "**Títulos:** en Italia se llama *dottore* o *dottoressa* a cualquier licenciado, no solo a los médicos. Delante del apellido, *dottore*, *ingegnere* y *signore* pierden la *-e*: *il dottor Ferrari*, *l'ingegner Bianchi*, *il signor…*. Hablándole directamente y sin apellido: *Buongiorno, dottore*."
        },
        {
          t: "p",
          x: "**Le scrivo per** + infinitivo es la forma más común de entrar en materia: *Le scrivo per confermare…* (para confirmar…), *…per chiedere un'informazione* (para pedir una información), *…per fare il punto sul progetto* (para hacer balance del proyecto)."
        },
        {
          t: "nota",
          x: "**Mayúsculas de cortesía:** en los correos formales, *Lei* y sus formas suelen ir con mayúscula: *Le scrivo*, *la Sua email*, *un Suo riscontro*, *La ringrazio*. No es obligatorio, pero es lo habitual."
        },
        {
          t: "nota",
          x: "**Falsos amigos:** *il riscontro* no es un reencuentro, sino la respuesta o la confirmación; *l'allegato* es el archivo adjunto (*in allegato* = adjunto); y *Distinti saluti* no son «saludos distintos», sino un «atentamente» más frío que *Cordiali saluti*."
        },
        {
          t: "ej",
          items: [
            ["Ho ricevuto la Sua email.", "He recibido su correo."],
            ["La ringrazio per la Sua risposta.", "Le agradezco su respuesta."],
            ["Come concordato, abbiamo completato i test.", "Tal como acordamos, hemos completado las pruebas."],
            ["Ha avuto modo di leggere la relazione?", "¿Ha tenido ocasión de leer el informe?"],
            ["Mi scuso per il ritardo.", "Disculpe el retraso."],
            ["Rimango a disposizione per qualsiasi chiarimento.", "Quedo a su disposición para cualquier aclaración."],
            ["Ciao Giulia, in allegato trovi la relazione. Un saluto!", "Hola, Giulia: te adjunto el informe. ¡Un saludo! (de tú)"]
          ]
        },
        {
          t: "nota",
          x: "**Tu o Lei:** a Giulia le escribes *Ciao Giulia,* … *In allegato trovi…* … *Un saluto* o *A presto*. Al dottor Ferrari: *Gentile dottor Ferrari,* … *In allegato trova…* … *Cordiali saluti*."
        }
      ],
      vocab: [
        ["Gentile dottor Ferrari,", "Estimado doctor Ferrari:"],
        ["Gentile dottoressa…", "Estimada doctora… (a una licenciada)"],
        ["l'oggetto", "el asunto (de un correo)"],
        ["Le scrivo per…", "Le escribo para… (de usted)"],
        ["Le scrivo per confermare la riunione.", "Le escribo para confirmar la reunión."],
        ["Come concordato…", "Tal como acordamos…"],
        ["In allegato trova…", "Le adjunto… (de usted)"],
        ["In allegato trovi…", "Te adjunto… (de tú)"],
        ["l'allegato", "el archivo adjunto"],
        ["Resto in attesa di un Suo riscontro.", "Quedo a la espera de su respuesta."],
        ["il riscontro", "la respuesta, la confirmación (no «reencuentro»)"],
        ["Cordiali saluti", "Un cordial saludo; atentamente"],
        ["Distinti saluti", "Atentamente (más distante)"],
        ["Un saluto", "Un saludo (informal)"],
        ["Ho ricevuto la Sua email.", "He recibido su correo."],
        ["La ringrazio per la Sua risposta.", "Le agradezco su respuesta."],
        ["Ha avuto modo di leggere la relazione?", "¿Ha tenido ocasión de leer el informe?"],
        ["Mi scuso per il ritardo.", "Disculpe el retraso."],
        ["Rimango a disposizione.", "Quedo a su disposición."],
        ["l'ingegner Bianchi", "el ingeniero Bianchi («ingegnere» pierde la -e ante el apellido)"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "¿Cómo empiezas un correo al dottor Ferrari?",
          ops: ["Gentile dottor Ferrari,", "Gentile dottore Ferrari,", "Ciao dottor Ferrari,"],
          ok: 0
        },
        {
          t: "mc",
          q: "*Resto in attesa di un Suo riscontro* significa…",
          ops: ["Quedo a la espera de su respuesta.", "Espero volver a verle pronto.", "Sigo esperándole en la oficina."],
          ok: 0
        },
        {
          t: "mc",
          q: "«Le adjunto el informe», al dottor Ferrari:",
          ops: ["In allegato trova la relazione.", "In allegato trovate la relazione.", "Allegato trova la relazione."],
          ok: 0
        },
        {
          t: "mc",
          q: "Terminas un correo a Giulia, de *tu*:",
          ops: ["Un saluto, Carlos", "Distinti saluti, Carlos", "Resto in attesa di un Suo riscontro."],
          ok: 0
        },
        { t: "mc", q: "*Il riscontro* es…", ops: ["la respuesta, la confirmación", "el reencuentro", "el descuento"], ok: 0 },
        { t: "oir", x: "Cordiali saluti", ops: ["Cordiali saluti", "Distinti saluti", "Cari saluti"], ok: 0 },
        { t: "orden", es: "Le escribo para confirmar la reunión.", x: "Le scrivo per confermare la riunione." },
        { t: "decir", es: "Quedo a la espera de su respuesta.", x: "Resto in attesa di un Suo riscontro." }
      ]
    },
    {
      id: "it4-7",
      titulo: "Repaso: la videollamada del viernes",
      min: 40,
      intro: "Repaso de la semana con una videollamada de viernes: Giulia te pregunta de *tu* qué tal la semana; luego entra el dottor Ferrari y pasas a *Lei*. Lee el diálogo en voz alta haciendo de Carlos.",
      bloques: [
        {
          t: "ej",
          items: [
            ["Ciao Carlos! Com'è andata la settimana?", "Giulia: ¡Hola, Carlos! ¿Qué tal la semana?"],
            ["Bene, ma è stata pesante. Lunedì e martedì ho fatto i test con Marco.", "Carlos: Bien, pero ha sido dura. El lunes y el martes hice las pruebas con Marco."],
            ["E sono andati bene?", "Giulia: ¿Y han ido bien?"],
            ["Sì, per fortuna. Poi ho scritto la relazione. E tu? Sei tornata da Torino?", "Carlos: Sí, por suerte. Luego escribí el informe. ¿Y tú? ¿Has vuelto ya de Turín?"],
            ["Sì, ieri sera. Hai già mandato la relazione al dottor Ferrari?", "Giulia: Sí, anoche. ¿Ya le has mandado el informe al doctor Ferrari?"],
            ["Sì, due ore fa, ma non ha ancora risposto.", "Carlos: Sí, hace dos horas, pero todavía no ha contestado."],
            ["Ah, ecco il dottor Ferrari!", "Giulia: ¡Ah, aquí está el doctor Ferrari!"],
            ["Buongiorno a tutti. Carlos, ho appena letto la sua relazione: ottimo lavoro.", "Ferrari: Buenos días a todos. Carlos, acabo de leer su informe: excelente trabajo."],
            ["Grazie, dottore. Ha visto anche la tabella con i risultati?", "Carlos: Gracias, doctor. ¿Ha visto también la tabla con los resultados?"],
            ["Sì, ho visto tutto. Ha già parlato con l'ufficio acquisti?", "Ferrari: Sí, lo he visto todo. ¿Ya ha hablado con compras?"],
            ["Ho scritto due giorni fa, ma non hanno ancora risposto.", "Carlos: Les escribí hace dos días, pero todavía no han contestado."],
            ["Va bene, chiamo io il fornitore. Buon fine settimana a tutti!", "Ferrari: De acuerdo, ya llamo yo al proveedor. ¡Buen fin de semana a todos!"],
            ["Grazie, altrettanto!", "Carlos: ¡Gracias, igualmente!"]
          ]
        },
        {
          t: "nota",
          x: "Fíjate en el cambio de registro: Giulia y Carlos se tutean (*Hai già mandato…?*); Ferrari y Carlos se hablan de *Lei*: *Ha visto…?*, *Ha già parlato…?*. Y en la concordancia: *sono andati* (los tests: *i test*, masculino plural) y *Sei tornata?* (a Giulia)."
        },
        {
          t: "tabla",
          cab: ["Auxiliar", "Cuándo", "Ejemplo"],
          audio: [2],
          filas: [
            ["avere", "la mayoría de los verbos; siempre con complemento directo", "Ho scritto la relazione."],
            ["essere", "ir, venir, llegar, salir, volver, quedarse, nacer…; reflexivos", "Sono tornato tardi."],
            ["essere: concordancia", "-o, -a, -i, -e, según el sujeto", "Giulia è tornata ieri sera."],
            ["Lei", "3.ª persona, como «usted»", "Ha già parlato con l'ufficio acquisti?"]
          ]
        },
        {
          t: "p",
          x: "**Essere + participio** también describe un estado, y concuerda igual que un adjetivo: *Il volo è prenotato*, *La camera è prenotata*, *Il check-in non è ancora aperto*. Lo verás en la lectura «Il viaggio a Milano è prenotato»."
        },
        {
          t: "p",
          x: "Ahora tú: cuenta en voz alta tu semana en seis frases, un día en cada una. Empieza con *Lunedì ho…* y termina con *Alla fine è andata bene*."
        }
      ],
      vocab: [
        ["Sono andati bene?", "¿Han ido bien? (los tests: masculino plural)"],
        ["Sei tornata da Torino?", "¿Has vuelto de Turín? (a una mujer)"],
        ["Hai già mandato la relazione?", "¿Ya has mandado el informe?"],
        ["Ecco il dottor Ferrari!", "¡Aquí está el doctor Ferrari!"],
        ["Buongiorno a tutti.", "Buenos días a todos."],
        ["Ho visto tutto.", "Lo he visto todo."],
        ["Ha già parlato con l'ufficio acquisti?", "¿Ya ha hablado con compras? (de usted)"],
        ["l'ufficio acquisti", "el departamento de compras"],
        ["il fornitore", "el proveedor"],
        ["Chiamo io il fornitore.", "Ya llamo yo al proveedor."],
        ["Buon fine settimana!", "¡Buen fin de semana!"],
        ["la tabella con i risultati", "la tabla con los resultados"],
        ["Sono appena tornato.", "Acabo de volver."],
        ["Non è ancora arrivato.", "Todavía no ha llegado."],
        ["prenotare", "reservar (vuelo, hotel, mesa)"],
        ["Ho prenotato il volo.", "He reservado el vuelo."],
        ["La camera è prenotata.", "La habitación está reservada."]
      ],
      ejercicios: [
        { t: "mc", q: "Giulia pregunta por los tests: «I test sono ___ bene?»", ops: ["andati", "andato", "andate"], ok: 0 },
        {
          t: "mc",
          q: "Le preguntas a Giulia si ha vuelto de Turín:",
          ops: ["Sei tornata da Torino?", "Sei tornato da Torino?", "Hai tornato da Torino?"],
          ok: 0
        },
        {
          t: "mc",
          q: "Le preguntas al dottor Ferrari si ya ha leído el informe:",
          ops: ["Ha già letto la relazione?", "Hai già letto la relazione?", "Ha già leggiuto la relazione?"],
          ok: 0
        },
        { t: "mc", q: "*Grazie, altrettanto!* es la respuesta a…", ops: ["Buon fine settimana!", "Ottimo lavoro!", "Com'è andata la settimana?"], ok: 0 },
        {
          t: "mc",
          q: "«La habitación ya está reservada»:",
          ops: ["La camera è già prenotata.", "La camera è già prenotato.", "La camera ha già prenotata."],
          ok: 0
        },
        { t: "oir", x: "Ha già parlato", ops: ["Ha già parlato", "Hai già parlato", "Ho già parlato"], ok: 0 },
        { t: "orden", es: "Acabo de leer su informe.", x: "Ho appena letto la sua relazione." },
        { t: "decir", es: "¡Gracias, igualmente!", x: "Grazie, altrettanto!" }
      ]
    }
  ],
  lecturas: [
    {
      id: "it4-r1",
      titulo: "Com'è andata la settimana?",
      nivel: "A2",
      texto: "È venerdì pomeriggio. Marco e Carlos prendono un caffè in videochiamata, ognuno nel suo ufficio.\n\nMarco: Ciao Carlos! Allora, com'è andata la settimana?\nCarlos: Bene, ma è stata pesante. Ieri sono rimasto in ufficio fino alle nove per finire la relazione. E tu? Com'è andata a Torino?\nMarco: Benissimo! Giulia e io siamo partiti mercoledì mattina e siamo tornati ieri sera. Il cliente ha visto il prototipo e ha detto di sì!\nCarlos: Davvero? Che bello! Avete già firmato il contratto?\nMarco: Non ancora, ma Giulia ha già preparato il preventivo.\nCarlos: E mercoledì sera avete visto la partita dell'Inter?\nMarco: Io sì, in albergo. Abbiamo vinto due a uno! Giulia invece è andata a dormire presto. Insomma, una settimana perfetta!\nCarlos: Quasi perfetta: il fornitore non ha ancora mandato i componenti…",
      traduccion: "Es viernes por la tarde. Marco y Carlos se toman un café por videollamada, cada uno en su oficina.\n\nMarco: ¡Hola, Carlos! Bueno, ¿qué tal ha ido la semana?\nCarlos: Bien, pero ha sido dura. Ayer me quedé en la oficina hasta las nueve para terminar el informe. ¿Y tú? ¿Qué tal en Turín?\nMarco: ¡Estupendamente! Giulia y yo salimos el miércoles por la mañana y volvimos anoche. ¡El cliente vio el prototipo y dijo que sí!\nCarlos: ¿De verdad? ¡Qué bien! ¿Ya habéis firmado el contrato?\nMarco: Todavía no, pero Giulia ya ha preparado el presupuesto.\nCarlos: ¿Y el miércoles por la noche visteis el partido del Inter?\nMarco: Yo sí, en el hotel. ¡Ganamos dos a uno! Giulia, en cambio, se fue a dormir temprano. En resumen, ¡una semana perfecta!\nCarlos: Casi perfecta: el proveedor todavía no ha mandado los componentes…",
      notas: "Concordancia con essere: *sono rimasto* (Carlos), *siamo partiti* y *siamo tornati* (Giulia y Marco: grupo mixto, masculino plural), *è andata* (Giulia). Con avere el participio no cambia: *ha visto*, *ha detto*, *abbiamo vinto* (de *vincere*, ganar). Y donde en España dirías «salimos» o «volvimos anoche», el italiano usa el passato prossimo: *siamo partiti*, *siamo tornati ieri sera*.",
      glosa: {
        "è": "es; con participio, auxiliar («è stata» = ha sido; «è andata» = ha ido, se fue)",
        "venerdì": "viernes",
        pomeriggio: "tarde (después de comer)",
        marco: "Marco (Marco Bianchi, ingeniero)",
        e: "y",
        carlos: "Carlos",
        prendono: "toman (de «prendere»: «prendere un caffè» = tomarse un café)",
        un: "un",
        "caffè": "café",
        in: "en («in videochiamata» = por videollamada; «in ufficio» = en la oficina; «in albergo» = en el hotel)",
        videochiamata: "videollamada",
        ognuno: "cada uno",
        nel: "en el (in + il)",
        suo: "su (de él)",
        ufficio: "oficina, despacho",
        ciao: "¡hola! (de tú)",
        allora: "bueno, entonces (para empezar a hablar)",
        com: "cómo (come, apostrofado: «com'è» = cómo es)",
        andata: "ido (participio de «andare», en femenino): «com'è andata?» = ¿qué tal ha ido?; «è andata a dormire» = se fue a dormir",
        la: "la",
        settimana: "semana",
        bene: "bien",
        ma: "pero",
        stata: "sido (participio de «essere», en femenino: «è stata» = ha sido)",
        pesante: "pesada, dura",
        ieri: "ayer",
        sono: "auxiliar essere, yo («sono rimasto» = me quedé)",
        rimasto: "quedado (participio irregular de «rimanere», con essere)",
        fino: "hasta («fino alle nove» = hasta las nueve)",
        alle: "a las (a + le)",
        nove: "nueve",
        per: "para",
        finire: "terminar",
        relazione: "informe",
        tu: "tú",
        a: "a; en (con ciudades: «a Torino» = en Turín); «due a uno» = dos a uno",
        torino: "Turín",
        benissimo: "muy bien, estupendamente",
        giulia: "Giulia (Giulia Rossi, jefa de proyecto)",
        io: "yo",
        siamo: "auxiliar essere, nosotros («siamo partiti» = salimos)",
        partiti: "salido de viaje (participio de «partire», masculino plural: Giulia y Marco)",
        "mercoledì": "miércoles",
        mattina: "mañana («mercoledì mattina» = el miércoles por la mañana)",
        tornati: "vuelto (participio de «tornare», masculino plural)",
        sera: "noche («ieri sera» = anoche; «mercoledì sera» = el miércoles por la noche)",
        il: "el",
        cliente: "cliente",
        ha: "ha (auxiliar avere, 3.ª persona)",
        visto: "visto (participio irregular de «vedere»)",
        prototipo: "prototipo (pro-TO-ti-po)",
        detto: "dicho (participio irregular de «dire»)",
        di: "de; «dire di sì» = decir que sí",
        "sì": "sí",
        davvero: "¿de verdad?",
        che: "qué («che bello!» = ¡qué bien!)",
        bello: "bonito, bueno («che bello!» = ¡qué bien!)",
        avete: "habéis (auxiliar avere, vosotros)",
        "già": "ya",
        firmato: "firmado (participio de «firmare»)",
        contratto: "contrato",
        non: "no",
        ancora: "todavía («non ancora» = todavía no)",
        preparato: "preparado (participio de «preparare»)",
        preventivo: "presupuesto (para el cliente)",
        partita: "partido",
        dell: "del (di + l', ante vocal)",
        inter: "el Inter (equipo de fútbol de Milán)",
        albergo: "hotel",
        abbiamo: "hemos (auxiliar avere, nosotros)",
        vinto: "ganado (participio irregular de «vincere»)",
        due: "dos",
        uno: "uno",
        invece: "en cambio",
        dormire: "dormir («andare a dormire» = irse a dormir)",
        presto: "temprano (no «rápido»)",
        insomma: "en resumen, vamos",
        una: "una",
        perfetta: "perfecta",
        quasi: "casi",
        fornitore: "proveedor",
        mandato: "mandado, enviado (participio de «mandare»)",
        i: "los",
        componenti: "componentes, piezas"
      },
      preguntas: [
        {
          q: "¿Por qué ha sido dura la semana de Carlos?",
          ops: ["Ayer se quedó en la oficina hasta las nueve", "Tuvo que ir a Turín", "No pudo ver el partido del Inter"],
          ok: 0
        },
        { q: "¿Qué ha respondido el cliente de Turín?", ops: ["Que sí", "Que no", "Todavía nada"], ok: 0 },
        { q: "¿Qué hizo Giulia el miércoles por la noche?", ops: ["Se fue a dormir temprano", "Vio el partido en el hotel", "Escribió al cliente"], ok: 0 },
        { q: "¿Qué falta todavía?", ops: ["Los componentes del proveedor", "El presupuesto", "El informe de Carlos"], ok: 0 }
      ]
    },
    {
      id: "it4-r2",
      titulo: "Un'email al dottor Ferrari",
      nivel: "A2",
      texto: "Oggetto: Risultati dei test – prima fase\n\nGentile dottor Ferrari,\n\nLe scrivo per fare il punto sul progetto Delta.\n\nCome concordato nella riunione della settimana scorsa, lunedì e martedì l'ingegner Bianchi e io abbiamo fatto i test della prima fase. Ieri ho finito la relazione tecnica e ho messo tutti i dati nella cartella condivisa. In generale è andato tutto bene: abbiamo trovato due piccoli problemi e abbiamo già risolto il primo.\n\nPurtroppo il fornitore non ha ancora mandato i componenti per la seconda fase. Due giorni fa ho scritto all'ufficio acquisti, ma non ho ancora ricevuto risposta.\n\nIn allegato trova la relazione e una tabella con i risultati. Se è d'accordo, possiamo discutere i prossimi passi nella riunione di giovedì.\n\nResto in attesa di un Suo riscontro.\n\nCordiali saluti,\nCarlos\nUfficio tecnico – Madrid",
      traduccion: "Asunto: Resultados de las pruebas – primera fase\n\nEstimado doctor Ferrari:\n\nLe escribo para hacer balance del proyecto Delta.\n\nTal como acordamos en la reunión de la semana pasada, el lunes y el martes el ingeniero Bianchi y yo hicimos las pruebas de la primera fase. Ayer terminé el informe técnico y puse todos los datos en la carpeta compartida. En general, todo ha ido bien: hemos encontrado dos pequeños problemas y ya hemos resuelto el primero.\n\nPor desgracia, el proveedor todavía no ha mandado los componentes para la segunda fase. Hace dos días escribí al departamento de compras, pero todavía no he recibido respuesta.\n\nLe adjunto el informe y una tabla con los resultados. Si está de acuerdo, podemos tratar los próximos pasos en la reunión del jueves.\n\nQuedo a la espera de su respuesta.\n\nUn cordial saludo,\nCarlos\nDepartamento técnico – Madrid",
      notas: "Fórmulas que puedes copiar tal cual: *Gentile dottor Ferrari*, *Le scrivo per…*, *Come concordato…*, *In allegato trova…*, *Resto in attesa di un Suo riscontro* y *Cordiali saluti*. *Le* y *Suo* llevan mayúscula de cortesía. Y un solo tiempo para todo el pasado: *Ieri ho finito*, *Due giorni fa ho scritto*, *abbiamo già risolto*.",
      glosa: {
        oggetto: "asunto (de un correo); también «objeto»",
        risultati: "resultados",
        dei: "de los (di + i)",
        test: "pruebas, tests (invariable: «il test, i test»)",
        prima: "primera",
        fase: "fase",
        gentile: "estimado (en el saludo de un correo; también «amable»)",
        dottor: "doctor («dottore» pierde la -e ante el apellido)",
        ferrari: "Ferrari (el director)",
        le: "le, a usted (pronombre de Lei, con mayúscula de cortesía)",
        scrivo: "escribo (de «scrivere»)",
        per: "para",
        fare: "hacer («fare il punto» = hacer balance)",
        il: "el",
        punto: "punto («fare il punto su…» = hacer balance de…)",
        sul: "sobre el (su + il)",
        progetto: "proyecto",
        delta: "Delta (el proyecto de Carlos: la nueva plataforma para los clientes)",
        come: "como («come concordato» = tal como acordamos)",
        concordato: "acordado (participio de «concordare»)",
        nella: "en la (in + la)",
        riunione: "reunión",
        della: "de la (di + la)",
        settimana: "semana",
        scorsa: "pasada («la settimana scorsa» = la semana pasada)",
        "lunedì": "lunes («lunedì», sin artículo = este lunes)",
        e: "y",
        "martedì": "martes",
        l: "el, la (artículo ante vocal: «l'ingegner Bianchi»)",
        ingegner: "ingeniero («ingegnere» pierde la -e ante el apellido)",
        bianchi: "Bianchi (Marco Bianchi)",
        io: "yo",
        abbiamo: "hemos (auxiliar avere, nosotros)",
        fatto: "hecho (participio irregular de «fare»)",
        i: "los",
        ieri: "ayer",
        ho: "he (auxiliar avere, yo)",
        finito: "terminado (participio de «finire»)",
        la: "la",
        relazione: "informe",
        tecnica: "técnica",
        messo: "puesto (participio irregular de «mettere»)",
        tutti: "todos",
        dati: "datos",
        cartella: "carpeta",
        condivisa: "compartida",
        in: "en («in generale» = en general; «in allegato» = adjunto; «in attesa» = a la espera)",
        generale: "general",
        "è": "es; auxiliar essere («è andato» = ha ido); «se è d'accordo» = si está de acuerdo (usted)",
        andato: "ido (participio de «andare»: «è andato tutto bene» = todo ha ido bien)",
        tutto: "todo",
        bene: "bien",
        trovato: "encontrado (participio de «trovare»)",
        due: "dos",
        piccoli: "pequeños",
        problemi: "problemas (plural de «il problema», masculino)",
        "già": "ya",
        risolto: "resuelto (participio irregular de «risolvere»)",
        primo: "primero",
        purtroppo: "por desgracia, lamentablemente",
        fornitore: "proveedor",
        non: "no",
        ha: "ha (auxiliar avere)",
        ancora: "todavía («non… ancora» = todavía no)",
        mandato: "mandado, enviado (participio de «mandare»)",
        componenti: "componentes, piezas",
        seconda: "segunda",
        giorni: "días (plural de «giorno»)",
        fa: "hace (va detrás: «due giorni fa» = hace dos días)",
        scritto: "escrito (participio irregular de «scrivere»)",
        all: "al (a + l', ante vocal)",
        ufficio: "oficina, departamento («ufficio acquisti» = departamento de compras; «ufficio tecnico» = departamento técnico)",
        acquisti: "compras",
        ma: "pero",
        ricevuto: "recibido (participio de «ricevere»)",
        risposta: "respuesta",
        allegato: "adjunto («in allegato» = adjunto)",
        trova: "encuentra, usted («in allegato trova…» = le adjunto…)",
        una: "una",
        tabella: "tabla",
        con: "con",
        se: "si (condicional)",
        d: "de (di, apostrofado: «d'accordo»)",
        accordo: "acuerdo («essere d'accordo» = estar de acuerdo)",
        possiamo: "podemos (de «potere»)",
        discutere: "tratar, hablar de (dis-CU-te-re; no necesariamente «discutir»)",
        prossimi: "próximos (PROS-si-mi)",
        passi: "pasos («i prossimi passi» = los próximos pasos)",
        di: "de («la riunione di giovedì» = la reunión del jueves)",
        "giovedì": "jueves",
        resto: "quedo (de «restare»: «resto in attesa» = quedo a la espera)",
        attesa: "espera",
        un: "un",
        suo: "su, de usted (con mayúscula de cortesía)",
        riscontro: "respuesta, confirmación (no «reencuentro»)",
        cordiali: "cordiales",
        saluti: "saludos («cordiali saluti» = un cordial saludo)",
        carlos: "Carlos",
        tecnico: "técnico",
        madrid: "Madrid"
      },
      preguntas: [
        {
          q: "¿Para qué escribe Carlos al doctor Ferrari?",
          ops: ["Para hacer balance del proyecto", "Para pedir un día libre", "Para reservar el viaje a Milán"],
          ok: 0
        },
        { q: "¿Dónde ha puesto Carlos todos los datos?", ops: ["En la carpeta compartida", "En el adjunto", "En el asunto del correo"], ok: 0 },
        {
          q: "¿Qué problema queda pendiente?",
          ops: ["El proveedor todavía no ha mandado los componentes", "Las pruebas han ido mal", "Marco no ha terminado el informe"],
          ok: 0
        },
        {
          q: "¿Qué propone Carlos?",
          ops: ["Tratar los próximos pasos en la reunión del jueves", "Llamar al proveedor el lunes", "Repetir las pruebas"],
          ok: 0
        }
      ]
    },
    {
      id: "it4-r3",
      titulo: "Il viaggio a Milano è prenotato",
      nivel: "A2",
      texto: "Oggetto: Viaggio a Milano\n\nCiao Carlos!\n\nBuone notizie: il tuo viaggio a Milano è prenotato. Stamattina ho prenotato il volo: parti da Madrid venerdì 12 alle 7:20 e arrivi a Linate alle 9:25. Ho anche prenotato una camera per otto notti in un albergo in centro, a dieci minuti dall'ufficio.\n\nIl dottor Ferrari ha letto la tua relazione ed è rimasto molto contento. Ha chiesto una breve presentazione dei risultati per martedì mattina. Giulia ha già preparato l'agenda della settimana e ieri ha mandato l'invito a tutti.\n\nE poi una sorpresa: domenica sera c'è il derby!\n\nIl check-in online non è ancora aperto: apre due giorni prima del volo. In allegato trovi le prenotazioni del volo e dell'albergo.\n\nPer qualsiasi domanda, sono qui.\n\nA presto,\nChiara",
      traduccion: "Asunto: Viaje a Milán\n\n¡Hola, Carlos!\n\nBuenas noticias: tu viaje a Milán está reservado. Esta mañana he reservado el vuelo: sales de Madrid el viernes 12 a las 7:20 y llegas a Linate a las 9:25. También he reservado una habitación para ocho noches en un hotel del centro, a diez minutos de la oficina.\n\nEl doctor Ferrari ha leído tu informe y se ha quedado muy contento. Ha pedido una breve presentación de los resultados para el martes por la mañana. Giulia ya ha preparado la agenda de la semana y ayer mandó la convocatoria a todos.\n\nY además, una sorpresa: ¡el domingo por la noche se juega el derbi!\n\nEl check-in online todavía no está abierto: abre dos días antes del vuelo. Te adjunto las reservas del vuelo y del hotel.\n\nPara cualquier pregunta, aquí estoy.\n\nHasta pronto,\nChiara",
      notas: "*Il viaggio è prenotato*, *il check-in non è ancora aperto*: essere + participio describe un estado, y el participio concuerda como un adjetivo (*la camera è prenotata*, *le camere sono prenotate*). Para el futuro cercano basta el presente: *parti venerdì*, *arrivi alle 9:25*, *apre due giorni prima*. Y compara el registro con el correo a Ferrari: aquí *Ciao Carlos!*, *In allegato trovi…*, *A presto*.",
      glosa: {
        oggetto: "asunto (de un correo)",
        viaggio: "viaje",
        a: "a («a Milano» = a Milán; «a dieci minuti» = a diez minutos; «a presto» = hasta pronto)",
        milano: "Milán",
        ciao: "¡hola! (de tú)",
        carlos: "Carlos",
        buone: "buenas",
        notizie: "noticias",
        il: "el",
        tuo: "tu",
        "è": "está (con participio: «è prenotato» = está reservado); auxiliar essere («è rimasto» = se ha quedado); «c'è» = hay",
        prenotato: "reservado (participio de «prenotare»)",
        stamattina: "esta mañana",
        ho: "he (auxiliar avere, yo)",
        volo: "vuelo",
        parti: "sales (de «partire»; presente con valor de futuro)",
        da: "de, desde",
        madrid: "Madrid",
        "venerdì": "el viernes",
        alle: "a las (a + le)",
        e: "y",
        arrivi: "llegas (de «arrivare»)",
        linate: "Linate (el aeropuerto de Milán más cercano al centro)",
        anche: "también",
        una: "una",
        camera: "habitación (CA-me-ra; no «cámara»)",
        per: "para («per otto notti» = para ocho noches; «per martedì» = para el martes)",
        otto: "ocho",
        notti: "noches (plural de «notte»)",
        in: "en («in centro» = en el centro; «in allegato» = adjunto); en «check-in», parte de la palabra inglesa",
        un: "un",
        albergo: "hotel",
        centro: "centro",
        dieci: "diez",
        minuti: "minutos",
        dall: "de la, desde la (da + l', ante vocal): «a dieci minuti dall'ufficio» = a diez minutos de la oficina",
        ufficio: "oficina",
        dottor: "doctor («dottore» pierde la -e ante el apellido)",
        ferrari: "Ferrari (el director)",
        ha: "ha (auxiliar avere)",
        letto: "leído (participio irregular de «leggere»)",
        la: "la",
        tua: "tu",
        relazione: "informe",
        ed: "y (ante vocal: «ed è»)",
        rimasto: "quedado (participio irregular de «rimanere», con essere): «è rimasto contento» = se ha quedado contento",
        molto: "muy",
        contento: "contento",
        chiesto: "pedido, preguntado (participio irregular de «chiedere»)",
        breve: "breve",
        presentazione: "presentación",
        dei: "de los (di + i)",
        risultati: "resultados",
        "martedì": "martes («martedì mattina» = el martes por la mañana)",
        mattina: "mañana",
        giulia: "Giulia (Giulia Rossi, jefa de proyecto)",
        "già": "ya",
        preparato: "preparado (participio de «preparare»)",
        l: "el, la (artículo ante vocal: «l'agenda», «l'invito»)",
        agenda: "agenda (aquí, el programa de reuniones)",
        della: "de la (di + la)",
        settimana: "semana",
        ieri: "ayer",
        mandato: "mandado, enviado (participio de «mandare»)",
        invito: "invitación, convocatoria (del calendario)",
        tutti: "todos («a tutti» = a todos)",
        poi: "luego, además («e poi» = y además)",
        sorpresa: "sorpresa",
        domenica: "domingo (do-ME-ni-ca)",
        sera: "noche, tarde-noche («domenica sera» = el domingo por la noche)",
        c: "«c'è» = hay (ci + è)",
        derby: "derbi: aquí, el Inter-Milan",
        due: "dos",
        dell: "del (di + l', ante vocal)",
        check: "«check-in»: facturación (aquí, por internet)",
        online: "en línea, por internet",
        non: "no",
        ancora: "todavía («non… ancora» = todavía no)",
        aperto: "abierto (participio irregular de «aprire», aquí como adjetivo)",
        apre: "abre (de «aprire»)",
        giorni: "días",
        prima: "antes («prima del volo» = antes del vuelo)",
        del: "del (di + il)",
        allegato: "adjunto («in allegato» = adjunto)",
        trovi: "encuentras («in allegato trovi…» = te adjunto…; de tú)",
        le: "las (artículo femenino plural)",
        prenotazioni: "reservas (plural de «prenotazione»)",
        qualsiasi: "cualquier (qual-SI-a-si)",
        domanda: "pregunta (no «demanda»)",
        sono: "estoy («sono qui» = aquí estoy)",
        qui: "aquí",
        presto: "pronto («a presto» = hasta pronto)",
        chiara: "Chiara (la asistente)"
      },
      preguntas: [
        { q: "¿A qué aeropuerto llega Carlos?", ops: ["A Linate", "A Malpensa", "A Bérgamo"], ok: 0 },
        {
          q: "¿Qué ha pedido el doctor Ferrari?",
          ops: ["Una breve presentación de los resultados", "Un informe nuevo", "Dos entradas para el partido"],
          ok: 0
        },
        {
          q: "¿Por qué Carlos todavía no puede hacer el check-in?",
          ops: ["Porque todavía no está abierto", "Porque Chiara no ha reservado el vuelo", "Porque no tiene la reserva del hotel"],
          ok: 0
        },
        {
          q: "¿Cuál es la sorpresa?",
          ops: ["El domingo por la noche se juega el derbi", "Ferrari va a ir a Madrid", "Giulia ha preparado la agenda"],
          ok: 0
        }
      ]
    }
  ]
});
