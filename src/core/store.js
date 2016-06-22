import {computed, observable} from 'mobx';

class Store {
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