// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import "@styles/index.css";
import "@codigoProyectos/verResultados/calculadora";

import { LocationNotification } from '@components/LocationNotification';
import { I18nextProvider } from 'react-i18next';


import { SettingsProvider } from "@components/Settingsmanager";
import Nav from "@components/Nav";
import Home from "@pages/Home";
import Proyectos from "@pages/aplicaciones";
import Blog from "@pages/Blog";
import BlogPost from "@containers/BlogPost";
import Servicios from "@pages/Services";

import i18n from "../locales/i18nConfig"; "./locales/i18nConfig";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <LocationNotification />
      <AppContent />
    </I18nextProvider>
  );
};

const AppContent = () => {
  return (
    <SettingsProvider>
      <Nav />
      <div className="app-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:lang" element={<Home />} />

          <Route path="/:lang/servicios" element={<Servicios />} />
          <Route path="/:lang/servicios/:slug" element={<Servicios />} />
          <Route path="/:lang/portafolio" element={<Proyectos />} />
          <Route path="/:lang/blog" element={<Blog />} />
          <Route path="/:lang/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </SettingsProvider>
  );
};

export default App;
