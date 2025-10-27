import React from "react"
import Nav from "@components/Nav"
import Descripcion from "@components/Descripcion"
import Footer from "@components/Footer"
import BtnArriba from "@buttons/BtnArriba"
import Formulario from "@components/Formulario"
import { Helmet } from "react-helmet-async"

const Proyectos = () => {
  const canonicalUrl = "https://iwinsersanchez.netlify.app/aplicaciones"
  const ogImage = "https://iwinsersanchez.netlify.app/assets/fullstack.jpg"
  const title = "Aplicaciones y Proyectos | Iwinser Sanchez"
  const description = "Explora aplicaciones y proyectos desarrollados por Iwinser Sanchez en React, JavaScript y más."

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="es" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Iwinser Sanchez" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Aplicaciones y Proyectos",
          url: canonicalUrl
        })}</script>
      </Helmet>

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
