/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import path from 'path';
import entry from './entry';
import alias from './resources/alias';
import env from './env';
import plugins from './plugins';
import rules from './loaders';
import optimization from './optimization';


export default {
    context: __dirname,
    target: 'web',
    mode: env.isProd
        ? 'production'
        : 'development',
    entry,
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: env.isDevServer
            ? 'http://0.0.0.0:8080/'
            : './',
        filename: '[name].[hash].js',
    },
    module: {
        rules,
    },
    plugins,
    resolve: {
        alias,
    },
    optimization,
};
