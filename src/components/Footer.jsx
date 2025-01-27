import React from "react"
import logowhite from "@assets/ok.svg";
import logoblack from "@assets/ok_white_bgsvg.svg";
import styles from "@styles/footer.css"
import { useDarkMode } from "../buttons/DarkModeProvider";
const Footer = () => {
  const isDarkMode = useDarkMode();
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 data-bs-theme-dark footer">
      <p>
        <img src={isDarkMode ? logoblack : logowhite} width="52px" alt="" />&nbsp;&nbsp; 2023  &nbsp;&nbsp;Alojado en Netlify
      </p>
    </div>
  )
}

export default Footer
