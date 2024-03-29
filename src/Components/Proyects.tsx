import { FunctionComponent, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Theme from "./muiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import aboutMeData from "./en.json";
import aboutMeData2 from "./es.json";
import proyectos from "./proyectos.json";
import { Link } from "react-router-dom";

interface Proyect {
  id: number;
  imagen: string;
  imagen2: string;
  título: string;
  descripción: string;
  tecnologías: string[]; // Definir tecnologías como un array de strings
  tec: string;
  pagina: string;
  github: string;
}

interface ProyectsProps {
  id: string;
  textChanged: boolean;
}

const Proyects: FunctionComponent<ProyectsProps> = ({ id, textChanged }) => {
  const [currentData, setCurrentData] = useState(aboutMeData);
  const [proyectosData, setProyectosData] = useState<Proyect[]>([]);

  useEffect(() => {
    if (textChanged) {
      setCurrentData(aboutMeData2);
    } else {
      setCurrentData(aboutMeData);
    }
  }, [textChanged]);

  useEffect(() => {
    setProyectosData(proyectos.proyects);
  }, []);

  const handleProyectoClick = () => {
    // Hacer scroll hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          {currentData.my}{" "}
          <span style={{ color: "#a37b39", fontWeight: 600 }}>
            {currentData.proyects}
          </span>
        </Typography>
        <ContainerImages>
          {proyectosData.map((proyecto) => (
            <CustomLink key={proyecto.id} to={`/details/${proyecto.id}`} onClick={handleProyectoClick}>
              <Img src={proyecto.imagen} alt={`Proyecto ${proyecto.id}`} />
            </CustomLink>
          ))}
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
  width: "25rem",
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
  flexDirection: "column",
  height: "auto",
  width: "auto",
  padding: "20px",
  "@media screen and (max-width: 768px)": {

  },
}));

const ContainerImages = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "40px",
  marginTop: "0rem",
  padding: "50px",
  "@media screen and (max-width: 768px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
    marginTop: "1rem",
    gap: "20px",
  },
}));

const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
