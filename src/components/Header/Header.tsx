import { Box, Container, Fab, Stack, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SearchFilter from './../SearchFilter/SearchFilter.tsx';
type HeaderProps = {
  setOpen: (open: boolean) => void
}

export function Header({ setOpen }: HeaderProps)
{
  return (
    <Box component="header" height={"calc(40vh + 50px)"} sx={{
      background: "linear-gradient(to right, #AE05D0 0%, #594D9D 50%, #4B89FC 100%)",
    }}>
      <Container maxWidth="md" sx={{ pt: 12 }}>
        <Stack direction="row" sx={{ pb: 6 }} justifyContent="space-between">
          <Typography fontWeight="500" letterSpacing="0.1em" textTransform="uppercase" variant="h3" component="h1" color="white" >My Tasks</Typography>
          <Fab onClick={() => setOpen(true)} color="default" aria-label="add" size="medium" variant="extended" sx={{ boxShadow: "none", borderRadius: "12px", py: "14px", height: "fit-content" }}>
            <AddOutlinedIcon />
          </Fab>
        </Stack>
        <SearchFilter />
      </Container>
    </Box>
  )
}
