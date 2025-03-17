import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewAccountModal } from "./useNewAccountModal";

export function NewAccountModal() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useNewAccountModal();

  return (
    <Modal
      open={isNewAccountModalOpen}
      title="Nova Conta"
      onClose={closeNewAccountModal}
    >
      <form action="">
        <div>
          <span className="tracking-[-0.5px] text-gray-600 text-xs">Saldo</span>

          <div className="flex items-center gap-2">
            <span className="tracking-[-0.5px] text-gray-600 text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input type="text" name="name" placeholder="Nome da conta" />

          <Select
            placeholder="Tipo"
            options={[
              { label: "Investimentos", value: "INVESTMENT" },
              { label: "Conta Poupança", value: "savings_account" },
              { label: "Carteira", value: "wallet" },
            ]}
          />

          <ColorsDropdownInput />
        </div>
      </form>
    </Modal>
  );
}
