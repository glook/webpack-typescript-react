/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
export default {
    runtimeChunk: {
        name: 'runtime',
    },
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'initial',
            },
        },
    },
};
