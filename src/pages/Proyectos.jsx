import React from "react";
import Nav from "@components/Nav";
import Descripcion from "@components/Descripcion";
import Footer from "@components/Footer";

const Proyectos = () => {
  return (
    <>
      <div className="d-grid gap-4">
        <Nav />
        <Descripcion />
        <Footer />
      </div>
    </>
  );
};

export default Proyectos;
