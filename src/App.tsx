import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/index.ts';
import { Header } from './components/Header/Header.tsx';
import TasksSection from './components/TasksSection/TasksSection.tsx';
import CreateFormDialog from './components/Dialog/Dialog.tsx';
import { useState } from 'react';
import { TasksProvider } from './TasksContext.tsx';

function App()
{
  const [open, setOpen] = useState(false);

  return (
    <TasksProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box bgcolor={"#D6D6D6"} minHeight={"100vh"}>
          <Header setOpen={setOpen} />
          <Box component="main">
            <Container maxWidth="md">
              <Box component="section">
                <TasksSection />
              </Box>
            </Container>
          </Box>
        </Box>
        <CreateFormDialog open={open} setOpen={setOpen} />
      </ThemeProvider>
    </TasksProvider>
  )

}

export default App;
