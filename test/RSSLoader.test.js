import fetchMock from 'fetch-mock';

import RSSLoader from '../src/RSSLoader';
import { fetchFeed, parseFeed } from '../src/RSSLoader';

describe('RSSLoader component', () => {

    it('getFeed returns a Promise', () => {
        const func = RSSLoader.getFeed.call();
        expect(func).toBeInstanceOf(Promise);
        expect(func.then).toBeInstanceOf(Function);
    });

    it('fetchFeed returns a Promise', () => {
        const func = fetchFeed.call();
        expect(func).toBeInstanceOf(Promise);
        expect(func.then).toBeInstanceOf(Function);
    });

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

    it('parseFeed converts good XML string to JSON object', () => {
        const xmlString = `<?xml version="1.0" encoding="UTF-8" ?>
            <rss version="2.0">
            <channel>
                <title>RSS Title</title>
                <description>This is an example of an RSS feed</description>
                <item>
                    <title>One</title>
                    <description>Lorem ipsum</description>
                </item>
                <item>
                    <title>Two</title>
                    <description>Lorem ipsum</description>
                </item>
            </channel>
            </rss>`;

        const expectedJson = {
            rss: {
                '$': {
                    version: '2.0'
                },
                channel: {
                    title: 'RSS Title',
                    description: 'This is an example of an RSS feed',
                    item: {
                        '0': {
                            title: 'One',
                            description: 'Lorem ipsum'
                        },
                        '1': {
                            title: 'Two',
                            description: 'Lorem ipsum'
                        }
                    }
                }
            }
        };

        return parseFeed(xmlString).then(json => {
            expect(json).toEqual(expectedJson);
        });
    });

    describe('Mocking', () => {

        afterEach(() => {
            fetchMock.restore();
        });

        it('getFeed attempts to fetch the given URL', () => {
            const goodUrl = '/200';

            fetchMock.get(goodUrl,
                '<?xml version="1.0" encoding="UTF-8" ?><rss/>');

            return RSSLoader.getFeed(goodUrl).then(() => {
                expect(fetchMock.called()).toBe(true);
            });
        });


        it('fetchFeed rejects on bad attempt', () => {
            const badUrl = '/404';

            fetchMock.get(badUrl, {
                status: 404
            });

            return fetchFeed(badUrl).then(() => {
                throw new Error('Promise should be rejected');
            }, (error) => {
                expect(error).toBeInstanceOf(Error);
            });
        });

    });

});
