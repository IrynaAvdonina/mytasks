import { Box, Checkbox, Chip, Divider, IconButton, Stack, Typography } from '@mui/material';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const TaskList = () =>
{
  return (
    <Stack spacing={2} divider={<Divider orientation="horizontal" />}>
      <Stack direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Stack direction="row" alignItems="center">
          <Checkbox checked={false} />
          <Typography component="span">Drink 8 glasses of water</Typography>
        </Stack>

        <Chip label="High" color="error" variant="outlined" sx={{ border: "2px solid red" }} />

        <Typography component="span">13/03/2025</Typography>
        <Box component="span">
          <IconButton><EditOutlinedIcon /></IconButton>
          <IconButton><DeleteOutlinedIcon /></IconButton>
        </Box>
      </Stack>
      <Stack direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Stack direction="row" alignItems="center">
          <Checkbox checked={false} />
          <Typography component="span">Drink 8 glasses of water</Typography>
        </Stack>

        <Chip label="High" color="error" variant="outlined" />

        <Typography component="span">13/03/2025</Typography>
        <Box component="span">
          <IconButton><EditOutlinedIcon /></IconButton>
          <IconButton><DeleteOutlinedIcon /></IconButton>
        </Box>
      </Stack>
    </Stack>
  );
}

/*  */

export default TaskList;