// src/components/LocationNotification.jsx
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { COUNTRY_LANGUAGE_MAP } from "../config/countryLanguageMap";

export const LocationNotification = () => {
  const { i18n, t } = useTranslation();
  const { country, countryCode, loading } = useGeoLocation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (!loading && country && !hasShown) {
      // Verificar si el idioma actual coincide con el país
      const savedLanguage = localStorage.getItem("language");
      const detectedLanguage = COUNTRY_LANGUAGE_MAP[countryCode] || "es";

      // Solo mostrar si no coincide
      if (savedLanguage !== detectedLanguage) {
        setIsVisible(true);
        setHasShown(true);
      }
    }
  }, [loading, country, countryCode, hasShown]);

  useEffect(() => {
    if (!isVisible) return undefined;

    const timeoutId = window.setTimeout(() => setIsVisible(false), 8000);
    return () => window.clearTimeout(timeoutId);
  }, [isVisible]);

  const handleUpdateLocation = () => {
    const detectedLanguage = COUNTRY_LANGUAGE_MAP[countryCode] || "es";
    i18n.changeLanguage(detectedLanguage);
    localStorage.setItem("language", detectedLanguage);

    const pathWithoutLanguage = location.pathname.replace(
      /^\/(?:es|en|fr|de)(?=\/|$)/,
      "",
    );
    const localizedPath = pathWithoutLanguage || "/";
    const nextPath = `/${detectedLanguage}${
      localizedPath === "/" ? "" : localizedPath
    }${location.search}${location.hash}`;

    navigate(nextPath);
    setIsVisible(false);
  };

  if (!isVisible || loading) return null;

  return (
    <div
      className="fixed right-4 bottom-4 z-[200] flex w-[calc(100%-2rem)] max-w-md items-start gap-3 rounded-lg border border-[#d9d9d9] bg-[#f5f5f5] p-4 shadow-xl dark:border-[#3c4854] dark:bg-[#232a32]"
      role="alert"
    >
      <div className="min-w-0 flex-1">
        <p className="text-sm text-[#32363a] dark:text-[#f5f6f7]">
          {t(
            "location.message",
            `Tu ubicación debería ser ${country}. Actualiza tu ubicación`,
          )}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <button
          onClick={handleUpdateLocation}
          className="rounded border border-[#0070d2] bg-[#0070d2] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#005ca8]"
        >
          {country}
        </button>
        <button
          onClick={() => setIsVisible(false)}
          className="text-[#6a6d70] dark:text-[#b9c5d1] hover:text-[#0070d2] transition-all"
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};
