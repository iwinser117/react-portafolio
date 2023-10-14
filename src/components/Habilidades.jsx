import React from "react"
import '@styles/habilidades.css'
const Habilidades = () => {
  return (
    <section className="container habld-cnt col-8  text-justify lh-lg">
      <article id="habilidades" className="pt-3">
        <h3>Habilidades</h3>
      </article>
      <article className="pt-3">
        <h3>
          <i className="fa-solid fa-display"></i> Front-end
        </h3>
        <p>
          Tengo experiencia en el manejo de HTML, CSS y JavaScript para el desarrollo de sitios web. En cuanto a HTML, me especializo en la creación de estructuras semánticas que permiten la accesibilidad y generan un impacto visual atractivo para los usuarios. En CSS, poseo un nivel intermedio y disfruto explorar las propiedades que permiten estilizar mis proyectos. Además, me gusta utilizar CSS para crear diseños responsivos que se adapten a diferentes dispositivos.
        </p>
        <p>
          Considero que JavaScript es un lenguaje sumamente importante tanto en el frontend como en el backend. Me encanta trabajar con JavaScript debido a su capacidad para manejar eventos, manipular el DOM y brindar interactividad en el frontend.
        </p>
      </article>
      <article>
        <h3>
          <i className="fa-solid fa-server"></i> Backend
        </h3>
        <p>
          Poseo sólidos conocimientos en estructuras de datos y habilidades para brindar soluciones a problemas lógicos en la parte backend de una aplicación.


        </p>

        <p>
          Durante mi proceso de aprendizaje, he trabajado con diversos lenguajes de programación como Python, Java y JavaScript. En particular, he estado enfocándome en el desarrollo y manejo de bases de datos, especialmente con Postgres y MongoDB. Me he familiarizado con los métodos POST, PUT y GET para interactuar con estas bases de datos, así como también he adquirido experiencia en el consumo de APIs. También tengo habilidades en el manejo de archivos JSON, comprendiendo su estructura y accediendo a la información que contienen. Además, cuento con conocimientos en SQL HANA.
        </p>

      </article>
    </section>
  )
}

export default Habilidades
