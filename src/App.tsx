import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/index.ts';
import { Header } from './components/Header/Header.tsx';
import TasksSection from './components/TasksSection/TasksSection.tsx';
import FormDialog from './components/FormDialog/FormDialog.tsx';
import { useState } from 'react';
import { TasksProvider } from './contexts/TasksContext.tsx';
import { FiltersProvider } from './contexts/FiltersContext.tsx';

function App()
{
  const [open, setOpen] = useState<{ open: boolean; task?: TTask }>({ open: false, task: undefined });

  return (
    <TasksProvider>
      <FiltersProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box bgcolor={"#D6D6D6"} minHeight={"100vh"}>
            <Header setOpen={setOpen} />
            <Box component="main">
              <Container maxWidth="md">
                <Box component="section">
                  <TasksSection setOpen={setOpen} />
                </Box>
              </Container>
            </Box>
          </Box>
          <FormDialog open={open.open} setOpen={setOpen} task={open.task} />
        </ThemeProvider>
      </FiltersProvider>
    </TasksProvider>
  )

}

export default App;
