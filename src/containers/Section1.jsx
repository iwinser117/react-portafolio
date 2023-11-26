import React, { useState, useEffect } from "react";
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
import Calculadora from "@codigoProyectos/Calculadora";
import Reloj from "@codigoProyectos/Reloj";
import PaletColores from "@codigoProyectos/PaletColores";
import ListaTareas from "@codigoProyectos/ListaTareas";
import Contador from "@codigoProyectos/Contador";
import CalcImg from "@assets/imgCalculadora.png";
import relojimg from "@assets/relojimg.png";
import paletaColoresimg from "@assets/imgPaletaColores.png";
import imgcontador from "@assets/contadoimg.png";
import listtareas from "@assets/listtareas.png";
export default function App() {
  const [modals, setModals] = useState({
    modalCal: false,
    modalReloj: false,
    paletaColores: false,
    contador: false,
    listatareas: false,
  });

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
  const [lastUpdatedData1, setLastUpdatedData1] = useState("");
  const [lastUpdatedData2, setLastUpdatedData2] = useState("");
  const owner = "iwinser117";
  const repositories = ["proyectoPaginaWeb", "lista-Tareas"];

  const fetchData = async (repoName) => {
    try {
      const apiUrl = `https://api.github.com/repos/${owner}/${repoName}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (repoName === "proyectoPaginaWeb") {
        setLastUpdatedData1(fechaFormateada(new Date(data.pushed_at)));
      } else if (repoName === "lista-Tareas") {
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

  const fechaFormateada = (dateString) => {
    const date = utcToZonedTime(new Date(dateString), "America/New_York");
    return format(date, "d 'de' MMMM 'de' yyyy, h:mm:ss a", { locale: es });
  };

  return (
    <>
      <h3 className="m-auto">Js Vanilla</h3>
      <Container className="color-letra">
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard
              className="h-100 MDBCard"
              onClick={() => toggleShow("modalCal")}
            >
              <MDBCardImage
                src={CalcImg}
                alt="..."
                className="img"
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Calculadora</MDBCardTitle>
                <MDBCardText>
                  Operamos con los datos obtenidos de los input del formulario y
                  operamos según corresponda con las funciones asignadas a los
                  botones de la parte inferior; se pueden realizar operaciones
                  con números enteros y decimales.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">{`Actualizado: ${lastUpdatedData1}`}</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard
              className="h-100 MDBCard"
              onClick={() => toggleShow("modalReloj")}
            >
              <MDBCardImage
                src={relojimg}
                className="img"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Reloj</MDBCardTitle>
                <MDBCardText>
                  Peticiones dependiendo de la ciudad y
                  actualizacpaletaColoresion segun corresponda.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">{`Actualizado: ${lastUpdatedData1}`}</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard
              className="h-100 MDBCard"
              onClick={() => toggleShow("paletaColores")}
            >
              <MDBCardImage
                src={paletaColoresimg}
                className="img"
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Paleta de colores</MDBCardTitle>
                <MDBCardText>
                  Se toma mediante un input el valor del color y se le agrega
                  este estilo a un elemento contenedor.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">{`Actualizado: ${lastUpdatedData1}`}</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard
              className="h-100 MDBCard"
              onClick={() => toggleShow("contador")}
            >
              <MDBCardImage
                src={imgcontador}
                className="img"
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Contador</MDBCardTitle>
                <MDBCardText>
                  Interfaz en la cual cada botón se le asigna una función, muy
                  intuitiva, como sumar 1, restar 1 y el botón reset el cual
                  deja el contador a cero 0. Haciendo uso de "useState"
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">{`Actualizado: ${lastUpdatedData1}`}</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard
              className="h-100 MDBCard"
              onClick={() => toggleShow("listatareas")}
            >
              <MDBCardImage
                src={listtareas}
                className="img"
              />
              <MDBCardBody>
                <MDBCardTitle>Lista de Tareas</MDBCardTitle>
                <MDBCardText>
                  Visitar aplicación
                  <br />
                  <a
                    href="https://crudlistatareas.netlify.app "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link de Visita al Crud
                  </a>
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">{`Actualizado: ${lastUpdatedData2}`}</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        {modals.modalCal ? (
          <Calculadora onClose={() => toggleShow("modalCal")} />
        ) : null}
        {modals.modalReloj ? (
          <Reloj onClose={() => toggleShow("modalReloj")} />
        ) : null}
        {modals.paletaColores ? (
          <PaletColores onClose={() => toggleShow("paletaColores")} />
        ) : null}
        {modals.contador ? (
          <Contador onClose={() => toggleShow("contador")} />
        ) : null}
        {modals.listatareas ? (
          <ListaTareas onClose={() => toggleShow("listatareas")} />
        ) : null}
      </Container>
    </>
  );
}
