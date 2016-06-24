import React from 'react';
import {observer} from 'mobx-react';

@observer(['store'])
export default class Clock extends React.Component {

    render() {
        const {clock} = this.props.store;
        return (
            <div>
                <span>The time is</span>
                <h2>{clock.time}</h2>
            </div>
        );
    }
}


