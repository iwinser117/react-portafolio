import React, { useState, useEffect } from "react";
import Reloj from "@codigoProyectos/Reloj";
import Calculadora from "@codigoProyectos/Calculadora";
import Contador from "@codigoProyectos/Contador";
import PaletColores from "@codigoProyectos/PaletColores";
import ListaTareas from "@codigoProyectos/ListaTareas";
import RickAndMorty from "@codigoProyectos/RickAndMorty";


const SectionDev = () => {
    return (
    <>
      <div className="container gap-4 d-grid ">
        <Calculadora />
        <Reloj />
        <Contador />
        <PaletColores />
        {/* <ListaTareas/> */}
        {/* <RickAndMorty/> */}
      </div>
    </>
  );
};

export default SectionDev;
