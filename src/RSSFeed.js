import React from 'react';

import RSSLoader from './RSSLoader';
import RSSItem from './RSSItem';

export default class RSSFeed extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount () {
        RSSLoader.getFeed(this.props.url)
            .then(feed => {
                let items = feed.rss.channel.item; // Converted as object not an array
                this.setState({
                    items: Object.keys(items).map(key => items[key])
                                             .slice(0, this.props.count)
                });
            })
            .catch(error => {
                // TODO: Handle fetch or parse error
                // eslint-disable-next-line no-console
                console.error(error);
            });
    }

    render () {
        return (
            <section className={`${this.props.blockName}`}>
                {this.state.items.map((item, i) => {
                    return <RSSItem key={i} {...item}
                                    blockName={this.props.blockName}/>;
                })}
            </section>
        );
    }

}

RSSFeed.propTypes = {
    blockName: React.PropTypes.string.isRequired,
    count: React.PropTypes.number,
    url: React.PropTypes.string.isRequired
};

RSSFeed.defaultProps = {
    blockName: 'rss-feed',
    count: 10
};
