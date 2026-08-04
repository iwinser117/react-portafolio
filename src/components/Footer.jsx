import React from "react";
import logowhite from "@assets/ok.svg";
import logoblack from "@assets/ok_white_bgsvg.svg";
import { useDarkMode } from "./Settingsmanager";

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-16 py-6  backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-[#354A5F] dark:text-[#E0E0E0]">
        {/* Logo con transición suave */}
        <img
          src={isDarkMode ? logoblack : logowhite}
          alt="Logo"
          className="w-10 h-auto object-contain transition-opacity duration-300 hover:scale-105"
        />

        {/* Texto informativo */}
        <div className="flex items-center gap-2 font-medium">
          <span>© 2023 - {currentYear}</span>
          <span className="text-gray-400 dark:text-gray-600">•</span>
          <span>Alojado en Netlify</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;