import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import perfil from "./../assets/imagenes/paraportfolio4.png";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./muiTheme";

interface HomeProps {
  id: string;
}

const Home: FunctionComponent<HomeProps> = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const textToAnimate = "a creative";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex === textToAnimate.length) {
        clearInterval(interval);
        return;
      }

      setText(textToAnimate.substring(0, currentIndex + 1)); // Actualizamos el texto con una subcadena
      currentIndex++;
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <LeftSection>
          <Img src={perfil} alt="perfil" />
          <Circulo />
        </LeftSection>
        <RightSection>
          <Typography
            sx={{
              fontSize: "5rem",
              fontFamily: "Font",
              whiteSpace: "pre-wrap",
              color: "white",
              marginTop: "-10rem",
              marginLeft: "-5rem",
              zIndex: 999,
              "@media screen and (max-width: 768px)": {
                fontSize: "2rem",
                marginTop: "0rem",
                marginLeft: "0rem"
              },
            }}
          >
            I am <Span>{text}</Span>
          </Typography>
          <Typography
            sx={{
              fontSize: "5rem",
              fontFamily: "Font",
              whiteSpace: "pre-wrap",
              color: "white",
              marginTop: "-2rem",
              marginLeft: "-5rem",
              zIndex: 999,
              "@media screen and (max-width: 768px)": {
                fontSize: "2rem",
                marginTop: "0rem",
                marginLeft: "0rem"
              },
            }}
          >
            Full stack developer!
          </Typography>
        </RightSection>
      </Container>
    </ThemeProvider>
  );
};

export default Home;

const Container = styled(Box)`
  display: flex;
  height: 100vh;
  padding: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LeftSection = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Alinea a la izquierda */
`;

const RightSection = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Img = styled("img")(() => ({
  width: "35rem",
  height: "35rem",
  marginTop: "-10rem",
  marginLeft: "10rem",
  zIndex: "1",
  transition: "filter 0.8s ease-in-out",
  filter: "grayscale(40%)",
  "&:hover": {
    filter: "grayscale(0%)",
  },
  "@media (max-width: 768px)": {
    marginTop: "0rem",
    marginLeft: "0rem",
    width: "20rem",
    height: "20rem",
  },
}));

const Circulo = styled("div")(() => ({
  position: "absolute",
  width: "35rem",
  height: "35rem",
  marginTop: "-10rem",
  marginLeft: "10rem",
  background: "linear-gradient(10deg, #3676bb, #a742a1)",
  borderRadius: "50%",
  zIndex: "0",
  "@media (max-width: 768px)": {
    width: "20rem",
    height: "20rem",
    marginTop: "0rem",
    marginLeft: "0rem",
  },
}));

const Span = styled.span`
  font-size: 5rem;
  font-family: Font;
  white-space: pre-wrap;
  color: #a37b39;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
