import { PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { Expense } from "../../../../components/icons/categories/expense/Expense";
import { Income } from "../../../../components/icons/categories/income/Income";
import { BankAccountIcon } from "../../../../components/icons/BankAccountIcon";
import { useDashboard } from "../../DashboardContext/useDashboard";

export function Fab() {
  const { openNewAccountModal } = useDashboard();

  return (
    <div className="fixed bottom-4 right-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className=" bg-teal-900 h-12 w-12 rounded-full flex items-center justify-center text-white">
            <PlusIcon className="w-6 h-6" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item className="gap-2">
            <Expense />
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            <Income />
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2" onSelect={openNewAccountModal}>
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
