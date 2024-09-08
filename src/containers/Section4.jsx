import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { utcToZonedTime } from "date-fns-tz";
import "@styles/letra.css";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from "mdb-react-ui-kit";
import TableExport from "@codigoProyectos/TableExport";
import { Container } from "react-bootstrap";
import generatePassword from "@assets/generatePassword.webp";
import imgtablaExport from "../assets/imgtablaExport.png";
import login from "../assets/login.png";

export default function App() {
  const [modals, setModals] = useState({ tableExport: false });
  const [lastUpdatedData, setLastUpdatedData] = useState({
    TableExportJS: "",
    autenticate: "",
    generatepassword: "",
  });

  const owner = "iwinser117";
  const repositories = ["TableExportJS", "autenticate", "generatepassword"];

  // Función para obtener la fecha formateada
  const fechaFormateada = (dateString) => {
    const zonedDate = utcToZonedTime(new Date(dateString), "America/New_York");
    return format(zonedDate, "d 'de' MMMM 'de' yyyy, h:mm:ss a", { locale: es });
  };

  // Función para obtener los datos del repositorio con caché
  const fetchData = async (repoName) => {
    const cachedData = localStorage.getItem(repoName);
    if (cachedData) {
      setLastUpdatedData((prevState) => ({
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
        localStorage.setItem(repoName, formattedDate);
        setLastUpdatedData((prevState) => ({
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

  // Componente de tarjeta (card)
  const Card = ({ imgSrc, title, text, lastUpdatedData, onClick }) => {
    const [hover, setHover] = useState(false);

    const cardStyle = {
      background: "linear-gradient(135deg, #87CEEB, #C7D2FE)",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
      color: "black",
    };

    const hoverCardStyle = {
      background: "linear-gradient(135deg, #ADD8E6, #E4E9F5)",
    };

    const formattedText = { __html: text };

    return (
      <MDBCard
        className="h-100 MDBCard"
        style={hover ? { ...cardStyle, ...hoverCardStyle } : cardStyle}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onClick={onClick}
      >
        <MDBCardImage
          src={imgSrc}
          alt="..."
          style={{
            height: "220px",
            objectFit: "contain",
            borderRadius: "0px",
          }}
          position="top"
          loading="lazy"
        />
        <MDBCardBody>
          <MDBCardTitle className="text-center">{title}</MDBCardTitle>
          <MDBCardText dangerouslySetInnerHTML={formattedText} className="color-letra-black" />
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted">{`Actualizado: ${lastUpdatedData}`}</small>
        </MDBCardFooter>
      </MDBCard>
    );
  };

  return (
    <Container className="color-letra-black">
      <h2 className="mb-4 text-center" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#b38600" }}>Sapui5</h2>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <Card
            imgSrc={imgtablaExport}
            title="Landing Page Extintores"
            text='Visitar aplicación <br><a href="https://crudlistatareas.netlify.app" target="_blank" rel="noopener noreferrer">Link de Visita al Crud</a>'
            lastUpdatedData={lastUpdatedData.TableExportJS}
            onClick={() => setModals({ tableExport: true })}
          />
        </MDBCol>
        <MDBCol>
          <Card
            imgSrc={login}
            title="Plantilla Responsive"
            text='App de login con JWT. <br><a href="https://autenticate.vercel.app/" target="_blank" rel="noopener noreferrer">Aplicación Login</a>'
            lastUpdatedData={lastUpdatedData.autenticate}
          />
        </MDBCol>
        <MDBCol>
          <Card
            imgSrc={generatePassword}
            title="Generate Password"
            text='Visitar aplicación <br><a href="https://generatepassword-theta.vercel.app/" target="_blank" rel="noopener noreferrer">Generate Password</a>'
            lastUpdatedData={lastUpdatedData.generatepassword}
          />
        </MDBCol>
      </MDBRow>
      {modals.tableExport && <TableExport onClose={() => setModals({ tableExport: false })} />}
    </Container>
  );
}
