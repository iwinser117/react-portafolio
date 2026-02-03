import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import mostrarDiploma from "../utils/modalDiploma.js";
import GridExperiencia from "./AcercaExperiencias";
import Certifications from "./Certifications.jsx";
import "@styles/acerca.css";

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

  const handleClick = (event) => {
    mostrarDiploma(selectedId);
    setSelectedId(event.currentTarget.id);
  };
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
        setTimeout(() => setIsDeleting(true), 2000); // Pausa antes de borrar
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, loopNum, typingSpeed, translations]);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <section className="container acerca-cnt col-8  text-justify lh-lg">
      <article id="acercademi">
        <h3>
          {text}
          <span>Iwinser Sanchez</span>
        </h3>
        <p className="text-pretty" dangerouslySetInnerHTML={{ __html: t('about.description') }} />
      </article>
      {/* <section className="container-experiencia">
        <main>
          <h4>Experiencia</h4>
          <section>
            <div className="experiencia-detail">
              <h5>SAP Consultor BTP - MQA Suramérica</h5>
              <ul>
                <li>Enero 2023 - Actualmente</li>
                <li>Desarrollo de aplicaciones en SAP BTP con CAP y UI5.</li>
                <li>Integración con SAP Fiori y SAP S/4HANA.</li>
                <li>Soluciones en la nube para optimizar procesos empresariales.</li>
              </ul>
              <h5>Desarrollador Fullstack JavaScript</h5>
              <ul>
                <li>Marzo 2020 - Actualmente (Proyectos propios)</li>
                <li>Desarrollo de aplicaciones con React, Node.js y MongoDB.</li>
                <li>Creación de interfaces responsivas y accesibles.</li>
                <li>Integración de APIs RESTful y autenticación segura.</li>
              </ul>
            </div>


            
          </section>
        </main>
      </section> */}
      <div className="experiencia">
        <h4 className="encabezado">{t('about.personalProjects')}</h4>
        <div>
          <GridExperiencia />
        </div>
      </div>

      <article className="cert-container">
        <h4>{t('about.certifications')}</h4>
        <p dangerouslySetInnerHTML={{ __html: t('about.certificationsDescription') }} />
      </article>

      <Certifications />
    </section>
  );
};

export default Acerca;
