import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { store } from './store';
import { Router, RouterContext, browserHistory } from 'react-router';
import { routes } from './routes';

import 'sanitize.css/sanitize.css';
import './assets/styles/styles.css';

const createElement = props=> {
    return (
        <Provider store={store}>
            <RouterContext {...props}/>
        </Provider>
    );
};

const root = (
    <Router history={browserHistory}
            render={createElement}
            routes={routes}/>
);

ReactDOM.render(root, document.querySelector('main'));
