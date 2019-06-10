/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import merge from 'webpack-merge';
import baseConfig from './webpack/base';
import devConfig from './webpack/dev';
import prodConfig from './webpack/prod';
import env from './webpack/env';

const {isProd} = env;

export default () => isProd
    ? merge(baseConfig, prodConfig)
    : merge(baseConfig, devConfig);
