import React from 'react';

import s from './github-page.css';
import { OrgForm } from './components/org-form';
import { RepoList } from './components/repo-list';

let GithubPage = () => (
    <div className={s.githubPage}>
        <OrgForm />
        <RepoList />
    </div>
);

export default GithubPage;
