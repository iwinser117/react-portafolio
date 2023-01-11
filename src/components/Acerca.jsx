import React, { useState } from "react";

const Acerca = () => {
  const [isVisible, setIsVisible] = useState(false);
   const toggleVisibility = () => {
     setIsVisible(!isVisible);
   };
  return (
    <section className="container col-8  text-justify lh-lg">
      <article id="acercademi">
        <h3>Acerca de mi</h3>
        <p>
          Desarrollador de software. Tengo conocimientos en lenguajes de
          programación como Javascript, Python y Java; HTML, CSS y Bootstrap que
          es con lo que está hecho este portafolio; soy una persona con ganas de
          aprender cada día enfocado en las tareas asignadas. Apasionado por
          programar. Soy autodidacta, me gustaría trabajar en proyectos que
          tengan un gran impacto en la sociedad y que beneficien a muchas
          personas.
        </p>
      </article>
      <article>
        <h4>Certificaciones</h4>
        <p>
          Durante mi proceso de aprendizaje he logrado certificarme por medio de
          la Facultad de ingenieria de la Universidad de Antioquia mediante el
          programa Mision TIC 2022 y cursos en la plataforma de estudio online
          Platzi los cuales he culminado ha satisfaccion.
        </p>
      </article>
      <div className="certificados-iconos">
        <ul className="list-group">
          <li className="list-group-item list-group-item-action">
            <p>
              Diplomado en Desarrollo de Aplicaciones Web
              <br />
              <i className="fa-solid fa-trophy"></i>MisionTic2022{" "}
              <a
                download="certificadoAppWebs"
                href="./certificaciones/Certificado_ciclo_4a_2022.pdf"
              >
                <i className="fa-solid fa-download"></i>
              </a>
            </p>
          </li>
          <li className="list-group-item list-group-item-action">
            <p>
              Diplomado en Desarrollo de Software
              <br />
              <i className="fa-solid fa-trophy"></i>MisionTic2022{" "}
              <a
                download="certificadoDesarrolloSoftware"
                href="./certificaciones/Certificado_ciclo_3_2022.pdf"
              >
                <i className="fa-solid fa-download"></i>
              </a>
            </p>
          </li>
          <li className="list-group-item list-group-item-action">
            <p>
              Diplomado en Programaci&oacute;n Basica Lenguaje Java
              <br />
              <i className="fa-solid fa-trophy"></i>MisionTic2022{" "}
              <a
                download="CertificadoJava"
                href="./certificaciones/Certificado_ciclo_2_2022_JAVA_MisionTic.pdf"
              >
                <i className="fa-solid fa-download"></i>
              </a>
            </p>
          </li>
        </ul>
        <ul
          className="mostrarList list-group"
          id="mostrarList"
          style={{ display: isVisible ? "block" : "none" }}
        >
          <li className="list-group-item list-group-item-action">
            <p>
              Diplomado Fundamentos de Programaci&oacute;n en Lenguaje Python
              <br />
              <i className="fa-solid fa-trophy"></i>MisionTic2022{" "}
              <a
                download="certificadoPython"
                href="./certificaciones/Certificado_ciclo_1_2022 PYTHON_MisionTic.pdf"
              >
                <i className="fa-solid fa-download"></i>
              </a>
            </p>
          </li>
          <li className="list-group-item list-group-item-action">
            <p>
              Curso Pr&aacute;ctico Javascript
              <br />
              <i className="fa-solid fa-trophy"></i>Platzi
            </p>
          </li>
          <li className="list-group-item list-group-item-action">
            <p>
              Curso Práctico de Frontend Developer
              <br />
              <i className="fa-solid fa-trophy"></i>Platzi
            </p>
          </li>
          <li className="list-group-item list-group-item-action">
            <p>
              Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript
              <br />
              <i className="fa-solid fa-trophy"></i>Platzi
            </p>
          </li>
        </ul>
        <button
          onClick={toggleVisibility}
          className="btn-outline-info btn position-relative bottom-0  start-50"
        >
          {isVisible ? "Ver menos" : "Ver mas"}
        </button>
      </div>
    </section>
  );
};

export default Acerca;
