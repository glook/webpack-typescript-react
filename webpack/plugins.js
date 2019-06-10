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

export default [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: env.isDev ? '[name].css' : '[name].[hash].css',
        chunkFilename: env.isDev ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin(htmlPluginConfg),
    new ProvidePlugin(provideList),
    new DefinePlugin(defineList),
    new CleanWebpackPlugin(),
];
