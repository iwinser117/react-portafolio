import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ListaTareas = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal show={true} onHide={handleClose} size="">
      <Modal.Header closeButton>
        <Modal.Title>Lista de tareas</Modal.Title>
      </Modal.Header>
      <div className="card m-auto p-4 bg-dark text-white">
        <h4 className="text-center"></h4>
        <p>
          Esta es una Aplicacion que su Backend se Encuentra desplegado en Railway
          y su Frontend en Netlify. Posee las Caracteristicas de CRUD (Create,
          Read, Update, Delete) y fue desarrollada con NodeJs, Express, React y
          MongoDB (MERN). <br />
          <a
            href="https://crudlistatareas.netlify.app "
            target="_blank"
            rel="noopener noreferrer"
          >Link de Visita al Crud</a>
        </p>
        <div className="m-auto">
          <video
            src="../assets/CrudTareas.mp4"
            controls
            width="320"
            height="240"
          >
            Tu navegador no soporta el elemento de video
          </video>
        </div>
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ListaTareas;
