import { fetchFeed, parseFeed } from '../src/RSSLoader';

describe('RSSLoader component', () => {

    it('attempts to fetch the given URL');

    it('attempts to pase XML string to JSON');

    it('getFeed returns a Promise', () => {
        const func = fetchFeed.call();
        expect(func).toBeInstanceOf(Promise);
        expect(func.then).toBeInstanceOf(Function);
    });

    it('getFeed rejects on bad attempt');

    it('fetchFeed returns a Promise', () => {
        const func = fetchFeed.call();
        expect(func).toBeInstanceOf(Promise);
        expect(func.then).toBeInstanceOf(Function);
    });

    it('fetchFeed rejects on bad attempt');

    it('parseFeed returns a Promise', () => {
        const func = parseFeed.call();
        expect(func).toBeInstanceOf(Promise);
        expect(func.then).toBeInstanceOf(Function);
    });

    it('parseFeed rejects on bad attempt', () => {
        return parseFeed('badXML').then(() => {
            throw new Error('Promise should be rejected');
        }, (error) => {
            expect(error).toBeInstanceOf(Error);
        });
    });

    it('uses polyfill for Promises');

});
