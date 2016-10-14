import {computed, observable} from 'mobx';

class ExampleFeaturePageStore {
    @observable date = new Date();

    @computed get time() {
        return this.date.toString();
    }
}

let exampleFeaturePageStore = new ExampleFeaturePageStore();

export default exampleFeaturePageStore;
