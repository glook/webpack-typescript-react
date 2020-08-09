import {CleanWebpackPlugin} from 'clean-webpack-plugin';
/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import TerserJSPlugin from 'terser-webpack-plugin';

export default {
    optimization: {
        minimizer: [new TerserJSPlugin({})],
    },
    plugins: [new CleanWebpackPlugin({})],
};
