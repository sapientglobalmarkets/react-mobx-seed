import React from 'react';
import {observer} from 'mobx-react';

import style from './org-form.css';

@observer(['githubStore'])
export default class OrgForm extends React.Component {

    render() {
        const {orgName, loading, error} = this.props.githubStore;

        return (
            <div>
                <form className={style.orgForm}>
                    <input
                        className={`sdinput ${style.orgName}`}
                        data-element="orgInput"
                        placeholder="Organization Name (e.g. facebook)"
                        value={orgName}
                        onChange={event => this.onOrgNameChange(event)}
                    />
                    <button
                        className={`sdbutton ${style.showRepos}`}
                        data-action="loadRepos"
                        onClick={event => this.onShowRepos(event)}>
                        Show Repos
                    </button>
                </form>

                <div>
                    {(loading) ? (<span>Loading...</span>) : null}
                    {(!loading && error) ? (<span className={style.error}>{error.message}</span>) : null}
                </div>
            </div>
        );
    }

    onOrgNameChange(event) {
        this.props.githubStore.setOrgName(event.target.value);
    }

    onShowRepos(event) {
        event.stopPropagation();
        event.preventDefault();
        this.props.githubStore.loadRepos();
    }
}
