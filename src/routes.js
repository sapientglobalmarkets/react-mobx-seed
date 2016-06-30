import {Shell} from './shell';
import {ClockPage} from './clock';
import {GithubPage} from './github';
import {Route, IndexRoute} from 'react-router';
import React from 'react';

export let routes = (
    <Route path="/" component={Shell}>
        <IndexRoute component={GithubPage}/>
        <Route path="clock" component={ClockPage}/>
        <Route path="*" onEnter={({params}, replace) => replace('/')}/>
    </Route>
);
