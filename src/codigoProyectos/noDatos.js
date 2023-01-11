import Swal from "sweetalert2";
export const noDatosMostrar = () => {
  Swal.fire({
    html: "Por favor ingrese un numero en cada campo",
    title: "Faltan Datos",
    icon: "error",
  });
};
