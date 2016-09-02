import {action, observable, asFlat} from 'mobx';
import {github} from './github.service';

class GithubStore {
    @observable orgName = '';
    @observable loading = false;
    @observable repos = asFlat([]);
    @observable error = null;

    @action
    setOrgName(name) {
        this.orgName = name;
    }

    // Following is an example of using async-await
    @action
    async loadRepos() {
        this.loading = true;

        try {
            this.repos = await github.getReposFor(this.orgName);
            this.loading = false;
            this.error = null;

        } catch (error) {
            this.repos = [];
            this.loading = false;
            this.error = error;
        }
    }

}

let githubStore = new GithubStore();

export default githubStore;
