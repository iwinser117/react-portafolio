import React from "react";

const Aside = () => {
  return (
    <section className="container col-8  ">
      <aside className="d-flex justify-content-around ">
        <div className="card aside">
          <div className="card-body">
            <h5 className="card-title">Trabajemos juntos</h5>
            <div className="card-body d-flex">
              <a href="mailto:iwinser.sanchez47@gmail.com">
                <i className="fa-regular fa-envelope"></i>

                <p>iwinser.sanchez47@gmail.com</p>
              </a>
            </div>
            <div className="card-body d-flex ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=3197954808&text=Hola,%20cordial%20saludo.%20Gracias%20por%20contactarme%20en%20que%20puedo%20ayudarte?%20"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <p>+ 57 3197954808</p>
              </a>
            </div>
          </div>
        </div>
        <div className="card aside">
          <div className="card-body">
            <h5 className="card-title">Encuentrame</h5>
            <div className="card-body d-flex">
              <a
                href="https://github.com/iwinser117"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github fa-2xl"></i>
              </a>
              <p>GitHub</p>
            </div>
            <div className="card-body d-flex">
              <a
                href="https://www.linkedin.com/in/iwinser-aljadys-sanchez-0a62a0234/?originalSubdomain=co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin fa-2xl"></i>
              </a>
              <p>Linkedin</p>
            </div>
            <div className="card-body d-flex">
              <a
                download="CurriculumDeveloperIwinserSanchez"
                href="./images/IwinserSanchez.pdf"
              >
                <i className="fa-solid fa-file-pdf fa-2xl"></i>
              </a>
              <p>Curriculum</p>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Aside;
