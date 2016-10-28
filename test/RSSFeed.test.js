import React from 'react';

import { mount, shallow } from 'enzyme';

import RSSFeed from '../src/RSSFeed';
import RSSItem from '../src/RSSItem';
import RSSLoader from '../src/RSSLoader';

describe('RSSFeed component', () => {

    it('requires a URL string property', () => {
        expect(RSSFeed.propTypes.url).toBe(React.PropTypes.string.isRequired);
    });

    it('optionally takes a count number property', () => {
        expect(RSSFeed.propTypes.count).toBe(React.PropTypes.number);
    });

    it('has a default count property of 10', () => {
        expect(RSSFeed.defaultProps.count).toBe(10);
    });

    it('requires a blockName string property', () => {
        expect(RSSFeed.propTypes.blockName).toBe(React.PropTypes.string.isRequired);
    });

    it('has a default blockName property', () => {
        expect(RSSFeed.defaultProps.blockName).toMatch(/^\w/);
    });

    describe('Rendering', (wrapper = null) => {

        const props = {
            blockName: 'rss-feed',
            url: '//example.com/feed.rss'
        };

        const state = {
            items: [
                {title: 'One', description: 'Lorem ipsum', link: '#'},
                {title: 'Two', description: 'Lorem ipsum', link: '#'},
                {title: 'Three', description: 'Lorem ipsum', link: '#'}
            ]
        };

        beforeEach(() => {
            wrapper = shallow(<RSSFeed {...props}/>);
        });

        it('has an initial state containing an empty items array', () => {
            expect(wrapper.state().items).toEqual([]);
        });

        it('renders one RSSItem per element in items array', () => {
            wrapper.setState(state);
            expect(wrapper.find(RSSItem).length).toBe(state.items.length);
        });

        it('uses the blockName in root element class', () => {
            expect(wrapper.hasClass(props.blockName)).toBe(true);
        });

        it('passes blockName to each RSSItem', () => {
            wrapper.setState(state);
            wrapper.find(RSSItem).forEach(function (item) {
                expect(item.props().blockName).toBe(props.blockName);
            });
        });

        describe('Mocking', (wrapper = null) => {

            beforeEach(() => {
                RSSLoader.getFeed = jest.fn().mockReturnValue(new Promise((resolve) => {
                    resolve({
                        rss: {
                            channel: {
                                // xmljson converts items array to object
                                item: Object.assign(...state.items.map((item, i) => ({[i]: item})))
                            }
                        }
                    });
                }));
            });

            afterEach(() => {
                RSSLoader.getFeed.mockClear();
            });

            it('attempts to get the feed at the given URL', () => {
                wrapper = mount(<RSSFeed {...props}/>);
                expect(RSSLoader.getFeed).toBeCalledWith(props.url);
            });

            it('populates state with items from feed', () => {
                wrapper = mount(<RSSFeed {...props}/>);
                return Promise.resolve().then(() => {
                    expect(wrapper.state().items).toEqual(state.items);
                });
            });

            it('limits the number of items to the count property', () => {
                const count = 2;
                wrapper = mount(<RSSFeed {...props} count={count}/>);
                return Promise.resolve().then(() => {
                    expect(wrapper.state().items.length).toBe(count);
                });
            });

        });

    });

});
