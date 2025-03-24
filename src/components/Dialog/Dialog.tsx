import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, TextField, Chip, Stack, FormLabel } from '@mui/material';
import { useState } from 'react';
import { priorities } from './../../data/data.ts'

type CreateFormDialogProps = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomFormLabel = ({ children }: { children: React.ReactNode }) => (
  <FormLabel sx={{ mb: '11px' }}>{children}</FormLabel>
);

export default function CreateFormDialog({ open, setOpen }: CreateFormDialogProps)
{
  const [selectedPriority, setSelectedPriority] = useState(1);

  const handleClick = (id: number) =>
  {
    setSelectedPriority(id);
  };

  const handleClose = () =>
  {
    setOpen(false);
  };


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
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
              size='small'
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


