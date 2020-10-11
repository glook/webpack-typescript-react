/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {join} from 'path';

import get from 'lodash/get';
import {argv} from 'yargs';

export const mode = get(argv, 'env.mode', 'production');
export const isDevServer = get(argv, 'env.isDevServer', false);
export const isProd = mode === 'production';
export const isDev = !isProd;
export const rootDir = join(__dirname, '../');
