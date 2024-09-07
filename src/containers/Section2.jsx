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
      // Si los datos están en caché, actualiza el estado con los datos de caché
      if (repoName === "TableExportJS") setLastUpdatedData1(cachedData);
      if (repoName === "autenticate") setLastUpdatedData2(cachedData);
      if (repoName === "generatepassword") setLastUpdatedData3(cachedData);
      return; // No hace falta hacer la llamada a la API
    }

    try {
      const apiUrl = `https://api.github.com/repos/${owner}/${repoName}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (!data.message) {
        const formattedDate = fechaFormateada(new Date(data.pushed_at));
        // Guarda los datos en localStorage y en el estado
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

  const Card = ({ imgSrc, title, text, lastUpdatedData, onClick }) => {
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
    };

    const hoverCardStyle = {
      transform: "translateY(-5px)",
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
    };

    const formattedText = {
      __html: text,
    };

    return (
      <MDBCard
        className="h-100 MDBCard"
        style={hover ? { ...cardStyle, ...hoverCardStyle } : cardStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
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
          Proyectos Node.js
        </h2>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <Card
              imgSrc={imgtablaExport}
              title="TableExportJS"
              text={`Herramienta para exportar tablas en diversos formatos. <br/><br/>
              <a href="https://crudlistatareas.netlify.app" target="_blank" rel="noopener noreferrer" style="color: #64ffda; text-decoration: none;">
                Visitar aplicación <FaExternalLinkAlt style="margin-left: 5px;" />
              </a>`}
              lastUpdatedData={lastUpdatedData1}
              onClick={() => setModals({ tableExport: true })}
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={login}
              title="Autenticación JWT"
              text={`Implementación de login seguro con JSON Web Tokens. <br/><br/>
              <a href="https://autenticate.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: #64ffda; text-decoration: none;">
                Probar aplicación <FaExternalLinkAlt style="margin-left: 5px;" />
              </a>`}
              lastUpdatedData={lastUpdatedData2}
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={generatePassword}
              title="Generador de Contraseñas"
              text={`Crea contraseñas seguras con parámetros personalizables. <br/><br/>
              <a href="https://generatepassword-theta.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: #64ffda; text-decoration: none;">
                Generar contraseña <FaExternalLinkAlt style="margin-left: 5px;" />
              </a>`}
              lastUpdatedData={lastUpdatedData3}
            />
          </MDBCol>
        </MDBRow>
      </Container>
      {modals.tableExport && <TableExport onClose={() => setModals({ tableExport: false })} />}
    </div>
  );
}
