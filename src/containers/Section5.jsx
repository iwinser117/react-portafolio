import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { utcToZonedTime } from "date-fns-tz";
import { SiThealgorithms } from "react-icons/si";
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
      background: "linear-gradient(135deg, #0a192f, #203a43)",
      borderRadius: "15px",
      padding: "20px",
      boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      color: "#64ffda",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
    };

    const hoverCardStyle = {
      transform: "scale(1.05)",
      boxShadow: "0 15px 40px rgba(31, 38, 135, 0.5)",
    };

    const pseudoElementStyle = {
      content: "''",
      position: "absolute",
      top: "-50%",
      left: "-50%",
      right: "-50%",
      bottom: "-50%",
      background: "linear-gradient(to right, #ff00cc, #333399, #00ff99)",
      transform: hover ? "rotate(90deg)" : "rotate(45deg)",
      opacity: hover ? 0.25 : 0.15,
      zIndex: -1,
      transition: "all 0.5s ease-in-out",
    };

    const formattedText = {
      __html: text,
    };

    return (
      <MDBCard
        className="h-100 MDBCard"
        style={{ ...cardStyle, ...(hover ? hoverCardStyle : {}) }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
      >
        <div style={pseudoElementStyle} />
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
          <MDBCardText dangerouslySetInnerHTML={formattedText} style={{ color: "#E0E0E0" }} />
        </MDBCardBody>
        <MDBCardFooter>
          <small style={{ color: "#a8b2d1" }}>{`Actualizado: ${lastUpdatedData}`}</small>
        </MDBCardFooter>
      </MDBCard>
    );
  };

  return (
    <>

      <Container>
        <h2 className="mb-4 text-center" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#e67300" }}>
          <SiThealgorithms style={{ marginRight: "10px" }} />
          Algoritmos
        </h2>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <Card
              imgSrc={imgtablaExport}
              title="Organizador de Json"
              text='Visitar aplicación <br> <a href="https://crudlistatareas.netlify.app" target="_blank" rel="noopener noreferrer" id="link2" style="color: #64ffda;">Link de Visita al Crud</a>'
              lastUpdatedData={lastUpdatedData1}
              onClick={() => setModals({ tableExport: true })}
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={login}
              title="Algoritmos de busqueda"
              text='Aplcacion de reportes usando API SDK<br><a href="https://autenticate.vercel.app/" target="_blank" rel="noopener noreferrer" id="link3" style="color: #64ffda;">Reporte</a>'
              lastUpdatedData={lastUpdatedData2}
            />
          </MDBCol>
          <MDBCol>
            <Card
              imgSrc={generatePassword}
              title="Torre de Hanoi"
              text='Visitar aplicación <br><a href="https://generatepassword-theta.vercel.app/" target="_blank" rel="noopener noreferrer" id="link1" style="color: #64ffda;">Preview Themes</a>'
              lastUpdatedData={lastUpdatedData3}
            />
          </MDBCol>
        </MDBRow>

        {modals.tableExport ? (
          <TableExport onClose={() => setModals({ tableExport: false })} />
        ) : null}
      </Container>
    </>
  );
}