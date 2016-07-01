import React from 'react';
import {observer} from 'mobx-react';

@observer(['store'])
export default class RepoList extends React.Component {

    render() {
        const {github: {repos}} = this.props.store;
        return (
            <table className="mintable">
                <thead>
                <tr>
                    <th>Repository</th>
                    <th className="text-right">Stars</th>
                    <th className="text-right">Forks</th>
                </tr>
                </thead>
                <tbody>
                {
                    repos.map(repo => (
                        <tr key={repo.name}>
                            <td>{repo.name}</td>
                            <td className="text-right">{repo.stargazers_count}</td>
                            <td className="text-right">{repo.forks_count}</td>
                        </tr>
                    ))
                }
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="3"><em>{repos.length} repositories retrieved</em></td>
                </tr>
                </tfoot>
            </table>
        );
    }
}

RepoList.propTypes = {
    repos: React.PropTypes.array
};

export default RepoList;
