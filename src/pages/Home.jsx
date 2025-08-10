import React from "react"
import "@styles/home.css"
import { Helmet } from "react-helmet-async"

import Nav from "@components/Nav"
import Banner from "@components/Banner"
import Acerca from "@components/Acerca"
import Habilidades from "@components/Habilidades"
import BtnArriba from "@buttons/BtnArriba"
import Formulario from "@components/Formulario"
import Aside from "@components/Aside"
import Footer from "@components/Footer"

const Home = () => {
  const canonicalUrl = "https://iwinsersanchez.netlify.app/"
  const ogImage = "https://iwinsersanchez.netlify.app/assets/fullstack.jpg"
  const description = "Iwinser Sanchez, desarrollador web FullStack especializado en JavaScript, React, HTML y CSS. Explora mis proyectos y experiencia."

  return (
    <>
      <Helmet>
        <title>Iwinser Sanchez | Desarrollador Web FullStack</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="es" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Iwinser Sanchez" />
        <meta property="og:title" content="Iwinser Sanchez | Desarrollador Web FullStack" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Imagen de portada del portafolio de Iwinser Sanchez" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Iwinser Sanchez | Desarrollador Web FullStack" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Iwinser Sanchez",
          url: canonicalUrl,
          jobTitle: "Desarrollador Web FullStack",
          image: ogImage,
          description
        })}</script>
      </Helmet>

      <div className="data-bs-theme-dark letra-home">
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
