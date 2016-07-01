import React from 'react';

import s from './github-page.css';
import { OrgForm } from './org-form';
import { RepoList } from './repo-list';

export default () => (
    <div className={s.githubPage}>
        <OrgForm />
        <RepoList />
    </div>
);
