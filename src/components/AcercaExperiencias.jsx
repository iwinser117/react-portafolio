import React from "react";
import { secondImages } from "../utils/galerimages.js";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import { Grid, Box, Link } from "@mui/material";

export default function TitlebarImageList() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCols = () => {
    if (width <= 600) {
      return 2;
    }
    return Math.min(Math.floor(width / 300), 3);
  };

  return (
    <Grid
      container
      spacing={12}
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
        key={1}
        gap={12}
        sx={{
          width: "100%",
          overflow: "hidden",
          "& .MuiImageListItem-root": {
            height: "100%",
          },
        }}
      >
        {/* <ImageListItem key="Subheader" cols={3}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem> */}
        {secondImages.map((item, index) => (
          <ImageListItem
            key={index}
            sx={{
              width: "100%",
              height: "100%",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                opacity: 0.8,
              },
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.opacity = 0.8;
              event.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.opacity = 1;
              event.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
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
                  top: "50%",
                  left: "50%",
                  width:'100%',
                  textAlign: "center",
                  
                  height:'100%',
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  opacity: 0,
                  cursor: "pointer",
                  transition: "opacity 0.3s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                Ir a proyectos
              </Link>
              <img
                style={{ width: "auto", height: "auto", maxHeight: "100%" }}
                srcSet={`${item.src} 2x`}
                src={`${item.src}2x`}
                alt={item.alt}
                loading="lazy"
              />
            </Box>

            <ImageListItemBar title={item.alt} subtitle={item.alt} />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}
