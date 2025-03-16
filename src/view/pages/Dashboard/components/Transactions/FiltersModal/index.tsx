import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../../components/Modal";
import { Button } from "../../../../../components/Button";
import { useFiltersModal } from "./useFiltersModal";
import { cn } from "../../../../../../app/utils/cn";

interface FiltersModalProps {
  open: boolean;
  onClose: () => void;
}

const mockedBankAccounts = [
  { id: "1", name: "Nubank" },
  { id: "2", name: "Xp Investimento" },
  { id: "3", name: "Dinheiro" },
];

export function FiltersModal({ open, onClose }: FiltersModalProps) {
  const {
    selectedBanckAccountId,
    handleSelectBankAccount,
    selectedYear,
    handleChangeYear,
  } = useFiltersModal();

  return (
    <Modal open={open} title="Filtros" onClose={onClose}>
      <div>
        <span className="text-lg font-bold tracking-[-1px] text-gray-800">
          Conta
        </span>

        <div className="space-y-2 mt-2">
          {mockedBankAccounts.map((banckAccount) => (
            <button
              key={banckAccount.id}
              onClick={() => handleSelectBankAccount(banckAccount.id)}
              className={cn(
                "p-2 rounded-2xl w-full text-left text-gray-800 hover:bg-gray-50 transition-colors",
                selectedBanckAccountId === banckAccount.id && "!bg-gray-200"
              )}
            >
              {banckAccount.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 text-gray-800 ">
        <span className="text-lg font-bold tracking-[-1px] ">Ano</span>

        <div className="mt-2 w-52 flex items-center">
          <button
            className="w-12 h-12 flex justify-center items-center "
            onClick={() => handleChangeYear(-1)}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <div className="flex-1 text-center justify-between">
            <span className="text-sm tracking-[-0.5px] font-medium">
              {selectedYear}
            </span>
          </div>

          <button
            className="w-12 h-12 flex justify-center items-center "
            onClick={() => handleChangeYear(1)}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <Button className="w-full mt-10">Aplicar filtros</Button>
    </Modal>
  );
}
