import React from 'react';
import {shallow} from 'enzyme';
import { RepoViewer } from './';

describe('<RepoViewer />', ()=> {

    it('should render correctly', ()=> {
        const dom = shallow(<RepoViewer />);
        expect(dom).to.have.length(1);
    });

});
