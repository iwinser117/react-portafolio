import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/home.css";

import Home from "../pages/Home";
import Nav from "../components/Nav";

const App = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="nav" element={<Nav/>} />
      </Routes>
    
  );
};

export default App;
