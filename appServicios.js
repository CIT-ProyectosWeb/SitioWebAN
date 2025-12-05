// =====================================
//   FUNCIONES DE MOVIMIENTO CARRUSEL
// =====================================
function moverDerecha(id) {
  const carrusel = document.getElementById(id);
  if (carrusel) carrusel.scrollBy({ left: 350, behavior: "smooth" });
}

function moverIzquierda(id) {
  const carrusel = document.getElementById(id);
  if (carrusel) carrusel.scrollBy({ left: -350, behavior: "smooth" });
}

function moverDerechaCoaching() {
  moverDerecha("carruselCoaching");
}

function moverIzquierdaCoaching() {
  moverIzquierda("carruselCoaching");
}

// =====================================
//             MODAL CONSULTORÍA
// =====================================
function abrirModal(titulo, texto) {
  document.getElementById("modalTitulo").innerText = titulo;
  document.getElementById("modalTexto").innerText = texto;
  document.getElementById("modalConsultoria").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modalConsultoria").style.display = "none";
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("modalConsultoria");
  if (e.target === modal) modal.style.display = "none";
});
