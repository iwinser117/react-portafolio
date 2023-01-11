import React, { useState } from 'react';


const PaletColores = () => {
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
function handleColorChange(event) {
  setBackgroundColor(event.target.value);
}
    return (
      <>
        <div className="card w-50 m-auto noBorder">
          <h4>Paleta de colores</h4>
        </div>
        <div className="card w-50 m-auto noBorder">
          <div className="rounded-circle w-50 d-block" style={{ backgroundColor }}>
            hola mundo
          </div>
          <input type="color" onChange={handleColorChange} />
        </div>
      </>
    );
}

export default PaletColores;