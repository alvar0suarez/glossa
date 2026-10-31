// Glossa · polaco · semana 5: Aspecto verbal y futuro
window.CONTENT.pl.semanas.push({
  n: 5,
  pareja: {
    tema: "Planes: que te pregunte qué harás la semana que viene y en Navidad, y que te cuente qué hará su familia en diciembre (quién cocina, quién compra el árbol, quién hornea). Responde con los dos futuros: «będę» + verbo para lo que harás un rato o a menudo, y el perfectivo para lo que acabarás («kupię», «zadzwonię»). Después, que te dé órdenes («Usiądź!», «Spróbuj!», «Poczekaj!», «Daj mi…») y tú obedeces y contestas («Już idę!», «Dobrze!»). Apunta en Ajustes, en «Su familia», quién prepara cada plato.",
    preguntas: [
      ["Co będziesz robił w przyszłym tygodniu?", "¿Qué vas a hacer la semana que viene?"],
      ["Co zrobisz jutro po pracy?", "¿Qué harás mañana después del trabajo?"],
      ["Co robiłeś wczoraj wieczorem?", "¿Qué hiciste ayer por la noche?"],
      ["Kupiłeś już prezenty dla mojej rodziny?", "¿Ya has comprado los regalos para mi familia?"],
      ["Spróbujesz karpia w Wigilię?", "¿Probarás la carpa en Nochebuena?"]
    ],
    frases: ["Już to zrobiłem.", "Jutro kupię prezenty.", "W święta będę odpoczywał.", "Spróbuję wszystkiego.", "Proszę usiąść.", "Nie martw się!", "Już idę!"],
    reto: ["Nie odkładaj na jutro tego, co możesz zrobić dziś.", "No dejes para mañana lo que puedas hacer hoy. Fíjate en «nie odkładaj» (imperativo con «nie», imperfectivo) y en «zrobić» (perfectivo: hacerlo del todo)."]
  },
  lecciones: [
    {
      id: "pl5-1",
      titulo: "El aspecto: proceso o resultado",
      min: 55,
      intro: "En polaco casi todos los verbos van en pareja: uno cuenta la acción en marcha o repetida (*robić*) y el otro, la acción acabada, con resultado (*zrobić*). Es lo más importante de esta semana y lo oirás en la mesa a cada momento, por ejemplo cuando te ofrezcan algo: *Zjesz coś?* (¿comes algo?).",
      bloques: [
        {
          t: "p",
          x: "Los gramáticos los llaman **imperfectivo** (la acción como proceso: mientras dura, o como costumbre) y **perfectivo** (la acción completa, de una vez, con resultado). En el diccionario verás *ndk* (*niedokonany*, imperfectivo) y *dk* (*dokonany*, perfectivo)."
        },
        {
          t: "tabla",
          cab: ["Proceso (ndk)", "Resultado (dk)", "Español"],
          audio: [0, 1],
          filas: [
            ["robić", "zrobić", "hacer"],
            ["pisać", "napisać", "escribir"],
            ["czytać", "przeczytać", "leer"],
            ["jeść", "zjeść", "comer"],
            ["pić", "wypić", "beber"]
          ]
        },
        {
          t: "p",
          x: "En pasado se ve muy claro: el imperfectivo cuenta qué estabas haciendo o qué hacías a menudo; el perfectivo, qué terminaste. Tú, como chico, acabas en *-łem*: *czytałem*, *przeczytałem*."
        },
        {
          t: "ej",
          items: [
            ["Wczoraj czytałem książkę.", "Ayer estuve leyendo un libro (no digo si lo acabé)."],
            ["Wczoraj przeczytałem książkę.", "Ayer me leí un libro (entero)."],
            ["Pisałem list do Ani.", "Estaba escribiendo una carta a Ania."],
            ["Napisałem list do Ani.", "Escribí una carta a Ania (ya está escrita)."],
            ["Jadłem kolację, kiedy zadzwoniłaś.", "Estaba cenando cuando llamaste."],
            ["Zjadłem wszystko.", "Me lo he comido todo."],
            ["Na studiach codziennie piłem kawę.", "En la universidad tomaba café todos los días."],
            ["Wypiłem kawę i wyszedłem.", "Me tomé el café y me fui."]
          ]
        },
        {
          t: "nota",
          x: "Ayuda pensar en el imperfecto y el indefinido: *czytałem* ≈ leía, estaba leyendo; *przeczytałem* ≈ leí (entero). Pero falla en dos sitios. 1) Si hablas de una duración o de actividades sin resultado, el polaco usa el imperfectivo aunque en español digas «leí» o «hiciste»: *Czytałem dwie godziny* (leí dos horas), *Co robiłeś wczoraj?* (¿qué hiciste ayer?). 2) El aspecto no es solo del pasado: el futuro, el infinitivo y el imperativo también tienen las dos formas, y ahí el español no te ayuda."
        },
        {
          t: "p",
          x: "Pistas: *codziennie* (cada día), *często* (a menudo), *zawsze* (siempre) y *długo* (mucho rato) piden **imperfectivo**. Un objeto completo, como *całą książkę* (el libro entero), o *w końcu* (al final, por fin) suelen ir con **perfectivo**."
        }
      ],
      vocab: [
        ["pisać / napisać", "escribir"],
        ["czytać / przeczytać", "leer"],
        ["jeść / zjeść", "comer"],
        ["pić / wypić", "beber"],
        ["Już to zrobiłem.", "Ya lo he hecho."],
        ["Przeczytałem całą książkę.", "Me he leído el libro entero."],
        ["Zjadłem wszystko.", "Me lo he comido todo."],
        ["Czytałem dwie godziny.", "Estuve leyendo dos horas."],
        ["Jadłem kolację, kiedy zadzwoniłaś.", "Estaba cenando cuando llamaste."],
        ["Napisałem do ciebie.", "Te he escrito."],
        ["list", "carta (no «lista»)"],
        ["zawsze", "siempre"],
        ["długo", "mucho tiempo, mucho rato"],
        ["w końcu", "al final, por fin"],
        ["cały, cała, całe", "entero, todo el / toda la"],
        ["wszystko", "todo"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "Ayer estuviste leyendo un rato, sin acabar el libro:",
          ops: ["Wczoraj czytałem.", "Wczoraj przeczytałem.", "Jutro przeczytam."],
          ok: 0
        },
        { t: "mc", q: "Te has terminado el plato y lo dices orgulloso:", ops: ["Zjadłem wszystko!", "Jadłem wszystko!", "Jem wszystko!"], ok: 0 },
        {
          t: "mc",
          q: "*Czytałem dwie godziny* va en imperfectivo porque…",
          ops: ["habla de una duración, no de un resultado", "es una acción terminada", "habla del futuro"],
          ok: 0
        },
        { t: "orden", es: "Ya lo he hecho.", x: "Już to zrobiłem." },
        { t: "oir", x: "zrobiłem", ops: ["zrobiłem", "robiłem", "zrobię"], ok: 0 },
        { t: "oir", x: "przeczytałem", ops: ["przeczytałem", "czytałem", "przeczytam"], ok: 0 },
        { t: "decir", es: "Me lo he comido todo.", x: "Zjadłem wszystko." },
        { t: "decir", es: "¿Qué hiciste ayer? (a un chico)", x: "Co robiłeś wczoraj?" }
      ]
    },
    {
      id: "pl5-2",
      titulo: "Parejas de verbos para la Navidad",
      min: 55,
      intro: "Hoy, las parejas que más vas a usar estas Navidades: cocinar, hornear, llamar, comprar, dar, volver, preparar, decir, ver y coger. Apréndelas siempre de dos en dos, como si fueran una sola palabra.",
      bloques: [
        {
          t: "p",
          x: "Hay tres tipos de pareja. **Con prefijo**: el perfectivo añade algo delante (*z-, na-, prze-, wy-, u-, za-*). **Con sufijo**: el imperfectivo es más largo (*kupować / kupić*). **Distintas**: dos verbos que no se parecen (*brać / wziąć*). No hay regla para adivinar el prefijo: apréndelo con el verbo."
        },
        {
          t: "tabla",
          cab: ["Proceso (ndk)", "Resultado (dk)", "Español"],
          audio: [0, 1],
          filas: [
            ["gotować", "ugotować", "cocinar"],
            ["piec", "upiec", "hornear"],
            ["dzwonić", "zadzwonić", "llamar (por teléfono)"],
            ["kupować", "kupić", "comprar"],
            ["dawać", "dać", "dar"],
            ["wracać", "wrócić", "volver"],
            ["przygotowywać", "przygotować", "preparar"],
            ["mówić", "powiedzieć", "decir"],
            ["widzieć", "zobaczyć", "ver"],
            ["brać", "wziąć", "coger, tomar"]
          ]
        },
        {
          t: "ej",
          items: [
            ["Mama gotowała cały dzień.", "Mamá estuvo cocinando todo el día."],
            ["Mama ugotowała barszcz.", "Mamá ha hecho el barszcz (ya está listo)."],
            ["Dzwoniłem do ciebie trzy razy.", "Te llamé tres veces."],
            ["Zadzwoniłem do babci.", "He llamado a la abuela."],
            ["Kupowałem prezenty cały wieczór.", "Estuve comprando regalos toda la tarde."],
            ["Kupiłem prezent dla Ani.", "He comprado un regalo para Ania."],
            ["Babcia upiekła pierniki.", "La abuela ha hecho pierniki."],
            ["Wziąłem kawałek sernika.", "He cogido un trozo de tarta de queso."],
            ["Wróciłem do domu o dziewiątej.", "Volví a casa a las nueve."]
          ]
        },
        {
          t: "nota",
          x: "*mówić* es «hablar» y «decir»; su perfectivo, *powiedzieć*, solo «decir»: *Mówię po polsku* (hablo polaco), *Powiedziałem «dziękuję»* (dije «gracias»). Con *widzieć / zobaczyć*: *Widziałem ten film* (he visto esa peli, la conozco), pero *Zobaczyłem Anię na lotnisku* (vi a Ania en el aeropuerto: en ese momento la divisé)."
        },
        {
          t: "p",
          x: "Dos pasados irregulares: *upiekłem* (de *upiec*; ella dice *upiekłam*) y *wziąłem* (de *wziąć*; ella, *wzięłam*). Los demás son regulares: *kupiłem, dałem, wróciłem, powiedziałem, zobaczyłem*."
        }
      ],
      vocab: [
        ["gotować / ugotować", "cocinar"],
        ["piec / upiec", "hornear"],
        ["dzwonić / zadzwonić", "llamar (por teléfono)"],
        ["dawać / dać", "dar"],
        ["przygotowywać / przygotować", "preparar"],
        ["mówić / powiedzieć", "decir (mówić también es «hablar»)"],
        ["widzieć / zobaczyć", "ver"],
        ["brać / wziąć", "coger, tomar"],
        ["Dzwoniłem do ciebie trzy razy.", "Te llamé tres veces."],
        ["Kupiłem prezent dla Ani.", "He comprado un regalo para Ania."],
        ["Co powiedziałaś?", "¿Qué has dicho? (a una chica)"],
        ["Widziałem ten film.", "He visto esa película."],
        ["Babcia upiekła pierniki.", "La abuela ha hecho pierniki."],
        ["Wziąłem kawałek sernika.", "He cogido un trozo de tarta de queso."],
        ["raz, dwa razy, trzy razy", "una vez, dos veces, tres veces"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "*Dzwoniłem do ciebie trzy razy* va en imperfectivo porque…",
          ops: ["la acción se repite", "es una sola llamada", "habla del futuro"],
          ok: 0
        },
        { t: "mc", q: "El perfectivo de *brać* (coger) es…", ops: ["wziąć", "dać", "zbrać"], ok: 0 },
        { t: "mc", q: "La pareja de *mówić* (decir) es…", ops: ["powiedzieć", "widzieć", "zobaczyć"], ok: 0 },
        {
          t: "mc",
          q: "Ania te cuenta: *Babcia upiekła pierniki.* ¿Qué ha pasado?",
          ops: ["Los pierniki ya están hechos", "La abuela está horneando ahora", "La abuela los hará mañana"],
          ok: 0
        },
        { t: "orden", es: "He comprado un regalo para Ania.", x: "Kupiłem prezent dla Ani." },
        { t: "oir", x: "zadzwoniłem", ops: ["zadzwoniłem", "dzwoniłem", "zadzwonię"], ok: 0 },
        { t: "decir", es: "¿Qué has dicho? (a ella)", x: "Co powiedziałaś?" },
        { t: "decir", es: "Te llamé tres veces.", x: "Dzwoniłem do ciebie trzy razy." }
      ]
    },
    {
      id: "pl5-3",
      titulo: "Futuro de proceso: będę + verbo",
      min: 50,
      intro: "Primer futuro: *będę* + verbo imperfectivo, para lo que estarás haciendo o harás a menudo: *Będę pracował* (estaré trabajando). Es la respuesta a la pregunta que te harán todos: *Co będziesz robił w święta?* (¿qué harás en Navidad?).",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "być (futuro)", "Ejemplo"],
          audio: [1, 2],
          filas: [
            ["ja (yo)", "będę", "Będę pracował."],
            ["ty (tú)", "będziesz", "Będziesz dzwonił?"],
            ["on, ona (él, ella)", "będzie", "Babcia będzie piekła."],
            ["my (nosotros)", "będziemy", "Będziemy jeść."],
            ["wy (vosotros)", "będziecie", "Będziecie odpoczywać?"],
            ["oni (ellos)", "będą", "Będą gotowali."]
          ]
        },
        {
          t: "p",
          x: "Dos formas con el mismo significado: *będę* + infinitivo (*będę pracować*) o *będę* + el pasado de 3.ª persona (*będę pracował*). La segunda es la más corriente al hablar y concuerda con quien habla: tú dices *będę pracował*; Ania, *będę pracowała*."
        },
        {
          t: "nota",
          x: "Solo los imperfectivos van con *będę*. Nunca *będę zrobić*: el perfectivo hace el futuro él solo (*zrobię*), lo verás mañana. *Będę* solo ya es «estaré»: *Będę w Krakowie* (estaré en Cracovia). Y *mieć* hace *Będę miał czas* (tendré tiempo)."
        },
        {
          t: "ej",
          items: [
            ["Co będziesz robił w weekend?", "¿Qué vas a hacer el fin de semana? (a un chico)"],
            ["W sobotę będę pracował.", "El sábado trabajaré."],
            ["W niedzielę będę się uczył polskiego.", "El domingo estaré estudiando polaco."],
            ["W święta będę w Krakowie.", "En Navidad estaré en Cracovia."],
            ["Będziesz miał czas w piątek?", "¿Tendrás tiempo el viernes?"],
            ["Jutro będzie zimno.", "Mañana hará frío."],
            ["W święta będziemy dużo jeść.", "En Navidad comeremos mucho."],
            ["Będę na ciebie czekała na lotnisku.", "Te estaré esperando en el aeropuerto (lo dice Ania)."]
          ]
        },
        {
          t: "nota",
          x: "«Voy a + infinitivo» no se traduce con *iść* (ir andando): «mañana voy a trabajar» es *Jutro będę pracował*. *Idę spać* (me voy a dormir) sí existe, pero porque te mueves ahora mismo."
        }
      ],
      vocab: [
        ["będę", "estaré, seré (futuro de być)"],
        ["będziesz", "estarás, serás"],
        ["będzie", "estará, será; habrá"],
        ["będziemy", "estaremos, seremos"],
        ["będziecie", "estaréis, seréis"],
        ["będą", "estarán, serán"],
        ["Co będziesz robił w weekend?", "¿Qué vas a hacer el fin de semana? (a un chico)"],
        ["Co będziesz robiła w święta?", "¿Qué vas a hacer en Navidad? (a una chica)"],
        ["Będę pracował.", "Estaré trabajando; trabajaré."],
        ["Będę się uczył polskiego.", "Estaré estudiando polaco."],
        ["W święta będę w Krakowie.", "En Navidad estaré en Cracovia."],
        ["Będziesz miał czas?", "¿Tendrás tiempo? (a un chico)"],
        ["Jutro będzie zimno.", "Mañana hará frío."],
        ["Będę na ciebie czekał.", "Te estaré esperando (lo dice un chico)."],
        ["Będę dzwonił codziennie.", "Llamaré todos los días."],
        ["w weekend", "el fin de semana"],
        ["w sobotę, w niedzielę", "el sábado, el domingo"],
        ["odpoczywać / odpocząć", "descansar"],
        ["czekać / poczekać", "esperar"]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «W święta ___ w Krakowie» (yo estaré).", ops: ["będę", "będzie", "będziesz"], ok: 0 },
        { t: "mc", q: "¿Cuál está **mal**?", ops: ["Będę zrobić obiad.", "Będę robić obiad.", "Będę robił obiad."], ok: 0 },
        { t: "mc", q: "Ania dice que mañana estará trabajando:", ops: ["Jutro będę pracowała.", "Jutro będę pracował.", "Wczoraj pracowałam."], ok: 0 },
        { t: "orden", es: "¿Qué vas a hacer el fin de semana?", x: "Co będziesz robił w weekend?" },
        { t: "oir", x: "będziemy", ops: ["będziemy", "będziecie", "będziesz"], ok: 0 },
        { t: "decir", es: "En Navidad estaré en Cracovia.", x: "W święta będę w Krakowie." },
        { t: "decir", es: "Estaré estudiando polaco.", x: "Będę się uczył polskiego." }
      ]
    },
    {
      id: "pl5-4",
      titulo: "Futuro de resultado: zrobię, kupię, zadzwonię",
      min: 60,
      intro: "Segundo futuro, y el más traicionero: el presente de un verbo perfectivo ya es futuro. *Zrobię* no es «hago», sino «lo haré». Con él contarás tus planes concretos: qué comprarás, a quién llamarás, cuándo volverás.",
      bloques: [
        {
          t: "p",
          x: "Un verbo perfectivo conjugado como un presente significa futuro: *robię* (hago, estoy haciendo) → *zrobię* (lo haré). Las terminaciones son las del presente que ya conoces."
        },
        {
          t: "tabla",
          cab: ["Perfectivo", "Yo", "Tú", "Español (yo)"],
          audio: [1, 2],
          filas: [
            ["zrobić", "zrobię", "zrobisz", "haré"],
            ["kupić", "kupię", "kupisz", "compraré"],
            ["zadzwonić", "zadzwonię", "zadzwonisz", "llamaré"],
            ["napisać", "napiszę", "napiszesz", "escribiré"],
            ["przeczytać", "przeczytam", "przeczytasz", "leeré"],
            ["zjeść", "zjem", "zjesz", "comeré"],
            ["wypić", "wypiję", "wypijesz", "beberé"],
            ["dać", "dam", "dasz", "daré"],
            ["powiedzieć", "powiem", "powiesz", "diré"],
            ["zobaczyć", "zobaczę", "zobaczysz", "veré"],
            ["ugotować", "ugotuję", "ugotujesz", "cocinaré"],
            ["upiec", "upiekę", "upieczesz", "hornearé"],
            ["wrócić", "wrócę", "wrócisz", "volveré"],
            ["przygotować", "przygotuję", "przygotujesz", "prepararé"],
            ["wziąć", "wezmę", "weźmiesz", "cogeré"]
          ]
        },
        {
          t: "nota",
          x: "La trampa: *Kupię chleb* no es «compro pan», sino «compraré pan». Si lo estás comprando ahora, usa el imperfectivo: *Kupuję chleb*. Y al revés: el español dice «vuelvo en una hora» en presente, pero el polaco usa el perfectivo: *Wrócę za godzinę*."
        },
        {
          t: "p",
          x: "Para situar el plan: *jutro* (mañana), *pojutrze* (pasado mañana), *wieczorem* (por la tarde-noche), *w przyszłym tygodniu* (la semana que viene), *za tydzień* (dentro de una semana), *za dwa dni* (dentro de dos días), *w święta* (en Navidad) y *po świętach* (después de Navidad)."
        },
        {
          t: "ej",
          items: [
            ["Jutro zadzwonię do babci.", "Mañana llamaré a la abuela."],
            ["Pojutrze kupię nową walizkę.", "Pasado mañana compraré una maleta nueva."],
            ["W przyszłym tygodniu kupię prezenty.", "La semana que viene compraré los regalos."],
            ["Za trzy tygodnie zobaczę twoją rodzinę.", "Dentro de tres semanas veré a tu familia."],
            ["Mama upiecze sernik.", "Mamá hará una tarta de queso."],
            ["W święta spróbuję wszystkiego.", "En Navidad lo probaré todo."],
            ["Zjesz coś? Napijesz się herbaty?", "¿Comes algo? ¿Te tomas un té?"]
          ]
        },
        {
          t: "p",
          x: "¿Cuál de los dos futuros? Una vez y con resultado → perfectivo: *Jutro kupię choinkę* (mañana compraré el árbol). Actividad, duración o costumbre → *będę*: *Jutro będę kupował prezenty* (mañana estaré comprando regalos). Las ofertas de comida usan el perfectivo: *Zjesz coś?*, *Napijesz się herbaty?*"
        }
      ],
      vocab: [
        ["pojutrze", "pasado mañana"],
        ["w przyszłym tygodniu", "la semana que viene"],
        ["za tydzień", "dentro de una semana"],
        ["za dwa dni", "dentro de dos días"],
        ["w święta", "en Navidad (en las fiestas)"],
        ["po świętach", "después de Navidad"],
        ["Zrobię to jutro.", "Lo haré mañana."],
        ["Zadzwonię do ciebie wieczorem.", "Te llamaré esta noche."],
        ["Powiem ci jutro.", "Te lo diré mañana."],
        ["Dam ci znać.", "Ya te diré; te aviso."],
        ["Zobaczymy.", "Ya veremos."],
        ["Wrócę za godzinę.", "Vuelvo en una hora."],
        ["Kiedy wrócisz?", "¿Cuándo volverás?"],
        ["Spróbuję wszystkiego.", "Lo probaré todo."],
        ["Zjesz coś?", "¿Comes algo? (te lo ofrecen)"],
        ["Napijesz się herbaty?", "¿Te tomas un té?"],
        ["Za trzy tygodnie zobaczę twoją rodzinę.", "Dentro de tres semanas veré a tu familia."]
      ],
      ejercicios: [
        { t: "mc", q: "*Kupię chleb* significa…", ops: ["Compraré pan.", "Compro pan.", "Compré pan."], ok: 0 },
        {
          t: "mc",
          q: "La madre de Ania te pregunta *Zjesz coś?* Te está…",
          ops: ["ofreciendo comida", "preguntando qué comiste", "pidiendo que cocines"],
          ok: 0
        },
        {
          t: "mc",
          q: "Mañana te pasarás la tarde comprando regalos:",
          ops: ["Jutro będę kupował prezenty.", "Jutro będę kupić prezenty.", "Jutro kupowałem prezenty."],
          ok: 0
        },
        { t: "orden", es: "Te llamaré esta noche.", x: "Zadzwonię do ciebie wieczorem." },
        { t: "oir", x: "zadzwonię", ops: ["zadzwonię", "zadzwoniłem", "dzwonię"], ok: 0 },
        { t: "oir", x: "pojutrze", ops: ["pojutrze", "jutro", "popołudnie"], ok: 0 },
        { t: "decir", es: "Lo haré mañana.", x: "Zrobię to jutro." },
        { t: "decir", es: "Ya veremos.", x: "Zobaczymy." }
      ]
    },
    {
      id: "pl5-5",
      titulo: "El imperativo: ¡siéntate, prueba!",
      min: 55,
      intro: "En una casa polaca te darán órdenes cariñosas todo el rato: *Siadaj!* (¡siéntate!), *Spróbuj!* (¡prueba!), *Weź jeszcze!* (¡coge más!). Hoy aprendes a entenderlas, a reaccionar y a pedir cosas con educación a los padres de Ania.",
      bloques: [
        {
          t: "tabla",
          cab: ["Imperativo (ty)", "Español", "Infinitivo"],
          audio: [0],
          filas: [
            ["Chodź!", "¡Ven!", "chodzić"],
            ["Daj!", "¡Da!, ¡dame!", "dać"],
            ["Weź!", "¡Coge!, ¡toma!", "wziąć"],
            ["Usiądź!", "¡Siéntate!", "usiąść"],
            ["Spróbuj!", "¡Prueba!", "spróbować"],
            ["Poczekaj!", "¡Espera!", "poczekać"],
            ["Powiedz!", "¡Di!, ¡dime!", "powiedzieć"],
            ["Nie martw się!", "¡No te preocupes!", "martwić się"]
          ]
        },
        {
          t: "p",
          x: "Para hablar a varios se añade *-cie*: *Chodźcie!* (¡venid!), *Usiądźcie!* (¡sentaos!). Con *-my* propones algo, como «vamos a…»: *Chodźmy!* (¡vamos!), *Spróbujmy!* (¡probemos!)."
        },
        {
          t: "nota",
          x: "También aquí hay aspecto. Para pedir algo concreto, el perfectivo: *Usiądź!*, *Spróbuj!*, *Weź!* Para invitar o animar, los polacos usan mucho el imperfectivo: *Siadaj!* (¡venga, siéntate!), *Jedz, jedz!* (¡come, come!). Y con *nie* va casi siempre el imperfectivo: *Nie martw się!*, *Nie mów nikomu!* (¡no se lo digas a nadie!). La excepción son los avisos para que algo no pase sin querer, que van en perfectivo: *Nie zapomnij!* (¡que no se te olvide!)."
        },
        {
          t: "p",
          x: "Con los padres y la abuela de Ania (*Pan, Pani*) no se usa el imperativo de *ty*, sino *Proszę* + infinitivo: *Proszę usiąść* (siéntese, por favor), *Proszę spróbować* (pruebe, por favor). Ellos a ti seguramente te tutearán: *Usiądź!*"
        },
        {
          t: "ej",
          items: [
            ["Siadaj, siadaj!", "¡Siéntate, siéntate!"],
            ["Spróbuj pierogów!", "¡Prueba los pierogi!"],
            ["Weź jeszcze kawałek!", "¡Coge otro trozo!"],
            ["Poczekaj chwilę!", "¡Espera un momento!"],
            ["Powiedz mi coś po polsku!", "¡Dime algo en polaco!"],
            ["Chodź tutaj!", "¡Ven aquí!"],
            ["Nie martw się, wszystko będzie dobrze.", "No te preocupes, todo irá bien."],
            ["Proszę usiąść.", "Siéntese, por favor."],
            ["Proszę spróbować, to szynka z Hiszpanii.", "Pruebe, por favor: es jamón de España."],
            ["Proszę się częstować.", "Servíos, por favor (coged lo que queráis)."]
          ]
        },
        {
          t: "nota",
          x: "Cómo reaccionar: *Dobrze!* (¡vale!), *Już idę!* (¡ya voy!), *Chętnie!* (¡con gusto!) o, si ya no puedes más, *Dziękuję, już nie mogę*."
        },
        {
          t: "p",
          x: "Truco para formarlo: toma la forma «ellos» del presente (o del futuro perfectivo) y quita la *-ą*: *czekają → czekaj*, *piszą → pisz*, *spróbują → spróbuj*, *powiedzą → powiedz*. A veces cambia un poco más: *zrobią → zrób*, *wrócą → wróć*, *pieką → piecz*. Si al final quedan consonantes que no se pueden pronunciar, se añade *-ij*: *wytną → wytnij* (¡recorta!). *Daj, weź, usiądź* y *chodź* apréndelas tal cual."
        }
      ],
      vocab: [
        ["Chodź!", "¡Ven!"],
        ["Chodźmy!", "¡Vamos!"],
        ["Daj mi chwilę.", "Dame un momento."],
        ["Weź jeszcze kawałek!", "¡Coge otro trozo!"],
        ["Usiądź!", "¡Siéntate!"],
        ["Siadaj!", "¡Siéntate! (invitando)"],
        ["Spróbuj!", "¡Prueba!"],
        ["Spróbuj pierogów!", "¡Prueba los pierogi!"],
        ["Poczekaj chwilę!", "¡Espera un momento!"],
        ["Powiedz mi coś po polsku!", "¡Dime algo en polaco!"],
        ["Nie martw się!", "¡No te preocupes!"],
        ["Wszystko będzie dobrze.", "Todo irá bien."],
        ["Nie mów nikomu!", "¡No se lo digas a nadie!"],
        ["Proszę usiąść.", "Siéntese, por favor."],
        ["Proszę spróbować.", "Pruebe, por favor."],
        ["Proszę się częstować.", "Servíos, por favor."],
        ["Jedz, jedz!", "¡Come, come!"]
      ],
      ejercicios: [
        { t: "mc", q: "La madre de Ania te dice *Siadaj!* Tú…", ops: ["te sientas", "esperas en la puerta", "pruebas la comida"], ok: 0 },
        { t: "mc", q: "Quieres que la abuela (*Pani*) se siente. Le dices:", ops: ["Proszę usiąść.", "Usiądź!", "Siadaj!"], ok: 0 },
        { t: "mc", q: "*Nie martw się!* significa…", ops: ["¡No te preocupes!", "¡No te muevas!", "¡No lo pruebes!"], ok: 0 },
        { t: "mc", q: "Ania te llama desde la cocina: *Chodź!* Contestas:", ops: ["Już idę!", "Smacznego!", "Na zdrowie!"], ok: 0 },
        { t: "orden", es: "¡Dime algo en polaco!", x: "Powiedz mi coś po polsku!" },
        { t: "oir", x: "Weź", ops: ["Weź", "Wiesz", "Daj"], ok: 0 },
        { t: "decir", es: "Siéntese, por favor.", x: "Proszę usiąść." },
        { t: "decir", es: "¡Ya voy!", x: "Już idę!" }
      ]
    },
    {
      id: "pl5-6",
      titulo: "Mikołajki y preparativos de Navidad",
      min: 50,
      intro: "El 6 de diciembre es *mikołajki*, San Nicolás: los niños, y en muchas casas también los mayores, encuentran un regalo bajo la almohada. Desde ese día se prepara en serio la Navidad: aprende a hablar de las tareas y a ofrecer tu ayuda.",
      bloques: [
        {
          t: "p",
          x: "La mañana del 6 de diciembre los niños polacos buscan bajo la almohada (*pod poduszką*) el regalo de *Święty Mikołaj* (San Nicolás): chocolate, mandarinas, algún juguete. En colegios y oficinas, *mikołajki* es también el amigo invisible."
        },
        {
          t: "ej",
          items: [
            ["Dzisiaj są mikołajki!", "¡Hoy es San Nicolás!"],
            ["Co dostałeś na mikołajki?", "¿Qué te han regalado por San Nicolás? (a un chico)"],
            ["Dostałem czekoladę i mandarynki.", "Me han regalado chocolate y mandarinas."],
            ["Prezent jest pod poduszką.", "El regalo está bajo la almohada."]
          ]
        },
        {
          t: "p",
          x: "Las tareas se nombran con un sustantivo que sale del verbo imperfectivo (es un proceso) + *-nie*: *sprzątać → sprzątanie* (la limpieza), *piec → pieczenie* (el horneado), *kupować → kupowanie* (la compra), *ubierać choinkę → ubieranie choinki* (decorar el árbol). Lo que va detrás pasa a genitivo: *pieczenie pierników*."
        },
        {
          t: "tabla",
          cab: ["Tarea", "Español", "En casa de Ania"],
          audio: [0],
          filas: [
            ["sprzątanie", "la limpieza", "todos"],
            ["kupowanie prezentów", "comprar los regalos", "todos"],
            ["pieczenie pierników", "hornear pierniki", "la abuela Zosia y Ania"],
            ["kupowanie choinki", "comprar el árbol", "Marek, el padre"],
            ["ubieranie choinki", "decorar el árbol", "Marek y Piotr"],
            ["gotowanie barszczu", "hacer el barszcz", "Ewa y la abuela"],
            ["lepienie pierogów", "hacer pierogi a mano", "Ewa y la abuela"],
            ["pisanie kartek", "escribir las postales", "Ania"]
          ]
        },
        {
          t: "ej",
          items: [
            ["Kto upiecze pierniki?", "¿Quién hará los pierniki?"],
            ["W sobotę posprzątamy cały dom.", "El sábado limpiaremos toda la casa."],
            ["Tata kupi choinkę.", "Papá comprará el árbol."],
            ["Mogę pomóc w kuchni?", "¿Puedo ayudar en la cocina?"],
            ["Pomogę ci.", "Te ayudaré."]
          ]
        },
        {
          t: "nota",
          x: "Los *pierniki* se hornean a principios de diciembre: recién hechos están duros y se guardan en una lata para que se ablanden antes de Nochebuena. Y la *choinka* (el árbol), en muchas casas, no se decora hasta unos días antes del 24, o incluso esa misma mañana."
        }
      ],
      vocab: [
        ["mikołajki", "San Nicolás (6 de diciembre); amigo invisible"],
        ["Święty Mikołaj", "San Nicolás; Papá Noel"],
        ["pod poduszką", "bajo la almohada"],
        ["dostawać / dostać", "recibir"],
        ["Co dostałeś na mikołajki?", "¿Qué te han regalado por San Nicolás? (a un chico)"],
        ["mandarynki", "mandarinas"],
        ["przygotowania do świąt", "los preparativos de Navidad"],
        ["sprzątać / posprzątać", "limpiar, ordenar"],
        ["sprzątanie", "la limpieza"],
        ["piernik", "galleta o bizcocho de miel y especias"],
        ["pieczenie pierników", "hornear pierniki"],
        ["kupowanie prezentów", "comprar los regalos"],
        ["choinka", "árbol de Navidad"],
        ["ubierać / ubrać choinkę", "decorar el árbol de Navidad"],
        ["kartka świąteczna", "postal de Navidad"],
        ["pomagać / pomóc", "ayudar"],
        ["Pomogę ci.", "Te ayudaré."],
        ["Kto upiecze pierniki?", "¿Quién hará los pierniki?"]
      ],
      ejercicios: [
        { t: "mc", q: "¿Dónde buscan los niños polacos el regalo de *mikołajki*?", ops: ["Bajo la almohada", "Bajo el árbol", "En la chimenea"], ok: 0 },
        { t: "mc", q: "*Sprzątanie* es…", ops: ["la limpieza", "el horneado", "la compra"], ok: 0 },
        { t: "mc", q: "«Papá comprará el árbol»:", ops: ["Tata kupi choinkę.", "Tata kupuje choinkę.", "Tata kupił choinkę."], ok: 0 },
        { t: "orden", es: "El sábado limpiaremos toda la casa.", x: "W sobotę posprzątamy cały dom." },
        { t: "oir", x: "pierniki", ops: ["pierniki", "pierogi", "pieczenie"], ok: 0 },
        { t: "decir", es: "Te ayudaré.", x: "Pomogę ci." },
        { t: "decir", es: "¿Qué te han regalado por San Nicolás? (a ella)", x: "Co dostałaś na mikołajki?" }
      ]
    },
    {
      id: "pl5-7",
      titulo: "Repaso: planes para diciembre",
      min: 45,
      intro: "Repaso de la semana con una videollamada entre Pablo y Ania: lo que hicieron, lo que harán y lo que ella le pide. Escucha cada frase, repítela en voz alta y luego cuéntale a ella tus propios planes.",
      bloques: [
        {
          t: "ej",
          items: [
            ["Cześć! Co robiłeś dzisiaj?", "¡Hola! ¿Qué has hecho hoy?"],
            ["Cały dzień pracowałem. Mam dużo pracy i jestem zmęczony.", "He estado trabajando todo el día. Tengo mucho trabajo y estoy cansado."],
            ["Oj, biedaku! Przeczytałeś już tekst o mikołajkach?", "¡Ay, pobre! ¿Ya te has leído el texto de San Nicolás?"],
            ["Tak, i wszystko zrozumiałem!", "Sí, ¡y lo he entendido todo!"],
            ["Brawo! Co będziesz robił w weekend?", "¡Bravo! ¿Qué vas a hacer el fin de semana?"],
            ["W sobotę kupię prezenty dla twojej rodziny, a w niedzielę będę odpoczywał.", "El sábado compraré los regalos para tu familia y el domingo descansaré."],
            ["Kup coś dla babci!", "¡Compra algo para la abuela!"],
            ["O nie, zapomniałem! Dobrze, kupię dla niej coś ciepłego.", "¡Ay, no, se me había olvidado! Vale, le compraré algo de abrigo."],
            ["Super! Nie mogę się doczekać świąt.", "¡Genial! Qué ganas tengo de que llegue la Navidad."],
            ["Ja też. Tęsknię za tobą.", "Yo también. Te echo de menos."],
            ["Ja za tobą też. Zadzwonisz jutro?", "Y yo a ti. ¿Me llamarás mañana?"],
            ["Zadzwonię, obiecuję. Do jutra! Śpij dobrze!", "Te llamaré, te lo prometo. ¡Hasta mañana! ¡Que duermas bien!"]
          ]
        },
        {
          t: "tabla",
          cab: ["", "Proceso (ndk)", "Resultado (dk)"],
          audio: [1, 2],
          filas: [
            ["Pasado", "robiłem", "zrobiłem"],
            ["Futuro", "będę robił", "zrobię"],
            ["Imperativo", "nie rób!", "zrób!"]
          ]
        },
        {
          t: "nota",
          x: "Resumen de la semana. ¿Importa el resultado y pasa una vez? Perfectivo: *zrobiłem, zrobię, zrób!* ¿Es proceso, duración, costumbre o una prohibición? Imperfectivo: *robiłem, będę robił, nie rób!* El presente solo tiene la forma de proceso: *robię* (hago, estoy haciendo)."
        },
        {
          t: "p",
          x: "Fíjate en el diálogo: *Cały dzień pracowałem* (duración: imperfectivo), *wszystko zrozumiałem* (resultado: perfectivo), *kupię prezenty* (un plan concreto) frente a *będę odpoczywał* (una actividad)."
        }
      ],
      vocab: [
        ["Cały dzień pracowałem.", "He estado trabajando todo el día."],
        ["Mam dużo pracy.", "Tengo mucho trabajo."],
        ["Jestem zmęczony.", "Estoy cansado."],
        ["rozumieć / zrozumieć", "entender"],
        ["Wszystko zrozumiałem.", "Lo he entendido todo."],
        ["zapominać / zapomnieć", "olvidar"],
        ["O nie, zapomniałem!", "¡Ay, no, se me ha olvidado!"],
        ["Kup coś dla babci!", "¡Compra algo para la abuela!"],
        ["Nie mogę się doczekać świąt.", "Qué ganas tengo de que llegue la Navidad."],
        ["Tęsknię za tobą.", "Te echo de menos."],
        ["Obiecuję.", "Te lo prometo."],
        ["Do jutra!", "¡Hasta mañana!"],
        ["Śpij dobrze!", "¡Que duermas bien!"],
        ["Do zobaczenia!", "¡Nos vemos!"],
        ["Pa!", "¡Chao! (informal)"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "Pablo cuenta que ayer estuvo trabajando todo el día:",
          ops: ["Wczoraj cały dzień pracowałem.", "Wczoraj cały dzień będę pracował.", "Jutro cały dzień pracowałem."],
          ok: 0
        },
        { t: "mc", q: "Ania te pide: *Kup coś dla babci!* Contestas:", ops: ["Dobrze, kupię.", "Dobrze, kupiłem.", "Dobrze, kupuj."], ok: 0 },
        { t: "mc", q: "Completa: «Jutro ___ do ciebie» (te llamaré, una vez).", ops: ["zadzwonię", "będę zadzwonić", "dzwoniłem"], ok: 0 },
        { t: "orden", es: "Qué ganas tengo de que llegue la Navidad.", x: "Nie mogę się doczekać świąt." },
        { t: "oir", x: "Do zobaczenia!", ops: ["Do zobaczenia!", "Do widzenia!", "Do jutra!"], ok: 0 },
        { t: "decir", es: "Te echo de menos.", x: "Tęsknię za tobą." },
        { t: "decir", es: "Lo he entendido todo.", x: "Wszystko zrozumiałem." }
      ]
    }
  ],
  lecturas: [
    {
      id: "pl5-r1",
      titulo: "Mikołajki u Ani (San Nicolás en casa de Ania)",
      nivel: "A2",
      texto: "Cześć, Pablo!\n\nDzisiaj są mikołajki. W Polsce szóstego grudnia dzieci dostają małe prezenty od Świętego Mikołaja. U nas w domu prezenty dostają wszyscy, nawet babcia i Burek. Uwielbiam ten dzień!\n\nRano znalazłam pod poduszką czekoladę i książkę. Piotr dostał nowe rękawiczki, bo zawsze gubi stare. Tata dostał skarpetki w renifery, a mama kalendarz z kotami. Babcia Zosia dostała herbatę i bardzo się cieszyła. A Burek? Burek dostał kość i od razu ją zjadł.\n\nKto kupuje prezenty? Oficjalnie Święty Mikołaj, ale wszyscy wiemy, że to babcia. Co roku przez cały listopad chodzi po sklepach i chowa wszystko w szafie.\n\nPo południu piekłyśmy z babcią pierniki. Upiekłyśmy prawie sto! Teraz cały dom pachnie miodem i cynamonem, ale nie możemy ich jeszcze jeść: muszą poczekać do świąt.\n\nA ty? Co robiłeś dzisiaj? W Hiszpanii nie ma mikołajek, prawda? Zadzwoń wieczorem, to opowiem ci więcej!\n\nAnia",
      traduccion: "¡Hola, Pablo!\n\nHoy es San Nicolás. En Polonia, el 6 de diciembre los niños reciben pequeños regalos de San Nicolás. En nuestra casa reciben regalos todos, incluso la abuela y Burek. ¡Me encanta este día!\n\nPor la mañana he encontrado bajo la almohada chocolate y un libro. Piotr ha recibido unos guantes nuevos, porque siempre pierde los viejos. Papá ha recibido unos calcetines con renos, y mamá, un calendario de gatos. La abuela Zosia ha recibido té y se ha puesto muy contenta. ¿Y Burek? Burek ha recibido un hueso y se lo ha comido enseguida.\n\n¿Quién compra los regalos? Oficialmente, San Nicolás, pero todos sabemos que es la abuela. Cada año se pasa todo noviembre yendo de tienda en tienda y lo esconde todo en el armario.\n\nPor la tarde la abuela y yo hemos estado horneando pierniki. ¡Hemos hecho casi cien! Ahora toda la casa huele a miel y a canela, pero todavía no podemos comerlos: tienen que esperar a Navidad.\n\n¿Y tú? ¿Qué has hecho hoy? En España no hay San Nicolás, ¿verdad? ¡Llámame esta noche y te cuento más!\n\nAnia",
      glosa: {
        "cześć": "¡hola! (informal)",
        pablo: "Pablo (nombre)",
        dzisiaj: "hoy",
        "są": "son, están («dzisiaj są mikołajki» = hoy es San Nicolás)",
        "mikołajki": "San Nicolás, el 6 de diciembre (en polaco es plural)",
        w: "en",
        polsce: "Polonia (locativo de Polska)",
        "szóstego": "sexto (genitivo: «szóstego grudnia» = el 6 de diciembre)",
        grudnia: "diciembre (genitivo de grudzień)",
        dzieci: "niños (plural de dziecko)",
        "dostają": "reciben (dostawać, imperfectivo: cada año)",
        "małe": "pequeños",
        prezenty: "regalos (plural de prezent)",
        od: "de, de parte de; «od razu» = enseguida",
        "świętego": "santo (genitivo de Święty)",
        "mikołaja": "Nicolás (genitivo de Mikołaj)",
        u: "en casa de",
        nas: "nosotros («u nas» = en nuestra casa)",
        domu: "casa (locativo de dom)",
        wszyscy: "todos",
        nawet: "incluso",
        babcia: "abuela",
        i: "y",
        burek: "Burek (el perro)",
        rano: "por la mañana",
        "znalazłam": "encontré (ella; znaleźć, perfectivo)",
        pod: "debajo de",
        "poduszką": "almohada (instrumental de poduszka, tras «pod»)",
        "czekoladę": "chocolate (acusativo de czekolada)",
        "książkę": "libro (acusativo de książka)",
        piotr: "Piotr (nombre; Pedro)",
        "dostał": "recibió (él; dostać, perfectivo)",
        nowe: "nuevos",
        "rękawiczki": "guantes",
        bo: "porque",
        zawsze: "siempre",
        gubi: "pierde (gubić, imperfectivo: costumbre)",
        stare: "viejos",
        tata: "papá",
        skarpetki: "calcetines",
        renifery: "renos (acusativo plural; «w renifery» = con dibujos de renos)",
        a: "y, en cambio; ¿y…?",
        mama: "mamá",
        kalendarz: "calendario",
        z: "con",
        kotami: "gatos (instrumental plural de kot)",
        zosia: "Zosia (nombre)",
        "dostała": "recibió (ella; dostać, perfectivo)",
        "herbatę": "té (acusativo de herbata)",
        bardzo: "muy, mucho",
        "się": "se (reflexivo)",
        "cieszyła": "se alegraba (ella; cieszyć się, imperfectivo)",
        "kość": "hueso (femenino)",
        razu: "«od razu» = enseguida",
        "ją": "lo (acusativo de ona: kość es femenino)",
        "zjadł": "se comió (él; zjeść, perfectivo)",
        kto: "quién",
        kupuje: "compra (kupować, imperfectivo: cada año)",
        oficjalnie: "oficialmente",
        "święty": "santo («Święty Mikołaj» = San Nicolás)",
        "mikołaj": "Nicolás",
        ale: "pero",
        wiemy: "sabemos (wiedzieć)",
        "że": "que (conjunción)",
        to: "es, eso es; entonces",
        co: "qué; «co roku» = cada año",
        uwielbiam: "me encanta (uwielbiać)",
        ten: "este",
        "dzień": "día",
        opowiem: "contaré (opowiedzieć, perfectivo)",
        ci: "te, a ti",
        "więcej": "más",
        roku: "año (genitivo de rok)",
        przez: "durante",
        "cały": "todo, entero",
        listopad: "noviembre",
        chodzi: "va, anda (chodzić: ir a menudo)",
        po: "por; después de («po południu» = por la tarde)",
        sklepach: "tiendas (locativo plural de sklep: «po sklepach» = de tienda en tienda)",
        chowa: "esconde, guarda (chować)",
        wszystko: "todo",
        szafie: "armario (locativo de szafa)",
        "południu": "mediodía (locativo de południe)",
        "piekłyśmy": "estuvimos horneando (nosotras; piec, imperfectivo: proceso)",
        "babcią": "abuela (instrumental de babcia, tras «z»)",
        pierniki: "pierniki, galletas de jengibre y miel",
        "upiekłyśmy": "hicimos, horneamos (nosotras; upiec, perfectivo: resultado)",
        prawie: "casi",
        sto: "cien",
        teraz: "ahora",
        dom: "casa",
        pachnie: "huele (pachnieć + instrumental = oler a…)",
        miodem: "miel (instrumental de miód)",
        cynamonem: "canela (instrumental de cynamon)",
        nie: "no; «nie ma» = no hay",
        "możemy": "podemos (móc)",
        ich: "los (genitivo plural, tras negación)",
        jeszcze: "todavía",
        "jeść": "comer (imperfectivo)",
        "muszą": "tienen que (musieć)",
        "poczekać": "esperar (perfectivo)",
        do: "hasta",
        "świąt": "Navidad (genitivo de święta: «do świąt» = hasta Navidad)",
        ty: "tú",
        "robiłeś": "hiciste, estuviste haciendo (tú, chico; robić)",
        hiszpanii: "España (locativo de Hiszpania)",
        ma: "tiene; «nie ma» = no hay",
        "mikołajek": "San Nicolás (genitivo de mikołajki, tras «nie ma»)",
        prawda: "verdad («…, prawda?» = ¿verdad?)",
        "zadzwoń": "¡llama! (imperativo de zadzwonić)",
        wieczorem: "por la tarde-noche",
        ania: "Ania (nombre)"
      },
      notas: "Fíjate en el aspecto: *piekłyśmy* (estuvimos horneando: proceso) frente a *upiekłyśmy prawie sto* (hicimos casi cien: resultado). *Dostają* (reciben cada año) frente a *dostał, dostała* (lo recibió hoy). Las fechas van en genitivo: *szóstego grudnia*, el 6 de diciembre.",
      preguntas: [
        { q: "¿Qué encontró Ania bajo la almohada?", ops: ["Chocolate y un libro", "Unos guantes nuevos", "Un calendario de gatos"], ok: 0 },
        { q: "¿Quién compra en realidad los regalos?", ops: ["La abuela", "El padre", "Piotr"], ok: 0 },
        { q: "¿Qué hicieron Ania y su abuela por la tarde?", ops: ["Hornear pierniki", "Comprar regalos", "Limpiar la casa"], ok: 0 },
        { q: "¿Por qué no pueden comerse todavía los pierniki?", ops: ["Tienen que esperar a Navidad", "Se han quemado", "Son para Burek"], ok: 0 }
      ]
    },
    {
      id: "pl5-r2",
      titulo: "Plany na grudzień (los planes para diciembre)",
      nivel: "A2",
      texto: "W grudniu w naszym domu nikt nie odpoczywa. Mamy plan na każdy tydzień.\n\nW tym tygodniu mama posprząta kuchnię, a tata umyje okna. Piotr ma dużo nauki, więc będzie się uczył całymi dniami. W sobotę pojedziemy razem na jarmark świąteczny na Rynku. Tam kupimy prezenty i wypijemy grzane wino.\n\nW przyszłym tygodniu napiszę kartki świąteczne do całej rodziny. Babcia mówi, że kartka jest lepsza niż telefon.\n\nTydzień przed świętami tata kupi choinkę, a w Wigilię rano ubierze ją z Piotrem. Mama i babcia będą gotowały barszcz i lepiły pierogi przez dwa dni.\n\nA dwudziestego drugiego grudnia przyleci Pablo! Pojadę po niego na lotnisko. Mama już pyta, co on lubi jeść, a babcia upiecze dla niego sernik. Ciocia Basia też będzie gotowała, bo w pierwszy dzień świąt jemy obiad u niej.\n\nBędzie dużo pracy, ale grudzień to najpiękniejszy miesiąc w roku. Nie mogę się doczekać!",
      traduccion: "En diciembre, en nuestra casa nadie descansa. Tenemos un plan para cada semana.\n\nEsta semana mamá limpiará la cocina y papá limpiará las ventanas. Piotr tiene mucho que estudiar, así que se pasará días enteros estudiando. El sábado iremos todos juntos al mercado de Navidad de la Plaza Mayor. Allí compraremos regalos y nos tomaremos un vino caliente.\n\nLa semana que viene escribiré las postales de Navidad para toda la familia. La abuela dice que una postal es mejor que una llamada.\n\nUna semana antes de Navidad papá comprará el árbol, y el día de Nochebuena por la mañana lo decorará con Piotr. Mamá y la abuela se pasarán dos días cocinando el barszcz y haciendo pierogi.\n\n¡Y el 22 de diciembre llega Pablo en avión! Iré a buscarlo al aeropuerto. Mamá ya pregunta qué le gusta comer, y la abuela le hará una tarta de queso. La tía Basia también cocinará, porque el día de Navidad comemos en su casa.\n\nHabrá mucho trabajo, pero diciembre es el mes más bonito del año. ¡Qué ganas tengo!",
      glosa: {
        w: "en",
        grudniu: "diciembre (locativo de grudzień: «w grudniu» = en diciembre)",
        naszym: "nuestra (locativo de nasz)",
        domu: "casa (locativo de dom)",
        nikt: "nadie (con «nie»: «nikt nie…» = nadie…)",
        nie: "no",
        odpoczywa: "descansa (odpoczywać)",
        mamy: "tenemos (mieć)",
        plan: "plan",
        na: "para; a; en",
        "każdy": "cada",
        "tydzień": "semana",
        tym: "este (locativo: «w tym tygodniu» = esta semana)",
        tygodniu: "semana (locativo de tydzień)",
        mama: "mamá",
        "posprząta": "limpiará (posprzątać, perfectivo: futuro)",
        "kuchnię": "cocina (acusativo de kuchnia)",
        a: "y, mientras que",
        tata: "papá",
        umyje: "lavará, limpiará (umyć, perfectivo: futuro)",
        okna: "ventanas (plural de okno)",
        piotr: "Piotr (nombre; Pedro)",
        ma: "tiene (mieć)",
        "dużo": "mucho",
        nauki: "estudio (genitivo de nauka, tras «dużo»)",
        "więc": "así que",
        "będzie": "estará; habrá («będzie się uczył» = estará estudiando)",
        "się": "se (reflexivo: «uczyć się» = estudiar)",
        "uczył": "estudiando (pasado de 3.ª persona tras «będzie»: futuro imperfectivo)",
        "całymi": "enteros (instrumental plural de cały)",
        dniami: "días (instrumental plural de dzień: «całymi dniami» = días enteros)",
        "sobotę": "sábado (acusativo de sobota: «w sobotę» = el sábado)",
        pojedziemy: "iremos (pojechać, perfectivo: futuro)",
        razem: "juntos",
        jarmark: "mercado, feria",
        "świąteczny": "navideño",
        rynku: "Plaza Mayor (locativo de Rynek, la plaza del mercado de Cracovia)",
        tam: "allí",
        kupimy: "compraremos (kupić, perfectivo)",
        prezenty: "regalos",
        i: "y",
        wypijemy: "nos tomaremos (wypić, perfectivo)",
        grzane: "calentado («grzane wino» = vino caliente con especias)",
        wino: "vino",
        "przyszłym": "próximo (locativo: «w przyszłym tygodniu» = la semana que viene)",
        "napiszę": "escribiré (napisać, perfectivo)",
        kartki: "postales (plural de kartka)",
        "świąteczne": "navideñas",
        do: "a, para",
        "całej": "toda (genitivo de cała)",
        rodziny: "familia (genitivo de rodzina, tras «do»)",
        babcia: "abuela",
        "mówi": "dice (mówić)",
        "że": "que (conjunción)",
        kartka: "postal",
        jest: "es",
        lepsza: "mejor (femenino)",
        "niż": "que (en comparaciones)",
        telefon: "teléfono; llamada",
        przed: "antes de (+ instrumental)",
        "świętami": "Navidad (instrumental de święta: «przed świętami» = antes de Navidad)",
        kupi: "comprará (kupić, perfectivo)",
        "choinkę": "árbol de Navidad (acusativo de choinka)",
        "dzień": "día",
        "wigilię": "Nochebuena (acusativo de Wigilia: «w Wigilię» = el día de Nochebuena)",
        rano: "por la mañana",
        "ją": "lo (acusativo de ona: choinka es femenino)",
        ubierze: "decorará (ubrać, perfectivo: futuro)",
        z: "con (+ instrumental)",
        piotrem: "Piotr (instrumental, tras «z»)",
        "będą": "estarán («będą gotowały» = estarán cocinando)",
        "gotowały": "cocinando (ellas; tras «będą»: futuro imperfectivo)",
        barszcz: "barszcz (sopa de remolacha)",
        "lepiły": "haciendo a mano (ellas; lepić, tras «będą»)",
        pierogi: "pierogi (empanadillas)",
        przez: "durante",
        dwa: "dos",
        dni: "días (plural de dzień)",
        dwudziestego: "vigésimo (genitivo: «dwudziestego drugiego grudnia» = el 22 de diciembre)",
        drugiego: "segundo (genitivo)",
        grudnia: "diciembre (genitivo de grudzień)",
        przyleci: "llegará en avión (przylecieć, perfectivo)",
        pablo: "Pablo (nombre)",
        "pojadę": "iré (en coche; pojechać, perfectivo)",
        po: "a por («pojadę po niego» = iré a buscarlo)",
        niego: "él (acusativo tras preposición)",
        lotnisko: "aeropuerto",
        "już": "ya",
        pyta: "pregunta (pytać)",
        co: "qué",
        on: "él",
        lubi: "le gusta (lubić)",
        upiecze: "hará, horneará (upiec, perfectivo: futuro)",
        dla: "para",
        sernik: "tarta de queso",
        "mogę": "puedo (móc)",
        "doczekać": "«nie mogę się doczekać» = qué ganas tengo, no puedo esperar",
        "jeść": "comer",
        ciocia: "tía",
        basia: "Basia (nombre)",
        "też": "también",
        "gotowała": "cocinando (ella; tras «będzie»: futuro imperfectivo)",
        bo: "porque",
        pierwszy: "primer («pierwszy dzień świąt» = el día de Navidad, el 25)",
        "świąt": "fiestas, Navidad (genitivo de święta)",
        jemy: "comemos (jeść)",
        obiad: "comida (la principal del día)",
        u: "en casa de",
        niej: "ella (tras preposición: «u niej» = en su casa)",
        pracy: "trabajo (genitivo de praca, tras «dużo»)",
        ale: "pero",
        "grudzień": "diciembre",
        to: "es (en «X to Y»)",
        "najpiękniejszy": "el más bonito",
        "miesiąc": "mes",
        roku: "año (locativo de rok: «w roku» = del año)"
      },
      notas: "Dos futuros en el mismo texto: perfectivo para tareas concretas (*posprząta, umyje, kupi, ubierze*) y *będzie / będą* + verbo para actividades largas (*będzie się uczył całymi dniami, będą gotowały*). *Pierwszy dzień świąt* es el 25 de diciembre.",
      preguntas: [
        { q: "¿Qué hará el padre esta semana?", ops: ["Limpiar las ventanas", "Limpiar la cocina", "Escribir postales"], ok: 0 },
        { q: "¿Adónde irá la familia el sábado?", ops: ["Al mercado de Navidad de la plaza", "Al aeropuerto", "A casa de la tía Basia"], ok: 0 },
        { q: "¿Quién irá a buscar a Pablo al aeropuerto?", ops: ["Ania", "El padre", "La abuela"], ok: 0 },
        { q: "¿Dónde comen el día de Navidad?", ops: ["En casa de la tía Basia", "En casa de Ania", "En un restaurante"], ok: 0 }
      ]
    },
    {
      id: "pl5-r3",
      titulo: "Pierniki babci Zosi (los pierniki de la abuela Zosia)",
      nivel: "A2",
      texto: "Babcia Zosia piecze pierniki od sześćdziesięciu lat i nigdy nie używa książki kucharskiej: wszystko ma w głowie. W mikołajki podyktowała mi swój przepis. Spróbuj upiec je w Madrycie!\n\nPotrzebujesz: pół kilo mąki, pół szklanki miodu, pół szklanki cukru, pół kostki masła, dwa jajka, łyżeczkę sody i przyprawę do piernika.\n\nNajpierw podgrzej miód z cukrem i masłem, ale nie gotuj! Poczekaj, aż ostygnie. Potem dodaj mąkę, jajka, sodę i przyprawę. Wszystko dobrze wymieszaj. Wyrabiaj ciasto przez dziesięć minut. Rozwałkuj je i wytnij gwiazdki, serca i choinki. Piecz pierniki dziesięć minut w temperaturze 180 stopni.\n\nNa koniec udekoruj je lukrem. I uwaga: nie jedz ich od razu! Schowaj je do puszki, a za dwa tygodnie będą miękkie i pyszne. Ja zawsze kradnę jeden wcześniej, kiedy babcia nie patrzy.\n\nBabcia zawsze mówi: «Pierniki piecze się z sercem, a nie z książki!»",
      traduccion: "La abuela Zosia hace pierniki desde hace sesenta años y nunca usa un libro de cocina: lo tiene todo en la cabeza. El día de San Nicolás me dictó su receta. ¡Intenta hacerlos en Madrid!\n\nNecesitas: medio kilo de harina, medio vaso de miel, medio vaso de azúcar, media pastilla de mantequilla, dos huevos, una cucharadita de bicarbonato y especias para piernik.\n\nPrimero calienta la miel con el azúcar y la mantequilla, ¡pero que no hierva! Espera a que se enfríe. Luego añade la harina, los huevos, el bicarbonato y las especias. Mézclalo todo bien. Amasa la masa durante diez minutos. Estírala con el rodillo y recorta estrellitas, corazones y arbolitos. Hornea los pierniki diez minutos a 180 grados.\n\nAl final, decóralos con glaseado. Y cuidado: ¡no te los comas enseguida! Guárdalos en una lata, y dentro de dos semanas estarán blandos y buenísimos. Yo siempre robo uno antes, cuando la abuela no mira.\n\nLa abuela siempre dice: «¡Los pierniki se hacen con el corazón, no con un libro!»",
      glosa: {
        babcia: "abuela",
        zosia: "Zosia (nombre)",
        piecze: "hornea, hace (piec; «piecze się» = se hornea)",
        pierniki: "pierniki, galletas de jengibre y miel",
        od: "desde; «od razu» = enseguida",
        "sześćdziesięciu": "sesenta (genitivo: «od sześćdziesięciu lat» = desde hace sesenta años)",
        lat: "años (genitivo plural; se usa con rok)",
        i: "y",
        nigdy: "nunca (con «nie»)",
        nie: "no",
        "używa": "usa (używać + genitivo)",
        "książki": "libro (genitivo de książka)",
        kucharskiej: "de cocina (genitivo: «książka kucharska» = libro de recetas)",
        w: "en",
        "mikołajki": "San Nicolás («w mikołajki» = el día de San Nicolás)",
        "podyktowała": "dictó (ella; podyktować, perfectivo)",
        mi: "me, a mí",
        "swój": "su (el suyo propio)",
        przepis: "receta",
        "spróbuj": "¡intenta!, ¡prueba! (imperativo de spróbować)",
        upiec: "hornear (perfectivo: hacerlos del todo)",
        je: "los, las (acusativo plural); aquí también «la» (la masa)",
        madrycie: "Madrid (locativo de Madryt)",
        potrzebujesz: "necesitas (potrzebować + genitivo; al hablar, también acusativo, como aquí)",
        "pół": "medio",
        kilo: "kilo",
        "mąki": "harina (genitivo de mąka)",
        miodu: "miel (genitivo de miód)",
        szklanki: "vaso (genitivo de szklanka, tras «pół»; una szklanka son unos 250 ml)",
        cukru: "azúcar (genitivo de cukier)",
        kostki: "pastilla (genitivo de kostka: la de mantequilla, de 200 g)",
        "masła": "mantequilla (genitivo de masło)",
        dwa: "dos",
        jajka: "huevos (plural de jajko)",
        "łyżeczkę": "cucharadita (acusativo de łyżeczka)",
        sody: "bicarbonato (genitivo de soda)",
        "przyprawę": "especias (acusativo de przyprawa: «przyprawa do piernika» = mezcla de especias para piernik)",
        do: "para; en, dentro de",
        piernika: "piernik (genitivo)",
        najpierw: "primero",
        podgrzej: "¡calienta! (imperativo de podgrzać)",
        "miód": "miel",
        z: "con; de",
        cukrem: "azúcar (instrumental de cukier, tras «z»)",
        "masłem": "mantequilla (instrumental de masło)",
        poczekaj: "¡espera! (imperativo de poczekać)",
        "aż": "hasta que",
        ostygnie: "se enfríe (ostygnąć, perfectivo)",
        potem: "luego, después",
        dodaj: "¡añade! (imperativo de dodać)",
        "mąkę": "harina (acusativo de mąka)",
        "sodę": "bicarbonato (acusativo de soda)",
        wyrabiaj: "¡amasa! (imperativo de wyrabiać, imperfectivo: durante un rato)",
        ciasto: "masa",
        przez: "durante",
        "dziesięć": "diez",
        minut: "minutos (genitivo plural de minuta)",
        "rozwałkuj": "¡estira con el rodillo! (imperativo de rozwałkować)",
        wytnij: "¡recorta! (imperativo de wyciąć)",
        gwiazdki: "estrellitas (plural de gwiazdka)",
        serca: "corazones (plural de serce)",
        choinki: "arbolitos de Navidad (plural de choinka)",
        piecz: "¡hornea! (imperativo de piec, imperfectivo: durante diez minutos)",
        temperaturze: "temperatura (locativo de temperatura)",
        stopni: "grados (genitivo plural de stopień)",
        na: "«na koniec» = al final",
        koniec: "final",
        udekoruj: "¡decora! (imperativo de udekorować)",
        lukrem: "glaseado (instrumental de lukier)",
        uwaga: "¡atención!, ¡cuidado!",
        jedz: "¡come! (imperativo de jeść; «nie jedz» = no comas)",
        ich: "los (genitivo plural, tras negación)",
        razu: "«od razu» = enseguida",
        schowaj: "¡guarda! (imperativo de schować)",
        puszki: "lata (genitivo de puszka, tras «do»)",
        a: "y; «a nie» = y no",
        za: "dentro de («za dwa tygodnie» = dentro de dos semanas)",
        tygodnie: "semanas (plural de tydzień)",
        "będą": "estarán",
        "miękkie": "blandos",
        pyszne: "buenísimos, deliciosos",
        zawsze: "siempre",
        "mówi": "dice (mówić)",
        "się": "se («piecze się» = se hornea)",
        sercem: "corazón (instrumental de serce: «z sercem» = con cariño)",
        wszystko: "todo",
        ma: "tiene (mieć)",
        "głowie": "cabeza (locativo de głowa: «w głowie» = en la cabeza)",
        ale: "pero",
        gotuj: "¡hierve! (imperativo de gotować; «nie gotuj» = que no hierva)",
        dobrze: "bien",
        wymieszaj: "¡mezcla! (imperativo de wymieszać, perfectivo)",
        ja: "yo",
        "kradnę": "robo (kraść)",
        jeden: "uno",
        "wcześniej": "antes",
        kiedy: "cuando",
        patrzy: "mira (patrzeć)"
      },
      notas: "Las recetas van en imperativo, casi siempre perfectivo (*podgrzej, dodaj, wytnij*), pero cuando cuenta la duración se pasa al imperfectivo: *Wyrabiaj ciasto przez dziesięć minut*, *Piecz pierniki dziesięć minut*. Y con *nie*, imperfectivo: *nie jedz*.",
      preguntas: [
        { q: "¿Qué se calienta primero?", ops: ["La miel con el azúcar y la mantequilla", "La harina con los huevos", "Los pierniki ya decorados"], ok: 0 },
        { q: "¿Cuánto tiempo hay que amasar?", ops: ["Diez minutos", "Dos semanas", "Una hora"], ok: 0 },
        {
          q: "¿Por qué no hay que comérselos enseguida?",
          ops: ["Porque en dos semanas estarán blandos", "Porque son para San Nicolás", "Porque la abuela los cuenta"],
          ok: 0
        }
      ]
    }
  ]
});
