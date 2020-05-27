export const validateEmail = (email: string): boolean => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

export const calculateThaiID = (id: string): boolean => {
    let sum = 0
    for (let i = 0; i < 12; i++)
        sum += Number(id.charAt(i)) * (13 - i)

    return (11 - sum % 11) % 10 === Number(id.charAt(12))
}

export const validateIDCard = (id: string): boolean => {
    const validCount = /^\d{13}/.test(id)
    const validId = calculateThaiID(id)
    return validCount && validId
}

export const validatePhone = (phone: string): boolean => {
    if (phone === '') return false
    return /^[+]{0,1}[-\s\./0-9]{9,13}$/.test(phone)
}
