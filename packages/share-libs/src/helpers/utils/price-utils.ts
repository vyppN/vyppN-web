const formatter = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',

})

export const formatPrice = (price: number, rightCurrencySymbol = false) => {
    const formattedPrice = formatter.format(price).replace(/\D00$/, '')
    if (rightCurrencySymbol)
        return `${formattedPrice.replace('฿', '')} ฿`
    return formattedPrice.replace('฿', '฿ ')
}

export const formatPriceNoSymbol = (price: number) => {
    const _price = formatPrice(price)
    return _price.replace('฿', '').trim()
}

export const formatPriceThaiString = (price: number) => {
    return formatPrice(price).replace('฿ ', '') + ' บาท'
}
