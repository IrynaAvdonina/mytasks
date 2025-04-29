import { Box, Typography, Button, Stack } from '@mui/material';
import TaskList from '../TaskList/TaskList';
import { useTasks } from '../../contexts/TasksContext';
import { useFilters } from '../../contexts/FiltersContext';

export default function TasksSection({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<{ open: boolean; task?: TTask }>> }) {
  const { tasks, setTasks } = useTasks();
  const { filterPriority, searchQuery } = useFilters();

  const filteredTasks: TTask[] = tasks.filter(task =>
    (filterPriority !== 0 ? +task.priority === +filterPriority : true) &&
    task.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const tasksLeft = filteredTasks.filter(task => task.completed == false).length;

  return (
    <Box bgcolor="white" borderRadius="12px" mt={"-50px"} p={"20px"}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={"20px"}>
        <Typography color="silver" component="span">{tasksLeft} tasks left</Typography>
        <Button onClick={() => setTasks([])} size="large" color='silver' sx={{ textTransform: 'none' }} variant="text">
          Clear all tasks
        </Button>
      </Stack>
      <TaskList setOpen={setOpen} />
    </Box>
  )
}
