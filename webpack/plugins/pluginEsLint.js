/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {join} from 'path';

import ESLintPlugin from 'eslint-webpack-plugin';

import {rootDir} from '../utils/env';

const config = {
    context: join(rootDir, '/src'),
    extensions: ['js', 'jsx', 'ts', 'tsx'],
};

export const esLintPlugin = new ESLintPlugin(config);
