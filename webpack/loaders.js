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
import {arrayFilterEmpty} from './helpers';

export default [
    {
        test: /\.(js|jsx)$/,
        use: ['thread-loader', babelLoader],
        exclude: /node_modules/,
    },
    {
        test: /\.module\.s([ca])ss$/,
        use: arrayFilterEmpty([
            miniCssExtractLoader,
            typingsCssModulesLoader,
            cssModulesLoader,
            postCssLoader,
            resolveUrlLoader,
            ...sassLoader,
        ]),
    },
    {
        test: /\.s([ca])ss$/,
        exclude: /\.module.scss$/,
        use: arrayFilterEmpty([
            miniCssExtractLoader,
            cssLoader,
            postCssLoader,
            resolveUrlLoader,
            ...sassLoader,
        ]),
    },
    {
        test: /\.module.less$/,
        use: arrayFilterEmpty([
            miniCssExtractLoader,
            typingsCssModulesLoader,
            cssModulesLoader,
            postCssLoader,
            resolveUrlLoader,
            lessLoader,
        ]),
    },
    {
        test: /\.less$/,
        exclude: /\.module.less$/,
        use: arrayFilterEmpty([
            miniCssExtractLoader,
            cssLoader,
            postCssLoader,
            resolveUrlLoader,
            lessLoader,
        ]),
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
