import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'mobx-react';
import App from './app';

describe('<App />', () => {
    let store;

    beforeEach(() => {
        store = {};
    });


    it('should render correctly', () => {
        const dom = shallow(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(dom).to.have.length(1);
    });

});


