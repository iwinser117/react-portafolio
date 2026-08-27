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

      {/* Disposición fluida basada en filas lisas (sin contenedor "Card") */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {technologies.map((category) => (
          <div
            key={category.title}
            className="py-3 border-b border-[#e8eaed] dark:border-[#2a333d]"
          >
            <h3 className="text-base sm:text-lg font-semibold text-[#354A5F] dark:text-[#F5F6F7] mb-1">
              {category.title}
            </h3>
            
            <p className={`text-xs sm:text-sm mb-3 ${isDarkMode ? "text-[#b9c5d1]" : "text-[#6a6d70]"}`}>
              {category.description}
            </p>

            {/* Badges tipo SAP Horizon: limpios, sobrios y sin estridencia */}
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((tech) => (
                <span
                  key={tech}
                  className="
                    inline-flex items-center px-2.5 py-1 rounded-md
                    text-xs font-mono font-medium
                    bg-gray-100/70 dark:bg-[#1d232a]
                    text-[#354A5F] dark:text-[#F5F6F7]
                    border border-[#d9d9d9]/60 dark:border-[#3c4854]/60
                    hover:border-[#0070d2] dark:hover:border-[#4DB1FF]
                    transition-colors duration-150
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