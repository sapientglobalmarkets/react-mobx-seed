import {App} from '../app';
import {RepoViewer} from '../github-repos/components/repo-viewer';

export let routes = {
    path: '/',
    component: App,
    childRoutes: [
        {
            path: '/repos',
            component: RepoViewer
        }
    ]
};