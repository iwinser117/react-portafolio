// src/components/Acerca.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import mostrarDiploma from "../utils/modalDiploma.js";
import GridExperiencia from "./AcercaExperiencias";
import Certifications from "./Certifications.jsx";
import CategoriesTecnologie from "./CategoriesTecnologie.jsx";

const Acerca = () => {
  const { t, i18n } = useTranslation();
  const [selectedId, setSelectedId] = useState(null);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const translations = [
    i18n.language === 'en' ? "Hello, I am " : "Hola, soy ",
  ];

  useEffect(() => {
    mostrarDiploma(selectedId);
  }, [selectedId]);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % translations.length;
      const currentText = translations[i];

      setText(
        isDeleting
          ? currentText.substring(0, text.length - 1)
          : currentText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, loopNum, typingSpeed, translations]);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8">
      
      {/* ACERCA DE MI */}
      <article id="acercademi" className="w-full mb-10">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
          <span className="font-mono text-[#354A5F] dark:text-[#F5F6F7]">{text}</span>
          <span className="text-[#0070d2] dark:text-[#4DB1FF]">Iwinser Sanchez</span>
        </h3>
        <p 
          className="text-justify text-pretty text-sm sm:text-base leading-relaxed text-[#354A5F] dark:text-[#e0e0e0]"
          dangerouslySetInnerHTML={{ __html: t('about.description') }} 
        />
      </article>

      {/* CATEGORÍAS TECNOLOGÍA */}
      <div className="w-full mb-10">
        <CategoriesTecnologie />
      </div>

      {/* PROYECTOS PERSONALES */}
      <div className="w-full mb-10">
        <h4 className="text-xl sm:text-2xl font-bold mb-4 text-[#354A5F] dark:text-[#F5F6F7]">
          {t('about.personalProjects')}
        </h4>
        <GridExperiencia />
      </div>

      {/* CERTIFICACIONES */}
      <article className="w-full mb-4">
        <h4 className="text-xl sm:text-2xl font-bold mb-2 text-[#354A5F] dark:text-[#F5F6F7]">
          {t('about.certifications')}
        </h4>
        <p 
          className="text-justify text-pretty text-sm sm:text-base leading-relaxed text-[#354A5F] dark:text-[#e0e0e0]"
          dangerouslySetInnerHTML={{ __html: t('about.certificationsDescription') }} 
        />
      </article>

      <div className="w-full">
        <Certifications />
      </div>

    </section>
  );
};

export default Acerca;