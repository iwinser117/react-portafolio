import React from "react";
import { Routes, Route } from "react-router-dom";

import "@styles/resposiveMed.css";
import "@codigoProyectos/verResultados/calculadora";

import DarkModeProvider from "../buttons/DarkModeProvider";
import Home from "@pages/Home";
import Proyectos from "@pages/aplicaciones";

const App = () => {
  return (
    <DarkModeProvider>
      <div className="app-container main-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/aplicaciones" element={<Proyectos />} />
        </Routes>
      </div>
    </DarkModeProvider>
  );
};
export default App;
