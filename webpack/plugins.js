/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {ProvidePlugin, DefinePlugin} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import env from './env';
import provideList from './resources/provide';
import defineList from './resources/define';
import htmlPluginConfg from './resources/html';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import {resolve} from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export default [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: env.isDev ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: env.isDev ? '[id].css' : '[id].[contenthash].css',
    }),
    new HtmlWebpackPlugin(htmlPluginConfg),
    new ProvidePlugin(provideList),
    new DefinePlugin(defineList),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
        reportFiles: ['../src/**/*.{ts,tsx}'],
        tsconfig: resolve(__dirname, '../tsconfig.json'),
        async: env.isProd,
        silent: env.isProd,
        eslint: true,
    }),
];
