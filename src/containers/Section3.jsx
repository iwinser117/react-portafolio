import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { utcToZonedTime } from "date-fns-tz";
import { FaCss3, FaExternalLinkAlt } from "react-icons/fa";
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

import css_extint from "../assets/css_extint.png";
import fondocss from "../assets/fondocss.png";
import semanticpage from "../assets/semanticpage.png";
import galeryart from "../assets/galeryart.png";

const owner = "iwinser117";
const repositories = ["fireExtinguishers", "galery_art", "css_background", "responsivetemplate"];

export default function ProyectosCSS() {
  const [lastUpdatedData, setLastUpdatedData] = useState({});

  const fetchData = async (repoName) => {
    const cachedData = sessionStorage.getItem(repoName);
    if (cachedData) {
      setLastUpdatedData(prevState => ({
        ...prevState,
        [repoName]: cachedData,
      }));
      return;
    }

    try {
      const apiUrl = `https://api.github.com/repos/${owner}/${repoName}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (!data.message) {
        const formattedDate = fechaFormateada(new Date(data.pushed_at));
        sessionStorage.setItem(repoName, formattedDate);
        setLastUpdatedData(prevState => ({
          ...prevState,
          [repoName]: formattedDate,
        }));
      }
    } catch (error) {
      console.error(`Error al obtener información del repositorio ${repoName}`, error);
    }
  };

  useEffect(() => {
    repositories.forEach(fetchData);
  }, []);

  const fechaFormateada = (date) => {
    const zonedDate = utcToZonedTime(date, "America/New_York");
    return format(zonedDate, "d 'de' MMMM 'de' yyyy, h:mm a", { locale: es });
  };

  const Card = ({ imgSrc, title, text, repoName, url }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
      background: "linear-gradient(135deg, #6A1B9A, #283593)",
      borderRadius: "16px",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      color: "white",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      cursor: "pointer",
    };

    const hoverCardStyle = {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
      background: "linear-gradient(135deg, #7B1FA2, #303F9F)",
    };

    const buttonStyle = {
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      padding: '12px 20px',
      borderRadius: '8px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: '600',
      width: '100%',
      transition: 'all 0.3s ease',
      marginTop: 'auto'
    };

    const handleVisitClick = (e) => {
      e.stopPropagation();
    };

    return (
      <MDBCard
        className="h-100"
        style={isHovered ? { ...cardStyle, ...hoverCardStyle } : cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(url, '_blank')}
      >
        <MDBCardImage
          src={imgSrc}
          alt={title}
          style={{ 
            height: "200px", 
            objectFit: "cover", 
            padding: "16px",
            borderRadius: "16px"
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
            fontSize: "0.95rem", 
            lineHeight: "1.6",
            flex: 1,
            minHeight: "48px",
            margin: 0,
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            {text}
          </MDBCardText>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
            onClick={handleVisitClick}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Visitar Sitio <FaExternalLinkAlt />
          </a>
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
          color: "#944dff",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}>
          <FaCss3 />
          Aplicaciones CSS
        </h2>
        <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <MDBCol>
            <Card
              imgSrc={css_extint}
              title="Demo Sitio Extintores"
              text="Visitar aplicación"
              repoName="fireExtinguishers"
              url="https://fire-extinguishers.vercel.app"
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={galeryart}
              title="Galería de Arte"
              text="Sitio web de imágenes de un gran artista en desarrollo."
              repoName="galery_art"
              url="https://galery-art-rho.vercel.app/"
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={fondocss}
              title="Animación Background"
              text="Sitio que muestra 4 distintos temas para tu web"
              repoName="css_background"
              url="https://iwinser117.github.io/https---github.com-iwinser117-css_background/"
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={semanticpage}
              title="Plantilla Responsive"
              text="Ejemplo de una plantilla responsive con CSS."
              repoName="responsivetemplate"
              url="https://responsivetemplatecss.netlify.app/"
            />
          </MDBCol>
        </MDBRow>
      </Container>
    </div>
  );
}