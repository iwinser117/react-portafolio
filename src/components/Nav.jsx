import React ,{useState}from "react";
import logo from "../assets/ok.svg";
import Home from "../pages/Home";

const Nav = () => {
  const [currentPage, setCurrentPage] = useState('/');
  function handleNavigation(newPage) {
    setCurrentPage(newPage);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img
            className="navbar-brand"
            src={logo}
            width="60px"
            onClick={() => handleNavigation("/")}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#acercademi">
                  Acerca de mi
                </a>
              </li>
              {currentPage === "/" ? (
                <li className="nav-item">
                  <a className="nav-link" href="#habilidades">
                    Habilidades
                  </a>
                </li>
              ) : null}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleNavigation("nav")}
                >
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactame">
                  Contactame
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
