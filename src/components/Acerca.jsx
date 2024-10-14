import React, { useState, useEffect } from "react";
import mostrarDiploma from "../utils/modalDiploma.js";
import GridExperiencia from "./AcercaExperiencias";
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
          Un gusto que estés aquí. Desde la secundaria me he interesado por la
          tecnología y todo lo que respecta al Software, empece por indagar
          sobre lo que corre detrás de las aplicaciones y como se hacen estas.
          Luego de entender cual es la estructura de una aplicación continue de
          forma autodidacta en la ruta de aprendizaje para el dia de hoy hacer
          software de calidad y en mi mejora continua.
        </p>
      </article>
      <section className="container-experiencia">
        <main>
          <h4>Experiencia</h4>
          <section>
            <div className="experiencia">
              <h5>SAP Consultor BTP NEO - CF</h5>
              <ul>
                <li>Enero 2023 - Actualmente</li>
              </ul>
            </div>
            <div className="experiencia">
              <h4 className="encabezado">Proyectos Personales</h4>
              <div>
                <GridExperiencia />
              </div>
            </div>
          </section>
        </main>
      </section>
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
      <div className="certificados-iconos container-sm w-50">
        <ul className="list-group">
          <li className="list-group-item list-group-item-action">
            <p>
              Diplomado en Desarrollo de Software
              <br />
              <i className="fa-solid fa-trophy icon-li"></i> MisionTic2022
              <a
                id="1"
                href="#ViewCertficado"
                onClick={(e) => handleClick(e)}
                aria-label="Ver certificado del Diplomado en Desarrollo de Software"
              >
                <i className="fa-regular fa-eye"></i>
              </a>
            </p>
          </li>
          <li className="list-group-item list-group-item-action">
            <p>
              Diplomado en Desarrollo de Aplicaciones Web
              <br />
              <i className="fa-solid fa-trophy icon-li"></i> MisionTic2022
              <a
                id="0"
                href="#ViewCertficado"
                onClick={(e) => handleClick(e)}
                aria-label="Ver certificado del Diplomado en Desarrollo de Aplicaciones Web"
              >
                <i className="fa-regular fa-eye"></i>
              </a>
            </p>
          </li>
          <li className="list-group-item list-group-item-action">
            <p>
              Diplomado en Programación Básica Lenguaje Java
              <br />
              <i className="fa-solid fa-trophy icon-li"></i> MisionTic2022
              <a
                id="2"
                href="#ViewCertficado"
                onClick={(e) => handleClick(e)}
                aria-label="Ver certificado del Diplomado en Programación Básica Lenguaje Java"
              >
                <i className="fa-regular fa-eye"></i>
              </a>
            </p>
          </li>
        </ul>

        <ul
          className="mostrarList list-group "
          id="mostrarList"
          style={{ display: isVisible ? "block" : "none" }}
        >
          <li className="list-group-item list-group-item-action" id="7">
            <p>
              Diplomado Fundamentos de Programaci&oacute;n en Lenguaje Python
              <br />
              <i className="fa-solid fa-trophy icon-li "></i>&nbsp;MisionTic2022{" "}
              <a id="3" href="#ViewCertficado" onClick={(e) => handleClick(e)}>
                <i className="fa-regular fa-eye"></i>
              </a>
            </p>
          </li>
          <li className="list-group-item list-group-item-action">
            <p>
              Full Stack Developer con JavaScript
              <br />
              <i className="fa-solid fa-trophy icon-li"></i>&nbsp;Platzi &nbsp;
              &nbsp;
              <a id="4" href="#ViewCertficado" onClick={(e) => handleClick(e)}>
                <i className="fa-regular fa-eye"></i>
              </a>
            </p>
          </li>
        </ul>
        <button
          onClick={toggleVisibility}
          className="btn btn-light position-relative bottom-0  start-50 m-2"
        >
          {isVisible ? "Ver menos" : "Ver mas"}
        </button>
      </div>
    </section>
  );
};

export default Acerca;
