import React, { useState } from 'react';
//import '@styles/Card.css'; // Archivo de estilos personalizados
import { FcFolder } from "react-icons/fc";
const folder1 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-body m-auto p-4 ">
        <h5 className="card-title">JavaScript Vanilla</h5>
        <p className="card-text">En este apartado podras encontrar ejercicios y aplicaciones con puro javascript </p>
        <p><FcFolder/></p>
        <a href="#" className="stretched-link">
          Abrir
        </a>
      </div>
      <div className="card-body m-auto p-4">
        <h5 className="card-title">Consumo de Apis y servicios</h5>
        <p className="card-text">Se realizan peticiones GET a Apis, Creacion de CRUD almacenado en MongoDB</p>
        <p><FcFolder/></p>
        <a href="#" className="stretched-link">
          Abrir
        </a>
      </div>
    </div>
  );
};

export default folder1;
