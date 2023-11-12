import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const TableExport = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Modal show={true} onHide={handleClose} size="" centered>
      <Modal.Header closeButton>
        <Modal.Title>Table Export</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        <p>
          Esta es una Aplicación la cual hace peticiones a urls predeterminadas
          en el select de la lista desplegable, Además cuenta con un input donde
          podemos ingresar nuestras propias url de Apis a consumir. <br /> los
          Datos obtenidos se reenderizan en una tabla en la parte inferior
        </p>
        <a
          href="https://table-export-js-4zq5.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link de Visita.
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default TableExport;
