import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store';
import {browserHistory} from 'react-router';
import {App} from './app';

import 'sanitize.css/sanitize.css';
import './assets/styles/styles.css';

const render = ((rootElement)=> {

    return (appRoot)=> {
        ReactDOM.render(appRoot, rootElement);
    };

})(document.querySelector('main'));

if (__DEV__ && module.hot) {
    const AppContainer = require('react-hot-loader').AppContainer;

    render(
        <AppContainer>
            <App store={store} history={browserHistory}/>
        </AppContainer>
    );

    module.hot.accept('./app', ()=> {
        render(
            <AppContainer>
                <App store={store} history={browserHistory}/>
            </AppContainer>
        );
    });
} else {
    render(
        <App store={store} history={browserHistory}/>
    );
}

