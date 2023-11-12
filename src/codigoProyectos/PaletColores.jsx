import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import '@styles/PaletaColores.css';

const PaletColores = ({ onClose }) => {
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");

    const handleColorChange = (event) => {
        setBackgroundColor(event.target.value);
    };
    const handleClose = () => {
        onClose();
    };

    return (
        <Modal show={true} onHide={handleClose} size="">
            <Modal.Header closeButton>
                <Modal.Title>Paleta de colores</Modal.Title>
            </Modal.Header>
            <div className="card m-auto p-2 bg-dark text-white">
                <div className="card w-100 m-auto noBorder bg-dark text-white">

                </div>
                <div className="card m-auto p-3" style={{ backgroundColor }}>
                    <div className="rounded-circle w-50 d-block m-auto bg-dark text-white">
                        <p className="text-center border-palet">
                            Hola Cambio de Colores <br /> ¡Inténtalo!
                        </p>
                    </div>
                    <input
                        className="m-auto selectColor"
                        type="color"
                        onChange={handleColorChange}
                    />
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

export default PaletColores;
