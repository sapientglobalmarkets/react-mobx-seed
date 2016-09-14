import React from 'react';
import {observer} from 'mobx-react';

import styles from './clock-page.css';

@observer(['clockStore'])
export default class ClockPage extends React.Component {

    render() {
        const {time} = this.props.clockStore;

        return (
            <div className={styles.clockPage}>
                <span>The time is</span>
                <h2>{time}</h2>
            </div>
        );
    }

}
