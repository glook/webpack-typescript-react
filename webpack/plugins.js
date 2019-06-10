/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import env from './env';

export default [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: env.isDev ? '[name].css' : '[name].[hash].css',
        chunkFilename: env.isDev ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, '../src/index.html'),
        // favicon: `${__dirname}/images/favicon.png`,
    }),
];
