import React from "react";
import "@styles/aside.css";
import "@styles/root.css";
import { useTranslation } from "react-i18next";


const Aside = () => {
  const { t } = useTranslation();
  return (
    <section className="container aside-cnt col-8">
      <aside className="d-flex justify-content-around content-aside">
        <div className="aside">
          <div className="aside-div-int">
            <h3 className="text-center mb-4">{t('Aside.contactMe')}</h3>
            <div className="aside-div-int1">
              <div className="social-buttons">
                <a
                  className="social-button github"
                  href="https://github.com/iwinser117"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                  <span>GitHub</span>
                </a>

                <a
                  className="social-button linkedin"
                  href="https://www.linkedin.com/in/iwinser-aljadys-sanchez-0a62a0234/?originalSubdomain=co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>

                <a
                  className="social-button cv"
                  download="CurriculumDeveloperIwinserSanchez"
                  href="../assets/IwinserSanchez.pdf"
                >
                  <i className="fa-solid fa-file-pdf"></i>
                  <span>Curriculum</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Aside;
