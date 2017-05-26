import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Announcer from './dist/Announcer';

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
      announcement: 'Here\'s a new annoucement!'
    }));
  }

  render() {
    return (
      <div className="App">
        <Announcer text={this.state.announcement} />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <button type="button" onClick={this.handleClick}>Trigger new annoucement</button>
        </div>
      </div>
    );
  }
}

export default App;
