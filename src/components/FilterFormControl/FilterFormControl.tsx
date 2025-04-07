import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useFilters } from '../../contexts/FiltersContext';

type FilterFormControlProps = {
  name: string,
  options: { id: number | string; label: string }[];
  labelId: string,
  inputId: string
}
const FilterFormControl = ({ name, options, labelId, inputId }: FilterFormControlProps) =>
{
  const [choice, setChoice] = useState<string>('');
  const { setFilterPriority } = useFilters();
  const handleChange = (event: SelectChangeEvent) =>
  {
    setChoice(event.target.value as string);

    if (event.target.value)
    {
      setFilterPriority(+event.target.value === 0 ? 0 : +event.target.value);
    }
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
        <MenuItem value="0">
          <em>None</em>
        </MenuItem>
        {options.map(({ id, label }) =>
          <MenuItem key={id} value={id}>{label}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
}
export default FilterFormControl;