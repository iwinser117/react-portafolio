import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/home.css";
import '../codigoProyectos/calculadora'

import Home from "../pages/Home";
import Proyectos from "../pages/Proyectos";

const App = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="nav" element={<Proyectos/>} />
      </Routes>
    
  );
};

export default App;
