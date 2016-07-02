import React from 'react';
import {Router} from 'react-router';
import {observer, Provider} from 'mobx-react';
import {routes} from '../../routes';

export default observer(['store'], function App({store, history}) {

    return (
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    );

});
