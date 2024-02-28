import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Box, Tooltip, Typography } from "@mui/material";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./muiTheme";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface ContactProps {
  id: string;
  scrollToSection: (sectionId: string) => void;
}

const Contact: FunctionComponent<ContactProps> = ({ id, scrollToSection }) => {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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
            marginBottom: "10rem",
            marginRight: "35rem",
            "@media screen and (max-width: 560px)": {
              width: "5rem",
              marginRight: "0rem",
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
            Contact
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
            me <span style={{ color: "#a37b39", fontWeight: 600 }}>now!</span>
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
            }}
          >
            matiaszacariaz@hotmail.com
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
                    marginLeft: "15rem",                  }
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
                marginLeft: "6.4rem",                  }
            }}
          />
        </Tooltip>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="home"
            onClick={() => scrollToSection("home")}
            sx={{
              position: "absolute",
              ml: "95rem",
              mt: 47,
              //   display: { xs: "none", md: "flex" },
              fontFamily: "Font3",
              fontSize: "15px",
              letterSpacing: ".1rem",
              color: "#a37b39",
              textDecoration: "none",
              cursor: "pointer",
              "@media screen and (max-width: 768px)": {
                marginLeft: "5rem",
                marginTop: "20rem",
              },
            }}
          >
            BACK TO TOP <KeyboardArrowUpIcon />
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
  marginLeft: "50rem",
  "@media screen and (max-width: 768px)": {
    marginLeft: "-3rem",
    marginTop: "0rem",
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
  "@media screen and (max-width: 768px)": {},
}));
