import React from 'react';
import ReactDOM from 'react-dom';

export default class Demo extends React.Component {

    render () {
        return (
            <h1>Demo</h1>
        );
    }

}

ReactDOM.render(<Demo/>, document.getElementById('react-rss-demo'));
