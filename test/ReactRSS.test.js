import React from 'react';

import ReactRSS from '../src/ReactRSS';

describe('ReactRSS', () => {

    it('requires a URL string property', () => {
        expect(ReactRSS.propTypes.url).toBe(React.PropTypes.string.isRequired);
    });

    it('optionally takes a count number property', () => {
        expect(ReactRSS.propTypes.count).toBe(React.PropTypes.number);
    });

    it('fetches the given URL');

    it('renders one item per feed item');

    it('enforces the count property');

});
