type TSetOpen = React.Dispatch<React.SetStateAction<{ open: boolean; task?: TTask }>>;

type TPriorities = {
  id: number,
  label: string,
  status: "error" | "warning" | "success",
  color: string
};
type TTask = {
  id: string,
  completed: boolean,
  name: string,
  priority: number,
  dueDate: string
}