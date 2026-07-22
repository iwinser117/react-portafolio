import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import "@styles/Banner.css";
import iwinserPerfil from "@assets/iwinserPerfil.webp";
import { useDarkMode } from "./Settingsmanager";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";


const Banner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isDarkMode = useDarkMode();
  const { t } = useTranslation();
  return (
    <Container className="sectionbanner">
      <div className="banner">
        <div className="banner-media">
          <div className="iwinserPerfil">
            <div className={`image-placeholder ${imageLoaded ? "loaded" : ""}`}>
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
          <div className="social-buttons social-buttons-small m-auto">
            <a
              className="social-button github small"
              href="https://github.com/iwinser117"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
              <span>{t('banner.github')}</span>
            </a>
            <a
              className="social-button linkedin small"
              href="https://www.linkedin.com/in/iwinser-aljadys-sanchez-0a62a0234/?originalSubdomain=co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
              <span>{t('banner.linkedin')}</span>
            </a>
            <a
              className="social-button cv small"
              download="CurriculumDeveloperIwinserSanchez"
              href="../assets/IwinserSanchez.pdf"
            >
              <i className="fa-solid fa-file-pdf"></i>
              <span>{t('banner.curriculum')}</span>
            </a>
          </div>
        </div>
        <div className="banner-content p-2">
          <h4 className="text-center nametitle">Iwinser Sanchez</h4>
          <h2 className="text-center">{t('banner.title')}</h2>
          <p className="text-center">
            {t('banner.description')}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
