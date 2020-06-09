/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
const {argv} = require('yargs');
module.exports = (api) => {
    const {env} = argv;
    const mode = env.mode ? env.mode : 'production';
    // This caches the Babel config by environment.
    api.cache.using(() => mode);
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
                    },
                    useBuiltIns: 'usage',
                    debug: false,
                    corejs: 3,
                },
            ],
            '@babel/preset-react',
        ],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-throw-expressions',
            '@babel/proposal-object-rest-spread',
            // Applies the react-refresh Babel plugin on non-production modes only
            mode !== 'production' && 'react-refresh/babel',
        ].filter(Boolean),
    };
};
