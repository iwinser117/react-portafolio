import React from "react";
import {
  Box,
  Typography,
  Chip,
  Stack,
  Paper,
  Grid,
} from "@mui/material";
import { Container } from "react-bootstrap";
import { useDarkMode } from "./Settingsmanager";


const technologies = [
  {
    title: "SAP Ecosystem",
    description:
      "Desarrollo e integración de soluciones empresariales sobre SAP.",
    items: [
      "SAP BTP",
      "SAP UI5",
      "SAP CPI",
      "SAP Build Process Automation",
      "Cloud Foundry",
      "Neo",
      "XSJS",
      "CDS",
    ],
  },
  {
    title: "Frontend",
    description:
      "Desarrollo de interfaces web modernas y responsivas.",
    items: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    description:
      "Desarrollo de APIs, lógica de negocio y servicios.",
    items: [
      "Node.js",
      "Python",
      "Express",
      "SAP CAP",
      "SAP HANA",
    ],
  },
  {
    title: "Integración",
    description:
      "Comunicación entre sistemas y servicios empresariales.",
    items: [
      "REST",
      "SOAP",
      "OData",
      "XML",
      "JSON",
      "Cloud Integration Platform",
    ],
  },
];

const TechnologiesSection = () => {
  const isDarkMode = useDarkMode();
  return (
    <Container className="py-5">
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" } }}
        >
          Tecnologías
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" } }}
        >
          Conjunto de tecnologías utilizadas en el desarrollo de aplicaciones,
          integraciones y soluciones empresariales.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {technologies.map((category) => (
          <Grid item xs={12} md={6} key={category.title}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                p: 3,
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                transition: "0.25s",

                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "primary.main",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                {category.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{ mb: 3, color: isDarkMode.isDarkMode ? "black !important" : "text.secondary !important"}}
              >
                {category.description}
              </Typography>

              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
              >
                {category.items.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="outlined"
                    sx={{
                      borderRadius: "8px",
                      fontWeight: 500,
                      transition: ".2s",

                      "&:hover": {
                        backgroundColor: "action.hover",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TechnologiesSection;