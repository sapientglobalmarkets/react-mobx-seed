import {shallow} from 'enzyme';
import {Clock} from './';

describe('<Clock>', ()=> {

    it('should render correctly', ()=> {
        const dom = shallow(<Clock/>);
        expect(dom).to.have.length(1);
    });

    it('should render the time in <h2>', ()=> {
        const dom = shallow(<Clock/>);
        expect(dom.find('h2')).to.have.length(1);

    });

});
