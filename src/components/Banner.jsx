
// src/components/Banner.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Github,
  Linkedin,
  FileText,
  Code2,
  Workflow,
  Layers3,
} from "lucide-react";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full flex justify-center items-center py-8 md:py-12">
      <div
        className="
          w-full max-w-5xl
          flex flex-col md:flex-row
          items-center justify-between
          gap-10 md:gap-16
          px-4 sm:px-6
        "
      >
        {/* IZQUIERDA */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

            <span className="text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-400">
              Available for projects
            </span>
          </div>

          <h1
            className="
              font-mono font-bold
              text-3xl sm:text-4xl lg:text-5xl
              text-[#354A5F] dark:text-[#F5F6F7]
              mb-2
            "
          >
            Iwinser Sanchez
          </h1>

          <h2
            className="
              text-lg sm:text-xl lg:text-2xl
              font-semibold
              text-[#0070d2] dark:text-[#4DB1FF]
              mb-4
              max-w-xl
            "
          >
            {t("banner.title")}
          </h2>

          <p
            className="
              text-sm sm:text-base
              text-[#6a6d70] dark:text-[#b9c5d1]
              leading-relaxed
              max-w-xl
            "
          >
            {t("banner.description")}
          </p>
        </div>

        {/* DERECHA - SERVICIOS */}
        <div className="w-full md:w-[350px] shrink-0">
          <div
            className="
              rounded-2xl
              border border-[#d9d9d9] dark:border-[#3c4854]
              bg-white dark:bg-[#151b21]
              shadow-lg
              overflow-hidden
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl
            "
          >
            {/* Header */}
            <div
              className="
                px-5 py-3
                border-b border-[#d9d9d9] dark:border-[#3c4854]
                bg-gray-50 dark:bg-[#1d232a]
              "
            >
              <div className="flex items-center justify-between">
                <span
                  className="
                    text-xs font-mono font-semibold
                    text-gray-600 dark:text-gray-300
                  "
                >
                  services.json
                </span>

                <span className="text-xs font-mono text-green-500">
                  3 services
                </span>
              </div>
            </div>

            {/* Services */}
            <div className="p-5 space-y-4">
              {/* Desarrollo */}
              <div className="flex gap-3">
                <div
                  className="
                    w-10 h-10 shrink-0
                    rounded-lg
                    flex items-center justify-center
                    bg-blue-50 dark:bg-blue-900/20
                    text-[#0070d2] dark:text-[#4DB1FF]
                  "
                >
                  <Code2 size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#354A5F] dark:text-white">
                    Desarrollo
                  </h3>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Aplicaciones web y soluciones empresariales
                  </p>
                </div>
              </div>

              {/* Automatización */}
              <div className="flex gap-3">
                <div
                  className="
                    w-10 h-10 shrink-0
                    rounded-lg
                    flex items-center justify-center
                    bg-purple-50 dark:bg-purple-900/20
                    text-purple-600 dark:text-purple-400
                  "
                >
                  <Workflow size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#354A5F] dark:text-white">
                    Automatización
                  </h3>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Procesos, APIs e integración de sistemas
                  </p>
                </div>
              </div>

              {/* Integración */}
              <div className="flex gap-3">
                <div
                  className="
                    w-10 h-10 shrink-0
                    rounded-lg
                    flex items-center justify-center
                    bg-green-50 dark:bg-green-900/20
                    text-green-600 dark:text-green-400
                  "
                >
                  <Layers3 size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#354A5F] dark:text-white">
                    Integración
                  </h3>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    SAP BTP, plataformas y sistemas empresariales
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div
                className="
                  pt-4
                  border-t border-gray-200 dark:border-[#3c4854]
                "
              >
                <div className="flex flex-wrap gap-2">
                  {["React", "JavaScript", "Node.js", "SAP BTP"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="
                          px-2.5 py-1
                          rounded-md
                          text-[11px] font-mono
                          bg-gray-100 dark:bg-[#242c34]
                          border border-gray-200 dark:border-[#3c4854]
                          text-gray-600 dark:text-gray-300
                        "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-2 pt-1">
                <a
                  href="https://github.com/iwinser117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1 flex items-center justify-center gap-1.5
                    py-2 rounded-lg
                    bg-gray-100 dark:bg-[#1d232a]
                    text-gray-700 dark:text-gray-200
                    border border-gray-200 dark:border-[#3c4854]
                    hover:bg-gray-200 dark:hover:bg-[#2a333d]
                    transition-all duration-200
                  "
                >
                  <Github size={15} />
                  <span className="text-xs">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/iwinser-aljadys-sanchez-0a62a0234/?originalSubdomain=co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1 flex items-center justify-center gap-1.5
                    py-2 rounded-lg
                    bg-gray-100 dark:bg-[#1d232a]
                    text-gray-700 dark:text-gray-200
                    border border-gray-200 dark:border-[#3c4854]
                    hover:bg-blue-50 dark:hover:bg-blue-900/20
                    hover:text-blue-600 dark:hover:text-blue-400
                    transition-all duration-200
                  "
                >
                  <Linkedin size={15} />
                  <span className="text-xs">LinkedIn</span>
                </a>

                <a
                  download="CurriculumDeveloperIwinserSanchez"
                  href="../assets/IwinserSanchez.pdf"
                  className="
                    flex-1 flex items-center justify-center gap-1.5
                    py-2 rounded-lg
                    bg-gray-100 dark:bg-[#1d232a]
                    text-gray-700 dark:text-gray-200
                    border border-gray-200 dark:border-[#3c4854]
                    hover:bg-red-50 dark:hover:bg-red-900/20
                    hover:text-red-600 dark:hover:text-red-400
                    transition-all duration-200
                  "
                >
                  <FileText size={15} />
                  <span className="text-xs">CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;