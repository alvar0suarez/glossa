// Glossa · italiano · semana 8: Opiniones, congiuntivo y textos de trabajo
window.CONTENT.it.semanas.push({
  n: 8,
  lecciones: [
    {
      id: "it8-1",
      titulo: "El congiuntivo (1): qué es y cómo se forma",
      min: 40,
      intro: "En una reunión italiana oirás sin parar *penso che sia…*, *spero che…*, *è importante che…*: es el congiuntivo, el subjuntivo italiano. Tienes ventaja, porque se forma casi como el español «que hable», «que coma».",
      bloques: [
        {
          t: "p",
          x: "El **congiuntivo** es el modo de lo que no presentas como un hecho seguro: opiniones, deseos, necesidades. Casi siempre va detrás de *che* (que): *Penso che Marco lavori troppo* (Creo que Marco trabaja demasiado)."
        },
        {
          t: "p",
          x: "Se forma como en español, **cambiando la vocal**: los verbos en *-are* pasan a **-i** (*parlare* → *che parli*, como «hablar → que hable») y los verbos en *-ere* y en *-ire* pasan a **-a** (*prendere* → *che prenda*, como «comer → que coma»)."
        },
        {
          t: "tabla",
          cab: ["", "parlare", "prendere", "partire", "finire"],
          audio: [1, 2, 3, 4],
          filas: [
            ["che io", "parli", "prenda", "parta", "finisca"],
            ["che tu", "parli", "prenda", "parta", "finisca"],
            ["che lui, lei, Lei", "parli", "prenda", "parta", "finisca"],
            ["che noi", "parliamo", "prendiamo", "partiamo", "finiamo"],
            ["che voi", "parliate", "prendiate", "partiate", "finiate"],
            ["che loro", "parlino", "prendano", "partano", "finiscano"]
          ]
        },
        {
          t: "nota",
          x: "Tres atajos. Las tres personas del singular son **iguales**, así que pon el sujeto cuando haya duda: *Penso che tu abbia ragione*. *Noi* es igual que en presente: *parliamo*, *prendiamo*. Y *loro* lleva el acento en la misma sílaba que *lui*: *PAR-li-no*, *PREN-da-no*, *fi-NI-sca-no*."
        },
        {
          t: "nota",
          x: "Ortografía, como en español («buscar → que busque»): los verbos en *-care* y *-gare* añaden una **h** para conservar el sonido duro: *cercare* → *che cerchi*, *pagare* → *che paghi*. Los verbos en *-iare* no duplican la *i*: *cominciare* → *che cominci*, *mangiare* → *che mangi*."
        },
        {
          t: "ej",
          items: [
            ["Penso che Marco lavori troppo.", "Creo que Marco trabaja demasiado."],
            ["Spero che il cliente accetti la proposta.", "Espero que el cliente acepte la propuesta."],
            ["È importante che tutti leggano il verbale.", "Es importante que todos lean el acta."],
            ["Bisogna che Chiara prenoti la sala riunioni.", "Hace falta que Chiara reserve la sala de reuniones."],
            ["Credo che la riunione cominci alle dieci.", "Creo que la reunión empieza a las diez."],
            ["Spero che il fornitore ci mandi il preventivo oggi.", "Espero que el proveedor nos mande el presupuesto hoy."],
            ["Voglio che voi finiate i test entro venerdì.", "Quiero que terminéis las pruebas para el viernes."],
            ["Penso che tu capisca benissimo.", "Creo que lo entiendes perfectamente."]
          ]
        },
        {
          t: "nota",
          x: "Mira las traducciones: en español dices «creo que Marco trabaja», con indicativo; en italiano, *penso che Marco lavori*, con congiuntivo. Es el error típico del hispanohablante, y lo verás a fondo en la lección 3."
        },
        {
          t: "nota",
          x: "Ya usas el congiuntivo sin saberlo: el imperativo de cortesía con *Lei* toma sus formas. *Scusi*, *Senta*, *Mi dica* y *Si accomodi* son congiuntivos de *scusare*, *sentire*, *dire* y *accomodarsi*."
        }
      ],
      vocab: [
        ["il congiuntivo", "el subjuntivo italiano"],
        ["che io parli", "que yo hable (-are → -i)"],
        ["che tu prenda", "que tú cojas, que tomes (-ere → -a)"],
        ["che lui parta", "que él se vaya, que salga de viaje (-ire → -a)"],
        ["che lei finisca", "que ella termine (-isc-)"],
        ["che noi parliamo", "que hablemos (igual que el presente)"],
        ["che voi parliate", "que habléis"],
        ["che loro parlino", "que ellos hablen (acento: PAR-li-no)"],
        ["che loro finiscano", "que ellos terminen (acento: fi-NI-sca-no)"],
        ["che tu cerchi", "que busques (-care → -chi)"],
        ["che lui paghi", "que él pague (-gare → -ghi)"],
        ["che cominci", "que empiece (-iare: una sola i)"],
        ["Penso che Marco lavori troppo.", "Creo que Marco trabaja demasiado."],
        ["Spero che il cliente accetti la proposta.", "Espero que el cliente acepte la propuesta."],
        ["È importante che tutti leggano il verbale.", "Es importante que todos lean el acta."],
        ["Bisogna che Chiara prenoti la sala riunioni.", "Hace falta que Chiara reserve la sala de reuniones."],
        ["Credo che la riunione cominci alle dieci.", "Creo que la reunión empieza a las diez."],
        ["Penso che tu capisca benissimo.", "Creo que lo entiendes perfectamente."]
      ],
      ejercicios: [
        { t: "mc", q: "Completa con *parlare*: «Penso che Marco ___ bene lo spagnolo.»", ops: ["parli", "parla", "parlo"], ok: 0 },
        { t: "mc", q: "Completa con *prendere*: «Spero che tu ___ il treno delle otto.»", ops: ["prenda", "prendi", "prendano"], ok: 0 },
        { t: "mc", q: "Completa con *pagare*: «Bisogna che il cliente ___ entro fine mese.»", ops: ["paghi", "pagi", "paga"], ok: 0 },
        { t: "mc", q: "¿Dónde va el acento en *finiscano*?", ops: ["fi-NI-sca-no", "fi-ni-SCA-no", "FI-ni-sca-no"], ok: 0 },
        {
          t: "mc",
          q: "*Scusi*, *Senta* y *Mi dica* son…",
          ops: ["formas del congiuntivo usadas como imperativo con Lei", "formas del passato prossimo", "imperativos con tu"],
          ok: 0
        },
        { t: "oir", x: "parlino", ops: ["parlino", "parliamo", "parliate"], ok: 0 },
        { t: "orden", es: "Espero que el cliente acepte la propuesta.", x: "Spero che il cliente accetti la proposta." },
        { t: "decir", es: "Creo que Marco trabaja demasiado.", x: "Penso che Marco lavori troppo." }
      ]
    },
    {
      id: "it8-2",
      titulo: "El congiuntivo (2): sia, abbia, faccia… los irregulares",
      min: 45,
      intro: "Los verbos que más usas en el trabajo (ser, tener, hacer, ir, poder, deber) son justo los irregulares. La buena noticia: casi todos salen de la forma *io* del presente: *faccio* → *che faccia*, *vengo* → *che venga*.",
      bloques: [
        {
          t: "tabla",
          cab: ["", "essere", "avere"],
          audio: [1, 2],
          filas: [
            ["che io", "sia", "abbia"],
            ["che tu", "sia", "abbia"],
            ["che lui, lei, Lei", "sia", "abbia"],
            ["che noi", "siamo", "abbiamo"],
            ["che voi", "siate", "abbiate"],
            ["che loro", "siano", "abbiano"]
          ]
        },
        {
          t: "nota",
          x: "Acento: la forma de *loro* se acentúa en la misma sílaba que el singular: *SI-a* → *SI-a-no*, *AB-bia* → *AB-bia-no*, *FAC-cia* → *FAC-cia-no*. Y marca bien la doble *b* de *abbia*."
        },
        {
          t: "p",
          x: "El truco para casi todos los demás: toma la forma *io* del presente y cambia la **-o** final por **-a**; para *loro*, añade **-no**. *Noi* y *voi* salen del *noi* del presente: *andiamo* → *che andiamo*, *che andiate*."
        },
        {
          t: "tabla",
          cab: ["Verbo", "io (presente)", "che io, tu, lui", "che loro", "Español"],
          audio: [0, 1, 2, 3],
          filas: [
            ["fare", "faccio", "faccia", "facciano", "hacer"],
            ["andare", "vado", "vada", "vadano", "ir"],
            ["venire", "vengo", "venga", "vengano", "venir"],
            ["potere", "posso", "possa", "possano", "poder"],
            ["volere", "voglio", "voglia", "vogliano", "querer"],
            ["dire", "dico", "dica", "dicano", "decir"],
            ["uscire", "esco", "esca", "escano", "salir"],
            ["rimanere", "rimango", "rimanga", "rimangano", "quedarse"],
            ["scegliere", "scelgo", "scelga", "scelgano", "elegir"]
          ]
        },
        { t: "p", x: "Cuatro van por libre, como *essere* y *avere*: apréndelos de memoria." },
        {
          t: "tabla",
          cab: ["Verbo", "che io, tu, lui", "che noi", "che loro", "Español"],
          audio: [0, 1, 2, 3],
          filas: [
            ["dovere", "debba", "dobbiamo", "debbano", "deber, tener que"],
            ["sapere", "sappia", "sappiamo", "sappiano", "saber"],
            ["stare", "stia", "stiamo", "stiano", "estar"],
            ["dare", "dia", "diamo", "diano", "dar"]
          ]
        },
        {
          t: "ej",
          items: [
            ["Penso che sia una buona idea.", "Creo que es una buena idea."],
            ["Credo che Giulia abbia ragione.", "Creo que Giulia tiene razón."],
            ["Spero che tu stia meglio.", "Espero que estés mejor."],
            ["È importante che il cliente sappia la verità.", "Es importante que el cliente sepa la verdad."],
            ["Bisogna che qualcuno vada a Milano.", "Hace falta que alguien vaya a Milán."],
            ["Spero che possiate venire alla presentazione.", "Espero que podáis venir a la presentación."],
            ["Mi sembra che il dottor Ferrari voglia più dati.", "Me parece que el doctor Ferrari quiere más datos."],
            ["Non credo che Marco venga oggi.", "No creo que Marco venga hoy."],
            ["È meglio che io faccia una prova prima.", "Es mejor que yo haga una prueba antes."]
          ]
        },
        {
          t: "nota",
          x: "Con *Lei* (el director, un cliente) el congiuntivo es el de *lui* y *lei*: *Spero che Lei stia bene* (Espero que usted esté bien). Por eso muchos correos formales empiezan con *Spero che stia bene*."
        }
      ],
      vocab: [
        ["che sia", "que sea, que esté (essere)"],
        ["che siano", "que sean, que estén (loro) (acento: SI-a-no)"],
        ["che abbia", "que tenga (avere)"],
        ["che abbiano", "que tengan (loro) (acento: AB-bia-no)"],
        ["che faccia", "que haga (fare)"],
        ["che vada", "que vaya (andare)"],
        ["che venga", "que venga (venire)"],
        ["che possa", "que pueda (potere)"],
        ["che voglia", "que quiera (volere)"],
        ["che debba", "que deba, que tenga que (dovere)"],
        ["che sappia", "que sepa (sapere)"],
        ["che stia", "que esté (stare)"],
        ["che dica", "que diga (dire)"],
        ["che esca", "que salga (uscire)"],
        ["che dia", "que dé (dare)"],
        ["che rimanga", "que se quede (rimanere)"],
        ["che scelga", "que elija (scegliere)"],
        ["Penso che sia una buona idea.", "Creo que es una buena idea."],
        ["Credo che Giulia abbia ragione.", "Creo que Giulia tiene razón."],
        ["Spero che stia bene.", "Espero que esté bien. (a usted; típico al empezar un correo)"],
        ["Non credo che Marco venga oggi.", "No creo que Marco venga hoy."],
        ["Bisogna che qualcuno vada a Milano.", "Hace falta que alguien vaya a Milán."],
        ["Spero che possiate venire.", "Espero que podáis venir."]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «Credo che Giulia ___ ragione.»", ops: ["abbia", "ha", "abbiamo"], ok: 0 },
        { t: "mc", q: "El presente de *fare* es *io faccio*. Su congiuntivo es…", ops: ["che faccia", "che fa", "che fai"], ok: 0 },
        { t: "mc", q: "Completa: «Spero che voi ___ venire alla cena.»", ops: ["possiate", "potete", "possano"], ok: 0 },
        { t: "mc", q: "Completa con *sapere*: «È importante che il cliente ___ la verità.»", ops: ["sappia", "sa", "sappiano"], ok: 0 },
        { t: "mc", q: "Escribes al doctor Ferrari. ¿Cómo empiezas?", ops: ["Spero che stia bene.", "Spero che stai bene.", "Spero che stiate bene."], ok: 0 },
        { t: "oir", x: "vengano", ops: ["vengano", "vadano", "vogliano"], ok: 0 },
        { t: "orden", es: "Creo que es una buena idea.", x: "Penso che sia una buona idea." },
        { t: "decir", es: "Creo que Giulia tiene razón.", x: "Credo che Giulia abbia ragione." }
      ]
    },
    {
      id: "it8-3",
      titulo: "El congiuntivo (3): ¿congiuntivo o indicativo?",
      min: 40,
      intro: "La trampa del hispanohablante: en español dices «creo que **es**», con indicativo, pero en italiano *penso che*, *credo che* y *mi sembra che* piden congiuntivo. Hoy ves cuándo se usa, cuándo no y cuándo basta un infinitivo.",
      bloques: [
        {
          t: "p",
          x: "Regla práctica: **congiuntivo** cuando lo que va detrás de *che* es una opinión, un deseo, una necesidad, una duda o una emoción; **indicativo** cuando es un hecho que das por seguro."
        },
        {
          t: "tabla",
          cab: ["Para…", "Expresiones + congiuntivo", "Ejemplo"],
          audio: [1, 2],
          filas: [
            ["opinar", "penso che, credo che, mi sembra che", "Mi sembra che il prezzo sia alto."],
            ["desear, pedir", "spero che, voglio che, preferisco che", "Preferisco che ne parliamo domani."],
            ["necesidad", "è importante che, è necessario che, bisogna che, è meglio che", "È necessario che il cliente firmi il contratto."],
            ["duda, posibilidad", "non sono sicuro che, è possibile che", "È possibile che il volo arrivi in ritardo."],
            ["emociones", "sono contento che, mi dispiace che", "Mi dispiace che tu non possa venire."]
          ]
        },
        {
          t: "ej",
          items: [
            ["So che Marco è in ufficio.", "Sé que Marco está en la oficina. (hecho: indicativo)"],
            ["Penso che Marco sia in ufficio.", "Creo que Marco está en la oficina. (opinión: congiuntivo)"],
            ["Sono sicuro che il prezzo è giusto.", "Estoy seguro de que el precio es justo. (certeza: indicativo)"],
            ["Non sono sicuro che il prezzo sia giusto.", "No estoy seguro de que el precio sea justo. (duda: congiuntivo)"],
            ["Secondo me è una buona idea.", "En mi opinión, es una buena idea. (sin «che»: indicativo)"]
          ]
        },
        {
          t: "nota",
          x: "**Secondo me** (y *per me*, *a mio parere*) va con **indicativo**, porque no hay *che*: *Secondo me è troppo caro*. Nunca «secondo me sia». Si quieres el congiuntivo, cambia de fórmula: *Penso che sia troppo caro*."
        },
        {
          t: "nota",
          x: "En español solo hay subjuntivo si niegas: «creo que es», pero «no creo que sea». En italiano da igual: *credo che sia* y *non credo che sia*."
        },
        {
          t: "p",
          x: "**Mismo sujeto: di + infinitivo.** Si quien opina o desea es el mismo que hace la acción, no hay *che*: *Penso di avere ragione* (Creo que tengo razón), *Spero di finire entro venerdì* (Espero terminar para el viernes). Con sujetos distintos, *che* + congiuntivo: *Spero che tu finisca entro venerdì*."
        },
        {
          t: "p",
          x: "**Sin sujeto concreto: infinitivo**, como en español: *È importante finire in tempo* (Es importante terminar a tiempo), *Bisogna cambiare il piano* (Hay que cambiar el plan). Si hay sujeto, *che* + congiuntivo: *È importante che tutti finiscano in tempo*."
        },
        {
          t: "ej",
          items: [
            ["Penso di avere ragione.", "Creo que tengo razón."],
            ["Credo di aver capito.", "Creo que lo he entendido."],
            ["Spero di finire entro venerdì.", "Espero terminar para el viernes."],
            ["Spero che tu finisca entro venerdì.", "Espero que termines para el viernes."],
            ["Bisogna cambiare il piano.", "Hay que cambiar el plan."],
            ["È importante finire in tempo.", "Es importante terminar a tiempo."]
          ]
        },
        {
          t: "nota",
          x: "Oirás a muchos italianos decir *penso che è* en una charla rápida. En una reunión o en un correo, el congiuntivo suena profesional y cuidado: úsalo siempre."
        }
      ],
      vocab: [
        ["mi sembra che…", "me parece que… (+ congiuntivo)"],
        ["mi pare che…", "me parece que… (+ congiuntivo)"],
        ["credo che…", "creo que… (+ congiuntivo)"],
        ["preferisco che…", "prefiero que… (+ congiuntivo)"],
        ["è necessario che…", "es necesario que… (+ congiuntivo)"],
        ["è meglio che…", "es mejor que… (+ congiuntivo)"],
        ["è possibile che…", "es posible que…, puede que… (+ congiuntivo)"],
        ["non sono sicuro che…", "no estoy seguro de que… (+ congiuntivo)"],
        ["sono sicuro che…", "estoy seguro de que… (+ indicativo)"],
        ["so che…", "sé que… (+ indicativo)"],
        ["è vero che…", "es verdad que… (+ indicativo)"],
        ["sono contento che…", "me alegro de que… (+ congiuntivo)"],
        ["mi dispiace che…", "siento que…, lamento que… (+ congiuntivo)"],
        ["Mi sembra che il prezzo sia alto.", "Me parece que el precio es alto."],
        ["Non sono sicuro che Marco sia in ufficio.", "No estoy seguro de que Marco esté en la oficina."],
        ["Mi dispiace che tu non possa venire.", "Siento que no puedas venir."],
        ["È possibile che il volo arrivi in ritardo.", "Es posible que el vuelo llegue con retraso."],
        ["Penso di avere ragione.", "Creo que tengo razón. (mismo sujeto: di + infinitivo)"],
        ["Credo di aver capito.", "Creo que lo he entendido."],
        ["Spero di finire entro venerdì.", "Espero terminar para el viernes."],
        ["Bisogna cambiare il piano.", "Hay que cambiar el plan."],
        ["È importante finire in tempo.", "Es importante terminar a tiempo."]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «Secondo me questa ___ la soluzione migliore.»", ops: ["è", "sia", "siano"], ok: 0 },
        { t: "mc", q: "Completa: «Penso che questa ___ la soluzione migliore.»", ops: ["sia", "è", "sono"], ok: 0 },
        { t: "mc", q: "Completa: «So che Marco ___ in ufficio.»", ops: ["è", "sia", "siano"], ok: 0 },
        { t: "mc", q: "Crees que tú tienes razón. Dices:", ops: ["Penso di avere ragione.", "Penso che io abbia ragione.", "Penso che ho ragione."], ok: 0 },
        {
          t: "mc",
          q: "«Hay que cambiar el plan» es…",
          ops: ["Bisogna cambiare il piano.", "Bisogna che cambiare il piano.", "Ha bisogno cambiare il piano."],
          ok: 0
        },
        { t: "oir", x: "Credo di aver capito.", ops: ["Credo di aver capito.", "Credo che abbia capito.", "Credo che abbiano capito."], ok: 0 },
        { t: "orden", es: "No estoy seguro de que Marco esté en la oficina.", x: "Non sono sicuro che Marco sia in ufficio." },
        { t: "decir", es: "Espero terminar para el viernes.", x: "Spero di finire entro venerdì." }
      ]
    },
    {
      id: "it8-4",
      titulo: "Opinar en una reunión: acuerdo, desacuerdo y propuestas",
      min: 45,
      intro: "En una reunión italiana todo el mundo opina, y a veces a la vez. Con estas fórmulas podrás dar tu opinión, mostrar acuerdo, discrepar con educación y proponer algo, con *tu* entre colegas y con *Lei* ante el director.",
      bloques: [
        {
          t: "tabla",
          cab: ["Para…", "Italiano", "Español"],
          audio: [1],
          filas: [
            ["pedir opinión (tu)", "Tu che ne pensi?", "¿Tú qué opinas?"],
            ["pedir opinión (Lei)", "Lei che ne pensa, dottor Ferrari?", "¿Usted qué opina, doctor Ferrari?"],
            ["pedir opinión (voi)", "Che ne dite?", "¿Qué os parece?"],
            ["opinar", "Secondo me… Per me…", "En mi opinión… Para mí…"],
            ["opinar (más formal)", "A mio parere… Dal mio punto di vista…", "A mi juicio… Desde mi punto de vista…"],
            ["opinar (+ congiuntivo)", "Penso che… Mi sembra che…", "Creo que… Me parece que…"]
          ]
        },
        { t: "p", x: "**Acuerdo y desacuerdo**, de más a menos:" },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["Sono pienamente d'accordo.", "Estoy totalmente de acuerdo."],
            ["Sono d'accordo con te.", "Estoy de acuerdo contigo."],
            ["Sono d'accordo con Lei.", "Estoy de acuerdo con usted."],
            ["Hai ragione.", "Tienes razón."],
            ["Anch'io la penso così.", "Yo también lo veo así."],
            ["Sì, però…", "Sí, pero…"],
            ["Non sono del tutto d'accordo.", "No estoy del todo de acuerdo."],
            ["Non sono convinto che sia la soluzione giusta.", "No estoy convencido de que sea la solución adecuada."],
            ["Io la vedo diversamente.", "Yo lo veo de otra manera."],
            ["Non sono affatto d'accordo.", "No estoy nada de acuerdo."]
          ]
        },
        {
          t: "nota",
          x: "Dos trampas. Es *sono d'accordo* (no «sono de accordo»): la *d'* es *di* con apóstrofo. Y «tener razón» es *avere ragione*, sin artículo: *hai ragione*, *ha ragione* (usted), nunca «sei ragione». *Non… affatto* significa «en absoluto»: úsalo con cuidado."
        },
        {
          t: "nota",
          x: "Para discrepar a la italiana, primero reconoce algo y luego matiza con *però* o *ma*: *Capisco il tuo punto di vista, però i tempi sono stretti* (Entiendo tu punto de vista, pero los plazos son ajustados)."
        },
        {
          t: "p",
          x: "**Proponer.** *Propongo che* + congiuntivo cuando la acción la hace otro; *propongo di* + infinitivo cuando la hacéis todos o la haces tú. También sirven *Perché non…?* y *Che ne dite di…?* + infinitivo."
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["Propongo che Marco prepari una demo.", "Propongo que Marco prepare una demo."],
            ["Propongo di rimandare la consegna.", "Propongo aplazar la entrega."],
            ["Perché non facciamo una prova?", "¿Por qué no hacemos una prueba?"],
            ["Che ne dite di fare una pausa?", "¿Qué os parece si hacemos una pausa?"],
            ["Suggerisco di sentire il cliente.", "Sugiero hablar con el cliente."]
          ]
        },
        { t: "p", x: "**Pedir la palabra y cerrar:**" },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["Posso dire una cosa?", "¿Puedo decir una cosa?"],
            ["Scusa se ti interrompo.", "Perdona que te interrumpa."],
            ["Scusi se La interrompo.", "Perdone que le interrumpa."],
            ["Volevo aggiungere una cosa.", "Quería añadir una cosa."],
            ["Allora, ricapitolando…", "Bueno, resumiendo…"],
            ["Passiamo al punto successivo.", "Pasemos al siguiente punto."]
          ]
        },
        {
          t: "ej",
          items: [
            ["Allora, che ne pensate?", "Giulia: Bueno, ¿qué os parece?"],
            ["Secondo me il prezzo è giusto, ma i tempi sono troppo stretti.", "Marco: En mi opinión el precio es razonable, pero los plazos son demasiado ajustados."],
            ["Sono d'accordo con Marco. Propongo che il cliente ci dia un mese in più.", "Carlos: Estoy de acuerdo con Marco. Propongo que el cliente nos dé un mes más."],
            ["Non sono del tutto d'accordo: non credo che il cliente accetti.", "Giulia: No estoy del todo de acuerdo: no creo que el cliente lo acepte."],
            ["Dottor Ferrari, Lei che ne pensa?", "Carlos: Doctor Ferrari, ¿usted qué opina?"],
            ["Penso che sia meglio chiedere al cliente.", "Ferrari: Creo que es mejor preguntar al cliente."],
            ["Va bene, lo chiamo io oggi pomeriggio.", "Giulia: Vale, lo llamo yo esta tarde."]
          ]
        }
      ],
      vocab: [
        ["Tu che ne pensi?", "¿Tú qué opinas?"],
        ["Lei che ne pensa?", "¿Usted qué opina?"],
        ["Che ne dite?", "¿Qué os parece?"],
        ["a mio parere", "a mi juicio"],
        ["dal mio punto di vista", "desde mi punto de vista"],
        ["Sono pienamente d'accordo.", "Estoy totalmente de acuerdo."],
        ["Sono d'accordo con Lei.", "Estoy de acuerdo con usted."],
        ["Ha ragione.", "Tiene razón (usted)."],
        ["Anch'io la penso così.", "Yo también lo veo así."],
        ["Non sono del tutto d'accordo.", "No estoy del todo de acuerdo."],
        ["Non sono convinto.", "No estoy convencido."],
        ["Io la vedo diversamente.", "Yo lo veo de otra manera."],
        ["Non sono affatto d'accordo.", "No estoy nada de acuerdo."],
        ["Capisco il tuo punto di vista, però…", "Entiendo tu punto de vista, pero…"],
        ["i tempi sono stretti", "los plazos son ajustados"],
        ["Propongo che Marco prepari una demo.", "Propongo que Marco prepare una demo."],
        ["Propongo di rimandare la consegna.", "Propongo aplazar la entrega."],
        ["Che ne dite di fare una pausa?", "¿Qué os parece si hacemos una pausa?"],
        ["Posso dire una cosa?", "¿Puedo decir una cosa?"],
        ["Scusa se ti interrompo.", "Perdona que te interrumpa."],
        ["Volevo aggiungere una cosa.", "Quería añadir una cosa."],
        ["Allora, ricapitolando…", "Bueno, resumiendo…"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "El doctor Ferrari acaba de hablar y estás de acuerdo con él:",
          ops: ["Sono d'accordo con Lei.", "Sono d'accordo con te.", "Sono de accordo con Lei."],
          ok: 0
        },
        { t: "mc", q: "«Tienes razón» es…", ops: ["Hai ragione.", "Sei ragione.", "Hai la ragione."], ok: 0 },
        { t: "mc", q: "Completa con *dare*: «Propongo che il cliente ci ___ un mese in più.»", ops: ["dia", "dà", "dai"], ok: 0 },
        {
          t: "mc",
          q: "¿Cuál es el desacuerdo más suave?",
          ops: ["Non sono del tutto d'accordo.", "Non sono affatto d'accordo.", "Non sono d'accordo per niente."],
          ok: 0
        },
        { t: "oir", x: "Che ne pensa?", ops: ["Che ne pensa?", "Che ne pensi?", "Che ne pensate?"], ok: 0 },
        { t: "orden", es: "Entiendo tu punto de vista, pero los plazos son ajustados.", x: "Capisco il tuo punto di vista, però i tempi sono stretti." },
        { t: "decir", es: "No estoy del todo de acuerdo.", x: "Non sono del tutto d'accordo." },
        { t: "decir", es: "Perdona que te interrumpa.", x: "Scusa se ti interrompo." }
      ]
    },
    {
      id: "it8-5",
      titulo: "Textos de trabajo (1): la cadena de correos",
      min: 40,
      intro: "Buena parte de tu trabajo con Milán pasa por el correo: responder, reenviar, poner a alguien en copia y recordar un plazo sin sonar brusco. Hoy repasas las fórmulas de la semana 4 y añades las de una cadena de correos real, con *tu* y con *Lei*.",
      bloques: [
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["l'oggetto", "el asunto"],
            ["l'allegato", "el archivo adjunto"],
            ["rispondere a tutti", "responder a todos"],
            ["inoltrare una mail", "reenviar un correo"],
            ["mettere in copia", "poner en copia"],
            ["in copia nascosta", "en copia oculta"],
            ["la bozza", "el borrador"],
            ["un sollecito", "un recordatorio de algo pendiente"],
            ["la scadenza", "el plazo, la fecha límite"]
          ]
        },
        {
          t: "nota",
          x: "En el asunto, *Re:* (o *R:*) marca una respuesta, y *Fwd:* (o *I:*, de *inoltro*) un reenvío. Entre colegas oirás *Ti giro la mail di Marco* (Te reenvío el correo de Marco): *girare* es «reenviar» en lenguaje informal. *Mail* es femenino: *la mail*, *le mail*."
        },
        {
          t: "tabla",
          cab: ["", "Con tu (Giulia, Marco)", "Con Lei (el doctor Ferrari)"],
          audio: [1, 2],
          filas: [
            ["Saludo", "Ciao Giulia,", "Gentile dottor Ferrari,"],
            ["Cortesía", "Spero che tu stia bene.", "Spero che stia bene."],
            ["Motivo", "Ti scrivo per il preventivo.", "Le scrivo in merito al preventivo."],
            ["Seguimiento", "Come d'accordo, ti mando il file.", "Come d'accordo, Le invio il documento."],
            ["Adjunto", "In allegato trovi il rapporto.", "In allegato trova il rapporto."],
            ["Petición", "Mi fai sapere entro venerdì?", "Mi faccia sapere entro venerdì, per cortesia."],
            ["Disculpa", "Scusa il ritardo!", "Mi scuso per il ritardo nella risposta."],
            ["Despedida", "Un saluto e a presto", "Cordiali saluti"]
          ]
        },
        {
          t: "nota",
          x: "*Gentile* vale para todos: *Gentile dottor Ferrari*, *Gentile dottoressa Conti*, *Gentili colleghi*. *Egregio* es más solemne (cartas oficiales) y *Caro*, cercano. Y fíjate en *Mi faccia sapere*: otra vez el congiuntivo como imperativo de *Lei*."
        },
        {
          t: "p",
          x: "**Recordar un plazo sin sonar brusco.** El italiano suaviza con el imperfetto, el condicional y el congiuntivo: *Ti volevo ricordare che la scadenza è venerdì* (Quería recordarte que el plazo vence el viernes), *Ti chiederei di mandarmi i dati entro domani* (Te pediría que me mandaras los datos para mañana), *È importante che il cliente riceva tutto entro lunedì*."
        },
        {
          t: "ej",
          items: [
            ["Oggetto: Re: Consegna della piattaforma", "Asunto: Re: Entrega de la plataforma"],
            ["Ciao Giulia, ti scrivo per aggiornarti sui test.", "Hola, Giulia: te escribo para ponerte al día sobre las pruebas."],
            ["Metto in copia Marco, che segue la parte tecnica.", "Pongo en copia a Marco, que lleva la parte técnica."],
            ["In allegato trovi la bozza della presentazione.", "Te adjunto el borrador de la presentación."],
            ["Ti volevo ricordare che la scadenza è venerdì.", "Quería recordarte que el plazo vence el viernes."],
            ["Mi scuso per il ritardo nella risposta.", "Disculpe el retraso en responder."],
            ["Resto a disposizione per qualsiasi chiarimento.", "Quedo a su disposición para cualquier aclaración."],
            ["Grazie in anticipo e buona giornata.", "Gracias de antemano y que tengas un buen día."]
          ]
        }
      ],
      vocab: [
        ["In allegato trovi il rapporto.", "Te adjunto el informe."],
        ["In allegato trova il documento.", "Le adjunto el documento. (Lei)"],
        ["rispondere a tutti", "responder a todos (acento: ri-SPON-de-re)"],
        ["inoltrare una mail", "reenviar un correo"],
        ["Ti giro la mail di Marco.", "Te reenvío el correo de Marco. (informal)"],
        ["mettere in copia", "poner en copia"],
        ["Metto in copia Marco.", "Pongo en copia a Marco."],
        ["la bozza", "el borrador"],
        ["un sollecito", "un recordatorio de algo pendiente (acento: sol-LE-ci-to)"],
        ["Ti volevo ricordare che…", "Quería recordarte que…"],
        ["Spero che tu stia bene.", "Espero que estés bien."],
        ["Le scrivo in merito a…", "Le escribo en relación con… (Lei)"],
        ["Come d'accordo…", "Como quedamos…"],
        ["Mi scuso per il ritardo nella risposta.", "Disculpe el retraso en responder."],
        ["Resto a disposizione per qualsiasi chiarimento.", "Quedo a su disposición para cualquier aclaración."],
        ["Grazie in anticipo.", "Gracias de antemano."],
        ["aggiornare qualcuno", "poner al día a alguien"],
        ["seguire un progetto", "llevar un proyecto, encargarse de él"]
      ],
      ejercicios: [
        { t: "mc", q: "Escribes al doctor Ferrari. ¿Qué saludo usas?", ops: ["Gentile dottor Ferrari,", "Ciao dottor Ferrari,", "Caro Ferrari,"], ok: 0 },
        { t: "mc", q: "«Reenviar un correo» se dice…", ops: ["inoltrare una mail", "rispondere a una mail", "allegare una mail"], ok: 0 },
        { t: "mc", q: "Con *Lei*, «avíseme, dígame algo» es…", ops: ["Mi faccia sapere.", "Fammi sapere.", "Fatemi sapere."], ok: 0 },
        { t: "mc", q: "*La scadenza* es…", ops: ["el plazo, la fecha límite", "el asunto del correo", "el archivo adjunto"], ok: 0 },
        { t: "oir", x: "Spero che tu stia bene.", ops: ["Spero che tu stia bene.", "Spero che stia bene.", "Spero che stiate bene."], ok: 0 },
        { t: "orden", es: "Quedo a su disposición para cualquier aclaración.", x: "Resto a disposizione per qualsiasi chiarimento." },
        { t: "orden", es: "Quería recordarte que el plazo vence el viernes.", x: "Ti volevo ricordare che la scadenza è venerdì." },
        { t: "decir", es: "Te reenvío el correo de Marco.", x: "Ti giro la mail di Marco." }
      ]
    },
    {
      id: "it8-6",
      titulo: "Textos de trabajo (2): el acta y el informe mensual",
      min: 45,
      intro: "Después de cada reunión alguien escribe el *verbale* (el acta), y a final de mes te pedirán un *rapporto* (informe) breve. Son textos muy fijos: con sus fórmulas los lees en un minuto y los escribes sin miedo.",
      bloques: [
        {
          t: "p",
          x: "**El verbale** sigue siempre el mismo orden: fecha, asistentes, orden del día, qué se discutió, qué se decidió y quién hace qué. Suele ir en presente y con mucho *si* impersonal, que funciona como el «se» español: *si discute* (se habla), *si decide* (se decide)."
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["Verbale della riunione del 13 ottobre", "Acta de la reunión del 13 de octubre"],
            ["Presenti… Assenti…", "Asistentes… Ausentes…"],
            ["Redige il verbale: Chiara.", "Redacta el acta: Chiara."],
            ["l'ordine del giorno", "el orden del día"],
            ["varie ed eventuali", "ruegos y preguntas"],
            ["Si discute del budget.", "Se habla del presupuesto."],
            ["Si decide di presentare la proposta al cliente.", "Se decide presentar la propuesta al cliente."],
            ["La proposta è approvata all'unanimità.", "La propuesta se aprueba por unanimidad."],
            ["Prossimi passi", "Próximos pasos"],
            ["La riunione si chiude alle 11:30.", "La reunión termina a las 11:30."]
          ]
        },
        {
          t: "p",
          x: "**La pasiva** abunda en actas e informes y se forma como en español: *essere* + participio, que concuerda con el sujeto. *Il budget è stato approvato* (El presupuesto ha sido aprobado), *Le date sono state confermate* (Las fechas han sido confirmadas). Y para las decisiones: *È stato deciso che…* (Se ha decidido que…)."
        },
        {
          t: "nota",
          x: "Falsos amigos de oficina: en italiano *informe* es un adjetivo («sin forma»); el informe es *il rapporto* o *la relazione* (que también significa «relación»). Y *il presupposto* es «la premisa»: el presupuesto de un proveedor es *il preventivo*, y el de un proyecto, *il budget*."
        },
        {
          t: "p",
          x: "**El rapporto mensile** también tiene apartados fijos: *attività svolte* (actividades realizadas), *risultati* (resultados), *criticità* (puntos críticos, problemas) y *prossimi passi* (próximos pasos). Para comparar cifras, *rispetto a* (con respecto a)."
        },
        {
          t: "tabla",
          cab: ["Italiano", "Español"],
          audio: [0],
          filas: [
            ["Il fatturato è aumentato del 5%.", "La facturación ha aumentado un 5 %."],
            ["Le vendite sono salite rispetto a settembre.", "Las ventas han subido con respecto a septiembre."],
            ["I costi sono scesi del 3%.", "Los costes han bajado un 3 %."],
            ["Il numero di utenti è rimasto stabile.", "El número de usuarios se ha mantenido estable."],
            ["Siamo in linea con il budget.", "Estamos dentro del presupuesto."],
            ["Abbiamo raggiunto l'obiettivo.", "Hemos alcanzado el objetivo."],
            ["in aumento, in calo", "al alza, a la baja"],
            ["nel primo trimestre", "en el primer trimestre"]
          ]
        },
        {
          t: "nota",
          x: "Ojo al auxiliar (semana 4): *salire*, *scendere* y *rimanere* van con *essere* y concuerdan: *le vendite sono salite*, *i costi sono scesi*. *Aumentare* y *diminuire* llevan *essere* si algo sube o baja solo (*il fatturato è aumentato*) y *avere* si alguien lo sube o lo baja (*abbiamo aumentato i prezzi*). Y recuerda: *salire* es «subir»; «salir» es *uscire*."
        },
        {
          t: "ej",
          items: [
            ["Si è deciso di lanciare una prima versione a dicembre.", "Se decidió lanzar una primera versión en diciembre."],
            ["È stato deciso che Marco seguirà i test.", "Se ha decidido que Marco se encargará de las pruebas."],
            ["Il budget è stato approvato.", "El presupuesto ha sido aprobado."],
            ["Nel mese di ottobre abbiamo completato la fase di test.", "En octubre hemos completado la fase de pruebas."],
            ["Il fornitore ha consegnato con una settimana di ritardo.", "El proveedor entregó con una semana de retraso."],
            ["Il numero di utenti è salito del 12% rispetto a settembre.", "El número de usuarios ha subido un 12 % con respecto a septiembre."],
            ["La principale criticità è il ritardo del fornitore.", "El principal problema es el retraso del proveedor."],
            ["Per novembre prevediamo di lanciare la prima versione.", "Para noviembre tenemos previsto lanzar la primera versión."]
          ]
        }
      ],
      vocab: [
        ["redigere il verbale", "redactar el acta (participio: redatto) (acento: re-DI-ge-re)"],
        ["varie ed eventuali", "ruegos y preguntas (último punto del orden del día)"],
        ["i presenti, gli assenti", "los asistentes, los ausentes"],
        ["si discute di…", "se habla de…, se trata…"],
        ["Si decide di presentare la proposta al cliente.", "Se decide presentar la propuesta al cliente."],
        ["È stato deciso che…", "Se ha decidido que…"],
        ["Il budget è stato approvato.", "El presupuesto ha sido aprobado."],
        ["all'unanimità", "por unanimidad"],
        ["i prossimi passi", "los próximos pasos"],
        ["il rapporto mensile", "el informe mensual"],
        ["le attività svolte", "las actividades realizadas"],
        ["la criticità", "el punto crítico, el problema"],
        ["Il fatturato è aumentato del 5%.", "La facturación ha aumentado un 5 %."],
        ["rispetto a", "con respecto a, en comparación con"],
        ["in aumento, in calo", "al alza, a la baja"],
        ["Siamo in linea con il budget.", "Estamos dentro del presupuesto."],
        ["raggiungere", "alcanzar, lograr (participio: raggiunto) (acento: rag-GIUN-ge-re)"],
        ["Abbiamo raggiunto l'obiettivo.", "Hemos alcanzado el objetivo."],
        ["il ritardo", "el retraso"],
        ["prevedere di… (previsto)", "tener previsto…, prever"]
      ],
      ejercicios: [
        { t: "mc", q: "*L'ordine del giorno* es…", ops: ["el orden del día", "la orden del director", "la fecha de la reunión"], ok: 0 },
        {
          t: "mc",
          q: "En un acta, *varie ed eventuali* es…",
          ops: ["ruegos y preguntas, otros asuntos", "las tareas de cada uno", "la lista de ausentes"],
          ok: 0
        },
        { t: "mc", q: "¿Cómo se dice «un informe» en italiano?", ops: ["un rapporto", "un informe", "un presupposto"], ok: 0 },
        { t: "mc", q: "Completa: «Le vendite ___ salite del 10%.»", ops: ["sono", "hanno", "è"], ok: 0 },
        {
          t: "mc",
          q: "*Il budget è stato approvato* significa…",
          ops: ["El presupuesto ha sido aprobado.", "El presupuesto estaba aprobado.", "El presupuesto se aprobará."],
          ok: 0
        },
        { t: "oir", x: "il fatturato", ops: ["il fatturato", "la fattura", "il fattorino"], ok: 0 },
        { t: "orden", es: "Se decide presentar la propuesta al cliente.", x: "Si decide di presentare la proposta al cliente." },
        { t: "decir", es: "Hemos alcanzado el objetivo.", x: "Abbiamo raggiunto l'obiettivo." }
      ]
    },
    {
      id: "it8-7",
      titulo: "Repaso del nivel: la reunión decisiva",
      min: 45,
      intro: "Última lección del nivel: una reunión con todo el equipo en la que Carlos opina, discrepa con educación y propone una solución. Escúchala frase a frase y repásala haciendo de Carlos; al final tienes lo esencial de las ocho semanas en una tabla.",
      bloques: [
        {
          t: "p",
          x: "**La reunión.** El cliente quiere adelantar el lanzamiento y el proveedor va con retraso. Escucha cada frase; después tapa el español y di la parte de Carlos antes de pulsar el altavoz."
        },
        {
          t: "ej",
          items: [
            ["Bene, passiamo al secondo punto: la data del lancio. Giulia, prego.", "Ferrari: Bien, pasemos al segundo punto: la fecha del lanzamiento. Giulia, adelante."],
            ["Il cliente vuole anticipare il lancio al primo dicembre. Che ne pensate?", "Giulia: El cliente quiere adelantar el lanzamiento al 1 de diciembre. ¿Qué os parece?"],
            ["Secondo me è impossibile. Il fornitore è già in ritardo di due settimane.", "Marco: En mi opinión es imposible. El proveedor ya lleva dos semanas de retraso."],
            ["Posso dire una cosa? Sono d'accordo con Marco sui tempi, però non credo che sia una buona idea dire di no al cliente.", "Carlos: ¿Puedo decir una cosa? Estoy de acuerdo con Marco en los plazos, pero no creo que sea buena idea decirle que no al cliente."],
            ["E quindi cosa proponi?", "Giulia: ¿Y entonces qué propones?"],
            ["Propongo che a dicembre lanciamo una prima versione solo per alcuni clienti. Così il cliente è contento e noi abbiamo più tempo.", "Carlos: Propongo que en diciembre lancemos una primera versión solo para algunos clientes. Así el cliente está contento y nosotros tenemos más tiempo."],
            ["Mah… non sono del tutto d'accordo. Secondo me è rischioso.", "Marco: Pues… no estoy del todo de acuerdo. Me parece arriesgado."],
            ["Hai ragione, c'è un rischio. Però a Madrid l'abbiamo già fatto l'anno scorso e ha funzionato bene.", "Carlos: Tienes razón, hay un riesgo. Pero en Madrid ya lo hicimos el año pasado y funcionó bien."],
            ["Dottor Ferrari, Lei cosa ne pensa?", "Giulia: Doctor Ferrari, ¿usted qué opina?"],
            ["Penso che la proposta di Carlos sia ragionevole. Però è importante che il cliente sappia esattamente cosa riceve.", "Ferrari: Creo que la propuesta de Carlos es razonable. Pero es importante que el cliente sepa exactamente qué recibe."],
            ["Certo. Se vuole, preparo io una presentazione per il cliente.", "Carlos: Claro. Si quiere, preparo yo una presentación para el cliente."],
            ["Perfetto. Allora, ricapitolando: Carlos prepara la presentazione, Marco sente il fornitore e Giulia fissa un incontro con il cliente.", "Ferrari: Perfecto. Entonces, resumiendo: Carlos prepara la presentación, Marco habla con el proveedor y Giulia concierta una reunión con el cliente."],
            ["Mando il verbale a tutti entro stasera.", "Chiara: Mando el acta a todos esta misma tarde."],
            ["Grazie. Spero che il cliente sia d'accordo. Buon lavoro a tutti!", "Ferrari: Gracias. Espero que el cliente esté de acuerdo. ¡Buen trabajo a todos!"]
          ]
        },
        {
          t: "nota",
          x: "Fíjate en cómo discrepa Carlos: primero da la razón (*Sono d'accordo con Marco sui tempi*, *Hai ragione, c'è un rischio*) y después matiza con *però*. Con Giulia y Marco usa *tu*; con el director, *Lei*: *Se vuole, preparo io…*"
        },
        { t: "p", x: "**Lo esencial del nivel**, semana a semana. Lee cada ejemplo en voz alta:" },
        {
          t: "tabla",
          cab: ["Semana", "Lo esencial", "Ejemplo"],
          audio: [2],
          filas: [
            ["1", "tu con los colegas, Lei con el director", "Come stai, Giulia? Come sta, dottor Ferrari?"],
            ["1", "lo y gli ante s + consonante y ante z; gli también ante vocal", "lo stipendio, lo zaino, gli uffici"],
            ["2", "presente regular, también con -isc-", "Lavoro a Madrid e finisco alle sei."],
            ["3", "potere, volere, dovere + infinitivo", "Devo mandare il preventivo oggi."],
            ["4", "passato prossimo con avere y con essere", "Ho scritto il rapporto e sono andato in riunione."],
            ["5", "pronombres, ci y ne", "Lo chiamo domani. Ne parliamo in riunione."],
            ["6", "futuro y condicional de cortesía", "Vi manderò i dati. Potrebbe ripetere?"],
            ["7", "imperfetto frente a passato prossimo", "Mentre parlavo, è entrato il direttore."],
            ["7", "comparativos", "Milano è più cara di Madrid."],
            ["8", "congiuntivo tras penso che, spero che, è importante che", "Spero che il cliente sia contento."]
          ]
        },
        {
          t: "nota",
          x: "Falsos amigos del nivel, por última vez: *burro* (mantequilla), *salire* (subir), *guardare* (mirar), *caldo* (calor, caliente), *imbarazzato* (avergonzado; «embarazada» es *incinta*). Y dos de oficina: *informe* («sin forma»: el informe es *il rapporto*) y *pretendere* (exigir: *Il cliente pretende uno sconto*, el cliente exige un descuento)."
        },
        {
          t: "p",
          x: "Ahora tú: da tu opinión en voz alta sobre un tema de tu trabajo en cuatro frases: *Secondo me…*, *Penso che…*, *Non sono del tutto d'accordo perché…*, *Propongo che…*"
        },
        {
          t: "nota",
          x: "Con esta lección cierras el nivel 1. El nivel 2 (B1) sigue donde lo dejas: reuniones largas, negociación, informes y actas, el congiuntivo imperfetto y el *periodo ipotetico* («si tuviera…, haría…»)."
        }
      ],
      vocab: [
        ["Passiamo al secondo punto.", "Pasemos al segundo punto."],
        ["il lancio", "el lanzamiento"],
        ["essere in ritardo di due settimane", "llevar dos semanas de retraso"],
        ["dire di no", "decir que no"],
        ["E quindi cosa proponi?", "¿Y entonces qué propones?"],
        ["una prima versione", "una primera versión"],
        ["Così il cliente è contento.", "Así el cliente está contento."],
        ["Mah…", "Pues… (duda o desacuerdo)"],
        ["È rischioso.", "Es arriesgado."],
        ["C'è un rischio.", "Hay un riesgo."],
        ["Ha funzionato bene.", "Ha funcionado bien, funcionó bien."],
        ["Lei cosa ne pensa?", "¿Usted qué opina?"],
        ["Se vuole, preparo io la presentazione.", "Si quiere, preparo yo la presentación. (a usted)"],
        ["sentire il fornitore", "hablar con el proveedor, consultarlo"],
        ["fissare un incontro", "concertar una reunión"],
        ["entro stasera", "antes de esta noche, esta misma tarde"],
        ["Buon lavoro a tutti!", "¡Buen trabajo a todos!"],
        ["Spero che il cliente sia d'accordo.", "Espero que el cliente esté de acuerdo."],
        ["pretendere", "exigir (¡no «pretender»!) (acento: pre-TEN-de-re)"],
        ["Il cliente pretende uno sconto.", "El cliente exige un descuento."]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "Marco dice que el lanzamiento es imposible. Quieres darle la razón solo en parte:",
          ops: ["Hai ragione sui tempi, però…", "Non sono affatto d'accordo.", "Sono pienamente d'accordo."],
          ok: 0
        },
        { t: "mc", q: "Completa con *fare*: «Propongo che Marco ___ una demo per il cliente.»", ops: ["faccia", "fa", "facciano"], ok: 0 },
        {
          t: "mc",
          q: "Repaso de la semana 4. Carlos dice: «Ieri ___ in ufficio fino alle otto.» (*rimanere*)",
          ops: ["sono rimasto", "ho rimasto", "sono rimasta"],
          ok: 0
        },
        {
          t: "mc",
          q: "Repaso de la semana 7: «Mentre ___ la presentazione, è arrivato il direttore.»",
          ops: ["preparavo", "ho preparato", "preparerò"],
          ok: 0
        },
        {
          t: "oir",
          x: "Spero che il cliente sia d'accordo.",
          ops: ["Spero che il cliente sia d'accordo.", "Spero che i clienti siano d'accordo.", "Sono sicuro che il cliente è d'accordo."],
          ok: 0
        },
        { t: "orden", es: "Propongo que en diciembre lancemos una primera versión.", x: "Propongo che a dicembre lanciamo una prima versione." },
        { t: "decir", es: "Doctor Ferrari, ¿usted qué opina?", x: "Dottor Ferrari, Lei cosa ne pensa?" },
        { t: "decir", es: "Tienes razón, hay un riesgo.", x: "Hai ragione, c'è un rischio." }
      ]
    }
  ],
  lecturas: [
    {
      id: "it8-r1",
      titulo: "Il verbale della riunione",
      nivel: "B1",
      texto: "Verbale della riunione del 13 ottobre\n\nPresenti: dott. Ferrari (direttore), Giulia Rossi (project manager), Marco Bianchi (ingegnere), Carlos (sede di Madrid, in videochiamata).\nAssente: Francesca Conti (risorse umane).\nRedige il verbale: Chiara.\n\nOrdine del giorno:\n1. Stato del progetto\n2. Data del lancio\n3. Varie ed eventuali\n\n1. Stato del progetto\nGiulia presenta lo stato dei lavori. La fase di test è a buon punto, ma il fornitore è in ritardo di due settimane con la consegna dei server. Marco ritiene che i problemi tecnici siano ormai risolti; tuttavia bisogna che il team faccia ancora alcune prove.\n\n2. Data del lancio\nIl cliente chiede di anticipare il lancio al primo dicembre. Secondo Marco è troppo presto. Carlos non è del tutto d'accordo e propone che a dicembre il team lanci una prima versione per un gruppo ristretto di clienti. Il dott. Ferrari pensa che la proposta sia ragionevole, ma sottolinea che è importante che il cliente approvi il piano. Dopo una breve discussione, si decide di presentare la proposta al cliente.\n\n3. Varie ed eventuali\nNessuna.\n\nProssimi passi:\n– Carlos: preparare la presentazione per il cliente entro il 16 ottobre.\n– Marco: sentire il fornitore e verificare le nuove date.\n– Giulia: fissare un incontro con il cliente.\n\nLa riunione si chiude alle 11:30. Prossima riunione: martedì 20 ottobre, ore 10:00.",
      traduccion: "Acta de la reunión del 13 de octubre\n\nAsistentes: Dr. Ferrari (director), Giulia Rossi (jefa de proyecto), Marco Bianchi (ingeniero), Carlos (sede de Madrid, por videollamada).\nAusente: Francesca Conti (recursos humanos).\nRedacta el acta: Chiara.\n\nOrden del día:\n1. Estado del proyecto\n2. Fecha del lanzamiento\n3. Ruegos y preguntas\n\n1. Estado del proyecto\nGiulia presenta el estado de los trabajos. La fase de pruebas está bastante avanzada, pero el proveedor lleva dos semanas de retraso con la entrega de los servidores. Marco considera que los problemas técnicos ya están resueltos; sin embargo, hace falta que el equipo haga todavía algunas pruebas.\n\n2. Fecha del lanzamiento\nEl cliente pide adelantar el lanzamiento al 1 de diciembre. Según Marco, es demasiado pronto. Carlos no está del todo de acuerdo y propone que en diciembre el equipo lance una primera versión para un grupo reducido de clientes. El Dr. Ferrari cree que la propuesta es razonable, pero subraya que es importante que el cliente apruebe el plan. Tras un breve debate, se decide presentar la propuesta al cliente.\n\n3. Ruegos y preguntas\nNinguno.\n\nPróximos pasos:\n– Carlos: preparar la presentación para el cliente antes del 16 de octubre.\n– Marco: hablar con el proveedor y comprobar las nuevas fechas.\n– Giulia: concertar una reunión con el cliente.\n\nLa reunión termina a las 11:30. Próxima reunión: martes 20 de octubre, a las 10:00.",
      glosa: {
        verbale: "acta (de una reunión)",
        della: "de la (di + la)",
        riunione: "reunión",
        del: "del (di + il)",
        ottobre: "octubre",
        presenti: "asistentes, presentes",
        dott: "Dr. (abreviatura de «dottore», título de cualquier licenciado)",
        ferrari: "Ferrari (apellido del director)",
        direttore: "director",
        giulia: "Giulia (nombre)",
        rossi: "Rossi (apellido)",
        project: "(inglés) «project manager» = jefe o jefa de proyecto",
        manager: "(inglés) «project manager» = jefe o jefa de proyecto",
        marco: "Marco (nombre)",
        bianchi: "Bianchi (apellido)",
        ingegnere: "ingeniero",
        carlos: "Carlos (nombre)",
        sede: "sede, oficina",
        di: "de",
        madrid: "Madrid",
        in: "en; «in videochiamata» = por videollamada; «in ritardo» = con retraso",
        videochiamata: "videollamada",
        assente: "ausente",
        francesca: "Francesca (nombre)",
        conti: "Conti (apellido)",
        risorse: "recursos («risorse umane» = recursos humanos)",
        umane: "humanas («risorse umane» = recursos humanos)",
        redige: "redacta (redigere; participio: redatto)",
        il: "el",
        chiara: "Chiara (nombre de la asistente)",
        ordine: "orden («ordine del giorno» = orden del día)",
        giorno: "día",
        stato: "estado («lo stato dei lavori» = cómo van los trabajos)",
        progetto: "proyecto",
        data: "fecha (¡no «dato»!: los datos son «i dati»)",
        lancio: "lanzamiento",
        varie: "varias («varie ed eventuali» = ruegos y preguntas)",
        ed: "y (= e, ante vocal)",
        eventuali: "eventuales («varie ed eventuali» = ruegos y preguntas)",
        presenta: "presenta (presentare)",
        lo: "el (artículo ante s + consonante: «lo stato»)",
        dei: "de los (di + i)",
        lavori: "trabajos (plural de lavoro)",
        la: "la",
        fase: "fase",
        test: "pruebas (inglés, invariable: il test, i test)",
        "è": "es, está (essere)",
        a: "a; «a buon punto» = bastante avanzado",
        buon: "buen («a buon punto» = bastante avanzado)",
        punto: "punto («a buon punto» = bastante avanzado)",
        ma: "pero",
        fornitore: "proveedor",
        ritardo: "retraso («in ritardo di due settimane» = con dos semanas de retraso)",
        due: "dos",
        settimane: "semanas (plural de settimana)",
        con: "con",
        consegna: "entrega",
        server: "servidores (inglés, invariable: il server, i server)",
        ritiene: "considera, cree (ritenere, como tenere: ritengo, ritieni; + congiuntivo)",
        che: "que",
        i: "los",
        problemi: "problemas (il problema, i problemi: masculino)",
        tecnici: "técnicos",
        siano: "estén (congiuntivo de essere, loro, tras «ritiene che»)",
        ormai: "ya, a estas alturas",
        risolti: "resueltos (participio de risolvere)",
        tuttavia: "sin embargo",
        bisogna: "hace falta («bisogna che» + congiuntivo)",
        team: "equipo (inglés)",
        faccia: "haga (congiuntivo de fare, tras «bisogna che»)",
        ancora: "todavía",
        alcune: "algunas",
        prove: "pruebas (plural de prova)",
        cliente: "cliente",
        chiede: "pide (chiedere: pedir y también preguntar)",
        anticipare: "adelantar",
        al: "al (a + il)",
        primo: "primero; «il primo dicembre» = el 1 de diciembre",
        dicembre: "diciembre",
        secondo: "según («secondo Marco» = según Marco; va con indicativo)",
        troppo: "demasiado",
        presto: "pronto, temprano",
        non: "no",
        tutto: "todo («del tutto» = del todo)",
        d: "de (di con apóstrofo: «d'accordo» = de acuerdo)",
        accordo: "acuerdo («essere d'accordo» = estar de acuerdo)",
        e: "y",
        propone: "propone («propone che» + congiuntivo)",
        lanci: "lance (congiuntivo de lanciare, tras «propone che»)",
        una: "una",
        prima: "primera",
        versione: "versión",
        per: "para",
        un: "un",
        gruppo: "grupo",
        ristretto: "reducido, limitado",
        clienti: "clientes",
        pensa: "cree, piensa («pensa che» + congiuntivo)",
        proposta: "propuesta",
        sia: "sea (congiuntivo de essere, tras «pensa che»)",
        ragionevole: "razonable",
        sottolinea: "subraya, recalca (sottolineare)",
        importante: "importante («è importante che» + congiuntivo)",
        approvi: "apruebe (congiuntivo de approvare, tras «è importante che»)",
        piano: "plan",
        dopo: "después de, tras",
        breve: "breve",
        discussione: "debate, discusión",
        si: "se (impersonal: «si decide» = se decide; «si chiude» = termina)",
        decide: "decide («si decide di» + infinitivo = se decide…)",
        presentare: "presentar",
        nessuna: "ninguna (aquí: ningún asunto)",
        prossimi: "próximos («prossimi passi» = próximos pasos)",
        passi: "pasos (plural de passo)",
        preparare: "preparar",
        presentazione: "presentación",
        entro: "antes de, como muy tarde («entro il 16 ottobre»)",
        sentire: "oír; aquí, hablar con, consultar («sentire il fornitore»)",
        verificare: "comprobar, verificar",
        le: "las",
        nuove: "nuevas",
        date: "fechas (plural de data)",
        fissare: "fijar («fissare un incontro» = concertar una reunión)",
        incontro: "reunión, encuentro",
        chiude: "cierra («la riunione si chiude» = la reunión termina)",
        alle: "a las (a + le)",
        prossima: "próxima",
        "martedì": "martes",
        ore: "horas («ore 10:00» = a las 10:00)"
      },
      preguntas: [
        {
          q: "¿Qué problema tiene el proyecto?",
          ops: ["El proveedor lleva dos semanas de retraso con los servidores", "El cliente ya no quiere la plataforma", "Marco y Giulia no se ponen de acuerdo con el presupuesto"],
          ok: 0
        },
        {
          q: "¿Qué propone Carlos?",
          ops: ["Lanzar en diciembre una primera versión para un grupo reducido de clientes", "Aplazar el lanzamiento hasta enero", "Cambiar de proveedor"],
          ok: 0
        },
        {
          q: "¿Qué tiene que hacer Carlos después de la reunión?",
          ops: ["Preparar la presentación para el cliente antes del 16 de octubre", "Hablar con el proveedor", "Concertar una reunión con el cliente"],
          ok: 0
        },
        { q: "¿Quién no estuvo en la reunión?", ops: ["Francesca Conti", "Chiara", "Marco Bianchi"], ok: 0 }
      ],
      notas: "El acta va en presente y con *si* impersonal: *si decide*, *la riunione si chiude*. Fíjate en el congiuntivo tras *ritiene che*, *bisogna che*, *propone che*, *pensa che* y *è importante che*, y en el indicativo tras *secondo Marco*. En *Prossimi passi*, cada tarea va en infinitivo."
    },
    {
      id: "it8-r2",
      titulo: "Una catena di email",
      nivel: "B1",
      texto: "Da: Carlos\nA: Giulia Rossi\nCc: Marco Bianchi\nOggetto: Presentazione per il cliente\n\nCiao Giulia,\ncome d'accordo, ti mando la bozza della presentazione per il cliente. Mi fai sapere che ne pensi entro giovedì? Metto in copia Marco per la parte tecnica.\nGrazie e a presto,\nCarlos\n\nDa: Giulia Rossi\nOggetto: Re: Presentazione per il cliente\n\nCiao Carlos,\ngrazie, ottimo lavoro! Secondo me la struttura funziona e i grafici sono molto chiari. Però penso che le slide siano troppe: è importante che il cliente capisca subito la nostra proposta. Ne togliamo tre?\nUn saluto,\nGiulia\n\nDa: Marco Bianchi\nOggetto: Re: Presentazione per il cliente\n\nCiao a tutti,\nho appena sentito il fornitore: i server arrivano lunedì, quindi possiamo finire i test entro fine mese. Carlos, aggiungi tu le nuove date? Spero che non ci siano altri ritardi!\nMarco\n\nDa: Carlos\nA: dott. Ferrari\nCc: Giulia Rossi, Marco Bianchi\nOggetto: Presentazione per il cliente – versione finale\n\nGentile dottor Ferrari,\nin allegato trova la versione finale della presentazione. Abbiamo seguito i suggerimenti di Giulia e aggiunto le nuove date del fornitore. Se ha bisogno di chiarimenti, resto a disposizione.\nCordiali saluti,\nCarlos\n\nDa: dott. Ferrari\nOggetto: Re: Presentazione per il cliente – versione finale\n\nGrazie a tutti. La presentazione è chiara e convincente: la mandiamo al cliente domani mattina.",
      traduccion: "De: Carlos\nPara: Giulia Rossi\nCC: Marco Bianchi\nAsunto: Presentación para el cliente\n\nHola, Giulia:\nComo quedamos, te mando el borrador de la presentación para el cliente. ¿Me dices qué te parece antes del jueves? Pongo en copia a Marco para la parte técnica.\nGracias y hasta pronto,\nCarlos\n\nDe: Giulia Rossi\nAsunto: Re: Presentación para el cliente\n\nHola, Carlos:\n¡Gracias, un trabajo excelente! En mi opinión la estructura funciona y los gráficos están muy claros. Pero creo que hay demasiadas diapositivas: es importante que el cliente entienda enseguida nuestra propuesta. ¿Quitamos tres?\nUn saludo,\nGiulia\n\nDe: Marco Bianchi\nAsunto: Re: Presentación para el cliente\n\nHola a todos:\nAcabo de hablar con el proveedor: los servidores llegan el lunes, así que podemos terminar las pruebas antes de fin de mes. Carlos, ¿añades tú las nuevas fechas? ¡Espero que no haya más retrasos!\nMarco\n\nDe: Carlos\nPara: Dr. Ferrari\nCC: Giulia Rossi, Marco Bianchi\nAsunto: Presentación para el cliente – versión final\n\nEstimado Dr. Ferrari:\nLe adjunto la versión final de la presentación. Hemos seguido las sugerencias de Giulia y hemos añadido las nuevas fechas del proveedor. Si necesita alguna aclaración, quedo a su disposición.\nUn cordial saludo,\nCarlos\n\nDe: Dr. Ferrari\nAsunto: Re: Presentación para el cliente – versión final\n\nGracias a todos. La presentación es clara y convincente: se la mandamos al cliente mañana por la mañana.",
      glosa: {
        da: "de (en el encabezado: el remitente)",
        carlos: "Carlos",
        a: "a; para (en el encabezado: el destinatario); «a presto» = hasta pronto",
        giulia: "Giulia",
        rossi: "Rossi (apellido)",
        cc: "CC, con copia (las personas en copia)",
        marco: "Marco",
        bianchi: "Bianchi (apellido)",
        oggetto: "asunto (de un correo); también «objeto»",
        presentazione: "presentación",
        per: "para",
        il: "el",
        cliente: "cliente",
        ciao: "hola; adiós (informal)",
        come: "como («come d'accordo» = como quedamos)",
        d: "de (di con apóstrofo: «d'accordo» = de acuerdo)",
        accordo: "acuerdo («come d'accordo» = como quedamos)",
        ti: "te",
        mando: "mando, envío (mandare)",
        la: "la; también pronombre: «la mandiamo» = la mandamos",
        bozza: "borrador",
        della: "de la (di + la)",
        mi: "me",
        fai: "haces (fare; «mi fai sapere» = me dices, me avisas)",
        sapere: "saber («fare sapere» = hacer saber, avisar)",
        che: "qué; que",
        ne: "de ello («che ne pensi?» = ¿qué opinas de ello?; «ne togliamo tre» = quitamos tres de ellas)",
        pensi: "piensas («che ne pensi?» = ¿qué te parece?)",
        entro: "antes de, como muy tarde («entro giovedì» = para el jueves)",
        "giovedì": "jueves",
        metto: "pongo (mettere; «metto in copia» = pongo en copia)",
        in: "en; «in copia» = en copia; «in allegato» = adjunto",
        copia: "copia («mettere in copia» = poner en copia)",
        parte: "parte",
        tecnica: "técnica",
        grazie: "gracias",
        e: "y",
        presto: "pronto («a presto» = hasta pronto)",
        re: "respuesta (en el asunto: «Re:»)",
        ottimo: "excelente, buenísimo («ottimo lavoro» = un trabajo excelente)",
        lavoro: "trabajo",
        secondo: "según («secondo me» = en mi opinión; va con indicativo)",
        me: "mí («secondo me» = en mi opinión)",
        struttura: "estructura",
        funziona: "funciona (funzionare)",
        i: "los",
        grafici: "gráficos (il grafico, i grafici; se acentúa GRA-fi-ci)",
        sono: "son, están (essere)",
        molto: "muy",
        chiari: "claros",
        "però": "pero, sin embargo",
        penso: "pienso, creo («penso che» + congiuntivo)",
        le: "las",
        slide: "diapositivas (inglés, invariable: la slide, le slide)",
        siano: "sean (congiuntivo de essere, tras «penso che»: «penso che siano troppe» = creo que son demasiadas)",
        troppe: "demasiadas",
        "è": "es (essere)",
        importante: "importante («è importante che» + congiuntivo)",
        capisca: "entienda (congiuntivo de capire, con -isc-)",
        subito: "enseguida (se acentúa SU-bi-to)",
        nostra: "nuestra",
        proposta: "propuesta",
        togliamo: "quitamos (togliere; «ne togliamo tre?» = ¿quitamos tres?)",
        tre: "tres",
        un: "un",
        saluto: "saludo («un saluto» = un saludo, despedida cordial)",
        tutti: "todos («ciao a tutti» = hola a todos)",
        ho: "he (avere)",
        appena: "recién («ho appena sentito» = acabo de hablar con)",
        sentito: "oído; hablado con (participio de sentire: «sentire qualcuno» = hablar con alguien)",
        fornitore: "proveedor",
        server: "servidores (inglés, invariable: il server, i server)",
        arrivano: "llegan (arrivare)",
        "lunedì": "lunes («arrivano lunedì» = llegan el lunes)",
        quindi: "así que, por tanto",
        possiamo: "podemos (potere)",
        finire: "terminar",
        test: "pruebas (inglés, invariable)",
        fine: "fin («entro fine mese» = antes de fin de mes)",
        mese: "mes",
        aggiungi: "añades (aggiungere)",
        tu: "tú («aggiungi tu?» = ¿lo añades tú?)",
        nuove: "nuevas",
        date: "fechas (plural de data)",
        spero: "espero («spero che» + congiuntivo)",
        non: "no",
        ci: "«ci siano» = haya (congiuntivo de «ci sono», hay)",
        altri: "otros («altri ritardi» = más retrasos)",
        ritardi: "retrasos (plural de ritardo)",
        dott: "Dr. (abreviatura de dottore)",
        ferrari: "Ferrari (apellido del director)",
        versione: "versión",
        finale: "final, definitiva",
        gentile: "estimado (en un saludo formal); amable",
        dottor: "doctor (dottore pierde la -e ante el apellido)",
        allegato: "adjunto («in allegato» = adjunto)",
        trova: "encuentra (Lei; «in allegato trova» = le adjunto; trovare)",
        abbiamo: "hemos (avere)",
        seguito: "seguido (participio de seguire)",
        suggerimenti: "sugerencias (il suggerimento: masculino)",
        di: "de",
        aggiunto: "añadido (participio irregular de aggiungere)",
        del: "del (di + il)",
        se: "si (condicional)",
        ha: "tiene (Lei; «se ha bisogno» = si necesita; avere)",
        bisogno: "necesidad («avere bisogno di» = necesitar)",
        chiarimenti: "aclaraciones (il chiarimento: masculino)",
        resto: "quedo (restare; «resto a disposizione» = quedo a su disposición)",
        disposizione: "disposición",
        cordiali: "cordiales («cordiali saluti» = un cordial saludo)",
        saluti: "saludos",
        chiara: "clara",
        convincente: "convincente",
        mandiamo: "mandamos (mandare; «la mandiamo» = la mandamos)",
        al: "al (a + il)",
        domani: "mañana (el día siguiente)",
        mattina: "mañana (parte del día: «domani mattina» = mañana por la mañana)"
      },
      preguntas: [
        {
          q: "¿Qué le pide Carlos a Giulia en el primer correo?",
          ops: ["Que le diga qué le parece el borrador antes del jueves", "Que llame al cliente", "Que reenvíe el correo al doctor Ferrari"],
          ok: 0
        },
        { q: "¿Qué cambio propone Giulia?", ops: ["Quitar tres diapositivas", "Cambiar la estructura", "Añadir más gráficos"], ok: 0 },
        {
          q: "¿Qué buena noticia da Marco?",
          ops: ["Los servidores llegan el lunes", "El cliente ha aprobado la propuesta", "Las pruebas ya han terminado"],
          ok: 0
        },
        {
          q: "¿Por qué Carlos escribe «Gentile dottor Ferrari» y «trova»?",
          ops: ["Porque al director lo trata de usted (Lei)", "Porque escribe a varias personas a la vez", "Porque es el primer correo de la cadena"],
          ok: 0
        }
      ],
      notas: "Compara los registros. Con Giulia y Marco: *ciao*, *ti mando*, *mi fai sapere*, *un saluto*. Con el director: *Gentile dottor Ferrari*, *trova*, *se ha bisogno*, *cordiali saluti*. Y dos congiuntivi: *penso che le slide siano troppe* y *spero che non ci siano altri ritardi* (*ci siano* es el congiuntivo de *ci sono*)."
    },
    {
      id: "it8-r3",
      titulo: "Il rapporto mensile",
      nivel: "B1",
      texto: "Rapporto mensile – ottobre\nProgetto: nuova piattaforma per i clienti\nA cura di: Carlos (sede di Madrid)\nDestinatari: dott. Ferrari, Giulia Rossi\n\n1. Attività svolte\nNel mese di ottobre il team ha completato la fase di test. Il fornitore ha consegnato i server il 19 ottobre, con due settimane di ritardo, ma abbiamo recuperato parte del tempo perso lavorando anche il sabato. Il cliente ha approvato la nostra proposta di un lancio in due fasi.\n\n2. Risultati\n– Errori risolti: 46 su 52.\n– Tempi di risposta della piattaforma: ridotti del 30% rispetto a settembre.\n– Costi: in linea con il budget.\n\n3. Criticità\nRestano sei errori, di cui due gravi. Inoltre il fornitore non ha ancora confermato le date di manutenzione per dicembre.\n\n4. Prossimi passi\nA novembre prepareremo il lancio della prima versione, previsto per il primo dicembre. Penso che i tempi siano stretti, ma realistici. Tuttavia è importante che il fornitore confermi le date entro il 10 novembre, e bisogna che il cliente scelga al più presto i primi utenti. Propongo quindi che a metà novembre facciamo una riunione di verifica con tutto il team.\n\nIn sintesi, nonostante il ritardo del fornitore, il progetto procede bene.",
      traduccion: "Informe mensual – octubre\nProyecto: nueva plataforma para los clientes\nElaborado por: Carlos (sede de Madrid)\nDestinatarios: Dr. Ferrari, Giulia Rossi\n\n1. Actividades realizadas\nEn octubre el equipo ha completado la fase de pruebas. El proveedor entregó los servidores el 19 de octubre, con dos semanas de retraso, pero hemos recuperado parte del tiempo perdido trabajando también los sábados. El cliente ha aprobado nuestra propuesta de un lanzamiento en dos fases.\n\n2. Resultados\n– Errores resueltos: 46 de 52.\n– Tiempos de respuesta de la plataforma: un 30 % menos que en septiembre.\n– Costes: dentro del presupuesto.\n\n3. Puntos críticos\nQuedan seis errores, dos de ellos graves. Además, el proveedor todavía no ha confirmado las fechas de mantenimiento de diciembre.\n\n4. Próximos pasos\nEn noviembre prepararemos el lanzamiento de la primera versión, previsto para el 1 de diciembre. Creo que los plazos son ajustados, pero realistas. Sin embargo, es importante que el proveedor confirme las fechas antes del 10 de noviembre, y hace falta que el cliente elija cuanto antes a los primeros usuarios. Por eso propongo que a mediados de noviembre hagamos una reunión de seguimiento con todo el equipo.\n\nEn resumen, a pesar del retraso del proveedor, el proyecto avanza bien.",
      glosa: {
        rapporto: "informe (también «relación»: «rapporto di lavoro»)",
        mensile: "mensual",
        ottobre: "octubre",
        progetto: "proyecto",
        nuova: "nueva",
        piattaforma: "plataforma",
        per: "para; «previsto per» = previsto para",
        i: "los",
        clienti: "clientes",
        a: "a; «a novembre» = en noviembre; «a metà novembre» = a mediados de noviembre",
        cura: "cuidado («a cura di» = a cargo de, elaborado por)",
        di: "de",
        carlos: "Carlos",
        sede: "sede, oficina",
        madrid: "Madrid",
        destinatari: "destinatarios",
        dott: "Dr. (abreviatura de dottore)",
        ferrari: "Ferrari (apellido del director)",
        giulia: "Giulia",
        rossi: "Rossi (apellido)",
        "attività": "actividades (invariable: l'attività, le attività)",
        svolte: "realizadas, llevadas a cabo (participio de svolgere, femenino plural)",
        nel: "en el (in + il)",
        mese: "mes («nel mese di ottobre» = en octubre)",
        il: "el",
        team: "equipo (inglés)",
        ha: "ha (avere)",
        completato: "completado",
        la: "la",
        fase: "fase",
        test: "pruebas («la fase di test» = la fase de pruebas)",
        fornitore: "proveedor",
        consegnato: "entregado (consegnare)",
        server: "servidores (inglés, invariable)",
        con: "con",
        due: "dos",
        settimane: "semanas",
        ritardo: "retraso",
        ma: "pero",
        abbiamo: "hemos (avere)",
        recuperato: "recuperado",
        parte: "parte",
        del: "del (di + il)",
        tempo: "tiempo",
        perso: "perdido (participio irregular de perdere)",
        lavorando: "trabajando (gerundio de lavorare)",
        anche: "también, incluso",
        sabato: "sábado («il sabato» = los sábados)",
        cliente: "cliente",
        approvato: "aprobado",
        nostra: "nuestra",
        proposta: "propuesta",
        un: "un",
        lancio: "lanzamiento",
        in: "en; «in linea con» = en línea con",
        fasi: "fases (la fase, le fasi)",
        risultati: "resultados",
        errori: "errores (l'errore, gli errori: masculino)",
        risolti: "resueltos (participio de risolvere)",
        su: "sobre; «46 su 52» = 46 de 52",
        tempi: "tiempos («tempi di risposta» = tiempos de respuesta; «i tempi» = los plazos)",
        risposta: "respuesta",
        della: "de la (di + la)",
        ridotti: "reducidos (participio de ridurre)",
        rispetto: "«rispetto a» = con respecto a, en comparación con",
        settembre: "septiembre",
        costi: "costes (il costo, i costi)",
        linea: "línea («in linea con il budget» = dentro del presupuesto)",
        budget: "presupuesto (inglés)",
        "criticità": "puntos críticos, problemas (invariable)",
        restano: "quedan (restare)",
        sei: "seis (¡y también «eres»!)",
        cui: "«di cui» = de los cuales",
        gravi: "graves",
        inoltre: "además",
        non: "no",
        ancora: "todavía («non… ancora» = todavía no)",
        confermato: "confirmado",
        le: "las",
        date: "fechas (plural de data)",
        manutenzione: "mantenimiento",
        dicembre: "diciembre",
        prossimi: "próximos",
        passi: "pasos",
        novembre: "noviembre",
        prepareremo: "prepararemos (futuro de preparare)",
        prima: "primera",
        versione: "versión",
        previsto: "previsto (participio de prevedere)",
        primo: "primero; «il primo dicembre» = el 1 de diciembre",
        penso: "pienso, creo («penso che» + congiuntivo)",
        che: "que",
        siano: "sean (congiuntivo de essere, loro, tras «penso che»)",
        stretti: "ajustados («tempi stretti» = plazos ajustados)",
        realistici: "realistas",
        tuttavia: "sin embargo",
        "è": "es (essere)",
        importante: "importante («è importante che» + congiuntivo)",
        confermi: "confirme (congiuntivo de confermare)",
        entro: "antes de, como muy tarde",
        e: "y",
        bisogna: "hace falta («bisogna che» + congiuntivo)",
        scelga: "elija (congiuntivo de scegliere: scelgo → scelga)",
        al: "al (a + il); «al più presto» = cuanto antes",
        "più": "más («al più presto» = cuanto antes)",
        presto: "pronto",
        primi: "primeros",
        utenti: "usuarios (l'utente, gli utenti)",
        propongo: "propongo («propongo che» + congiuntivo)",
        quindi: "por tanto, así que",
        "metà": "mitad («a metà novembre» = a mediados de noviembre)",
        facciamo: "hagamos (congiuntivo de fare, noi: igual que el presente)",
        una: "una",
        riunione: "reunión",
        verifica: "verificación, revisión («riunione di verifica» = reunión de seguimiento)",
        tutto: "todo («tutto il team» = todo el equipo)",
        sintesi: "síntesis («in sintesi» = en resumen)",
        nonostante: "a pesar de",
        procede: "avanza, va (procedere)",
        bene: "bien"
      },
      preguntas: [
        {
          q: "¿Cómo recuperó el equipo parte del tiempo perdido?",
          ops: ["Trabajando también los sábados", "Cambiando de proveedor", "Haciendo menos pruebas"],
          ok: 0
        },
        { q: "¿Qué ha mejorado un 30 %?", ops: ["Los tiempos de respuesta de la plataforma", "Los costes", "El número de clientes"], ok: 0 },
        {
          q: "¿Qué tiene todavía pendiente el proveedor?",
          ops: ["Confirmar las fechas de mantenimiento de diciembre", "Entregar los servidores", "Aprobar el presupuesto"],
          ok: 0
        },
        {
          q: "¿Qué propone Carlos para mediados de noviembre?",
          ops: ["Una reunión de seguimiento con todo el equipo", "Lanzar la versión definitiva", "Un viaje a Milán"],
          ok: 0
        }
      ],
      notas: "Un informe usa los tiempos de todo el nivel: passato prossimo para lo hecho (*abbiamo recuperato*), presente para la situación (*restano sei errori*), futuro para el plan (*prepareremo*) y congiuntivo para opinar y recomendar (*penso che i tempi siano stretti*, *è importante che il fornitore confermi*). *A cura di* es la fórmula fija para «elaborado por»."
    }
  ]
});
