import React, { FunctionComponent, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Theme from "./muiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import proyectos from "./proyectos.json";
import proyectosEn from "./proyectosEn.json"; // Importar el archivo de proyectos en inglés
import Proyects from "./Proyects";
import GitHubIcon from "@mui/icons-material/GitHub";
import NearMeIcon from "@mui/icons-material/NearMe";

interface Proyect {
  id: number;
  imagen: string;
  imagen2: string;
  título: string;
  descripción: string;
  tecnologías: string[];
  tec: string;
  pagina: string;
  github: string;
}

interface DetailsProps {
  textChanged: boolean; // Definir la prop textChanged
}

const Details: FunctionComponent<DetailsProps> = ({ textChanged }) => {
  const { id } = useParams<{ id: string }>();
  const [proyecto, setProyecto] = useState<Proyect | null>(null);

  useEffect(() => {
    const proyectoEncontrado = textChanged
      ? proyectos.proyects.find((p) => p.id.toString() === id)
      : proyectosEn.proyects.find((p) => p.id.toString() === id);
    if (proyectoEncontrado) {
      setProyecto(proyectoEncontrado);
    }
  }, [id, textChanged]);

  if (!proyecto) {
    return <div>Loading...</div>;
  }

  const handleProbarAhoraClick = () => {
    window.open(proyecto.pagina, "_blank"); // Abre el enlace en una nueva pestaña
  };

  const handleGitHubClick = () => {
    window.open(proyecto.github, "_blank"); // Abre el enlace en una nueva pestaña
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Img src={proyecto.imagen2} alt={`Proyecto ${proyecto.id}`} />
        </Box>
        <Content>
          <Box sx={{ display: "flex", textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: 500,
                fontFamily: "Font3",
                color: "white",
                wordWrap: "break-word", // Para permitir el salto de palabras largas
                overflowWrap: "break-word", // Para forzar el salto de palabras largas
                "@media screen and (max-width: 768px)": {
                  fontSize: "25px",
                },
              }}
            >
              {proyecto.título}
            </Typography>
          </Box>

          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              mt: 2,
              fontSize: "20px",
              fontFamily: "Font",
              color: "white",
              marginBottom: "50px",
              "@media screen and (max-width: 768px)": {
                fontSize: "20px",
              },
            }}
          >
            {proyecto.descripción}
          </Typography>
          <Typography
            sx={{
              fontSize: "35px",
              fontWeight: 500,
              fontFamily: "Font3",
              color: "white",
              "@media screen and (max-width: 768px)": {
                fontSize: "20px",
              },
            }}
          >
            {proyecto.tec} :
          </Typography>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ContainerImages>
              {proyecto.tecnologías.map((tecnologia, index) => (
                <ImgTec
                  key={index}
                  src={tecnologia}
                  alt={`Skill ${index + 1}`}
                />
              ))}
            </ContainerImages>
          </Box>
          <ButtonContainer>
           
            <Button
              variant="contained"
              onClick={handleProbarAhoraClick}
              sx={{
                background: "linear-gradient(10deg, #3676bb, #a742a1)",
                fontFamily: "Font2",
                fontSize: "20px",
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(10deg, #a742a1, #3676bb)",
                },
              }}
            >
              Probar ahora{" "}
              <NearMeIcon sx={{ fontSize: "medium", paddingLeft: "10px" }} />
            </Button>
            
            <Button
              variant="contained"
              onClick={handleGitHubClick}
              sx={{
                background: "linear-gradient(10deg, #a742a1, #3676bb)",
                fontFamily: "Font2",
                fontSize: "20px",
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(10deg, #3676bb, #a742a1)",
                },
              }}
            >
              Repositorio{" "}
              <GitHubIcon sx={{ fontSize: "medium", paddingLeft: "10px" }} />
            </Button>
            
          </ButtonContainer>
        </Content>
      </Container>
      <Proyects id="proyects" textChanged={textChanged} />
    </ThemeProvider>
  );
};

export default Details;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  gap: 30px;
`;

const ContainerImages = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "15px",
  marginTop: "20px",
  marginBottom: "20px",
  "@media screen and (max-width: 768px)": {
    marginLeft: "0rem",
    gap: "15px",
  },
}));

const ImgTec = styled("img")(() => ({
  width: "40px",
  height: "40px",
}));

const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "auto",
  gap: "20px",
  padding: "200px",
  paddingTop: "80px",
  marginTop: "2rem",
  marginBottom: "-7rem",
  "@media screen and (max-width: 768px)": {
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    marginBottom: "0rem",
  },
}));

const Img = styled("img")(() => ({
  filter: "grayscale(40%)",
  width: "auto",
  height: "auto",
  borderRadius: "10px",
  "&:hover": {
    filter: "grayscale(0%)", // Al hacer hover, mostrar en color
  },
  "@media screen and (max-width: 768px)": {
    width: "20rem",
    height: "auto",
  },
}));

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido horizontalmente */
`;
