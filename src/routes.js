import {App} from './app';
import {Clock} from './clock';

export let routes = {
    path: '/',
    component: App,
    childRoutes: [
        {
            path: '/clock',
            component: Clock
        }
    ]
};
