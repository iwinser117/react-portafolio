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

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: <FileText size={28} />,
      title: "Generación de PDF a medida",
      subtitle: "Documentos inteligentes",
      description:
        "Creación de documentos PDF dinámicos con datos recuperados de la infraestructura del cliente, con múltiples páginas y formatos personalizados.",
      features: [
        "Documentos de n páginas",
        "Datos desde APIs internas",
        "Personalización de formatos",
        "Entrega por email o portal",
      ],
    },
    {
      id: 2,
      icon: <Mail size={28} />,
      title: "Organización de Bandejas de Correo",
      subtitle: "Gestión inteligente",
      description:
        "Optimización y gestión inteligente de bandejas de entrada con automatización de flujos de trabajo y clasificación de correos.",
      features: [
        "Clasificación automática",
        "Flujos de trabajo personalizados",
        "Integración con SAP CPI",
        "Dashboard de métricas",
      ],
    },
    {
      id: 3,
      icon: <Zap size={28} />,
      title: "Mejora de Procesos en CPI",
      subtitle: "Integración optimizada",
      description:
        "Optimización de integraciones en SAP Cloud Platform Integration para mejorar rendimiento, reducir tiempos y aumentar eficiencia.",
      features: [
        "Análisis de rendimiento",
        "Optimización de flujos",
        "Reducción de latencia",
        "Monitoreo avanzado",
      ],
    },
    {
      id: 4,
      icon: <Database size={28} />,
      title: "Consumo y Servicio de Datos",
      subtitle: "Datos en tiempo real",
      description:
        "Recuperación, procesamiento y entrega de datos desde la infraestructura del cliente hacia portales propios o del cliente.",
      features: [
        "Integración de APIs",
        "Procesamiento de datos",
        "Portales personalizados",
        "Entrega multicanal",
      ],
    },
    {
      id: 5,
      icon: <Cloud size={28} />,
      title: "Portal de Clientes",
      subtitle: "Acceso seguro",
      description:
        "Desarrollo de portales web para que los clientes accedan a sus documentos, reportes y datos en tiempo real.",
      features: [
        "Acceso seguro",
        "Documentos en tiempo real",
        "Dashboard personalizado",
        "Descarga de reportes",
      ],
    },
    {
      id: 6,
      icon: <TrendingUp size={28} />,
      title: "Consultoría SAP BTP",
      subtitle: "Transformación digital",
      description:
        "Asesoría y desarrollo de soluciones en SAP Business Technology Platform para optimizar procesos empresariales.",
      features: [
        "Análisis de procesos",
        "Arquitectura de soluciones",
        "Implementación ágil",
        "Soporte continuo",
      ],
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Hero Section - Sin fondo especial */}
      <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#232946] dark:text-[#F5F6F7] mb-4 tracking-tight">
          Soluciones personalizadas
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
          Desarrollo soluciones de software integrales para empresas y
          organizaciones, desde entornos SAP BTP —incluyendo automatizaciones
          con SAP Build e integraciones mediante SAP CPI— hasta aplicaciones web
          a medida.
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

              {/* Imagen placeholder */}
              <div className="relative">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
                    <span className="text-sm">Imagen del servicio</span>
                  </div>
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
            Tecnologías
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            Conjunto de tecnologías utilizadas en el desarrollo de aplicaciones,
            integraciones y soluciones empresariales.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              title: "Frontend",
              techs: [
                "React",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Bootstrap",
              ],
            },
            {
              title: "Backend & DB",
              techs: [
                "Node.js",
                "Express",
                "MongoDB",
                "SQL",
                "Python",
                "SAP CAP",
              ],
            },
            {
              title: "SAP Ecosystem",
              techs: [
                "SAP BTP",
                "SAP UI5",
                "SAP CPI",
                "SAP Build Process Automation",
                "Cloud Foundry",
                "XSJS",
                "CDS",
              ],
            },
            {
              title: "Integración",
              techs: [
                "REST",
                "SOAP",
                "OData",
                "XML",
                "JSON",
                "Cloud Integration Platform",
              ],
            },
          ].map((category) => (
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
          ¿Listo para transformar tu negocio?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 font-light mb-6 max-w-2xl mx-auto">
          Contáctame para discutir cómo puedo ayudarte a implementar estas
          soluciones
        </p>
        <a
          href="#contactame"
          className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#232946] dark:border-[#F5F6F7] text-[#232946] dark:text-[#F5F6F7] hover:bg-[#232946] dark:hover:bg-[#F5F6F7] hover:text-white dark:hover:text-[#232946] transition-all duration-300 text-sm font-medium"
        >
          <span>Contactar ahora</span>
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
};

export default Services;
