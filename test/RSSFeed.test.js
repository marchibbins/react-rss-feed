import React from 'react';

import { shallow } from 'enzyme';

import RSSFeed from '../src/RSSFeed';
import RSSItem from '../src/RSSItem';

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

    it('fetches the given URL');

    it('requires a blockName string property', () => {
        expect(RSSFeed.propTypes.blockName).toBe(React.PropTypes.string.isRequired);
    });

    it('has a default blockName property', () => {
        expect(RSSFeed.defaultProps.blockName).toMatch(/^\w/);
    });

    it('populates feed array in state');

    it('enforces the count property');

    describe('Rendering', (wrapper = null) => {

        const props = {
            blockName: 'rss-feed',
            url: '//example.com/feed.rss'
        };

        const state = {
            feed: [
                {title: 'One', description: 'Lorem ipsum', link: '#'},
                {title: 'Two', description: 'Lorem ipsum', link: '#'},
                {title: 'Three', description: 'Lorem ipsum', link: '#'}
            ]
        };

        beforeEach(() => {
            wrapper = shallow(<RSSFeed {...props}/>);
        });

        it('has an initial state containing an empty feed array', () => {
            expect(wrapper.state().feed).toEqual([]);
        });

        it('renders one RSSItem per element in feed array', () => {
            wrapper.setState(state);
            expect(wrapper.find(RSSItem).length).toBe(state.feed.length);
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

    });

});
