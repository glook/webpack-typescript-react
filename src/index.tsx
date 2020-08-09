/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '@styles/styles.less';
import '@styles/styles.scss';

import React from 'react';
import ReactDom from 'react-dom';

import {App} from '@components/app/app';

ReactDom.render(<App />, document.getElementById('root'));
