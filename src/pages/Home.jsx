import React from "react";

import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Acerca from "../components/Acerca";
import Habilidades from "../components/Habilidades";
import BtnArriba from "../buttons/BtnArriba";
import Formulario from "../components/Formulario";

const Home = () => {
  return (
    <>
      <div className="d-grid gap-4">
        <Nav />
        <Banner />
        <Acerca/>
        <Habilidades/>
        <BtnArriba/>
        <Formulario/>
      </div>
    </>
  );
};

export default Home;
