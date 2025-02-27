import { IconButton, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchFilter = () =>
{
  return (
    <>
      <TextField type="search" placeholder="Search task..." InputProps={{
        endAdornment: (
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
        ),
      }} />
    </>
  );
}

export default SearchFilter;