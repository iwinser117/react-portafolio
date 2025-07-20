import React, { useState, useEffect } from "react";
import { secondImages } from "../utils/galerimages.js";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Grid, Box, Link } from "@mui/material";

export default function TitlebarImageList() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCols = () => {
    if (width <= 600) return 2;
    return Math.min(Math.floor(width / 300), 3);
  };

  return (
    <Grid
      container
      spacing={4}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100%",
        margin: "0 auto",
        py: 4,
        "@keyframes subtlePulse": {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.01)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "& .MuiImageListItem-root": {
          "@media (max-width: 600px)": {
            animation: "subtlePulse 3s infinite",
            "&:active": {
              animation: "none",
              transform: "scale(0.99)",
            }
          }
        }
      }}
    >
      <ImageList
        cols={getCols()}
        rowHeight={230 * (width / 1200)}
        gap={16}
        sx={{
          width: "100%",
          overflow: "hidden",
          "& .MuiImageListItem-root": {
            height: "100%",
            position: "relative",
            borderRadius: 2,
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
            },
          },
        }}
      >
        {secondImages.map((item, index) => (
          <ImageListItem key={index}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                href={"/aplicaciones"}
                underline="none"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
                  color: "white",
                  fontSize: { xs: "1.1rem", sm: "1.3rem" },
                  fontWeight: "bold",
                  letterSpacing: "0.5px",
                  zIndex: 2,
                  cursor: "pointer",
                  opacity: { xs: 1, sm: 0 }, // Visible en móviles, oculto en desktop
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: {
                    xs: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
                    sm: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))"
                  },
                  "&:hover": {
                    opacity: 1,
                    "& .arrow-icon": {
                      transform: "translateX(8px)",
                    }
                  },
                }}
              >
                {/* Ícono sutil para móviles */}
                <Box
                  sx={{
                    display: { xs: 'flex', sm: 'none' },
                    alignItems: 'center',
                    mb: 0.5,
                    opacity: 0.8,
                  }}
                >
                  {/* <span style={{ fontSize: '1.2rem' }}>⟶</span> */}
                </Box>
                Ver todos los proyectos
                <Box
                  className="arrow-icon"
                  sx={{
                    mt: 1,
                    fontSize: "2rem",
                    transition: "transform 0.3s ease",
                    display: { xs: 'none', sm: 'block' } // Ocultar flecha en móviles
                  }}
                >
                  →
                </Box>
              </Link>
              <img
                style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "5px" }}
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
            </Box>
            <ImageListItemBar
              title={item.alt}
              subtitle={item.subtitle}
              sx={{
                background: "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.2))",
                borderRadius: "0 0 8px 8px",
                transition: "opacity 0.3s ease",
                "& .MuiImageListItemBar-title": {
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  fontWeight: "500",
                  letterSpacing: "0.3px",
                  color: "rgba(255, 255, 255, 0.95)",
                },
                "& .MuiImageListItemBar-subtitle": {
                  fontSize: { xs: "0.8rem", sm: "0.85rem" },
                  opacity: 0.85,
                  color: "rgba(255, 255, 255, 0.8)",
                },
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}
