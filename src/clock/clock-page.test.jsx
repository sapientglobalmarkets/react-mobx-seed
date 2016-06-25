import React from 'react';
import {shallow, mount} from 'enzyme';
import {ClockPage} from './index';

describe('<Clock>', ()=> {

    beforeEach(()=> {
        this.store = { clock: {date: new Date()}};
    });

    it('should render correctly', ()=> {
        const dom = shallow(<ClockPage store={this.store}/>);
        expect(dom).to.have.length(1);
    });

    it('should render the time in <h2>', ()=> {
        const dom = mount(<ClockPage store={this.store}/>);
        expect(dom.find('h2')).to.have.length(1);

    });

});
