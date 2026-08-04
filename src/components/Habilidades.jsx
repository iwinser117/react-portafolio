// src/components/Habilidades.jsx
import React from "react";
import { Monitor, Server } from "lucide-react";
import { useTranslation } from "react-i18next";

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

const frontendTechs = [
  { name: "React", icon: react },
  { name: "HTML5", icon: htmlimg },
  { name: "CSS3", icon: css },
  { name: "SAP UI5", icon: ui5 },
  { name: "Bootstrap", icon: bootstrap },
  { name: "XML", icon: xml },
  { name: "JSON", icon: json },
];

const backendTechs = [
  { name: "Node.js", icon: node },
  { name: "Express", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: sql },
  { name: "PostgreSQL", icon: postgresql },
  { name: "JWT", icon: wjt },
  { name: "SAP BTP", icon: sap },
];

const Habilidades = () => {
  const { t } = useTranslation();

  return (
    <section
      id="habilidades"
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6"
    >
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 text-[#354A5F] dark:text-[#F5F6F7]">
        {t("skills.title")}
      </h3>

      {/* SECCIÓN FRONTEND */}
      <article className="mb-12">
        <h4 className="text-lg font-semibold text-[#0070d2] dark:text-[#4DB1FF] mb-2 flex items-center gap-2">
          <Monitor size={20} />
          <span>{t("skills.frontend")}</span>
        </h4>
        <p
          className="w-full text-sm sm:text-base text-[#6a6d70] dark:text-[#b9c5d1] leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: t("skills.frontendDescription") }}
        />

        {/* Infinite Slider Wrapper con máscaras de degradado a los lados */}
        <div className="relative w-full overflow-hidden py-4 [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,_black_calc(100%-128px),_transparent_100%)]">
          <div className="animate-infinite-scroll flex items-center gap-8 md:gap-12">
            {/* Duplicamos el array para que el scroll sea infinito sin saltos */}
            {[...frontendTechs, ...frontendTechs].map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center shrink-0 w-24 group cursor-pointer"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-125 filter drop-shadow-sm"
                />
                <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* SECCIÓN BACKEND */}
      <article className="mb-6">
        <h4 className="text-lg font-semibold text-[#0070d2] dark:text-[#4DB1FF] mb-2 flex items-center gap-2">
          <Server size={20} />
          <span>{t("skills.backend")}</span>
        </h4>
        <p
          className="w-full text-sm sm:text-base text-[#6a6d70] dark:text-[#b9c5d1] leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: t("skills.frontendDescription") }}
        />

        {/* Infinite Slider Wrapper */}
        <div className="relative w-full overflow-hidden py-4 [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,_black_calc(100%-128px),_transparent_100%)]">
          <div className="animate-infinite-scroll flex items-center gap-8 md:gap-12">
            {[...backendTechs, ...backendTechs].map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center shrink-0 w-24 group cursor-pointer"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-125 filter drop-shadow-sm"
                />
                <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Habilidades;
