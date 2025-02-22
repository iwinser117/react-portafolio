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
import sql from "../assets/mysql.svg";
import node from "../assets/nodejs.svg";
import json from "../assets/json.svg";
import postgresql from "../assets/postgresql.svg";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import wjt from "../assets/wjt.svg";
import sap from "../assets/sap.svg";
const Habilidades = () => {
  return (
    <section className="container  acerca-cnt col-8  lh-lg">
      <article id="habilidades" className="pt-3">
        <h3>Habilidades</h3>
      </article>
      <article className="pt-3">
        <h3>
          <i className="fa-solid fa-display"></i> Front-end
        </h3>
        <p>
          Poseo un alto nivel de experiencia en Desarrollo FrontEnd haciendo uso de frameworks y librerías de JavaScript, como <strong>React</strong>, <strong>NextJs</strong> y <strong>UI5</strong>. También tengo experiencia en el desarrollo de aplicaciones web con <strong>HTML5</strong>, <strong>CSS3</strong> e implementación de componentes. <br />
        </p>
        <p>
          Considero que JavaScript es un lenguaje sumamente importante tanto en
          el frontend como en el backend. Me encanta trabajar con JavaScript
          debido a su capacidad para manejar eventos, manipular el <strong>DOM</strong> y brindar
          interactividad en el frontend. <br />
        </p>
        <p>
          En continua formación para mantenerme al dia con las nuevas
          tecnologías.
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
          He trabajado con diversos lenguajes de programación como <strong>Python, Java
            y JavaScript (NodeJs)</strong>. En particular, he estado enfocándome en el
          desarrollo y manejo de bases de datos, especialmente con <strong>SQL</strong>
          y <strong>MongoDB</strong>. Me he familiarizado con los distintos métodos para
          interactuar con estas bases de datos, así como también he adquirido
          experiencia en el consumo de APIs (REST) y consumo de datos mediante
          oDatas. También tengo habilidades en el manejo de archivos JSON,
          comprendiendo su estructura y accediendo a la información que
          contienen.
        </p>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={wjt} height="60" width="150" alt="" />
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
              <img src={sap} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={postgresql} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={wjt} height="60" width="150" alt="" />
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
              <img src={sap} height="60" width="150" alt="" />
            </div>
            <div className="slide">
              <img src={postgresql} height="60" width="150" alt="" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Habilidades;
