import { FunctionComponent, useEffect, useState } from "react";
import { Box, Typography} from "@mui/material";
import Theme from "./muiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import aboutMeData from "./en.json";
import aboutMeData2 from "./es.json";


interface AboutMeProps {
  id: string;
  textChanged: boolean;
}

const AboutMe: FunctionComponent<AboutMeProps> = ({ id, textChanged }) => {

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

  return (
    <ThemeProvider theme={Theme}>
      <Box
        id={id}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",  
        }}
      >
        <Box
          sx={{
            width: "80%",
            textAlign: "justify",
            color: "white",
            padding: "20px",
            "@media screen and (max-width: 768px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 500,
              fontFamily: "Font",
              "@media screen and (max-width: 768px)": {
                fontSize: "25px",
              },
            }}
          >
            {currentData.about}{" "}
            <span style={{ color: "#a37b39", fontWeight: 600 }}>
              {currentData.me}
            </span>
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontSize: "25px",
              fontFamily: "Font",
              "@media screen and (max-width: 768px)": {
                fontSize: "20px",
              },
            }}
          >
            {currentData.description}
          </Typography>
          
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AboutMe;
