import React, { useState, useEffect } from "react";
import "@styles/Banner.css"; // Asegúrate de tener los estilos CSS definidos
import gifImage from "@assets/iwinser.gif";
import gifImage1 from "@assets/banner1.gif";

const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [gifImage, gifImage1]; // Agrega más imágenes según sea necesario

  const acrostico = [
    "Idea",
    "Web",
    "Innovación",
    "Navegación",
    "Soluciones",
    "Esfuerzo",
    "Resultados",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % (images.length + 1));
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="banner align-items-center ">
      <div className="bannerItem">
        {images.map((image, index) => (
          <div key={index} style={{ display: index === imageIndex ? "block" : "none" }}>
            {image ? <img src={image} alt={`Banner ${index}`} /> : null}
          </div>
        ))}
        {imageIndex === images.length && (
          <div className="">
            <div className="acrostico-vertical-container">
              {acrostico.map((text, index) => (
                <div key={index} className="acrostico-vertical">
                  {text.split("").map((char, charIndex) => (
                    <p
                      key={charIndex}
                      style={{
                        animationDelay: `${index * 0.5 + charIndex * 0.2}s`, 
                      }}
                      className="rainbow-text"
                    >
                      {char}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
