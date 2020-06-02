import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import {defineCustomElements,applyPolyfills} from 'app-component/loader'
import '../src/loader'
import GlobalStyle from '../src/components/elements/global-style'
import StoreProvider from '../src/store/StoreProvider'


export default class extends App {

    componentDidMount(){
        applyPolyfills().then(() => {
            defineCustomElements();
        })
    }

    render() {
        const {Component, pageProps} = this.props
        return (
            <>
                <Head>
                    <title>Nattapol Chitinsiyanon</title>
                </Head>
                <StoreProvider>
                    <GlobalStyle/>
                    <Component {...pageProps} />
                </StoreProvider>
            </>
        )
    }
}
