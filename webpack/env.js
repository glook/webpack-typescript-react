/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import get from 'lodash/get';
import {argv} from 'yargs';

const mode = get(argv, 'env.mode', 'production');
const isDevServer = get(argv, 'env.isDevServer', false);
const isProd = mode === 'production';
const isDev = !isProd;

export default {
    mode,
    isDevServer,
    isProd,
    isDev,
};
