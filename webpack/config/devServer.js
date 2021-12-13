/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @see https://webpack.js.org/configuration/dev-server/
 */
import isWindows from 'is-windows';

import {devServerProxyConfig} from './devServierProxy';

const defaultPort = 8080;

const devServerHost = isWindows() ? '127.0.0.1' : '0.0.0.0';

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
