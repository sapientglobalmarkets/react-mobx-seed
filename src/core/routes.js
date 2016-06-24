import {App} from '../app';
import {RepoViewer} from '../github-repos/components/repo-viewer';
import {Clock} from '../clock/components/clock';

export let routes = {
    path: '/',
    component: App,
    childRoutes: [
        {
            path: '/clock',
            component: Clock
        },
        {
            path: '/github',
            component: RepoViewer
        }
    ]
};