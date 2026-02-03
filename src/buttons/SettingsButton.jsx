import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "./DarkModeProvider";
import { Settings, X, Moon, Sun, Globe } from "lucide-react";
import "@styles/botons.css";

const SettingsButton = () => {
  const { t, i18n } = useTranslation();
  const isDarkMode = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeToggle = () => {
    const checkbox = document.getElementById("input");
    if (checkbox) {
      checkbox.click();
    }
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const colors = {
    bg: isDarkMode ? "#1D232A" : "#F5F6F7",
    bgSecondary: isDarkMode ? "#232946" : "#ffffff",
    text: isDarkMode ? "#F5F6F7" : "#232946",
    textSecondary: isDarkMode ? "#e0e0e0" : "#354A5F",
    border: isDarkMode ? "rgba(0, 64, 133, 0.15)" : "rgba(0, 64, 133, 0.08)",
    shadow: isDarkMode
      ? "0 10px 25px rgba(0, 64, 133, 0.2)"
      : "0 10px 25px rgba(0, 64, 133, 0.12)",
  };

  return (
    <>
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="nav-settings-button"
        title={t("settings.title")}
      >
        {isOpen ? (
          <X size={20} color="currentColor" />
        ) : (
          <Settings size={20} color="currentColor" />
        )}
      </button>

      {/* Settings Modal */}
      {isOpen && (
        <div
          className="settings-modal-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="settings-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="settings-modal-close"
              title="Cerrar"
            >
              <X size={20} />
            </button>

            <h2 className="settings-modal-title">{t("settings.title")}</h2>

            {/* Theme Settings */}
            <div className="settings-section">
              <div className="settings-header">
                <div className="settings-icon">
                  {isDarkMode ? (
                    <Moon size={18} />
                  ) : (
                    <Sun size={18} />
                  )}
                </div>
                <h3 className="settings-label">{t("settings.theme")}</h3>
              </div>

              <div className="settings-buttons-group">
                <button
                  onClick={handleThemeToggle}
                  className={`settings-btn ${!isDarkMode ? "active" : ""}`}
                >
                  <Sun size={16} />
                  {t("settings.lightMode")}
                </button>
                <button
                  onClick={handleThemeToggle}
                  className={`settings-btn ${isDarkMode ? "active" : ""}`}
                >
                  <Moon size={16} />
                  {t("settings.darkMode")}
                </button>
              </div>
            </div>

            {/* Language Settings */}
            <div className="settings-section">
              <div className="settings-header">
                <div className="settings-icon globe">
                  <Globe size={18} />
                </div>
                <h3 className="settings-label">{t("settings.language")}</h3>
              </div>

              <div className="settings-buttons-group column">
                <button
                  onClick={() => handleLanguageChange("es")}
                  className={`settings-btn ${
                    i18n.language === "es" ? "active" : ""
                  }`}
                >
                  🇪🇸 {t("settings.spanish")}
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`settings-btn ${
                    i18n.language === "en" ? "active" : ""
                  }`}
                >
                  🇺🇸 {t("settings.english")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsButton;
