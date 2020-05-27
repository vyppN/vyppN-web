module.exports = api => {
    api.cache(false)
    return {
        'presets': [
            'next/babel'
        ],
        'babelrcRoots': [
            '.'
        ],
        'plugins': [
            [
                '@babel/plugin-proposal-decorators', {'legacy': true}
            ],
            [
                'module-resolver', {
                'root': ['.'],
                'alias': {
                    '~': './src',
                    '@libs': '../share-libs/src',
                }
            }
            ],
            ['emotion']
        ]
    }
}
