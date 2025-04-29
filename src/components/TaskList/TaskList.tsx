import { Divider, Stack, Typography } from '@mui/material';
import TaskItem from './../TaskItem/TaskItem';
import { useTasks } from '../../contexts/TasksContext';
import { useFilters } from '../../contexts/FiltersContext';

const TaskList = ({ setOpen }: { setOpen: TSetOpen }) => {
  const { tasks } = useTasks();
  const { filterPriority, searchQuery } = useFilters();

  const filteredTasks: TTask[] = tasks.filter(task => filterPriority !== 0 ? +task.priority === +filterPriority : true)
    .filter(task => task.name.toLowerCase().includes(searchQuery.toLowerCase())); //TODO винести в utils

  return (
    <>
      {
        filteredTasks.length === 0 ? (
          <Typography textAlign="center" color="gray">
            No tasks found(
          </Typography>
        ) : (
          <Stack spacing={2} divider={<Divider orientation="horizontal" />}>
            {
              filteredTasks.map((task: TTask) => (
                <TaskItem key={task.id}
                  {...task}
                  setOpen={setOpen} />
              ))
            }
          </Stack>
        )}
    </>
  )
}

export default TaskList;