import { useState } from 'react';
import { Box, Checkbox, Chip, IconButton, Stack, SxProps, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { priorities, TPriorities, TTask } from './../../data/data';
import { useTasks } from '../../TasksContext';

const FlexBox = ({ children, sx }: {
  children: React.ReactNode;
  sx?: SxProps;
}) => (
  <Box sx={{ flex: 1, minWidth: "100px", display: "flex", ...sx }}>{children}</Box>
);

export default function TaskItem({ id, completed, name, priority, dueDate }: TTask)
{
  const [checked, setChecked] = useState<boolean>(completed);
  const { setTasks } = useTasks();

  const priorityData: TPriorities | undefined = priorities.find(p => p.id === priority);
  const handleChange = () =>
  {
    setChecked(prev => !prev);
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  const handleDelete = () =>
  {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  return (
    <Stack direction="row" alignItems="center" sx={{
      textDecoration: checked ? 'line-through' : 'none',
      color: checked ? 'grey' : 'inherit',
    }}>
      <Stack direction="row" alignItems="center"
        sx={{ flex: 2, minWidth: "40%" }}>
        <Checkbox checked={checked} onChange={handleChange} />

        <Typography
          component="span"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textDecoration: checked ? 'line-through' : 'none',
            color: checked ? 'grey' : 'inherit',
          }}>
          {name}
        </Typography>
      </Stack>

      <FlexBox sx={{ justifyContent: "center" }}>
        {priorityData && (
          <Chip
            label={priorityData.label}
            variant="outlined"
            sx={{
              border: `1px solid ${checked ? 'grey' : priorityData.color}`,
              color: checked ? 'grey' : priorityData.color
            }} />
        )}
      </FlexBox>

      <FlexBox sx={{ justifyContent: "center" }}>
        {dueDate && (
          <Typography component="span">{dueDate}</Typography>)}
      </FlexBox>

      <FlexBox sx={{ justifyContent: "flex-end" }}>
        <IconButton aria-label="Edit task"><EditOutlinedIcon /></IconButton>
        <IconButton onClick={handleDelete} aria-label="Delete task"><DeleteOutlinedIcon /></IconButton>
      </FlexBox>
    </Stack>

  )
}
