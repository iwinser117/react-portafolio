const imgs = [
  require("../assets/d3Soft.jpg"),
  require("../assets/d4Web.jpg"),
  require("../assets/d2Java.jpg"),
  require("../assets/d1Python.jpg"),
  require('../assets/fullstack.jpg'),
  require('../assets/d6FronDev.jpg'),
  require('../assets/d7ReactPractico.jpg'),
];

function mostrarDiploma(idImg) {
  if (idImg === null) return;

  // Obtener el modal y la imagen dentro del modal
  const modal = document.getElementById("diplomaModal");
  const modalImg = document.getElementById("modalImage");

  // Asignar la imagen al modal
  modalImg.src = imgs[idImg];

  // Mostrar el modal
  modal.style.display = "block";

  // Obtener el elemento <span> que cierra el modal
  const span = document.getElementsByClassName("close")[0];

  // Cuando el usuario hace clic en <span> (x), cerrar el modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Cuando el usuario hace clic fuera de la imagen, cerrar el modal
  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}

export default mostrarDiploma;