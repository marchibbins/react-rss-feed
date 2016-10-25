import React from 'react';

class RSSFeed extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            feed: []
        };
    }

    render () {
        return (
            <h1>React RSS Feed</h1>
        );
    }

}

RSSFeed.propTypes = {
    url: React.PropTypes.string.isRequired,
    count: React.PropTypes.number
};

RSSFeed.defaultProps = {
    count: 10
};

module.exports = RSSFeed;
