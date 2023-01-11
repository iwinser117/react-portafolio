import React from "react";
import SectionDev from "../containers/SectionDev";

const Descripcion = () => {
  return (
    <>
      <section>
        <div className="card-content w-50 container ">
          <h4 className="card-title text-center">Proyectos</h4>
          <p className="card-text">
            A continuacion puedes ver algunas aplicaciones que se han
            desarrollado con JavaScript, tambien haciendo uso de otras
            herramientas como React, Bootstrap, Nodejs y algunas de ellas estan
            desplegadas respectivamente. Dejo su link en la descripcion de cada
            una de ellas.
          </p>
        </div>
      </section>
      <section className="container ">
        <SectionDev />
      </section>
    </>
  );
};

export default Descripcion;
