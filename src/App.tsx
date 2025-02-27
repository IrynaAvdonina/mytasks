import { Box, Button, Container, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { theme } from './theme/index.ts';
import TaskList from './components/TaskList/TaskList';
import SearchFilter from './components/SearchFilter/SearchFilter.tsx';
import { Header } from './components/Header/Header.tsx';

function App()
{

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
        <Box component="main">
          <Box component="section">
            <SearchFilter />
            <Box className="tasks-header">
              <Typography component="span">2 tasks left</Typography>
              <Button variant="text">Clear all tasks</Button>
            </Box>
            <TaskList />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App;
