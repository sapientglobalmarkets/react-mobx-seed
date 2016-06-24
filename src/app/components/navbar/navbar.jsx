import React from 'react';
import { Link } from 'react-router';

import s from './navbar.css';

let Navbar = () => (
    <nav>
        <Link to="/" className={s.active}>GITHUB</Link>
        <Link to="/clock">CLOCK</Link>
    </nav>
);

export default Navbar;
