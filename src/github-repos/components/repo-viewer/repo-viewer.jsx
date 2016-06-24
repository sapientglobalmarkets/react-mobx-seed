import React from 'react';
import {observer} from 'mobx-react';

@observer(['store'])
export default class RepoViewer extends React.Component {

    render() {
        const {github: {repos, orgName, loading}} = this.props.store;

        return (

            <div>
                <h2>RepoViewer</h2>

                <label>Organization: </label>
                <input type="text" value={orgName}
                       onChange={event=>this.onNameChange(event.target.value)}
                       onKeyUp={event=>this.onKeyUp(event.keyCode)}/>

                <LoadingIndicator loading={loading}/>
                <ul>
                    {
                        repos.map(r=> {
                            return (<li key={r.name}>{r.name}</li>);
                        })
                    }
                </ul>
            </div>

        );
    }

    onNameChange(text) {
        this.props.store.github.setOrgName(text);
    }

    onKeyUp(keyCode) {
        // ENTER
        if (keyCode === 13) {
            this.props.store.github.loadRepos();
        }
    }
}

function LoadingIndicator({loading}) {
    return (
        <strong>
            { loading ? 'Loading...' : ''}
        </strong>
    );
}