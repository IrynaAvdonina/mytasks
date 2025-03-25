import { Box, Typography, Button, Stack } from '@mui/material';
import TaskList from '../TaskList/TaskList';
import { useTasks } from './../../TasksContext';

export default function TasksSection()
{
  const { tasks, setTasks } = useTasks();
  function handleDeleteTasks()
  {
    setTasks([]);
  }
  return (
    <Box bgcolor="white" borderRadius="12px" mt={"-50px"} p={"20px"}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={"20px"}>
        <Typography color="lightGrey" component="span">{tasks.filter(task => task.completed == false).length} tasks left</Typography>
        <Button onClick={handleDeleteTasks} size="large" color='lightGrey' sx={{ textTransform: 'none' }} variant="text">Clear all tasks</Button>
      </Stack>
      <TaskList />
    </Box>
  )
}
