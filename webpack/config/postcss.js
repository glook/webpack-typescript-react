/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @see https://github.com/postcss/postcss
 */
import {isProd} from '../utils/env';
import {arrayFilterEmpty} from '../utils/helpers';

module.exports = () => {
    const plugins = arrayFilterEmpty([
        'autoprefixer',
        isProd ? 'cssnano' : null,
    ]);
    return {
        plugins,
    };
};
