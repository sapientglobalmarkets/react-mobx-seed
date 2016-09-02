import {GithubStore} from './github.store';

describe('Github Store', () => {

    let store,
        service;

    beforeEach(() => {

        store = new GithubStore();

    });


    it('should have empty repos', () => {
        expect(store.repos.length).to.equal(0);
    });

    describe('when repos are requested', () => {
        beforeEach(() => {
            service = {
                getReposFor() {
                    return Promise.resolve([
                        {name: 'first'},
                        {name: 'second'}
                    ]);
                }
            };

            store.setService(service);
        });

        it('it should contain 2 repos', (done) => {

            store.loadRepos('sapientglobalmarkets');

            setTimeout(() => {
                expect(store.repos.length).to.equal(2);
                done();
            }, 0);
        });
    });


});
