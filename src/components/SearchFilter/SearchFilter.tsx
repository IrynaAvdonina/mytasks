import { useState } from 'react';
import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { priorities, /*categories*/ } from './../../data/data.ts';
//import { useTasks } from '../../TasksContext.tsx';


type TFilterFormControl = {
  name: string,
  options: { id: number | string; label: string }[];
  labelId: string,
  inputId: string
}
const FilterFormControl = ({ name, options, labelId, inputId }: TFilterFormControl) =>
{
  const [choice, setChoice] = useState<string>('');
  //const { setTasks } = useTasks();

  const handleChange = (event: SelectChangeEvent) =>
  {
    setChoice(event.target.value as string);
  };
  return (
    <FormControl
      variant="filled"
      sx={{ m: 1, minWidth: 220 }}
      size="small">
      <InputLabel
        id={labelId}>{name}</InputLabel>
      <Select onChange={handleChange} disableUnderline
        sx={{
          borderRadius: "12px",
          '&.MuiSelect-root': {
            backgroundColor: 'white',
          },
        }}
        labelId={labelId}
        id={inputId}
        value={choice}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map(({ id, label }) =>
          <MenuItem key={id} value={id}>{label}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
}
const SearchFilter = () =>
{

  return (
    <Stack direction="row" alignItems="center" justifyContent={"space-between"} pb="4">
      <TextField size="small" sx={{ borderRadius: "12px", background: "white", flex: 2 }} type="search" placeholder="Search task..." slotProps={{
        input: {
          endAdornment: (
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
          ),
        },
      }} />
      {/* <FilterFormControl options={categories} name="By category" labelId="select-label-category" inputId='select-category' /> */}
      <FilterFormControl options={priorities} name="By priority" labelId="select-label-priority" inputId='select-priority' />
    </Stack>
  );
}

export default SearchFilter;