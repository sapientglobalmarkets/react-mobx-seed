import {config, request} from '../core';

class GithubService {

    getReposFor(orgName) {
        return request(`${config.ORGS_URL}/${orgName}/repos?per_page=100`);
    }
}

export let github = new GithubService();
