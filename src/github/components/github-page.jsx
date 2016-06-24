import React from 'react';

import s from './github-page.css';
import { OrgForm } from './org-form';
import { RepoList } from './repo-list';

let GithubPage = () => (
    <div className={s.githubPage}>
        <OrgForm />
        <RepoList />
    </div>
);

export default GithubPage;
