import React from 'react';

import ReactRSS from '../src/ReactRSS';

describe('ReactRSS', () => {

    it('requires a URL string property', () => {
        expect(ReactRSS.propTypes.url).toBe(React.PropTypes.string.isRequired);
    });

    it('optionally takes a count number property', () => {
        expect(ReactRSS.propTypes.count).toBe(React.PropTypes.number);
    });

    it('has a default count property of 10', () => {
        expect(ReactRSS.defaultProps.count).toBe(10);
    });

    it('has an initial state containing an empty feed array');

    it('fetches the given URL');

    it('populates feed array in state');

    it('renders one element per item in feed array');

    it('enforces the count property');

});
