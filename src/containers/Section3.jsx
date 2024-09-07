import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { utcToZonedTime } from "date-fns-tz";
import { FaCss3 } from "react-icons/fa";
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

import TableExport from "@codigoProyectos/TableExport";

import { Container } from "react-bootstrap";
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
    try {
      const apiUrl = `https://api.github.com/repos/${owner}/${repoName}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (repoName === "TableExportJS") {
        if(!data.message){
          setLastUpdatedData1(fechaFormateada(new Date(data.pushed_at)));
        }
      }
      if (repoName === "autenticate") {
        if(!data.message){
          setLastUpdatedData2(fechaFormateada(new Date(data.pushed_at)));
        }
      }
      if (repoName === "generatepassword") {
        if(!data.message){
          setLastUpdatedData3(fechaFormateada(new Date(data.pushed_at)));
        }
      }
    } catch (error) {
      console.error(
        `Error al obtener información del repositorio ${repoName}`,
        error
      );
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
      background: "linear-gradient(135deg, #6A1B9A, #283593)",
      borderRadius: "15px",
      padding: "15px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease-in-out",
      color: "white",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    };

    const hoverCardStyle = {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)",
      background: "linear-gradient(135deg, #8E24AA, #3949AB)", 
    };

    const imageStyle = {
      height: "220px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "15px",
    };

    const titleStyle = {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "10px",
      textAlign: "center",
    };

    const textStyle = {
      fontSize: "1rem",
      lineHeight: "1.5",
      marginBottom: "15px",
    };

    const footerStyle = {
      fontSize: "0.8rem",
      color: "rgba(255, 255, 255, 0.7)",
      marginTop: "auto",
    };

    const formattedText = {
      __html: text,
    };

    return (
      <MDBCard
        className="h-100"
        style={hover ? { ...cardStyle, ...hoverCardStyle } : cardStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
      >
        <MDBCardImage
          src={imgSrc}
          alt={title}
          style={imageStyle}
          position="top"
          loading="lazy"
        />
        <MDBCardBody style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <MDBCardTitle style={titleStyle}>{title}</MDBCardTitle>
          <MDBCardText style={textStyle} dangerouslySetInnerHTML={formattedText} />
          <MDBCardFooter style={footerStyle}>
            <small>{`Actualizado: ${lastUpdatedData}`}</small>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    );
  };

  const containerStyle = {
    background: "linear-gradient(135deg, #1A237E, #311B92)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  };

  const headingStyle = {
    color: "white",
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  };

  return (
    <Container >
      <h2 className="mb-4 text-center" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#944dff" }}>
          <FaCss3 style={{ marginRight: "10px" }} />
          Proyectos Css
        </h2>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <Card
            imgSrc={imgtablaExport}
            title="Landin Page Extintores"
            text='Visitar aplicación <br> <a href="https://crudlistatareas.netlify.app" target="_blank" rel="noopener noreferrer" style="color: #FFC107; text-decoration: none;">Link de Visita al Crud</a>'
            lastUpdatedData={lastUpdatedData1}
            onClick={() => setModals({ tableExport: true })}
          />
        </MDBCol>
        <MDBCol>
          <Card
            imgSrc={login}
            title="Plantilla Responsive"
            text='App de login con JWT. <br><a href="https://autenticate.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: #FFC107; text-decoration: none;">Aplicación Login</a>'
            lastUpdatedData={lastUpdatedData2}
          />
        </MDBCol>
        <MDBCol>
          <Card
            imgSrc={generatePassword}
            title="Animación Background"
            text='Visitar aplicación <br><a href="https://generatepassword-theta.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: #FFC107; text-decoration: none;">Generate Password</a>'
            lastUpdatedData={lastUpdatedData3}
          />
        </MDBCol>
        <MDBCol>
          <Card
            imgSrc={generatePassword}
            title="Galería de arte"
            text='Visitar aplicación <br><a href="https://generatepassword-theta.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: #FFC107; text-decoration: none;">Generate Password</a>'
            lastUpdatedData={lastUpdatedData3}
          />
        </MDBCol>
      </MDBRow>
     
      {modals.tableExport ? (
        <TableExport onClose={() => setModals({ tableExport: false })} />
      ) : null}
    </Container>
  );
}