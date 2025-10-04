import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Contador = ({ onClose }) => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleClose = () => {
    onClose();
  };

  // Determinar el color según el valor
  const getCountColor = () => {
    if (count > 0) return "#10b981"; // Verde
    if (count < 0) return "#ef4444"; // Rojo
    return "#6366f1"; // Azul (neutral)
  };

  return (
    <Modal
      show={true}
      onHide={handleClose}
      centered
      size="md"
    >
      <Modal.Header
        closeButton
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
          padding: "24px",
        }}
      >
        <Modal.Title
          className="w-100 text-center fw-bold text-white"
          style={{ fontSize: "1.5rem" }}
        >
          🔢 Contador Interactivo
        </Modal.Title>
      </Modal.Header>

      <Modal.Body
        style={{
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          padding: "50px 20px",
        }}
      >
        <div className="text-center">
          {/* Display del contador */}
          <div
            className="mx-auto mb-5 rounded-4 shadow-lg d-flex align-items-center justify-content-center"
            style={{
              maxWidth: "300px",
              height: "180px",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              transition: "all 0.3s ease",
            }}
          >
            <h1
              className="fw-bold mb-0"
              style={{
                fontSize: "5rem",
                color: getCountColor(),
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
                fontFamily: "monospace",
              }}
            >
              {count}
            </h1>
          </div>

          {/* Botones de control */}
          <div className="d-flex justify-content-center gap-3 mb-4">
            <button
              className="btn shadow-lg fw-semibold"
              onClick={handleDecrement}
              style={{
                width: "120px",
                height: "60px",
                borderRadius: "12px",
                fontSize: "1.1rem",
                background: "rgba(239, 68, 68, 0.9)",
                color: "white",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.background = "#dc2626";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.background = "rgba(239, 68, 68, 0.9)";
              }}
            >
              ➖ -1
            </button>

            <button
              className="btn shadow-lg fw-semibold"
              onClick={handleIncrement}
              style={{
                width: "120px",
                height: "60px",
                borderRadius: "12px",
                fontSize: "1.1rem",
                background: "rgba(16, 185, 129, 0.9)",
                color: "white",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.background = "#059669";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.background = "rgba(16, 185, 129, 0.9)";
              }}
            >
              ➕ +1
            </button>
          </div>

          {/* Botón de reset */}
          <button
            className="btn shadow-lg fw-semibold"
            onClick={handleReset}
            style={{
              width: "200px",
              height: "50px",
              borderRadius: "12px",
              fontSize: "1rem",
              background: "rgba(99, 102, 241, 0.9)",
              color: "white",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.background = "#4f46e5";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.background = "rgba(99, 102, 241, 0.9)";
            }}
          >
            🔄 Reiniciar
          </button>

          {/* Indicador de estado */}
          <div className="mt-4">
            <span
              className="badge px-4 py-2 rounded-pill"
              style={{
                fontSize: "0.9rem",
                background:
                  count === 0
                    ? "rgba(100, 255, 218, 0.2)"
                    : count > 0
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(239, 68, 68, 0.2)",
                color:
                  count === 0 ? "#64ffda" : count > 0 ? "#10b981" : "#ef4444",
                border:
                  count === 0
                    ? "1px solid rgba(100, 255, 218, 0.3)"
                    : count > 0
                    ? "1px solid rgba(16, 185, 129, 0.3)"
                    : "1px solid rgba(239, 68, 68, 0.3)",
                fontWeight: "600",
              }}
            >
              {count === 0
                ? "⚪ Neutral"
                : count > 0
                ? "🟢 Positivo"
                : "🔴 Negativo"}
            </span>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer
        className="d-flex justify-content-center"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
          padding: "20px",
        }}
      >
        <Button
          variant="light"
          className="px-5 py-2 fw-semibold shadow"
          onClick={handleClose}
          style={{
            borderRadius: "10px",
            fontSize: "1rem",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          }}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Contador;
