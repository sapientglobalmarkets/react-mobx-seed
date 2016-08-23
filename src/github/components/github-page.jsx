import React from 'react';
import {observer, inject} from 'mobx-react';

import s from './github-page.css';
import {OrgForm} from './org-form';
import {RepoList} from './repo-list';

@inject('store')
@observer
export default class GithubPage extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeOrgName = this.onChangeOrgName.bind(this);
        this.onShowRepos = this.onShowRepos.bind(this);
    }

    render() {
        const {github} = this.props.store;
        const {error, loading, orgName, repos } = github;

        return (
            <div className={s.githubPage}>
                <OrgForm
                    orgName={orgName}
                    loading={loading}
                    error={error}
                    onChangeOrgName={this.onChangeOrgName}
                    onShowRepos={this.onShowRepos}
                />
                <RepoList
                    repos={repos}
                />
            </div>
        );
    }

    onChangeOrgName(event) {
        const {github} = this.props.store;
        github.setOrgName(event.target.value);
    }

    onShowRepos(event) {
        event.stopPropagation();
        event.preventDefault();

        const {github} = this.props.store;
        github.loadRepos();
    }

}
