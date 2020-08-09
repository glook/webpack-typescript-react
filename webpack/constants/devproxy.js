/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import isWindows from 'is-windows';

export const defaultPort = 8080;

export const pathRewrite = (localUrl, remoteUrl) => (path) =>
    path.replace(new RegExp(localUrl.replace('/', '\\/'), 'g'), remoteUrl);

export const httpProxyTarget = {
    port: 80,
    protocol: 'http',
};
export const httpsProxyTarget = {
    port: 443,
    protocol: 'https',
};

export const devServerHost = isWindows() ? '127.0.0.1' : '0.0.0.0';

export const devServerUrl = isWindows()
    ? `http://${devServerHost}:${defaultPort}/`
    : `http://${devServerHost}:${defaultPort}/`;
