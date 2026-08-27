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

  const services = [
    {
      icon: Code2,
      title: "Desarrollo",
      description: "Aplicaciones web y soluciones empresariales",
    },
    {
      icon: Workflow,
      title: "Automatización",
      description: "Procesos, APIs e integración de sistemas",
    },
    {
      icon: Layers3,
      title: "Integración",
      description: "SAP BTP, plataformas y sistemas empresariales",
    },
  ];

  return (
    <section className="w-full flex justify-center items-center py-12 md:py-16">
      <div className="w-full max-w-6xl px-4 sm:px-6">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Título principal */}
          <h1 className="font-mono font-bold text-4xl sm:text-5xl lg:text-6xl text-[#354A5F] dark:text-[#F5F6F7] mb-2">
            Iwinser Sanchez
          </h1>

          {/* Subtítulo */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0070d2] dark:text-[#4DB1FF]">
              {t("banner.title") || "Desarrollador FullStack · SAP BTP"}
            </h2>
          </div>

          {/* Descripción */}
          <p className="text-sm sm:text-base text-[#6a6d70] dark:text-[#b9c5d1] leading-relaxed max-w-2xl mx-auto">
            {t("banner.description") || 
              "Desarrollo, automatizo e integro sistemas mediante código, APIs y bots. Especializado en SAP BTP, aplicaciones web y soluciones empresariales escalables."}
          </p>

          {/* Redes sociales y CV - Botones principales */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href="https://github.com/iwinser117"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e8eaed] dark:border-[#2a333d] bg-white/60 dark:bg-[#0f151c]/60 text-[#354A5F] dark:text-[#F5F6F7] hover:border-[#0070d2] dark:hover:border-[#4DB1FF] hover:bg-white dark:hover:bg-[#1d232a] hover:text-[#0070d2] dark:hover:text-[#4DB1FF] transition-all duration-200 text-sm font-medium shadow-sm"
              aria-label="GitHub"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/iwinser-aljadys-sanchez-0a62a0234/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e8eaed] dark:border-[#2a333d] bg-white/60 dark:bg-[#0f151c]/60 text-[#354A5F] dark:text-[#F5F6F7] hover:border-[#0070d2] dark:hover:border-[#4DB1FF] hover:bg-white dark:hover:bg-[#1d232a] hover:text-[#0070d2] dark:hover:text-[#4DB1FF] transition-all duration-200 text-sm font-medium shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              download="CurriculumDeveloperIwinserSanchez"
              href="../assets/IwinserSanchez.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#0070d2] dark:bg-[#4DB1FF] text-white hover:bg-[#0058a3] dark:hover:bg-[#3a9ee6] transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md"
            >
              <FileText size={18} />
              <span>Descargar CV</span>
            </a>
          </div>
        </div>

        {/* Servicios */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-start gap-3 p-4 rounded-xl border border-[#e8eaed] dark:border-[#2a333d] hover:border-[#0070d2] dark:hover:border-[#4DB1FF] hover:shadow-md transition-all duration-200 bg-white/50 dark:bg-[#0f151c]/50"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-[#0070d2] dark:text-[#4DB1FF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                <service.icon size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#354A5F] dark:text-white">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;