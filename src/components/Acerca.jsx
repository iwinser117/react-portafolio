import React, { useState, useEffect } from "react";
import mostrarDiploma from "../utils/modalDiploma.js";
import GridExperiencia from "./AcercaExperiencias";
import Certifications from "./Certifications.jsx";
import "@styles/acerca.css";

const Acerca = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const translations = [
    "Hola, soy ",
    "Hello, I am ",
    "Bonjour, je suis ",
    "Hallo, ich bin ",
    "Ciao, sono ",
    "こんにちは、私は ",
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
          : currentText.substring(0, text.length + 1)
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
        <p>
          Apasionado por la tecnología y el desarrollo de software, me especializo en crear soluciones innovadoras. Mi objetivo es desarrollar tecnologías de alta calidad que generen impacto.
          Como Consultor BTP en MQA Suramérica, desarrollo aplicaciones empresariales utilizando SAP BTP, CAP y UI5, integrándolas con SAP Fiori y S/4HANA. Paralelamente, trabajo en proyectos independientes como desarrollador Fullstack JavaScript, utilizando React, Node.js y MongoDB para crear aplicaciones web completas y robustas.
        </p>

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
        <h4 className="encabezado">Proyectos Personales</h4>
        <div>
          <GridExperiencia />
        </div>
      </div>

      <article className="cert-container">
        <h4>Certificaciones</h4>
        <p>
          Durante mi proceso de aprendizaje, hice parte del programa
          <strong> Misión TIC 2022</strong> ofrecido por la Facultad de
          Ingeniería de la Universidad de Antioquia obteniendo las
          certificaciones correspondientes a dicho programa. Además, actualmente
          continuo aprendiendo a traves de los cursos en la plataforma de
          estudio en línea Platzi y recursos a mi disposición.
        </p>
      </article>

      <Certifications />
    </section>
  );
};

export default Acerca;
