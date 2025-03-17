import { createContext, useCallback, useState } from "react";

interface DashboardContextValuess {
  areValuesVisible: boolean;
  toogleValuesVisibility: () => void;
  isNewAccountModalOpen: boolean;
  openNewAccountModal: () => void;
  closeNewAccountModal: () => void;
  isNewTransactionModalOpen: boolean;
  openNewTransactionModa: (type: "INCOME" | "EXPENSE") => void;
  closeNewTransactionModal: () => void;
  newTransactionType: "INCOME" | "EXPENSE" | null;
}

export const DasboardContext = createContext({} as DashboardContextValuess);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [newTransactionType, setNewTransactionType] = useState<
    "INCOME" | "EXPENSE" | null
  >(null);
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const toogleValuesVisibility = () => {
    setAreValuesVisible((prev) => !prev);
  };

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  const openNewTransactionModa = useCallback((type: "INCOME" | "EXPENSE") => {
    setNewTransactionType(type);
    setIsNewTransactionModalOpen(true);
  }, []);

  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <DasboardContext.Provider
      value={{
        areValuesVisible,
        toogleValuesVisibility,
        isNewAccountModalOpen,
        closeNewAccountModal,
        openNewAccountModal,
        isNewTransactionModalOpen,
        openNewTransactionModa,
        closeNewTransactionModal,
        newTransactionType,
      }}
    >
      {children}
    </DasboardContext.Provider>
  );
}
