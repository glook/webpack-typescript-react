/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import merge from 'webpack-merge';

import baseConfig from './webpack/base';
import devConfig from './webpack/dev';
import {isProd} from './webpack/env';
import prodConfig from './webpack/prod';

export default () =>
    isProd ? merge(baseConfig, prodConfig) : merge(baseConfig, devConfig);
