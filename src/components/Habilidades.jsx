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
import { useTranslation } from "react-i18next";

const Habilidades = () => {
  const { t } = useTranslation();
  return (
    <section className="container  acerca-cnt col-8  lh-lg">
      <article id="habilidades" className="pt-3">
        <h3>{t('skills.title')}</h3>
      </article>
      <article className="pt-3">
        <h3>
          <i className="fa-solid fa-display"></i> {t('skills.frontend')}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: t('skills.frontendDescription') }} />
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
          <i className="fa-solid fa-server"></i> {t('skills.backend')}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: t('skills.backendDescription') }} />
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
