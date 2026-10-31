// Glossa · polaco · semana 2: El presente y el acusativo
window.CONTENT.pl.semanas.push({
  n: 2,
  pareja: {
    tema: "La comida: lo que te gusta y lo que no. Que te pregunte qué desayunas, qué cenas y qué te gusta beber, y contesta con frases enteras («Na śniadanie jem…», «Lubię…»). Para lo que no te gusta, prueba con «Nie lubię…» y que te corrija: tras «nie», la palabra cambia. Para terminar, ella hace de camarera («Dzień dobry, co podać?»): pídele algo de beber y de comer, pregunta cuánto es y paga. Pregúntale también qué le gusta comer y beber a cada uno de su familia y apúntalo en Ajustes, en «Su familia».",
    preguntas: [
      ["Co lubisz jeść?", "¿Qué te gusta comer?"],
      ["Czego nie lubisz jeść?", "¿Qué no te gusta comer?"],
      ["Co jesz na śniadanie?", "¿Qué desayunas?"],
      ["Co jesz na kolację?", "¿Qué cenas?"],
      ["Co lubisz pić?", "¿Qué te gusta beber?"]
    ],
    frases: ["Poproszę kawę z mlekiem.", "Na śniadanie jem jajecznicę.", "Lubię polską kuchnię.", "Ile to kosztuje?", "Która jest godzina?", "Możesz mówić wolniej?", "Dziękuję za zaproszenie."],
    reto: ["Gość w dom, Bóg w dom.", "Huésped en casa, Dios en casa: el refrán de la hospitalidad polaca («w dom» es un acusativo antiguo). Lo dice el anfitrión al recibir a alguien: apréndetelo, porque puede que sus padres te lo digan cuando llegues."]
  },
  lecciones: [
    {
      id: "pl2-1",
      titulo: "El presente (1): verbos en -am, -asz",
      min: 50,
      intro: "Esta semana aprendes a contar lo que haces. Empezamos por el grupo más fácil, el de *mam, masz*, que ya conoces: *czytam* (leo), *mieszkam* (vivo), *rozumiem* (entiendo). En la mesa te preguntarán por tu vida y contestarás con estos verbos.",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "czytać (leer)", "rozumieć (entender)"],
          audio: [1, 2],
          filas: [
            ["ja (yo)", "czytam", "rozumiem"],
            ["ty (tú)", "czytasz", "rozumiesz"],
            ["on, ona (él, ella)", "czyta", "rozumie"],
            ["my (nosotros)", "czytamy", "rozumiemy"],
            ["wy (vosotros)", "czytacie", "rozumiecie"],
            ["oni, one (ellos, ellas)", "czytają", "rozumieją"]
          ]
        },
        {
          t: "p",
          x: "Quita la *-ć* del infinitivo y añade *-m, -sz, -my, -cie, -ją*; con *on, ona* no se añade nada: *czyta-m, czyta-sz, czyta, czyta-my, czyta-cie, czyta-ją*. Es el patrón de *mam, masz, ma*. Unos pocos verbos en *-eć*, como *rozumieć*, van igual: *rozumie-m, rozumie-sz, rozumie-ją*; la mayoría (*widzieć*, *słyszeć*) siguen el modelo de mañana."
        },
        {
          t: "tabla",
          cab: ["Verbo", "Español", "ja"],
          audio: [0, 2],
          filas: [
            ["mieszkać", "vivir", "mieszkam"],
            ["znać", "conocer", "znam"],
            ["pamiętać", "recordar", "pamiętam"],
            ["czekać", "esperar", "czekam"],
            ["słuchać", "escuchar", "słucham"],
            ["pytać", "preguntar", "pytam"],
            ["rozmawiać", "hablar, conversar", "rozmawiam"],
            ["śpiewać", "cantar", "śpiewam"],
            ["kochać", "querer, amar", "kocham"]
          ]
        },
        {
          t: "ej",
          items: [
            ["Mieszkam w Madrycie, a Ania mieszka w Krakowie.", "Yo vivo en Madrid y Ania vive en Cracovia."],
            ["Ja czytam, a ty?", "Yo leo, ¿y tú?"],
            ["Co czytasz?", "¿Qué lees?"],
            ["Znasz Kraków?", "¿Conoces Cracovia?"],
            ["Nie mieszkam w Krakowie.", "No vivo en Cracovia."],
            ["Kawa czy herbata?", "¿Café o té?"],
            ["Rozmawiamy codziennie.", "Hablamos todos los días."],
            ["Pamiętasz?", "¿Te acuerdas?"],
            ["Czekamy na ciebie!", "¡Te esperamos!"],
            ["W Wigilię śpiewamy kolędy.", "En Nochebuena cantamos villancicos."]
          ]
        },
        {
          t: "nota",
          x: "No hace falta el pronombre: *czytam* ya es «yo leo». Úsalo solo para contrastar: *Ja czytam, a ty?* Para negar, pon *nie* delante del verbo: *Nie rozumiem*. Para preguntar, basta la entonación o *czy* delante: *Rozumiesz?* = *Czy rozumiesz?*"
        },
        {
          t: "p",
          x: "*Oni* es «ellos» (si hay al menos un hombre en el grupo); *one*, «ellas» (y también cosas). En frases hechas ya usas dos pronombres de complemento: *cię*, *ciebie* (te, a ti) y *mnie* (me, a mí): *Kocham cię*, *Czekamy na ciebie*."
        },
        {
          t: "nota",
          x: "*Słucham?* (literalmente «escucho») es lo que se dice al coger el teléfono, lo que te pregunta un dependiente para que pidas y «¿perdón?» cuando no has oído algo. Y *przepraszam* también es de este grupo: viene de *przepraszać*, «pedir perdón»."
        }
      ],
      vocab: [
        ["czytać", "leer"],
        ["mieszkać", "vivir (en un sitio)"],
        ["znać", "conocer (a alguien, un sitio)"],
        ["rozumieć (rozumiem, rozumiesz)", "entender"],
        ["Nie rozumiem.", "No entiendo."],
        ["pamiętać", "recordar, acordarse de"],
        ["Pamiętasz?", "¿Te acuerdas?"],
        ["czekać na…", "esperar a… (+ acusativo)"],
        ["Czekamy na ciebie!", "¡Te esperamos!"],
        ["słuchać", "escuchar"],
        ["Słucham?", "¿Diga?; ¿perdón?"],
        ["pytać", "preguntar"],
        ["rozmawiać", "hablar, conversar"],
        ["śpiewać", "cantar"],
        ["kolęda", "villancico"],
        ["kochać", "querer, amar"],
        ["Kocham cię.", "Te quiero."],
        ["on, ona, ono", "él, ella, él/ella (para nombres neutros)"],
        ["my, wy, oni, one", "nosotros, vosotros, ellos, ellas"],
        ["czy", "partícula de pregunta (sí o no); o (en preguntas)"],
        ["gdzie", "dónde"],
        ["kto", "quién"],
        ["a", "y (en contraste); ¿y…?"],
        ["codziennie", "todos los días"]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «Ania ___ w Krakowie.»", ops: ["mieszka", "mieszkam", "mieszkają"], ok: 0 },
        { t: "mc", q: "«Czytamy» significa…", ops: ["leemos", "leo", "leen"], ok: 0 },
        { t: "mc", q: "El padre de Ania te dice algo y no lo entiendes. Dices:", ops: ["Przepraszam, nie rozumiem.", "Nie ma za co.", "Kocham cię."], ok: 0 },
        { t: "oir", x: "czytają", ops: ["czytają", "czytamy", "czytacie"], ok: 0 },
        { t: "oir", x: "słucham", ops: ["słucham", "szukam", "słuchasz"], ok: 0 },
        { t: "orden", es: "Yo vivo en Madrid y Ania vive en Cracovia.", x: "Mieszkam w Madrycie, a Ania mieszka w Krakowie." },
        { t: "decir", es: "No entiendo.", x: "Nie rozumiem." },
        { t: "decir", es: "Te quiero.", x: "Kocham cię." }
      ]
    },
    {
      id: "pl2-2",
      titulo: "El presente (2): verbos en -ę, -isz; los días de la semana",
      min: 55,
      intro: "El segundo grupo es el de *mówić* (hablar) y *lubić* (gustar): *mówię, mówisz*. Con *lubię* + infinitivo dirás qué te gusta hacer y, con los días de la semana, cuándo lo haces: justo lo que la familia querrá saber de ti.",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "mówić (hablar)", "lubić (gustar)", "uczyć się (aprender)"],
          audio: [1, 2, 3],
          filas: [
            ["ja", "mówię", "lubię", "uczę się"],
            ["ty", "mówisz", "lubisz", "uczysz się"],
            ["on, ona", "mówi", "lubi", "uczy się"],
            ["my", "mówimy", "lubimy", "uczymy się"],
            ["wy", "mówicie", "lubicie", "uczycie się"],
            ["oni, one", "mówią", "lubią", "uczą się"]
          ]
        },
        {
          t: "p",
          x: "Terminaciones: *-ę, -isz, -i, -imy, -icie, -ą*. Tras *cz, sz, rz, ż* la *i* pasa a *y*: *uczysz się*, *słyszysz* (oyes). Algunos verbos cambian la consonante en *ja* y *oni*: *prosić* → *proszę* (pido), *widzieć* → *widzę* (veo), *płacić* → *płacę* (pago). Así que *proszę* significa, literalmente, «pido»."
        },
        {
          t: "ej",
          items: [
            ["Mówisz po hiszpańsku?", "¿Hablas español?"],
            ["Co robisz?", "¿Qué haces?"],
            ["Słyszysz mnie?", "¿Me oyes?"],
            ["Nie słyszę cię.", "No te oigo."],
            ["Widzę cię!", "¡Te veo!"],
            ["Myślę, że tak.", "Creo que sí."],
            ["Lubię gotować.", "Me gusta cocinar."],
            ["Bardzo lubię czytać.", "Me gusta mucho leer."],
            ["Nie lubię tańczyć.", "No me gusta bailar."]
          ]
        },
        {
          t: "nota",
          x: "*lubić* no funciona como «gustar»: el que disfruta es el sujeto. *(Ja) lubię* = me gusta; *(ty) lubisz* = te gusta. Con personas significa «caer bien»: *Lubię Piotra* (me cae bien Piotr). *Bardzo lubię* = me gusta mucho; *nie lubię* = no me gusta."
        },
        {
          t: "tabla",
          cab: ["Día", "Español", "¿Cuándo?"],
          audio: [0, 2],
          filas: [
            ["poniedziałek", "lunes", "w poniedziałek"],
            ["wtorek", "martes", "we wtorek"],
            ["środa", "miércoles", "w środę"],
            ["czwartek", "jueves", "w czwartek"],
            ["piątek", "viernes", "w piątek"],
            ["sobota", "sábado", "w sobotę"],
            ["niedziela", "domingo", "w niedzielę"]
          ]
        },
        {
          t: "nota",
          x: "«El lunes» es *w* + el día; ante *wtorek* se dice *we* para no juntar dos *w*. Los días en *-a* cambian a *-ę* (*w środę*): es el acusativo, que verás en la lección 4. Pistas: *poniedziałek* es «tras el domingo»; *wtorek*, «el segundo»; *środa*, «el del medio»; *czwartek* y *piątek*, «el cuarto» y «el quinto» (como *cztery* y *pięć*); *niedziela*, «el día de no trabajar». Se escriben con minúscula."
        },
        {
          t: "ej",
          items: [
            ["Jaki dziś jest dzień?", "¿Qué día es hoy?"],
            ["Dziś jest poniedziałek.", "Hoy es lunes."],
            ["Co robisz w sobotę?", "¿Qué haces el sábado?"],
            ["W sobotę robię zakupy.", "El sábado hago la compra."],
            ["W niedzielę odpoczywam.", "El domingo descanso."],
            ["Do jutra!", "¡Hasta mañana!"],
            ["Wigilia jest w czwartek.", "Este año, Nochebuena cae en jueves."]
          ]
        }
      ],
      vocab: [
        ["mówić", "hablar"],
        ["lubić", "gustar; caer bien"],
        ["robić", "hacer"],
        ["Co robisz?", "¿Qué haces?"],
        ["uczyć się", "aprender, estudiar"],
        ["słyszeć", "oír"],
        ["Słyszysz mnie?", "¿Me oyes?"],
        ["widzieć (widzę, widzisz)", "ver"],
        ["prosić (proszę, prosisz)", "pedir"],
        ["myśleć", "pensar"],
        ["Myślę, że tak.", "Creo que sí."],
        ["Mówisz po hiszpańsku?", "¿Hablas español?"],
        ["Lubię gotować.", "Me gusta cocinar."],
        ["poniedziałek", "lunes"],
        ["wtorek", "martes"],
        ["środa", "miércoles"],
        ["czwartek", "jueves"],
        ["piątek", "viernes"],
        ["sobota", "sábado"],
        ["niedziela", "domingo"],
        ["dziś, dzisiaj", "hoy"],
        ["jutro", "mañana"],
        ["Jaki dziś jest dzień?", "¿Qué día es hoy?"],
        ["w sobotę", "el sábado"],
        ["robić zakupy", "hacer la compra"]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «Piotr ___ po angielsku.»", ops: ["mówi", "mówię", "mówisz"], ok: 0 },
        { t: "mc", q: "¿Cómo se dice «me gusta leer»?", ops: ["Lubię czytać.", "Lubisz czytać.", "Lubię czytam."], ok: 0 },
        { t: "mc", q: "«W piątek» significa…", ops: ["el viernes", "el jueves", "el martes"], ok: 0 },
        { t: "oir", x: "środa", ops: ["środa", "sobota", "woda"], ok: 0 },
        { t: "oir", x: "uczysz się", ops: ["uczysz się", "uczy się", "uczę się"], ok: 0 },
        { t: "orden", es: "¿Qué haces el sábado?", x: "Co robisz w sobotę?" },
        { t: "decir", es: "Me gusta cocinar.", x: "Lubię gotować." },
        { t: "decir", es: "¿Me oyes?", x: "Słyszysz mnie?" }
      ]
    },
    {
      id: "pl2-3",
      titulo: "El presente (3): verbos en -ę, -esz y -uję; la hora",
      min: 60,
      intro: "El tercer grupo trae verbos que usarás a diario: *mogę* (puedo), *piszę* (escribo) y los muchos en *-ować*, como *pracuję* (trabajo) o *dziękuję* (gracias, literalmente «agradezco»). Y la hora, para saber cuándo empieza la cena de Nochebuena.",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "pisać (escribir)", "móc (poder)", "pracować (trabajar)"],
          audio: [1, 2, 3],
          filas: [
            ["ja", "piszę", "mogę", "pracuję"],
            ["ty", "piszesz", "możesz", "pracujesz"],
            ["on, ona", "pisze", "może", "pracuje"],
            ["my", "piszemy", "możemy", "pracujemy"],
            ["wy", "piszecie", "możecie", "pracujecie"],
            ["oni, one", "piszą", "mogą", "pracują"]
          ]
        },
        {
          t: "p",
          x: "Terminaciones: *-ę, -esz, -e, -emy, -ecie, -ą*. La raíz suele cambiar: *pisać* → *piszę*; *móc* → *mogę*, pero *możesz*. Todos los verbos en *-ować* hacen *-uję, -ujesz*: *kupować* → *kupuję* (compro), *gotować* → *gotuję* (cocino), *studiować* → *studiuję* (estudio en la universidad)."
        },
        {
          t: "ej",
          items: [
            ["Pracuję w Madrycie.", "Trabajo en Madrid."],
            ["Piotr studiuje w Krakowie.", "Piotr estudia en Cracovia."],
            ["Babcia gotuje obiad.", "La abuela hace la comida."],
            ["Kupuję prezenty.", "Compro regalos."],
            ["Przylatuję we wtorek.", "Llego (en avión) el martes."],
            ["Możesz mówić wolniej?", "¿Puedes hablar más despacio?"],
            ["Możesz powtórzyć?", "¿Puedes repetirlo?"]
          ]
        },
        {
          t: "nota",
          x: "Ahora entiendes *dziękuję*: es «agradezco», de *dziękować*. Lo que agradeces va con *za* + acusativo: *Dziękuję za kawę* (gracias por el café), *Dziękuję za zaproszenie* (gracias por la invitación). Y *móc* va con infinitivo, como en *Czy mogę pomóc?*"
        },
        {
          t: "nota",
          x: "*Idę* (voy, andando) es un verbo de movimiento que verás en la semana 4. De momento, dos frases hechas: *Już idę!* (¡ya voy!, cuando te llaman a la mesa) e *Idę spać* (me voy a dormir)."
        },
        {
          t: "tabla",
          cab: ["Hora", "Która jest godzina?", "O której?"],
          audio: [1, 2],
          filas: [
            ["1:00", "Jest pierwsza.", "o pierwszej"],
            ["2:00", "Jest druga.", "o drugiej"],
            ["3:00", "Jest trzecia.", "o trzeciej"],
            ["4:00", "Jest czwarta.", "o czwartej"],
            ["5:00", "Jest piąta.", "o piątej"],
            ["6:00", "Jest szósta.", "o szóstej"],
            ["7:00", "Jest siódma.", "o siódmej"],
            ["8:00", "Jest ósma.", "o ósmej"],
            ["9:00", "Jest dziewiąta.", "o dziewiątej"],
            ["10:00", "Jest dziesiąta.", "o dziesiątej"],
            ["11:00", "Jest jedenasta.", "o jedenastej"],
            ["12:00", "Jest dwunasta.", "o dwunastej"]
          ]
        },
        {
          t: "p",
          x: "La hora se dice con el ordinal en femenino, porque *godzina* (hora) es femenina: *Jest druga* = «es la segunda», son las dos. «A las…» es *o* + el ordinal en *-ej*: *o drugiej*, *o piątej*. Para precisar: *rano* (por la mañana), *po południu* (por la tarde), *wieczorem* (por la noche)."
        },
        {
          t: "ej",
          items: [
            ["Która jest godzina?", "¿Qué hora es?"],
            ["Jest ósma rano.", "Son las ocho de la mañana."],
            ["O której jest kolacja?", "¿A qué hora es la cena?"],
            ["O szóstej wieczorem.", "A las seis de la tarde."],
            ["Kończę pracę o piątej.", "Salgo del trabajo a las cinco."],
            ["Do zobaczenia o siódmej!", "¡Nos vemos a las siete!"]
          ]
        },
        {
          t: "nota",
          x: "En Nochebuena la cena empieza cuando sale la primera estrella (*pierwsza gwiazdka*), hacia las cuatro o las cinco de la tarde. En trenes y vuelos se usa el reloj de 24 horas; para la vida diaria te basta con 1–12."
        }
      ],
      vocab: [
        ["pisać (piszę, piszesz)", "escribir"],
        ["móc (mogę, możesz)", "poder"],
        ["Możesz mówić wolniej?", "¿Puedes hablar más despacio?"],
        ["Możesz powtórzyć?", "¿Puedes repetirlo?"],
        ["pracować (pracuję, pracujesz)", "trabajar"],
        ["kupować / kupić", "comprar"],
        ["gotować (gotuję, gotujesz)", "cocinar"],
        ["studiować (studiuję, studiujesz)", "estudiar (en la universidad)"],
        ["dziękować za…", "dar las gracias por… (+ acusativo)"],
        ["Dziękuję za zaproszenie.", "Gracias por la invitación."],
        ["prezent", "regalo"],
        ["Już idę!", "¡Ya voy!"],
        ["Idę spać.", "Me voy a dormir."],
        ["godzina", "hora"],
        ["Która jest godzina?", "¿Qué hora es?"],
        ["Jest pierwsza / druga / trzecia.", "Es la una / Son las dos / Son las tres."],
        ["O której?", "¿A qué hora?"],
        ["o piątej", "a las cinco"],
        ["kolacja", "cena"],
        ["rano", "por la mañana"],
        ["po południu", "por la tarde"],
        ["wieczorem", "por la noche"],
        ["kończyć / skończyć", "terminar"]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «Marek ___ jako inżynier.»", ops: ["pracuje", "pracuję", "pracujesz"], ok: 0 },
        { t: "mc", q: "«Możesz powtórzyć?» significa…", ops: ["¿Puedes repetirlo?", "¿Puedo ayudar?", "¿Puedes hablar más despacio?"], ok: 0 },
        { t: "mc", q: "Te llaman a la mesa. Contestas:", ops: ["Już idę!", "Idę spać.", "Dobranoc!"], ok: 0 },
        { t: "mc", q: "«Son las siete» se dice…", ops: ["Jest siódma.", "Jest siedem.", "O siódmej."], ok: 0 },
        { t: "oir", x: "o szóstej", ops: ["o szóstej", "o siódmej", "o ósmej"], ok: 0 },
        { t: "orden", es: "¿A qué hora es la cena?", x: "O której jest kolacja?" },
        { t: "decir", es: "¿Puedes hablar más despacio?", x: "Możesz mówić wolniej?" },
        { t: "decir", es: "Gracias por la invitación.", x: "Dziękuję za zaproszenie." }
      ]
    },
    {
      id: "pl2-4",
      titulo: "El acusativo (1): comer, beber, querer",
      min: 60,
      intro: "Lo que comes, bebes o quieres es el complemento directo, y en polaco va en acusativo. Buena noticia: en singular casi solo cambian los femeninos (*kawa* → *Piję kawę*). Es lo que más usarás en la mesa y en un bar.",
      bloques: [
        {
          t: "tabla",
          cab: ["Persona", "jeść (comer)", "pić (beber)", "chcieć (querer)"],
          audio: [1, 2, 3],
          filas: [
            ["ja", "jem", "piję", "chcę"],
            ["ty", "jesz", "pijesz", "chcesz"],
            ["on, ona", "je", "pije", "chce"],
            ["my", "jemy", "pijemy", "chcemy"],
            ["wy", "jecie", "pijecie", "chcecie"],
            ["oni, one", "jedzą", "piją", "chcą"]
          ]
        },
        {
          t: "p",
          x: "Tres irregulares de la mesa. *jeść* va como *mam* (*jem, jesz*), salvo *oni jedzą*. *pić* y *chcieć* van como *piszę*: *piję, pijesz*; *chcę, chcesz*."
        },
        {
          t: "tabla",
          cab: ["Tipo", "Nominativo", "Acusativo"],
          audio: [1, 2],
          filas: [
            ["femenino", "kawa", "kawę"],
            ["femenino + adjetivo", "gorąca herbata", "gorącą herbatę"],
            ["masculino (cosa)", "sok", "sok"],
            ["masculino + adjetivo", "świeży chleb", "świeży chleb"],
            ["neutro", "piwo", "piwo"],
            ["neutro + adjetivo", "zimne mleko", "zimne mleko"]
          ]
        },
        {
          t: "p",
          x: "Regla de bolsillo para el singular: el nombre femenino en *-a* pasa a *-ę* y su adjetivo a *-ą*: *Piję gorącą herbatę*. *-ia* pasa a *-ię*: *kuchnia* → *Lubię polską kuchnię*. Los masculinos que son cosas y los neutros no cambian: *Jem chleb*, *Piję piwo*. Los masculinos que son personas o animales sí cambian: lo verás mañana."
        },
        {
          t: "ej",
          items: [
            ["Chcesz kawę?", "¿Quieres un café?"],
            ["Chcę wodę.", "Quiero agua."],
            ["Na śniadanie jem jajecznicę.", "Para desayunar tomo huevos revueltos."],
            ["Na obiad jemy zupę i mięso.", "Para comer tomamos sopa y carne."],
            ["Lubię polską kuchnię.", "Me gusta la cocina polaca."],
            ["Babcia robi pyszny barszcz.", "La abuela hace un barszcz buenísimo."],
            ["Mam ochotę na sernik.", "Me apetece tarta de queso."]
          ]
        },
        {
          t: "nota",
          x: "Las comidas del día: *śniadanie* (desayuno), *obiad* (la comida fuerte, hacia las 2–4 de la tarde) y *kolacja* (cena, más ligera). «Para desayunar, comer, cenar» es *na* + acusativo: *na śniadanie, na obiad, na kolację*."
        },
        {
          t: "nota",
          x: "Ojo con la negación: *Lubię kawę*, pero *Nie lubię kawy*. Tras *nie*, el complemento pasa a genitivo; lo verás la semana que viene. Y en la calle oirás *-a* en algunos masculinos de comida, como si fueran animados: *Poproszę pączka* (una berlina polaca)."
        }
      ],
      vocab: [
        ["jeść (jem, jesz)", "comer"],
        ["pić (piję, pijesz)", "beber"],
        ["chcieć (chcę, chcesz)", "querer"],
        ["kawa", "café"],
        ["mleko", "leche"],
        ["sok", "zumo"],
        ["piwo", "cerveza"],
        ["wino", "vino"],
        ["zupa", "sopa"],
        ["barszcz", "barszcz (sopa de remolacha)"],
        ["ser", "queso"],
        ["mięso", "carne"],
        ["ryba", "pescado"],
        ["ziemniaki", "patatas"],
        ["jajko", "huevo"],
        ["jajecznica", "huevos revueltos"],
        ["śniadanie", "desayuno"],
        ["obiad", "comida (la principal del día)"],
        ["na śniadanie / na obiad / na kolację", "para desayunar / comer / cenar"],
        ["Mam ochotę na…", "Me apetece… (+ acusativo)"],
        ["Lubię polską kuchnię.", "Me gusta la cocina polaca."],
        ["gorący", "caliente"],
        ["zimny", "frío"],
        ["świeży", "fresco"]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «Piję ___.» (té)", ops: ["herbatę", "herbata", "herbatą"], ok: 0 },
        { t: "mc", q: "Completa: «Jem ___.» (pan)", ops: ["chleb", "chleba", "chlebę"], ok: 0 },
        { t: "mc", q: "Completa: «Oni ___ pierogi.»", ops: ["jedzą", "jemy", "je"], ok: 0 },
        { t: "mc", q: "¿Cuál es correcta?", ops: ["Lubię zimną wodę.", "Lubię zimna woda.", "Lubię zimną woda."], ok: 0 },
        { t: "oir", x: "pijesz", ops: ["pijesz", "piszesz", "pije"], ok: 0 },
        { t: "orden", es: "Para desayunar tomo huevos revueltos.", x: "Na śniadanie jem jajecznicę." },
        { t: "decir", es: "Me gusta la cocina polaca.", x: "Lubię polską kuchnię." },
        { t: "decir", es: "Me apetece un café.", x: "Mam ochotę na kawę." }
      ]
    },
    {
      id: "pl2-5",
      titulo: "El acusativo (2): personas y animales; znać y wiedzieć",
      min: 55,
      intro: "Cuando el complemento es un hombre o un animal de género masculino, el nombre sí cambia: *Mam brata*, *Znasz Marka?* Lo necesitarás para hablar de la familia de Ania, empezando por el perro: *Lubię Burka*.",
      bloques: [
        {
          t: "tabla",
          cab: ["Quién", "Nominativo", "Acusativo"],
          audio: [1, 2],
          filas: [
            ["hombre", "brat", "brata"],
            ["hombre", "Marek", "Marka"],
            ["hombre", "Piotr", "Piotra"],
            ["animal", "pies", "psa"],
            ["animal", "kot", "kota"],
            ["animal", "karp", "karpia"],
            ["+ adjetivo", "mój starszy brat", "mojego starszego brata"],
            ["mujer", "Ania", "Anię"],
            ["mujer + adjetivo", "moja mama", "moją mamę"]
          ]
        },
        {
          t: "p",
          x: "Masculino de persona o animal: *-a*, y su adjetivo, *-ego*: *Mam starszego brata*. A veces se cae una *e*: *pies* → *psa*, *Marek* → *Marka*. Las mujeres van como las cosas femeninas, con *-ę* y *-ą*: *Kocham moją mamę*."
        },
        {
          t: "nota",
          x: "En español decimos «conozco **a** Marek»; en polaco no hay «a»: la terminación ya lo marca (*Znam Marka*). Tu nombre también cambia: *Znasz Pabla?* Y los peces cuentan como animales: en Nochebuena, *jemy karpia* (comemos carpa)."
        },
        {
          t: "ej",
          items: [
            ["Mam starszego brata.", "Tengo un hermano mayor."],
            ["Znasz Marka?", "¿Conoces a Marek?"],
            ["Kocham Anię.", "Quiero a Ania."],
            ["Mam dziewczynę. Ma na imię Ania.", "Tengo novia. Se llama Ania."],
            ["Lubię twoją mamę.", "Me cae bien tu madre."],
            ["Lubię Burka.", "Me cae bien Burek."],
            ["Mam pytanie.", "Tengo una pregunta."],
            ["Odwiedzam rodzinę Ani w Krakowie.", "Visito a la familia de Ania en Cracovia."]
          ]
        },
        {
          t: "tabla",
          cab: ["Persona", "znać (conocer)", "wiedzieć (saber)"],
          audio: [1, 2],
          filas: [
            ["ja", "znam", "wiem"],
            ["ty", "znasz", "wiesz"],
            ["on, ona", "zna", "wie"],
            ["my", "znamy", "wiemy"],
            ["wy", "znacie", "wiecie"],
            ["oni, one", "znają", "wiedzą"]
          ]
        },
        {
          t: "p",
          x: "*znać* + persona, sitio o cosa (conocer): *Znam Kraków*, *Znasz Piotra?* *wiedzieć* + un dato o una frase (saber): *Wiem, gdzie on mieszka*, *Nie wiem*. Y para «saber hacer algo», *umieć*: *Umiesz gotować?* (¿sabes cocinar?)."
        },
        {
          t: "ej",
          items: [
            ["Nie wiem.", "No lo sé."],
            ["Wiesz, gdzie jest Burek?", "¿Sabes dónde está Burek?"],
            ["Wiesz co? Lubię Kraków.", "¿Sabes qué? Me gusta Cracovia."],
            ["Dobrze znam Madryt.", "Conozco bien Madrid."],
            ["Kogo znasz w Krakowie?", "¿A quién conoces en Cracovia?"],
            ["Umiesz lepić pierogi?", "¿Sabes hacer pierogi?"]
          ]
        }
      ],
      vocab: [
        ["pies (psa)", "perro"],
        ["kot", "gato"],
        ["karp (karpia)", "carpa (el pescado de Nochebuena)"],
        ["starszy brat", "hermano mayor"],
        ["młodsza siostra", "hermana menor"],
        ["Znasz Marka?", "¿Conoces a Marek?"],
        ["twój, twoja, twoje", "tu (masc., fem., neutro)"],
        ["mojego brata, moją siostrę", "a mi hermano, a mi hermana (acusativo)"],
        ["Lubię twoją mamę.", "Me cae bien tu madre."],
        ["Mam dziewczynę.", "Tengo novia."],
        ["Mam pytanie.", "Tengo una pregunta."],
        ["odwiedzać / odwiedzić", "visitar"],
        ["wiedzieć (wiem, wiesz)", "saber"],
        ["Nie wiem.", "No lo sé."],
        ["Wiesz co?", "¿Sabes qué?"],
        ["Wiem, że…", "Sé que…"],
        ["umieć (umiem, umiesz)", "saber (hacer algo)"],
        ["Umiesz gotować?", "¿Sabes cocinar?"],
        ["lepić pierogi", "hacer pierogi (darles forma)"],
        ["przyjaciel, przyjaciółka", "amigo, amiga"],
        ["Kogo?", "¿A quién?"]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «Mam ___.» (un hermano)", ops: ["brata", "brat", "bratę"], ok: 0 },
        { t: "mc", q: "Completa: «Znasz ___?» (a Marek)", ops: ["Marka", "Marek", "Markę"], ok: 0 },
        { t: "mc", q: "«Conozco Cracovia» se dice…", ops: ["Znam Kraków.", "Wiem Kraków.", "Umiem Kraków."], ok: 0 },
        { t: "mc", q: "Completa: «Kocham ___ mamę.»", ops: ["moją", "moja", "mojego"], ok: 0 },
        { t: "oir", x: "psa", ops: ["psa", "pies", "pas"], ok: 0 },
        { t: "orden", es: "Me cae bien tu madre.", x: "Lubię twoją mamę." },
        { t: "decir", es: "No lo sé.", x: "Nie wiem." },
        { t: "decir", es: "¿Conoces a Marek?", x: "Znasz Marka?" }
      ]
    },
    {
      id: "pl2-6",
      titulo: "Números del 11 al 1000 y precios",
      min: 50,
      intro: "Precios, edades, horarios: con los números hasta 1000 podrás preguntar cuánto cuesta algo y entender la respuesta. Se construyen como en español, sumando piezas.",
      bloques: [
        {
          t: "tabla",
          cab: ["Nº", "11–19", "Nº", "Decenas"],
          audio: [1, 3],
          filas: [
            ["11", "jedenaście", "10", "dziesięć"],
            ["12", "dwanaście", "20", "dwadzieścia"],
            ["13", "trzynaście", "30", "trzydzieści"],
            ["14", "czternaście", "40", "czterdzieści"],
            ["15", "piętnaście", "50", "pięćdziesiąt"],
            ["16", "szesnaście", "60", "sześćdziesiąt"],
            ["17", "siedemnaście", "70", "siedemdziesiąt"],
            ["18", "osiemnaście", "80", "osiemdziesiąt"],
            ["19", "dziewiętnaście", "90", "dziewięćdziesiąt"]
          ]
        },
        {
          t: "tabla",
          cab: ["Nº", "Centenas"],
          audio: [1],
          filas: [
            ["100", "sto"],
            ["200", "dwieście"],
            ["300", "trzysta"],
            ["400", "czterysta"],
            ["500", "pięćset"],
            ["600", "sześćset"],
            ["700", "siedemset"],
            ["800", "osiemset"],
            ["900", "dziewięćset"],
            ["1000", "tysiąc"]
          ]
        },
        {
          t: "p",
          x: "Las piezas: *-naście* es «-ce» (*pięt-naście*, 15), *-dziesiąt* es «-enta» (*pięć-dziesiąt*, 50) y *-set* es «-cientos» (*pięć-set*, 500). Con 2, 3 y 4 cambian: *dwadzieścia, trzydzieści, czterdzieści*; *dwieście, trzysta, czterysta*. Se suman como en español: *dwadzieścia jeden* (21), *sto pięćdziesiąt* (150), *dwieście czterdzieści pięć* (245)."
        },
        {
          t: "nota",
          x: "Para el oído: *czternaście* (14) y *czterdzieści* (40), o *piętnaście* (15) y *pięćdziesiąt* (50), se parecen. Fíjate en el final: *-naście* (de 11 a 19) o *-dzieści, -dziesiąt* (decenas)."
        },
        {
          t: "tabla",
          cab: ["Cantidad", "złoty", "grosz (céntimo)"],
          audio: [1, 2],
          filas: [
            ["1", "jeden złoty", "jeden grosz"],
            ["2, 3, 4", "dwa złote", "dwa grosze"],
            ["5–21", "pięć złotych", "pięć groszy"],
            ["22, 23, 24", "dwadzieścia dwa złote", "dwadzieścia dwa grosze"],
            ["25–31", "dwadzieścia pięć złotych", "dwadzieścia pięć groszy"]
          ]
        },
        {
          t: "p",
          x: "La palabra cambia según el número: 1 → *złoty*; si la cifra acaba en 2, 3 o 4 (salvo 12, 13 y 14) → *złote*; todo lo demás → *złotych*. Con céntimos no se dice la moneda: *dwanaście pięćdziesiąt* = 12,50 zł. La edad sigue la misma regla: *Mam dwadzieścia dwa lata*, pero *Mam dwadzieścia pięć lat*."
        },
        {
          t: "ej",
          items: [
            ["Ile kosztuje kawa?", "¿Cuánto cuesta el café?"],
            ["Dwanaście złotych.", "Doce złotys."],
            ["Ile kosztują pierogi?", "¿Cuánto cuestan los pierogi?"],
            ["Trzydzieści dwa złote.", "Treinta y dos złotys."],
            ["Ile płacę?", "¿Cuánto es?"],
            ["To jest za drogie.", "Es demasiado caro."],
            ["Ile masz lat?", "¿Cuántos años tienes?"],
            ["Piotr ma dwadzieścia pięć lat.", "Piotr tiene veinticinco años."]
          ]
        },
        {
          t: "nota",
          x: "Con estos números ya puedes decir los minutos: *Jest ósma trzydzieści* (son las ocho y media), *o siódmej piętnaście* (a las siete y cuarto)."
        }
      ],
      vocab: [
        ["jedenaście", "once"],
        ["dwanaście", "doce"],
        ["trzynaście", "trece"],
        ["czternaście", "catorce"],
        ["piętnaście", "quince"],
        ["szesnaście", "dieciséis"],
        ["siedemnaście", "diecisiete"],
        ["osiemnaście", "dieciocho"],
        ["dziewiętnaście", "diecinueve"],
        ["dwadzieścia", "veinte"],
        ["trzydzieści", "treinta"],
        ["czterdzieści", "cuarenta"],
        ["pięćdziesiąt", "cincuenta"],
        ["sto", "cien"],
        ["dwieście", "doscientos"],
        ["pięćset", "quinientos"],
        ["tysiąc", "mil"],
        ["Ile kosztuje…?", "¿Cuánto cuesta…?"],
        ["Ile kosztują…?", "¿Cuánto cuestan…?"],
        ["jeden złoty, dwa złote, pięć złotych", "un złoty, dos złotys, cinco złotys"],
        ["Ile płacę?", "¿Cuánto es? (¿cuánto pago?)"],
        ["drogi / tani", "caro / barato"],
        ["Ile masz lat?", "¿Cuántos años tienes?"],
        ["Mam… lat.", "Tengo… años."]
      ],
      ejercicios: [
        { t: "oir", x: "czternaście", ops: ["czternaście", "czterdzieści", "czterysta"], ok: 0 },
        { t: "oir", x: "pięćdziesiąt", ops: ["pięćdziesiąt", "piętnaście", "pięćset"], ok: 0 },
        { t: "mc", q: "¿Qué número es *dwieście pięćdziesiąt*?", ops: ["250", "205", "2500"], ok: 0 },
        { t: "mc", q: "Completa: «Kawa kosztuje dwanaście ___.»", ops: ["złotych", "złote", "złoty"], ok: 0 },
        { t: "mc", q: "Completa: «Sernik kosztuje dwadzieścia dwa ___.»", ops: ["złote", "złotych", "złoty"], ok: 0 },
        { t: "orden", es: "¿Cuánto cuesta el café?", x: "Ile kosztuje kawa?" },
        { t: "decir", es: "¿Cuánto cuesta esto?", x: "Ile to kosztuje?" },
        { t: "decir", es: "¿Cuántos años tienes?", x: "Ile masz lat?" }
      ]
    },
    {
      id: "pl2-7",
      titulo: "En la cafetería y en la tienda (repaso)",
      min: 45,
      intro: "Repaso de la semana en dos escenas que vivirás en Cracovia: pedir en una cafetería y pagar en una tienda. Todo lo que pides va en acusativo, y *poproszę* es tu palabra mágica: *Poproszę kawę i szarlotkę*.",
      bloques: [
        {
          t: "ej",
          items: [
            ["Co podać?", "¿Qué le pongo?"],
            ["Poproszę kawę z mlekiem.", "Un café con leche, por favor."],
            ["I szarlotkę.", "Y una tarta de manzana."],
            ["Z cukrem czy bez?", "¿Con azúcar o sin?"],
            ["Dla mnie to samo.", "Para mí, lo mismo."],
            ["Na miejscu czy na wynos?", "¿Para tomar aquí o para llevar?"],
            ["Coś jeszcze?", "¿Algo más?"],
            ["Poproszę jeszcze jedno ciastko.", "Otro pastel, por favor."],
            ["Nie, dziękuję. To wszystko.", "No, gracias. Eso es todo."],
            ["Rachunek, poproszę.", "La cuenta, por favor."],
            ["Lubię tę kawiarnię.", "Me gusta esta cafetería."],
            ["Zapraszam cię na kawę!", "¡Te invito a un café!"]
          ]
        },
        {
          t: "nota",
          x: "*Poproszę* («le pediré», «quisiera») es la forma educada de pedir; *chcę* (quiero) suena brusco con un camarero. En casa de Ania te ofrecerán *Napijesz się kawy?* (¿te tomas un café?): contesta *Tak, poproszę!* o *Chętnie!* (¡con mucho gusto!)."
        },
        {
          t: "ej",
          items: [
            ["Przepraszam, gdzie tu jest sklep?", "Perdone, ¿dónde hay una tienda por aquí?"],
            ["Poproszę chleb i masło.", "Pan y mantequilla, por favor."],
            ["Poproszę to.", "Esto, por favor."],
            ["Gotówką czy kartą?", "¿En efectivo o con tarjeta?"],
            ["Kartą, poproszę.", "Con tarjeta, por favor."],
            ["Można płacić kartą?", "¿Se puede pagar con tarjeta?"]
          ]
        },
        {
          t: "tabla",
          cab: ["Verbo", "ja", "ty", "oni"],
          audio: [1, 2, 3],
          filas: [
            ["czytać (leer)", "czytam", "czytasz", "czytają"],
            ["mówić (hablar)", "mówię", "mówisz", "mówią"],
            ["pisać (escribir)", "piszę", "piszesz", "piszą"],
            ["pracować (trabajar)", "pracuję", "pracujesz", "pracują"],
            ["jeść (comer)", "jem", "jesz", "jedzą"],
            ["pić (beber)", "piję", "pijesz", "piją"],
            ["chcieć (querer)", "chcę", "chcesz", "chcą"],
            ["wiedzieć (saber)", "wiem", "wiesz", "wiedzą"]
          ]
        },
        {
          t: "nota",
          x: "El acusativo en una línea: femenino *-ę* (*kawę*) y su adjetivo *-ą* (*dobrą kawę*); hombres y animales *-a* (*brata*, *psa*) y su adjetivo *-ego*; lo demás no cambia (*sok*, *piwo*)."
        },
        { t: "p", x: "**Diálogo.** Diciembre: Pablo y Ania entran en una cafetería del *Rynek*, la plaza mayor de Cracovia." },
        {
          t: "ej",
          items: [
            ["Dzień dobry! Co podać?", "Camarera: ¡Buenos días! ¿Qué les pongo?"],
            ["Poproszę kawę z mlekiem i herbatę z cytryną.", "Pablo: Un café con leche y un té con limón, por favor."],
            ["Na miejscu czy na wynos?", "Camarera: ¿Para tomar aquí o para llevar?"],
            ["Na miejscu.", "Pablo: Para tomar aquí."],
            ["Coś jeszcze?", "Camarera: ¿Algo más?"],
            ["Tak, sernik i szarlotkę. Ile płacę?", "Pablo: Sí, una tarta de queso y una de manzana. ¿Cuánto es?"],
            ["Pięćdziesiąt cztery złote.", "Camarera: Cincuenta y cuatro złotys."],
            ["Można kartą?", "Pablo: ¿Se puede con tarjeta?"],
            ["Oczywiście. Proszę.", "Camarera: Claro. Aquí tiene."],
            ["Dziękuję!", "Pablo: ¡Gracias!"],
            ["Smacznego!", "Camarera: ¡Que aproveche!"]
          ]
        }
      ],
      vocab: [
        ["Co podać?", "¿Qué le pongo?"],
        ["Poproszę kawę z mlekiem.", "Un café con leche, por favor."],
        ["herbata z cytryną", "té con limón"],
        ["Dla mnie to samo.", "Para mí, lo mismo."],
        ["Na miejscu czy na wynos?", "¿Para tomar aquí o para llevar?"],
        ["Coś jeszcze?", "¿Algo más?"],
        ["To wszystko.", "Eso es todo."],
        ["Rachunek, poproszę.", "La cuenta, por favor."],
        ["Gotówką czy kartą?", "¿En efectivo o con tarjeta?"],
        ["Można płacić kartą?", "¿Se puede pagar con tarjeta?"],
        ["płacić (płacę, płacisz)", "pagar"],
        ["Zapraszam cię na kawę.", "Te invito a un café."],
        ["Chętnie!", "¡Con mucho gusto!"],
        ["kawiarnia", "cafetería"],
        ["sklep", "tienda"],
        ["szarlotka", "tarta de manzana"],
        ["sernik", "tarta de queso"],
        ["ciastko", "pastel, galleta"],
        ["masło", "mantequilla"],
        ["cukier", "azúcar"],
        ["Oczywiście.", "Claro; por supuesto."]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "El camarero pregunta *Na miejscu czy na wynos?* y quieres llevártelo. Dices:",
          ops: ["Na wynos, poproszę.", "Na miejscu.", "To wszystko."],
          ok: 0
        },
        { t: "mc", q: "*Gotówką czy kartą?* significa…", ops: ["¿En efectivo o con tarjeta?", "¿Para tomar aquí o para llevar?", "¿Algo más?"], ok: 0 },
        { t: "mc", q: "Completa: «Poproszę ___ i sernik.»", ops: ["herbatę", "herbata", "herbatą"], ok: 0 },
        { t: "mc", q: "Repaso. Completa: «Oni ___ kawę.» (beben)", ops: ["piją", "pije", "pijemy"], ok: 0 },
        { t: "oir", x: "Coś jeszcze?", ops: ["Coś jeszcze?", "Co jesz?", "Co jeszcze?"], ok: 0 },
        { t: "orden", es: "Un café con leche, por favor.", x: "Poproszę kawę z mlekiem." },
        { t: "orden", es: "No, gracias. Eso es todo.", x: "Nie, dziękuję. To wszystko." },
        { t: "decir", es: "Te invito a un café.", x: "Zapraszam cię na kawę." }
      ]
    }
  ],
  lecturas: [
    {
      id: "pl2-r1",
      titulo: "Kawa na Kazimierzu (un café en Kazimierz)",
      nivel: "A1",
      texto: "Jest sobota, godzina dwunasta. Ania jest w kawiarni na Kazimierzu.\n— Dzień dobry! Co podać?\n— Poproszę kawę z mlekiem i szarlotkę. Ile płacę?\n— Dwadzieścia osiem złotych.\n\nAnia siada przy oknie i dzwoni do Pabla.\n— Cześć, kochanie! Słyszysz mnie?\n— Tak! Słyszę cię i widzę. Gdzie jesteś?\n— W kawiarni. Piję kawę i jem szarlotkę. A ty co robisz?\n— Gotuję paellę.\n— Pamiętasz naszą pierwszą kawę?\n— Oczywiście! Mała kawiarnia w Madrycie, ty, ja i gorąca czekolada.\n— A teraz mówisz po polsku!\n— Trochę. Uczę się codziennie.\n— W grudniu pijemy kawę razem. Tutaj, w Krakowie!",
      traduccion: "Es sábado, son las doce. Ania está en una cafetería de Kazimierz.\n— ¡Buenos días! ¿Qué le pongo?\n— Un café con leche y una tarta de manzana, por favor. ¿Cuánto es?\n— Veintiocho złotys.\n\nAnia se sienta junto a la ventana y llama a Pablo.\n— ¡Hola, cariño! ¿Me oyes?\n— ¡Sí! Te oigo y te veo. ¿Dónde estás?\n— En una cafetería. Estoy tomando un café y comiendo tarta de manzana. ¿Y tú qué haces?\n— Estoy haciendo paella.\n— ¿Te acuerdas de nuestro primer café?\n— ¡Claro! Una cafetería pequeña en Madrid, tú, yo y un chocolate caliente.\n— ¡Y ahora hablas polaco!\n— Un poco. Estudio todos los días.\n— En diciembre tomamos café juntos. ¡Aquí, en Cracovia!",
      glosa: {
        jest: "es, está (być)",
        sobota: "sábado",
        godzina: "hora («godzina dwunasta» = las doce)",
        dwunasta: "duodécima: las doce (la hora va en femenino)",
        ania: "Ania (nombre)",
        w: "en",
        kawiarni: "cafetería (locativo de kawiarnia)",
        na: "en («na Kazimierzu» = en Kazimierz)",
        kazimierzu: "Kazimierz, barrio de Cracovia (locativo)",
        "dzień": "día («dzień dobry» = buenos días)",
        dobry: "bueno («dzień dobry» = buenos días)",
        co: "qué",
        "podać": "servir («Co podać?» = ¿qué le pongo?)",
        "poproszę": "quisiera, por favor (para pedir)",
        "kawę": "café (acusativo de kawa)",
        z: "con",
        mlekiem: "leche (instrumental de mleko: «z mlekiem» = con leche)",
        i: "y",
        "szarlotkę": "tarta de manzana (acusativo de szarlotka)",
        ile: "cuánto",
        "płacę": "pago (płacić): «Ile płacę?» = ¿cuánto es?",
        "dwadzieścia": "veinte",
        osiem: "ocho",
        "złotych": "złotys (tras 5 o más)",
        siada: "se sienta (siadać)",
        przy: "junto a",
        oknie: "ventana (locativo de okno)",
        dzwoni: "llama por teléfono (dzwonić)",
        do: "a («dzwonić do…» = llamar a…, + genitivo)",
        pabla: "Pablo (genitivo, tras «do»)",
        "cześć": "¡hola!",
        kochanie: "cariño",
        "słyszysz": "oyes (słyszeć)",
        mnie: "me, a mí",
        tak: "sí",
        "słyszę": "oigo (słyszeć)",
        "cię": "te, a ti (acusativo de ty)",
        "widzę": "veo (widzieć)",
        gdzie: "dónde",
        "jesteś": "estás (być)",
        "piję": "bebo, tomo (pić)",
        jem: "como (jeść)",
        a: "y (contraste): «a ty?» = ¿y tú?",
        ty: "tú",
        robisz: "haces (robić)",
        "gotuję": "cocino, hago (gotować)",
        "paellę": "paella (acusativo)",
        "pamiętasz": "¿te acuerdas? (pamiętać)",
        "naszą": "nuestra (acusativo femenino de nasz)",
        "pierwszą": "primera (acusativo femenino de pierwszy)",
        "oczywiście": "¡claro!, por supuesto",
        "mała": "pequeña (femenino de mały)",
        kawiarnia: "cafetería",
        madrycie: "Madrid (locativo de Madryt)",
        ja: "yo",
        "gorąca": "caliente (femenino de gorący)",
        czekolada: "chocolate",
        teraz: "ahora",
        "mówisz": "hablas (mówić)",
        po: "«po polsku» = en polaco",
        polsku: "«po polsku» = en polaco",
        "trochę": "un poco",
        "uczę": "aprendo («uczę się» = estudio; uczyć się)",
        "się": "se (parte del verbo «uczyć się»)",
        codziennie: "todos los días",
        grudniu: "diciembre (locativo de grudzień: «w grudniu» = en diciembre)",
        pijemy: "bebemos, tomamos (pić)",
        razem: "juntos",
        tutaj: "aquí",
        krakowie: "Cracovia (locativo de Kraków)"
      },
      preguntas: [
        { q: "¿Dónde está Ania?", ops: ["En una cafetería de Kazimierz", "En casa", "En un mercado"], ok: 0 },
        { q: "¿Cuánto paga Ania?", ops: ["28 złotys", "18 złotys", "12 złotys"], ok: 0 },
        { q: "¿Qué está haciendo Pablo?", ops: ["Cocina paella", "Toma un chocolate", "Trabaja"], ok: 0 }
      ],
      notas: "*Kazimierz* es el antiguo barrio judío de Cracovia, lleno de cafés. Fíjate en los acusativos: *Poproszę kawę i szarlotkę*, *Pamiętasz naszą pierwszą kawę?*"
    },
    {
      id: "pl2-r2",
      titulo: "Sobota na Kleparzu (sábado en el mercado)",
      nivel: "A1",
      texto: "Jest sobota, ósma rano. Idę na Stary Kleparz. To jest najstarszy targ w Krakowie: ma ponad sześćset lat! Tu zawsze kupuję owoce, warzywa i ser. Lubię ten targ, bo wszystko jest świeże.\n\nNajpierw kupuję chleb. Potem idę do pana Józefa. Pan Józef sprzedaje ser z gór i zna całą moją rodzinę.\n— Dzień dobry! Ile kosztuje oscypek?\n— Piętnaście złotych.\n— Poproszę jeden. I jeszcze masło.\n— Coś jeszcze?\n— Nie, dziękuję. To wszystko. Ile płacę?\n— Dwadzieścia cztery złote.\n— Można kartą?\n— Oczywiście.\n\nNa koniec kupuję kwiaty dla babci. Potem wracam do domu na śniadanie.",
      traduccion: "Es sábado, las ocho de la mañana. Voy al Stary Kleparz. Es el mercado más antiguo de Cracovia: ¡tiene más de seiscientos años! Aquí siempre compro fruta, verdura y queso. Me gusta este mercado porque todo es fresco.\n\nPrimero compro pan. Luego voy al puesto del señor Józef. El señor Józef vende queso de la montaña y conoce a toda mi familia.\n— ¡Buenos días! ¿Cuánto cuesta el oscypek?\n— Quince złotys.\n— Uno, por favor. Y también mantequilla.\n— ¿Algo más?\n— No, gracias. Eso es todo. ¿Cuánto es?\n— Veinticuatro złotys.\n— ¿Se puede con tarjeta?\n— Por supuesto.\n\nPor último, compro flores para la abuela. Luego vuelvo a casa a desayunar.",
      glosa: {
        jest: "es, está (być)",
        sobota: "sábado",
        "ósma": "octava: las ocho (hora)",
        rano: "por la mañana",
        "idę": "voy (andando)",
        na: "a (con mercados: «na Kleparz»); «na koniec» = por último; «na śniadanie» = a desayunar",
        stary: "viejo («Stary Kleparz» = Kleparz Viejo)",
        kleparz: "Kleparz, mercado de Cracovia (acusativo = nominativo)",
        to: "esto, eso («to jest» = es; «to wszystko» = eso es todo)",
        najstarszy: "el más antiguo (superlativo de stary)",
        targ: "mercado",
        w: "en",
        krakowie: "Cracovia (locativo de Kraków)",
        ma: "tiene (mieć)",
        ponad: "más de",
        "sześćset": "seiscientos",
        lat: "años (genitivo plural, tras 5 o más)",
        tu: "aquí",
        zawsze: "siempre",
        "kupuję": "compro (kupować)",
        owoce: "fruta (plural de owoc)",
        warzywa: "verdura (plural de warzywo)",
        i: "y",
        ser: "queso (acusativo = nominativo)",
        "lubię": "me gusta (lubić)",
        ten: "este (acusativo masculino de cosa = nominativo)",
        bo: "porque",
        wszystko: "todo",
        "świeże": "fresco (neutro de świeży)",
        najpierw: "primero",
        chleb: "pan (acusativo = nominativo)",
        potem: "luego, después",
        do: "a (+ genitivo): «do pana Józefa» = al puesto del señor Józef; «do domu» = a casa",
        pana: "señor (genitivo de pan)",
        "józefa": "Józef (genitivo)",
        pan: "señor",
        "józef": "Józef, José (nombre)",
        sprzedaje: "vende (sprzedawać)",
        z: "de, desde",
        "gór": "montañas (genitivo plural de góry: «z gór» = de la montaña)",
        zna: "conoce (znać)",
        "całą": "toda (acusativo femenino de cały)",
        "moją": "mi (acusativo femenino de moja)",
        "rodzinę": "familia (acusativo de rodzina)",
        "dzień": "«dzień dobry» = buenos días",
        dobry: "«dzień dobry» = buenos días",
        ile: "cuánto",
        kosztuje: "cuesta (kosztować)",
        oscypek: "oscypek: queso ahumado de oveja de los montes Tatra",
        "piętnaście": "quince",
        "złotych": "złotys (tras 5 o más)",
        "poproszę": "quisiera, por favor (para pedir)",
        jeden: "uno (acusativo masculino de cosa = nominativo: «Poproszę jeden» = uno, por favor)",
        jeszcze: "también, además; «coś jeszcze?» = ¿algo más?",
        "masło": "mantequilla (acusativo = nominativo)",
        "coś": "algo",
        nie: "no",
        "dziękuję": "gracias",
        "płacę": "pago (płacić): «Ile płacę?» = ¿cuánto es?",
        "dwadzieścia": "veinte",
        cztery: "cuatro",
        "złote": "złotys (tras 2, 3, 4)",
        "można": "se puede",
        "kartą": "con tarjeta (instrumental de karta)",
        "oczywiście": "por supuesto",
        koniec: "fin («na koniec» = por último)",
        kwiaty: "flores (plural de kwiat)",
        dla: "para (+ genitivo)",
        babci: "abuela (genitivo de babcia, tras «dla»)",
        wracam: "vuelvo (wracać)",
        domu: "casa (genitivo de dom: «do domu» = a casa)",
        "śniadanie": "desayuno («na śniadanie» = a desayunar)"
      },
      preguntas: [
        { q: "¿Qué vende el señor Józef?", ops: ["Queso de la montaña", "Flores", "Pan"], ok: 0 },
        { q: "¿Cuánto paga Ania al señor Józef?", ops: ["24 złotys", "15 złotys", "42 złotys"], ok: 0 },
        { q: "¿Para quién son las flores?", ops: ["Para la abuela", "Para su madre", "Para el señor Józef"], ok: 0 }
      ],
      notas: "El *Stary Kleparz* es el mercado más antiguo de Cracovia: se comercia allí desde hace más de seiscientos años. El *oscypek* es un queso ahumado de leche de oveja de los montes Tatra, con forma de huso y dibujos en relieve. Fíjate en los precios: *piętnaście złotych*, pero *dwadzieścia cztery złote*."
    },
    {
      id: "pl2-r3",
      titulo: "Co lubimy jeść? (lo que nos gusta comer)",
      nivel: "A1",
      texto: "Cześć, Pablo!\n\nPytasz, co lubi jeść moja rodzina. Tata pije mocną kawę i na śniadanie zawsze je jajecznicę. Mama lubi zieloną herbatę i sałatki. Piotr jest studentem, więc często je pizzę. Babcia Zosia pije kompot i robi najlepsze pierogi w Krakowie. Burek je wszystko, ale najbardziej lubi kiełbasę. A ja? Ja kocham sernik i gorącą czekoladę!\n\nNa Wigilię mama i babcia przygotowują dwanaście potraw. Babcia robi barszcz i pierogi, a mama smaży karpia. Babcia pyta, czy umiesz gotować. A co ty lubisz jeść? Czekam na odpowiedź!\n\nBuziaki,\nAnia",
      traduccion: "¡Hola, Pablo!\n\nMe preguntas qué le gusta comer a mi familia. Papá toma café cargado y para desayunar siempre come huevos revueltos. A mamá le gustan el té verde y las ensaladas. Piotr es estudiante, así que come pizza a menudo. La abuela Zosia bebe kompot y hace los mejores pierogi de Cracovia. Burek come de todo, pero lo que más le gusta es la salchicha. ¿Y yo? ¡A mí me encantan la tarta de queso y el chocolate caliente!\n\nPara Nochebuena, mamá y la abuela preparan doce platos. La abuela hace el barszcz y los pierogi, y mamá fríe la carpa. La abuela pregunta si sabes cocinar. ¿Y a ti qué te gusta comer? ¡Espero tu respuesta!\n\nBesos,\nAnia",
      glosa: {
        "cześć": "¡hola!",
        pablo: "Pablo (nombre)",
        pytasz: "preguntas (pytać)",
        co: "qué",
        lubi: "le gusta (lubić)",
        "jeść": "comer",
        moja: "mi (femenino)",
        rodzina: "familia",
        tata: "papá",
        pije: "bebe, toma (pić)",
        "mocną": "fuerte, cargado (acusativo femenino de mocny)",
        "kawę": "café (acusativo de kawa)",
        i: "y",
        na: "para («na śniadanie» = para desayunar; «na Wigilię» = para Nochebuena); «czekać na» = esperar",
        "śniadanie": "desayuno",
        zawsze: "siempre",
        je: "come (jeść)",
        "jajecznicę": "huevos revueltos (acusativo de jajecznica)",
        mama: "mamá",
        "zieloną": "verde (acusativo femenino de zielony)",
        "herbatę": "té (acusativo de herbata)",
        "sałatki": "ensaladas (plural de sałatka)",
        piotr: "Piotr, Pedro (nombre)",
        jest: "es (być)",
        studentem: "estudiante (instrumental de student, tras «jest»)",
        "więc": "así que",
        "często": "a menudo",
        "pizzę": "pizza (acusativo)",
        babcia: "abuela",
        zosia: "Zosia (nombre)",
        kompot: "kompot: bebida casera de fruta cocida",
        robi: "hace (robić)",
        najlepsze: "los mejores (superlativo de dobry, plural)",
        pierogi: "pierogi (empanadillas polacas)",
        w: "en",
        krakowie: "Cracovia (locativo de Kraków)",
        burek: "Burek (el perro)",
        wszystko: "todo",
        ale: "pero",
        najbardziej: "más que nada, sobre todo",
        "kiełbasę": "salchicha, embutido (acusativo de kiełbasa)",
        a: "y (contraste): «a ja?» = ¿y yo?",
        ja: "yo",
        kocham: "me encanta, quiero (kochać)",
        sernik: "tarta de queso (acusativo = nominativo)",
        "gorącą": "caliente (acusativo femenino de gorący)",
        "czekoladę": "chocolate (acusativo de czekolada)",
        "wigilię": "Nochebuena (acusativo de Wigilia)",
        "przygotowują": "preparan (przygotowywać)",
        "dwanaście": "doce",
        potraw: "platos (genitivo plural de potrawa, tras «dwanaście»)",
        barszcz: "barszcz, sopa de remolacha",
        "smaży": "fríe (smażyć)",
        karpia: "carpa (acusativo de karp: los animales hacen -a)",
        pyta: "pregunta (pytać)",
        czy: "si (en preguntas indirectas)",
        umiesz: "sabes (umieć: saber hacer algo)",
        "gotować": "cocinar",
        ty: "tú",
        lubisz: "te gusta (lubić)",
        czekam: "espero (czekać)",
        "odpowiedź": "respuesta (acusativo = nominativo)",
        buziaki: "besos (al despedirse)",
        ania: "Ania (nombre)"
      },
      preguntas: [
        { q: "¿Qué desayuna el padre de Ania?", ops: ["Huevos revueltos", "Pizza", "Ensalada"], ok: 0 },
        { q: "¿Qué es lo que más le gusta a Burek?", ops: ["La salchicha", "El queso", "La tarta de queso"], ok: 0 },
        { q: "¿Qué hace la madre para Nochebuena?", ops: ["Fríe la carpa", "Hace los pierogi", "Hace el barszcz"], ok: 0 }
      ],
      notas: "En Nochebuena se sirven tradicionalmente doce platos sin carne: *barszcz* con *uszka* (raviolis de setas), carpa, arenque, *pierogi* de col y setas, *kompot* de fruta seca… La tradición dice que hay que probarlos todos para que no te falte de nada el año siguiente."
    }
  ]
});
