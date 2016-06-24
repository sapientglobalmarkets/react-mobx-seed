import React from 'react';

import { Toolbar } from './toolbar';
import { Navbar } from './navbar';
import { GithubPage } from '../../github';

export default (props) => (
    <div>
        <Toolbar />
        <Navbar />
        <GithubPage />
        {props.children}
    </div>
);
