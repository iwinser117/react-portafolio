import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "@styles/habilidades.css";
import { FaReact } from "react-icons/fa";
import react from "../assets/react.svg";
import htmlimg from "../assets/html.svg";
import bootstrap from "../assets/bootstrap.svg";
import ui5 from "../assets/ui5.svg";
import css from "../assets/css.svg";
import xml from "../assets/xml.svg";
import odata from "../assets/odata.png";
import sql from "../assets/sql.png";
import node from "../assets/node.png";
import json from "../assets/json.png";
import postgresql from "../assets/postgresql.png";
import btp from "../assets/btp.png";
import logojavascript from "../assets/logojavascript.svg";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import wjt from "../assets/wjt.svg";
const Habilidades = () => {
  return (
    <section className="container  acerca-cnt col-8  text-justify lh-lg">
      <article id="habilidades" className="pt-3">
        <h3>Habilidades</h3>
      </article>
      <article className="pt-3">
        <h3>
          <i className="fa-solid fa-display"></i> Front-end
        </h3>
        <p>
          Tengo experiencia en el manejo de HTML, CSS y JavaScript para el
          desarrollo de sitios web. En cuanto a HTML, me especializo en la
          creación de estructuras semánticas que permiten la accesibilidad y
          generan un impacto visual atractivo para los usuarios. En CSS, poseo
          un nivel intermedio y disfruto explorar las propiedades que permiten
          estilizar mis proyectos. Además, me gusta utilizar CSS para crear
          diseños responsivos que se adapten a diferentes dispositivos.
        </p>
        <p>
          Considero que JavaScript es un lenguaje sumamente importante tanto en
          el frontend como en el backend. Me encanta trabajar con JavaScript
          debido a su capacidad para manejar eventos, manipular el DOM y brindar
          interactividad en el frontend.
        </p>
        <Carousel data-bs-theme="dark">
          <Carousel.Item className="img-skill-front">
            <img src={react} width={"50px"} alt="" />
            <img src={bootstrap} width={"50px"} alt="" />
            <img src={htmlimg} width={"50px"} alt="" />
            <img src={ui5} width={"50px"} alt="" />
            <img src={css} width={"50px"} alt="" />
          </Carousel.Item>
          <Carousel.Item className="img-skill-front">
            <img src={htmlimg} width={"50px"} alt="" />
            <img src={ui5} width={"50px"} alt="" />
            <img src={logojavascript} width={"50px"} alt="" />
            <img src={xml} width={"50px"} alt="" />
            <img src={css} width={"50px"} alt="" />
          </Carousel.Item>
          <Carousel.Item className="img-skill-front">
            <img src={bootstrap} width={"50px"} alt="" />
            <img src={ui5} width={"50px"} alt="" />
            <img src={react} width={"50px"} alt="" />
            <img src={logojavascript} width={"50px"} alt="" />
            <img src={xml} width={"50px"} alt="" />
          </Carousel.Item>
        </Carousel>
      </article>
      <article>
        <h3>
          <i className="fa-solid fa-server"></i> Backend
        </h3>
        <p>
          Poseo sólidos conocimientos en estructuras de datos y habilidades para
          brindar soluciones a problemas lógicos en la parte backend de una
          aplicación.
        </p>

        <p>
          Durante mi proceso de aprendizaje, he trabajado con diversos lenguajes
          de programación como Python, Java y JavaScript. En particular, he
          estado enfocándome en el desarrollo y manejo de bases de datos,
          especialmente con SQL y MongoDB. Me he familiarizado con los distintos
          métodos para interactuar con estas bases de datos, así como también he
          adquirido experiencia en el consumo de APIs y consumo de datos
          mediante oDatas. También tengo habilidades en el manejo de archivos
          JSON, comprendiendo su estructura y accediendo a la información que
          contienen.
        </p>
        <Carousel data-bs-theme="dark" >
          <Carousel.Item className="img-skill-front">
            <img src={odata} width={"40px"} height={"40px"} alt="" />
            <img src={express} width={"50px"} alt="" />
            <img src={sql} width={"50px"} alt="" />
            <img src={mongodb} width={"50px"} alt="" />
            <img src={node} width={"50px"} alt="" />
          </Carousel.Item>
         {/*  <Carousel.Item className="img-skill-front">
            <img src={wjt} width={"50px"} alt="" />
            <img src={mongodb} width={"50px"} alt="" />
            <img src={btp} width={"50px"} alt="" />
            <img src={mongodb} width={"50px"} alt="" />
            <img src={mongodb} width={"50px"} alt="" />
          </Carousel.Item>
          <Carousel.Item className="img-skill-front">
            <img src={mongodb} width={"50px"} alt="" />
            <img src={mongodb} width={"50px"} alt="" />
            <img src={postgresql} width={"50px"} alt="" />
            <img src={mongodb} width={"50px"} alt="" />
            <img src={mongodb} width={"50px"} alt="" />
          </Carousel.Item> */}
        </Carousel>
      </article>
    </section>
  );
};

export default Habilidades;
