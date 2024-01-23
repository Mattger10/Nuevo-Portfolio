import { createTheme } from '@material-ui/core/styles';
import Font from "../assets/fonts/rothwood-light.otf";
import Font2 from "../assets/fonts/tanseek-medium.otf";
import Font3 from "../assets/fonts/Roboto-Regular.ttf";



const myFont = new FontFace('Font', `url(${Font})`);
const myFont2 = new FontFace('Font2', `url(${Font2})`);
const myFont3 = new FontFace('Font3', `url(${Font3})`);

document.fonts.add(myFont);
document.fonts.add(myFont2);
document.fonts.add(myFont3);

const Theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#00ff00',
    },
  },
  typography: {
    fontFamily: 'Font, Font2, Font3',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [myFont, myFont2, myFont3], 
      },
    },
  },
});

export default Theme;