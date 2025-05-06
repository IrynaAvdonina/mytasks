import { Box, Checkbox, Chip, IconButton, Stack, SxProps, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch } from 'react-redux';

import { priorities } from './../../data/data';
import { deleteTask, toggleTask } from '../../features/tasks/tasksSlice';

const FlexBox = ({ children, sx }: {
  children: React.ReactNode;
  sx?: SxProps;
}) => (
  <Box sx={{ flex: 1, minWidth: "100px", display: "flex", ...sx }}>{children}</Box>
);//?? extract 

interface TTaskItem extends TTask {
  setOpen: TSetOpen;
}

export default function TaskItem({ id, completed, name, priority, dueDate, setOpen }: TTaskItem) {
  const dispatch = useDispatch();
  const today = new Date().toISOString().split('T')[0];

  const priorityData: TPriorities | undefined = priorities.find(p => p.id === priority);

  const handleChange = () => {
    dispatch(toggleTask({ id }));
  }
  const handleDelete = () => {
    dispatch(deleteTask({ id }));
  }

  return (
    <Stack direction="row" alignItems="center" sx={{
      textDecoration: completed ? 'line-through' : 'none',
      color: completed ? 'grey' : 'inherit',
    }}>
      <Stack direction="row" alignItems="center"
        sx={{ flex: 2, minWidth: "40%" }}>
        <Checkbox checked={completed || false} onChange={handleChange} />

        <Typography
          component="span"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? 'grey' : 'inherit',
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
              border: `1px solid ${completed ? 'grey' : priorityData.color}`,
              color: completed ? 'grey' : priorityData.color
            }} />
        )}
      </FlexBox>

      <FlexBox sx={{ justifyContent: "center" }}>
        {dueDate && (
          <Typography component="span" color={today > dueDate && !completed ? 'error' : 'inherit'}>{dueDate}</Typography>)}{/*змінити перевірку*/}
      </FlexBox>

      <FlexBox sx={{ justifyContent: "flex-end" }}>
        <IconButton onClick={() => setOpen({ open: true, task: { id, name, priority, dueDate, completed } })}
          aria-label="Edit task">
          <EditOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleDelete} aria-label="Delete task"><DeleteOutlinedIcon /></IconButton>
      </FlexBox>
    </Stack>

  )
}
