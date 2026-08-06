// src/components/AcercaExperiencias.jsx
import React, { useState, useEffect } from "react";
import { secondImages } from "../utils/galerimages.js";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function TitlebarImageList() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 600;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredImages = secondImages.filter(
    (item) => item.subtitle.includes("Node") || item.subtitle.includes("React")
  );

  return (
    <div className="w-full py-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {filteredImages.map((item, index) => (
          <div
            key={index}
            className="
              relative rounded-xl overflow-hidden h-44 sm:h-52
              bg-[#2b2b2b] shadow-sm
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-md
              active:scale-[0.98] sm:active:scale-100
              group
            "
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Overlay */}
            <Link
              to="/portafolio"
              className={`
                absolute inset-0 flex flex-col items-center justify-center
                text-white text-center p-3 z-[2] cursor-pointer
                transition-all duration-300
                ${isMobile 
                  ? "opacity-100 justify-end pb-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent" 
                  : "opacity-0 bg-gradient-to-b from-black/20 to-black/60 group-hover:opacity-100"
                }
              `}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg sm:text-2xl">🚀</span>
                <span className={`font-bold tracking-wide ${isMobile ? "text-xs" : "text-sm"}`}>
                  {isMobile ? item.alt : "Ver proyectos"}
                </span>
                <ArrowRight 
                  size={isMobile ? 16 : 20} 
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>

            {/* Title bar (desktop) */}
            {!isMobile && (
              <div className="
                absolute bottom-0 left-0 right-0
                bg-gradient-to-t from-black/80 to-transparent
                rounded-b-xl px-3 py-2
                transition-opacity duration-300 group-hover:opacity-0
              ">
                <p className="text-white text-xs sm:text-sm font-semibold truncate">
                  {item.alt}
                </p>
                <p className="text-white/80 text-[11px] truncate">
                  {item.subtitle}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TitlebarImageList;