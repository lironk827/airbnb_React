import css from './static/css/globals.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import {HashRouter} from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>
  , document.querySelector('.main'));