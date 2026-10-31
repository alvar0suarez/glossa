// Glossa · latín · semana 5: Subjuntivo y deponentes
window.CONTENT.la.semanas.push({
  n: 5,
  lecciones: [
    {
      id: "la5-1",
      titulo: "El subjuntivo presente",
      min: 35,
      intro: "El subjuntivo es el modo de lo que se quiere, se pregunta o se supone, y los textos escolásticos lo usan en cada página: *Quaeritur utrum logica sit scientia*. Se forma casi como en español: *amar → ame*, *leer → lea*.",
      bloques: [
        {
          t: "tabla",
          cab: ["Conjugación", "Indicativo", "Subjuntivo", "Español"],
          audio: [1, 2],
          filas: [
            ["1.ª: amāre", "amat", "amet", "que ame"],
            ["2.ª: docēre", "docet", "doceat", "que enseñe"],
            ["3.ª: legere", "legit", "legat", "que lea"],
            ["3.ª en -iō: capere", "capit", "capiat", "que tome"],
            ["4.ª: audīre", "audit", "audiat", "que oiga"],
            ["esse", "est", "sit", "que sea"],
            ["posse", "potest", "possit", "que pueda"]
          ]
        },
        {
          t: "p",
          x: "La regla cabe en una línea: la 1.ª conjugación cambia su *a* por *e*; las demás meten una *a*. El español heredó el mismo cruce: *amar → ame*, pero *leer → lea* y *vivir → viva*. *Esse* y *posse* van aparte, con *i*: *sit*, *possit*."
        },
        {
          t: "tabla",
          cab: ["Persona", "amāre", "dīcere", "esse"],
          audio: [1, 2, 3],
          filas: [
            ["ego", "amem", "dīcam", "sim"],
            ["tū", "amēs", "dīcās", "sīs"],
            ["is, ea", "amet", "dīcat", "sit"],
            ["nōs", "amēmus", "dīcāmus", "sīmus"],
            ["vōs", "amētis", "dīcātis", "sītis"],
            ["eī, eae", "ament", "dīcant", "sint"]
          ]
        },
        {
          t: "p",
          x: "Su primer uso es el **exhortativo**, el de las propuestas y las órdenes suaves. En 1.ª persona del plural equivale a «-emos»: *dīcāmus* (digamos), *videāmus* (veamos). En 3.ª persona, a «que…»: *legat* (que lea), *sit* (sea). Se niega con *nē*: *nē dormiāmus* (no nos durmamos)."
        },
        {
          t: "ej",
          items: [
            ["Videāmus exemplum.", "Veamos un ejemplo."],
            ["Incipiāmus ā dēfīnītiōne.", "Empecemos por la definición."],
            ["Prīmum dēfīnītiōnem legāmus, deinde exempla.", "Primero leamos la definición; después, los ejemplos."],
            ["Dīcāmus breviter.", "Digamos brevemente."],
            ["Cōnsīderēmus duās prōpositiōnēs.", "Consideremos dos proposiciones."],
            ["Sit A terminus medius.", "Sea A el término medio."],
            ["Discipulus attentē legat.", "Que el alumno lea con atención."],
            ["Nē dormiāmus!", "¡No nos durmamos!"]
          ]
        },
        {
          t: "nota",
          x: "Con *sit* empiezan las suposiciones de lógicos y matemáticos: *Sit A terminus medius* (sea A el término medio). Y el español *digamos* es, sin más, el latín *dīcāmus*."
        }
      ],
      vocab: [
        ["sit", "sea, que sea (subjuntivo de est)"],
        ["sint", "sean, que sean"],
        ["possit", "pueda, que pueda"],
        ["amet", "que ame"],
        ["doceat", "que enseñe"],
        ["legat", "que lea"],
        ["audiat", "que oiga, que escuche"],
        ["dīcāmus", "digamos"],
        ["videāmus", "veamos"],
        ["incipiāmus", "empecemos"],
        ["cōnsīderēmus", "consideremos"],
        ["breviter", "brevemente"],
        ["attentē", "con atención"],
        ["prīmum… deinde…", "primero… después…"]
      ],
      ejercicios: [
        { t: "mc", q: "En la 1.ª conjugación, el subjuntivo cambia la *a* por…", ops: ["e", "i", "o"], ok: 0 },
        { t: "mc", q: "¿Cuál es el subjuntivo de *legit*?", ops: ["legunt", "legat", "legit"], ok: 1 },
        { t: "mc", q: "*Dīcāmus* significa…", ops: ["digamos", "decimos", "que diga"], ok: 0 },
        { t: "mc", q: "*Sit A terminus medius* significa…", ops: ["A es el término medio.", "Sea A el término medio.", "A está en medio."], ok: 1 },
        { t: "oir", x: "sit", ops: ["sit", "sint", "est"], ok: 0 },
        { t: "oir", x: "dīcāmus", ops: ["dīcimus", "dūcimus", "dīcāmus"], ok: 2 },
        { t: "orden", es: "Que el alumno lea con atención.", x: "Discipulus attentē legat." },
        { t: "orden", es: "Empecemos por la definición.", x: "Incipiāmus ā dēfīnītiōne." }
      ]
    },
    {
      id: "la5-2",
      titulo: "Ut y nē: «para que» y «tan… que»",
      min: 40,
      intro: "Con *ut* + subjuntivo el latín dice para qué se hace algo (*Logicam discimus ut rēctē cōgitēmus*) y qué resulta de algo (*tam… ut*, «tan… que»). *Ut* sale ya en tu página (escrito *vt*), así que te conviene distinguir bien sus sentidos.",
      bloques: [
        {
          t: "p",
          x: "**Finalidad.** *ut* + subjuntivo = «para que», «para» + infinitivo. *nē* + subjuntivo = «para que no», «para no». La finalidad negativa nunca se dice *ut nōn*: siempre *nē*."
        },
        {
          t: "ej",
          items: [
            ["Logicam discimus ut rēctē cōgitēmus.", "Estudiamos lógica para pensar correctamente."],
            ["Fīnis logicae est ut rēctē cōgitēmus.", "La finalidad de la lógica es que pensemos correctamente."],
            ["Magister exempla dat ut discipulī intellegant.", "El maestro pone ejemplos para que los alumnos entiendan."],
            ["Attentē legimus nē errēmus.", "Leemos con atención para no equivocarnos."],
            ["Magister clārē docet nē discipulī dormiant.", "El maestro explica con claridad para que los alumnos no se duerman."],
            ["Rogō ut legās.", "Te pido que leas."]
          ]
        },
        {
          t: "nota",
          x: "El español elige: con el mismo sujeto, infinitivo (*estudiamos para pensar*); con otro sujeto, subjuntivo (*para que entiendan*). El latín usa siempre *ut* + subjuntivo. Con verbos de pedir y aconsejar, *ut* es simplemente «que»: *rogō ut legās*, te pido que leas."
        },
        {
          t: "p",
          x: "**Consecuencia.** Si antes aparece *ita* (así, de tal modo), *tam* (tan), *tantus* (tan grande) o *tot* (tantos), el *ut* es el «que» de un resultado: *tam… ut* = tan… que. Esta vez la negación es *ut nōn*, no *nē*."
        },
        {
          t: "ej",
          items: [
            ["Logica tam difficilis est ut Titus dormiat.", "La lógica es tan difícil que Tito se duerme."],
            ["Magister ita docet ut omnēs intellegant.", "El maestro enseña de tal modo que todos entienden."],
            ["Tanta est vīs syllogismī ut conclūsiō negārī nōn possit.", "Tan grande es la fuerza del silogismo que la conclusión no puede negarse."],
            ["Titus tam fessus est ut magistrum nōn audiat.", "Tito está tan cansado que no oye al maestro."]
          ]
        },
        {
          t: "nota",
          x: "Con indicativo, *ut* significa «como»: *ut vidēs* (como ves), *ut patet* (como es evidente), *ut dīcit Aristotelēs* (como dice Aristóteles). Mira siempre el verbo: si está en subjuntivo, *ut* es «para que» o «que»."
        }
      ],
      vocab: [
        ["nē", "para que no; que no (+ subjuntivo)"],
        ["ut rēctē cōgitēmus", "para pensar correctamente"],
        ["clārē", "con claridad"],
        ["Rogō ut legās.", "Te pido que leas."],
        ["exempla dare", "poner ejemplos"],
        ["ita… ut…", "de tal modo… que…"],
        ["tam… ut…", "tan… que…"],
        ["tantus, tanta, tantum", "tan grande"],
        ["tot", "tantos (no se declina)"],
        ["ut nōn", "que no (en una consecuencia)"],
        ["vīs (f.; acus. vim, abl. vī)", "fuerza"],
        ["fessus, fessa, fessum", "cansado"],
        ["ut vidēs", "como ves"],
        ["fīnis, fīnis (m.)", "fin, finalidad"]
      ],
      ejercicios: [
        { t: "mc", q: "En *Attentē legimus nē errēmus*, *nē* significa…", ops: ["para no", "aunque no", "porque no"], ok: 0 },
        {
          t: "mc",
          q: "*Logica tam difficilis est ut Titus dormiat* significa…",
          ops: ["La lógica es difícil para que Tito duerma.", "La lógica es tan difícil que Tito se duerme.", "Tito duerme como la lógica."],
          ok: 1
        },
        { t: "mc", q: "¿Cómo se niega una consecuencia (*tam… ut*)?", ops: ["nē", "nōn ut", "ut nōn"], ok: 2 },
        { t: "mc", q: "En *ut patet*, *ut* significa…", ops: ["como", "para que", "tan"], ok: 0 },
        { t: "oir", x: "tantus", ops: ["tantum", "tantus", "tamen"], ok: 1 },
        { t: "orden", es: "Estudiamos lógica para pensar correctamente.", x: "Logicam discimus ut rēctē cōgitēmus." },
        { t: "orden", es: "Te pido que leas.", x: "Rogō ut legās." }
      ]
    },
    {
      id: "la5-3",
      titulo: "El subjuntivo imperfecto",
      min: 30,
      intro: "Cuando el verbo principal está en pasado, el subjuntivo pasa a imperfecto, igual que en español: «para que entiendas» → «para que entendieras». Es el tiempo más fácil de formar de todo el latín (el infinitivo más la terminación) y lo verás en giros escolásticos tan frecuentes como *cum esset*, «siendo».",
      bloques: [
        {
          t: "tabla",
          cab: ["Infinitivo", "Imperfecto de subjuntivo", "Español"],
          audio: [0, 1],
          filas: [
            ["amāre", "amāret", "que amara"],
            ["docēre", "docēret", "que enseñara"],
            ["legere", "legeret", "que leyera"],
            ["audīre", "audīret", "que oyera"],
            ["esse", "esset", "que fuera, que estuviera"],
            ["posse", "posset", "que pudiera"]
          ]
        },
        {
          t: "p",
          x: "Truco: infinitivo entero + *-m, -s, -t, -mus, -tis, -nt*. Si ves un infinitivo con terminación de persona (*legere-t*, *esse-nt*), es imperfecto de subjuntivo."
        },
        {
          t: "tabla",
          cab: ["Persona", "esse", "dīcere"],
          audio: [1, 2],
          filas: [
            ["ego", "essem", "dīcerem"],
            ["tū", "essēs", "dīcerēs"],
            ["is, ea", "esset", "dīceret"],
            ["nōs", "essēmus", "dīcerēmus"],
            ["vōs", "essētis", "dīcerētis"],
            ["eī, eae", "essent", "dīcerent"]
          ]
        },
        {
          t: "p",
          x: "**Concordancia de tiempos** (*cōnsecūtiō temporum*): con el verbo principal en presente, subjuntivo presente; con el verbo principal en pasado, subjuntivo imperfecto. Como en español: *te lo explico para que lo entiendas* / *te lo explicaba para que lo entendieras*."
        },
        {
          t: "nota",
          x: "Para reconocer un verbo principal en pasado, de momento te basta el imperfecto de indicativo, que lleva *-ba-* como en español: *amābat* = amaba, *docēbat* = enseñaba, *dīcēbat* = decía, *audiēbat* = oía. *Esse* hace *erat* (era, estaba) y *erant* (eran, estaban). Los demás pasados llegan la semana que viene."
        },
        {
          t: "ej",
          items: [
            ["Magister exempla dabat ut discipulī intellegerent.", "El maestro ponía ejemplos para que los alumnos entendieran."],
            ["Sēneca epistulās scrībēbat ut Lūcīlius sapiēns esset.", "Séneca escribía cartas para que Lucilio fuera sabio."],
            ["Sēneca saepe scrībēbat; Lūcīlius saepe legēbat.", "Séneca escribía a menudo; Lucilio leía a menudo."],
            ["Titus legēbat nē dormīret.", "Tito leía para no dormirse."],
            ["Logica tam difficilis erat ut Titus dormīret.", "La lógica era tan difícil que Tito se dormía."],
            ["Discipulī tam attentē audiēbant ut nēmō dormīret.", "Los alumnos escuchaban con tanta atención que nadie se dormía."]
          ]
        }
      ],
      vocab: [
        ["esset", "fuera, estuviera (de est)"],
        ["essent", "fueran, estuvieran"],
        ["posset", "pudiera"],
        ["legeret", "leyera, que leyera"],
        ["dīceret", "dijera, que dijera"],
        ["erat", "era, estaba"],
        ["erant", "eran, estaban"],
        ["dīcēbat", "decía"],
        ["audiēbat", "oía, escuchaba"],
        ["legēbat", "leía"],
        ["scrībēbat", "escribía"],
        ["cōnsecūtiō temporum", "concordancia de tiempos"],
        ["nēmō", "nadie"],
        ["saepe", "a menudo"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "El imperfecto de subjuntivo se forma con…",
          ops: ["la raíz + -ba-", "el infinitivo + terminación de persona", "la raíz + -a- o -e-"],
          ok: 1
        },
        { t: "mc", q: "*Esset* significa…", ops: ["fuera, estuviera", "es, está", "sea, esté"], ok: 0 },
        { t: "mc", q: "Completa: *Magister exempla dabat ut discipulī ___.*", ops: ["intellegant", "intellegunt", "intellegerent"], ok: 2 },
        { t: "mc", q: "*Dīcēbat* significa…", ops: ["decía", "dice", "diga"], ok: 0 },
        { t: "oir", x: "esset", ops: ["esse", "esset", "est"], ok: 1 },
        { t: "oir", x: "legeret", ops: ["legeret", "legerent", "legere"], ok: 0 },
        { t: "orden", es: "Tito leía para no dormirse.", x: "Titus legēbat nē dormīret." },
        { t: "orden", es: "La lógica era tan difícil que Tito se dormía.", x: "Logica tam difficilis erat ut Titus dormīret." }
      ]
    },
    {
      id: "la5-4",
      titulo: "Cum con subjuntivo",
      min: 30,
      intro: "*Cum* + subjuntivo es una de las maneras más comunes de dar una razón en un argumento escolástico: *cum logica sit ars* = «puesto que la lógica es un arte». Hoy aprendes sus tres sentidos y a no confundirlo con la preposición *cum*.",
      bloques: [
        {
          t: "p",
          x: "*Cum* con subjuntivo tiene tres sentidos. **Causal**, «puesto que, como»: el más frecuente en los argumentos. **Histórico**, «cuando, como»: en relatos en pasado, con imperfecto de subjuntivo, y se traduce muy bien con gerundio (*cum esset* = siendo, estando). **Concesivo**, «aunque»: suele delatarlo un *tamen* (sin embargo) en la oración principal."
        },
        {
          t: "ej",
          items: [
            ["Cum homō sit animal, mortālis est.", "Puesto que el hombre es animal, es mortal."],
            ["Cum logica ars sit, rēgulās habet.", "Como la lógica es un arte, tiene reglas."],
            ["Cum Thōmās puer esset, saepe quaerēbat: «Quid est Deus?»", "Siendo niño, Tomás preguntaba a menudo: «¿Qué es Dios?»."],
            ["Cum Sēneca Rōmae esset, Lūcīlius in Siciliā erat.", "Cuando Séneca estaba en Roma, Lucilio estaba en Sicilia."],
            ["Cum logica difficilis sit, tamen pulchra est.", "Aunque la lógica es difícil, es hermosa."]
          ]
        },
        {
          t: "nota",
          x: "Con indicativo, *cum* es solo «cuando»: *cum magister docet, discipulī audiunt* (cuando el maestro enseña, los alumnos escuchan). Con un sustantivo en ablativo es la preposición «con»: *cum amīcō* (con el amigo). Si tras *cum* llega un verbo en subjuntivo, prueba primero «puesto que»."
        },
        {
          t: "p",
          x: "En lógica, el *cum* causal suele presentar las premisas antes de la conclusión. Para dar una razón con indicativo, el latín usa *quia* (porque) o *quoniam* (puesto que); para «aunque» con indicativo, *quamquam*."
        },
        {
          t: "ej",
          items: [
            ["Cum omnis homō sit mortālis et Sōcratēs sit homō, Sōcratēs quoque mortālis est.", "Puesto que todo hombre es mortal y Sócrates es hombre, también Sócrates es mortal."],
            ["Quoniam logica ars est, rēgulās habet.", "Puesto que la lógica es un arte, tiene reglas."],
            ["Quamquam logica difficilis est, pulchra est.", "Aunque la lógica es difícil, es hermosa."]
          ]
        }
      ],
      vocab: [
        ["cum (+ subjuntivo)", "puesto que; cuando; aunque"],
        ["cum esset", "siendo, estando; como era"],
        ["cum amīcō", "con el amigo (cum + ablativo)"],
        ["tamen", "sin embargo"],
        ["quoque", "también (va detrás de la palabra)"],
        ["quoniam", "puesto que (+ indicativo)"],
        ["quamquam", "aunque (+ indicativo)"],
        ["rēgula, rēgulae (f.)", "regla"]
      ],
      ejercicios: [
        { t: "mc", q: "En *Cum homō sit animal, mortālis est*, *cum* significa…", ops: ["con", "puesto que", "aunque"], ok: 1 },
        { t: "mc", q: "¿Qué palabra de la oración principal delata el *cum* concesivo («aunque»)?", ops: ["tamen", "ergō", "quia"], ok: 0 },
        { t: "mc", q: "*Cum amīcō* significa…", ops: ["cuando el amigo", "puesto que es amigo", "con el amigo"], ok: 2 },
        { t: "mc", q: "*Cum Thōmās puer esset* se traduce mejor por…", ops: ["Siendo Tomás niño", "Con Tomás niño", "Aunque Tomás sea niño"], ok: 0 },
        { t: "oir", x: "quoniam", ops: ["quōmodo", "quoniam", "quoque"], ok: 1 },
        { t: "orden", es: "Aunque la lógica es difícil, es hermosa.", x: "Cum logica difficilis sit, tamen pulchra est." },
        { t: "orden", es: "Puesto que el hombre es animal, es mortal.", x: "Cum homō sit animal, mortālis est." }
      ]
    },
    {
      id: "la5-5",
      titulo: "Preguntas indirectas: quaeritur utrum…",
      min: 35,
      intro: "Cada artículo escolástico se abre con una pregunta indirecta: *Quaeritur utrum logica sit scientia*, «se pregunta si la lógica es una ciencia». En latín la pregunta indirecta lleva siempre el verbo en subjuntivo.",
      bloques: [
        {
          t: "tabla",
          cab: ["Pregunta directa", "Pregunta indirecta", "Español"],
          audio: [0, 1],
          filas: [
            ["Quid est terminus?", "Quaerimus quid sit terminus.", "Preguntamos qué es el término."],
            ["Quis est Boēthius?", "Discipulus quaerit quis sit Boēthius.", "El alumno pregunta quién es Boecio."],
            ["Cūr Titus dormit?", "Magister quaerit cūr Titus dormiat.", "El maestro pregunta por qué duerme Tito."],
            ["Ubi est Sēneca?", "Nesciō ubi sit Sēneca.", "No sé dónde está Séneca."],
            ["Estne logica scientia?", "Quaeritur utrum logica sit scientia.", "Se pregunta si la lógica es una ciencia."]
          ]
        },
        {
          t: "p",
          x: "*utrum… an…* = «si… o…»; *utrum… necne* = «si… o no». Para una pregunta simple de sí o no basta *num* o *-ne*, que aquí significan «si»: *quaerō num vērum sit*, pregunto si es verdad. En los títulos de los artículos se omite el verbo principal: *Utrum logica sit scientia* = «(Se pregunta) si la lógica es una ciencia»."
        },
        {
          t: "nota",
          x: "El español pone indicativo (*no sé dónde está*) y el latín subjuntivo (*nesciō ubi sit*): tradúcelo por indicativo. El español clásico también decía «no sé qué sea esto», así que el giro no te sonará del todo extraño."
        },
        {
          t: "ej",
          items: [
            ["Quaeritur utrum logica sit ars an scientia.", "Se pregunta si la lógica es un arte o una ciencia."],
            ["Utrum Deus sit.", "Si Dios existe. (santo Tomás, Suma teológica I, cuestión 2, artículo 3)"],
            ["Dubitō utrum vērum sit necne.", "Dudo de si es verdad o no."],
            ["Nesciō quid dīcās.", "No sé qué dices."],
            ["Videāmus quid sit syllogismus.", "Veamos qué es un silogismo."],
            ["Dīc mihi quōmodo hoc probēs.", "Dime cómo pruebas esto."]
          ]
        },
        {
          t: "p",
          x: "Con el verbo principal en pasado, imperfecto de subjuntivo: *Thōmās puer quaerēbat quid esset Deus*, de niño, Tomás preguntaba qué era Dios. Otros interrogativos que verás: *quōmodo* (cómo), *quālis* (de qué clase), *quot* (cuántos). Muchos tratados escolásticos se dividen en *quaestiōnēs* (cuestiones) y estas en *articulī* (artículos), cada uno con su *utrum*; y muchos capítulos se titulan *Quid sit…*: *Quid sit terminus*, «qué es el término»."
        }
      ],
      vocab: [
        ["utrum… an…", "si… o… (pregunta indirecta doble)"],
        ["utrum… necne", "si… o no"],
        ["Quaeritur utrum…", "Se pregunta si…"],
        ["quaerō num…", "pregunto si…"],
        ["quid sit", "qué es (pregunta indirecta; también en títulos de capítulo)"],
        ["nesciō, nescīre", "no saber"],
        ["Nesciō quid dīcās.", "No sé qué dices."],
        ["dubitō, dubitāre", "dudar"],
        ["quōmodo", "cómo"],
        ["quālis, quāle", "de qué clase, cuál"],
        ["quot", "cuántos"],
        ["scientia, scientiae (f.)", "ciencia, saber demostrado"],
        ["probō, probāre", "probar, demostrar"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "*Quaeritur utrum logica sit scientia* significa…",
          ops: ["Se busca la lógica de la ciencia.", "Se pregunta si la lógica es una ciencia.", "La lógica pregunta a la ciencia."],
          ok: 1
        },
        { t: "mc", q: "En una pregunta indirecta, el verbo latino va en…", ops: ["subjuntivo", "indicativo", "infinitivo"], ok: 0 },
        { t: "mc", q: "*Utrum… necne* significa…", ops: ["ni… ni…", "si… o no", "o… o…"], ok: 1 },
        { t: "mc", q: "Completa: *Nesciō ubi ___ Sēneca.*", ops: ["sit", "est", "esse"], ok: 0 },
        { t: "oir", x: "utrum", ops: ["vērum", "iterum", "utrum"], ok: 2 },
        { t: "orden", es: "Se pregunta si la lógica es una ciencia.", x: "Quaeritur utrum logica sit scientia." },
        { t: "orden", es: "No sé qué dices.", x: "Nesciō quid dīcās." }
      ]
    },
    {
      id: "la5-6",
      titulo: "Verbos deponentes: sequitur, vidētur",
      min: 40,
      intro: "Los deponentes tienen forma pasiva y significado activo: *loquitur* no es «es hablado», sino «habla». Dos de ellos sostienen todo razonamiento escolástico: *sequitur*, «se sigue», y *vidētur*, «parece».",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "loquor (hablar)", "sequor (seguir)"],
          audio: [1, 2],
          filas: [
            ["ego", "loquor", "sequor"],
            ["tū", "loqueris", "sequeris"],
            ["is, ea", "loquitur", "sequitur"],
            ["nōs", "loquimur", "sequimur"],
            ["vōs", "loquiminī", "sequiminī"],
            ["eī, eae", "loquuntur", "sequuntur"]
          ]
        },
        {
          t: "p",
          x: "Son las terminaciones de la pasiva que ya conoces (*-or, -ris, -tur, -mur, -minī, -ntur*), pero se traducen en activa, como los verbos españoles que solo existen con «se» (*quejarse*, *atreverse*): la forma engaña, el sentido es activo. El infinitivo acaba en *-ī* o *-rī* (*loquī*, *mīrārī*) y el subjuntivo sigue las reglas de esta semana: *loquāmur* (hablemos), *sequātur* (que se siga)."
        },
        {
          t: "tabla",
          cab: ["Deponente", "Infinitivo", "Español"],
          audio: [0, 1],
          filas: [
            ["loquor", "loquī", "hablar"],
            ["sequor", "sequī", "seguir; en lógica, seguirse"],
            ["ūtor", "ūtī", "usar, servirse de (+ ablativo)"],
            ["arbitror", "arbitrārī", "pensar, juzgar"],
            ["mīror", "mīrārī", "asombrarse, admirar"],
            ["nāscor", "nāscī", "nacer"],
            ["patior", "patī", "sufrir, padecer"],
            ["videor", "vidērī", "parecer"]
          ]
        },
        {
          t: "ej",
          items: [
            ["Magister dē syllogismō loquitur.", "El maestro habla del silogismo."],
            ["Loquerisne Latīnē?", "¿Hablas latín?"],
            ["Loquāmur Latīnē!", "¡Hablemos en latín!"],
            ["Logicus exemplīs ūtitur.", "El lógico se sirve de ejemplos."],
            ["Arbitror tē errāre.", "Creo que te equivocas."],
            ["Bene ratiōcināris.", "Razonas bien."],
            ["Hominēs mīrantur, et ideō philosophantur.", "Los hombres se asombran, y por eso filosofan. (idea de Aristóteles)"],
            ["Poēta nāscitur, nōn fit.", "El poeta nace, no se hace."],
            ["Discipulī logicam patiuntur.", "Los alumnos sufren la lógica."]
          ]
        },
        {
          t: "nota",
          x: "*Ūtor* rige ablativo: *logicā ūtimur*, usamos la lógica (literalmente, «nos servimos de la lógica»). Piensa en el español «servirse de», que tampoco lleva complemento directo."
        },
        {
          t: "p",
          x: "**sequitur**, «se sigue», es el verbo de la conclusión: *ex hōc sequitur quod…* (de esto se sigue que…), *nōn sequitur* (no se sigue). **vidētur**, «parece», abre las objeciones de cada artículo: *vidētur quod nōn* (parece que no), *mihi vidētur* (me parece), *ut vidētur* (según parece). *Videor* es en realidad la pasiva de *videō* («ser visto»), pero con el sentido de «parecer» funciona como un deponente más."
        },
        {
          t: "ej",
          items: [
            ["Ex praemissīs sequitur conclūsiō.", "De las premisas se sigue la conclusión."],
            ["Ex hōc sequitur quod Sōcratēs sit mortālis.", "De esto se sigue que Sócrates es mortal."],
            ["Nōn sequitur.", "No se sigue."],
            ["Vidētur quod logica nōn sit scientia.", "Parece que la lógica no es una ciencia."],
            ["Logica vidētur esse ars artium.", "La lógica parece ser el arte de las artes. (santo Tomás)"]
          ]
        },
        {
          t: "nota",
          x: "Así se construye un artículo escolástico: *Quaeritur utrum…* (la pregunta) → *Vidētur quod nōn…* (objeciones) → *Sed contrā…* (un argumento en contra de ellas) → *Respondeō dīcendum quod…* (la respuesta del maestro) → *Ad prīmum…* (réplica a la primera objeción). Lo leerás entero en la lectura «Utrum logica sit scientia»."
        }
      ],
      vocab: [
        ["loquor, loquī", "hablar"],
        ["sequor, sequī", "seguir; (en lógica) seguirse"],
        ["ūtor, ūtī (+ abl.)", "usar, servirse de"],
        ["arbitror, arbitrārī", "pensar, juzgar, creer"],
        ["mīror, mīrārī", "asombrarse (de), admirar"],
        ["nāscor, nāscī", "nacer"],
        ["patior, patī", "sufrir, padecer; permitir"],
        ["videor, vidērī", "parecer"],
        ["ex hōc sequitur quod…", "de esto se sigue que…"],
        ["nōn sequitur", "no se sigue"],
        ["ratiōcinor, ratiōcinārī", "razonar"],
        ["philosophor, philosophārī", "filosofar"],
        ["Loquāmur Latīnē!", "¡Hablemos en latín!"],
        ["Loquerisne Latīnē?", "¿Hablas latín?"],
        ["ideō", "por eso"]
      ],
      ejercicios: [
        { t: "mc", q: "*Loquitur* significa…", ops: ["es hablado", "habla", "hablará"], ok: 1 },
        { t: "mc", q: "*Nōn sequitur* significa…", ops: ["no se sigue", "no sigue al maestro", "no se ve"], ok: 0 },
        { t: "mc", q: "Completa: *Logicus exemplīs ___* (se sirve de ejemplos).", ops: ["ūtuntur", "ūtī", "ūtitur"], ok: 2 },
        { t: "mc", q: "*Vidētur quod nōn* significa…", ops: ["parece que no", "no lo ve", "se pregunta si no"], ok: 0 },
        { t: "mc", q: "*Ūtor* lleva el complemento en…", ops: ["acusativo", "ablativo", "genitivo"], ok: 1 },
        { t: "oir", x: "sequitur", ops: ["sequitur", "loquitur", "sequuntur"], ok: 0 },
        { t: "oir", x: "vidētur", ops: ["videntur", "videt", "vidētur"], ok: 2 },
        { t: "orden", es: "De las premisas se sigue la conclusión.", x: "Ex praemissīs sequitur conclūsiō." }
      ]
    },
    {
      id: "la5-7",
      titulo: "El silogismo",
      min: 35,
      intro: "Tu página define el término pensando en el silogismo (*resolutionem propositionis, & syllogismi*), así que hoy lo desmontas pieza a pieza, con los nombres latinos que usan todos los manuales escolásticos.",
      bloques: [
        {
          t: "ej",
          items: [
            ["Omnis homō est mortālis.", "Todo hombre es mortal. (premisa mayor)"],
            ["Sōcratēs autem est homō.", "Ahora bien, Sócrates es hombre. (premisa menor)"],
            ["Ergō Sōcratēs est mortālis.", "Luego Sócrates es mortal. (conclusión)"]
          ]
        },
        {
          t: "tabla",
          cab: ["Latín", "Español", "En el ejemplo"],
          audio: [0, 2],
          filas: [
            ["prōpositiō maior", "premisa mayor", "Omnis homō est mortālis."],
            ["prōpositiō minor", "premisa menor", "Sōcratēs est homō."],
            ["conclūsiō", "conclusión", "Sōcratēs est mortālis."],
            ["terminus maior", "término mayor: el predicado de la conclusión", "mortālis"],
            ["terminus minor", "término menor: el sujeto de la conclusión", "Sōcratēs"],
            ["terminus medius", "término medio: está en las dos premisas y no en la conclusión", "homō"]
          ]
        },
        {
          t: "p",
          x: "Las dos premisas (*praemissae*) forman el *antecēdēns*; la conclusión es el *cōnsequēns*; y el paso de uno a otro, marcado con *ergō* o *igitur*, es la *cōnsequentia*. Si la conclusión se sigue de verdad, la *cōnsequentia* es *bona*: válida. La menor suele llevar *autem* («ahora bien») o empezar por *sed*."
        },
        {
          t: "p",
          x: "Cada proposición es universal o particular (*ūniversālis*, *particulāris*) y afirmativa o negativa, y los lógicos medievales nombran los cuatro tipos con vocales: **A**, universal afirmativa (*Omnis homō est animal*); **E**, universal negativa (*Nūllus homō est lapis*); **I**, particular afirmativa (*Aliquis homō est albus*); **O**, particular negativa (*Aliquis homō nōn est albus*)."
        },
        {
          t: "nota",
          x: "Las vocales salen de *AffIrmō* (afirmo: A, I) y *nEgŌ* (niego: E, O). Los estudiantes medievales lo recitaban en verso; lo tienes debajo, para escucharlo."
        },
        {
          t: "ej",
          items: [
            ["Asserit A, negat E, vērum generāliter ambō; asserit I, negat O, sed particulāriter ambō.", "A afirma, E niega, pero las dos en universal; I afirma, O niega, pero las dos en particular."]
          ]
        }
      ],
      vocab: [
        ["prōpositiō maior", "premisa mayor"],
        ["prōpositiō minor", "premisa menor"],
        ["conclūsiō, conclūsiōnis (f.)", "conclusión"],
        ["praemissa, praemissae (f.)", "premisa"],
        ["terminus medius", "término medio: está en las dos premisas"],
        ["terminus maior", "término mayor: predicado de la conclusión"],
        ["terminus minor", "término menor: sujeto de la conclusión"],
        ["antecēdēns, antecēdentis (n.)", "antecedente: las premisas"],
        ["cōnsequēns, cōnsequentis (n.)", "consecuente: la conclusión"],
        ["cōnsequentia, cōnsequentiae (f.)", "consecuencia: el paso de las premisas a la conclusión"],
        ["igitur", "por tanto, así pues"],
        ["autem", "ahora bien; en cambio (va en segundo lugar)"],
        ["nūllus, nūlla, nūllum", "ninguno"],
        ["aliquis, aliquid", "alguno, alguien; algo"],
        ["albus, alba, album", "blanco"]
      ],
      ejercicios: [
        { t: "mc", q: "En el silogismo de Sócrates, el término medio es…", ops: ["mortālis", "homō", "Sōcratēs"], ok: 1 },
        {
          t: "mc",
          q: "El término mayor es…",
          ops: ["el predicado de la conclusión", "el sujeto de la conclusión", "el que se repite en las premisas"],
          ok: 0
        },
        { t: "mc", q: "*Nūllus homō est lapis* es una proposición de tipo…", ops: ["A", "E", "O"], ok: 1 },
        { t: "mc", q: "*Aliquis homō nōn est albus* es de tipo…", ops: ["I", "E", "O"], ok: 2 },
        { t: "oir", x: "praemissa", ops: ["praemissa", "prōmissa", "permissa"], ok: 0 },
        { t: "oir", x: "conclūsiō", ops: ["cōnfūsiō", "conclūsiō", "contentiō"], ok: 1 },
        { t: "orden", es: "Luego Sócrates es mortal.", x: "Ergō Sōcratēs est mortālis." },
        { t: "orden", es: "Ningún hombre es piedra.", x: "Nūllus homō est lapis." }
      ]
    },
    {
      id: "la5-8",
      titulo: "Figuras, modos y falacias",
      min: 40,
      intro: "Los lógicos medievales clasificaron los silogismos válidos y les pusieron nombres para memorizarlos: *Barbara, Cēlārent, Dariī, Feriō*. También catalogaron los razonamientos tramposos, las *fallāciae*, y aprendieron a desmontarlos con una palabra que verás en cualquier disputa escolástica: *distinguō*.",
      bloques: [
        {
          t: "p",
          x: "La **figura** (*figūra*) depende del lugar del término medio. En la 1.ª es sujeto en la mayor y predicado en la menor; en la 2.ª es predicado en las dos; en la 3.ª, sujeto en las dos. Regla de escuela: *Sub prae prīma, bis prae secunda, tertia sub bis* (*sub* = *subiectum*, sujeto; *prae* = *praedicātum*, predicado; *bis* = dos veces)."
        },
        {
          t: "p",
          x: "El **modo** (*modus*) depende de los tipos de proposición: A, E, I, O. Los cuatro modos clásicos de la 1.ª figura, los que *valent* («valen», es decir, son válidos), llevan nombres cuyas vocales dan la receta: mayor, menor y conclusión."
        },
        {
          t: "tabla",
          cab: ["Modo", "Mayor", "Menor", "Conclusión"],
          audio: [0],
          filas: [
            ["Barbara", "A", "A", "A"],
            ["Cēlārent", "E", "A", "E"],
            ["Dariī", "A", "I", "I"],
            ["Feriō", "E", "I", "O"]
          ]
        },
        {
          t: "ej",
          items: [
            ["Barbara: Omne animal est mortāle; omnis homō est animal; ergō omnis homō est mortālis.", "Todo animal es mortal; todo hombre es animal; luego todo hombre es mortal."],
            ["Cēlārent: Nūllum animal est lapis; omnis homō est animal; ergō nūllus homō est lapis.", "Ningún animal es piedra; todo hombre es animal; luego ningún hombre es piedra."],
            ["Dariī: Omnis philosophus amat sapientiam; aliquis Graecus est philosophus; ergō aliquis Graecus amat sapientiam.", "Todo filósofo ama la sabiduría; algún griego es filósofo; luego algún griego ama la sabiduría."],
            ["Feriō: Nūllus stultus est sapiēns; aliquis discipulus est stultus; ergō aliquis discipulus nōn est sapiēns.", "Ningún necio es sabio; algún alumno es necio; luego algún alumno no es sabio."]
          ]
        },
        {
          t: "nota",
          x: "Los nombres se eligieron por sus vocales, no por su sentido, aunque *Cēlārent* es también un imperfecto de subjuntivo («ocultaran») y *Feriō* significa «golpeo». Sus consonantes también esconden reglas, pero de momento te basta con las vocales. Los libros antiguos los escriben sin rayas: *Celarent, Darii, Ferio*."
        },
        {
          t: "p",
          x: "**Falacias.** Una *fallācia* es un engaño en el razonamiento; un *sophisma*, un argumento que parece bueno y no lo es. Las más famosas: la *aequivocātiō* (el equívoco: una palabra con dos sentidos), los *quattuor terminī* (el término medio cambia de sentido y el silogismo acaba con cuatro términos) y la *petītiō prīncipiī* (dar por probado lo que se quiere probar). Un término *aequivocus* tiene varios sentidos (*canis*: perro y también estrella); uno *ūnivocus*, uno solo."
        },
        {
          t: "ej",
          items: [
            ["Omnis canis lātrat; aliquod sīdus est canis; ergō aliquod sīdus lātrat.", "Todo perro ladra; alguna estrella es «Can»; luego alguna estrella ladra."],
            ["Distinguō: canis quī est animal lātrat; canis quī est sīdus nōn lātrat.", "Distingo: el can que es animal ladra; el can que es estrella no ladra."],
            ["Concēdō maiōrem, negō minōrem.", "Concedo la mayor, niego la menor."],
            ["Negō cōnsequentiam.", "Niego la consecuencia: no se sigue."]
          ]
        },
        {
          t: "nota",
          x: "Así responde un escolástico a un sofisma: *distinguō* («distingo») separa los dos sentidos de la palabra, concede uno y niega el otro. *Distinguō maiōrem*, «distingo la mayor», es una fórmula que encontrarás constantemente en las disputas y en los manuales de lógica."
        }
      ],
      vocab: [
        ["figūra, figūrae (f.)", "figura (del silogismo)"],
        ["Barbara, Cēlārent, Dariī, Feriō", "los modos de la 1.ª figura: AAA, EAE, AII, EIO"],
        ["fallācia, fallāciae (f.)", "falacia, engaño"],
        ["sophisma, sophismatis (n.)", "sofisma"],
        ["aequivocātiō, aequivocātiōnis (f.)", "equívoco: una palabra con varios sentidos"],
        ["aequivocus, aequivoca, aequivocum", "equívoco: con varios sentidos"],
        ["ūnivocus, ūnivoca, ūnivocum", "unívoco: con un solo sentido"],
        ["quattuor terminī", "los cuatro términos (falacia)"],
        ["petītiō prīncipiī", "petición de principio"],
        ["Distinguō maiōrem.", "Distingo la mayor: en un sentido es verdad y en otro no."],
        ["Concēdō maiōrem, negō minōrem.", "Concedo la mayor, niego la menor."],
        ["Negō cōnsequentiam.", "Niego la consecuencia: no se sigue."],
        ["valeō, valēre", "valer; (un silogismo) ser válido"],
        ["stultus, stulta, stultum", "necio, tonto"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "En la 1.ª figura, el término medio es…",
          ops: ["predicado en las dos premisas", "sujeto en la mayor y predicado en la menor", "sujeto en las dos premisas"],
          ok: 1
        },
        { t: "mc", q: "¿Qué tipos de proposición tiene *Cēlārent*?", ops: ["E, A, E", "A, A, A", "E, I, O"], ok: 0 },
        { t: "mc", q: "*Feriō* termina en una conclusión…", ops: ["universal negativa (E)", "particular afirmativa (I)", "particular negativa (O)"], ok: 2 },
        {
          t: "mc",
          q: "¿Qué falla en *Omnis canis lātrat; aliquod sīdus est canis; ergō aliquod sīdus lātrat*?",
          ops: ["«canis» tiene dos sentidos: hay cuatro términos", "las dos premisas son negativas", "es una petición de principio"],
          ok: 0
        },
        { t: "oir", x: "fallācia", ops: ["fallāx", "fallācia", "falsa"], ok: 1 },
        { t: "oir", x: "sophisma", ops: ["sophisma", "sophista", "schisma"], ok: 0 },
        { t: "orden", es: "Concedo la mayor, niego la menor.", x: "Concēdō maiōrem, negō minōrem." },
        { t: "orden", es: "Algún alumno no es sabio.", x: "Aliquis discipulus nōn est sapiēns." }
      ]
    }
  ],
  lecturas: [
    {
      id: "la5-r1",
      titulo: "Syllogismus",
      nivel: "Inicial",
      texto: "Magister in tabulā scrībit:\n«Omnis homō est mortālis.\nSōcratēs est homō.\nErgō Sōcratēs est mortālis.»\n\n«Videāmus», inquit, «quid sit syllogismus. Syllogismus trēs prōpositiōnēs habet. Prīma est maior, secunda minor, tertia conclūsiō. Maior et minor sunt praemissae; ex praemissīs sequitur conclūsiō.»\n\nMārcus quaerit: «Et quid est terminus medius?»\n\n«Terminus medius est “homō”. In maiōre et in minōre est, sed nōn in conclūsiōne. Praemissās iungit, ut conclūsiō sequātur.»\n\nTum Titus: «Magister, ego quoque homō sum. Ergō ego quoque mortālis sum?»\n\n«Ita, Tite. Bene ratiōcināris! Sed nē timeās: nōn hodiē. Hodiē logicam discimus.»",
      traduccion: "El maestro escribe en la pizarra:\n«Todo hombre es mortal.\nSócrates es hombre.\nLuego Sócrates es mortal.»\n\n«Veamos», dice, «qué es un silogismo. El silogismo tiene tres proposiciones. La primera es la mayor; la segunda, la menor; la tercera, la conclusión. La mayor y la menor son las premisas; de las premisas se sigue la conclusión.»\n\nMarco pregunta: «¿Y qué es el término medio?»\n\n«El término medio es “hombre”. Está en la mayor y en la menor, pero no en la conclusión. Une las premisas para que se siga la conclusión.»\n\nEntonces Tito: «Maestro, yo también soy hombre. ¿Luego yo también soy mortal?»\n\n«Así es, Tito. ¡Razonas bien! Pero no temas: hoy no. Hoy estudiamos lógica.»",
      notas: "El ejemplo de Sócrates no es de Aristóteles, que razonaba con letras (A, B, Γ), pero es el silogismo más citado de los manuales. *Inquit* («dice») solo se usa intercalado en una cita, como el español «dijo» entre comas.",
      glosa: {
        magister: "maestro",
        in: "en (+ ablativo)",
        "tabulā": "tablilla, pizarra (ablativo de tabula)",
        "scrībit": "escribe",
        omnis: "todo («omnis homō» = todo hombre)",
        "homō": "hombre, ser humano",
        est: "es; está",
        "mortālis": "mortal",
        "sōcratēs": "Sócrates (nombre)",
        "ergō": "luego, por tanto",
        "videāmus": "veamos (subjuntivo exhortativo de videō)",
        inquit: "dice (intercalado en la cita)",
        quid: "qué",
        sit: "es (subjuntivo de est: pregunta indirecta)",
        syllogismus: "silogismo",
        "trēs": "tres",
        "prōpositiōnēs": "proposiciones (acusativo plural)",
        habet: "tiene",
        "prīma": "la primera",
        maior: "la mayor (premisa)",
        secunda: "la segunda",
        minor: "la menor (premisa)",
        tertia: "la tercera",
        "conclūsiō": "conclusión",
        et: "y",
        sunt: "son",
        praemissae: "premisas",
        ex: "de, a partir de (+ ablativo)",
        "praemissīs": "las premisas (ablativo plural)",
        sequitur: "se sigue (deponente: forma pasiva, sentido activo)",
        "mārcus": "Marco (nombre)",
        quaerit: "pregunta",
        terminus: "término",
        medius: "medio",
        "maiōre": "la mayor (ablativo de maior)",
        "minōre": "la menor (ablativo de minor)",
        sed: "pero",
        "nōn": "no",
        "conclūsiōne": "la conclusión (ablativo)",
        "praemissās": "las premisas (acusativo plural)",
        iungit: "une",
        ut: "para que (+ subjuntivo)",
        "sequātur": "se siga (subjuntivo de sequitur)",
        tum: "entonces",
        titus: "Tito (nombre)",
        ego: "yo",
        quoque: "también (va detrás de la palabra)",
        sum: "soy",
        ita: "así es, sí",
        tite: "¡Tito! (vocativo)",
        bene: "bien",
        "ratiōcināris": "razonas (de ratiōcinor, deponente)",
        "nē": "no (+ subjuntivo: prohibición)",
        "timeās": "temas (subjuntivo de timeō)",
        "hodiē": "hoy",
        logicam: "la lógica (acusativo)",
        discimus: "estudiamos, aprendemos"
      },
      preguntas: [
        { q: "¿Cuál es el término medio del silogismo?", ops: ["homō (hombre)", "mortālis (mortal)", "Sōcratēs"], ok: 0 },
        { q: "¿Cuántas proposiciones tiene un silogismo, según el maestro?", ops: ["Dos", "Tres", "Cuatro"], ok: 1 },
        { q: "¿Qué concluye Tito?", ops: ["Que Sócrates no es hombre", "Que la lógica no sirve", "Que él también es mortal"], ok: 2 }
      ]
    },
    {
      id: "la5-r2",
      titulo: "Figūrae syllogismī",
      nivel: "Intermedio",
      texto: "Nōn omnēs syllogismī eandem fōrmam habent. Logicī eōs in figūrās dīvidunt secundum locum terminī mediī.\n\nIn prīmā figūrā terminus medius est subiectum in maiōre et praedicātum in minōre; in secundā est praedicātum in utrāque; in tertiā, subiectum in utrāque. Discipulī, ut rēgulam memoriā teneant, recitant: «Sub prae prīma, bis prae secunda, tertia sub bis.»\n\nDeinde quaeritur quī modī in quāque figūrā valeant. Modī nōmina habent nōn ut aliquid significent, sed ut vōcālēs servent: A, E, I, O. A est ūniversālis affirmātīva, E ūniversālis negātīva, I particulāris affirmātīva, O particulāris negātīva. Ecce prīmae figūrae modī: «Barbara, Cēlārent, Dariī, Feriōque priōris.»\n\nIn Barbara omnēs prōpositiōnēs sunt A:\nOmne animal est mortāle;\nomnis homō est animal;\nergō omnis homō est mortālis.\n\nIn Feriō maior est E, minor I, conclūsiō O:\nNūllus stultus est sapiēns;\naliquis discipulus est stultus;\nergō aliquis discipulus nōn est sapiēns.\n\nTitus: «Cūr omnēs mē aspiciunt?»",
      traduccion: "No todos los silogismos tienen la misma forma. Los lógicos los dividen en figuras según el lugar del término medio.\n\nEn la primera figura, el término medio es sujeto en la mayor y predicado en la menor; en la segunda, es predicado en ambas; en la tercera, sujeto en ambas. Para retener la regla en la memoria, los alumnos recitan: «Sujeto-predicado, la primera; dos veces predicado, la segunda; la tercera, dos veces sujeto».\n\nDespués se pregunta qué modos son válidos en cada figura. Los modos tienen nombres no para significar algo, sino para conservar unas vocales: A, E, I, O. A es la universal afirmativa; E, la universal negativa; I, la particular afirmativa; O, la particular negativa. He aquí los modos de la primera figura: «Barbara, Celarent, Darii y Ferio, los de la primera».\n\nEn Barbara todas las proposiciones son A:\nTodo animal es mortal;\ntodo hombre es animal;\nluego todo hombre es mortal.\n\nEn Ferio la mayor es E; la menor, I; la conclusión, O:\nNingún necio es sabio;\nalgún alumno es necio;\nluego algún alumno no es sabio.\n\nTito: «¿Por qué me mira todo el mundo?»",
      notas: "El verso *Barbara, Cēlārent, Dariī, Feriōque priōris* abre una versión posterior, ya con cuarta figura, del poema mnemotécnico medieval (el original, del siglo XIII, empezaba *Barbara, Cēlārent, Dariī, Feriō, Baralipton*); sigue con los modos de las demás figuras. Es un hexámetro, y por eso sabemos qué vocales son largas. En *Sub prae prīma…*, *sub* y *prae* son abreviaturas de *subiectum* y *praedicātum*.",
      glosa: {
        "nōn": "no",
        "omnēs": "todos",
        "syllogismī": "silogismos (nominativo plural)",
        eandem: "la misma (acusativo femenino de īdem)",
        "fōrmam": "forma (acusativo)",
        habent: "tienen",
        "logicī": "los lógicos",
        "eōs": "los (acusativo plural de is: los silogismos)",
        in: "en (+ ablativo); en, hacia (+ acusativo)",
        "figūrās": "figuras (acusativo plural)",
        "dīvidunt": "dividen",
        secundum: "según (+ acusativo)",
        locum: "el lugar (acusativo de locus)",
        "terminī": "del término (genitivo)",
        "mediī": "medio (genitivo)",
        "prīmā": "primera (ablativo)",
        "figūrā": "figura (ablativo)",
        terminus: "término",
        medius: "medio",
        est: "es",
        subiectum: "sujeto",
        "maiōre": "la mayor (ablativo)",
        et: "y",
        "praedicātum": "predicado",
        "minōre": "la menor (ablativo)",
        "secundā": "la segunda (ablativo)",
        "utrāque": "ambas (ablativo femenino de uterque)",
        "tertiā": "la tercera (ablativo)",
        "discipulī": "los alumnos",
        ut: "para (que) (+ subjuntivo)",
        "rēgulam": "la regla (acusativo)",
        "memoriā": "en la memoria (ablativo; «memoriā tenēre» = recordar)",
        teneant: "retengan (subjuntivo de teneō)",
        recitant: "recitan",
        sub: "= sub(iectum): sujeto (abreviado en el verso)",
        prae: "= prae(dicātum): predicado (abreviado en el verso)",
        "prīma": "la primera (figura)",
        bis: "dos veces",
        secunda: "la segunda (figura)",
        tertia: "la tercera (figura)",
        deinde: "después",
        quaeritur: "se pregunta",
        "quī": "qué, cuáles (interrogativo)",
        "modī": "modos",
        "quāque": "cada (ablativo de quisque: «in quāque» = en cada)",
        valeant: "son válidos (subjuntivo de valeō: pregunta indirecta)",
        "nōmina": "nombres (acusativo plural de nōmen)",
        aliquid: "algo",
        significent: "signifiquen (subjuntivo)",
        sed: "sino",
        "vōcālēs": "vocales (acusativo plural de vōcālis)",
        servent: "conserven (subjuntivo de servō)",
        a: "A: universal afirmativa",
        e: "E: universal negativa",
        i: "I: particular afirmativa",
        o: "O: particular negativa",
        "ūniversālis": "universal",
        "affirmātīva": "afirmativa",
        "negātīva": "negativa",
        "particulāris": "particular",
        ecce: "he aquí, aquí tienes",
        "prīmae": "de la primera (genitivo)",
        "figūrae": "figura (genitivo)",
        barbara: "Barbara: modo AAA de la 1.ª figura",
        "cēlārent": "Celarent: modo EAE",
        "dariī": "Darii: modo AII",
        "feriōque": "y Ferio (Feriō + -que): modo EIO",
        "priōris": "de la primera (figura) (genitivo de prior)",
        "prōpositiōnēs": "proposiciones",
        sunt: "son",
        omne: "todo (neutro de omnis)",
        animal: "animal",
        "mortāle": "mortal (neutro)",
        omnis: "todo",
        "homō": "hombre",
        "ergō": "luego",
        "mortālis": "mortal",
        "feriō": "Ferio: modo EIO de la 1.ª figura",
        maior: "la mayor (premisa)",
        minor: "la menor (premisa)",
        "conclūsiō": "la conclusión",
        "nūllus": "ningún",
        stultus: "necio, tonto",
        "sapiēns": "sabio",
        aliquis: "algún",
        discipulus: "alumno",
        titus: "Tito (nombre)",
        "cūr": "por qué",
        "mē": "me, a mí (acusativo)",
        aspiciunt: "miran"
      },
      preguntas: [
        {
          q: "¿De qué depende la figura de un silogismo?",
          ops: ["Del número de premisas", "Del lugar del término medio", "De si la conclusión es verdadera"],
          ok: 1
        },
        {
          q: "¿Para qué sirven las vocales de «Barbara» o «Feriō»?",
          ops: ["Indican el tipo de cada proposición", "Indican la figura", "No sirven para nada"],
          ok: 0
        },
        {
          q: "En la segunda figura, el término medio es…",
          ops: ["sujeto en las dos premisas", "sujeto en la mayor y predicado en la menor", "predicado en las dos premisas"],
          ok: 2
        },
        {
          q: "¿Por qué miran todos a Tito?",
          ops: ["Por el ejemplo de Feriō: «algún alumno es necio»", "Porque está dormido", "Porque ha escrito el silogismo"],
          ok: 0
        }
      ]
    },
    {
      id: "la5-r3",
      titulo: "Utrum logica sit scientia",
      nivel: "Intermedio",
      texto: "Quaeritur utrum logica sit scientia.\n\nEt vidētur quod nōn. Scientia enim dē rēbus est, ut physica dē nātūrā. Logica autem nōn dē rēbus loquitur, sed dē terminīs, prōpositiōnibus et syllogismīs. Ergō logica nōn est scientia.\n\nPraetereā, ars est quae aliquid facit. Logica facit dēfīnītiōnēs et syllogismōs. Ergō logica est ars, nōn scientia.\n\nSed contrā, scientia est quae per causās dēmōnstrat. Logica autem dēmōnstrat cūr syllogismus valeat. Ergō logica est scientia.\n\nRespondeō dīcendum quod logica et ars est et scientia. Ars est, quia nōs dīrigit ut bene ratiōcinēmur et nē errēmus. Scientia est, quia quaerit cūr cōnsequentia bona sit.\n\nAd prīmum ergō dīcendum quod logica nōn loquitur dē rēbus ut physica; cōnsīderat tamen quōmodo dē rēbus cōgitēmus.\n\nAd secundum dīcendum quod nihil prohibet eandem disciplīnam et artem esse et scientiam.",
      traduccion: "Se pregunta si la lógica es una ciencia.\n\nY parece que no. Porque la ciencia trata de las cosas, como la física de la naturaleza. Pero la lógica no habla de las cosas, sino de términos, proposiciones y silogismos. Luego la lógica no es una ciencia.\n\nAdemás, un arte es lo que hace algo. La lógica hace definiciones y silogismos. Luego la lógica es un arte, no una ciencia.\n\nPero en contra: ciencia es la que demuestra por las causas. Y la lógica demuestra por qué un silogismo es válido. Luego la lógica es una ciencia.\n\nRespondo que hay que decir que la lógica es a la vez arte y ciencia. Es arte porque nos dirige para que razonemos bien y no nos equivoquemos. Es ciencia porque investiga por qué una consecuencia es válida.\n\nA lo primero, pues, hay que decir que la lógica no habla de las cosas como la física; pero considera cómo pensamos sobre las cosas.\n\nA lo segundo hay que decir que nada impide que una misma disciplina sea a la vez arte y ciencia.",
      notas: "Así se construye un artículo escolástico, como los de la *Summa* de santo Tomás: pregunta (*Quaeritur utrum…*), objeciones (*Vidētur quod nōn…*, *Praetereā…*), argumento contrario (*Sed contrā…*), respuesta (*Respondeō dīcendum quod…*) y réplica a cada objeción (*Ad prīmum…*). *Dīcendum* («hay que decir») es un gerundivo: lo estudiarás en la semana 7. Santo Tomás llama a la lógica *ars artium*, «el arte de las artes», porque nos dirige en el acto mismo de razonar.",
      glosa: {
        quaeritur: "se pregunta (pasiva de quaerō)",
        utrum: "si (pregunta indirecta)",
        logica: "la lógica",
        sit: "es (subjuntivo de est: pregunta indirecta)",
        scientia: "ciencia",
        et: "y; «et… et…» = a la vez… y…",
        "vidētur": "parece (de videor)",
        quod: "que",
        "nōn": "no",
        enim: "pues, porque (va en segundo lugar)",
        "dē": "de, sobre (+ ablativo)",
        "rēbus": "las cosas (ablativo plural de rēs)",
        est: "es",
        ut: "como",
        physica: "la física, la filosofía natural",
        "nātūrā": "la naturaleza (ablativo)",
        autem: "pero, en cambio; y (va en segundo lugar)",
        loquitur: "habla (deponente)",
        sed: "sino; pero",
        "terminīs": "términos (ablativo plural)",
        "prōpositiōnibus": "proposiciones (ablativo plural)",
        "syllogismīs": "silogismos (ablativo plural)",
        "ergō": "luego",
        "praetereā": "además (introduce otra objeción)",
        ars: "arte",
        quae: "la que, lo que",
        aliquid: "algo",
        facit: "hace",
        "dēfīnītiōnēs": "definiciones (acusativo plural)",
        "syllogismōs": "silogismos (acusativo plural)",
        "contrā": "en contra («sed contrā» = pero en contra)",
        per: "por, mediante (+ acusativo)",
        "causās": "las causas (acusativo plural)",
        "dēmōnstrat": "demuestra",
        "cūr": "por qué",
        syllogismus: "silogismo",
        valeat: "es válido (subjuntivo de valeō: pregunta indirecta)",
        "respondeō": "respondo",
        "dīcendum": "hay que decir («respondeō dīcendum quod» = respondo que hay que decir que)",
        quia: "porque",
        "nōs": "nos (acusativo)",
        "dīrigit": "dirige",
        bene: "bien",
        "ratiōcinēmur": "razonemos (subjuntivo de ratiōcinor)",
        "nē": "para que no",
        "errēmus": "nos equivoquemos (subjuntivo de errō)",
        quaerit: "investiga, busca",
        "cōnsequentia": "la consecuencia, la inferencia",
        bona: "buena, válida",
        ad: "a, en cuanto a («ad prīmum» = a la primera objeción)",
        "prīmum": "lo primero: la primera objeción",
        "cōnsīderat": "considera",
        tamen: "sin embargo",
        "quōmodo": "cómo",
        "cōgitēmus": "pensamos (subjuntivo de cōgitō: pregunta indirecta)",
        secundum: "lo segundo: la segunda objeción",
        nihil: "nada",
        prohibet: "impide",
        eandem: "la misma (acusativo femenino de īdem)",
        "disciplīnam": "disciplina (acusativo)",
        artem: "arte (acusativo)",
        esse: "ser (infinitivo)",
        scientiam: "ciencia (acusativo)"
      },
      preguntas: [
        {
          q: "¿Qué dice la primera objeción?",
          ops: ["Que la lógica no trata de las cosas, sino de términos y proposiciones", "Que la lógica es inútil", "Que la física no es una ciencia"],
          ok: 0
        },
        {
          q: "¿Qué responde el maestro?",
          ops: ["Que la lógica es solo un arte", "Que la lógica es a la vez arte y ciencia", "Que la lógica no es ni arte ni ciencia"],
          ok: 1
        },
        {
          q: "Según la respuesta, ¿por qué es un arte la lógica?",
          ops: ["Porque hace estatuas", "Porque habla de la naturaleza", "Porque nos dirige para razonar bien y no equivocarnos"],
          ok: 2
        }
      ]
    },
    {
      id: "la5-r4",
      titulo: "Quid sequitur?",
      nivel: "Inicial",
      texto: "Magister discipulīs aenigmata prōpōnit. «Legite attentē», inquit, «et dīcite quid sequātur. Cavēte nē errētis!»\n\n1. Omnis logicus est philosophus. Mārcus est logicus. Quid sequitur?\nMārcus: «Mārcus est philosophus.» Rēctē!\n\n2. Sī Titus dormit, magistrum nōn audit. Titus dormit. Quid sequitur?\nOmnēs: «Titus magistrum nōn audit!» Rēctē!\n\n3. Omnis homō est animal. Omnis asinus est animal. Ergō omnis asinus est homō?\nNōn sequitur! Terminus medius in utrāque praemissā est praedicātum, et ex duābus affirmātīvīs in secundā figūrā nihil sequitur.\n\n4. Aliquis discipulus dormit. Titus est discipulus. Ergō Titus dormit?\nNōn sequitur: fortasse alius discipulus dormit.\n\nTum magister: «Tite, quid tibi vidētur?»\nTitus oculōs aperit: «Mihi vidētur quod hodiē nōn ego dormiō, sed aliquis alius.»",
      traduccion: "El maestro propone acertijos a los alumnos. «Leed con atención», dice, «y decid qué se sigue. ¡Cuidado, no os equivoquéis!»\n\n1. Todo lógico es filósofo. Marco es lógico. ¿Qué se sigue?\nMarco: «Marco es filósofo». ¡Correcto!\n\n2. Si Tito duerme, no oye al maestro. Tito duerme. ¿Qué se sigue?\nTodos: «¡Tito no oye al maestro!». ¡Correcto!\n\n3. Todo hombre es animal. Todo asno es animal. ¿Luego todo asno es hombre?\n¡No se sigue! El término medio es predicado en las dos premisas, y de dos afirmativas en la segunda figura no se sigue nada.\n\n4. Algún alumno duerme. Tito es alumno. ¿Luego Tito duerme?\nNo se sigue: quizá duerme otro alumno.\n\nEntonces el maestro: «Tito, ¿a ti qué te parece?»\nTito abre los ojos: «Me parece que hoy no duermo yo, sino algún otro».",
      notas: "Fíjate en *cavēte nē errētis*: *cavē* (o *cavēte*) + *nē* + subjuntivo = «cuidado, no…». Y guarda *quid tibi vidētur?*, «¿qué te parece?»: te servirá en tu conversación en latín.",
      glosa: {
        magister: "maestro",
        "discipulīs": "a los alumnos (dativo plural)",
        aenigmata: "acertijos (acusativo plural de aenigma)",
        "prōpōnit": "propone",
        legite: "leed (imperativo plural)",
        "attentē": "con atención",
        inquit: "dice (intercalado en la cita)",
        et: "y",
        "dīcite": "decid (imperativo plural)",
        quid: "qué",
        "sequātur": "se sigue (subjuntivo de sequitur: pregunta indirecta)",
        "cavēte": "tened cuidado (imperativo plural de caveō)",
        "nē": "que no («cavēte nē…» = cuidado, no…)",
        "errētis": "os equivoquéis (subjuntivo de errō)",
        omnis: "todo",
        logicus: "lógico",
        est: "es",
        philosophus: "filósofo",
        "mārcus": "Marco (nombre)",
        sequitur: "se sigue",
        "rēctē": "¡bien!, correcto",
        "sī": "si (condicional)",
        titus: "Tito (nombre)",
        dormit: "duerme",
        magistrum: "al maestro (acusativo)",
        "nōn": "no",
        audit: "oye, escucha",
        "omnēs": "todos",
        "homō": "hombre",
        animal: "animal",
        asinus: "asno",
        "ergō": "luego",
        terminus: "término",
        medius: "medio",
        in: "en (+ ablativo)",
        "utrāque": "ambas (ablativo femenino de uterque)",
        "praemissā": "premisa (ablativo)",
        "praedicātum": "predicado",
        ex: "de, a partir de (+ ablativo)",
        "duābus": "dos (ablativo femenino de duo)",
        "affirmātīvīs": "afirmativas (ablativo plural: proposiciones afirmativas)",
        "secundā": "segunda (ablativo)",
        "figūrā": "figura (ablativo)",
        nihil: "nada",
        aliquis: "algún",
        discipulus: "alumno",
        fortasse: "quizá",
        alius: "otro",
        tum: "entonces",
        tite: "¡Tito! (vocativo)",
        tibi: "a ti (dativo)",
        "vidētur": "parece («quid tibi vidētur?» = ¿qué te parece?)",
        "oculōs": "los ojos (acusativo plural de oculus)",
        aperit: "abre",
        mihi: "a mí (dativo)",
        quod: "que",
        "hodiē": "hoy",
        ego: "yo",
        "dormiō": "duermo",
        sed: "sino"
      },
      preguntas: [
        {
          q: "En el acertijo 3, ¿por qué no se sigue que todo asno es hombre?",
          ops: ["Porque las premisas son falsas", "Porque el término medio es predicado en las dos premisas, que son afirmativas", "Porque los asnos no son animales"],
          ok: 1
        },
        {
          q: "En el acertijo 4, ¿por qué no se sigue que Tito duerme?",
          ops: ["Porque quizá duerme otro alumno", "Porque Tito no es alumno", "Porque nadie duerme"],
          ok: 0
        },
        { q: "¿Qué hace Tito al final?", ops: ["Se duerme otra vez", "Escribe un silogismo", "Abre los ojos y bromea"], ok: 2 }
      ]
    },
    {
      id: "la5-r5",
      titulo: "Fallāciae",
      nivel: "Intermedio",
      texto: "Sophisma est syllogismus quī bonus vidētur, sed nōn est; fallācia est error quī in sophismate latet. Sēneca in epistulā ad Lūcīlium hoc sophisma rīdet:\n\n«Mūs syllaba est. Mūs autem cāseum rōdit. Syllaba ergō cāseum rōdit.»\n\nSēneca iocōsē timet nē in mūscipulō syllabās capiat, aut nē liber suum cāseum comedat!\n\nQuaerāmus ubi sit error. In minōre “mūs” nōn est animal, sed vōx: ūna syllaba. In maiōre “mūs” est animal parvum. Terminus medius igitur nōn est ūnus, sed duo, et syllogismus quattuor terminōs habet. Haec est fallācia aequivocātiōnis: ūna vōx, duo sēnsūs.\n\nQuid facit logicus? Nōn mīrātur, sed distinguit: «Distinguō minōrem: mūs ut vōx est syllaba, concēdō; mūs ut animal est syllaba, negō.» Sīc sophisma cadit, et mūs cāseum tranquillus rōdit.",
      traduccion: "Un sofisma es un silogismo que parece válido, pero no lo es; la falacia es el error que se esconde en el sofisma. Séneca, en una carta a Lucilio, se ríe de este sofisma:\n\n«“Mūs” es una sílaba. Ahora bien, el ratón (“mūs”) roe el queso. Luego una sílaba roe el queso.»\n\n¡Séneca teme, en broma, atrapar sílabas en la ratonera o que un libro se coma su queso!\n\nBusquemos dónde está el error. En la menor, “mūs” no es un animal, sino una palabra: una sílaba. En la mayor, “mūs” es un animal pequeño. Así pues, el término medio no es uno, sino dos, y el silogismo tiene cuatro términos. Es la falacia del equívoco: una palabra, dos sentidos.\n\n¿Qué hace el lógico? No se asombra, sino que distingue: «Distingo la menor: que “mūs” como palabra es una sílaba, lo concedo; que el ratón como animal es una sílaba, lo niego». Así cae el sofisma, y el ratón roe tranquilo su queso.",
      notas: "El sofisma del ratón es de Séneca (*Cartas a Lucilio*, 48); lo demás está adaptado. Ojo: Séneca pone primero la menor; la mayor es la premisa que lleva el predicado de la conclusión (*cāseum rōdit*), aunque aquí tenga *autem*. Tras un verbo de temer, *nē* significa «que»: *timet nē capiat*, «teme atrapar». Los escolásticos dirían que en la menor *mūs* está por la palabra misma (*suppositiō māteriālis*) y en la mayor por el animal (*suppositiō persōnālis*): es la teoría del término que encontrarás en tu libro.",
      glosa: {
        sophisma: "sofisma",
        est: "es",
        syllogismus: "silogismo",
        "quī": "que (relativo)",
        bonus: "bueno, válido",
        "vidētur": "parece (de videor)",
        sed: "pero; sino",
        "nōn": "no",
        "fallācia": "falacia, engaño",
        error: "error",
        in: "en (+ ablativo)",
        sophismate: "el sofisma (ablativo de sophisma)",
        latet: "se esconde",
        "sēneca": "Séneca (nombre)",
        "epistulā": "carta (ablativo)",
        ad: "a (+ acusativo)",
        "lūcīlium": "Lucilio (acusativo)",
        hoc: "este (acusativo neutro)",
        "rīdet": "se ríe de (+ acusativo)",
        "mūs": "ratón; la palabra «mūs»",
        syllaba: "sílaba",
        autem: "ahora bien",
        "cāseum": "el queso (acusativo de cāseus)",
        "rōdit": "roe",
        "ergō": "luego",
        "iocōsē": "en broma",
        timet: "teme",
        "nē": "que (tras un verbo de temer: «timet nē capiat» = teme atrapar)",
        "mūscipulō": "la ratonera (ablativo de mūscipulum)",
        "syllabās": "sílabas (acusativo plural)",
        capiat: "atrape (subjuntivo de capiō)",
        aut: "o",
        liber: "libro",
        suum: "su (de Séneca; acusativo)",
        comedat: "se coma (subjuntivo de comedō)",
        "quaerāmus": "busquemos (subjuntivo exhortativo)",
        ubi: "dónde",
        sit: "está (subjuntivo: pregunta indirecta)",
        "maiōre": "la mayor (ablativo)",
        animal: "animal",
        "vōx": "palabra, voz",
        "ūna": "una",
        "minōre": "la menor (ablativo)",
        parvum: "pequeño (neutro)",
        terminus: "término",
        medius: "medio",
        igitur: "así pues, por tanto",
        "ūnus": "uno",
        duo: "dos",
        et: "y",
        quattuor: "cuatro",
        "terminōs": "términos (acusativo plural)",
        habet: "tiene",
        haec: "esta",
        "aequivocātiōnis": "del equívoco (genitivo de aequivocātiō)",
        "sēnsūs": "sentidos (nominativo plural de sēnsus)",
        quid: "qué",
        facit: "hace",
        logicus: "el lógico",
        "mīrātur": "se asombra (deponente)",
        distinguit: "distingue",
        "distinguō": "distingo (fórmula de respuesta escolástica)",
        "minōrem": "la menor (acusativo)",
        ut: "como, en cuanto",
        "concēdō": "lo concedo",
        "negō": "lo niego",
        "sīc": "así",
        cadit: "cae",
        tranquillus: "tranquilo"
      },
      preguntas: [
        {
          q: "¿Qué es un sofisma, según el texto?",
          ops: ["Un silogismo de cuatro premisas", "Un silogismo que parece válido y no lo es", "Una carta de Séneca"],
          ok: 1
        },
        {
          q: "¿Dónde está el error del sofisma del ratón?",
          ops: ["«mūs» es una palabra en la menor y un animal en la mayor", "La conclusión es verdadera", "Los ratones no comen queso"],
          ok: 0
        },
        {
          q: "¿Qué hace el lógico ante el sofisma?",
          ops: ["Niega que los ratones existan", "Concede la conclusión", "Distingue los dos sentidos de «mūs»"],
          ok: 2
        }
      ]
    }
  ]
});
