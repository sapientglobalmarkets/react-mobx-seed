import {render} from 'react-dom';
import {App} from './app';
import {ContextProvider} from './core/context-provider';
import {store} from './core/store';

const context = {
    store
};

const root = (
    <ContextProvider context={context}>
        <App/>
    </ContextProvider>
);
render(root, document.querySelector('main'));