import React from 'react';
import {observer} from 'mobx-react';
import {connect} from 'mobx-connect';

@connect
@observer
export default class Clock extends React.Component {

    render() {
        const {store: {time}} = this.context;
        return (
            <div>
                <span>The time is</span>
                <h2>{time}</h2>
            </div>
        );
    }
}


