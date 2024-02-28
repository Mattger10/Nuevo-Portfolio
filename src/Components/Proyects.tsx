import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import Theme from "./muiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import AppPeliculas from "../assets/imagenes/appeliculas.gif";
import salvandohuellas from "../assets/imagenes/salvandohuellas.gif";
import espacio from "../assets/imagenes/espacio.gif";
import musica from "../assets/imagenes/musica.gif";

interface ProyectsProps {
  id: string;
}

const Proyects: FunctionComponent<ProyectsProps> = ({ id }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Contenedor id={id}>
        <Box
          sx={{
            width: "80rem",
            textAlign: "justify",
            color: "white",
            fontSize: "25px",
            marginTop: "0rem",
            "@media screen and (max-width: 768px)": {},
          }}
        >
          <Typography
            sx={{ fontSize: "30px", fontWeight: 500, fontFamily: "Font", "@media screen and (max-width: 768px)": { fontSize: "25px", marginTop: "3rem", marginLeft: "1rem" }, }}
          >
            My{" "}
            <span style={{ color: "#a37b39", fontWeight: 600 }}>proyects</span>
          </Typography>
          <ContainerImages>
            <Img src={AppPeliculas} />
            <Img src={salvandohuellas} />
            <Img src={musica} />
            <Img src={espacio} />
          </ContainerImages>
        </Box>
      </Contenedor>
    </ThemeProvider>
  );
};

export default Proyects;

const Img = styled("img")(() => ({
  borderRadius: "8px",
  filter: "grayscale(50%)", // Convertir la imagen a blanco y negro
  transition: "filter 0.5s ease", // Agregar transición para un efecto suave
  cursor: "pointer",
  width: "500px",
  "&:hover": {
    filter: "grayscale(0%)", // Al hacer hover, mostrar en color
  },
  "@media screen and (max-width: 768px)": {
    width: "300px",
  },

}));

const Contenedor = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  marginBottom: "0rem",
  width: "auto",  
  border: "2px solid red",
  
  "@media screen and (max-width: 768px)": {
  },
}));

const ContainerImages = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "50px", 
  marginTop: "50px", 
  marginLeft: "3rem",
  "@media screen and (max-width: 768px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
    marginTop: "rem", 
    gap: "20px", 
  },
}));
