// src/components/Certifications.jsx
import React, { useState } from "react";
import mostrarDiploma from "../utils/modalDiploma.js";
import {
  LayoutGrid,
  Clock,
  Building2,
  ExternalLink,
  Calendar,
} from "lucide-react";

const certificados = [
  {
    id: 0,
    title: "Diplomado en Desarrollo de Software",
    institucion: "MisionTic2022",
    fecha: "2022-01",
  },
  {
    id: 4,
    title: "Full Stack Developer con JavaScript",
    institucion: "Platzi",
    fecha: "2022-09",
  },
  {
    id: 5,
    title: "FrontEnd Developer con React",
    institucion: "Platzi",
    fecha: "2022-11",
  },
  {
    id: 6,
    title: "Curso práctico de React.js",
    institucion: "Platzi",
    fecha: "2023-01",
  },
];

const Certifications = () => {
  const [viewMode, setViewMode] = useState("timeline");

  const toggleView = () => {
    setViewMode(viewMode === "timeline" ? "cards" : "timeline");
  };

  return (
    <section className="w-full">
      {/* Toggle button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleView}
          className="
            flex items-center gap-1.5 px-3 py-1.5 rounded-lg
            bg-[#0070d2] text-white text-xs font-medium
            hover:bg-[#005bb5] transition-colors duration-200
            shadow-sm cursor-pointer
          "
          aria-label={`Cambiar a vista de ${viewMode === "timeline" ? "tarjetas" : "línea de tiempo"}`}
        >
          {viewMode === "timeline" ? (
            <LayoutGrid size={14} />
          ) : (
            <Clock size={14} />
          )}
          <span>
            {viewMode === "timeline" ? "Tarjetas" : "Línea de tiempo"}
          </span>
        </button>
      </div>

      {/* === TIMELINE VIEW === */}
      {viewMode === "timeline" && (
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#d9d9d9] dark:bg-[#3c4854] md:-translate-x-px" />

          <div className="space-y-6">
            {certificados.map((cert, index) => (
              <div
                key={cert.id}
                className={`
                  relative flex items-start gap-4
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#0070d2] border-2 border-white dark:border-[#1d232a] -translate-x-1.5 mt-1.5 z-10" />

                <div
                  className={`
                  ml-10 md:ml-0 md:w-[45%]
                  ${index % 2 === 0 ? "md:pr-6 md:text-right" : "md:pl-6 md:text-left"}
                `}
                >
                  <div
                    className="
                    p-3.5 rounded-lg
                    bg-white dark:bg-[#1d232a]
                    border border-[#d9d9d9] dark:border-[#3c4854]
                    shadow-sm hover:shadow-md transition-shadow duration-200
                  "
                  >
                    <h5 className="text-sm font-semibold text-[#354A5F] dark:text-[#F5F6F7] mb-1">
                      {cert.title}
                    </h5>

                    <div
                      className={`flex items-center gap-1 text-xs text-[#6a6d70] dark:text-[#b9c5d1] mb-2.5 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                    >
                      <Building2
                        size={12}
                        className="text-[#0070d2] shrink-0"
                      />
                      <span>{cert.institucion}</span>
                    </div>

                    <button
                      onClick={() => mostrarDiploma(cert.id)}
                      className="
                        inline-flex items-center gap-1.5 px-2.5 py-1 rounded
                        text-xs font-medium
                        bg-[#e5f0fa] dark:bg-[rgba(77,177,255,0.15)]
                        text-[#0070d2] dark:text-[#4DB1FF]
                        hover:bg-[#0070d2] hover:text-white
                        dark:hover:bg-[#4DB1FF] dark:hover:text-[#1d232a]
                        transition-all duration-200 cursor-pointer
                      "
                    >
                      <ExternalLink size={12} />
                      Ver Certificado
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* === CARDS VIEW === */}
      {viewMode === "cards" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certificados.map((cert) => (
            <div
              key={cert.id}
              className="
                p-4 rounded-lg
                bg-white dark:bg-[#1d232a]
                border border-[#d9d9d9] dark:border-[#3c4854]
                shadow-sm hover:shadow-md hover:-translate-y-0.5
                transition-all duration-200 flex flex-col justify-between
              "
            >
              <div>
                <h5 className="text-sm font-semibold text-[#354A5F] dark:text-[#F5F6F7] mb-1">
                  {cert.title}
                </h5>

                <p className="text-xs text-[#6a6d70] dark:text-[#b9c5d1] mb-1 flex items-center gap-1">
                  <Building2 size={12} className="text-[#0070d2] shrink-0" />
                  <span>{cert.institucion}</span>
                </p>

                <p className="text-[11px] text-[#6a6d70] dark:text-[#b9c5d1] mb-3 flex items-center gap-1 font-mono">
                  <Calendar size={11} className="shrink-0" />
                  <span>{cert.fecha}</span>
                </p>
              </div>

              <div>
                <button
                  onClick={() => mostrarDiploma(cert.id)}
                  className="
                    inline-flex items-center gap-1.5 px-2.5 py-1 rounded
                    text-xs font-medium
                    bg-[#e5f0fa] dark:bg-[rgba(77,177,255,0.15)]
                    text-[#0070d2] dark:text-[#4DB1FF]
                    hover:bg-[#0070d2] hover:text-white
                    dark:hover:bg-[#4DB1FF] dark:hover:text-[#1d232a]
                    transition-all duration-200 cursor-pointer
                  "
                >
                  <ExternalLink size={12} />
                  Ver Certificado
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de Diplomas */}
      <div
        id="diplomaModal"
        className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
      >
        <div className="relative max-w-3xl w-full bg-white dark:bg-[#1d232a] rounded-xl shadow-2xl p-2 md:p-4 overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Botón de Cierre */}
          <button
            className="close absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer text-xl font-bold"
            aria-label="Cerrar modal"
          >
            &times;
          </button>

          {/* Imagen del Diploma */}
          <div className="w-full max-h-[80vh] flex items-center justify-center overflow-hidden rounded-lg">
            <img
              className="modal-content max-w-full max-h-[75vh] object-contain rounded-lg"
              id="modalImage"
              alt="Diploma"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
