import React from 'react';
import {observer} from 'mobx-react';

import style from './clock-page.css';

@observer(['clockStore'])
export default class ClockPage extends React.Component {

    render() {
        const {time} = this.props.clockStore;

        return (
            <div className={style.clockPage}>
                <span>The time is</span>
                <h2>{time}</h2>
            </div>
        );
    }

}
