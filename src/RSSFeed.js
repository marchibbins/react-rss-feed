import React from 'react';

import RSSItem from './RSSItem';

export default class RSSFeed extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            feed: []
        };
    }

    render () {
        return (
            <div>
                {this.state.feed.map((item, i) => <RSSItem key={i} {...item}/>)}
            </div>
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
