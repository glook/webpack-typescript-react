/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import env from '../env';
import resources from '../resources/sassResources';

export const cssLoader = {
    loader: 'css-loader',
    options: {
        sourceMap: env.isProd,
    },
};

export const cssModulesLoader = {
    ...cssLoader,
    options: {
        sourceMap: env.isDev,
        modules: {
            localIdentName: '[local]__[hash:base64:5]',
        },
    },
};

export const sassLoader = [
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
        },
    },
    resources.length
        ? {
            loader: 'sass-resources-loader',
            options: {
                resources,
            },
        }
        : null,
];

export const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        config: {
            path: __dirname,
        },
        sourceMap: env.isProd,
    },
};

export const miniCssExtractLoader = env.isProd
    ? {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: env.isDevServer,
        },
    }
    : 'style-loader';

export const lessLoader = {
    loader: 'less-loader',
    options: {
        sourceMap: true,
        javascriptEnabled: true,
    },
};
