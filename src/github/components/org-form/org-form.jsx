import React from 'react';

import style from './org-form.css';

export default function OrgForm({orgName, loading, error, onChangeOrgName, onShowRepos}) {
    return (
        <div>
            <form className={style.orgForm}>
                <input
                    className={`sdinput ${style.orgName}`}
                    data-element="orgInput"
                    placeholder="Organization Name (e.g. facebook)"
                    value={orgName}
                    onChange={onChangeOrgName}
                />
                <button
                    className={`sdbutton ${style.showRepos}`}
                    data-action="loadRepos"
                    onClick={onShowRepos}>
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
