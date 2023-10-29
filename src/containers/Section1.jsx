import React, { useState } from "react";
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
import Calculadora from "../codigoProyectos/Calculadora";
export default function App() {
  const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);
  return (
    <>
      <h3 className="m-auto">Js Vanilla</h3>
      <Container className="color-letra">
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard className="h-100 MDBCard" onClick={toggleShow}>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                alt="..."
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
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100 MDBCard">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Reloj</MDBCardTitle>
                <MDBCardText>
                  Peticiones dependiendo de la ciudad y actualizacion segun
                  corresponda.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100 MDBCard">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
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
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100 MDBCard">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
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
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
          <MDBCard className="h-100 MDBCard" onClick={toggleShow}>
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/_kxz7WX4mLU?si=r5DlgS84bpYIULlx" 
                title="Video"
              />
              <MDBCardBody>
                <MDBCardTitle>Test de Video</MDBCardTitle>
                <MDBCardText>
                  Test de un video previo.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        {staticModal ? <Calculadora l={setStaticModal} /> : null}
      </Container>
    </>
  );
}
