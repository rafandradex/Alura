import { TransactionItem } from "../TransactionItem";

export const Transaction = () => {
  return (
    <div className="flex flex-col gap-4 py-6 mb-6">
      <TransactionItem destinatario={"Ifood"} valor={-20} data={"01/10/2024"} />
      <hr className="text-neutral-header" />
      <TransactionItem
        destinatario={"Papelaria Mila"}
        valor={-80}
        data={"03/10/2024"}
      />
      <hr className="text-neutral-header" />
      <TransactionItem
        destinatario={"Freela (2ª parte)"}
        valor={1000}
        data={"03/10/2024"}
      />
      <hr className="text-neutral-header" />
      <TransactionItem
        destinatario={"Megazine Luiza"}
        valor={-300}
        data={"05/10/2024"}
      />
    </div>
  );
};
