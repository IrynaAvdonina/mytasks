import { Box, Typography, Button, Stack } from '@mui/material'
import { TTask } from '../../data/data';
import TaskList from '../TaskList/TaskList'

interface TasksSectionProps
{
  tasks: TTask[];
  setTasks: React.Dispatch<React.SetStateAction<TTask[]>>;
}

export default function TasksSection({ tasks, setTasks }: TasksSectionProps)
{
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
      <TaskList tasks={tasks} setTasks={setTasks} />
    </Box>
  )
}
