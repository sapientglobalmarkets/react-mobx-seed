import {observer} from 'mobx-react';
import {connect} from 'mobx-connect';

@connect
@observer
export default class Clock extends React.Component {

    render() {
        const {store: {date}} = this.context;
        return (
            <div>
                <span>The time is</span>
                <h2>{format(date)}</h2>
            </div>
        );
    }

    componentWillMount() {
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
}

function format(date) {
    const yyyy = date.getFullYear(),
        mm = date.getMonth() + 1,
        dd = date.getDate(),
        hh = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();

    return `${mm}/${dd}/${yyyy} ${hh}:${m}:${s}`;
}