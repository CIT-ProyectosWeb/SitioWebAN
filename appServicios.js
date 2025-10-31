// ==========================
// FUNCIONES DE MOVIMIENTO
// ==========================
function moverDerecha(id) {
  const carrusel = document.getElementById(id);
  if (carrusel) carrusel.scrollBy({ left: 350, behavior: 'smooth' });
}

function moverIzquierda(id) {
  const carrusel = document.getElementById(id);
  if (carrusel) carrusel.scrollBy({ left: -350, behavior: 'smooth' });
}

function moverDerechaCoaching() {
  const carrusel = document.getElementById("carruselCoaching");
  if (carrusel) carrusel.scrollBy({ left: 350, behavior: 'smooth' });
}

function moverIzquierdaCoaching() {
  const carrusel = document.getElementById("carruselCoaching");
  if (carrusel) carrusel.scrollBy({ left: -350, behavior: 'smooth' });
}

// ============================================================
// DATOS DE LAS CAPACITACIONES
// ============================================================
const capacitaciones1 = [
  { titulo: 'Team Building', imagen: 'https://picsum.photos/400/250?random=7', descripcion: 'Ejercicios vivenciales para fortalecer la confianza, comunicación y cohesión en el equipo.' },
  { titulo: 'Fortalecimiento del compromiso hacia la empresa', imagen: 'https://picsum.photos/400/250?random=1', descripcion: 'Estrategias para generar equipos más motivados, involucrados y orientados a resultados.' },
  { titulo: 'Planeación y gestión de la productividad', imagen: 'https://picsum.photos/400/250?random=2', descripcion: 'Aprende a planificar tareas y metas con enfoque SMART y resultados medibles.' },
  { titulo: 'Gestión del cambio', imagen: 'https://picsum.photos/400/250?random=3', descripcion: 'Aumenta la adaptabilidad y resiliencia organizacional ante nuevos desafíos.' },
  { titulo: 'Fortalecimiento de habilidades de liderazgo', imagen: 'https://picsum.photos/400/250?random=4', descripcion: 'Desarrolla competencias para dirigir, inspirar y guiar con empatía.' },
  { titulo: 'Fortalecimiento de habilidades para el manejo de personal', imagen: 'https://picsum.photos/400/250?random=5', descripcion: 'Mejora la comunicación, delegación y desarrollo de tus colaboradores.' },
  { titulo: 'Herramientas de coaching para un liderazgo eficiente', imagen: 'https://picsum.photos/400/250?random=6', descripcion: 'Aplica técnicas de coaching y PNL para potenciar a tu equipo.' },
  { titulo: 'Comunicación productiva entre departamentos', imagen: 'https://picsum.photos/400/250?random=8', descripcion: 'Mejora la interacción interna y la sinergia organizacional.' },
  { titulo: 'Comunicación asertiva y efectiva', imagen: 'https://picsum.photos/400/250?random=9', descripcion: 'Aprende a escuchar, expresarte y negociar con empatía.' },
];

const capacitaciones2 = [
  { titulo: 'Relaciones humanas y empatía', imagen: 'https://picsum.photos/400/250?random=1', descripcion: 'Fomenta el respeto, la comprensión y el trabajo colaborativo.' },
  { titulo: 'Ventas exitosas', imagen: 'https://picsum.photos/400/250?random=2', descripcion: 'Estrategias prácticas para entender al cliente y cerrar acuerdos con éxito.' },
  { titulo: 'Servicio y atención de excelencia', imagen: 'https://picsum.photos/400/250?random=3', descripcion: 'Transforma la atención tradicional en experiencias memorables para el cliente.' },
  { titulo: 'Motivación y actitudes positivas en mi trabajo', imagen: 'https://picsum.photos/400/250?random=4', descripcion: 'Promueve la satisfacción laboral, compromiso y energía positiva.' },
  { titulo: 'Control y manejo del estrés', imagen: 'https://picsum.photos/400/250?random=5', descripcion: 'Aprende técnicas efectivas de relajación y equilibrio.' },
  { titulo: 'Inteligencia emocional aplicada al trabajo', imagen: 'https://picsum.photos/400/250?random=6', descripcion: 'Comprende y regula tus emociones para mejorar tu desempeño y relaciones laborales.' },
  { titulo: 'Manejo de conflictos', imagen: 'https://picsum.photos/400/250?random=7', descripcion: 'Aprende estrategias para resolver problemas de forma constructiva.' },
];

// ============================================================
// DATOS DE COACHING
// ============================================================
const coaching = [
  { titulo: 'Coaching de Vida', imagen: 'https://picsum.photos/400/250?random=31', descripcion: 'Descubre tu propósito y alinea tus acciones con lo que realmente te inspira.' },
  { titulo: 'Coaching Ejecutivo', imagen: 'https://picsum.photos/400/250?random=32', descripcion: 'Desarrolla tu liderazgo y maximiza el potencial de tu equipo y organización.' },
  { titulo: 'Coaching de Equipos', imagen: 'https://picsum.photos/400/250?random=33', descripcion: 'Fortalece la confianza, comunicación y colaboración entre tus colaboradores.' },
  { titulo: 'Coaching Personal', imagen: 'https://picsum.photos/400/250?random=34', descripcion: 'Aprende a gestionar tus emociones y superar bloqueos personales.' },
  { titulo: 'Coaching Transformacional', imagen: 'https://picsum.photos/400/250?random=35', descripcion: 'Cambia tu mentalidad para alcanzar metas que antes parecían imposibles.' },
  { titulo: 'Liderazgo Consciente', imagen: 'https://picsum.photos/400/250?random=36', descripcion: 'Dirige con empatía, integridad y visión estratégica.' },
  { titulo: 'Coaching de Comunicación', imagen: 'https://picsum.photos/400/250?random=37', descripcion: 'Aprende a escuchar activamente y comunicarte con impacto.' },
  { titulo: 'Empoderamiento Personal', imagen: 'https://picsum.photos/400/250?random=38', descripcion: 'Reconoce tus fortalezas y asume el control de tu desarrollo personal.' },
  { titulo: 'Coaching para la Resiliencia', imagen: 'https://picsum.photos/400/250?random=39', descripcion: 'Recupera tu equilibrio ante el cambio y las adversidades.' },
  { titulo: 'Mentoring & Coaching', imagen: 'https://picsum.photos/400/250?random=40', descripcion: 'Combina la guía estratégica del mentoring con el enfoque reflexivo del coaching.' },
];

// ============================================================
// CONFERENCIAS POR CATEGORÍA
// ============================================================
const conferenciasPorCategoria = [
  {
    categoria: 'Desarrollo Personal',
    color: 'overlay-naranja',
    items: [
      { titulo: 'El maravilloso poder de decidir', descripcion: 'Aprende a tomar decisiones con serenidad y enfoque, construyendo tu propio destino.', imagen: 'https://picsum.photos/400/300?random=1' },
      { titulo: 'Darme cuenta: el camino a la autoconciencia', descripcion: 'Reflexiona sobre tus fortalezas y miedos para vivir con plenitud.', imagen: 'https://picsum.photos/400/300?random=2' },
      { titulo: 'Propósito de vida', descripcion: 'Reconecta con el sentido y rumbo de tu existencia.', imagen: 'https://picsum.photos/400/300?random=3' },
      { titulo: 'Cuando tú cambias lo que crees...', descripcion: 'Transforma tus creencias limitantes y alcanza tu máximo potencial.', imagen: 'https://picsum.photos/400/300?random=4' },
      { titulo: 'Realmente… ¿me lo creo?', descripcion: 'Una charla sobre la autoconfianza y el poder de creer en ti mismo.', imagen: 'https://picsum.photos/400/300?random=5' },
    ],
  },
  {
    categoria: 'Motivación y Resiliencia',
    color: 'overlay-gris',
    items: [
      { titulo: 'Automotivación para el éxito', descripcion: 'Descubre cómo mantener la inspiración interna para alcanzar tus metas.', imagen: 'https://picsum.photos/400/300?random=6' },
      { titulo: '¡Aguanta vara, la vida sigue!', descripcion: 'Despierta tu capacidad de resiliencia y supera la adversidad con actitud.', imagen: 'https://picsum.photos/400/300?random=7' },
      { titulo: 'Hazlo realidad', descripcion: 'Encuentra tus motivadores internos y conviértete en tu propio coach.', imagen: 'https://picsum.photos/400/300?random=8' },
      { titulo: 'Despierta el líder en ti', descripcion: 'Reencuentra tu liderazgo interior y transmite inspiración.', imagen: 'https://picsum.photos/400/300?random=9' },
    ],
  },
  {
    categoria: 'Inteligencia Emocional y Bienestar',
    color: 'overlay-naranja',
    items: [
      { titulo: 'Competencias de la inteligencia emocional', descripcion: 'Aprende a reconocer, expresar y manejar tus emociones de forma constructiva.', imagen: 'https://picsum.photos/400/300?random=10' },
      { titulo: 'Mindfulness: atención plena', descripcion: 'Técnicas para vivir el presente, reducir el estrés y aumentar la concentración.', imagen: 'https://picsum.photos/400/300?random=11' },
      { titulo: 'Control y manejo del estrés', descripcion: 'Conoce herramientas para equilibrar tus emociones y desempeño.', imagen: 'https://picsum.photos/400/300?random=12' },
      { titulo: 'Conectando con mis emociones', descripcion: 'Desarrolla conciencia emocional y fortalece tus relaciones humanas.', imagen: 'https://picsum.photos/400/300?random=13' },
      { titulo: 'Más amor, menos violencia', descripcion: 'Promueve relaciones armoniosas y respetuosas desde la empatía.', imagen: 'https://picsum.photos/400/300?random=14' },
    ],
  },
  {
    categoria: 'Familia, Relaciones y Servicio',
    color: 'overlay-gris',
    items: [
      { titulo: 'La familia: el mejor equipo', descripcion: 'Reconoce la importancia de la unidad y colaboración familiar.', imagen: 'https://picsum.photos/400/300?random=15' },
      { titulo: 'Comprometido ¿yo?', descripcion: 'Reflexiona sobre tu papel y responsabilidad en la vida.', imagen: 'https://picsum.photos/400/300?random=16' },
      { titulo: '¿Cómo servir más y mejor?', descripcion: 'Aprende a conectar con el propósito del servicio consciente.', imagen: 'https://picsum.photos/400/300?random=17' },
      { titulo: 'Lenguaje responsable', descripcion: 'Descubre el impacto de tus palabras y cómo usarlas a tu favor.', imagen: 'https://picsum.photos/400/300?random=18' },
      { titulo: 'Comunicación asertiva', descripcion: 'Mejora tus relaciones aprendiendo a comunicarte con respeto.', imagen: 'https://picsum.photos/400/300?random=19' },
    ],
  },
  {
    categoria: 'Crecimiento Profesional y Liderazgo',
    color: 'overlay-naranja',
    items: [
      { titulo: 'Actitudes positivas', descripcion: 'Cambia tu perspectiva y enfoca tu energía en soluciones.', imagen: 'https://picsum.photos/400/300?random=20' },
      { titulo: 'Ponte la camiseta', descripcion: 'Despierta el sentido de pertenencia y compromiso laboral.', imagen: 'https://picsum.photos/400/300?random=21' },
      { titulo: 'Juntos logramos más', descripcion: 'Fomenta la colaboración y empatía en los equipos de trabajo.', imagen: 'https://picsum.photos/400/300?random=22' },
      { titulo: 'Vida y trabajo en equilibrio', descripcion: 'Encuentra la armonía entre tus dimensiones personal y laboral.', imagen: 'https://picsum.photos/400/300?random=23' },
      { titulo: 'Finanzas inteligentes', descripcion: 'Aprende a tener una relación positiva con el dinero y tus recursos.', imagen: 'https://picsum.photos/400/300?random=24' },
    ],
  },
];

// ============================================================
// RENDERIZAR CONTENIDOS
// ============================================================
function renderTarjetas(id, lista) {
  const contenedor = document.getElementById(id);
  if (!contenedor) return;
  lista.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('tarjeta');
    div.innerHTML = `<img src="${item.imagen}" alt="${item.titulo}">
                     <h3>${item.titulo}</h3>
                     <p>${item.descripcion}</p>`;
    contenedor.appendChild(div);
  });
}

function renderConferencias() {
  const container = document.getElementById('conferenciasContainer');
  container.innerHTML = '';

  conferenciasPorCategoria.forEach(cat => {
    const divCat = document.createElement('div');
    divCat.classList.add('conferencias-categoria');
    divCat.innerHTML = `<h2 class="conferencias-titulo-categoria">${cat.categoria}</h2>
      <div class="conferencias-tarjetas">
        ${cat.items.map(item => `
          <div class="conferencias-tarjeta">
            <div class="conferencias-overlay ${cat.color}">
              <h3>${item.titulo}</h3>
              <p>${item.descripcion}</p>
            </div>
            <img src="${item.imagen}" alt="${item.titulo}">
          </div>
        `).join('')}
      </div>`;
    container.appendChild(divCat);
  });
}

// ============================================================
// CARGA AUTOMÁTICA
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderTarjetas('carrusel1', capacitaciones1);
  renderTarjetas('carrusel2', capacitaciones2);
  renderTarjetas('carruselCoaching', coaching);
  renderConferencias();
});
