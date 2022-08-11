import { createTheme } from '@mui/material/styles';
import green from '@mui/material/colors/green';
import purple from '@mui/material/colors/purple';

const primaryGreen = green[500];
const accentGreen = green.A200;
const darkGreen = green[900];
const primaryPurple = purple[500];
const accentPurple = purple.A200;
const darkPurple = purple[900];

export const overridings = {
  palette: {
    primary: {
      light: accentPurple,
      main: primaryPurple,
      dark: darkPurple,
      contrastText: '#fff'
    },
    type: 'dark',
    secondary: {
      light: accentGreen,
      main: primaryGreen,
      dark: darkGreen,
      contrastText: '#fff'
    }
  },
  themeName: 'Custom Dark Theme'
};

export default createTheme(overridings);
