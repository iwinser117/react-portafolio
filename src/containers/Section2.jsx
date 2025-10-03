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
import odontoweb from "@assets/odontoweb.webp";
import imgdevist from "@assets/imgdevist.webp";
import imgtablaExport from "../assets/imgtablaExport.png";
import login from "../assets/login.png";

const owner = "iwinser117";
const repositories = ["TableExportJS", "autenticate", "generatepassword", 'odonto_web', 'reservas'];

export default function ProyectosNodeJS() {
  const [modals, setModals] = useState({
    tableExport: false,
  });
  const [lastUpdatedData, setLastUpdatedData] = useState({});

  const fetchData = async (repoName) => {
    const cacheKey = `lastUpdatedData-${repoName}`;
    const cachedData = sessionStorage.getItem(cacheKey);

    if (cachedData) {
      setLastUpdatedData(prev => ({ ...prev, [repoName]: cachedData }));
      return;
    }

    try {
      const apiUrl = `https://api.github.com/repos/${owner}/${repoName}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (!data.message) {
        const formattedDate = fechaFormateada(new Date(data.pushed_at));
        sessionStorage.setItem(cacheKey, formattedDate);
        setLastUpdatedData(prev => ({ ...prev, [repoName]: formattedDate }));
      }
    } catch (error) {
      console.error(`Error al obtener información del repositorio ${repoName}`, error);
    }
  };

  useEffect(() => {
    repositories.forEach(repoName => fetchData(repoName));
  }, []);

  const fechaFormateada = (dateString) => {
    const date = utcToZonedTime(new Date(dateString), "America/New_York");
    return format(date, "d 'de' MMMM 'de' yyyy, h:mm a", { locale: es });
  };

  const Card = ({
    imgSrc,
    title,
    text,
    repoName,
    onCardClick,
    projectUrl,
    buttonText = "Ir al Proyecto"
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      borderRadius: "16px",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      color: "#ffffff",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      cursor: onCardClick ? "pointer" : "default",
    };

    const hoverCardStyle = {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
    };

    const buttonStyle = {
      background: 'rgba(100, 255, 218, 0.1)',
      color: '#64ffda',
      border: '1px solid rgba(100, 255, 218, 0.3)',
      padding: '12px 20px',
      borderRadius: '8px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      width: '100%',
      fontWeight: '600',
      fontSize: '0.95rem',
      marginTop: 'auto'
    };

    const handleCardClick = (e) => {
      if (e.target.closest('button')) return;
      if (onCardClick) onCardClick();
    };

    const handleButtonClick = (e) => {
      e.stopPropagation();
      if (projectUrl) {
        window.open(projectUrl, '_blank', 'noopener,noreferrer');
      }
    };

    return (
      <MDBCard
        className="h-100 MDBCard"
        style={isHovered ? { ...cardStyle, ...hoverCardStyle } : cardStyle}
        onMouseEnter={() => setHoveredCard(repoName)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={handleCardClick}
      >
        <MDBCardImage
          src={imgSrc}
          alt={title}
          style={{
            height: "200px",
            objectFit: "cover",
            padding: "16px",
            borderRadius: "16px",
          }}
          position="top"
          loading="lazy"
        />
        <MDBCardBody style={{ 
          flex: 1, 
          display: "flex", 
          flexDirection: "column",
          padding: '20px',
          gap: '12px'
        }}>
          <MDBCardTitle style={{ 
            fontSize: "1.25rem", 
            fontWeight: "700",
            minHeight: "50px",
            display: 'flex',
            alignItems: 'center',
            margin: 0,
            lineHeight: '1.3'
          }}>
            {title}
          </MDBCardTitle>
          <MDBCardText style={{ 
            flex: 1, 
            fontSize: "0.95rem", 
            lineHeight: "1.6",
            minHeight: "48px",
            margin: 0,
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            {text}
          </MDBCardText>
          <button
            style={buttonStyle}
            onClick={handleButtonClick}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(100, 255, 218, 0.2)';
              e.target.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(100, 255, 218, 0.1)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            {buttonText} <FaExternalLinkAlt />
          </button>
        </MDBCardBody>
        <MDBCardFooter style={{ 
          background: "rgba(255,255,255,0.05)", 
          borderTop: "1px solid rgba(255,255,255,0.1)",
          fontSize: "0.85rem",
          padding: '12px 20px'
        }}>
          <small style={{ color: "rgba(255, 255, 255, 0.7)", fontWeight: '500' }}>
            {lastUpdatedData[repoName] ? `Actualizado: ${lastUpdatedData[repoName]}` : 'Cargando...'}
          </small>
        </MDBCardFooter>
      </MDBCard>
    );
  };

  return (
    <div style={{ padding: '40px 0' }}>
      <Container>
        <h2 className="mb-5 text-center" style={{ 
          fontSize: "2.5rem", 
          fontWeight: "700", 
          color: "#64ffda",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}>
          <FaNodeJs />
          Aplicaciones Node.js
        </h2>
        <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <MDBCol>
            <Card
              imgSrc={odontoweb}
              title="OdontoWeb"
              text="Sitio web para presencia online de odontólogos."
              repoName="odonto_web"
              projectUrl="https://odonto-web-red.vercel.app/"
              buttonText="Visitar sitio"
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={imgdevist}
              title="Reservas D´visita"
              text="Sitio web que emula un sistema de reservas."
              repoName="reservas"
              projectUrl="https://reservas-eta.vercel.app/"
              buttonText="Visitar sitio"
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={login}
              title="Autenticación JWT"
              text="Implementación de login seguro con JSON Web Tokens."
              repoName="autenticate"
              projectUrl="https://autenticate.vercel.app/"
              buttonText="Probar Login"
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={generatePassword}
              title="Generador de Contraseñas"
              text="Crea contraseñas seguras con parámetros personalizables."
              repoName="generatepassword"
              projectUrl="https://generatepassword-theta.vercel.app/"
              buttonText="Generar Contraseña"
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={imgtablaExport}
              title="TableExportJS"
              text="Herramienta para exportar tablas en diversos formatos."
              repoName="TableExportJS"
              onCardClick={() => setModals({ tableExport: true })}
              projectUrl="https://table-export-js-4zq5.vercel.app"
              buttonText="Explorar Herramienta"
            />
          </MDBCol>
        </MDBRow>
      </Container>
      {modals.tableExport && <TableExport onClose={() => setModals({ tableExport: false })} />}
    </div>
  );
} 
