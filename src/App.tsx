import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import styled from "styled-components";
import ResponsiveAppBar from "./Components/appbar";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Proyects from "./Components/Proyects";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Details from "./Components/Details";

function App() {
  const [, setCurrentSection] = useState("home");
  const [textChanged, setTextChanged] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTextChange = () => {
    setTextChanged(!textChanged); // Cambia el estado textChanged
  };

  useEffect(() => {
    animateBalls();
  }, []);

  const animateBalls = () => {
    const balls = document.querySelectorAll(".ball");
    balls.forEach((ball) => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      const speed = Math.random() * 3 + 1; // Velocidad de la bola
      const xPos = Math.random() * width; // Posición inicial X de la bola
      let yPos = Math.random() * height; // Posición inicial Y de la bola

      // Aserción de tipo: Le decimos a TypeScript que confíe en nosotros con respecto al tipo de ball
      const ballElement = ball as HTMLElement;

      // Animación de la bola
      const moveBall = () => {
        yPos -= speed;
        if (yPos < -100) yPos = height;
        ballElement.style.top = yPos + "px";
        ballElement.style.left = xPos + "px";
        requestAnimationFrame(moveBall);
      };

      moveBall();
    });
  };

  return (
    <Router>
       <FondoContainer>
                {Array.from({ length: 100 }, (_, index) => (
                  <Ball
                    key={index}
                    className="ball"
                    style={{
                      background: "linear-gradient(10deg, #3676bb, #a742a1)",
                    }}
                  />
                ))}
              </FondoContainer>
      <ResponsiveAppBar scrollToSection={scrollToSection} handleTextChange={handleTextChange} textChanged={textChanged}/>
      <Routes>
        <Route path="/" element={
          <>
            
           
          
            <Home id="home" textChanged={textChanged}/>
            <AboutMe id="aboutme" textChanged={textChanged} />
            <Skills id="skills" textChanged={textChanged} />
            <Proyects id="proyects" textChanged={textChanged}/>
            <Contact id="contact"  textChanged={textChanged} />
          </>
        } />
         <Route path="/details/:id" element={<Details textChanged={textChanged} />} />
      </Routes>
    </Router>
  );
}

export default App;



const FondoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #101011;
  overflow: hidden;
  z-index: -9999;
`;

const Ball = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
`;
