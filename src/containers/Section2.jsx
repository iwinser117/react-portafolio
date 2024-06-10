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
        setLastUpdatedData1(fechaFormateada(new Date(data.pushed_at)));
      }
      if (repoName === "autenticate") {
        setLastUpdatedData2(fechaFormateada(new Date(data.pushed_at)));
      }
      if (repoName === "generatepassword") {
        setLastUpdatedData3(fechaFormateada(new Date(data.pushed_at)));
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
      background: "linear-gradient(135deg, #8DD7CF, #64A07D, #3E517A)",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "background 0.3s ease-in-out",
    };

    const hoverCardStyle = {
      background: "linear-gradient(135deg, #3E517A, #64A07D, #8DD7CF)",
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
          <MDBCardText dangerouslySetInnerHTML={formattedText} />
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted">{`Actualizado: ${lastUpdatedData}`}</small>
        </MDBCardFooter>
      </MDBCard>
    );
  };

  return (
    <>
      <h3 className="m-auto">Node JS</h3>
      <Container className="color-letra">
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <Card
              imgSrc={imgtablaExport}
              title="TableExportJS"
              text='Visitar aplicación <br> <a
              href="https://crudlistatareas.netlify.app "
              target="_blank"
              rel="noopener noreferrer"
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
              title="Autenticación"
              text='App de login con JWT. <br>
              <a
              href="https://autenticate.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aplicación Login 
            </a>'
              lastUpdatedData={lastUpdatedData2}
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={generatePassword}
              title="Generación Password"
              text='Sitio web de generación de Password <br>
              <a
              href="https://generatepassword-theta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Generate Password
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
