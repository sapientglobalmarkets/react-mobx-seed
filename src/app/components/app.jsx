import React from 'react';

import { Toolbar } from './toolbar';
import { Navbar } from './navbar';

export default (props) => (
    <div>
        <Toolbar />
        <Navbar />
        {props.children}
    </div>
);
