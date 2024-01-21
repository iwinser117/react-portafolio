import React from "react";
import SectionVanilla from "../containers/SectionVanilla";
import Section1 from "@containers/Section1";
import Section2 from "@containers/Section2";
const Descripcion = () => {
  return (
    <>
      <section className="w-50 m-auto descripcionEncabezado">
        <div>
          <div className="text-center">
            <h4 className="card-title text-center">Aplicaciones</h4>
            <br />
            <p className="card-text">
              A continuation puedes ver algunas aplicaciones que se han
              desarrollado haciendo uso de distintas tecnologías y herramientas;
              algunas de ellas están desplegadas respectivamente. Dejo su link
              en la descripción de cada una de ellas.
            </p>
          </div>
        </div>
      </section>
      <section className="d-grid gap-4">
        <Section2 />
        <Section1 />
      </section>
    </>
  );
};

export default Descripcion;
