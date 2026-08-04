// src/components/Nav.jsx - VERSIÓN CORREGIDA PARA MÓVIL
import React, { useState, useEffect } from "react";
import logowhite from "@assets/ok.svg";
import logoblack from "@assets/ok_white_bgsvg.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../components/Settingsmanager";
import SettingsManager from "../components/Settingsmanager";
import SocialButtonsNav from "../buttons/SocialButtonsNav";
import {
  FaHome,
  FaBrain,
  FaLaptopCode,
  FaEnvelope,
  FaBlog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Nav = () => {
  const location = useLocation();
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll hide/show
  useEffect(() => {
    window.scrollTo(0, 0);

    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");
      const n2 = document.getElementById("n2");

      if (navbar && n2) {
        if (prevScrollpos > currentScrollPos) {
          navbar.style.top = "0";
          n2.style.top = "0";
        } else {
          navbar.style.top = "-50px";
          n2.style.top = "-50px";
        }
      }
      prevScrollpos = currentScrollPos;
      setLastScrollY(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  const navLinks = [
    ...(location.pathname !== "/"
      ? [
          {
            to: "/",
            label: t("nav.home"),
            icon: <FaHome size={16} />,
            isNavLink: true,
          },
        ]
      : []),
    ...(location.pathname !== "/aplicaciones" && location.pathname !== "/blog"
      ? [
          {
            href: "#habilidades",
            label: t("nav.skills"),
            icon: <FaBrain size={16} />,
          },
        ]
      : []),
    ...(location.pathname !== "/aplicaciones"
      ? [
          {
            to: "/aplicaciones",
            label: t("nav.applications"),
            icon: <FaLaptopCode size={16} />,
            isNavLink: true,
          },
        ]
      : []),
    {
      href: "#contactame",
      label: t("nav.contact"),
      icon: <FaEnvelope size={16} />,
    },
    ...(location.pathname !== "/blog"
      ? [
          {
            href: "/blog",
            label: t("nav.blog"),
            icon: <FaBlog size={16} />,
          },
        ]
      : []),
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`
          fixed top-0 left-1/2 -translate-x-1/2 w-full h-[50px] z-[100]
          bg-[#F5F6F7] dark:bg-[#1D232A]
          transition-[top] duration-200 ease-in-out
        `}
      >
        <div
          id="n2"
          className={`
            w-[90%] max-w-[1200px] mx-auto h-full flex items-center justify-between
            transition-[top] duration-200 ease-in-out
            min-[800px]:flex-nowrap
          `}
        >
          {/* LOGO */}
          <NavLink to="/" className="shrink-0">
            <img
              className="block"
              src={isDarkMode ? logoblack : logowhite}
              width="60px"
              alt="logoIS"
            />
          </NavLink>

          {/* DESKTOP: Links + Social + Settings */}
          <div className="hidden min-[800px]:flex items-center justify-end flex-1">
            <ul className="flex items-center list-none m-0 p-0 bg-[#F5F6F7] dark:bg-[#1D232A] h-[40px] w-[90%] relative">
              {navLinks.map((link) => (
                <li
                  key={link.to || link.href}
                  className="mr-[10px] static w-auto text-center"
                >
                  {link.isNavLink ? (
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => `
                        relative flex items-center justify-center px-[15px] py-[5px]
                        text-[#354A5F] dark:text-[#F5F6F7]
                        hover:text-[#0040B0] dark:hover:text-[#4DB1FF]
                        transition-colors duration-150 ease-in-out
                        text-sm font-medium
                        ${isActive ? "text-[#0040B0] dark:text-[#4DB1FF] font-semibold" : ""}
                      `}
                    >
                      <span className="mr-[5px]">{link.icon}</span>
                      <span>{link.label}</span>
                    </NavLink>
                  ) : (
                    <a
                      href={link.href}
                      className="
                        relative flex items-center justify-center px-[15px] py-[5px]
                        text-[#354A5F] dark:text-[#F5F6F7]
                        hover:text-[#0040B0] dark:hover:text-[#4DB1FF]
                        transition-colors duration-150 ease-in-out
                        text-sm font-medium
                      "
                    >
                      <span className="mr-[5px]">{link.icon}</span>
                      <span>{link.label}</span>
                    </a>
                  )}
                </li>
              ))}

              {/* BOTONES SOCIALES */}
              <li className="nav-social-buttons">
                <SocialButtonsNav />
              </li>

              {/* SETTINGS - empujado a la derecha */}
              <li className="ml-auto mr-0">
                <SettingsManager />
              </li>
            </ul>
          </div>

          {/* MÓVIL: Botón hamburguesa */}
          <button
            className="
              min-[800px]:hidden w-10 h-10 flex items-center justify-center
              bg-white dark:bg-[#2a323c] text-[#354A5F] dark:text-[#F5F6F7]
              border border-[#d9d9d9] dark:border-[#3c4854] rounded
            "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* MÓVIL: Menú desplegable */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/35 backdrop-blur-sm z-[99] min-[800px]:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div
            className="
              fixed top-[50px] left-0 right-0 w-full z-[100] min-[800px]:hidden
              bg-[#F5F6F7] dark:bg-[#1D232A]
              border-t border-[#747577] dark:border-[#a4a5a8]
              shadow-lg
              max-h-[calc(100vh-50px)] overflow-y-auto
            "
          >
            <ul className="list-none m-0 p-2 bg-[#F5F6F7] dark:bg-[#1D232A] text-[#354A5F] dark:text-white">
              {navLinks.map((link) => (
                <li
                  key={link.to || link.href}
                  className="w-full border-b border-[#747577] dark:border-[#a4a5a8] last:border-b-0"
                >
                  {link.isNavLink ? (
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => `
                        flex items-center gap-3 w-full px-4 py-3
                        text-[#354A5F] dark:text-white
                        hover:text-[#0040B0] dark:hover:text-[#4DB1FF]
                        hover:bg-[#e8edf2] dark:hover:bg-[#2a323c]
                        transition-all duration-150
                        text-base font-medium
                        ${isActive ? 'text-[#0040B0] dark:text-[#4DB1FF] bg-[#e8edf2] dark:bg-[#2a323c]' : ''}
                      `}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-[18px] w-6 flex-shrink-0 text-center">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                    </NavLink>
                  ) : (
                    <a
                      href={link.href}
                      className="
                        flex items-center gap-3 w-full px-4 py-3
                        text-[#354A5F] dark:text-white
                        hover:text-[#0040B0] dark:hover:text-[#4DB1FF]
                        hover:bg-[#e8edf2] dark:hover:bg-[#2a323c]
                        transition-all duration-150
                        text-base font-medium
                      "
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-[18px] w-6 flex-shrink-0 text-center">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                    </a>
                  )}
                </li>
              ))}

              {/* Social en móvil */}
              <li className="w-full border-b border-[#747577] dark:border-[#a4a5a8] py-3 flex justify-center">
                <SocialButtonsNav />
              </li>

              {/* Settings en móvil */}
              <li className="flex w-full py-3 justify-center">
                <SettingsManager />
              </li>
            </ul>
          </div>
        </>
      )}

      {/* Spacer para que el contenido no quede detrás del nav */}
      <div className="h-[50px]" />
    </>
  );
};

export default Nav;