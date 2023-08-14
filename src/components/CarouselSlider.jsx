import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselSlider = ({ images }) => {
  return (
    <Carousel
      controls={false} // Desactiva los controles de navegación
      indicators={false} // Desactiva los indicadores de diapositivas
      interval={3000} // Cambia la imagen cada 3 segundos
      wrap={true} // Habilita el carrusel circular
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-image">
            <img width="100px" style={{display:"block", margin:"auto"}} src={image} alt={`Imagen ${index}`} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
