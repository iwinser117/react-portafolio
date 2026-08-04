// src/components/Banner.jsx
import React, { useState } from "react";
import iwinserPerfil from "@assets/iwinserPerfil.webp";
import { useDarkMode } from "./Settingsmanager";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, FileText } from "lucide-react";

const Banner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <section className="w-full flex justify-center items-center py-8 md:py-12">
      <div
        className="
        w-full max-w-5xl 
        flex flex-col md:flex-row-reverse 
        items-center justify-between 
        gap-6 md:gap-10
        px-4 sm:px-6
      "
      >
        {/* Columna Derecha: Imagen Perfil (Tamaño controlado) + Botones */}
        <div className="flex flex-col items-center gap-4 shrink-0">
          {/* Avatar con tamaño reducido y controlado */}
          <div
            className="
            relative 
            w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52
            rounded-2xl overflow-hidden shadow-md
            border-2 border-[#d9d9d9] dark:border-[#3c4854]
            transition-transform duration-300 hover:scale-[1.02]
          "
          >
            <img
              src={iwinserPerfil}
              alt="Iwinser Sanchez - Perfil"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`
                w-full h-full object-cover
                transition-opacity duration-300 ease-in-out
                ${imageLoaded ? "opacity-100" : "opacity-0"}
              `}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
            )}
          </div>

          {/* Botones Sociales compactos e inline */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              className="
                inline-flex items-center gap-1.5 
                px-3 py-1.5 rounded-lg
                bg-gray-100 dark:bg-[#1d232a] 
                text-gray-700 dark:text-gray-200
                border border-[#d9d9d9] dark:border-[#3c4854]
                hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400
                transition-all duration-200 text-xs font-medium shadow-sm
              "
              href="https://github.com/iwinser117"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={15} />
              <span>{t("banner.github")}</span>
            </a>

            <a
              className="
                inline-flex items-center gap-1.5 
                px-3 py-1.5 rounded-lg
                bg-gray-100 dark:bg-[#1d232a] 
                text-gray-700 dark:text-gray-200
                border border-[#d9d9d9] dark:border-[#3c4854]
                hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400
                transition-all duration-200 text-xs font-medium shadow-sm
              "
              href="https://www.linkedin.com/in/iwinser-aljadys-sanchez-0a62a0234/?originalSubdomain=co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={15} />
              <span>{t("banner.linkedin")}</span>
            </a>

            <a
              className="
                inline-flex items-center gap-1.5 
                px-3 py-1.5 rounded-lg
                bg-gray-100 dark:bg-[#1d232a] 
                text-gray-700 dark:text-gray-200
                border border-[#d9d9d9] dark:border-[#3c4854]
                hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400
                transition-all duration-200 text-xs font-medium shadow-sm
              "
              download="CurriculumDeveloperIwinserSanchez"
              href="../assets/IwinserSanchez.pdf"
            >
              <FileText size={15} />
              <span>{t("banner.curriculum")}</span>
            </a>
          </div>
        </div>

        {/* Columna Izquierda: Información de presentación */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-mono font-bold text-2xl sm:text-3xl lg:text-4xl text-[#354A5F] dark:text-[#F5F6F7] mb-1">
            Iwinser Sanchez
          </h4>

          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0070d2] dark:text-[#4DB1FF] mb-3">
            {t("banner.title")}
          </h2>

          <p className="text-sm sm:text-base text-[#6a6d70] dark:text-[#b9c5d1] leading-relaxed max-w-xl">
            {t("banner.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
