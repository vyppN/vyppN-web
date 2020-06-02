import StoreProvider from '@libs/store/StoreProvider'
import React from 'react'
import {Path} from '~/enums/path'
import {setPage} from '~/modules/page/actions'
import {PAGE_MODULE, SET_PAGE} from '~/modules/page/constants'
import pageReducer from '~/modules/page/reducers'

export default (props: { children: any }) => {
    return (
        <StoreProvider
            sagas={[
            ]}
            reducers={{
                [PAGE_MODULE]:pageReducer
            }}
            onInit={dispatch => {
                dispatch(setPage(Path.home))
            }}
        >
            {props.children}
        </StoreProvider>
    )
}
