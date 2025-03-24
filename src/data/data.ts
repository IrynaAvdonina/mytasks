export type TPriorities = {
  id: number,
  label: string,
  status: "error" | "warning" | "success",
  color: string
};

export const priorities: TPriorities[] = [
  { id: 1, label: "High", status: "error", color: 'red' },
  { id: 2, label: "Medium", status: "warning", color: "orange" },
  { id: 3, label: "Low", status: "success", color: "green" }
];
export type TTask = {
  id: number,
  completed: boolean,
  name: string,
  priority: number,
  dueDate?: string
}

export const tasks: TTask[] = [
  {
    id: 1,
    completed: false,
    name: "Drink 8 glasses of water",
    dueDate: "13/03/2025",
    priority: 1,
  },
  {
    id: 2,
    completed: true,
    name: "Read 30 pages jhgfd xcgvb hjn km, kjh gfv",
    dueDate: "13/04/2025",
    priority: 3,
  },
  {
    id: 3,
    completed: true,
    name: "s jhgfd xcgvb hjn km, kjh gfv",
    dueDate: "13/05/2025",
    priority: 2,
  }
]

/*export const categories: { id: number, label: string }[] = [
  { id: 1, label: 'Sport' },
  { id: 2, label: 'Personal' },
  { id: 3, label: 'Work' },
  { id: 4, label: 'Family' }
];*/