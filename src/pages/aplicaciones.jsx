import React from "react"
import Nav from "@components/Nav"
import Descripcion from "@components/Descripcion"
import Footer from "@components/Footer"
import BtnArriba from "@buttons/BtnArriba"
import Formulario from "@components/Formulario"

const Proyectos = () => {
  return (
    <>
      <div className="d-grid gap-4 ">
        <Nav />
        <Descripcion />
        <Formulario />
        <Footer />
        <BtnArriba />
      </div>
    </>
  )
}

export default Proyectos
