import { Box, Typography, Button, Stack } from '@mui/material'

import TaskList from '../TaskList/TaskList'

export default function TasksSection()
{
  return (
    <Box bgcolor="white" borderRadius="12px" mt={"-50px"} p={"20px"}>
      <Stack direction="row" className="tasks-header" justifyContent="space-between" alignItems="center" mb={"20px"}>
        <Typography color="lightGrey" component="span">2 tasks left</Typography>
        <Button size="large" color='lightGrey' sx={{ textTransform: 'none' }} variant="text">Clear all tasks</Button>
      </Stack>
      <TaskList />
    </Box>
  )
}
