const CURRENCY_FORMATER = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'usd',
})
export function formatCurrency(price: number) {
    return CURRENCY_FORMATER.format(price)
}