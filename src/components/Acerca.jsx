import React, { useState, useEffect } from "react"
import mostrarDiploma from "../utils/modalDiploma.js"


const Acerca = () => {
  const [selectedId, setSelectedId] = useState(null)
  const handleClick = (event) => {
    mostrarDiploma(selectedId)
    setSelectedId(event.currentTarget.id)
  }
  useEffect(() => {
    console.log(selectedId)
    mostrarDiploma(selectedId)
  }, [selectedId])

  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  return (
    <section className="container col-8  text-justify lh-lg">
      <article id="acercademi">
        <h3>Acerca de mi</h3>
        <p>
          Soy un desarrollador de software apasionado con experiencia en Javascript, Python y Java. También tengo habilidades en HTML, CSS y Bootstrap. Me considero autodidacta y siempre estoy enfocado en aprender y completar las tareas asignadas. Estoy interesado en proyectos que tengan un impacto positivo en la sociedad y beneficien a muchas personas.
        </p>
      </article>
      <article>
        <h4>Certificaciones</h4>
        <p>
          Durante mi proceso de aprendizaje, obtuve la certificación del programa Mision TIC 2022 ofrecido por la Facultad de Ingeniería de la Universidad de Antioquia. Además, he completado satisfactoriamente varios cursos en la plataforma de estudio en línea Platzi.
        </p>
      </article>
      <div className="certificados-iconos container-sm w-75">
        <ul className="list-group ">
          <li className="list-group-item list-group-item-action">
            <p>
              Diplomado en Desarrollo de Aplicaciones Web
              <br />
              <i className="fa-solid fa-trophy icon-li"></i>&nbsp;MisionTic2022 &nbsp;
              &nbsp;
              <a id="0" href="#ViewCertficado" onClick={(e) => handleClick(e)}>
                <i className="fa-regular fa-eye"></i>
              </a>
            </p>
          </li>
          <li className="list-group-item list-group-item-action">
            <p>
              Diplomado en Desarrollo de Software
              <br />
              <i className="fa-solid fa-trophy icon-li"></i>&nbsp;MisionTic2022 &nbsp;
              &nbsp;
              <a id="1" href="#ViewCertficado" onClick={(e) => handleClick(e)}>
                <i className="fa-regular fa-eye"></i>
              </a>
            </p>
          </li>
          <li className="list-group-item list-group-item-action">
            <p>
              Diplomado en Programaci&oacute;n Basica Lenguaje Java
              <br />
              <i className="fa-solid fa-trophy icon-li"></i>&nbsp;MisionTic2022 &nbsp;
              &nbsp;
              <a id="2" href="#ViewCertficado" onClick={(e) => handleClick(e)}>
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
          <li className="list-group-item list-group-item-action" id="0">
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
              Curso Pr&aacute;ctico Javascript
              <br />
              <i className="fa-solid fa-trophy icon-li"></i>&nbsp;Platzi &nbsp; &nbsp;
              <a id="4" href="#ViewCertficado" onClick={(e) => handleClick(e)}>
                <i className="fa-regular fa-eye"></i>
              </a>
            </p>
          </li>
          <li className="list-group-item list-group-item-action">
            <p>
              Curso Práctico de Frontend Developer
              <br />
              <i className="fa-solid fa-trophy icon-li"></i>&nbsp;Platzi &nbsp; &nbsp;
              <a id="5" href="#ViewCertficado" onClick={(e) => handleClick(e)}>
                <i className="fa-regular fa-eye"></i>
              </a>
            </p>
          </li>
          <li className="list-group-item list-group-item-action">
            <p>
              Curso Practico de React
              <br />
              <i className="fa-solid fa-trophy icon-li"></i>&nbsp;Platzi &nbsp; &nbsp;
              <a id="6" href="#ViewCertficado" onClick={(e) => handleClick(e)}>
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
  )
}

export default Acerca
