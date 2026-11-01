import { IconBank } from "../icons";

const formatter = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
});

export const AccountsItems = ({ account, balance }) => {
  return (
    <div className="flex justify-between ">
      <div>
        <p className="flex items-center gap-2 text-[15px] leading-[120%] text-neutral-text font-bold">
          <IconBank /> {account}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[15px] leading-[120%] text-neutral-text font-bold">
          Saldo
        </p>
        <p className="text-[15px] leading-[125%] text-neutral-text">
          {formatter.format(balance)}
        </p>
      </div>
    </div>
  );
};
