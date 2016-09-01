import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from 'react-router';
import {Provider} from 'mobx-react';

// Routes
import {routes} from './routes';

// Stores
import {store} from './store';
import {clockStore} from './clock';
import {githubStore} from './github';

// Styles
import 'sanitize.css/sanitize.css';
import './assets/styles/styles.css';

ReactDOM.render(
    <Provider store={store} clockStore={clockStore} githubStore={githubStore}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.querySelector('main')
);
