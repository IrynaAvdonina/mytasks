import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, TextField, Chip, Stack, FormLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import { priorities } from './../../data/data.ts'
import { useTasks } from '../../contexts/TasksContext.tsx';

type CreateFormDialogProps = {
  open: boolean,
  setOpen: TSetOpen;
  task?: TTask;

};

const CustomFormLabel = ({ children }: { children: React.ReactNode }) => (
  <FormLabel sx={{ mb: '11px' }}>{children}</FormLabel>
);

export default function CreateFormDialog({ open, setOpen, task }: CreateFormDialogProps)
{
  const [name, setName] = useState(task?.name || '');

  const [selectedPriority, setSelectedPriority] = useState(task?.priority || 1);
  const [dueDate, setDueDate] = useState<string | undefined>(task?.dueDate || '');
  const { setTasks } = useTasks();

  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 1);  // додаємо 1 рік
  const minDateString = minDate.toISOString().split('T')[0];

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);  // додаємо 1 рік
  const maxDateString = maxDate.toISOString().split('T')[0];

  useEffect(() =>
  {
    if (!task)
    {
      setName('');
      setSelectedPriority(1); // Початкове значення для пріоритету
      setDueDate('');
    } else
    {
      setName(task.name);
      setSelectedPriority(task.priority);
      setDueDate(task.dueDate);
    }
  }, [task]); // Залежність від task

  const handleClick = (id: number) =>
  {
    setSelectedPriority(id);
  };

  const handleClose = () =>
  {
    setOpen({ open: false });
  };

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) =>
  {

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { name, date } = Object.fromEntries((formData).entries()) as { name?: string, date?: string };
    if (!name || !date) return;
    setTasks(prev =>
    {
      if (task)
      {
        return prev.map(t => (t.id === task.id ? { ...t, name: name, priority: selectedPriority, dueDate: date } : t));

      } else
      {
        const newId = prev.length > 0 ? Math.max(...prev.map(task => task.id)) + 1 : 1;

        return [{ id: newId, name: name.toString(), priority: +selectedPriority, dueDate: date.toString(), completed: false }, ...prev];
      }
    });
    handleClose();
  }


  return (
    <Dialog
      open={open}
      onClose={handleClose}
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
      }}
    >
      <DialogTitle align='center'>NEW TASK</DialogTitle>
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
                  onClick={() => handleClick(id)}
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
        <Button color='purple' variant='contained' type="submit">Create</Button>
      </DialogActions>
    </Dialog>
  )
}


