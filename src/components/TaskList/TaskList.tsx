import { Divider, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import TaskItem from './../TaskItem/TaskItem';
import { useFilters } from '../../contexts/FiltersContext';
import { RootState } from '../../store';

const TaskList = ({ setOpen }: { setOpen: TSetOpen }) => {
  const tasks = useSelector((state: RootState) => state.tasks);
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