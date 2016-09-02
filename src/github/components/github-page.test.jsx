import React from 'react';
import {observable} from 'mobx';
import {Provider} from 'mobx-react';
import {shallow, mount} from 'enzyme';
import GithubPage from './github-page';

describe('<GithubPage>', () => {

    let githubStore;

    describe('with a default store', () => {
        beforeEach(() => {
            githubStore = {
                orgName: '',
                loading: false,
                repos: observable([]),
                error: null
            };
        });

        it('should render correctly', () => {
            const dom = shallow(
                <Provider githubStore={githubStore}>
                    <GithubPage/>
                </Provider>
            );
            expect(dom).to.have.length(1);
        });

        it('should contain the necessary elements', () => {
            const dom = mount(
                <Provider githubStore={githubStore}>
                    <GithubPage/>
                </Provider>
            );

            expect(dom.find('[data-action="loadRepos"]')).to.have.length(1);
            expect(dom.find('[data-element="orgInput"]')).to.have.length(1);

        });

    });

    describe('when <input> is given', () => {
        let githubStore, dom, spy, stub;

        beforeEach(() => {
            githubStore = {
                orgName: '',
                loading: false,
                repos: observable([]),
                error: null,
                setOrgName: () => {
                },
                loadRepos: () => {
                }
            };

            dom = mount(
                <Provider githubStore={githubStore}>
                    <GithubPage/>
                </Provider>
            );
        });

        afterEach(() => {
            spy.restore();
        });

        // Use of Spies to also invoke original behavior
        it('should change "orgName" when <input> value is changed', () => {

            spy = sinon.spy(githubStore, 'setOrgName');

            dom.find('[data-element="orgInput"]')
                .simulate('change', {
                    target: {
                        value: 'sapientglobalmarkets'
                    }
                });

            expect(spy.calledWith('sapientglobalmarkets')).to.equal(true);
        });

        // Use of stubs to avoid invoking original function/behavior
        it('should call "loadRepos()" when the loadRepos <button> is clicked', () => {
            stub = sinon.stub(githubStore, 'loadRepos');

            dom.find('[data-element="orgInput"]')
                .simulate('change', {
                    target: {
                        value: 'sapientglobalmarkets'
                    }
                });

            dom.find('[data-action="loadRepos"]')
                .simulate('click');

            expect(stub.called).to.equal(true);
        });

    });

});
