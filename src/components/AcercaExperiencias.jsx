import React from "react";
import Card from 'react-bootstrap/Card';
import js from '@assets/logojavascript.svg';
import node from '@assets/nodejs.svg';
import css from '@assets/css.svg';
import html from '@assets/html.svg';
import react from '@assets/react.svg';

const AcercaExperiencia = () => {
  return (
    <>
      <div className="imagenes-exp">
        <Card className="imagenes-card1">
          <Card.Img variant="top" src={js} width={'120px'} height={'120px'} />
        </Card>
        <Card className="imagenes-card2">
          <Card.Img variant="top" src={node} width={'120px'} height={'120px'} />
        </Card>
        <Card className="imagenes-card3">
          <Card.Img variant="top" src={css} width={'120px'} height={'120px'} />
        </Card>
        <Card className="imagenes-card4">
          <Card.Img variant="top" src={html} width={'120px'} height={'120px'} />
        </Card>
        <Card className="imagenes-card5">
          <Card.Img variant="top" src={react} width={'120px'} height={'120px'} />
        </Card>
      </div>
    </>
  );
};

export default AcercaExperiencia;
