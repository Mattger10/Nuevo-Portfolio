import { FunctionComponent, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Theme from "./muiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import aboutMeData from "./en.json";
import aboutMeData2 from "./es.json";

interface SkillsProps {
  id: string;
  textChanged: boolean; 
}

const Skills: FunctionComponent<SkillsProps> = ({ id, textChanged }) => {
  const imagePaths = [
    "/javascript.svg",
    "/CSS3.svg",
    "/nodejs.svg",
    "/react.svg",
    "/typescript.svg",
    "/redux.svg",
    "/express.png",
    "/postgresql.svg",
    "/postman.svg",
    "/git.svg",
    "/sequelize.svg",
    "/HTML5.svg",
    "/tailwindcss.svg",
    "/firebase.svg",
    "/vercel.svg",
    "/github1.png",
    "/sass.svg",
    "/npm.svg",
    "/materialui.svg",
  ];

  const [currentData, setCurrentData] = useState(aboutMeData);

  useEffect(() => {
    if (textChanged) {
      // Cambiar el texto si textChanged es true
      setCurrentData(aboutMeData2);
    } else {
      // Revertir al texto original si textChanged es false
      setCurrentData(aboutMeData);
    }
  }, [textChanged]);


  return (
    <ThemeProvider theme={Theme}>
      <Box id={id} sx={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         height: "100%",
         width: "100%",  
         paddingTop: "20px"
      }}>
          <Box
          sx={{
            width: "80%",
            textAlign: "justify",
            color: "white",
            marginTop: "0rem",
            "@media screen and (max-width: 768px)": {
              width: "80rem",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 500,
              fontFamily: "Font",
              paddingTop: "50px",
              "@media screen and (max-width: 768px)": {
                fontSize: "25px",
                marginLeft: "2.5rem",
              },
            }}
          >
            {currentData.my} <span style={{ color: "#a37b39", fontWeight: 600 }}>{currentData.skills}</span>
          </Typography>
          <ContainerImages>
            {imagePaths.map((path, index) => (
              <Img
                key={index}
                src={path}
                alt={`Skill ${index + 1}`}
                style={{ borderRadius: "8px", marginBottom: "50px" }}
              />
            ))}
          </ContainerImages>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Skills;

const Img = styled("img")(() => ({
  filter: "grayscale(50%)", // Convertir la imagen a blanco y negro
  transition: "filter 0.5s ease", // Agregar transición para un efecto suave
  cursor: "pointer",
  width: "30%",
  paddingBottom: "50px",
  "&:hover": {
    filter: "grayscale(0%)", // Al hacer hover, mostrar en color
    width: "32%",
  },
}));

const Contenedor = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  marginBottom: "0rem",
  width: "auto",  
  // border: "2px solid red",
  "@media screen and (max-width: 768px)": {},
}));

const ContainerImages = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "16px", 
  marginTop: "50px", 
  marginLeft: "10rem",
  "@media screen and (max-width: 768px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
    marginLeft: "3rem",
  },
}));


