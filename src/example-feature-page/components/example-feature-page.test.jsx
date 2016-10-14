import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'mobx-react';
import ExampleFeaturePage from './example-feature-page';

describe('<ExampleFeaturePage />', () => {

    let store;

    beforeEach(() => {
        store = {};
    });

    it('should render correctly', () => {
        const dom = shallow(
            <Provider store={store}>
                <ExampleFeaturePage />
            </Provider>
        );

        expect(dom).to.have.length(1);
    });

});
