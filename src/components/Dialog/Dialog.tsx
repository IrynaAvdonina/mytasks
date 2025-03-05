import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, TextField, Chip, Stack, FormLabel } from '@mui/material';

import { useState } from 'react';

type CreateFormDialogProps = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const priorities = [
  { label: "High", color: "error" },
  { label: "Medium", color: "warning" },
  { label: "Low", color: "success" }
];
export default function CreateFormDialog({ open, setOpen }: CreateFormDialogProps)
{
  const [selectedPriority, setSelectedPriority] = useState("Medium");
  const [date, setDate] = useState("");

  const handleClick = (priority: string) =>
  {
    setSelectedPriority(priority);
  };

  const handleClose = () =>
  {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: '16px',
            borderColor: '#B2B0B0',
          }
        }}
      >
        <DialogTitle align='center'>NEW TASK</DialogTitle>
        <DialogContent>
          <Stack direction='column' spacing={3}>
            <FormControl>
              <FormLabel>Назва</FormLabel>
              <TextField
                id="name"
                name="name"
                type="text"
                sx={{ width: '30vw' }}
                variant="outlined"
                size='small'
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ mb: 1 }}>
                Пріоритет
              </FormLabel>
              <Stack direction="row" spacing={3}>
                {priorities.map(({ label, color }) => (
                  <Chip
                    key={label}
                    size={'medium'}
                    label={label}
                    variant={selectedPriority === label ? "filled" : "outlined"}
                    color={color as "error" | "warning" | "success"}
                    onClick={() => handleClick(label)}
                    sx={{ fontWeight: 600 }}
                  />
                ))}
              </Stack>
            </FormControl>
            <Stack spacing={1}>
              <FormLabel>Оберіть дату</FormLabel>
              <TextField
                type="date"
                value={date}
                size='small'
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'space-between', m: '0 20px 20px' }}>
          <Button color='error' onClick={handleClose} variant='outlined'>Cancel</Button>
          <Button color='primary' variant='contained' type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}


