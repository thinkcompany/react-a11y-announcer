import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Announcer extends Component {
    static propTypes = {
        text: PropTypes.string,
        politeness: PropTypes.string
    }

    static defaultProps = {
        politeness: 'polite'
    }

    render() {
        const { text, politeness } = this.props;

        return (
            <div aria-live={politeness}>
                <p>{text}</p>
            </div>
        )
    }
}

export default Announcer;