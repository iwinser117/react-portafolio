import React from "react"
import "@styles/home.css"

import Nav from "@components/Nav"
import Banner from "@components/Banner"
import Acerca from "@components/Acerca"
import Habilidades from "@components/Habilidades"
import BtnArriba from "@buttons/BtnArriba"
import Formulario from "@components/Formulario"
import Aside from "@components/Aside"
import Footer from "@components/Footer"

const Home = () => {
  return (
    <>
      <div className="d-grid gap-4">
        <Nav />
        <Banner />
        <Acerca />
        <Habilidades />
        <BtnArriba />
        <Formulario />
        <Aside />
        <Footer />
      </div>
    </>
  )
}

export default Home
