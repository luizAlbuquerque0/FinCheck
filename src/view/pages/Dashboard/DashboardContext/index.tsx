import { createContext, useCallback, useState } from "react";

interface DashboardContextValuess {
  areValuesVisible: boolean;
  toogleValuesVisibility: () => void;
  isNewAccountModalOpen: boolean;
  openNewAccountModal: () => void;
  closeNewAccountModal: () => void;
}

export const DasboardContext = createContext({} as DashboardContextValuess);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);

  const toogleValuesVisibility = () => {
    setAreValuesVisible((prev) => !prev);
  };

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  return (
    <DasboardContext.Provider
      value={{
        areValuesVisible,
        toogleValuesVisibility,
        isNewAccountModalOpen,
        closeNewAccountModal,
        openNewAccountModal,
      }}
    >
      {children}
    </DasboardContext.Provider>
  );
}
