import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/index.ts';
import { TasksProvider } from './contexts/TasksContext.tsx';
import { FiltersProvider } from './contexts/FiltersContext.tsx';

const AppProviders = ({ children }: { children: React.ReactNode }) => (
    <TasksProvider>
        <FiltersProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </FiltersProvider>
    </TasksProvider>
);
export default AppProviders;