import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {store} from './core/store';
import {Router, RouterContext, browserHistory} from 'react-router';
import {routes} from './core/routes';

const context = {
    store
};

const createElement = props=> {
    return (
        <Provider context={context}>
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