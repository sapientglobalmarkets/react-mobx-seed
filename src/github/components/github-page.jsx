import React from 'react';
import {OrgForm} from './org-form';
import {RepoList} from './repo-list';

import style from './github-page.css';

export default () => (
    <div className={style.githubPage}>
        <OrgForm />
        <RepoList />
    </div>
);
