// const withSass = require('@zeit/next-sass')
// const withCSS = require('@zeit/next-css')
const withTranspileModule = require('next-transpile-modules')
// const withImages = require('next-images')
//
// const envPath = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev'
// require('dotenv').config({path: envPath})
// // require('dotenv').config({path: '.env.dev'})
//
// console.log(process.env)

module.exports = withTranspileModule(
    [
        'app-component',
        'share-libs'
    ]
)(
    {
        cssModules: true,
        webpack(config) {

            // for absolute import
            // according to https://github.com/zeit/next-plugins/issues/535#issuecomment-553413523
            config.resolve.modules.push(__dirname)
            console.log(config)
            return config
        },
        // env: {
        //     API_SERVER_ENDPOINT: process.env.API_SERVER_ENDPOINT,
        //     FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        //     FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        //     FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
        //     FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        //     FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        //     FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
        //     FIREBASE_APP_ID: process.env.FIREBASE_APP_ID
        // }
    }
)
