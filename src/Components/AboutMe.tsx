import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Theme from "./muiTheme";
import { ThemeProvider } from "@material-ui/core/styles";

interface AboutMeProps {
  id: string;
}

const AboutMe: FunctionComponent<AboutMeProps> = ({ id }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Contenedor id={id}>
        <Box
          sx={{
            width: "80rem",
            textAlign: "justify",
            color: "white",
            marginTop: "0rem",
            "@media screen and (max-width: 560px)": {
              width: "22rem", marginTop: "-5rem",
            },
          }}
        >
          <Typography
            sx={{ fontSize: "30px", fontWeight: 500, fontFamily: "Font", "@media screen and (max-width: 768px)": {
             fontSize: "25px",
            }, }}
          >
            About <span style={{ color: "#a37b39", fontWeight: 600 }}>me</span>
          </Typography>
          <Typography sx={{ mt: 2, fontSize: "25px", fontFamily: "Font", "@media screen and (max-width: 768px)": {
             fontSize: "20px",
            } }}>
            Estoy en busca de proyectos y desafíos para poner en práctica mis
            habilidades y conocimientos adquiridos durante mi tiempo en el
            bootcamp de Soy Henry. Desde que empecé en enero de 2023, no he
            dejado de aprender y adquirir nuevos conocimientos. Me considero una
            persona amistosa y me gusta llevarme bien con todos. Algunos de mis
            hobbies son jugar videojuegos, leer, ver videos y aprender cosas
            nuevas, también me gusta mucho viajar y conocer lugares nuevos. Me
            motiva el desafío y siempre doy lo mejor de mí en todo lo que hago.
            Actualmente estoy abierto a ofertas laborales y creo que puedo
            aportar cosas interesantes a las empresas o proyectos que me
            necesiten debido a mi capacidad de adaptación, responsabilidad y
            flexibilidad.
          </Typography>
        </Box>
      </Contenedor>
    </ThemeProvider>
  );
};

export default AboutMe;

const Contenedor = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  marginTop: "0rem",
  marginBottom: "0rem",
  width: "auto",  
  border: "2px solid red",
  
  "@media screen and (max-width: 768px)": {},
}));
