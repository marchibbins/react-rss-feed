import React from 'react';
import ReactDOM from 'react-dom';

/* global RSSFeed */

export default class Demo extends React.Component {

    render () {
        return (
            <RSSFeed url="#"/>
        );
    }

}

ReactDOM.render(<Demo/>, document.getElementById('react-rss-feed-demo'));
