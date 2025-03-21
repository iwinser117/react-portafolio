import React from "react";
import "@styles/aside.css";
import "@styles/root.css";

const Aside = () => {
  return (
    <section className="container aside-cnt col-8 ">
      <aside className="d-flex justify-content-around content-aside">
        <div className="aside">
          <div className="aside-div-int">
            <h3>Encuentrame</h3>
            <div className="aside-div-int1">
              <div className="card-body d-flex cont-int-aside">
                <a
                  className="git-link"
                  href="https://github.com/iwinser117"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="">
                    <i className="fa-brands fa-github "></i>&nbsp;{" "}
                    <span className="sizeIcon">GitHub</span>
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
                    <i className="fa-brands fa-linkedin "></i>&nbsp;
                    <span className="sizeIcon">Linkedin</span>
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
                    <i className="fa-solid fa-file-pdf "></i>&nbsp;{" "}
                    <span className="sizeIcon">Curriculum</span>
                  </p>
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
