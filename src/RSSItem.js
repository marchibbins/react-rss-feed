import React from 'react';

export default class RSSItem extends React.Component {

    render () {
        return (
            <article className={`${this.props.blockName}__item`}>
                <h2 className={`${this.props.blockName}__title`}>
                    <a className={`${this.props.blockName}__link`}
                        href={this.props.link}>
                        {this.props.title}
                    </a>
                </h2>
                <p className={`${this.props.blockName}__description`}>
                    {this.props.description}
                </p>
            </article>
        );
    }

}

RSSItem.propTypes = {
    blockName: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
};
