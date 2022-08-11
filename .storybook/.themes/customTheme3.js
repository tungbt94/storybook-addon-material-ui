import { createTheme } from '@mui/material/styles';
import green from '@mui/material/colors/green';
import purple from '@mui/material/colors/purple';
import blue from '@mui/material/colors/blue';

const darkGreen = green[900];
const accentPurple = purple.A200;
const darkPurple = purple[900];

export const overridings = {
  palette: {
    primary: {
      light: accentPurple,
      main: blue[200],
      dark: darkPurple,
    },
    secondary: {
      main: darkGreen,
    },
    type: 'dark'
  },
  themeName: 'Pale Blue Theme'
};

export default createTheme(overridings);
