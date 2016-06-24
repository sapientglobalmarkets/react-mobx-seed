import { observable } from 'mobx';
import {ClockStore} from './clock';
import {GithubStore} from './github';

class Store {
    @observable github = new GithubStore();
    @observable clock = new ClockStore();

    init() {
        this.github.init();
        this.clock.init();
    }
}

const store = new Store();
export {store};
