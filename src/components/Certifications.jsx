import React from "react";
import mostrarDiploma from "../utils/modalDiploma.js";
import "@styles/Certificados.css";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Certificados = () => {
  const certificados = [
    {
      id: 0,
      title: "Diplomado en Desarrollo de Software",
      institucion: "MisionTic2022",
      fecha: "2022-01"
    },
    {
      id: 1,
      title: "Diplomado en Desarrollo de Aplicaciones Web",
      institucion: "MisionTic2022",
      fecha: "2022-03"
    },
    {
      id: 2,
      title: "Diplomado en Programación Básica Lenguaje Java",
      institucion: "MisionTic2022",
      fecha: "2022-05"
    },
    {
      id: 3,
      title: "Diplomado Fundamentos de Programación en Python",
      institucion: "MisionTic2022",
      fecha: "2022-07"
    },
    {
      id: 4,
      title: "Full Stack Developer con JavaScript",
      institucion: "Platzi",
      fecha: "2022-09"
    },
    {
      id: 5,
      title: "FrontEnd Developer con React",
      institucion: "Platzi",
      fecha: "2022-11"
    },
    {
      id: 6,
      title: "Curso práctico de React.js",
      institucion: "Platzi",
      fecha: "2023-01"
    },
  ];

  return (
    <div className="certificados-container">
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
                <p className="fecha">{cert.fecha}</p>
                <button
                  className="view-link"
                  onClick={() => mostrarDiploma(cert.id)}
                  aria-label={`Ver certificado de ${cert.title}`}
                >
                  <i className="fa-solid fa-magnifying-glass"></i> Ver Certificado
                </button>
              </div>
            </TimelineContent>
            <div id="diplomaModal" class="modal">
              <span class="close">&times;</span>
              <img class="modal-content" id="modalImage"/>
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Certificados;