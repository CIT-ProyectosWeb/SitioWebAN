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

function moverDerechaConsultoria() {
  const carrusel = document.getElementById("carruselConsultoria");
  if (carrusel) carrusel.scrollBy({ left: 350, behavior: 'smooth' });
}

function moverIzquierdaConsultoria() {
  const carrusel = document.getElementById("carruselConsultoria");
  if (carrusel) carrusel.scrollBy({ left: -350, behavior: 'smooth' });
}

// ============================================================
// DATOS DE LAS CAPACITACIONES
// ============================================================
const capacitaciones1 = [
  { titulo: 'Team Building', imagen: 'imagenes/TB.png', descripcion: 'Ejercicios vivenciales para fortalecer la confianza, comunicación y cohesión en el equipo.' },
  { titulo: 'Fortalecimiento del compromiso hacia la empresa', imagen: 'imagenes/c2.jpg', descripcion: 'Estrategias para generar equipos más motivados, involucrados y orientados a resultados.' },
  { titulo: 'Planeación y gestión de la productividad', imagen: 'imagenes/c3.jpg', descripcion: 'Aprende a planificar tareas y metas con enfoque SMART y resultados medibles.' },
  { titulo: 'Gestión del cambio', imagen: 'imagenes/c4.jpg', descripcion: 'Aumenta la adaptabilidad y resiliencia organizacional ante nuevos desafíos.' },
  { titulo: 'Fortalecimiento de habilidades de liderazgo', imagen: 'imagenes/c5.jpg', descripcion: 'Desarrolla competencias para dirigir, inspirar y guiar con empatía.' },
  { titulo: 'Fortalecimiento de habilidades para el manejo de personal', imagen: 'imagenes/c6.jpg', descripcion: 'Mejora la comunicación, delegación y desarrollo de tus colaboradores.' },
  { titulo: 'Herramientas de coaching para un liderazgo eficiente', imagen: 'imagenes/c7.jpg', descripcion: 'Aplica técnicas de coaching y PNL para potenciar a tu equipo.' },
  { titulo: 'Comunicación productiva entre departamentos', imagen: 'imagenes/c8.jpg', descripcion: 'Mejora la interacción interna y la sinergia organizacional.' },
  { titulo: 'Comunicación asertiva y efectiva', imagen: 'imagenes/c9.jpg', descripcion: 'Aprende a escuchar, expresarte y negociar con empatía.' },
];

const capacitaciones2 = [
  { titulo: 'Relaciones humanas y empatía', imagen: 'imagenes/C10.jpg', descripcion: 'Fomenta el respeto, la comprensión y el trabajo colaborativo.' },
  { titulo: 'Ventas exitosas', imagen: 'imagenes/C11.jpg', descripcion: 'Estrategias prácticas para entender al cliente y cerrar acuerdos con éxito.' },
  { titulo: 'Servicio y atención de excelencia', imagen: 'imagenes/C12.jpg', descripcion: 'Transforma la atención tradicional en experiencias memorables para el cliente.' },
  { titulo: 'Motivación y actitudes positivas en mi trabajo', imagen: 'imagenes/C13.jpg', descripcion: 'Promueve la satisfacción laboral, compromiso y energía positiva.' },
  { titulo: 'Control y manejo del estrés', imagen: 'imagenes/C14.jpg', descripcion: 'Aprende técnicas efectivas de relajación y equilibrio.' },
  { titulo: 'Inteligencia emocional aplicada al trabajo', imagen: 'imagenes/C15.jpg', descripcion: 'Comprende y regula tus emociones para mejorar tu desempeño y relaciones laborales.' },
  { titulo: 'Manejo de conflictos', imagen: 'imagenes/C16.jpg', descripcion: 'Aprende estrategias para resolver problemas de forma constructiva.' },
];

// ============================================================
// DATOS DE COACHING
// ============================================================
const coaching = [
  { titulo: 'Coaching de Vida', imagen: 'imagenes/coaching1.jpg', descripcion: 'Descubre tu propósito y alinea tus acciones con lo que realmente te inspira.' },
  { titulo: 'Coaching Ejecutivo', imagen: 'imagenes/coaching2.jpg', descripcion: 'Desarrolla tu liderazgo y maximiza el potencial de tu equipo y organización.' },
  { titulo: 'Coaching de Equipos', imagen: 'imagenes/coaching3.jpg', descripcion: 'Fortalece la confianza, comunicación y colaboración entre tus colaboradores.' },
  { titulo: 'Mentoring & Coaching', imagen: 'imagenes/coaching10.jpg', descripcion: 'Combina la guía estratégica del mentoring con el enfoque reflexivo del coaching.' },
];

// ============================================================
// CONFERENCIAS POR CATEGORÍA
// ============================================================
const conferenciasPorCategoria = [
  {
    categoria: 'Desarrollo Personal',
    color: 'overlay-naranja',
    items: [
      { titulo: 'El maravilloso poder de decidir', descripcion: 'Aprende a tomar decisiones con serenidad y enfoque, construyendo tu propio destino.', imagen: 'imagenes/CC1.jpg' },
      { titulo: 'Darme cuenta: el camino a la autoconciencia', descripcion: 'Reflexiona sobre tus fortalezas y miedos para vivir con plenitud.', imagen: 'imagenes/CC2.jpg' },
      { titulo: 'Propósito de vida', descripcion: 'Reconecta con el sentido y rumbo de tu existencia.', imagen: 'imagenes/CC3.jpg' },
      { titulo: 'Cuando tú cambias lo que crees...', descripcion: 'Transforma tus creencias limitantes y alcanza tu máximo potencial.', imagen: 'imagenes/CC4.jpg' },
      { titulo: 'Realmente… ¿me lo creo?', descripcion: 'Una charla sobre la autoconfianza y el poder de creer en ti mismo.', imagen: 'imagenes/CC5.jpg' },
    ],
  },
  {
    categoria: 'Motivación y Resiliencia',
    color: 'overlay-gris',
    items: [
      { titulo: 'Automotivación para el éxito', descripcion: 'Descubre cómo mantener la inspiración interna para alcanzar tus metas.', imagen: 'imagenes/CC6.jpg' },
      { titulo: '¡Aguanta vara, la vida sigue!', descripcion: 'Despierta tu capacidad de resiliencia y supera la adversidad con actitud.', imagen: 'imagenes/CC7.jpg' },
      { titulo: 'Hazlo realidad', descripcion: 'Encuentra tus motivadores internos y conviértete en tu propio coach.', imagen: 'imagenes/CC8.jpg' },
      { titulo: 'Despierta el líder en ti', descripcion: 'Reencuentra tu liderazgo interior y transmite inspiración.', imagen: 'imagenes/CC9.jpg' },
    ],
  },
  {
    categoria: 'Inteligencia Emocional y Bienestar',
    color: 'overlay-naranja',
    items: [
      { titulo: 'Competencias de la inteligencia emocional', descripcion: 'Aprende a reconocer, expresar y manejar tus emociones de forma constructiva.', imagen: 'imagenes/CC10.jpg' },
      { titulo: 'Mindfulness: atención plena', descripcion: 'Técnicas para vivir el presente, reducir el estrés y aumentar la concentración.', imagen: 'imagenes/CC11.jpg' },
      { titulo: 'Control y manejo del estrés', descripcion: 'Conoce herramientas para equilibrar tus emociones y desempeño.', imagen: 'imagenes/CC12.jpg' },
      { titulo: 'Conectando con mis emociones', descripcion: 'Desarrolla conciencia emocional y fortalece tus relaciones humanas.', imagen: 'imagenes/CC13.jpg' },
      { titulo: 'Más amor, menos violencia', descripcion: 'Promueve relaciones armoniosas y respetuosas desde la empatía.', imagen: 'imagenes/CC14.jpg' },
    ],
  },
  {
    categoria: 'Familia, Relaciones y Servicio',
    color: 'overlay-gris',
    items: [
      { titulo: 'La familia: el mejor equipo', descripcion: 'Reconoce la importancia de la unidad y colaboración familiar.', imagen: 'imagenes/CC15.jpg' },
      { titulo: 'Comprometido ¿yo?', descripcion: 'Reflexiona sobre tu papel y responsabilidad en la vida.', imagen: 'imagenes/CC16.jpg' },
      { titulo: '¿Cómo servir más y mejor?', descripcion: 'Aprende a conectar con el propósito del servicio consciente.', imagen: 'imagenes/CC17.jpg' },
      { titulo: 'Lenguaje responsable', descripcion: 'Descubre el impacto de tus palabras y cómo usarlas a tu favor.', imagen: 'imagenes/CC18.jpg' },
      { titulo: 'Comunicación asertiva', descripcion: 'Mejora tus relaciones aprendiendo a comunicarte con respeto.', imagen: 'imagenes/CC19.jpg' },
    ],
  },
  {
    categoria: 'Crecimiento Profesional y Liderazgo',
    color: 'overlay-naranja',
    items: [
      { titulo: 'Actitudes positivas', descripcion: 'Cambia tu perspectiva y enfoca tu energía en soluciones.', imagen: 'imagenes/CC20.jpg' },
      { titulo: 'Ponte la camiseta', descripcion: 'Despierta el sentido de pertenencia y compromiso laboral.', imagen: 'imagenes/CC21.jpg' },
      { titulo: 'Juntos logramos más', descripcion: 'Fomenta la colaboración y empatía en los equipos de trabajo.', imagen: 'imagenes/CC22.jpg' },
      { titulo: 'Vida y trabajo en equilibrio', descripcion: 'Encuentra la armonía entre tus dimensiones personal y laboral.', imagen: 'imagenes/CC23.jpg' },
      { titulo: 'Finanzas inteligentes', descripcion: 'Aprende a tener una relación positiva con el dinero y tus recursos.', imagen: 'imagenes/CC24.jpg' },
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
    div.innerHTML = `<img src="${item.imagen}" alt="${item.titulo}" loading="lazy">
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

// =========================
// FUNCIONES DEL MODAL
// =========================
function abrirModal(titulo, texto) {
  document.getElementById("modalTitulo").innerText = titulo;
  document.getElementById("modalTexto").innerText = texto;
  document.getElementById("modalConsultoria").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modalConsultoria").style.display = "none";
}

