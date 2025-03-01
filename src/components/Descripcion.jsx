import React from "react";
import SectionVanilla from "../containers/SectionVanilla";
import Section1 from "@containers/Section1";
import Section2 from "@containers/Section2";
import Section3 from "@containers/Section3";
import Section4 from "@containers/Section4";
import Section5 from "@containers/Section5";
import ButtonGit from "../buttons/ButtonGit";
import "@styles/descripcionapps.css";
const Descripcion = () => {
  return (
    <>
      <section className="w-50 m-auto descripcionEncabezado">
        <div>
          <div className="text-center">
            <h3 className="card-title text-center">Aplicaciones</h3>
            <br />
            <p className="card-text-descrip">
              A continuación puedes ver algunas aplicaciones que se han
              desarrollado haciendo uso de distintas tecnologías y herramientas;
              algunas de ellas están desplegadas respectivamente. Dejo su link
              en la descripción de cada una de ellas.
            </p>
          </div>
        </div>
      </section>
      <section className="d-grid gap-4">
        <Section2 />
        {/* <Section5 /> */}
        <Section3 />
        <Section1 />
        {/* <Section4 /> */}
      </section>
      <ButtonGit />
    </>
  );
};

export default Descripcion;