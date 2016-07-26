import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {store} from './store';
import {App} from './app';

// Styles
import 'sanitize.css/sanitize.css';
import './assets/styles/styles.css';

ReactDOM.render(<App store={store} history={browserHistory}/>,
    document.querySelector('main'));
