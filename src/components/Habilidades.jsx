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
          Especializado en la creación de interfaces de usuario alto rendimiento
          y escalables. Mi enfoque principal es el ecosistema{" "}
          <strong>React y Next.js</strong>, donde diseño arquitecturas de
          componentes reutilizables y optimizadas. Además, poseo una ventaja
          competitiva en el desarrollo de aplicaciones empresariales con SAP
          UI5, asegurando una experiencia de usuario fluida (UX) e integraciones
          robustas con sistemas back-end. Experto en maquetación avanzada con
          HTML5, CSS3 y frameworks de utilidad como Tailwind CSS
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
          Especializado en el diseño y construcción de arquitecturas del lado
          del servidor robustas y escalables. Mi enfoque principal es el
          ecosistema <strong>Node.js (Express/Runtime)</strong>, con amplia experiencia en la
          creación de servicios bajo el modelo <strong>SAP CAP (Cloud Application
          Programming)</strong>. Experto en el diseño de bases de datos relacionales
          (SQL) y no relacionales (MongoDB), optimizando la integridad y el
          acceso a los datos. Implemento comunicaciones eficientes mediante <strong>APIs
          REST</strong> y servicios <strong>oData</strong>, garantizando integraciones fluidas en entornos
          empresariales complejos.
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
