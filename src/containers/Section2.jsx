import React from "react";
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
export default function App() {
  return (
    <>
      <h3 className="m-auto">Node JS</h3>
      <Container className="color-letra">
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard className="h-100 MDBCard ">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>TableExportJS</MDBCardTitle>
                <MDBCardText>
                  Consumimos y exportamos datos dinamicamente desde visualizarlos en una tabla.
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
                <MDBCardTitle>App de chat</MDBCardTitle>
                <MDBCardText>
                  En proceso de diseño y desarrollo.
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
                <MDBCardTitle>Sistema de Pagos</MDBCardTitle>
                <MDBCardText>
                En proceso de diseño y desarrollo.
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
                <MDBCardTitle>Sistema de Ventas</MDBCardTitle>
                <MDBCardText>
                En proceso de diseño y desarrollo.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </Container>
    </>
  );
}
