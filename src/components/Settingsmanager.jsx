import React, { useState, useEffect, createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Settings, X, Moon, Sun, Globe } from "lucide-react";
import "@styles/settings.css";

// ============= CONTEXTO PARA MODO OSCURO =============
const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode debe usarse dentro de SettingsProvider");
  }
  return context;
};

export const SettingsProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("dark-mode");
    return savedTheme ? JSON.parse(savedTheme) : true;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
    // Aplicar clase al documento
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={`dark-mode-container  app-container ${isDarkMode ? "dark-mode" : ""}`}>
        {children}
        {isDarkMode && <div className="theme-bubbles"></div>}
      </div>
    </DarkModeContext.Provider>
  );
};

// ============= COMPONENTE SETTINGS =============
const SettingsManager = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleTheme } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const currentLanguage = i18n.language || "es";
  const isLightMode = !isDarkMode;

  return (
    <>
      {/* BOTÓN SETTINGS */}
      <button
        className="settings-trigger"
        onClick={() => setIsOpen(!isOpen)}
        title={t("settings.title")}
        aria-label={t("settings.title")}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={20} /> : <Settings size={20} />}
      </button>

      {/* PANEL SETTINGS */}
      {isOpen && (
        <div
          className="settings-backdrop"
          onClick={() => setIsOpen(false)}
          role="presentation"
        >
          <div
            className="settings-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="settings-title"
          >
            {/* Header */}
            <div className="settings-header-section">
              <h2 id="settings-title" className="settings-title">
                {t("settings.title")}
              </h2>
              <button
                className="settings-close"
                onClick={() => setIsOpen(false)}
                title="Cerrar"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Divider */}
            <div className="settings-divider"></div>

            {/* SECCIÓN TEMA */}
            <div className="settings-section">
              <div className="settings-section-header">
                <div className="settings-icon theme-icon">
                  {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
                </div>
                <h3 className="settings-section-title">
                  {t("settings.theme")}
                </h3>
              </div>

              <div className="settings-options">
                <button
                  className={`settings-option ${isLightMode ? "active" : ""}`}
                  onClick={toggleTheme}
                  aria-pressed={isLightMode}
                >
                  <Sun size={16} />
                  <span>{t("settings.lightMode")}</span>
                </button>
                <button
                  className={`settings-option ${isDarkMode ? "active" : ""}`}
                  onClick={toggleTheme}
                  aria-pressed={isDarkMode}
                >
                  <Moon size={16} />
                  <span>{t("settings.darkMode")}</span>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="settings-divider"></div>

            {/* SECCIÓN IDIOMA */}
            <div className="settings-section">
              <div className="settings-section-header">
                <div className="settings-icon language-icon">
                  <Globe size={16} />
                </div>
                <h3 className="settings-section-title">
                  {t("settings.language")}
                </h3>
              </div>

              <div className="settings-options column">
                <button
                  className={`settings-option ${
                    currentLanguage === "es" ? "active" : ""
                  }`}
                  onClick={() => handleLanguageChange("es")}
                  aria-pressed={currentLanguage === "es"}
                >
                  <span className="lang-flag">🇪🇸</span>
                  <span>{t("settings.spanish")}</span>
                </button>
                <button
                  className={`settings-option ${
                    currentLanguage === "en" ? "active" : ""
                  }`}
                  onClick={() => handleLanguageChange("en")}
                  aria-pressed={currentLanguage === "en"}
                >
                  <span className="lang-flag">🇺🇸</span>
                  <span>{t("settings.english")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsManager;
