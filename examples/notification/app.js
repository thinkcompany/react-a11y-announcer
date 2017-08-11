
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Announcer from '../../src/Announcer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcement: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      announcement: 'Here\'s a new announcement!'
    }));
  }

  render() {
    return (
      <div className="App">
        <Announcer text={this.state.announcement} />
        <div className="App-header">
          <h2>Notification Example</h2>
          <Notification />
          <button type="button" onClick={this.handleClick}>Launch Notification</button>
        </div>
      </div>
    );
  }
}

class Notification extends React.Component {
  render() {
    return (
      <div className="notification">
        This is a notification
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('container'))

if (module.hot) { module.hot.accept() }
