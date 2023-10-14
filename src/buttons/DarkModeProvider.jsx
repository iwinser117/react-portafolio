import React, { useState } from "react";
import { BiSun } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import "@styles/botons.css";

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`dark-mode-container ${isDarkMode ? "dark-mode" : ""}`}>
      <button
        className="theme-toggle"
        onClick={handleModeChange}
      >
        <p className="ci-icon">{isDarkMode ? <MdDarkMode /> : <BiSun />}</p>
      </button>

      {children}
      {isDarkMode && <div className="bubbles"></div>}
    </div>
  );
};

export default DarkModeProvider;
