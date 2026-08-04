import React, { useState } from "react";
import {
  IconButton,
  Stack,
  Tooltip,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FaGithub, FaLinkedin, FaFilePdf, FaEllipsisV } from "react-icons/fa";
import { useDarkMode } from "../components/Settingsmanager";

const SocialButtonsNav = () => {
  const theme = useTheme();
  // Breakpoints ajustados: Desktop más restrictivo para evitar overflow
  const isDesktop = useMediaQuery("(min-width: 1024px)"); // Antes: 1200px
  const isTablet = useMediaQuery("(min-width: 800px) and (max-width: 1023px)"); // Tablet: 800-1023px
  const isMobile = useMediaQuery("(max-width: 799px)");
  const { isDarkMode } = useDarkMode();

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/iwinser117",
      color: "#333333",
      colorLight: "#F5F6F7",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/iwinser-aljadys-sanchez-0a62a0234/?originalSubdomain=co",
      color: "#0077B5",
      colorLight: "#4DB1FF",
    },
    {
      name: "Currículum",
      icon: FaFilePdf,
      url: "../assets/IwinserSanchez.pdf",
      download: true,
      color: "#D32F2F",
      colorLight: "#FF6B6B",
    },
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // DESKTOP (>= 1024px): Mostrar botones directamente
  if (isDesktop) {
    return (
      <Stack
        direction="row"
        spacing={0.5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {socialLinks.map((social) => {
          const Icon = social.icon;
          const iconColor = isDarkMode ? social.colorLight : social.color;

          return (
            <Tooltip
              key={social.name}
              title={social.name}
              arrow
              placement="bottom"
            >
              {social.download ? (
                <IconButton
                  component="a"
                  href={social.url}
                  download="CurriculumDeveloperIwinserSanchez"
                  rel="noopener noreferrer"
                  sx={{
                    color: iconColor,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.15)",
                      opacity: 0.8,
                    },
                    padding: "5px",
                    minWidth: "auto",
                  }}
                >
                  <Icon size={22} />
                </IconButton>
              ) : (
                <IconButton
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: iconColor,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.15)",
                      opacity: 0.8,
                    },
                    padding: "5px",
                    minWidth: "auto",
                  }}
                >
                  <Icon size={22} />
                </IconButton>
              )}
            </Tooltip>
          );
        })}
      </Stack>
    );
  }

  // TABLET (800-1023px): Menú desplegable
  if (isTablet) {
    const menuColor = isDarkMode ? "#F5F6F7" : "#354A5F";

    return (
      <>
        <Tooltip title="Redes sociales" arrow placement="bottom">
          <IconButton
            onClick={handleMenuClick}
            sx={{
              color: menuColor,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.15)",
                opacity: 0.8,
              },
              padding: "5px",
              minWidth: "auto",
            }}
          >
            <FaEllipsisV size={16} />
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: isDarkMode ? "#1D232A" : "#F5F6F7",
              color: isDarkMode ? "#F5F6F7" : "#354A5F",
              minWidth: "160px",
            },
            "& .MuiMenuItem-root": {
              transition: "all 0.3s ease",
              fontSize: "14px",
              "&:hover": {
                backgroundColor: isDarkMode ? "#2a3138" : "#e8eaed",
              },
            },
          }}
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            const iconColor = isDarkMode ? social.colorLight : social.color;

            return (
              <MenuItem
                key={social.name}
                component="a"
                href={social.url}
                target={social.download ? undefined : "_blank"}
                download={social.download ? "CurriculumDeveloperIwinserSanchez" : undefined}
                rel="noopener noreferrer"
                onClick={handleMenuClose}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Icon size={16} style={{ color: iconColor, flexShrink: 0 }} />
                <span>{social.name}</span>
              </MenuItem>
            );
          })}
        </Menu>
      </>
    );
  }

  // MOBILE (< 800px): Botones grandes directos
  return (
    <Stack
      direction="row"
      spacing={0.8}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {socialLinks.map((social) => {
        const Icon = social.icon;
        const iconColor = isDarkMode ? social.colorLight : social.color;

        return (
          <Tooltip
            key={social.name}
            title={social.name}
            arrow
            placement="top"
          >
            {social.download ? (
              <IconButton
                component="a"
                href={social.url}
                download="CurriculumDeveloperIwinserSanchez"
                rel="noopener noreferrer"
                sx={{
                  color: iconColor,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.15)",
                    opacity: 0.8,
                  },
                  padding: "8px",
                  minWidth: "auto",
                }}
              >
                <Icon size={26} />
              </IconButton>
            ) : (
              <IconButton
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: iconColor,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.15)",
                    opacity: 0.8,
                  },
                  padding: "8px",
                  minWidth: "auto",
                }}
              >
                <Icon size={26} />
              </IconButton>
            )}
          </Tooltip>
        );
      })}
    </Stack>
  );
};

export default SocialButtonsNav;