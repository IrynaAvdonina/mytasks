import { useEffect, useState } from 'react';
import { Stack, TextField } from '@mui/material';

import { priorities, /*categories*/ } from './../../data/data.ts';
import FilterFormControl from './../FilterFormControl/FilterFormControl.tsx';
import { useFilters } from '../../contexts/FiltersContext.tsx';


const SearchFilter = () => {
  const { setSearchQuery } = useFilters();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSearchQuery(searchValue);
  }, [searchValue]); //setSearchQuery перевірити

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <Stack direction="row" alignItems="center" justifyContent={"space-between"} pb="4">
      <TextField
        size="small"
        sx={{ borderRadius: "12px", background: "white", flex: 2 }}
        type="search"
        placeholder="Search task..."
        onChange={handleChange}
        value={searchValue}
      />
      {/* <FilterFormControl options={categories} name="By category" labelId="select-label-category" inputId='select-category' /> */}
      <FilterFormControl options={priorities} name="By priority" labelId="select-label-priority" inputId='select-priority' />
    </Stack>
  );
}

export default SearchFilter;