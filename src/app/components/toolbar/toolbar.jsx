import React from 'react';
import {Link} from 'react-router';
import {observer} from 'mobx-react';
import s from './toolbar.css';

let Toolbar = observer(
    ['store'],
    ({store: {title}}) => (
        <div className={s.toolbar}>
            <Link to="/" className={s.title}>{title}</Link>
        </div>
    )
);

export default Toolbar;
