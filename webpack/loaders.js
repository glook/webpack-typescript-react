/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {
    babelLoader,
    cssLoader,
    cssModulesLoader,
    lessLoader,
    miniCssExtractLoader,
    postCssLoader,
    resolveUrlLoader,
    sassLoader,
    typingsCssModulesLoader,
} from './constants/loadersList';

export default [
    {
        test: /\.(js|jsx)$/,
        use: ['thread-loader', babelLoader, 'eslint-loader'],
        exclude: /node_modules/,
    },
    {
        test: /\.module\.s([ca])ss$/,
        use: [
            miniCssExtractLoader,
            typingsCssModulesLoader,
            cssModulesLoader,
            postCssLoader,
            resolveUrlLoader,
            ...sassLoader,
        ].filter((x) => !!x),
    },
    {
        test: /\.s([ca])ss$/,
        exclude: /\.module.scss$/,
        use: [
            miniCssExtractLoader,
            cssLoader,
            postCssLoader,
            resolveUrlLoader,
            ...sassLoader,
        ].filter((x) => !!x),
    },
    {
        test: /\.module.less$/,
        use: [
            miniCssExtractLoader,
            typingsCssModulesLoader,
            cssModulesLoader,
            postCssLoader,
            resolveUrlLoader,
            lessLoader,
        ].filter((x) => !!x),
    },
    {
        test: /\.less$/,
        exclude: /\.module.less$/,
        use: [
            miniCssExtractLoader,
            cssLoader,
            postCssLoader,
            resolveUrlLoader,
            lessLoader,
        ].filter((x) => !!x),
    },
    {
        test: /\.css$/,
        use: [miniCssExtractLoader, cssLoader],
    },
    {
        test: /\.(html)$/,
        use: {
            loader: 'html-loader',
        },
    },
    {
        test: /.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)$/,
        use: ['file-loader'],
    },
    {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
            transpileOnly: true,
        },
        exclude: /node_modules/,
    },
    {
        test: /\.svg(\?.*)?$/,
        exclude: /\.component.svg$/,
        use: ['file-loader'],
    },
    {
        test: /\.component.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
            babelLoader,
            {
                loader: '@svgr/webpack',
                options: {
                    babel: false,
                    icon: true,
                },
            },
        ],
    },
];
