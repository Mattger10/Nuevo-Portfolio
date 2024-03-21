import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { Box, Tooltip, Typography } from "@mui/material";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./muiTheme";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import aboutMeData from "./en.json";
import aboutMeData2 from "./es.json";

interface ContactProps {
  id: string;
  textChanged: boolean;
}

const Contact: FunctionComponent<ContactProps> = ({ id, textChanged }) => {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
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

  const handleCopyClick = () => {
    const emailText = "matiaszacariaz@hotmail.com";
    navigator.clipboard.writeText(emailText);
    setCopied(true);
  };

  const handleCopyPhoneClick = () => {
    const phoneText = "+54 0 379 4 818329";
    navigator.clipboard.writeText(phoneText);
    setCopiedPhone(true);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Contenedor id={id}>
        <Box
          sx={{
            marginTop: "5rem",
            marginBottom: "10rem",
            marginRight: "35rem",
            "@media screen and (max-width: 560px)": {
              width: "5rem",
              marginRight: "0rem",
              marginLeft: "2.5rem",
            },
          }}
        >
          <Circulo />
          <Linea />
          <Typography
            sx={{
              color: "white",
              fontSize: "45px",
              fontFamily: "Font",
              marginLeft: "34rem",
              marginTop: "-8rem",
              "@media screen and (max-width: 768px)": {
                fontSize: "20px",
                marginLeft: "-1rem",
                marginTop: "-5rem",
              },
            }}
          >
            {currentData.contact}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "45px",
              fontFamily: "Font",
              marginLeft: "34rem",
              marginTop: "-2rem",
              "@media screen and (max-width: 768px)": {
                fontSize: "20px",
                marginLeft: "-1rem",
                marginTop: "0rem",
              },
            }}
          >
            {currentData.me2}{" "}
            <span style={{ color: "#a37b39", fontWeight: 600 }}>
              {currentData["me now"]}
            </span>
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "20px",
              fontFamily: "Font",
              marginLeft: "64rem",
              marginTop: "-4rem",
              "@media screen and (max-width: 560px)": {
                fontSize: "15px",
                marginLeft: "-7rem",
                marginTop: "5rem",
              },
              "&:hover": {
                color: "#a37b39",
              },
            }}
          >
            <a
              href="mailto:matiaszacariaz@hotmail.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              matiaszacariaz@hotmail.com
            </a>
            <Tooltip title={copied ? "Copied!" : "Copy email"}>
              <ContentCopyIcon
                onClick={handleCopyClick}
                sx={{
                  position: "absolute",
                  cursor: "pointer",
                  marginTop: "0.5rem",
                  marginLeft: "2rem",
                  fontSize: "large",
                  "@media (max-width: 560px)": {
                    marginTop: "-1.3rem",
                    marginLeft: "15rem",
                  },
                }}
              />
            </Tooltip>
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "20px",
              fontFamily: "Font",
              marginLeft: "70rem",
              marginTop: "0rem",
              "@media screen and (max-width: 560px)": {
                fontSize: "14px",
                marginLeft: "-7rem",
                marginTop: "0.5rem",
              },
            }}
          >
            +54 0 379 4 818329
            <Tooltip title={copiedPhone ? "Copied!" : "Copy phone number"}>
              <ContentCopyIcon
                onClick={handleCopyPhoneClick}
                sx={{
                  position: "absolute",
                  cursor: "pointer",
                  marginTop: "0.5rem",
                  marginLeft: "2.5rem",
                  fontSize: "large",
                  "@media (max-width: 560px)": {
                    marginTop: "0rem",
                    marginLeft: "6.4rem",
                  },
                }}
              />
            </Tooltip>
          </Typography>
        </Box>
      </Contenedor>
    </ThemeProvider>
  );
};

export default Contact;

const Circulo = styled("div")(() => ({
  width: "150px",
  height: "150px",
  marginTop: "0rem",
  marginLeft: "30rem",
  background: "linear-gradient(10deg, #3676bb, #a742a1)",
  borderRadius: "50%",
  zIndex: "0",
  "@media screen and (max-width: 768px)": {
    width: "100px",
    height: "100px",
    marginLeft: "-5rem",
  },
}));

const Linea = styled("div")(() => ({
  position: "absolute",
  borderBottom: "2px solid #a37b39;",
  width: "10rem",
  height: "1rem",
  marginTop: "-5.5rem",
  marginLeft: "52rem",
  "@media screen and (max-width: 768px)": {
    marginLeft: "-3rem",
    marginTop: "0rem",
  },
}));

const Contenedor = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  marginBottom: "0rem",
  width: "auto",
  "@media screen and (max-width: 768px)": {},
}));
