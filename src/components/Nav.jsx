import React from 'react';
import logo from '../assets/ok.svg'

const Nav = () => {
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
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Acerca de mi
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Habilidades
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Proyecto
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contactame
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Nav;