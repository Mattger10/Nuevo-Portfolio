import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import theme from "./muiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import github from "../assets/imagenes/github.png";
import linkedin from "../assets/imagenes/linkedin.png";
import cv from "../assets/imagenes/cv.png";

interface ResponsiveAppBarProps {
  scrollToSection: (sectionId: string) => void;
}

const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({
  scrollToSection,
}) => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setSelectedSection(sectionId);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        elevation={0}
        sx={{
          flexDirection: "column",
          alignItems: "flex-end",
          backgroundColor: "transparent",
          width: "10vh",
          height: "100%",
          marginRight: 5,
          cursor: "pointer",
          "@media (max-width: 560px)": {
            border: "2px solid red",
            marginRight: 50,
          },
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 15 }}>
          <Toolbar
            disableGutters
            sx={{ flexDirection: "column", alignItems: "flex-end", mt: 20 }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => {
                scrollToSection("aboutme");
                handleSectionClick("aboutme");
              }}
              sx={{
                mr: 2,
                mt: -8,
                display: { xs: "none", md: "flex" },
                fontFamily: "Font3",
                fontSize: "18px",
                letterSpacing: ".1rem",
                writingMode: "vertical-lr",
                cursor: "pointer",
                color: "white",
                textDecoration:
                  selectedSection === "aboutme" ? "line-through" : "none",
                textDecorationColor:
                  selectedSection === "aboutme" ? "#a37b39" : "transparent",
                textDecorationThickness:
                  selectedSection === "aboutme" ? "3px" : "initial",
                "&:hover": {
                  color: "#a37b39",
                },
              }}
            >
              ABOUT ME
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => {
                scrollToSection("skills");
                handleSectionClick("skills");
              }}
              sx={{
                mr: 2,
                mt: 4,
                display: { xs: "none", md: "flex" },
                fontFamily: "Font3",
                fontSize: "18px",
                letterSpacing: ".1rem",
                writingMode: "vertical-lr",
                cursor: "pointer",
                color: "white",
                textDecoration:
                  selectedSection === "skills" ? "line-through" : "none",
                textDecorationColor:
                  selectedSection === "skills" ? "#a37b39" : "transparent",
                textDecorationThickness:
                  selectedSection === "skills" ? "3px" : "initial",
                "&:hover": {
                  color: "#a37b39",
                },
              }}
            >
              SKILLS
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => {
                scrollToSection("proyects");
                handleSectionClick("proyects");
              }}
              sx={{
                mr: 2,
                mt: 4,
                display: { xs: "none", md: "flex" },
                fontFamily: "Font3",
                fontSize: "18px",
                letterSpacing: ".1rem",
                writingMode: "vertical-lr",
                cursor: "pointer",
                color: "white",
                textDecoration:
                  selectedSection === "proyects" ? "line-through" : "none",
                textDecorationColor:
                  selectedSection === "proyects" ? "#a37b39" : "transparent",
                textDecorationThickness:
                  selectedSection === "proyects" ? "3px" : "initial",
                "&:hover": {
                  color: "#a37b39",
                },
              }}
            >
              PROYECTS
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => {
                scrollToSection("contact");
                handleSectionClick("contact");
              }}
              sx={{
                mr: 2,
                mt: 4,
                display: { xs: "none", md: "flex" },
                fontFamily: "Font3",
                fontSize: "18px",
                letterSpacing: ".1rem",
                writingMode: "vertical-lr",
                cursor: "pointer",
                color: "white",
                textDecoration:
                  selectedSection === "contact" ? "line-through" : "none",
                textDecorationColor:
                  selectedSection === "contact" ? "#a37b39" : "transparent",
                textDecorationThickness:
                  selectedSection === "contact" ? "3px" : "initial",
                "&:hover": {
                  color: "#a37b39",
                },
              }}
            >
              CONTACT
            </Typography>
          </Toolbar>
        </Container>
        <Social>
          <a
            href="https://github.com/Mattger10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/matias-zacariaz-016390185/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin src={linkedin} alt="" />
          </a>
          <a
            href="https://matiaszacariazportfolio.netlify.app/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >

          <Cv src={cv} alt="" />
          </a>
        </Social>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;

const Social = styled("div")(() => ({
  position: "absolute",
  marginRight: "106rem",
  marginTop: "15rem",
}));

const GitHub = styled("img")(() => ({
  position: "absolute",
  width: "30px",
  height: "30px",
  marginTop: "35.5rem",
  opacity: 0.5,
  "&:hover": {
    opacity: 0.9,
  },
}));

const Linkedin = styled("img")(() => ({
  position: "absolute",
  width: "40px",
  height: "40px",
  marginTop: "35.2rem",
  marginLeft: "2rem",
  opacity: 0.5,
  "&:hover": {
    opacity: 0.9,
  },
}));

const Cv = styled("img")(() => ({
  position: "absolute",
  width: "29px",
  height: "29px",
  marginTop: "35.5rem",
  marginLeft: "4.5rem",
  opacity: 0.5,
  "&:hover": {
    opacity: 0.9,
  },
}));