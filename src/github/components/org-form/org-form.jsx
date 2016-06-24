import React from 'react';
import { observer } from 'mobx-react';

import s from './org-form.css';

@observer([ 'store' ])
export default class OrgForm extends React.Component {

    render() {
        const { orgName, loading, error } = this.props.store;
        return (
            <div>
                <form className={s.orgForm}>
                    <input
                        placeholder="Organization Name (e.g. facebook)"
                        value={orgName}
                    />
                    <button className={s.showRepos} type="submit">Show Repos</button>
                </form>

                <div>
                    {(loading) ? (<span>Loading...</span>) : null}
                    {(error) ? (<span className={s.error}>{error.message}</span>) : null}
                    {(!loading && !error) ? '\u00a0' : null}
                </div>
            </div>
        );
    }
}

OrgForm.propTypes = {
    orgName: React.PropTypes.string,
    loading: React.PropTypes.bool.isRequired,
    error: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool
    ])
    // onChangeOrgName: React.PropTypes.func.isRequired,
    // onSubmitForm: React.PropTypes.func.isRequired
};
