import React from 'react';

class ReactRSS extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            feed: []
        };
    }

    render () {
        return (
            <h1>ReactRSS</h1>
        );
    }

}

ReactRSS.propTypes = {
    url: React.PropTypes.string.isRequired,
    count: React.PropTypes.number
};

ReactRSS.defaultProps = {
    count: 10
};

module.exports = ReactRSS;
