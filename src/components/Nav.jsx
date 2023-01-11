import React, { useState } from "react";
import logo from "../assets/ok.svg";
import Home from "../pages/Home";
import { NavLink, useLocation } from "react-router-dom";
const Nav = () => {
  /* const [currentPage, setCurrentPage] = useState('nav');
  function handleNavigation(newPage) {
    setCurrentPage(newPage);
  } */

  const locacion = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img className="navbar-brand" src={logo} width="60px" />
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
              {location.pathname === "/nav" ?  <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={"/"}
                    // onClick={() => handleNavigation("nav")}
                  >
                    Inicio
                  </NavLink>
                </li> : (
               null
              )}
              {location.pathname === "/nav" ? null : (
                <li className="nav-item">
                  <a className="nav-link" href="#acercademi">
                    Acerca de mi
                  </a>
                </li>
              )}

              {location.pathname === "/nav" ? null : (
                <li className="nav-item">
                  <a className="nav-link" href="#habilidades">
                    Habilidades
                  </a>
                </li>
              )}

              {location.pathname === "/nav" ? null : (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={"/nav"}
                    // onClick={() => handleNavigation("nav")}
                  >
                    Proyectos
                  </NavLink>
                </li>
              )}

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
