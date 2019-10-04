import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Announcer extends Component {
    constructor(props) {
      super(props);

      this.state = {
        text: ''
      }
    }

    static propTypes = {
      text: PropTypes.string,
      politeness: PropTypes.string
    }

    static defaultProps = {
      className: '',
      politeness: 'polite'
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      const currentAnnouncement = this.state.text;
      let nextAnnouncement = nextProps.text;

      if (nextAnnouncement === currentAnnouncement) {
        nextAnnouncement = nextAnnouncement + '\u00A0';
      }

      this.setState(prevState => ({
        text: nextAnnouncement
      }));
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
        const { className, text, politeness, ...props } = this.props;
        const styles = className ? {} : this.defaultStyles;
        return (
            <div
                aria-atomic
                aria-live={politeness}
                style={styles}
                className={className}
                {...props}
            >
                {
                    this.state.text.length ?
                    <p>{this.state.text}</p> :
                    null
                }
            </div>
        )
    }
}

export default Announcer;
