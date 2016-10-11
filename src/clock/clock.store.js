import {computed, observable} from 'mobx';

class ClockStore {
    intervalId = null;
    @observable date = new Date();

    @computed get time() {
        return ClockStore.format(this.date);
    }

    constructor() {
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.date = new Date();
    }

    static format(date: Date): string {
        const yyyy = date.getFullYear(),
            mm = date.getMonth() + 1,
            dd = date.getDate(),
            hh = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();

        return `${mm}/${dd}/${yyyy} ${hh}:${m}:${s}`;
    }
}

let clockStore = new ClockStore();

export default clockStore;
