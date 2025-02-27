import { Box, Button, Typography } from '@mui/material';

export function Header()
{
  return (
    <Box component="header" className="banner">
      <Typography variant="h1">My Tasks</Typography>
      <Button size="medium" variant="contained">+</Button>
    </Box>
  )
}
