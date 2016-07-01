import React from 'react';
import {observer} from 'mobx-react';
import {routes} from '../../routes';
import {Router} from 'react-router';
import {Provider} from 'mobx-react';

export default observer(['store'], function App({store, history}) {

    return (
        <Provider store={store}>
            <Router history={history}>
                    {routes}
            </Router>
        </Provider>
    );

});
