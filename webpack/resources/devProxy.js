/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {
    pathRewrite,
    httpsProxyTarget,
} from '../constants/devproxy';

export default {
    '/world-time': {
        target: {
            host: 'worldtimeapi.org',
            ...httpsProxyTarget
        },
        pathRewrite: pathRewrite('^/world-time/test', '/api'),
        changeOrigin: true,
        secure: false,
    },
    '/someurl/test': {
        target: {
            host: 'reqres.in',
            ...httpsProxyTarget
        },
        pathRewrite: pathRewrite('^/someurl/test', '/api'),
        changeOrigin: true,
        secure: false,
    }
};
