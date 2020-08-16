/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import path from 'path';

import {devServerUrl} from './constants/devproxy';
import entry from './entry';
import {isDevServer, isProd} from './env';
import rules from './loaders';
import optimization from './optimization';
import plugins from './plugins';
import externals from './resources/externals';
import resolve from './resources/resolve';

export default {
    context: __dirname,
    target: 'web',
    mode: isProd ? 'production' : 'development',
    entry,
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: isDevServer ? devServerUrl : './',
        filename: isDevServer ? '[name].[hash].js' : '[name].[contenthash].js',
    },
    module: {
        rules,
    },
    plugins,
    resolve,
    optimization,
    externals,
};
