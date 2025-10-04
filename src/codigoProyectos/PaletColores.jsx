import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PaletColores = ({ onClose }) => {
  const [backgroundColor, setBackgroundColor] = useState("#6366f1");
  const [textColor, setTextColor] = useState("#ffffff");

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setBackgroundColor(newColor);

    // Auto-ajustar color del texto según el brillo del fondo
    const hex = newColor.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    setTextColor(brightness > 128 ? "#1f2937" : "#ffffff");
  };

  const handleClose = () => {
    onClose();
  };

  const presetColors = [
    "#ef4444",
    "#f59e0b",
    "#10b981",
    "#3b82f6",
    "#8b5cf6",
    "#ec4899",
    "#06b6d4",
    "#84cc16",
  ];

  return (
    <Modal
      show={true}
      onHide={handleClose}
      size="lg"
      centered
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
          🎨 Paleta de Colores
        </Modal.Title>
      </Modal.Header>

      <Modal.Body
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          padding: "40px 20px",
        }}
      >
        <div className="text-center">
          <p
            className="mb-4"
            style={{ fontSize: "1.1rem", color: "#4b5563", fontWeight: "500" }}
          >
            Selecciona un color y observa cómo cambia el diseño
          </p>

          {/* Vista previa del color */}
          <div
            className="mx-auto mb-4 rounded-4 shadow-lg position-relative overflow-hidden"
            style={{
              maxWidth: "500px",
              height: "300px",
              background: backgroundColor,
              transition: "all 0.3s ease",
              border: "4px solid white",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center h-100"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div
                className="text-center p-4"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  border: `2px solid ${textColor}20`,
                }}
              >
                <h2
                  className="fw-bold mb-3"
                  style={{
                    color: textColor,
                    fontSize: "2rem",
                    textShadow:
                      textColor === "#ffffff"
                        ? "0 2px 10px rgba(0,0,0,0.3)"
                        : "0 2px 10px rgba(255,255,255,0.3)",
                  }}
                >
                  ¡Experimenta!
                </h2>
                <p
                  className="mb-0"
                  style={{
                    color: textColor,
                    fontSize: "1.2rem",
                    opacity: 0.9,
                  }}
                >
                  Cambia de colores
                </p>
              </div>
            </div>

            {/* Código hexadecimal */}
            <div
              className="position-absolute bottom-0 start-0 end-0 text-center py-3"
              style={{
                background: "rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <code
                className="fw-bold"
                style={{
                  color: textColor,
                  fontSize: "1.3rem",
                  letterSpacing: "2px",
                }}
              >
                {backgroundColor.toUpperCase()}
              </code>
            </div>
          </div>

          {/* Selector de color principal */}
          <div className="mb-4">
            <label
              htmlFor="colorPicker"
              className="form-label fw-semibold mb-3"
              style={{ color: "#374151", fontSize: "1rem" }}
            >
              Selector personalizado
            </label>
            <div className="d-flex justify-content-center">
              <input
                id="colorPicker"
                className="form-control form-control-color shadow-lg"
                type="color"
                value={backgroundColor}
                onChange={handleColorChange}
                style={{
                  width: "120px",
                  height: "60px",
                  border: "4px solid white",
                  borderRadius: "12px",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          </div>

          {/* Colores predefinidos */}
          <div>
            <p
              className="fw-semibold mb-3"
              style={{ color: "#374151", fontSize: "1rem" }}
            >
              Colores rápidos
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              {presetColors.map((color) => (
                <button
                  key={color}
                  onClick={() =>
                    handleColorChange({ target: { value: color } })
                  }
                  className="border-0 rounded-circle shadow"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border:
                      backgroundColor === color
                        ? "4px solid #1f2937"
                        : "4px solid white",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.15)";
                    e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                  }}
                  title={color.toUpperCase()}
                />
              ))}
            </div>
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

export default PaletColores;
