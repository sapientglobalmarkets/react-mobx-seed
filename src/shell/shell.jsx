import React from 'react';

import { AppBar } from './components/app-bar';
import { Navbar } from './components/navbar';

export default (props) => (
    <div>
        <AppBar />
        <Navbar />
        {props.children}
    </div>
);
