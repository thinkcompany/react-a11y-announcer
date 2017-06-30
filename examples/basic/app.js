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
          <h2>Basic Announcer Example</h2>
          <button type="button" onClick={this.handleClick}>Trigger new announcement</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('container'))

if (module.hot) { module.hot.accept() }
