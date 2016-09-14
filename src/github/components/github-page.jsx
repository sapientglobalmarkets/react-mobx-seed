import React from 'react';
import {OrgForm} from './org-form';
import {RepoList} from './repo-list';

import styles from './github-page.css';

export default () => (
    <div className={styles.githubPage}>
        <OrgForm />
        <RepoList />
    </div>
);
