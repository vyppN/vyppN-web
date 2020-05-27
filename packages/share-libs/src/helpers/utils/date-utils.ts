// @ts-ignore
import moment from './time'

export const getDateString = (timestamp: number): string => {
    if (!timestamp) return null
    return moment(timestamp).toDate().toLocaleDateString('th-TH', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
}

export const getDateStringWithWeekDay = (timestamp: number): string => {
    if (!timestamp) return null
    return moment(timestamp).toDate().toLocaleDateString('th-TH', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
}

export const getShortMonthAndYear = (timestamp: number): string => {
    if (!timestamp) return null
    return moment(timestamp).toDate().toLocaleDateString('th-TH', {

        month: 'short',
        year: 'numeric',
    })
}

export const getShortDateTime = (timestamp: number): string => {
    return moment(timestamp).toDate().toLocaleDateString('th-TH', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}

export const getTime = (timestamp: number): string => {
    return moment(timestamp).format('HH:mm')
}

export const fromNow = (timestamp: number): string => {
    return moment(timestamp).fromNow()
}

export const isToday = (timestamp: number): boolean => {
    return moment(timestamp).isSame(new Date(), 'day')
}
