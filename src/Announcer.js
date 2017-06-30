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

    defaultStyles = {
        position: 'absolute',
        visibility: 'visible',
        overflow: 'hidden',
        display: 'block',
        width: '1px',
        height: '1px',
        margin: '-1px',
        border: '0',
        padding: '0',
        clip: 'rect(0px, 0px, 0px, 0px)',
        clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)',
        whiteSpace: 'nowrap'
    }

    render() {
        const { className, text, politeness } = this.props;
        const styles = className ? {} : this.defaultStyles;

        return (
            <div 
                aria-live={politeness}
                style={styles}
                className={className}
            >
                {
                    text.length ?
                    <p>{text}</p> :
                    null
                }
            </div>
        )
    }
}

export default Announcer;