import React from 'react';
import {observer} from 'mobx-react';

import styles from './org-form.css';

@observer(['githubStore'])
export default class OrgForm extends React.Component {

    render() {
        const {orgName, loading, error} = this.props.githubStore;

        return (
            <div>
                <form className={styles.orgForm}>
                    <input
                        className={`sdinput ${styles.orgName}`}
                        data-element="orgInput"
                        placeholder="Organization Name (e.g. facebook)"
                        value={orgName}
                        onChange={event => this.onOrgNameChange(event)}
                    />
                    <button
                        className={`sdbutton ${styles.showRepos}`}
                        data-action="loadRepos"
                        onClick={event => this.onShowRepos(event)}>
                        Show Repos
                    </button>
                </form>

                <div>
                    {(loading) ? (<span>Loading...</span>) : null}
                    {(!loading && error) ? (<span className={styles.error}>{error.message}</span>) : null}
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
