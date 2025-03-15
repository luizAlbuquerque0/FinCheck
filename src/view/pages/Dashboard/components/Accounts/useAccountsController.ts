import { useState } from "react"
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { useDashboard } from "../../DashboardContext/useDashboard";

export function useAccountsController(){
  const windowWidth = useWindowWidth();
  const {areValuesVisible, toogleValuesVisibility} = useDashboard();

  const[sliderStates, setSliderStates] = useState({
    isBeginning: false,
    isEnd: false
  })

  return{
    setSliderStates,
    sliderStates,
    windowWidth, 
    toogleValuesVisibility,
    areValuesVisible ,
    isLoading: false,
    accounts: []
  }
}