import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import yellow from '@mui/material/colors/yellow';


export const overridings = {
  palette: {
    primary: {
      main: yellow[500],
      contrastText: '#000'
    },
    secondary: {
      main: blue[500],
      contrastText: '#fff'
    },
    type: 'dark'
  },
  themeName: 'Yellow and Blue Theme'
};

export default createTheme(overridings);
