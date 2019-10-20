/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {
    miniCssExtractLoader,
    cssModulesLoader,
    postCssLoader,
    sassLoader,
    lessLoader,
    cssLoader,
} from './constants/loadersList.js';

export default [
    {
        test: /\.(js|jsx)$/,
        use: [
            'thread-loader',
            'babel-loader',
            'eslint-loader',
        ],
        exclude: /node_modules/,
    },
    {
        test: /\.module\.s([ca])ss$/,
        use: [
            miniCssExtractLoader,
            cssModulesLoader,
            postCssLoader,
            ...sassLoader,
        ].filter(x => !!x),
    },
    {
        test: /\.s([ca])ss$/,
        exclude: /\.module.scss$/,
        use: [
            miniCssExtractLoader,
            cssLoader,
            postCssLoader,
            ...sassLoader,
        ].filter(x => !!x),
    },
    {
        test: /\.less$/,
        use: [
            miniCssExtractLoader,
            cssLoader,
            postCssLoader,
            lessLoader,
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
