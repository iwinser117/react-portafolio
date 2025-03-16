import React, { useState } from "react";
import mostrarDiploma from "../utils/modalDiploma.js";
import "@styles/Certificados.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Certificados = () => {
  // Estado para controlar el tipo de vista (timeline o cards)
  const [viewMode, setViewMode] = useState("timeline");

  const certificados = [
    {
      id: 0,
      title: "Diplomado en Desarrollo de Software",
      institucion: "MisionTic2022",
      fecha: "2022-01",
    },
    {
      id: 1,
      title: "Diplomado en Desarrollo de Aplicaciones Web",
      institucion: "MisionTic2022",
      fecha: "2022-03",
    },
    {
      id: 2,
      title: "Diplomado en Programación Básica Lenguaje Java",
      institucion: "MisionTic2022",
      fecha: "2022-05",
    },
    {
      id: 3,
      title: "Diplomado Fundamentos de Programación en Python",
      institucion: "MisionTic2022",
      fecha: "2022-07",
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

  // Función para cambiar entre vistas
  const toggleView = () => {
    setViewMode(viewMode === "timeline" ? "cards" : "timeline");
  };

  return (
    <div className="certificados-container">
      <div className="view-toggle-container">
        <button
          className="view-toggle-btn"
          onClick={toggleView}
          aria-label="Cambiar vista"
        >
          {viewMode === "timeline" ? (
            <i className="fa-solid fa-table-cells-large"></i>
          ) : (
            <i className="fa-solid fa-timeline"></i>
          )}{" "}
          {viewMode === "timeline" ? "Cards" : "Timeline"}
        </button>
      </div>

      {viewMode === "timeline" ? (
        <Timeline position="alternate">
          {certificados.map((cert) => (
            <TimelineItem key={cert.id}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {cert.id < certificados.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <div className="timeline-content">
                  <p className="title">{cert.title}</p>
                  <p className="institucion">
                    <i className="fa-solid fa-trophy"></i> {cert.institucion}
                  </p>
                  {/* <p className="fecha">{cert.fecha}</p> */}
                  <button
                    className="view-link"
                    onClick={() => mostrarDiploma(cert.id)}
                    aria-label={`Ver certificado de ${cert.title}`}
                  >
                    <i className="fa-solid fa-magnifying-glass"></i> Ver
                    Certificado
                  </button>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      ) : (
        <div className="cards-container">
          {certificados.map((cert) => (
            <div className="card" key={cert.id}>
              <div className="card-content">
                <p className="title">{cert.title}</p>
                <p className="institucion">
                  <i className="fa-solid fa-trophy"></i> {cert.institucion}
                </p>
                <p className="fecha">{cert.fecha}</p>
                <button
                  className="view-link"
                  onClick={() => mostrarDiploma(cert.id)}
                  aria-label={`Ver certificado de ${cert.title}`}
                >
                  <i className="fa-solid fa-magnifying-glass"></i> Ver
                  Certificado
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div id="diplomaModal" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="modalImage" />
      </div>
    </div>
  );
};

export default Certificados;
