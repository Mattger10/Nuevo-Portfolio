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

interface Skill {
  name: string;
  imagePath: string;
}

const Skills: FunctionComponent<SkillsProps> = ({ id, textChanged }) => {


  const skillsData: Skill[] = [
    { name: "HTML5", imagePath: "/HTML5.svg"},
    { name: "CSS3", imagePath: "/CSS3.svg" },
    { name: "JavaScript", imagePath: "/javascript.svg" },
    { name: "TypeScript", imagePath: "/typescript.svg"},
    { name: "Sass", imagePath: "/sass.svg"},
    { name: "React", imagePath: "/react.svg"},
    { name: "Redux", imagePath: "/redux.svg"},
    { name: "Node JS", imagePath: "/nodejs.svg"},
    { name: "Express", imagePath: "/express.png"},
    { name: "PostgreSQL", imagePath: "/postgresql.svg"},
    { name: "Firebase", imagePath: "/firebase.svg"},
    { name: "Git", imagePath: "/git.svg"},
    { name: "Npm", imagePath: "/npm.svg"},
    { name: "Postman", imagePath: "/postman.svg"},
    { name: "Material UI", imagePath: "/materialui.svg"},
    { name: "Tailwind CSS", imagePath: "/tailwindcss.svg"},
    { name: "Vercel", imagePath: "/vercel.svg"},
    { name: "GitHub", imagePath: "/github1.png"},
    { name: "Sequelize", imagePath: "/sequelize.svg"},

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
            {skillsData.map((skill, index) => (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Img
                  src={skill.imagePath}
                  alt={`Skill ${index + 1}`}
                  style={{ borderRadius: "8px", marginBottom: "10px" }}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "white",
                    textAlign: "center",
                    fontFamily: "Font3",
                  }}
                >
                  {skill.name}
                </Typography>
              </div>
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
 height: "100%",
 paddingBottom: "10px",
  "&:hover": {
    filter: "grayscale(0%)", // Al hacer hover, mostrar en color
    
  },
  "@media screen and (max-width: 768px)": {
    width: "35%",
  },
}));



const ContainerImages = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "16px", 
  marginTop: "50px", 
  marginLeft: "0rem",
  "@media screen and (max-width: 768px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
    marginLeft: "0rem",
  },
}));


