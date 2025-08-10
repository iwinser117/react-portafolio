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
      <section className="descripcionEncabezado" style={{margin: '90px auto 16px auto', maxWidth: 700, minHeight: '20vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'none', boxShadow: 'none', border: 'none', padding: '0 24px'}}>
        <div className="text-center" style={{width: '100%', maxWidth: '600px', margin: '0 auto'}}>
          {/* <h2
            style={{
              fontWeight: 800,
              letterSpacing: '0.5px',
              fontSize: '2rem',
              marginBottom: 8,
              position: 'relative',
              display: 'inline-block',
              color: 'black !important',
              textShadow: 'none !important',
              backgroundColor: 'transparent !important'
            }}
          >
            ¡Bienvenido a mi portafolio!
            <span className="underline-gradient"></span>
          </h2> */}
          <p
            style={{
              lineHeight: 1.7,
              maxWidth: '100%',
              fontSize: '1.13rem',
              margin: '0 auto',
              fontWeight: 600,
              padding: '0 16px',
              color: 'black !important',
              textShadow: 'none !important',
              backgroundColor: 'transparent !important'
            }}
          >
            Descubre proyectos desarrollados con pasión, creatividad y tecnología actual.<br />
            Cada uno refleja mi compromiso con la calidad y la experiencia de usuario.
          </p>
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