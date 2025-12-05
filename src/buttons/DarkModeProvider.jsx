import React, { useState, useEffect, createContext, useContext } from "react";
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
        <label className="switch">
          <input 
            id="input" 
            type="checkbox" 
            checked={!isDarkMode}
            onChange={handleModeChange}
          />
          <div className="slider1 round">
            <div className="sun-moon">
              <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>

              <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
            </div>
            <div className="stars">
              <svg id="star-1" className="star" viewBox="0 0 20 20">
                <path
                  d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                ></path>
              </svg>
              <svg id="star-2" className="star" viewBox="0 0 20 20">
                <path
                  d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                ></path>
              </svg>
              <svg id="star-3" className="star" viewBox="0 0 20 20">
                <path
                  d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                ></path>
              </svg>
              <svg id="star-4" className="star" viewBox="0 0 20 20">
                <path
                  d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                ></path>
              </svg>
            </div>
          </div>
        </label>
        {children}
        {isDarkMode && <div className="bubbles"></div>}
      </div>
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
