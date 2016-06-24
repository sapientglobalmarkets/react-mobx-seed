import {action, observable} from 'mobx';
import {github} from './github.service';

export class GithubStore {
    @observable orgName = '';
    @observable loading = false;
    @observable repos = [];

    init() {
    }

    @action
    setOrgName(name) {
        this.orgName = name;
    }

    @action
    loadRepos() {
        this.loading = true;

        github.getReposFor(this.orgName)
            .then(repos=> {
                this.repos = repos;
                this.loading = false;
            })
            .catch(()=> {
                this.repos = [];
                this.loading = false;
            });
    }

}
