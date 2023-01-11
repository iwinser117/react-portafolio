import Swal from "sweetalert2";
import { noDatosMostrar } from "./noDatos";
export const mostrarR = (input1, input2, r, operando) => {
    
  if (input1 === "" || input2 === "") {
    noDatosMostrar();
  } else {
    Swal.fire({
      title: "Resultado",
      html: `${input1} ${operando} ${input2} = ${r}`,
      icon: "success",
    });
  }
};
