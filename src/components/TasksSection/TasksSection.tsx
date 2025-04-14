import { Box, Typography, Button, Stack } from '@mui/material';
import TaskList from '../TaskList/TaskList';
import { useTasks } from '../../contexts/TasksContext';
import { useFilters } from '../../contexts/FiltersContext';

export default function TasksSection({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<{ open: boolean; task?: TTask }>> })
{
  const { tasks, setTasks } = useTasks();
  const { filterPriority, searchQuery } = useFilters();
  const filteredTasks: TTask[] = tasks.filter(task => filterPriority !== 0 ? +task.priority === +filterPriority : true)
    .filter(task => task.name.toLowerCase().includes(searchQuery.toLowerCase()))
  function handleDeleteTasks()
  {
    setTasks([]);
  }
  return (
    <Box bgcolor="white" borderRadius="12px" mt={"-50px"} p={"20px"}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={"20px"}>
        <Typography color="lightGrey" component="span">{filteredTasks.filter(task => task.completed == false).length} tasks left</Typography>
        <Button onClick={handleDeleteTasks} size="large" color='lightGrey' sx={{ textTransform: 'none' }} variant="text">Clear all tasks</Button>
      </Stack>
      <TaskList setOpen={setOpen} />
    </Box>
  )
}
