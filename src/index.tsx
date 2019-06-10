/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDom from 'react-dom';
import {App} from './components/app/app';
import '@src/styles/styles.scss';

ReactDom.render(<App />, document.getElementById('root'));
