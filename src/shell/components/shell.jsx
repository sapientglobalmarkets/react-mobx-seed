import React from 'react';

import {Appbar} from './appbar';
import {Navbar} from './navbar';

export default function Shell(props) {
    return (
        <div>
            <Appbar />
            <Navbar />
            {props.children}
        </div>
    );
}
