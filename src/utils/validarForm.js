const sendForm = require("./sendForm.js");
const Swal = require("sweetalert2");
export const validarForm = (input) => {
  if (input.value.trim() === "") {
    // The input is empty, so return false
    Swal.fire({
      title: "Faltan datos",
      text: "Proporcione un Nombre y una breve Descripción a su Tarea",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
    return false;
  } else {
    sendForm();
  }
  //   return true;
};
    