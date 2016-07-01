import React from 'react';
import {shallow} from 'enzyme';
import { App } from './';
import {Provider} from 'mobx-react';

describe('<App />', ()=> {
    beforeEach(()=> {
        this.store = {};
    });


    it('should render correctly', ()=> {
        const dom = shallow(
            <Provider store={this.store}>
                <App />
            </Provider>
        );

        expect(dom).to.have.length(1);
    });

});


