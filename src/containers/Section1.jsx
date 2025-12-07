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
import "@styles/aplicaciones.css";
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

  // Keep only polished / maintained projects visible by default.
  const owner = "iwinser117";
  const repositories = ["proyectoPaginaWeb", "Api-Rick-and-Morty"];

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
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  };

  const hoverCardStyle = {
    transform: 'translateY(-6px) scale(1.01)',
    boxShadow: '0 14px 28px rgba(0, 0, 0, 0.12)',
  };

  const renderCard = (opts) => {
    const { key, title, imageSrc, text, liveUrl, repoUrl, onClick } = opts;
    return (
      <MDBCol key={key}>
        <MDBCard
          className="h-100 MDBCard professional-card"
          onClick={() => onClick ? onClick() : (liveUrl ? window.open(liveUrl, '_blank') : (repoUrl && window.open(repoUrl, '_blank')))}
          style={hoveredCard === key ? { ...cardStyle, ...hoverCardStyle } : cardStyle}
          onMouseEnter={() => setHoveredCard(key)}
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
              color: '#1f1f1f',
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
              fontSize: '0.98rem',
              lineHeight: '1.6',
              color: '#333',
              minHeight: '48px',
              margin: 0
            }}>
              {text}
            </MDBCardText>
            <div className="card-actions">
              {liveUrl && (
                  <a onClick={(e) => e.stopPropagation()} className="action-btn" href={liveUrl} target="_blank" rel="noopener noreferrer">Ver en Vivo <FaExternalLinkAlt /></a>
                )}
                {repoUrl && (
                  <a onClick={(e) => e.stopPropagation()} className="action-btn outline" href={repoUrl} target="_blank" rel="noopener noreferrer">Repositorio</a>
                )}
            </div>
          </MDBCardBody>
          <MDBCardFooter style={{
            background: 'rgba(50, 51, 48, 0.04)',
            borderTop: '1px solid rgba(50, 51, 48, 0.08)',
            fontSize: "0.85rem",
            padding: '12px 20px'
          }}>
            <small style={{ color: '#323330', fontWeight: '500' }}>
              {lastUpdatedData[opts.repoName] ? `Actualizado: ${lastUpdatedData[opts.repoName]}` : 'Cargando...'}
            </small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    );
  };

  const [showExercises, setShowExercises] = useState(false);

  return (
    <div style={{ padding: '40px 0' }}>
      <Container>
        <div className="section-header">
          <h2 className="mb-3 text-center" style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            color: '#f0db4f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}>
            <FaJsSquare style={{ color: '#f0db4f' }} />
            Proyectos Destacados (JavaScript)
          </h2>
          <p className="lead text-center" style={{ maxWidth: 800, margin: '0 auto 18px' }}>
            Selección de proyectos mantenidos y con despliegue público. Los ejercicios y pequeñas pruebas están ocultos por defecto.
          </p>
          <div className="text-center mb-4">
            <button className="toggle-exercises" onClick={() => setShowExercises(v => !v)}>{showExercises ? 'Ocultar ejercicios' : 'Mostrar ejercicios'}</button>
          </div>
        </div>

        <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {renderCard({
            key: 'rickandmorty',
            title: 'Rick and Morty',
            imageSrc: imagesTodowebp.rickandmorty,
            text: 'Consumo de la API de Rick and Morty, paginación y filtros.',
            repoName: 'Api-Rick-and-Morty',
            liveUrl: 'https://api-rick-and-morty-17j9.vercel.app/',
            repoUrl: `https://github.com/${owner}/Api-Rick-and-Morty`
          })}
        </MDBRow>

        {showExercises && (
          <div className="exercises-grid" style={{ marginTop: 28 }}>
            <h3 className="mb-3" style={{ fontSize: '1.2rem', fontWeight: 700 }}>Ejercicios y demos</h3>
            <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {renderCard({ key: 'listatareas', title: 'Lista de Tareas', imageSrc: imagesTodowebp.listtareas, text: 'Aplicación para gestionar tareas diarias', repoName: 'lista-Tareas', onClick: () => toggleShow('listatareas') })}
              {renderCard({ key: 'calculadora', title: 'Calculadora', imageSrc: imagesTodowebp.calcu, text: 'Operaciones básicas incluidos decimales', repoName: 'proyectoPaginaWeb', onClick: () => toggleShow('modalCal') })}
              {renderCard({ key: 'reloj', title: 'Reloj', imageSrc: imagesTodowebp.relojimg, text: 'Muestra la hora actual según la ciudad seleccionada', repoName: 'proyectoPaginaWeb', onClick: () => toggleShow('modalReloj') })}
              {renderCard({ key: 'paleta', title: 'Paleta de colores', imageSrc: imagesTodowebp.imgPaletaColores, text: 'Selecciona y aplica colores a elementos', repoName: 'proyectoPaginaWeb', onClick: () => toggleShow('paletaColores') })}
              {renderCard({ key: 'contador', title: 'Contador', imageSrc: imagesTodowebp.contador, text: 'Incrementa o decrementa un valor usando useState', repoName: 'proyectoPaginaWeb', onClick: () => toggleShow('contador') })}
            </MDBRow>
          </div>
        )}

        {modals.modalCal && <Calculadora onClose={() => toggleShow('modalCal')} />}
        {modals.modalReloj && <Reloj onClose={() => toggleShow('modalReloj')} />}
        {modals.paletaColores && <PaletColores onClose={() => toggleShow('paletaColores')} />}
        {modals.contador && <Contador onClose={() => toggleShow('contador')} />}
        {modals.listatareas && <ListaTareas onClose={() => toggleShow('listatareas')} />}
      </Container>
    </div>
  );
}