import { useState } from 'react';
import { Box, Checkbox, Chip, IconButton, Stack, SxProps, Typography } from '@mui/material';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { priorities, TPriorities, TTask } from './../../data/data';

const FlexBox = ({ children, sx }: {
  children: React.ReactNode;
  sx?: SxProps;
}) => (
  <Box sx={{ flex: 1, minWidth: "100px", display: "flex", ...sx }}>{children}</Box>
);
interface TaskItemProps extends TTask
{
  setTasks: React.Dispatch<React.SetStateAction<TTask[]>>;
}

export default function TaskItem({ id, completed, name, priority, dueDate, setTasks }: TaskItemProps)
{
  const [checked, setChecked] = useState<boolean>(completed);

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
        <IconButton aria-label="Delete task"><DeleteOutlinedIcon /></IconButton>
      </FlexBox>
    </Stack>

  )
}
