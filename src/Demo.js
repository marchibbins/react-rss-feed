import React from 'react';
import ReactDOM from 'react-dom';

/* global ReactRSS */

export default class Demo extends React.Component {

    render () {
        return (
            <ReactRSS/>
        );
    }

}

ReactDOM.render(<Demo/>, document.getElementById('react-rss-demo'));
