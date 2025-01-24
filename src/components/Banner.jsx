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
        <div className="p-2">
          <h4 className="text-center nametitle">Iwinser Sanchez</h4>
          <h2 className="text-center">Desarrollador FullStack</h2>
          <p className="text-center">
          Experiencia en JavaScript y <br />desarrollo web front-end y back-end.
          </p>
          <div className="logos-contact m-auto">
            <div className="card-body d-flex logos-contact">
            <div className="card-body d-flex cont-int-aside">
                <a
                  className="git-link"
                  href="https://github.com/iwinser117"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <i className="fa-brands fa-github  "></i><br /> <small className="">GitHub</small>
                  </p>
                </a>
              </div>
              <div className="card-body d-flex cont-int-aside">
                <a
                  className="linkedin-link"
                  href="https://www.linkedin.com/in/iwinser-aljadys-sanchez-0a62a0234/?originalSubdomain=co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <i className="fa-brands fa-linkedin "></i><br /> <small className="">Linkedin</small>
                  </p>
                </a>
              </div>
              <div className="card-body d-flex cont-int-aside">
                <a
                  className="pdf-link"
                  download="CurriculumDeveloperIwinserSanchez"
                  href="../assets/IwinserSanchez.pdf  "
                >
                  <p>
                    <i className="fa-solid fa-file-pdf "></i><br /> <small className="">Curriculum</small>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
