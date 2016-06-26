import {computed, observable} from 'mobx';

export class ClockStore {
    intervalId = null;
    @observable date = new Date();

    @computed get time() {
        return ClockStore.format(this.date);
    }

    init() {
        this.intervalId = setInterval(()=> this.tick(), 1000);
    }

    tick() {
        this.date = new Date();
    }


    static format(date) {
        const yyyy = date.getFullYear(),
            mm = date.getMonth() + 1,
            dd = date.getDate(),
            hh = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();

        return `${mm}/${dd}/${yyyy} ${hh}:${m}:${s}`;
    }
}
