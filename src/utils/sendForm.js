const Swal = require("sweetalert2")
function exito() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Mensaje enviado con exito",
    showConfirmButton: false,
    timer: 2000,
    text: "Pronto nos pondremos en contacto",
  })
}

function noEnviado() {
  Swal.fire({
    title: "Vaya! algo ha salido mal",
    text: "Por favor, rellene todos los campos",
    icon: "error",
  })
}

function limpiarInput() {
  document.querySelectorAll("input").forEach((input) => (input.value = ""))
  document
    .querySelectorAll("textarea")
    .forEach((textarea) => (textarea.value = ""))
}
module.exports = {
  exito: exito,
  noEnviado: noEnviado,
  limpiarInput: limpiarInput,
}
