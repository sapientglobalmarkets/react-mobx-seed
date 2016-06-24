import React from 'react';
import {shallow} from 'enzyme';
import {Clock} from './index';

describe('<Clock>', ()=> {

    beforeEach(()=> {
        this.context = { store: {date: new Date()}};
    });

    it('should render correctly', ()=> {
        const dom = shallow(<Clock/>, {context: this.context});
        expect(dom).to.have.length(1);
    });

    it('should render the time in <h2>', ()=> {
        const dom = shallow(<Clock/>, {context: this.context});
        expect(dom.find('h2')).to.have.length(1);

    });

});
