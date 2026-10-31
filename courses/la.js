// Glossa · curso de latín (meta: leer lógica escolástica). Pronunciación clásica; vocales largas con raya (ā).
window.CONTENT = window.CONTENT || {};
window.CONTENT.la = {
  semanasTitulos: ['Sonidos, primeras frases y la página antigua', 'Los casos', 'Tercera declinación y verbos', 'Pasiva, infinitivo y «dicitur quod»', 'Subjuntivo y deponentes', 'El pasado y los participios', 'Subordinadas, gerundio y textos reales', 'La página de Juan de Santo Tomás'],
  programa: [
    'Pronunciación; esse; 1.ª y 2.ª declinación en nominativo, acusativo y genitivo; 3.ª persona del presente; preguntas; tipografía antigua (ſ, v/u, &, æ).',
    'Todos los casos (dativo, ablativo, vocativo); preposiciones; adjetivos de la 1.ª y 2.ª; vocabulario de lógica: nomen, verbum, oratio, signum, conceptus.',
    'Tercera declinación (pars, ratio, mens, propositio); pronombres; relativo qui, quae, quod; presente de las cuatro conjugaciones.',
    'Voz pasiva (dicitur, definitur, componitur); infinitivo y acusativo con infinitivo; «dicitur quod» escolástico; 4.ª y 5.ª declinación (intellectus, res).',
    'Subjuntivo presente e imperfecto; ut, ne, cum; deponentes (videtur, sequitur); preguntas indirectas (utrum).',
    'Perfecto y pluscuamperfecto; participios; ablativo absoluto.',
    'Gerundio y gerundivo (ad significandum); quatenus, secundum quod, licet; comparativos y adverbios; textos reales con notas.',
    'Repaso; abreviaturas de citas (D. Thom., lect., §); lectura de la página de Juan de Santo Tomás.'
  ],
  temasChat: ['la lógica', 'el maestro y el discípulo', 'qué es la filosofía', 'Aristóteles y santo Tomás'],
  semanas: [
    {
      n: 1,
      lecciones: [
        {
          id: 'la1-1', titulo: 'Pronunciación clásica', min: 40,
          intro: 'Leerás el latín como lo pronunciaban Cicerón y Séneca. Las vocales son las del español; las largas llevan raya (ā) y duran el doble.',
          bloques: [
            { t: 'tabla', cab: ['Letra', 'Suena', 'Ejemplo'], audio: [2], filas: [
              ['c', 'siempre k', 'Cicerō'], ['g', 'siempre g de «gato»', 'magister'], ['v', 'u breve, como en «huevo»', 'vīta'],
              ['ae', 'ai', 'Caesar'], ['qu', 'cu, como en «cuando»', 'quid'], ['ph, th', 'p, t (aspiradas)', 'philosophia']] },
            { t: 'p', x: 'El acento nunca se escribe. Cae en la penúltima sílaba si es larga; si no, en la antepenúltima: *sa-pi-EN-ti-a*, *dis-CI-pu-lus*, *a-MĪ-cus*.' },
            { t: 'ej', items: [['Cicerō', 'Cicerón'], ['Sēneca', 'Séneca'], ['philosophia', 'filosofía'], ['vīta', 'vida'], ['nātūra', 'naturaleza'], ['animus', 'alma, mente'], ['sapientia', 'sabiduría'], ['amīcus', 'amigo']] }
          ],
          vocab: [['philosophia', 'filosofía'], ['vīta', 'vida'], ['nātūra', 'naturaleza'], ['animus', 'alma, mente, ánimo'], ['sapientia', 'sabiduría'], ['amīcus', 'amigo'], ['quid', 'qué'], ['magister', 'maestro']],
          ejercicios: [
            { t: 'mc', q: '¿Cómo suena la c de «Cicerō» en pronunciación clásica?', ops: ['Siempre como k: «Kíkero»', 'Como z: «Zízero»', 'Como ch: «Chíchero»'], ok: 0 },
            { t: 'mc', q: '¿Dónde va el acento en «sapientia»?', ops: ['sa-pi-EN-ti-a', 'SA-pi-en-ti-a', 'sa-pi-en-TI-a'], ok: 0 },
            { t: 'oir', x: 'vīta', ops: ['vīta', 'via', 'vīnum'], ok: 0 },
            { t: 'mc', q: '«ae» se pronuncia…', ops: ['ai', 'e', 'a-e'], ok: 0 }
          ]
        },
        {
          id: 'la1-2', titulo: 'Sum, es, est: el verbo ser', min: 45,
          intro: '*Esse* (ser) es el verbo más frecuente de la filosofía. Suele ir al final de la frase.',
          bloques: [
            { t: 'tabla', cab: ['Persona', 'Latín', 'Español'], audio: [1], filas: [
              ['ego', 'sum', 'soy'], ['tū', 'es', 'eres'], ['is, ea', 'est', 'es'], ['nōs', 'sumus', 'somos'], ['vōs', 'estis', 'sois'], ['eī, eae', 'sunt', 'son']] },
            { t: 'ej', items: [['Sēneca philosophus est.', 'Séneca es filósofo.'], ['Lūcīlius amīcus Sēnecae est.', 'Lucilio es amigo de Séneca.'], ['Philosophia ars vītae est.', 'La filosofía es el arte de vivir.'], ['Ego discipulus sum.', 'Yo soy alumno.'], ['Nōs amīcī sumus.', 'Somos amigos.']] },
            { t: 'nota', x: 'En latín no hay artículos: *philosophus* es «filósofo», «el filósofo» o «un filósofo», según el contexto.' }
          ],
          vocab: [['sum', 'soy'], ['es', 'eres'], ['est', 'es, está'], ['sumus', 'somos'], ['estis', 'sois'], ['sunt', 'son, están'], ['ego', 'yo'], ['tū', 'tú'], ['philosophus', 'filósofo'], ['discipulus', 'alumno, discípulo'], ['ars', 'arte, técnica'], ['et', 'y'], ['nōn', 'no']],
          ejercicios: [
            { t: 'mc', q: '«Sumus» significa…', ops: ['somos', 'soy', 'son'], ok: 0 },
            { t: 'mc', q: 'Completa: «Sēneca et Lūcīlius amīcī ___.»', ops: ['sunt', 'est', 'sum'], ok: 0 },
            { t: 'orden', es: 'Séneca es filósofo.', x: 'Sēneca philosophus est.' },
            { t: 'orden', es: 'Somos amigos.', x: 'Nōs amīcī sumus.' }
          ]
        },
        {
          id: 'la1-3', titulo: 'Primera y segunda declinación', min: 50,
          intro: 'Los sustantivos cambian la terminación según su función. Hoy, el nominativo (el sujeto) en singular y plural.',
          bloques: [
            { t: 'tabla', cab: ['Tipo', 'Singular', 'Plural', 'Español'], audio: [1, 2], filas: [
              ['1.ª (femenino)', 'sententia', 'sententiae', 'sentencia, opinión'], ['2.ª (masculino)', 'amīcus', 'amīcī', 'amigo'],
              ['2.ª (masculino en -er)', 'magister', 'magistrī', 'maestro'], ['2.ª (neutro)', 'verbum', 'verba', 'palabra, verbo']] },
            { t: 'p', x: 'Los adjetivos concuerdan con el sustantivo: *amīcus bonus* (buen amigo), *sententia bona* (buena sentencia), *verbum bonum* (buena palabra).' },
            { t: 'ej', items: [['Amīcus bonus est.', 'El amigo es bueno.'], ['Amīcī bonī sunt.', 'Los amigos son buenos.'], ['Sententia vēra est.', 'La sentencia es verdadera.'], ['Verba multa sunt.', 'Las palabras son muchas.'], ['Magistrī et discipulī in scholā sunt.', 'Los maestros y los alumnos están en la escuela.']] }
          ],
          vocab: [['sententia', 'sentencia, opinión'], ['verbum', 'palabra; verbo'], ['liber', 'libro'], ['schola', 'escuela'], ['epistula', 'carta'], ['bonus, bona, bonum', 'bueno'], ['malus, mala, malum', 'malo'], ['vērus, vēra, vērum', 'verdadero'], ['multī, multae, multa', 'muchos'], ['magnus, magna, magnum', 'grande'], ['parvus, parva, parvum', 'pequeño'], ['in', 'en (+ ablativo)']],
          ejercicios: [
            { t: 'mc', q: 'El plural de «amīcus» es…', ops: ['amīcī', 'amīcae', 'amīcus'], ok: 0 },
            { t: 'mc', q: 'El plural de «verbum» es…', ops: ['verba', 'verbī', 'verbae'], ok: 0 },
            { t: 'mc', q: 'Concuerda: «sententia ___»', ops: ['bona', 'bonus', 'bonum'], ok: 0 },
            { t: 'orden', es: 'Los amigos son buenos.', x: 'Amīcī bonī sunt.' }
          ]
        },
        {
          id: 'la1-4', titulo: 'El genitivo: «de»', min: 45,
          intro: 'El genitivo expresa «de»: posesión, parte o relación. Es el caso de los títulos de filosofía: *Dē rērum nātūrā* (Sobre la naturaleza de las cosas), *Dēfīnītiō terminī* (Definición del término).',
          bloques: [
            { t: 'tabla', cab: ['Nominativo', 'Genitivo', 'Ejemplo'], audio: [1], filas: [
              ['vīta', 'vītae', 'ars vītae (el arte de la vida)'], ['amīcus', 'amīcī', 'liber amīcī (el libro del amigo)'],
              ['terminus', 'terminī', 'dēfīnītiō terminī (la definición del término)'], ['amīcī', 'amīcōrum', 'numerus amīcōrum (el número de amigos)'],
              ['sententiae', 'sententiārum', 'liber sententiārum (el libro de las sentencias)']] },
            { t: 'ej', items: [['Lūcīlius amīcus Sēnecae est.', 'Lucilio es amigo de Séneca.'], ['Epistulae Sēnecae longae sunt.', 'Las cartas de Séneca son largas.'], ['Philosophia est amor sapientiae.', 'La filosofía es el amor a la sabiduría.'], ['Cuius liber est?', '¿De quién es el libro?'], ['Liber magistrī est.', 'El libro es del maestro.']] },
            { t: 'nota', x: 'Pedro Lombardo escribió el *Liber sententiārum*, el libro de texto de teología durante siglos: «el libro de las sentencias».' }
          ],
          vocab: [['amor', 'amor'], ['cuius', 'de quién'], ['longus, longa, longum', 'largo'], ['sēnsus', 'sentido'], ['causa', 'causa'], ['mundus', 'mundo'], ['deus', 'dios']],
          ejercicios: [
            { t: 'mc', q: '«amor sapientiae» significa…', ops: ['amor a la sabiduría', 'sabiduría del amor', 'amor sabio'], ok: 0 },
            { t: 'mc', q: 'El genitivo singular de «vīta» es…', ops: ['vītae', 'vītī', 'vītam'], ok: 0 },
            { t: 'mc', q: '«dēfīnītiō terminī» significa…', ops: ['la definición del término', 'el término de la definición', 'definir el término'], ok: 0 },
            { t: 'orden', es: 'Lucilio es amigo de Séneca.', x: 'Lūcīlius amīcus Sēnecae est.' }
          ]
        },
        {
          id: 'la1-5', titulo: 'El acusativo y los verbos', min: 50,
          intro: 'El acusativo marca el objeto directo: acaba en *-m* en singular y en *-s* en plural. Por eso el orden es libre: *Sēneca epistulam scrībit* y *Epistulam scrībit Sēneca* dicen lo mismo.',
          bloques: [
            { t: 'tabla', cab: ['Nominativo', 'Acusativo sing.', 'Acusativo pl.'], audio: [1, 2], filas: [
              ['epistula', 'epistulam', 'epistulās'], ['amīcus', 'amīcum', 'amīcōs'], ['verbum', 'verbum', 'verba']] },
            { t: 'p', x: 'Verbos en 3.ª persona: singular en *-t* y plural en *-nt*: *amat / amant* (ama, aman), *legit / legunt* (lee, leen).' },
            { t: 'ej', items: [['Sēneca epistulam scrībit.', 'Séneca escribe una carta.'], ['Lūcīlius epistulam legit.', 'Lucilio lee la carta.'], ['Philosophus sapientiam amat.', 'El filósofo ama la sabiduría.'], ['Magister discipulōs docet.', 'El maestro enseña a los alumnos.'], ['Discipulī magistrum audiunt.', 'Los alumnos escuchan al maestro.'], ['Philosophī vēritātem quaerunt.', 'Los filósofos buscan la verdad.']] }
          ],
          vocab: [['scrībit', 'escribe'], ['legit', 'lee'], ['amat', 'ama'], ['docet', 'enseña'], ['audit', 'escucha, oye'], ['quaerit', 'busca, pregunta'], ['videt', 've'], ['habet', 'tiene'], ['cōgitat', 'piensa'], ['vēritās', 'verdad'], ['quem', 'a quién']],
          ejercicios: [
            { t: 'mc', q: 'En «Lūcīlius epistulam legit», ¿qué se lee?', ops: ['la carta', 'a Lucilio', 'nada'], ok: 0 },
            { t: 'mc', q: 'El acusativo de «amīcus» es…', ops: ['amīcum', 'amīcī', 'amīcō'], ok: 0 },
            { t: 'mc', q: '«Legunt» significa…', ops: ['leen', 'lee', 'leemos'], ok: 0 },
            { t: 'orden', es: 'El filósofo ama la sabiduría.', x: 'Philosophus sapientiam amat.' }
          ]
        },
        {
          id: 'la1-6', titulo: 'Preguntas y respuestas', min: 40,
          intro: 'Los libros escolásticos están hechos de preguntas: *Quid est terminus? Utrum…?* Hoy aprendes a reconocerlas.',
          bloques: [
            { t: 'tabla', cab: ['Latín', 'Español'], audio: [0], filas: [
              ['quis?', '¿quién?'], ['quid?', '¿qué?'], ['ubi?', '¿dónde?'], ['cūr?', '¿por qué?'], ['quia', 'porque'],
              ['-ne', 'partícula de pregunta: estne? (¿es?)'], ['nōnne?', '¿acaso no…? (espera «sí»)'], ['num?', '¿acaso…? (espera «no»)']] },
            { t: 'ej', items: [['Quid est philosophia?', '¿Qué es la filosofía?'], ['Quis est Lūcīlius?', '¿Quién es Lucilio?'], ['Ubi est Sēneca?', '¿Dónde está Séneca?'], ['Estne vīta brevis?', '¿Es breve la vida?'], ['Cūr philosophus sapientiam quaerit?', '¿Por qué busca el filósofo la sabiduría?'], ['Salvē, amīce!', '¡Hola, amigo!'], ['Valē!', '¡Adiós!']] }
          ],
          vocab: [['quis', 'quién'], ['ubi', 'dónde'], ['cūr', 'por qué'], ['quia', 'porque'], ['estne', '¿es?, ¿está?'], ['nōnne', '¿acaso no…? (espera «sí»)'], ['num', '¿acaso…? (espera «no»)'], ['brevis', 'breve'], ['Salvē!', '¡Hola!'], ['Valē!', '¡Adiós!']],
          ejercicios: [
            { t: 'mc', q: '«Cūr?» significa…', ops: ['¿por qué?', '¿dónde?', '¿quién?'], ok: 0 },
            { t: 'mc', q: '«Nōnne philosophus sapiēns est?» espera como respuesta…', ops: ['sí', 'no', 'no se sabe'], ok: 0 },
            { t: 'orden', es: '¿Qué es la filosofía?', x: 'Quid est philosophia?' }
          ]
        },
        {
          id: 'la1-7', titulo: 'Primeras sentencias', min: 40,
          intro: 'Frases célebres que ya puedes entender casi palabra por palabra.',
          bloques: [
            { t: 'ej', items: [['Cōgitō, ergō sum.', 'Pienso, luego existo. (Descartes)'], ['Errāre hūmānum est.', 'Errar es humano.'], ['Vīta brevis, ars longa.', 'La vida es breve; el arte, largo.'], ['Nōsce tē ipsum.', 'Conócete a ti mismo.'], ['Sapere audē!', '¡Atrévete a saber! (Horacio)'], ['Omnia mea mēcum portō.', 'Llevo conmigo todo lo mío.'], ['Docendō discimus.', 'Enseñando aprendemos.'], ['Mēns sāna in corpore sānō.', 'Mente sana en cuerpo sano. (Juvenal)']] },
            { t: 'nota', x: '*mēcum* es «conmigo»: el español *conmigo* viene de *cum* + *mēcum*. Y *ergō* significa «por tanto».' }
          ],
          vocab: [['cōgitō', 'pienso'], ['ergō', 'por tanto, luego'], ['errāre', 'equivocarse, errar'], ['hūmānus, hūmāna, hūmānum', 'humano'], ['nōsce', 'conoce (imperativo)'], ['ipse, ipsa, ipsum', 'mismo'], ['audē', 'atrévete'], ['omnia', 'todas las cosas'], ['mēcum', 'conmigo'], ['discimus', 'aprendemos'], ['mēns', 'mente']],
          ejercicios: [
            { t: 'mc', q: '«Cōgitō, ergō sum» significa…', ops: ['Pienso, luego existo.', 'Pienso que existo.', 'Existo para pensar.'], ok: 0 },
            { t: 'mc', q: '«mēcum» significa…', ops: ['conmigo', 'contigo', 'con él'], ok: 0 },
            { t: 'orden', es: 'Errar es humano.', x: 'Errāre hūmānum est.' }
          ]
        },
        {
          id: 'la1-8', titulo: 'Leer libros antiguos: ſ, v, &, æ', min: 40,
          intro: 'Los libros de filosofía de los siglos XVI y XVII, como la página de lógica que tienes, usan letras y abreviaturas que hoy no se usan. Se aprenden en una tarde y no vuelven a molestar.',
          bloques: [
            { t: 'tabla', cab: ['Se escribe', 'Se lee', 'En tu página'], filas: [
              ['ſ (s larga)', 's', 'ſentiunt = sentiunt'], ['v al principio de palabra', 'u', 'vt = ut; vltimum = ultimum'],
              ['u en medio de palabra', 'v', 'diuerſos = diversos; conuenit = convenit'], ['æ, œ', 'ae, oe', 'præſens = praesens'],
              ['&', 'et (y)', '& per modum = et per modum'], ['raya o tilde sobre vocal', 'esa vocal + m o n', 'habitudinē = habitudinem; nō = non'],
              ['acento grave', 'nada: marca adverbios y partículas', 'secundùm = secundum; à = a']] },
            { t: 'p', x: 'Ojo con la *ſ*: se parece a la *f*, pero el travesaño de la *f* cruza la letra entera y el de la *ſ* solo asoma por la izquierda, o no existe.' },
            { t: 'p', x: 'Las citas también van abreviadas: *D. Thom.* = *Dīvus Thōmās* (santo Tomás); *Ariſt.* = Aristóteles; *lect.* = *lēctiō* (lección); *§* = párrafo.' },
            { t: 'ej', items: [['dēfīnītiō terminī', 'la definición del término'], ['per modum praedicātī et subiectī', 'a modo de predicado y de sujeto'], ['ut in praedicātum et subiectum', 'como en predicado y sujeto']] },
            { t: 'nota', x: 'Tu meta para la semana 8: leer entera esa página. Ya tienes su primera frase en Lecturas, con cada palabra explicada.' }
          ],
          vocab: [['terminus', 'término'], ['dēfīnītiō', 'definición'], ['prōpositiō', 'proposición'], ['syllogismus', 'silogismo'], ['logica', 'lógica'], ['auctor', 'autor'], ['secundum', 'según'], ['vel', 'o'], ['sīve… sīve…', 'ya… ya…; o bien… o bien…'], ['ut', 'como; para que'], ['per modum', 'a modo de']],
          ejercicios: [
            { t: 'mc', q: 'En un libro antiguo, «vt» se lee…', ops: ['ut', 'vet', 'vit'], ok: 0 },
            { t: 'mc', q: '«diuerſos» se lee…', ops: ['diversos', 'diuerfos', 'diverfos'], ok: 0 },
            { t: 'mc', q: '«habitudinē» se lee…', ops: ['habitudinem', 'habitudine', 'habitudinis'], ok: 0 },
            { t: 'mc', q: '«D. Thom.» es…', ops: ['santo Tomás', 'el doctor Tomás', 'Tomás Moro'], ok: 0 },
            { t: 'mc', q: '«&» se lee…', ops: ['et', 'ad', 'est'], ok: 0 }
          ]
        }
      ],
      lecturas: [
        {
          id: 'la1-r1', titulo: 'Sēneca et Lūcīlius', nivel: 'Inicial',
          texto: 'Sēneca philosophus Rōmānus est. Lūcīlius amīcus Sēnecae est. Sēneca in Ītaliā habitat, Lūcīlius in Siciliā. Sicilia īnsula est. Sēneca et Lūcīlius nōn sunt in eōdem locō, sed amīcī sunt. Sēneca epistulās scrībit; Lūcīlius epistulās legit. Epistulae Sēnecae nōn longae sunt, sed bonae.',
          traduccion: 'Séneca es un filósofo romano. Lucilio es amigo de Séneca. Séneca vive en Italia; Lucilio, en Sicilia. Sicilia es una isla. Séneca y Lucilio no están en el mismo lugar, pero son amigos. Séneca escribe cartas; Lucilio lee las cartas. Las cartas de Séneca no son largas, pero sí buenas.',
          glosa: {
            'sēneca': 'Séneca', 'philosophus': 'filósofo', 'rōmānus': 'romano', 'est': 'es, está', 'lūcīlius': 'Lucilio', 'amīcus': 'amigo',
            'sēnecae': 'de Séneca (genitivo)', 'in': 'en (+ ablativo)', 'ītaliā': 'Italia (ablativo)', 'habitat': 'vive', 'siciliā': 'Sicilia (ablativo)',
            'sicilia': 'Sicilia', 'īnsula': 'isla', 'et': 'y', 'nōn': 'no', 'sunt': 'son, están', 'eōdem': 'el mismo (ablativo de īdem)',
            'locō': 'lugar (ablativo de locus)', 'sed': 'pero, sino', 'amīcī': 'amigos', 'epistulās': 'cartas (acusativo plural)', 'scrībit': 'escribe',
            'legit': 'lee', 'epistulae': 'cartas', 'longae': 'largas', 'bonae': 'buenas'
          },
          preguntas: [
            { q: '¿Dónde está Lucilio?', ops: ['En Sicilia', 'En Italia, con Séneca', 'En Roma'], ok: 0 },
            { q: '¿Qué hace Séneca?', ops: ['Escribe cartas', 'Lee cartas', 'Vive en una isla'], ok: 0 },
            { q: '¿Cómo son las cartas de Séneca?', ops: ['No largas, pero buenas', 'Largas y buenas', 'Cortas y malas'], ok: 0 }
          ]
        },
        {
          id: 'la1-r2', titulo: 'Quid est philosophia?', nivel: 'Inicial',
          texto: 'Lūcīlius: «Salvē, Sēneca! Quid est philosophia?»\nSēneca: «Philosophia est amor sapientiae.»\nLūcīlius: «Et quid est sapientia?»\nSēneca: «Sapientia est scientia vītae. Sapiēns vītam bonam quaerit.»\nLūcīlius: «Estne philosophia difficilis?»\nSēneca: «Difficilis est, sed pulchra. Philosophia animum docet.»\nLūcīlius: «Grātiās tibi agō, magister!»',
          traduccion: 'Lucilio: «¡Hola, Séneca! ¿Qué es la filosofía?»\nSéneca: «La filosofía es el amor a la sabiduría.»\nLucilio: «¿Y qué es la sabiduría?»\nSéneca: «La sabiduría es la ciencia de la vida. El sabio busca una vida buena.»\nLucilio: «¿Es difícil la filosofía?»\nSéneca: «Es difícil, pero hermosa. La filosofía educa el alma.»\nLucilio: «¡Te doy las gracias, maestro!»',
          glosa: {
            'lūcīlius': 'Lucilio', 'salvē': '¡hola!', 'sēneca': 'Séneca (aquí, vocativo)', 'quid': 'qué', 'est': 'es', 'philosophia': 'filosofía',
            'amor': 'amor', 'sapientiae': 'de la sabiduría (genitivo)', 'et': 'y', 'sapientia': 'sabiduría', 'scientia': 'ciencia, conocimiento',
            'vītae': 'de la vida (genitivo)', 'sapiēns': 'el sabio', 'vītam': 'vida (acusativo)', 'bonam': 'buena (acusativo)', 'quaerit': 'busca',
            'estne': '¿es? (est + -ne)', 'difficilis': 'difícil', 'sed': 'pero', 'pulchra': 'hermosa', 'animum': 'el alma, la mente (acusativo)',
            'docet': 'enseña, educa', 'grātiās': 'gracias (acusativo plural)', 'tibi': 'a ti', 'agō': 'doy («grātiās agō» = doy las gracias)', 'magister': 'maestro (vocativo)'
          },
          preguntas: [
            { q: 'Según Séneca, ¿qué es la filosofía?', ops: ['El amor a la sabiduría', 'La ciencia de las estrellas', 'El arte de hablar'], ok: 0 },
            { q: '¿Qué busca el sabio?', ops: ['Una vida buena', 'Muchas cartas', 'Un maestro'], ok: 0 },
            { q: '¿Cómo es la filosofía?', ops: ['Difícil, pero hermosa', 'Fácil y hermosa', 'Difícil y fea'], ok: 0 }
          ]
        },
        {
          id: 'la1-r3', titulo: 'In scholā', nivel: 'Inicial',
          texto: 'Magister in scholā est. Discipulī in scholā sunt. Magister discipulōs docet. Discipulī magistrum audiunt. Mārcus librum legit; Titus librum nōn legit: Titus dormit! Magister Titum videt. «Tite!» clāmat magister. Titus nōn iam dormit. Nunc Titus librum legit.',
          traduccion: 'El maestro está en la escuela. Los alumnos están en la escuela. El maestro enseña a los alumnos. Los alumnos escuchan al maestro. Marco lee el libro; Tito no lo lee: ¡Tito duerme! El maestro ve a Tito. «¡Tito!», grita el maestro. Tito ya no duerme. Ahora Tito lee el libro.',
          glosa: {
            'magister': 'maestro', 'in': 'en (+ ablativo)', 'scholā': 'escuela (ablativo)', 'est': 'está', 'discipulī': 'alumnos', 'sunt': 'están',
            'discipulōs': 'a los alumnos (acusativo)', 'docet': 'enseña', 'magistrum': 'al maestro (acusativo)', 'audiunt': 'escuchan',
            'mārcus': 'Marco', 'librum': 'libro (acusativo)', 'legit': 'lee', 'titus': 'Tito', 'nōn': 'no', 'dormit': 'duerme',
            'titum': 'a Tito (acusativo)', 'videt': 've', 'tite': '¡Tito! (vocativo)', 'clāmat': 'grita', 'iam': 'ya («nōn iam» = ya no)', 'nunc': 'ahora'
          },
          preguntas: [
            { q: '¿Qué hace Tito al principio?', ops: ['Duerme', 'Lee', 'Grita'], ok: 0 },
            { q: '¿Quién grita «Tite!»?', ops: ['El maestro', 'Marco', 'Tito'], ok: 0 }
          ]
        },
        {
          id: 'la1-r4', titulo: 'Logica in scholā', nivel: 'Inicial',
          texto: 'Magister et discipulī in scholā sunt. Magister logicam docet. Discipulus magistrum interrogat: «Quid est logica?» Magister respondet: «Logica ars est. Logica nōs docet bene cōgitāre.» Discipulus iterum interrogat: «Quid est terminus?» Magister respondet: «Terminus est nōmen vel verbum, ut homō vel currit. Ex terminīs fit prōpositiō: Homō currit. Ex prōpositiōnibus fit syllogismus.» Discipulus: «Logica difficilis est!» Magister: «Difficilis, sed pulchra.»',
          traduccion: 'El maestro y los alumnos están en la escuela. El maestro enseña lógica. Un alumno le pregunta al maestro: «¿Qué es la lógica?». El maestro responde: «La lógica es un arte. La lógica nos enseña a pensar bien». El alumno pregunta otra vez: «¿Qué es un término?». El maestro responde: «Un término es un nombre o un verbo, como hombre o corre. Con términos se forma una proposición: El hombre corre. Con proposiciones se forma un silogismo». El alumno: «¡La lógica es difícil!». El maestro: «Difícil, pero hermosa».',
          glosa: {
            'magister': 'maestro', 'et': 'y', 'discipulī': 'alumnos', 'in': 'en (+ ablativo)', 'scholā': 'escuela (ablativo)', 'sunt': 'están',
            'logicam': 'la lógica (acusativo)', 'docet': 'enseña', 'discipulus': 'alumno', 'magistrum': 'al maestro (acusativo)', 'interrogat': 'pregunta',
            'quid': 'qué', 'est': 'es', 'logica': 'la lógica', 'respondet': 'responde', 'ars': 'arte, técnica', 'nōs': 'a nosotros (acusativo)',
            'bene': 'bien', 'cōgitāre': 'pensar (infinitivo)', 'iterum': 'otra vez', 'terminus': 'término', 'nōmen': 'nombre, sustantivo',
            'vel': 'o', 'verbum': 'verbo, palabra', 'ut': 'como, por ejemplo', 'homō': 'hombre, ser humano', 'currit': 'corre', 'ex': 'a partir de, de (+ ablativo)',
            'terminīs': 'términos (ablativo plural)', 'fit': 'se hace, se forma (de fierī)', 'prōpositiō': 'proposición',
            'prōpositiōnibus': 'proposiciones (ablativo plural)', 'syllogismus': 'silogismo', 'difficilis': 'difícil', 'sed': 'pero', 'pulchra': 'hermosa'
          },
          preguntas: [
            { q: '¿Qué enseña el maestro?', ops: ['Lógica', 'Gramática', 'Medicina'], ok: 0 },
            { q: '¿Con qué se forma una proposición?', ops: ['Con términos', 'Con silogismos', 'Con escuelas'], ok: 0 },
            { q: '¿Cómo es la lógica, según el maestro?', ops: ['Difícil, pero hermosa', 'Fácil y hermosa', 'Inútil'], ok: 0 }
          ]
        },
        {
          id: 'la1-r5', titulo: 'Tu meta: la primera frase de tu libro', nivel: 'Meta de la semana 8', antiguo: true,
          texto: 'Varie de definitione termini ſentiunt Authores, ſecundùm quod conſiderant in eo diuerſos reſpectus, vel officia, ſiuè partis componentis quomodocunque, ſiuè partis principalis, & per modum extremi tantùm, ſiuè per modum terminantis reſolutionem propoſitionis, & ſyllogiſmi, ſiuè per modum prædicati, & ſubiecti.',
          traduccion: 'Los autores opinan de distinta manera sobre la definición del término, según los diversos aspectos o funciones que consideran en él: ya como parte que compone de cualquier modo, ya como parte principal y solo a modo de extremo, ya como lo que termina el análisis de la proposición y del silogismo, ya a modo de predicado y de sujeto.',
          notas: 'No hace falta entenderla ya: vuelve a ella cada domingo. «Sīve… sīve…» enumera opciones («ya… ya…»), y «per modum» significa «a modo de», una fórmula que verás en cada página escolástica.',
          glosa: {
            'varie': 'de distinta manera (adverbio)', 'de': 'sobre, acerca de (+ ablativo)', 'definitione': 'la definición (ablativo de dēfīnītiō)', 'termini': 'del término (genitivo de terminus)',
            'ſentiunt': '= sentiunt: opinan, piensan (de sentiō)', 'authores': '= auctōrēs: los autores', 'ſecundùm': '= secundum: según', 'quod': 'que; «secundum quod» = según que, en cuanto',
            'conſiderant': '= cōnsīderant: consideran', 'in': 'en', 'eo': 'él (ablativo de is: «in eo» = en el término)', 'diuerſos': '= dīversōs: diversos, distintos (acusativo plural)',
            'reſpectus': '= respectūs: aspectos, relaciones (acusativo plural)', 'vel': 'o', 'officia': 'funciones (acusativo plural de officium)',
            'ſiuè': '= sīve: ya, o bien («sīve… sīve…» = ya… ya…)', 'partis': 'de parte (genitivo de pars)', 'componentis': 'que compone (genitivo del participio compōnēns)',
            'quomodocunque': '= quōmodocumque: de cualquier modo', 'principalis': 'principal (genitivo)', 'per': 'por; «per modum» = a modo de',
            'modum': 'modo, manera (acusativo de modus)', 'extremi': 'de extremo (genitivo de extrēmum: cada término de una proposición)', 'tantùm': '= tantum: solamente',
            'terminantis': 'de lo que termina, pone fin (genitivo del participio termināns)', 'reſolutionem': '= resolūtiōnem: el análisis, la descomposición (acusativo)',
            'propoſitionis': '= prōpositiōnis: de la proposición (genitivo)', 'ſyllogiſmi': '= syllogismī: del silogismo (genitivo)',
            'prædicati': '= praedicātī: del predicado (genitivo)', 'ſubiecti': '= subiectī: del sujeto (genitivo)'
          },
          preguntas: [
            { q: '¿De qué trata la frase?', ops: ['De cómo definir el término', 'De la vida de Aristóteles', 'De la escuela de lógica'], ok: 0 },
            { q: '«ſiuè» se lee…', ops: ['sive', 'fine', 'siue'], ok: 0 }
          ]
        }
      ]
    }
  ]
};
