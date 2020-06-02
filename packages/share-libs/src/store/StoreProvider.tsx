import React, {useEffect, useState} from 'react'
import {Provider, useDispatch} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './createRootReducer'
import createRootSaga from './createRootSaga'

export default (props: {
    sagas: any[],
    reducers: { [name: string]: any },
    onInit: (dispatch) => void, children: any
}) => {
    const [store, setStore] = useState<any>()

    useEffect(() => {
        const saga = createSagaMiddleware()
        const middleware = applyMiddleware(saga, logger)
        const rootReducer = createRootReducer(props.reducers)
        const rootSaga = createRootSaga(props.sagas)
        const store = createStore(rootReducer, undefined, middleware)
        saga.run(rootSaga)
        setStore(store)
    }, [])
    if (!store) return null

    return (<Provider store={store}>
        <Inner onInit={props.onInit}>
            {props.children}
        </Inner>
    </Provider>)
}

const Inner = (props: {
    children: any,
    onInit: (dispatch) => void
}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        props.onInit(dispatch)
    }, [])
    return props.children
}
