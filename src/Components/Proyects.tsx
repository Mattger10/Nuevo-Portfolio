import { FunctionComponent } from "react";
import { Typography } from "@mui/material";
import Theme from "./muiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import AppPeliculas from "../assets/imagenes/appeliculas.gif";
import salvandohuellas from "../assets/imagenes/salvandohuellas.gif";
import espacio from "../assets/imagenes/espacio.gif";
import musica from "../assets/imagenes/musica.gif";
import { Link } from "react-router-dom";

interface ProyectsProps {
  id: string;
}

const Proyects: FunctionComponent<ProyectsProps> = ({ id }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Contenedor id={id}>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 500,
            fontFamily: "Font",
            color: "white",
            "@media screen and (max-width: 768px)": {
              fontSize: "25px",
              marginTop: "3rem",
            },
          }}
        >
          My <span style={{ color: "#a37b39", fontWeight: 600 }}>proyects</span>
        </Typography>
        <ContainerImages>
          <Link to="https://mattgerpeliculasyseries.vercel.app/">
            {" "}
            <Img src={AppPeliculas} />{" "}
          </Link>
          <Link to="https://www.youtube.com/watch?v=mfArnJwYctw">
            {" "}
            <Img src={salvandohuellas} />{" "}
          </Link>
          <Img src={musica} />
          <Link to="">
            {" "}
            <Img src={espacio} />{" "}
          </Link>
        </ContainerImages>
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
  width: "30rem",
  "&:hover": {
    filter: "grayscale(0%)", // Al hacer hover, mostrar en color
  },
  "@media screen and (max-width: 768px)": {
    width: "300px",
  },
}));

const Contenedor = styled("div")(() => ({
  display: "flex",
 alignItems: "center",
  flexDirection: 'column',
  height: "auto",
  width: "auto",
  padding: "20px",
  "@media screen and (max-width: 768px)": {},
}));

const ContainerImages = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "50px",
  marginTop: "5rem",
  padding: "50px",
  "@media screen and (max-width: 768px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
    marginTop: "1rem",
    gap: "20px",
  },
}));
