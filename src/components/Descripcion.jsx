import React from "react"
import SectionDev from "../containers/SectionDev"

const Descripcion = () => {
  return (
    <>
      <section className="w-50 m-auto descripcionEncabezado">
        <div>
          <div className="text-center">
            <h4 className="card-title text-center">Aplicaciones</h4>
            <br />
            <p className="card-text">
              A continuacion puedes ver algunas aplicaciones que se han
              desarrollado con JavaScript, tambien haciendo uso de otras
              herramientas como React, Bootstrap, Nodejs y algunas de ellas
              estan desplegadas respectivamente. Dejo su link en la descripcion
              de cada una de ellas.
            </p>
          </div>
        </div>
      </section>
      <section className="d-grid gap-4">
        <SectionDev />
      </section>
    </>
  )
}

export default Descripcion
