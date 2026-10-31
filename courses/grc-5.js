// Glossa · griego antiguo · semana 5: Los tiempos del pasado
window.CONTENT.grc.semanas.push({
  n: 5,
  lecciones: [
    {
      id: "grc5-1",
      titulo: "El aumento: la marca del pasado",
      min: 35,
      intro: "Muchos diálogos de Platón están narrados en pasado, y el pasado griego lleva una marca delante del verbo: el **aumento**. La *República* empieza así: *Κατέβην χθὲς εἰς Πειραιᾶ*, «Bajé ayer al Pireo»; esa *ε* de *κατ-έ-βην* es el aumento.",
      bloques: [
        {
          t: "p",
          x: "El **aumento** es una *ε* que se antepone a los tiempos del pasado: el imperfecto y el aoristo (y, más adelante, el pluscuamperfecto). Solo aparece en **indicativo**: el infinitivo, por ejemplo, no lo lleva. Hay dos clases, según cómo empiece el verbo."
        },
        {
          t: "p",
          x: "**Aumento silábico.** Si el verbo empieza por consonante, se le añade *ἐ-*, una sílaba más: *λύω* → *ἔλυον* (desataba). Si empieza por *ῥ*, la *ρ* se duplica: *ῥίπτω* (arrojo) → *ἔρριπτον* (arrojaba). Como el acento del verbo sube todo lo que puede, a menudo cae sobre el propio aumento: *ἔλυον*, *ἔλεγον*."
        },
        {
          t: "tabla",
          cab: ["Presente", "Imperfecto", "Español"],
          audio: [0, 1],
          filas: [
            ["λύω", "ἔλυον", "desato → desataba"],
            ["παιδεύω", "ἐπαίδευον", "educo → educaba"],
            ["γράφω", "ἔγραφον", "escribo → escribía"],
            ["λέγω", "ἔλεγον", "digo → decía"],
            ["βούλομαι", "ἐβουλόμην", "quiero → quería"],
            ["ῥίπτω", "ἔρριπτον", "arrojo → arrojaba"]
          ]
        },
        {
          t: "p",
          x: "**Aumento temporal.** Si el verbo empieza por vocal, no se añade nada: la vocal se **alarga**. Se llama «temporal» porque cambia la duración (el *tiempo*) de la vocal, no porque marque el tiempo verbal. En los diptongos se alarga la primera vocal y la *ι* pasa a escribirse debajo: *αι* → *ῃ*, *οι* → *ῳ*."
        },
        {
          t: "tabla",
          cab: ["Cambio", "Presente", "Imperfecto", "Español"],
          audio: [1, 2],
          filas: [
            ["α → η", "ἀκούω", "ἤκουον", "oigo → oía"],
            ["ε → η", "ἐθέλω", "ἤθελον", "quiero → quería"],
            ["ο → ω", "ὀνομάζω", "ὠνόμαζον", "nombro → nombraba"],
            ["ι → ῑ (no se ve)", "ἱκετεύω", "ἱκέτευον", "suplico → suplicaba"],
            ["αι → ῃ", "αἰσθάνομαι", "ᾐσθανόμην", "percibo → percibía"],
            ["οι → ῳ", "οἴομαι", "ᾠόμην", "creo → creía"],
            ["αυ → ηυ", "αὐξάνω", "ηὔξανον", "hago crecer → hacía crecer"],
            ["ευ → ηυ", "εὑρίσκω", "ηὕρισκον", "encuentro → encontraba"]
          ]
        },
        {
          t: "nota",
          x: "Tres detalles que conviene saber ya. *ἔχω* (tengo) hace *εἶχον* (tenía), con *ει*: apréndelo como irregular. *ᾠόμην* suele contraerse en *ᾤμην* (creía). Y en *ευ* el aumento es opcional: verás tanto *ηὕρισκον* como *εὕρισκον*."
        },
        {
          t: "p",
          x: "**Verbos compuestos.** Si el verbo lleva delante una preposición (un **preverbio**: *ἀπο-*, *δια-*, *κατα-*, *ἐκ-*…), el aumento va **entre el preverbio y el verbo**, y la vocal final del preverbio desaparece: *κατα-βαίνω* → *κατ-έ-βην* (bajé); *δια-λέγομαι* → *δι-ε-λεγόμην* (conversaba). *ἐκ-* se convierte en *ἐξ-* ante el aumento: *ἐκ-βάλλω* → *ἐξ-έ-βαλλον* (expulsaba). *περί* no pierde su vocal: *περι-βλέπω* → *περι-έ-βλεπον* (miraba alrededor)."
        },
        {
          t: "nota",
          x: "Para buscar una forma en el diccionario, quita el aumento: *ἤκουον* → *ἀκου-* → *ἀκούω*; *ὠνόμαζον* → *ὀνομάζω*. En los compuestos búscalo dentro: *διελέγετο* → *δια-λέγομαι*. Pero no toda *ε* inicial es aumento: *ἔχω*, *ἐθέλω* o *ἐρωτάω* ya empiezan así en presente."
        },
        {
          t: "ej",
          items: [
            ["Σωκράτης ἐν τῇ ἀγορᾷ διελέγετο.", "Sócrates conversaba en el ágora."],
            ["Οἱ νέοι τοῦ Σωκράτους ἤκουον.", "Los jóvenes escuchaban a Sócrates."],
            ["Ὁ Πλάτων πολλὰ ἔγραφεν.", "Platón escribía muchas cosas."],
            ["Πρωταγόρας πολλοὺς μαθητὰς εἶχεν.", "Protágoras tenía muchos discípulos."],
            ["Τὸν Διογένη «κύνα» ὠνόμαζον.", "A Diógenes lo llamaban «perro»."],
            ["Κατέβην χθὲς εἰς Πειραιᾶ.", "Bajé ayer al Pireo. (Platón, República, primera frase)"],
            ["Οὕτως ᾤμην.", "Eso creía yo."]
          ]
        }
      ],
      vocab: [
        ["ἤκουον", "oía, escuchaba (imperfecto de ἀκούω)"],
        ["ἤθελον", "quería (imperfecto de ἐθέλω)"],
        ["ὠνόμαζον", "llamaba, nombraba (imperfecto de ὀνομάζω)"],
        ["εἶχον", "tenía (imperfecto de ἔχω, aumento irregular)"],
        ["ᾤμην", "creía, pensaba (imperfecto de οἴομαι)"],
        ["ᾐσθανόμην", "percibía, me daba cuenta (imperfecto de αἰσθάνομαι)"],
        ["ηὕρισκον", "encontraba (imperfecto de εὑρίσκω; también εὕρισκον)"],
        ["διελεγόμην", "conversaba (imperfecto de διαλέγομαι)"],
        ["κατέβην", "bajé (aoristo de καταβαίνω)"],
        ["ὀνομάζω", "nombrar, llamar (→ «onomástica»)"],
        ["αἰσθάνομαι", "percibir, sentir (→ «estética»)"],
        ["καταβαίνω", "bajar, descender"],
        ["χθές", "ayer"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "¿Qué aumento tiene *ἤκουον*?",
          ops: ["Temporal: la α- de ἀκούω se alarga en η-", "Silábico: se añade ἐ-", "Ninguno: es un presente"],
          ok: 0
        },
        { t: "mc", q: "El imperfecto de *γράφω* es…", ops: ["ἔγραφον", "ἤγραφον", "γράφον"], ok: 0 },
        { t: "mc", q: "El imperfecto de *ὀνομάζω* es…", ops: ["ὠνόμαζον", "ἐονόμαζον", "ὀνόμαζον"], ok: 0 },
        {
          t: "mc",
          q: "En *διελέγετο*, ¿dónde está el aumento?",
          ops: ["Detrás del preverbio: δι-ε-λέγετο", "Al principio de la palabra", "No tiene aumento"],
          ok: 0
        },
        { t: "mc", q: "Para buscar *ᾐσθανόμην* en el diccionario, buscas…", ops: ["αἰσθάνομαι", "ᾐσθάνομαι", "ἠσθάνομαι"], ok: 0 },
        { t: "oir", x: "ἤκουον", ops: ["ἤκουον", "ἀκούω", "ἤκουσα"], ok: 0 },
        { t: "oir", x: "εἶχον", ops: ["εἶχον", "ἔχον", "ἔχω"], ok: 0 },
        { t: "orden", es: "Los jóvenes escuchaban a Sócrates.", x: "Οἱ νέοι τοῦ Σωκράτους ἤκουον." }
      ]
    },
    {
      id: "grc5-2",
      titulo: "El imperfecto: ἔλυον, ἦν",
      min: 35,
      intro: "El imperfecto cuenta lo que *pasaba*, lo que *solía pasar* y lo que *se intentaba*: *Σωκράτης ἐν τῇ ἀγορᾷ διελέγετο*, «Sócrates conversaba en el ágora». Funciona casi como el imperfecto español, así que lo entenderás enseguida.",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "Activa", "Español", "Media-pasiva", "Español"],
          audio: [1, 3],
          filas: [
            ["yo", "ἔλυον", "desataba", "ἐλυόμην", "era desatado"],
            ["tú", "ἔλυες", "desatabas", "ἐλύου", "eras desatado"],
            ["él, ella", "ἔλυε", "desataba", "ἐλύετο", "era desatado"],
            ["nosotros", "ἐλύομεν", "desatábamos", "ἐλυόμεθα", "éramos desatados"],
            ["vosotros", "ἐλύετε", "desatabais", "ἐλύεσθε", "erais desatados"],
            ["ellos, ellas", "ἔλυον", "desataban", "ἐλύοντο", "eran desatados"]
          ]
        },
        {
          t: "p",
          x: "El imperfecto se forma con el **tema de presente** (*λυ-*), el aumento delante y unas terminaciones propias de los tiempos pasados, las **desinencias secundarias**: *-ον, -ες, -ε, -ομεν, -ετε, -ον* en activa y *-όμην, -ου, -ετο, -όμεθα, -εσθε, -οντο* en media-pasiva. (Las del presente y el futuro se llaman primarias.) Apréndelas bien: son también las del aoristo temático, el de *ἐγένετο*, que verás en la lección 5."
        },
        {
          t: "nota",
          x: "*ἔλυον* es a la vez «yo desataba» y «ellos desataban», igual que en español «desataba» vale para «yo» y para «él»: decide el contexto. Y, como *λύουσι(ν)* en el presente, la 3.ª del singular toma una *-ν* ante vocal o al final de la frase: *ἔλυε* / *ἔλυεν*."
        },
        {
          t: "tabla",
          cab: ["Persona", "εἰμί: imperfecto", "Español"],
          audio: [1],
          filas: [
            ["yo", "ἦ", "era, estaba (también ἦν)"],
            ["tú", "ἦσθα", "eras, estabas"],
            ["él, ella", "ἦν", "era, estaba; había"],
            ["nosotros", "ἦμεν", "éramos, estábamos"],
            ["vosotros", "ἦτε", "erais, estabais"],
            ["ellos, ellas", "ἦσαν", "eran, estaban; había"]
          ]
        },
        {
          t: "p",
          x: "Usos del imperfecto, casi los mismos que en español: 1) **acción en curso**, el fondo de una escena: *ἔγραφε*, «estaba escribiendo»; 2) **costumbre**: *Σωκράτης ἀεὶ διελέγετο*, «Sócrates siempre conversaba»; 3) **intento**: *ἔπειθον αὐτόν*, «intentaban convencerlo». El tercero también existe en español: «lo convencían, pero no cedía»."
        },
        {
          t: "nota",
          x: "Si recuerdas el latín: *ἦν* = *erat*, *ἦσαν* = *erant*, *ἔλεγε* = *dīcēbat*. Pero el imperfecto griego no tiene una marca como *-ba-*: lo reconoces por el aumento delante y las desinencias secundarias detrás. Y fíjate en que el neutro plural lleva el verbo en singular: *θνητὰ γένη οὐκ ἦν*, «no existían las razas mortales»."
        },
        {
          t: "ej",
          items: [
            ["Σωκράτης ἀεὶ ἐν τῇ ἀγορᾷ διελέγετο.", "Sócrates siempre conversaba en el ágora."],
            ["Οἱ νέοι αὐτοῦ ἤκουον καὶ ἐθαύμαζον.", "Los jóvenes lo escuchaban y se admiraban."],
            ["Ὁ Πλάτων τότε νέος ἦν.", "Platón era joven entonces."],
            ["Ἐν τῷ γυμνασίῳ πολλοὶ ἦσαν.", "En el gimnasio había mucha gente."],
            ["Τί ἔλεγες, ὦ Κρίτων;", "¿Qué decías, Critón?"],
            ["Ἔπειθον αὐτόν, ὁ δὲ οὐκ ἐπείθετο.", "Intentaban convencerlo, pero él no se dejaba convencer."],
            ["Ἦν γάρ ποτε χρόνος ὅτε θεοὶ μὲν ἦσαν, θνητὰ δὲ γένη οὐκ ἦν.", "Hubo una vez un tiempo en que existían los dioses, pero no las razas mortales. (Platón, Protágoras)"]
          ]
        }
      ],
      vocab: [
        ["ἔλυον", "desataba; desataban (imperfecto de λύω)"],
        ["ἐλυόμην", "era desatado (imperfecto medio-pasivo de λύω)"],
        ["ἦν", "era, estaba; había (imperfecto de εἰμί)"],
        ["ἦσαν", "eran, estaban; había"],
        ["ἦσθα", "eras, estabas"],
        ["ἦμεν", "éramos, estábamos"],
        ["ἦν ποτε…", "hubo una vez…, érase una vez…"],
        ["ἔλεγον", "decía; decían (imperfecto de λέγω)"],
        ["ἐγίγνετο", "llegaba a ser; ocurría (imperfecto de γίγνομαι)"],
        ["ἔπειθον", "intentaba convencer; convencía (imperfecto de πείθω)"],
        ["πολλάκις", "muchas veces, a menudo"],
        ["τότε", "entonces"],
        ["ἤδη", "ya"],
        ["ἔτι", "todavía, aún"]
      ],
      ejercicios: [
        { t: "mc", q: "*ἐλύομεν* significa…", ops: ["desatábamos", "desatamos", "desataban"], ok: 0 },
        { t: "mc", q: "*ἔλυον* puede significar…", ops: ["«yo desataba» o «ellos desataban»", "solo «yo desataba»", "«desaté»"], ok: 0 },
        { t: "mc", q: "«Eran» se dice…", ops: ["ἦσαν", "ἦν", "εἰσί"], ok: 0 },
        {
          t: "mc",
          q: "*Ἔπειθον αὐτόν, ὁ δὲ οὐκ ἐπείθετο* significa…",
          ops: ["Intentaban convencerlo, pero él no se dejaba convencer.", "Lo convencieron y él obedeció.", "Lo convencen, pero él no obedece."],
          ok: 0
        },
        { t: "mc", q: "En *Σωκράτης ἀεὶ διελέγετο*, el imperfecto expresa…", ops: ["una costumbre", "un intento", "un hecho puntual"], ok: 0 },
        { t: "oir", x: "ἐλύετο", ops: ["ἐλύετο", "ἐλύετε", "λύεται"], ok: 0 },
        { t: "oir", x: "ἦσαν", ops: ["ἦσαν", "ἦμεν", "εἰσίν"], ok: 0 },
        { t: "orden", es: "Platón era joven entonces.", x: "Ὁ Πλάτων τότε νέος ἦν." }
      ]
    },
    {
      id: "grc5-3",
      titulo: "El aoristo sigmático: ἔλυσα",
      min: 40,
      intro: "El aoristo es el tiempo de los hechos: *ἔγραψε*, «escribió»; *ἐθαύμασε*, «se asombró». Es el tiempo más frecuente en los relatos, y tú ya conoces su valor, porque el español distingue igual «escribía» y «escribió».",
      bloques: [
        {
          t: "p",
          x: "El imperfecto mira la acción **por dentro**, mientras dura o se repite: *ἔγραφε*, «escribía». El aoristo la mira **entera**, como un hecho: *ἔγραψε*, «escribió». A esta diferencia se le llama **aspecto**. El nombre *ἀόριστος* significa «sin límites, indefinido»; por eso la gramática española llamaba a «escribí» *pretérito indefinido*."
        },
        {
          t: "tabla",
          cab: ["Persona", "Activa", "Español", "Media", "Español"],
          audio: [1, 3],
          filas: [
            ["yo", "ἔλυσα", "desaté", "ἐλυσάμην", "rescaté"],
            ["tú", "ἔλυσας", "desataste", "ἐλύσω", "rescataste"],
            ["él, ella", "ἔλυσε", "desató", "ἐλύσατο", "rescató"],
            ["nosotros", "ἐλύσαμεν", "desatamos", "ἐλυσάμεθα", "rescatamos"],
            ["vosotros", "ἐλύσατε", "desatasteis", "ἐλύσασθε", "rescatasteis"],
            ["ellos, ellas", "ἔλυσαν", "desataron", "ἐλύσαντο", "rescataron"]
          ]
        },
        {
          t: "p",
          x: "Se forma con aumento + raíz + **σα** + desinencias secundarias: *ἔ-λυ-σα*, *ἐ-λύ-σα-μεν*. Solo la 3.ª del singular cambia la *α* por *ε*: *ἔλυσε(ν)*. Por esa *σ* (sigma) se llama **sigmático**, o primer aoristo."
        },
        {
          t: "nota",
          x: "La voz media cambia a menudo el sentido: *λύω* «desatar» → *λύομαι* «rescatar» (soltar a alguien pagando: desatarlo para uno); *γράφω* «escribir» → *γράφομαι* «acusar ante el tribunal» (hacer inscribir una denuncia); *παύω* «hacer parar» → *παύομαι* «dejar de»; *ἄρχω* «mandar, empezar» → *ἄρχομαι* «empezar». Ojo: el aoristo medio **no** es pasivo; el aoristo pasivo tiene formas propias (*ἐλύθην*) que verás más adelante."
        },
        {
          t: "tabla",
          cab: ["El tema acaba en…", "Presente", "Aoristo", "Español"],
          audio: [1, 2],
          filas: [
            ["π, β, φ + σ = ψ", "γράφω", "ἔγραψα", "escribí"],
            ["π, β, φ + σ = ψ", "πέμπω", "ἔπεμψα", "envié"],
            ["κ, γ, χ + σ = ξ", "διδάσκω", "ἐδίδαξα", "enseñé"],
            ["κ, γ, χ + σ = ξ", "ἄρχω", "ἦρξα", "mandé; empecé"],
            ["κ, γ, χ + σ = ξ", "πράττω", "ἔπραξα", "hice, llevé a cabo"],
            ["τ, δ, θ, ζ: desaparecen", "πείθω", "ἔπεισα", "convencí"],
            ["τ, δ, θ, ζ: desaparecen", "θαυμάζω", "ἐθαύμασα", "me asombré"],
            ["vocal: σ sin más", "πιστεύω", "ἐπίστευσα", "creí, confié"],
            ["vocal: σ sin más", "κελεύω", "ἐκέλευσα", "ordené"]
          ]
        },
        {
          t: "nota",
          x: "*πράττω* esconde su consonante: la raíz es *πραγ-* (de ahí *πρᾶγμα*, «asunto»), y *γ* + *σ* da *ξ*. Los verbos en *-έω* y *-άω*, que estudiarás la semana que viene, alargan la vocal: *ποιέω* → *ἐποίησα* (hice), *ἐρωτάω* → *ἠρώτησα* (pregunté). Y algunos verbos con *λ, μ, ν, ρ* pierden la *σ*, alargan la vocal de la raíz y conservan la *α*: *μένω* → *ἔμεινα* (me quedé), *ἀποκρίνομαι* → *ἀπεκρινάμην* (respondí)."
        },
        {
          t: "ej",
          items: [
            ["Ὁ Πλάτων πολλοὺς διαλόγους ἔγραψεν.", "Platón escribió muchos diálogos."],
            ["Σωκράτης οὐδὲν βιβλίον ἔγραψεν.", "Sócrates no escribió ningún libro."],
            ["Ἀριστοτέλης τὸν Ἀλέξανδρον ἐπαίδευσεν.", "Aristóteles educó a Alejandro."],
            ["Κρίτων τὸν Σωκράτη οὐκ ἔπεισεν.", "Critón no convenció a Sócrates."],
            ["Οἱ Ἀθηναῖοι τῷ Σωκράτει οὐκ ἐπίστευσαν.", "Los atenienses no creyeron a Sócrates."],
            ["Μέλητος Σωκράτη ἐγράψατο.", "Meleto acusó a Sócrates."],
            ["Διὰ γὰρ τὸ θαυμάζειν οἱ ἄνθρωποι καὶ νῦν καὶ τὸ πρῶτον ἤρξαντο φιλοσοφεῖν.", "Pues por el asombro empezaron los hombres, ahora y al principio, a filosofar. (Aristóteles, Metafísica)"]
          ]
        }
      ],
      vocab: [
        ["ἔλυσα", "desaté (aoristo de λύω)"],
        ["ἐλυσάμην", "rescaté (aoristo medio de λύω)"],
        ["ἔγραψα", "escribí (aoristo de γράφω)"],
        ["ἐπίστευσα", "creí, confié (aoristo de πιστεύω + dativo)"],
        ["ἐκέλευσα", "ordené, mandé (aoristo de κελεύω)"],
        ["ἐπαίδευσα", "eduqué (aoristo de παιδεύω)"],
        ["ἔπραξα", "hice, llevé a cabo (aoristo de πράττω)"],
        ["ἤρξαντο φιλοσοφεῖν", "empezaron a filosofar (Aristóteles)"],
        ["ἐποίησα", "hice (aoristo de ποιέω)"],
        ["ἔμεινα", "me quedé (aoristo de μένω)"],
        ["ἐγέλασα", "me reí, me eché a reír (aoristo de γελάω)"],
        ["ἐδάκρυσα", "lloré, rompí a llorar (aoristo de δακρύω)"],
        ["γράφομαί τινα", "acuso a alguien ante el tribunal (voz media de γράφω)"],
        ["παύομαι + genitivo", "dejar de, cesar de (aor. ἐπαυσάμην)"],
        ["ἀόριστος, -ον", "indefinido, sin límites (→ «aoristo»)"]
      ],
      ejercicios: [
        { t: "mc", q: "*ἔγραψε* significa…", ops: ["escribió", "escribía", "escribirá"], ok: 0 },
        { t: "mc", q: "El aoristo de *πέμπω* (enviar) es…", ops: ["ἔπεμψα", "ἔπεμπσα", "ἔπεμξα"], ok: 0 },
        { t: "mc", q: "El aoristo de *πείθω* (convencer) es…", ops: ["ἔπεισα", "ἔπειθσα", "ἔπειξα"], ok: 0 },
        { t: "mc", q: "*ἔγραφε* y *ἔγραψε* significan…", ops: ["«escribía» y «escribió»", "«escribió» y «escribía»", "lo mismo: son variantes"], ok: 0 },
        {
          t: "mc",
          q: "*Μέλητος Σωκράτη ἐγράψατο* significa…",
          ops: ["Meleto acusó a Sócrates.", "Meleto escribió a Sócrates.", "Sócrates acusó a Meleto."],
          ok: 0
        },
        { t: "oir", x: "ἐδίδαξα", ops: ["ἐδίδαξα", "ἐδίδασκον", "διδάξω"], ok: 0 },
        { t: "oir", x: "ἐλύσαντο", ops: ["ἐλύσαντο", "ἐλύοντο", "ἔλυσαν"], ok: 0 },
        { t: "orden", es: "Platón escribió muchos diálogos.", x: "Ὁ Πλάτων πολλοὺς διαλόγους ἔγραψεν." }
      ]
    },
    {
      id: "grc5-4",
      titulo: "El futuro: λύσω, ἔσομαι",
      min: 35,
      intro: "El futuro se hace con la misma *σ* que el aoristo, pero sin aumento y con las terminaciones del presente: *λύσω*, «desataré». Con él completas los **tiempos principales** (*λύω, λύσω, ἔλυσα*), que es como el diccionario te presenta cada verbo.",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "Activa", "Español", "Media", "Español"],
          audio: [1, 3],
          filas: [
            ["yo", "λύσω", "desataré", "λύσομαι", "rescataré"],
            ["tú", "λύσεις", "desatarás", "λύσῃ", "rescatarás"],
            ["él, ella", "λύσει", "desatará", "λύσεται", "rescatará"],
            ["nosotros", "λύσομεν", "desataremos", "λυσόμεθα", "rescataremos"],
            ["vosotros", "λύσετε", "desataréis", "λύσεσθε", "rescataréis"],
            ["ellos, ellas", "λύσουσι", "desatarán", "λύσονται", "rescatarán"]
          ]
        },
        {
          t: "p",
          x: "El futuro es el presente con una **σ** delante de la terminación: *λύ-ω* → *λύ-σ-ω*, *λύ-ο-μαι* → *λύ-σ-ο-μαι*. Las terminaciones son las del presente (las **primarias**), que ya conoces; en la 2.ª persona media verás *λύσῃ* o *λύσει*. La *σ* provoca los mismos cambios que en el aoristo: *γράψω*, *πέμψω*, *διδάξω*, *πείσω*."
        },
        {
          t: "nota",
          x: "Futuro y aoristo comparten la *σ*; los separan el aumento y la *α*: *λύσει* (desatará), *ἔλυσε* (desató). Y del presente solo los separa la *σ*: *λύει* (desata), *λύσει* (desatará). Lee despacio las formas cortas."
        },
        {
          t: "tabla",
          cab: ["Persona", "Futuro de εἰμί", "Español"],
          audio: [1],
          filas: [
            ["yo", "ἔσομαι", "seré, estaré"],
            ["tú", "ἔσῃ", "serás"],
            ["él, ella", "ἔσται", "será; habrá"],
            ["nosotros", "ἐσόμεθα", "seremos"],
            ["vosotros", "ἔσεσθε", "seréis"],
            ["ellos, ellas", "ἔσονται", "serán; habrá"]
          ]
        },
        {
          t: "p",
          x: "*εἰμί* tiene el futuro en **voz media**, pero con sentido activo: *ἔσομαι*, «seré». Fíjate en *ἔσται*, sin vocal entre la *σ* y la terminación. Lo mismo les pasa a muchos verbos frecuentes: *ἀκούσομαι* (oiré), *θαυμάσομαι* (me asombraré), *μαθήσομαι* (aprenderé), *λήψομαι* (tomaré), *ὄψομαι* (veré). No los traduzcas como pasivos."
        },
        {
          t: "p",
          x: "Desde hoy aprenderás cada verbo con sus **tiempos principales**: presente, futuro y aoristo, en 1.ª persona del singular: *λύω, λύσω, ἔλυσα*. Es lo que en latín hacía el enunciado (*dīcō, dīcere, dīxī, dictum*). Faltan otros tres (perfecto activo, perfecto medio y aoristo pasivo), que llegarán en la semana 7."
        },
        {
          t: "tabla",
          cab: ["Presente", "Futuro", "Aoristo", "Español"],
          audio: [0, 1, 2],
          filas: [
            ["λύω", "λύσω", "ἔλυσα", "desatar"],
            ["γράφω", "γράψω", "ἔγραψα", "escribir"],
            ["πέμπω", "πέμψω", "ἔπεμψα", "enviar"],
            ["διδάσκω", "διδάξω", "ἐδίδαξα", "enseñar"],
            ["πείθω", "πείσω", "ἔπεισα", "convencer"],
            ["σῴζω", "σώσω", "ἔσωσα", "salvar"],
            ["ἀκούω", "ἀκούσομαι", "ἤκουσα", "oír"],
            ["θαυμάζω", "θαυμάσομαι", "ἐθαύμασα", "asombrarse, admirar"]
          ]
        },
        {
          t: "nota",
          x: "Algunos futuros tienen terminaciones contractas, *-ῶ, -εῖς, -εῖ*: *ἐρῶ* (diré), *νομιῶ* (creeré), *μενῶ* (me quedaré), *ἀποθανοῦμαι* (moriré). Si ves *-ῶ* o *-εῖ* en una forma que no está en el presente del diccionario, piensa en un futuro."
        },
        {
          t: "ej",
          items: [
            ["Τί ἔσται;", "¿Qué pasará?"],
            ["Ὁ Πλάτων φιλόσοφος ἔσται.", "Platón será filósofo."],
            ["Σωκράτης οὐ πείσει τοὺς δικαστάς.", "Sócrates no convencerá a los jueces."],
            ["Σέ, ὦ Σώκρατες, σώσομεν.", "A ti, Sócrates, te salvaremos."],
            ["Αὔριον ἀκούσομαί σου.", "Mañana te escucharé."],
            ["Τοῦτο ὕστερον μαθησόμεθα.", "Esto lo aprenderemos más tarde."],
            ["Μέλλω λέγειν περὶ τῆς ψυχῆς.", "Voy a hablar del alma."]
          ]
        }
      ],
      vocab: [
        ["λύω, λύσω, ἔλυσα", "desatar, soltar; resolver"],
        ["πέμπω, πέμψω, ἔπεμψα", "enviar"],
        ["διδάσκω, διδάξω, ἐδίδαξα", "enseñar"],
        ["πείθω, πείσω, ἔπεισα", "convencer; en voz media (πείθομαι + dativo): obedecer, creer"],
        ["σῴζω, σώσω, ἔσωσα", "salvar"],
        ["ἀκούω, ἀκούσομαι, ἤκουσα", "oír, escuchar (+ genitivo de persona)"],
        ["θαυμάζω, θαυμάσομαι, ἐθαύμασα", "asombrarse, admirar"],
        ["λύσω", "desataré (futuro de λύω)"],
        ["ἔσομαι", "seré, estaré (futuro de εἰμί)"],
        ["ἔσται", "será, estará; habrá"],
        ["ἔσονται", "serán, estarán"],
        ["Τί ἔσται;", "¿Qué pasará?"],
        ["μέλλω + infinitivo", "ir a…, estar a punto de…"],
        ["αὔριον", "mañana"],
        ["ὕστερον", "más tarde, después"]
      ],
      ejercicios: [
        { t: "mc", q: "*λύσει* significa…", ops: ["desatará", "desató", "desata"], ok: 0 },
        { t: "mc", q: "¿Cuál de estas formas es futuro?", ops: ["πέμψω", "ἔπεμψα", "πέμπω"], ok: 0 },
        { t: "mc", q: "*ἔσται* significa…", ops: ["será", "es", "era"], ok: 0 },
        { t: "mc", q: "*ἀκούσομαι* es…", ops: ["un futuro de forma media y sentido activo: «oiré»", "un pasivo: «seré oído»", "un presente: «oigo»"], ok: 0 },
        { t: "mc", q: "Los tiempos principales de *γράφω* son…", ops: ["γράφω, γράψω, ἔγραψα", "γράφω, γράφσω, ἔγραφσα", "γράφω, ἔγραφον, γράψω"], ok: 0 },
        { t: "oir", x: "λύσουσι", ops: ["λύσουσι", "λύουσι", "ἔλυσαν"], ok: 0 },
        { t: "oir", x: "ἐσόμεθα", ops: ["ἐσόμεθα", "ἐσμέν", "ἦμεν"], ok: 0 },
        { t: "orden", es: "Platón será filósofo.", x: "Ὁ Πλάτων φιλόσοφος ἔσται." }
      ]
    },
    {
      id: "grc5-5",
      titulo: "El aoristo temático: ἔλαβον, εἶπον, ἦλθον",
      min: 40,
      intro: "Los verbos más frecuentes hacen el aoristo sin *σ*: ponen las terminaciones del imperfecto sobre otra raíz. *λαμβάνω* (tomo) → *ἔλαβον* (tomé); *λέγω* (digo) → *εἶπον* (dije). Son pocos, pero salen en cada página de Platón, así que hoy toca aprendérselos.",
      bloques: [
        {
          t: "p",
          x: "El **aoristo temático** (o segundo aoristo) usa las mismas desinencias que el imperfecto, *-ον, -ες, -ε(ν)…* y *-όμην, -ου, -ετο…*, pero sobre el **tema de aoristo**, que no es el del presente. «Temático» quiere decir que entre la raíz y la desinencia va una vocal *ο/ε*, la vocal temática, como en *λύ-ο-μεν*."
        },
        {
          t: "tabla",
          cab: ["Persona", "Activa", "Español", "Media", "Español"],
          audio: [1, 3],
          filas: [
            ["yo", "ἔλαβον", "tomé", "ἐγενόμην", "llegué a ser; nací"],
            ["tú", "ἔλαβες", "tomaste", "ἐγένου", "llegaste a ser"],
            ["él, ella", "ἔλαβε", "tomó", "ἐγένετο", "llegó a ser; ocurrió"],
            ["nosotros", "ἐλάβομεν", "tomamos", "ἐγενόμεθα", "llegamos a ser"],
            ["vosotros", "ἐλάβετε", "tomasteis", "ἐγένεσθε", "llegasteis a ser"],
            ["ellos, ellas", "ἔλαβον", "tomaron", "ἐγένοντο", "llegaron a ser; ocurrieron"]
          ]
        },
        {
          t: "p",
          x: "¿Cómo se distingue del imperfecto, si el aumento y las desinencias son iguales? **Por el tema.** El presente suele «engordar» la raíz con *-αν-*, *-ν-*, *-σκ-* o repitiendo una sílaba; el aoristo la deja desnuda: *ἐλάμβανε* «tomaba» / *ἔλαβε* «tomó»; *ἐμάνθανε* «aprendía» / *ἔμαθε* «aprendió»; *ἐγίγνετο* «ocurría» / *ἐγένετο* «ocurrió»."
        },
        {
          t: "tabla",
          cab: ["Presente", "Futuro", "Aoristo", "Español"],
          audio: [0, 1, 2],
          filas: [
            ["λαμβάνω", "λήψομαι", "ἔλαβον", "tomar, coger; recibir"],
            ["μανθάνω", "μαθήσομαι", "ἔμαθον", "aprender; comprender"],
            ["γίγνομαι", "γενήσομαι", "ἐγενόμην", "llegar a ser; nacer; ocurrir"],
            ["λέγω", "ἐρῶ", "εἶπον", "decir"],
            ["ὁράω", "ὄψομαι", "εἶδον", "ver"],
            ["ἔρχομαι", "εἶμι", "ἦλθον", "ir, venir"],
            ["εὑρίσκω", "εὑρήσω", "ηὗρον", "encontrar"],
            ["πάσχω", "πείσομαι", "ἔπαθον", "sufrir, experimentar"],
            ["φεύγω", "φεύξομαι", "ἔφυγον", "huir; ser el acusado"],
            ["πίπτω", "πεσοῦμαι", "ἔπεσον", "caer"],
            ["ἀποθνῄσκω", "ἀποθανοῦμαι", "ἀπέθανον", "morir"],
            ["ἔχω", "ἕξω", "ἔσχον", "tener; (aoristo) obtener"]
          ]
        },
        {
          t: "nota",
          x: "Tres de ellos toman el aoristo de otra raíz: *λέγω* → *εἶπον*, *ὁράω* → *εἶδον*, *ἔρχομαι* → *ἦλθον*, como el español «ir» → «fui» o el latín *ferō* → *tulī*. Y no confundas *εἶμι*, «iré» (el futuro de *ἔρχομαι*), con *εἰμί*, «soy»: solo los distingue el acento."
        },
        {
          t: "nota",
          x: "Las raíces del aoristo dan palabras clave de la filosofía: *μαθ-* → *μάθημα* (lo que se aprende; de ahí «matemáticas»); *παθ-* → *πάθος* (lo que uno sufre o experimenta: «pasión»); *γεν-* → *γένεσις* (origen). Y *ἰδ-*, la raíz de *εἶδον*, da *ἰδέα* y *εἶδος*, la «Idea» o «Forma» de Platón: literalmente, el aspecto, lo que se ve."
        },
        {
          t: "ej",
          items: [
            ["Τί ἐγένετο;", "¿Qué pasó?"],
            ["Ὁ Πλάτων ἐν Ἀθήναις ἐγένετο.", "Platón nació en Atenas."],
            ["Ὁ Πλάτων παρὰ τοῦ Σωκράτους πολλὰ ἔμαθεν.", "Platón aprendió muchas cosas de Sócrates."],
            ["Ὁ Χαιρεφῶν εἰς Δελφοὺς ἦλθεν.", "Querefonte fue a Delfos."],
            ["Τί εἶπεν ὁ θεός;", "¿Qué dijo el dios?"],
            ["Εἶδον τὸν Σωκράτη ἐν τῷ Λυκείῳ.", "Vi a Sócrates en el Liceo."],
            ["Τί ἔπαθες;", "¿Qué te pasó?"],
            ["Σωκράτης ἐν τῷ δεσμωτηρίῳ ἀπέθανεν.", "Sócrates murió en la cárcel."]
          ]
        }
      ],
      vocab: [
        ["λαμβάνω, λήψομαι, ἔλαβον", "tomar, coger; recibir"],
        ["μανθάνω, μαθήσομαι, ἔμαθον", "aprender; comprender"],
        ["γίγνομαι, γενήσομαι, ἐγενόμην", "llegar a ser; nacer; ocurrir"],
        ["λέγω, ἐρῶ, εἶπον", "decir"],
        ["ὁράω, ὄψομαι, εἶδον", "ver (impf. ἑώρων)"],
        ["ἔρχομαι, εἶμι, ἦλθον", "ir, venir (εἶμι: «iré»)"],
        ["εὑρίσκω, εὑρήσω, ηὗρον", "encontrar, descubrir (aor. también εὗρον)"],
        ["πάσχω, πείσομαι, ἔπαθον", "sufrir, experimentar"],
        ["φεύγω, φεύξομαι, ἔφυγον", "huir; en un juicio, ser el acusado"],
        ["πίπτω, πεσοῦμαι, ἔπεσον", "caer"],
        ["ἀποθνῄσκω, ἀποθανοῦμαι, ἀπέθανον", "morir"],
        ["ἔχω, ἕξω, ἔσχον", "tener (impf. εἶχον; aor. ἔσχον, «obtuve»)"],
        ["Τί ἐγένετο;", "¿Qué pasó?"],
        ["Τί ἔπαθες;", "¿Qué te pasó?"]
      ],
      ejercicios: [
        { t: "mc", q: "*ἔλαβε* significa…", ops: ["tomó", "tomaba", "tomará"], ok: 0 },
        { t: "mc", q: "¿Cuál es imperfecto y no aoristo?", ops: ["ἐμάνθανον", "ἔμαθον", "ἔλαβον"], ok: 0 },
        { t: "mc", q: "*ἐγένετο* es el aoristo de…", ops: ["γίγνομαι", "γιγνώσκω", "λέγω"], ok: 0 },
        { t: "mc", q: "*εἶδον* es el aoristo de…", ops: ["ὁράω (ver)", "εἰμί (ser)", "λέγω (decir)"], ok: 0 },
        { t: "mc", q: "*Τί ἔπαθες;* significa…", ops: ["¿Qué te pasó?", "¿Qué aprendiste?", "¿Qué dijiste?"], ok: 0 },
        { t: "oir", x: "ἔμαθε", ops: ["ἔμαθε", "ἔπαθε", "ἔλαβε"], ok: 0 },
        { t: "oir", x: "ἦλθον", ops: ["ἦλθον", "εἶπον", "εἶχον"], ok: 0 },
        { t: "orden", es: "Platón aprendió muchas cosas de Sócrates.", x: "Ὁ Πλάτων παρὰ τοῦ Σωκράτους πολλὰ ἔμαθεν." }
      ]
    },
    {
      id: "grc5-6",
      titulo: "Imperfecto o aoristo: contar una historia",
      min: 35,
      intro: "En griego, como en español, un relato alterna dos tiempos: el imperfecto pinta el fondo («Tales miraba las estrellas») y el aoristo cuenta los hechos («y se cayó a un pozo»). Hoy aprendes además el infinitivo de aoristo, que no lleva aumento ni indica pasado.",
      bloques: [
        {
          t: "p",
          x: "El *Lisis* de Platón empieza con Sócrates, que **iba** (imperfecto: el fondo) de la Academia al Liceo. Las otras tres frases continúan la escena a nuestra manera. Pregúntate en cada verbo: ¿fondo o hecho?"
        },
        {
          t: "tabla",
          cab: ["Griego", "Tiempo", "Español"],
          audio: [0],
          filas: [
            ["Ἐπορευόμην μὲν ἐξ Ἀκαδημείας εὐθὺ Λυκείου.", "imperfecto: fondo", "Iba yo de la Academia derecho al Liceo."],
            ["Ἐν τῇ ὁδῷ πολλοὶ νεανίσκοι ἦσαν.", "imperfecto: fondo", "En el camino había muchos jóvenes."],
            ["Ὁ δὲ Λύσις με εἶδε καὶ προσῆλθεν.", "aoristo: hechos", "Lisis me vio y se acercó."],
            ["Ἐγὼ δὲ αὐτὸν ἠρόμην τί πράττει.", "aoristo: hecho", "Yo le pregunté qué hacía."]
          ]
        },
        {
          t: "p",
          x: "Fuera del indicativo, el aoristo **no indica pasado**, solo aspecto: la acción vista entera, de una vez. El infinitivo de aoristo *μαθεῖν* es «aprender» (algo concreto, de una vez), no «haber aprendido»; *μανθάνειν* es «aprender» como actividad que dura. A menudo el español los traduce igual."
        },
        {
          t: "tabla",
          cab: ["Indicativo", "Infinitivo de aoristo", "Español"],
          audio: [0, 1],
          filas: [
            ["ἔλυσα", "λῦσαι", "desatar"],
            ["ἐλυσάμην", "λύσασθαι", "rescatar"],
            ["ἔλαβον", "λαβεῖν", "tomar"],
            ["ἔμαθον", "μαθεῖν", "aprender"],
            ["ἦλθον", "ἐλθεῖν", "ir, venir"],
            ["εἶδον", "ἰδεῖν", "ver"],
            ["ηὗρον", "εὑρεῖν", "encontrar"],
            ["εἶπον", "εἰπεῖν", "decir"],
            ["ἐγενόμην", "γενέσθαι", "llegar a ser"]
          ]
        },
        {
          t: "nota",
          x: "El aumento **solo va en indicativo**: *ἔ-μαθον* → *μαθεῖν*; *ἦλθον* → *ἐλθεῖν* (la *η* vuelve a ser *ε*); *εἶδον* → *ἰδεῖν*. Pero *εἶπον* → *εἰπεῖν*: aquí la *ει* es de la raíz y se queda. El infinitivo de aoristo temático lleva siempre el acento en la terminación: *λαβεῖν*, *γενέσθαι*; el de presente, no: *λαμβάνειν*, *γίγνεσθαι*."
        },
        {
          t: "p",
          x: "Con lo que ya sabes puedes identificar cualquier forma de *λύω* en indicativo mirando solo dos piezas: el **aumento**, que marca pasado, y la **σ**, que marca futuro o aoristo."
        },
        {
          t: "tabla",
          cab: ["Forma", "¿Aumento?", "¿σ?", "Tiempo"],
          audio: [0],
          filas: [
            ["λύω", "no", "no", "presente: «desato»"],
            ["ἔλυον", "sí", "no", "imperfecto: «desataba»"],
            ["λύσω", "no", "sí", "futuro: «desataré»"],
            ["ἔλυσα", "sí", "sí, con α", "aoristo: «desaté»"]
          ]
        },
        {
          t: "ej",
          items: [
            ["Ἐβουλόμην τὸν Σωκράτη ἰδεῖν.", "Quería ver a Sócrates."],
            ["Ἐθέλω τοῦτο μαθεῖν.", "Quiero aprender esto."],
            ["Χαλεπόν ἐστιν εὑρεῖν τὴν ἀλήθειαν.", "Es difícil encontrar la verdad."],
            ["Τί βούλει εἰπεῖν;", "¿Qué quieres decir?"],
            ["Ὁ θεὸς ἐκέλευσέ με ἐλθεῖν.", "El dios me ordenó ir."],
            ["Δεῖ ἀγαθὸν γενέσθαι.", "Hay que llegar a ser bueno."],
            ["Ἐξαίφνης δὲ ὁ Θαλῆς εἰς φρέαρ ἔπεσεν.", "Y de repente Tales cayó a un pozo."]
          ]
        }
      ],
      vocab: [
        ["λῦσαι", "desatar (infinitivo de aoristo de λύω)"],
        ["λαβεῖν", "tomar (infinitivo de aoristo de λαμβάνω)"],
        ["μαθεῖν", "aprender (infinitivo de aoristo de μανθάνω)"],
        ["ἐλθεῖν", "ir, venir (infinitivo de aoristo de ἔρχομαι)"],
        ["ἰδεῖν", "ver (infinitivo de aoristo de ὁράω)"],
        ["εὑρεῖν", "encontrar (infinitivo de aoristo de εὑρίσκω)"],
        ["εἰπεῖν", "decir (infinitivo de aoristo de λέγω)"],
        ["γενέσθαι", "llegar a ser; nacer (infinitivo de aoristo de γίγνομαι)"],
        ["Τί βούλει εἰπεῖν;", "¿Qué quieres decir?"],
        ["ἐξαίφνης", "de repente"],
        ["πρῶτον μέν…, ἔπειτα δέ…", "primero…, después…"],
        ["τέλος", "por fin, finalmente (adverbio)"],
        ["χαλεπόν ἐστι + infinitivo", "es difícil…"],
        ["δεῖ + infinitivo", "hay que…, es necesario…"],
        ["εὐθύ + genitivo", "derecho a, en línea recta hacia"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "En un relato, el imperfecto suele…",
          ops: ["pintar el fondo o lo que se repetía", "contar los hechos que hacen avanzar la historia", "anunciar lo que va a pasar"],
          ok: 0
        },
        { t: "mc", q: "El infinitivo de aoristo de *εἶδον* es…", ops: ["ἰδεῖν", "εἰδεῖν", "ὁρᾶν"], ok: 0 },
        {
          t: "mc",
          q: "*λύσω* es…",
          ops: ["futuro: tiene σ y no tiene aumento", "aoristo: tiene σ y aumento", "imperfecto: tiene aumento y no tiene σ"],
          ok: 0
        },
        { t: "mc", q: "*Ἐθέλω τοῦτο μαθεῖν* significa…", ops: ["Quiero aprender esto.", "Quise aprender esto.", "Quiero haber aprendido esto."], ok: 0 },
        { t: "mc", q: "¿Cuál es infinitivo de aoristo?", ops: ["γενέσθαι", "γίγνεσθαι", "ἐγένετο"], ok: 0 },
        { t: "oir", x: "λαβεῖν", ops: ["λαβεῖν", "λαμβάνειν", "ἔλαβεν"], ok: 0 },
        { t: "oir", x: "εἰπεῖν", ops: ["εἰπεῖν", "εἶπεν", "ἰδεῖν"], ok: 0 },
        { t: "orden", es: "Es difícil encontrar la verdad.", x: "Χαλεπόν ἐστιν εὑρεῖν τὴν ἀλήθειαν." }
      ]
    },
    {
      id: "grc5-7",
      titulo: "Verbos de decir: λέγω, εἶπον, φημί",
      min: 40,
      intro: "Los diálogos de Platón están tejidos con verbos de decir: *ἔφη* («dijo»), *ἦ δ᾽ ὅς* («dijo él»), *ἦν δ᾽ ἐγώ* («dije yo»). Hoy aprendes a seguir quién habla y cómo cuenta el griego lo que dijo otro.",
      bloques: [
        {
          t: "p",
          x: "Para «decir» el griego tiene dos verbos principales. *λέγω* es decir, hablar, y también «querer decir»: *τί λέγεις;*, «¿qué quieres decir?». Su futuro y su aoristo salen de otras raíces: *ἐρῶ*, «diré»; *εἶπον*, «dije». *φημί* es «decir, afirmar»: es irregular, muy corto, y se usa sobre todo en presente e imperfecto."
        },
        {
          t: "tabla",
          cab: ["Persona", "Presente", "Español", "Imperfecto", "Español"],
          audio: [1, 3],
          filas: [
            ["yo", "φημί", "digo, afirmo", "ἔφην", "decía, dije"],
            ["tú", "φῄς", "dices", "ἔφησθα", "decías, dijiste"],
            ["él, ella", "φησί", "dice", "ἔφη", "decía, dijo"],
            ["nosotros", "φαμέν", "decimos", "ἔφαμεν", "decíamos, dijimos"],
            ["vosotros", "φατέ", "decís", "ἔφατε", "decíais, dijisteis"],
            ["ellos, ellas", "φασί", "dicen", "ἔφασαν", "decían, dijeron"]
          ]
        },
        {
          t: "p",
          x: "*ἔφη* funciona como un pasado simple, «dijo», y suele ir **dentro** de la cita: *«Ἄνθρωπον», ἔφη, «ζητῶ»*, «Busco un hombre», dijo. En presente, *φημί* es enclítico, salvo *φῄς*: se apoya en la palabra anterior y pierde el acento, como en *ὥς φησιν*, «según dice». El infinitivo es *φάναι*."
        },
        {
          t: "p",
          x: "*φημί* introduce lo dicho con **acusativo e infinitivo**: *φησὶ Σωκράτη σοφὸν εἶναι*, «dice que Sócrates es sabio». *οὔ φημι* no es «no digo», sino «digo que no, niego»: *οὔ φησι τοῦτο ἀληθὲς εἶναι*, «dice que eso no es verdad»."
        },
        {
          t: "tabla",
          cab: ["Griego", "Español", "Cuándo"],
          audio: [0],
          filas: [
            ["ἔφη", "dijo", "dentro de la cita o tras ella"],
            ["ἦ δ᾽ ὅς", "dijo él", "en los diálogos narrados"],
            ["ἦν δ᾽ ἐγώ", "dije yo", "cuando habla el narrador"],
            ["ἤρετο", "preguntó", "aoristo de ἔρομαι"],
            ["ἀπεκρίνατο", "respondió", "aoristo de ἀποκρίνομαι"],
            ["Πάνυ μὲν οὖν.", "Desde luego.", "la respuesta más típica"],
            ["Ἀληθῆ λέγεις.", "Es verdad lo que dices.", "para asentir"],
            ["Ὀρθῶς λέγεις.", "Tienes razón.", "para asentir"],
            ["Οὐδὲν λέγεις.", "Lo que dices no tiene sentido.", "para rechazar un argumento"]
          ]
        },
        {
          t: "nota",
          x: "*ἦν δ᾽ ἐγώ* no es «yo era»: *ἦν* viene aquí de *ἠμί*, un viejo verbo de «decir» que solo sobrevive en estas fórmulas; y en *ἦ δ᾽ ὅς*, *ὅς* es un antiguo «él». Así narra Platón toda la *República*: «—…, *ἦν δ᾽ ἐγώ*. —…, *ἦ δ᾽ ὅς*»."
        },
        {
          t: "p",
          x: "Para contar lo que dijo otro hay dos construcciones: 1) *λέγω* o *εἶπον* + *ὅτι* (o *ὡς*) + indicativo: *εἶπεν ὅτι ἄνθρωπον ζητεῖ*; 2) *φημί* (y a menudo *λέγω* y los verbos de pensar) + acusativo e infinitivo: *ἔφη τὸν θεὸν ἀληθῆ λέγειν*, «dijo que el dios decía la verdad»."
        },
        {
          t: "nota",
          x: "Ojo: el español cambia el tiempo y el griego no. *εἶπεν ὅτι ἄνθρωπον ζητεῖ* es «dijo que **buscaba** un hombre», pero el griego conserva el presente de las palabras originales («busco»). A veces *ὅτι* introduce la cita literal y equivale a nuestros dos puntos: *εἶπεν ὅτι «ἄνθρωπον ζητῶ»*, «dijo: “Busco un hombre”»."
        },
        {
          t: "tabla",
          cab: ["Griego", "Infinitivo", "Español"],
          audio: [0],
          filas: [
            ["Ἔφη Σωκράτη ἐν τῇ ἀγορᾷ εἶναι.", "presente: al mismo tiempo", "Dijo que Sócrates estaba en el ágora."],
            ["Ἔφη Σωκράτη εἰς τὴν ἀγορὰν ἐλθεῖν.", "aoristo: antes", "Dijo que Sócrates había ido al ágora."],
            ["Ἔφη Σωκράτη αὔριον ἐν τῇ ἀγορᾷ ἔσεσθαι.", "futuro: después", "Dijo que Sócrates estaría mañana en el ágora."]
          ]
        },
        {
          t: "p",
          x: "En esta construcción el infinitivo de aoristo **sí** indica pasado, porque sustituye a un aoristo de indicativo («fue»). Es la excepción a lo que viste en la lección anterior."
        },
        {
          t: "ej",
          items: [
            ["«Ἄνθρωπον», φησί, «ζητῶ».", "«Busco un hombre», dice. (Diógenes)"],
            ["Τί λέγεις, ὦ Λύσι;", "¿Qué quieres decir, Lisis?"],
            ["Καὶ ἐγὼ εἶπον· «Οὐδὲν λέγεις».", "Y yo dije: «Eso no tiene sentido»."],
            ["Οὔ φημι τοῦτο ἀληθὲς εἶναι.", "Digo que eso no es verdad."],
            ["Φασὶ τὸν Θαλῆν εἰς φρέαρ πεσεῖν.", "Dicen que Tales se cayó a un pozo."],
            ["Εἶπεν ὅτι ἄνθρωπον ζητεῖ.", "Dijo que buscaba un hombre."]
          ]
        }
      ],
      vocab: [
        ["φημί, φήσω, ἔφησα", "decir, afirmar (impf. ἔφην)"],
        ["ἔφη", "dijo, decía"],
        ["ἦ δ᾽ ὅς", "dijo él (fórmula de los diálogos)"],
        ["ἦν δ᾽ ἐγώ", "dije yo (fórmula de los diálogos)"],
        ["Πάνυ μὲν οὖν.", "Desde luego; sin duda."],
        ["Ἀληθῆ λέγεις.", "Es verdad lo que dices."],
        ["Ὀρθῶς λέγεις.", "Tienes razón."],
        ["Οὐδὲν λέγεις.", "Lo que dices no tiene sentido."],
        ["ἤρετο", "preguntó (aoristo de ἔρομαι)"],
        ["ἐρωτάω, ἐρήσομαι, ἠρόμην", "preguntar (aor. también ἠρώτησα)"],
        ["ἀποκρίνομαι, ἀποκρινοῦμαι, ἀπεκρινάμην", "responder"]
      ],
      ejercicios: [
        { t: "mc", q: "*ἔφη* significa…", ops: ["dijo", "dice", "dirá"], ok: 0 },
        { t: "mc", q: "En un diálogo de Platón, *ἦν δ᾽ ἐγώ* significa…", ops: ["dije yo", "yo era", "yo estaba allí"], ok: 0 },
        { t: "mc", q: "*οὔ φημι* significa…", ops: ["digo que no, niego", "no hablo", "no lo sé"], ok: 0 },
        {
          t: "mc",
          q: "*Εἶπεν ὅτι ἄνθρωπον ζητεῖ* se traduce…",
          ops: ["Dijo que buscaba un hombre.", "Dice que buscó un hombre.", "Dijo que buscará un hombre."],
          ok: 0
        },
        {
          t: "mc",
          q: "*Φασὶ τὸν Θαλῆν εἰς φρέαρ πεσεῖν* significa…",
          ops: ["Dicen que Tales se cayó a un pozo.", "Dicen que Tales se caerá a un pozo.", "Tales dice que se cayó a un pozo."],
          ok: 0
        },
        { t: "oir", x: "ἔφασαν", ops: ["ἔφασαν", "φασίν", "ἔφησαν"], ok: 0 },
        { t: "oir", x: "φησί", ops: ["φησί", "φημί", "φασί"], ok: 0 },
        { t: "orden", es: "Digo que eso no es verdad.", x: "Οὔ φημι τοῦτο ἀληθὲς εἶναι." }
      ]
    },
    {
      id: "grc5-8",
      titulo: "Verbos de pensar: νομίζω, οἴομαι, δοκεῖ",
      min: 40,
      intro: "La filosofía nace al separar lo que *es* de lo que *parece* y de lo que *creemos*. Hoy aprendes los verbos con que Platón lo dice: *νομίζω* y *οἴομαι* (creer) y *δοκεῖ* (parece), de donde viene *δόξα*, «opinión».",
      bloques: [
        {
          t: "tabla",
          cab: ["Griego", "Español", "Construcción"],
          audio: [0],
          filas: [
            ["νομίζω", "creo, considero", "acusativo e infinitivo; o dos acusativos"],
            ["οἴομαι", "creo, supongo", "infinitivo"],
            ["οἶμαι", "creo (forma breve de οἴομαι)", "infinitivo"],
            ["δοκεῖ μοι", "me parece; me parece bien", "infinitivo"],
            ["δοκεῖ", "parece", "nominativo e infinitivo"],
            ["ἔδοξε", "pareció bien; se decidió", "dativo de quien decide"]
          ]
        },
        {
          t: "p",
          x: "**νομίζω** (*νομίζω, νομιῶ, ἐνόμισα*) es «creer, considerar», y con dos acusativos «tener por»: *σοφὸν αὐτὸν νομίζουσιν*, «lo tienen por sabio». Viene de *νόμος* (costumbre, ley): *θεοὺς νομίζειν* es «reconocer a los dioses», honrarlos como manda la costumbre de la ciudad. De no hacerlo acusaron a Sócrates."
        },
        {
          t: "p",
          x: "**οἴομαι** (forma media, sentido activo) es «creer, suponer», a menudo con la idea de que uno puede equivocarse. En Platón es muy frecuente la forma breve *οἶμαι*, «creo», y la pregunta *οἴει…;*, «¿crees…?». El imperfecto, ya lo viste, es *ᾤμην*, «creía»."
        },
        {
          t: "nota",
          x: "Si el que cree y el que «es» son la misma persona, el griego no repite el sujeto y el predicado queda en **nominativo**: *οἴεται σοφὸς εἶναι*, «cree ser sabio» (él mismo). Con otro sujeto, acusativo: *οἴεται ἐμὲ σοφὸν εἶναι*, «cree que yo soy sabio». El latín usaba aquí *sē* (*dīcit sē esse sapientem*); el griego se basta con el nominativo."
        },
        {
          t: "p",
          x: "**δοκέω** (*δοκέω, δόξω, ἔδοξα*; es un verbo contracto, como los de la semana 6) significa «parecer». Personal: *δοκεῖ σοφὸς εἶναι*, «parece (ser) sabio». Impersonal, con dativo: *δοκεῖ μοι*, «me parece»; *ὡς ἐμοὶ δοκεῖ*, «en mi opinión»; *ἔδοξε τοῖς Ἀθηναίοις*, «los atenienses decidieron» (literalmente, «les pareció bien»)."
        },
        {
          t: "nota",
          x: "De *δοκεῖ* vienen *δόξα* (opinión, parecer; también fama), *δόγμα* (lo que parece bien: decreto, doctrina) y *παράδοξος* (contrario a la opinión común). Platón opone la *δόξα*, la opinión, a la *ἐπιστήμη*, el conocimiento seguro. Y los decretos de Atenas se aprobaban con la fórmula *ἔδοξε τῇ βουλῇ καὶ τῷ δήμῳ*, «el Consejo y el pueblo acordaron»."
        },
        {
          t: "ej",
          items: [
            ["Νομίζω τοῦτο ἀληθὲς εἶναι.", "Creo que esto es verdad."],
            ["Νομίζω αὐτὸν σοφὸν ἔσεσθαι.", "Creo que será sabio."],
            ["Οἱ Ἀθηναῖοι Σωκράτη σοφὸν ἐνόμιζον.", "Los atenienses tenían a Sócrates por sabio."],
            ["Πολλοὶ οἴονται σοφοὶ εἶναι, εἰσὶ δ᾽ οὔ.", "Muchos creen ser sabios, pero no lo son."],
            ["Οἴει με ψεύδεσθαι;", "¿Crees que miento?"],
            ["Τί σοι δοκεῖ;", "¿Qué te parece?"],
            ["Ὡς ἐμοὶ δοκεῖ, ὀρθῶς λέγεις.", "En mi opinión, tienes razón."],
            ["Οὗτος ὁ ἀνὴρ δοκεῖ μὲν εἶναι σοφός, ἔστι δ᾽ οὔ.", "Este hombre parece sabio, pero no lo es."],
            ["Ἔδοξε τῇ βουλῇ καὶ τῷ δήμῳ.", "El Consejo y el pueblo acordaron. (fórmula de los decretos)"]
          ]
        }
      ],
      vocab: [
        ["νομίζω, νομιῶ, ἐνόμισα", "creer, considerar; tener por (+ dos acusativos)"],
        ["θεοὺς νομίζειν", "reconocer a los dioses, creer en ellos"],
        ["οἴομαι (οἶμαι), οἰήσομαι, ᾠήθην", "creer, suponer (impf. ᾤμην; el aoristo tiene forma pasiva)"],
        ["οἴει…;", "¿crees…? (2.ª persona de οἴομαι)"],
        ["οἴεται σοφὸς εἶναι", "cree ser sabio (él mismo)"],
        ["δοκέω, δόξω, ἔδοξα", "parecer; creer, opinar"],
        ["Τί σοι δοκεῖ;", "¿Qué te parece?"],
        ["ὡς ἐμοὶ δοκεῖ", "en mi opinión"],
        ["ἔδοξε", "pareció bien; se decidió (+ dativo)"],
        ["δοκεῖ μὲν εἶναι σοφός, ἔστι δ᾽ οὔ", "parece sabio, pero no lo es"],
        ["βουλή, -ῆς, ἡ", "consejo (el de Atenas); decisión"],
        ["ἔσεσθαι", "(que) será (infinitivo de futuro de εἰμί)"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "*Πολλοὶ οἴονται σοφοὶ εἶναι* significa…",
          ops: ["Muchos creen ser sabios.", "Muchos creen que los sabios existen.", "Muchos sabios creen."],
          ok: 0
        },
        {
          t: "mc",
          q: "¿Por qué va *σοφός* en nominativo en *οἴεται σοφὸς εἶναι*?",
          ops: ["Porque el sujeto del infinitivo es el mismo que el de οἴεται", "Porque οἴομαι siempre rige nominativo", "Porque σοφός es un adverbio"],
          ok: 0
        },
        { t: "mc", q: "*Τί σοι δοκεῖ;* significa…", ops: ["¿Qué te parece?", "¿Qué te enseña?", "¿Qué decidiste?"], ok: 0 },
        { t: "mc", q: "*Ἔδοξε τῇ βουλῇ* significa…", ops: ["El Consejo acordó.", "El Consejo parecía sabio.", "Al Consejo le pareció mal."], ok: 0 },
        {
          t: "mc",
          q: "*Οἱ Ἀθηναῖοι Σωκράτη σοφὸν ἐνόμιζον* significa…",
          ops: ["Los atenienses tenían a Sócrates por sabio.", "Sócrates tenía por sabios a los atenienses.", "Los atenienses creían en el sabio Sócrates."],
          ok: 0
        },
        { t: "mc", q: "*δόξα* (opinión) es de la familia de…", ops: ["δοκεῖ", "διδάσκω", "δῆμος"], ok: 0 },
        { t: "oir", x: "οἶμαι", ops: ["οἶμαι", "ᾤμην", "οἴει"], ok: 0 },
        { t: "orden", es: "Este hombre parece sabio, pero no lo es.", x: "Οὗτος ὁ ἀνὴρ δοκεῖ μὲν εἶναι σοφός, ἔστι δ᾽ οὔ." }
      ]
    }
  ],
  lecturas: [
    {
      id: "grc5-r1",
      titulo: "Χαιρεφῶν ἐν Δελφοῖς (Querefonte en Delfos)",
      nivel: "Inicial",
      texto: "Χαιρεφῶν ἑταῖρος ἦν Σωκράτους ἐκ νέου. Οὗτός ποτε εἰς Δελφοὺς ἦλθε καὶ ἤρετο τὸν θεόν· «Ἔστι τις σοφώτερος Σωκράτους;» Ἡ δὲ Πυθία ἀπεκρίνατο ὅτι οὐδείς ἐστι σοφώτερος.\n\nὉ δὲ Χαιρεφῶν πάλιν εἰς Ἀθήνας ἦλθε καὶ πάντα τῷ Σωκράτει εἶπεν. Σωκράτης δὲ ἐθαύμασε καὶ εἶπεν· «Τί ποτε λέγει ὁ θεός; Ἐγὼ γὰρ οὐκ οἶμαι σοφὸς εἶναι. Ὁ δὲ θεὸς οὐ ψεύδεται».\n\nἘντεῦθεν οὖν ἐξήταζε τοὺς πολιτικοὺς καὶ τοὺς ποιητὰς καὶ τοὺς χειροτέχνας· ἐβούλετο γὰρ μαθεῖν τί λέγει ὁ θεός. Τί δὲ ηὗρεν; Τοῦτο ὕστερον μαθησόμεθα.",
      traduccion: "Querefonte era compañero de Sócrates desde joven. Una vez fue a Delfos y le preguntó al dios: «¿Hay alguien más sabio que Sócrates?». La Pitia respondió que nadie era más sabio.\n\nQuerefonte volvió a Atenas y se lo contó todo a Sócrates. Sócrates se asombró y dijo: «¿Qué querrá decir el dios? Porque yo no creo ser sabio. Y el dios no miente».\n\nDesde entonces examinaba a los políticos, a los poetas y a los artesanos, porque quería entender qué quería decir el dios. ¿Y qué descubrió? Eso lo sabremos más adelante.",
      notas: "En la *Apología* (21a), Sócrates cuenta así la respuesta del oráculo: *ἀνεῖλεν οὖν ἡ Πυθία μηδένα σοφώτερον εἶναι*, «la Pitia respondió que nadie era más sabio». Platón usa acusativo e infinitivo donde nuestro texto pone *ὅτι*. Fíjate también en *ἐξήταζε*: imperfecto, porque examinar a unos y a otros le llevó mucho tiempo. Lo que descubrió lo leerás en el texto original en la semana 8.",
      glosa: {
        "χαιρεφῶν": "Querefonte, amigo de Sócrates desde la juventud",
        "ἑταῖρος": "compañero, amigo",
        "ἦν": "era (imperfecto de εἰμί)",
        "σωκράτους": "de Sócrates (genitivo); tras σοφώτερος, «que Sócrates»",
        "ἐκ": "desde (+ genitivo)",
        "νέου": "joven (genitivo); «ἐκ νέου» = desde joven",
        "οὗτός": "este, él (lleva un segundo acento por el enclítico ποτε)",
        "ποτε": "una vez, en cierta ocasión (enclítico); «τί ποτε…;» = ¿qué demonios…?, ¿qué querrá…?",
        "εἰς": "a, hacia (+ acusativo)",
        "δελφοὺς": "Delfos (acusativo plural de Δελφοί), donde estaba el oráculo de Apolo",
        "ἦλθε": "fue, vino (aoristo de ἔρχομαι)",
        "καὶ": "y",
        "ἤρετο": "preguntó (aoristo temático medio de ἔρομαι)",
        "τὸν": "el (acusativo masculino del artículo)",
        "θεόν": "al dios (acusativo): Apolo",
        "ἔστι": "hay, existe (con acento en la primera sílaba cuando significa «hay»)",
        "τις": "alguien (enclítico)",
        "σοφώτερος": "más sabio (comparativo de σοφός: lo verás en la semana 6)",
        "ἡ": "la (artículo femenino)",
        "δὲ": "y, pero (va en segundo lugar)",
        "πυθία": "la Pitia, la sacerdotisa de Apolo en Delfos",
        "ἀπεκρίνατο": "respondió (aoristo de ἀποκρίνομαι)",
        "ὅτι": "que",
        "οὐδείς": "nadie",
        "ἐστι": "es (enclítico)",
        "ὁ": "el (artículo)",
        "πάλιν": "de vuelta; otra vez",
        "ἀθήνας": "Atenas (acusativo de Ἀθῆναι, plural)",
        "πάντα": "todo, todas las cosas (acusativo neutro plural de πᾶς)",
        "τῷ": "al (dativo del artículo)",
        "σωκράτει": "a Sócrates (dativo)",
        "εἶπεν": "dijo (aoristo de λέγω)",
        "σωκράτης": "Sócrates",
        "ἐθαύμασε": "se asombró (aoristo de θαυμάζω)",
        "τί": "qué; ¿qué?",
        "λέγει": "dice; quiere decir (el griego conserva el presente del original)",
        "θεός": "el dios",
        "ἐγὼ": "yo",
        "γὰρ": "pues, porque (va en segundo lugar)",
        "οὐκ": "no (ante vocal)",
        "οἶμαι": "creo (forma breve de οἴομαι)",
        "σοφὸς": "sabio (en nominativo porque el que cree y el que «es» son el mismo)",
        "εἶναι": "ser (infinitivo)",
        "θεὸς": "el dios",
        "οὐ": "no",
        "ψεύδεται": "miente (de ψεύδομαι)",
        "ἐντεῦθεν": "desde entonces, a partir de ahí",
        "οὖν": "así pues, por tanto",
        "ἐξήταζε": "examinaba, ponía a prueba (imperfecto de ἐξετάζω: ἐξ-ε-ετάζω)",
        "τοὺς": "los (acusativo plural)",
        "πολιτικοὺς": "los políticos (de πολιτικός)",
        "ποιητὰς": "los poetas (acusativo plural de ποιητής)",
        "χειροτέχνας": "los artesanos (acusativo plural de χειροτέχνης)",
        "ἐβούλετο": "quería (imperfecto de βούλομαι)",
        "μαθεῖν": "aprender, entender (infinitivo de aoristo de μανθάνω)",
        "ηὗρεν": "encontró, descubrió (aoristo de εὑρίσκω; también εὗρεν)",
        "τοῦτο": "esto",
        "ὕστερον": "más tarde",
        "μαθησόμεθα": "aprenderemos, sabremos (futuro de μανθάνω)"
      },
      preguntas: [
        {
          q: "¿Qué le preguntó Querefonte al dios?",
          ops: ["Si había alguien más sabio que Sócrates", "Si Sócrates era un buen maestro", "Quién era el mejor poeta de Atenas"],
          ok: 0
        },
        {
          q: "¿Por qué se asombró Sócrates?",
          ops: ["Porque él no creía ser sabio", "Porque creía que el dios mentía", "Porque Querefonte no había ido a Delfos"],
          ok: 0
        },
        {
          q: "¿A quiénes examinó después Sócrates?",
          ops: ["A los políticos, los poetas y los artesanos", "A los sacerdotes de Delfos", "Solo a sus discípulos"],
          ok: 0
        }
      ]
    },
    {
      id: "grc5-r2",
      titulo: "Θαλῆς καὶ τὸ φρέαρ (Tales y el pozo)",
      nivel: "Inicial",
      texto: "Θαλῆς ὁ Μιλήσιος πρῶτος τῶν φιλοσόφων ἦν. Νυκτὸς δέ ποτε ἐξῆλθεν ἐκ τῆς οἰκίας καὶ ἄνω ἔβλεπε πρὸς τὰ ἄστρα· ἐβούλετο γὰρ μαθεῖν τὴν τοῦ οὐρανοῦ φύσιν. Ἀλλὰ τὴν ὁδὸν οὐκ ἔβλεπε, καὶ εἰς φρέαρ ἔπεσεν.\n\nΘρᾷττα δέ τις θεραπαινίς, ἐμμελὴς καὶ χαρίεσσα, τοῦτο εἶδε καὶ ἐγέλασεν. «Σὺ μέν, ὦ Θαλῆ», ἔφη, «τὰ ἐν τῷ οὐρανῷ ἐθέλεις γιγνώσκειν, τὰ δὲ πρὸ τῶν ποδῶν οὐ βλέπεις».\n\nὉ δὲ Σωκράτης, ὡς γράφει ὁ Πλάτων, ἔλεγεν ὅτι τοῦτο πάσχουσι πάντες οἱ φιλόσοφοι.",
      traduccion: "Tales de Mileto fue el primero de los filósofos. Una noche salió de casa y se puso a mirar hacia arriba, a las estrellas, porque quería conocer la naturaleza del cielo. Pero no veía el camino, y se cayó a un pozo.\n\nUna criada tracia, graciosa y ocurrente, lo vio y se echó a reír. «Tú, Tales», le dijo, «quieres conocer lo que hay en el cielo, y no ves lo que tienes delante de los pies».\n\nY Sócrates, según escribe Platón, decía que eso les pasa a todos los filósofos.",
      notas: "Lo cuenta Sócrates en el *Teeteto* de Platón (174a): la criada era *ἐμμελὴς καὶ χαρίεσσα*, «graciosa y ocurrente». Fíjate en *ἐγέλασεν*: aquí el aoristo marca el comienzo de la acción, «se echó a reír». Aristóteles (*Política* I 11) cuenta la revancha de Tales: los astros le anunciaron una gran cosecha de aceitunas, alquiló todas las prensas de aceite y se hizo rico, para demostrar que un filósofo puede ganar dinero si quiere.",
      glosa: {
        "θαλῆς": "Tales (de Mileto), el primer filósofo griego",
        "ὁ": "el (artículo)",
        "μιλήσιος": "de Mileto, milesio",
        "πρῶτος": "el primero",
        "τῶν": "de los (genitivo plural del artículo)",
        "φιλοσόφων": "de los filósofos (genitivo plural)",
        "ἦν": "era, fue (imperfecto de εἰμί)",
        "νυκτὸς": "de noche (genitivo de tiempo de νύξ)",
        "δέ": "y, pero (va en segundo lugar)",
        "ποτε": "una vez (enclítico)",
        "ἐξῆλθεν": "salió (aoristo de ἐξέρχομαι: ἐξ + ἦλθον)",
        "ἐκ": "de, desde (+ genitivo)",
        "τῆς": "la (genitivo femenino del artículo)",
        "οἰκίας": "casa (genitivo de οἰκία)",
        "καὶ": "y",
        "ἄνω": "arriba, hacia arriba",
        "ἔβλεπε": "miraba; veía (imperfecto de βλέπω)",
        "πρὸς": "hacia (+ acusativo)",
        "τὰ": "los, las (neutro plural); «τὰ ἐν τῷ οὐρανῷ» = lo que hay en el cielo",
        "ἄστρα": "las estrellas, los astros (de ἄστρον)",
        "ἐβούλετο": "quería (imperfecto de βούλομαι)",
        "γὰρ": "pues, porque",
        "μαθεῖν": "aprender, conocer (infinitivo de aoristo de μανθάνω)",
        "τὴν": "la (acusativo femenino del artículo)",
        "τοῦ": "del (genitivo del artículo)",
        "οὐρανοῦ": "del cielo (genitivo de οὐρανός)",
        "φύσιν": "naturaleza (acusativo de φύσις)",
        "ἀλλὰ": "pero",
        "ὁδὸν": "camino (acusativo de ὁδός, femenino)",
        "οὐκ": "no",
        "εἰς": "a, dentro de (+ acusativo)",
        "φρέαρ": "pozo (φρέαρ, φρέατος, τό)",
        "ἔπεσεν": "cayó (aoristo temático de πίπτω)",
        "θρᾷττα": "tracia, de Tracia",
        "τις": "una, cierta (enclítico)",
        "θεραπαινίς": "criada, sirvienta",
        "ἐμμελὴς": "graciosa, con gracia",
        "χαρίεσσα": "encantadora, ocurrente (femenino de χαρίεις)",
        "τοῦτο": "esto",
        "εἶδε": "vio (aoristo de ὁράω)",
        "ἐγέλασεν": "se rió, se echó a reír (aoristo de γελάω)",
        "σὺ": "tú",
        "μέν": "por un lado (anuncia el δέ que viene después)",
        "ὦ": "oh (ante vocativo; no se traduce)",
        "θαλῆ": "Tales (vocativo)",
        "ἔφη": "dijo (de φημί)",
        "ἐν": "en (+ dativo)",
        "τῷ": "el (dativo del artículo)",
        "οὐρανῷ": "cielo (dativo)",
        "ἐθέλεις": "quieres",
        "γιγνώσκειν": "conocer (infinitivo de presente)",
        "δὲ": "y, pero; por otro lado",
        "πρὸ": "delante de (+ genitivo)",
        "ποδῶν": "pies (genitivo plural de πούς)",
        "οὐ": "no",
        "βλέπεις": "ves, miras",
        "σωκράτης": "Sócrates",
        "ὡς": "como, según",
        "γράφει": "escribe",
        "πλάτων": "Platón",
        "ἔλεγεν": "decía (imperfecto de λέγω)",
        "ὅτι": "que",
        "πάσχουσι": "sufren, les pasa (de πάσχω; el griego conserva el presente)",
        "πάντες": "todos",
        "οἱ": "los (nominativo plural del artículo)",
        "φιλόσοφοι": "los filósofos"
      },
      preguntas: [
        { q: "¿Qué hacía Tales aquella noche?", ops: ["Miraba las estrellas", "Buscaba agua", "Hablaba con una criada"], ok: 0 },
        { q: "¿Qué le pasó?", ops: ["Se cayó a un pozo", "Se perdió por el camino", "Descubrió una estrella nueva"], ok: 0 },
        {
          q: "¿De qué se burla la criada?",
          ops: ["De que quiere conocer el cielo y no ve lo que tiene a sus pies", "De que no sabe nada del cielo", "De que sale de noche sin lámpara"],
          ok: 0
        },
        {
          q: "En *ἔλεγεν ὅτι τοῦτο πάσχουσι πάντες οἱ φιλόσοφοι*, ¿por qué va *πάσχουσι* en presente?",
          ops: ["Porque el griego conserva el tiempo de lo que se dijo", "Porque Sócrates aún vive", "Porque ὅτι siempre pide presente"],
          ok: 0
        }
      ]
    },
    {
      id: "grc5-r3",
      titulo: "Διογένης καὶ ὁ λύχνος (Diógenes y la lámpara)",
      nivel: "Intermedio",
      texto: "Διογένης ἐκ Σινώπης εἰς Ἀθήνας ἦλθε καὶ πίθον εἶχεν ἀντ᾽ οἰκίας· οἱ δὲ Ἀθηναῖοι αὐτὸν «κύνα» ὠνόμαζον.\n\nΜεθ᾽ ἡμέραν ποτὲ λύχνον ἧψε καὶ διὰ τῆς ἀγορᾶς ἐβάδιζεν. Πολλοὶ δὲ ἐθαύμαζον καὶ ἤροντο· «Τί πράττεις, ὦ Διόγενες; Διὰ τί λύχνον ἔχεις ἐν ἡμέρᾳ;» Ὁ δὲ «Ἄνθρωπον», ἔφη, «ζητῶ». Οἱ δὲ ἐγέλασαν· «Ἀλλὰ πολλοί εἰσιν ἐν τῇ ἀγορᾷ ἄνθρωποι». Διογένης δὲ ἀπεκρίνατο· «Πολλοὺς μὲν εἶδον, ἄνθρωπον δὲ οὐδένα ηὗρον».\n\nἌλλοτε δὲ ἐβόησεν· «Ἰὼ ἄνθρωποι». Πολλοὶ οὖν προσῆλθον. Ὁ δὲ Διογένης τῇ βακτηρίᾳ αὐτοὺς ἐδίωξε καὶ εἶπεν· «Ἀνθρώπους ἐκάλεσα, οὐ καθάρματα».",
      traduccion: "Diógenes llegó de Sínope a Atenas y tenía una tinaja en lugar de casa; los atenienses lo llamaban «el perro».\n\nUna vez, en pleno día, encendió una lámpara y se paseaba por el ágora. Muchos se asombraban y le preguntaron: «¿Qué haces, Diógenes? ¿Por qué llevas una lámpara de día?». Y él dijo: «Busco un hombre». Ellos se rieron: «Pero en el ágora hay muchos hombres». Diógenes respondió: «He visto a muchos, pero no he encontrado ni un hombre».\n\nOtra vez gritó: «¡Eh, hombres!». Así que acudieron muchos. Pero Diógenes los echó a bastonazos y dijo: «He llamado a hombres, no a basura».",
      notas: "Diógenes Laercio (VI 41) lo cuenta en una línea: *λύχνον μεθ᾽ ἡμέραν ἅψας «ἄνθρωπον», φησί, «ζητῶ»*. *ἅψας*, «tras encender», es un participio de aoristo: lo verás la semana que viene. La segunda anécdota está en VI 32. Fíjate en que el aoristo griego también traduce nuestro pretérito perfecto: *εἶδον*, «he visto»; *ἐκάλεσα*, «he llamado». A Diógenes lo llamaban *κύων*, «perro», y de ahí viene «cínico» (*κυνικός*, «perruno»).",
      glosa: {
        "διογένης": "Diógenes de Sínope, el filósofo cínico",
        "ἐκ": "de, desde (+ genitivo)",
        "σινώπης": "Sínope (genitivo), ciudad griega del mar Negro",
        "εἰς": "a (+ acusativo)",
        "ἀθήνας": "Atenas (acusativo)",
        "ἦλθε": "fue, vino (aoristo de ἔρχομαι)",
        "καὶ": "y",
        "πίθον": "tinaja (acusativo de πίθος)",
        "εἶχεν": "tenía (imperfecto de ἔχω, aumento irregular)",
        "ἀντ": "en lugar de (ἀντί elidido; + genitivo)",
        "οἰκίας": "casa (genitivo)",
        "οἱ": "los; «οἱ δέ» = y ellos",
        "δὲ": "y, pero (va en segundo lugar)",
        "ἀθηναῖοι": "los atenienses",
        "αὐτὸν": "lo, a él (acusativo de αὐτός)",
        "κύνα": "perro (acusativo de κύων): de ahí «cínico»",
        "ὠνόμαζον": "llamaban (imperfecto de ὀνομάζω)",
        "μεθ": "durante (μετά elidido, con θ ante espíritu áspero); «μεθ᾽ ἡμέραν» = de día",
        "ἡμέραν": "día (acusativo de ἡμέρα)",
        "ποτὲ": "una vez (enclítico; lleva acento por la palabra anterior)",
        "λύχνον": "lámpara, candil (acusativo de λύχνος)",
        "ἧψε": "encendió (aoristo de ἅπτω)",
        "διὰ": "a través de, por (+ genitivo); «διὰ τί» = ¿por qué?",
        "τῆς": "la (genitivo del artículo)",
        "ἀγορᾶς": "ágora, plaza (genitivo)",
        "ἐβάδιζεν": "se paseaba, caminaba (imperfecto de βαδίζω)",
        "πολλοὶ": "muchos",
        "ἐθαύμαζον": "se asombraban (imperfecto de θαυμάζω)",
        "ἤροντο": "preguntaron (aoristo de ἔρομαι)",
        "τί": "qué; ¿qué?",
        "πράττεις": "haces",
        "ὦ": "oh (ante vocativo; no se traduce)",
        "διόγενες": "Diógenes (vocativo)",
        "ἔχεις": "tienes, llevas",
        "ἐν": "en (+ dativo)",
        "ἡμέρᾳ": "día (dativo); «ἐν ἡμέρᾳ» = de día",
        "ὁ": "el; «ὁ δέ» = y él",
        "ἄνθρωπον": "un hombre, un ser humano (acusativo)",
        "ἔφη": "dijo (de φημί)",
        "ζητῶ": "busco (de ζητέω, verbo contracto: semana 6)",
        "ἐγέλασαν": "se rieron (aoristo de γελάω)",
        "ἀλλὰ": "pero",
        "πολλοί": "muchos (lleva acento agudo por el enclítico εἰσιν)",
        "εἰσιν": "son, hay (enclítico)",
        "τῇ": "la (dativo del artículo)",
        "ἀγορᾷ": "ágora (dativo)",
        "ἄνθρωποι": "hombres, personas",
        "ἀπεκρίνατο": "respondió (aoristo de ἀποκρίνομαι)",
        "πολλοὺς": "a muchos (acusativo plural)",
        "μὲν": "por un lado (anuncia δέ)",
        "εἶδον": "vi, he visto (aoristo de ὁράω)",
        "οὐδένα": "ninguno (acusativo de οὐδείς)",
        "ηὗρον": "encontré, he encontrado (aoristo de εὑρίσκω)",
        "ἄλλοτε": "otra vez, en otra ocasión",
        "ἐβόησεν": "gritó (aoristo de βοάω)",
        "ἰὼ": "¡eh! (interjección para llamar)",
        "οὖν": "así que, entonces",
        "προσῆλθον": "se acercaron, acudieron (aoristo de προσέρχομαι: πρός + ἦλθον)",
        "βακτηρίᾳ": "bastón (dativo de instrumento: «con el bastón»)",
        "αὐτοὺς": "los, a ellos",
        "ἐδίωξε": "persiguió, echó (aoristo de διώκω)",
        "εἶπεν": "dijo (aoristo de λέγω)",
        "ἀνθρώπους": "hombres (acusativo plural)",
        "ἐκάλεσα": "llamé, he llamado (aoristo de καλέω)",
        "οὐ": "no",
        "καθάρματα": "basura, gentuza (acusativo plural de κάθαρμα)"
      },
      preguntas: [
        { q: "¿Qué tenía Diógenes en lugar de casa?", ops: ["Una tinaja", "Una lámpara", "Un bastón"], ok: 0 },
        { q: "¿Qué buscaba con la lámpara?", ops: ["Un hombre de verdad", "Su bastón perdido", "A Sócrates"], ok: 0 },
        {
          q: "¿Por qué echó a los que acudieron cuando gritó?",
          ops: ["Porque había llamado a hombres, no a gentuza", "Porque no le dieron dinero", "Porque se rieron de su lámpara"],
          ok: 0
        }
      ]
    },
    {
      id: "grc5-r4",
      titulo: "Σωκράτης ἐν τῷ δικαστηρίῳ (Sócrates ante los jueces)",
      nivel: "Intermedio",
      texto: "Μέλητος καὶ Ἄνυτος καὶ Λύκων Σωκράτη ἐγράψαντο. Ἔλεγον γὰρ ὅτι Σωκράτης τοὺς νέους διαφθείρει καὶ τοὺς θεοὺς τῆς πόλεως οὐ νομίζει.\n\nἘν δὲ τῷ δικαστηρίῳ πρῶτον μὲν οἱ κατήγοροι πολλὰ καὶ δεινὰ εἶπον, ἔπειτα δὲ ὁ Σωκράτης ἀπελογήσατο· «Ἐγὼ διδάσκαλος μὲν οὐδενὸς ἐγενόμην, τοὺς δὲ ἀνθρώπους ἐξετάζω· ὁ γὰρ θεὸς τοῦτό με πράττειν ἐκέλευσεν».\n\nΟἱ δὲ δικασταὶ οὐκ ἐπίστευσαν αὐτῷ. Ὁ δὲ Σωκράτης οὐκ ἐδάκρυσεν, ἀλλ᾽ ἔφη ἄξιος εἶναι οὐ θανάτου ἀλλὰ τιμῆς. Τέλος δὲ ἔδοξε τοῖς δικασταῖς Σωκράτη ἀποθανεῖν. Ὁ δὲ εἶπεν· «Ἐγὼ μὲν ἀποθανοῦμαι, ὑμεῖς δὲ βιώσεσθε· πότερον δὲ ἄμεινον, ἄδηλόν ἐστι παντὶ πλὴν τῷ θεῷ».",
      traduccion: "Meleto, Ánito y Licón acusaron a Sócrates. Decían, en efecto, que Sócrates corrompía a los jóvenes y no reconocía a los dioses de la ciudad.\n\nEn el tribunal, primero los acusadores dijeron muchas cosas terribles; después Sócrates se defendió: «Yo nunca he sido maestro de nadie, pero examino a la gente, porque el dios me ha ordenado hacerlo».\n\nPero los jueces no le creyeron. Sócrates no lloró; al contrario, dijo que no merecía la muerte, sino honores. Al final, los jueces decidieron que Sócrates debía morir. Y él dijo: «Yo moriré y vosotros viviréis; pero cuál de las dos cosas es mejor no está claro para nadie, salvo para el dios».",
      notas: "Jenofonte (Ξενοφῶν) copia así la acusación al principio de sus *Recuerdos de Sócrates*: *ἀδικεῖ Σωκράτης οὓς μὲν ἡ πόλις νομίζει θεοὺς οὐ νομίζων, ἕτερα δὲ καινὰ δαιμόνια εἰσφέρων· ἀδικεῖ δὲ καὶ τοὺς νέους διαφθείρων*: «Sócrates es culpable de no reconocer a los dioses que reconoce la ciudad y de introducir otras divinidades nuevas; es culpable también de corromper a los jóvenes». Las últimas palabras de nuestro texto resumen el final de la *Apología* de Platón. Y *κατήγορος*, «acusador», es de la familia de *κατηγορία*: en el tribunal, «acusación»; en Aristóteles, «categoría», lo que se dice de algo.",
      glosa: {
        "μέλητος": "Meleto, el acusador principal",
        "καὶ": "y",
        "ἄνυτος": "Ánito, político ateniense",
        "λύκων": "Licón, orador",
        "σωκράτη": "a Sócrates (acusativo)",
        "ἐγράψαντο": "acusaron (aoristo medio de γράφω: «γράφομαί τινα» = acuso a alguien)",
        "ἔλεγον": "decían (imperfecto de λέγω); también «yo decía»",
        "γὰρ": "pues, en efecto",
        "ὅτι": "que",
        "σωκράτης": "Sócrates",
        "τοὺς": "los, a los (acusativo plural del artículo)",
        "νέους": "jóvenes (acusativo plural de νέος)",
        "διαφθείρει": "corrompe (el griego conserva el presente de la acusación)",
        "θεοὺς": "dioses (acusativo plural)",
        "τῆς": "de la (genitivo del artículo)",
        "πόλεως": "ciudad (genitivo de πόλις)",
        "οὐ": "no",
        "νομίζει": "reconoce, cree en (de νομίζω)",
        "ἐν": "en (+ dativo)",
        "δὲ": "y; pero; por otro lado",
        "τῷ": "el (dativo del artículo)",
        "δικαστηρίῳ": "tribunal (dativo de δικαστήριον)",
        "πρῶτον": "primero",
        "μὲν": "por un lado (anuncia δέ)",
        "οἱ": "los; «οἱ δέ» = y ellos",
        "κατήγοροι": "los acusadores (de κατήγορος)",
        "πολλὰ": "muchas cosas",
        "δεινὰ": "terribles (neutro plural de δεινός)",
        "εἶπον": "dijeron (aoristo de λέγω); también «dije»",
        "ἔπειτα": "después",
        "ὁ": "el; «ὁ δέ» = y él",
        "ἀπελογήσατο": "se defendió (aoristo de ἀπολογέομαι: de ahí «Apología»)",
        "ἐγὼ": "yo",
        "διδάσκαλος": "maestro",
        "οὐδενὸς": "de nadie (genitivo de οὐδείς)",
        "ἐγενόμην": "fui, llegué a ser (aoristo de γίγνομαι)",
        "ἀνθρώπους": "a las personas (acusativo plural)",
        "ἐξετάζω": "examino, pongo a prueba",
        "θεὸς": "el dios (Apolo)",
        "τοῦτό": "esto (lleva un segundo acento por el enclítico με)",
        "με": "me (enclítico)",
        "πράττειν": "hacer (infinitivo)",
        "ἐκέλευσεν": "ordenó, ha ordenado (aoristo de κελεύω)",
        "δικασταὶ": "los jueces (de δικαστής)",
        "οὐκ": "no",
        "ἐπίστευσαν": "creyeron (aoristo de πιστεύω + dativo)",
        "αὐτῷ": "a él, le (dativo)",
        "ἐδάκρυσεν": "lloró, rompió a llorar (aoristo de δακρύω)",
        "ἀλλ": "sino, pero (ἀλλά elidido)",
        "ἔφη": "dijo (de φημί)",
        "ἄξιος": "digno, merecedor (+ genitivo); en nominativo porque el sujeto es el mismo que el de ἔφη",
        "εἶναι": "ser (infinitivo)",
        "θανάτου": "de muerte (genitivo de θάνατος)",
        "ἀλλὰ": "sino",
        "τιμῆς": "de honor, de honores (genitivo de τιμή)",
        "τέλος": "por fin, al final (adverbio)",
        "ἔδοξε": "pareció bien, se decidió (aoristo de δοκέω: «ἔδοξε τοῖς δικασταῖς» = los jueces decidieron)",
        "τοῖς": "a los (dativo plural del artículo)",
        "δικασταῖς": "jueces (dativo plural)",
        "ἀποθανεῖν": "morir (infinitivo de aoristo de ἀποθνῄσκω)",
        "εἶπεν": "dijo (aoristo de λέγω)",
        "ἀποθανοῦμαι": "moriré (futuro de ἀποθνῄσκω)",
        "ὑμεῖς": "vosotros",
        "βιώσεσθε": "viviréis (futuro de βιόω)",
        "πότερον": "cuál de las dos cosas",
        "ἄμεινον": "mejor (neutro de ἀμείνων, comparativo de ἀγαθός)",
        "ἄδηλόν": "no está claro, incierto (lleva un segundo acento por el enclítico ἐστι)",
        "ἐστι": "es (enclítico)",
        "παντὶ": "para todo el mundo (dativo de πᾶς)",
        "πλὴν": "excepto, salvo",
        "θεῷ": "dios (dativo)"
      },
      preguntas: [
        {
          q: "¿De qué acusaban a Sócrates?",
          ops: ["De corromper a los jóvenes y no reconocer a los dioses de la ciudad", "De robar en el ágora", "De cobrar por sus clases"],
          ok: 0
        },
        {
          q: "¿Qué dijo Sócrates de sí mismo en su defensa?",
          ops: ["Que nunca había sido maestro de nadie, pero examinaba a la gente por orden del dios", "Que enseñaba la virtud a los jóvenes", "Que no conocía a sus acusadores"],
          ok: 0
        },
        { q: "¿Qué dijo Sócrates que merecía?", ops: ["Honores, no la muerte", "La muerte", "El destierro"], ok: 0 },
        { q: "Según Sócrates, ¿quién sabe si es mejor morir o vivir?", ops: ["Solo el dios", "Los jueces", "Él mismo"], ok: 0 }
      ]
    }
  ]
});
