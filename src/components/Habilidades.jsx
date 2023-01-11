import React from 'react';

const Habilidades = () => {
    return (
      <section className="container col-8 fs-5 text-justify lh-lg">
        <article id='habilidades'>
          <h3>Habilidades</h3>
        </article>
        <article>
          <h3>
            <i className="fa-solid fa-display"></i> Front-end
          </h3>
          <p>
            Manejo de <strong>Html</strong>, <strong>Css</strong> y{" "}
            <strong>JavaScript</strong> para el desarrollo de este sitio web, se
            de html; sobre su estructura semantica con el fin de realizar sitios
            web accesibles y que sean llamativos para el usuario, tambien doy
            estilos a mis proyectos actualmente con css, considero que tengo un
            conocimiento intermedio, me gusta todo lo que se puede hacer como
            sus propiedades y que puedo dar adaptablidad a las aplicaciones con
            un diseño responsive. tambien el lenguaje <i>javascript</i> me
            parece que es el sumamente importante tanto para el frontend, como
            para el backend.
          </p>
          <p>
            Con javascript me gusta que puedo manejar los eventos, manipular el{" "}
            <strong>DOM</strong>, su interactividad es algo que me llama la
            atencion en el frontend.
          </p>
        </article>
        <article>
          <h3>
            <i className="fa-solid fa-server"></i> Backend
          </h3>
          <p>
            Conocimientos de estructuras de datos, y dar soluciones a problemas
            que se presenten en la parte logica de una aplicacion.
          </p>
          <p>
            He trabajado durante mi aprendizaje con lenguajes como{" "}
            <strong>Python</strong>,<strong>Java</strong> y{" "}
            <strong>Javascript</strong>. actualmente he venido profundizando en
            bases de datos <i>(postgress y mongoDB)</i>; haciendo uso de los
            metodos <small>(POST - PUT - GET)</small> que puedo usar y me estoy
            familiarizando con ellos, Consumo de APIs, Manejo de archivos{" "}
            <strong>Json</strong> conociendo su estructura y el acceso a la
            informacion que estos contienen.
          </p>
        </article>
      </section>
    );
}

export default Habilidades;