import React from 'react';
import {IndexLink, Link} from 'react-router';

import s from './navbar.css';

export default () => (
    <nav className={s.navbar}>
        <IndexLink to="/" activeClassName={s.active}>HOME</IndexLink>
        <Link to="/clock" activeClassName={s.active}>CLOCK</Link>
        <Link to="/example-feature-page" activeClassName={s.active}>Example Feature</Link>
    </nav>
);
