import { Box, Container } from '@mui/material';
import { Header } from './components/Header/Header.tsx';
import { useTheme } from '@mui/material/styles';

export default function Layout({ children, setOpen }:
  { children: React.ReactNode, setOpen: React.Dispatch<React.SetStateAction<{ open: boolean; task?: TTask }>> }) {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.lightGrey} minHeight={"100vh"}>
      <Header setOpen={setOpen} />
      <Box component="main">
        <Container maxWidth="md">
          <Box component="section">
            {children}
          </Box>
        </Container>
      </Box>
    </Box>
  );

}