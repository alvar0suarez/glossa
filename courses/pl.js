// Glossa · curso de polaco (meta: Navidad con la familia de tu chica)
// Tipos de ejercicio: mc (elegir), oir (escuchar y elegir), orden (ordenar palabras), decir (decirlo en voz alta).
window.CONTENT = window.CONTENT || {};
window.CONTENT.pl = {
  semanasTitulos: ['Sonidos y supervivencia', 'El presente y el acusativo', 'Pasado y genitivo', 'Lugares y movimiento', 'Aspecto verbal y futuro', 'Dativo y plurales', 'Volumen', 'Navidad en familia'],
  programa: [
    'Pronunciación; być y mieć en presente; género; saludos, presentarse, la familia, en la mesa; números del 1 al 10.',
    'Presente de las tres conjugaciones; acusativo singular; lubić; comida, compras, números hasta 1.000, la hora.',
    'Pasado; genitivo para la negación y las cantidades; contar lo que hiciste ayer.',
    'Locativo e instrumental; verbos de movimiento (iść/chodzić, jechać/jeździć); ciudad, transporte, viaje.',
    'Aspecto verbal (robić/zrobić); futuro; imperativo.',
    'Dativo (podoba mi się); los casos en plural; números con sustantivos.',
    'Condicional (chciałbym); repaso de los casos; situaciones de Navidad.',
    'Consolidación; Nochebuena: saludar, brindar, elogiar la comida, responder preguntas sobre ti.'
  ],
  temasChat: ['presentarte', 'tu familia', 'la comida', 'la Navidad'],
  niveles: [
    {"n": 1, "nombre": "Nivel 1", "lema": "Navidad en familia (A1–A2)", "semanas": [1, 2, 3, 4, 5, 6, 7, 8]},
    {"n": 2, "nombre": "Nivel 2", "lema": "Conversar con soltura (B1)", "temario": ["Contar historias: el aspecto en el pasado y los conectores (najpierw, potem, w końcu)", "Opinar y discutir: myślę, że…; moim zdaniem; estar o no de acuerdo", "Hipótesis y deseos: gdyby, chciałbym, żeby", "Trabajo, estudios y planes de vida", "Salud y cuerpo: el médico, la farmacia, sentirse mal", "La vida diaria en Polonia: casa, trámites, vecinos", "Cultura polaca: cine, música y literatura", "Fiestas del año: Wielkanoc, Wszystkich Świętych, bodas e imieniny"]},
    {"n": 3, "nombre": "Nivel 3", "lema": "Profundizar (B2)", "temario": ["Los participios y el estilo escrito (imiesłowy)", "La voz pasiva y el lenguaje de las noticias", "Estilo indirecto y matices (podobno, rzekomo, chyba)", "Refranes, modismos y registro coloquial", "Sociedad y actualidad: debatir", "Historia de Polonia, del siglo X al XXI", "Literatura: Mickiewicz, Sienkiewicz y Prus (fragmentos)", "Escribir bien: cartas formales, correos y textos de opinión"]}
  ],
  semanas: [
    {
      n: 1,
      pareja: {
        tema: 'Que te diga cómo se llaman sus padres, hermanos y abuelos, y quién es quién. Apúntalo en Ajustes, en «Su familia»: la app lo usará en tus conversaciones.',
        preguntas: [['Jak masz na imię?', '¿Cómo te llamas?'], ['Skąd jesteś?', '¿De dónde eres?'], ['Gdzie mieszkasz?', '¿Dónde vives?'], ['Jak się masz?', '¿Qué tal estás?'], ['Masz rodzeństwo?', '¿Tienes hermanos?']],
        frases: ['Dziękuję bardzo.', 'Przepraszam.', 'Cześć!', 'Miło mi Panią poznać.', 'Smacznego!', 'Wesołych Świąt!'],
        reto: ['W Szczebrzeszynie chrząszcz brzmi w trzcinie.', 'En Szczebrzeszyn un escarabajo zumba entre los juncos: el trabalenguas más famoso de Polonia.']
      },
      lecciones: [
        {
          id: 'pl1-1', titulo: 'Sonidos (1): vocales y letras nuevas', min: 40,
          intro: 'El polaco se lee casi como se escribe. Hoy, las vocales y las letras que suenan distinto que en español. Pulsa el altavoz y repite cada palabra en voz alta.',
          bloques: [
            { t: 'tabla', cab: ['Letra', 'Suena como', 'Ejemplo'], audio: [2], filas: [
              ['ó, u', 'u', 'góra'], ['y', 'una i con la lengua más atrás', 'ty'], ['ą', 'o nasal («on»)', 'są'],
              ['ę', 'e nasal; al final, casi e', 'proszę'], ['w', 'v de labios y dientes', 'woda'],
              ['ł', 'la u de «huevo»', 'ładny'], ['j', 'la y de «ya»', 'jak'], ['h, ch', 'una j suave', 'chleb'], ['c', 'ts', 'co']] },
            { t: 'p', x: 'El acento cae casi siempre en la penúltima sílaba: *DO-bry*, *dzię-KU-ję*, *her-BA-ta*.' },
            { t: 'ej', items: [['dom', 'casa'], ['woda', 'agua'], ['chleb', 'pan'], ['herbata', 'té'], ['ręka', 'mano'], ['tak', 'sí'], ['nie', 'no']] }
          ],
          vocab: [['góra', 'montaña'], ['ty', 'tú'], ['woda', 'agua'], ['ładny', 'bonito'], ['jak', 'cómo'], ['chleb', 'pan'], ['co', 'qué'], ['dom', 'casa'], ['herbata', 'té'], ['ręka', 'mano'], ['tak', 'sí'], ['nie', 'no']],
          ejercicios: [
            { t: 'oir', x: 'woda', ops: ['woda', 'wada', 'moda'], ok: 0 },
            { t: 'oir', x: 'chleb', ops: ['chleb', 'sklep', 'chłop'], ok: 0 },
            { t: 'mc', q: '¿Cómo suena la ł de «ładny»?', ops: ['Como la u de «huevo»', 'Como una l española', 'Como una ll'], ok: 0 },
            { t: 'mc', q: '¿Dónde va el acento en «herbata»?', ops: ['her-BA-ta', 'HER-ba-ta', 'her-ba-TA'], ok: 0 },
            { t: 'decir', es: 'agua', x: 'woda' },
            { t: 'decir', es: 'pan', x: 'chleb' }
          ]
        },
        {
          id: 'pl1-2', titulo: 'Sonidos (2): sz, cz, rz… y ś, ć, ź', min: 45,
          intro: 'Lo más nuevo para un hispanohablante: dos series de sonidos parecidos a «sh». La dura (sz, ż/rz, cz) se hace con la lengua hacia atrás; la suave (ś, ź, ć, dź), sonriendo y con la lengua pegada al paladar.',
          bloques: [
            { t: 'tabla', cab: ['Dura', 'Suave', 'Pista'], filas: [
              ['sz', 'ś (si)', 'sh / sh sonriendo'], ['ż, rz', 'ź (zi)', 'sh sonora / sonora sonriendo'],
              ['cz', 'ć (ci)', 'ch / ch sonriendo'], ['dż', 'dź (dzi)', 'dch sonora / sonriendo']] },
            { t: 'ej', items: [['szkoła', 'escuela'], ['żona', 'esposa'], ['rzeka', 'río'], ['czas', 'tiempo'], ['śnieg', 'nieve'], ['ciocia', 'tía'], ['zima', 'invierno'], ['dzień', 'día'], ['cześć', 'hola, adiós (informal)'], ['przepraszam', 'perdón']] },
            { t: 'nota', x: 'Dos reglas: las consonantes finales se ensordecen (*chleb* suena «chlep») y *rz* detrás de p, t, k suena como sz (*przepraszam* ≈ «psheprásham»).' },
            { t: 'p', x: 'Pares para entrenar el oído: *kasza* (gachas) / *Kasia* (un nombre); *czy* (partícula de pregunta) / *ci* (a ti).' }
          ],
          vocab: [['szkoła', 'escuela'], ['żona', 'esposa'], ['rzeka', 'río'], ['czas', 'tiempo'], ['śnieg', 'nieve'], ['ciocia', 'tía'], ['zima', 'invierno'], ['dzień', 'día'], ['cześć', 'hola; adiós (informal)'], ['trzy', 'tres'], ['teraz', 'ahora'], ['dobrze', 'bien'], ['źle', 'mal'], ['jeszcze', 'todavía; otra vez; más']],
          ejercicios: [
            { t: 'oir', x: 'kasza', ops: ['kasza', 'Kasia'], ok: 0 },
            { t: 'oir', x: 'Kasia', ops: ['kasza', 'Kasia'], ok: 1 },
            { t: 'oir', x: 'czy', ops: ['czy', 'ci'], ok: 0 },
            { t: 'oir', x: 'ci', ops: ['czy', 'ci'], ok: 1 },
            { t: 'mc', q: '¿Cómo se pronuncia «przepraszam»?', ops: ['«psheprásham»', '«prseprásam»', '«pereprásam»'], ok: 0 },
            { t: 'decir', es: 'nieve', x: 'śnieg' },
            { t: 'decir', es: 'hola (informal)', x: 'cześć' }
          ]
        },
        {
          id: 'pl1-3', titulo: 'Saludos y cortesía', min: 45,
          intro: 'Con la familia de tu chica usarás dos registros: el de confianza (*ty*) con ella y la gente joven, y el formal (*Pan*, *Pani*) con sus padres y abuelos, hasta que te digan que los tutees.',
          bloques: [
            { t: 'tabla', cab: ['Polaco', 'Español', 'Cuándo'], audio: [0], filas: [
              ['Dzień dobry', 'Buenos días; buenas tardes', 'Formal, hasta la tarde'], ['Dobry wieczór', 'Buenas noches (al llegar)', 'Formal, por la noche'],
              ['Cześć', 'Hola; adiós', 'Con confianza'], ['Do widzenia', 'Adiós', 'Formal'],
              ['Dobranoc', 'Buenas noches (al irse a dormir)', 'Siempre'], ['Na razie', 'Hasta luego', 'Con confianza']] },
            { t: 'ej', items: [['Jak się masz?', '¿Qué tal estás?'], ['Dobrze, dziękuję. A ty?', 'Bien, gracias. ¿Y tú?'], ['Dziękuję.', 'Gracias.'], ['Dziękuję bardzo.', 'Muchas gracias.'], ['Proszę.', 'Por favor. / De nada. / Tome.'], ['Nie ma za co.', 'De nada.'], ['Przepraszam.', 'Perdón. / Disculpe.'], ['Miło mi.', 'Encantado.'], ['Na zdrowie!', '¡Salud! (brindis y estornudo)']] },
            { t: 'nota', x: '*Proszę* es la palabra comodín: por favor, de nada, aquí tiene… y, con tono de pregunta (*Proszę?*), «¿perdón?» cuando no has oído algo.' }
          ],
          vocab: [['Dzień dobry.', 'Buenos días; buenas tardes (formal).'], ['Dobry wieczór.', 'Buenas noches (al llegar).'], ['Do widzenia.', 'Adiós (formal).'], ['Dobranoc.', 'Buenas noches (al acostarse).'], ['Na razie!', '¡Hasta luego!'], ['Jak się masz?', '¿Qué tal estás?'], ['Dobrze, dziękuję. A ty?', 'Bien, gracias. ¿Y tú?'], ['Dziękuję.', 'Gracias.'], ['Dziękuję bardzo.', 'Muchas gracias.'], ['Proszę.', 'Por favor; de nada; tome.'], ['Nie ma za co.', 'De nada.'], ['Przepraszam.', 'Perdón; disculpe.'], ['Miło mi.', 'Encantado/a.'], ['Na zdrowie!', '¡Salud!'], ['bardzo', 'muy; mucho']],
          ejercicios: [
            { t: 'mc', q: 'Llegas a casa de sus padres a las 7 de la tarde. Dices:', ops: ['Dobry wieczór!', 'Dobranoc!', 'Na razie!'], ok: 0 },
            { t: 'mc', q: 'Te dan un regalo. Contestas:', ops: ['Dziękuję bardzo!', 'Nie ma za co.', 'Do widzenia.'], ok: 0 },
            { t: 'mc', q: 'Alguien te dice «Dziękuję». Respondes:', ops: ['Nie ma za co.', 'Cześć!', 'Przepraszam.'], ok: 0 },
            { t: 'orden', es: 'Muchas gracias.', x: 'Dziękuję bardzo.' },
            { t: 'oir', x: 'Do widzenia', ops: ['Do widzenia', 'Dobranoc', 'Dzień dobry'], ok: 0 },
            { t: 'decir', es: 'Muchas gracias.', x: 'Dziękuję bardzo.' },
            { t: 'decir', es: 'Perdón.', x: 'Przepraszam.' }
          ]
        },
        {
          id: 'pl1-4', titulo: 'Presentarte', min: 50,
          intro: 'Lo primero que te preguntarán: cómo te llamas, de dónde eres y a qué te dedicas. Prepara tus respuestas y apréndelas de memoria.',
          bloques: [
            { t: 'ej', items: [['Jak masz na imię?', '¿Cómo te llamas?'], ['Mam na imię Pablo.', 'Me llamo Pablo.'], ['Jestem z Hiszpanii.', 'Soy de España.'], ['Jestem Hiszpanem.', 'Soy español.'], ['Mieszkam w Madrycie.', 'Vivo en Madrid.'], ['Jestem chłopakiem Ani.', 'Soy el novio de Ania.'], ['Pracuję jako inżynier.', 'Trabajo de ingeniero.'], ['Mówię trochę po polsku.', 'Hablo un poco de polaco.'], ['Uczę się polskiego.', 'Estoy aprendiendo polaco.']] },
            { t: 'nota', x: 'Cambia *Pablo*, *Madrycie* y *Ani* por tus datos. Los nombres cambian según el caso: *Ania* → *chłopakiem Ani* (el novio de Ania). Pregúntale a tu chica cómo queda el suyo.' },
            { t: 'ej', items: [['Miło mi Pana poznać.', 'Encantado de conocerle (a él).'], ['Miło mi Panią poznać.', 'Encantado de conocerla (a ella).']] }
          ],
          vocab: [['Jak masz na imię?', '¿Cómo te llamas?'], ['Mam na imię…', 'Me llamo…'], ['Jestem z Hiszpanii.', 'Soy de España.'], ['Jestem Hiszpanem.', 'Soy español.'], ['Mieszkam w…', 'Vivo en…'], ['chłopak', 'novio; chico'], ['dziewczyna', 'novia; chica'], ['Pracuję jako…', 'Trabajo de…'], ['Mówię trochę po polsku.', 'Hablo un poco de polaco.'], ['Uczę się polskiego.', 'Estoy aprendiendo polaco.'], ['Miło mi Pana poznać.', 'Encantado de conocerle (a él).'], ['Miło mi Panią poznać.', 'Encantado de conocerla (a ella).'], ['trochę', 'un poco'], ['po polsku', 'en polaco']],
          ejercicios: [
            { t: 'orden', es: 'Me llamo Pablo.', x: 'Mam na imię Pablo.' },
            { t: 'orden', es: 'Soy de España.', x: 'Jestem z Hiszpanii.' },
            { t: 'mc', q: 'Conoces a la madre de tu chica. Le dices:', ops: ['Miło mi Panią poznać.', 'Miło mi Pana poznać.', 'Cześć, jak masz na imię?'], ok: 0 },
            { t: 'mc', q: '«Uczę się polskiego» significa…', ops: ['Estoy aprendiendo polaco.', 'Hablo polaco perfectamente.', 'Soy polaco.'], ok: 0 },
            { t: 'decir', es: 'Soy de España.', x: 'Jestem z Hiszpanii.' },
            { t: 'decir', es: 'Hablo un poco de polaco.', x: 'Mówię trochę po polsku.' }
          ]
        },
        {
          id: 'pl1-5', titulo: 'La familia', min: 45,
          intro: 'El vocabulario que más vas a oír en Navidad.',
          bloques: [
            { t: 'tabla', cab: ['Polaco', 'Español'], audio: [0], filas: [
              ['mama', 'mamá'], ['tata', 'papá'], ['rodzice', 'padres'], ['brat', 'hermano'], ['siostra', 'hermana'], ['babcia', 'abuela'],
              ['dziadek', 'abuelo'], ['ciocia', 'tía'], ['wujek', 'tío'], ['kuzyn, kuzynka', 'primo, prima'], ['syn, córka', 'hijo, hija'], ['rodzina', 'familia']] },
            { t: 'p', x: '*mój* (mi, masculino), *moja* (mi, femenino), *moje* (mi, neutro): *mój brat*, *moja siostra*, *moje dziecko* (mi niño).' },
            { t: 'ej', items: [['To jest moja rodzina.', 'Esta es mi familia.'], ['To jest mój tata.', 'Este es mi padre.'], ['Masz rodzeństwo?', '¿Tienes hermanos?'], ['Mam brata i siostrę.', 'Tengo un hermano y una hermana.'], ['Nie mam rodzeństwa.', 'No tengo hermanos.']] }
          ],
          vocab: [['mama', 'mamá'], ['tata', 'papá'], ['rodzice', 'padres'], ['brat', 'hermano'], ['siostra', 'hermana'], ['babcia', 'abuela'], ['dziadek', 'abuelo'], ['wujek', 'tío'], ['kuzyn', 'primo'], ['kuzynka', 'prima'], ['syn', 'hijo'], ['córka', 'hija'], ['rodzina', 'familia'], ['rodzeństwo', 'hermanos (en conjunto)'], ['mój, moja, moje', 'mi (masc., fem., neutro)'], ['To jest…', 'Este/esta es…']],
          ejercicios: [
            { t: 'mc', q: '«Babcia» es…', ops: ['la abuela', 'la tía', 'la madre'], ok: 0 },
            { t: 'mc', q: 'Completa: «___ siostra»', ops: ['moja', 'mój', 'moje'], ok: 0 },
            { t: 'orden', es: 'Esta es mi familia.', x: 'To jest moja rodzina.' },
            { t: 'oir', x: 'dziadek', ops: ['dziadek', 'dzieci', 'dzień'], ok: 0 },
            { t: 'decir', es: 'Esta es mi familia.', x: 'To jest moja rodzina.' },
            { t: 'decir', es: 'Este es mi padre.', x: 'To jest mój tata.' }
          ]
        },
        {
          id: 'pl1-6', titulo: 'Ser y tener: być y mieć', min: 50,
          intro: 'Dos verbos para casi todo. No hace falta decir *ja* (yo): la terminación ya lo dice.',
          bloques: [
            { t: 'tabla', cab: ['', 'być (ser, estar)', 'mieć (tener)'], audio: [1, 2], filas: [
              ['ja (yo)', 'jestem', 'mam'], ['ty (tú)', 'jesteś', 'masz'], ['on, ona (él, ella)', 'jest', 'ma'],
              ['my (nosotros)', 'jesteśmy', 'mamy'], ['wy (vosotros)', 'jesteście', 'macie'], ['oni (ellos)', 'są', 'mają']] },
            { t: 'p', x: 'Con *Pan* y *Pani* (usted) se usa la 3.ª persona: *Czy Pani ma czas?* (¿Tiene usted tiempo?).' },
            { t: 'ej', items: [['Jestem w domu.', 'Estoy en casa.'], ['Jesteś głodny?', '¿Tienes hambre? (a un chico)'], ['Jesteśmy razem.', 'Estamos juntos.'], ['Mam czas.', 'Tengo tiempo.'], ['Masz psa?', '¿Tienes perro?'], ['Oni mają dom w górach.', 'Ellos tienen una casa en la montaña.']] }
          ],
          vocab: [['jestem', 'soy, estoy'], ['jesteś', 'eres, estás'], ['jest', 'es, está'], ['jesteśmy', 'somos, estamos'], ['jesteście', 'sois, estáis'], ['są', 'son, están'], ['mam', 'tengo'], ['masz', 'tienes'], ['ma', 'tiene'], ['mamy', 'tenemos'], ['macie', 'tenéis'], ['mają', 'tienen'], ['głodny', 'con hambre'], ['razem', 'juntos']],
          ejercicios: [
            { t: 'mc', q: '«Mamy» significa…', ops: ['tenemos', 'tengo', 'tienen'], ok: 0 },
            { t: 'mc', q: 'Completa: «Oni ___ w domu.»', ops: ['są', 'jest', 'jesteśmy'], ok: 0 },
            { t: 'orden', es: 'Tengo tiempo.', x: 'Mam czas.' },
            { t: 'orden', es: 'Estoy en casa.', x: 'Jestem w domu.' },
            { t: 'decir', es: 'Tengo tiempo.', x: 'Mam czas.' },
            { t: 'decir', es: 'Estamos juntos.', x: 'Jesteśmy razem.' }
          ]
        },
        {
          id: 'pl1-7', titulo: 'En la mesa y números del 1 al 10', min: 50,
          intro: 'La cena de Nochebuena (*Wigilia*) es larga. Con estas frases quedarás bien toda la noche.',
          bloques: [
            { t: 'ej', items: [['Smacznego!', '¡Que aproveche!'], ['To jest pyszne!', '¡Está buenísimo!'], ['Bardzo smaczne.', 'Muy rico.'], ['Poproszę jeszcze trochę.', 'Un poco más, por favor.'], ['Dziękuję, już nie mogę.', 'Gracias, ya no puedo más.'], ['Czy mogę pomóc?', '¿Puedo ayudar?'], ['Na zdrowie!', '¡Salud!'], ['Wesołych Świąt!', '¡Feliz Navidad!']] },
            { t: 'tabla', cab: ['Número', 'Polaco'], audio: [1], filas: [['1', 'jeden'], ['2', 'dwa'], ['3', 'trzy'], ['4', 'cztery'], ['5', 'pięć'], ['6', 'sześć'], ['7', 'siedem'], ['8', 'osiem'], ['9', 'dziewięć'], ['10', 'dziesięć']] },
            { t: 'nota', x: 'En Nochebuena se comparte el *opłatek* (una oblea) antes de cenar y cada uno desea cosas buenas a los demás. Basta con decir *Wszystkiego najlepszego!* (¡Todo lo mejor!) y sonreír.' }
          ],
          vocab: [['Smacznego!', '¡Que aproveche!'], ['pyszne', 'buenísimo, delicioso (neutro)'], ['smaczne', 'rico, sabroso (neutro)'], ['Poproszę jeszcze trochę.', 'Un poco más, por favor.'], ['Dziękuję, już nie mogę.', 'Gracias, ya no puedo más.'], ['Czy mogę pomóc?', '¿Puedo ayudar?'], ['Wesołych Świąt!', '¡Feliz Navidad!'], ['Wszystkiego najlepszego!', '¡Todo lo mejor!'], ['Wigilia', 'Nochebuena'], ['opłatek', 'oblea de Navidad'], ['jeden', 'uno'], ['dwa', 'dos'], ['cztery', 'cuatro'], ['pięć', 'cinco'], ['sześć', 'seis'], ['siedem', 'siete'], ['osiem', 'ocho'], ['dziewięć', 'nueve'], ['dziesięć', 'diez']],
          ejercicios: [
            { t: 'mc', q: 'Antes de empezar a comer, todos dicen:', ops: ['Smacznego!', 'Dobranoc!', 'Przepraszam!'], ok: 0 },
            { t: 'mc', q: 'Te ofrecen más pierogi y ya no puedes. Dices:', ops: ['Dziękuję, już nie mogę.', 'Poproszę jeszcze trochę.', 'Na razie!'], ok: 0 },
            { t: 'oir', x: 'siedem', ops: ['siedem', 'osiem', 'sześć'], ok: 0 },
            { t: 'oir', x: 'dziewięć', ops: ['dziewięć', 'dziesięć', 'dzień'], ok: 0 },
            { t: 'orden', es: '¡Feliz Navidad!', x: 'Wesołych Świąt!' },
            { t: 'decir', es: '¡Que aproveche!', x: 'Smacznego!' },
            { t: 'decir', es: '¡Feliz Navidad!', x: 'Wesołych Świąt!' }
          ]
        }
      ],
      lecturas: [
        {
          id: 'pl1-r1', titulo: 'Moja rodzina', nivel: 'A1',
          texto: 'Cześć! Mam na imię Ania. Jestem z Polski. Mieszkam w Krakowie. To jest moja rodzina. To jest mój tata, Marek. Tata jest inżynierem. To jest moja mama, Ewa. Mama jest nauczycielką. Mam brata, Piotra, i babcię, Zosię. Babcia mieszka z nami. Mamy też psa. Pies ma na imię Burek.',
          traduccion: '¡Hola! Me llamo Ania. Soy de Polonia. Vivo en Cracovia. Esta es mi familia. Este es mi padre, Marek. Mi padre es ingeniero. Esta es mi madre, Ewa. Mi madre es profesora. Tengo un hermano, Piotr, y una abuela, Zosia. La abuela vive con nosotros. También tenemos un perro. El perro se llama Burek.',
          glosa: {
            'cześć': '¡hola! (informal)', 'mam': 'tengo (mieć)', 'na': 'en, sobre; «mam na imię» = me llamo', 'imię': 'nombre', 'ania': 'Ania (nombre)',
            'jestem': 'soy (być)', 'z': 'de, desde; con', 'polski': 'Polonia (genitivo de Polska: «z Polski» = de Polonia)', 'mieszkam': 'vivo (mieszkać)',
            'w': 'en', 'krakowie': 'Cracovia (locativo de Kraków)', 'to': 'esto; este, esta', 'jest': 'es (być)', 'moja': 'mi (fem.)', 'rodzina': 'familia',
            'mój': 'mi (masc.)', 'tata': 'papá', 'marek': 'Marek (nombre)', 'inżynierem': 'ingeniero (instrumental de inżynier, tras «jest»)', 'mama': 'mamá',
            'ewa': 'Ewa (nombre)', 'nauczycielką': 'profesora (instrumental de nauczycielka)', 'brata': 'hermano (acusativo de brat)', 'piotra': 'Piotr, Pedro (acusativo)',
            'i': 'y', 'babcię': 'abuela (acusativo de babcia)', 'zosię': 'Zosia (acusativo; nombre)', 'babcia': 'abuela', 'mieszka': 'vive (mieszkać)',
            'nami': 'nosotros («z nami» = con nosotros)', 'mamy': 'tenemos (mieć)', 'też': 'también', 'psa': 'perro (acusativo de pies)', 'pies': 'perro',
            'ma': 'tiene (mieć)', 'burek': 'Burek (nombre típico de perro)'
          },
          preguntas: [
            { q: '¿Dónde vive Ania?', ops: ['En Cracovia', 'En Varsovia', 'En Madrid'], ok: 0 },
            { q: '¿Qué es la madre de Ania?', ops: ['Profesora', 'Ingeniera', 'Abuela'], ok: 0 },
            { q: '¿Quién vive con la familia?', ops: ['La abuela', 'El tío', 'La prima'], ok: 0 }
          ]
        },
        {
          id: 'pl1-r2', titulo: 'Pierwsza kolacja (la primera cena)', nivel: 'A1',
          texto: '— Dobry wieczór! Miło mi Panią poznać.\n— Dobry wieczór! Mnie też jest bardzo miło. Proszę, wejdź!\n— Dziękuję. To dla Pani.\n— Jakie piękne kwiaty! Dziękuję. Jesteś głodny?\n— Tak, trochę.\n— To siadamy do stołu. Smacznego!\n— Smacznego! To jest pyszne!\n— Dziękuję. Jeszcze pierogi?\n— Tak, poproszę. Są bardzo smaczne.\n— Na zdrowie!\n— Na zdrowie!',
          traduccion: '— ¡Buenas noches! Encantado de conocerla.\n— ¡Buenas noches! Igualmente, encantada. ¡Pasa, por favor!\n— Gracias. Esto es para usted.\n— ¡Qué flores tan bonitas! Gracias. ¿Tienes hambre?\n— Sí, un poco.\n— Entonces nos sentamos a la mesa. ¡Que aproveche!\n— ¡Que aproveche! ¡Está buenísimo!\n— Gracias. ¿Más pierogi?\n— Sí, por favor. Están muy ricos.\n— ¡Salud!\n— ¡Salud!',
          glosa: {
            'dobry': 'bueno', 'wieczór': 'tarde-noche («dobry wieczór» = buenas noches al llegar)', 'miło': 'agradable («miło mi» = encantado)', 'mi': 'me, a mí',
            'panią': 'a usted, señora (acusativo de Pani)', 'poznać': 'conocer', 'mnie': 'a mí', 'też': 'también', 'jest': 'es, está', 'bardzo': 'muy',
            'proszę': 'por favor; tome', 'wejdź': '¡entra! (de wejść)', 'dziękuję': 'gracias', 'to': 'esto; entonces', 'dla': 'para',
            'pani': 'usted, señora (genitivo tras «dla»)', 'jakie': 'qué (exclamativo, plural)', 'piękne': 'preciosas', 'kwiaty': 'flores',
            'jesteś': 'estás, eres', 'głodny': 'con hambre', 'tak': 'sí', 'trochę': 'un poco', 'siadamy': 'nos sentamos', 'do': 'a, hacia',
            'stołu': 'mesa (genitivo de stół)', 'smacznego': '¡que aproveche!', 'pyszne': 'delicioso', 'jeszcze': 'más, todavía',
            'pierogi': 'pierogi (empanadillas polacas)', 'poproszę': 'sí, por favor; quiero', 'są': 'son, están', 'smaczne': 'ricos',
            'na': 'a; «na zdrowie» = ¡salud!', 'zdrowie': 'salud'
          },
          preguntas: [
            { q: '¿Qué le regala el chico a la madre?', ops: ['Flores', 'Vino', 'Pierogi'], ok: 0 },
            { q: '¿Qué repite en la cena?', ops: ['Pierogi', 'Pan', 'Sopa'], ok: 0 }
          ]
        }
      ]
    }
  ]
};
