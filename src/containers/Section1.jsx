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
import Reloj from '../codigoProyectos/Reloj';
import CalcImg from '../assets/imgCalculadora.png'
import relojimg from '../assets/relojimg.png'
export default function App() {
  const [modals, setModals] = useState({
    modalCal: false,
    modalReloj: false,
    paletColor: false,
  });

  const toggleShow = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: !prevModals[modalName],
    }));
  };
    return (
    <>
      <h3 className="m-auto">Js Vanilla</h3>
      <Container className="color-letra">
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard className="h-100 MDBCard" onClick={()=>toggleShow('modalCal')}>
              <MDBCardImage
                src={CalcImg}
                alt="..."
                height={'195px'}
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
            <MDBCard className="h-100 MDBCard" onClick={()=>toggleShow('modalReloj')}>
              <MDBCardImage
                src={relojimg}
                height={'195px'}
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
            <MDBCard className="h-100 MDBCard" onClick={()=>toggleShow('paletColor')}>
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
          <MDBCard className="h-100 MDBCard" onClick={()=>toggleShow(2)}>
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
        {modals.modalCal  ?  <Calculadora /> : null }
        {modals.modalReloj  ?  <Reloj /> : null }
      </Container>
    </>
  );
}
