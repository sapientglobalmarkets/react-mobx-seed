import React from 'react';
import { Clock } from './components/clock';
import {Link} from 'react-router';

export default (props)=> {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/repos">Github Repos</Link>
                </li>
            </ul>
            <Clock />

            <hr/>

            {props.children}
        </div>
    );
};
