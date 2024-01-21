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
import imgProceso from "@assets/imgProceso.jpg";
import imgProceso2 from "@assets/imgProces2.jpg";
import imgtablaExport from "../assets/imgtablaExport.png";

export default function App() {
  const [modals, setModals] = useState({
    tableExport: false,
  });
  const [lastUpdatedData1, setLastUpdatedData1] = useState("");
  const [lastUpdatedData2, setLastUpdatedData2] = useState("");
  //const [lastUpdatedData2, setLastUpdatedData2] = useState("");
  const owner = "iwinser117";
  const repositories = ["TableExportJS", "autenticate"];

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
  const toggleShow = (modalName) => {
    setModals((prevModals) => ({
      ...Object.fromEntries(
        Object.entries(prevModals).map(([key, value]) => [
          key,
          key === modalName ? !value : false,
        ])
      ),
    }));
  };

  const fechaFormateada = (dateString) => {
    const date = utcToZonedTime(new Date(dateString), "America/New_York");
    return format(date, "d 'de' MMMM 'de' yyyy, h:mm:ss a", { locale: es });
  };

  const cardStyle = {
    background: "rgb(255,255,255)",
    background:
      "linear-gradient(180deg, rgba(128,177,121,0.8297443977591037) 22%, rgba(73,144,63,0.9698004201680672) 62%, rgba(33,87,50,0.9501925770308123) 90%)",
  };
  return (
    <>
      <h3 className="m-auto">Node JS</h3>
      <Container className="color-letra">
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard
              className="h-100 MDBCard"
              onClick={() => toggleShow("tableExport")}
              style={cardStyle}
            >
              <MDBCardImage
                src={imgtablaExport}
                alt="..."
                style={{
                  height: "220px",
                  objectFit: "",
                  marginTop: "",
                  borderRadius: "0px",
                }}
                position="top"
                loading="lazy"
              />
              <MDBCardBody>
                <MDBCardTitle>TableExportJS</MDBCardTitle>
                <MDBCardText>
                  Visitar Aplicación
                  <br />
                  <a
                    href="https://table-export-js-4zq5.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link de Visita a la Aplicación
                  </a>
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">{`Actualizado: ${lastUpdatedData1}`}</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100 MDBCard" style={cardStyle}>
              <MDBCardImage
                src={imgProceso}
                alt="..."
                style={{
                  height: "220px",
                  objectFit: "",
                  marginTop: "",
                  borderRadius: "0px",
                }}
                position="top"
                loading="lazy"
              />
              <MDBCardBody>
                <MDBCardTitle>Autenticación</MDBCardTitle>
                <MDBCardText>Proximo a despliegue.</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">{`Actualizado: ${lastUpdatedData2}`}</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100 MDBCard" style={cardStyle}>
              <MDBCardImage
                src={imgProceso}
                alt="..."
                style={{
                  height: "220px",
                  objectFit: "",
                  marginTop: "",
                  borderRadius: "0px",
                }}
                position="top"
                loading="lazy"
              />
              <MDBCardBody>
                <MDBCardTitle>App de chat</MDBCardTitle>
                <MDBCardText>En proceso de diseño y desarrollo.</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100 MDBCard" style={cardStyle}>
              <MDBCardImage
                src={imgProceso2}
                alt="..."
                style={{
                  height: "220px",
                  objectFit: "",
                  marginTop: "",
                  borderRadius: "0px",
                }}
                position="top"
                loading="lazy"
              />
              <MDBCardBody>
                <MDBCardTitle>Sistema de Pagos</MDBCardTitle>
                <MDBCardText>En proceso de diseño y desarrollo.</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100 MDBCard" style={cardStyle}>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
                style={{
                  height: "220px",
                  objectFit: "",
                  marginTop: "",
                  borderRadius: "0px",
                }}
                position="top"
                loading="lazy"
              />
              <MDBCardBody>
                <MDBCardTitle>Sistema de Ventas</MDBCardTitle>
                <MDBCardText>En proceso de diseño y desarrollo.</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        {modals.tableExport ? (
          <TableExport onClose={() => toggleShow("tableExport")} />
        ) : null}
      </Container>
    </>
  );
}
