import React from 'react';
import {Link} from 'react-router';

export default (props)=> {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/clock">Clock</Link>
                </li>
                <li>
                    <Link to="/github">Github Repos</Link>
                </li>
            </ul>

            <hr/>

            {props.children}
        </div>
    );
};
