import React, { useState } from 'react';
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

    return (
        <Modal show={true} onHide={handleClose} size="">
            <Modal.Header closeButton>
                <Modal.Title>Contador</Modal.Title>
            </Modal.Header>
            <div className="card m-auto p-4 bg-dark text-white">
                <div className="card-body">

                    <h2 className="text-center fs-1">{count}</h2>

                    <div className="d-flex ">
                        <button className="btn btn-outline-primary m-2" onClick={handleDecrement}>
                            Decrement
                        </button>

                        <button className="btn btn-outline-primary m-2" onClick={handleIncrement}>
                            Increment
                        </button>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-outline-danger" onClick={handleReset}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Contador;
