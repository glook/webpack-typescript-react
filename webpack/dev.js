/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import path from 'path';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import {devServerConfig} from './config';

export default {
    devtool: 'cheap-module-source-map',
    plugins: [new ReactRefreshWebpackPlugin()],
    devServer: devServerConfig,
};
