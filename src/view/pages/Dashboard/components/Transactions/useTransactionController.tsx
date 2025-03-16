import { useState } from "react";
import { useDashboard } from "../../DashboardContext/useDashboard";

export function useTransactionController() {
  const { areValuesVisible, toogleValuesVisibility } = useDashboard();

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(true);

  function handleOpenFiltersModal() {
    setIsFiltersModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFiltersModalOpen(false);
  }

  return {
    areValuesVisible,
    toogleValuesVisibility,
    isInitialLoading: false,
    isLoading: true,
    transactions: [],
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  };
}
