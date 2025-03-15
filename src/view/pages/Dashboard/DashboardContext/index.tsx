import { createContext, useState } from "react";

interface DashboardContextValuess {
  areValuesVisible: boolean;
  toogleValuesVisibility: () => void;
}

export const DasboardContext = createContext({} as DashboardContextValuess);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const toogleValuesVisibility = () => {
    setAreValuesVisible((prev) => !prev);
  };

  return (
    <DasboardContext.Provider
      value={{ areValuesVisible, toogleValuesVisibility }}
    >
      {children}
    </DasboardContext.Provider>
  );
}
