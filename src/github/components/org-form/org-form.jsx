import React from 'react';
import {observer} from 'mobx-react';

import s from './org-form.css';

@observer(['store'])
export default class OrgForm extends React.Component {

    render() {
        const {github} = this.props.store;
        const {orgName, loading, error} = github;

        return (
            <div>
                <form className={s.orgForm}>
                    <input data-element="input"
                           placeholder="Organization Name (e.g. facebook)"
                           value={orgName}
                           onChange={event=>github.setOrgName(event.target.value)}
                    />
                    <button className={s.showRepos}
                            data-action="loadRepos"
                            onClick={(event)=>this.onShowRepos(event)}>Show Repos
                    </button>
                </form>

                <div>
                    {(loading) ? (<span>Loading...</span>) : null}
                    {(!loading && error) ? (<span className={s.error}>{error.message}</span>) : null}
                </div>
            </div>
        );
    }

    onShowRepos(event) {
        event.stopPropagation();
        event.preventDefault();

        const {github} = this.props.store;
        github.loadRepos();
    }
}

