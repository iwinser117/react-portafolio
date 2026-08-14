// src/pages/Services.jsx - CON SEPARADORES SUTILES Y FONDO CONSISTENTE
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FileText,
  Mail,
  Zap,
  Database,
  Cloud,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import img_generate_pdf from "@assets/Gemini_Generated_Image_pdf_services.webp";
import img_inbox from "@assets/ChatGPT-Image-auto_emails.webp";
import img_cpi from "@assets/ChatGPT-Image-process_cpi.webp";
import img_data from "@assets/ChatGPT-Image-consumo_data.webp";
import img_portal from "@assets/ChatGPT-Image-portal.webp";
import img_consulting from "@assets/ChatGPT-Image-consultoria.webp";

import Formulario from "@components/Formulario";
import Footer from "@components/Footer";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: <FileText size={28} />,
      image: img_generate_pdf,
      ...t("services.items.pdf", { returnObjects: true }),
    },
    {
      id: 2,
      icon: <Mail size={28} />,
      image: img_inbox,
      ...t("services.items.inbox", { returnObjects: true }),
    },
    {
      id: 3,
      image: img_cpi,
      icon: <Zap size={28} />,
      ...t("services.items.cpi", { returnObjects: true }),
    },
    {
      id: 4,
      icon: <Database size={28} />,
      image: img_data,
      ...t("services.items.data", { returnObjects: true }),
    },
    {
      id: 5,
      image: img_portal,
      icon: <Cloud size={28} />,
      ...t("services.items.portal", { returnObjects: true }),
    },
    {
      id: 6,
      icon: <TrendingUp size={28} />,
      image: img_consulting,
      ...t("services.items.consulting", { returnObjects: true }),
    },
  ];

  const technologyCategories = t("services.technologies.categories", {
    returnObjects: true,
  });

  return (
    <>
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Hero Section - Sin fondo especial */}
      <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#232946] dark:text-[#F5F6F7] mb-4 tracking-tight">
          {t("services.hero.title")}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
          {t("services.hero.description")}
        </p>
      </div>

      {/* Servicios - Secciones con separadores sutiles */}
      <div className="space-y-16 md:space-y-20">
        {services.map((service, index) => (
          <div key={service.id} className="relative">
            {/* Separador entre servicios (excepto el primero) */}
            {index > 0 && (
              <div className="absolute -top-8 md:-top-10 left-0 right-0 flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
                <span className="text-xs font-medium text-gray-400 dark:text-gray-600 tracking-wider">
                  {`0${index + 1}`}
                </span>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
              </div>
            )}

            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""} pt-8`}
            >
              {/* Contenido */}
              <div
                className={`space-y-5 ${index % 2 === 1 ? "lg:order-last" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#004085] dark:text-[#4DB1FF]">
                    {service.icon}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {service.subtitle}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#232946] dark:text-[#F5F6F7] tracking-tight leading-tight">
                  {service.title}
                </h2>

                <p className="text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2.5 pt-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircle
                        size={18}
                        className="shrink-0 mt-0.5 text-[#004085] dark:text-[#4DB1FF]"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
                      <span className="text-sm">
                        {t("services.imagePlaceholder")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tecnologías - Sin fondo especial */}
      <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-[#232946] dark:text-[#F5F6F7] mb-3">
            {t("services.technologies.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            {t("services.technologies.description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {technologyCategories.map((category) => (
            <div key={category.title} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#004085] dark:text-[#4DB1FF]">
                {category.title}
              </h4>
              <ul className="space-y-1.5">
                {category.techs.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm text-gray-600 dark:text-gray-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final - Sin fondo especial */}
      <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800 text-center">
        <h3 className="text-2xl sm:text-3xl font-light text-[#232946] dark:text-[#F5F6F7] mb-3">
          {t("services.cta.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 font-light mb-6 max-w-2xl mx-auto">
          {t("services.cta.description")}
        </p>
        <Formulario />
        {/* <a
          href="#contactame"
          className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#232946] dark:border-[#F5F6F7] text-[#232946] dark:text-[#F5F6F7] hover:bg-[#232946] dark:hover:bg-[#F5F6F7] hover:text-white dark:hover:text-[#232946] transition-all duration-300 text-sm font-medium"
        >
          <span>{t("services.cta.button")}</span>
          <ArrowRight size={18} />
        </a> */}
      </div>

    </div>
    <Footer />
    </>
  );
};

export default Services;
