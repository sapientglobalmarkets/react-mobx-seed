import React from 'react';
import {Link} from 'react-router';

import s from './navbar.css';

let Navbar = () => (
    <nav>
        <Link to="/github" activeClassName={s.active}>GITHUB</Link>
        <Link to="/clock" activeClassName={s.active}>CLOCK</Link>
    </nav>
);

export default Navbar;
