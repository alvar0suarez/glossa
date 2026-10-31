// Glossa · polaco · semana 3: Pasado y genitivo
window.CONTENT.pl.semanas.push({
  n: 3,
  pareja: {
    tema: "El pasado. Que te pregunte qué hiciste ayer y el fin de semana pasado, y que te corrija cada verbo: tú terminas en -łem (byłem, poszedłem, zjadłem), nunca en -łam. Después pregúntale tú qué hizo su familia el fin de semana («Co robiliście w weekend?») y apunta las frases nuevas que te diga.",
    preguntas: [
      ["Co robiłeś wczoraj?", "¿Qué hiciste ayer?"],
      ["O której wstałeś?", "¿A qué hora te levantaste?"],
      ["Co jadłeś na śniadanie?", "¿Qué desayunaste?"],
      ["Gdzie byłeś w zeszły weekend?", "¿Dónde estuviste el fin de semana pasado?"],
      ["Czego się nauczyłeś w tym tygodniu?", "¿Qué has aprendido esta semana?"]
    ],
    frases: ["Wczoraj byłem bardzo zmęczony.", "Rano wziąłem prysznic i zjadłem śniadanie.", "Poszedłem do pracy o ósmej.", "Nie mam czasu.", "Poproszę herbatę bez cukru.", "Jeszcze kawałek ciasta? Tak, poproszę!", "Dużo zdrowia!"],
    reto: ["Nie od razu Kraków zbudowano.", "Cracovia no se construyó en un día: es el «No se ganó Zamora en una hora» de los polacos."]
  },
  lecciones: [
    {
      id: "pl3-1",
      titulo: "El pasado (1): byłem, byłam",
      min: 50,
      intro: "En la mesa te preguntarán qué tal el viaje, dónde estuviste y qué hiciste. El polaco tiene un solo pasado, que cambia según quién habla: tú, como hombre, dices *byłem* (estuve, fui); Ania dice *byłam*.",
      bloques: [
        {
          t: "p",
          x: "Se forma con la raíz del infinitivo, la marca del pasado **-ł-** y una terminación de persona: *by(ć)* → *by-ł-em*. La terminación dice quién lo hizo y, en singular, si es hombre o mujer."
        },
        {
          t: "tabla",
          cab: ["", "Masculino", "Femenino"],
          audio: [1, 2],
          filas: [
            ["ja (yo)", "byłem", "byłam"],
            ["ty (tú)", "byłeś", "byłaś"],
            ["on, ona (él, ella)", "był", "była"],
            ["my (nosotros)", "byliśmy", "byłyśmy"],
            ["wy (vosotros)", "byliście", "byłyście"],
            ["oni, one (ellos, ellas)", "byli", "były"]
          ]
        },
        {
          t: "nota",
          x: "Truco para tus formas: las terminaciones son las de *jestem*. *Byłem* como *jestem*, *byłeś* como *jesteś*, *byliśmy* como *jesteśmy*. «Él» no lleva nada: *był*."
        },
        {
          t: "nota",
          x: "En plural, *byliśmy* y *byli* valen si en el grupo hay al menos un hombre (Ania y yo: *byliśmy*). *Byłyśmy* y *były*, si son solo mujeres, o cosas y animales (Ania y su madre: *były*). El neutro es *było*: *To było pyszne!* (¡Estaba buenísimo!)."
        },
        {
          t: "nota",
          x: "Acento: *byliśmy* y *byliście* se acentúan en la antepenúltima, como una esdrújula: *BY-li-śmy*. En la calle oirás también *by-LI-śmy*."
        },
        {
          t: "tabla",
          cab: ["Polaco", "Español"],
          audio: [0],
          filas: [
            ["wczoraj", "ayer"],
            ["przedwczoraj", "anteayer"],
            ["dziś rano", "esta mañana"],
            ["rano", "por la mañana"],
            ["po południu", "por la tarde"],
            ["wieczorem", "por la noche"],
            ["wczoraj wieczorem", "anoche"],
            ["w zeszły weekend", "el fin de semana pasado"],
            ["tydzień temu", "hace una semana"],
            ["dwa lata temu", "hace dos años"]
          ]
        },
        { t: "p", x: "*temu* (hace) va detrás, como «atrás» en «una semana atrás»: *tydzień temu*, *dwa dni temu*, *dwa lata temu*." },
        {
          t: "ej",
          items: [
            ["Gdzie byłeś wczoraj?", "¿Dónde estuviste ayer? (a un chico)"],
            ["Wczoraj byłem w pracy.", "Ayer estuve en el trabajo."],
            ["Wieczorem byłem w domu.", "Por la noche estuve en casa."],
            ["Byłem bardzo zmęczony.", "Estaba muy cansado."],
            ["Ania była w Krakowie.", "Ania estaba en Cracovia."],
            ["Poznaliśmy się w Madrycie dwa lata temu.", "Nos conocimos en Madrid hace dos años."],
            ["Jak było?", "¿Qué tal fue?"],
            ["Było super!", "¡Estuvo genial!"],
            ["To było pyszne!", "¡Estaba buenísimo!"]
          ]
        },
        {
          t: "nota",
          x: "Con *Pan* y *Pani* se usa la 3.ª persona: *Czy Pani była kiedyś w Hiszpanii?* (¿Ha estado usted alguna vez en España?, a la madre de Ania). Y no tienes que elegir entre «estuve», «estaba» y «he estado»: en polaco es la misma forma."
        }
      ],
      vocab: [
        ["byłem", "estuve; fui; estaba (yo, hombre)"],
        ["byłam", "estuve; fui; estaba (yo, mujer)"],
        ["byłeś / byłaś", "estuviste; fuiste (a él / a ella)"],
        ["był / była / było", "estuvo; fue (él / ella / neutro)"],
        ["byliśmy / byłyśmy", "estuvimos; fuimos (con algún hombre / solo mujeres)"],
        ["byli / były", "estuvieron; fueron (con algún hombre / sin hombres)"],
        ["wczoraj", "ayer"],
        ["przedwczoraj", "anteayer"],
        ["dziś rano", "esta mañana"],
        ["wczoraj wieczorem", "anoche"],
        ["w zeszły weekend", "el fin de semana pasado"],
        ["tydzień temu", "hace una semana"],
        ["dwa lata temu", "hace dos años"],
        ["Gdzie byłeś?", "¿Dónde estuviste? (a un chico)"],
        ["Byłem zmęczony.", "Estaba cansado."],
        ["Poznaliśmy się w Madrycie.", "Nos conocimos en Madrid."],
        ["Jak było?", "¿Qué tal fue?"],
        ["Było super!", "¡Estuvo genial!"],
        ["To było pyszne!", "¡Estaba buenísimo!"]
      ],
      ejercicios: [
        { t: "mc", q: "Pablo escribe: «Wczoraj ___ w domu.»", ops: ["byłem", "byłam", "był"], ok: 0 },
        { t: "mc", q: "Ania escribe: «Wczoraj ___ w pracy.»", ops: ["byłam", "byłem", "byłaś"], ok: 0 },
        { t: "mc", q: "Ania y yo estuvimos juntos en Madrid: «Ania i ja ___ razem w Madrycie.»", ops: ["byliśmy", "byłyśmy", "byli"], ok: 0 },
        { t: "mc", q: "«Tydzień temu» significa…", ops: ["hace una semana", "la semana que viene", "toda la semana"], ok: 0 },
        { t: "oir", x: "byłeś", ops: ["byłeś", "byłem", "byłaś"], ok: 0 },
        { t: "orden", es: "Ayer por la noche estuve en casa.", x: "Wczoraj wieczorem byłem w domu." },
        { t: "decir", es: "¡Estaba buenísimo!", x: "To było pyszne!" },
        { t: "decir", es: "Ayer estuve en el trabajo.", x: "Wczoraj byłem w pracy." }
      ]
    },
    {
      id: "pl3-2",
      titulo: "El pasado (2): verbos regulares y tu rutina",
      min: 55,
      intro: "Con una sola regla cuentas casi todo lo que hiciste: infinitivo sin *-ć* + *-łem*. Hoy aprendes también los verbos de la rutina, para contarle a Ania tu día de ayer de principio a fin.",
      bloques: [
        {
          t: "p",
          x: "Quita la *-ć* del infinitivo y añade **-łem** (yo, hombre) o **-łam** (yo, mujer): *czytać* → *czytałem*, *robić* → *robiłem*, *pracować* → *pracowałem*."
        },
        {
          t: "tabla",
          cab: ["Infinitivo", "Yo (hombre)", "Yo (mujer)", "Español"],
          audio: [0, 1, 2],
          filas: [
            ["robić", "robiłem", "robiłam", "hacer"],
            ["pracować", "pracowałem", "pracowałam", "trabajar"],
            ["czytać", "czytałem", "czytałam", "leer"],
            ["mówić", "mówiłem", "mówiłam", "hablar, decir"],
            ["słuchać", "słuchałem", "słuchałam", "escuchar"],
            ["pisać", "pisałem", "pisałam", "escribir"],
            ["pić", "piłem", "piłam", "beber"],
            ["spać", "spałem", "spałam", "dormir"]
          ]
        },
        {
          t: "nota",
          x: "El pasado sale del **infinitivo**, no del presente: *piszę* (escribo), pero *pisałem*; *piję* (bebo), pero *piłem*; *śpię* (duermo), pero *spałem*."
        },
        {
          t: "tabla",
          cab: ["", "Masculino", "Femenino"],
          audio: [1, 2],
          filas: [
            ["ja", "robiłem", "robiłam"],
            ["ty", "robiłeś", "robiłaś"],
            ["on, ona", "robił", "robiła"],
            ["my", "robiliśmy", "robiłyśmy"],
            ["wy", "robiliście", "robiłyście"],
            ["oni, one", "robili", "robiły"]
          ]
        },
        {
          t: "p",
          x: "La rutina. Muchos verbos van en pareja: uno para lo habitual o lo que está en curso (*wstawać*: levantarse, cada día) y otro para una acción concreta y terminada (*wstać*). Para contar tu día de ayer paso a paso, usa el segundo: *Wczoraj wstałem o siódmej.* Se parece a «me levantaba» frente a «me levanté». Lo verás a fondo en la semana 5."
        },
        {
          t: "tabla",
          cab: ["Cada día", "Ayer", "Español"],
          audio: [0, 1],
          filas: [
            ["wstaję", "wstałem", "me levanto / me levanté"],
            ["jem śniadanie", "zjadłem śniadanie", "desayuno / desayuné"],
            ["idę do pracy", "poszedłem do pracy", "voy / fui al trabajo"],
            ["pracuję", "pracowałem", "trabajo / trabajé"],
            ["wracam do domu", "wróciłem do domu", "vuelvo / volví a casa"],
            ["gotuję kolację", "ugotowałem kolację", "hago / hice la cena"],
            ["oglądam telewizję", "oglądałem telewizję", "veo / estuve viendo la tele"],
            ["idę spać", "poszedłem spać", "me voy / me fui a dormir"]
          ]
        },
        {
          t: "nota",
          x: "*Zjadłem* y *poszedłem* son irregulares: los ves en la próxima lección. *Oglądałem telewizję* (estuve viendo la tele) cuenta una actividad; *obejrzałem film* (vi una película, entera) cuenta algo terminado."
        },
        {
          t: "ej",
          items: [
            ["Co robiłeś wczoraj?", "¿Qué hiciste ayer? (a un chico)"],
            ["Najpierw wstałem i wypiłem kawę.", "Primero me levanté y me tomé un café."],
            ["Potem pracowałem cały dzień.", "Luego trabajé todo el día."],
            ["Wróciłem do domu o szóstej.", "Volví a casa a las seis."],
            ["Ugotowałem kolację.", "Hice la cena."],
            ["Wieczorem obejrzałem film.", "Por la noche vi una película."],
            ["Spałem tylko sześć godzin.", "Dormí solo seis horas."],
            ["A ty? Co robiłaś?", "¿Y tú? ¿Qué hiciste? (a una chica)"],
            ["Co Pan robił w weekend?", "¿Qué hizo usted el fin de semana? (a un señor)"]
          ]
        }
      ],
      vocab: [
        ["Co robiłeś wczoraj?", "¿Qué hiciste ayer? (a un chico)"],
        ["robić / zrobić", "hacer"],
        ["wstawać / wstać (wstaję, wstajesz)", "levantarse"],
        ["Wstałem o siódmej.", "Me levanté a las siete."],
        ["wracać / wrócić", "volver"],
        ["Wróciłem do domu.", "Volví a casa."],
        ["gotować / ugotować (gotuję, gotujesz)", "cocinar"],
        ["Ugotowałem kolację.", "Hice la cena."],
        ["oglądać / obejrzeć", "ver (la tele, una película)"],
        ["Obejrzałem film.", "Vi una película."],
        ["Oglądałem telewizję.", "Estuve viendo la tele."],
        ["Pracowałem cały dzień.", "Trabajé todo el día."],
        ["Spałem tylko sześć godzin.", "Dormí solo seis horas."],
        ["pić / wypić (piję, pijesz)", "beber, tomar"],
        ["Wypiłem kawę.", "Me tomé un café."],
        ["iść spać", "irse a dormir"],
        ["najpierw", "primero"],
        ["potem", "luego, después"],
        ["Co Pan robił?", "¿Qué hizo usted? (a un señor)"],
        ["Co Pani robiła?", "¿Qué hizo usted? (a una señora)"]
      ],
      ejercicios: [
        { t: "mc", q: "Pasado de *czytać* (leer), dicho por ti:", ops: ["czytałem", "czytałam", "czytam"], ok: 0 },
        { t: "mc", q: "Pasado de *pisać* (escribir; presente *piszę*), dicho por ti:", ops: ["pisałem", "piszałem", "piszę"], ok: 0 },
        { t: "mc", q: "Ania y su madre hicieron la cena: «Ania i mama ___ kolację.»", ops: ["ugotowały", "ugotowali", "ugotowała"], ok: 0 },
        {
          t: "mc",
          q: "Ayer te levantaste a las siete. Dices:",
          ops: ["Wczoraj wstałem o siódmej.", "Wczoraj wstawałem o siódmej.", "Wczoraj wstaję o siódmej."],
          ok: 0
        },
        { t: "oir", x: "wróciłem", ops: ["wróciłem", "wróciłam", "wrócił"], ok: 0 },
        { t: "orden", es: "Volví a casa a las seis.", x: "Wróciłem do domu o szóstej." },
        { t: "decir", es: "¿Qué hiciste ayer? (a ella)", x: "Co robiłaś wczoraj?" },
        { t: "decir", es: "Trabajé todo el día.", x: "Pracowałem cały dzień." }
      ]
    },
    {
      id: "pl3-3",
      titulo: "El pasado (3): los irregulares",
      min: 55,
      intro: "Seis verbos muy frecuentes se saltan la regla, y son justo los que más usarás al contar tu día: ir, comer, poder, tener, querer y coger.",
      bloques: [
        {
          t: "tabla",
          cab: ["Español", "Infinitivo", "Yo (hombre)", "Ella"],
          audio: [1, 2, 3],
          filas: [
            ["ir (en camino)", "iść", "szedłem", "szła"],
            ["ir (y llegar), irse", "pójść", "poszedłem", "poszła"],
            ["comer", "jeść", "jadłem", "jadła"],
            ["poder", "móc", "mogłem", "mogła"],
            ["tener", "mieć", "miałem", "miała"],
            ["querer", "chcieć", "chciałem", "chciała"],
            ["coger, tomar", "wziąć", "wziąłem", "wzięła"]
          ]
        },
        {
          t: "nota",
          x: "Dos detalles. «Él» en *móc* es *mógł*, con ó, aunque «yo» sea *mogłem*. Y en el plural masculino vuelve la *e*: *jedli*, *mieli*, *chcieli*, *wzięli* (frente a *jadłem*, *miałem*, *chciałem*, *wziąłem*). Pasa en todos los verbos en *-eć*: *rozumieć* (entender) → *rozumiałem*, *rozumieli*."
        },
        { t: "nota", x: "Pronunciación: delante de *ł*, la *ą* y la *ę* pierden la nasal: *wziąłem* suena casi «vźóuem»; *wzięła*, «vźéua»." },
        {
          t: "p",
          x: "*iść* y *pójść* son pareja: *szedłem* = iba, estaba en camino; *poszedłem* = fui, me fui. Para contar qué hiciste ayer casi siempre dirás *poszedłem*. Igual con *jeść* y *zjeść*: *jadłem* (comí, estuve comiendo) y *zjadłem* (me comí, me lo terminé)."
        },
        {
          t: "ej",
          items: [
            ["Rano poszedłem do pracy.", "Por la mañana fui al trabajo."],
            ["Szedłem do pracy i słuchałem muzyki.", "Iba al trabajo escuchando música."],
            ["Zjadłem śniadanie w domu.", "Desayuné en casa."],
            ["Co jadłeś na obiad?", "¿Qué comiste?"],
            ["Nie mogłem spać.", "No podía dormir."],
            ["Piotr nie mógł przyjść.", "Piotr no pudo venir."],
            ["Miałem dużo pracy.", "Tuve mucho trabajo."],
            ["Chciałem do ciebie zadzwonić.", "Quería llamarte."],
            ["Wziąłem prysznic.", "Me duché."]
          ]
        },
        {
          t: "nota",
          x: "*Wziąć* es el «coger» polaco: *Wziąłem prysznic* (me duché; literalmente, «cogí ducha»), *Wziąłem taksówkę* (cogí un taxi). En la mesa oirás su imperativo: *Weź jeszcze!* (¡Coge más!)."
        }
      ],
      vocab: [
        ["iść / pójść (idę, idziesz)", "ir (andando)"],
        ["szedłem", "iba (yo, andando)"],
        ["Poszedłem do pracy.", "Fui al trabajo."],
        ["jeść / zjeść (jem, jesz)", "comer"],
        ["jadłem", "comí; comía (yo)"],
        ["Zjadłem śniadanie.", "Desayuné."],
        ["Co jadłeś na obiad?", "¿Qué comiste?"],
        ["mogłem", "pude; podía (yo)"],
        ["Nie mogłem spać.", "No podía dormir."],
        ["Piotr nie mógł przyjść.", "Piotr no pudo venir."],
        ["miałem", "tuve; tenía (yo)"],
        ["Miałem dużo pracy.", "Tuve mucho trabajo."],
        ["chciałem", "quise; quería (yo)"],
        ["Chciałem do ciebie zadzwonić.", "Quería llamarte."],
        ["brać / wziąć (biorę, bierzesz)", "coger, tomar"],
        ["wziąłem", "cogí; tomé (yo)"],
        ["Wziąłem prysznic.", "Me duché."],
        ["Wziąłem taksówkę.", "Cogí un taxi."]
      ],
      ejercicios: [
        { t: "mc", q: "«Fui al trabajo» (y llegaste):", ops: ["Poszedłem do pracy.", "Szedłem do pracy.", "Idę do pracy."], ok: 0 },
        { t: "mc", q: "Piotr no pudo venir: «Piotr nie ___ przyjść.»", ops: ["mógł", "mogłem", "mogła"], ok: 0 },
        { t: "mc", q: "Ania cuenta que se duchó: «___ prysznic.»", ops: ["Wzięłam", "Wziąłem", "Wziąłam"], ok: 0 },
        { t: "mc", q: "Marek y Ewa comieron pierogi: «Marek i Ewa ___ pierogi.»", ops: ["jedli", "jadli", "jadły"], ok: 0 },
        { t: "oir", x: "wziąłem", ops: ["wziąłem", "wzięłam", "wziął"], ok: 0 },
        { t: "orden", es: "Por la mañana me duché y desayuné.", x: "Rano wziąłem prysznic i zjadłem śniadanie." },
        { t: "decir", es: "Fui al trabajo.", x: "Poszedłem do pracy." },
        { t: "decir", es: "No podía dormir.", x: "Nie mogłem spać." }
      ]
    },
    {
      id: "pl3-4",
      titulo: "El genitivo (1): Nie mam czasu",
      min: 55,
      intro: "El genitivo es el caso que más vas a oír después del nominativo. Hoy, su uso más fácil: con *nie*, el complemento pasa a genitivo. *Mam czas*, pero *Nie mam czasu*.",
      bloques: [
        {
          t: "p",
          x: "Con un verbo negado, el complemento directo (el acusativo de la semana pasada) pasa a genitivo: *Piję kawę* → *Nie piję kawy*. *Lubię mleko* → *Nie lubię mleka*. Con personas y animales masculinos no notarás nada, porque su acusativo ya era igual al genitivo: *Mam brata* → *Nie mam brata*."
        },
        {
          t: "tabla",
          cab: ["", "Nominativo", "Genitivo"],
          audio: [1, 2],
          filas: [
            ["Masculino, persona o animal: -a", "brat, pies", "brata, psa"],
            ["Masculino, cosa: muchas veces -u", "czas, cukier", "czasu, cukru"],
            ["Masculino, cosa: otras veces -a", "chleb, ser", "chleba, sera"],
            ["Femenino: -y", "kawa, woda", "kawy, wody"],
            ["Femenino tras k, g, l, j o consonante suave: -i", "Ania, babcia, ręka", "Ani, babci, ręki"],
            ["Neutro: -a", "mleko, piwo", "mleka, piwa"]
          ]
        },
        {
          t: "nota",
          x: "Para las cosas masculinas no hay regla segura: aprende el genitivo con la palabra (los diccionarios lo dan: *czas, -u*; *chleb, -a*). Consonante suave: ś, ć, ź, ń, dź, o una consonante seguida de *i* (*Ania*, *babcia*). Y ojo: la *e* de *pies* y *cukier* desaparece (*psa*, *cukru*), como en *dzień* → *dnia* o *Marek* → *Marka*."
        },
        {
          t: "p",
          x: "*Nie ma* + genitivo significa «no hay» o «no está»: *Nie ma mleka* (No hay leche), *Nie ma Ani* (Ania no está). En pasado es siempre *nie było*: *Nie było chleba* (No había pan), *Ani nie było w domu* (Ania no estaba en casa)."
        },
        {
          t: "ej",
          items: [
            ["Nie mam czasu.", "No tengo tiempo."],
            ["Nie mam brata.", "No tengo hermano."],
            ["Nie mam kawy, mam tylko herbatę.", "No tengo café, solo tengo té."],
            ["Nie ma mleka.", "No hay leche."],
            ["Ani nie ma w domu.", "Ania no está en casa."],
            ["Wczoraj nie miałem czasu.", "Ayer no tuve tiempo."],
            ["Nie było chleba.", "No había pan."],
            ["Nie widziałem Piotra.", "No vi a Piotr."],
            ["Nie ma problemu!", "¡No hay problema!"]
          ]
        },
        {
          t: "nota",
          x: "En Nochebuena, por tradición, no se come carne: *W Wigilię nie je się mięsa.* Hay pescado (sobre todo carpa, *karp*), *barszcz* (sopa de remolacha), *pierogi* y, en muchas casas, doce platos."
        },
        {
          t: "nota",
          x: "Algunos verbos piden genitivo siempre, también sin *nie*: *uczyć się* (estudiar: *uczę się polskiego*), *słuchać* (escuchar: *słucham muzyki*), *szukać* (buscar: *szukam telefonu*), *potrzebować* (necesitar: *potrzebuję pomocy*)."
        }
      ],
      vocab: [
        ["Nie mam czasu.", "No tengo tiempo."],
        ["Nie mam pojęcia.", "Ni idea."],
        ["Nie mam ochoty.", "No me apetece."],
        ["Nie ma problemu.", "No hay problema."],
        ["Nie ma mleka.", "No hay leche."],
        ["Ani nie ma w domu.", "Ania no está en casa."],
        ["Nie było chleba.", "No había pan."],
        ["Nie widziałem Piotra.", "No vi a Piotr."],
        ["Nie mam rodzeństwa.", "No tengo hermanos."],
        ["Nie znam tego słowa.", "No conozco esta palabra."],
        ["Nie jem mięsa.", "No como carne."],
        ["W Wigilię nie je się mięsa.", "En Nochebuena no se come carne."],
        ["karp", "carpa"],
        ["Uczyłem się polskiego.", "Estuve estudiando polaco."],
        ["słuchać (+ gen.)", "escuchar (algo)"],
        ["Szukam telefonu.", "Busco el móvil."],
        ["Potrzebuję pomocy.", "Necesito ayuda."]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «Nie piję ___.» (café)", ops: ["kawy", "kawę", "kawa"], ok: 0 },
        { t: "mc", q: "Completa: «Nie ma ___.» (leche)", ops: ["mleka", "mleko", "mlekiem"], ok: 0 },
        { t: "mc", q: "«Ani nie ma w domu» significa…", ops: ["Ania no está en casa.", "Ania no tiene casa.", "Ania no quiere ir a casa."], ok: 0 },
        { t: "mc", q: "Ayer no había pan: «Wczoraj ___ chleba.»", ops: ["nie było", "nie był", "nie ma"], ok: 0 },
        { t: "oir", x: "czasu", ops: ["czasu", "czas", "czasem"], ok: 0 },
        { t: "orden", es: "Ayer no tuve tiempo.", x: "Wczoraj nie miałem czasu." },
        { t: "decir", es: "No tengo tiempo.", x: "Nie mam czasu." },
        { t: "decir", es: "Ni idea.", x: "Nie mam pojęcia." }
      ]
    },
    {
      id: "pl3-5",
      titulo: "El genitivo (2): de quién y cuánto",
      min: 55,
      intro: "El genitivo es también el «de» español: *brat Ani* (el hermano de Ania), *filiżanka herbaty* (una taza de té). En la mesa de Navidad lo oirás sin parar: *Jeszcze kawałek ciasta?*",
      bloques: [
        {
          t: "p",
          x: "Posesión: primero lo que se tiene y después el dueño en genitivo, sin preposición: *dom Ani* (la casa de Ania), *pies babci* (el perro de la abuela), *samochód taty* (el coche de papá)."
        },
        {
          t: "tabla",
          cab: ["Nombre", "Genitivo", "Ejemplo", "Español"],
          audio: [0, 1, 2],
          filas: [
            ["Ania", "Ani", "brat Ani", "el hermano de Ania"],
            ["Zosia", "Zosi", "pokój babci Zosi", "la habitación de la abuela Zosia"],
            ["Ewa", "Ewy", "siostra Ewy", "la hermana de Ewa"],
            ["Marek", "Marka", "żona Marka", "la mujer de Marek"],
            ["Piotr", "Piotra", "pokój Piotra", "la habitación de Piotr"],
            ["tata", "taty", "samochód taty", "el coche de papá"],
            ["Pablo", "Pabla", "dziewczyna Pabla", "la novia de Pablo"]
          ]
        },
        { t: "p", x: "Cantidades: *dużo* (mucho), *mało* (poco), *trochę* (un poco), *ile?* (¿cuánto?) y los recipientes van seguidos de genitivo." },
        {
          t: "tabla",
          cab: ["Polaco", "Español"],
          audio: [0],
          filas: [
            ["dużo pracy", "mucho trabajo"],
            ["mało czasu", "poco tiempo"],
            ["trochę cukru", "un poco de azúcar"],
            ["Ile cukru?", "¿Cuánto azúcar?"],
            ["kawałek ciasta", "un trozo de tarta"],
            ["szklanka wody", "un vaso de agua"],
            ["filiżanka herbaty", "una taza de té"],
            ["kieliszek wina", "una copa de vino"],
            ["butelka wina", "una botella de vino"],
            ["talerz zupy", "un plato de sopa"]
          ]
        },
        {
          t: "nota",
          x: "Si lo pides, el recipiente va en acusativo y lo de dentro, en genitivo: *Poproszę szklankę wody* (Un vaso de agua, por favor). *Kawałek* no cambia: *Poproszę kawałek ciasta*."
        },
        { t: "p", x: "Adjetivos y posesivos en genitivo: **-ego** en masculino y neutro, **-ej** en femenino." },
        {
          t: "tabla",
          cab: ["", "Masculino y neutro", "Femenino"],
          audio: [1, 2],
          filas: [
            ["Nominativo", "dobry, dobre", "dobra"],
            ["Genitivo", "dobrego", "dobrej"],
            ["mi (nominativo)", "mój, moje", "moja"],
            ["mi (genitivo)", "mojego", "mojej"],
            ["tu (nominativo)", "twój, twoje", "twoja"],
            ["tu (genitivo)", "twojego", "twojej"]
          ]
        },
        {
          t: "ej",
          items: [
            ["kieliszek czerwonego wina", "una copa de vino tinto"],
            ["filiżanka czarnej kawy", "una taza de café solo"],
            ["kawałek domowego ciasta", "un trozo de tarta casera"],
            ["Marek to tata mojej dziewczyny.", "Marek es el padre de mi novia."],
            ["Przyniosłem butelkę wina.", "He traído una botella de vino."],
            ["Jeszcze kawałek ciasta?", "¿Otro trozo de tarta?"],
            ["Tak, ale tylko mały kawałek.", "Sí, pero solo un trocito."],
            ["Mamy dużo jedzenia!", "¡Tenemos mucha comida!"],
            ["Dużo zdrowia!", "¡Mucha salud!"]
          ]
        },
        {
          t: "nota",
          x: "Muchos buenos deseos son genitivos, porque se sobrentiende *życzę* (te deseo), que pide genitivo: *Smacznego!*, *Wszystkiego najlepszego!*, *Wesołych Świąt!* (en plural) y *Dużo zdrowia!* (¡Mucha salud!)."
        }
      ],
      vocab: [
        ["dużo", "mucho (+ gen.)"],
        ["mało", "poco (+ gen.)"],
        ["Ile cukru?", "¿Cuánto azúcar?"],
        ["Poproszę szklankę wody.", "Un vaso de agua, por favor."],
        ["filiżanka herbaty", "una taza de té"],
        ["filiżanka czarnej kawy", "una taza de café solo"],
        ["kieliszek czerwonego wina", "una copa de vino tinto"],
        ["Przyniosłem butelkę wina.", "He traído una botella de vino."],
        ["talerz zupy", "un plato de sopa"],
        ["Jeszcze kawałek ciasta?", "¿Otro trozo de tarta?"],
        ["Tylko mały kawałek, proszę.", "Solo un trocito, por favor."],
        ["kawałek domowego ciasta", "un trozo de tarta casera"],
        ["brat mojej dziewczyny", "el hermano de mi novia"],
        ["rodzice mojej dziewczyny", "los padres de mi novia"],
        ["Mamy dużo jedzenia!", "¡Tenemos mucha comida!"],
        ["Dużo zdrowia!", "¡Mucha salud!"],
        ["Wszystkiego dobrego!", "¡Que todo te vaya bien!"],
        ["Życzę Pani dużo zdrowia.", "Le deseo mucha salud (a ella)."]
      ],
      ejercicios: [
        { t: "mc", q: "«El hermano de Ania» es…", ops: ["brat Ani", "brat Ania", "brat Anię"], ok: 0 },
        { t: "mc", q: "Completa: «Poproszę filiżankę ___.» (té)", ops: ["herbaty", "herbatę", "herbata"], ok: 0 },
        { t: "mc", q: "Completa: «brat ___ dziewczyny» (mi)", ops: ["mojej", "mojego", "moja"], ok: 0 },
        {
          t: "mc",
          q: "¿Por qué *Smacznego!* acaba en *-ego*?",
          ops: ["Es genitivo: se sobrentiende «życzę» (te deseo)", "Es un plural", "Es un pasado"],
          ok: 0
        },
        { t: "oir", x: "kawałek ciasta", ops: ["kawałek ciasta", "kawałek mięsa", "kawałek sera"], ok: 0 },
        { t: "orden", es: "Marek es el padre de mi novia.", x: "Marek to tata mojej dziewczyny." },
        { t: "decir", es: "Solo un trocito, por favor.", x: "Tylko mały kawałek, proszę." },
        { t: "decir", es: "Un vaso de agua, por favor.", x: "Poproszę szklankę wody." }
      ]
    },
    {
      id: "pl3-6",
      titulo: "El genitivo (3): do, z, od, bez, dla, u",
      min: 50,
      intro: "Seis preposiciones muy frecuentes van con genitivo. Con ellas dices de dónde eres (*z Madrytu*), adónde vas (*do Krakowa*), para quién es el regalo (*dla mamy*) y en casa de quién se cena (*u babci*).",
      bloques: [
        {
          t: "tabla",
          cab: ["Preposición", "Significa", "Ejemplo", "Español"],
          audio: [0, 2],
          filas: [
            ["do", "a, hacia; hasta", "do Krakowa", "a Cracovia"],
            ["z, ze", "de, desde", "z Madrytu", "de Madrid"],
            ["od", "de (alguien); desde", "od Ani", "de parte de Ania"],
            ["bez", "sin", "bez cukru", "sin azúcar"],
            ["dla", "para", "dla mamy", "para mamá"],
            ["u", "en casa de", "u babci", "en casa de la abuela"]
          ]
        },
        {
          t: "nota",
          x: "*u* no tiene equivalente en español: *u babci* = en casa de la abuela; *u nas* = en nuestra casa, o en nuestro país; *u lekarza* = en el médico. Los pronombres también van en genitivo: *dla mnie* (para mí), *dla ciebie* (para ti)."
        },
        {
          t: "p",
          x: "Con personas, tres preposiciones forman un trío: *do* (a casa de, cuando vas), *u* (en casa de, cuando estás) y *od* (de casa de, cuando vuelves). *Idę do babci. Jestem u babci. Wracam od babci.*"
        },
        {
          t: "nota",
          x: "Ojo con *z*: con genitivo es «de, desde» (*z pracy*, del trabajo); con instrumental es «con» (*kawa z mlekiem*), y eso llega en la semana 4. Ante algunos grupos de consonantes se dice *ze*: *ze sklepu* (de la tienda)."
        },
        { t: "p", x: "*do* y *od* también sirven para el tiempo: *do szóstej* (hasta las seis), *od rana do wieczora* (de la mañana a la noche)." },
        {
          t: "ej",
          items: [
            ["Jestem z Madrytu.", "Soy de Madrid."],
            ["W grudniu lecę do Krakowa.", "En diciembre vuelo a Cracovia."],
            ["Wigilia jest u rodziców Ani.", "La Nochebuena es en casa de los padres de Ania."],
            ["W Boże Narodzenie jemy obiad u cioci Basi.", "El día de Navidad comemos en casa de la tía Basia."],
            ["To mały prezent dla Pani.", "Es un detalle para usted (a ella)."],
            ["Mam wiadomość od Ani.", "Tengo un mensaje de Ania."],
            ["Poproszę herbatę bez cukru.", "Un té sin azúcar, por favor."],
            ["Wczoraj pracowałem od rana do wieczora.", "Ayer trabajé de la mañana a la noche."],
            ["U nas w Hiszpanii je się kolację bardzo późno.", "En España, en mi tierra, se cena muy tarde."]
          ]
        }
      ],
      vocab: [
        ["do", "a, hacia; hasta (+ gen.)"],
        ["z, ze", "de, desde (+ gen.)"],
        ["od", "de (parte de); desde (+ gen.)"],
        ["bez", "sin (+ gen.)"],
        ["dla", "para (+ gen.)"],
        ["u", "en casa de (+ gen.)"],
        ["Jestem z Madrytu.", "Soy de Madrid."],
        ["Lecę do Krakowa.", "Vuelo a Cracovia."],
        ["do domu", "a casa"],
        ["z pracy", "del trabajo"],
        ["Idę do babci.", "Voy a casa de la abuela."],
        ["u babci", "en casa de la abuela"],
        ["U nas w Hiszpanii…", "En España, en mi país… (u nas = en nuestra casa, en nuestro país)"],
        ["dla mnie", "para mí"],
        ["To dla ciebie.", "Esto es para ti."],
        ["To mały prezent dla Pani.", "Es un detalle para usted (a ella)."],
        ["wiadomość (f.)", "mensaje; noticia"],
        ["bez cukru", "sin azúcar"],
        ["od rana do wieczora", "de la mañana a la noche"],
        ["do szóstej", "hasta las seis"]
      ],
      ejercicios: [
        { t: "mc", q: "Estás en casa de la abuela: «Jestem ___ babci.»", ops: ["u", "do", "od"], ok: 0 },
        { t: "mc", q: "Vas a casa de la abuela: «Idę ___ babci.»", ops: ["do", "u", "od"], ok: 0 },
        { t: "mc", q: "Completa: «To prezent dla ___.» (Ania)", ops: ["Ani", "Ania", "Anię"], ok: 0 },
        { t: "mc", q: "«U nas w Hiszpanii…» significa…", ops: ["En España, en mi país…", "Vamos a España…", "Venimos de España…"], ok: 0 },
        { t: "oir", x: "od babci", ops: ["od babci", "do babci", "u babci"], ok: 0 },
        { t: "orden", es: "Un té sin azúcar, por favor.", x: "Poproszę herbatę bez cukru." },
        { t: "decir", es: "Soy de Madrid.", x: "Jestem z Madrytu." },
        { t: "decir", es: "Esto es para ti.", x: "To dla ciebie." }
      ]
    },
    {
      id: "pl3-7",
      titulo: "Repaso: ¿qué hiciste el fin de semana?",
      min: 45,
      intro: "Repaso de la semana con una videollamada como las que tendrás con Ania. Lee el diálogo en voz alta haciendo de Pablo y fíjate en sus verbos en *-łem*.",
      bloques: [
        {
          t: "ej",
          items: [
            ["Cześć! Jak minął weekend?", "Ania: ¡Hola! ¿Qué tal el fin de semana?"],
            ["Dobrze! W sobotę długo spałem, a potem uczyłem się polskiego.", "Pablo: ¡Bien! El sábado dormí hasta tarde y luego estudié polaco."],
            ["Brawo! A po południu?", "Ania: ¡Bravo! ¿Y por la tarde?"],
            ["Po południu poszedłem do kina.", "Pablo: Por la tarde fui al cine."],
            ["Do kina? Na jaki film?", "Ania: ¿Al cine? ¿A ver qué película?"],
            ["Na polski film!", "Pablo: ¡A ver una película polaca!"],
            ["Naprawdę? Ja też byłam w kinie, z Olą! I co, rozumiałeś?", "Ania: ¿De verdad? ¡Yo también fui al cine, con Ola! ¿Y qué, lo entendías?"],
            ["Nie wszystko, ale trochę tak. A w niedzielę ugotowałem paellę.", "Pablo: No todo, pero algo sí. Y el domingo hice paella."],
            ["Mmm! A dla mnie nic?", "Ania: ¡Mmm! ¿Y para mí nada?"],
            ["Niestety, nic nie zostało!", "Pablo: ¡Por desgracia, no ha quedado nada!"],
            ["Nie szkodzi. Ale w grudniu paella dla całej rodziny!", "Ania: No pasa nada. ¡Pero en diciembre, paella para toda la familia!"]
          ]
        },
        {
          t: "nota",
          x: "Si dices *poszłam* o *byłam*, hablas en femenino, y ella te corregirá. Tus formas acaban en **-łem**: *byłem*, *poszedłem*, *zjadłem*, *wziąłem*."
        },
        {
          t: "tabla",
          cab: ["Infinitivo", "Yo (Pablo)", "Yo (Ania)"],
          audio: [0, 1, 2],
          filas: [
            ["być", "byłem", "byłam"],
            ["mieć", "miałem", "miałam"],
            ["pójść", "poszedłem", "poszłam"],
            ["zjeść", "zjadłem", "zjadłam"],
            ["móc", "mogłem", "mogłam"],
            ["chcieć", "chciałem", "chciałam"],
            ["wziąć", "wziąłem", "wzięłam"],
            ["wstać", "wstałem", "wstałam"],
            ["wrócić", "wróciłem", "wróciłam"]
          ]
        },
        {
          t: "nota",
          x: "Genitivo, en resumen: después de *nie* (*nie mam czasu*), para el «de» (*brat Ani*), después de cantidades (*trochę mleka*, *szklanka wody*) y después de *do, z, od, bez, dla, u*. Adjetivos: *-ego* en masculino y neutro, *-ej* en femenino."
        },
        { t: "p", x: "Ahora tú: cuenta en voz alta tu día de ayer en seis frases. Empieza con *Wczoraj wstałem o…* y termina con *Poszedłem spać o…*" }
      ],
      vocab: [
        ["Jak minął weekend?", "¿Qué tal el fin de semana?"],
        ["w niedzielę", "el domingo"],
        ["Długo spałem.", "Dormí hasta tarde."],
        ["Poszedłem do kina.", "Fui al cine."],
        ["Naprawdę?", "¿De verdad?"],
        ["Ja też.", "Yo también."],
        ["Nie wszystko, ale trochę tak.", "No todo, pero algo sí."],
        ["Brawo!", "¡Bravo!"],
        ["niestety", "por desgracia"],
        ["Nic nie zostało.", "No ha quedado nada."],
        ["Nie szkodzi.", "No pasa nada."],
        ["dla całej rodziny", "para toda la familia"],
        ["kochanie", "cariño"],
        ["Co słychać?", "¿Qué tal? ¿Qué hay de nuevo?"],
        ["Nic specjalnego.", "Nada especial."],
        ["Opowiadaj!", "¡Cuenta, cuenta!"],
        ["Było bardzo miło.", "Fue muy agradable."]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "Ania te pregunta «Jak minął weekend?». Quiere saber…",
          ops: ["qué tal tu fin de semana", "cuándo empieza el fin de semana", "qué harás el fin de semana"],
          ok: 0
        },
        {
          t: "mc",
          q: "¿Cómo dice Pablo «ayer estuve en casa de la tía»?",
          ops: ["Wczoraj byłem u cioci.", "Wczoraj byłam u cioci.", "Wczoraj byłem do cioci."],
          ok: 0
        },
        { t: "mc", q: "«Nie szkodzi» significa…", ops: ["No pasa nada.", "No hay nada.", "No me gusta."], ok: 0 },
        { t: "mc", q: "Completa: «Paella dla ___ rodziny.» (toda)", ops: ["całej", "całego", "cała"], ok: 0 },
        { t: "oir", x: "poszedłem", ops: ["poszedłem", "poszłam", "poszedł"], ok: 0 },
        { t: "orden", es: "El sábado dormí hasta tarde.", x: "W sobotę długo spałem." },
        { t: "decir", es: "¿Qué tal el fin de semana?", x: "Jak minął weekend?" },
        { t: "decir", es: "No pasa nada.", x: "Nie szkodzi." }
      ]
    }
  ],
  lecturas: [
    {
      id: "pl3-r1",
      titulo: "Wiadomość do Ani (un mensaje para Ania)",
      nivel: "A1",
      texto: "Cześć, kochanie!\n\nWczoraj miałem bardzo długi dzień. Wstałem o szóstej, bo rano miałem ważne spotkanie. W domu nie było mleka, więc wypiłem tylko czarną kawę. Do pracy poszedłem pieszo, a po drodze słuchałem polskiego podcastu.\n\nPracowałem od rana do wieczora. Nie miałem nawet czasu na obiad. Potem poszedłem do sklepu i kupiłem prezent dla twojej mamy. Co to jest? Tajemnica! Dla twojego taty jeszcze nic nie mam.\n\nDo domu wróciłem o ósmej. Na kolację zrobiłem tortillę. Wieczorem oglądałem polski film. Nie rozumiałem wszystkiego, ale dużo tak! Chciałem do ciebie zadzwonić, ale było już za późno. Poszedłem spać o północy.\n\nA ty? Co robiłaś wczoraj?\n\nTęsknię! Buziaki,\nPablo",
      traduccion: "¡Hola, cariño!\n\nAyer tuve un día muy largo. Me levanté a las seis porque por la mañana tenía una reunión importante. En casa no había leche, así que me tomé únicamente un café solo. Fui al trabajo andando y por el camino escuché un pódcast en polaco.\n\nTrabajé de la mañana a la noche. Ni siquiera tuve tiempo para comer. Después fui a una tienda y compré un regalo para tu madre. ¿Qué es? ¡Un secreto! Para tu padre todavía no tengo nada.\n\nVolví a casa a las ocho. Para cenar hice tortilla de patatas. Por la noche estuve viendo una película polaca. No lo entendía todo, ¡pero sí mucho! Quería llamarte, pero ya era demasiado tarde. Me fui a dormir a medianoche.\n\n¿Y tú? ¿Qué hiciste ayer?\n\n¡Te echo de menos! Besos,\nPablo",
      glosa: {
        "cześć": "¡hola! (informal)",
        kochanie: "cariño",
        wczoraj: "ayer",
        "miałem": "tuve, tenía (pasado de mieć; yo, hombre)",
        bardzo: "muy",
        "długi": "largo",
        "dzień": "día",
        "wstałem": "me levanté (pasado de wstać)",
        o: "a (la hora): «o szóstej» = a las seis",
        "szóstej": "las seis («o szóstej» = a las seis)",
        bo: "porque",
        rano: "por la mañana",
        "ważne": "importante (neutro)",
        spotkanie: "reunión",
        w: "en",
        domu: "casa («w domu» = en casa, locativo; «do domu» = a casa, genitivo)",
        nie: "no",
        "było": "había; era, estaba (pasado de być, neutro): «nie było» + genitivo = no había",
        mleka: "leche (genitivo de mleko, tras «nie było»)",
        "więc": "así que",
        "wypiłem": "me tomé, me bebí (pasado de wypić)",
        tylko: "solo",
        "czarną": "negra («czarna kawa» = café solo; acusativo)",
        "kawę": "café (acusativo de kawa)",
        do: "a; hasta (+ genitivo)",
        pracy: "trabajo (genitivo de praca: «do pracy» = al trabajo)",
        "poszedłem": "fui, me fui (pasado de pójść)",
        pieszo: "a pie, andando",
        a: "y; ¿y…? («A ty?» = ¿Y tú?)",
        po: "«po drodze» = por el camino",
        drodze: "camino (locativo de droga: «po drodze» = de camino)",
        "słuchałem": "escuché, estuve escuchando (pasado de słuchać, que pide genitivo)",
        polskiego: "polaco (genitivo masculino, -ego)",
        podcastu: "pódcast (genitivo de podcast, tras «słuchać»)",
        "pracowałem": "trabajé (pasado de pracować)",
        od: "desde (+ genitivo)",
        rana: "la mañana («od rana» = desde la mañana)",
        wieczora: "la noche (genitivo de wieczór: «do wieczora» = hasta la noche)",
        nawet: "ni siquiera; incluso",
        czasu: "tiempo (genitivo de czas, tras «nie miałem»)",
        na: "para (+ acusativo): «na obiad» = para comer; «na kolację» = para cenar",
        obiad: "comida (la principal del día)",
        potem: "después",
        sklepu: "tienda (genitivo de sklep: «do sklepu» = a la tienda)",
        i: "y",
        "kupiłem": "compré (pasado de kupić)",
        prezent: "regalo",
        dla: "para (+ genitivo)",
        twojej: "tu (genitivo femenino, -ej)",
        mamy: "mamá (genitivo de mama, tras «dla»)",
        co: "qué",
        to: "esto",
        jest: "es (być)",
        tajemnica: "secreto",
        twojego: "tu (genitivo masculino, -ego)",
        taty: "papá (genitivo de tata, tras «dla»)",
        jeszcze: "todavía («jeszcze nic» = todavía nada)",
        nic: "nada (va con «nie»: «nic nie mam» = no tengo nada)",
        mam: "tengo (mieć)",
        "wróciłem": "volví (pasado de wrócić)",
        "ósmej": "las ocho («o ósmej» = a las ocho)",
        "kolację": "cena (acusativo de kolacja)",
        "zrobiłem": "hice (pasado de zrobić)",
        "tortillę": "tortilla de patatas (acusativo de tortilla)",
        wieczorem: "por la noche",
        "oglądałem": "estuve viendo, vi (pasado de oglądać)",
        polski: "polaco",
        film: "película",
        "rozumiałem": "entendía (pasado de rozumieć)",
        wszystkiego: "todo (genitivo de wszystko, tras verbo negado)",
        ale: "pero",
        "dużo": "mucho",
        tak: "sí («ale dużo tak» = pero mucho sí)",
        "chciałem": "quería, quise (pasado de chcieć)",
        ciebie: "ti (genitivo de ty: «do ciebie» = a ti)",
        "zadzwonić": "llamar por teléfono («zadzwonić do kogoś» = llamar a alguien)",
        "już": "ya",
        za: "demasiado («za późno» = demasiado tarde)",
        "późno": "tarde",
        "spać": "dormir («iść spać» = irse a dormir)",
        "północy": "medianoche («o północy» = a medianoche)",
        ty: "tú",
        "robiłaś": "hiciste (pasado de robić, a una mujer)",
        "tęsknię": "te echo de menos (tęsknić)",
        buziaki: "besos (cariñoso)",
        pablo: "Pablo (nombre; genitivo: Pabla)"
      },
      preguntas: [
        { q: "¿Por qué se tomó Pablo un café solo?", ops: ["Porque en casa no había leche", "Porque no le gusta la leche", "Porque no tenía tiempo"], ok: 0 },
        { q: "¿Qué compró Pablo en la tienda?", ops: ["Un regalo para la madre de Ania", "Leche y pan", "Un regalo para el padre de Ania"], ok: 0 },
        { q: "¿Por qué no llamó a Ania?", ops: ["Porque ya era demasiado tarde", "Porque estaba viendo una película", "Porque no tenía su número"], ok: 0 }
      ],
      notas: "*Nie było mleka*, *nie miałem czasu*: con la negación, genitivo. *Słuchałem polskiego podcastu*: *słuchać* pide genitivo. *Dla twojej mamy*, *dla twojego taty*: genitivo tras *dla*, con *-ej* en femenino y *-ego* en masculino. Fíjate también en *wstałem*, *poszedłem*, *wróciłem*: el pasado de Pablo siempre acaba en *-łem*."
    },
    {
      id: "pl3-r2",
      titulo: "Niedziela u babci Zosi (domingo en casa de la abuela)",
      nivel: "A2",
      texto: "Babcia Zosia mieszka z nami, ale w każdą niedzielę nasz dom to dom babci.\n\nW zeszłą niedzielę babcia wstała o szóstej. Najpierw ugotowała rosół, a potem zrobiła pierogi. O drugiej przyszli ciocia Basia, wujek Janek i Ola. Obiad był pyszny! Wujek Janek zjadł dwa talerze rosołu. Burek też dostał kawałek mięsa. Po obiedzie piliśmy herbatę i jedliśmy sernik. Ja zjadłam tylko mały kawałek, bo nie miałam już miejsca.\n\nPotem babcia opowiadała historie ze swojego dzieciństwa, a Ola słuchała babci bardzo uważnie. Kiedy babcia była mała, w domu nie było telewizora. Na Wigilię każde dziecko dostawało jedną pomarańczę i to był wielki prezent! Wieczorem cała rodzina śpiewała kolędy.\n\n– Wtedy było mało jedzenia, ale dużo radości – mówi babcia.",
      traduccion: "La abuela Zosia vive con nosotros, pero cada domingo nuestra casa es la casa de la abuela.\n\nEl domingo pasado la abuela se levantó a las seis. Primero hizo caldo y luego preparó pierogi. A las dos llegaron la tía Basia, el tío Janek y Ola. ¡La comida estaba buenísima! El tío Janek se tomó dos platos de caldo. A Burek también le tocó un trozo de carne. Después de comer tomamos té y comimos tarta de queso. Yo solo me comí un trocito, porque ya no me cabía nada.\n\nLuego la abuela contó historias de su infancia, y Ola la escuchaba con mucha atención. Cuando la abuela era pequeña, en casa no había televisión. En Nochebuena cada niño recibía una naranja, ¡y era un regalo enorme! Por la noche toda la familia cantaba villancicos.\n\n—Entonces había poca comida, pero mucha alegría —dice la abuela.",
      glosa: {
        babcia: "abuela",
        zosia: "Zosia (nombre; diminutivo de Zofia)",
        mieszka: "vive (mieszkać)",
        z: "con («z nami» = con nosotros)",
        nami: "nosotros («z nami» = con nosotros)",
        ale: "pero",
        w: "en; «w niedzielę» = el domingo; «w domu» = en casa",
        "każdą": "cada (acusativo femenino: «w każdą niedzielę» = cada domingo)",
        "niedzielę": "domingo (acusativo de niedziela: «w niedzielę» = el domingo)",
        nasz: "nuestro",
        dom: "casa",
        to: "es (une dos sustantivos); eso",
        babci: "abuela (genitivo de babcia: «dom babci» = la casa de la abuela; «słuchała babci» = escuchaba a la abuela)",
        "zeszłą": "pasada (acusativo femenino de zeszły)",
        "wstała": "se levantó (pasado de wstać; ella)",
        o: "a (la hora)",
        "szóstej": "las seis («o szóstej» = a las seis)",
        najpierw: "primero",
        "ugotowała": "hizo, cocinó (pasado de ugotować; ella)",
        "rosół": "caldo de pollo (el plato del domingo)",
        a: "y (con contraste)",
        potem: "después, luego",
        "zrobiła": "hizo (pasado de zrobić; ella)",
        pierogi: "pierogi (empanadillas polacas)",
        drugiej: "las dos («o drugiej» = a las dos)",
        przyszli: "vinieron, llegaron (pasado de przyjść; ellos)",
        ciocia: "tía",
        basia: "Basia (nombre; diminutivo de Barbara)",
        wujek: "tío",
        janek: "Janek (nombre; diminutivo de Jan)",
        i: "y",
        ola: "Ola (nombre; diminutivo de Aleksandra)",
        obiad: "comida (la principal del día)",
        "był": "fue, estuvo, era (pasado de być; él)",
        pyszny: "buenísimo, delicioso",
        "zjadł": "se comió (pasado de zjeść; él)",
        dwa: "dos",
        talerze: "platos (plural de talerz)",
        "rosołu": "caldo (genitivo de rosół, tras «talerze»)",
        burek: "Burek (el perro)",
        "też": "también",
        "dostał": "recibió, le dieron (pasado de dostać; él)",
        "kawałek": "trozo",
        "mięsa": "carne (genitivo de mięso, tras «kawałek»)",
        po: "después de («po obiedzie» = después de comer)",
        obiedzie: "comida (locativo de obiad)",
        "piliśmy": "tomamos, bebimos (pasado de pić; nosotros)",
        "herbatę": "té (acusativo de herbata)",
        "jedliśmy": "comimos (pasado de jeść; nosotros: ojo a la e)",
        sernik: "tarta de queso",
        ja: "yo",
        "zjadłam": "me comí (pasado de zjeść; yo, mujer)",
        tylko: "solo",
        "mały": "pequeño",
        bo: "porque",
        nie: "no",
        "miałam": "tenía (pasado de mieć; yo, mujer)",
        "już": "ya",
        miejsca: "sitio (genitivo de miejsce: «nie miałam już miejsca» = ya no me cabía nada)",
        "opowiadała": "contaba, contó (pasado de opowiadać; ella)",
        historie: "historias (plural de historia)",
        ze: "de, desde (forma de «z» ante algunos grupos de consonantes; + genitivo)",
        swojego: "su (propio) (genitivo de swój)",
        "dzieciństwa": "infancia (genitivo de dzieciństwo, tras «ze»)",
        "słuchała": "escuchaba (pasado de słuchać, que pide genitivo; ella)",
        bardzo: "muy",
        "uważnie": "con atención",
        kiedy: "cuando",
        "była": "era, estaba (pasado de być; ella)",
        "mała": "pequeña",
        domu: "casa (locativo de dom: «w domu» = en casa)",
        "było": "había (pasado de być, neutro): «nie było» + genitivo = no había",
        telewizora: "televisor (genitivo de telewizor, tras «nie było»)",
        na: "para («na Wigilię» = para Nochebuena)",
        "wigilię": "Nochebuena (acusativo de Wigilia)",
        "każde": "cada (neutro)",
        dziecko: "niño, niña",
        "dostawało": "recibía, cada año (pasado de dostawać; neutro)",
        "jedną": "una (acusativo femenino)",
        "pomarańczę": "naranja (acusativo de pomarańcza)",
        wielki: "enorme, gran",
        prezent: "regalo",
        wieczorem: "por la noche",
        "cała": "toda",
        rodzina: "familia",
        "śpiewała": "cantaba (pasado de śpiewać; ella)",
        "kolędy": "villancicos (plural de kolęda)",
        wtedy: "entonces",
        "mało": "poco (+ genitivo)",
        jedzenia: "comida (genitivo de jedzenie, tras «mało»)",
        "dużo": "mucho (+ genitivo)",
        "radości": "alegría (genitivo de radość, tras «dużo»)",
        "mówi": "dice (mówić)"
      },
      preguntas: [
        { q: "¿Quién cuenta la historia?", ops: ["Ania", "La abuela Zosia", "Ola"], ok: 0 },
        { q: "¿Qué preparó primero la abuela?", ops: ["Caldo (rosół)", "Pierogi", "Tarta de queso"], ok: 0 },
        {
          q: "¿Por qué Ania solo se comió un trocito de tarta?",
          ops: ["Porque ya no le cabía nada", "Porque no le gusta la tarta de queso", "Porque no quedaba más"],
          ok: 0
        },
        { q: "Cuando la abuela era pequeña, ¿qué era un gran regalo en Nochebuena?", ops: ["Una naranja", "Un televisor", "Un trozo de tarta"], ok: 0 }
      ],
      notas: "*Dwa talerze rosołu*, *kawałek mięsa*, *mało jedzenia, dużo radości*: cantidad + genitivo. *Nie było telewizora*: «no había» + genitivo. *Burek dostał* (le dieron, esa vez) frente a *każde dziecko dostawało* (recibía, cada año): las parejas de verbos de la lección 2."
    },
    {
      id: "pl3-r3",
      titulo: "Weekend rodziny Ani (el fin de semana de la familia de Ania)",
      nivel: "A2",
      texto: "W zeszły weekend w domu Ani nikt nie odpoczywał.\n\nW sobotę rano tata Marek naprawiał samochód, a mama Ewa sprawdzała testy. Piotr cały dzień się uczył, bo w poniedziałek miał egzamin. Babcia Zosia upiekła sernik dla całej rodziny.\n\nPo południu Ania i kuzynka Ola poszły do kina na polską komedię. Film był śmieszny, ale trochę za długi. Potem dziewczyny poszły jeszcze na kawę i kawałek ciasta. Wieczorem wszyscy oglądali mecz. Tylko Burek nie oglądał meczu, bo spał.\n\nW niedzielę rano była piękna pogoda, więc tata, Piotr i Burek poszli na długi spacer. Po południu był rodzinny obiad u babci Zosi.\n\nWieczorem Ania zadzwoniła do Pabla.\n– Co robiłeś w weekend? – zapytała.\n– Uczyłem się polskiego! – odpowiedział Pablo.",
      traduccion: "El fin de semana pasado nadie descansó en casa de Ania.\n\nEl sábado por la mañana su padre, Marek, estuvo arreglando el coche, y su madre, Ewa, corrigiendo exámenes. Piotr estuvo estudiando todo el día, porque el lunes tenía un examen. La abuela Zosia hizo una tarta de queso para toda la familia.\n\nPor la tarde Ania y su prima Ola fueron al cine a ver una comedia polaca. La película era divertida, pero un poco larga de más. Después las chicas fueron además a tomar un café y un trozo de tarta. Por la noche todos vieron un partido. Solo Burek no vio el partido, porque estaba durmiendo.\n\nEl domingo por la mañana hacía un tiempo precioso, así que el padre, Piotr y Burek se fueron a dar un largo paseo. Por la tarde hubo comida familiar en casa de la abuela Zosia.\n\nPor la noche Ania llamó a Pablo.\n—¿Qué hiciste el fin de semana? —le preguntó.\n—¡Estuve estudiando polaco! —contestó Pablo.",
      glosa: {
        w: "en; «w sobotę» = el sábado",
        "zeszły": "pasado («w zeszły weekend» = el fin de semana pasado)",
        weekend: "fin de semana",
        domu: "casa (locativo de dom: «w domu Ani» = en casa de Ania)",
        ani: "de Ania (genitivo de Ania)",
        nikt: "nadie (va con «nie»)",
        nie: "no",
        "odpoczywał": "descansaba, descansó (pasado de odpoczywać; él)",
        "sobotę": "sábado (acusativo de sobota: «w sobotę» = el sábado)",
        rano: "por la mañana",
        tata: "papá",
        marek: "Marek (nombre)",
        "naprawiał": "estuvo arreglando (pasado de naprawiać; él)",
        "samochód": "coche",
        a: "y (con contraste)",
        mama: "mamá",
        ewa: "Ewa (nombre)",
        "sprawdzała": "estuvo corrigiendo (pasado de sprawdzać; ella)",
        testy: "exámenes (plural de test)",
        piotr: "Piotr (nombre; Pedro)",
        "cały": "todo, entero («cały dzień» = todo el día)",
        "dzień": "día",
        "się": "se («uczyć się» = estudiar)",
        "uczył": "estudiaba, estuvo estudiando (pasado de uczyć się; él)",
        bo: "porque",
        "poniedziałek": "lunes («w poniedziałek» = el lunes)",
        "miał": "tenía (pasado de mieć; él)",
        egzamin: "examen",
        babcia: "abuela",
        zosia: "Zosia (nombre)",
        "upiekła": "horneó, hizo (pasado de upiec; ella)",
        sernik: "tarta de queso",
        dla: "para (+ genitivo)",
        "całej": "toda (genitivo femenino de cały, -ej)",
        rodziny: "familia (genitivo de rodzina, tras «dla»)",
        po: "«po południu» = por la tarde",
        "południu": "mediodía («po południu» = por la tarde)",
        ania: "Ania (nombre)",
        i: "y",
        kuzynka: "prima",
        ola: "Ola (nombre)",
        "poszły": "fueron (pasado de pójść; ellas, solo mujeres)",
        do: "a (+ genitivo)",
        kina: "cine (genitivo de kino: «do kina» = al cine)",
        na: "a, para (+ acusativo): «na komedię» = a ver una comedia; «na kawę» = a tomar un café; «na spacer» = de paseo",
        "polską": "polaca (acusativo femenino)",
        "komedię": "comedia (acusativo de komedia)",
        film: "película",
        "był": "fue, era (pasado de być; él); «był obiad» = hubo comida",
        "śmieszny": "divertido, gracioso",
        ale: "pero",
        "trochę": "un poco",
        za: "demasiado («za długi» = demasiado largo)",
        "długi": "largo",
        potem: "después",
        dziewczyny: "las chicas (plural de dziewczyna)",
        jeszcze: "además, todavía",
        "kawę": "café (acusativo de kawa)",
        "kawałek": "trozo",
        ciasta: "tarta, pastel (genitivo de ciasto, tras «kawałek»)",
        wieczorem: "por la noche",
        wszyscy: "todos (personas)",
        "oglądali": "vieron, estuvieron viendo (pasado de oglądać; ellos)",
        mecz: "partido",
        tylko: "solo",
        burek: "Burek (el perro)",
        "oglądał": "veía, vio (pasado de oglądać; él)",
        meczu: "partido (genitivo de mecz, tras verbo negado)",
        "spał": "dormía (pasado de spać; él)",
        "niedzielę": "domingo (acusativo de niedziela: «w niedzielę» = el domingo)",
        "była": "era, hubo (pasado de być; ella): «była piękna pogoda» = hacía un tiempo precioso",
        "piękna": "precioso, bonito (femenino)",
        pogoda: "tiempo (el clima)",
        "więc": "así que",
        poszli: "fueron (pasado de pójść; ellos, con algún hombre)",
        spacer: "paseo («iść na spacer» = ir de paseo)",
        rodzinny: "familiar",
        obiad: "comida (la principal del día)",
        u: "en casa de (+ genitivo)",
        babci: "abuela (genitivo de babcia, tras «u»)",
        zosi: "Zosia (genitivo)",
        "zadzwoniła": "llamó por teléfono (pasado de zadzwonić; ella)",
        pabla: "Pablo (genitivo: «do Pabla» = a Pablo)",
        co: "qué",
        "robiłeś": "hiciste (pasado de robić, a un hombre)",
        "zapytała": "preguntó (pasado de zapytać; ella)",
        "uczyłem": "estudié, estuve estudiando (pasado de uczyć się; yo, hombre)",
        polskiego: "polaco (genitivo: «uczyć się polskiego» = estudiar polaco)",
        "odpowiedział": "contestó (pasado de odpowiedzieć; él)",
        pablo: "Pablo (nombre)"
      },
      preguntas: [
        { q: "¿Por qué estudió Piotr todo el sábado?", ops: ["Porque el lunes tenía un examen", "Porque no tenía coche", "Porque hacía mal tiempo"], ok: 0 },
        { q: "¿Quién fue al cine?", ops: ["Ania y su prima Ola", "Marek y Piotr", "Ania y su madre"], ok: 0 },
        { q: "¿Por qué Burek no vio el partido?", ops: ["Porque estaba durmiendo", "Porque estaba de paseo", "Porque estaba en casa de la abuela"], ok: 0 },
        { q: "¿Qué hizo Pablo el fin de semana?", ops: ["Estudió polaco", "Fue a Cracovia", "Arregló el coche"], ok: 0 }
      ],
      notas: "*Ania i Ola poszły* (solo mujeres) frente a *tata, Piotr i Burek poszli* (hay algún hombre). *Nie oglądał meczu*: verbo negado + genitivo. *Uczyłem się polskiego*: *uczyć się* pide genitivo."
    }
  ]
});
