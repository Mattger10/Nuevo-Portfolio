import { FunctionComponent } from "react";
import styled from "styled-components";
import {  Typography } from "@mui/material";
import perfil from "./../assets/imagenes/paraportfolio4.png";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./muiTheme";

interface HomeProps {
  id: string;
}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <ThemeProvider theme={Theme}>
      <ContenedorPrincipal>
        <Nombre>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Font2",
              fontSize: "2rem",
              padding: "5px",
            }}
          >
            Matías{" "}
            <span style={{ color: "#a37b39", fontWeight: 600 }}>Zacariaz</span>
          </Typography>
        </Nombre>
        <StyledDiv>
          <Img src={perfil} alt="perfil" />
          <Circulo />
        </StyledDiv>
      </ContenedorPrincipal>
    </ThemeProvider>
  );
};

export default Home;

const ContenedorPrincipal = styled("div")(() => ({
 width: "auto",
  border: "2px solid red",

}));

const Nombre = styled("div")(() => ({
  display: "flex",
  flexDirection: "column", // Alinear los elementos en columna
  alignItems: "flex-start", // Alinear al inicio (izquierda)
  padding: "20px", // Agregar un relleno para mayor legibilidad y espacio
  boxSizing: "border-box", // Incluir el relleno en el tamaño total

  // Estilos adicionales para hacerlo responsive
  "@media (max-width: 560px)": {
    padding: "10px", // Ajustar el relleno para dispositivos más pequeños
  },
}));

const StyledDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
}));

const Img = styled("img")(() => ({
  width: "auto", 
  height: "auto", 
  marginTop: "-10rem",
  marginLeft: "10rem",
  zIndex: "1",
  transition: "filter 0.8s ease-in-out",
  filter: "grayscale(40%)",
  "&:hover": {
    filter: "grayscale(0%)",
  },
  "@media (max-width: 560px)": { 
    marginTop: "0rem",
    marginLeft: "0rem",
    width: "24rem", // Cambiado a porcentaje para hacerlo responsive
  height: "24rem", // Se ajusta automáticamente para mantener la proporción de aspecto
  }
}));

const Circulo = styled("div")(() => ({
  position: "absolute",
  width: "28rem",
  height: "28rem",
  marginTop: "-10rem",
  marginLeft: "10rem",
  background: "linear-gradient(10deg, #3676bb, #a742a1)",
  borderRadius: "50%",
  zIndex: "0",
  "@media (max-width: 560px)": {
    width: "24rem",
    height: "24rem",
    marginTop: "0rem", // Ajusta el valor para centrar verticalmente
    marginLeft: "0rem", // Ajusta el valor para centrar horizontalmente
  },
}));

