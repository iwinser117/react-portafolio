import React, { useState, useEffect, createContext, useContext } from "react";
import { BiSun } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import "@styles/botons.css";

// Creamos el contexto para el tema
const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

const DarkModeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("dark-mode");
    return savedTheme ? JSON.parse(savedTheme) : true;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleModeChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={isDarkMode}>
      <div className={`dark-mode-container ${isDarkMode ? "dark-mode" : ""}`}>
        <button aria-label="change_theme" className="theme-toggle" onClick={handleModeChange}>
          <p className="ci-icon">{isDarkMode ? <BiSun /> : <MdDarkMode />}</p>
        </button>
        {children}
        {isDarkMode && <div className="bubbles"></div>}
      </div>
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
