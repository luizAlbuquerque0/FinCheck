import { useContext } from "react";
import { DasboardContext } from ".";

export function useDashboard() {
  return useContext(DasboardContext);
}