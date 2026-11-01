const formatter = new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR'
})

const COLOR_NAME = {
    income: 'text-secondary-income text-[15px] leading-[120%] flex flex-col gap-2',
    expense: 'text-secondary-expense text-[15px] leading-[120%] flex flex-col gap-2'
}

export const TransactionItem = ({ destinatario, valor, data }) => {

    const movement = valor < 0 ? "expense" : "income"
    const classname = COLOR_NAME[movement]
    return (
        <div className="flex justify-between">
            <div className={classname}>
                <p className="font-bold">{destinatario}</p>
                <p>{formatter.format(valor)}</p>
            </div>
            <div>
                <p className="text-neutral-text text-[15px]">{data}</p>
            </div>
        </div>
    )
}