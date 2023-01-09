import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/home.css";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Nav from "../components/Nav";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nav" element={<Nav/>} />
      </Routes>
    </Layout>
  );
};

export default App;
