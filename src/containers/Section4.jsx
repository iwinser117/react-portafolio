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

import TableExport from "@codigoProyectos/TableExport";

import { Container } from "react-bootstrap";
import generatePassword from "@assets/generatePassword.webp";
import imgtablaExport from "../assets/imgtablaExport.png";
import login from "../assets/login.png";
import { color } from "@cloudinary/url-gen/qualifiers/background";

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
      background: "linear-gradient(135deg, #87CEEB, #C7D2FE)",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
      color: "black"
    };
    
    const hoverCardStyle = {
      background: "linear-gradient(135deg, #ADD8E6, #E4E9F5)",
    };


    const formattedText = {
      __html: text,
    };

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
            marginTop: "",
            borderRadius: "0px",
          }}
          position="top"
          loading="lazy"
        />
        <MDBCardBody>
          <MDBCardTitle className="text-center">{title}</MDBCardTitle>
          <MDBCardText dangerouslySetInnerHTML={formattedText} className="color-letra-black"/>
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted">{`Actualizado: ${lastUpdatedData}`}</small>
        </MDBCardFooter>
      </MDBCard>
    );
  };

  return (
    <>
      
      <Container className="color-letra-black">
      <h2 className="mb-4 text-center" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#b38600" }}>
          SAPUI5
        </h2>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <Card
              imgSrc={imgtablaExport}
              title="Landing Page Extintores"
              text='Visitar aplicación <br> <a
              href="https://crudlistatareas.netlify.app "
              target="_blank"
              rel="noopener noreferrer"
              id="link2"
            >
              Link de Visita al Crud
            </a>'
              lastUpdatedData={lastUpdatedData1}
              onClick={() => setModals({ tableExport: true })}
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={login}
              title="Reporte Demo"
              text='Aplcacion de reportes usando API SDK<br>
              <a
              href="https://autenticate.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              id="link3"
            >
              Reporte
            </a>'
              lastUpdatedData={lastUpdatedData2}
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={generatePassword}
              title="Theme SAP"
              text='Visitar aplicación <br>
              <a
              href="https://generatepassword-theta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              id="link1"
            >
              Preview Themes
            </a>'
              lastUpdatedData={lastUpdatedData3}
            />
          </MDBCol>
          
          {/* Otras tarjetas aquí */}
        </MDBRow>

        {modals.tableExport ? (
          <TableExport onClose={() => setModals({ tableExport: false })} />
        ) : null}
      </Container>
    </>
  );
}
