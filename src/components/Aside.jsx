import React from "react"
import '@styles/aside.css'
import '@styles/root.css'
const Aside = () => {
  return (
    <section className="container aside-cnt col-8">
      <aside className="d-flex justify-content-around content-aside">
        <div className="card aside ">
          <div className="card-body aside-div-int ">
            <h6 className="card-title">Trabajemos juntos</h6>
            <div className="card-body d-flex cont-int-aside ">
              <a
                className="email-link"
                href="mailto:iwinser.sanchez47@gmail.com"
              >
                <p>
                  <i className="fa-regular fa-envelope"></i>&nbsp;
                  iwinser.sanchez47@gmail.com
                </p>
              </a>
            </div>
            <div className="card-body d-flex cont-int-aside">
              <a
                className="wsp-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=3197954808&text=Hola,%20cordial%20saludo.%20Gracias%20por%20contactarme%20en%20que%20puedo%20ayudarte?%20"
              >
                <p>
                  <i className="fa-brands fa-whatsapp"></i>&nbsp; + 57
                  3197954808
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="card aside">
          <div className="card-body aside-div-int">
            <h6 className="card-title">Encuentrame</h6>
            <div className="card-body d-flex cont-int-aside">
              <a
                className="git-link"
                href="https://github.com/iwinser117"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-brands fa-github "></i>&nbsp; GitHub
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
                  <i className="fa-brands fa-linkedin "></i>&nbsp; Linkedin
                </p>
              </a>
            </div>
            <div className="card-body d-flex cont-int-aside">
              <a
                className="pdf-link"
                download="CurriculumDeveloperIwinserSanchez"
                href="../assets/CurriculumDeveloperIwinserSanchez.pdf"
              >
                <p>
                  <i className="fa-solid fa-file-pdf "></i>&nbsp; Curriculum
                </p>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default Aside
