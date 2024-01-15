import React, { useState, useEffect } from "react";
import logo from "@assets/ok.svg";
import "@styles/Nav.css";
import { NavLink, useLocation } from "react-router-dom";
const Nav = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("n2").style.top = "0";
    } else {
      document.getElementById("n2").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg">
        <div className="container-fluid w-75" id="n2">
          <img className="navbar-brand" src={logo} width="60px" />
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-ul">
              {location.pathname === "/proyectos" ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={"/"}
                    // onClick={() => handleNavigation("nav")}
                  >
                    Inicio
                  </NavLink>
                </li>
              ) : null}
              {/* {location.pathname === "/proyectos" ? null : (
                <li className="nav-item">
                  <a className="nav-link" href="#acercademi">
                    Acerca de mi
                  </a>
                </li>
              )} */}

              {location.pathname === "/proyectos" ? null : (
                <li className="nav-item ">
                  <a className="nav-link " href="#habilidades">
                    Habilidades
                  </a>
                </li>
              )}

              {location.pathname === "/proyectos" ? null : (
                <li className="nav-item ">
                  <NavLink
                    className="nav-link "
                    to={"/proyectos"}
                    // onClick={() => handleNavigation("nav")}
                  >
                    Proyectos
                  </NavLink>
                </li>
              )}

              <li className="nav-item ">
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
