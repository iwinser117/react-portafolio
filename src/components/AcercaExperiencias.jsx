import React, { useState, useEffect } from "react";
import { secondImages } from "../utils/galerimages.js";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Grid, Box, Link } from "@mui/material";

export default function TitlebarImageList() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 600;

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
      spacing={isMobile ? 2 : 4}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100%",
        margin: "0 auto",
        py: isMobile ? 2 : 4,
        px: isMobile ? 1 : 0,
      }}
    >
      <ImageList
        cols={getCols()}
        rowHeight={isMobile ? 180 : 230 * (width / 1200)}
        gap={isMobile ? 8 : 16}
        sx={{
          width: "100%",
          overflow: "hidden",
          "& .MuiImageListItem-root": {
            height: "100%",
            position: "relative",
            borderRadius: isMobile ? 1.5 : 2,
            boxShadow: isMobile
              ? "0 2px 4px rgba(0,0,0,0.15)"
              : "0 4px 8px rgba(0,0,0,0.1)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            overflow: "hidden",
            "&:active": {
              transform: isMobile ? "scale(0.97)" : "none",
            },
            "&:hover": {
              transform: isMobile ? "none" : "translateY(-8px)",
              boxShadow: isMobile
                ? "0 4px 8px rgba(0,0,0,0.2)"
                : "0 12px 24px rgba(0,0,0,0.2)",
            },
          },
        }}
      >
        {secondImages
          .filter(
            (item) =>
              item.subtitle.includes("Node") || item.subtitle.includes("React"),
          )
          .map((item, index) => (
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
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: "5px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />
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
                    justifyContent: isMobile ? "flex-end" : "center",
                    textAlign: "center",
                    padding: isMobile ? 1.5 : 2,
                    color: "white",
                    fontSize: isMobile ? "0.9rem" : "1.3rem",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                    zIndex: 2,
                    cursor: "pointer",
                    opacity: isMobile ? 1 : 0,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    background: isMobile
                      ? "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3))"
                      : "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))",
                    backdropFilter: isMobile ? "blur(2px)" : "none",
                    "&:hover": {
                      opacity: 1,
                      "& .arrow-icon": {
                        transform: "translateX(8px)",
                      },
                    },
                    "@media (max-width: 600px)": {
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4))",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: isMobile ? 0.5 : 1,
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: isMobile ? "1.3rem" : "2rem",
                        opacity: 0.9,
                      }}
                    >
                      🚀
                    </Box>
                    <span
                      style={{ fontSize: isMobile ? "0.85rem" : "inherit" }}
                    >
                      {isMobile ? item.alt : "Ver todos los proyectos"}
                    </span>
                    <Box
                      className="arrow-icon"
                      sx={{
                        fontSize: isMobile ? "1.2rem" : "2rem",
                        transition: "transform 0.3s ease",
                        display: { xs: "block", sm: "block" },
                      }}
                    >
                      →
                    </Box>
                  </Box>
                </Link>
              </Box>
              {!isMobile && (
                <ImageListItemBar
                  title={item.alt}
                  subtitle={item.subtitle}
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.2))",
                    borderRadius: "0 0 8px 8px",
                    transition: "opacity 0.3s ease",
                    "& .MuiImageListItemBar-title": {
                      fontSize: "1rem",
                      fontWeight: "500",
                      letterSpacing: "0.3px",
                      color: "rgba(255, 255, 255, 0.95)",
                    },
                    "& .MuiImageListItemBar-subtitle": {
                      fontSize: "0.85rem",
                      opacity: 0.85,
                      color: "rgba(255, 255, 255, 0.8)",
                    },
                  }}
                />
              )}
            </ImageListItem>
          ))}
      </ImageList>
    </Grid>
  );
}
