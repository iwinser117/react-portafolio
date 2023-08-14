import React, { useState } from "react";
import { mostrarR } from "../codigoProyectos/verResultados/calculadora";

const Calculadora = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [operando, setOperando] = useState("");
  const [resultado, setResultado] = useState("");
  const [inputActivo, setInputActivo] = useState(null);

  const handleInput = (event, setInput) => {
    const inputValue = event.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setInput(inputValue);
    }
  };

  const handleOperandoClick = (selectedOperando) => {
    setOperando(selectedOperando);
  };

  const retrocederInput = () => {
    if (inputActivo === "input1") {
      setInput1(prevInput => prevInput.slice(0, -1));
    } else if (inputActivo === "input2") {
      setInput2(prevInput => prevInput.slice(0, -1));
    }
  };

  const limpiarInput = () => {
    setInput1("");
    setInput2("");
    setOperando("");
    setResultado("");
  };

  const realizarOperacion = () => {
    if (input1 !== "" && input2 !== "" && operando !== "") {
      let result = 0;
      switch (operando) {
        case "+":
          result = parseFloat(input1) + parseFloat(input2);
          break;
        case "-":
          result = parseFloat(input1) - parseFloat(input2);
          break;
        case "X":
          result = parseFloat(input1) * parseFloat(input2);
          break;
        case "/":
          result = parseFloat(input1) / parseFloat(input2);
          break;
        default:
          break;
      }

      const formattedResult = parseFloat(result.toFixed(2));
      mostrarR(input1, input2, formattedResult, operando);
      limpiarInput();
      setResultado(formattedResult.toString());
    }
  };

  return (
    <div id="calculadora" className="card w-50 m-auto p-4 bg-dark text-white">
      <h4 className="text-center">Calculadora</h4>
      <p>
        Operamos con los datos obtenidos de los input del formulario y operamos
        según corresponda con las funciones asignadas a los botones de la parte
        inferior; se pueden realizar operaciones con números enteros y decimales.
      </p>

      <form id="forma">
        <div className="mb-3">
          <label htmlFor="opA" className="form-label">
            Operando uno
          </label>
          <input
            type="text"
            className="form-control"
            name="opA"
            placeholder="Escribe un número"
            onFocus={() => setInputActivo("input1")}
            onChange={(event) => handleInput(event, setInput1)}
            value={input1}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="opB" className="form-label">
            Operando dos
          </label>
          <input
            type="text"
            className="form-control"
            name="opB"
            placeholder="Escribe un número"
            onFocus={() => setInputActivo("input2")}
            onChange={(event) => handleInput(event, setInput2)}
            value={input2}
          />
        </div>
      </form>

      <div className="numeros">
        <div className="d-flex justify-content-around mb-3">
          {[1, 2, 3].map((numero) => (
            <input
              key={numero}
              type="button"
              className="btn btn-secondary"
              value={numero}
              onClick={() =>
                handleInput({ target: { value: (operando === "" ? input1 : input2) + numero } }, operando === "" ? setInput1 : setInput2)
              }
            />
          ))}
        </div>
        <div className="d-flex justify-content-around mb-3">
          {[4, 5, 6].map((numero) => (
            <input
              key={numero}
              type="button"
              className="btn btn-secondary"
              value={numero}
              onClick={() =>
                handleInput({ target: { value: (operando === "" ? input1 : input2) + numero } }, operando === "" ? setInput1 : setInput2)
              }
            />
          ))}
        </div>
        <div className="d-flex justify-content-around mb-3">
          {[7, 8, 9].map((numero) => (
            <input
              key={numero}
              type="button"
              className="btn btn-secondary"
              value={numero}
              onClick={() =>
                handleInput({ target: { value: (operando === "" ? input1 : input2) + numero } }, operando === "" ? setInput1 : setInput2)
              }
            />
          ))}
        </div>
        <div className="d-flex justify-content-around mb-3">
          <button className="btn btn-secondary" onClick={() => handleInput({ target: { value: (operando === "" ? input1 : input2) + "0" } }, operando === "" ? setInput1 : setInput2)}>
            0
          </button>
        </div>
      </div>

      <div className="operaciones">
        <div className="d-flex justify-content-around mb-3">
          {["+", "-", "X", "/"].map((operador) => (
            <div key={operador}>
              <button className={`btn btn-primary ${operando === operador ? "active" : ""}`} onClick={() => handleOperandoClick(operador)}>
                {operador}
              </button>
            </div>
          ))}
          <div>
            <button className="btn btn-success" onClick={realizarOperacion}>
              =
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-around mb-3">
          <button className="btn btn-danger" onClick={limpiarInput}>
            C
          </button>
          <button className="btn btn-secondary" onClick={retrocederInput}>
            &#9003;
          </button>
        </div>

      </div>

      {resultado !== "" && (
        <div className="mt-3">
          <p>Resultado: {resultado}</p>
        </div>
      )}
    </div>
  );
};

export default Calculadora;
