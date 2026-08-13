// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import "@styles/index.css";
import "@codigoProyectos/verResultados/calculadora";

import { SettingsProvider } from "@components/Settingsmanager";
import Nav from "@components/Nav";
import Home from "@pages/Home";
import Proyectos from "@pages/aplicaciones";
import Blog from "@pages/Blog";
import BlogPost from "@containers/BlogPost";
import Servicios from "@containers/Services";

const App = () => {
  return (
    <SettingsProvider>
      <Nav />
      <div className="app-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:lang" element={<Home />} />

          <Route path="/:lang/servicios" element={<Servicios />} />
          <Route path="/:lang/portafolio" element={<Proyectos />} />
          <Route path="/:lang/blog" element={<Blog />} />
          <Route path="/:lang/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </SettingsProvider>
  );
};

export default App;
