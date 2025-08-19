// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: {
      main: '#34C94B',
    },
    background: {
      default: '#121212',
    },
  },
});

export default theme;
