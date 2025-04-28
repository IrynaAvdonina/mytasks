import { alpha, createTheme, getContrastRatio } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    silver: Palette['primary'];
    purple: Palette['primary'];
    lightGrey: string;
  }

  interface PaletteOptions {
    silver?: PaletteOptions['primary'];
    purple?: PaletteOptions['primary'];
    lightGrey?: string;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    silver: true;
    purple: true;
  }
}
const silver = '#777676';
const purple = '#594D9D';
const lightGrey = '#D6D6D6';

export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    silver: {
      main: silver,
      light: alpha(silver, 0.5),
      dark: alpha(silver, 0.9),
      contrastText: getContrastRatio(silver, '#fff') > 4.5 ? '#fff' : '#111',
    },
    purple: {
      main: purple,
      light: alpha(purple, 0.5),
      dark: alpha(purple, 0.9),
      contrastText: getContrastRatio(purple, '#fff') > 4.5 ? '#fff' : '#111',
    },
    lightGrey: lightGrey,
  },
});