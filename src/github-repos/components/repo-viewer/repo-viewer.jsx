import React from 'react';
import {observer} from 'mobx-react';

@observer(['store'])
export default class RepoViewer extends React.Component {

    render() {
        const {repos, orgName} = this.props.store;
        return (

            <h2>RepoViewer</h2>
        );
    }

}
