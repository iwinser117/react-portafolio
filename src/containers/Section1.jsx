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
    try {
      const apiUrl = `https://api.github.com/repos/${owner}/${repoName}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setLastUpdatedData(prev => ({
        ...prev,
        [repoName]: fechaFormateada(new Date(data.pushed_at))
      }));
    } catch (error) {
      console.error(`Error al obtener información del repositorio ${repoName}`, error);
    }
  };

  useEffect(() => {
    repositories.forEach(fetchData);
  }, []);

  const fechaFormateada = (dateString) => {
    const date = utcToZonedTime(new Date(dateString), "America/New_York");
    return format(date, "d 'de' MMMM 'de' yyyy, h:mm:ss a", { locale: es });
  };

  const cardStyle = useMemo(() => ({
    background: 'rgb(233,241,147)',
    background: 'radial-gradient(circle, rgba(233,241,147,1) 0%, rgba(246,249,107,1) 49%, rgba(235,235,13,1) 84%)'
  }), []);

  const hoverCardStyle = useMemo(() => ({
    background: "linear-gradient(135deg, #f0db4f, #f7df1e, #ffff00)",
    transition: "all 0.3s ease",
  }), []);

  const renderCard = (title, imageSrc, text, modalName, repoName) => (
    <MDBCol>
      <MDBCard
        className="h-100 MDBCard"
        onClick={() => toggleShow(modalName)}
        style={hoveredCard === modalName ? { ...cardStyle, ...hoverCardStyle } : cardStyle}
        onMouseEnter={() => setHoveredCard(modalName)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <MDBCardImage src={imageSrc} className="img" alt={title} position="top" loading="lazy" />
        <MDBCardBody>
          <MDBCardTitle className="title-card">{title}</MDBCardTitle>
          <MDBCardText className="text-align-div-inter text-color_excp">{text}</MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted">{`Actualizado: ${lastUpdatedData[repoName] || ''}`}</small>
        </MDBCardFooter>
      </MDBCard>
    </MDBCol>
  );

  return (
    <>
      <h3 className="m-auto">Js Vanilla</h3>
      <Container className="color-letra">
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          {renderCard("Lista de Tareas", imagesTodowebp.listtareas, "Visitar aplicación", "listatareas", "lista-Tareas")}
          {renderCard("Calculadora", imagesTodowebp.calcu, "Operaciones básicas incluidos decimales", "modalCal", "proyectoPaginaWeb")}
          {renderCard("Reloj", imagesTodowebp.relojimg, "Peticiones dependiendo de la ciudad según corresponda.", "modalReloj", "proyectoPaginaWeb")}
          {renderCard("Paleta de colores", imagesTodowebp.imgPaletaColores, "Se toma mediante un input el valor del color y se le agrega este estilo a un elemento contenedor.", "paletaColores", "proyectoPaginaWeb")}
          {renderCard("Contador", imagesTodowebp.contador, "Haciendo uso de \"useState\" se incrementa o decrementa el valor", "contador", "proyectoPaginaWeb")}
        </MDBRow>
        {modals.modalCal && <Calculadora onClose={() => toggleShow("modalCal")} />}
        {modals.modalReloj && <Reloj onClose={() => toggleShow("modalReloj")} />}
        {modals.paletaColores && <PaletColores onClose={() => toggleShow("paletaColores")} />}
        {modals.contador && <Contador onClose={() => toggleShow("contador")} />}
        {modals.listatareas && <ListaTareas onClose={() => toggleShow("listatareas")} />}
      </Container>
    </>
  );
}