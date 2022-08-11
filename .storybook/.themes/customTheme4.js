import { createTheme } from '@mui/material/styles';
import red from '@mui/material/colors/red';
import yellow from '@mui/material/colors/yellow';


export const overridings = {
  palette: {
    primary: {
      main: yellow[500],
      contrastText: '#000'
    },
    secondary: {
      main: red[500],
      contrastText: '#fff'
    },
    type: 'dark'
  },
  themeName: 'Yellow and Red Theme'
};

export default createTheme(overridings);
