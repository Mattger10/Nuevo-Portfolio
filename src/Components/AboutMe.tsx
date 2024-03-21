import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import Theme from "./muiTheme";
import { ThemeProvider } from "@material-ui/core/styles";

interface AboutMeProps {
  id: string;
}

const AboutMe: FunctionComponent<AboutMeProps> = ({ id }) => {
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
            About <span style={{ color: "#a37b39", fontWeight: 600 }}>me</span>
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
            I am looking for projects and challenges to put into practice my
            skills and knowledge acquired during my time at the Soy Henry
            bootcamp. Since he started in January 2023, he has not stopped
            learning and acquiring new knowledge. I consider myself a friendly
            person and I like to get along with everyone. Some of my hobbies are
            playing video games, reading, watching videos and learning new
            things. I also really like to travel and see new places. I am
            motivated by the challenge and always give my best in everything I
            do. I am currently open to job offers and I believe that I can
            contribute interesting things to companies or projects that need me
            due to my ability to adapt, responsibility and flexibility.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AboutMe;
