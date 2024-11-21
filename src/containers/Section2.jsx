import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { utcToZonedTime } from "date-fns-tz";
import "@styles/letra.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import { FaNodeJs, FaExternalLinkAlt } from 'react-icons/fa';
import TableExport from "@codigoProyectos/TableExport";

import generatePassword from "@assets/generatePassword.webp";
import imgtablaExport from "../assets/imgtablaExport.png";
import login from "../assets/login.png";

export default function App() {
  const [modals, setModals] = useState({
    tableExport: false,
  });
  const [lastUpdatedData1, setLastUpdatedData1] = useState("");
  const [lastUpdatedData2, setLastUpdatedData2] = useState("");
  const [lastUpdatedData3, setLastUpdatedData3] = useState("");

  const owner = "iwinser117";
  const repositories = ["TableExportJS", "autenticate", "generatepassword"];

  const fetchData = async (repoName) => {
    const cacheKey = `lastUpdatedData-${repoName}`;
    const cachedData = localStorage.getItem(cacheKey);
    
    if (cachedData) {
      if (repoName === "TableExportJS") setLastUpdatedData1(cachedData);
      if (repoName === "autenticate") setLastUpdatedData2(cachedData);
      if (repoName === "generatepassword") setLastUpdatedData3(cachedData);
      return;
    }

    try {
      const apiUrl = `https://api.github.com/repos/${owner}/${repoName}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (!data.message) {
        const formattedDate = fechaFormateada(new Date(data.pushed_at));
        localStorage.setItem(cacheKey, formattedDate);
        if (repoName === "TableExportJS") setLastUpdatedData1(formattedDate);
        if (repoName === "autenticate") setLastUpdatedData2(formattedDate);
        if (repoName === "generatepassword") setLastUpdatedData3(formattedDate);
      }
    } catch (error) {
      console.error(`Error al obtener información del repositorio ${repoName}`, error);
    }
  };

  useEffect(() => {
    repositories.forEach((repoName) => {
      fetchData(repoName);
    });
  }, []);

  const fechaFormateada = (dateString) => {
    const date = utcToZonedTime(new Date(dateString), "America/New_York");
    return format(date, "d 'de' MMMM 'de' yyyy, h:mm:ss a", { locale: es });
  };

  const Card = ({ 
    imgSrc, 
    title, 
    text, 
    lastUpdatedData, 
    onCardClick, 
    projectUrl, 
    buttonText = "Ir al Proyecto" 
  }) => {
    const [hover, setHover] = useState(false);

    const cardStyle = {
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      borderRadius: "15px",
      padding: "20px",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: "all 0.3s ease-in-out",
      color: "#ffffff",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      cursor: "pointer", // Añadido para indicar que la card es clickeable
    };

    const hoverCardStyle = {
      transform: "translateY(-5px)",
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
    };

    const formattedText = {
      __html: text,
    };

    const buttonStyle = {
      background: 'rgba(255,255,255,0.1)', 
      color: '#64ffda', 
      border: 'none',
      padding: '8px 15px',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      width: '100%',
      marginTop: '10px', // Añadido para separar un poco del texto
    };

    const handleCardClick = (e) => {
      // Verificar que el click no sea en el botón
      if (e.target.closest('button')) return;
      
      // Si hay un manejador de click para la card, ejecutarlo
      if (onCardClick) {
        onCardClick();
      }
    };

    const handleButtonClick = (e) => {
      // Prevenir que el evento de click se propague a la card
      e.stopPropagation();
      
      if (projectUrl) {
        window.open(projectUrl, '_blank', 'noopener,noreferrer');
      }
    };

    return (
      <MDBCard
        className="h-100 MDBCard"
        style={hover ? { ...cardStyle, ...hoverCardStyle } : cardStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleCardClick}
      >
        <MDBCardImage
          src={imgSrc}
          alt="..."
          style={{
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
          position="top"
          loading="lazy"
        />
        <MDBCardBody style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <MDBCardTitle className="text-center mb-3" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{title}</MDBCardTitle>
          <MDBCardText
            dangerouslySetInnerHTML={formattedText}
            style={{ flex: 1, fontSize: "1rem", lineHeight: "1.5" }}
          />
          <div style={{ marginTop: 'auto', width: '100%' }}>
            <button
              style={buttonStyle}
              onClick={handleButtonClick}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
            >
              {buttonText} <FaExternalLinkAlt style={{ marginLeft: '5px' }} />
            </button>
          </div>
        </MDBCardBody>
        <MDBCardFooter style={{ background: "rgba(255,255,255,0.1)", borderTop: "none" }}>
          <small style={{ color: "#a8b2d1" }}>{`Actualizado: ${lastUpdatedData}`}</small>
        </MDBCardFooter>
      </MDBCard>
    );
  };

  return (
    <div>
      <Container>
        <h2 className="mb-4 text-center" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#64ffda" }}>
          <FaNodeJs style={{ marginRight: "10px" }} />
          Aplicaciones Node.js
        </h2>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <Card
              imgSrc={imgtablaExport}
              title="TableExportJS"
              text={`Herramienta para exportar tablas en diversos formatos.`}
              lastUpdatedData={lastUpdatedData1}
              onCardClick={() => setModals({ tableExport: true })}
              projectUrl="https://table-export-js-4zq5.vercel.app"
              buttonText="Explorar Herramienta"
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={login}
              title="Autenticación JWT"
              text={`Implementación de login seguro con JSON Web Tokens.`}
              lastUpdatedData={lastUpdatedData2}
              projectUrl="https://autenticate.vercel.app/"
              buttonText="Probar Login"
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={generatePassword}
              title="Generador de Contraseñas"
              text={`Crea contraseñas seguras con parámetros personalizables.`}
              lastUpdatedData={lastUpdatedData3}
              projectUrl="https://generatepassword-theta.vercel.app/"
              buttonText="Generar Contraseña"
            />
          </MDBCol>
        </MDBRow>
      </Container>
      {modals.tableExport && <TableExport onClose={() => setModals({ tableExport: false })} />}
    </div>
  );
}