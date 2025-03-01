import { createTheme } from '@mui/material';

export default createTheme({
  cssVariables: {
    colorSchemeSelector: 'data',
  },
  colorSchemes: {
    dark: true,
  },
  palette: {
    primary: {
      main: '#2977b3',
      dark: '#87251e',
      light: '#87251e',
    },
    secondary: {
      main: '#084d2e',
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
