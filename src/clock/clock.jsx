import React from 'react';
import { observer } from 'mobx-react';

@observer(['store'])
export default class Clock extends React.Component {

    render() {
        const { store: { time } } = this.props;
        return (
            <div>
                <span>The time is</span>
                <h2>{time}</h2>
            </div>
        );
    }
}


