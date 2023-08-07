import React, { useState } from 'react';
import '@styles/PaletaColores.css';

const PaletColores = () => {
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");

    const handleColorChange = (event) => {
        setBackgroundColor(event.target.value);
    };

    return (
        <div className="card m-auto w-50 p-4 bg-dark text-white">
            <div className="card w-100 m-auto noBorder bg-dark text-white">
                <h4 className='text-center'>Paleta de colores</h4>
                <p>
                    Se toma mediante un input el valor del color y se le agrega este
                    estilo a un elemento contenedor.
                </p>
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
    );
};

export default PaletColores;
