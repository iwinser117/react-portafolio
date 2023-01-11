const Swal = require("sweetalert2");

export const sendForm = (input) => {
  if (input.value.trim() === ""){
    console.log("hola")
  }else
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Mensaje enviado con exito",
      showConfirmButton: false,
      timer: 2000,
      text: "Pronto nos pondremos en contacto",
    });
};
