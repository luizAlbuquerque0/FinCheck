import { useState } from "react"
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { useDashboard } from "../../DashboardContext/useDashboard";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";
import { useQuery } from "@tanstack/react-query";

export function useAccountsController(){
  const windowWidth = useWindowWidth();
  const {areValuesVisible, toogleValuesVisibility, openNewAccountModal} = useDashboard();

  const[sliderStates, setSliderStates] = useState({
    isBeginning: false,
    isEnd: false
  })

  const {data = [], isFetching} = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: () => {
      return bankAccountsService.getAll();
    }
  })

  return{
    setSliderStates,
    sliderStates,
    windowWidth, 
    toogleValuesVisibility,
    areValuesVisible ,
    isLoading: isFetching,
    accounts: data,
    openNewAccountModal
  }
}