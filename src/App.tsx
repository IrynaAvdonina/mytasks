import TasksSection from './components/TasksSection/TasksSection.tsx';
import FormDialog from './components/FormDialog/FormDialog.tsx';
import { useState } from 'react';
import Layout from './Layout.tsx';
import AppProviders from './AppProviders';

function App() {
  const [open, setOpen] = useState<{ open: boolean; task?: TTask }>({ open: false, task: undefined });

  return (
    <AppProviders>
      <Layout setOpen={setOpen}>
        <TasksSection setOpen={setOpen} />
      </Layout>
      <FormDialog open={open.open} setOpen={setOpen} task={open.task} />
    </AppProviders>
  )
}

export default App;