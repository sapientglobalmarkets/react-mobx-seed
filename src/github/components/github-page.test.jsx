import React from 'react';
import {shallow, mount} from 'enzyme';
import GithubPage from './github-page';
import {Provider} from 'mobx-react';

describe('<GithubPage>', () => {

    let store;

    describe('with a default store', () => {
        beforeEach(() => {
            store = {github: {orgName: '', repos: []}};
        });

        it('should render correctly', () => {
            const dom = shallow(
                <Provider store={store}>
                    <GithubPage/>
                </Provider>
            );
            expect(dom).to.have.length(1);
        });

        it('should contain the necessary elements', () => {
            const dom = mount(
                <Provider store={store}>
                    <GithubPage/>
                </Provider>
            );
            expect(dom.find('[data-action="loadRepos"]')).to.have.length(1);
            expect(dom.find('[data-element="input"]')).to.have.length(1);

        });

    });

    describe('when <input> is given', () => {
        let store, dom, spy;

        beforeEach(() => {
            store = require('../../store').store;

            dom = mount(
                <Provider store={store}>
                    <GithubPage/>
                </Provider>
            );
        });

        afterEach(() => {
            spy.restore();
        });

        // Use of Spies to also invoke original behavior
        it('should change "orgName" when <input> value is changed', () => {

            spy = sinon.spy(store.github, 'setOrgName');

            dom.find('[data-element="input"]')
                .simulate('change', {
                    target: {
                        value: 'sapientglobalmarkets'
                    }
                });

            expect(spy.calledWith('sapientglobalmarkets')).to.equal(true);
            expect(store.github.orgName).to.equal('sapientglobalmarkets');
        });

        // Use of stubs to avoid invoking original function/behavior
        it('should call "loadRepos()" when the loadRepos <button> is clicked', () => {
            spy = sinon.stub(store.github, 'loadRepos');

            dom.find('[data-element="input"]')
                .simulate('change', {
                    target: {
                        value: 'sapientglobalmarkets'
                    }
                });

            dom.find('[data-action="loadRepos"]')
                .simulate('click');

            expect(spy.called).to.equal(true);
        });

    });


});
