import Swal from "sweetalert2";
import { noDatosMostrar } from "./noDatos";

export const mostrarR = (input1, input2, r, operando) => {
  if (input1 === "" || input2 === "") {
    noDatosMostrar();
  } else {
    let operacion = "";
    switch (operando) {
      case "+":
        operacion = "Suma";
        break;
      case "-":
        operacion = "Resta";
        break;
      case "X":
        operacion = "Multiplicación";
        break;
      case "/":
        operacion = "División";
        break;
      default:
        operacion = "Operación desconocida";
        break;
    }

    Swal.fire({
      title: operacion,
      html: `${input1} ${operando} ${input2} = ${r}`,
      icon: "success",
    });
  }
};
