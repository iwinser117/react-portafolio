import React from 'react';
import { secondImages } from '../utils/galerimages.js';
import { NavLink } from 'react-router-dom'; 

function AcercaExperiencia() {
  return (
    <div className='imagenes-exp'>
      <div className="image-grid">
        {secondImages.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.src} alt={image.alt} className='imgActual3' />
            <h3 className='name-alt'>{image.alt}</h3>
            <div className="image-overlay">
              <NavLink className="nav-link" to={"/proyectos"}>
                Ir a Proyectos
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcercaExperiencia;
