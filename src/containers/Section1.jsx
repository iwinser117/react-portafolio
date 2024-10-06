import React, { useState, useEffect, useMemo } from "react";
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
};

const owner = "iwinser117";
const repositories = ["proyectoPaginaWeb", "lista-Tareas"];

export default function App() {
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
    // Verifica si la data ya está en localStorage
    const cachedData = localStorage.getItem(`lastUpdatedData-${repoName}`);
    if (cachedData) {
      setLastUpdatedData(prev => ({
        ...prev,
        [repoName]: cachedData
      }));
      return; // La data ya está en localStorage, no es necesario hacer la llamada a la API
    }

    try {
      const apiUrl = `https://api.github.com/repos/${owner}/${repoName}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (!data.message) {
        const formattedDate = fechaFormateada(new Date(data.pushed_at));
        // Guarda los datos en localStorage y en el estado
        localStorage.setItem(`lastUpdatedData-${repoName}`, formattedDate);
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
    return format(date, "d 'de' MMMM 'de' yyyy, h:mm:ss a", { locale: es });
  };

  const cardStyle = useMemo(() => ({
    background: 'linear-gradient(135deg, #f0db4f 0%, #f7df1e 100%)',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }), []);

  const hoverCardStyle = useMemo(() => ({
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
  }), []);

  const renderCard = (title, imageSrc, text, modalName, repoName) => (
    <MDBCol key={`${repoName}-${modalName}`}>
      <MDBCard
        className="h-100 MDBCard"
        onClick={() => toggleShow(modalName)}
        style={hoveredCard === modalName ? { ...cardStyle, ...hoverCardStyle } : cardStyle}
        onMouseEnter={() => setHoveredCard(modalName)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <MDBCardImage
          src={imageSrc}
          alt="..."
          style={{
            height: "200px",
            objectFit: "contain",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
          position="top"
          loading="lazy"
        />
        <MDBCardBody style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <MDBCardTitle className="title-card" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{title}</MDBCardTitle>
          <MDBCardText className="text-align-div-inter text-color_excp" style={{ flex: 1 }}>{text}</MDBCardText>
          <div style={{ marginTop: 'auto' }}>
            <button
              style={{
                background: '#323330',
                color: '#f0db4f',
                border: 'none',
                padding: '8px 15px',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.background = '#000000'}
              onMouseLeave={(e) => e.target.style.background = '#323330'}
            >
              Ver Proyecto <FaExternalLinkAlt style={{ marginLeft: '5px' }} />
            </button>
          </div>
        </MDBCardBody>
        <MDBCardFooter style={{ background: 'rgba(0,0,0,0.05)', borderTop: 'none' }}>
          <small style={{ color: '#323330' }}>{`Actualizado: ${lastUpdatedData[repoName] || ''}`}</small>
        </MDBCardFooter>
      </MDBCard>
    </MDBCol>
  );
  

  return (
    <div>
      <Container>
        <h2 className="mb-4 text-center" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FaJsSquare style={{ marginRight: '10px', color: '#f0db4f' }} />
          Proyectos JavaScript Vanilla
        </h2>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          {renderCard("Lista de Tareas", imagesTodowebp.listtareas, "Aplicación para gestionar tareas diarias", "listatareas", "lista-Tareas")}
          {renderCard("Calculadora", imagesTodowebp.calcu, "Operaciones básicas incluidos decimales", "modalCal", "proyectoPaginaWeb")}
          {renderCard("Reloj", imagesTodowebp.relojimg, "Muestra la hora actual según la ciudad seleccionada", "modalReloj", "proyectoPaginaWeb")}
          {renderCard("Paleta de colores", imagesTodowebp.imgPaletaColores, "Selecciona y aplica colores a elementos", "paletaColores", "proyectoPaginaWeb")}
          {renderCard("Contador", imagesTodowebp.contador, "Incrementa o decrementa un valor usando useState", "contador", "proyectoPaginaWeb")}
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
