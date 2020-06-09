/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import path from 'path';
import entry from './entry';
import env from './env';
import plugins from './plugins';
import rules from './loaders';
import optimization from './optimization';
import {devServerUrl} from './constants/devproxy';
import resolve from './resources/resolve';

export default {
    context: __dirname,
    target: 'web',
    mode: env.isProd ? 'production' : 'development',
    entry,
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: env.isDevServer ? devServerUrl : './',
        filename: env.isDevServer
            ? '[name].[hash].js'
            : '[name].[contenthash].js',
    },
    module: {
        rules,
    },
    plugins,
    resolve,
    optimization,
};
