import React from 'react';
import {Link} from 'react-router';
import {observer} from 'mobx-react';
import s from './app-bar.css';

let AppBar = observer(
    ['store'],
    ({store: {title}}) => (
        <div className={s.toolbar}>
            <Link to="/" className={s.title}>{title}</Link>
            <a className={s.githubLink} href="https://github.com/sapientglobalmarkets/react-mobx-seed" />
        </div>
    )
);

export default AppBar;
