import {Gender} from '@libs/models/search/search-lab.model'

export const getGender = (gender: Gender): string => {
    switch (gender) {
        case Gender.female:
            return 'หญิง'
        case Gender.male:
            return 'ชาย'
        default:
            return 'ทุกเพศ'
    }
}

export const getGenderEnum = (gender: string): Gender => {
    switch (gender) {
        case 'ชาย':
            return Gender.male
        case 'หญิง':
            return Gender.female
        default:
            return Gender.none
    }
}
