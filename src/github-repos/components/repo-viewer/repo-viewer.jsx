import React from 'react';
import { observer } from 'mobx-react';

@observer([ 'store' ])
export default class RepoViewer extends React.Component {

    render() {
        const { store } = this.props;
        const { repos, orgName, loading } = store;
        return (

            <div>
                <h2>RepoViewer</h2>

                <label>Organization: </label>
                <input type="text" value={orgName}
                       onChange={event=>store.loadRepos(event.target.value)}/>

                <LoadingIndicator loading={loading}/>
                <ul>
                    {
                        repos.map(r=> {
                            return (<li>{r.name}</li>);
                        })
                    }
                </ul>
            </div>

        );
    }

}

function LoadingIndicator({ loading }) {
    return (
        <strong>
            { loading ? 'Loading...' : ''}
        </strong>
    );
}