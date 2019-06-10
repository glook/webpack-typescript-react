/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {HotModuleReplacementPlugin} from 'webpack';
import devProxyConfig from './resources/devProxy';
import {defaultPort as port} from './constants/devproxy';

export default {
    devtool: '#cheap-module-source-map',
    stats: false,
    plugins: [
        new HotModuleReplacementPlugin(),
    ],
    devServer: {
        publicPath: '/',
        port,
        historyApiFallback: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        proxy: devProxyConfig,
    },
};
