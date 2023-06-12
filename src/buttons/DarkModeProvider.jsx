import React, { useState } from "react"
import "@styles/botons.css"
import { CiDark } from "react-icons/ci";

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? "dark-mode " : ""}>
      <button
        className="theme-toggle position-fixed bottom-0 right-0 m-3"
        onClick={handleModeChange}
      >
        
        <p className="ci-icon"><CiDark/></p>
      </button>

      {children}
      {isDarkMode && <div className="bubbles"></div>}
    </div>
  )
}

export default DarkModeProvider
