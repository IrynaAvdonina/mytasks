import { FormControl, IconButton, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

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
      <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }} size="small">
        <InputLabel id="select-label-age">By category</InputLabel>
        <Select disableUnderline sx={{ borderRadius: "12px", background: "white" }} labelId="select-label-age" id="select-age">
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }} size="small">
        <InputLabel id="select-label-age">By priority</InputLabel>
        <Select disableUnderline sx={{ borderRadius: "12px", background: "white" }} labelId="select-label-age" id="select-age">
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export default SearchFilter;