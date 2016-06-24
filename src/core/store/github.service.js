import request from '../utils/request';

const ORGS_URL = 'https://api.github.com/orgs';

class GithubService {

    getReposFor(orgName) {
        return request(`${ORGS_URL}/${orgName}/repos?per_page=100`);
    }
}

export let github = new GithubService();