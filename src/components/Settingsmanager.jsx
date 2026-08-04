// src/components/SettingsManager.jsx
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
    <div className="sap-settings-wrapper relative inline-flex items-center ml-3 z-[101] max-[799px]:w-full max-[799px]:ml-0">
      {/* TRIGGER */}
      <button
        className="w-[38px] h-[38px] rounded-full border border-transparent 
                   bg-[#f7f7f7] text-[#32363a] cursor-pointer flex items-center 
                   justify-center shrink-0 transition-all duration-200 ease-in-out
                   hover:bg-[#e5f0fa] hover:border-[#0070d2] hover:text-[#0070d2]
                   dark:bg-[#232a32] dark:text-[#f5f6f7] dark:hover:bg-[rgba(77,177,255,0.14)]
                   max-[799px]:w-full max-[799px]:h-auto max-[799px]:min-h-[44px] 
                   max-[799px]:justify-start max-[799px]:gap-3 max-[799px]:px-4 
                   max-[799px]:py-3 max-[799px]:rounded-lg max-[799px]:font-inherit"
        onClick={() => setIsOpen((prev) => !prev)}
        title={t("settings.title")}
        aria-label={t("settings.title")}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={18} /> : <Settings size={18} />}
        <span className="hidden max-[799px]:inline">{t("settings.title")}</span>
      </button>

      {isOpen && (
        <>
          {/* BACKDROP (solo móvil) */}
          <div
            className="fixed inset-0 bg-black/35 backdrop-blur-sm z-[9998] 
                       animate-[fadeIn_0.2s_ease_forwards] min-[800px]:hidden"
            onClick={closeMenu}
            role="presentation"
          />

          {/* ===== DESKTOP: POPOVER ===== */}
          <div
            className="absolute top-[calc(100%+10px)] right-0 w-[280px] 
                       bg-white dark:bg-[#1d232a] rounded-lg 
                       shadow-[0_8px_32px_rgba(0,0,0,0.18)] z-[9999] overflow-hidden
                       animate-[popIn_0.25s_cubic-bezier(0.16,1,0.3,1)_forwards]
                       max-[799px]:hidden
                       before:content-[''] before:absolute before:-top-[6px] 
                       before:right-[13px] before:w-3 before:h-3 before:bg-white 
                       before:dark:bg-[#1d232a] before:rotate-45 before:-z-10
                       before:border-l before:border-t before:border-[#d9d9d9] 
                       before:dark:border-[#3c4854]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sap-popover-title"
          >
            {/* Header */}
            <div className="px-5 py-3.5 border-b border-[#d9d9d9] dark:border-[#3c4854] bg-[#f7f7f7] dark:bg-[#232a32]">
              <h3 id="sap-popover-title" className="text-[0.9375rem] font-semibold text-[#32363a] dark:text-[#f5f6f7] m-0 flex items-center gap-2">
                <Settings size={16} />
                {t("settings.title")}
              </h3>
            </div>

            <div className="py-2">
              {/* TEMA */}
              <button
                className="flex items-center gap-3 px-5 py-2.5 cursor-pointer 
                           transition-all duration-200 ease-in-out border-0 bg-transparent 
                           w-full text-left font-inherit text-sm text-[#32363a] dark:text-[#f5f6f7]
                           hover:bg-[#e5f0fa] dark:hover:bg-[rgba(77,177,255,0.14)]"
                onClick={() => toggleSection("theme")}
                aria-expanded={expandedSection === "theme"}
              >
                <ThemeIcon size={18} className="text-[#6a6d70] dark:text-[#b9c5d1] shrink-0 group-hover:text-[#0070d2]" />
                <span className="flex-1">{t("settings.theme")}</span>
                <ChevronRight
                  size={16}
                  className="text-[#6a6d70] dark:text-[#b9c5d1] opacity-60 transition-transform duration-200"
                  style={{
                    transform:
                      expandedSection === "theme"
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>

              {expandedSection === "theme" && (
                <div className="px-5 pb-3 pl-[3.25rem] flex flex-col gap-1.5 animate-[slideDown_0.2s_ease]">
                  <button
                    className={`flex items-center gap-2 px-3 py-2 rounded border text-[0.8125rem] text-[#32363a] dark:text-[#f5f6f7] transition-all duration-200 ease-in-out font-inherit cursor-pointer
                      ${!isDarkMode 
                        ? "border-[#0070d2] bg-[#e5f0fa] shadow-[inset_0_0_0_1px_#0070d2] font-medium dark:bg-[rgba(77,177,255,0.14)]" 
                        : "border-[#d9d9d9] bg-white dark:bg-[#1d232a] dark:border-[#3c4854] hover:border-[#0070d2] hover:bg-[#e5f0fa] dark:hover:bg-[rgba(77,177,255,0.14)]"
                      }`}
                    onClick={() => isDarkMode && toggleTheme()}
                  >
                    <Sun size={14} />
                    {t("settings.lightMode")}
                  </button>
                  <button
                    className={`flex items-center gap-2 px-3 py-2 rounded border text-[0.8125rem] text-[#32363a] dark:text-[#f5f6f7] transition-all duration-200 ease-in-out font-inherit cursor-pointer
                      ${isDarkMode 
                        ? "border-[#0070d2] bg-[#e5f0fa] shadow-[inset_0_0_0_1px_#0070d2] font-medium dark:bg-[rgba(77,177,255,0.14)]" 
                        : "border-[#d9d9d9] bg-white dark:bg-[#1d232a] dark:border-[#3c4854] hover:border-[#0070d2] hover:bg-[#e5f0fa] dark:hover:bg-[rgba(77,177,255,0.14)]"
                      }`}
                    onClick={() => !isDarkMode && toggleTheme()}
                  >
                    <Moon size={14} />
                    {t("settings.darkMode")}
                  </button>
                </div>
              )}

              <div className="h-px bg-[#d9d9d9] dark:bg-[#3c4854] my-2 mx-5" />

              {/* IDIOMA */}
              <button
                className="flex items-center gap-3 px-5 py-2.5 cursor-pointer 
                           transition-all duration-200 ease-in-out border-0 bg-transparent 
                           w-full text-left font-inherit text-sm text-[#32363a] dark:text-[#f5f6f7]
                           hover:bg-[#e5f0fa] dark:hover:bg-[rgba(77,177,255,0.14)]"
                onClick={() => toggleSection("language")}
                aria-expanded={expandedSection === "language"}
              >
                <Globe size={18} className="text-[#6a6d70] dark:text-[#b9c5d1] shrink-0" />
                <span className="flex-1">{t("settings.language")}</span>
                <ChevronRight
                  size={16}
                  className="text-[#6a6d70] dark:text-[#b9c5d1] opacity-60 transition-transform duration-200"
                  style={{
                    transform:
                      expandedSection === "language"
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>

              {expandedSection === "language" && (
                <div className="px-5 pb-3 pl-[3.25rem] flex flex-col gap-1.5 animate-[slideDown_0.2s_ease]">
                  <button
                    className={`flex items-center gap-2 px-3 py-2 rounded border text-[0.8125rem] text-[#32363a] dark:text-[#f5f6f7] transition-all duration-200 ease-in-out font-inherit cursor-pointer
                      ${currentLanguage === "es" 
                        ? "border-[#0070d2] bg-[#e5f0fa] shadow-[inset_0_0_0_1px_#0070d2] font-medium dark:bg-[rgba(77,177,255,0.14)]" 
                        : "border-[#d9d9d9] bg-white dark:bg-[#1d232a] dark:border-[#3c4854] hover:border-[#0070d2] hover:bg-[#e5f0fa] dark:hover:bg-[rgba(77,177,255,0.14)]"
                      }`}
                    onClick={() => handleLanguageChange("es")}
                  >
                    <span className="text-base">🇪🇸</span>
                    {t("settings.spanish")}
                  </button>
                  <button
                    className={`flex items-center gap-2 px-3 py-2 rounded border text-[0.8125rem] text-[#32363a] dark:text-[#f5f6f7] transition-all duration-200 ease-in-out font-inherit cursor-pointer
                      ${currentLanguage === "en" 
                        ? "border-[#0070d2] bg-[#e5f0fa] shadow-[inset_0_0_0_1px_#0070d2] font-medium dark:bg-[rgba(77,177,255,0.14)]" 
                        : "border-[#d9d9d9] bg-white dark:bg-[#1d232a] dark:border-[#3c4854] hover:border-[#0070d2] hover:bg-[#e5f0fa] dark:hover:bg-[rgba(77,177,255,0.14)]"
                      }`}
                    onClick={() => handleLanguageChange("en")}
                  >
                    <span className="text-base">🇺🇸</span>
                    {t("settings.english")}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ===== MÓVIL: PANEL LATERAL ===== */}
          <div
            className="fixed top-0 right-0 w-full max-w-[380px] h-screen 
                       bg-white dark:bg-[#1d232a] z-[9999] flex flex-col
                       shadow-[-4px_0_24px_rgba(0,0,0,0.15)]
                       animate-[slideInRight_0.3s_cubic-bezier(0.16,1,0.3,1)_forwards]
                       min-[800px]:hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sap-panel-title"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#d9d9d9] dark:border-[#3c4854] bg-[#f7f7f7] dark:bg-[#232a32]">
              <h2 id="sap-panel-title" className="text-lg font-semibold text-[#32363a] dark:text-[#f5f6f7] m-0 flex items-center gap-2">
                <Settings size={18} />
                {t("settings.title")}
              </h2>
              <button
                className="w-9 h-9 rounded-full border-0 bg-transparent text-[#6a6d70] dark:text-[#b9c5d1] cursor-pointer flex items-center justify-center transition-all duration-200 ease-in-out
                           hover:bg-[#e5f0fa] hover:text-[#0070d2] dark:hover:bg-[rgba(77,177,255,0.14)]"
                onClick={closeMenu}
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-5 py-3 border-b border-[#d9d9d9] dark:border-[#3c4854] relative">
              <Search size={16} className="absolute left-8 top-1/2 -translate-y-1/2 text-[#6a6d70] dark:text-[#b9c5d1] pointer-events-none" />
              <input
                type="text"
                className="w-full py-2.5 pr-3.5 pl-9 border border-[#d9d9d9] dark:border-[#3c4854] rounded text-sm font-inherit bg-[#f7f7f7] dark:bg-[#232a32] text-[#32363a] dark:text-[#f5f6f7] box-border
                           focus:outline-none focus:border-[#0070d2] focus:bg-white dark:focus:bg-[#1d232a]"
                placeholder={t("settings.search", "Buscar...")}
              />
            </div>

            <div className="flex-1 overflow-y-auto py-2 scrollbar-thin">
              <button
                className="flex items-center gap-3 px-5 py-3.5 cursor-pointer 
                           transition-all duration-200 ease-in-out border-0 bg-transparent 
                           w-full text-left font-inherit text-[0.9375rem] text-[#32363a] dark:text-[#f5f6f7]
                           hover:bg-[#e5f0fa] dark:hover:bg-[rgba(77,177,255,0.14)]"
                onClick={() => toggleSection("theme")}
                aria-expanded={expandedSection === "theme"}
              >
                <ThemeIcon size={18} className="text-[#6a6d70] dark:text-[#b9c5d1] shrink-0" />
                <span className="flex-1">{t("settings.theme")}</span>
                <ChevronRight
                  size={18}
                  className="text-[#6a6d70] dark:text-[#b9c5d1] transition-transform duration-200"
                  style={{
                    transform:
                      expandedSection === "theme"
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>

              {expandedSection === "theme" && (
                <div className="px-5 pb-3 pl-10 flex flex-col gap-2 animate-[slideDown_0.2s_ease]">
                  <button
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded border text-sm text-[#32363a] dark:text-[#f5f6f7] transition-all duration-200 ease-in-out font-inherit cursor-pointer
                      ${!isDarkMode 
                        ? "border-[#0070d2] bg-[#e5f0fa] shadow-[inset_0_0_0_1px_#0070d2] font-medium dark:bg-[rgba(77,177,255,0.14)]" 
                        : "border-[#d9d9d9] bg-white dark:bg-[#1d232a] dark:border-[#3c4854] hover:border-[#0070d2] hover:bg-[#e5f0fa] dark:hover:bg-[rgba(77,177,255,0.14)]"
                      }`}
                    onClick={() => isDarkMode && toggleTheme()}
                  >
                    <Sun size={14} />
                    {t("settings.lightMode")}
                  </button>
                  <button
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded border text-sm text-[#32363a] dark:text-[#f5f6f7] transition-all duration-200 ease-in-out font-inherit cursor-pointer
                      ${isDarkMode 
                        ? "border-[#0070d2] bg-[#e5f0fa] shadow-[inset_0_0_0_1px_#0070d2] font-medium dark:bg-[rgba(77,177,255,0.14)]" 
                        : "border-[#d9d9d9] bg-white dark:bg-[#1d232a] dark:border-[#3c4854] hover:border-[#0070d2] hover:bg-[#e5f0fa] dark:hover:bg-[rgba(77,177,255,0.14)]"
                      }`}
                    onClick={() => !isDarkMode && toggleTheme()}
                  >
                    <Moon size={14} />
                    {t("settings.darkMode")}
                  </button>
                </div>
              )}

              <div className="h-px bg-[#d9d9d9] dark:bg-[#3c4854] my-2 mx-5" />

              <button
                className="flex items-center gap-3 px-5 py-3.5 cursor-pointer 
                           transition-all duration-200 ease-in-out border-0 bg-transparent 
                           w-full text-left font-inherit text-[0.9375rem] text-[#32363a] dark:text-[#f5f6f7]
                           hover:bg-[#e5f0fa] dark:hover:bg-[rgba(77,177,255,0.14)]"
                onClick={() => toggleSection("language")}
                aria-expanded={expandedSection === "language"}
              >
                <Globe size={18} className="text-[#6a6d70] dark:text-[#b9c5d1] shrink-0" />
                <span className="flex-1">{t("settings.language")}</span>
                <ChevronRight
                  size={18}
                  className="text-[#6a6d70] dark:text-[#b9c5d1] transition-transform duration-200"
                  style={{
                    transform:
                      expandedSection === "language"
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>

              {expandedSection === "language" && (
                <div className="px-5 pb-3 pl-10 flex flex-col gap-2 animate-[slideDown_0.2s_ease]">
                  <button
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded border text-sm text-[#32363a] dark:text-[#f5f6f7] transition-all duration-200 ease-in-out font-inherit cursor-pointer
                      ${currentLanguage === "es" 
                        ? "border-[#0070d2] bg-[#e5f0fa] shadow-[inset_0_0_0_1px_#0070d2] font-medium dark:bg-[rgba(77,177,255,0.14)]" 
                        : "border-[#d9d9d9] bg-white dark:bg-[#1d232a] dark:border-[#3c4854] hover:border-[#0070d2] hover:bg-[#e5f0fa] dark:hover:bg-[rgba(77,177,255,0.14)]"
                      }`}
                    onClick={() => handleLanguageChange("es")}
                  >
                    <span className="text-base">🇪🇸</span>
                    {t("settings.spanish")}
                  </button>
                  <button
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded border text-sm text-[#32363a] dark:text-[#f5f6f7] transition-all duration-200 ease-in-out font-inherit cursor-pointer
                      ${currentLanguage === "en" 
                        ? "border-[#0070d2] bg-[#e5f0fa] shadow-[inset_0_0_0_1px_#0070d2] font-medium dark:bg-[rgba(77,177,255,0.14)]" 
                        : "border-[#d9d9d9] bg-white dark:bg-[#1d232a] dark:border-[#3c4854] hover:border-[#0070d2] hover:bg-[#e5f0fa] dark:hover:bg-[rgba(77,177,255,0.14)]"
                      }`}
                    onClick={() => handleLanguageChange("en")}
                  >
                    <span className="text-base">🇺🇸</span>
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