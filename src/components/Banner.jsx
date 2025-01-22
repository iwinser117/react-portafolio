import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import "@styles/Banner.css";
import iwinserPerfil from "@assets/iwinserPerfil.webp";

const Banner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section className="sectionbanner">
      <div className="d-flex justify-content-around align-items-center p-2 container banner">
        <div className="iwinserPerfil">
          <div
            className={`image-placeholder ${imageLoaded ? "loaded" : ""}`}
            style={{
              backgroundColor: "#f0f0f0",
            }}
          >
            <img
              src={iwinserPerfil}
              alt="Perfil"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              style={{
                opacity: imageLoaded ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            />
          </div>
        </div>
        <div className="p-2 w-75">
          <h4 className="text-center nametitle">Iwinser Sanchez</h4>
          <h2 className="text-center">FullStack Developer JavaScript</h2>
          <p className="text-center">
            Desarrollador de software full-stack con experiencia en JavaScript y
            pasión por crear sitios web atractivos, funcionales y optimizados.
            Especializado en soluciones web innovadoras y experiencias de
            usuario excepcionales.
          </p>
          <div className="logos-contact m-auto">
            <div className="card-body d-flex logos-contact">
              <a
                className="pdf-link"
                download="CurriculumDeveloperIwinserSanchez"
                href="../assets/IwinserSanchez.pdf"
                aria-label="Descargar currículum en formato PDF"
              >
                <p>
                  <MDBIcon far icon="file-pdf" size="2x" />
                </p>
              </a>
              <a
                className="git-link"
                href="https://github.com/iwinser117"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar perfil de GitHub"
              >
                <p>
                  <MDBIcon fab icon="github" size="2x" />
                </p>
              </a>
              <a
                className="linkedin-link"
                href="https://www.linkedin.com/in/iwinser-aljadys-sanchez-0a62a0234/?originalSubdomain=co"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar perfil de LinkedIn"
              >
                <p>
                  <MDBIcon fab icon="linkedin" size="2x" />
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
