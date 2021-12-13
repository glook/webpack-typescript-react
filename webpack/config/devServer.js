/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @see https://webpack.js.org/configuration/dev-server/
 */

import {defaultPort, devServerHost} from '../utils/env';
import {devServerProxyConfig} from './devServierProxy';

export const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

export const devServerConfig = {
    client: {
        overlay: false,
    },
    headers: {'Access-Control-Allow-Origin': '*'},
    historyApiFallback: true,
    host: devServerHost,
    hot: true,
    port: defaultPort,
    proxy: devServerProxyConfig,
    static: {
        publicPath: '/',
    },
};
