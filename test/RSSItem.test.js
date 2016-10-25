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

    describe('Rendering', () => {

        const props = {
            title: 'Lorem ipsum',
            description: 'Dolor sit amet',
            link: '//example.com/lorem-ipsum'
        };

        let wrapper;

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

    });

});
