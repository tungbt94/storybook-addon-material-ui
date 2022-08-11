import { createTheme } from '@mui/material/styles';
import green from '@mui/material/colors/green';
import purple from '@mui/material/colors/purple';
import blue from '@mui/material/colors/blue';
import red from '@mui/material/colors/red';
import yellow from '@mui/material/colors/yellow';

const primaryGreen = green[500];
const accentGreen = green.A200;
const darkGreen = green[900];
const primaryPurple = purple[500];
const accentPurple = purple.A200;
const darkPurple = purple[900];

export const overridings = {
  palette: {
    primary: {
      light: accentGreen,
      main: primaryGreen,
      dark: darkGreen,
      contrastText: '#fff'
    },
    secondary: {
      light: accentPurple,
      main: primaryPurple,
      dark: darkPurple,
      contrastText: '#fff'
    }
  },
  themeName: 'Custom Light Theme'
};

export default createTheme(overridings);
