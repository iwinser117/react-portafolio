import React, { useState } from 'react';

const Contador = () => {
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

    return (
        <div className="card m-auto w-50 p-4 bg-dark text-white">
            <div className="card-body">
                <h4 className='text-center'>Contador</h4>
                <p>
                    Interfaz en la cual cada botón se le asigna una función, muy
                    intuitiva, como sumar 1, restar 1 y el botón reset el cual deja el
                    contador a cero 0. Haciendo uso de "useState"
                </p>

                <h2 className="text-center fs-1">{count}</h2>

                <div className="d-flex justify-content-around">
                    <button className="btn btn-outline-primary" onClick={handleDecrement}>
                        Decrement
                    </button>

                    <button className="btn btn-outline-primary" onClick={handleIncrement}>
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
    );
}

export default Contador;
