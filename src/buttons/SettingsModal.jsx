import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "./DarkModeProvider";
import { Settings, X, Moon, Sun, Globe } from "lucide-react";
import "@styles/botons.css";

const SettingsModal = () => {
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
        className="settings-button"
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1000,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: isDarkMode
            ? "linear-gradient(135deg, #004085 0%, #0066cc 100%)"
            : "linear-gradient(135deg, #004085 0%, #1a75ff 100%)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: colors.shadow,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
        }}
        title={t("settings.title")}
      >
        {isOpen ? (
          <X size={24} color="white" />
        ) : (
          <Settings size={24} color="white" />
        )}
      </button>

      {/* Settings Modal */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            animation: "fadeIn 0.3s ease",
          }}
          onClick={() => setIsOpen(false)}
        >
          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes slideIn {
              from {
                transform: translateX(400px);
              }
              to {
                transform: translateX(0);
              }
            }
          `}</style>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "350px",
              height: "100vh",
              backgroundColor: colors.bgSecondary,
              boxShadow: colors.shadow,
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              animation: "slideIn 0.3s ease",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.text,
                fontSize: "1.5rem",
              }}
            >
              <X size={24} />
            </button>

            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: colors.text,
                marginTop: "1rem",
              }}
            >
              {t("settings.title")}
            </h2>

            {/* Theme Settings */}
            <div
              style={{
                borderBottom: `1px solid ${colors.border}`,
                paddingBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: isDarkMode
                      ? "linear-gradient(135deg, #004085 0%, #0066cc 100%)"
                      : "#FFA500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isDarkMode ? (
                    <Moon size={18} color="white" />
                  ) : (
                    <Sun size={18} color="white" />
                  )}
                </div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: colors.text,
                    margin: 0,
                  }}
                >
                  {t("settings.theme")}
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <button
                  onClick={handleThemeToggle}
                  style={{
                    flex: 1,
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    border: `2px solid ${isDarkMode ? "transparent" : colors.border}`,
                    background: isDarkMode
                      ? "rgba(245, 246, 247, 0.05)"
                      : "linear-gradient(135deg, #FFA500 0%, #FFB84D 100%)",
                    color: isDarkMode ? colors.textSecondary : "white",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (!isDarkMode) return;
                    e.target.style.background = "rgba(245, 246, 247, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isDarkMode) return;
                    e.target.style.background = "rgba(245, 246, 247, 0.05)";
                  }}
                >
                  <Sun size={18} />
                  {t("settings.lightMode")}
                </button>
                <button
                  onClick={handleThemeToggle}
                  style={{
                    flex: 1,
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    border: `2px solid ${isDarkMode ? "transparent" : colors.border}`,
                    background: isDarkMode
                      ? "linear-gradient(135deg, #004085 0%, #0066cc 100%)"
                      : "rgba(0, 0, 0, 0.05)",
                    color: isDarkMode ? "white" : colors.textSecondary,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (isDarkMode) return;
                    e.target.style.background = "rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    if (isDarkMode) return;
                    e.target.style.background = "rgba(0, 0, 0, 0.05)";
                  }}
                >
                  <Moon size={18} />
                  {t("settings.darkMode")}
                </button>
              </div>
            </div>

            {/* Language Settings */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #6c63ff 0%, #00c6fb 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Globe size={18} color="white" />
                </div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: colors.text,
                    margin: 0,
                  }}
                >
                  {t("settings.language")}
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <button
                  onClick={() => handleLanguageChange("es")}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: `2px solid ${
                      i18n.language === "es" ? "transparent" : colors.border
                    }`,
                    background:
                      i18n.language === "es"
                        ? "linear-gradient(135deg, #FF6B6B 0%, #FF8E72 100%)"
                        : "rgba(245, 246, 247, 0.05)",
                    color:
                      i18n.language === "es"
                        ? "white"
                        : colors.textSecondary,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    if (i18n.language === "es") return;
                    e.target.style.background = "rgba(245, 246, 247, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    if (i18n.language === "es") return;
                    e.target.style.background = "rgba(245, 246, 247, 0.05)";
                  }}
                >
                  🇪🇸 {t("settings.spanish")}
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: `2px solid ${
                      i18n.language === "en" ? "transparent" : colors.border
                    }`,
                    background:
                      i18n.language === "en"
                        ? "linear-gradient(135deg, #4DB1FF 0%, #0066cc 100%)"
                        : "rgba(245, 246, 247, 0.05)",
                    color:
                      i18n.language === "en"
                        ? "white"
                        : colors.textSecondary,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    if (i18n.language === "en") return;
                    e.target.style.background = "rgba(245, 246, 247, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    if (i18n.language === "en") return;
                    e.target.style.background = "rgba(245, 246, 247, 0.05)";
                  }}
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

export default SettingsModal;
