import { computed, observable } from 'mobx';
import { github } from './github.service';

class Store {
    @observable orgName = '';
    @observable loading = false;
    @observable repos = [];
    @observable date = new Date();

    @computed get time() {
        return format(this.date);
    }

    init() {
        this.intervalId = setInterval(()=> this.tick(), 1000);
    }

    tick() {
        this.date = new Date();
    }

    loadRepos(name) {
        this.orgName = name;
        this.loading = true;

        github.getReposFor(name)
            .then(repos=>{
                this.repos = repos;
                this.loading = false;
            })
            .catch(()=>{
                this.repos = [];
                this.loading = false;
            });
    }

}

const store = new Store();
store.init();

export {store};

function format(date) {
    const yyyy = date.getFullYear(),
        mm = date.getMonth() + 1,
        dd = date.getDate(),
        hh = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();

    return `${mm}/${dd}/${yyyy} ${hh}:${m}:${s}`;
}