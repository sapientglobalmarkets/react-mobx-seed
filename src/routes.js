import {App} from './app';
import {ClockPage} from './clock';
import {GithubPage} from './github';

export let routes = {
    path: '/',
    component: App,
    indexRoute: {component: GithubPage},
    childRoutes: [
        {
            path: 'clock',
            component: ClockPage
        },

        // Catch-all route
        {
            path: '*',
            onEnter: ({ params }, replace) => replace('/')
        },
    ]
};
