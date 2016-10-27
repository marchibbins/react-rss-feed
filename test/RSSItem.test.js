import React from 'react';

import { shallow } from 'enzyme';

import RSSItem from '../src/RSSItem';

describe('RSSItem', () => {

    it('requires a title string property', () => {
        expect(RSSItem.propTypes.title).toBe(React.PropTypes.string.isRequired);
    });

    it('requires a description string property', () => {
        expect(RSSItem.propTypes.description).toBe(React.PropTypes.string.isRequired);
    });

    it('requires a link string property', () => {
        expect(RSSItem.propTypes.link).toBe(React.PropTypes.string.isRequired);
    });

    it('requires a blockName string property', () => {
        expect(RSSItem.propTypes.blockName).toBe(React.PropTypes.string.isRequired);
    });

    describe('Rendering', (wrapper = null) => {

        const props = {
            blockName: 'rss-feed',
            title: 'Lorem ipsum',
            description: 'Dolor sit amet',
            link: '//example.com/lorem-ipsum'
        };

        beforeEach(() => {
            wrapper = shallow(<RSSItem {...props}/>);
        });

        it('renders the title of the item', () => {
            expect(wrapper.text()).toContain(props.title);
        });

        it('renders the description of the item', () => {
            expect(wrapper.text()).toContain(props.description);
        });

        it('renders a link to the item', () => {
            const link = wrapper.find(`[href="${props.link}"]`);
            expect(link.length).toBe(1);
            expect(link.type()).toEqual('a');
        });

        it('uses the blockName in title element class');

        it('uses the blockName in description element class');

        it('uses the blockName in link element class');

    });

});
