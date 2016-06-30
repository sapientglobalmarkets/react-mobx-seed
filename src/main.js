import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {store} from './store';
import {Router, browserHistory} from 'react-router';

import 'sanitize.css/sanitize.css';
import './assets/styles/styles.css';

render();

function render() {
    const routes = require('./routes').routes;

    const root = (
        <Provider store={store}>
            <Router history={browserHistory}>
                {routes}
            </Router>
        </Provider>
    );

    ReactDOM.render(root, document.querySelector('main'));

}
