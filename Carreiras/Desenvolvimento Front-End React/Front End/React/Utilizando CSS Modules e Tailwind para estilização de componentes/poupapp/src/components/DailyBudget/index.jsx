import styles from './dailybudget.module.css'

const formater = new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR" })

export const DailyBudget = ({ value }) => {

    return (
        <p className={styles.dailybudget}>{formater.format(value)}</p>
    )
}