// Glossa · registro de cursos. Para añadir un idioma: una entrada aquí y un archivo courses/<id>.js.
// voz: etiqueta de la voz ('la-clasico' = latín clásico y 'grc-erasmo' = griego con pronunciación erasmiana, leídos con voz española).
// oido: idioma del reconocimiento de voz (null si el móvil no lo reconoce, como el latín).
window.COURSES = [
  {
    id: 'pl', nombre: 'Polaco', propio: 'Polski', estado: 'activo', voz: 'pl-PL', oido: 'pl-PL',
    meta: 'Navidad con la familia', fechaMeta: '2026-12-24', textoFecha: 'Nochebuena',
    escucha: [
      ['https://www.youtube.com/easypolish', 'Easy Polish', 'Entrevistas por la calle, con subtítulos en polaco e inglés.'],
      ['https://polonicum.uw.edu.pl/en/polish-with-ania', 'Polski z Anią', 'Vídeos de gramática de la Universidad de Varsovia, con subtítulos.'],
      ['https://podcasts.apple.com/us/podcast/super-easy-polish-for-beginners-learn-polish-with-simple-dialogues-%7C-polski-dla-pocz%C4%85tkuj%C4%85cych/id1753746720', 'Super Easy Polish for Beginners', 'Diálogos sencillos de nivel A1 (podcast).']
    ]
  },
  { id: 'la', nombre: 'Latín', propio: 'Latina', estado: 'activo', voz: 'la-clasico', oido: null, meta: 'Leer lógica escolástica', escucha: [] },
  { id: 'grc', nombre: 'Griego antiguo', propio: 'Ἑλληνική', estado: 'activo', voz: 'grc-erasmo', oido: null, meta: 'Leer filosofía griega', escucha: [] },
  {
    id: 'it', nombre: 'Italiano', propio: 'Italiano', estado: 'activo', voz: 'it-IT', oido: 'it-IT', meta: 'Italiano para el trabajo',
    escucha: [
      ['https://www.youtube.com/@EasyItalianNews', 'Easy Italian', 'Entrevistas por la calle con subtítulos en italiano e inglés.'],
      ['https://www.youtube.com/@ItalianoAutomatico', 'Italiano Automatico', 'Italiano real explicado en italiano, despacio.'],
      ['https://podcastitaliano.com/', 'Podcast Italiano', 'Episodios por niveles, con transcripción.']
    ]
  }
];
window.CONTENT = window.CONTENT || {};
