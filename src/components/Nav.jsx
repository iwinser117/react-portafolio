import React, { useEffect } from "react";
import logowhite from "@assets/ok.svg";
import logoblack from "@assets/ok_white_bgsvg.svg";
import "@styles/Nav.css";
import { NavLink, useLocation } from "react-router-dom";
import { useDarkMode } from "../buttons/DarkModeProvider";
import { useTranslation } from "react-i18next";
import SettingsButton from "../buttons/SettingsButton";
import { FaHome, FaUser,FaBrain, FaLaptopCode, FaEnvelope } from "react-icons/fa";

const Nav = () => {
  const location = useLocation();
  const isDarkMode = useDarkMode();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);

    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");
      const n2 = document.getElementById("n2");

      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        n2.style.top = "0";
      } else {
        navbar.style.top = "-50px";
        n2.style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg">
        <div className="container-fluid w-75" id="n2">
          <img className="navbar-brand" src={isDarkMode ? logoblack : logowhite} width="60px" alt="logoIS" />
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
              {location.pathname === "/aplicaciones" ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/"}>
                    <FaHome style={{ marginRight: '5px' }} /> {t('nav.home')}
                  </NavLink>
                </li>
              ) : null}
              {/* {location.pathname === "/aplicaciones" ? null : (
                <li className="nav-item">
                  <a className="nav-link" href="#acercademi">
                    Acerca de mi
                  </a>
                </li>
              )} */}

              {location.pathname === "/aplicaciones" ? null : (
                <li className="nav-item ">
                  <a className="nav-link " href="#habilidades">
                  <FaBrain style={{ marginRight: '5px' }}/> {t('nav.skills')}
                  </a>
                </li>
              )}

              {location.pathname === "/aplicaciones" ? null : (
                <li className="nav-item ">
                  <NavLink className="nav-link" to={"/aplicaciones"}>
                    <FaLaptopCode style={{ marginRight: '5px' }} /> {t('nav.applications')}
                  </NavLink>
                </li>
              )}

              <li className="nav-item ">
                <a className="nav-link" href="#contactame">
                  <FaEnvelope style={{ marginRight: '5px' }} /> {t('nav.contact')}
                </a>
              </li>

              <li className="nav-item nav-settings-item">
                <SettingsButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;