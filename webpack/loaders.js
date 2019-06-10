/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import env from './env';
import resources from './sassResources';

const cssLoader = {
    loader: 'css-loader',
    options: {
        sourceMap: env.isProd,
    },
};

const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        config: {
            path: __dirname,
        },
        sourceMap: env.isProd,
    },
};

const miniCssExtractLoader = env.isProd
    ? {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: env.isDevServer,
        },
    }
    : 'style-loader';

export default [
    {
        test: /\.js$/,
        use: [
            'thread-loader',
            'babel-loader',
            'eslint-loader',
        ],
        exclude: /node_modules/,
    },
    {
        test: /\.module\.s(c|a)ss$/,
        use: [
            miniCssExtractLoader,
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    sourceMap: env.isDev,
                    localIdentName: '[local]__[hash:base64:5]',
                },
            },
            postCssLoader,
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
        ].filter(x => !!x),
    },
    {
        test: /\.s(c|a)ss$/,
        exclude: /\.module.scss$/,
        use: [
            miniCssExtractLoader,
            cssLoader,
            postCssLoader,
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
        ].filter(x => !!x),
    },
    {
        test: /\.css$/,
        use: [
            miniCssExtractLoader,
            cssLoader,
        ],
    },
    {
        test: /\.(html)$/,
        use: {
            loader: 'html-loader',
            options: {
                attrs: [':data-src'],
            },
        },
    },
    {
        test: /.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)$/,
        use: [
            'file-loader',
        ],
    },
    {
        test: /\.svg(\?.*)?$/,
        exclude: /\.inline.svg$/,
        use: [
            'file-loader',
            'svg-transform-loader',
        ],
    },
    {
        test: /\.inline.svg$/,
        loader: 'svg-inline-loader?classPrefix',
    },
];
