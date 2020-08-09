/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import path from 'path';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import {devServerHost, defaultPort as port} from './constants/devproxy';
import devProxyConfig from './resources/devProxy';

export default {
    devtool: '#cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.join(__dirname, '../src/index.html'),
        }),
        new ReactRefreshWebpackPlugin(),
    ],
    devServer: {
        publicPath: '/',
        port,
        historyApiFallback: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        proxy: devProxyConfig,
        hot: true,
        overlay: false,
        host: devServerHost,
    },
};
