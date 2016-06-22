export default class Clock extends React.Component {

    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <div>
                <span>The time is</span>
                <h2>{format(this.state.date)}</h2>
            </div>
        );
    }

    componentWillMount() {
        this.intervalId = setInterval(()=> {
            this.setState({date: new Date()});
        }, 1000);
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