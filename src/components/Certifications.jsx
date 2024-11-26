import React from "react";
import mostrarDiploma from "../utils/modalDiploma.js";
import "@styles/Certificados.css";

const Certificados = () => {
  const certificados = [
    {
      id: 0,
      title: "Diplomado en Desarrollo de Software",
      institucion: "MisionTic2022",
    },
    {
      id: 1,
      title: "Diplomado en Desarrollo de Aplicaciones Web",
      institucion: "MisionTic2022",
    },
    {
      id: 2,
      title: "Diplomado en Programación Básica Lenguaje Java",
      institucion: "MisionTic2022",
    },
    {
      id: 3,
      title: "Diplomado Fundamentos de Programación en Python",
      institucion: "MisionTic2022",
    },
    {
      id: 4,
      title: "Full Stack Developer con JavaScript",
      institucion: "Platzi",
    },
    {
      id: 5,
      title: "FrontEnd Developer con React",
      institucion: "Platzi",
    },
    {
      id: 6,
      title: "Curso práctico de React.js",
      institucion: "Platzi",
    },
  ];

  return (
    <div className="certificados-container">
      {certificados.map((cert) => (
        <div className="cert-card" key={cert.id}>
          <h3>{cert.title}</h3>
          <p>
            <i className="fa-solid fa-trophy"></i> {cert.institucion}
          </p>
          <button
            className="view-link"
            onClick={() => mostrarDiploma(cert.id)} 
            aria-label={`Ver certificado de ${cert.title}`}
          >
            <i className="fa-solid fa-magnifying-glass"></i> Ver Certificado
          </button>
        </div>
      ))}
    </div>
  );
};

export default Certificados;