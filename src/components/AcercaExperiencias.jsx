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
      }}
    >
      <ImageList
        cols={getCols()}
        rowHeight={230 * (width / 1200)}
        gap={12}
        sx={{
          width: "100%",
          overflow: "hidden",
          "& .MuiImageListItem-root": {
            height: "100%",
            position: "relative",
            transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              opacity: 0.9,
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
                href={"/proyectos"}
                underline="none"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.3)", 
                  color: "white",
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  zIndex: 2, // Asegura que esté por encima de otros elementos
                  cursor: "pointer",
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                Ir a proyectos
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
                background: "rgba(0, 0, 0, 0.7)",
                borderRadius: "0 0 5px 5px",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}
