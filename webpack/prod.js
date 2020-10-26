/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import TerserJSPlugin from 'terser-webpack-plugin';

import * as plugins from './plugins';

export default {
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({})],
    },
    plugins: [plugins.cleanWebpackPlugin, plugins.miniCssExtractPlugin],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
