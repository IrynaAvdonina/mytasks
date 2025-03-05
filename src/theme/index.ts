import { alpha, createTheme } from '@mui/material';
declare module '@mui/material/styles' {
  interface Palette
  {
    lightGrey: Palette['primary'];
  }

  interface PaletteOptions
  {
    lightGrey?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides
  {
    lightGrey: true;
  }
}
const lightGrey = '#777676';

export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    lightGrey: {
      main: lightGrey,
      light: alpha(lightGrey, 0.5),
      dark: alpha(lightGrey, 0.9)
    },
  },
});