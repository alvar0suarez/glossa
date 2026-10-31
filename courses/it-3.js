// Glossa · italiano · semana 3: Verbos irregulares y reuniones
window.CONTENT.it.semanas.push({
  n: 3,
  lecciones: [
    {
      id: "it3-1",
      titulo: "Fare y dire: hacer y decir",
      min: 40,
      intro: "*Fare* (hacer) y *dire* (decir) son irregulares, igual que en español, y salen en cada reunión: *Facciamo una pausa?*, *Come si dice?* Hoy aprendes sus formas y las expresiones de oficina que más vas a oír.",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "fare (hacer)", "dire (decir)"],
          audio: [1, 2],
          filas: [
            ["io", "faccio", "dico"],
            ["tu", "fai", "dici"],
            ["lui, lei, Lei", "fa", "dice"],
            ["noi", "facciamo", "diciamo"],
            ["voi", "fate", "dite"],
            ["loro", "fanno", "dicono"]
          ]
        },
        {
          t: "nota",
          x: "Pronunciación: *faccio* suena «fácho», con la «ch» larga por la doble *c*. En *dire*, la *c* suena «k» ante *o* (*dico*, *dicono*) y «ch» ante *i* y *e* (*dici*, *dice*, *diciamo*). Y *dicono* se acentúa en la primera sílaba: *DI-co-no*."
        },
        { t: "p", x: "*Fare* es el verbo comodín del italiano. Forma muchas expresiones fijas, a veces donde el español usa otro verbo:" },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["fare una riunione", "hacer, tener una reunión"],
            ["fare una domanda", "hacer una pregunta"],
            ["fare una pausa", "hacer una pausa, descansar un rato"],
            ["fare una telefonata", "hacer una llamada"],
            ["fare il punto", "hacer balance, ver cómo va algo"],
            ["fare due chiacchiere", "charlar un rato"],
            ["fare colazione", "desayunar"],
            ["fare tardi", "llegar tarde; quedarse hasta tarde"],
            ["fare presto", "darse prisa"],
            ["fa caldo / fa freddo", "hace calor / hace frío"]
          ]
        },
        {
          t: "nota",
          x: "Para decir tu profesión: *Che lavoro fai?* — *Faccio l'ingegnere* (Soy ingeniero). Con *fare*, la profesión lleva artículo; con *essere*, normalmente no: *Sono ingegnere*. Lo que nunca se dice es *faccio ingegnere*."
        },
        {
          t: "p",
          x: "*Dire* funciona como «decir»: *dire qualcosa a qualcuno* (decirle algo a alguien), *dire di sì / di no* (decir que sí / que no). Para transmitir una petición, *dire di* + infinitivo: *Giulia dice di aspettare* (Giulia dice que esperemos). Así te ahorras el subjuntivo que usaría el español."
        },
        {
          t: "ej",
          items: [
            ["Facciamo una pausa?", "¿Hacemos una pausa?"],
            ["Faccio una telefonata e arrivo.", "Hago una llamada y voy."],
            ["Che lavoro fai?", "¿A qué te dedicas?"],
            ["Faccio l'ingegnere.", "Soy ingeniero."],
            ["Faccio colazione al bar.", "Desayuno en el bar."],
            ["Oggi fa freddo in ufficio.", "Hoy hace frío en la oficina."],
            ["Come si dice «deadline» in italiano?", "¿Cómo se dice «deadline» en italiano?"],
            ["Cosa vuol dire «scadenza»?", "¿Qué quiere decir «scadenza»?"],
            ["Marco dice che il cliente è contento.", "Marco dice que el cliente está contento."],
            ["Giulia dice di aspettare.", "Giulia dice que esperemos."],
            ["Dico di sì.", "Digo que sí."]
          ]
        },
        {
          t: "nota",
          x: "*Vuol dire* es *vuole dire* acortado: «quiere decir, significa». Y cuando un compañero te llama, contestas *Dimmi!* (¡Dime!), igual que en español."
        }
      ],
      vocab: [
        ["fare (faccio, fai, facciamo, fanno)", "hacer"],
        ["dire (dico, dici, diciamo, dicono)", "decir"],
        ["dicono", "dicen (acento: DI-co-no)"],
        ["fare una riunione", "hacer, tener una reunión"],
        ["Facciamo una pausa?", "¿Hacemos una pausa?"],
        ["fare una domanda", "hacer una pregunta"],
        ["fare una telefonata", "hacer una llamada"],
        ["fare il punto", "hacer balance, ver cómo va algo"],
        ["fare due chiacchiere", "charlar un rato (acento: CHIAC-chie-re)"],
        ["fare colazione", "desayunar"],
        ["fare tardi", "llegar tarde; quedarse hasta tarde"],
        ["Fai presto!", "¡Date prisa!"],
        ["Fa freddo.", "Hace frío."],
        ["Non fa niente.", "No pasa nada, no importa."],
        ["Faccio l'ingegnere.", "Soy ingeniero."],
        ["Come si dice … in italiano?", "¿Cómo se dice … en italiano?"],
        ["Cosa vuol dire?", "¿Qué quiere decir?"],
        ["dire di sì / di no", "decir que sí / que no"],
        ["Giulia dice di aspettare.", "Giulia dice que esperemos."],
        ["Diciamo che…", "Digamos que…"],
        ["Dimmi!", "¡Dime! (al contestar a un compañero)"]
      ],
      ejercicios: [
        { t: "mc", q: "«Nosotros hacemos» se dice…", ops: ["facciamo", "faciamo", "fammo"], ok: 0 },
        { t: "mc", q: "¿Cómo dices «Soy ingeniero» con *fare*?", ops: ["Faccio l'ingegnere.", "Faccio ingegnere.", "Fa l'ingegnere."], ok: 0 },
        {
          t: "mc",
          q: "Giulia propone *Facciamo il punto sul progetto*. Quiere…",
          ops: ["ver cómo va el proyecto", "terminar el proyecto", "empezar un proyecto nuevo"],
          ok: 0
        },
        { t: "mc", q: "Giulia dice que esperemos: «Giulia dice ___ aspettare.»", ops: ["di", "che", "a"], ok: 0 },
        { t: "oir", x: "dicono", ops: ["dicono", "diciamo", "dici"], ok: 0 },
        { t: "orden", es: "Desayuno en el bar.", x: "Faccio colazione al bar." },
        { t: "decir", es: "¿Hacemos una pausa?", x: "Facciamo una pausa?" },
        { t: "decir", es: "¿A qué te dedicas?", x: "Che lavoro fai?" }
      ]
    },
    {
      id: "it3-2",
      titulo: "Andare, venire, uscire: ir, venir y salir",
      min: 45,
      intro: "Tres verbos para moverte por la oficina y por Milán. Y dos trampas para hispanohablantes: cuándo se dice *vengo* donde tú dirías «voy», y por qué *salire* no es «salir».",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "andare (ir)", "venire (venir)", "uscire (salir)"],
          audio: [1, 2, 3],
          filas: [
            ["io", "vado", "vengo", "esco"],
            ["tu", "vai", "vieni", "esci"],
            ["lui, lei, Lei", "va", "viene", "esce"],
            ["noi", "andiamo", "veniamo", "usciamo"],
            ["voi", "andate", "venite", "uscite"],
            ["loro", "vanno", "vengono", "escono"]
          ]
        },
        {
          t: "nota",
          x: "*Uscire* empieza por *esc-* cuando el acento cae en la raíz (*esco, esci, esce, escono*) y por *usc-* en *usciamo* y *uscite*. *Sc* suena «sk» ante *o* (*esco*) y «sh», como en el inglés «she», ante *i* y *e* (*esci*, *esce*, *usciamo*). Acento: *VEN-go-no*, *E-sco-no*. La 3.ª del plural se acentúa en la misma sílaba que la 3.ª del singular (*viene*, *esce*)."
        },
        {
          t: "p",
          x: "*Andare* con lugares: *a* + ciudad (*vado a Milano*); *in* + país y muchos sitios sin artículo (*in Italia*, *in ufficio*, *in banca*, *in sala riunioni*); *al*, *alla*… + sitios con artículo (*al bar*, *alla stazione*); *da* + persona (*vado da Giulia*: voy a donde está Giulia, a su mesa o a su casa). Y *a casa*, sin artículo."
        },
        {
          t: "nota",
          x: "Trampa 1: para ir hacia donde está (o estará) la persona con la que hablas, el italiano usa *venire*, no *andare*: —*Vieni alla riunione?* —*Sì, vengo!* (¡Sí, voy!). Y si Giulia te llama desde su mesa, contestas *Arrivo!* (¡Voy!)."
        },
        {
          t: "nota",
          x: "Trampa 2: *andare a* + infinitivo no es futuro. *Vado a prendere un caffè* es «voy a por un café», con movimiento real. Para tus planes, el italiano usa el presente: *Domani chiamo il cliente* (Mañana voy a llamar al cliente)."
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español", "Ejemplo"],
          audio: [0, 2],
          filas: [
            ["uscire", "salir", "Esco dall'ufficio alle sei."],
            ["salire", "¡subir!", "Salgo al terzo piano."],
            ["scendere", "bajar", "Scendo al bar."],
            ["entrare", "entrar", "Entro in sala riunioni."],
            ["partire", "salir de viaje, irse", "Il treno parte alle otto."],
            ["tornare", "volver", "Torno a Madrid venerdì."]
          ]
        },
        {
          t: "nota",
          x: "Falso amigo: *salgo* existe en italiano, pero significa «subo» (de *salire*). «Salgo de la oficina» es *esco dall'ufficio*. La salida es *l'uscita*; la subida, *la salita*."
        },
        {
          t: "ej",
          items: [
            ["Vado in ufficio a piedi.", "Voy a la oficina andando."],
            ["Andiamo al bar?", "¿Vamos al bar?"],
            ["Vado da Giulia.", "Voy a ver a Giulia (a su mesa)."],
            ["Vado a prendere un caffè.", "Voy a por un café."],
            ["Vieni alla riunione? — Sì, vengo!", "¿Vienes a la reunión? — ¡Sí, voy!"],
            ["Vieni a pranzo con noi?", "¿Te vienes a comer con nosotros?"],
            ["Vengo anch'io!", "¡Voy yo también!"],
            ["Carlos, hai un minuto? — Sì, arrivo!", "Carlos, ¿tienes un minuto? — ¡Sí, voy!"],
            ["A che ora esci dall'ufficio?", "¿A qué hora sales de la oficina?"],
            ["Usciamo a pranzo?", "¿Salimos a comer?"],
            ["Stasera esco con i colleghi.", "Esta noche salgo con los compañeros."]
          ]
        }
      ],
      vocab: [
        ["andare (vado, vai, va, vanno)", "ir"],
        ["venire (vengo, vieni, viene)", "venir"],
        ["vengono", "vienen (acento: VEN-go-no)"],
        ["uscire (esco, esci, usciamo)", "salir (de un sitio)"],
        ["escono (E-sco-no)", "salen"],
        ["andare in ufficio", "ir a la oficina"],
        ["andare da Giulia", "ir a donde está Giulia"],
        ["Andiamo al bar?", "¿Vamos al bar?"],
        ["andare a prendere un caffè", "ir a por un café"],
        ["Vieni alla riunione?", "¿Vienes a la reunión?"],
        ["Sì, vengo.", "Sí, voy."],
        ["Vengo anch'io!", "¡Voy yo también!"],
        ["Arrivo!", "¡Voy!, ¡ya voy!"],
        ["uscire dall'ufficio", "salir de la oficina"],
        ["Usciamo a pranzo?", "¿Salimos a comer?"],
        ["uscire con i colleghi", "salir con los compañeros"],
        ["scendere", "bajar (acento: SCEN-de-re)"],
        ["tornare", "volver"],
        ["Domani chiamo il cliente.", "Mañana voy a llamar al cliente."]
      ],
      ejercicios: [
        { t: "mc", q: "Giulia te pregunta *Vieni alla riunione?* Contestas que sí:", ops: ["Sì, vengo.", "Sì, vado.", "Sì, esco."], ok: 0 },
        { t: "mc", q: "«Subo a la tercera planta» se dice…", ops: ["Salgo al terzo piano.", "Esco al terzo piano.", "Scendo al terzo piano."], ok: 0 },
        {
          t: "mc",
          q: "Mañana vas a llamar al cliente (es un plan). Lo natural en italiano es…",
          ops: ["Domani chiamo il cliente.", "Domani vado a chiamare il cliente.", "Domani vado chiamare il cliente."],
          ok: 0
        },
        { t: "mc", q: "Completa: «Marco e Giulia ___ a pranzo all'una.»", ops: ["escono", "uscono", "esciono"], ok: 0 },
        { t: "oir", x: "vengono", ops: ["vengono", "veniamo", "venite"], ok: 0 },
        { t: "orden", es: "¿A qué hora sales de la oficina?", x: "A che ora esci dall'ufficio?" },
        { t: "decir", es: "¡Voy yo también!", x: "Vengo anch'io!" },
        { t: "decir", es: "¿Vamos al bar?", x: "Andiamo al bar?" }
      ]
    },
    {
      id: "it3-3",
      titulo: "Stare y dare",
      min: 40,
      intro: "*Stare* parece «estar», pero casi nunca lo es: hoy ves cuándo se usa de verdad. Y *dare* (dar) te trae expresiones clave para el trabajo, como *dare del tu* (tutear) o *dare una mano* (echar una mano).",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "stare", "dare (dar)"],
          audio: [1, 2],
          filas: [
            ["io", "sto", "do"],
            ["tu", "stai", "dai"],
            ["lui, lei, Lei", "sta", "dà"],
            ["noi", "stiamo", "diamo"],
            ["voi", "state", "date"],
            ["loro", "stanno", "danno"]
          ]
        },
        {
          t: "nota",
          x: "Fíjate en el patrón de *fare*, *andare*, *stare* y *dare*: *fai, vai, stai, dai*; *fa, va, sta, dà*; *fanno, vanno, stanno, danno*, siempre con doble *n*. *Dà* lleva tilde para no confundirse con la preposición *da*: *Marco dà il preventivo al cliente* frente a *Vengo da Madrid*."
        },
        {
          t: "p",
          x: "Estar casi nunca es *stare*. Para dónde estás y para estados como cansado, contento u ocupado, el italiano usa *essere*: *Sono in ufficio* (Estoy en la oficina), *Sono in riunione* (Estoy en una reunión), *Sono stanco* (Estoy cansado), *La sala è libera* (La sala está libre). *Stare* se queda con estos usos:"
        },
        {
          t: "tabla",
          cab: ["Uso de stare", "Ejemplo", "Español"],
          audio: [1],
          filas: [
            ["salud y ánimo", "Come stai? — Sto bene, grazie.", "¿Cómo estás? — Bien, gracias."],
            ["quedarse", "Oggi sto a casa.", "Hoy me quedo en casa."],
            ["acción en curso: stare + gerundio", "Sto lavorando.", "Estoy trabajando."],
            ["a punto de: stare per + infinitivo", "La riunione sta per cominciare.", "La reunión está a punto de empezar."],
            ["frases hechas", "Stai tranquillo!", "¡Tranquilo!"]
          ]
        },
        {
          t: "p",
          x: "El gerundio: *-are* → *-ando* (*lavorare* → *lavorando*); *-ere* y *-ire* → *-endo* (*scrivere* → *scrivendo*, *finire* → *finendo*). Irregulares: *fare* → *facendo*, *dire* → *dicendo*. El gerundio no cambia; solo se conjuga *stare*: *sto lavorando*, *stiamo lavorando*."
        },
        {
          t: "nota",
          x: "El italiano usa *stare* + gerundio menos que el español: solo para lo que está pasando ahora mismo. «Estoy trabajando en un proyecto nuevo» (estos meses) es, simplemente, *Lavoro a un progetto nuovo*."
        },
        {
          t: "ej",
          items: [
            ["Come sta, dottor Ferrari?", "¿Cómo está, doctor Ferrari?"],
            ["Bene, grazie. E Lei?", "Bien, gracias. ¿Y usted?"],
            ["Marco sta parlando al telefono.", "Marco está hablando por teléfono."],
            ["Giulia sta scrivendo una mail.", "Giulia está escribiendo un correo."],
            ["Stiamo facendo una riunione.", "Estamos en plena reunión."],
            ["Sto per uscire.", "Estoy a punto de salir."],
            ["Sono in riunione.", "Estoy en una reunión."],
            ["La sala è libera?", "¿Está libre la sala?"]
          ]
        },
        { t: "p", x: "*Dare* es «dar» y forma expresiones muy útiles en la oficina:" },
        {
          t: "ej",
          items: [
            ["Do un'occhiata al preventivo.", "Le echo un vistazo al presupuesto."],
            ["Mi dai una mano?", "¿Me echas una mano?"],
            ["Diamo del tu a Giulia.", "A Giulia la tuteamos."],
            ["Al dottor Ferrari diamo del Lei.", "Al doctor Ferrari lo tratamos de usted."],
            ["Ci diamo del tu?", "¿Nos tuteamos?"],
            ["Dai, andiamo!", "¡Venga, vamos!"],
            ["Ma dai!", "¡No me digas!"]
          ]
        },
        {
          t: "nota",
          x: "*Dare del tu* / *dare del Lei* = tutear / tratar de usted. Si un italiano te propone *Ci diamo del tu?*, a partir de ahí, *tu*. Con el dottor Ferrari, espera a que lo proponga él. Y *Dai!*, de *dare*, es el «¡venga!» español."
        }
      ],
      vocab: [
        ["stare (sto, stai, stiamo, stanno)", "estar (de salud); quedarse"],
        ["dare (do, dai, dà, danno)", "dar"],
        ["Sto bene, grazie.", "Estoy bien, gracias."],
        ["Sono in ufficio.", "Estoy en la oficina."],
        ["Sono in riunione.", "Estoy en una reunión."],
        ["Sono stanco.", "Estoy cansado."],
        ["Oggi sto a casa.", "Hoy me quedo en casa."],
        ["Sto lavorando.", "Estoy trabajando."],
        ["Marco sta parlando al telefono.", "Marco está hablando por teléfono."],
        ["Sto per uscire.", "Estoy a punto de salir."],
        ["La riunione sta per cominciare.", "La reunión está a punto de empezar."],
        ["Stai tranquillo!", "¡Tranquilo!"],
        ["dare un'occhiata a…", "echar un vistazo a…"],
        ["dare una mano", "echar una mano"],
        ["Mi dai una mano?", "¿Me echas una mano?"],
        ["dare del tu / del Lei", "tutear / tratar de usted"],
        ["Ci diamo del tu?", "¿Nos tuteamos?"],
        ["Dai!", "¡Venga!, ¡vamos!"],
        ["Ma dai!", "¡No me digas!, ¡anda ya!"],
        ["Lavoro a un progetto nuovo.", "Estoy trabajando en un proyecto nuevo."]
      ],
      ejercicios: [
        { t: "mc", q: "«Estoy cansado» se dice…", ops: ["Sono stanco.", "Sto stanco.", "Ho stanco."], ok: 0 },
        {
          t: "mc",
          q: "Marco está hablando por teléfono ahora mismo:",
          ops: ["Marco sta parlando al telefono.", "Marco è parlando al telefono.", "Marco sta parlare al telefono."],
          ok: 0
        },
        { t: "mc", q: "*Ci diamo del tu?* significa…", ops: ["¿Nos tuteamos?", "¿Nos damos la mano?", "¿Te doy algo?"], ok: 0 },
        {
          t: "mc",
          q: "¿Por qué *dà* lleva tilde?",
          ops: ["Para distinguirlo de la preposición «da»", "Porque es plural", "Porque es la forma de Lei"],
          ok: 0
        },
        { t: "oir", x: "stanno", ops: ["stanno", "stiamo", "state"], ok: 0 },
        { t: "orden", es: "Le echo un vistazo al presupuesto.", x: "Do un'occhiata al preventivo." },
        { t: "decir", es: "Estoy a punto de salir.", x: "Sto per uscire." },
        { t: "decir", es: "¿Nos tuteamos?", x: "Ci diamo del tu?" }
      ]
    },
    {
      id: "it3-4",
      titulo: "Potere, volere, dovere",
      min: 45,
      intro: "Con *posso*, *voglio* y *devo* + infinitivo pides permiso, ofreces ayuda y explicas lo que tienes que hacer. En tus primeras reuniones con Milán, *Può ripetere, per favore?* te va a salvar más de una vez.",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "potere (poder)", "volere (querer)", "dovere (tener que)"],
          audio: [1, 2, 3],
          filas: [
            ["io", "posso", "voglio", "devo"],
            ["tu", "puoi", "vuoi", "devi"],
            ["lui, lei, Lei", "può", "vuole", "deve"],
            ["noi", "possiamo", "vogliamo", "dobbiamo"],
            ["voi", "potete", "volete", "dovete"],
            ["loro", "possono", "vogliono", "devono"]
          ]
        },
        {
          t: "nota",
          x: "Ojo a la escritura: doble *s* en *posso, possiamo, possono*; doble *b* en *dobbiamo*. *Gli* (*voglio, vogliamo*) suena como la «ll» de quien distingue «pollo» de «poyo». Y la 3.ª del plural se acentúa en la primera sílaba: *POS-so-no, VO-glio-no, DE-vo-no*."
        },
        {
          t: "p",
          x: "Van seguidos de un infinitivo, sin preposición, como en español: *Posso entrare?* (¿Puedo pasar?), *Devo andare* (Tengo que irme), *Vogliamo finire oggi* (Queremos terminar hoy). La negación va delante: *Non posso venire* (No puedo ir)."
        },
        {
          t: "nota",
          x: "«Tener que» es *dovere*, nunca *avere che*: *Devo chiamare il cliente* (Tengo que llamar al cliente). Pero «tener mucho que hacer» sí va con *avere*: *Ho molto da fare*. Y para «no hace falta», lo más claro es *Non c'è bisogno*: *non devi* puede sonar a «no debes»."
        },
        { t: "p", x: "Con *Lei* (usted) se usa la 3.ª persona del singular. Así pides algo con educación al dottor Ferrari o a un cliente:" },
        {
          t: "tabla",
          cab: ["Con tu", "Con Lei", "Español"],
          audio: [0, 1],
          filas: [
            ["Puoi ripetere, per favore?", "Può ripetere, per favore?", "¿Puedes / Puede repetir, por favor?"],
            ["Puoi parlare più lentamente?", "Può parlare più lentamente?", "¿Puedes / Puede hablar más despacio?"],
            ["Vuoi un caffè?", "Vuole un caffè?", "¿Quieres / Quiere un café?"],
            ["Devi firmare qui.", "Deve firmare qui.", "Tienes / Tiene que firmar aquí."],
            ["Puoi mandare la presentazione?", "Può mandare la presentazione?", "¿Puedes / Puede enviar la presentación?"]
          ]
        },
        {
          t: "nota",
          x: "Acento de los verbos en *-ere*: unos lo llevan en la *e* (*po-TE-re*, *vo-LE-re*, *do-VE-re*, *sa-PE-re*) y otros una sílaba antes (*ri-PE-te-re*, *PREN-de-re*, *SCRI-ve-re*). Apréndelos con su acento: decir «ri-pe-TE-re» es un error típico de hispanohablante."
        },
        {
          t: "nota",
          x: "*Voglio* + cosa suena brusco al pedir. En el bar, lo normal es el presente: *Prendo un caffè* (Para mí, un café). La forma cortés, *vorrei*, llega en la semana 6. *Volere* sí queda bien para ofrecer: *Vuoi un caffè?*"
        },
        {
          t: "ej",
          items: [
            ["Posso entrare?", "¿Puedo pasar?"],
            ["Scusa, non posso venire alla riunione.", "Perdona, no puedo ir a la reunión."],
            ["Devo andare, ho una riunione.", "Tengo que irme, tengo una reunión."],
            ["Dobbiamo finire oggi.", "Tenemos que terminar hoy."],
            ["Il cliente vuole una risposta.", "El cliente quiere una respuesta."],
            ["Volete un caffè?", "¿Queréis un café?"],
            ["Potete parlare più lentamente?", "¿Podéis hablar más despacio?"],
            ["Ho molto da fare.", "Tengo mucho que hacer."],
            ["Non c'è bisogno.", "No hace falta."],
            ["Cosa vuoi dire?", "¿Qué quieres decir?"]
          ]
        }
      ],
      vocab: [
        ["potere (posso, puoi, può)", "poder"],
        ["volere (voglio, vuoi, vuole)", "querer"],
        ["dovere (devo, devi, dobbiamo)", "tener que, deber"],
        ["possono", "pueden (acento: POS-so-no)"],
        ["vogliono", "quieren (acento: VO-glio-no)"],
        ["devono", "tienen que, deben (acento: DE-vo-no)"],
        ["ripetere", "repetir (acento: ri-PE-te-re)"],
        ["Posso entrare?", "¿Puedo pasar?"],
        ["Puoi parlare più lentamente?", "¿Puedes hablar más despacio?"],
        ["Non posso venire.", "No puedo ir."],
        ["Devo andare.", "Tengo que irme."],
        ["Dobbiamo finire oggi.", "Tenemos que terminar hoy."],
        ["Vuoi un caffè?", "¿Quieres un café?"],
        ["Vuole un caffè?", "¿Quiere un café? (de usted)"],
        ["Prendo un caffè.", "Para mí, un café. (al pedir)"],
        ["Cosa vuoi dire?", "¿Qué quieres decir?"],
        ["Ho molto da fare.", "Tengo mucho que hacer."],
        ["Non c'è bisogno.", "No hace falta."],
        ["Devi firmare qui.", "Tienes que firmar aquí."],
        ["Il cliente vuole una risposta.", "El cliente quiere una respuesta."]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "«Tengo que llamar al cliente» se dice…",
          ops: ["Devo chiamare il cliente.", "Ho che chiamare il cliente.", "Devo di chiamare il cliente."],
          ok: 0
        },
        {
          t: "mc",
          q: "Al dottor Ferrari, de usted: «¿Puede repetir, por favor?»",
          ops: ["Può ripetere, per favore?", "Puoi ripetere, per favore?", "Potete ripetere, per favore?"],
          ok: 0
        },
        { t: "mc", q: "Completa: «Noi ___ finire oggi.»", ops: ["dobbiamo", "doviamo", "devono"], ok: 0 },
        { t: "mc", q: "En el bar, lo más natural para pedir es…", ops: ["Prendo un caffè.", "Voglio un caffè.", "Devo un caffè."], ok: 0 },
        { t: "oir", x: "vogliono", ops: ["vogliono", "vogliamo", "volete"], ok: 0 },
        { t: "orden", es: "Perdona, no puedo ir a la reunión.", x: "Scusa, non posso venire alla riunione." },
        { t: "decir", es: "¿Puede repetir, por favor?", x: "Può ripetere, per favore?" },
        { t: "decir", es: "Tengo que irme.", x: "Devo andare." }
      ]
    },
    {
      id: "it3-5",
      titulo: "Sapere y el vocabulario de las reuniones",
      min: 45,
      intro: "Hoy, las palabras de cualquier reunión de proyecto: orden del día, plazos, clientes y presupuestos. Y *sapere*, el verbo para pedir y dar información: *Sapete se il cliente viene?*",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "sapere (saber)"],
          audio: [1],
          filas: [
            ["io", "so"],
            ["tu", "sai"],
            ["lui, lei, Lei", "sa"],
            ["noi", "sappiamo"],
            ["voi", "sapete"],
            ["loro", "sanno"]
          ]
        },
        {
          t: "p",
          x: "*Sapere* es «saber»: *So che…* (Sé que…), *Sai se…?* (¿Sabes si…?) y, con infinitivo, saber hacer algo: *Sai usare questo programma?* Para personas y lugares, *conoscere* (conocer): *Conosci Marco?*, *Conosco bene Milano*. Igual que en español."
        },
        {
          t: "nota",
          x: "Dos frases que oirás cada día: *Non lo so* (No lo sé) y *Fammi sapere!* (¡Avísame!, literalmente «hazme saber»). Con *Lei*: *Mi fa sapere?* (¿Me avisa?)."
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["la riunione, le riunioni", "la reunión, las reuniones"],
            ["la sala riunioni", "la sala de reuniones"],
            ["l'ordine del giorno", "el orden del día"],
            ["il punto", "el punto (del orden del día)"],
            ["il progetto", "el proyecto"],
            ["il cliente, i clienti", "el cliente, los clientes"],
            ["il preventivo", "el presupuesto (para un cliente)"],
            ["il budget", "el presupuesto (dinero disponible)"],
            ["la scadenza", "el plazo, la fecha límite"],
            ["entro venerdì", "para el viernes (como muy tarde)"],
            ["il verbale", "el acta"],
            ["la proposta", "la propuesta"]
          ]
        },
        {
          t: "nota",
          x: "Falso amigo: el «presupuesto» que pide un cliente es *il preventivo*, y el dinero que tienes para un proyecto, *il budget*. *Presupposto* significa «premisa, supuesto». *Scadenza* es también la caducidad: *la data di scadenza* de un yogur."
        },
        {
          t: "nota",
          x: "Plurales: *la riunione* → *le riunioni*; *il cliente* → *i clienti*. Las palabras en *-e* hacen el plural en *-i*, sean masculinas o femeninas. Y *l'ordine* se acentúa *OR-di-ne*."
        },
        { t: "p", x: "Frases para seguir una reunión (y, pronto, para llevarla tú):" },
        {
          t: "ej",
          items: [
            ["Cominciamo?", "¿Empezamos?"],
            ["Il primo punto all'ordine del giorno è il preventivo.", "El primer punto del orden del día es el presupuesto."],
            ["Passiamo al punto successivo.", "Pasemos al siguiente punto."],
            ["Qual è la scadenza?", "¿Cuál es el plazo?"],
            ["Il cliente vuole il preventivo entro venerdì.", "El cliente quiere el presupuesto para el viernes."],
            ["Sapete se il cliente viene alla riunione?", "¿Sabéis si el cliente viene a la reunión?"],
            ["Non lo so.", "No lo sé."],
            ["Chi fa il verbale?", "¿Quién hace el acta?"],
            ["Siamo in ritardo con il progetto.", "Vamos con retraso en el proyecto."],
            ["Ci sono domande?", "¿Hay preguntas?"]
          ]
        },
        { t: "nota", x: "*Qual è* se escribe sin apóstrofo (nunca *qual'è*): es un error frecuente incluso entre italianos." }
      ],
      vocab: [
        ["sapere (so, sai, sa, sappiamo, sanno)", "saber"],
        ["Sai se…?", "¿Sabes si…?"],
        ["Non lo so.", "No lo sé."],
        ["Fammi sapere!", "¡Avísame!"],
        ["Mi fa sapere?", "¿Me avisa? (de usted)"],
        ["conoscere", "conocer (personas, lugares) (acento: co-NO-sce-re)"],
        ["la riunione (le riunioni)", "la reunión (las reuniones)"],
        ["l'ordine del giorno", "el orden del día (acento: OR-di-ne)"],
        ["il punto", "el punto (del orden del día)"],
        ["il cliente (i clienti)", "el cliente (los clientes)"],
        ["il preventivo", "el presupuesto (para un cliente)"],
        ["il budget", "el presupuesto (dinero disponible)"],
        ["la scadenza", "el plazo, la fecha límite"],
        ["entro venerdì", "para el viernes (como muy tarde)"],
        ["il verbale", "el acta"],
        ["Cominciamo?", "¿Empezamos?"],
        ["Passiamo al punto successivo.", "Pasemos al siguiente punto."],
        ["Qual è la scadenza?", "¿Cuál es el plazo?"],
        ["Siamo in ritardo.", "Vamos con retraso."],
        ["Siamo nei tempi.", "Vamos bien de plazos."]
      ],
      ejercicios: [
        { t: "mc", q: "Un cliente te pide un «presupuesto». En italiano es…", ops: ["il preventivo", "il presupposto", "la proposta"], ok: 0 },
        { t: "mc", q: "«Para el viernes» (como muy tarde) se dice…", ops: ["entro venerdì", "fino venerdì", "dentro venerdì"], ok: 0 },
        { t: "mc", q: "¿Cuál está bien escrito?", ops: ["Qual è la scadenza?", "Qual'è la scadenza?", "Qual é la scadenza?"], ok: 0 },
        { t: "mc", q: "Giulia te escribe *Fammi sapere!* Te pide que…", ops: ["le avises", "le hagas un favor", "aprendas algo"], ok: 0 },
        { t: "oir", x: "sappiamo", ops: ["sappiamo", "sapete", "sanno"], ok: 0 },
        { t: "orden", es: "El cliente quiere el presupuesto para el viernes.", x: "Il cliente vuole il preventivo entro venerdì." },
        { t: "decir", es: "No lo sé.", x: "Non lo so." },
        { t: "decir", es: "Pasemos al siguiente punto.", x: "Passiamo al punto successivo." }
      ]
    },
    {
      id: "it3-6",
      titulo: "Fijar una cita: Sei libero giovedì?",
      min: 40,
      intro: "Fijar, mover y anular reuniones es media vida en una oficina. Con los verbos de esta semana ya puedes proponer una hora, decir que no puedes y buscar otra.",
      bloques: [
        {
          t: "p",
          x: "Para preguntar si alguien puede, usa *essere libero* (estar libre): *Sei libero giovedì?* (a Marco), *Sei libera giovedì?* (a Giulia), *È libero giovedì?* (al dottor Ferrari, de usted). Para quedar, *fissare* (fijar): *fissare una riunione*, *fissare un appuntamento*."
        },
        {
          t: "nota",
          x: "Días sin artículo: *giovedì* es «este jueves»; *il giovedì*, «los jueves». *Giovedì ho una riunione* (El jueves tengo una reunión) frente a *Il giovedì ho sempre una riunione* (Los jueves siempre tengo reunión)."
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["Sei libero giovedì mattina?", "¿Estás libre el jueves por la mañana?"],
            ["A che ora?", "¿A qué hora?"],
            ["Facciamo alle dieci?", "¿Quedamos a las diez?"],
            ["Per me va bene.", "Por mí, bien."],
            ["Mi dispiace, giovedì non posso.", "Lo siento, el jueves no puedo."],
            ["Ho un altro impegno.", "Tengo otro compromiso."],
            ["Sono impegnato tutta la mattina.", "Estoy ocupado toda la mañana."],
            ["Possiamo spostare la riunione a venerdì?", "¿Podemos pasar la reunión al viernes?"],
            ["Devo annullare l'appuntamento.", "Tengo que anular la cita."],
            ["Ci vediamo giovedì!", "¡Nos vemos el jueves!"]
          ]
        },
        {
          t: "p",
          x: "Verbos para cambiar planes: *spostare* (cambiar de día o de hora: *spostare a venerdì*), *rimandare* (aplazar, dejar para más adelante), *anticipare* (adelantar) y *annullare* (anular, cancelar)."
        },
        {
          t: "nota",
          x: "Falsos amigos de la agenda: el «compromiso» es *l'impegno* (*compromesso* es una concesión, un término medio), y «estoy ocupado» es *sono impegnato*; *occupato* se dice sobre todo de la línea, el baño o una sala (*La sala è occupata*). *Cancellare* también se oye, pero su primer sentido es «borrar»: para una reunión, mejor *annullare*."
        },
        {
          t: "ej",
          items: [
            ["Marco, sei libero giovedì?", "Marco, ¿estás libre el jueves?"],
            ["Giovedì mattina no, ho un altro impegno.", "El jueves por la mañana no, tengo otro compromiso."],
            ["E nel pomeriggio?", "¿Y por la tarde?"],
            ["Nel pomeriggio sì. Facciamo alle tre?", "Por la tarde, sí. ¿Quedamos a las tres?"],
            ["Perfetto. Mando io l'invito.", "Perfecto. Envío yo la convocatoria."],
            ["Dottor Ferrari, è libero lunedì alle undici?", "Doctor Ferrari, ¿está libre el lunes a las once?"],
            ["Purtroppo no. Possiamo fare martedì?", "Por desgracia, no. ¿Podemos hacerlo el martes?"],
            ["Il cliente vuole rimandare la riunione.", "El cliente quiere aplazar la reunión."],
            ["Possiamo anticipare alle nove?", "¿Podemos adelantarla a las nueve?"]
          ]
        }
      ],
      vocab: [
        ["fissare una riunione", "fijar, convocar una reunión"],
        ["fissare un appuntamento", "concertar una cita"],
        ["l'appuntamento", "la cita"],
        ["Sei libero giovedì?", "¿Estás libre el jueves? (a un hombre)"],
        ["Sei libera giovedì?", "¿Estás libre el jueves? (a una mujer)"],
        ["È libero lunedì?", "¿Está libre el lunes? (de usted, a un hombre)"],
        ["libero, libera", "libre (acento: LI-be-ro)"],
        ["Facciamo alle dieci?", "¿Quedamos a las diez?"],
        ["Per me va bene.", "Por mí, bien."],
        ["Mi dispiace, giovedì non posso.", "Lo siento, el jueves no puedo."],
        ["Ho un altro impegno.", "Tengo otro compromiso."],
        ["impegnato, impegnata", "ocupado, ocupada (con compromisos)"],
        ["E nel pomeriggio?", "¿Y por la tarde?"],
        ["spostare", "cambiar de día o de hora, mover"],
        ["Possiamo spostare la riunione?", "¿Podemos mover la reunión?"],
        ["rimandare", "aplazar"],
        ["anticipare", "adelantar"],
        ["annullare", "anular, cancelar"],
        ["l'invito", "la invitación; la convocatoria"],
        ["Mando io l'invito.", "Envío yo la convocatoria."],
        ["Ci vediamo giovedì!", "¡Nos vemos el jueves!"],
        ["il giovedì", "los jueves (cada jueves)"],
        ["purtroppo", "por desgracia"],
        ["La sala è occupata.", "La sala está ocupada."]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "Le preguntas a Giulia (os tuteáis) si está libre el jueves:",
          ops: ["Sei libera giovedì?", "Sei libero giovedì?", "È libera giovedì?"],
          ok: 0
        },
        {
          t: "mc",
          q: "*Il giovedì ho sempre una riunione* significa…",
          ops: ["Los jueves siempre tengo reunión.", "Este jueves tengo reunión.", "El jueves tuve reunión."],
          ok: 0
        },
        { t: "mc", q: "Quieres pasar la reunión del martes al jueves. Usas…", ops: ["spostare", "annullare", "fissare"], ok: 0 },
        { t: "mc", q: "«Tengo otro compromiso» se dice…", ops: ["Ho un altro impegno.", "Ho un altro compromesso.", "Ho altro impegno."], ok: 0 },
        { t: "oir", x: "annullare", ops: ["annullare", "anulare", "annullate"], ok: 0 },
        { t: "orden", es: "¿Podemos pasar la reunión al viernes?", x: "Possiamo spostare la riunione a venerdì?" },
        { t: "decir", es: "¿Estás libre el jueves? (a Marco)", x: "Sei libero giovedì?" },
        { t: "decir", es: "Por mí, bien.", x: "Per me va bene." }
      ]
    },
    {
      id: "it3-7",
      titulo: "Repaso: la reunión del presupuesto",
      min: 40,
      intro: "Repaso de la semana con una videollamada de trabajo. Lee el diálogo en voz alta haciendo de Carlos y fíjate en los verbos irregulares y en quién trata de *tu* y quién de *Lei*.",
      bloques: [
        {
          t: "ej",
          items: [
            ["Buongiorno a tutti! Carlos, sei collegato?", "Giulia: ¡Buenos días a todos! Carlos, ¿estás conectado?"],
            ["Sì, sono qui. Buongiorno!", "Carlos: Sí, estoy aquí. ¡Buenos días!"],
            ["Bene, cominciamo. Primo punto: il preventivo per il cliente di Torino. Marco, a che punto sei?", "Giulia: Bien, empezamos. Primer punto: el presupuesto para el cliente de Turín. Marco, ¿cómo lo llevas?"],
            ["Sto finendo i calcoli, ma devo sapere una cosa: qual è la scadenza?", "Marco: Estoy terminando los cálculos, pero tengo que saber una cosa: ¿cuál es el plazo?"],
            ["Il cliente vuole il preventivo entro venerdì.", "Giulia: El cliente quiere el presupuesto para el viernes."],
            ["Venerdì? Ma dai, abbiamo molto da fare!", "Marco: ¿El viernes? ¡Anda ya, tenemos mucho que hacer!"],
            ["Lo so, ma è un cliente importante. Dobbiamo rispettare la scadenza.", "Dottor Ferrari: Lo sé, pero es un cliente importante. Tenemos que cumplir el plazo."],
            ["Posso dare una mano io: faccio io la presentazione.", "Carlos: Puedo echar una mano yo: hago yo la presentación."],
            ["Perfetto, grazie! Dottor Ferrari, è libero giovedì alle dieci per una riunione con il cliente?", "Giulia: ¡Perfecto, gracias! Doctor Ferrari, ¿está libre el jueves a las diez para una reunión con el cliente?"],
            ["Alle dieci purtroppo no, ho un altro appuntamento. Facciamo alle undici e mezza?", "Dottor Ferrari: A las diez, por desgracia, no; tengo otra cita. ¿La hacemos a las once y media?"],
            ["Va bene. Carlos, vieni a Milano o partecipi da remoto?", "Giulia: Vale. Carlos, ¿vienes a Milán o participas en remoto?"],
            ["Da remoto: questa settimana non posso venire.", "Carlos: En remoto: esta semana no puedo ir."],
            ["E dopo la riunione usciamo a pranzo con il cliente?", "Marco: ¿Y después de la reunión salimos a comer con el cliente?"],
            ["Marco, prima il preventivo, poi il pranzo!", "Giulia: Marco, ¡primero el presupuesto y luego la comida!"],
            ["Mando io l'invito a tutti. Buon lavoro!", "Giulia: Envío yo la convocatoria a todos. ¡Que vaya bien el trabajo!"]
          ]
        },
        {
          t: "nota",
          x: "Registro: Giulia y Marco tutean a Carlos (*sei collegato?*, *vieni?*), pero Giulia trata de usted al director: *Dottor Ferrari, è libero…?* Al hablarle se dice *Dottor Ferrari*, sin artículo; al hablar de él, *il dottor Ferrari*."
        },
        {
          t: "tabla",
          cab: ["Infinitivo", "io", "noi", "loro"],
          audio: [0, 1, 2, 3],
          filas: [
            ["fare", "faccio", "facciamo", "fanno"],
            ["dire", "dico", "diciamo", "dicono"],
            ["andare", "vado", "andiamo", "vanno"],
            ["venire", "vengo", "veniamo", "vengono"],
            ["uscire", "esco", "usciamo", "escono"],
            ["stare", "sto", "stiamo", "stanno"],
            ["dare", "do", "diamo", "danno"],
            ["potere", "posso", "possiamo", "possono"],
            ["volere", "voglio", "vogliamo", "vogliono"],
            ["dovere", "devo", "dobbiamo", "devono"],
            ["sapere", "so", "sappiamo", "sanno"]
          ]
        },
        {
          t: "nota",
          x: "Dos alivios: *noi* acaba siempre en *-iamo*, y *voi* es regular en los once verbos: infinitivo sin *-re* + *-te* (*fate, dite, andate, venite, uscite, state, date, potete, volete, dovete, sapete*). Las sorpresas están en *io* y *loro*: repasa esas dos columnas en voz alta."
        },
        {
          t: "p",
          x: "Ahora tú: Giulia te escribe *Sei libero giovedì alle dieci?* y no puedes. Contesta en voz alta con tres frases: que lo sientes y no puedes, por qué (*ho un altro impegno*) y otra propuesta (*Facciamo…?*)."
        }
      ],
      vocab: [
        ["Buongiorno a tutti!", "¡Buenos días a todos!"],
        ["Sei collegato?", "¿Estás conectado?"],
        ["Sono qui.", "Estoy aquí."],
        ["A che punto sei?", "¿Cómo lo llevas?, ¿por dónde vas?"],
        ["Sto finendo.", "Estoy terminando."],
        ["il calcolo", "el cálculo (acento: CAL-co-lo)"],
        ["rispettare la scadenza", "cumplir el plazo"],
        ["Posso dare una mano io.", "Puedo echar una mano yo."],
        ["Faccio io la presentazione.", "Hago yo la presentación."],
        ["Ho un altro appuntamento.", "Tengo otra cita."],
        ["partecipare da remoto", "participar en remoto"],
        ["in presenza", "en persona, presencial"],
        ["dopo la riunione", "después de la reunión"],
        ["Ottimo lavoro!", "¡Buen trabajo! (para felicitar)"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "En el diálogo, ¿por qué no puede el dottor Ferrari a las diez?",
          ops: ["Tiene otra cita.", "Está de viaje.", "Tiene que hacer los cálculos."],
          ok: 0
        },
        {
          t: "mc",
          q: "Al despedirse, *Buon lavoro!* significa…",
          ops: ["¡Que vaya bien el trabajo!", "¡Qué buen trabajo has hecho!", "¡Vuelve al trabajo!"],
          ok: 0
        },
        { t: "mc", q: "Giulia al director: «¿Está libre el jueves?»", ops: ["È libero giovedì?", "Sei libero giovedì?", "Siete liberi giovedì?"], ok: 0 },
        { t: "mc", q: "Completa: «I clienti ___ il preventivo entro venerdì.»", ops: ["vogliono", "vuolono", "vogliamo"], ok: 0 },
        { t: "oir", x: "escono", ops: ["escono", "esce", "uscite"], ok: 0 },
        { t: "orden", es: "Tenemos que cumplir el plazo.", x: "Dobbiamo rispettare la scadenza." },
        { t: "decir", es: "¿Por dónde vas? (con un trabajo)", x: "A che punto sei?" },
        { t: "decir", es: "¡Invito yo!", x: "Offro io!" }
      ]
    }
  ],
  lecturas: [
    {
      id: "it3-r1",
      titulo: "Fissare una riunione",
      nivel: "A1",
      texto: "Giulia: Ciao Carlos! Dobbiamo fare il punto sul progetto con Marco. Sei libero giovedì alle dieci?\nCarlos: Ciao Giulia! Giovedì alle dieci purtroppo non posso: ho un altro impegno. Facciamo alle undici?\nGiulia: Alle undici Marco non può, perché va dal cliente. Venerdì mattina?\nCarlos: Venerdì mattina va bene. A che ora?\nGiulia: Alle nove e mezza. Mando io l'invito.\nCarlos: Perfetto, grazie!\n\nUn'ora dopo…\nGiulia: Carlos, scusa! Anche il dottor Ferrari vuole venire alla riunione, ma alle nove e mezza ha già un appuntamento. Non voglio annullare la riunione: possiamo spostare tutto alle dodici?\nCarlos: Nessun problema. Allora venerdì alle dodici. A venerdì!\nGiulia: A venerdì, e grazie!",
      traduccion: "Giulia: ¡Hola, Carlos! Tenemos que ver con Marco cómo va el proyecto. ¿Estás libre el jueves a las diez?\nCarlos: ¡Hola, Giulia! El jueves a las diez, por desgracia, no puedo: tengo otro compromiso. ¿Quedamos a las once?\nGiulia: A las once Marco no puede, porque va a ver al cliente. ¿El viernes por la mañana?\nCarlos: El viernes por la mañana me va bien. ¿A qué hora?\nGiulia: A las nueve y media. Envío yo la convocatoria.\nCarlos: ¡Perfecto, gracias!\n\nUna hora después…\nGiulia: ¡Carlos, perdona! El doctor Ferrari también quiere venir a la reunión, pero a las nueve y media ya tiene una cita. No quiero anular la reunión: ¿podemos pasarlo todo a las doce?\nCarlos: Ningún problema. Entonces, el viernes a las doce. ¡Hasta el viernes!\nGiulia: ¡Hasta el viernes, y gracias!",
      glosa: {
        giulia: "Giulia (nombre)",
        ciao: "¡hola! (informal; también sirve para despedirse)",
        carlos: "Carlos (nombre)",
        dobbiamo: "tenemos que (dovere, noi)",
        fare: "hacer («fare il punto su…» = ver cómo va algo)",
        il: "el (artículo)",
        punto: "punto («fare il punto» = hacer balance)",
        sul: "sobre el (su + il)",
        progetto: "proyecto",
        con: "con",
        marco: "Marco (nombre)",
        sei: "eres, estás (essere, tu): «sei libero?» = ¿estás libre?",
        libero: "libre (LI-be-ro)",
        "giovedì": "jueves (sin artículo: este jueves)",
        alle: "a las (a + le): «alle dieci» = a las diez",
        dieci: "diez",
        purtroppo: "por desgracia, lamentablemente",
        non: "no",
        posso: "puedo (potere, io)",
        ho: "tengo (avere, io)",
        un: "un; «un'ora» = una hora («una» se apostrofa ante vocal)",
        altro: "otro («un altro impegno» = otro compromiso, con «un»)",
        impegno: "compromiso, algo que hacer",
        facciamo: "hacemos (fare, noi): «Facciamo alle undici?» = ¿Quedamos a las once?",
        undici: "once (UN-di-ci)",
        "può": "puede (potere, lui/lei)",
        "perché": "porque",
        va: "va (andare, lui/lei); «va bene» = vale, me va bien",
        dal: "a donde está (da + il): «va dal cliente» = va a ver al cliente",
        cliente: "cliente",
        "venerdì": "viernes («A venerdì!» = ¡Hasta el viernes!)",
        mattina: "mañana (parte del día): «venerdì mattina» = el viernes por la mañana",
        bene: "bien",
        a: "a («A che ora?» = ¿A qué hora?; «A venerdì!» = ¡Hasta el viernes!)",
        che: "qué",
        ora: "hora",
        nove: "nueve",
        e: "y",
        mezza: "media («le nove e mezza» = las nueve y media)",
        mando: "envío (mandare, io)",
        io: "yo («Mando io» = lo envío yo: el sujeto detrás del verbo da énfasis)",
        l: "el, la (artículo ante vocal: «l'invito»)",
        invito: "invitación; convocatoria de reunión",
        perfetto: "perfecto",
        grazie: "gracias",
        dopo: "después («un'ora dopo» = una hora después)",
        scusa: "perdona (a quien tratas de tú)",
        anche: "también",
        dottor: "doctor («dottore» pierde la -e delante del apellido: «il dottor Ferrari»)",
        ferrari: "Ferrari (apellido)",
        vuole: "quiere (volere, lui/lei)",
        venire: "venir; aquí, ir a la reunión, donde estará Giulia",
        alla: "a la (a + la)",
        riunione: "reunión",
        ma: "pero",
        ha: "tiene (avere, lui/lei)",
        "già": "ya",
        appuntamento: "cita",
        voglio: "quiero (volere, io)",
        annullare: "anular, cancelar",
        la: "la (artículo)",
        possiamo: "podemos (potere, noi)",
        spostare: "cambiar de hora o de día, mover",
        tutto: "todo",
        dodici: "doce (DO-di-ci)",
        nessun: "ningún («nessun problema» = ningún problema)",
        problema: "problema (masculino: il problema)",
        allora: "entonces"
      },
      preguntas: [
        { q: "¿Por qué no puede Carlos el jueves a las diez?", ops: ["Tiene otro compromiso.", "Tiene que ir a ver al cliente.", "Está de viaje."], ok: 0 },
        { q: "¿Por qué no le van bien las once a Marco?", ops: ["Va a ver al cliente.", "Tiene una cita con el doctor Ferrari.", "Sale a comer."], ok: 0 },
        {
          q: "¿Por qué pasan la reunión del viernes a las doce?",
          ops: ["Para que pueda ir el doctor Ferrari.", "Porque Carlos no puede a las nueve y media.", "Porque la sala está ocupada."],
          ok: 0
        }
      ],
      notas: "*Facciamo alle undici?*: con *fare* propones una hora («¿Quedamos a las once?»). *Va dal cliente*: *andare da* + persona. *Mando io l'invito*: el sujeto detrás del verbo significa «de eso me encargo yo». Y Giulia dice *vuole venire alla riunione*, con *venire*, porque ella también estará allí."
    },
    {
      id: "it3-r2",
      titulo: "La riunione del lunedì",
      nivel: "A2",
      texto: "Ogni lunedì alle nove e mezza c'è la riunione del team. Il venerdì Giulia manda a tutti l'ordine del giorno. Carlos non può venire a Milano, quindi partecipa in videochiamata da Madrid.\n\nMarco arriva sempre in ritardo, con un caffè in mano. «Scusate, c'è traffico!», dice ogni volta. Ma Marco va in ufficio in bicicletta!\n\nIl primo punto è sempre lo stesso: i progetti e le scadenze. Questa settimana il cliente di Torino vuole un nuovo preventivo entro giovedì. Il dottor Ferrari dice: «Dobbiamo rispettare la scadenza: è un cliente importante.» Poi Giulia organizza il lavoro: Marco fa i calcoli e Carlos prepara la presentazione.\n\nAlla fine Giulia chiede: «Ci sono domande?» Marco alza la mano: «Sì, una: a che ora andiamo a pranzo?» Tutti ridono, anche il dottor Ferrari.",
      traduccion: "Cada lunes a las nueve y media hay reunión de equipo. Los viernes, Giulia envía a todos el orden del día. Carlos no puede ir a Milán, así que participa por videollamada desde Madrid.\n\nMarco siempre llega tarde, con un café en la mano. «¡Perdonad, hay tráfico!», dice cada vez. ¡Pero Marco va a la oficina en bici!\n\nEl primer punto es siempre el mismo: los proyectos y los plazos. Esta semana el cliente de Turín quiere un nuevo presupuesto para el jueves. El doctor Ferrari dice: «Tenemos que cumplir el plazo: es un cliente importante». Luego Giulia organiza el trabajo: Marco hace los cálculos y Carlos prepara la presentación.\n\nAl final, Giulia pregunta: «¿Hay preguntas?». Marco levanta la mano: «Sí, una: ¿a qué hora vamos a comer?». Todos se ríen, incluso el doctor Ferrari.",
      glosa: {
        ogni: "cada («ogni lunedì» = cada lunes; «ogni volta» = cada vez)",
        "lunedì": "lunes",
        alle: "a las (a + le)",
        nove: "nueve",
        e: "y",
        mezza: "media («le nove e mezza» = las nueve y media)",
        c: "«c'è» = hay (ci + è)",
        "è": "es, está (essere, lui/lei); «c'è» = hay",
        la: "la (artículo)",
        riunione: "reunión",
        del: "del (di + il)",
        team: "equipo (de trabajo; muy usado en las oficinas)",
        il: "el; con un día, costumbre: «il venerdì» = los viernes",
        "venerdì": "viernes",
        giulia: "Giulia (nombre)",
        manda: "envía (mandare, lei)",
        a: "a",
        tutti: "todos",
        l: "el, la (artículo ante vocal: «l'ordine»)",
        ordine: "orden (OR-di-ne): «l'ordine del giorno» = el orden del día",
        giorno: "día",
        carlos: "Carlos (nombre)",
        non: "no",
        "può": "puede (potere, lui/lei)",
        venire: "venir (el texto habla desde Milán)",
        milano: "Milán",
        quindi: "así que, por tanto",
        partecipa: "participa (partecipare, lui)",
        in: "en; «in videochiamata» = por videollamada; «in ritardo» = tarde; «in mano» = en la mano; «in bicicletta» = en bici",
        videochiamata: "videollamada",
        da: "desde",
        madrid: "Madrid",
        marco: "Marco (nombre)",
        arriva: "llega (arrivare, lui)",
        sempre: "siempre",
        ritardo: "retraso («in ritardo» = tarde, con retraso)",
        con: "con",
        un: "un",
        "caffè": "café",
        mano: "mano (femenino: la mano)",
        scusate: "perdonad, disculpad (a varias personas)",
        traffico: "tráfico (TRAF-fi-co)",
        dice: "dice (dire, lui/lei)",
        volta: "vez",
        ma: "pero",
        va: "va (andare, lui)",
        ufficio: "oficina («in ufficio» = a la oficina, en la oficina)",
        bicicletta: "bicicleta",
        primo: "primero",
        punto: "punto (del orden del día)",
        lo: "el (artículo ante s + consonante: «lo stesso»)",
        stesso: "mismo",
        i: "los (artículo)",
        progetti: "proyectos (plural de progetto)",
        le: "las (artículo)",
        scadenze: "plazos (plural de scadenza)",
        questa: "esta",
        settimana: "semana",
        cliente: "cliente",
        di: "de",
        torino: "Turín",
        vuole: "quiere (volere, lui)",
        nuovo: "nuevo",
        preventivo: "presupuesto (para un cliente)",
        entro: "antes de, como muy tarde («entro giovedì» = para el jueves)",
        "giovedì": "jueves",
        dottor: "doctor («dottore» delante de apellido)",
        ferrari: "Ferrari (apellido)",
        dobbiamo: "tenemos que (dovere, noi)",
        rispettare: "respetar; «rispettare la scadenza» = cumplir el plazo",
        scadenza: "plazo, fecha límite",
        importante: "importante",
        poi: "luego, después",
        organizza: "organiza (organizzare, lei)",
        lavoro: "trabajo",
        fa: "hace (fare, lui)",
        calcoli: "cálculos (CAL-co-li)",
        prepara: "prepara (preparare, lui)",
        presentazione: "presentación",
        alla: "a la (a + la): «alla fine» = al final",
        fine: "final, fin",
        chiede: "pregunta (chiedere, lei)",
        ci: "«ci sono» = hay (con plural)",
        sono: "son, están; «ci sono» = hay",
        domande: "preguntas (plural de domanda)",
        alza: "levanta (alzare, lui)",
        "sì": "sí",
        una: "una",
        che: "qué («a che ora?» = ¿a qué hora?)",
        ora: "hora",
        andiamo: "vamos (andare, noi)",
        pranzo: "comida del mediodía («andare a pranzo» = ir a comer)",
        ridono: "se ríen (ridere, loro; RI-do-no)",
        anche: "también, incluso"
      },
      preguntas: [
        { q: "¿Cómo participa Carlos en la reunión?", ops: ["Por videollamada desde Madrid", "Va a Milán todos los lunes", "No participa"], ok: 0 },
        {
          q: "¿Por qué tiene gracia la excusa de Marco?",
          ops: ["Porque va a la oficina en bici", "Porque vive al lado de la oficina", "Porque nunca llega tarde"],
          ok: 0
        },
        { q: "¿Qué quiere el cliente de Turín?", ops: ["Un nuevo presupuesto para el jueves", "Una reunión el jueves", "Una presentación el lunes"], ok: 0 },
        { q: "¿Qué pregunta Marco al final?", ops: ["A qué hora van a comer", "Cuál es el plazo", "Quién hace el acta"], ok: 0 }
      ],
      notas: "*Ogni lunedì* (cada lunes) y *il venerdì* (los viernes): costumbres. *Carlos non può venire a Milano*: *venire*, porque el texto habla desde Milán. *Lo stesso*: *lo* delante de *s* + consonante. *Fa i calcoli*: *fare* otra vez. Y *ridono* se acentúa *RI-do-no*."
    },
    {
      id: "it3-r3",
      titulo: "Marco e l'Inter",
      nivel: "A2",
      texto: "Venerdì pomeriggio, prima della riunione, Marco e Carlos fanno due chiacchiere in videochiamata.\n\nMarco: Allora, Carlos, cosa fai questo fine settimana?\nCarlos: Sabato sera esco con gli amici. E tu?\nMarco: Domenica c'è la partita più importante dell'anno: il derby, Inter-Milan! Vado allo stadio, a San Siro, con mio fratello.\nCarlos: Ah, allora sei interista!\nMarco: Certo! L'Inter è la mia squadra da sempre. E tu, per chi tifi? Real o Atletico?\nCarlos: Atletico, come mio padre.\nMarco: Ah, Simeone! Sai che è un ex giocatore dell'Inter?\nCarlos: Sì, lo so!\nMarco: Senti, quando vieni a Milano, andiamo insieme a San Siro. Trovo io i biglietti.\nCarlos: Volentieri! Ma devo dire una cosa: non so niente di calcio italiano.\nMarco: Non importa, spiego tutto io!\nGiulia: Ragazzi, il calcio dopo! Adesso cominciamo la riunione.\nMarco: Va bene, capo!",
      traduccion: "El viernes por la tarde, antes de la reunión, Marco y Carlos charlan un rato por videollamada.\n\nMarco: Bueno, Carlos, ¿qué haces este fin de semana?\nCarlos: El sábado por la noche salgo con los amigos. ¿Y tú?\nMarco: ¡El domingo es el partido más importante del año: el derbi, Inter-Milan! Voy al estadio, a San Siro, con mi hermano.\nCarlos: ¡Ah, entonces eres del Inter!\nMarco: ¡Claro! El Inter es mi equipo de toda la vida. ¿Y tú, de qué equipo eres? ¿Del Real o del Atlético?\nCarlos: Del Atlético, como mi padre.\nMarco: ¡Ah, Simeone! ¿Sabes que es un exjugador del Inter?\nCarlos: ¡Sí, lo sé!\nMarco: Oye, cuando vengas a Milán, vamos juntos a San Siro. Yo consigo las entradas.\nCarlos: ¡Con mucho gusto! Pero tengo que decir una cosa: no sé nada de fútbol italiano.\nMarco: No importa, ¡te lo explico yo todo!\nGiulia: Chicos, ¡el fútbol, después! Ahora empezamos la reunión.\nMarco: ¡Vale, jefa!",
      glosa: {
        "venerdì": "viernes («venerdì pomeriggio» = el viernes por la tarde)",
        pomeriggio: "tarde (después de comer)",
        prima: "antes («prima della riunione» = antes de la reunión)",
        della: "de la (di + la)",
        riunione: "reunión",
        marco: "Marco (nombre)",
        e: "y",
        carlos: "Carlos (nombre)",
        fanno: "hacen (fare, loro): «fare due chiacchiere» = charlar un rato",
        due: "dos",
        chiacchiere: "charla (CHIAC-chie-re): «due chiacchiere» = un rato de charla",
        in: "en; «in videochiamata» = por videollamada",
        videochiamata: "videollamada",
        allora: "bueno, entonces",
        cosa: "qué («cosa fai?» = ¿qué haces?); cosa («una cosa»)",
        fai: "haces (fare, tu)",
        questo: "este",
        fine: "fin («fine settimana» = fin de semana)",
        settimana: "semana",
        sabato: "sábado (SA-ba-to)",
        sera: "noche, tarde-noche («sabato sera» = el sábado por la noche)",
        esco: "salgo (uscire, io)",
        con: "con",
        gli: "los (artículo ante vocal: «gli amici»)",
        amici: "amigos (plural de amico)",
        tu: "tú",
        domenica: "domingo (do-ME-ni-ca)",
        c: "«c'è» = hay (ci + è)",
        "è": "es (essere); «c'è» = hay",
        la: "la (artículo)",
        partita: "partido (de fútbol); el partido político es «il partito»",
        "più": "más («la più importante» = la más importante)",
        importante: "importante",
        dell: "del (di + l', ante vocal)",
        anno: "año",
        il: "el (artículo)",
        derby: "derbi; el Inter-Milan es «il derby di Milano»",
        inter: "el Inter de Milán (femenino en italiano: «l'Inter»)",
        milan: "el AC Milan (masculino: «il Milan»)",
        vado: "voy (andare, io)",
        allo: "al (a + lo, ante s + consonante)",
        stadio: "estadio",
        a: "a",
        san: "San",
        siro: "Siro («San Siro» = el estadio del Inter y del Milan)",
        mio: "mi («mio fratello», «mio padre»: sin artículo con un familiar en singular)",
        fratello: "hermano",
        ah: "¡ah!",
        sei: "eres (essere, tu)",
        interista: "del Inter, aficionado del Inter",
        certo: "¡claro!",
        l: "el, la (artículo ante vocal: «l'Inter»)",
        mia: "mi (femenino: «la mia squadra»)",
        squadra: "equipo",
        da: "desde («da sempre» = de toda la vida)",
        sempre: "siempre",
        per: "por («tifare per» = ser de un equipo)",
        chi: "quién («per chi tifi?» = ¿de qué equipo eres?)",
        tifi: "animas a, eres de (tifare, tu)",
        real: "el Real Madrid",
        o: "o",
        atletico: "el Atlético de Madrid (en italiano se escribe sin tilde)",
        come: "como",
        padre: "padre",
        simeone: "Diego Simeone, mito del Atlético",
        sai: "sabes (sapere, tu)",
        che: "que",
        un: "un",
        ex: "ex («un ex giocatore» = un exjugador)",
        giocatore: "jugador",
        "sì": "sí",
        lo: "lo («lo so» = lo sé)",
        so: "sé (sapere, io)",
        senti: "oye (de sentire, oír)",
        quando: "cuando («quando vieni» = cuando vengas: presente en italiano)",
        vieni: "vienes (venire, tu)",
        milano: "Milán",
        andiamo: "vamos (andare, noi)",
        insieme: "juntos",
        trovo: "encuentro, consigo (trovare, io)",
        io: "yo («Trovo io» = las consigo yo)",
        i: "los (artículo)",
        biglietti: "entradas (plural de biglietto)",
        volentieri: "con mucho gusto",
        ma: "pero",
        devo: "tengo que (dovere, io)",
        dire: "decir",
        una: "una",
        non: "no",
        niente: "nada («non so niente» = no sé nada)",
        di: "de",
        calcio: "fútbol",
        italiano: "italiano",
        importa: "importa («non importa» = no importa)",
        spiego: "explico (spiegare, io)",
        tutto: "todo",
        giulia: "Giulia (nombre)",
        ragazzi: "chicos (también entre compañeros adultos)",
        dopo: "después",
        adesso: "ahora",
        cominciamo: "empezamos (cominciare, noi)",
        va: "va («va bene» = vale)",
        bene: "bien",
        capo: "jefe; aquí, en broma, a Giulia"
      },
      preguntas: [
        { q: "¿Qué hace Marco el domingo?", ops: ["Va al estadio a ver el derbi con su hermano", "Sale con los amigos", "Trabaja en la oficina"], ok: 0 },
        { q: "¿De qué equipo es Carlos?", ops: ["Del Atlético, como su padre", "Del Real Madrid", "Del Inter"], ok: 0 },
        {
          q: "¿Qué le propone Marco a Carlos?",
          ops: ["Ir juntos a San Siro cuando vaya a Milán", "Ver el partido por videollamada", "Jugar al fútbol el sábado"],
          ok: 0
        },
        {
          q: "¿Por qué los interrumpe Giulia?",
          ops: ["Porque tienen que empezar la reunión", "Porque ella es del Milan", "Porque empieza el partido"],
          ok: 0
        }
      ],
      notas: "*Tifare per* = ser de un equipo; el aficionado es *il tifoso*, y el del Inter, *interista*. Falso amigo: *la partita* es el partido de fútbol; *il partito*, el partido político. *L'Inter* es femenino (*la mia squadra*) y *il Milan*, masculino. *Allo stadio*: *a* + *lo*, porque *stadio* empieza por *s* + consonante. Y *quando vieni a Milano, andiamo…*: donde el español pone subjuntivo («cuando vengas»), el italiano usa el presente."
    }
  ]
});
