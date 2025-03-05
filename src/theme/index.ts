import { alpha, createTheme, getContrastRatio } from '@mui/material';
declare module '@mui/material/styles' {
  interface Palette
  {
    lightGrey: Palette['primary'];
    purple: Palette['primary'];
  }

  interface PaletteOptions
  {
    lightGrey?: PaletteOptions['primary'];
    purple?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides
  {
    lightGrey: true;
    purple: true;
  }
}
const lightGrey = '#777676';
const purple = '#594D9D';

export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    lightGrey: {
      main: lightGrey,
      light: alpha(lightGrey, 0.5),
      dark: alpha(lightGrey, 0.9),
      contrastText: getContrastRatio(lightGrey, '#fff') > 4.5 ? '#fff' : '#111',
    },
    purple: {
      main: purple,
      light: alpha(purple, 0.5),
      dark: alpha(purple, 0.9),
      contrastText: getContrastRatio(purple, '#fff') > 4.5 ? '#fff' : '#111',
    }
  },
});