import { useState } from "react";

export function useFiltersModal() {
  const [selectedBanckAccountId, setSelectedBanckAccountId] = useState<
    string | null
  >(null);

  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  function handleSelectBankAccount(account: string) {
    setSelectedBanckAccountId((prevState) =>
      prevState === account ? null : account
    );
  }

  function handleChangeYear(step: number) {
    setSelectedYear((prevState) => prevState + step);
  }

  return {
    handleSelectBankAccount,
    selectedBanckAccountId,
    selectedYear,
    handleChangeYear,
  };
}
