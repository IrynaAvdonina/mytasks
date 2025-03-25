import { Divider, Stack } from '@mui/material';

import TaskItem from './../TaskItem/TaskItem';
import { TTask } from './../../data/data';
import { useTasks } from '../../TasksContext';

const TaskList = () =>
{
  const { tasks } = useTasks();
  return (
    <Stack spacing={2} divider={<Divider orientation="horizontal" />}>
      {
        tasks.map((task: TTask) => (
          <TaskItem key={task.id}
            id={task.id}
            completed={task.completed}
            priority={task.priority}
            name={task.name}
            dueDate={task.dueDate} />
        ))
      }
    </Stack>
  );
}

export default TaskList;