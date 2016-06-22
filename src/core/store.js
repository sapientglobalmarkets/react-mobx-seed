import {observable} from 'mobx';

class Store {
    @observable date = new Date();

    init() {
        this.intervalId = setInterval(()=> this.tick(), 1000);
    }

    tick() {
        this.date = new Date();
    }
}

const store = new Store();
store.init();

export {store};