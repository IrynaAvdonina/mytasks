import { createContext, useContext, useState, ReactNode } from "react";
import { TTask, tasks as tasksData } from "../data/data";

type TasksContextType = {
  tasks: TTask[];
  setTasks: React.Dispatch<React.SetStateAction<TTask[]>>;
};

const TasksContext = createContext<TasksContextType | null>(null);
export const useTasks = () =>
{
  const context = useContext(TasksContext);
  if (!context)
  {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

export const TasksProvider = ({ children }: { children: ReactNode }) =>
{
  const [tasks, setTasks] = useState<TTask[]>(tasksData);

  return (
    <>
      <TasksContext.Provider value={{ tasks, setTasks }
      }>
        {children}
      </TasksContext.Provider>
    </>
  );
};
