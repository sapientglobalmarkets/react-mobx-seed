import React from 'react';
import {IndexLink, Link} from 'react-router';

import s from './navbar.css';

let Navbar = () => (
    <nav>
        <IndexLink to="/" activeClassName={s.active}>HOME</IndexLink>
        <Link to="/clock" activeClassName={s.active}>CLOCK</Link>
    </nav>
);

export default Navbar;
