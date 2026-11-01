const formatter = new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR'
})

export const DailyBudget = ({value}) => {
    return (
        <p className="m-o text-primary-highlight font-bold text-[39px] leading-[125%] text-center">
            {formatter.format(value)}
        </p>
    )
}