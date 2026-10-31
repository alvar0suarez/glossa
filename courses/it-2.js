// Glossa · italiano · semana 2: El presente y la rutina de trabajo
window.CONTENT.it.semanas.push({
  n: 2,
  lecciones: [
    {
      id: "it2-1",
      titulo: "El presente (1): verbos en -are",
      min: 40,
      intro: "Con el presente cuentas qué haces en el trabajo, y en italiano se forma casi como en español. Empiezas por los verbos en *-are*, los más numerosos: *lavorare*, *parlare*, *arrivare*.",
      bloques: [
        {
          t: "p",
          x: "Quita *-are* y añade la terminación de cada persona: *lavor-are* → *lavor-o*. Como en español, el pronombre sujeto (*io*, *tu*, *lui*…) casi nunca hace falta: *Lavoro a Madrid* (trabajo en Madrid)."
        },
        {
          t: "tabla",
          cab: ["Persona", "lavorare", "parlare", "Español"],
          audio: [1, 2],
          filas: [
            ["io", "lavoro", "parlo", "trabajo · hablo"],
            ["tu", "lavori", "parli", "trabajas · hablas"],
            ["lui, lei, Lei", "lavora", "parla", "trabaja · habla"],
            ["noi", "lavoriamo", "parliamo", "trabajamos · hablamos"],
            ["voi", "lavorate", "parlate", "trabajáis · habláis"],
            ["loro", "lavorano", "parlano", "trabajan · hablan"]
          ]
        },
        {
          t: "nota",
          x: "**Lei** (usted) va con la 3.ª persona, igual que en español: *Lei parla inglese, dottor Ferrari?* (¿Habla usted inglés, doctor Ferrari?). Con Giulia y Marco usas *tu*: *Parli inglese, Giulia?*"
        },
        {
          t: "nota",
          x: "Acento: la forma de *loro* se acentúa en la misma sílaba que la de *io*. *PAR-lo* → *PAR-la-no*; *la-VO-ro* → *la-VO-ra-no*; *ar-RI-vo* → *ar-RI-va-no*. No digas *parLAno*: es el error típico del hispanohablante."
        },
        {
          t: "p",
          x: "Ortografía: en *-care* y *-gare* se añade una *h* delante de *i* para conservar el sonido duro: *cercare* → *cerchi*, *cerchiamo*; *pagare* → *paghi*, *paghiamo*. En *-ciare*, *-giare* y en *studiare*, la *i* no se duplica: *cominci*, *mangi*, *studi*."
        },
        {
          t: "nota",
          x: "En italiano no se pone «a» delante de la persona que es complemento directo: *Chiamo Giulia* (llamo a Giulia), *Aspetto Marco* (espero a Marco), *Ascolto il cliente* (escucho al cliente). *Telefonare*, en cambio, sí lleva *a*: *Telefono a Chiara*."
        },
        {
          t: "ej",
          items: [
            ["Lavoro a Madrid, in un'azienda italiana.", "Trabajo en Madrid, en una empresa italiana."],
            ["Giulia e Marco lavorano a Milano.", "Giulia y Marco trabajan en Milán."],
            ["Parli spagnolo?", "¿Hablas español? (a un compañero)"],
            ["Lei parla inglese, dottor Ferrari?", "¿Habla usted inglés, doctor Ferrari?"],
            ["Lavoriamo a un nuovo progetto.", "Trabajamos en un nuevo proyecto."],
            ["Dove abitate?", "¿Dónde vivís?"],
            ["Oggi chiamo il cliente.", "Hoy llamo al cliente."],
            ["Cerchi un file?", "¿Buscas un archivo?"],
            ["Studio italiano ogni giorno.", "Estudio italiano todos los días."]
          ]
        },
        {
          t: "nota",
          x: "Falso amigo de oficina: *guardare* es «mirar» o «ver» (*Guardo lo schermo*, miro la pantalla). «Guardar un archivo» se dice *salvare il file*."
        }
      ],
      vocab: [
        ["lavorare", "trabajar"],
        ["Lavoro a Madrid.", "Trabajo en Madrid."],
        ["parlare", "hablar"],
        ["Lei parla inglese?", "¿Habla usted inglés?"],
        ["Parli spagnolo?", "¿Hablas español?"],
        ["abitare (abito: A-bi-to)", "vivir (en un sitio)"],
        ["Dove abiti?", "¿Dónde vives?"],
        ["arrivare", "llegar"],
        ["chiamare", "llamar"],
        ["Chiamo Giulia.", "Llamo a Giulia. (sin «a»)"],
        ["telefonare a…", "llamar por teléfono a… (acento: telefono: te-LE-fo-no)"],
        ["aspettare", "esperar"],
        ["ascoltare", "escuchar"],
        ["cercare (cerchi)", "buscar"],
        ["pagare (paghi)", "pagar"],
        ["cominciare (cominci)", "empezar"],
        ["mangiare (mangi)", "comer"],
        ["studiare (studi)", "estudiar"],
        ["imparare", "aprender"],
        ["il progetto", "el proyecto"],
        ["Lavoriamo insieme.", "Trabajamos juntos."]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «Noi ___ a Milano.» (*lavorare*)", ops: ["lavoriamo", "lavoramo", "lavorano"], ok: 0 },
        { t: "mc", q: "Le preguntas al doctor Ferrari si habla inglés:", ops: ["Lei parla inglese?", "Tu parli inglese?", "Lei parli inglese?"], ok: 0 },
        { t: "mc", q: "¿Dónde va el acento en *parlano*?", ops: ["PAR-la-no", "par-LA-no", "par-la-NO"], ok: 0 },
        { t: "mc", q: "«Llamo a Giulia» se dice…", ops: ["Chiamo Giulia.", "Chiamo a Giulia.", "Telefono Giulia."], ok: 0 },
        { t: "mc", q: "*Guardo lo schermo* significa…", ops: ["Miro la pantalla.", "Guardo la pantalla.", "Apago la pantalla."], ok: 0 },
        { t: "oir", x: "lavorate", ops: ["lavorate", "lavorano", "lavoriamo"], ok: 0 },
        { t: "orden", es: "Trabajo en Madrid, en una empresa italiana.", x: "Lavoro a Madrid, in un'azienda italiana." },
        { t: "decir", es: "¿Habla usted inglés?", x: "Lei parla inglese?" }
      ]
    },
    {
      id: "it2-2",
      titulo: "El presente (2): -ere, -ire y el tipo -isc-",
      min: 45,
      intro: "Las otras dos conjugaciones solo se distinguen en *voi*: *prendete*, *partite*. Además, muchos verbos en *-ire* meten *-isc-* (*capisco*, *finisco*, *preferisco*), y con *Scusi, non capisco* sobrevives a cualquier reunión.",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "prendere", "partire", "finire"],
          audio: [1, 2, 3],
          filas: [
            ["io", "prendo", "parto", "finisco"],
            ["tu", "prendi", "parti", "finisci"],
            ["lui, lei, Lei", "prende", "parte", "finisce"],
            ["noi", "prendiamo", "partiamo", "finiamo"],
            ["voi", "prendete", "partite", "finite"],
            ["loro", "prendono", "partono", "finiscono"]
          ]
        },
        {
          t: "p",
          x: "*prendere* (coger, tomar) y *partire* (salir de viaje, irse) solo se diferencian en *voi*: *-ete* / *-ite*. Y *noi* acaba en **-iamo** en las tres conjugaciones: *lavoriamo*, *prendiamo*, *partiamo*."
        },
        {
          t: "p",
          x: "**El tipo -isc-.** Muchos verbos en *-ire*, como *finire* (terminar), meten *-isc-* en *io*, *tu*, *lui/lei* y *loro*, pero no en *noi* ni en *voi*: *finisco*, pero *finiamo*. Delante de *o* suena «sk» (*finisco*, *finiscono*); delante de *i* y de *e*, como la *sh* inglesa de *show* (*finisci*, *finisce*)."
        },
        {
          t: "tabla",
          cab: ["Con -isc-", "Español", "Sin -isc-", "Español"],
          audio: [0, 2],
          filas: [
            ["capisco", "entiendo (capire)", "parto", "salgo, me voy (partire)"],
            ["preferisco", "prefiero (preferire)", "dormo", "duermo (dormire)"],
            ["spedisco", "envío (spedire)", "apro", "abro (aprire)"],
            ["gestisco", "gestiono (gestire)", "sento", "oigo; siento (sentire)"],
            ["pulisco", "limpio (pulire)", "offro", "invito; ofrezco (offrire)"],
            ["suggerisco", "sugiero (suggerire)", "seguo", "sigo (seguire)"]
          ]
        },
        {
          t: "nota",
          x: "La mayoría de los verbos en *-ire* lleva *-isc-*; los que no lo llevan son pocos y muy frecuentes, como los de la derecha. No hay regla para distinguirlos: apréndelos con la forma de *io*, como en el vocabulario: *capire (capisco)*, *partire (parto)*."
        },
        {
          t: "nota",
          x: "Acento: muchos verbos en *-ere* lo llevan en la raíz, no en la *e*: *PREN-de-re*, *SCRI-ve-re*, *LEG-ge-re*, *ri-SPON-de-re* (pero *ve-DE-re*). En *loro* sigue en la raíz: *PREN-do-no*, *PAR-to-no*, *fi-NI-sco-no*. Y la *g* cambia con la vocal: *leggo* suena con la g de «gato»; *leggi* y *legge*, como la *j* inglesa de *jeans*."
        },
        {
          t: "ej",
          items: [
            ["Prendo la metro ogni mattina.", "Cojo el metro cada mañana."],
            ["Prendiamo un caffè?", "¿Nos tomamos un café?"],
            ["Leggo le email e rispondo subito.", "Leo los correos y contesto enseguida."],
            ["Scrivo un'email a Giulia.", "Le escribo un correo a Giulia."],
            ["Quando parti per Milano?", "¿Cuándo te vas a Milán?"],
            ["Scusa, non capisco.", "Perdona, no entiendo. (a un compañero)"],
            ["Scusi, non capisco.", "Perdone, no entiendo. (de usted)"],
            ["Marco capisce un po' di spagnolo.", "Marco entiende un poco de español."],
            ["Preferisce un caffè o un tè, dottor Ferrari?", "¿Prefiere usted un café o un té, doctor Ferrari?"],
            ["Giulia gestisce il progetto.", "Giulia lleva el proyecto."],
            ["Offro io!", "¡Invito yo!"]
          ]
        }
      ],
      vocab: [
        ["prendere", "coger, tomar (acento: PREN-de-re)"],
        ["Prendo la metro.", "Cojo el metro."],
        ["Prendiamo un caffè?", "¿Nos tomamos un café?"],
        ["scrivere", "escribir (acento: SCRI-ve-re)"],
        ["leggere", "leer (acento: LEG-ge-re)"],
        ["chiudere", "cerrar (acento: CHIU-de-re)"],
        ["vivere", "vivir (acento: VI-ve-re)"],
        ["ricevere", "recibir (acento: ri-CE-ve-re)"],
        ["vedere", "ver"],
        ["partire", "salir (de viaje), irse"],
        ["dormire", "dormir"],
        ["aprire", "abrir"],
        ["sentire", "oír; sentir"],
        ["offrire", "invitar (a algo); ofrecer"],
        ["Offro io!", "¡Invito yo!"],
        ["finire (finisco)", "terminar, acabar"],
        ["capire (capisco)", "entender"],
        ["Scusa, non capisco.", "Perdona, no entiendo."],
        ["Scusi, non capisco.", "Perdone, no entiendo. (de usted)"],
        ["preferire (preferisco)", "preferir"],
        ["spedire (spedisco)", "enviar (por correo o mensajería)"],
        ["gestire (gestisco)", "gestionar, llevar (un proyecto)"],
        ["un po' di spagnolo", "un poco de español"]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «Voi ___ la metro ogni mattina?» (*prendere*)", ops: ["prendete", "prendite", "prendiate"], ok: 0 },
        { t: "mc", q: "¿Cuál es correcta?", ops: ["Noi capiamo.", "Noi capiscamo.", "Noi capisciamo."], ok: 0 },
        { t: "mc", q: "*Dormire* no lleva -isc-. Completa: «Io ___ sette ore.»", ops: ["dormo", "dormisco", "dormio"], ok: 0 },
        {
          t: "mc",
          q: "Le ofreces algo al doctor Ferrari: «¿Prefiere usted un café o un té?»",
          ops: ["Preferisce un caffè o un tè?", "Preferisci un caffè o un tè?", "Preferite un caffè o un tè?"],
          ok: 0
        },
        { t: "mc", q: "*Subito* significa…", ops: ["enseguida", "de repente", "subido"], ok: 0 },
        { t: "oir", x: "finisci", ops: ["finisci", "finisco", "finisce"], ok: 0 },
        { t: "orden", es: "Leo los correos y contesto enseguida.", x: "Leggo le email e rispondo subito." },
        { t: "decir", es: "Perdone, no entiendo.", x: "Scusi, non capisco." }
      ]
    },
    {
      id: "it2-3",
      titulo: "¿Qué hora es? Che ore sono?",
      min: 40,
      intro: "Reuniones, videollamadas, trenes: en el trabajo das y pides horas todo el día. Se dice casi como en español (*Sono le tre*, son las tres), pero «a las» se funde en una sola palabra: *alle nove*.",
      bloques: [
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["Che ore sono?", "¿Qué hora es?"],
            ["Che ora è?", "¿Qué hora es? (también se dice)"],
            ["Sono le tre.", "Son las tres."],
            ["È l'una.", "Es la una."],
            ["È mezzogiorno.", "Son las doce del mediodía."],
            ["È mezzanotte.", "Son las doce de la noche."],
            ["Sono le tre e cinque.", "Son las tres y cinco."],
            ["Sono le tre e un quarto.", "Son las tres y cuarto."],
            ["Sono le tre e mezza.", "Son las tres y media."],
            ["Sono le quattro meno un quarto.", "Son las cuatro menos cuarto."],
            ["Sono le quattro meno dieci.", "Son las cuatro menos diez."]
          ]
        },
        {
          t: "nota",
          x: "Como en español, las horas van en femenino plural (*le tre*: se sobrentiende *ore*), menos *l'una*, *mezzogiorno* y *mezzanotte*, que van en singular: *È l'una*. Fíjate en «y cuarto»: *e un quarto*, con *un*. «Y media» es *e mezza* (también *e mezzo*)."
        },
        {
          t: "p",
          x: "Para decir **a qué hora** pasa algo, la *a* se funde con el artículo: *a + le* = **alle**, *a + l'* = **all'**. *La riunione è alle dieci* (la reunión es a las diez); *Pranzo all'una* (como a la una). Con *mezzogiorno* y *mezzanotte* no hay artículo: *a mezzogiorno*."
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["A che ora?", "¿A qué hora?"],
            ["alle nove", "a las nueve"],
            ["all'una", "a la una"],
            ["a mezzogiorno", "a mediodía"],
            ["alle nove in punto", "a las nueve en punto"],
            ["verso le dieci", "hacia las diez, sobre las diez"],
            ["dalle nove alle sei", "de nueve a seis"],
            ["fino alle cinque", "hasta las cinco"],
            ["alle otto di mattina", "a las ocho de la mañana"],
            ["alle tre del pomeriggio", "a las tres de la tarde"],
            ["alle nove di sera", "a las nueve de la noche"]
          ]
        },
        {
          t: "nota",
          x: "En el trabajo (correos, agendas, trenes) se usa mucho el reloj de 24 horas, y se lee con los minutos: *alle 15:30* = *alle quindici e trenta*; *alle 14:45* = *alle quattordici e quarantacinque*. Hablando, en cambio, oirás *alle tre e mezza*."
        },
        {
          t: "nota",
          x: "Nuestra «tarde» se reparte en dos: *il pomeriggio* (de la comida hasta las cinco o las seis) y *la sera* (desde entonces hasta la noche). Y *tardi* no es «la tarde», sino el adverbio: *È tardi* (es tarde). Su contrario es *presto* (temprano)."
        },
        {
          t: "ej",
          items: [
            ["Scusi, che ore sono?", "Perdone, ¿qué hora es?"],
            ["Sono le dieci e venti.", "Son las diez y veinte."],
            ["A che ora è la riunione?", "¿A qué hora es la reunión?"],
            ["È alle undici e mezza.", "Es a las once y media."],
            ["Lavoro dalle nove alle sei.", "Trabajo de nueve a seis."],
            ["Il treno parte alle sette e quaranta.", "El tren sale a las siete y cuarenta."],
            ["Sono in riunione fino all'una.", "Estoy en una reunión hasta la una."],
            ["È tardi, sono già le otto!", "¡Es tarde, ya son las ocho!"],
            ["Scusate il ritardo!", "¡Perdonad el retraso!"]
          ]
        }
      ],
      vocab: [
        ["Che ore sono?", "¿Qué hora es?"],
        ["Che ora è?", "¿Qué hora es? (variante)"],
        ["Sono le tre.", "Son las tres."],
        ["È l'una.", "Es la una."],
        ["È mezzogiorno.", "Son las doce del mediodía."],
        ["mezzanotte", "medianoche"],
        ["e un quarto", "y cuarto"],
        ["e mezza", "y media"],
        ["meno un quarto", "menos cuarto"],
        ["A che ora?", "¿A qué hora?"],
        ["alle nove", "a las nueve"],
        ["all'una", "a la una"],
        ["in punto", "en punto"],
        ["verso le dieci", "hacia las diez, sobre las diez"],
        ["dalle nove alle sei", "de nueve a seis"],
        ["fino alle cinque", "hasta las cinco"],
        ["l'ora (le ore)", "la hora"],
        ["mezz'ora", "media hora"],
        ["la mattina", "la mañana"],
        ["il pomeriggio", "la tarde (hasta las cinco o las seis)"],
        ["la sera", "la tarde-noche (desde las seis, más o menos)"],
        ["tardi", "tarde (adverbio): «È tardi»"],
        ["presto", "temprano; pronto"],
        ["in ritardo", "con retraso, tarde (a una cita)"],
        ["Scusate il ritardo!", "¡Perdonad el retraso!"]
      ],
      ejercicios: [
        { t: "mc", q: "Son las 13:00. Dices:", ops: ["È l'una.", "Sono le una.", "È la una."], ok: 0 },
        { t: "mc", q: "«A las nueve» se dice…", ops: ["alle nove", "a le nove", "al nove"], ok: 0 },
        { t: "mc", q: "*Sono le cinque meno un quarto*. ¿Qué hora es?", ops: ["4:45", "5:15", "5:45"], ok: 0 },
        { t: "mc", q: "*Arrivo tardi* significa…", ops: ["Llego tarde.", "Llego por la tarde.", "Llego pronto."], ok: 0 },
        { t: "mc", q: "En un correo lees *alle 15:30*. Se lee…", ops: ["alle quindici e trenta", "alle cinque e mezza", "alle tre e un quarto"], ok: 0 },
        { t: "oir", x: "Sono le sette.", ops: ["Sono le sette.", "Sono le sei.", "Sono le sedici."], ok: 0 },
        { t: "orden", es: "Trabajo de nueve a seis.", x: "Lavoro dalle nove alle sei." },
        { t: "decir", es: "¿A qué hora es la reunión?", x: "A che ora è la riunione?" }
      ]
    },
    {
      id: "it2-4",
      titulo: "Los días y tu jornada de trabajo",
      min: 40,
      intro: "Hoy juntas verbos y horas para contar tu jornada: *Mi sveglio alle sette, arrivo in ufficio alle nove…* Es la charla típica de la pausa del café, y la necesitas para cuadrar horarios con Milán.",
      bloques: [
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["lunedì", "lunes"],
            ["martedì", "martes"],
            ["mercoledì", "miércoles"],
            ["giovedì", "jueves"],
            ["venerdì", "viernes"],
            ["sabato", "sábado"],
            ["domenica", "domingo"],
            ["il fine settimana", "el fin de semana"]
          ]
        },
        {
          t: "nota",
          x: "Los días van en minúscula, y de lunes a viernes llevan el acento escrito en la última sílaba; *SA-ba-to* y *do-ME-ni-ca* se acentúan en la antepenúltima. Todos son masculinos, menos *la domenica*."
        },
        {
          t: "p",
          x: "Para un día concreto, sin artículo: *Lunedì ho una riunione* (el lunes tengo una reunión). Con artículo, cada semana: *Il lunedì lavoro da casa* (los lunes trabajo desde casa). Es decir: el artículo de «el lunes» aquí sobra, y *il lunedì* equivale a «los lunes»."
        },
        {
          t: "p",
          x: "Algunos verbos de la rutina son reflexivos, como en español: *svegliarsi* (despertarse), *alzarsi* (levantarse). El pronombre va delante del verbo: *mi*, *ti*, *si*, *ci*, *vi*, *si*."
        },
        {
          t: "tabla",
          cab: ["Persona", "svegliarsi", "alzarsi"],
          audio: [1, 2],
          filas: [
            ["io", "mi sveglio", "mi alzo"],
            ["tu", "ti svegli", "ti alzi"],
            ["lui, lei, Lei", "si sveglia", "si alza"],
            ["noi", "ci svegliamo", "ci alziamo"],
            ["voi", "vi svegliate", "vi alzate"],
            ["loro", "si svegliano", "si alzano"]
          ]
        },
        {
          t: "tabla",
          cab: ["Tu jornada", "Español"],
          audio: [0],
          filas: [
            ["Mi sveglio alle sette.", "Me despierto a las siete."],
            ["Mi alzo e prendo un caffè.", "Me levanto y me tomo un café."],
            ["Prendo la metro alle otto e un quarto.", "Cojo el metro a las ocho y cuarto."],
            ["Arrivo in ufficio alle nove meno dieci.", "Llego a la oficina a las nueve menos diez."],
            ["Comincio a lavorare alle nove.", "Empiezo a trabajar a las nueve."],
            ["Pranzo alle due.", "Como a las dos."],
            ["Finisco di lavorare alle sei.", "Termino de trabajar a las seis."],
            ["Torno a casa e studio italiano.", "Vuelvo a casa y estudio italiano."],
            ["Ceno alle nove e mezza.", "Ceno a las nueve y media."]
          ]
        },
        {
          t: "nota",
          x: "*cominciare a* + infinitivo (empezar a), *finire di* + infinitivo (terminar de). *Pranzare* es «comer» a mediodía, y *cenare*, «cenar». En Milán se come hacia la una y se cena hacia las ocho: a tus compañeros les harán gracia tus horarios españoles."
        },
        {
          t: "p",
          x: "Para hablar de costumbres: *sempre* (siempre), *di solito* (normalmente), *spesso* (a menudo), *qualche volta* (a veces) y *non… mai* (nunca), con *non* delante del verbo y *mai* detrás: *Non lavoro mai il sabato*. Para ordenar lo que haces: *prima* (primero), *poi* (luego), *dopo* (después)."
        },
        {
          t: "ej",
          items: [
            ["Lunedì ho una riunione con Giulia.", "El lunes tengo una reunión con Giulia."],
            ["Il venerdì lavoro da casa.", "Los viernes trabajo desde casa."],
            ["Di solito arrivo in ufficio alle nove.", "Normalmente llego a la oficina a las nueve."],
            ["Non lavoro mai il sabato.", "Nunca trabajo los sábados."],
            ["Prima leggo le email, poi chiamo i clienti.", "Primero leo los correos y luego llamo a los clientes."],
            ["Ti svegli presto?", "¿Te despiertas temprano?"],
            ["A che ora pranzate a Milano?", "¿A qué hora coméis en Milán?"],
            ["Di solito pranziamo all'una.", "Normalmente comemos a la una."]
          ]
        }
      ],
      vocab: [
        ["lunedì", "lunes"],
        ["martedì", "martes"],
        ["mercoledì", "miércoles"],
        ["giovedì", "jueves"],
        ["venerdì", "viernes"],
        ["sabato", "sábado (acento: SA-ba-to)"],
        ["domenica", "domingo (acento: do-ME-ni-ca)"],
        ["il fine settimana", "el fin de semana"],
        ["Lunedì ho una riunione.", "El lunes tengo una reunión."],
        ["Il lunedì lavoro da casa.", "Los lunes trabajo desde casa."],
        ["oggi", "hoy"],
        ["domani mattina", "mañana por la mañana"],
        ["la settimana", "la semana"],
        ["mi sveglio", "me despierto (svegliarsi)"],
        ["mi alzo", "me levanto (alzarsi)"],
        ["cominciare a lavorare", "empezar a trabajar"],
        ["finire di lavorare", "terminar de trabajar"],
        ["pranzare", "comer (a mediodía)"],
        ["cenare", "cenar"],
        ["tornare a casa", "volver a casa"],
        ["di solito", "normalmente (acento: SO-li-to)"],
        ["spesso", "a menudo"],
        ["qualche volta", "a veces"],
        ["non… mai", "nunca"],
        ["prima… poi…", "primero… luego…"]
      ],
      ejercicios: [
        { t: "mc", q: "«Los viernes trabajo desde casa»:", ops: ["Il venerdì lavoro da casa.", "Venerdì lavoro da casa.", "I venerdì lavoro a casa."], ok: 0 },
        { t: "mc", q: "¿Qué día es femenino?", ops: ["domenica", "sabato", "lunedì"], ok: 0 },
        { t: "mc", q: "Completa: «Non lavoro ___ il sabato.»", ops: ["mai", "sempre", "spesso"], ok: 0 },
        { t: "mc", q: "*Ci svegliamo presto* significa…", ops: ["Nos despertamos temprano.", "Os despertáis temprano.", "Se despiertan pronto."], ok: 0 },
        { t: "oir", x: "mercoledì", ops: ["mercoledì", "martedì", "venerdì"], ok: 0 },
        { t: "orden", es: "Primero leo los correos, luego llamo a los clientes.", x: "Prima leggo le email, poi chiamo i clienti." },
        { t: "decir", es: "Normalmente llego a las nueve.", x: "Di solito arrivo alle nove." },
        { t: "decir", es: "Me despierto a las siete.", x: "Mi sveglio alle sette." }
      ]
    },
    {
      id: "it2-5",
      titulo: "Al, nel, sul: las preposiciones articuladas",
      min: 45,
      intro: "En español solo se funden *a + el* (al) y *de + el* (del). En italiano se funden cinco preposiciones con todos los artículos: *alle nove*, *nell'ufficio*, *sulla scrivania*. Aparecen en casi cada frase, así que hoy les pierdes el miedo.",
      bloques: [
        {
          t: "p",
          x: "Las cinco que se funden son *a*, *da* (de, desde; en casa de), *di* (de), *in* (en) y *su* (sobre). *Di* pasa a *de-* e *in* pasa a *ne-*: *di + il* = *del*, *in + la* = *nella*."
        },
        {
          t: "tabla",
          cab: ["", "+ il", "+ lo", "+ l'", "+ la"],
          audio: [1, 2, 3, 4],
          filas: [
            ["a", "al", "allo", "all'", "alla"],
            ["da", "dal", "dallo", "dall'", "dalla"],
            ["di", "del", "dello", "dell'", "della"],
            ["in", "nel", "nello", "nell'", "nella"],
            ["su", "sul", "sullo", "sull'", "sulla"]
          ]
        },
        {
          t: "tabla",
          cab: ["", "+ i", "+ gli", "+ le"],
          audio: [1, 2, 3],
          filas: [
            ["a", "ai", "agli", "alle"],
            ["da", "dai", "dagli", "dalle"],
            ["di", "dei", "degli", "delle"],
            ["in", "nei", "negli", "nelle"],
            ["su", "sui", "sugli", "sulle"]
          ]
        },
        {
          t: "nota",
          x: "Truco: si el artículo empieza por *l* (*lo*, *l'*, *la*, *le*), la *l* se dobla: *allo*, *dall'*, *nella*, *sulle*. Si es *il*, queda una sola *l*: *al*, *dal*, *del*, *nel*, *sul*. Y pronuncia esa doble *l* más larga: *alla* no suena como *ala*."
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["al bar", "al bar; en el bar"],
            ["il file del progetto", "el archivo del proyecto"],
            ["sullo schermo", "en la pantalla"],
            ["nell'ufficio di Milano", "en la oficina de Milán"],
            ["alla riunione", "a la reunión; en la reunión"],
            ["sulla scrivania", "en la mesa, sobre el escritorio"],
            ["ai clienti", "a los clientes"],
            ["negli uffici", "en las oficinas"],
            ["agli ingegneri", "a los ingenieros"],
            ["dalle nove alle sei", "de nueve a seis"],
            ["l'ufficio delle risorse umane", "la oficina de recursos humanos"]
          ]
        },
        {
          t: "nota",
          x: "**Sin artículo.** Con muchos lugares de todos los días se usa *in* o *a* a secas: *in ufficio*, *in sala riunioni*, *in mensa*, *in centro*, *a casa*. Pero si concretas, vuelve el artículo: *in ufficio*, pero *nell'ufficio di Milano*."
        },
        {
          t: "nota",
          x: "*Con* y *per* no se funden: *con il direttore*, *per i clienti*. Y *da* + persona significa «en casa de» o «en la oficina de», como el *chez* francés: *Oggi Marco è dal cliente* (hoy Marco está en la oficina del cliente)."
        },
        {
          t: "ej",
          items: [
            ["La riunione è alle dieci nella sala grande.", "La reunión es a las diez en la sala grande."],
            ["Il portatile è sulla scrivania.", "El portátil está en la mesa."],
            ["Le chiavi sono nel cassetto.", "Las llaves están en el cajón."],
            ["Il numero del cliente è nell'agenda.", "El número del cliente está en la agenda."],
            ["Rispondo alle email dei clienti.", "Contesto los correos de los clientes."],
            ["Il file è nella cartella del progetto.", "El archivo está en la carpeta del proyecto."],
            ["Oggi Marco è dal cliente.", "Hoy Marco está en la oficina del cliente."],
            ["Lavoro dal lunedì al venerdì.", "Trabajo de lunes a viernes."],
            ["Parlo con il direttore alle tre.", "Hablo con el director a las tres."]
          ]
        }
      ],
      vocab: [
        ["al bar", "al bar, a la cafetería; en el bar"],
        ["alla riunione", "a la reunión; en la reunión"],
        ["ai clienti", "a los clientes"],
        ["agli ingegneri", "a los ingenieros"],
        ["dal lunedì al venerdì", "de lunes a viernes"],
        ["Oggi Marco è dal cliente.", "Hoy Marco está en la oficina del cliente."],
        ["il file del progetto", "el archivo del proyecto"],
        ["l'ufficio del direttore", "el despacho del director"],
        ["le risorse umane", "recursos humanos"],
        ["nel cassetto", "en el cajón"],
        ["nell'agenda", "en la agenda"],
        ["negli uffici", "en las oficinas"],
        ["sulla scrivania", "en la mesa, sobre el escritorio"],
        ["sullo schermo", "en la pantalla"],
        ["sul sito", "en la web"],
        ["in ufficio", "en la oficina (sin artículo)"],
        ["in sala riunioni", "en la sala de reuniones"],
        ["a casa", "en casa; a casa"],
        ["con il direttore", "con el director («con» no se funde)"],
        ["la cartella", "la carpeta"],
        ["la chiave (le chiavi)", "la llave"]
      ],
      ejercicios: [
        { t: "mc", q: "*in* + *il* =", ops: ["nel", "inil", "nil"], ok: 0 },
        { t: "mc", q: "Completa: «Il documento è ___ scrivania.» (sobre la)", ops: ["sulla", "sula", "su la"], ok: 0 },
        { t: "mc", q: "Completa: «Rispondo ___ email dei clienti.»", ops: ["alle", "ai", "agli"], ok: 0 },
        { t: "mc", q: "Le escribes a Giulia que ya estás en la oficina:", ops: ["Sono in ufficio.", "Sono al ufficio.", "Sono nel ufficio."], ok: 0 },
        {
          t: "mc",
          q: "*Oggi Marco è dal cliente* significa…",
          ops: ["Hoy Marco está en la oficina del cliente.", "Hoy Marco es el cliente.", "Hoy Marco llama al cliente."],
          ok: 0
        },
        { t: "oir", x: "negli uffici", ops: ["negli uffici", "nell'ufficio", "agli uffici"], ok: 0 },
        { t: "orden", es: "Las llaves están en el cajón.", x: "Le chiavi sono nel cassetto." },
        { t: "decir", es: "Trabajo de lunes a viernes.", x: "Lavoro dal lunedì al venerdì." }
      ]
    },
    {
      id: "it2-6",
      titulo: "La oficina: c'è y ci sono",
      min: 40,
      intro: "*C'è* y *ci sono* son el «hay» italiano, y *C'è Giulia?* (¿está Giulia?) es lo primero que dirás al llamar a Milán. Hoy aprendes también a describir una oficina.",
      bloques: [
        {
          t: "p",
          x: "El «hay» italiano tiene singular y plural: **c'è** + singular, **ci sono** + plural. *C'è una stampante al primo piano* (hay una impresora en la primera planta). *Ci sono tre sale riunioni* (hay tres salas de reuniones). La negación va delante: *Non c'è tempo* (no hay tiempo)."
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["C'è un problema.", "Hay un problema."],
            ["Non c'è problema.", "No hay problema."],
            ["Ci sono domande?", "¿Hay preguntas?"],
            ["C'è Giulia?", "¿Está Giulia?"],
            ["No, non c'è. È in riunione.", "No, no está. Está en una reunión."],
            ["Oggi in ufficio non c'è nessuno.", "Hoy no hay nadie en la oficina."],
            ["Che c'è?", "¿Qué pasa?"]
          ]
        },
        {
          t: "nota",
          x: "*C'è…?* también pregunta si alguien **está**: es la frase de las llamadas. *Buongiorno, sono Carlos, dell'ufficio di Madrid. C'è Giulia, per favore?* Y si no está, te dirán: *Mi dispiace, non c'è* (lo siento, no está)."
        },
        {
          t: "nota",
          x: "¿*C'è* o *è*? Para decir **dónde está** algo concreto, *è*: *Il bagno è in fondo al corridoio*. Para **presentar lo que hay** en un sitio, *c'è*: *In via Dante c'è un bar*. A diferencia de «hay», *c'è* admite *il* y *la* cuando enumeras lo que hay en un lugar: *Al piano terra c'è la reception* (en la planta baja está la recepción)."
        },
        {
          t: "tabla",
          cab: ["Singular", "Plural", "Español"],
          audio: [0, 1],
          filas: [
            ["l'ufficio", "gli uffici", "la oficina; el despacho"],
            ["la scrivania", "le scrivanie", "la mesa de trabajo"],
            ["la sedia", "le sedie", "la silla"],
            ["lo schermo", "gli schermi", "la pantalla"],
            ["il portatile", "i portatili", "el portátil"],
            ["la stampante", "le stampanti", "la impresora"],
            ["il computer", "i computer", "el ordenador"],
            ["la sala riunioni", "le sale riunioni", "la sala de reuniones"],
            ["il collega", "i colleghi", "el compañero de trabajo"],
            ["la collega", "le colleghe", "la compañera de trabajo"],
            ["il piano", "i piani", "la planta, el piso"]
          ]
        },
        {
          t: "nota",
          x: "Plurales: *-o* → *-i*; *-a* → *-e*; *-e* → *-i*. Las palabras extranjeras y las que acaban en vocal con acento no cambian: *i computer*, *i caffè*. *Il collega* acaba en *-a*, pero es masculino: *i colleghi*. Y delante de *s* + consonante o de *z*, el artículo es *lo* y en plural *gli* (*lo schermo*, *gli schermi*); delante de vocal, *l'* y *gli* (*l'ufficio*, *gli uffici*)."
        },
        {
          t: "p",
          x: "Para situar cosas: *accanto a* (al lado de), *davanti a* (delante de), *dietro* (detrás), *in fondo a* (al fondo de), *a destra* (a la derecha), *a sinistra* (a la izquierda). Con artículo, se funden: *accanto alla finestra*, *in fondo al corridoio*."
        },
        {
          t: "ej",
          items: [
            ["Nell'ufficio di Milano ci sono venti scrivanie.", "En la oficina de Milán hay veinte mesas."],
            ["Al piano terra c'è la reception.", "En la planta baja está la recepción."],
            ["Scusa, dov'è la sala riunioni?", "Perdona, ¿dónde está la sala de reuniones?"],
            ["È al primo piano, a destra.", "Está en la primera planta, a la derecha."],
            ["Il bagno è in fondo al corridoio.", "El baño está al fondo del pasillo."],
            ["La macchinetta del caffè è accanto alla finestra.", "La máquina de café está al lado de la ventana."],
            ["Pronto? C'è Giulia, per favore?", "¿Diga? ¿Está Giulia, por favor?"]
          ]
        },
        {
          t: "nota",
          x: "Falsos amigos de oficina: *la domanda* es «la pregunta» (*Ci sono domande?*); *il negozio*, «la tienda» (los negocios son *gli affari*); *la cartella*, «la carpeta»; *il palazzo*, cualquier edificio, no solo un palacio."
        }
      ],
      vocab: [
        ["c'è", "hay (+ singular); está (alguien)"],
        ["ci sono", "hay (+ plural)"],
        ["C'è Giulia?", "¿Está Giulia?"],
        ["Non c'è problema.", "No hay problema."],
        ["Ci sono domande?", "¿Hay preguntas?"],
        ["la domanda", "la pregunta (¡no «la demanda»!)"],
        ["Che c'è?", "¿Qué pasa?"],
        ["Dov'è la sala riunioni?", "¿Dónde está la sala de reuniones?"],
        ["non… nessuno", "nadie"],
        ["l'ufficio (gli uffici)", "la oficina; el despacho"],
        ["la sedia", "la silla"],
        ["lo schermo (gli schermi)", "la pantalla"],
        ["il portatile", "el portátil (acento: por-TA-ti-le)"],
        ["la stampante", "la impresora"],
        ["il collega (i colleghi)", "el compañero de trabajo"],
        ["la collega (le colleghe)", "la compañera de trabajo"],
        ["il piano", "la planta, el piso"],
        ["il piano terra", "la planta baja"],
        ["primo, secondo, terzo", "primero, segundo, tercero"],
        ["la macchinetta del caffè", "la máquina de café"],
        ["il bagno", "el baño, el aseo"],
        ["accanto a", "al lado de"],
        ["in fondo al corridoio", "al fondo del pasillo"],
        ["a destra / a sinistra", "a la derecha / a la izquierda"]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «___ tre sale riunioni.»", ops: ["Ci sono", "C'è", "Sono"], ok: 0 },
        { t: "mc", q: "Llamas a Milán y preguntas si está Marco:", ops: ["C'è Marco?", "È Marco?", "Ci sono Marco?"], ok: 0 },
        { t: "mc", q: "Completa: «Il bagno ___ in fondo al corridoio.»", ops: ["è", "c'è", "ci sono"], ok: 0 },
        { t: "mc", q: "El plural de *lo schermo* es…", ops: ["gli schermi", "i schermi", "le schermi"], ok: 0 },
        { t: "mc", q: "El plural de *il collega* es…", ops: ["i colleghi", "i collegi", "le colleghe"], ok: 0 },
        { t: "oir", x: "c'è", ops: ["c'è", "che", "è"], ok: 0 },
        { t: "orden", es: "En la oficina de Milán hay veinte mesas.", x: "Nell'ufficio di Milano ci sono venti scrivanie." },
        { t: "decir", es: "¿Está Giulia, por favor?", x: "C'è Giulia, per favore?" }
      ]
    },
    {
      id: "it2-7",
      titulo: "Repaso: horarios de Madrid y de Milán",
      min: 35,
      intro: "Repaso de la semana con una videollamada entre Carlos y Marco al final del día. Léela en voz alta haciendo de Carlos y fíjate en los verbos, las horas y las preposiciones.",
      bloques: [
        {
          t: "ej",
          items: [
            ["Ciao Carlos! Sei ancora in ufficio?", "Marco: ¡Hola, Carlos! ¿Sigues en la oficina?"],
            ["Sì, a Madrid finisco alle sei e mezza. E tu?", "Carlos: Sí, en Madrid termino a las seis y media. ¿Y tú?"],
            ["Io comincio alle otto e mezza e finisco alle cinque e mezza.", "Marco: Yo empiezo a las ocho y media y termino a las cinco y media."],
            ["Che presto! E a che ora pranzate?", "Carlos: ¡Qué pronto! ¿Y a qué hora coméis?"],
            ["All'una, di solito in mensa. Voi pranzate alle due, vero?", "Marco: A la una, normalmente en el comedor. Vosotros coméis a las dos, ¿verdad?"],
            ["Sì, e ceniamo alle nove e mezza!", "Carlos: Sí, ¡y cenamos a las nueve y media!"],
            ["Alle nove e mezza? Io guardo la partita: stasera gioca l'Inter!", "Marco: ¿A las nueve y media? Yo estaré viendo el partido: ¡esta noche juega el Inter!"],
            ["Ah, certo! Senti, parliamo del progetto giovedì?", "Carlos: ¡Ah, claro! Oye, ¿hablamos del proyecto el jueves?"],
            ["D'accordo. A che ora?", "Marco: De acuerdo. ¿A qué hora?"],
            ["Alle tre?", "Carlos: ¿A las tres?"],
            ["No, alle tre c'è la riunione con il dottor Ferrari. Alle quattro?", "Marco: No, a las tres tenemos la reunión con el doctor Ferrari. ¿A las cuatro?"],
            ["Perfetto. Chiamo anche Giulia.", "Carlos: Perfecto. Llamo también a Giulia."],
            ["Ottimo! Allora a giovedì. Forza Inter!", "Marco: ¡Estupendo! Entonces, hasta el jueves. ¡Vamos, Inter!"],
            ["Ciao Marco, buona serata!", "Carlos: ¡Adiós, Marco, que pases buena noche!"]
          ]
        },
        {
          t: "nota",
          x: "Fíjate en *alle tre c'è la riunione*: *c'è* con artículo, porque Marco presenta lo que hay en su agenda. *In mensa*, como *in ufficio*, va sin artículo. Y Marco pregunta *pranzate?* (vosotros): habla de los españoles en general. Al despedirte de alguien que sigue trabajando, dile *Buon lavoro!*; al final del día, *Buona serata!*"
        },
        {
          t: "tabla",
          cab: ["", "-are", "-ere", "-ire", "-ire (-isc-)"],
          audio: [1, 2, 3, 4],
          filas: [
            ["io", "lavoro", "prendo", "parto", "capisco"],
            ["tu", "lavori", "prendi", "parti", "capisci"],
            ["lui, lei, Lei", "lavora", "prende", "parte", "capisce"],
            ["noi", "lavoriamo", "prendiamo", "partiamo", "capiamo"],
            ["voi", "lavorate", "prendete", "partite", "capite"],
            ["loro", "lavorano", "prendono", "partono", "capiscono"]
          ]
        },
        {
          t: "nota",
          x: "La semana en cuatro ideas: *noi* acaba siempre en *-iamo*; *loro* lleva el acento de *io* (*PAR-lo*, *PAR-la-no*); *-isc-* va en todas las personas menos *noi* y *voi*; y *a*, *da*, *di*, *in* y *su* se funden con el artículo (*alle*, *dal*, *della*, *nell'*, *sulla*)."
        },
        {
          t: "p",
          x: "Ahora tú: cuenta en voz alta tu jornada en seis frases, con horas. Empieza con *Mi sveglio alle…* y termina con *Ceno alle…*. Después, pregunta a un compañero imaginario: *E tu, a che ora cominci?*"
        }
      ],
      vocab: [
        ["Sei ancora in ufficio?", "¿Sigues en la oficina?"],
        ["E tu?", "¿Y tú?"],
        ["Che presto!", "¡Qué pronto!"],
        ["la mensa", "el comedor (de la empresa)"],
        ["stasera", "esta noche"],
        ["la partita", "el partido"],
        ["giocare (giochi)", "jugar"],
        ["Senti, …", "Oye, … (para llamar la atención)"],
        ["Parliamo del progetto?", "¿Hablamos del proyecto?"],
        ["d'accordo", "de acuerdo"],
        ["certo", "claro"],
        ["anche", "también"],
        ["Perfetto!", "¡Perfecto!"],
        ["Ottimo!", "¡Estupendo! (acento: OT-ti-mo)"],
        ["allora", "entonces, pues"],
        ["A giovedì!", "¡Hasta el jueves!"],
        ["Forza Inter!", "¡Vamos, Inter!"],
        ["Buona serata!", "¡Que pases buena noche!"]
      ],
      ejercicios: [
        { t: "mc", q: "Marco dice *Io comincio alle otto e mezza*. ¿A qué hora empieza?", ops: ["A las 8:30", "A las 8:15", "A las 9:30"], ok: 0 },
        { t: "mc", q: "Completa: «Noi ___ alle nove e mezza.» (*cenare*)", ops: ["ceniamo", "cenamo", "cenano"], ok: 0 },
        {
          t: "mc",
          q: "¿Por qué no hablan del proyecto a las tres?",
          ops: ["Porque a las tres está la reunión con el doctor Ferrari", "Porque Marco come a las tres", "Porque a las tres juega el Inter"],
          ok: 0
        },
        { t: "mc", q: "Completa: «Tu ___ a calcio?» (*giocare*)", ops: ["giochi", "gioci", "giocchi"], ok: 0 },
        { t: "oir", x: "pranziamo", ops: ["pranziamo", "pranzate", "pranzano"], ok: 0 },
        { t: "orden", es: "Normalmente comemos a la una en el comedor.", x: "Di solito pranziamo all'una in mensa." },
        { t: "decir", es: "¿A qué hora coméis?", x: "A che ora pranzate?" },
        { t: "decir", es: "¡Hasta el jueves!", x: "A giovedì!" }
      ]
    }
  ],
  lecturas: [
    {
      id: "it2-r1",
      titulo: "La giornata di Carlos (el día de Carlos)",
      nivel: "A1",
      texto: "Carlos è un ingegnere spagnolo. Abita a Madrid e lavora per un'azienda italiana: la sede centrale è a Milano.\n\nOgni mattina Carlos si sveglia alle sette. Prende un caffè e alle otto prende la metro. Arriva in ufficio alle nove meno un quarto. Prima legge le email, poi risponde ai messaggi dei colleghi italiani.\n\nIl martedì alle dieci c'è una videochiamata con Milano: Carlos parla con Giulia e Marco. Non capisce sempre tutto, ma impara molto.\n\nCarlos pranza alle due, come molti spagnoli. A Milano, invece, i colleghi pranzano all'una. Finisce di lavorare alle sei e torna a casa. La sera studia italiano per quarantacinque minuti e cena alle nove e mezza.",
      traduccion: "Carlos es un ingeniero español. Vive en Madrid y trabaja para una empresa italiana: la sede central está en Milán.\n\nCada mañana Carlos se despierta a las siete. Se toma un café y a las ocho coge el metro. Llega a la oficina a las nueve menos cuarto. Primero lee los correos y luego contesta los mensajes de sus compañeros italianos.\n\nLos martes a las diez hay una videollamada con Milán: Carlos habla con Giulia y Marco. No siempre lo entiende todo, pero aprende mucho.\n\nCarlos come a las dos, como muchos españoles. En Milán, en cambio, sus compañeros comen a la una. Termina de trabajar a las seis y vuelve a casa. Por la noche estudia italiano cuarenta y cinco minutos y cena a las nueve y media.",
      glosa: {
        carlos: "Carlos",
        "è": "es, está (essere); «c'è» = hay",
        un: "un, una (artículo; ante vocal femenina se apostrofa: «un'azienda»)",
        ingegnere: "ingeniero",
        spagnolo: "español",
        abita: "vive (abitare: A-bi-ta)",
        a: "en, a (con ciudades: «a Madrid»; «a casa» = a casa)",
        madrid: "Madrid",
        e: "y",
        lavora: "trabaja (lavorare)",
        per: "para; durante («per quarantacinque minuti»)",
        azienda: "empresa",
        italiana: "italiana",
        la: "la (artículo)",
        sede: "sede",
        centrale: "central («la sede centrale» = la sede central)",
        milano: "Milán",
        ogni: "cada",
        mattina: "mañana («ogni mattina» = cada mañana)",
        si: "se («si sveglia» = se despierta)",
        sveglia: "despierta (svegliarsi: «si sveglia» = se despierta)",
        alle: "a las (a + le): «alle sette» = a las siete",
        sette: "siete",
        prende: "toma, coge (prendere): «prende un caffè» = se toma un café; «prende la metro» = coge el metro",
        "caffè": "café",
        otto: "ocho",
        metro: "metro («la metro», femenino)",
        arriva: "llega (arrivare)",
        in: "en («in ufficio» = en la oficina, sin artículo)",
        ufficio: "oficina",
        nove: "nueve",
        meno: "menos («le nove meno un quarto» = las nueve menos cuarto)",
        quarto: "cuarto («un quarto» = un cuarto de hora)",
        prima: "primero",
        legge: "lee (leggere)",
        le: "las (artículo femenino plural)",
        email: "correos electrónicos (invariable: «l'email», «le email»)",
        poi: "luego, después",
        risponde: "contesta, responde (rispondere)",
        ai: "a los (a + i)",
        messaggi: "mensajes (plural de «il messaggio»)",
        dei: "de los (di + i)",
        colleghi: "compañeros de trabajo (plural de «il collega»)",
        italiani: "italianos",
        il: "el (artículo); «il martedì» = los martes",
        "martedì": "martes («il martedì» = los martes, cada semana)",
        dieci: "diez",
        c: "«c'è» = hay (ci + è)",
        una: "una (artículo); «all'una» = a la una",
        videochiamata: "videollamada",
        con: "con",
        parla: "habla (parlare)",
        giulia: "Giulia",
        marco: "Marco",
        non: "no",
        capisce: "entiende (capire, con -isc-)",
        sempre: "siempre («non… sempre» = no siempre)",
        tutto: "todo",
        ma: "pero",
        impara: "aprende (imparare)",
        molto: "mucho",
        pranza: "come, almuerza (pranzare)",
        due: "dos",
        come: "como",
        molti: "muchos",
        spagnoli: "españoles",
        invece: "en cambio",
        i: "los (artículo masculino plural)",
        pranzano: "comen (pranzare; acento: PRAN-za-no)",
        all: "a la (a + l', ante vocal): «all'una» = a la una",
        finisce: "termina (finire, con -isc-): «finisce di lavorare» = termina de trabajar",
        di: "de («finire di» + infinitivo = terminar de)",
        lavorare: "trabajar",
        sei: "seis (ojo: «sei» también es «eres»)",
        torna: "vuelve (tornare)",
        casa: "casa («a casa» = a casa)",
        sera: "tarde-noche («la sera» = por la noche, al acabar el día)",
        studia: "estudia (studiare)",
        italiano: "italiano",
        quarantacinque: "cuarenta y cinco",
        minuti: "minutos",
        cena: "cena (cenare, él); también el nombre «la cena»",
        mezza: "media («e mezza» = y media)"
      },
      preguntas: [
        { q: "¿Dónde está la sede central de la empresa?", ops: ["En Milán", "En Madrid", "En Roma"], ok: 0 },
        { q: "¿Qué hace Carlos primero al llegar a la oficina?", ops: ["Lee los correos", "Llama a Giulia", "Se toma un café"], ok: 0 },
        { q: "¿A qué hora comen sus compañeros de Milán?", ops: ["A la una", "A las dos", "A las doce"], ok: 0 },
        {
          q: "¿Qué hace Carlos por la noche?",
          ops: ["Estudia italiano y cena a las nueve y media", "Tiene una videollamada con Milán", "Contesta los mensajes de sus compañeros"],
          ok: 0
        }
      ],
      notas: "*Prende un caffè*, *prende la metro*: *prendere* vale para «tomar» y para «coger». *In ufficio*, sin artículo; *alle sette*, *ai messaggi*, *dei colleghi*, *all'una*: preposiciones articuladas. *Il martedì* = los martes. *Capisce* y *finisce* llevan *-isc-*; *pranzano* se acentúa *PRAN-za-no*."
    },
    {
      id: "it2-r2",
      titulo: "L'ufficio di Milano (la oficina de Milán)",
      nivel: "A1",
      texto: "L'ufficio di Milano è in via Dante, in un palazzo antico del centro. Al piano terra c'è la reception: lì lavora Chiara, l'assistente.\n\nAl primo piano c'è un grande open space con venti scrivanie. Ci sono anche due sale riunioni e una piccola cucina con la macchinetta del caffè. Alle undici, in cucina, c'è sempre qualcuno.\n\nLa scrivania di Giulia è accanto alla finestra. Sulla scrivania di Marco ci sono due schermi, molti documenti e una tazza dell'Inter.\n\nAl secondo piano ci sono gli uffici delle risorse umane, dove lavora Francesca. In fondo al corridoio c'è l'ufficio del dottor Ferrari: la porta è quasi sempre chiusa.",
      traduccion: "La oficina de Milán está en la calle Dante, en un edificio antiguo del centro. En la planta baja está la recepción: allí trabaja Chiara, la asistente.\n\nEn la primera planta hay un gran espacio abierto con veinte mesas. También hay dos salas de reuniones y una cocina pequeña con la máquina de café. A las once siempre hay alguien en la cocina.\n\nLa mesa de Giulia está al lado de la ventana. En la mesa de Marco hay dos pantallas, muchos documentos y una taza del Inter.\n\nEn la segunda planta están los despachos de recursos humanos, donde trabaja Francesca. Al fondo del pasillo está el despacho del doctor Ferrari: la puerta está casi siempre cerrada.",
      glosa: {
        l: "el, la (artículo ante vocal: «l'ufficio», «l'assistente»)",
        ufficio: "oficina; despacho",
        di: "de",
        milano: "Milán",
        "è": "es, está (essere); «c'è» = hay",
        in: "en («in via Dante», «in cucina»: sin artículo); «in fondo a» = al fondo de",
        via: "calle («in via Dante» = en la calle Dante)",
        dante: "Dante (la calle lleva el nombre del poeta Dante Alighieri)",
        un: "un (artículo)",
        palazzo: "edificio (¡no solo «palacio»!)",
        antico: "antiguo",
        del: "del (di + il)",
        centro: "centro",
        al: "en el; al (a + il): «al piano terra» = en la planta baja; «in fondo al corridoio» = al fondo del pasillo",
        piano: "planta, piso",
        terra: "tierra («il piano terra» = la planta baja)",
        c: "«c'è» = hay (ci + è)",
        la: "la (artículo)",
        reception: "recepción (palabra inglesa; en italiano es femenina)",
        "lì": "allí",
        lavora: "trabaja (lavorare)",
        chiara: "Chiara",
        assistente: "asistente",
        primo: "primero («al primo piano» = en la primera planta)",
        grande: "grande",
        open: "«open space» = espacio abierto, oficina diáfana (del inglés)",
        space: "«open space» = espacio abierto, oficina diáfana",
        con: "con",
        venti: "veinte",
        scrivanie: "mesas de trabajo (plural de «la scrivania»)",
        ci: "«ci sono» = hay (+ plural)",
        sono: "son, están; «ci sono» = hay",
        anche: "también",
        due: "dos",
        sale: "salas (plural de «la sala»)",
        riunioni: "reuniones («sala riunioni» = sala de reuniones)",
        e: "y",
        una: "una (artículo)",
        piccola: "pequeña",
        cucina: "cocina",
        macchinetta: "maquinita («la macchinetta del caffè» = la máquina de café)",
        "caffè": "café",
        alle: "a las (a + le)",
        undici: "once",
        sempre: "siempre",
        qualcuno: "alguien",
        scrivania: "mesa de trabajo, escritorio",
        giulia: "Giulia",
        accanto: "al lado («accanto a» = al lado de)",
        alla: "a la (a + la): «accanto alla finestra» = al lado de la ventana",
        finestra: "ventana",
        sulla: "en la, sobre la (su + la)",
        marco: "Marco",
        schermi: "pantallas (plural de «lo schermo»)",
        molti: "muchos",
        documenti: "documentos",
        tazza: "taza",
        dell: "del (di + l', ante vocal): «dell'Inter» = del Inter",
        inter: "el Inter de Milán (equipo de fútbol)",
        secondo: "segundo («al secondo piano» = en la segunda planta)",
        gli: "los (ante vocal: «gli uffici»)",
        uffici: "oficinas, despachos (plural de «l'ufficio»)",
        delle: "de las (di + le)",
        risorse: "recursos («le risorse umane» = recursos humanos)",
        umane: "humanas («risorse umane» = recursos humanos)",
        dove: "donde",
        francesca: "Francesca",
        fondo: "fondo («in fondo a» = al fondo de)",
        corridoio: "pasillo",
        dottor: "doctor (título de cualquier licenciado; «dottore» pierde la -e delante del apellido)",
        ferrari: "Ferrari (apellido)",
        porta: "puerta",
        quasi: "casi",
        chiusa: "cerrada (de «chiudere», cerrar)"
      },
      preguntas: [
        { q: "¿Quién trabaja en la recepción?", ops: ["Chiara, la asistente", "Francesca", "Giulia"], ok: 0 },
        {
          q: "¿Qué hay en la mesa de Marco?",
          ops: ["Dos pantallas, muchos documentos y una taza del Inter", "La máquina de café", "Un portátil y una impresora"],
          ok: 0
        },
        {
          q: "¿Dónde está el despacho del doctor Ferrari?",
          ops: ["Al fondo del pasillo", "En la planta baja, junto a la recepción", "En la primera planta, al lado de la ventana"],
          ok: 0
        },
        { q: "¿Cuándo hay siempre alguien en la cocina?", ops: ["A las once", "A la una", "A las seis"], ok: 0 }
      ],
      notas: "*C'è* + singular, *ci sono* + plural. Fíjate en *c'è la reception* y *c'è l'ufficio del dottor Ferrari*: *c'è* con artículo, porque el texto enumera lo que hay en cada planta. *In cucina*, *in via Dante*: sin artículo. En Italia *dottore* es cualquier licenciado: al director se le llama *dottor Ferrari* y se le trata de *Lei*."
    },
    {
      id: "it2-r3",
      titulo: "Un'email di Giulia (el horario de la semana)",
      nivel: "A1",
      texto: "Oggetto: orario della settimana\n\nCiao Carlos,\n\necco l'orario della prossima settimana.\n\nLunedì alle 10 c'è la riunione del team su Teams. Martedì lavoro da casa, ma rispondo alle email e al telefono. Mercoledì mattina sono libera: se hai domande, sono in ufficio dalle 9 alle 13.\n\nMercoledì pomeriggio, alle 15:30, c'è la videochiamata con il dottor Ferrari. È molto puntuale: la riunione comincia alle 15:30 in punto! E ricorda: con lui usiamo il Lei.\n\nGiovedì Marco presenta il nuovo progetto nella sala grande. Tu partecipi online, vero? Venerdì finiamo presto, alle 16.\n\nUna domanda: preferisci la riunione di lunedì alle 10 o alle 11? Per me è uguale.\n\nA presto,\nGiulia",
      traduccion: "Asunto: horario de la semana\n\nHola, Carlos:\n\naquí tienes el horario de la semana que viene.\n\nEl lunes a las 10 es la reunión de equipo por Teams. El martes trabajo desde casa, pero contesto los correos y el teléfono. El miércoles por la mañana estoy libre: si tienes preguntas, estoy en la oficina de 9 a 13.\n\nEl miércoles por la tarde, a las 15:30, es la videollamada con el doctor Ferrari. Es muy puntual: ¡la reunión empieza a las 15:30 en punto! Y recuerda: a él lo tratamos de usted.\n\nEl jueves Marco presenta el nuevo proyecto en la sala grande. Tú participas en línea, ¿verdad? El viernes terminamos pronto, a las 16.\n\nUna pregunta: ¿prefieres la reunión del lunes a las 10 o a las 11? A mí me da igual.\n\nHasta pronto,\nGiulia",
      glosa: {
        oggetto: "asunto (de un correo); objeto",
        orario: "horario",
        della: "de la (di + la)",
        settimana: "semana",
        ciao: "hola; adiós (informal: Giulia lo tutea)",
        carlos: "Carlos",
        ecco: "aquí tienes, he aquí",
        l: "el (artículo ante vocal: «l'orario»)",
        prossima: "próxima («la prossima settimana» = la semana que viene)",
        "lunedì": "el lunes (sin artículo: un lunes concreto)",
        alle: "a las (a + le)",
        c: "«c'è» = hay (ci + è)",
        "è": "es, está (essere); «c'è» = hay; «per me è uguale» = me da igual",
        la: "la (artículo)",
        riunione: "reunión",
        del: "del (di + il)",
        team: "equipo (del inglés)",
        su: "en, por (plataformas: «su Teams»); sobre",
        teams: "Teams (programa de videollamadas)",
        "martedì": "el martes",
        lavoro: "trabajo (lavorare, yo)",
        da: "desde («lavoro da casa» = trabajo desde casa)",
        casa: "casa",
        ma: "pero",
        rispondo: "contesto (rispondere, yo; «rispondere a» = contestar a)",
        email: "correos electrónicos (invariable)",
        e: "y",
        al: "al (a + il)",
        telefono: "teléfono (te-LE-fo-no)",
        "mercoledì": "el miércoles",
        mattina: "mañana («mercoledì mattina» = el miércoles por la mañana)",
        sono: "estoy; soy (essere, yo)",
        libera: "libre (femenino: lo dice Giulia)",
        se: "si (condicional)",
        hai: "tienes (avere, tú)",
        domande: "preguntas (plural de «la domanda»)",
        in: "en («in ufficio», sin artículo; «in punto» = en punto)",
        ufficio: "oficina",
        dalle: "desde las (da + le): «dalle 9 alle 13» = de 9 a 13",
        pomeriggio: "tarde (después de comer)",
        videochiamata: "videollamada",
        con: "con",
        il: "el (artículo); «il Lei» = el trato de usted",
        dottor: "doctor (título; «dottore» pierde la -e delante del apellido)",
        ferrari: "Ferrari (apellido)",
        molto: "muy",
        puntuale: "puntual",
        comincia: "empieza (cominciare)",
        punto: "punto («in punto» = en punto)",
        ricorda: "recuerda (imperativo de «ricordare», a ti)",
        lui: "él",
        usiamo: "usamos (usare, nosotros): «usiamo il Lei» = lo tratamos de usted",
        lei: "usted (con mayúscula); también «ella»",
        "giovedì": "el jueves",
        marco: "Marco",
        presenta: "presenta (presentare)",
        nuovo: "nuevo",
        progetto: "proyecto",
        nella: "en la (in + la)",
        sala: "sala",
        grande: "grande",
        tu: "tú",
        partecipi: "participas (partecipare, tú)",
        online: "en línea, por internet",
        vero: "verdad («…, vero?» = ¿verdad?)",
        "venerdì": "el viernes",
        finiamo: "terminamos (finire: en «noi» no hay -isc-)",
        presto: "pronto, temprano («A presto!» = ¡hasta pronto!)",
        una: "una",
        domanda: "pregunta (¡no «demanda»!)",
        preferisci: "prefieres (preferire, con -isc-)",
        di: "de",
        o: "o",
        per: "para («per me» = para mí)",
        me: "mí («per me» = para mí)",
        uguale: "igual («per me è uguale» = me da igual)",
        a: "a («A presto!» = ¡hasta pronto!)",
        giulia: "Giulia"
      },
      preguntas: [
        { q: "¿Qué día trabaja Giulia desde casa?", ops: ["El martes", "El lunes", "El viernes"], ok: 0 },
        { q: "¿A qué hora es la videollamada con el doctor Ferrari?", ops: ["A las 15:30 en punto", "A las 10", "A las 16"], ok: 0 },
        { q: "¿Cómo tratan al doctor Ferrari?", ops: ["De usted (Lei)", "De tú", "Por su nombre de pila"], ok: 0 },
        {
          q: "¿Qué le pregunta Giulia a Carlos al final?",
          ops: ["Si prefiere la reunión del lunes a las 10 o a las 11", "Si trabaja desde casa el martes", "Si puede presentar el proyecto el jueves"],
          ok: 0
        }
      ],
      notas: "En los correos de trabajo las horas van en formato de 24 horas: *alle 15:30* se lee *alle quindici e trenta*; *alle 16*, *alle sedici*. *Lunedì*, *martedì*…, sin artículo: días concretos de la semana que viene. Tras *Ciao Carlos,* el correo sigue en minúscula (*ecco…*), como se hace en italiano. Y *domanda* es «pregunta», no «demanda»."
    }
  ]
});
