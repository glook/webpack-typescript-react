/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import webpack from 'webpack';

export default {
    devtool: '#cheap-module-source-map',
    stats: false,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        publicPath: '/',
        contentBase: '/app',
        port: 8080,
        historyApiFallback: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        proxy: {},
    },
};
