// Glossa · griego antiguo · semana 4: Tercera declinación e infinitivo
window.CONTENT.grc.semanas.push({
  n: 4,
  lecciones: [
    {
      id: "grc4-1",
      titulo: "La tercera declinación: φύλαξ",
      min: 35,
      intro: "Con la tercera declinación llegan las palabras centrales de la filosofía: *φύσις*, *πόλις*, *σῶμα*, *γένος*. Su clave es sencilla: el nominativo engaña y la raíz aparece en el genitivo (*φύλαξ, φύλακος*), así que aprenderás cada palabra con su genitivo.",
      bloques: [
        {
          t: "p",
          x: "La 1.ª y la 2.ª declinación tenían el tema en *-α/-η* y en *-ο*. La 3.ª reúne las palabras cuyo tema acaba en **consonante** o en las vocales *ι* y *υ*. El nominativo suele salir desfigurado, porque la *-ς* final choca con la consonante del tema: *φύλακ-ς* → *φύλαξ*. Para encontrar el tema, quita *-ος* al genitivo: *φύλακος* → *φυλακ-*. Por eso el diccionario da siempre las dos formas: *φύλαξ, -ακος, ὁ* (guardián)."
        },
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural"],
          filas: [
            ["nominativo", "-ς o nada", "-ες"],
            ["vocativo", "igual que el nominativo, o el tema solo", "-ες"],
            ["acusativo", "-α (o -ν)", "-ας"],
            ["genitivo", "-ος", "-ων"],
            ["dativo", "-ι", "-σι(ν)"]
          ]
        },
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural", "Español"],
          audio: [1, 2],
          filas: [
            ["nominativo", "ὁ φύλαξ", "οἱ φύλακες", "el guardián, los guardianes"],
            ["vocativo", "ὦ φύλαξ", "ὦ φύλακες", "¡guardián!, ¡guardianes!"],
            ["acusativo", "τὸν φύλακα", "τοὺς φύλακας", "al guardián, a los guardianes (objeto directo)"],
            ["genitivo", "τοῦ φύλακος", "τῶν φυλάκων", "del guardián, de los guardianes"],
            ["dativo", "τῷ φύλακι", "τοῖς φύλαξι", "al guardián, a los guardianes"]
          ]
        },
        {
          t: "p",
          x: "En el dativo plural, la *-σι* choca con la consonante del tema, igual que la *-ς* del nominativo: *κ, γ, χ* + *σ* dan *ξ* (*φύλακ-σι* → *φύλαξι*); *π, β, φ* + *σ* dan *ψ*; y *τ, δ, θ, ν* desaparecen (*ἐλπίδ-σι* → *ἐλπίσι*, *δαίμον-σι* → *δαίμοσι*). Ante vocal y al final de frase se añade una *ν*, como en *ἐστίν*: *φύλαξιν*."
        },
        {
          t: "tabla",
          cab: ["Nominativo", "Genitivo", "Dativo plural", "Español"],
          audio: [0, 1, 2],
          filas: [
            ["ὁ παῖς", "παιδός", "παισί", "niño, muchacho; hijo (ἡ παῖς: niña)"],
            ["ὁ Ἕλλην", "Ἕλληνος", "Ἕλλησι", "griego, heleno"],
            ["ἡ ἐλπίς", "ἐλπίδος", "ἐλπίσι", "esperanza"],
            ["ἡ εἰκών", "εἰκόνος", "εἰκόσι", "imagen"],
            ["ὁ δαίμων", "δαίμονος", "δαίμοσι", "divinidad, espíritu divino"],
            ["ἡ νύξ", "νυκτός", "νυξί", "noche"]
          ]
        },
        {
          t: "p",
          x: "Los nombres de tu historia también son de la 3.ª: *Πλάτων, Πλάτωνος*; *Κρίτων, Κρίτωνος*; *Φαίδων, Φαίδωνος*; *Ξενοφῶν, Ξενοφῶντος*; *Λύσις, Λύσιδος* (acusativo *Λύσιν*, vocativo *ὦ Λύσι*). *Σωκράτης* tiene su propio modelo: lo verás en la lección 4."
        },
        {
          t: "nota",
          x: "El latín funciona igual: *rēx, rēgis*; *nox, noctis*, que es la misma palabra que *νύξ, νυκτός*. Y el español forma sus derivados con el tema, no con el nominativo: de *εἰκον-* viene *icono*; de *δαιμον-*, *demonio*; de *παιδ-*, *pedagogo* y *pediatra*; de *φυλακ-*, *profiláctico* («que protege de antemano»)."
        },
        {
          t: "ej",
          items: [
            ["Ὁ φύλαξ τὴν ἀγορὰν φυλάττει.", "El guardián vigila el ágora."],
            ["Οἱ φύλακες ἀγαθοί εἰσιν.", "Los guardianes son buenos."],
            ["Σωκράτης τοῖς παισὶ διαλέγεται.", "Sócrates conversa con los muchachos."],
            ["Οἱ Ἕλληνες τοὺς λόγους τῶν φιλοσόφων ἀκούουσιν.", "Los griegos escuchan los discursos de los filósofos."],
            ["Ἡ ἐλπὶς ἀγαθή ἐστιν.", "La esperanza es buena."],
            ["Οἱ διάλογοι τοῦ Πλάτωνος καλοί εἰσιν.", "Los diálogos de Platón son hermosos."],
            ["Ὦ Κρίτων, ποῦ ἐστι Φαίδων;", "Critón, ¿dónde está Fedón?"],
            ["Ἐν τῇ νυκτὶ οἱ φύλακες οὐ καθεύδουσιν.", "Por la noche los guardianes no duermen."]
          ]
        }
      ],
      vocab: [
        ["φύλαξ, -ακος, ὁ", "guardián, vigilante"],
        ["φυλάττω", "vigilar, guardar, proteger"],
        ["παῖς, παιδός, ὁ/ἡ", "niño, niña; muchacho; hijo"],
        ["Ἕλλην, -ηνος, ὁ", "griego, heleno"],
        ["ἐλπίς, -ίδος, ἡ", "esperanza"],
        ["εἰκών, -όνος, ἡ", "imagen"],
        ["δαίμων, -ονος, ὁ", "divinidad, espíritu divino"],
        ["νύξ, νυκτός, ἡ", "noche"],
        ["Κρίτων, -ωνος, ὁ", "Critón"],
        ["Φαίδων, -ωνος, ὁ", "Fedón"],
        ["Ξενοφῶν, -ῶντος, ὁ", "Jenofonte"],
        ["Λύσις, -ιδος, ὁ", "Lisis (acusativo Λύσιν, vocativo Λύσι)"],
        ["διάλογος, -ου, ὁ", "diálogo, conversación"],
        ["καθεύδω", "dormir"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "¿Dónde ves el tema (la raíz) de una palabra de la 3.ª declinación?",
          ops: ["En el genitivo singular: φύλακ-ος", "En el nominativo singular", "En el vocativo"],
          ok: 0
        },
        { t: "mc", q: "El genitivo de *φύλαξ* es…", ops: ["φύλακος", "φυλάκου", "φύλαξος"], ok: 0 },
        { t: "mc", q: "*τοῖς φύλαξι* es…", ops: ["dativo plural", "nominativo plural", "genitivo singular"], ok: 0 },
        { t: "mc", q: "El dativo plural de *ἐλπίς, -ίδος* es…", ops: ["ἐλπίσι", "ἐλπίδσι", "ἐλπίδοις"], ok: 0 },
        { t: "oir", x: "φύλακες", ops: ["φύλακες", "φύλακας", "φυλάκων"], ok: 0 },
        { t: "oir", x: "παιδός", ops: ["παιδός", "παισί", "παῖδας"], ok: 0 },
        { t: "orden", es: "Los guardianes son buenos.", x: "Οἱ φύλακες ἀγαθοί εἰσιν." },
        { t: "orden", es: "Sócrates conversa con los muchachos.", x: "Σωκράτης τοῖς παισὶ διαλέγεται." }
      ]
    },
    {
      id: "grc4-2",
      titulo: "Los neutros en -μα: σῶμα",
      min: 35,
      intro: "*Σῶμα* (cuerpo) es la mitad de la gran pareja de Platón: cuerpo y alma. Con él aprendes una familia enorme de neutros en *-μα*, de la que vienen *problema*, *tema*, *sistema* o *dogma*.",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural", "Español"],
          audio: [1, 2],
          filas: [
            ["nominativo", "τὸ σῶμα", "τὰ σώματα", "el cuerpo, los cuerpos"],
            ["acusativo", "τὸ σῶμα", "τὰ σώματα", "el cuerpo, los cuerpos (objeto directo)"],
            ["genitivo", "τοῦ σώματος", "τῶν σωμάτων", "del cuerpo, de los cuerpos"],
            ["dativo", "τῷ σώματι", "τοῖς σώμασι", "al cuerpo, a los cuerpos; con el cuerpo"]
          ]
        },
        {
          t: "p",
          x: "El tema es *σωματ-*. La *τ* no se ve en el nominativo, porque ninguna palabra griega acaba en *τ*, ni en el dativo plural, donde cae ante *σ*: *σωματ-σι* → *σώμασι*. Lo demás ya lo conoces de los neutros de la 2.ª: el nominativo y el acusativo son iguales, y el plural acaba en *-α*."
        },
        {
          t: "p",
          x: "Mira el acento: *σῶμα*, *σώματος*, *σωμάτων*. Quiere quedarse en la misma sílaba, pero no puede ir más atrás de la antepenúltima, ni de la penúltima si la última es larga, como *-ων*. Por eso salta en el genitivo plural: *σω-μά-των*."
        },
        {
          t: "tabla",
          cab: ["Griego", "Genitivo", "Español", "Lo verás en español"],
          audio: [0, 1],
          filas: [
            ["τὸ ὄνομα", "ὀνόματος", "nombre", "anónimo, sinónimo"],
            ["τὸ πρᾶγμα", "πράγματος", "cosa, asunto, hecho", "pragmático"],
            ["τὸ χρῆμα", "χρήματος", "cosa útil; en plural, dinero", "crematístico"],
            ["τὸ μάθημα", "μαθήματος", "lo que se aprende, conocimiento", "matemáticas"],
            ["τὸ ποίημα", "ποιήματος", "obra, creación; poema", "poema"],
            ["τὸ δόγμα", "δόγματος", "opinión, creencia; decreto", "dogma"],
            ["τὸ πρόβλημα", "προβλήματος", "lo que se plantea, problema", "problema"]
          ]
        },
        {
          t: "nota",
          x: "Por eso decimos *el problema*, *el tema*, *el sistema*, *el dogma*: eran neutros griegos en *-μα*, no femeninos de la 1.ª, y el español los hizo masculinos. El latín hace lo mismo que el griego con su 3.ª declinación: *corpus, corporis*, con la raíz en el genitivo."
        },
        {
          t: "p",
          x: "Tres neutros más, con el nominativo muy desfigurado. Los encontrarás en los primeros filósofos, que buscaban de qué está hecho todo: Tales decía que del agua; Heráclito, que del fuego."
        },
        {
          t: "tabla",
          cab: ["Griego", "Genitivo", "Español"],
          audio: [0, 1],
          filas: [
            ["τὸ φῶς", "φωτός", "luz"],
            ["τὸ ὕδωρ", "ὕδατος", "agua"],
            ["τὸ πῦρ", "πυρός", "fuego"]
          ]
        },
        {
          t: "ej",
          items: [
            ["Τὸ σῶμα θνητόν ἐστιν.", "El cuerpo es mortal."],
            ["Ἡ ψυχὴ τοῦ σώματος ἄρχει.", "El alma gobierna el cuerpo."],
            ["Τὸ ὄνομα τοῦ παιδὸς Λύσις ἐστίν.", "El nombre del muchacho es Lisis."],
            ["Οἱ μὲν σοφισταὶ χρήματα λαμβάνουσιν, Σωκράτης δὲ οὔ.", "Los sofistas cobran dinero; Sócrates, no."],
            ["Τὰ μαθήματα τοῖς νέοις χρήσιμά ἐστιν.", "Las enseñanzas son útiles para los jóvenes."],
            ["Ἐν τῷ φωτὶ τὰ πράγματα βλέπομεν.", "A la luz vemos las cosas."]
          ]
        }
      ],
      vocab: [
        ["σῶμα, -ατος, τό", "cuerpo"],
        ["πρᾶγμα, -ατος, τό", "cosa, asunto, hecho"],
        ["χρῆμα, -ατος, τό", "cosa útil; τὰ χρήματα: el dinero, los bienes"],
        ["μάθημα, -ατος, τό", "lo que se aprende, enseñanza, conocimiento"],
        ["ποίημα, -ατος, τό", "obra, creación; poema"],
        ["δόγμα, -ατος, τό", "opinión, creencia; decreto"],
        ["πρόβλημα, -ατος, τό", "problema, cuestión planteada"],
        ["φῶς, φωτός, τό", "luz"],
        ["ὕδωρ, ὕδατος, τό", "agua"],
        ["πῦρ, πυρός, τό", "fuego"],
        ["χρήσιμος, -η, -ον", "útil"]
      ],
      ejercicios: [
        { t: "mc", q: "El genitivo de *σῶμα* es…", ops: ["σώματος", "σώμου", "σωμάτων"], ok: 0 },
        {
          t: "mc",
          q: "¿Por qué en español se dice «el problema» y no «la problema»?",
          ops: ["Porque viene de un neutro griego en -μα", "Porque en griego era masculino", "Porque todas las palabras en -a son masculinas"],
          ok: 0
        },
        { t: "mc", q: "*τὰ χρήματα* suele significar…", ops: ["el dinero, los bienes", "los cuerpos", "las enseñanzas"], ok: 0 },
        { t: "mc", q: "*τοῖς σώμασι* es…", ops: ["dativo plural", "genitivo plural", "nominativo plural"], ok: 0 },
        { t: "oir", x: "σώματα", ops: ["σώματα", "σώματι", "σῶμα"], ok: 0 },
        { t: "oir", x: "ὀνόματος", ops: ["ὀνόματος", "ὀνόματα", "ὀνομάτων"], ok: 0 },
        { t: "orden", es: "El cuerpo es mortal.", x: "Τὸ σῶμα θνητόν ἐστιν." },
        { t: "orden", es: "El alma gobierna el cuerpo.", x: "Ἡ ψυχὴ τοῦ σώματος ἄρχει." }
      ]
    },
    {
      id: "grc4-3",
      titulo: "ἀνήρ, πατήρ, μήτηρ (y ἄνθρωπος)",
      min: 35,
      intro: "Sócrates empieza su defensa en la *Apología* con *ὦ ἄνδρες Ἀθηναῖοι*, «atenienses». Hoy aprendes *ἀνήρ*, *πατήρ* y *μήτηρ*, que pierden una vocal en algunos casos, y la diferencia entre *ἀνήρ* y *ἄνθρωπος*, que en español se confunden en «hombre».",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "ἀνήρ (varón)", "πατήρ (padre)", "μήτηρ (madre)"],
          audio: [1, 2, 3],
          filas: [
            ["nominativo sing.", "ἀνήρ", "πατήρ", "μήτηρ"],
            ["vocativo sing.", "ἄνερ", "πάτερ", "μῆτερ"],
            ["acusativo sing.", "ἄνδρα", "πατέρα", "μητέρα"],
            ["genitivo sing.", "ἀνδρός", "πατρός", "μητρός"],
            ["dativo sing.", "ἀνδρί", "πατρί", "μητρί"],
            ["nominativo pl.", "ἄνδρες", "πατέρες", "μητέρες"],
            ["acusativo pl.", "ἄνδρας", "πατέρας", "μητέρας"],
            ["genitivo pl.", "ἀνδρῶν", "πατέρων", "μητέρων"],
            ["dativo pl.", "ἀνδράσι", "πατράσι", "μητράσι"]
          ]
        },
        {
          t: "p",
          x: "Las tres tienen el tema en *-ερ*, que en el genitivo y el dativo singular pierde la *ε*: *πατέρ-α*, pero *πατρ-ός*, *πατρ-ί*. En el dativo plural aparece una *α*: *πατράσι*. *ἀνήρ* pierde la *ε* en casi todos los casos y, para pronunciar el grupo *νρ*, mete una *δ*: *ἀνδρός*, *ἄνδρες*. Fíjate en los vocativos, con el acento retrasado: *ὦ πάτερ*, *ὦ μῆτερ*, *ὦ ἄνερ*."
        },
        {
          t: "tabla",
          cab: ["Griego", "Qué significa", "Latín", "Lo verás en español"],
          audio: [0],
          filas: [
            ["ὁ ἄνθρωπος", "ser humano, persona (hombre o mujer)", "homō", "antropología, filántropo"],
            ["ὁ ἀνήρ", "varón; marido; hombre adulto", "vir", "androide, poliandria"],
            ["ἡ γυνή", "mujer; esposa", "mulier", "ginecología, misoginia"],
            ["ἡ ἀνδρεία", "valentía (lit. «hombría»)", "fortitūdō", "Andrés («el valiente»)"]
          ]
        },
        {
          t: "p",
          x: "*ἄνθρωπος* (2.ª declinación) es el ser humano frente a los animales y los dioses. *ἀνήρ* es el varón frente a la mujer (*γυνή*), o el hombre adulto frente al niño. Cuando Aristóteles dice que el hombre es por naturaleza un animal político, usa *ἄνθρωπος*: habla de todo ser humano. Cuando Sócrates habla a los jueces, dice *ὦ ἄνδρες Ἀθηναῖοι*: eran todos varones adultos."
        },
        {
          t: "nota",
          x: "*γυνή* es irregular: usa el tema *γυναικ-* en todos los casos menos el nominativo: *γυνή, γυναικός, γυναικί, γυναῖκα*, vocativo *ὦ γύναι*; plural *γυναῖκες, γυναικῶν, γυναιξί, γυναῖκας*. Y una curiosidad: de *ἀνήρ* sale *ἀνδρεία*, la valentía, igual que en latín *virtūs* sale de *vir*."
        },
        {
          t: "ej",
          items: [
            ["ὦ ἄνδρες Ἀθηναῖοι", "¡atenienses! (así se dirige Sócrates a los jueces)"],
            ["Ὁ πατὴρ καὶ ἡ μήτηρ τὸν παῖδα στέργουσιν.", "El padre y la madre quieren a su hijo."],
            ["Ὁ ἄνθρωπος ζῷόν ἐστιν.", "El ser humano es un animal."],
            ["Οὐ μόνον οἱ ἄνδρες ἄνθρωποί εἰσιν, ἀλλὰ καὶ αἱ γυναῖκες.", "No solo los varones son seres humanos, sino también las mujeres."],
            ["Ἡ ἀνδρεία ἀρετή ἐστιν.", "La valentía es una virtud."],
            ["Ὦ πάτερ, ποῦ ἐστιν ἡ μήτηρ;", "Papá, ¿dónde está mamá?"],
            ["Λύσις τῷ πατρὶ καὶ τῇ μητρὶ πείθεται.", "Lisis obedece a su padre y a su madre."]
          ]
        }
      ],
      vocab: [
        ["ἀνήρ, ἀνδρός, ὁ", "varón, hombre adulto; marido"],
        ["πατήρ, πατρός, ὁ", "padre"],
        ["μήτηρ, μητρός, ἡ", "madre"],
        ["θυγάτηρ, θυγατρός, ἡ", "hija"],
        ["γυνή, γυναικός, ἡ", "mujer; esposa"],
        ["ἄνθρωπος / ἀνήρ", "ser humano / varón"],
        ["ἀνδρεῖος, -α, -ον", "valiente"],
        ["στέργω", "querer, tener cariño (a la familia)"],
        ["υἱός, -οῦ, ὁ", "hijo"],
        ["ἀδελφός, -οῦ, ὁ", "hermano"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "En la *Apología*, Sócrates dice *ὦ ἄνδρες Ἀθηναῖοι* porque…",
          ops: ["habla a los jueces, todos varones adultos", "habla a toda la humanidad", "habla solo a sus discípulos"],
          ok: 0
        },
        { t: "mc", q: "El genitivo de *πατήρ* es…", ops: ["πατρός", "πατέρος", "πατῆρος"], ok: 0 },
        { t: "mc", q: "Para decir que todo ser humano es por naturaleza un animal político, Aristóteles usa…", ops: ["ἄνθρωπος", "ἀνήρ", "γυνή"], ok: 0 },
        { t: "mc", q: "El dativo plural de *ἀνήρ* es…", ops: ["ἀνδράσι", "ἀνδροῖς", "ἄνδρεσι"], ok: 0 },
        { t: "oir", x: "μητέρα", ops: ["μητέρα", "μητρί", "μῆτερ"], ok: 0 },
        { t: "oir", x: "ἀνδρός", ops: ["ἀνδρός", "ἄνδρας", "ἀνδρῶν"], ok: 0 },
        { t: "orden", es: "El padre y la madre quieren a su hijo.", x: "Ὁ πατὴρ καὶ ἡ μήτηρ τὸν παῖδα στέργουσιν." },
        { t: "orden", es: "El ser humano es un animal.", x: "Ὁ ἄνθρωπος ζῷόν ἐστιν." }
      ]
    },
    {
      id: "grc4-4",
      titulo: "γένος y ἀληθής: los temas en -ς",
      min: 40,
      intro: "*Γένος* (género, linaje) y *εἶδος* (forma, especie) son términos clave de Platón y Aristóteles, y *ἀληθής* significa «verdadero». Los tres son temas en *-ς*, y con ellos aprendes también a declinar *Σωκράτης*.",
      bloques: [
        {
          t: "p",
          x: "Parecen de la 2.ª declinación por la *-ος*, pero no lo son: *τὸ γένος* es neutro y su genitivo es *γένους*, no *γένου*. El tema era *γενεσ-*. Entre vocales, la *σ* desapareció (*γένεσ-ος* → *γένεος*), y las vocales que quedaron juntas se contrajeron (*εο* → *ου*). En latín, esa misma *s* se volvió *r*: *genus, generis*. Es la misma palabra."
        },
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural", "Cómo se formó"],
          audio: [1, 2],
          filas: [
            ["nominativo", "τὸ γένος", "τὰ γένη", "plural: γένε(σ)α → γένη"],
            ["acusativo", "τὸ γένος", "τὰ γένη", "igual que el nominativo"],
            ["genitivo", "τοῦ γένους", "τῶν γενῶν", "γένε(σ)ος → γένους; γενέ(σ)ων → γενῶν"],
            ["dativo", "τῷ γένει", "τοῖς γένεσι", "γένε(σ)ι → γένει"]
          ]
        },
        {
          t: "tabla",
          cab: ["Griego", "Genitivo", "Español"],
          audio: [0, 1],
          filas: [
            ["τὸ εἶδος", "εἴδους", "forma, aspecto; especie; la «Idea» de Platón"],
            ["τὸ τέλος", "τέλους", "fin, final; meta, finalidad"],
            ["τὸ ἦθος", "ἤθους", "carácter, modo de ser"],
            ["τὸ ἔθος", "ἔθους", "costumbre, hábito"],
            ["τὸ μέρος", "μέρους", "parte"],
            ["τὸ πλῆθος", "πλήθους", "multitud, cantidad"],
            ["τὸ ψεῦδος", "ψεύδους", "mentira, falsedad"],
            ["τὸ πάθος", "πάθους", "lo que uno sufre o experimenta; pasión"]
          ]
        },
        {
          t: "nota",
          x: "Aristóteles define con *γένος* y *εἶδος*: el hombre es un *εἶδος* (especie) del *γένος* «animal»; en latín, *genus* y *speciēs*. Y juega con *ἦθος* y *ἔθος*: la virtud ética (*ἠθική*, de *ἦθος*, carácter) nace de la costumbre (*ἔθος*)."
        },
        {
          t: "tabla",
          cab: ["Caso", "Masculino y femenino", "Neutro"],
          audio: [1, 2],
          filas: [
            ["nominativo sing.", "ἀληθής", "ἀληθές"],
            ["acusativo sing.", "ἀληθῆ", "ἀληθές"],
            ["genitivo sing.", "ἀληθοῦς", "ἀληθοῦς"],
            ["dativo sing.", "ἀληθεῖ", "ἀληθεῖ"],
            ["nominativo pl.", "ἀληθεῖς", "ἀληθῆ"],
            ["acusativo pl.", "ἀληθεῖς", "ἀληθῆ"],
            ["genitivo pl.", "ἀληθῶν", "ἀληθῶν"],
            ["dativo pl.", "ἀληθέσι", "ἀληθέσι"]
          ]
        },
        {
          t: "p",
          x: "*ἀληθής* es el adjetivo de este tipo: una forma para masculino y femenino, y otra para el neutro. *Ὁ λόγος ἀληθής ἐστιν*, *ἡ δόξα ἀληθής ἐστιν*, pero *τὸ πρᾶγμα ἀληθές ἐστιν*. Igual van *ψευδής, -ές* (falso) y *σαφής, -ές* (claro). En neutro plural, *ἀληθῆ λέγεις* es «tienes razón», literalmente «dices cosas verdaderas»."
        },
        {
          t: "p",
          x: "Los nombres propios en *-ης* de este tipo se declinan igual: *Σωκράτης, Σωκράτους, Σωκράτει, Σωκράτη*, vocativo *ὦ Σώκρατες*, con el acento retrasado. Así van también *Ἀριστοτέλης, Ἀριστοτέλους* y *Δημοσθένης, Δημοσθένους*."
        },
        {
          t: "ej",
          items: [
            ["Τὸ γένος τῶν ἀνθρώπων", "El género humano (lit. «el linaje de los hombres»)"],
            ["Τί ἐστι τὸ τέλος τοῦ βίου;", "¿Cuál es el fin de la vida?"],
            ["Ἡ ἠθικὴ ἀρετὴ ἐξ ἔθους γίγνεται.", "La virtud ética nace de la costumbre. (Aristóteles, adaptado)"],
            ["Ὁ λόγος ἀληθής ἐστιν.", "El argumento es verdadero."],
            ["Ἡ δόξα ψευδής ἐστιν.", "La opinión es falsa."],
            ["Ἀληθῆ λέγεις, ὦ Σώκρατες.", "Tienes razón, Sócrates."],
            ["Πλάτων καὶ Ξενοφῶν μαθηταὶ Σωκράτους εἰσίν.", "Platón y Jenofonte son discípulos de Sócrates."],
            ["Τὰ μέρη τοῦ σώματος", "Las partes del cuerpo"]
          ]
        }
      ],
      vocab: [
        ["τέλος, -ους, τό", "fin, final; meta, finalidad"],
        ["ἦθος, -ους, τό", "carácter, modo de ser"],
        ["ἔθος, -ους, τό", "costumbre, hábito"],
        ["μέρος, -ους, τό", "parte"],
        ["πλῆθος, -ους, τό", "multitud, cantidad"],
        ["ψεῦδος, -ους, τό", "mentira, falsedad"],
        ["πάθος, -ους, τό", "lo que uno sufre o experimenta; pasión"],
        ["ἀληθής, -ές", "verdadero; sincero"],
        ["ψευδής, -ές", "falso, mentiroso"],
        ["σαφής, -ές", "claro, evidente"],
        ["Ἀριστοτέλης, -ους, ὁ", "Aristóteles"],
        ["τὸ γένος τῶν ἀνθρώπων", "el género humano"]
      ],
      ejercicios: [
        { t: "mc", q: "El genitivo de *γένος* es…", ops: ["γένους", "γένου", "γενοῦ"], ok: 0 },
        {
          t: "mc",
          q: "¿Por qué *γένους* y no *γένου*?",
          ops: ["Porque el tema era γενεσ-: la σ cayó y εο se contrajo en ου", "Porque es masculino", "Porque es un plural"],
          ok: 0
        },
        { t: "mc", q: "Completa: *ἡ δόξα ___ ἐστιν* (la opinión es verdadera).", ops: ["ἀληθής", "ἀληθές", "ἀληθοῦς"], ok: 0 },
        { t: "mc", q: "Completa: *τὸ πρᾶγμα ___ ἐστιν* (la cosa es verdadera).", ops: ["ἀληθές", "ἀληθής", "ἀληθεῖς"], ok: 0 },
        { t: "mc", q: "¿Cómo te diriges a Sócrates?", ops: ["ὦ Σώκρατες", "ὦ Σωκράτης", "ὦ Σωκράτους"], ok: 0 },
        { t: "oir", x: "γένη", ops: ["γένη", "γένει", "γένος"], ok: 0 },
        { t: "oir", x: "ἀληθοῦς", ops: ["ἀληθοῦς", "ἀληθεῖς", "ἀληθῶν"], ok: 0 },
        { t: "orden", es: "El argumento es verdadero.", x: "Ὁ λόγος ἀληθής ἐστιν." }
      ]
    },
    {
      id: "grc4-5",
      titulo: "πόλις, φύσις y βασιλεύς",
      min: 40,
      intro: "*Πόλις* y *φύσις* son dos de las palabras que más leerás en Platón y Aristóteles, y *βασιλεύς*, «rey», es la de los reyes filósofos de Platón. Las tres hacen el genitivo en *-εως*: *πόλεως*, *φύσεως*, *βασιλέως*.",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural"],
          audio: [1, 2],
          filas: [
            ["nominativo", "ἡ πόλις", "αἱ πόλεις"],
            ["vocativo", "ὦ πόλι", "ὦ πόλεις"],
            ["acusativo", "τὴν πόλιν", "τὰς πόλεις"],
            ["genitivo", "τῆς πόλεως", "τῶν πόλεων"],
            ["dativo", "τῇ πόλει", "ταῖς πόλεσι"]
          ]
        },
        {
          t: "p",
          x: "El tema alterna *ι* y *ε*: *πόλι-* solo en el nominativo, el acusativo y el vocativo del singular; en todo lo demás, *πόλε-*. *Φύσις* se declina exactamente igual: *φύσις, φύσεως, φύσει, φύσιν*. Ojo al acento de *πόλεως* y *πόλεων*: va en la antepenúltima aunque la última sea larga. Es una excepción heredada de una forma más antigua, *πόληος*."
        },
        {
          t: "p",
          x: "Tres expresiones que leerás sin parar: *φύσει* (dativo), «por naturaleza»; *κατὰ φύσιν*, «según la naturaleza, natural»; *παρὰ φύσιν*, «contra la naturaleza»."
        },
        {
          t: "nota",
          x: "Los sofistas oponían *φύσει* a *νόμῳ*: lo que es así «por naturaleza» frente a lo que es así «por ley», por convención humana. ¿La justicia existe *φύσει* o *νόμῳ*? Es una de las grandes preguntas de los diálogos de Platón."
        },
        {
          t: "tabla",
          cab: ["Griego", "Viene de", "Español"],
          audio: [0],
          filas: [
            ["ἡ φύσις", "φύομαι, crecer, nacer", "naturaleza"],
            ["ἡ κίνησις", "κινέω, mover", "movimiento, cambio"],
            ["ἡ γένεσις", "γίγνομαι, nacer, llegar a ser", "nacimiento, origen; el devenir"],
            ["ἡ αἴσθησις", "αἰσθάνομαι, percibir", "percepción, sensación"],
            ["ἡ ποίησις", "ποιέω, hacer", "creación; poesía"],
            ["ἡ γνῶσις", "γιγνώσκω, conocer", "conocimiento"],
            ["ἡ δύναμις", "δύναμαι, poder", "poder, capacidad; potencia"]
          ]
        },
        {
          t: "nota",
          x: "Todas son femeninas, y el español conserva muchas casi intactas, también en femenino: *la crisis*, *la tesis*, *la síntesis*, *la hipótesis*. Cuando veas *-σις*, piensa en «la acción de…»: *κίνησις*, la acción de mover. Y *δύναμις* es la «potencia» de Aristóteles, la *potentia* de los escolásticos."
        },
        {
          t: "tabla",
          cab: ["Caso", "Singular", "Plural"],
          audio: [1, 2],
          filas: [
            ["nominativo", "ὁ βασιλεύς", "οἱ βασιλεῖς"],
            ["vocativo", "ὦ βασιλεῦ", "ὦ βασιλεῖς"],
            ["acusativo", "τὸν βασιλέα", "τοὺς βασιλέας"],
            ["genitivo", "τοῦ βασιλέως", "τῶν βασιλέων"],
            ["dativo", "τῷ βασιλεῖ", "τοῖς βασιλεῦσι"]
          ]
        },
        {
          t: "p",
          x: "La *υ* del tema *βασιλευ-* se pierde ante vocal: *βασιλέ-ως*, *βασιλε-ῖ*, *βασιλέ-α*. En el ático de Platón el nominativo plural es *βασιλῆς*, y es la forma que suelen imprimir sus ediciones; *βασιλεῖς*, la de muchas gramáticas, se impuso desde finales del siglo IV a. C. Igual se declinan otros nombres de oficio: *ἱερεύς* (sacerdote), *ἱππεύς* (jinete), *γονεύς* (progenitor; *οἱ γονεῖς*, los padres)."
        },
        {
          t: "nota",
          x: "Platón, *República* 473c-d: a menos que los filósofos reinen en las ciudades o que los que ahora se llaman reyes se pongan a filosofar de verdad, las ciudades no tendrán descanso de sus males. El verbo «reinar» es *βασιλεύω*, de *βασιλεύς*."
        },
        {
          t: "ej",
          items: [
            ["Ἡ πόλις μεγάλη ἐστίν.", "La ciudad es grande."],
            ["Ὁ φύλαξ τὴν πόλιν φυλάττει.", "El guardián vigila la ciudad."],
            ["Ἡ φύσις τῆς ψυχῆς", "La naturaleza del alma"],
            ["Ἐν ταῖς πόλεσι πολλοὶ νόμοι εἰσίν.", "En las ciudades hay muchas leyes."],
            ["Φύσει ἢ νόμῳ;", "¿Por naturaleza o por convención?"],
            ["Ὁ βασιλεὺς τῆς πόλεως ἄρχει.", "El rey gobierna la ciudad."],
            ["Οἱ φιλόσοφοι βασιλεύουσιν ἐν ταῖς πόλεσιν.", "Los filósofos reinan en las ciudades. (el sueño de Platón)"]
          ]
        }
      ],
      vocab: [
        ["κατὰ φύσιν / παρὰ φύσιν", "según la naturaleza / contra la naturaleza"],
        ["κίνησις, -εως, ἡ", "movimiento, cambio"],
        ["γένεσις, -εως, ἡ", "nacimiento, origen; el devenir"],
        ["αἴσθησις, -εως, ἡ", "percepción, sensación"],
        ["ποίησις, -εως, ἡ", "creación; poesía"],
        ["γνῶσις, -εως, ἡ", "conocimiento"],
        ["δύναμις, -εως, ἡ", "poder, capacidad; potencia"],
        ["βασιλεύς, -έως, ὁ", "rey"],
        ["βασιλεύω", "ser rey, reinar"],
        ["ἱερεύς, -έως, ὁ", "sacerdote"],
        ["οἱ γονεῖς", "los padres (de γονεύς, -έως, progenitor)"]
      ],
      ejercicios: [
        { t: "mc", q: "El genitivo de *πόλις* es…", ops: ["πόλεως", "πόλιδος", "πόλου"], ok: 0 },
        { t: "mc", q: "*φύσει* significa…", ops: ["por naturaleza", "la naturaleza (sujeto)", "las naturalezas"], ok: 0 },
        { t: "mc", q: "El acusativo singular de *πόλις* es…", ops: ["πόλιν", "πόλεα", "πόλει"], ok: 0 },
        { t: "mc", q: "*τοῦ βασιλέως* significa…", ops: ["del rey", "el rey", "a los reyes"], ok: 0 },
        { t: "oir", x: "πόλεως", ops: ["πόλεως", "πόλεις", "πόλεσι"], ok: 0 },
        { t: "oir", x: "βασιλεῖ", ops: ["βασιλεῖ", "βασιλεῦ", "βασιλέα"], ok: 0 },
        { t: "orden", es: "El guardián vigila la ciudad.", x: "Ὁ φύλαξ τὴν πόλιν φυλάττει." },
        { t: "orden", es: "El rey gobierna la ciudad.", x: "Ὁ βασιλεὺς τῆς πόλεως ἄρχει." }
      ]
    },
    {
      id: "grc4-6",
      titulo: "πᾶς, πᾶσα, πᾶν: todo, cada, entero",
      min: 35,
      intro: "*Πᾶς* aparece en casi cada página que vas a leer: *Πάντες ἄνθρωποι…*, «todos los hombres…», es el comienzo de la *Metafísica* de Aristóteles. Su masculino y su neutro son de la 3.ª declinación; su femenino, de la 1.ª.",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "Masculino", "Femenino", "Neutro"],
          audio: [1, 2, 3],
          filas: [
            ["nominativo sing.", "πᾶς", "πᾶσα", "πᾶν"],
            ["acusativo sing.", "πάντα", "πᾶσαν", "πᾶν"],
            ["genitivo sing.", "παντός", "πάσης", "παντός"],
            ["dativo sing.", "παντί", "πάσῃ", "παντί"],
            ["nominativo pl.", "πάντες", "πᾶσαι", "πάντα"],
            ["acusativo pl.", "πάντας", "πάσας", "πάντα"],
            ["genitivo pl.", "πάντων", "πασῶν", "πάντων"],
            ["dativo pl.", "πᾶσι", "πάσαις", "πᾶσι"]
          ]
        },
        {
          t: "p",
          x: "El tema es *παντ-*. En *πᾶς* y en *πᾶσι* el grupo *ντ* cae ante *σ*, y la *α* se alarga para compensar. Ojo con *πάντα*: puede ser acusativo singular masculino o nominativo y acusativo plural neutro, «todas las cosas». Y con el acento de *πάντων* y *πᾶσι*, que no pasa a la última sílaba como en *παντός*."
        },
        { t: "p", x: "El sentido cambia según su posición respecto al artículo:" },
        {
          t: "tabla",
          cab: ["Griego", "Posición", "Español"],
          audio: [0],
          filas: [
            ["πᾶσα πόλις", "sin artículo", "toda ciudad, cada ciudad"],
            ["πᾶσα ἡ πόλις", "fuera del artículo", "toda la ciudad, la ciudad entera"],
            ["ἡ πόλις πᾶσα", "fuera del artículo", "toda la ciudad, la ciudad entera"],
            ["ἡ πᾶσα πόλις", "entre el artículo y el nombre", "la ciudad en su conjunto"],
            ["πάντες ἄνθρωποι", "sin artículo", "todos los hombres"],
            ["πάντες οἱ πολῖται", "fuera del artículo", "todos los ciudadanos"],
            ["πάντα", "sin sustantivo, en neutro plural", "todo, todas las cosas"],
            ["τὸ πᾶν", "con artículo, en neutro", "el todo, el universo"]
          ]
        },
        {
          t: "ej",
          items: [
            ["Πάντες ἄνθρωποι θνητοί εἰσιν· Σωκράτης ἄνθρωπός ἐστιν· Σωκράτης ἄρα θνητός ἐστιν.", "Todos los hombres son mortales; Sócrates es hombre; luego Sócrates es mortal."],
            ["Ψυχὴ πᾶσα ἀθάνατος.", "Toda alma es inmortal. (Platón, Fedro 245c)"],
            ["Πάντων χρημάτων μέτρον ἐστὶν ἄνθρωπος.", "El hombre es la medida de todas las cosas. (Protágoras)"],
            ["Πάντα ῥεῖ.", "Todo fluye. (resumen de la doctrina de Heráclito)"],
            ["Ἡ πόλις πᾶσα ἐν τῇ ἀγορᾷ ἐστιν.", "Toda la ciudad está en el ágora."],
            ["Σωκράτης πᾶσι τοῖς πολίταις διαλέγεται.", "Sócrates conversa con todos los ciudadanos."],
            ["Ἅπας ὁ βίος", "La vida entera"]
          ]
        },
        {
          t: "nota",
          x: "*Πάντα ῥεῖ* resume la doctrina de Heráclito, pero no es una cita suya: la fórmula es de autores posteriores. En las últimas semanas leerás sus fragmentos auténticos. Y *ψυχὴ πᾶσα ἀθάνατος* es una frase discutida: ¿significa «toda alma», cada una, o «el alma entera», el alma en general? Sin artículo, admite las dos lecturas."
        },
        {
          t: "nota",
          x: "Compáralo con el latín *omnis*: *omnis homō* (todo hombre), *omnēs hominēs* (todos los hombres), *omnia* (todas las cosas). Y con el español: *panorama*, *panteón* (templo «de todos los dioses»), *pandemia* (que afecta «a todo el pueblo»)."
        }
      ],
      vocab: [
        ["πᾶς, πᾶσα, πᾶν", "todo, cada; entero"],
        ["πάντες ἄνθρωποι", "todos los hombres"],
        ["πᾶσα ἡ πόλις", "toda la ciudad, la ciudad entera"],
        ["πάντα", "todo, todas las cosas"],
        ["τὸ πᾶν", "el todo, el universo"],
        ["ἅπας, ἅπασα, ἅπαν", "todo, entero (forma reforzada de πᾶς)"],
        ["πάντα ῥεῖ", "todo fluye (resumen de Heráclito)"],
        ["ψυχὴ πᾶσα ἀθάνατος", "toda alma es inmortal (Platón)"],
        ["πάντων χρημάτων μέτρον ἐστὶν ἄνθρωπος", "el hombre es la medida de todas las cosas (Protágoras)"],
        ["πανταχοῦ", "en todas partes"],
        ["πάντως", "de todos modos, sin duda"]
      ],
      ejercicios: [
        { t: "mc", q: "*πᾶσα πόλις* significa…", ops: ["toda ciudad, cada ciudad", "la ciudad entera", "todas las ciudades"], ok: 0 },
        { t: "mc", q: "*πᾶσα ἡ πόλις* significa…", ops: ["toda la ciudad, la ciudad entera", "cada ciudad", "la ciudad de todos"], ok: 0 },
        { t: "mc", q: "El genitivo plural masculino de *πᾶς* es…", ops: ["πάντων", "παντῶν", "πασῶν"], ok: 0 },
        { t: "mc", q: "En *Πάντων χρημάτων μέτρον ἐστὶν ἄνθρωπος*, ¿qué es la medida de todo?", ops: ["el hombre", "el dinero", "la ley"], ok: 0 },
        { t: "oir", x: "πᾶσα", ops: ["πᾶσα", "πᾶσαν", "πάσας"], ok: 0 },
        { t: "oir", x: "παντός", ops: ["παντός", "πάντες", "πάντας"], ok: 0 },
        { t: "orden", es: "Todos los hombres son mortales.", x: "Πάντες ἄνθρωποι θνητοί εἰσιν." },
        { t: "orden", es: "Toda alma es inmortal.", x: "Ψυχὴ πᾶσα ἀθάνατος." }
      ]
    },
    {
      id: "grc4-7",
      titulo: "El infinitivo presente: λύειν, λύεσθαι, εἶναι",
      min: 35,
      intro: "El infinitivo es la forma que más verás en Platón detrás de «quiero», «hay que» o «es posible». Solo tiene dos terminaciones que aprender: *-ειν* en activa y *-εσθαι* en media y pasiva.",
      bloques: [
        {
          t: "tabla",
          cab: ["Presente (yo)", "Infinitivo", "Español"],
          audio: [0, 1],
          filas: [
            ["λύω", "λύειν", "desatar"],
            ["λέγω", "λέγειν", "decir"],
            ["μανθάνω", "μανθάνειν", "aprender"],
            ["ἔχω", "ἔχειν", "tener"],
            ["λύομαι", "λύεσθαι", "desatarse; ser desatado"],
            ["γίγνομαι", "γίγνεσθαι", "llegar a ser, nacer"],
            ["βούλομαι", "βούλεσθαι", "querer"],
            ["διαλέγομαι", "διαλέγεσθαι", "conversar, dialogar"],
            ["εἰμί", "εἶναι", "ser, estar; existir"]
          ]
        },
        {
          t: "p",
          x: "Activa: tema + *-ειν* (*λέγ-ειν*). Media y pasiva: tema + *-εσθαι* (*γίγν-εσθαι*). Como en el presente, la misma forma sirve para la media y para la pasiva: *ἄρχειν* es «gobernar»; *ἄρχεσθαι*, «ser gobernado» (y, en voz media, «empezar»). El infinitivo de *εἰμί* es irregular: *εἶναι*."
        },
        {
          t: "p",
          x: "Sus usos más frecuentes: con verbos como *βούλομαι* (quiero), *ἐθέλω* (estoy dispuesto) o *ἄρχομαι* (empiezo a): *βούλομαι μανθάνειν*, «quiero aprender». Con verbos impersonales como *δεῖ* (hay que), *χρή* (se debe) o *ἔξεστι* (es posible, está permitido): *δεῖ μανθάνειν*, «hay que aprender». Y como sujeto: *καλόν ἐστι μανθάνειν*, «aprender es bello»."
        },
        {
          t: "tabla",
          cab: ["Griego", "Español"],
          audio: [0],
          filas: [
            ["βούλομαι μανθάνειν", "quiero aprender"],
            ["οὐκ ἐθέλει ἀποκρίνεσθαι", "no quiere responder"],
            ["ἄρχεται διδάσκειν", "empieza a enseñar"],
            ["δεῖ μανθάνειν", "hay que aprender"],
            ["χρὴ ἀκούειν", "hay que escuchar"],
            ["οὐκ ἔξεστι διαλέγεσθαι", "no está permitido conversar"],
            ["καλόν ἐστι μανθάνειν", "aprender es bello"]
          ]
        },
        {
          t: "p",
          x: "Con el artículo neutro, el infinitivo se convierte en sustantivo, como en español «el saber» o «el vivir»: *τὸ μανθάνειν* (el aprender), *τὸ εἶναι* (el ser), *τὸ ζῆν* (el vivir, de *ζάω*). Se declina con el artículo: *τοῦ ζῆν ἕνεκα*, «para vivir», literalmente «por causa del vivir». Es el lenguaje técnico de la filosofía: Aristóteles distingue *τὸ ζῆν*, vivir, de *τὸ εὖ ζῆν*, vivir bien."
        },
        {
          t: "nota",
          x: "Como en latín: *volō discere* es *βούλομαι μανθάνειν*, y *errāre hūmānum est* usa el infinitivo como sujeto. Pero el griego, como el español, puede ponerle artículo: *τὸ μανθάνειν*, «el aprender»."
        },
        {
          t: "ej",
          items: [
            ["Λύσις βούλεται μανθάνειν.", "Lisis quiere aprender."],
            ["Δεῖ τὴν ἀλήθειαν λέγειν.", "Hay que decir la verdad."],
            ["Πρωταγόρας ἀρετὴν διδάσκειν ἐπαγγέλλεται.", "Protágoras promete enseñar la virtud."],
            ["Σωκράτης ἀεὶ ἐθέλει διαλέγεσθαι.", "Sócrates siempre está dispuesto a conversar."],
            ["Ἀνδρὸς ἀρετή ἐστι τὰ τῆς πόλεως πράττειν.", "La virtud del varón es ocuparse de los asuntos de la ciudad. (Menón, en Platón, adaptado)"],
            ["Οὐκ ἔξεστι τοῖς φύλαξι χρήματα ἔχειν.", "Los guardianes no pueden tener dinero. (idea de la República de Platón)"],
            ["Ὁ ἀγαθὸς πολίτης καὶ ἄρχειν καὶ ἄρχεσθαι ἐθέλει.", "El buen ciudadano está dispuesto a gobernar y a ser gobernado. (idea de Aristóteles)"],
            ["Τὸ εὖ ζῆν", "El vivir bien"]
          ]
        }
      ],
      vocab: [
        ["λύειν / λύεσθαι", "desatar / desatarse, ser desatado"],
        ["εἶναι", "ser, estar; existir (infinitivo de εἰμί)"],
        ["ἐθέλω", "querer, estar dispuesto"],
        ["ἄρχομαι", "empezar a (+ infinitivo); ser gobernado"],
        ["δεῖ", "hay que, es necesario (impersonal)"],
        ["χρή", "se debe, hay que"],
        ["ἔξεστι", "es posible, está permitido (+ dativo e infinitivo)"],
        ["καλόν ἐστι", "es bello, está bien (+ infinitivo)"],
        ["ἐπαγγέλλομαι", "prometer, ofrecerse públicamente a"],
        ["τὸ μανθάνειν", "el aprender"],
        ["τὸ ζῆν", "el vivir, la vida"],
        ["τὸ εὖ ζῆν", "el vivir bien"],
        ["ἕνεκα", "por causa de, para (+ genitivo; va detrás)"],
        ["πράττω", "hacer, actuar; τὰ τῆς πόλεως πράττειν: ocuparse de la política"],
        ["ἀεί", "siempre"]
      ],
      ejercicios: [
        { t: "mc", q: "El infinitivo de *λέγω* es…", ops: ["λέγειν", "λέγεσθαι", "λέγει"], ok: 0 },
        { t: "mc", q: "El infinitivo de *γίγνομαι* es…", ops: ["γίγνεσθαι", "γίγνειν", "γίγνεται"], ok: 0 },
        { t: "mc", q: "*ἄρχειν* y *ἄρχεσθαι* significan…", ops: ["gobernar / ser gobernado", "gobernar / gobernante", "empezar / terminar"], ok: 0 },
        { t: "mc", q: "*τὸ μανθάνειν* significa…", ops: ["el aprender, el hecho de aprender", "el que aprende", "lo aprendido"], ok: 0 },
        { t: "oir", x: "εἶναι", ops: ["εἶναι", "εἰμί", "ἐστί"], ok: 0 },
        { t: "oir", x: "διαλέγεσθαι", ops: ["διαλέγεσθαι", "διαλέγεται", "διαλέγειν"], ok: 0 },
        { t: "orden", es: "Lisis quiere aprender.", x: "Λύσις βούλεται μανθάνειν." },
        { t: "orden", es: "Hay que decir la verdad.", x: "Δεῖ τὴν ἀλήθειαν λέγειν." }
      ]
    },
    {
      id: "grc4-8",
      titulo: "Acusativo con infinitivo: φασὶ τὸν ἄνθρωπον εἶναι…",
      min: 40,
      intro: "Para contar lo que otros dicen o piensan, el griego pone el sujeto en acusativo y el verbo en infinitivo: *φασὶ τὸν ἄνθρωπον ζῷον εἶναι*, «dicen que el hombre es un animal». Así resumen Platón y Aristóteles las doctrinas ajenas, y así las leerás tú.",
      bloques: [
        {
          t: "p",
          x: "Tras verbos de **decir y pensar** (*φημί*, afirmo; *νομίζω*, creo; *οἴομαι*, pienso), lo que en español va con «que…» se convierte en **acusativo + infinitivo**. Para traducir, pon «que», convierte el acusativo en sujeto y conjuga el infinitivo (por ahora, en presente). Si hay un predicado con *εἶναι*, también va en acusativo."
        },
        {
          t: "tabla",
          cab: ["Griego", "Palabra por palabra", "Español"],
          audio: [0],
          filas: [
            ["Φασὶ τὸν ἄνθρωπον ζῷον εἶναι.", "dicen el hombre animal ser", "Dicen que el hombre es un animal."],
            ["Νομίζω τὴν ψυχὴν ἀθάνατον εἶναι.", "creo el alma inmortal ser", "Creo que el alma es inmortal."],
            ["Σωκράτης φησὶ τὴν ἀρετὴν ἐπιστήμην εἶναι.", "Sócrates afirma la virtud conocimiento ser", "Sócrates afirma que la virtud es conocimiento."],
            ["Οἱ πολλοὶ νομίζουσι τὸν θάνατον κακὸν εἶναι.", "los muchos creen la muerte mal ser", "La mayoría cree que la muerte es un mal."],
            ["Πρωταγόρας φησὶ πάντων χρημάτων μέτρον ἄνθρωπον εἶναι.", "Protágoras dice de todas las cosas medida hombre ser", "Protágoras dice que el hombre es la medida de todas las cosas."]
          ]
        },
        {
          t: "p",
          x: "Si el sujeto del infinitivo es el mismo que el del verbo principal, no se repite, y el predicado va en **nominativo**: *Πρωταγόρας φησὶ σοφὸς εἶναι*, «Protágoras dice que (él) es sabio». Compáralo con *Πρωταγόρας φησὶ Σωκράτη σοφὸν εἶναι*, «Protágoras dice que Sócrates es sabio»."
        },
        {
          t: "p",
          x: "Con *δεῖ* y *χρή* (hay que), quien debe hacer algo va también en acusativo: *δεῖ τοὺς φύλακας τὴν πόλιν φυλάττειν*, «los guardianes deben vigilar la ciudad». Lo mismo tras *κελεύω* (ordeno) y *βούλομαι* (quiero): *βούλομαί σε μανθάνειν*, «quiero que aprendas»."
        },
        {
          t: "nota",
          x: "El latín hace lo mismo: *Dīcunt hominem esse animal* es *φασὶ τὸν ἄνθρωπον ζῷον εἶναι*. Si lo estudiaste en latín, ya lo tienes. Dos diferencias: el griego suele poner artículo (*τὸν ἄνθρωπον*), y tiene además *ὅτι* + indicativo, como nuestro «que»: *λέγει ὅτι ὁ ἄνθρωπος ζῷόν ἐστιν*, «dice que el hombre es un animal»."
        },
        {
          t: "nota",
          x: "*φησί* (dice) y *φασί* (dicen) son enclíticos, como *ἐστί*: se apoyan en la palabra anterior, así que a veces los verás sin acento (*Θαλῆς φησι…*) y otras con él (*Σωκράτης φησὶ…*), con las mismas reglas que *ἐστί*. Al principio de frase lo llevan siempre: *Φασὶ τὸν ἄνθρωπον…* Y *οὔ φημι* es «digo que no, niego»: *οὔ φημι τὸν θάνατον κακὸν εἶναι*, «niego que la muerte sea un mal»."
        },
        {
          t: "ej",
          items: [
            ["Θαλῆς φησι τὴν ἀρχὴν ὕδωρ εἶναι.", "Tales dice que el principio de todo es el agua."],
            ["Ἡράκλειτός φησι πάντα ῥεῖν.", "Heráclito dice que todo fluye."],
            ["Πρωταγόρας φησὶ σοφὸς εἶναι.", "Protágoras dice que es sabio."],
            ["Δεῖ τοὺς φύλακας τὴν πόλιν φυλάττειν.", "Los guardianes deben vigilar la ciudad."],
            ["Οἱ νόμοι κελεύουσι τοὺς πολίτας πείθεσθαι.", "Las leyes mandan a los ciudadanos obedecer."],
            ["Οὔ φημι τὸν θάνατον κακὸν εἶναι.", "Niego que la muerte sea un mal."],
            ["Λέγει ὅτι ὁ ἄνθρωπος ζῷόν ἐστιν.", "Dice que el hombre es un animal."]
          ]
        }
      ],
      vocab: [
        ["φησί", "dice, afirma (enclítico; ante vocal, φησίν)"],
        ["φασί", "dicen, afirman (enclítico; ante vocal, φασίν)"],
        ["οὔ φημι", "digo que no, niego"],
        ["νομίζω", "creer, considerar; tener por costumbre"],
        ["οἴομαι", "creer, pensar (también οἶμαι)"],
        ["ὅτι", "que (tras verbos de decir); porque"],
        ["κελεύω", "ordenar, mandar (+ acusativo e infinitivo)"],
        ["Θαλῆς, ὁ", "Tales de Mileto, el primer filósofo"],
        ["Ἡράκλειτος, -ου, ὁ", "Heráclito de Éfeso"],
        ["φασὶ τὸν ἄνθρωπον ζῷον εἶναι", "dicen que el hombre es un animal"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "*Φασὶ τὸν ἄνθρωπον ζῷον εἶναι* significa…",
          ops: ["Dicen que el hombre es un animal.", "Le dicen al hombre que es un animal.", "El hombre dice que es un animal."],
          ok: 0
        },
        { t: "mc", q: "En el acusativo con infinitivo, el sujeto del infinitivo va en…", ops: ["acusativo", "nominativo", "dativo"], ok: 0 },
        { t: "mc", q: "Completa: *Νομίζω ___ ἀθάνατον εἶναι* (creo que el alma es inmortal).", ops: ["τὴν ψυχήν", "ἡ ψυχή", "τῆς ψυχῆς"], ok: 0 },
        { t: "mc", q: "*Πρωταγόρας φησὶ σοφὸς εἶναι*: ¿quién es sabio?", ops: ["El propio Protágoras", "Sócrates", "Otra persona"], ok: 0 },
        { t: "mc", q: "*Οὔ φημι* significa…", ops: ["digo que no, niego", "no hablo", "no lo sé"], ok: 0 },
        { t: "oir", x: "φασί", ops: ["φασί", "φησί", "φημί"], ok: 0 },
        { t: "orden", es: "Dicen que el hombre es un animal.", x: "Φασὶ τὸν ἄνθρωπον ζῷον εἶναι." },
        { t: "orden", es: "Creo que el alma es inmortal.", x: "Νομίζω τὴν ψυχὴν ἀθάνατον εἶναι." }
      ]
    }
  ],
  lecturas: [
    {
      id: "grc4-r1",
      titulo: "Φύσις",
      nivel: "Inicial",
      texto: "Λύσις καὶ Σωκράτης ἐκ τοῦ γυμνασίου πρὸς τὸν ποταμὸν βαδίζουσιν.\n\nΛύσις· «Ὦ Σώκρατες, τί ἐστιν ἡ φύσις;»\nΣωκράτης· «Καλὴ ἡ ἐρώτησις, ὦ Λύσι. Οἱ πρῶτοι φιλόσοφοι βιβλία περὶ φύσεως γράφουσιν· τὴν γὰρ ἀρχὴν πάντων μανθάνειν βούλονται. Θαλῆς μὲν ὕδωρ λέγει τὴν ἀρχήν, Ἡράκλειτος δὲ πῦρ.»\nΛύσις· «Καὶ σύ, ὦ Σώκρατες; Βούλει τὴν φύσιν τῶν δένδρων μανθάνειν;»\nΣωκράτης· «Οὐκ ἔγωγε. Τὰ μὲν γὰρ δένδρα οὐδέν με διδάσκειν ἐθέλει, οἱ δὲ ἐν τῇ πόλει ἄνθρωποι. Ἐγὼ τὴν τοῦ ἀνθρώπου φύσιν μανθάνειν βούλομαι.»",
      traduccion: "Lisis y Sócrates van caminando desde el gimnasio hacia el río.\n\nLisis: «Sócrates, ¿qué es la naturaleza?»\nSócrates: «Buena pregunta, Lisis. Los primeros filósofos escriben libros sobre la naturaleza, porque quieren conocer el principio de todas las cosas. Tales dice que el principio es el agua; Heráclito, el fuego».\nLisis: «¿Y tú, Sócrates? ¿Quieres conocer la naturaleza de los árboles?»\nSócrates: «Yo no. Los árboles no quieren enseñarme nada; la gente de la ciudad, sí. Yo quiero conocer la naturaleza del hombre».",
      notas: "Los primeros filósofos buscaban la *ἀρχή*, el principio de todas las cosas, y a sus obras se les solía dar el título *Περὶ φύσεως*, «Sobre la naturaleza». *Φύσις* viene de *φύομαι*, «crecer, nacer»: es lo que una cosa es por sí misma, desde su origen. La respuesta de Sócrates sobre los árboles está adaptada del *Fedro* (230d).",
      glosa: {
        "λύσις": "Lisis, muchacho ateniense (genitivo Λύσιδος)",
        "καὶ": "y; también («καὶ σύ», ¿y tú?)",
        "σωκράτης": "Sócrates (genitivo Σωκράτους)",
        "ἐκ": "de, desde (+ genitivo)",
        "τοῦ": "del (genitivo del artículo masculino o neutro)",
        "γυμνασίου": "gimnasio (genitivo de γυμνάσιον)",
        "πρὸς": "hacia (+ acusativo)",
        "τὸν": "el (acusativo del artículo masculino)",
        "ποταμὸν": "río (acusativo de ποταμός)",
        "βαδίζουσιν": "caminan, van andando (de βαδίζω)",
        "ὦ": "oh (acompaña al vocativo; no se suele traducir)",
        "σώκρατες": "Sócrates (vocativo de Σωκράτης)",
        "τί": "qué (interrogativo)",
        "ἐστιν": "es (de εἰμί, enclítico)",
        "ἡ": "la (artículo femenino)",
        "φύσις": "naturaleza (nominativo; genitivo φύσεως)",
        "καλὴ": "bella, buena (femenino de καλός)",
        "ἐρώτησις": "pregunta (se declina como φύσις)",
        "λύσι": "Lisis (vocativo de Λύσις)",
        "οἱ": "los (artículo masculino plural)",
        "πρῶτοι": "primeros (de πρῶτος)",
        "φιλόσοφοι": "filósofos",
        "βιβλία": "libros (acusativo plural de βιβλίον)",
        "περὶ": "sobre, acerca de (+ genitivo)",
        "φύσεως": "naturaleza (genitivo de φύσις): «περὶ φύσεως», sobre la naturaleza",
        "γράφουσιν": "escriben (de γράφω)",
        "τὴν": "la (acusativo del artículo femenino)",
        "γὰρ": "pues, porque (va en segundo lugar)",
        "ἀρχὴν": "principio, origen (acusativo de ἀρχή)",
        "πάντων": "de todas las cosas (genitivo plural de πᾶς)",
        "μανθάνειν": "aprender, conocer (infinitivo de μανθάνω)",
        "βούλονται": "quieren (de βούλομαι)",
        "θαλῆς": "Tales de Mileto, el primer filósofo",
        "μὲν": "por un lado (anuncia un δέ)",
        "ὕδωρ": "agua (neutro de la 3.ª; genitivo ὕδατος)",
        "λέγει": "dice; con dos acusativos, «dice que es», «llama»",
        "ἡράκλειτος": "Heráclito de Éfeso",
        "δὲ": "y, en cambio (responde a μέν)",
        "πῦρ": "fuego (neutro de la 3.ª; genitivo πυρός)",
        "σύ": "tú",
        "βούλει": "quieres (2.ª persona de βούλομαι)",
        "φύσιν": "naturaleza (acusativo de φύσις)",
        "τῶν": "de los (genitivo plural del artículo)",
        "δένδρων": "árboles (genitivo plural de δένδρον)",
        "οὐκ": "no (ante vocal)",
        "ἔγωγε": "yo, por mi parte (ἐγώ + γε): «οὐκ ἔγωγε», yo no",
        "τὰ": "los (artículo neutro plural)",
        "δένδρα": "árboles (neutro plural: lleva el verbo en singular)",
        "οὐδέν": "nada",
        "με": "me (acusativo de ἐγώ, enclítico)",
        "διδάσκειν": "enseñar (infinitivo de διδάσκω)",
        "ἐθέλει": "quiere, está dispuesto (de ἐθέλω)",
        "ἐν": "en (+ dativo)",
        "τῇ": "la (dativo del artículo femenino)",
        "πόλει": "ciudad (dativo de πόλις)",
        "ἄνθρωποι": "personas, hombres (se sobrentiende: «sí quieren enseñarme»)",
        "ἐγὼ": "yo",
        "ἀνθρώπου": "del hombre, del ser humano (genitivo de ἄνθρωπος)",
        "βούλομαι": "quiero"
      },
      preguntas: [
        { q: "¿Sobre qué escriben los primeros filósofos?", ops: ["Sobre la naturaleza", "Sobre la ciudad", "Sobre los árboles"], ok: 0 },
        { q: "Según Tales, ¿cuál es el principio de todo?", ops: ["El agua", "El fuego", "El aire"], ok: 0 },
        { q: "¿Qué quiere conocer Sócrates?", ops: ["La naturaleza del hombre", "La naturaleza de los árboles", "El principio de todas las cosas"], ok: 0 }
      ]
    },
    {
      id: "grc4-r2",
      titulo: "Ἡ πόλις",
      nivel: "Inicial",
      texto: "Σωκράτης καὶ Κρίτων ἐν τῇ ἀγορᾷ εἰσιν. Ἐκεῖ πολλοὶ ἄνδρες περὶ τῶν τῆς πόλεως πραγμάτων διαλέγονται.\n\nΚρίτων· «Ὦ Σώκρατες, ἡ πόλις ἡμῶν μεγάλη καὶ καλή ἐστιν. Ἰδοὺ ἡ ἀκρόπολις καὶ τὰ τείχη.»\nΣωκράτης· «Ἀληθῆ λέγεις, ὦ Κρίτων. Ἀλλὰ τί ἐστιν ἡ πόλις; Ἆρα τὰ τείχη;»\nΚρίτων· «Οὐ δῆτα. Ἡ πόλις ἐστὶν οἱ πολῖται.»\nΣωκράτης· «Εὖ λέγεις. Ἄνδρες γὰρ πόλις, καὶ οὐ τείχη. Δεῖ οὖν πάντας τοὺς πολίτας ἀγαθοὺς εἶναι, καὶ τοὺς φύλακας τὴν πόλιν φυλάττειν, καὶ τοὺς νέους τὴν ἀρετὴν μανθάνειν.»\nΚρίτων· «Καὶ τίς τοὺς νέους τὴν ἀρετὴν διδάσκει; Οἱ σοφισταί;»\nΣωκράτης· «Πρωταγόρας μέν φησιν ἀρετὴν διδάσκειν· ἐγὼ δὲ οὔπω πείθομαι.»",
      traduccion: "Sócrates y Critón están en el ágora. Allí muchos hombres conversan sobre los asuntos de la ciudad.\n\nCritón: «Sócrates, nuestra ciudad es grande y hermosa. Mira la Acrópolis y las murallas».\nSócrates: «Tienes razón, Critón. Pero ¿qué es la ciudad? ¿Las murallas?»\nCritón: «Claro que no. La ciudad son los ciudadanos».\nSócrates: «Bien dicho. Porque la ciudad son los hombres, y no las murallas. Por eso todos los ciudadanos tienen que ser buenos, los guardianes tienen que vigilar la ciudad y los jóvenes tienen que aprender la virtud».\nCritón: «¿Y quién enseña la virtud a los jóvenes? ¿Los sofistas?»\nSócrates: «Protágoras dice que él la enseña; pero yo todavía no estoy convencido».",
      notas: "*Ἄνδρες γὰρ πόλις, καὶ οὐ τείχη* viene de Tucídides (7.77): con esas palabras anima el general Nicias a sus soldados en Sicilia. Fíjate en que dice *ἄνδρες*, no *ἄνθρωποι*: habla de los varones que defienden la ciudad. Y fíjate en *δεῖ* + acusativo + infinitivo: *δεῖ τοὺς φύλακας τὴν πόλιν φυλάττειν*, «los guardianes deben vigilar la ciudad».",
      glosa: {
        "σωκράτης": "Sócrates",
        "καὶ": "y",
        "κρίτων": "Critón, amigo de Sócrates (también vocativo)",
        "ἐν": "en (+ dativo)",
        "τῇ": "la (dativo del artículo femenino)",
        "ἀγορᾷ": "ágora, la plaza pública (dativo de ἀγορά)",
        "εἰσιν": "están, son (de εἰμί, enclítico)",
        "ἐκεῖ": "allí",
        "πολλοὶ": "muchos (de πολύς)",
        "ἄνδρες": "hombres, varones (nominativo plural de ἀνήρ)",
        "περὶ": "sobre, acerca de (+ genitivo)",
        "τῶν": "los (genitivo plural del artículo)",
        "τῆς": "de la (genitivo del artículo femenino)",
        "πόλεως": "de la ciudad (genitivo de πόλις)",
        "πραγμάτων": "asuntos (genitivo plural de πρᾶγμα): «τὰ τῆς πόλεως πράγματα», los asuntos públicos",
        "διαλέγονται": "conversan, discuten (de διαλέγομαι)",
        "ὦ": "oh (acompaña al vocativo)",
        "σώκρατες": "Sócrates (vocativo)",
        "ἡ": "la (artículo femenino)",
        "πόλις": "ciudad",
        "ἡμῶν": "nuestra (lit. «de nosotros», genitivo de ἡμεῖς)",
        "μεγάλη": "grande (femenino de μέγας)",
        "καλή": "bella, hermosa (femenino de καλός)",
        "ἐστιν": "es (de εἰμί, enclítico)",
        "ἐστὶν": "es (de εἰμί; aquí conserva su acento tras πόλις)",
        "ἰδοὺ": "¡mira!, ¡ahí está!",
        "ἀκρόπολις": "acrópolis, la ciudadela de Atenas (se declina como πόλις)",
        "τὰ": "los (artículo neutro plural)",
        "τείχη": "murallas (plural de τεῖχος, -ους, τό)",
        "ἀληθῆ": "cosas verdaderas (neutro plural de ἀληθής): «ἀληθῆ λέγεις», tienes razón",
        "λέγεις": "dices (de λέγω)",
        "ἀλλὰ": "pero",
        "τί": "qué",
        "ἆρα": "partícula que introduce una pregunta (no se traduce)",
        "οὐ": "no",
        "δῆτα": "ciertamente: «οὐ δῆτα», claro que no",
        "οἱ": "los (artículo masculino plural)",
        "πολῖται": "ciudadanos (plural de πολίτης)",
        "εὖ": "bien",
        "γὰρ": "pues, porque (va en segundo lugar)",
        "δεῖ": "hay que, es necesario (+ acusativo e infinitivo)",
        "οὖν": "así pues, por tanto (va en segundo lugar)",
        "πάντας": "todos (acusativo plural de πᾶς)",
        "τοὺς": "los (acusativo plural del artículo masculino)",
        "πολίτας": "ciudadanos (acusativo plural de πολίτης)",
        "ἀγαθοὺς": "buenos (acusativo plural de ἀγαθός)",
        "εἶναι": "ser (infinitivo de εἰμί)",
        "φύλακας": "guardianes (acusativo plural de φύλαξ)",
        "τὴν": "la (acusativo del artículo femenino)",
        "πόλιν": "ciudad (acusativo de πόλις)",
        "φυλάττειν": "vigilar, proteger (infinitivo de φυλάττω)",
        "νέους": "jóvenes (acusativo plural de νέος)",
        "ἀρετὴν": "virtud, excelencia (acusativo de ἀρετή)",
        "μανθάνειν": "aprender (infinitivo de μανθάνω)",
        "τίς": "quién",
        "διδάσκει": "enseña (de διδάσκω, con dos acusativos: a quién y qué)",
        "σοφισταί": "sofistas (plural de σοφιστής)",
        "πρωταγόρας": "Protágoras, el famoso sofista",
        "μέν": "por su parte (anuncia un δέ)",
        "φησιν": "dice, afirma (de φημί, enclítico): con infinitivo, «dice que él enseña»",
        "διδάσκειν": "enseñar (infinitivo de διδάσκω)",
        "ἐγὼ": "yo",
        "δὲ": "pero, en cambio",
        "οὔπω": "todavía no",
        "πείθομαι": "me convenzo, estoy convencido (voz media de πείθω)"
      },
      preguntas: [
        { q: "¿Dónde están Sócrates y Critón?", ops: ["En el ágora", "En la Acrópolis", "En el gimnasio"], ok: 0 },
        { q: "Según Sócrates, ¿qué es la ciudad?", ops: ["Los hombres, no las murallas", "Las murallas y las casas", "La Acrópolis"], ok: 0 },
        { q: "¿Qué dice Protágoras?", ops: ["Que él enseña la virtud", "Que la virtud no se puede enseñar", "Que los jóvenes no deben aprender"], ok: 0 }
      ]
    },
    {
      id: "grc4-r3",
      titulo: "Σῶμα καὶ ψυχή",
      nivel: "Intermedio",
      texto: "Ἐν τῷ δεσμωτηρίῳ Σωκράτης τοῖς φίλοις διαλέγεται· πάρεισι γὰρ Φαίδων καὶ Κρίτων καὶ ἄλλοι πολλοί.\n\nΦαίδων· «Ὦ Σώκρατες, οἱ πολλοὶ νομίζουσι τὸν θάνατον κακὸν εἶναι.»\nΣωκράτης· «Ἐγὼ δὲ οὔ. Φημὶ γὰρ τὸν ἄνθρωπον ἐκ σώματος καὶ ψυχῆς εἶναι, καὶ τὸ μὲν σῶμα θνητὸν εἶναι, τὴν δὲ ψυχὴν ἀθάνατον. Φασὶ δέ τινες καὶ τὸ σῶμα σῆμα εἶναι τῆς ψυχῆς. Ἡ δὲ φύσις τῷ μὲν σώματι δουλεύειν καὶ ἄρχεσθαι προστάττει, τῇ δὲ ψυχῇ ἄρχειν καὶ δεσπόζειν. Οἱ μὲν οὖν πολλοὶ τοῦ σώματος καὶ τῶν χρημάτων φροντίζουσιν, ὁ δὲ φιλόσοφος τῆς ψυχῆς. Διὰ τοῦτο οὐ φεύγει τὸν θάνατον.»\nΚρίτων· «Ἀλλ᾽ ἡμεῖς οὐ βουλόμεθά σε ἀποθνῄσκειν, ὦ Σώκρατες.»\nΣωκράτης· «Οὐ τὸν θάνατον δεῖ φεύγειν, ὦ Κρίτων, ἀλλὰ τὴν πονηρίαν.»",
      traduccion: "En la cárcel, Sócrates conversa con sus amigos: están allí Fedón, Critón y muchos otros.\n\nFedón: «Sócrates, la mayoría cree que la muerte es un mal».\nSócrates: «Yo no. Porque afirmo que el hombre está hecho de cuerpo y alma, y que el cuerpo es mortal, pero el alma, inmortal. Algunos dicen incluso que el cuerpo es la tumba del alma. La naturaleza manda al cuerpo servir y ser gobernado, y al alma, gobernar y mandar. Así pues, la mayoría se preocupa del cuerpo y del dinero; el filósofo, en cambio, del alma. Por eso no huye de la muerte».\nCritón: «Pero nosotros no queremos que mueras, Sócrates».\nSócrates: «No es de la muerte de lo que hay que huir, Critón, sino de la maldad».",
      notas: "La frase sobre la naturaleza adapta el *Fedón* (80a): cuando el alma y el cuerpo están juntos, la naturaleza manda al cuerpo *δουλεύειν καὶ ἄρχεσθαι* y al alma *ἄρχειν καὶ δεσπόζειν*. Fíjate en *ἄρχειν* (gobernar, activa) frente a *ἄρχεσθαι* (ser gobernado, pasiva). El juego de palabras *σῶμα σῆμα*, «el cuerpo, una tumba», lo recoge Platón en el *Crátilo* (400c). La última frase se inspira en la *Apología* (39a), donde Sócrates dice que lo difícil no es escapar de la muerte, sino de la maldad.",
      glosa: {
        "ἐν": "en (+ dativo)",
        "τῷ": "el (dativo del artículo masculino o neutro)",
        "δεσμωτηρίῳ": "cárcel (dativo de δεσμωτήριον)",
        "σωκράτης": "Sócrates",
        "τοῖς": "los (dativo plural del artículo)",
        "φίλοις": "amigos (dativo plural de φίλος): «conversa con sus amigos»",
        "διαλέγεται": "conversa (de διαλέγομαι, + dativo)",
        "πάρεισι": "están presentes (de πάρειμι)",
        "γὰρ": "pues, porque (va en segundo lugar)",
        "φαίδων": "Fedón, joven discípulo de Sócrates",
        "καὶ": "y; también, incluso",
        "κρίτων": "Critón, viejo amigo de Sócrates (también vocativo)",
        "ἄλλοι": "otros",
        "πολλοί": "muchos",
        "ὦ": "oh (acompaña al vocativo)",
        "σώκρατες": "Sócrates (vocativo)",
        "οἱ": "los (artículo masculino plural)",
        "πολλοὶ": "muchos: «οἱ πολλοί», la mayoría, la gente",
        "νομίζουσι": "creen, consideran (de νομίζω, + acusativo con infinitivo)",
        "τὸν": "el (acusativo del artículo masculino)",
        "θάνατον": "muerte (acusativo de θάνατος)",
        "κακὸν": "un mal, algo malo (acusativo: predicado con εἶναι)",
        "εἶναι": "ser (infinitivo de εἰμί)",
        "ἐγὼ": "yo",
        "δὲ": "pero, y (va en segundo lugar)",
        "οὔ": "no (con acento al final de frase)",
        "φημὶ": "afirmo, digo (de φημί; al principio de frase lleva acento)",
        "ἄνθρωπον": "hombre, ser humano (acusativo: sujeto del infinitivo)",
        "ἐκ": "de (+ genitivo): «ἐκ σώματος καὶ ψυχῆς εἶναι», estar hecho de cuerpo y alma",
        "σώματος": "cuerpo (genitivo de σῶμα)",
        "ψυχῆς": "alma (genitivo de ψυχή)",
        "τὸ": "el (artículo neutro)",
        "μὲν": "por un lado (anuncia un δέ)",
        "σῶμα": "cuerpo (aquí acusativo, igual que el nominativo)",
        "θνητὸν": "mortal (neutro; predicado con εἶναι)",
        "τὴν": "la (acusativo del artículo femenino)",
        "ψυχὴν": "alma (acusativo de ψυχή: sujeto del infinitivo)",
        "ἀθάνατον": "inmortal (acusativo femenino de ἀθάνατος, -ον; se sobrentiende εἶναι)",
        "φασὶ": "dicen (de φημί; al principio de frase lleva acento)",
        "δέ": "y, pero (aquí con acento agudo porque le sigue un enclítico)",
        "τινες": "algunos (de τις, enclítico)",
        "σῆμα": "tumba; señal (juego de palabras con σῶμα)",
        "τῆς": "de la (genitivo del artículo femenino)",
        "ἡ": "la (artículo femenino)",
        "φύσις": "naturaleza",
        "σώματι": "cuerpo (dativo de σῶμα: «al cuerpo»)",
        "δουλεύειν": "servir, ser esclavo (infinitivo de δουλεύω)",
        "ἄρχεσθαι": "ser gobernado (infinitivo pasivo de ἄρχω)",
        "προστάττει": "manda, ordena (de προστάττω, + dativo e infinitivo)",
        "τῇ": "la (dativo del artículo femenino)",
        "ψυχῇ": "alma (dativo de ψυχή: «al alma»)",
        "ἄρχειν": "gobernar (infinitivo activo de ἄρχω)",
        "δεσπόζειν": "mandar, ser dueño (infinitivo de δεσπόζω)",
        "οὖν": "así pues (va en segundo lugar)",
        "τοῦ": "del (genitivo del artículo masculino o neutro)",
        "τῶν": "de los (genitivo plural del artículo)",
        "χρημάτων": "dinero, bienes (genitivo plural de χρῆμα)",
        "φροντίζουσιν": "se preocupan (de φροντίζω, + genitivo)",
        "ὁ": "el (artículo masculino)",
        "φιλόσοφος": "filósofo",
        "διὰ": "por (+ acusativo, causa): «διὰ τοῦτο», por eso",
        "τοῦτο": "esto",
        "οὐ": "no",
        "φεύγει": "huye de (de φεύγω, + acusativo)",
        "ἀλλ": "pero (= ἀλλά, con la α elidida ante vocal)",
        "ἡμεῖς": "nosotros",
        "βουλόμεθά": "queremos (de βούλομαι; lleva un segundo acento por el enclítico σε)",
        "σε": "te (acusativo de σύ, enclítico): sujeto del infinitivo",
        "ἀποθνῄσκειν": "morir (infinitivo de ἀποθνῄσκω)",
        "δεῖ": "hay que (+ infinitivo)",
        "φεύγειν": "huir de (infinitivo de φεύγω)",
        "ἀλλὰ": "sino",
        "πονηρίαν": "maldad (acusativo de πονηρία)"
      },
      preguntas: [
        { q: "¿Qué cree la mayoría sobre la muerte?", ops: ["Que es un mal", "Que es un bien", "Que no existe"], ok: 0 },
        { q: "Según la naturaleza, ¿qué le toca hacer al alma?", ops: ["Gobernar y mandar", "Servir y obedecer", "Huir de la muerte"], ok: 0 },
        { q: "¿De qué se preocupa el filósofo?", ops: ["Del alma", "Del cuerpo", "Del dinero"], ok: 0 },
        { q: "Según Sócrates, ¿de qué hay que huir?", ops: ["De la maldad", "De la muerte", "De la cárcel"], ok: 0 }
      ]
    },
    {
      id: "grc4-r4",
      titulo: "Ὁ ἄνθρωπος φύσει πολιτικὸν ζῷον",
      nivel: "Intermedio",
      texto: "Ἀριστοτέλης, ὁ τοῦ Πλάτωνος μαθητής, ἐν τῷ Λυκείῳ τοῖς νέοις διαλέγεται. Λέγει δὲ τὸν ἄνθρωπον φύσει πολιτικὸν ζῷον εἶναι. Τί δὲ τοῦτο σημαίνει;\n\nΠρῶτον μὲν ἐξ ἀνδρὸς καὶ γυναικὸς οἰκία γίγνεται, ἐκ δὲ πολλῶν οἰκιῶν κώμη, ἐκ δὲ πολλῶν κωμῶν πόλις. Γίγνεται μὲν οὖν ἡ πόλις τοῦ ζῆν ἕνεκα, ἔστι δὲ τοῦ εὖ ζῆν ἕνεκα. Ἡ πόλις ἄρα τῶν φύσει ἐστίν, καὶ ὁ ἄνθρωπος φύσει πολιτικὸν ζῷον.\n\nἜτι δὲ λόγον μόνον ἄνθρωπος ἔχει τῶν ζῴων. Ἡ μὲν γὰρ φωνὴ τὸ ἡδὺ καὶ τὸ λυπηρὸν σημαίνει, καὶ πολλὰ ζῷα φωνὴν ἔχει· ὁ δὲ λόγος τὸ δίκαιον καὶ τὸ ἄδικον. Διὰ τοῦτο πάντες ἄνθρωποι ἐν πόλει ζῆν βούλονται.\n\nΤὸν δὲ ἄπολιν ἢ θηρίον ἢ θεὸν εἶναι λέγει.",
      traduccion: "Aristóteles, el discípulo de Platón, conversa con los jóvenes en el Liceo. Dice que el hombre es por naturaleza un animal político. ¿Y qué significa esto?\n\nPrimero, de un hombre y una mujer nace una familia; de muchas familias, una aldea; y de muchas aldeas, una ciudad. Así pues, la ciudad nace para que podamos vivir, pero existe para que vivamos bien. Por tanto, la ciudad es una de las cosas que existen por naturaleza, y el hombre es por naturaleza un animal político.\n\nAdemás, de todos los animales, solo el hombre tiene palabra. La voz indica lo agradable y lo doloroso, y muchos animales tienen voz; la palabra, en cambio, indica lo justo y lo injusto. Por eso todos los hombres quieren vivir en una ciudad.\n\nY del que vive sin ciudad dice que es o una bestia o un dios.",
      notas: "*Ὁ ἄνθρωπος φύσει πολιτικὸν ζῷον* y *λόγον δὲ μόνον ἄνθρωπος ἔχει τῶν ζῴων* son frases de la *Política* de Aristóteles (1253a); el resto simplifica su argumento. *Πολιτικόν* no quiere decir «aficionado a la política», sino «hecho para vivir en la *πόλις*», en comunidad con otros. Y *λόγος* es a la vez palabra y razón: con él distinguimos lo justo de lo injusto, y por eso necesitamos la ciudad.",
      glosa: {
        "ἀριστοτέλης": "Aristóteles (genitivo Ἀριστοτέλους)",
        "ὁ": "el (artículo masculino)",
        "τοῦ": "del (genitivo del artículo): «τοῦ ζῆν», del vivir",
        "πλάτωνος": "de Platón (genitivo de Πλάτων)",
        "μαθητής": "discípulo",
        "ἐν": "en (+ dativo)",
        "τῷ": "el (dativo del artículo masculino o neutro)",
        "λυκείῳ": "Liceo (dativo de Λύκειον), el gimnasio donde enseñaba Aristóteles",
        "τοῖς": "los (dativo plural del artículo)",
        "νέοις": "jóvenes (dativo plural de νέος)",
        "διαλέγεται": "conversa (de διαλέγομαι, + dativo)",
        "λέγει": "dice (+ acusativo con infinitivo: «dice que…»)",
        "δὲ": "y; pero (va en segundo lugar)",
        "τὸν": "el (acusativo del artículo masculino)",
        "ἄνθρωπον": "el hombre, el ser humano (acusativo: sujeto del infinitivo)",
        "φύσει": "por naturaleza (dativo de φύσις)",
        "πολιτικὸν": "político: hecho para vivir en la πόλις",
        "ζῷον": "animal, ser vivo",
        "εἶναι": "ser (infinitivo de εἰμί)",
        "τί": "qué",
        "τοῦτο": "esto",
        "σημαίνει": "significa; indica (de σημαίνω)",
        "πρῶτον": "primero",
        "μὲν": "por un lado (anuncia un δέ)",
        "ἐξ": "de (= ἐκ ante vocal, + genitivo)",
        "ἀνδρὸς": "varón (genitivo de ἀνήρ)",
        "καὶ": "y; también",
        "γυναικὸς": "mujer (genitivo de γυνή)",
        "οἰκία": "casa, familia",
        "γίγνεται": "nace, llega a ser (de γίγνομαι)",
        "ἐκ": "de (+ genitivo)",
        "πολλῶν": "muchas (genitivo plural de πολύς)",
        "οἰκιῶν": "casas, familias (genitivo plural de οἰκία)",
        "κώμη": "aldea",
        "κωμῶν": "aldeas (genitivo plural de κώμη)",
        "πόλις": "ciudad",
        "οὖν": "así pues (va en segundo lugar)",
        "ἡ": "la (artículo femenino)",
        "ζῆν": "vivir (infinitivo de ζάω): «τοῦ ζῆν ἕνεκα», para vivir",
        "ἕνεκα": "por causa de, para (+ genitivo; va detrás)",
        "ἔστι": "existe, hay (ἐστί con acento en la primera sílaba)",
        "εὖ": "bien: «τὸ εὖ ζῆν», el vivir bien",
        "ἄρα": "por tanto, así pues",
        "τῶν": "de los, de las (genitivo plural del artículo): «τῶν φύσει», de las cosas que son por naturaleza",
        "ἐστίν": "es (de εἰμί)",
        "ἄνθρωπος": "el hombre, el ser humano",
        "ἔτι": "además",
        "λόγον": "palabra, razón (acusativo de λόγος)",
        "μόνον": "solo, únicamente",
        "ἔχει": "tiene",
        "ζῴων": "animales (genitivo plural de ζῷον): «de los animales»",
        "γὰρ": "pues (va en segundo lugar)",
        "φωνὴ": "voz",
        "τὸ": "lo (artículo neutro: convierte el adjetivo en sustantivo)",
        "ἡδὺ": "agradable: «τὸ ἡδύ», lo agradable, el placer",
        "λυπηρὸν": "doloroso: «τὸ λυπηρόν», lo doloroso",
        "πολλὰ": "muchos (neutro plural de πολύς)",
        "ζῷα": "animales (plural de ζῷον: neutro plural con verbo en singular)",
        "φωνὴν": "voz (acusativo de φωνή)",
        "λόγος": "palabra, razón, lenguaje",
        "δίκαιον": "justo: «τὸ δίκαιον», lo justo",
        "ἄδικον": "injusto: «τὸ ἄδικον», lo injusto",
        "διὰ": "por (+ acusativo): «διὰ τοῦτο», por eso",
        "πάντες": "todos (nominativo plural de πᾶς)",
        "ἄνθρωποι": "hombres, seres humanos",
        "πόλει": "ciudad (dativo de πόλις)",
        "βούλονται": "quieren (de βούλομαι)",
        "ἄπολιν": "el que no tiene ciudad (acusativo de ἄπολις, «sin πόλις»)",
        "ἢ": "o: «ἢ… ἢ…», o… o…",
        "θηρίον": "bestia, fiera",
        "θεὸν": "dios (acusativo de θεός)"
      },
      preguntas: [
        { q: "¿De qué nace la ciudad?", ops: ["De muchas aldeas", "De un rey", "De las leyes"], ok: 0 },
        { q: "¿Para qué existe la ciudad, según Aristóteles?", ops: ["Para vivir bien", "Solo para vivir", "Para hacer la guerra"], ok: 0 },
        { q: "¿Qué tiene solo el hombre entre los animales?", ops: ["La palabra (λόγος)", "La voz", "El placer"], ok: 0 },
        { q: "¿Qué es el que vive sin ciudad?", ops: ["O una bestia o un dios", "Un buen ciudadano", "Un filósofo"], ok: 0 }
      ]
    }
  ]
});
