// src/utils/modalDiploma.js

const imgs = [
  require("../assets/d3Soft.jpg"),
  require("../assets/d4Web.jpg"),
  require("../assets/d2Java.jpg"),
  require("../assets/d1Python.jpg"),
  require("../assets/fullstack.jpg"),
  require("../assets/d6FronDev.jpg"),
  require("../assets/d7ReactPractico.jpg"),
];

function mostrarDiploma(idImg) {
  if (idImg === null || idImg === undefined) return;

  const modal = document.getElementById("diplomaModal");
  const modalImg = document.getElementById("modalImage");

  if (!modal || !modalImg) return;

  // Asignar la imagen
  modalImg.src = imgs[idImg];

  // Mostrar el modal removiendo 'hidden'
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Bloquea el scroll del fondo

  const closeModal = () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto"; // Restaura el scroll
  };

  // Botón de cierre (x)
  const span = modal.querySelector(".close");
  if (span) {
    span.onclick = closeModal;
  }

  // Clic fuera del contenido
  modal.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };
}

export default mostrarDiploma;