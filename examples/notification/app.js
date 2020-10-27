
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Announcer from '../../src/Announcer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcement: '',
      notification: ''
    }

    this.createNotification = this.createNotification.bind(this);
  }

  createNotification() {
    this.setState(prevState => ({
      announcement: 'Here is a notification!',
      notification: 'Here is a notification!'
    }));

    setTimeout(()=> {
      this.setState(prevState => ({
        notification: ''
      }));
    }, 2000);
  }

  render() {

    return (
      <div className="App">

        <div className="App-header">
          <h2>Notification Example</h2>
          <Notification text={this.state.notification} />
          <button type="button" onClick={this.createNotification}>Launch Notification</button>
        </div>
      </div>
    );
  }
}

class Notification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const text = this.props.text;
    const classes = this.props.text.length ? 'notification is-active' : 'notification';
    return (
      <div className={classes}>
        {
            text.length ?
            <p>{text}</p> :
            null
        }
        <Announcer text={this.props.text} />
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('container'))

if (module.hot) { module.hot.accept() }
