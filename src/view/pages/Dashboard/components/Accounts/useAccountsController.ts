import { useState } from "react"
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";

export function useAccountsController(){
  const windowWidth = useWindowWidth();
  const[sliderStates, setSliderStates] = useState({
    isBeginning: false,
    isEnd: false
  })

  return{
    setSliderStates,
    sliderStates,
    windowWidth
  }
}