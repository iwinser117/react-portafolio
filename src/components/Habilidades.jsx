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
          Tengo experiencia en HTML, CSS y JavaScript para el desarrollo de
          sitios web. En cuanto a HTML, me especializo en la creación de
          estructuras semánticas que permiten la accesibilidad y generan un
          impacto visual atractivo para los usuarios. En CSS, poseo un nivel
          intermedio y disfruto explorar las propiedades que permiten estilizar
          mis proyectos. Además, me gusta utilizar CSS para crear diseños
          responsivos que se adapten a diferentes dispositivos.
        </p>
        <p>
          Considero que JavaScript es un lenguaje sumamente importante tanto en
          el frontend como en el backend. Me encanta trabajar con JavaScript
          debido a su capacidad para manejar eventos, manipular el DOM y brindar
          interactividad en el frontend. <br />
        </p>
        <p>
          En continua formación para mantenerme al dia con las nuevas
          tecnologias.
        </p>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={react} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={htmlimg} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={bootstrap} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={ui5} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={css} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={xml} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={json} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={react} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={htmlimg} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={bootstrap} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={ui5} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={css} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={xml} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={json} height="60" width="150" alt="" />
            </div>
          </div>
        </div>
      </article>
      <article>
        <h3>
          <i className="fa-solid fa-server"></i> Backend
        </h3>
        <p>
          Poseo sólidos conocimientos en estructuras de datos y habilidades para
          brindar soluciones a problemas lógicos en la parte backend de una
          aplicación o servicio.
        </p>

        <p>
          He trabajado con diversos lenguajes de programación como Python, Java
          y JavaScript (NodeJs). En particular, he estado enfocándome en el
          desarrollo y manejo de bases de datos, especialmente con SQL y
          MongoDB. Me he familiarizado con los distintos métodos para
          interactuar con estas bases de datos, así como también he adquirido
          experiencia en el consumo de APIs (REST) y consumo de datos mediante
          oDatas. También tengo habilidades en el manejo de archivos JSON,
          comprendiendo su estructura y accediendo a la información que
          contienen.
        </p>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={odata} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={express} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={sql} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={mongodb} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={node} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={odata} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={express} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={sql} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={mongodb} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={node} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={express} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={sql} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={mongodb} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={node} height="60" width="150" alt="" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Habilidades;
