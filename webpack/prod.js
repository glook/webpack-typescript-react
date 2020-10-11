/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';

export default {
    optimization: {
        minimizer: [new TerserJSPlugin({})],
    },
    plugins: [new CleanWebpackPlugin({})],
};
