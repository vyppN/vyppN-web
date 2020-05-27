import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import {defineCustomElements,applyPolyfills} from 'app-component/loader'
import '../src/loader'


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
                <Component {...pageProps} />
            </>
        )
    }
}
