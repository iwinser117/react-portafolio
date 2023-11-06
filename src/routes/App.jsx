import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "@styles/resposiveMed.css";
import "@codigoProyectos/verResultados/calculadora";

import DarkModeProvider from "../buttons/DarkModeProvider";
import Home from "@pages/Home";
import Proyectos from "@pages/Proyectos";


const App = () => {
  return (
    <DarkModeProvider>
      <div className="app-container">
        <Routes>
          <Route exact path="/" element={<Proyectos />} /> 
          <Route exact path="/proyectos" element={<Proyectos/>} />
        </Routes>
      </div>
    </DarkModeProvider>
  );
};
export default App;
