import React, { useState } from "react";
import { mostrarR } from "@codigoProyectos/verResultados/calculadora";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Calculadora = ({ onClose }) => {
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
      setInput1((prevInput) => prevInput.slice(0, -1));
    } else if (inputActivo === "input2") {
      setInput2((prevInput) => prevInput.slice(0, -1));
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
  const [staticModal, setStaticModal] = useState(true);

  const handleShow = () => {
    setStaticModal(true);
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <Modal
      show={staticModal}
      onHide={handleClose}
      centered
      size="md"
    >
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>Calculadora</Modal.Title>
      </Modal.Header>

      <div id="calculadora" className="bg-dark text-light rounded p-4 shadow">
        <form>
          <div className="mb-3">
            <label className="form-label">Operando uno</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escribe un número"
              onFocus={() => setInputActivo("input1")}
              onChange={(event) => handleInput(event, setInput1)}
              value={input1}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Operando dos</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escribe un número"
              onFocus={() => setInputActivo("input2")}
              onChange={(event) => handleInput(event, setInput2)}
              value={input2}
            />
          </div>
        </form>

        {/* Números */}
        <div
          className="d-grid gap-2 mb-3"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((numero) => (
            <button
              key={numero}
              className="btn btn-outline-light btn-lg"
              onClick={() =>
                handleInput(
                  {
                    target: {
                      value: (operando === "" ? input1 : input2) + numero,
                    },
                  },
                  operando === "" ? setInput1 : setInput2
                )
              }
            >
              {numero}
            </button>
          ))}
          <button
            className="btn btn-outline-light btn-lg col-span-3"
            onClick={() =>
              handleInput(
                {
                  target: { value: (operando === "" ? input1 : input2) + "0" },
                },
                operando === "" ? setInput1 : setInput2
              )
            }
          >
            0
          </button>
        </div>

        {/* Operaciones */}
        <div className="d-flex justify-content-around mb-3">
          {["+", "-", "X", "/"].map((op) => (
            <button
              key={op}
              className={`btn btn-primary btn-lg ${
                operando === op ? "active" : ""
              }`}
              onClick={() => handleOperandoClick(op)}
            >
              {op}
            </button>
          ))}
          <button
            className="btn btn-success btn-lg"
            onClick={realizarOperacion}
          >
            =
          </button>
        </div>

        {/* Extra */}
        <div className="d-flex justify-content-around">
          <button className="btn btn-danger btn-lg" onClick={limpiarInput}>
            C
          </button>
          <button className="btn btn-warning btn-lg" onClick={retrocederInput}>
            ⌫
          </button>
        </div>

        {resultado && (
          <div className="mt-4 text-center">
            <h4 className="fw-bold">Resultado: {resultado}</h4>
          </div>
        )}
      </div>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Calculadora;
