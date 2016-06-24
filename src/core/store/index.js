import {ClockStore} from './clock';
import {GithubStore} from './github';

class Store {
    title = 'React MobX Seed';
    github = new GithubStore();
    clock = new ClockStore();

    init() {
        this.github.init();
        this.clock.init();
    }
}

const store = new Store();
store.init();
export {store};
