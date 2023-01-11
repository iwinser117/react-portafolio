import React, { useState, useEffect } from "react";
import Reloj from "../codigoProyectos/Reloj";
import Calculadora from "../codigoProyectos/Calculadora";
import Contador from "../codigoProyectos/Contador";
import PaletColores from "../codigoProyectos/PaletColores";


const SectionDev = () => {
  

  return (
    <>
      <Calculadora/>
      <Reloj/>
      <Contador/>
      <PaletColores/>
    </>
  );
};

export default SectionDev;
