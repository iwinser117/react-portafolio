import React, { useState, useEffect, createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  Settings,
  X,
  Moon,
  Sun,
  Globe,
  ChevronRight,
  Search,
} from "lucide-react";
import "@styles/settings.css";

// ============= CONTEXTO MODO OSCURO =============
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
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

// ============= COMPONENTE SETTINGS =============
const SettingsManager = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleTheme } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const currentLanguage = i18n.language || "es";
  const ThemeIcon = isDarkMode ? Moon : Sun;

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedSection(null);
  };

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Cerrar al hacer click fuera (desktop)
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (e.target.closest(".sap-settings-wrapper")) return;
      closeMenu();
    };
    if (window.innerWidth >= 800) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="sap-settings-wrapper">
      {/* TRIGGER — inline, NO fixed */}
      <button
        className="sap-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        title={t("settings.title")}
        aria-label={t("settings.title")}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={18} /> : <Settings size={18} />}
        <span className="sap-trigger-label">{t("settings.title")}</span>
      </button>

      {isOpen && (
        <>
          {/* BACKDROP (solo móvil) */}
          <div
            className="sap-backdrop"
            onClick={closeMenu}
            role="presentation"
          />

          {/* ===== DESKTOP: POPOVER ===== */}
          <div
            className="sap-popover"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sap-popover-title"
          >
            {/* Header simple sin avatar */}
            <div className="sap-popover-header">
              <h3 id="sap-popover-title" className="sap-popover-title">
                <Settings size={16} />
                {t("settings.title")}
              </h3>
            </div>

            <div className="sap-list">
              {/* TEMA */}
              <button
                className="sap-item"
                onClick={() => toggleSection("theme")}
                aria-expanded={expandedSection === "theme"}
              >
                <ThemeIcon size={18} className="sap-item-icon" />
                <span className="sap-item-text">{t("settings.theme")}</span>
                <ChevronRight
                  size={16}
                  className="sap-item-chevron"
                  style={{
                    transform:
                      expandedSection === "theme"
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>

              {expandedSection === "theme" && (
                <div className="sap-submenu">
                  <button
                    className={`sap-subitem ${!isDarkMode ? "active" : ""}`}
                    onClick={() => isDarkMode && toggleTheme()}
                  >
                    <Sun size={14} />
                    {t("settings.lightMode")}
                  </button>
                  <button
                    className={`sap-subitem ${isDarkMode ? "active" : ""}`}
                    onClick={() => !isDarkMode && toggleTheme()}
                  >
                    <Moon size={14} />
                    {t("settings.darkMode")}
                  </button>
                </div>
              )}

              <div className="sap-divider" />

              {/* IDIOMA */}
              <button
                className="sap-item"
                onClick={() => toggleSection("language")}
                aria-expanded={expandedSection === "language"}
              >
                <Globe size={18} className="sap-item-icon" />
                <span className="sap-item-text">
                  {t("settings.language")}
                </span>
                <ChevronRight
                  size={16}
                  className="sap-item-chevron"
                  style={{
                    transform:
                      expandedSection === "language"
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>

              {expandedSection === "language" && (
                <div className="sap-submenu">
                  <button
                    className={`sap-subitem ${
                      currentLanguage === "es" ? "active" : ""
                    }`}
                    onClick={() => handleLanguageChange("es")}
                  >
                    <span className="sap-flag">🇪🇸</span>
                    {t("settings.spanish")}
                  </button>
                  <button
                    className={`sap-subitem ${
                      currentLanguage === "en" ? "active" : ""
                    }`}
                    onClick={() => handleLanguageChange("en")}
                  >
                    <span className="sap-flag">🇺🇸</span>
                    {t("settings.english")}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ===== MÓVIL: PANEL LATERAL ===== */}
          <div
            className="sap-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sap-panel-title"
          >
            <div className="sap-panel-header">
              <h2 id="sap-panel-title" className="sap-panel-title">
                <Settings size={18} />
                {t("settings.title")}
              </h2>
              <button
                className="sap-panel-close"
                onClick={closeMenu}
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>
            </div>

            <div className="sap-panel-search">
              <Search size={16} className="sap-search-icon" />
              <input
                type="text"
                className="sap-search-input"
                placeholder={t("settings.search", "Buscar...")}
              />
            </div>

            <div className="sap-panel-body">
              <button
                className="sap-panel-item"
                onClick={() => toggleSection("theme")}
                aria-expanded={expandedSection === "theme"}
              >
                <ThemeIcon size={18} className="sap-panel-item-icon" />
                <span className="sap-panel-item-text">
                  {t("settings.theme")}
                </span>
                <ChevronRight
                  size={18}
                  className="sap-panel-item-chevron"
                  style={{
                    transform:
                      expandedSection === "theme"
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>

              {expandedSection === "theme" && (
                <div className="sap-panel-submenu">
                  <button
                    className={`sap-panel-subitem ${
                      !isDarkMode ? "active" : ""
                    }`}
                    onClick={() => isDarkMode && toggleTheme()}
                  >
                    <Sun size={14} />
                    {t("settings.lightMode")}
                  </button>
                  <button
                    className={`sap-panel-subitem ${
                      isDarkMode ? "active" : ""
                    }`}
                    onClick={() => !isDarkMode && toggleTheme()}
                  >
                    <Moon size={14} />
                    {t("settings.darkMode")}
                  </button>
                </div>
              )}

              <div className="sap-divider" />

              <button
                className="sap-panel-item"
                onClick={() => toggleSection("language")}
                aria-expanded={expandedSection === "language"}
              >
                <Globe size={18} className="sap-panel-item-icon" />
                <span className="sap-panel-item-text">
                  {t("settings.language")}
                </span>
                <ChevronRight
                  size={18}
                  className="sap-panel-item-chevron"
                  style={{
                    transform:
                      expandedSection === "language"
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>

              {expandedSection === "language" && (
                <div className="sap-panel-submenu">
                  <button
                    className={`sap-panel-subitem ${
                      currentLanguage === "es" ? "active" : ""
                    }`}
                    onClick={() => handleLanguageChange("es")}
                  >
                    <span className="sap-flag">🇪🇸</span>
                    {t("settings.spanish")}
                  </button>
                  <button
                    className={`sap-panel-subitem ${
                      currentLanguage === "en" ? "active" : ""
                    }`}
                    onClick={() => handleLanguageChange("en")}
                  >
                    <span className="sap-flag">🇺🇸</span>
                    {t("settings.english")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SettingsManager;
