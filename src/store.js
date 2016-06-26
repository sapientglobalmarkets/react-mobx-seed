import {ClockStore} from './clock/clock.store';
import {GithubStore} from './github/github.store';

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
