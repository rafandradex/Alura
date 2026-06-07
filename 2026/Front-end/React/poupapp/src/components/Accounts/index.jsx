import { AccountsItems } from "../AccountsItems";
import { Button } from "../Button";
import { IconWallet } from "../icons";
import styles from "./accounts.module.css";

const items = [
  { bank: "Anybank", balance: 1200 },
  { bank: "Bytebank", balance: 800 },
  { bank: "Switch Bank", balance: 1800 },
];

export const Accounts = () => {
  return (
    <>
      <ul className={styles.lista}>
        {items.map((accountsItems, index) => {
          return (
            <li key={index}>
              <AccountsItems item={accountsItems} />
            </li>
          );
        })}
      </ul>

      <div className={styles.actions}>
        <Button>
          <IconWallet /> Adicionar conta
        </Button>
      </div>
    </>
  );
};
