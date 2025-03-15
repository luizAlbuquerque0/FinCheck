import { useDashboard } from "../../DashboardContext/useDashboard";

export function useTransactionController() {
  const { areValuesVisible, toogleValuesVisibility } = useDashboard();
  return {
    areValuesVisible,
    toogleValuesVisibility,
  };
}
