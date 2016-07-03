import React from 'react';
import {Link} from 'react-router';
import {observer} from 'mobx-react';
import s from './appbar.css';

let Appbar = observer(
    ['store'],
    ({store: {title}}) => (
        <div className={s.appbar}>
            <Link to="/" className={s.title}>{title}</Link>
            <a className={s.githubLink}
               href="https://github.com/sapientglobalmarkets/react-mobx-seed"/>
        </div>
    )
);

export default Appbar;
