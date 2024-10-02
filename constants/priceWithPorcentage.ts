
interface PriceWithporcentageProps{
    props: {
        price: number
        installments: number
        percentage: number
    }
}

export const priceWithporcentage = ({props}: PriceWithporcentageProps) => {
    const pricePerInstallment = (props.price / props.installments)
    const percentagePerPrice = (pricePerInstallment * props.percentage) / 100 
    return (pricePerInstallment + percentagePerPrice).toFixed(2)
}