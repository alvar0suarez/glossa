// Glossa · griego antiguo · semana 2: Primera y segunda declinación
window.CONTENT.grc.semanas.push({
  n: 2,
  lecciones: [
    {
      id: "grc2-1",
      titulo: "Los cinco casos: ὁ λόγος",
      min: 35,
      intro: "Para leer a Platón tienes que saber quién hace qué, y en griego, como en latín, eso lo dice la terminación. La ventaja del griego es el artículo: cambia con el caso y te avisa antes de llegar al nombre. Hoy, los cinco casos con *ὁ λόγος*.",
      bloques: [
        {
          t: "p",
          x: "Un **caso** es la forma que toma una palabra según su función en la frase. En español solo quedan restos en los pronombres: «él» es sujeto; «lo», objeto directo; «le», objeto indirecto. El griego tiene **cinco** casos, los del latín menos el ablativo. Este es el modelo de la 2.ª declinación, con su artículo:"
        },
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural", "Para qué sirve"],
          audio: [1, 2],
          filas: [
            ["Nominativo", "ὁ λόγος", "οἱ λόγοι", "sujeto y atributo"],
            ["Vocativo", "ὦ λόγε", "ὦ λόγοι", "llamar a alguien"],
            ["Acusativo", "τὸν λόγον", "τοὺς λόγους", "objeto directo; «adónde»"],
            ["Genitivo", "τοῦ λόγου", "τῶν λόγων", "«de»: posesión, origen"],
            ["Dativo", "τῷ λόγῳ", "τοῖς λόγοις", "«a, para»; también «con»"]
          ]
        },
        {
          t: "nota",
          x: "Si recuerdas el latín *dominus*, las terminaciones se corresponden: *-ος* = *-us*, *-ον* = *-um*, *-ου* = *-ī*, *-ῳ* = *-ō*; en plural, *-οι* = *-ī*, *-ους* = *-ōs*, *-ων* = *-ōrum*. La iota pequeña bajo la ω del dativo (*ῳ*, la iota suscrita) no suena, pero es la marca del caso."
        },
        {
          t: "p",
          x: "El artículo es tu mejor pista: en el masculino, *ὁ* y *οἱ*, sin acento y con espíritu áspero, son nominativos; todo lo que empieza por *τ-* es otro caso. El vocativo en *-ε* solo existe en singular: *ὦ φίλε*, «¡amigo!»; en plural es igual que el nominativo. *ὦ* no se traduce: en español basta con el nombre."
        },
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural"],
          audio: [1, 2],
          filas: [
            ["Nominativo", "ὁ ἄνθρωπος", "οἱ ἄνθρωποι"],
            ["Vocativo", "ὦ ἄνθρωπε", "ὦ ἄνθρωποι"],
            ["Acusativo", "τὸν ἄνθρωπον", "τοὺς ἀνθρώπους"],
            ["Genitivo", "τοῦ ἀνθρώπου", "τῶν ἀνθρώπων"],
            ["Dativo", "τῷ ἀνθρώπῳ", "τοῖς ἀνθρώποις"]
          ]
        },
        {
          t: "p",
          x: "Fíjate en el acento: el nombre intenta conservarlo donde lo tiene en el nominativo, pero *ἄνθρωπος* lo pasa a la penúltima cuando la última sílaba es larga (*ἀνθρώπου*, *ἀνθρώποις*); la *-οι* final cuenta como breve (*ἄνθρωποι*). Y los que lo llevan en la última, como *θεός*, hacen el genitivo y el dativo con circunflejo: *θεοῦ, θεῷ, θεῶν, θεοῖς*."
        },
        {
          t: "nota",
          x: "En las ediciones griegas la frase empieza con minúscula: solo llevan mayúscula los nombres propios y el comienzo de un párrafo. Así lo verás en Platón, y así lo escribimos aquí."
        },
        {
          t: "ej",
          items: [
            ["ὁ φιλόσοφος τῷ φίλῳ λέγει.", "El filósofo le habla al amigo."],
            ["οἱ λόγοι τοῦ φιλοσόφου", "los discursos del filósofo"],
            ["ὁ νόμος τῶν θεῶν", "la ley de los dioses"],
            ["ὁ βίος τῶν ἀνθρώπων", "la vida de los hombres"],
            ["ὁ ἄνθρωπος λόγον ἔχει.", "El ser humano tiene lógos: palabra y razón."],
            ["ὦ φίλε, τί λέγεις;", "Amigo, ¿qué dices?"],
            ["ὁ χρόνος καὶ ὁ θάνατος", "el tiempo y la muerte"]
          ]
        }
      ],
      vocab: [
        ["δῆμος, -ου, ὁ", "pueblo"],
        ["ἰατρός, -οῦ, ὁ", "médico"],
        ["πλοῦτος, -ου, ὁ", "riqueza"],
        ["θάνατος, -ου, ὁ", "muerte"],
        ["πόλεμος, -ου, ὁ", "guerra"]
      ],
      ejercicios: [
        { t: "mc", q: "¿Qué caso del latín no existe en griego?", ops: ["el ablativo", "el dativo", "el vocativo"], ok: 0 },
        {
          t: "mc",
          q: "*τοῦ λόγου* es…",
          ops: ["genitivo singular: «del discurso»", "dativo singular: «al discurso»", "nominativo plural: «los discursos»"],
          ok: 0
        },
        { t: "mc", q: "El dativo plural de *ὁ φίλος* es…", ops: ["τοῖς φίλοις", "τοὺς φίλους", "τῶν φίλων"], ok: 0 },
        { t: "mc", q: "En *ὦ φίλε, τί λέγεις;*, la palabra *φίλε* está en…", ops: ["vocativo", "nominativo", "dativo"], ok: 0 },
        {
          t: "mc",
          q: "¿Por qué *ἀνθρώπου* lleva el acento en la penúltima, si *ἄνθρωπος* lo lleva en la antepenúltima?",
          ops: ["Porque su última sílaba, -ου, es larga", "Porque es plural", "Porque es una errata"],
          ok: 0
        },
        { t: "oir", x: "τοὺς λόγους", ops: ["τοὺς λόγους", "τοῦ λόγου", "τοῖς λόγοις"], ok: 0 },
        { t: "oir", x: "τῷ θεῷ", ops: ["τῷ θεῷ", "τοῦ θεοῦ", "τοῖς θεοῖς"], ok: 0 },
        { t: "orden", es: "El filósofo le habla al amigo.", x: "ὁ φιλόσοφος τῷ φίλῳ λέγει." }
      ]
    },
    {
      id: "grc2-2",
      titulo: "El presente: λύω, λέγω, γράφω",
      min: 35,
      intro: "El verbo griego lleva la persona en la terminación, igual que el latino: *λέγω* es «digo» y *λέγομεν*, «decimos». Con las seis terminaciones de *λύω* conjugas ya cientos de verbos, entre ellos los que más usa Platón.",
      bloques: [
        {
          t: "p",
          x: "*λύω* («desato, suelto») es el modelo de las gramáticas porque su raíz no cambia nunca. Quita la *-ω* del diccionario y añade las terminaciones:"
        },
        {
          t: "tabla",
          cab: ["Persona", "Griego", "Suena", "Español"],
          audio: [1],
          filas: [
            ["yo", "λύω", "lúo", "desato"],
            ["tú", "λύεις", "lúeis", "desatas"],
            ["él, ella", "λύει", "lúei", "desata"],
            ["nosotros", "λύομεν", "lúomen", "desatamos"],
            ["vosotros", "λύετε", "lúete", "desatáis"],
            ["ellos, ellas", "λύουσιν", "lúusin", "desatan"]
          ]
        },
        {
          t: "nota",
          x: "Compara con el latín *legō, legis, legit, legimus, legitis, legunt*: *-ω, -εις, -ει, -ομεν, -ετε, -ουσι*. Como en latín, el pronombre sobra: *λέγω* ya es «digo». La *-ν* de *λύουσιν* es «móvil»: se escribe ante vocal y al final de frase, y suele faltar ante consonante (*λύουσι τὸν…*). Por eso las gramáticas la ponen entre paréntesis: *λύουσι(ν)*."
        },
        {
          t: "tabla",
          cab: ["Verbo", "Significa", "él, ella", "ellos, ellas"],
          audio: [0, 2, 3],
          filas: [
            ["λέγω", "digo; hablo", "λέγει", "λέγουσιν"],
            ["γράφω", "escribo", "γράφει", "γράφουσιν"],
            ["ἔχω", "tengo", "ἔχει", "ἔχουσιν"],
            ["διδάσκω", "enseño", "διδάσκει", "διδάσκουσιν"],
            ["μανθάνω", "aprendo; comprendo", "μανθάνει", "μανθάνουσιν"],
            ["ἀκούω", "oigo, escucho", "ἀκούει", "ἀκούουσιν"],
            ["γιγνώσκω", "conozco, sé", "γιγνώσκει", "γιγνώσκουσιν"],
            ["βαδίζω", "camino, voy", "βαδίζει", "βαδίζουσιν"]
          ]
        },
        {
          t: "p",
          x: "**La negación** es *οὐ*, delante de lo que niega: *οὐ λέγω* (no digo). Ante vocal con espíritu suave se escribe *οὐκ* (*οὐκ ἔχω*, no tengo), y ante espíritu áspero, *οὐχ* (*οὐχ ὁ φιλόσοφος*, no el filósofo). **Las preguntas** acaban en *;*, el signo de interrogación griego, y las de sí o no suelen empezar por *ἆρα*: *ἆρα μανθάνεις;* (¿lo entiendes?). El punto alto (*·*) equivale a nuestros dos puntos o a un punto y coma."
        },
        {
          t: "nota",
          x: "*ἐστί(ν)* (es) y *εἰσί(ν)* (son) son enclíticos: se apoyan en la palabra anterior, como «-lo» en «dímelo». Por eso a menudo pierden su acento o le añaden uno a esa palabra: *φιλόσοφός ἐστιν*, *ἀγαθοί εἰσιν*."
        },
        {
          t: "nota",
          x: "*ζητεῖ* («busca») es de otro grupo, los verbos contractos, que verás en la semana 6. Por ahora apréndelo como bloque, porque es el verbo de Sócrates: *τὴν ἀλήθειαν ζητεῖ*, «busca la verdad»."
        },
        {
          t: "ej",
          items: [
            ["τί λέγεις;", "¿Qué dices?"],
            ["καλῶς λέγεις.", "Dices bien. / Tienes razón."],
            ["ὁ διδάσκαλος διδάσκει, οἱ φίλοι μανθάνουσιν.", "El maestro enseña; los amigos aprenden."],
            ["τὸν νόμον γιγνώσκομεν.", "Conocemos la ley."],
            ["ἆρα ἀκούετε, ὦ φίλοι;", "¿Escucháis, amigos?"],
            ["οὐ γιγνώσκω.", "No lo sé."],
            ["ὁ δῆμος τοὺς νόμους λύει.", "El pueblo anula las leyes."],
            ["ὁ φιλόσοφος τὴν ἀλήθειαν ζητεῖ.", "El filósofo busca la verdad."]
          ]
        }
      ],
      vocab: [
        ["λύω", "desato, suelto; anulo"],
        ["λέγω", "digo; hablo"],
        ["γράφω", "escribo"],
        ["ἔχω", "tengo"],
        ["διδάσκω", "enseño"],
        ["μανθάνω", "aprendo; comprendo"],
        ["ἀκούω", "oigo, escucho"],
        ["γιγνώσκω", "conozco, sé"],
        ["βαδίζω", "camino, voy"],
        ["λαμβάνω", "tomo, recibo"],
        ["φεύγω", "huyo"],
        ["μένω", "me quedo; espero"],
        ["τί λέγεις;", "¿qué dices?"],
        ["καλῶς λέγεις.", "dices bien; tienes razón"],
        ["τὴν ἀλήθειαν ζητεῖ.", "busca la verdad (ζητέω: verbo contracto, semana 6)"]
      ],
      ejercicios: [
        { t: "mc", q: "*λύομεν* significa…", ops: ["desatamos", "desatáis", "desatan"], ok: 0 },
        { t: "mc", q: "*μανθάνουσιν* significa…", ops: ["aprenden", "enseñan", "aprendemos"], ok: 0 },
        { t: "mc", q: "Completa: *οἱ φίλοι τὸν λόγον ___.*", ops: ["ἀκούουσιν", "ἀκούει", "ἀκούομεν"], ok: 0 },
        {
          t: "mc",
          q: "¿Por qué se dice *οὐκ ἔχω* y no *οὐ ἔχω*?",
          ops: ["Porque ἔχω empieza por vocal", "Porque ἔχω está en plural", "Porque es una pregunta"],
          ok: 0
        },
        {
          t: "mc",
          q: "*ὁ δῆμος τοὺς νόμους λύει* significa…",
          ops: ["El pueblo anula las leyes.", "Las leyes liberan al pueblo.", "El pueblo escribe las leyes."],
          ok: 0
        },
        { t: "oir", x: "λέγετε", ops: ["λέγετε", "λέγεις", "λέγομεν"], ok: 0 },
        { t: "oir", x: "γράφουσιν", ops: ["γράφουσιν", "γράφομεν", "γράφει"], ok: 0 },
        { t: "orden", es: "Los amigos aprenden la ley.", x: "οἱ φίλοι τὸν νόμον μανθάνουσιν." }
      ]
    },
    {
      id: "grc2-3",
      titulo: "Primera declinación: ψυχή, χώρα, δόξα",
      min: 40,
      intro: "Las grandes palabras femeninas de la filosofía son de la 1.ª declinación: *ψυχή* (alma), *ἀρετή* (virtud), *ἐπιστήμη* (conocimiento), *σοφία*, *ἀλήθεια*. Todas comparten el plural; en singular hay tres variantes, y una regla sencilla te dice cuál toca.",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural"],
          audio: [1, 2],
          filas: [
            ["Nominativo", "ἡ ψυχή", "αἱ ψυχαί"],
            ["Vocativo", "ὦ ψυχή", "ὦ ψυχαί"],
            ["Acusativo", "τὴν ψυχήν", "τὰς ψυχάς"],
            ["Genitivo", "τῆς ψυχῆς", "τῶν ψυχῶν"],
            ["Dativo", "τῇ ψυχῇ", "ταῖς ψυχαῖς"]
          ]
        },
        {
          t: "p",
          x: "El artículo femenino sigue el mismo modelo: *ἡ, τήν, τῆς, τῇ*; *αἱ, τάς, τῶν, ταῖς*. Es la 1.ª declinación del latín (*sententia, sententiae*) y, como allí, casi todas sus palabras son femeninas."
        },
        {
          t: "tabla",
          cab: ["Caso", "en -η", "en -α larga", "en -α breve"],
          audio: [1, 2, 3],
          filas: [
            ["Nominativo", "ψυχή", "χώρα", "δόξα"],
            ["Acusativo", "ψυχήν", "χώραν", "δόξαν"],
            ["Genitivo", "ψυχῆς", "χώρας", "δόξης"],
            ["Dativo", "ψυχῇ", "χώρᾳ", "δόξῃ"],
            ["Nom. plural", "ψυχαί", "χῶραι", "δόξαι"]
          ]
        },
        {
          t: "p",
          x: "**La regla.** Si delante de la terminación hay *ε, ι* o *ρ*, la *α* se queda en todo el singular: *σοφία, σοφίας*; *ἀγορά, ἀγορᾶς*; *ἀλήθεια, ἀληθείας*. Si no, va *η*: *τέχνη, τέχνης*. Y si el nominativo acaba en *α* breve tras otra letra (*δόξα, θάλαττα, γλῶττα*), el genitivo y el dativo pasan a *η*: *δόξης, δόξῃ*. No tienes que adivinarlo: el diccionario te da el genitivo (*δόξα, -ης*)."
        },
        {
          t: "nota",
          x: "Dos detalles de oído. La iota suscrita del dativo (*ᾳ, ῃ*) no suena, así que *τῇ ψυχῇ* y *ἡ ψυχή* solo se distinguen por el artículo. Y el genitivo plural lleva siempre circunflejo en la terminación: *ψυχῶν, χωρῶν, δοξῶν, ἀληθειῶν*."
        },
        {
          t: "nota",
          x: "Muchas palabras latinas en *-ia* son préstamos de esta declinación: *philosophia* < *φιλοσοφία*, *historia* < *ἱστορία*, *harmonia* < *ἁρμονία*. Y *Ἀθῆναι* (Atenas) es plural, como el latín *Athēnae*: *ἐν Ἀθήναις*, «en Atenas»."
        },
        {
          t: "ej",
          items: [
            ["ἡ ἀρετὴ τῆς ψυχῆς", "la virtud del alma"],
            ["ἡ δόξα καὶ ἡ ἐπιστήμη", "la opinión y el conocimiento (la gran distinción de Platón)"],
            ["ἐν τῇ ἀγορᾷ", "en el ágora"],
            ["αἱ τέχναι τῶν ἀνθρώπων", "las artes de los hombres"],
            ["ἡ ψυχὴ τὴν ἀλήθειαν ζητεῖ.", "El alma busca la verdad."],
            ["ἐν τῇ ἐκκλησίᾳ περὶ τῆς εἰρήνης λέγουσιν.", "En la asamblea hablan de la paz."],
            ["ἐν Ἀθήναις", "en Atenas"]
          ]
        }
      ],
      vocab: [
        ["δίκη, -ης, ἡ", "justicia; juicio; castigo"],
        ["φωνή, -ῆς, ἡ", "voz"],
        ["εἰρήνη, -ης, ἡ", "paz"],
        ["οἰκία, -ας, ἡ", "casa"],
        ["ἡμέρα, -ας, ἡ", "día"],
        ["ἐκκλησία, -ας, ἡ", "asamblea"],
        ["θάλαττα, -ης, ἡ", "mar"],
        ["γλῶττα, -ης, ἡ", "lengua"]
      ],
      ejercicios: [
        { t: "mc", q: "El genitivo singular de *χώρα* es…", ops: ["χώρας", "χώρης", "χωρῶν"], ok: 0 },
        { t: "mc", q: "El genitivo singular de *δόξα* es…", ops: ["δόξης", "δόξας", "δοξῶν"], ok: 0 },
        {
          t: "mc",
          q: "¿Por qué *σοφία* hace el genitivo *σοφίας* y no *σοφίης*?",
          ops: ["Porque delante de la α hay una ι", "Porque es una palabra filosófica", "Porque está en plural"],
          ok: 0
        },
        { t: "mc", q: "*ταῖς ψυχαῖς* es…", ops: ["dativo plural", "genitivo plural", "acusativo plural"], ok: 0 },
        { t: "mc", q: "En Platón, *δόξα* se opone a *ἐπιστήμη*. Significa…", ops: ["opinión", "ciencia", "alma"], ok: 0 },
        { t: "oir", x: "τὴν ψυχήν", ops: ["τὴν ψυχήν", "τῆς ψυχῆς", "ταῖς ψυχαῖς"], ok: 0 },
        { t: "oir", x: "ἐν τῇ ἀγορᾷ", ops: ["ἐν τῇ ἀγορᾷ", "εἰς τὴν ἀγοράν", "ἐκ τῆς ἀγορᾶς"], ok: 0 },
        { t: "orden", es: "El alma busca la verdad.", x: "ἡ ψυχὴ τὴν ἀλήθειαν ζητεῖ." }
      ]
    },
    {
      id: "grc2-4",
      titulo: "El neutro y el artículo completo",
      min: 35,
      intro: "Con el neutro de la 2.ª declinación (*τὸ ἔργον*, la obra) completas el artículo, la palabra más frecuente de cualquier texto griego. Si lo dominas, sabrás el caso de casi cualquier nombre antes de leerlo.",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural"],
          audio: [1, 2],
          filas: [
            ["Nominativo", "τὸ ἔργον", "τὰ ἔργα"],
            ["Acusativo", "τὸ ἔργον", "τὰ ἔργα"],
            ["Genitivo", "τοῦ ἔργου", "τῶν ἔργων"],
            ["Dativo", "τῷ ἔργῳ", "τοῖς ἔργοις"]
          ]
        },
        {
          t: "p",
          x: "La regla del neutro es la misma que en latín (*verbum, verba*): nominativo, vocativo y acusativo son iguales, y el plural acaba en *-α*. El genitivo y el dativo son los de *λόγος*. Cuando una forma puede ser sujeto u objeto, decide el sentido de la frase."
        },
        {
          t: "tabla",
          cab: ["Caso", "Masculino", "Femenino", "Neutro"],
          audio: [1, 2, 3],
          filas: [
            ["Nom. sing.", "ὁ", "ἡ", "τό"],
            ["Ac. sing.", "τόν", "τήν", "τό"],
            ["Gen. sing.", "τοῦ", "τῆς", "τοῦ"],
            ["Dat. sing.", "τῷ", "τῇ", "τῷ"],
            ["Nom. pl.", "οἱ", "αἱ", "τά"],
            ["Ac. pl.", "τούς", "τάς", "τά"],
            ["Gen. pl.", "τῶν", "τῶν", "τῶν"],
            ["Dat. pl.", "τοῖς", "ταῖς", "τοῖς"]
          ]
        },
        {
          t: "nota",
          x: "Pistas: *ὁ, ἡ, οἱ, αἱ* no llevan acento porque son proclíticos (se apoyan en la palabra siguiente) y empiezan con espíritu áspero; todas las demás formas empiezan por *τ-*. *τῶν* sirve para los tres géneros. El artículo no tiene vocativo: en su lugar va *ὦ*. Y funciona como el español, no como el latín, que no tenía artículo: *τὸ καλόν* es «lo bello»."
        },
        {
          t: "p",
          x: "**Plural neutro, verbo en singular.** Si el sujeto es un plural neutro, el verbo va en singular: *τὰ ζῷα τρέχει*, «los animales corren» (literalmente, «corre»). El griego lo siente como un conjunto. Lo verás en cada página."
        },
        {
          t: "ej",
          items: [
            ["τὸ ἔργον τοῦ ἀνθρώπου", "la obra del hombre"],
            ["τὰ βιβλία τοῦ φιλοσόφου", "los libros del filósofo"],
            ["τὰ ζῷα τρέχει.", "Los animales corren."],
            ["τὰ ἔργα καλά ἐστιν.", "Las obras son bellas."],
            ["ἐν τῷ γυμνασίῳ", "en el gimnasio"],
            ["εἰς τὸ Λύκειον βαδίζουσιν.", "Van al Liceo."],
            ["πάντων χρημάτων μέτρον ἐστὶν ἄνθρωπος.", "El hombre es la medida de todas las cosas. (Protágoras)"]
          ]
        },
        {
          t: "nota",
          x: "La frase de Protágoras, el sofista: *μέτρον* (medida) es un neutro de la 2.ª; *πάντων χρημάτων*, «de todas las cosas», es de la 3.ª declinación, que verás en la semana 4. *ἄνθρωπος* va sin artículo: el ser humano en general. El Liceo (*Λύκειον*) y la Academia eran gimnasios de Atenas; más tarde, las escuelas de Aristóteles y de Platón."
        }
      ],
      vocab: [
        ["βιβλίον, -ου, τό", "libro"],
        ["δῶρον, -ου, τό", "regalo"],
        ["ἀργύριον, -ου, τό", "dinero, plata"],
        ["τέκνον, -ου, τό", "hijo, niño"],
        ["δικαστήριον, -ου, τό", "tribunal"],
        ["δεσμωτήριον, -ου, τό", "cárcel"],
        ["τὸ Λύκειον", "el Liceo"],
        ["τρέχω", "corro"],
        ["τὰ ζῷα τρέχει.", "los animales corren (plural neutro, verbo en singular)"],
        ["πάντων χρημάτων μέτρον ἐστὶν ἄνθρωπος.", "el hombre es la medida de todas las cosas (Protágoras)"]
      ],
      ejercicios: [
        { t: "mc", q: "El plural de *τὸ ἔργον* es…", ops: ["τὰ ἔργα", "οἱ ἔργοι", "τὰ ἔργοι"], ok: 0 },
        {
          t: "mc",
          q: "En *τὰ ζῷα τρέχει*, ¿por qué el verbo va en singular?",
          ops: ["Porque el sujeto es un plural neutro", "Porque ζῷα es singular", "Porque es una errata"],
          ok: 0
        },
        {
          t: "mc",
          q: "En *ὁ φιλόσοφος τὸ βιβλίον γράφει*, *τὸ βιβλίον* es…",
          ops: ["el objeto directo (acusativo)", "el sujeto (nominativo)", "un genitivo"],
          ok: 0
        },
        { t: "mc", q: "*ταῖς* es el artículo en…", ops: ["dativo plural femenino", "acusativo plural femenino", "genitivo singular femenino"], ok: 0 },
        { t: "mc", q: "¿Qué forma del artículo sirve para los tres géneros?", ops: ["τῶν", "τοῖς", "τό"], ok: 0 },
        { t: "oir", x: "τὰ βιβλία", ops: ["τὰ βιβλία", "τὸ βιβλίον", "τοῖς βιβλίοις"], ok: 0 },
        { t: "oir", x: "τοῦ ἔργου", ops: ["τοῦ ἔργου", "τὸ ἔργον", "τὰ ἔργα"], ok: 0 },
        { t: "orden", es: "El hombre es la medida de todas las cosas.", x: "πάντων χρημάτων μέτρον ἐστὶν ἄνθρωπος." }
      ]
    },
    {
      id: "grc2-5",
      titulo: "Masculinos en -ης y femeninos en -ος",
      min: 35,
      intro: "Los discípulos de Sócrates son *μαθηταί*, y los atenienses, *πολῖται*: masculinos con terminaciones de la 1.ª declinación. Al revés, *ἡ ὁδός* (el camino) es femenino y se declina como *λόγος*. Los verás en cada página de Platón, y el artículo te dirá siempre el género.",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural"],
          audio: [1, 2],
          filas: [
            ["Nominativo", "ὁ μαθητής", "οἱ μαθηταί"],
            ["Vocativo", "ὦ μαθητά", "ὦ μαθηταί"],
            ["Acusativo", "τὸν μαθητήν", "τοὺς μαθητάς"],
            ["Genitivo", "τοῦ μαθητοῦ", "τῶν μαθητῶν"],
            ["Dativo", "τῷ μαθητῇ", "τοῖς μαθηταῖς"]
          ]
        },
        {
          t: "p",
          x: "Se declinan como *ψυχή* o *χώρα*, con dos diferencias: el nominativo lleva *-ς* (*μαθητής, νεανίας*) y el genitivo singular acaba en *-ου*, como en la 2.ª (*τοῦ μαθητοῦ, τοῦ νεανίου*). El artículo, claro, es masculino: *τῷ μαθητῇ, τοῖς μαθηταῖς*. Son como *poēta* en latín."
        },
        {
          t: "tabla",
          cab: ["Nominativo", "Genitivo", "Vocativo", "Español"],
          audio: [0, 1, 2],
          filas: [
            ["πολίτης", "πολίτου", "ὦ πολῖτα", "ciudadano"],
            ["σοφιστής", "σοφιστοῦ", "ὦ σοφιστά", "sofista"],
            ["ποιητής", "ποιητοῦ", "ὦ ποιητά", "poeta"],
            ["δικαστής", "δικαστοῦ", "ὦ δικαστά", "juez"],
            ["νεανίας", "νεανίου", "ὦ νεανία", "joven"],
            ["Πρωταγόρας", "Πρωταγόρου", "ὦ Πρωταγόρα", "Protágoras"]
          ]
        },
        {
          t: "nota",
          x: "Por eso en español «el poeta», «el atleta» o «el profeta» son masculinos acabados en -a: vienen, a través del latín, de *ποιητής*, *ἀθλητής* y *προφήτης*."
        },
        {
          t: "p",
          x: "**Femeninos de la 2.ª.** Unas pocas palabras en *-ος* son femeninas: se declinan como *λόγος*, pero con el artículo femenino: *ἡ ὁδός, τὴν ὁδόν, τῆς ὁδοῦ, τῇ ὁδῷ*. El adjetivo concuerda con el género, no con la terminación: *ἡ μακρὰ ὁδός*, «el largo camino». Por eso el vocabulario da siempre el artículo."
        },
        {
          t: "tabla",
          cab: ["Griego", "Español"],
          audio: [0],
          filas: [
            ["ἡ ὁδός", "el camino"],
            ["ἡ μέθοδος", "el método (de μετά + ὁδός: «el camino tras algo»)"],
            ["ἡ νόσος", "la enfermedad"],
            ["ἡ νῆσος", "la isla"],
            ["ἡ θεός", "la diosa (en la prosa ática)"]
          ]
        },
        {
          t: "ej",
          items: [
            ["οἱ μαθηταὶ τοῦ Σωκράτους", "los discípulos de Sócrates"],
            ["ὁ σοφιστὴς τοὺς νεανίας διδάσκει.", "El sofista enseña a los jóvenes."],
            ["οἱ πολῖται τοὺς νόμους γιγνώσκουσιν.", "Los ciudadanos conocen las leyes."],
            ["ὦ νεανία, τί μανθάνεις;", "Muchacho, ¿qué aprendes?"],
            ["Πρωταγόρας σοφιστής ἐστιν.", "Protágoras es sofista."],
            ["ἡ ὁδὸς εἰς τὴν ἀγοράν", "el camino al ágora"],
            ["ἡ μέθοδος τῆς ἐπιστήμης", "el método de la ciencia"],
            ["οὐχ ὁ ποιητής, ἀλλ᾽ ὁ φιλόσοφος", "no el poeta, sino el filósofo"]
          ]
        },
        {
          t: "nota",
          x: "En el último ejemplo, *ἀλλ᾽* es *ἀλλά* sin su vocal final, que se pierde ante otra vocal (es la elisión); el apóstrofo marca el corte. Y *δέ* («y, pero») va siempre en segundo lugar: *ὁ δὲ μαθητής*, «y el discípulo»."
        }
      ],
      vocab: [
        ["δικαστής, -οῦ, ὁ", "juez"],
        ["κυβερνήτης, -ου, ὁ", "piloto, timonel"],
        ["νεανίας, -ου, ὁ", "joven, muchacho"],
        ["Πρωταγόρας, -ου, ὁ", "Protágoras"],
        ["ὦ νεανία", "¡muchacho! (vocativo)"],
        ["ὁδός, -οῦ, ἡ", "camino"],
        ["μέθοδος, -ου, ἡ", "método, investigación"],
        ["νόσος, -ου, ἡ", "enfermedad"],
        ["νῆσος, -ου, ἡ", "isla"],
        ["οἱ μαθηταὶ τοῦ Σωκράτους", "los discípulos de Sócrates"]
      ],
      ejercicios: [
        { t: "mc", q: "El genitivo singular de *ὁ μαθητής* es…", ops: ["τοῦ μαθητοῦ", "τῆς μαθητῆς", "τοῦ μαθητῆς"], ok: 0 },
        { t: "mc", q: "*ἡ ὁδός* es…", ops: ["femenino, aunque acabe en -ος", "masculino", "neutro"], ok: 0 },
        {
          t: "mc",
          q: "¿Por qué «el poeta» es masculino en español, aunque acabe en -a?",
          ops: ["Porque viene de ποιητής, un masculino de la 1.ª", "Porque es una excepción moderna", "Porque es un plural"],
          ok: 0
        },
        { t: "mc", q: "Completa: *ὁ σοφιστὴς ___ νεανίας διδάσκει.*", ops: ["τοὺς", "τὰς", "τοῖς"], ok: 0 },
        { t: "mc", q: "El vocativo de *Πρωταγόρας* es…", ops: ["ὦ Πρωταγόρα", "ὦ Πρωταγόρας", "ὦ Πρωταγόρου"], ok: 0 },
        { t: "oir", x: "τοῖς πολίταις", ops: ["τοῖς πολίταις", "τοὺς πολίτας", "τοῦ πολίτου"], ok: 0 },
        { t: "oir", x: "οἱ νεανίαι", ops: ["οἱ νεανίαι", "ὦ νεανία", "τοῦ νεανίου"], ok: 0 },
        { t: "orden", es: "Los ciudadanos conocen las leyes.", x: "οἱ πολῖται τοὺς νόμους γιγνώσκουσιν." }
      ]
    },
    {
      id: "grc2-6",
      titulo: "Adjetivos: ἀγαθός, καλός, δίκαιος, σοφός",
      min: 40,
      intro: "Estos cuatro adjetivos son el vocabulario de la ética griega: *ἀγαθός* (bueno), *καλός* (bello, noble), *δίκαιος* (justo) y *σοφός* (sabio). Sus formas ya las sabes: el masculino va como *λόγος*, el femenino como *ψυχή* o *χώρα*, y el neutro como *ἔργον*. Lo nuevo es dónde se colocan.",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "Masculino", "Femenino", "Neutro"],
          audio: [1, 2, 3],
          filas: [
            ["Nom. sing.", "ἀγαθός", "ἀγαθή", "ἀγαθόν"],
            ["Ac. sing.", "ἀγαθόν", "ἀγαθήν", "ἀγαθόν"],
            ["Gen. sing.", "ἀγαθοῦ", "ἀγαθῆς", "ἀγαθοῦ"],
            ["Dat. sing.", "ἀγαθῷ", "ἀγαθῇ", "ἀγαθῷ"],
            ["Nom. pl.", "ἀγαθοί", "ἀγαθαί", "ἀγαθά"],
            ["Ac. pl.", "ἀγαθούς", "ἀγαθάς", "ἀγαθά"],
            ["Gen. pl.", "ἀγαθῶν", "ἀγαθῶν", "ἀγαθῶν"],
            ["Dat. pl.", "ἀγαθοῖς", "ἀγαθαῖς", "ἀγαθοῖς"]
          ]
        },
        {
          t: "p",
          x: "*καλός* y *σοφός* van igual; el vocativo masculino es *ἀγαθέ*, como *φίλε*. Si delante de la terminación hay *ε, ι* o *ρ*, el femenino lleva *α*, como *χώρα*: *δίκαιος, δικαία, δίκαιον*; *νέος, νέα, νέον* (joven, nuevo)."
        },
        {
          t: "p",
          x: "**Dos terminaciones.** Los adjetivos compuestos, sobre todo los que empiezan por *ἀ-* privativa (la «a-» de «amoral» o «ateo»), usan la misma forma para el masculino y el femenino: *ἄδικος* (injusto), neutro *ἄδικον*. Se dice *ὁ ἄδικος ἄνθρωπος*, pero también *ἡ ἄδικος ψυχή*. Igual van *ἀθάνατος, -ον* (inmortal) y *ἄπειρος, -ον* (ilimitado)."
        },
        {
          t: "tabla",
          cab: ["Caso", "Masc. y fem.", "Neutro"],
          audio: [1, 2],
          filas: [
            ["Nom. sing.", "ἄδικος", "ἄδικον"],
            ["Ac. sing.", "ἄδικον", "ἄδικον"],
            ["Gen. sing.", "ἀδίκου", "ἀδίκου"],
            ["Dat. sing.", "ἀδίκῳ", "ἀδίκῳ"],
            ["Nom. pl.", "ἄδικοι", "ἄδικα"],
            ["Ac. pl.", "ἀδίκους", "ἄδικα"],
            ["Gen. pl.", "ἀδίκων", "ἀδίκων"],
            ["Dat. pl.", "ἀδίκοις", "ἀδίκοις"]
          ]
        },
        {
          t: "tabla",
          cab: ["Griego", "Posición", "Español"],
          audio: [0],
          filas: [
            ["ὁ σοφὸς ἄνθρωπος", "atributiva", "el hombre sabio"],
            ["ὁ ἄνθρωπος ὁ σοφός", "atributiva", "el hombre sabio"],
            ["σοφὸς ὁ ἄνθρωπος", "predicativa", "el hombre es sabio"],
            ["ὁ ἄνθρωπος σοφός", "predicativa", "el hombre es sabio"]
          ]
        },
        {
          t: "p",
          x: "**La posición lo cambia todo.** Si el adjetivo va dentro del grupo del artículo (entre el artículo y el nombre, o detrás de un artículo repetido), es **atributivo**: «el hombre sabio». Si va fuera, es **predicativo**: «el hombre es sabio», aunque falte *ἐστί*. El griego omite a menudo el verbo «ser»."
        },
        {
          t: "p",
          x: "**El artículo convierte el adjetivo en sustantivo**, como nuestro «lo»: *τὸ ἀγαθόν* (el bien), *τὸ καλόν* (lo bello), *τὸ δίκαιον* (lo justo), *οἱ σοφοί* (los sabios), *τὰ καλά* (las cosas bellas). Platón pregunta sin descanso *τί ἐστι τὸ καλόν;*, «¿qué es lo bello?»."
        },
        {
          t: "nota",
          x: "*καλὸς κἀγαθός*, «bello y bueno», era el ideal del ateniense de bien. *κἀγαθός* es *καὶ ἀγαθός* fundidos en una palabra (crasis); la coronis sobre la α avisa de la fusión. Y con *-ως* se forman adverbios, como nuestro «-mente»: *καλῶς* (bien), *δικαίως* (con justicia), *ἀδίκως* (injustamente)."
        },
        {
          t: "ej",
          items: [
            ["ὁ δίκαιος ἄνθρωπος τὸ ἀγαθὸν ζητεῖ.", "El hombre justo busca el bien."],
            ["σοφὸς ὁ διδάσκαλος.", "El maestro es sabio."],
            ["ἡ δικαία ψυχή", "el alma justa"],
            ["ἡ ἄδικος ψυχή", "el alma injusta"],
            ["ἡ ψυχὴ ἀθάνατος.", "El alma es inmortal."],
            ["οἱ ἄδικοι κακοί εἰσιν.", "Los injustos son malos."],
            ["τὸ ἄπειρον", "lo ilimitado: el principio de todo, según Anaximandro"],
            ["χαλεπὰ τὰ καλά.", "Lo bello es difícil. (proverbio que cita Platón)"]
          ]
        }
      ],
      vocab: [
        ["ἄπειρος, -ον", "ilimitado, infinito"],
        ["διδακτός, -ή, -όν", "que se puede enseñar"],
        ["καλὸς κἀγαθός", "bello y bueno: el hombre de bien"],
        ["δικαίως", "con justicia, justamente"]
      ],
      ejercicios: [
        { t: "mc", q: "*ὁ ἄνθρωπος σοφός* significa…", ops: ["El hombre es sabio.", "el hombre sabio", "el sabio del hombre"], ok: 0 },
        { t: "mc", q: "*ὁ σοφὸς ἄνθρωπος* significa…", ops: ["el hombre sabio", "El hombre es sabio.", "los hombres sabios"], ok: 0 },
        { t: "mc", q: "Concuerda: *ἡ ψυχὴ ἡ ___* (justa)", ops: ["δικαία", "δίκαιος", "δίκαιον"], ok: 0 },
        { t: "mc", q: "Concuerda: *ἡ ___ ψυχή* (injusta)", ops: ["ἄδικος", "ἀδίκη", "ἄδικον"], ok: 0 },
        { t: "mc", q: "*τὸ καλόν* significa…", ops: ["lo bello", "el hombre bello", "bellamente"], ok: 0 },
        { t: "oir", x: "ἀγαθαί", ops: ["ἀγαθαί", "ἀγαθοί", "ἀγαθά"], ok: 0 },
        { t: "orden", es: "El hombre justo busca el bien.", x: "ὁ δίκαιος ἄνθρωπος τὸ ἀγαθὸν ζητεῖ." },
        { t: "orden", es: "Los injustos son malos.", x: "οἱ ἄδικοι κακοί εἰσιν." }
      ]
    },
    {
      id: "grc2-7",
      titulo: "Para qué sirve cada caso",
      min: 40,
      intro: "Ya conoces las formas; hoy, lo que significan. Con unos pocos usos de cada caso entiendes frases enteras de Platón y Aristóteles, y verás cómo el genitivo y el dativo griegos se reparten el trabajo del ablativo latino.",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "Uso", "Ejemplo", "Español"],
          audio: [2],
          filas: [
            ["Nominativo", "sujeto y atributo", "ἡ ἀρετὴ ἐπιστήμη.", "La virtud es conocimiento."],
            ["Vocativo", "llamar a alguien", "ὦ Σώκρατες", "¡Sócrates!"],
            ["Acusativo", "objeto directo", "τὴν ἀλήθειαν ζητεῖ.", "Busca la verdad."],
            ["Acusativo", "adónde (con εἰς, πρός)", "εἰς τὴν ἀγοράν", "al ágora"],
            ["Acusativo", "«en cuanto a»", "ἀγαθὸς τὴν ψυχήν", "bueno de alma"],
            ["Genitivo", "«de»: posesión", "ὁ τοῦ θεοῦ νόμος", "la ley del dios"],
            ["Genitivo", "el todo del que se toma una parte", "οἱ σοφοὶ τῶν ἀνθρώπων", "los sabios de entre los hombres"],
            ["Genitivo", "de dónde (con ἐκ, ἀπό)", "ἐκ τῆς οἰκίας", "de la casa"],
            ["Dativo", "a quién, para quién", "τῷ φίλῳ λέγει.", "Le habla al amigo."],
            ["Dativo", "con qué: el instrumento", "λόγοις πείθει.", "Convence con palabras."],
            ["Dativo", "dónde (con ἐν)", "ἐν τῇ ἀγορᾷ", "en el ágora"]
          ]
        },
        {
          t: "p",
          x: "**Sujeto y atributo.** En *ἡ ἀρετὴ ἐπιστήμη* los dos nombres van en nominativo. ¿Cuál es el sujeto? El que lleva artículo: «la virtud es conocimiento», no «el conocimiento es virtud»."
        },
        {
          t: "p",
          x: "**El genitivo en sándwich.** El griego mete a menudo el genitivo entre el artículo y su nombre, en posición atributiva, como un adjetivo: *ὁ τοῦ θεοῦ νόμος*, «la ley del dios». Lee primero el marco (*ὁ … νόμος*) y luego el relleno (*τοῦ θεοῦ*)."
        },
        {
          t: "nota",
          x: "Si sabes latín: el griego no tiene ablativo y reparte su trabajo. La separación y el origen van en genitivo (*ἐκ τῆς οἰκίας* = *ē domō*); el instrumento, el lugar y el tiempo, en dativo (*λόγοις* = *verbīs*, *ἐν τῇ ἀγορᾷ* = *in forō*). El dativo de posesión es como el latino: *ἔστι τῷ ἀνθρώπῳ ψυχή* = *est hominī anima*, «el hombre tiene alma»."
        },
        {
          t: "p",
          x: "**Verbos con su propio caso.** *ἀκούω* lleva genitivo de la persona a la que oyes y acusativo de lo que oyes: *τοῦ διδασκάλου ἀκούω* (oigo al maestro), *τοὺς λόγους ἀκούω* (oigo los discursos). *πιστεύω* (confío, creo) lleva dativo, como «creer a alguien»: *τῷ θεῷ πιστεύω*. *ἄρχω* (gobierno, mando) lleva genitivo: *ἄρχει τῶν πολιτῶν* (gobierna a los ciudadanos)."
        },
        {
          t: "nota",
          x: "El tiempo también va por casos: acusativo para lo que dura (*πολὺν χρόνον*, «durante mucho tiempo»), dativo para cuándo (*τῇ ὑστεραίᾳ*, «al día siguiente») y genitivo para dentro de qué tiempo (*ἡμέρας*, «de día»)."
        },
        {
          t: "ej",
          items: [
            ["λόγον δὲ μόνον ἄνθρωπος ἔχει τῶν ζῴων.", "Solo el hombre, de entre los animales, tiene palabra. (Aristóteles, Política 1253a)"],
            ["τοῦ διδασκάλου ἀκούομεν.", "Escuchamos al maestro."],
            ["τῷ θεῷ πιστεύω.", "Confío en el dios."],
            ["ὁ σοφιστὴς λόγοις τοὺς νεανίας πείθει.", "El sofista convence a los jóvenes con palabras."],
            ["ἔστι τῷ ἀνθρώπῳ ψυχή.", "El hombre tiene alma."],
            ["ὦ Σώκρατες, τί λέγεις;", "Sócrates, ¿qué dices?"],
            ["οἱ πολλοὶ τὸν πλοῦτον θαυμάζουσιν.", "La mayoría admira la riqueza."]
          ]
        }
      ],
      vocab: [
        ["πείθω", "convenzo, persuado"],
        ["πιστεύω", "confío en, creo a (+ dativo)"],
        ["ἄρχω", "gobierno, mando (+ genitivo); empiezo"],
        ["θαυμάζω", "admiro; me asombro"],
        ["κολάζω", "castigo"],
        ["σῴζω", "salvo, protejo"],
        ["ἀκούω τοῦ διδασκάλου", "escucho al maestro (genitivo de persona)"],
        ["ὁ τοῦ θεοῦ νόμος", "la ley del dios"],
        ["οἱ σοφοὶ τῶν ἀνθρώπων", "los sabios de entre los hombres"],
        ["λόγοις πείθει.", "convence con palabras"],
        ["ἀγαθὸς τὴν ψυχήν", "bueno de alma"],
        ["ἔστι τῷ ἀνθρώπῳ ψυχή.", "el hombre tiene alma"],
        ["μόνος, -η, -ον", "solo, único"],
        ["πολλοί, -αί, -ά", "muchos"],
        ["οἱ πολλοί", "la mayoría, la gente"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "En *τοῦ διδασκάλου ἀκούομεν*, ¿por qué va en genitivo *τοῦ διδασκάλου*?",
          ops: ["Porque ἀκούω lleva genitivo de la persona que se oye", "Porque indica posesión", "Porque está en plural"],
          ok: 0
        },
        { t: "mc", q: "*λόγοις πείθει* significa…", ops: ["convence con palabras", "convence a las palabras", "las palabras convencen"], ok: 0 },
        {
          t: "mc",
          q: "En *ἡ ἀρετὴ ἐπιστήμη*, ¿cuál es el sujeto?",
          ops: ["ἡ ἀρετή, porque lleva artículo", "ἐπιστήμη, porque va al final", "Los dos"],
          ok: 0
        },
        { t: "mc", q: "Lo que en latín va en ablativo de separación (*ē domō*), en griego va en…", ops: ["genitivo", "dativo", "acusativo"], ok: 0 },
        { t: "mc", q: "*ἀγαθὸς τὴν ψυχήν* significa…", ops: ["bueno de alma", "el alma buena", "bueno para el alma"], ok: 0 },
        { t: "mc", q: "*ἔστι τῷ ἀνθρώπῳ ψυχή* significa…", ops: ["El hombre tiene alma.", "El alma es un hombre.", "El hombre está en el alma."], ok: 0 },
        { t: "oir", x: "ὦ Σώκρατες", ops: ["ὦ Σώκρατες", "ὁ Σωκράτης", "τοῦ Σωκράτους"], ok: 0 },
        { t: "orden", es: "Los jóvenes escuchan al maestro.", x: "οἱ νεανίαι τοῦ διδασκάλου ἀκούουσιν." }
      ]
    },
    {
      id: "grc2-8",
      titulo: "Las preposiciones",
      min: 40,
      intro: "Con ocho preposiciones lees ya los títulos de la filosofía antigua: *Περὶ ψυχῆς* (Sobre el alma, de Aristóteles) o *Περὶ φύσεως* (Sobre la naturaleza, de los presocráticos). Cada preposición pide un caso, y algunas cambian de sentido según el caso.",
      bloques: [
        {
          t: "p",
          x: "Una pista que funciona casi siempre: el **genitivo** dice de dónde se viene; el **dativo**, dónde se está; el **acusativo**, adónde se va. Son las respuestas a *πόθεν;* (¿de dónde?), *ποῦ;* (¿dónde?) y *ποῖ;* (¿adónde?)."
        },
        {
          t: "tabla",
          cab: ["Preposición", "Caso", "Significa", "Ejemplo"],
          audio: [0, 3],
          filas: [
            ["ἐν", "dativo", "en (sin movimiento)", "ἐν τῇ ἀγορᾷ"],
            ["εἰς", "acusativo", "a, hacia, dentro de", "εἰς τὴν ἀγοράν"],
            ["ἐκ", "genitivo", "de, desde dentro", "ἐκ τῆς οἰκίας"],
            ["ἀπό", "genitivo", "de, desde (lejos de)", "ἀπὸ τοῦ γυμνασίου"]
          ]
        },
        {
          t: "nota",
          x: "*ἐκ* se escribe *ἐξ* ante vocal: *ἐξ ἀγορᾶς*. Si sabes latín, es fácil: *ἐν* + dativo = *in* + ablativo; *εἰς* + acusativo = *in* + acusativo; *ἐκ* = *ē, ex*; *ἀπό* = *ā, ab*. *ἐν, εἰς* y *ἐκ* no llevan acento: son proclíticos, como el artículo *ὁ*."
        },
        {
          t: "tabla",
          cab: ["Preposición", "+ genitivo", "+ dativo", "+ acusativo"],
          audio: [0],
          filas: [
            ["πρός", "de parte de; ¡por…!", "junto a", "hacia, a; contra"],
            ["περί", "acerca de, sobre", "—", "alrededor de"],
            ["διά", "a través de; por medio de", "—", "a causa de"],
            ["μετά", "con (en compañía de)", "—", "después de"]
          ]
        },
        {
          t: "ej",
          items: [
            ["ποῦ ἐστιν ὁ Σωκράτης; — ἐν τῇ ἀγορᾷ.", "¿Dónde está Sócrates? — En el ágora."],
            ["πρὸς τὸν διδάσκαλον λέγει.", "Le habla al maestro."],
            ["πρὸς θεῶν", "¡por los dioses!"],
            ["περὶ ψυχῆς", "Sobre el alma (título de un libro de Aristóteles)"],
            ["περὶ τὴν ἀγοράν", "alrededor del ágora"],
            ["διὰ τῆς ἀγορᾶς βαδίζει.", "Camina a través del ágora."],
            ["διὰ τὴν ἀρετήν", "a causa de la virtud"],
            ["μετὰ τῶν φίλων", "con los amigos"],
            ["μετὰ τὰ φυσικά", "después de la física"],
            ["ὁ Πλάτων ἐν τῇ Ἀκαδημείᾳ διδάσκει.", "Platón enseña en la Academia."]
          ]
        },
        {
          t: "nota",
          x: "**Elisión.** Las preposiciones que acaban en vocal la pierden ante otra vocal, y en su lugar se escribe un apóstrofo: *ἀπ᾽ ἀρχῆς* (desde el principio), *μετ᾽ ἀρετῆς* (con virtud). Ante espíritu áspero, además, la consonante se aspira: *μεθ᾽ ἡμέραν* (de día). *περί* no se elide nunca: *περὶ ἀρετῆς*."
        },
        {
          t: "nota",
          x: "*μετὰ τὰ φυσικά*: así se llamaron los libros de Aristóteles que sus editores colocaron «después de los de física», y de ahí viene «metafísica». En la semana 8 leerás su primera frase: *Πάντες ἄνθρωποι τοῦ εἰδέναι ὀρέγονται φύσει*."
        }
      ],
      vocab: [
        ["ἐν", "en (+ dativo)"],
        ["εἰς", "a, hacia, dentro de (+ acusativo)"],
        ["ἐκ, ἐξ", "de, desde dentro (+ genitivo); ἐξ ante vocal"],
        ["ἀπό", "de, desde (+ genitivo)"],
        ["πρός", "hacia, a (+ acusativo); junto a (+ dativo)"],
        ["περί", "acerca de (+ genitivo); alrededor de (+ acusativo)"],
        ["διά", "a través de (+ genitivo); a causa de (+ acusativo)"],
        ["μετά", "con (+ genitivo); después de (+ acusativo)"],
        ["ποῖ;", "¿adónde?"],
        ["πόθεν;", "¿de dónde?"],
        ["περὶ ψυχῆς", "sobre el alma"],
        ["πρὸς θεῶν", "¡por los dioses!"],
        ["ἀπ᾽ ἀρχῆς", "desde el principio"],
        ["μετὰ τὰ φυσικά", "después de la física (de ahí «metafísica»)"],
        ["ἡ Ἀκαδήμεια", "la Academia"]
      ],
      ejercicios: [
        { t: "mc", q: "*ἐν τῇ ἀγορᾷ* significa…", ops: ["en el ágora", "al ágora", "desde el ágora"], ok: 0 },
        { t: "mc", q: "¿Qué caso lleva *εἰς*?", ops: ["acusativo", "dativo", "genitivo"], ok: 0 },
        { t: "mc", q: "*μετὰ τῶν φίλων* significa…", ops: ["con los amigos", "después de los amigos", "hacia los amigos"], ok: 0 },
        { t: "mc", q: "*διὰ τὴν ἀρετήν* significa…", ops: ["a causa de la virtud", "a través de la virtud", "con la virtud"], ok: 0 },
        {
          t: "mc",
          q: "La palabra «metafísica» viene de…",
          ops: ["μετὰ τὰ φυσικά, «después de la física»", "μετὰ τῶν φυσικῶν, «con los físicos»", "περὶ φύσεως, «sobre la naturaleza»"],
          ok: 0
        },
        { t: "oir", x: "εἰς τὴν οἰκίαν", ops: ["εἰς τὴν οἰκίαν", "ἐκ τῆς οἰκίας", "ἐν τῇ οἰκίᾳ"], ok: 0 },
        { t: "oir", x: "περὶ ἀρετῆς", ops: ["περὶ ἀρετῆς", "πρὸς ἀρετήν", "μετ᾽ ἀρετῆς"], ok: 0 },
        { t: "orden", es: "Sócrates va con los amigos al ágora.", x: "Σωκράτης μετὰ τῶν φίλων εἰς τὴν ἀγορὰν βαδίζει." }
      ]
    }
  ],
  lecturas: [
    {
      id: "grc2-r1",
      titulo: "Σωκράτης ἐν τῇ ἀγορᾷ",
      nivel: "Inicial",
      texto: "Σωκράτης φιλόσοφός ἐστιν. πρῲ ἐκ τῆς οἰκίας εἰς τὴν ἀγορὰν βαδίζει. ἐν τῇ ἀγορᾷ πολλοὶ ἄνθρωποι ἀγοράζουσι καὶ λέγουσιν. Σωκράτης οὐκ ἀγοράζει, ἀλλὰ τῶν ἀνθρώπων ἀκούει καὶ τὴν ἀλήθειαν ζητεῖ.\n\nἘν τῇ ἀγορᾷ καὶ Λύσις ἐστί, νεανίας καλὸς κἀγαθός. Σωκράτης· «ὦ Λύσι, τί ἐστι τὸ ἀγαθόν;»\nΛύσις· «ὁ πλοῦτος, ὦ Σώκρατες.»\nΣωκράτης· «ἀλλὰ τὸν πλοῦτον ἔχουσι καὶ οἱ ἄδικοι. ἆρα ἀγαθοί εἰσιν οἱ ἄδικοι;»\nΛύσις· «οὐ δῆτα· κακοὶ οἱ ἄδικοι.»\nΣωκράτης· «οὐκ ἄρα ὁ πλοῦτος τὸ ἀγαθόν ἐστιν.»\n\nΚαὶ νῦν Σωκράτης καὶ Λύσις μετὰ τῶν φίλων τὸ ἀγαθὸν ζητοῦσιν.",
      traduccion: "Sócrates es filósofo. Temprano va de su casa al ágora. En el ágora mucha gente compra y conversa. Sócrates no compra: escucha a la gente y busca la verdad.\n\nEn el ágora está también Lisis, un joven bello y bueno. Sócrates: «Lisis, ¿qué es el bien?».\nLisis: «La riqueza, Sócrates».\nSócrates: «Pero la riqueza la tienen también los injustos. ¿Son buenos los injustos?».\nLisis: «Claro que no: los injustos son malos».\nSócrates: «Entonces la riqueza no es el bien».\n\nY ahora Sócrates y Lisis buscan el bien con sus amigos.",
      notas: "*Λύσις* da nombre a un diálogo de Platón sobre la amistad, donde aparece como un muchacho bello y bueno. Fíjate en *τῶν ἀνθρώπων ἀκούει*: *ἀκούω* lleva genitivo de la persona a la que se escucha. En *κακοὶ οἱ ἄδικοι* el adjetivo va fuera del grupo del artículo, así que es predicativo: «los injustos son malos». Y no confundas *ἆρα*, que abre una pregunta, con *ἄρα*, «entonces», que saca una conclusión.",
      glosa: {
        "σωκράτης": "Sócrates (nominativo; es de la 3.ª declinación, semana 4)",
        "φιλόσοφός": "filósofo (lleva un segundo acento por el enclítico ἐστιν)",
        "ἐστιν": "es (enclítico: se apoya en la palabra anterior)",
        "πρῲ": "temprano, de mañana",
        "ἐκ": "de, desde (+ genitivo)",
        "τῆς": "la (genitivo femenino del artículo)",
        "οἰκίας": "casa (genitivo de «οἰκία»)",
        "εἰς": "a, hacia (+ acusativo)",
        "τὴν": "la (acusativo femenino del artículo)",
        "ἀγορὰν": "el ágora, la plaza (acusativo de «ἀγορά»)",
        "βαδίζει": "va, camina",
        "ἐν": "en (+ dativo)",
        "τῇ": "la (dativo femenino del artículo)",
        "ἀγορᾷ": "ágora, plaza (dativo de «ἀγορά»)",
        "πολλοὶ": "muchos (nominativo plural)",
        "ἄνθρωποι": "personas, hombres (nominativo plural de «ἄνθρωπος»)",
        "ἀγοράζουσι": "compran, hacen sus compras en el ágora (de «ἀγοράζω»)",
        "καὶ": "y; también",
        "λέγουσιν": "hablan, conversan",
        "οὐκ": "no (forma de «οὐ» ante espíritu suave)",
        "ἀγοράζει": "compra",
        "ἀλλὰ": "sino, pero",
        "τῶν": "los (genitivo plural del artículo)",
        "ἀνθρώπων": "la gente (genitivo plural: «ἀκούω» lleva genitivo de persona)",
        "ἀκούει": "escucha",
        "ἀλήθειαν": "verdad (acusativo de «ἀλήθεια»)",
        "ζητεῖ": "busca (de «ζητέω»: verbo contracto, semana 6)",
        "λύσις": "Lisis, un joven ateniense (3.ª declinación)",
        "ἐστί": "está (enclítico; tras «Λύσις» conserva su acento)",
        "νεανίας": "joven, muchacho (masculino de la 1.ª)",
        "καλὸς": "bello, noble",
        "κἀγαθός": "y bueno (= καὶ ἀγαθός; «καλὸς κἀγαθός», hombre de bien)",
        "ὦ": "¡oh! (introduce el vocativo; no se traduce)",
        "λύσι": "Lisis (vocativo de «Λύσις»)",
        "τί": "qué (interrogativo)",
        "ἐστι": "es (enclítico)",
        "τὸ": "el, lo (neutro del artículo)",
        "ἀγαθόν": "bueno; «τὸ ἀγαθόν», el bien",
        "ὁ": "el (nominativo masculino del artículo)",
        "πλοῦτος": "riqueza",
        "σώκρατες": "Sócrates (vocativo de «Σωκράτης»; el acento retrocede)",
        "τὸν": "el (acusativo masculino del artículo)",
        "πλοῦτον": "riqueza (acusativo)",
        "ἔχουσι": "tienen",
        "οἱ": "los (nominativo masculino plural del artículo)",
        "ἄδικοι": "injustos (nominativo plural de «ἄδικος»)",
        "ἆρα": "¿acaso…? (abre una pregunta de sí o no)",
        "ἀγαθοί": "buenos (nominativo plural)",
        "εἰσιν": "son (enclítico)",
        "οὐ": "no",
        "δῆτα": "desde luego («οὐ δῆτα», claro que no)",
        "κακοὶ": "malos (predicativo: «son malos»)",
        "ἄρα": "entonces, por tanto (saca una conclusión; no confundir con «ἆρα»)",
        "νῦν": "ahora",
        "μετὰ": "con (+ genitivo)",
        "φίλων": "amigos (genitivo plural de «φίλος»)",
        "ἀγαθὸν": "el bien («τὸ ἀγαθόν»; grave porque sigue otra palabra)",
        "ζητοῦσιν": "buscan (de «ζητέω»: verbo contracto, semana 6)"
      },
      preguntas: [
        { q: "¿Qué hace Sócrates en el ágora?", ops: ["Escucha a la gente y busca la verdad", "Compra y vende", "Enseña a cambio de dinero"], ok: 0 },
        { q: "Según Lisis, ¿qué es el bien?", ops: ["La riqueza", "La verdad", "La virtud"], ok: 0 },
        {
          q: "¿Por qué la riqueza no es el bien, según Sócrates?",
          ops: ["Porque también la tienen los injustos, que son malos", "Porque Lisis no es rico", "Porque en el ágora no hay dinero"],
          ok: 0
        }
      ]
    },
    {
      id: "grc2-r2",
      titulo: "Οἱ μαθηταί",
      nivel: "Inicial",
      texto: "Πλάτων καὶ Ξενοφῶν καὶ Φαίδων μαθηταί εἰσι τοῦ Σωκράτους. πολλάκις μετὰ τοῦ Σωκράτους εἰς τὸ Λύκειον βαδίζουσιν. ἐν τῷ Λυκείῳ Σωκράτης περὶ τῆς ἀρετῆς λέγει, καὶ οἱ νεανίαι ἀκούουσιν.\n\nΠρωταγόρας σοφιστής ἐστιν. τοὺς νεανίας τὴν ἀρετὴν διδάσκει καὶ πολὺ ἀργύριον λαμβάνει. Σωκράτης δὲ λέγει· «οὐ διδάσκαλός εἰμι, οὐδὲ ἀργύριον λαμβάνω. οὐ γιγνώσκω τί ἐστιν ἀρετή.»\n\nἈλλ᾽ οἱ μαθηταὶ μετὰ τοῦ Σωκράτους τὴν ἀλήθειαν ζητοῦσι καὶ πολλὰ μανθάνουσιν. Πλάτων καὶ Ξενοφῶν βιβλία περὶ τοῦ Σωκράτους γράφουσι, καὶ ἐν τοῖς βιβλίοις Σωκράτης ἔτι λέγει.",
      traduccion: "Platón, Jenofonte y Fedón son discípulos de Sócrates. A menudo van con Sócrates al Liceo. En el Liceo, Sócrates habla sobre la virtud, y los jóvenes escuchan.\n\nProtágoras es sofista. Enseña la virtud a los jóvenes y cobra mucho dinero. Sócrates, en cambio, dice: «No soy maestro ni cobro dinero. No sé qué es la virtud».\n\nPero los discípulos buscan la verdad con Sócrates y aprenden muchas cosas. Platón y Jenofonte escriben libros sobre Sócrates, y en esos libros Sócrates todavía habla.",
      notas: "En la *Apología* Sócrates dice que nunca fue maestro de nadie ni cobró por conversar; los sofistas como Protágoras, en cambio, enseñaban a cambio de dinero. *διδάσκω* lleva dos acusativos: a quién (*τοὺς νεανίας*) y qué (*τὴν ἀρετήν*). El Liceo era entonces un gimnasio a las afueras de Atenas, donde Sócrates solía conversar con los jóvenes.",
      glosa: {
        "πλάτων": "Platón",
        "καὶ": "y",
        "ξενοφῶν": "Jenofonte",
        "φαίδων": "Fedón",
        "μαθηταί": "discípulos (nominativo plural de «μαθητής»)",
        "εἰσι": "son (enclítico)",
        "τοῦ": "el (genitivo masculino del artículo)",
        "σωκράτους": "de Sócrates (genitivo de «Σωκράτης», 3.ª declinación)",
        "πολλάκις": "a menudo, muchas veces",
        "μετὰ": "con (+ genitivo)",
        "εἰς": "a, hacia (+ acusativo)",
        "τὸ": "el (neutro del artículo)",
        "λύκειον": "el Liceo, un gimnasio de Atenas (acusativo)",
        "βαδίζουσιν": "van, caminan",
        "ἐν": "en (+ dativo)",
        "τῷ": "el (dativo masculino o neutro del artículo)",
        "λυκείῳ": "Liceo (dativo)",
        "σωκράτης": "Sócrates",
        "περὶ": "acerca de, sobre (+ genitivo)",
        "τῆς": "la (genitivo femenino del artículo)",
        "ἀρετῆς": "virtud (genitivo de «ἀρετή»)",
        "λέγει": "habla, dice",
        "οἱ": "los",
        "νεανίαι": "jóvenes (nominativo plural de «νεανίας»)",
        "ἀκούουσιν": "escuchan",
        "πρωταγόρας": "Protágoras, el sofista",
        "σοφιστής": "sofista: maestro de retórica que cobra por enseñar",
        "ἐστιν": "es (enclítico)",
        "τοὺς": "los (acusativo masculino plural del artículo)",
        "νεανίας": "a los jóvenes (acusativo plural de «νεανίας»)",
        "τὴν": "la (acusativo femenino del artículo)",
        "ἀρετὴν": "virtud (acusativo: «διδάσκω» lleva dos acusativos, a quién y qué)",
        "διδάσκει": "enseña",
        "πολὺ": "mucho (neutro de «πολύς»)",
        "ἀργύριον": "dinero (acusativo de «ἀργύριον, -ου, τό»)",
        "λαμβάνει": "toma, cobra",
        "δὲ": "en cambio, pero (va en segundo lugar)",
        "οὐ": "no",
        "διδάσκαλός": "maestro (lleva un segundo acento por el enclítico εἰμι)",
        "εἰμι": "soy (enclítico)",
        "οὐδὲ": "ni, y tampoco",
        "λαμβάνω": "tomo, cobro",
        "γιγνώσκω": "sé, conozco",
        "τί": "qué",
        "ἀρετή": "virtud",
        "ἀλλ": "pero (= ἀλλά, con la vocal final elidida ante vocal)",
        "μαθηταὶ": "discípulos",
        "ἀλήθειαν": "verdad (acusativo de «ἀλήθεια»)",
        "ζητοῦσι": "buscan (de «ζητέω»: verbo contracto, semana 6)",
        "πολλὰ": "muchas cosas (neutro plural de «πολύς»)",
        "μανθάνουσιν": "aprenden",
        "βιβλία": "libros (acusativo plural de «βιβλίον»)",
        "γράφουσι": "escriben",
        "τοῖς": "los (dativo plural del artículo)",
        "βιβλίοις": "libros (dativo plural)",
        "ἔτι": "todavía, aún"
      },
      preguntas: [
        { q: "¿Adónde van a menudo los discípulos con Sócrates?", ops: ["Al Liceo", "Al ágora", "A casa de Protágoras"], ok: 0 },
        {
          q: "¿En qué se diferencia Protágoras de Sócrates?",
          ops: ["Protágoras cobra por enseñar; Sócrates no", "Protágoras no tiene discípulos", "Sócrates escribe libros y Protágoras no"],
          ok: 0
        },
        { q: "¿Dónde «habla todavía» Sócrates?", ops: ["En los libros de Platón y Jenofonte", "En el Liceo", "En la asamblea"], ok: 0 }
      ]
    },
    {
      id: "grc2-r3",
      titulo: "Τί ἐστιν ἀρετή;",
      nivel: "Intermedio",
      texto: "ΣΩ. ὦ Φαίδων, τί ἐστιν ἀρετή;\nΦΑΙΔ. ἡ ἀρετὴ ἐπιστήμη ἐστίν, ὦ Σώκρατες.\nΣΩ. καλῶς λέγεις. ὁ ἀγαθὸς ἰατρὸς τὴν ἰατρικὴν γιγνώσκει, καὶ ὁ ἀγαθὸς κυβερνήτης τὴν θάλατταν· ὁ δὲ ἀγαθὸς ἄνθρωπος τί γιγνώσκει;\nΦΑΙΔ. τὸ ἀγαθὸν καὶ τὸ δίκαιον.\nΣΩ. ὁ δὲ ἄδικος τὸ δίκαιον οὐ γιγνώσκει;\nΦΑΙΔ. οὐ γιγνώσκει.\nΣΩ. εἰ δὲ ἡ ἀρετὴ ἐπιστήμη ἐστί, διδακτή ἐστιν, ὥσπερ ἡ μουσική. ποῦ εἰσιν οἱ διδάσκαλοι τῆς ἀρετῆς;\nΦΑΙΔ. οἱ σοφισταί· Πρωταγόρας τοὺς νέους τὴν ἀρετὴν διδάσκει.\nΣΩ. ἆρα ἀγαθοί εἰσιν οἱ τοῦ Πρωταγόρου μαθηταί;\nΦΑΙΔ. οὐ γιγνώσκω, ὦ Σώκρατες.\nΣΩ. χαλεπὰ τὰ καλά, ὦ Φαίδων.",
      traduccion: "SÓC. Fedón, ¿qué es la virtud?\nFED. La virtud es conocimiento, Sócrates.\nSÓC. Bien dicho. El buen médico conoce la medicina, y el buen piloto, el mar; y el hombre bueno, ¿qué conoce?\nFED. El bien y lo justo.\nSÓC. ¿Y el injusto no conoce lo justo?\nFED. No lo conoce.\nSÓC. Pero si la virtud es conocimiento, se puede enseñar, como la música. ¿Dónde están los maestros de la virtud?\nFED. Los sofistas: Protágoras enseña la virtud a los jóvenes.\nSÓC. ¿Y son buenos los discípulos de Protágoras?\nFED. No lo sé, Sócrates.\nSÓC. Lo bello es difícil, Fedón.",
      notas: "En las ediciones de Platón el que habla va abreviado en mayúsculas: *ΣΩ.* es Sócrates y *ΦΑΙΔ.*, Fedón. En *ἡ ἀρετὴ ἐπιστήμη ἐστίν* el sujeto lleva artículo y el predicado no. Para responder «sí» o «no», el griego suele repetir el verbo: *οὐ γιγνώσκει*. Si la virtud se puede enseñar es la pregunta del *Menón*, y *χαλεπὰ τὰ καλά* es un proverbio que Platón cita en varios diálogos.",
      glosa: {
        "σω": "Sócrates (abreviatura del que habla, como en las ediciones de Platón)",
        "ὦ": "¡oh! (introduce el vocativo; no se traduce)",
        "φαίδων": "Fedón (vocativo, igual que el nominativo)",
        "τί": "qué",
        "ἐστιν": "es (enclítico)",
        "ἀρετή": "virtud",
        "φαιδ": "Fedón (abreviatura del que habla)",
        "ἡ": "la (nominativo femenino del artículo)",
        "ἀρετὴ": "virtud (sujeto: lleva artículo)",
        "ἐπιστήμη": "conocimiento, ciencia (predicado: va sin artículo)",
        "ἐστίν": "es (enclítico; tras «ἐπιστήμη» conserva su acento)",
        "σώκρατες": "Sócrates (vocativo)",
        "καλῶς": "bien (adverbio de «καλός»)",
        "λέγεις": "dices",
        "ὁ": "el (nominativo masculino del artículo)",
        "ἀγαθὸς": "buen, bueno",
        "ἰατρὸς": "médico",
        "τὴν": "la (acusativo femenino del artículo)",
        "ἰατρικὴν": "la medicina (acusativo de «ἰατρική»; se sobrentiende «τέχνη»)",
        "γιγνώσκει": "conoce",
        "καὶ": "y",
        "κυβερνήτης": "piloto, timonel (masculino de la 1.ª)",
        "θάλατταν": "el mar (acusativo de «θάλαττα»)",
        "δὲ": "y, pero (va en segundo lugar)",
        "ἄνθρωπος": "hombre, ser humano",
        "τὸ": "lo (neutro del artículo)",
        "ἀγαθὸν": "bueno; «τὸ ἀγαθόν», el bien",
        "δίκαιον": "justo; «τὸ δίκαιον», lo justo",
        "ἄδικος": "injusto; «ὁ ἄδικος», el injusto",
        "οὐ": "no",
        "εἰ": "si (condicional)",
        "ἐστί": "es (enclítico)",
        "διδακτή": "enseñable, que se puede enseñar (de «διδάσκω»)",
        "ὥσπερ": "como, igual que",
        "μουσική": "la música (se sobrentiende «τέχνη»)",
        "ποῦ": "¿dónde?",
        "εἰσιν": "están, son (enclítico)",
        "οἱ": "los",
        "διδάσκαλοι": "maestros",
        "τῆς": "de la (genitivo femenino del artículo)",
        "ἀρετῆς": "virtud (genitivo)",
        "σοφισταί": "los sofistas",
        "πρωταγόρας": "Protágoras",
        "τοὺς": "los (acusativo masculino plural del artículo)",
        "νέους": "jóvenes (acusativo plural de «νέος»)",
        "ἀρετὴν": "virtud (acusativo)",
        "διδάσκει": "enseña",
        "ἆρα": "¿acaso…? (abre una pregunta de sí o no)",
        "ἀγαθοί": "buenos",
        "τοῦ": "del (genitivo masculino del artículo)",
        "πρωταγόρου": "de Protágoras (genitivo, entre el artículo y el nombre)",
        "μαθηταί": "discípulos",
        "γιγνώσκω": "sé",
        "χαλεπὰ": "difíciles (predicativo: «son difíciles»)",
        "τὰ": "los, las (neutro plural del artículo)",
        "καλά": "cosas bellas; «τὰ καλά», lo bello"
      },
      preguntas: [
        { q: "Según Fedón, ¿qué es la virtud?", ops: ["Conocimiento", "Riqueza", "Música"], ok: 0 },
        { q: "¿Qué conoce el hombre bueno?", ops: ["El bien y lo justo", "El mar", "La medicina"], ok: 0 },
        { q: "Si la virtud es conocimiento, ¿qué se sigue?", ops: ["Que se puede enseñar", "Que nadie la tiene", "Que solo la tienen los médicos"], ok: 0 }
      ]
    },
    {
      id: "grc2-r4",
      titulo: "Ἡ πόλις καὶ οἱ νόμοι",
      nivel: "Intermedio",
      texto: "Ἡ τῶν Ἀθηναίων πόλις καλή ἐστι καὶ πολλοὺς πολίτας ἔχει. ἐν ταῖς Ἀθήναις ὁ δῆμος ἄρχει· ἐν τῇ ἐκκλησίᾳ οἱ πολῖται περὶ τοῦ πολέμου καὶ περὶ τῆς εἰρήνης λέγουσι καὶ νόμους γράφουσιν. ἐν δὲ τοῖς δικαστηρίοις οἱ δικασταὶ τοὺς ἀδίκους κολάζουσιν. οἱ νόμοι τοὺς πολίτας σῴζουσιν.\n\nἈλλὰ νῦν Σωκράτης ἐν τῷ δεσμωτηρίῳ ἐστίν. οἱ δικασταὶ ἀδίκως τὸν Σωκράτη κολάζουσι, καὶ Σωκράτης τὸν θάνατον μένει.\n\nΚρίτων, ὁ φίλος, πρῲ εἰς τὸ δεσμωτήριον βαδίζει καὶ λέγει· «ὦ Σώκρατες, οἱ φίλοι πολὺ ἀργύριον ἔχουσι, καὶ ἐν Θετταλίᾳ ξένους ἔχομεν. τί μένεις;»\n\nΣωκράτης δὲ λέγει· «ὦ Κρίτων, ὁ ἀγαθὸς πολίτης τοὺς τῶν Ἀθηναίων νόμους οὐ λύει. οὐ φεύγω.»\n\nΚαὶ Σωκράτης ἐν τῷ δεσμωτηρίῳ μένει.",
      traduccion: "La ciudad de los atenienses es bella y tiene muchos ciudadanos. En Atenas gobierna el pueblo: en la asamblea los ciudadanos hablan de la guerra y de la paz, y proponen leyes. Y en los tribunales los jueces castigan a los injustos. Las leyes protegen a los ciudadanos.\n\nPero ahora Sócrates está en la cárcel. Los jueces castigan injustamente a Sócrates, y Sócrates espera la muerte.\n\nCritón, su amigo, va temprano a la cárcel y le dice: «Sócrates, tus amigos tienen mucho dinero, y en Tesalia tenemos amigos que te acogerán. ¿Por qué esperas?».\n\nPero Sócrates responde: «Critón, el buen ciudadano no viola las leyes de los atenienses. No huyo».\n\nY Sócrates se queda en la cárcel.",
      notas: "*λύω* no es solo «desatar»: también es «disolver, anular», y *λύειν τοὺς νόμους* es violar o anular las leyes. Es el argumento del *Critón* de Platón: Sócrates no huye de la cárcel porque huir sería destruir las leyes de su ciudad. *ξένος* es el extranjero unido a ti por un pacto de hospitalidad: te acoge en su casa y tú a él en la tuya. *πόλις* es de la 3.ª declinación: la verás en la semana 4.",
      glosa: {
        "ἡ": "la (nominativo femenino del artículo)",
        "τῶν": "de los (genitivo plural del artículo)",
        "ἀθηναίων": "atenienses (genitivo plural de «Ἀθηναῖος»; va entre el artículo y el nombre)",
        "πόλις": "ciudad (3.ª declinación, semana 4)",
        "καλή": "bella",
        "ἐστι": "es (enclítico)",
        "καὶ": "y",
        "πολλοὺς": "muchos (acusativo plural)",
        "πολίτας": "ciudadanos (acusativo plural de «πολίτης»)",
        "ἔχει": "tiene",
        "ἐν": "en (+ dativo)",
        "ταῖς": "las (dativo femenino plural del artículo)",
        "ἀθήναις": "Atenas (dativo de «Ἀθῆναι», que es plural)",
        "ὁ": "el (nominativo masculino del artículo)",
        "δῆμος": "el pueblo",
        "ἄρχει": "gobierna, manda",
        "τῇ": "la (dativo femenino del artículo)",
        "ἐκκλησίᾳ": "asamblea (dativo de «ἐκκλησία»)",
        "οἱ": "los (nominativo masculino plural del artículo)",
        "πολῖται": "ciudadanos (nominativo plural de «πολίτης»)",
        "περὶ": "acerca de, sobre (+ genitivo)",
        "τοῦ": "el (genitivo masculino del artículo)",
        "πολέμου": "la guerra (genitivo de «πόλεμος»)",
        "τῆς": "la (genitivo femenino del artículo)",
        "εἰρήνης": "la paz (genitivo de «εἰρήνη»)",
        "λέγουσι": "hablan",
        "νόμους": "leyes (acusativo plural de «νόμος»)",
        "γράφουσιν": "escriben; aquí, proponen (una ley)",
        "δὲ": "y, pero (va en segundo lugar)",
        "τοῖς": "los (dativo plural del artículo)",
        "δικαστηρίοις": "tribunales (dativo plural de «δικαστήριον»)",
        "δικασταὶ": "jueces (nominativo plural de «δικαστής»)",
        "τοὺς": "los, a los (acusativo masculino plural del artículo)",
        "ἀδίκους": "injustos (acusativo plural de «ἄδικος»)",
        "κολάζουσιν": "castigan",
        "νόμοι": "leyes (nominativo plural)",
        "σῴζουσιν": "salvan, protegen",
        "ἀλλὰ": "pero",
        "νῦν": "ahora",
        "σωκράτης": "Sócrates",
        "τῷ": "el (dativo masculino o neutro del artículo)",
        "δεσμωτηρίῳ": "cárcel (dativo de «δεσμωτήριον»)",
        "ἐστίν": "está (enclítico; tras «δεσμωτηρίῳ» conserva su acento)",
        "ἀδίκως": "injustamente (adverbio de «ἄδικος»)",
        "τὸν": "el (acusativo masculino del artículo)",
        "σωκράτη": "Sócrates (acusativo de «Σωκράτης»)",
        "κολάζουσι": "castigan",
        "θάνατον": "la muerte (acusativo de «θάνατος»)",
        "μένει": "espera; se queda",
        "κρίτων": "Critón, amigo de Sócrates (también vocativo: «¡Critón!»)",
        "φίλος": "amigo",
        "πρῲ": "temprano, de mañana",
        "εἰς": "a, hacia (+ acusativo)",
        "τὸ": "el (neutro del artículo)",
        "δεσμωτήριον": "la cárcel (acusativo)",
        "βαδίζει": "va, camina",
        "λέγει": "dice",
        "ὦ": "¡oh! (introduce el vocativo; no se traduce)",
        "σώκρατες": "Sócrates (vocativo)",
        "φίλοι": "amigos (nominativo plural)",
        "πολὺ": "mucho (neutro de «πολύς»)",
        "ἀργύριον": "dinero",
        "ἔχουσι": "tienen",
        "θετταλίᾳ": "Tesalia, región del norte de Grecia (dativo)",
        "ξένους": "huéspedes, amigos extranjeros (acusativo plural de «ξένος»)",
        "ἔχομεν": "tenemos",
        "τί": "¿por qué? (también «¿qué?»)",
        "μένεις": "esperas, te quedas",
        "ἀγαθὸς": "buen, bueno",
        "πολίτης": "ciudadano",
        "οὐ": "no",
        "λύει": "anula, viola (de «λύω», desatar, disolver)",
        "φεύγω": "huyo"
      },
      preguntas: [
        { q: "¿Quién gobierna en Atenas?", ops: ["El pueblo", "Los jueces", "Critón"], ok: 0 },
        { q: "¿Qué le propone Critón a Sócrates?", ops: ["Huir a Tesalia con ayuda de sus amigos", "Hablar en la asamblea", "Escribir leyes nuevas"], ok: 0 },
        {
          q: "¿Por qué no huye Sócrates?",
          ops: ["Porque el buen ciudadano no viola las leyes", "Porque no tiene amigos en Tesalia", "Porque no tiene dinero"],
          ok: 0
        }
      ]
    }
  ]
});
