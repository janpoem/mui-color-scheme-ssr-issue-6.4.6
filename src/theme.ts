import { createTheme } from '@mui/material';
import { blue, blueGrey, green } from '@mui/material/colors';

export default createTheme({
  cssVariables: {
    colorSchemeSelector: 'data',
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: blue.A700,
        },
        secondary: {
          main: blueGrey.A700,
        },
        success: {
          main: green['800'],
        },
      },
    },
  },
  palette: {
    primary: {
      main: blue['500'],
    },
    secondary: {
      main: blueGrey['500'],
    },
    success: {
      main: green['600'],
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: 'Roboto, sans-serif',
    // htmlFontSize: 16,
    button: {
      textTransform: 'none',
    },
  },
});
