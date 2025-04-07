import { createContext, useContext, useState } from "react";

type FiltersContextType = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterPriority: number;
  setFilterPriority: (priority: number) => void;
};

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider = ({ children }: { children: React.ReactNode }) =>
{
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPriority, setFilterPriority] = useState<number>(0);
  return (
    <FiltersContext.Provider value={{
      searchQuery, setSearchQuery,
      filterPriority, setFilterPriority
    }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () =>
{
  const context = useContext(FiltersContext);
  if (!context) throw new Error("useFilters must be used within a FiltersProvider");
  return context;
};
