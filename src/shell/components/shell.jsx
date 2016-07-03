import React from 'react';

import {AppBar} from './app-bar';
import {Navbar} from './navbar';

export default (props) => (
    <div>
        <AppBar />
        <Navbar />
        {props.children}
    </div>
);
