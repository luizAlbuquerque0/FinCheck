import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { DatePickerInput } from "../../../../components/DatePickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewTransactionModal } from "./useNewTransactionModal";

export function NewTransactionModal() {
  const {
    isNewTransactionModalOpen,
    newTransactionType,
    closeNewTransactionModal,
  } = useNewTransactionModal();

  const isExpense = newTransactionType === "EXPENSE";

  return (
    <Modal
      open={isNewTransactionModalOpen}
      title={!isExpense ? "Nova Receita" : "Nova Despesa"}
      onClose={closeNewTransactionModal}
    >
      <form action="">
        <div>
          <span className="tracking-[-0.5px] text-gray-600 text-xs">
            Valor {isExpense ? "da despesa" : "da receita"}
          </span>

          <div className="flex items-center gap-2">
            <span className="tracking-[-0.5px] text-gray-600 text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={isExpense ? "Nome da despesa" : "Nome da receita"}
          />

          <Select
            placeholder="Categoria"
            options={[
              { label: "Investimentos", value: "INVESTMENT" },
              { label: "Conta Poupança", value: "savings_account" },
              { label: "Carteira", value: "wallet" },
            ]}
          />
          <Select
            placeholder={isExpense ? "Pagar com" : "Receber com"}
            options={[
              { label: "Investimentos", value: "INVESTMENT" },
              { label: "Conta Poupança", value: "savings_account" },
              { label: "Carteira", value: "wallet" },
            ]}
          />

          <DatePickerInput />
        </div>
      </form>
    </Modal>
  );
}
