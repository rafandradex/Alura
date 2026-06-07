import styles from "./transactionitem.module.css";

const formater = new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR" })

export const TransactionItem = ({ item }) => {
    
    const detailsAddictionalClassName = item.value >= 0 ? styles.income : styles.expense

  return (
    <div className={styles.transaction}>
      <div className={[styles.details, detailsAddictionalClassName].join(' ')}>
        <p>{item.description}</p>
        <p>{formater.format(item.value)}</p>
      </div>
      <div className={styles.date}>{new Date(item.date).toLocaleDateString('pt-PT')}</div>
    </div>
  );
};
