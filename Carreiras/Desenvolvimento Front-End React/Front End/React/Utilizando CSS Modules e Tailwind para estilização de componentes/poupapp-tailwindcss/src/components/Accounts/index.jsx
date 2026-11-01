import { AccountsItems } from "../AccountsItems";

export const Accounts = () => {
  return (
    <div className="flex flex-col gap-4 py-6 mb-6">
      <AccountsItems account={"Anybank"} balance={1200} />
      <hr className="text-neutral-header" />
      <AccountsItems account={"Bytebank"} balance={800} />
      <hr className="text-neutral-header" />
      <AccountsItems account={"Switch Bank"} balance={1800} />
    </div>
  );
};
