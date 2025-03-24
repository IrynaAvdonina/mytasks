import { Divider, Stack } from '@mui/material';

import TaskItem from './../TaskItem/TaskItem';
import { TTask } from './../../data/data';

type TaskListProps = {
  tasks: TTask[],
  setTasks: React.Dispatch<React.SetStateAction<TTask[]>>;
}
const TaskList = ({ tasks, setTasks }: TaskListProps) =>
{
  return (
    <Stack spacing={2} divider={<Divider orientation="horizontal" />}>
      {
        tasks.map((task: TTask) => (
          <TaskItem key={task.id}
            id={task.id}
            completed={task.completed}
            priority={task.priority}
            name={task.name}
            dueDate={task.dueDate}
            setTasks={setTasks} />
        ))
      }
    </Stack>
  );
}

export default TaskList;