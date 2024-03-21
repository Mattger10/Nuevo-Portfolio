import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import theme from "./muiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import Popover from "@mui/material/Popover";
import github from "../assets/imagenes/github.png";
import linkedin from "../assets/imagenes/linkedin.png";
import cv from "../assets/imagenes/cv.png";
import styled from "styled-components";
import aboutMeData from "./en.json";
import aboutMeData2 from "./es.json";
import TranslateIcon from "@mui/icons-material/Translate";
import { Link } from "react-router-dom";

interface ResponsiveAppBarProps {
  scrollToSection: (sectionId: string) => void;
  handleTextChange: () => void; // Definir el tipo de handleTextChange
  textChanged: boolean;
}

const ResponsiveAppBar: React.FunctionComponent<ResponsiveAppBarProps> = ({
  scrollToSection,
  handleTextChange, // Agrega esta prop
  textChanged,
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [selectedPage, setSelectedPage] = React.useState<string>(""); // Estado para mantener la página seleccionada
  const open = Boolean(anchorElNav);
  const [currentData, setCurrentData] = React.useState(aboutMeData);

  React.useEffect(() => {
    if (textChanged) {
      // Cambiar el texto si textChanged es true
      setCurrentData(aboutMeData2);
    } else {
      // Revertir al texto original si textChanged es false
      setCurrentData(aboutMeData);
    }
  }, [textChanged]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (sectionId: string) => {
    // Si es la página principal, redirige a "/"
    if (sectionId === "") {
      window.location.href = "/";
    } else {
      // Si no, desplaza a la sección correspondiente
      scrollToSection(sectionId);
      setSelectedPage(sectionId);
      handleCloseNavMenu();
    }
  };
  const handleTextChangeButtonClick = () => {
    handleTextChange(); // Llama a la función handleTextChange pasada desde App
    handleCloseNavMenu(); // Cierra el menú
  };

  const pages = [currentData["home"], ...currentData.pages];
  const sectionIds = ["", ...["aboutme", "skills", "proyects", "contact"]];

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "transparent",  }}
      >
        <Container maxWidth="xl" >
          <Toolbar disableGutters>
            <Box
              sx={{
                position: "fixed",
                display: "flex",
                alignItems: "center",
                bottom: "10px",
                zIndex: "999",
                "@media (max-width:768px)": {
                  bottom: "10px",
                },
              }}
            >
              <a
                href="https://github.com/Mattger10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub src={github} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/matias-zacariaz-016390185/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin src={linkedin} alt="" />
              </a>
              <a
                href="https://matiaszacariazportfolio.netlify.app/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Cv src={cv} alt="" />
              </a>
            </Box>
            <CustomLink to="/">
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 0,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Font2",
                  fontSize: "2rem",
                  fontWeight: 400,
                  padding: "5px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Matías{" "}
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Font2",
                  fontSize: "2rem",
                  fontWeight: 700,
                  padding: "5px",
                  color: "#a37b39",
                  textDecoration: "none",
                }}
              >
                Zacariaz
              </Typography>
            </CustomLink>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Popover
                id="menu-appbar"
                open={open}
                anchorEl={anchorElNav}
                onClose={handleCloseNavMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  ml: 2,
                  width: "100%", // Ancho completo
                  maxWidth: "100%", // Ancho máximo completo
                  [`& .MuiPaper-root`]: {
                    width: "100%", // Ancho completo
                    maxWidth: "100%", // Ancho máximo completo
                    backgroundColor: "transparent !important", // Hacer transparente el fondo del menú desplegable
                    backdropFilter: "blur(5px)", // Aplicar un desenfoque al fondo del menú
                  },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    key={page}
                    onClick={() => handleMenuItemClick(sectionIds[index])}
                    sx={{ color: "white" }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Popover>
            </Box>


              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 1,
                  display: { xs: "flex", md: "none" },
                  fontFamily: "Font2",
                  fontSize: "2rem",
                  fontWeight: 400,
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Matías
              </Typography>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "Font2",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#a37b39",
                  textDecoration: "none",
                }}
              >
                Zacariaz
              </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              {pages.map((page, index) => (
                <Box
                  key={page}
                  onClick={() => handleMenuItemClick(sectionIds[index])}
                >
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      mr: 5,
                      mt: 4,
                      my: 5,
                      display: "block",
                      fontFamily: "Font3",
                      fontSize: "18px",
                      letterSpacing: ".1rem",
                      cursor: "pointer",

                      textTransform: "uppercase",
                      color:
                        selectedPage === sectionIds[index]
                          ? "#a37b39"
                          : "white",
                      textDecoration:
                        selectedPage === sectionIds[index]
                          ? "line-through"
                          : "none", // Aplica tachado al texto de la página seleccionada
                      "&:hover": {
                        color: "#a37b39",
                      },
                    }}
                  >
                    {page}
                  </Typography>
                </Box>
              ))}
            </Box>

            <TranslateIcon
              onClick={handleTextChangeButtonClick}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#a37b39",
                },
              }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;

const GitHub = styled("img")(() => ({
  width: "30px",
  height: "30px",
  marginRight: "10px", // Añade margen derecho para separarlo del resto del contenido
  opacity: 0.5,
  "&:hover": {
    opacity: 0.9,
  },
}));

const Linkedin = styled("img")(() => ({
  width: "40px",
  height: "40px",
  marginRight: "10px", // Añade margen derecho para separarlo del resto del contenido
  opacity: 0.5,
  "&:hover": {
    opacity: 0.9,
  },
}));

const Cv = styled("img")(() => ({
  width: "29px",
  height: "29px",
  marginRight: "10px", // Añade margen derecho para separarlo del resto del contenido
  marginTop: "-2px",
  opacity: 0.5,
  "&:hover": {
    opacity: 0.9,
  },
}));

const CustomLink = styled(Link)(() => ({
  display: "flex",
  justifyContent:"center",
  textDecoration: "none",
}));
