import { IconBank } from '../icons'
import styles from './accountitems.module.css'

const formater = new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR" })

export const AccountsItems = ({ item }) => {

    return (
        <div className={styles.accounts}>
            <div className={styles.account}>
                <IconBank /> {item.bank}
            </div>
            <div className={styles.balance}>
                <p>Saldo</p>
                {formater.format(item.balance)}
            </div>
        </div>
    )
}