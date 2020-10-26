/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {join} from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import {rootDir} from '../utils/env';

const config = {
    filename: 'index.html',
    inject: true,
    template: join(rootDir, './src/index.html'),
};

export const htmlWebpackPlugin = new HtmlWebpackPlugin(config);
