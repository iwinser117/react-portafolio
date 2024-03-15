import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { imagesData, secondImages } from '../utils/galerimages.js';

function AcercaExperiencia() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='imagenes-exp'>
      {windowWidth < 862 ? (
        <Carousel data-bs-theme="dark">
          {imagesData.map((image, index) => (
            <Carousel.Item key={index} interval={index === 0 ? 2500 : 2500}>
              <img src={image.src} alt={image.alt} className='imgActual3' />
              <Carousel.Caption>
                <h2>{image.alt}</h2>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Carousel>
          {imagesData.map((image, index) => (
            <Carousel.Item key={index} interval={index === 0 ? 2500 : 2500}>
              <img src={image.src} alt={image.alt} className='imgActual1' />
              <Carousel.Caption>
                <h3>{image.alt}</h3>
              </Carousel.Caption>
              <img src={secondImages[index].src} alt={secondImages[index].alt} className='imgActual2' />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default AcercaExperiencia;
