/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {arrayFilterEmpty} from '../utils/helpers';
import {
    cssLoader,
    cssLoaderItems,
    cssModulesSupportLoaderItems,
    lessLoader,
    miniCssExtractLoader,
    postCssLoader,
    resolveUrlLoader,
    sassLoaderItems,
} from './useLoaderRuleItems';

/** css **/
export const cssRule = {
    test: /\.css$/,
    use: [miniCssExtractLoader, postCssLoader, resolveUrlLoader, cssLoader],
};

/** less **/
export const lessModulesRule = {
    test: /\.module.less$/,
    use: arrayFilterEmpty([
        ...cssModulesSupportLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        lessLoader,
    ]),
};
export const lessRule = {
    test: /\.less$/,
    exclude: /\.module.less$/,
    use: arrayFilterEmpty([
        ...cssLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        lessLoader,
    ]),
};

export const lessRules = [lessModulesRule, lessRule];

/** sass **/
export const sassModulesRule = {
    test: /\.module\.s([ca])ss$/,
    use: arrayFilterEmpty([
        ...cssModulesSupportLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        ...sassLoaderItems,
    ]),
};

export const sassRule = {
    test: /\.s([ca])ss$/,
    exclude: /\.module.scss$/,
    use: arrayFilterEmpty([
        ...cssLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        ...sassLoaderItems,
    ]),
};

export const sassRules = [sassModulesRule, sassRule];
