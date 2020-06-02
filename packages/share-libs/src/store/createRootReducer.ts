import { combineReducers } from 'redux'

export default (reducers: { [name: string]: any }) => {
    return combineReducers(reducers)
}
