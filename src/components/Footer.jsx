import React from "react"
import logo from "@assets/ok.svg"
const Footer = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <p>
       <img src={logo} width="52px" alt="" /> &copy;   2023  &nbsp;&nbsp;Alojado en Netlify
      </p>
    </div>
  )
}

export default Footer
