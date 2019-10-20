/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
export const pathRewrite = (localUrl, remoteUrl) => (path) => path.replace(new RegExp(localUrl.replace('/', '\\/'), 'g'), remoteUrl);

export const httpProxyTarget = {
    port: 80,
    protocol: 'http:',
};
export const httpsProxyTarget = {
    port: 443,
    protocol: 'https:',
};

