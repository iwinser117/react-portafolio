import Swal from "sweetalert2";

function exito() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Mensaje enviado con éxito",
    showConfirmButton: false,
    timer: 2000,
    text: "Pronto nos pondremos en contacto",
  });
}

function noEnviado() {
  Swal.fire({
    title: "Vaya! algo ha salido mal",
    text: "Por favor, rellene todos los campos",
    icon: "error",
  });
}

function limpiarInput() {
  document.querySelectorAll("input, textarea").forEach((input) => (input.value = ""));
}

export { exito, noEnviado, limpiarInput };
