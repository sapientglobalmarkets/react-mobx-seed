import {observable} from 'mobx';
import {github} from './github.service';

export class GithubStore {
    @observable orgName = '';
    @observable loading = false;
    @observable repos = [];

    init() {
    }

    setOrgName(name) {
        this.orgName = name;
    }

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
