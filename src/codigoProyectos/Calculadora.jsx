import React, { useState, useEffect } from "react";
import { mostrarR } from "../codigoProyectos/verResultados/calculadora";
const Calculadora = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  function limpiarinput() {
    setInput1("");
    setInput2("");
  }
  function handleInput1(event) {
    setInput1(event.target.value);
  }

  function handleInput2(event) {
    setInput2(event.target.value);
  }

  function handleSum() {
    const operando = "+";
    const result = Number(input1) + Number(input2);
    mostrarR(input1, input2, result, operando);
    limpiarinput();
  }
  function handleRest() {
    const operando = "-";
    const result = Number(input1) - Number(input2);
    mostrarR(input1, input2, result, operando);
    limpiarinput();
  }
  function handleMult() {
    const operando = "X";
    const result = Number(input1) * Number(input2);
    mostrarR(input1, input2, result, operando);
    limpiarinput();
  }

  function handleDiv() {
    const operando = "/";
    const result = (Number(input1) / Number(input2)).toFixed(2);
    mostrarR(input1, input2, result, operando);
    limpiarinput();
  }
  return (
    <>
      <div id="calculadora" className="card w-50 m-auto p-4 bg-dark text-white">
        <h4 className="text-center">Calculadora</h4>
        <p>
          Operamos con los datos obtenidos de los input del formulario y
          operamos segun corresponda con las funciones asignada a los botones de
          la parte inferior; se pueden realizar operaciones con numeros enteros
          y decimales los cuales son mostrados con 2 o 1 decimal.
        </p>

        <form id="forma">
          <div className="mb-3">
            <label htmlFor="opA" className="form-label">
              Operando uno
            </label>
            <input
              type="number"
              className="form-control"
              name="opA"
              placeholder="Escribe un numero"
              onChange={handleInput1}
              value={input1}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="opB" className="form-label">
              Operando dos
            </label>
            <input
              type="number"
              className="form-control"
              name="opB"
              placeholder="Escribe un numero"
              onChange={handleInput2}
              value={input2}
            />
          </div>
        </form>

        <div className="d-flex justify-content-around">
          <div>
            <button className="btn  btn-success" onClick={() => handleSum()}>
              Sumar
            </button>
          </div>
          <div>
            <button className="btn  btn-success" onClick={() => handleRest()}>
              Restar
            </button>
          </div>
          <div>
            <button className="btn  btn-success" onClick={() => handleMult()}>
              Multiplicar
            </button>
          </div>
          <div>
            <button className="btn  btn-success" onClick={() => handleDiv()}>
              Dividir
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculadora;
