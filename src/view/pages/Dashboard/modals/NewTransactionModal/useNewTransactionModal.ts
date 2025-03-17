import { useDashboard } from "../../DashboardContext/useDashboard";

export function useNewTransactionModal(){

  const {isNewTransactionModalOpen,newTransactionType ,closeNewTransactionModal} = useDashboard();

  return{
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType
  }
}