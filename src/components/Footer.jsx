import React from 'react';
import logo from '../assets/ok.svg'
const Footer = () => {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <p>
          <img src={logo} width="52px" alt="" /> &copy; 2023 Alojado en Netlify
        </p>
      </div>
    );
}

export default Footer;