import React, { useState, useEffect } from "react";
import "@styles/Banner.css"; 
import gifImage from "@assets/iwinser.gif";
//import gifImage1 from "@assets/imagAlgoritmos.jpeg";
//import gifImage1 from "@assets/imgb3.png";
//import gifImage1 from "@assets/imgia3.png";
//import gifImage1 from "@assets/bannr4.jpeg";


const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = []; 

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
    <div className="banner align-items-center data-bs-theme-dark container">
      <div className="bannerItem">
        {images.map((image, index) => (
          <div key={index} style={{ display: index === imageIndex ? "block w-full" : "none" }}>
            {image ? <img className='imgEs' src={image} alt={`Banner ${index}`} /> : null}
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
