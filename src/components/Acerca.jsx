import React from "react";

const Acerca = () => {
  return (
    <section className="container col-8 fs-5 text-justify lh-lg">
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
        <ul>
          <li>
            <p>
              Diplomado en Desarrollo de Aplicaciones Web
              <pre>
                <i className="fa-solid fa-trophy"></i>MisionTic2022{" "}
                <a
                  download="certificadoAppWebs"
                  href="./certificaciones/Certificado_ciclo_4a_2022.pdf"
                >
                  <i className="fa-solid fa-download"></i>
                </a>
              </pre>
            </p>
          </li>
          <li>
            <p>
              Diplomado en Desarrollo de Software
              <pre>
                <i className="fa-solid fa-trophy"></i>MisionTic2022{" "}
                <a
                  download="certificadoDesarrolloSoftware"
                  href="./certificaciones/Certificado_ciclo_3_2022.pdf"
                >
                  <i className="fa-solid fa-download"></i>
                </a>
              </pre>
            </p>
          </li>
          <li>
            <p>
              Diplomado en Programaci&oacute;n Basica Lenguaje Java
              <pre>
                <i className="fa-solid fa-trophy"></i>MisionTic2022{" "}
                <a
                  download="CertificadoJava"
                  href="./certificaciones/Certificado_ciclo_2_2022_JAVA_MisionTic.pdf"
                >
                  <i className="fa-solid fa-download"></i>
                </a>
              </pre>
            </p>
          </li>
          <li>
            <p>
              Diplomado Fundamentos de Programaci&oacute;n en Lenguaje Python
              <pre>
                <i className="fa-solid fa-trophy"></i>MisionTic2022{" "}
                <a
                  download="certificadoPython"
                  href="./certificaciones/Certificado_ciclo_1_2022 PYTHON_MisionTic.pdf"
                >
                  <i className="fa-solid fa-download"></i>
                </a>
              </pre>
            </p>
          </li>
          <li>
            <p>
              Curso Pr&aacute;ctico Javascript
              <pre>
                <i className="fa-solid fa-trophy"></i>Platzi
              </pre>
            </p>
          </li>
        </ul>
        <ul className="mostrarList" id="mostrarText">
          <li>
            <p>
              Curso Práctico de Frontend Developer
              <pre>
                <i className="fa-solid fa-trophy"></i>Platzi
              </pre>
            </p>
          </li>
          <li>
            <p>
              Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript
              <pre>
                <i className="fa-solid fa-trophy"></i>Platzi
              </pre>
            </p>
          </li>
        </ul>
        <button className="leer" id="mostrarTextBtn">
          ....Mostrar mas
        </button>
      </div>
    </section>
  );
};

export default Acerca;
