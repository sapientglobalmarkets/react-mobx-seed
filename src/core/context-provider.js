export class ContextProvider extends React.Component {

    static get propTypes() {
        return {
            context: React.PropTypes.object,
            children: React.PropTypes.object
        };
    }

    static get defaultProps() {
        return {
            context: {}
        };
    }

    static get childContextTypes() {
        return {
            store: React.PropTypes.object
        };
    }

    getChildContext() {
        return this.props.context;
    }

    render() {
        return this.props.children;
    }
}
