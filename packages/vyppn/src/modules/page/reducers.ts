import {createReducer} from '@reduxjs/toolkit'
import {Path} from '~/enums/path'
import {SET_PAGE} from '~/modules/page/constants'
import {PageState} from '~/modules/page/state'

const initialState = {
    page:null
} as PageState

const setPage = (state:PageState,action)=>{
    state.page = action.payload
}

export default createReducer(initialState, {
    [SET_PAGE]:setPage,
})
