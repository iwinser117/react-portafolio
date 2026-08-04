// src/components/CategoriesTecnologie.jsx
import React from "react";
import { useDarkMode } from "./Settingsmanager";
import { useTranslation } from "react-i18next";

const technologies = [
  {
    title: "Frontend",
    description: "Desarrollo de interfaces web modernas y responsivas.",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend & DB",
    description: "Desarrollo de APIs, lógica de negocio y bases de datos.",
    items: ["Node.js", "Express", "MongoDB", "SQL", "Python", "SAP CAP", "SAP HANA"],
  },
  {
    title: "SAP Ecosystem",
    description: "Desarrollo e integración de soluciones empresariales sobre SAP.",
    items: ["SAP BTP", "SAP UI5", "SAP CPI", "SAP Build Process Automation", "Cloud Foundry", "XSJS", "CDS"],
  },
  {
    title: "Integración",
    description: "Comunicación entre sistemas y servicios empresariales.",
    items: ["REST", "SOAP", "OData", "XML", "JSON", "Cloud Integration Platform"],
  },
];

const TechnologiesSection = () => {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#354A5F] dark:text-[#F5F6F7] mb-1">
          {t("technologies.title", "Tecnologías")}
        </h2>
        <p className="text-sm sm:text-base text-[#6a6d70] dark:text-[#b9c5d1]">
          {t("technologies.description", "Conjunto de tecnologías utilizadas en el desarrollo de aplicaciones, integraciones y soluciones empresariales.")}
        </p>
      </div>

      {/* Grid de categorías */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {technologies.map((category) => (
          <div
            key={category.title}
            className="
              h-full p-4 sm:p-5 rounded-xl
              bg-white dark:bg-[#1d232a]
              border border-[#d9d9d9] dark:border-[#3c4854]
              transition-all duration-300 ease-in-out
              hover:-translate-y-1 hover:border-[#0070d2] dark:hover:border-[#4DB1FF]
              shadow-sm hover:shadow-md
            "
          >
            <h3 className="text-base sm:text-lg font-semibold text-[#354A5F] dark:text-[#F5F6F7] mb-1">
              {category.title}
            </h3>
            
            <p className={`text-xs sm:text-sm mb-3 ${isDarkMode ? "text-[#b9c5d1]" : "text-[#6a6d70]"}`}>
              {category.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {category.items.map((tech) => (
                <span
                  key={tech}
                  className="
                    inline-flex items-center px-2.5 py-1 rounded-md
                    text-xs font-medium
                    border border-[#d9d9d9] dark:border-[#3c4854]
                    text-[#354A5F] dark:text-[#F5F6F7]
                    bg-transparent
                    transition-colors duration-200
                    hover:bg-[#e5f0fa] dark:hover:bg-[rgba(77,177,255,0.15)]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;