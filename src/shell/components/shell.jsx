import React from 'react';

import {Appbar} from './appbar';
import {Navbar} from './navbar';

export default (props) => (
    <div>
        <Appbar />
        <Navbar />
        {props.children}
    </div>
);
