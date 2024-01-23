import { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import perfil from "./../assets/imagenes/paraportfolio4.png";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./muiTheme";

interface HomeProps {
  id: string;
}

const Home: FunctionComponent<HomeProps> = ({ id }) => {
  const [typedText, setTypedText] = useState("");

  const fullText = "Hola, soy Matías!";

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <StyledDiv id={id}>
        <Box
          sx={{
            width: "80rem",
            textAlign: "justify",
            color: "white",
            fontSize: "25px",
            marginTop: "-15rem",
            marginLeft: "5rem",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: -25,
              ml: -23,
              fontFamily: "Font2",
              fontSize: "35px",
              "&:hover": {
                fontSize: "37px",
              },
              
              '@media (max-width:768px)': { fontSize: '20px', ml: "-3.5rem", mt: "-20rem" },
              "@media screen and (max-width: 740px)": {fontSize: '20px', ml: "-3.5rem", mt: "-15rem"},
              
            }}
          >
            Matías{" "}
            <span style={{ color: "#a37b39", fontWeight: 600 }}>Zacariaz</span>
          </Typography>

          <Img src={perfil} alt="perfil" />
          <Circulo />
          <Texto>
            

            <Typography
              sx={{
                color: "white",
                fontSize: "50px",
                fontFamily: "Font",
                mt: "9rem",
                '@media (max-width:768px)': { fontSize: '35px', marginTop: "8rem" }
              }}
              >
              {typedText}
            </Typography>
              
            <Typography
              sx={{ color: "white", fontSize: "50px", fontFamily: "Font", '@media (max-width:768px)': { fontSize: '35px', width: "10%" } }}
            >
              fullstack{" "}
              <span style={{ color: "#a37b39", fontWeight: 600 }}>
                developer.
              </span>
            </Typography>
          </Texto>
        </Box>
      </StyledDiv>
    </ThemeProvider>
  );
};

export default Home;

const Circulo = styled("div")(() => ({
  position: "absolute",
  width: "28rem",
  height: "28rem",
  marginTop: "0rem",
  marginLeft: "10rem",
  background: "linear-gradient(10deg, #3676bb, #a742a1)",
  borderRadius: "50%",
  zIndex: "0",

  "@media screen and (max-width: 768px)": {
    width: "20rem",
    height: "20rem",
    marginLeft: "0rem",
  },
  "@media screen and (max-width: 740px)": {
    width: "19rem",
    height: "19rem",
    marginLeft: "0rem",
  }
}));

const Img = styled("img")(() => ({
  position: "absolute",
  width: "28rem",
  height: "28rem",
  marginTop: "0rem",
  marginLeft: "10rem",
  zIndex: "1",
  
  transition: "filter 0.8s ease-in-out",
  filter: "grayscale(40%)",
  "&:hover": {
   
    filter: "grayscale(0%)",
  },
  "@media screen and (max-width: 768px)": {
    width: "20rem",
    height: "20rem",
    marginLeft: "0rem",
  },
  "@media screen and (max-width: 740px)": {
    width: "19rem",
    height: "19rem",
    marginLeft: "0rem",
  }
}));

const Texto = styled("div")(() => ({
  marginLeft: "32rem",
  marginTop: "0rem",
  position: "absolute",
  "@media screen and (max-width: 768px)": {
    marginLeft: "-4rem",
    marginTop: "-15rem",

  },
}));

const StyledDiv = styled("div")(() => ({
  // Estilos comunes para dispositivos que no cumplen con la media query
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",

  // Aquí agregamos estilos específicos para dispositivos con un ancho de pantalla menor o igual a 768px
  "@media screen and (max-width: 768px)": {
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  "@media screen and (max-width: 740px)": {
    border: "2px solid red",
    width: "109vw"
  }
  
}));


