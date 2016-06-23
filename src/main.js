import ReactDOM from 'react-dom';
import {ContextProvider} from './core/context-provider';
import {store} from './core/store';
import {Router, RouterContext, browserHistory} from 'react-router';
import {routes} from './core/routes';

const context = {
    store
};

const createElement = props=> {
    return (
        <ContextProvider context={context}>
            <RouterContext {...props}/>
        </ContextProvider>
    );
};

const root = (
    <Router history={browserHistory}
            render={createElement}
            routes={routes}/>
);

ReactDOM.render(root, document.querySelector('main'));