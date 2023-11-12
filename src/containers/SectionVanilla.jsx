import React, { useState } from 'react';
import SectionDev from "./SectionDev"

import CarouselSlider from '@components/CarouselSlider';
import { FcFolder } from "react-icons/fc";
import img1 from '@assets/d1Python.jpg'

const SectionVanilla = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSectionDevVisible, setIsSectionDevVisible] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    setIsSectionDevVisible(!isSectionDevVisible);
  };

  const javascriptImages = [img1,img1,img1 ];
  const apiImages = ['ruta_imagen_api1.jpg', 'ruta_imagen_api2.jpg', 'ruta_imagen_api3.jpg'];

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-body m-auto p-4" onClick={handleCardClick}>
        <h5 className="card-title">JavaScript Vanilla</h5>
        <p className="card-text">En este apartado podrás encontrar ejercicios y aplicaciones con puro JavaScript</p>
        <p><FcFolder /></p>
        <a href="#" className="stretched-link">
          Abrir
        </a>
        <CarouselSlider images={javascriptImages} />
        {isSectionDevVisible && <SectionDev />}
      </div>
      <div className="card-body m-auto p-4" onClick={handleCardClick}>
        <h5 className="card-title">Consumo de Apis y servicios</h5>
        <p className="card-text">Se realizan peticiones GET a APIs, Creación de CRUD almacenado en MongoDB</p>
        <p><FcFolder /></p>
        <a href="#" className="stretched-link">
          Abrir
        </a>
        <CarouselSlider images={apiImages} />
      </div>
    </div>
  );
};

export default SectionVanilla;
