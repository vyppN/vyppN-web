export const getAgeString = (min: number, max: number): string => {
    if (!min && !max) {
        return 'ทุกช่วงอายุ'
    } else if (!max && min) {
        return `อายุ ${min} ปีขึ้นไป`
    } else if (max && !min) {
        return `อายุไม่เกิน ${max} ปี`
    } else {
        return `อายุตั้งแต่ ${min} ปี ถึงอายุ ${max} ปี`
    }
}
