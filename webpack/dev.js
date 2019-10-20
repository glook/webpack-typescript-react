/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {HotModuleReplacementPlugin} from 'webpack';
import devProxyConfig from './resources/devProxy';

export default {
    devtool: '#cheap-module-source-map',
    stats: false,
    plugins: [
        new HotModuleReplacementPlugin(),
    ],
    devServer: {
        publicPath: '/',
        port: 8080,
        historyApiFallback: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        proxy: devProxyConfig,
    },
};
