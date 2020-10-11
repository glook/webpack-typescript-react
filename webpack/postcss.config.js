import {arrayFilterEmpty} from './helpers';

module.exports = (api) => {
    const {mode} = api;

    const plugins = arrayFilterEmpty([
        'cssnano',
        mode !== 'development' ? 'cssnano' : null,
    ]);

    return {
        plugins,
    };
};
