import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { utcToZonedTime } from "date-fns-tz";
import { imagesTodowebp } from '../utils/galerimages';
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
import { FaJsSquare, FaExternalLinkAlt } from 'react-icons/fa';
import Calculadora from "@codigoProyectos/Calculadora";
import Reloj from "@codigoProyectos/Reloj";
import PaletColores from "@codigoProyectos/PaletColores";
import ListaTareas from "@codigoProyectos/ListaTareas";
import Contador from "@codigoProyectos/Contador";

const initialModals = {
  modalCal: false,
  modalReloj: false,
  paletaColores: false,
  contador: false,
  listatareas: false,
  rickandmorty: false,
};

const owner = "iwinser117";
const repositories = ["proyectoPaginaWeb", "lista-Tareas", "Api-Rick-and-Morty"];

export default function ProyectosJavaScript() {
  const [modals, setModals] = useState(initialModals);
  const [lastUpdatedData, setLastUpdatedData] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleShow = (modalName) => {
    setModals((prevModals) => ({
      ...initialModals,
      [modalName]: !prevModals[modalName],
    }));
  };

  const fetchData = async (repoName) => {
    const cachedData = sessionStorage.getItem(`lastUpdatedData-${repoName}`);
    if (cachedData) {
      setLastUpdatedData(prev => ({
        ...prev,
        [repoName]: cachedData
      }));
      return;
    }

    try {
      const apiUrl = `https://api.github.com/repos/${owner}/${repoName}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (!data.message) {
        const formattedDate = fechaFormateada(new Date(data.pushed_at));
        sessionStorage.setItem(`lastUpdatedData-${repoName}`, formattedDate);
        setLastUpdatedData(prev => ({
          ...prev,
          [repoName]: formattedDate
        }));
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

  const cardStyle = {
    background: 'linear-gradient(135deg, #f0db4f 0%, #f7df1e 100%)',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const hoverCardStyle = {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
  };

  const renderCard = (title, imageSrc, text, modalName, repoName) => (
    <MDBCol key={`${repoName}-${modalName}`}>
      <MDBCard
        className="h-100 MDBCard"
        onClick={() => {
          if (modalName === "rickandmorty") {
            window.open('https://api-rick-and-morty-17j9.vercel.app/', '_blank');
          } else {
            toggleShow(modalName);
          }
        }}
        style={hoveredCard === modalName ? { ...cardStyle, ...hoverCardStyle } : cardStyle}
        onMouseEnter={() => setHoveredCard(modalName)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <MDBCardImage
          src={imageSrc}
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
          display: 'flex', 
          flexDirection: 'column',
          padding: '20px',
          gap: '12px'
        }}>
          <MDBCardTitle style={{ 
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#323330',
            minHeight: '50px',
            display: 'flex',
            alignItems: 'center',
            margin: 0,
            lineHeight: '1.3'
          }}>
            {title}
          </MDBCardTitle>
          <MDBCardText style={{ 
            flex: 1,
            fontSize: '0.95rem',
            lineHeight: '1.6',
            color: '#4a4a4a',
            minHeight: '48px',
            margin: 0
          }}>
            {text}
          </MDBCardText>
          <button
            style={{
              background: '#323330',
              color: '#f0db4f',
              border: 'none',
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
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#1a1a1a';
              e.target.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#323330';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Ver Proyecto <FaExternalLinkAlt />
          </button>
        </MDBCardBody>
        <MDBCardFooter style={{ 
          background: 'rgba(50, 51, 48, 0.05)', 
          borderTop: '1px solid rgba(50, 51, 48, 0.1)',
          fontSize: "0.85rem",
          padding: '12px 20px'
        }}>
          <small style={{ color: '#323330', fontWeight: '500' }}>
            {lastUpdatedData[repoName] ? `Actualizado: ${lastUpdatedData[repoName]}` : 'Cargando...'}
          </small>
        </MDBCardFooter>
      </MDBCard>
    </MDBCol>
  );

  return (
    <div style={{ padding: '40px 0' }}>
      <Container>
        <h2 className="mb-5 text-center" style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          color: '#f0db4f',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '12px'
        }}>
          <FaJsSquare style={{ color: '#f0db4f' }} />
          Proyectos JavaScript Vanilla
        </h2>
        <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {renderCard("Lista de Tareas", imagesTodowebp.listtareas, "Aplicación para gestionar tareas diarias", "listatareas", "lista-Tareas")}
          {renderCard("Calculadora", imagesTodowebp.calcu, "Operaciones básicas incluidos decimales", "modalCal", "proyectoPaginaWeb")}
          {renderCard("Reloj", imagesTodowebp.relojimg, "Muestra la hora actual según la ciudad seleccionada", "modalReloj", "proyectoPaginaWeb")}
          {renderCard("Paleta de colores", imagesTodowebp.imgPaletaColores, "Selecciona y aplica colores a elementos", "paletaColores", "proyectoPaginaWeb")}
          {renderCard("Contador", imagesTodowebp.contador, "Incrementa o decrementa un valor usando useState", "contador", "proyectoPaginaWeb")}
          {renderCard("Rick and Morty", imagesTodowebp.rickandmorty, "Consumo de la api de rick and morty", "rickandmorty", "Api-Rick-and-Morty")}
        </MDBRow>
        {modals.modalCal && <Calculadora onClose={() => toggleShow("modalCal")} />}
        {modals.modalReloj && <Reloj onClose={() => toggleShow("modalReloj")} />}
        {modals.paletaColores && <PaletColores onClose={() => toggleShow("paletaColores")} />}
        {modals.contador && <Contador onClose={() => toggleShow("contador")} />}
        {modals.listatareas && <ListaTareas onClose={() => toggleShow("listatareas")} />}
      </Container>
    </div>
  );
}