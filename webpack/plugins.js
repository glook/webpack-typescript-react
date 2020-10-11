/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {join, resolve} from 'path';

import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {DefinePlugin, ProvidePlugin} from 'webpack';

import {isDev, rootDir} from './env';
import defineList from './resources/define';
import htmlPluginConfg from './resources/html';
import provideList from './resources/provide';

export default [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: isDev ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
    }),
    new HtmlWebpackPlugin(htmlPluginConfg),
    new ProvidePlugin(provideList),
    new DefinePlugin(defineList),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
        async: isDev,
        typescript: {
            configFile: join(rootDir, '/tsconfig.json'),
        },
        eslint: {enabled: true, files: '../src/**/*.{ts,tsx,js,jsx}'},
        logger: {infrastructure: 'silent', issues: 'console'},
    }),
    new ESLintPlugin({
        context: join(rootDir, '/src'),
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        formatter: 'table',
    }),
];
