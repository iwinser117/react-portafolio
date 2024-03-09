import React from "react"
import logo from "@assets/ok.svg"
import styles from "@styles/footer.css"
const Footer = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 data-bs-theme-dark footer">
      <p>
       <img src={logo} width="52px" alt="" />&nbsp;&nbsp; 2023  &nbsp;&nbsp;Alojado en Netlify
      </p>
    </div>
  )
}

export default Footer
