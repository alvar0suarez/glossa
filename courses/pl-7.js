// Glossa · polaco · semana 7: Volumen
window.CONTENT.pl.semanas.push({
  n: 7,
  pareja: {
    tema: "Juego de rol del opłatek: ella hace de su madre, de su abuela y de Piotr, parte la oblea contigo y te desea algo; tú contestas y le deseas algo a cada uno (de usted a los mayores, de tú a Piotr). Después te pide que le cuentes en polaco cómo es la Navidad en España: la Nochebuena, las uvas de Nochevieja y los Reyes Magos («Trzej Królowie»). Apunta los deseos nuevos que te diga: los volverás a oír el día 24.",
    preguntas: [
      ["Jak wygląda Wigilia w Hiszpanii?", "¿Cómo es la Nochebuena en España?"],
      ["Co jecie w Hiszpanii na Wigilię?", "¿Qué coméis en España en Nochebuena?"],
      ["Co robicie w sylwestra o północy?", "¿Qué hacéis en Nochevieja a medianoche?"],
      ["Kto w Hiszpanii przynosi prezenty i kiedy?", "¿Quién trae los regalos en España, y cuándo?"],
      ["Czy chciałbyś pójść z nami na pasterkę?", "¿Te gustaría venir con nosotros a la misa del gallo?"]
    ],
    frases: ["Czy mogłaby Pani podać mi chleb?", "Chciałbym spróbować wszystkiego.", "Życzę Pani zdrowia i szczęścia.", "Dziękuję, nawzajem!", "Zdrowych, spokojnych świąt!", "barszcz z uszkami", "W Hiszpanii prezenty przynoszą Trzej Królowie."],
    reto: ["Wśród nocnej ciszy głos się rozchodzi: Wstańcie, pasterze, Bóg się wam rodzi!", "Los dos primeros versos del villancico tradicional «Wśród nocnej ciszy»: «En el silencio de la noche se oye una voz: ¡Levantaos, pastores, Dios nace para vosotros!». Que te lo cante ella y luego cantadlo juntos."]
  },
  lecciones: [
    {
      id: "pl7-1",
      titulo: "El condicional: chciałbym, mógłbym, wolałbym",
      min: 55,
      intro: "En la mesa, «quiero» suena brusco; lo educado es «querría» o «me gustaría». El condicional polaco se hace con el pasado que ya conoces y unas terminaciones fijas, y con él ofrecerás, pedirás y dirás lo que prefieres sin sonar exigente.",
      bloques: [
        {
          t: "p",
          x: "Se forma con el pasado en 3.ª persona, más *by*, más la terminación de cada persona: *chciał* (él quería) + *bym* = *chciałbym* (yo querría). Tú, como hombre, siempre dirás *-łbym*: *chciałbym, mógłbym, wolałbym*."
        },
        {
          t: "tabla",
          cab: ["Persona", "Masculino", "Femenino"],
          audio: [1, 2],
          filas: [
            ["ja (yo)", "chciałbym", "chciałabym"],
            ["ty (tú)", "chciałbyś", "chciałabyś"],
            ["on, ona; Pan, Pani", "chciałby", "chciałaby"],
            ["my (nosotros)", "chcielibyśmy", "chciałybyśmy"],
            ["wy (vosotros)", "chcielibyście", "chciałybyście"],
            ["oni, one (ellos, ellas)", "chcieliby", "chciałyby"]
          ]
        },
        {
          t: "p",
          x: "En plural, la columna masculina vale para cualquier grupo con algún hombre: si hablas por Ania y por ti, dices *chcielibyśmy*. Con *Pan* y *Pani* se usa la 3.ª persona: *Czy chciałaby Pani…?* (¿Querría usted…?)."
        },
        {
          t: "tabla",
          cab: ["Infinitivo", "Pasado (él)", "Condicional (yo, hombre)", "Español"],
          audio: [2],
          filas: [
            ["chcieć", "chciał", "chciałbym", "querría, me gustaría"],
            ["móc", "mógł", "mógłbym", "podría"],
            ["woleć", "wolał", "wolałbym", "preferiría"],
            ["być", "był", "byłbym", "sería, estaría"],
            ["zjeść", "zjadł", "zjadłbym", "me comería"],
            ["napić się", "napił się", "napiłbym się", "me tomaría (una bebida)"],
            ["spróbować", "spróbował", "spróbowałbym", "probaría"]
          ]
        },
        {
          t: "nota",
          x: "El acento se queda en la sílaba que lo llevaba en el pasado: *by* y la terminación no cuentan. Tus formas: *CHCIAŁ-bym, MÓGŁ-bym*, pero *WO-lał-bym* (como *WO-lał*). Las de Ania: *CHCIA-ła-bym, MO-gła-bym*. Al hablar deprisa, muchos polacos lo pasan a la penúltima (*wo-LAŁ-bym*); la forma cuidada es la otra."
        },
        {
          t: "p",
          x: "*Byłoby* es la forma neutra de *być*: «sería, estaría». *Byłoby miło* (estaría bien, sería un placer) sirve para aceptar una invitación con elegancia."
        },
        {
          t: "ej",
          items: [
            ["Chciałbym spróbować wszystkiego.", "Me gustaría probarlo todo."],
            ["Wolałbym herbatę.", "Preferiría té."],
            ["Czy chciałbyś kawy?", "¿Te apetece un café? (a un chico)"],
            ["Czy chciałaby Pani herbaty?", "¿Le apetece un té? (a una señora)"],
            ["Napiłbym się kompotu.", "Me tomaría un kompot (bebida de fruta)."],
            ["Zjadłbym jeszcze kawałek sernika.", "Me comería otro trozo de tarta de queso."],
            ["Chcielibyśmy pójść na spacer.", "Nos gustaría ir a dar un paseo."],
            ["Mama bardzo chciałaby cię poznać.", "Mi madre tiene muchas ganas de conocerte. (Ania)"],
            ["Byłoby miło.", "Estaría bien. / Sería un placer."]
          ]
        },
        {
          t: "nota",
          x: "*Chcę* (quiero) a secas suena exigente, igual que en español. Para ofrecer o pedir, *chciałbym* o *poproszę*. Detalle: con *chcieć* y *napić się*, la bebida suele ir en genitivo (*kawy, herbaty, kompotu*), que aquí significa «un poco de»."
        }
      ],
      vocab: [
        ["chciałbym", "querría; me gustaría (lo dice un hombre)"],
        ["chciałabym", "querría; me gustaría (lo dice una mujer)"],
        ["chciałbyś", "querrías; te gustaría (a un chico)"],
        ["mógłbym", "podría (lo dice un hombre)"],
        ["wolałbym", "preferiría (lo dice un hombre)"],
        ["woleć (wolę, wolisz)", "preferir"],
        ["byłoby", "sería; estaría"],
        ["Byłoby miło.", "Estaría bien; sería un placer."],
        ["chcielibyśmy", "querríamos (grupo con algún hombre)"],
        ["Chciałbym spróbować wszystkiego.", "Me gustaría probarlo todo."],
        ["Chciałbym poznać całą rodzinę.", "Me gustaría conocer a toda la familia."],
        ["Wolałbym herbatę.", "Preferiría té."],
        ["Czy chciałbyś kawy?", "¿Te apetece un café? (a un chico)"],
        ["Czy chciałaby Pani herbaty?", "¿Le apetece un té? (a una señora)"],
        ["napić się (napiję się, napijesz się)", "tomar algo (de beber)"],
        ["Napiłbym się kompotu.", "Me tomaría un kompot."],
        ["Zjadłbym jeszcze kawałek sernika.", "Me comería otro trozo de tarta de queso."],
        ["Chcielibyśmy pójść na spacer.", "Nos gustaría ir a dar un paseo."],
        ["Mama bardzo chciałaby cię poznać.", "Mi madre tiene muchas ganas de conocerte."],
        ["chętnie", "con gusto"]
      ],
      ejercicios: [
        { t: "mc", q: "Quieres decir «me gustaría». Como hombre, dices:", ops: ["chciałbym", "chciałabym", "chcę"], ok: 0 },
        { t: "mc", q: "Ania dice «preferiría». ¿Qué forma usa?", ops: ["wolałabym", "wolałbym", "wolałaby"], ok: 0 },
        { t: "mc", q: "Le ofreces té a la madre de Ania:", ops: ["Czy chciałaby Pani herbaty?", "Czy chciałbyś herbaty?", "Chcesz herbatę?"], ok: 0 },
        { t: "mc", q: "Te invitan a volver en verano. Aceptas con educación:", ops: ["Byłoby miło!", "Byłbym miło!", "Wolałbym herbatę."], ok: 0 },
        { t: "oir", x: "mógłbym", ops: ["mógłbym", "mogłabym", "mógłby"], ok: 0 },
        { t: "orden", es: "Me gustaría probarlo todo.", x: "Chciałbym spróbować wszystkiego." },
        { t: "decir", es: "Preferiría té.", x: "Wolałbym herbatę." },
        { t: "decir", es: "Estaría bien.", x: "Byłoby miło." }
      ]
    },
    {
      id: "pl7-2",
      titulo: "Pedir en la mesa con cortesía",
      min: 55,
      intro: "En Wigilia la mesa es larga y no llegarás a todo. Hoy aprendes a pedir que te pasen las cosas, a pedir más y a decir «ya es suficiente», con la cortesía que esperan sus padres y su abuela.",
      bloques: [
        {
          t: "p",
          x: "Tres niveles, de más a menos formal: *Czy mógłbym prosić o…?* (con cualquiera), *Czy mogłaby Pani / mógłby Pan podać…?* (con los mayores) y *Podasz mi…?* (con Ania y con Piotr). Para repetir de algo, *Poproszę jeszcze…*"
        },
        {
          t: "tabla",
          cab: ["Polaco", "Español", "Con quién"],
          audio: [0],
          filas: [
            ["Czy mógłbym prosić o sól?", "¿Podría pedir la sal?", "Con cualquiera; muy educado"],
            ["Czy mogłaby Pani podać mi chleb?", "¿Podría usted pasarme el pan?", "Con su madre, su abuela, su tía"],
            ["Czy mógłby Pan podać mi sól?", "¿Podría usted pasarme la sal?", "Con su padre, su tío"],
            ["Mogłabyś mi podać wodę?", "¿Podrías pasarme el agua?", "Con Ania"],
            ["Podasz mi wodę?", "¿Me pasas el agua?", "Con Ania, con Piotr"],
            ["Poproszę jeszcze kawałek makowca.", "Otro trozo de makowiec, por favor.", "Con cualquiera"]
          ]
        },
        {
          t: "nota",
          x: "Con *Pani* y *Pan* el verbo va en 3.ª persona: *mogłaby Pani* (ella), *mógłby Pan* (él). Con Ania, *mogłabyś*; con Piotr, *mógłbyś*."
        },
        {
          t: "p",
          x: "Detrás de *prosić o* (pedir) y de *podać* (pasar) va el acusativo. De las cosas de la mesa, solo cambian los femeninos en -a, *woda → wodę*, y la carpa, que es un animal: *karp → karpia* (lección 3). *Sól* es femenino, pero no acaba en -a y no cambia."
        },
        {
          t: "tabla",
          cab: ["Nominativo", "Acusativo (prosić o…, podać…)", "Español"],
          audio: [1],
          filas: [
            ["sól", "sól", "la sal"],
            ["pieprz", "pieprz", "la pimienta"],
            ["chleb", "chleb", "el pan"],
            ["woda", "wodę", "el agua"],
            ["ryba", "rybę", "el pescado"],
            ["łyżka", "łyżkę", "una cuchara"],
            ["serwetka", "serwetkę", "una servilleta"]
          ]
        },
        {
          t: "nota",
          x: "Tras *kawałek* (trozo) o *trochę* (un poco), lo que pides va en genitivo: *kawałek makowca*, *trochę ryby*. Y al ofrecer o pedir «más» de algo, también: *Jeszcze herbaty?*, *Może jeszcze pierogów?*"
        },
        {
          t: "ej",
          items: [
            ["Proszę bardzo.", "Aquí tiene. / Con mucho gusto."],
            ["Oczywiście!", "¡Claro!"],
            ["Proszę się częstować.", "Sírvase, por favor. (te lo dirá la anfitriona)"],
            ["Częstuj się!", "¡Sírvete!"],
            ["Może jeszcze pierogów?", "¿Unos pierogi más?"],
            ["Tylko troszeczkę, dziękuję.", "Solo un poquito, gracias."],
            ["Dziękuję, wystarczy.", "Gracias, ya es suficiente."],
            ["Czy mogę prosić o przepis?", "¿Me podría dar la receta?"]
          ]
        },
        {
          t: "nota",
          x: "Las anfitrionas polacas insisten mucho. Si ya no puedes más, *Dziękuję, wystarczy* con una sonrisa; si insisten, *Tylko troszeczkę*. Y pedir la receta es el mejor elogio que puedes hacerle a la cocinera."
        }
      ],
      vocab: [
        ["Czy mógłbym prosić o sól?", "¿Podría pedir la sal?"],
        ["Czy mogłaby Pani podać mi chleb?", "¿Podría usted pasarme el pan? (a una señora)"],
        ["Czy mógłby Pan podać mi sól?", "¿Podría usted pasarme la sal? (a un señor)"],
        ["Mogłabyś mi podać wodę?", "¿Podrías pasarme el agua? (a una chica)"],
        ["Podasz mi wodę?", "¿Me pasas el agua?"],
        ["podawać / podać", "pasar, servir (algo a alguien)"],
        ["prosić o… (proszę, prosisz)", "pedir algo (+ acusativo)"],
        ["sól (f.)", "sal"],
        ["pieprz", "pimienta"],
        ["łyżka", "cuchara"],
        ["serwetka", "servilleta"],
        ["kawałek", "trozo"],
        ["Poproszę jeszcze kawałek makowca.", "Otro trozo de makowiec, por favor."],
        ["Oczywiście!", "¡Claro!; ¡por supuesto!"],
        ["Może jeszcze pierogów?", "¿Unos pierogi más?"],
        ["Tylko troszeczkę, dziękuję.", "Solo un poquito, gracias."],
        ["Dziękuję, wystarczy.", "Gracias, ya es suficiente."],
        ["Czy mogę prosić o przepis?", "¿Me podría dar la receta?"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "Quieres que la madre de Ania te pase el pan:",
          ops: ["Czy mogłaby Pani podać mi chleb?", "Czy mógłby Pan podać mi chleb?", "Podaj mi chleb!"],
          ok: 0
        },
        { t: "mc", q: "Completa: «Czy mógłbym prosić o ___?» (el agua)", ops: ["wodę", "woda", "wody"], ok: 0 },
        { t: "mc", q: "La abuela te dice «Proszę się częstować». Te está diciendo que…", ops: ["te sirvas", "te sientes", "te vayas"], ok: 0 },
        {
          t: "mc",
          q: "Ya no puedes más y te ofrecen pierogi otra vez. Dices:",
          ops: ["Dziękuję, wystarczy.", "Poproszę jeszcze kawałek.", "Proszę się częstować."],
          ok: 0
        },
        { t: "oir", x: "mogłaby", ops: ["mogłaby", "mógłby", "mogłabyś"], ok: 0 },
        { t: "orden", es: "¿Podría usted pasarme el pan? (a una señora)", x: "Czy mogłaby Pani podać mi chleb?" },
        { t: "decir", es: "¿Podría pedir la sal?", x: "Czy mógłbym prosić o sól?" },
        { t: "decir", es: "¿Me pasas el agua?", x: "Podasz mi wodę?" }
      ]
    },
    {
      id: "pl7-3",
      titulo: "Repaso: los siete casos en singular",
      min: 60,
      intro: "Ya has visto seis casos uno a uno, y hoy llega el séptimo, el vocativo, para llamar a alguien. Los juntas todos en una sola tabla y los practicas con lo que dirás en la mesa: pedir un plato, pasar algo a alguien, preguntar de qué son los pierogi y llamar a cada uno por su nombre.",
      bloques: [
        {
          t: "tabla",
          cab: ["Caso", "Pregunta", "Para qué", "En la mesa"],
          audio: [3],
          filas: [
            ["Nominativo", "kto? co?", "el sujeto; tras «to jest»", "To jest barszcz."],
            ["Genitivo", "kogo? czego?", "negación y cantidad; tras bez, dla, do, od, u, z (= desde)", "Poproszę trochę ryby."],
            ["Dativo", "komu? czemu?", "a quién: dar, pasar, desear", "Podaj babci chleb."],
            ["Acusativo", "kogo? co?", "objeto directo; tras prosić o", "Poproszę karpia."],
            ["Instrumental", "kim? czym?", "con (z), bajo (pod); ser + profesión", "Pierogi z kapustą."],
            ["Locativo", "o kim? o czym?", "tras w, na, o, przy, po", "Co jest w barszczu?"],
            ["Vocativo", "—", "llamar o hablar a alguien", "Babciu, smacznego!"]
          ]
        },
        {
          t: "tabla",
          cab: ["Caso", "karp (m.)", "ryba (f.)", "wino (n.)"],
          audio: [1, 2, 3],
          filas: [
            ["Nominativo", "karp", "ryba", "wino"],
            ["Genitivo", "karpia", "ryby", "wina"],
            ["Dativo", "karpiowi", "rybie", "winu"],
            ["Acusativo", "karpia", "rybę", "wino"],
            ["Instrumental", "karpiem", "rybą", "winem"],
            ["Locativo", "karpiu", "rybie", "winie"],
            ["Vocativo", "karpiu", "rybo", "wino"]
          ]
        },
        {
          t: "nota",
          x: "Masculino de ser vivo (personas y animales; la carpa lo es): el acusativo es igual que el genitivo, *Poproszę karpia*, *Mam brata*. Si no es un ser vivo, el acusativo es igual que el nominativo: *Poproszę barszcz*."
        },
        {
          t: "p",
          x: "Los femeninos en *-ia* (*babcia, ciocia, Ania, Zosia, Basia*) son muy cómodos: *babci* vale para genitivo, dativo y locativo. Acusativo *babcię*, instrumental *babcią*, vocativo *babciu*."
        },
        {
          t: "ej",
          items: [
            ["Babciu!", "¡Abuela!"],
            ["Mamo! Tato!", "¡Mamá! ¡Papá! (lo dirá Ania)"],
            ["Aniu!", "¡Ania!"],
            ["Ciociu Basiu!", "¡Tía Basia!"],
            ["Pani Ewo!", "Ewa (hablándole de usted)"],
            ["Panie Marku!", "Marek (hablándole de usted)"]
          ]
        },
        {
          t: "nota",
          x: "*Pani Ewo* y *Panie Marku* (usted + nombre de pila) son la forma perfecta para hablar a los padres de Ania mientras no te pidan que los tutees: respetuosa, pero cercana."
        },
        {
          t: "ej",
          items: [
            ["Z czym są te pierogi?", "¿De qué son estos pierogi? (instrumental)"],
            ["Z kapustą i grzybami.", "De chucrut y setas."],
            ["W Wigilię nie jemy mięsa.", "En Nochebuena no comemos carne. (genitivo)"],
            ["Dla kogo jest ten prezent?", "¿Para quién es este regalo? (genitivo)"],
            ["Dla babci.", "Para la abuela."],
            ["Komu jeszcze barszczu?", "¿Quién quiere más barszcz? (dativo y genitivo)"],
            ["Siedzę obok babci.", "Estoy sentado al lado de la abuela. (genitivo)"],
            ["Opłatek leży na stole.", "El opłatek está sobre la mesa. (locativo)"],
            ["Aniu, podasz mi sól?", "Ania, ¿me pasas la sal? (vocativo)"]
          ]
        },
        {
          t: "nota",
          x: "*Z* tiene dos caras: con instrumental es «con» (*z kapustą*), con genitivo es «de, desde» (*z Hiszpanii*). En español decimos «pierogi de col», pero en polaco son pierogi «con» col."
        }
      ],
      vocab: [
        ["Poproszę karpia.", "Carpa, por favor."],
        ["Poproszę trochę ryby.", "Un poco de pescado, por favor."],
        ["Z czym są te pierogi?", "¿De qué son estos pierogi?"],
        ["Z kapustą i grzybami.", "De chucrut y setas."],
        ["W Wigilię nie jemy mięsa.", "En Nochebuena no comemos carne."],
        ["Dla kogo jest ten prezent?", "¿Para quién es este regalo?"],
        ["Dla babci.", "Para la abuela."],
        ["Podaj babci chleb, proszę.", "Pásale el pan a la abuela, por favor."],
        ["Komu jeszcze barszczu?", "¿Quién quiere más barszcz?"],
        ["Czego się napijesz?", "¿Qué vas a tomar?"],
        ["Co jest w barszczu?", "¿Qué lleva el barszcz?"],
        ["Siedzę obok babci.", "Estoy sentado al lado de la abuela."],
        ["Babciu!", "¡Abuela! (vocativo)"],
        ["Mamo!", "¡Mamá! (vocativo)"],
        ["Tato!", "¡Papá! (vocativo)"],
        ["Aniu!", "¡Ania! (vocativo)"],
        ["Ciociu!", "¡Tía! (vocativo)"],
        ["Pani Ewo", "Ewa (hablándole de usted; vocativo)"],
        ["Panie Marku", "Marek (hablándole de usted; vocativo)"]
      ],
      ejercicios: [
        { t: "mc", q: "Completa: «Poproszę ___» (karp)", ops: ["karpia", "karp", "karpiem"], ok: 0 },
        { t: "mc", q: "Completa: «Pierogi z ___» (kapusta)", ops: ["kapustą", "kapustę", "kapusty"], ok: 0 },
        { t: "mc", q: "Completa: «Co jest w ___?» (barszcz)", ops: ["barszczu", "barszcz", "barszczem"], ok: 0 },
        { t: "mc", q: "¿Cuál es el vocativo de «babcia»?", ops: ["babciu", "babcię", "babcią"], ok: 0 },
        { t: "mc", q: "En «Podaj babci chleb», «babci» es…", ops: ["dativo: a la abuela", "genitivo: de la abuela", "vocativo: ¡abuela!"], ok: 0 },
        { t: "oir", x: "rybę", ops: ["rybę", "rybą", "ryby"], ok: 0 },
        { t: "orden", es: "¿De qué son estos pierogi?", x: "Z czym są te pierogi?" },
        { t: "decir", es: "Carpa, por favor.", x: "Poproszę karpia." }
      ]
    },
    {
      id: "pl7-4",
      titulo: "Wigilia (1): la estrella, el opłatek y los deseos",
      min: 55,
      intro: "La cena de Nochebuena sigue un guion, y si lo conoces sabrás qué hacer en cada momento: esperar la primera estrella, partir el *opłatek* con cada uno y desearle algo. Hoy aprendes el guion y los deseos que vas a decir y a oír.",
      bloques: [
        {
          t: "tabla",
          cab: ["Polaco", "Español", "Qué es"],
          audio: [0],
          filas: [
            ["kolacja wigilijna", "la cena de Nochebuena", "El 24 al anochecer, sin carne."],
            ["biały obrus", "el mantel blanco", "La mesa se viste de blanco."],
            ["sianko pod obrusem", "heno bajo el mantel", "Recuerda el pesebre de Belén."],
            ["dodatkowe nakrycie", "un cubierto de más", "Para un invitado inesperado."],
            ["pierwsza gwiazdka", "la primera estrella", "Cuando sale, empieza la cena."],
            ["dzielenie się opłatkiem", "partir el opłatek", "Antes de cenar, con cada uno."],
            ["życzenia", "los buenos deseos", "Se dicen al partir el opłatek."]
          ]
        },
        {
          t: "p",
          x: "El orden: se pone la mesa con heno bajo el mantel y un cubierto de más. Al anochecer, todos buscan por la ventana la primera estrella. Entonces el anfitrión o el mayor lee a veces el Evangelio del nacimiento y empieza el *opłatek*. Después, la cena, los regalos y los villancicos."
        },
        {
          t: "nota",
          x: "El opłatek, paso a paso: cada uno tiene su oblea. Te acercas a alguien, partes un trocito de la suya y él de la tuya, os deseáis algo, os coméis el trocito y os dais un abrazo o un beso. Y así con todos. No hace falta un discurso: dos o tres deseos y una sonrisa."
        },
        {
          t: "ej",
          items: [
            ["Wszystkiego dobrego!", "¡Que te vaya todo bien!"],
            ["Zdrowia, szczęścia, pomyślności!", "¡Salud, felicidad y prosperidad!"],
            ["Spełnienia marzeń!", "¡Que se cumplan tus sueños!"],
            ["Dużo zdrowia!", "¡Mucha salud!"],
            ["Zdrowych, spokojnych świąt!", "¡Felices fiestas, con salud y paz!"],
            ["Żebyśmy za rok spotkali się w tym samym gronie.", "Que el año que viene volvamos a reunirnos todos."],
            ["Nawzajem!", "¡Igualmente!"],
            ["Dziękuję, wzajemnie.", "Gracias, igualmente."]
          ]
        },
        {
          t: "nota",
          x: "*Życzyć* (desear) pide dativo para la persona y genitivo para lo deseado: *Życzę Pani* (a usted, señora) *zdrowia* (salud). Por eso los deseos sueltos van en genitivo: *Zdrowia!* (de *zdrowie*), *Szczęścia!* (de *szczęście*), *Spełnienia marzeń!*"
        },
        {
          t: "ej",
          items: [
            ["Życzę Pani zdrowia i szczęścia.", "Le deseo salud y felicidad. (a una señora)"],
            ["Życzę Panu dużo zdrowia.", "Le deseo mucha salud. (a un señor)"],
            ["Życzę ci wszystkiego najlepszego.", "Te deseo todo lo mejor."],
            ["Życzę ci miłości i spokoju.", "Te deseo amor y paz. (a Ania)"]
          ]
        },
        {
          t: "nota",
          x: "En muchas casas la cena de Wigilia es sin alcohol y se bebe *kompot*; los brindis llegan el día 25. Pregúntale a tu chica cómo es en la suya."
        }
      ],
      vocab: [
        ["kolacja wigilijna", "la cena de Nochebuena"],
        ["pierwsza gwiazdka", "la primera estrella (de Nochebuena)"],
        ["sianko pod obrusem", "heno bajo el mantel"],
        ["obrus", "mantel"],
        ["dodatkowe nakrycie", "un cubierto de más"],
        ["niespodziewany gość", "invitado inesperado"],
        ["dzielić się opłatkiem", "compartir el opłatek"],
        ["składać / złożyć życzenia", "felicitar; expresar buenos deseos"],
        ["życzyć (+ dativo + genitivo)", "desear (algo a alguien)"],
        ["szczęście", "felicidad; suerte"],
        ["Zdrowia, szczęścia, pomyślności!", "¡Salud, felicidad y prosperidad!"],
        ["Spełnienia marzeń!", "¡Que se cumplan tus sueños!"],
        ["Zdrowych, spokojnych świąt!", "¡Felices fiestas, con salud y paz!"],
        ["Życzę Pani zdrowia i szczęścia.", "Le deseo salud y felicidad (a una señora)."],
        ["Życzę Panu dużo zdrowia.", "Le deseo mucha salud (a un señor)."],
        ["Życzę ci wszystkiego najlepszego.", "Te deseo todo lo mejor."],
        ["Żebyśmy za rok spotkali się w tym samym gronie.", "Que el año que viene volvamos a reunirnos todos."]
      ],
      ejercicios: [
        { t: "mc", q: "¿Cuándo empieza la cena de Wigilia?", ops: ["Cuando sale la primera estrella", "A medianoche", "Después de abrir los regalos"], ok: 0 },
        { t: "mc", q: "¿Para quién es el *dodatkowe nakrycie*?", ops: ["Para un invitado inesperado", "Para el cura", "Para el perro"], ok: 0 },
        { t: "mc", q: "Te dicen «Zdrowych, spokojnych świąt!». Respondes:", ops: ["Dziękuję, nawzajem!", "Smacznego!", "Nie ma za co."], ok: 0 },
        { t: "mc", q: "Completa: «Życzę Pani ___» (salud)", ops: ["zdrowia", "zdrowie", "zdrowiem"], ok: 0 },
        { t: "oir", x: "życzenia", ops: ["życzenia", "jedzenia", "marzenia"], ok: 0 },
        { t: "orden", es: "Le deseo salud y felicidad (a una señora).", x: "Życzę Pani zdrowia i szczęścia." },
        { t: "decir", es: "¡Igualmente!", x: "Nawzajem!" },
        { t: "decir", es: "¡Que se cumplan tus sueños!", x: "Spełnienia marzeń!" }
      ]
    },
    {
      id: "pl7-5",
      titulo: "Wigilia (2): los doce platos",
      min: 55,
      intro: "Doce platos sin carne, y la tradición dice que hay que probarlos todos. Hoy aprendes cómo se llama cada uno y qué lleva, para saber qué te sirven, pedirlo por su nombre y elogiarlo.",
      bloques: [
        {
          t: "p",
          x: "Doce platos, como los doce apóstoles o los doce meses, y ninguno lleva carne: es día de vigilia, como el Viernes Santo en España (*Wigilia* y «vigilia» son la misma palabra). Cada familia tiene su lista; esta es muy típica."
        },
        {
          t: "tabla",
          cab: ["Plato", "Qué es"],
          audio: [0],
          filas: [
            ["barszcz z uszkami", "caldo de remolacha con «orejitas»: raviolis pequeños de setas"],
            ["zupa grzybowa", "sopa de setas"],
            ["pierogi z kapustą i grzybami", "pierogi de chucrut y setas"],
            ["karp", "carpa, frita o en gelatina"],
            ["ryba po grecku", "pescado frito bajo verduras ralladas con tomate"],
            ["śledzie", "arenques, en aceite o con nata agria"],
            ["kapusta z grochem", "chucrut con guisantes secos"],
            ["kutia", "trigo cocido con amapola, miel y frutos secos"],
            ["makowiec", "rollo dulce relleno de semillas de amapola"],
            ["sernik", "tarta de queso"],
            ["piernik", "bizcocho de miel y especias"],
            ["kompot z suszu", "bebida de frutas secas (ciruela, manzana, pera)"]
          ]
        },
        {
          t: "nota",
          x: "*Z* + instrumental es «con»: *barszcz z uszkami*, *kapusta z grochem*. *Z* + genitivo es «de» en el sentido de «hecho de»: *kompot z suszu* (de fruta seca). Y a veces el «de» español es un adjetivo: *zupa grzybowa* (de *grzyby*, setas)."
        },
        {
          t: "ej",
          items: [
            ["Z czego się robi kutię?", "¿Con qué se hace la kutia?"],
            ["Z pszenicy, maku i miodu.", "Con trigo, amapola y miel."],
            ["Muszę spróbować każdej potrawy.", "Tengo que probar cada plato."],
            ["Jeszcze nigdy nie jadłem karpia.", "Nunca he comido carpa."],
            ["Uważaj na ości!", "¡Cuidado con las espinas!"],
            ["Barszcz jest pyszny!", "¡El barszcz está buenísimo!"],
            ["Ta zupa jest pyszna.", "Esta sopa está buenísima."],
            ["Pierogi są pyszne.", "Los pierogi están buenísimos."]
          ]
        },
        {
          t: "nota",
          x: "El elogio concuerda con el plato: *pyszny* con masculino (*barszcz, karp, sernik*), *pyszna* con femenino (*zupa, kutia, ryba*) y *pyszne* con neutro y con plurales como *pierogi* o *śledzie*."
        },
        {
          t: "nota",
          x: "Dos costumbres: probar todos los platos trae suerte para todo el año, y una escama de la carpa (*łuska*) guardada en la cartera hace que no falte el dinero."
        }
      ],
      vocab: [
        ["potrawa", "plato (comida)"],
        ["zupa grzybowa", "sopa de setas"],
        ["pierogi z kapustą i grzybami", "pierogi de chucrut y setas"],
        ["ryba po grecku", "pescado a la griega"],
        ["śledź (m.), śledzie", "arenque, arenques"],
        ["kapusta z grochem", "chucrut con guisantes secos"],
        ["kutia", "kutia (trigo, amapola, miel y frutos secos)"],
        ["makowiec", "rollo dulce de amapola"],
        ["kompot z suszu", "bebida de frutas secas"],
        ["mak", "semillas de amapola"],
        ["grzyby", "setas"],
        ["ość (f.)", "espina (de pescado)"],
        ["Uważaj na ości!", "¡Cuidado con las espinas!"],
        ["pyszny, pyszna, pyszne", "buenísimo, buenísima"],
        ["Muszę spróbować każdej potrawy.", "Tengo que probar cada plato."],
        ["Jeszcze nigdy nie jadłem karpia.", "Nunca he comido carpa."],
        ["Z czego się robi kutię?", "¿Con qué se hace la kutia?"]
      ],
      ejercicios: [
        { t: "mc", q: "¿Qué es el *makowiec*?", ops: ["Un dulce de semillas de amapola", "Una sopa de setas", "Un pescado frito"], ok: 0 },
        { t: "mc", q: "En el *barszcz z uszkami*, los *uszka* son…", ops: ["raviolis pequeños de setas", "orejas de cerdo", "trozos de pan"], ok: 0 },
        { t: "mc", q: "Completa: «Muszę spróbować każdej ___»", ops: ["potrawy", "potrawę", "potrawą"], ok: 0 },
        { t: "mc", q: "Completa: «Ta zupa jest ___!»", ops: ["pyszna", "pyszny", "pyszne"], ok: 0 },
        { t: "oir", x: "piernik", ops: ["piernik", "sernik", "pierogi"], ok: 0 },
        { t: "orden", es: "Nunca he comido carpa.", x: "Jeszcze nigdy nie jadłem karpia." },
        { t: "decir", es: "sopa de setas", x: "zupa grzybowa" },
        { t: "decir", es: "Tengo que probar cada plato.", x: "Muszę spróbować każdej potrawy." }
      ]
    },
    {
      id: "pl7-6",
      titulo: "Árbol, regalos y villancicos… y la Navidad en España",
      min: 55,
      intro: "Después de la cena llegan los regalos y los villancicos; a medianoche, la misa del gallo; y luego dos días de fiesta. Hoy aprendes ese vocabulario y a contar cómo es la Navidad en España, porque te lo van a preguntar seguro.",
      bloques: [
        {
          t: "tabla",
          cab: ["Polaco", "Español"],
          audio: [0],
          filas: [
            ["Boże Narodzenie", "Navidad (el día 25)"],
            ["święta", "las fiestas (de Navidad)"],
            ["choinka", "el árbol de Navidad"],
            ["bombki", "las bolas del árbol"],
            ["prezenty pod choinką", "los regalos bajo el árbol"],
            ["Mikołaj", "Papá Noel (San Nicolás)"],
            ["Gwiazdor", "el Papá Noel de Wielkopolska y el norte"],
            ["kolędy", "los villancicos"],
            ["pasterka", "la misa del gallo"],
            ["pierwszy dzień świąt", "el día de Navidad (25)"],
            ["drugi dzień świąt", "el 26 de diciembre (San Esteban)"]
          ]
        },
        {
          t: "nota",
          x: "Quién trae los regalos depende de la región: *Mikołaj* en casi todo el país (y además el 6 de diciembre, en *mikołajki*); *Gwiazdor* en Wielkopolska (Poznań) y el norte; *Dzieciątko* (el Niño Jesús) en Silesia; y en Małopolska, la región de Cracovia, tradicionalmente el *Aniołek* (el angelito)."
        },
        {
          t: "p",
          x: "*Święta* (las fiestas) es una palabra en plural, y así se declina: *Wesołych Świąt!* (genitivo), *na święta* (para las fiestas), *w święta* (en fiestas), *po świętach* (después de las fiestas)."
        },
        {
          t: "ej",
          items: [
            ["Kiedy ubieracie choinkę?", "¿Cuándo decoráis el árbol?"],
            ["Prezenty są pod choinką.", "Los regalos están bajo el árbol."],
            ["Co dostałeś na Gwiazdkę?", "¿Qué te han regalado por Navidad? (a un chico)"],
            ["Po kolacji śpiewamy kolędy.", "Después de cenar cantamos villancicos."],
            ["O północy idziemy na pasterkę.", "A medianoche vamos a la misa del gallo."],
            ["W drugi dzień świąt idziemy na spacer.", "El día 26 salimos a pasear."]
          ]
        },
        { t: "p", x: "Y ahora tú: cómo es la Navidad en España. En la mesa te lo preguntarán seguro." },
        {
          t: "ej",
          items: [
            ["W Hiszpanii Wigilia to Nochebuena.", "En España, la Wigilia es la Nochebuena."],
            ["W Wigilię jemy mięso i owoce morza.", "En Nochebuena comemos carne y marisco."],
            ["W sylwestra o północy jemy dwanaście winogron.", "En Nochevieja, a medianoche, comemos doce uvas."],
            ["W Hiszpanii prezenty przynoszą Trzej Królowie.", "En España los regalos los traen los Reyes Magos."],
            ["Dzieci dostają prezenty szóstego stycznia.", "Los niños reciben los regalos el 6 de enero."],
            ["Na Trzech Króli jemy roscón, ciasto z niespodzianką w środku.", "El día de Reyes comemos roscón, un bollo con sorpresa dentro."]
          ]
        },
        {
          t: "nota",
          x: "Las fechas van en genitivo, con el ordinal: *szóstego stycznia* (el 6 de enero), *dwudziestego czwartego grudnia* (el 24 de diciembre). Y la fiesta de Reyes se llama *Trzech Króli* («de los Tres Reyes»)."
        }
      ],
      vocab: [
        ["Boże Narodzenie", "Navidad"],
        ["święta (pl.)", "las fiestas (de Navidad)"],
        ["bombka", "bola del árbol de Navidad"],
        ["prezenty pod choinką", "los regalos bajo el árbol"],
        ["Mikołaj", "Papá Noel; San Nicolás"],
        ["Gwiazdor", "Papá Noel (en Wielkopolska y el norte)"],
        ["śpiewać kolędy", "cantar villancicos"],
        ["pasterka", "misa del gallo"],
        ["o północy", "a medianoche"],
        ["pierwszy dzień świąt", "el día de Navidad (25 de diciembre)"],
        ["drugi dzień świąt", "el 26 de diciembre"],
        ["Co dostałeś na Gwiazdkę?", "¿Qué te han regalado por Navidad?"],
        ["w sylwestra", "en Nochevieja"],
        ["W sylwestra o północy jemy dwanaście winogron.", "En Nochevieja, a medianoche, comemos doce uvas."],
        ["Trzej Królowie", "los Reyes Magos"],
        ["na Trzech Króli", "el día de Reyes"],
        ["W Hiszpanii prezenty przynoszą Trzej Królowie.", "En España los regalos los traen los Reyes Magos."]
      ],
      ejercicios: [
        { t: "mc", q: "¿Qué es la *pasterka*?", ops: ["La misa del gallo", "Un villancico", "Un dulce de Navidad"], ok: 0 },
        { t: "mc", q: "«Drugi dzień świąt» es…", ops: ["el 26 de diciembre", "el 24 de diciembre", "el 6 de enero"], ok: 0 },
        { t: "mc", q: "¿Cómo se dice «los Reyes Magos»?", ops: ["Trzej Królowie", "Trzej Mikołaje", "Trzy Gwiazdki"], ok: 0 },
        { t: "oir", x: "bombki", ops: ["bombki", "bułki", "bramki"], ok: 0 },
        { t: "orden", es: "En Nochevieja, a medianoche, comemos doce uvas.", x: "W sylwestra o północy jemy dwanaście winogron." },
        { t: "orden", es: "A medianoche vamos a la misa del gallo.", x: "O północy idziemy na pasterkę." },
        { t: "decir", es: "Cantamos villancicos.", x: "Śpiewamy kolędy." },
        { t: "decir", es: "los regalos bajo el árbol", x: "prezenty pod choinką" }
      ]
    },
    {
      id: "pl7-7",
      titulo: "Repaso y diálogo: a la mesa en Nochebuena",
      min: 45,
      intro: "La semana entera en una escena: la primera estrella, el *opłatek*, pedir que te pasen los platos y contar cómo es la Navidad en España. Escucha cada línea, repítela en voz alta y luego haz los ejercicios.",
      bloques: [
        { t: "p", x: "Escena: 24 de diciembre en casa de Ania. A la mesa, Ewa y Marek, la abuela Zosia, Piotr, la tía Basia, el tío Janek, Ola, Ania y tú." },
        {
          t: "ej",
          items: [
            ["Patrzcie, pierwsza gwiazdka!", "Piotr: ¡Mirad, la primera estrella!"],
            ["To siadamy do stołu. Najpierw opłatek.", "Ewa: Pues a la mesa. Primero, el opłatek."],
            ["Pablo, życzę ci zdrowia, szczęścia i żebyś szybko nauczył się polskiego!", "Abuela: Pablo, te deseo salud, felicidad ¡y que aprendas polaco muy pronto!"],
            ["Dziękuję bardzo! A ja życzę Pani wszystkiego dobrego.", "Pablo: ¡Muchas gracias! Y yo le deseo que todo le vaya bien."],
            ["Pablo, napijesz się kompotu?", "Marek: Pablo, ¿te tomas un kompot?"],
            ["Tak, poproszę. Chętnie spróbuję.", "Pablo: Sí, por favor. Lo probaré con gusto."],
            ["Czy mogłaby Pani podać mi pierogi?", "Pablo, a la abuela: ¿Podría pasarme los pierogi?"],
            ["Proszę bardzo. Są z kapustą i grzybami.", "Abuela: Aquí tienes. Son de chucrut y setas."],
            ["Wyglądają pysznie!", "Pablo: ¡Tienen una pinta buenísima!"],
            ["Spróbuj karpia. Tylko uważaj na ości!", "Piotr: Prueba la carpa. ¡Pero cuidado con las espinas!"],
            ["Jeszcze nigdy nie jadłem karpia. Jest pyszny!", "Pablo: Nunca había comido carpa. ¡Está buenísima!"],
            ["A jak wygląda Wigilia w Hiszpanii?", "Abuela: ¿Y cómo es la Nochebuena en España?"],
            ["Jemy mięso i owoce morza, a prezenty przynoszą Trzej Królowie.", "Pablo: Comemos carne y marisco, y los regalos los traen los Reyes Magos."],
            ["Trzej Królowie? Jak ładnie!", "Abuela: ¿Los Reyes Magos? ¡Qué bonito!"],
            ["Może jeszcze kawałek makowca?", "Ewa: ¿Un trozo más de makowiec?"],
            ["Dziękuję, wystarczy. Wszystko było pyszne!", "Pablo: Gracias, ya es suficiente. ¡Estaba todo buenísimo!"],
            ["To teraz prezenty i kolędy!", "Marek: ¡Y ahora, regalos y villancicos!"]
          ]
        },
        {
          t: "nota",
          x: "Fíjate en los registros: la abuela, Ewa y Marek te tutean (*ci, napijesz się*), y tú a la abuela le hablas de usted (*Pani*). A Ewa y Marek, de usted (*Pani, Pan*) solo hasta que te digan *Mów mi Ewa* (llámame Ewa). Con Piotr y con Ania, de tú."
        },
        {
          t: "p",
          x: "Lo esencial de la semana: *chciałbym, mógłbym, wolałbym*; *prosić o* + acusativo; *życzyć* + dativo + genitivo; *z* + instrumental (con); y los vocativos *Pani Ewo, Babciu, Aniu*."
        }
      ],
      vocab: [
        ["Patrzcie, pierwsza gwiazdka!", "¡Mirad, la primera estrella!"],
        ["Siadamy do stołu.", "Nos sentamos a la mesa."],
        ["Żebyś szybko nauczył się polskiego!", "¡Que aprendas polaco pronto!"],
        ["A ja życzę Pani wszystkiego dobrego.", "Y yo le deseo que todo le vaya bien (a una señora)."],
        ["Napijesz się kompotu?", "¿Te tomas un kompot?"],
        ["Tak, poproszę.", "Sí, por favor."],
        ["Wyglądają pysznie!", "¡Tienen una pinta buenísima!"],
        ["wyglądać", "parecer, tener aspecto; «jak wygląda…?» = ¿cómo es…?"],
        ["Spróbuj karpia!", "¡Prueba la carpa!"],
        ["Jak wygląda Wigilia w Hiszpanii?", "¿Cómo es la Nochebuena en España?"],
        ["owoce morza", "marisco"],
        ["Jak ładnie!", "¡Qué bonito!"],
        ["Może jeszcze kawałek?", "¿Otro trocito?"],
        ["Wszystko było pyszne!", "¡Estaba todo buenísimo!"],
        ["To teraz prezenty!", "¡Y ahora, los regalos!"]
      ],
      ejercicios: [
        {
          t: "mc",
          q: "La abuela te desea salud y felicidad. Le contestas:",
          ops: ["Dziękuję bardzo! A ja życzę Pani wszystkiego dobrego.", "Dziękuję, wystarczy.", "Proszę się częstować."],
          ok: 0
        },
        { t: "mc", q: "Marek te pregunta «Napijesz się kompotu?». Te ofrece…", ops: ["algo de beber", "un trozo de pastel", "un regalo"], ok: 0 },
        {
          t: "mc",
          q: "Piotr dice «Uważaj na ości!». ¿Por qué?",
          ops: ["La carpa tiene muchas espinas.", "La sopa quema.", "El perro está debajo de la mesa."],
          ok: 0
        },
        { t: "mc", q: "¿Cómo le hablas a la abuela de Ania?", ops: ["De usted: «Pani»", "De tú: «ty»", "Con su diminutivo: «Zosiu»"], ok: 0 },
        { t: "oir", x: "wystarczy", ops: ["wystarczy", "wszystkiego", "wyglądają"], ok: 0 },
        { t: "orden", es: "¿Cómo es la Nochebuena en España?", x: "Jak wygląda Wigilia w Hiszpanii?" },
        { t: "decir", es: "¡Estaba todo buenísimo!", x: "Wszystko było pyszne!" },
        { t: "decir", es: "¿Podría pasarme los pierogi? (a una señora)", x: "Czy mogłaby Pani podać mi pierogi?" }
      ]
    }
  ],
  lecturas: [
    {
      id: "pl7-r1",
      titulo: "Wigilia u nas (Nochebuena en casa de Ania)",
      nivel: "A2",
      texto: "Pablo, pytałeś, jak wygląda u nas Wigilia. Opowiem ci po kolei.\n\nRano wszyscy mają dużo pracy. Tata i Piotr ubierają choinkę, a mama i babcia gotują. Ja nakrywam do stołu. Najpierw kładę na stole trochę sianka, a na nie biały obrus. Sianko przypomina nam, że Jezus urodził się w stajence. Potem stawiam jedno dodatkowe nakrycie dla niespodziewanego gościa.\n\nKiedy robi się ciemno, wszyscy patrzymy w okno i czekamy na pierwszą gwiazdkę. Kiedy byliśmy mali, Piotr zawsze widział ją pierwszy. Potem tata czyta fragment Ewangelii i łamiemy się opłatkiem. Każdy podchodzi do każdego i składa mu życzenia. Nie musisz mówić dużo. Wystarczy: «Zdrowia, szczęścia, wszystkiego dobrego!».\n\nPotem siadamy do kolacji. Jest dwanaście potraw i nie ma mięsa. Kolacja trwa długo, więc w ciągu dnia jemy niewiele. Po kolacji szukamy prezentów pod choinką. Babcia zawsze mówi, że przyniósł je Aniołek. Potem śpiewamy kolędy. Babcia mówi też, że o północy zwierzęta mówią ludzkim głosem. Burek na razie milczy!\n\nU nas mówi się: «Jaka Wigilia, taki cały rok». W tym roku będziesz z nami, więc rok będzie dobry. Babcia bardzo chciałaby cię już poznać!",
      traduccion: "Pablo, me preguntaste cómo es la Nochebuena en nuestra casa. Te lo cuento por orden.\n\nPor la mañana todos tienen mucho trabajo. Papá y Piotr decoran el árbol, y mamá y la abuela cocinan. Yo pongo la mesa. Primero pongo sobre la mesa un poco de heno y, encima, el mantel blanco. El heno nos recuerda que Jesús nació en un establo. Después pongo un cubierto de más para un invitado inesperado.\n\nCuando oscurece, todos miramos por la ventana y esperamos la primera estrella. Cuando éramos pequeños, Piotr siempre la veía el primero. Luego papá lee un fragmento del Evangelio y partimos el opłatek. Cada uno se acerca a todos los demás y les desea cosas buenas. No tienes que decir mucho. Basta con: «¡Salud, felicidad y que todo te vaya bien!».\n\nDespués nos sentamos a cenar. Hay doce platos y no hay carne. La cena dura mucho, así que durante el día comemos poco. Después de cenar buscamos los regalos bajo el árbol. La abuela siempre dice que los ha traído el Angelito. Luego cantamos villancicos. La abuela dice también que a medianoche los animales hablan con voz humana. ¡Burek, de momento, no dice nada!\n\nAquí se dice: «Como sea la Nochebuena, así será todo el año». Este año estarás con nosotros, así que el año será bueno. ¡La abuela tiene muchísimas ganas de conocerte!",
      glosa: {
        pablo: "Pablo (nombre)",
        "pytałeś": "preguntaste (pytać; pasado, tú, masc.)",
        jak: "cómo",
        "wygląda": "es, tiene aspecto (wyglądać); «jak wygląda» = cómo es",
        u: "en casa de; «u nas» = en nuestra casa, aquí",
        nas: "nosotros (genitivo de my)",
        wigilia: "Nochebuena",
        opowiem: "contaré (opowiedzieć; futuro)",
        ci: "te, a ti (dativo)",
        po: "después de (+ locativo); «po kolei» = por orden",
        kolei: "turno, orden («po kolei» = por orden)",
        rano: "por la mañana",
        wszyscy: "todos",
        "mają": "tienen (mieć)",
        "dużo": "mucho (+ genitivo)",
        pracy: "trabajo (genitivo de praca, tras «dużo»)",
        tata: "papá",
        i: "y",
        piotr: "Piotr (nombre; hermano de Ania)",
        "ubierają": "decoran (ubierać); «ubierać choinkę» = decorar el árbol",
        "choinkę": "árbol de Navidad (acusativo de choinka)",
        a: "y, mientras que",
        mama: "mamá",
        babcia: "abuela",
        "gotują": "cocinan (gotować)",
        ja: "yo",
        nakrywam: "pongo (nakrywać); «nakrywać do stołu» = poner la mesa",
        do: "a, hacia (+ genitivo)",
        "stołu": "mesa (genitivo de stół)",
        najpierw: "primero",
        "kładę": "pongo, coloco (kłaść)",
        na: "en, sobre; a",
        stole: "mesa (locativo de stół)",
        "trochę": "un poco (+ genitivo)",
        sianka: "heno (genitivo de sianko, tras «trochę»)",
        nie: "no; tras preposición, «ello»: «na nie» = encima (del heno)",
        "biały": "blanco",
        obrus: "mantel",
        sianko: "heno (diminutivo de siano)",
        przypomina: "recuerda (przypominać)",
        nam: "nos, a nosotros (dativo)",
        "że": "que",
        jezus: "Jesús",
        "urodził": "nació (urodzić się; pasado, él)",
        "się": "se (reflexivo)",
        w: "en",
        stajence: "establo, portal (locativo de stajenka)",
        potem: "después, luego",
        stawiam: "pongo, coloco (stawiać)",
        jedno: "uno (neutro)",
        dodatkowe: "adicional, de más (neutro)",
        nakrycie: "cubierto, servicio de mesa",
        dla: "para (+ genitivo)",
        niespodziewanego: "inesperado (genitivo masc.)",
        "gościa": "invitado (genitivo de gość, tras «dla»)",
        kiedy: "cuando",
        robi: "hace (robić); «robi się ciemno» = oscurece",
        ciemno: "oscuro",
        patrzymy: "miramos (patrzeć); «patrzeć w okno» = mirar por la ventana",
        okno: "ventana (acusativo)",
        czekamy: "esperamos (czekać na + acusativo)",
        "pierwszą": "primera (acusativo fem.)",
        "gwiazdkę": "estrellita (acusativo de gwiazdka)",
        "byliśmy": "éramos (być; pasado, nosotros)",
        mali: "pequeños (masc. personal plural)",
        zawsze: "siempre",
        "widział": "veía (widzieć; pasado, él)",
        "ją": "la (acusativo de ona)",
        pierwszy: "el primero",
        czyta: "lee (czytać)",
        fragment: "fragmento",
        ewangelii: "Evangelio (genitivo de Ewangelia)",
        "łamiemy": "partimos (łamać); «łamać się opłatkiem» = partir el opłatek con alguien",
        "opłatkiem": "oblea (instrumental de opłatek)",
        "każdy": "cada uno",
        podchodzi: "se acerca (podchodzić)",
        "każdego": "cada uno (genitivo, tras «do»)",
        "składa": "presenta (składać); «składać życzenia» = felicitar",
        mu: "le, a él (dativo)",
        "życzenia": "buenos deseos (acusativo plural)",
        musisz: "tienes que (musieć)",
        "mówić": "decir, hablar",
        wystarczy: "basta, es suficiente",
        zdrowia: "salud (genitivo de zdrowie: lo que se desea va en genitivo)",
        "szczęścia": "felicidad (genitivo de szczęście)",
        wszystkiego: "todo (genitivo de wszystko)",
        dobrego: "bueno (genitivo); «wszystkiego dobrego» = que todo te vaya bien",
        siadamy: "nos sentamos (siadać)",
        kolacji: "cena (kolacja: genitivo tras «do», locativo tras «po»; misma forma)",
        jest: "hay; es",
        "dwanaście": "doce",
        potraw: "platos (genitivo plural de potrawa, tras número)",
        ma: "tiene; «nie ma» = no hay",
        "mięsa": "carne (genitivo de mięso, tras «nie ma»)",
        kolacja: "cena",
        trwa: "dura (trwać)",
        "długo": "mucho tiempo",
        "więc": "así que",
        "ciągu": "«w ciągu» = durante (+ genitivo)",
        dnia: "día (genitivo de dzień)",
        jemy: "comemos (jeść)",
        niewiele: "poco",
        szukamy: "buscamos (szukać + genitivo)",
        "prezentów": "regalos (genitivo plural de prezent, tras «szukać»)",
        pod: "debajo de (+ instrumental)",
        "choinką": "árbol de Navidad (instrumental de choinka, tras «pod»)",
        "mówi": "dice (mówić); «mówi się» = se dice",
        "przyniósł": "trajo (przynieść; pasado, él)",
        je: "los (acusativo plural: los regalos)",
        "aniołek": "angelito (en Małopolska trae los regalos)",
        "śpiewamy": "cantamos (śpiewać)",
        "kolędy": "villancicos (acusativo plural de kolęda)",
        "też": "también",
        o: "a (hora); «o północy» = a medianoche",
        "północy": "medianoche (locativo de północ)",
        "zwierzęta": "animales",
        "mówią": "hablan (mówić)",
        ludzkim: "humana (instrumental de ludzki)",
        "głosem": "voz (instrumental de głos)",
        burek: "Burek (el perro)",
        razie: "«na razie» = de momento",
        milczy: "calla, no dice nada (milczeć)",
        jaka: "cual, como (fem.)",
        taki: "tal, así (masc.)",
        "cały": "todo, entero",
        rok: "año",
        tym: "este (locativo); «w tym roku» = este año",
        roku: "año (locativo de rok)",
        "będziesz": "estarás (być; futuro, tú)",
        z: "con (+ instrumental)",
        nami: "nosotros (instrumental; «z nami» = con nosotros)",
        "będzie": "será (być; futuro)",
        dobry: "bueno",
        bardzo: "mucho, muy",
        "chciałaby": "querría (chcieć; condicional, ella)",
        "cię": "te (acusativo)",
        "już": "ya",
        "poznać": "conocer"
      },
      preguntas: [
        { q: "¿Qué pone Ania debajo del mantel?", ops: ["Heno", "Los regalos", "El opłatek"], ok: 0 },
        { q: "¿Para quién es el cubierto de más?", ops: ["Para un invitado inesperado", "Para Pablo", "Para Burek"], ok: 0 },
        { q: "¿Qué esperan todos mirando por la ventana?", ops: ["La primera estrella", "A los invitados", "La nieve"], ok: 0 },
        { q: "Según la abuela, ¿qué pasa a medianoche?", ops: ["Los animales hablan con voz humana", "Llega Mikołaj", "Empieza a nevar"], ok: 0 }
      ],
      notas: "*Łamać się opłatkiem* es lo mismo que *dzielić się opłatkiem*: partir la oblea con alguien. *Jaka Wigilia, taki cały rok* es un refrán: como pases la Nochebuena, así pasarás el año."
    },
    {
      id: "pl7-r2",
      titulo: "Dwanaście potraw (los doce platos)",
      nivel: "A2",
      texto: "— Aniu, co będziemy jeść w Wigilię? Chciałbym wiedzieć wcześniej.\n— Dwanaście potraw! Najpierw barszcz z uszkami. Uszka to małe pierożki z grzybami.\n— A zupa grzybowa też będzie?\n— Tak, babcia gotuje ją z grzybów, które sami zbieramy w lesie. Potem są pierogi z kapustą i grzybami, kapusta z grochem i śledzie, w oleju i w śmietanie.\n— A ryba?\n— Karp, oczywiście, i ryba po grecku. Kiedy byłam mała, karp przez dwa dni pływał w wannie. Teraz mama kupuje gotowe filety. Tylko uważaj na ości!\n— A na deser?\n— Kutia babci: pszenica, mak, miód i orzechy. I ciasta: makowiec, sernik i piernik.\n— Co to jest piernik?\n— Ciasto z miodem i przyprawami, na przykład z cynamonem. Pachnie świętami! A do picia jest kompot z suszu, czyli z suszonych owoców.\n— To bardzo dużo jedzenia! Nie dam rady zjeść wszystkiego.\n— Nie musisz wszystkiego zjeść. Ale trzeba spróbować każdej potrawy, bo to przynosi szczęście na cały rok. A łuskę karpia włóż do portfela, to nie zabraknie ci pieniędzy.\n— Dobrze, spróbuję wszystkiego. A czy mógłbym pomóc w kuchni?\n— Mama na pewno by się ucieszyła!",
      traduccion: "— Ania, ¿qué vamos a comer en Nochebuena? Me gustaría saberlo antes.\n— ¡Doce platos! Primero, barszcz con uszka. Los uszka son pierogi pequeñitos de setas.\n— ¿Y también habrá sopa de setas?\n— Sí, la abuela la hace con setas que recogemos nosotros mismos en el bosque. Luego hay pierogi de chucrut y setas, chucrut con guisantes y arenques, en aceite y con nata.\n— ¿Y pescado?\n— Carpa, por supuesto, y pescado a la griega. Cuando yo era pequeña, la carpa pasaba dos días nadando en la bañera. Ahora mamá compra los filetes ya preparados. ¡Pero cuidado con las espinas!\n— ¿Y de postre?\n— La kutia de la abuela: trigo, amapola, miel y nueces. Y pasteles: makowiec, tarta de queso y piernik.\n— ¿Qué es el piernik?\n— Un bizcocho con miel y especias, por ejemplo canela. ¡Huele a Navidad! Y para beber hay kompot z suszu, es decir, de frutas secas.\n— ¡Eso es muchísima comida! No podré comérmelo todo.\n— No tienes que comértelo todo. Pero hay que probar cada plato, porque trae suerte para todo el año. Y mete una escama de la carpa en la cartera: así no te faltará dinero.\n— Vale, lo probaré todo. ¿Y podría ayudar en la cocina?\n— ¡Seguro que a mamá le encantaría!",
      glosa: {
        aniu: "Ania (vocativo)",
        co: "qué",
        "będziemy": "vamos a… (być; futuro, nosotros): «będziemy jeść» = comeremos",
        "jeść": "comer",
        w: "en",
        "wigilię": "Nochebuena (acusativo: «w Wigilię» = en Nochebuena)",
        "chciałbym": "me gustaría (chcieć; condicional, yo, masc.)",
        "wiedzieć": "saber",
        "wcześniej": "antes, con antelación",
        "dwanaście": "doce",
        potraw: "platos (genitivo plural de potrawa, tras número)",
        najpierw: "primero",
        barszcz: "barszcz, caldo de remolacha",
        z: "con (+ instrumental); de (+ genitivo)",
        uszkami: "uszka (instrumental plural, tras «z» = con)",
        uszka: "uszka, «orejitas»: raviolis pequeños",
        to: "esto, eso; es; entonces",
        "małe": "pequeños (plural)",
        "pierożki": "pierogi pequeños (diminutivo)",
        grzybami: "setas (instrumental plural de grzyby)",
        a: "y; ¿y…?",
        zupa: "sopa",
        grzybowa: "de setas (adjetivo)",
        "też": "también",
        "będzie": "habrá (być; futuro)",
        tak: "sí",
        babcia: "abuela",
        gotuje: "cocina, prepara (gotować)",
        "ją": "la (acusativo: la sopa)",
        "grzybów": "setas (genitivo plural, tras «z» = con, a partir de)",
        "które": "que (relativo, plural)",
        sami: "nosotros mismos",
        zbieramy: "recogemos (zbierać)",
        lesie: "bosque (locativo de las)",
        potem: "después",
        "są": "hay; son",
        pierogi: "pierogi",
        "kapustą": "chucrut, col (instrumental de kapusta)",
        i: "y",
        kapusta: "chucrut, col",
        grochem: "guisantes secos (instrumental de groch)",
        "śledzie": "arenques (plural de śledź)",
        oleju: "aceite (locativo de olej)",
        "śmietanie": "nata agria (locativo de śmietana)",
        ryba: "pescado",
        karp: "carpa",
        "oczywiście": "por supuesto",
        po: "«po grecku» = a la griega",
        grecku: "«po grecku» = a la griega",
        kiedy: "cuando",
        "byłam": "era (być; pasado, yo, fem.)",
        "mała": "pequeña",
        przez: "durante (+ acusativo)",
        dwa: "dos",
        dni: "días (acusativo plural de dzień)",
        "pływał": "nadaba (pływać; pasado, él)",
        wannie: "bañera (locativo de wanna)",
        teraz: "ahora",
        mama: "mamá",
        kupuje: "compra (kupować)",
        gotowe: "ya preparados (plural)",
        filety: "filetes",
        tylko: "solo; «tylko uważaj» = pero ten cuidado",
        "uważaj": "¡ten cuidado! (uważać na + acusativo)",
        na: "con; para; «na deser» = de postre",
        "ości": "espinas (acusativo plural de ość)",
        deser: "postre",
        kutia: "kutia (trigo, amapola, miel y frutos secos)",
        babci: "de la abuela (genitivo de babcia)",
        pszenica: "trigo",
        mak: "semillas de amapola",
        "miód": "miel",
        orzechy: "nueces, frutos secos",
        ciasta: "pasteles (plural de ciasto)",
        makowiec: "rollo dulce de amapola",
        sernik: "tarta de queso",
        piernik: "bizcocho de miel y especias",
        jest: "es; hay",
        ciasto: "pastel, bizcocho",
        miodem: "miel (instrumental de miód)",
        przyprawami: "especias (instrumental plural de przyprawa)",
        "przykład": "«na przykład» = por ejemplo",
        cynamonem: "canela (instrumental de cynamon)",
        pachnie: "huele (pachnieć + instrumental: «huele a»)",
        "świętami": "Navidad, fiestas (instrumental de święta)",
        do: "para; a (+ genitivo)",
        picia: "beber («do picia» = para beber)",
        kompot: "kompot, bebida de fruta cocida",
        suszu: "fruta seca (genitivo de susz)",
        czyli: "es decir",
        suszonych: "secas (genitivo plural)",
        "owoców": "frutas (genitivo plural de owoc)",
        bardzo: "muy",
        "dużo": "mucho (+ genitivo)",
        jedzenia: "comida (genitivo de jedzenie, tras «dużo»)",
        nie: "no",
        dam: "daré (dać); «nie dam rady» = no podré",
        rady: "«dać radę» = poder con algo",
        "zjeść": "comerse (perfectivo de jeść)",
        wszystkiego: "todo (genitivo de wszystko)",
        musisz: "tienes que (musieć)",
        ale: "pero",
        trzeba: "hay que",
        "spróbować": "probar (+ genitivo)",
        "każdej": "cada (genitivo fem.)",
        potrawy: "plato (genitivo de potrawa, tras «spróbować»)",
        bo: "porque",
        przynosi: "trae (przynosić)",
        "szczęście": "suerte, felicidad",
        "cały": "todo, entero",
        rok: "año",
        "łuskę": "escama (acusativo de łuska)",
        karpia: "de la carpa (genitivo de karp)",
        "włóż": "¡mete! (imperativo de włożyć)",
        portfela: "cartera (genitivo de portfel, tras «do»)",
        zabraknie: "faltará (zabraknąć + genitivo)",
        ci: "te, a ti (dativo)",
        "pieniędzy": "dinero (genitivo de pieniądze)",
        dobrze: "vale, bien",
        "spróbuję": "probaré (spróbować; futuro)",
        czy: "partícula de pregunta",
        "mógłbym": "podría (móc; condicional, yo, masc.)",
        "pomóc": "ayudar",
        kuchni: "cocina (locativo de kuchnia)",
        pewno: "«na pewno» = seguro",
        by: "partícula del condicional: «by się ucieszyła» = se alegraría",
        "się": "se (reflexivo)",
        "ucieszyła": "se alegraría (ucieszyć się: forma fem. del pasado que, con «by», forma el condicional)"
      },
      preguntas: [
        { q: "¿Qué son los *uszka*?", ops: ["Pierogi pequeños de setas", "Trozos de pescado", "Galletas de miel"], ok: 0 },
        { q: "¿Dónde pasaba la carpa dos días cuando Ania era pequeña?", ops: ["En la bañera", "En el río", "En la nevera"], ok: 0 },
        {
          q: "¿Por qué hay que probar todos los platos?",
          ops: ["Porque trae suerte para todo el año", "Porque si no, la abuela se enfada", "Porque no hay postre"],
          ok: 0
        },
        { q: "¿Qué se pone en la cartera?", ops: ["Una escama de la carpa", "Un trozo de opłatek", "Una semilla de amapola"], ok: 0 }
      ],
      notas: "*Kutia babci*: el genitivo dice de quién es (la kutia de la abuela). *Mama by się ucieszyła*: el condicional con *by* suelto, «mamá se alegraría». *Pachnie świętami*: «huele a fiestas», con instrumental."
    },
    {
      id: "pl7-r3",
      titulo: "Kolędy i pasterka (villancicos y misa del gallo)",
      nivel: "A2",
      texto: "Pablo, mam dla ciebie zadanie na ten tydzień. Po kolacji wigilijnej zawsze śpiewamy kolędy. Tata gra na gitarze, a babcia zna wszystkie zwrotki na pamięć. Chciałabym, żebyś zaśpiewał z nami chociaż jedną. Moja ulubiona to «Wśród nocnej ciszy». Zaczyna się tak:\n\nWśród nocnej ciszy głos się rozchodzi:\nWstańcie, pasterze, Bóg się wam rodzi!\n\nPrzed północą ubieramy się ciepło i idziemy na pasterkę, czyli mszę o północy. Kościół jest zawsze pełny, a ludzie stoją nawet na zewnątrz, na mrozie. Pasterka zwykle zaczyna się właśnie od tej kolędy. Śpiewamy też «Bóg się rodzi». Pierwsze słowa to: «Bóg się rodzi, moc truchleje». Szczerze mówiąc, nawet ja nie wiem dokładnie, co znaczy «truchleje». Babcia mówi, że to znaczy «drży ze strachu». Po pasterce wracamy do domu i jemy jeszcze kawałek makowca. Dla mnie to najpiękniejsza chwila świąt.\n\nW Boże Narodzenie jemy obiad u cioci Basi. Będą też wujek Janek i kuzynka Ola. W drugi dzień świąt będzie spokojnie: długi spacer po śniegu i cały dzień z rodziną.\n\nUcz się kolęd! Ja w zamian nauczę się jednej hiszpańskiej kolędy.",
      traduccion: "Pablo, tengo una tarea para ti esta semana. Después de la cena de Nochebuena siempre cantamos villancicos. Papá toca la guitarra y la abuela se sabe todas las estrofas de memoria. Me gustaría que cantaras con nosotros al menos uno. Mi favorito es «Wśród nocnej ciszy». Empieza así:\n\nEn el silencio de la noche se oye una voz:\n¡Levantaos, pastores, Dios nace para vosotros!\n\nAntes de medianoche nos abrigamos bien y vamos a la pasterka, es decir, a la misa de medianoche. La iglesia siempre está llena, y hay gente de pie incluso fuera, con la helada. La misa del gallo suele empezar precisamente con este villancico. También cantamos «Bóg się rodzi». Las primeras palabras son: «Dios nace, el poder se estremece». A decir verdad, ni siquiera yo sé exactamente qué significa «truchleje». La abuela dice que significa «tiembla de miedo». Después de la misa volvemos a casa y comemos otro trozo de makowiec. Para mí es el momento más bonito de las fiestas.\n\nEl día de Navidad comemos en casa de la tía Basia. También estarán el tío Janek y la prima Ola. El día 26 será tranquilo: un paseo largo por la nieve y todo el día en familia.\n\n¡Apréndete los villancicos! A cambio, yo aprenderé un villancico español.",
      glosa: {
        pablo: "Pablo (nombre)",
        mam: "tengo (mieć)",
        dla: "para (+ genitivo)",
        ciebie: "ti (genitivo de ty)",
        zadanie: "tarea",
        na: "para; en; a; sobre",
        ten: "este",
        "tydzień": "semana (acusativo; «na ten tydzień» = para esta semana)",
        po: "después de (+ locativo); por (+ locativo)",
        kolacji: "cena (locativo de kolacja, tras «po»)",
        wigilijnej: "de Nochebuena (locativo fem. de wigilijny)",
        zawsze: "siempre",
        "śpiewamy": "cantamos (śpiewać)",
        "kolędy": "villancicos (acusativo plural); «od tej kolędy» = con este villancico (genitivo singular)",
        tata: "papá",
        gra: "toca (grać na + locativo)",
        gitarze: "guitarra (locativo de gitara)",
        a: "y, mientras que",
        babcia: "abuela",
        zna: "conoce, se sabe (znać)",
        wszystkie: "todas",
        zwrotki: "estrofas (acusativo plural de zwrotka)",
        "pamięć": "memoria; «na pamięć» = de memoria",
        "chciałabym": "me gustaría (chcieć; condicional, yo, fem.)",
        "żebyś": "que tú… (żeby + -ś): «żebyś zaśpiewał» = que cantaras",
        "zaśpiewał": "cantaras (zaśpiewać: forma masc. del pasado, tras «żebyś»)",
        z: "con (+ instrumental)",
        nami: "nosotros (instrumental; «z nami» = con nosotros)",
        "chociaż": "al menos",
        "jedną": "una (acusativo fem.: un villancico)",
        moja: "mi (fem.)",
        ulubiona: "favorita",
        to: "es; esto",
        "wśród": "en medio de, entre (+ genitivo)",
        nocnej: "nocturna, de la noche (genitivo fem. de nocny)",
        ciszy: "silencio (genitivo de cisza)",
        zaczyna: "empieza (zaczynać się)",
        "się": "se (reflexivo)",
        tak: "así",
        "głos": "voz",
        rozchodzi: "se extiende, se difunde (rozchodzić się)",
        "wstańcie": "¡levantaos! (imperativo plural de wstać)",
        pasterze: "¡pastores! (vocativo plural de pasterz)",
        "bóg": "Dios",
        wam: "os, a vosotros (dativo)",
        rodzi: "nace («rodzi się»)",
        przed: "antes de (+ instrumental)",
        "północą": "medianoche (instrumental de północ, tras «przed»)",
        ubieramy: "vestimos (ubierać); «ubieramy się ciepło» = nos abrigamos",
        "ciepło": "abrigado (adverbio; «ubierać się ciepło» = abrigarse)",
        i: "y",
        idziemy: "vamos (iść)",
        "pasterkę": "misa del gallo (acusativo de pasterka)",
        czyli: "es decir",
        "mszę": "misa (acusativo de msza)",
        o: "a (hora); «o północy» = a medianoche",
        "północy": "medianoche (locativo de północ)",
        "kościół": "iglesia",
        jest: "está; es",
        "pełny": "lleno",
        ludzie: "gente, personas",
        "stoją": "están de pie (stać)",
        nawet: "incluso; «nawet ja» = ni siquiera yo",
        "zewnątrz": "«na zewnątrz» = fuera",
        mrozie: "helada, frío intenso (locativo de mróz)",
        pasterka: "misa del gallo",
        zwykle: "normalmente",
        "właśnie": "precisamente",
        od: "desde; «zaczynać się od» = empezar con",
        tej: "esta (genitivo fem.)",
        "też": "también",
        pierwsze: "primeras (plural)",
        "słowa": "palabras (plural de słowo)",
        moc: "poder, fuerza",
        truchleje: "se estremece de miedo (truchleć; palabra antigua)",
        szczerze: "sinceramente; «szczerze mówiąc» = a decir verdad",
        "mówiąc": "diciendo (mówić)",
        ja: "yo",
        nie: "no",
        wiem: "sé (wiedzieć)",
        "dokładnie": "exactamente",
        co: "qué",
        znaczy: "significa (znaczyć)",
        "mówi": "dice (mówić)",
        "że": "que",
        "drży": "tiembla (drżeć)",
        ze: "de (forma de «z» ante algunas consonantes); «ze strachu» = de miedo",
        strachu: "miedo (genitivo de strach)",
        pasterce: "misa del gallo (locativo de pasterka, tras «po»)",
        wracamy: "volvemos (wracać)",
        do: "a (+ genitivo)",
        domu: "casa (genitivo de dom; «do domu» = a casa)",
        jemy: "comemos (jeść)",
        jeszcze: "todavía; más",
        "kawałek": "trozo",
        makowca: "makowiec (genitivo, tras «kawałek»)",
        mnie: "mí (genitivo de ja; «dla mnie» = para mí)",
        "najpiękniejsza": "la más bonita (superlativo de piękny)",
        chwila: "momento",
        "świąt": "fiestas, Navidad (genitivo de święta)",
        w: "en",
        "boże": "de Dios; «Boże Narodzenie» = Navidad",
        narodzenie: "nacimiento; «Boże Narodzenie» = Navidad",
        obiad: "comida (la principal del día)",
        u: "en casa de (+ genitivo)",
        cioci: "tía (genitivo de ciocia)",
        basi: "Basia (genitivo; nombre)",
        "będą": "estarán (być; futuro, ellos)",
        wujek: "tío",
        janek: "Janek (nombre)",
        kuzynka: "prima",
        ola: "Ola (nombre)",
        drugi: "segundo",
        "dzień": "día",
        "będzie": "será (być; futuro)",
        spokojnie: "tranquilo (adverbio)",
        "długi": "largo",
        spacer: "paseo",
        "śniegu": "nieve (locativo de śnieg; «po śniegu» = por la nieve)",
        "cały": "todo, entero",
        "rodziną": "familia (instrumental de rodzina; «z rodziną» = en familia)",
        ucz: "¡aprende! (imperativo de uczyć się)",
        "kolęd": "villancicos (genitivo plural, tras «uczyć się»)",
        zamian: "«w zamian» = a cambio",
        "nauczę": "aprenderé (nauczyć się; futuro)",
        jednej: "una (genitivo fem.)",
        "hiszpańskiej": "española (genitivo fem.)"
      },
      preguntas: [
        { q: "¿Qué hace el padre de Ania mientras cantan?", ops: ["Toca la guitarra", "Lee el Evangelio", "Prepara la cena"], ok: 0 },
        { q: "¿Con qué villancico suele empezar la pasterka?", ops: ["«Wśród nocnej ciszy»", "«Bóg się rodzi»", "Con uno español"], ok: 0 },
        { q: "Según la abuela, ¿qué significa «truchleje»?", ops: ["Tiembla de miedo", "Canta en voz alta", "Se queda dormido"], ok: 0 },
        { q: "¿Dónde comen el día de Navidad?", ops: ["En casa de la tía Basia", "En casa de Ania", "En un restaurante"], ok: 0 }
      ],
      notas: "Los dos villancicos son tradicionales: «Wśród nocnej ciszy» es anónimo, y la letra de «Bóg się rodzi» la escribió Franciszek Karpiński en 1792. *Pasterze* es vocativo plural: «¡pastores!». *Truchleć* es una palabra antigua que hoy se oye sobre todo en este villancico."
    }
  ]
});
