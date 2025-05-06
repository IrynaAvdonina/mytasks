import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, TextField, Chip, Stack, FormLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { priorities } from '../../data/data.ts';
import { addTask, changeTask } from './../../features/tasks/tasksSlice';

type FormDialogProps = {
  open: boolean,
  setOpen: TSetOpen;
  task?: TTask;
};

const CustomFormLabel = ({ children }: { children: React.ReactNode }) => (
  <FormLabel sx={{ mb: '11px' }}>{children}</FormLabel>
);

export default function FormDialog({ open, setOpen, task }: FormDialogProps) {
  const [name, setName] = useState(task?.name || '');
  const [selectedPriority, setSelectedPriority] = useState(task?.priority || 1);
  const [dueDate, setDueDate] = useState<string | undefined>(task?.dueDate || '');

  const dispatch = useDispatch()

  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 1);
  const minDateString = minDate.toISOString().slice(0, 10);

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  const maxDateString = maxDate.toISOString().slice(0, 10);

  useEffect(() => {
    if (!task) {
      setName('');
      setSelectedPriority(1); // Початкове значення для пріоритету
      setDueDate('');
    } else {
      setName(task.name);
      setSelectedPriority(task.priority);
      setDueDate(task.dueDate);
    }
  }, [task]);

  const handleClose = () => {
    setOpen({ open: false });
  };

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { name, date }: { name?: string, date?: string } = Object.fromEntries((formData).entries());
    if (!name || !date) return;
    if (task) {
      dispatch(changeTask({ id: task.id, name, date, selectedPriority }));
    } else {
      dispatch(addTask({ name, date, selectedPriority }));
    }

    handleClose();
  }

  return (
    <Dialog
      open={open}
      onClose={() => setOpen({ open: false })}
      disableEnforceFocus
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: handleCreate,
          sx: {
            borderRadius: '16px',
            padding: '10px 25px'
          }
        }
      }}>
      <DialogTitle align='center'>{task == undefined ? 'NEW TASK' : 'CHANGE TASK'} </DialogTitle>
      <DialogContent sx={{ pb: '10px' }}>
        <Stack direction='column' spacing={3}>
          <FormControl>
            <CustomFormLabel>Task name</CustomFormLabel>
            <TextField
              id="name"
              name="name"
              type="text"
              sx={{ width: '30vw' }}
              variant="outlined"
              size='small'
              required
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <CustomFormLabel> Priority </CustomFormLabel>
            <Stack direction="row" spacing={3}>
              {priorities.map(({ id, label, status }) => (
                <Chip
                  key={id}
                  label={label}
                  variant={selectedPriority === id ? "filled" : "outlined"}
                  color={status}
                  onClick={() => setSelectedPriority(id)}
                  sx={{ fontWeight: 600 }}
                />
              ))}
            </Stack>
          </FormControl>
          <FormControl>
            <CustomFormLabel>Choose date</CustomFormLabel>
            <TextField
              id="date"
              type="date"
              name="date"
              size='small'
              required
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              InputProps={{
                inputProps: {
                  min: minDateString,  // мінімальна дата
                  max: maxDateString,  // максимальна дата через 1 рік
                }
              }}

            />
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between', m: '15px' }}>
        <Button color='error' onClick={handleClose} variant='outlined'>Cancel</Button>
        <Button color='purple' variant='contained' type="submit">Submit</Button>
      </DialogActions>
    </Dialog>
  )
}


