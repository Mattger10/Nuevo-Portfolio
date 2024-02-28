import React, { useState } from "react";
import Home from "./Components/Home";
import styled from "styled-components";
import fondo from "./assets/imagenes/Sin título-1.png";
import ResponsiveAppBar from "./Components/appbar";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Proyects from "./Components/Proyects";
import Contact from "./Components/Contact";


function App() {
  const [, setCurrentSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <>
      <div>
        
      <Fondo src={fondo} alt="" />
        <ResponsiveAppBar scrollToSection={scrollToSection} />
        <Home id="home"/>
        <AboutMe id="aboutme" />
        <Skills id="skills" />
        <Proyects id="proyects" />
        <Contact id="contact"  scrollToSection={scrollToSection} />
        
      </div>
    </>
  );
}

export default App;

const Fondo = styled("img")(() => ({
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "#22252a",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: "-9999",
}));
