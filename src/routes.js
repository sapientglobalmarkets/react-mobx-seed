import {App} from './app';
import {ClockPage} from './clock';
import {GithubPage} from './github';

export let routes = {
    path: '/',
    component: App,
    childRoutes: [
        {
            path: '/clock',
            component: ClockPage
        },
        {
            path: '/github',
            component: GithubPage
        },
    ]
};
