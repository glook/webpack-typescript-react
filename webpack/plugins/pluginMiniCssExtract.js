/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config = {
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
};

export const miniCssExtractPlugin = new MiniCssExtractPlugin(config);
