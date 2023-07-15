import React, { useState, useEffect } from "react";
import "@styles/Banner.css";
import gifImage from "@assets/iwinser.gif";
import gifImage2 from "@assets/banner1.gif";

const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [gifImage, gifImage2]; // Agrega más imágenes según sea necesario

  useEffect(() => {
    const fetchRandomImage = () => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    fetchRandomImage();

    const interval = setInterval(fetchRandomImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="banner align-items-center">
      <div className="bannerItem">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index}`}
            style={{ display: index === imageIndex ? "block" : "none" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
