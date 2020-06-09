/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import devProxyConfig from './resources/devProxy';
import {defaultPort as port} from './constants/devproxy';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from 'path';

export default {
    devtool: '#cheap-module-source-map',
    stats: false,
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
    },
};
