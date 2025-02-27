import { Checkbox, Chip, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';

import { Edit, Delete } from '@mui/icons-material';

const TaskList = () =>
{
  return (
    <TableContainer>
      {/* <Typography variant="h6" sx={{ p: 2 }}>
        3 tasks left
      </Typography> */}
      <Table>
        <TableBody>

          <TableRow >
            <TableCell>
              <Checkbox checked={false} />
              <Typography component="span">Drink 8 glasses of water</Typography>
            </TableCell>
            <TableCell  >
              <Chip label="High" color="error" variant="outlined" />
            </TableCell>
            <TableCell>13/03/2025</TableCell>
            <TableCell align="right">
              <IconButton><Edit /></IconButton>
              <IconButton><Delete /></IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

/*  */

export default TaskList;