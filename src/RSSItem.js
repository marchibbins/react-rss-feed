import React from 'react';

export default class RSSItem extends React.Component {

    render () {
        return (
            <article>
                <h2><a href={this.props.link}>{this.props.title}</a></h2>
                <p>{this.props.description}</p>
            </article>
        );
    }

}

RSSItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired
};
