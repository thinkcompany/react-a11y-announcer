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

  handleClick(announcementText) {
    const currentAnnouncement = this.state.announcement;

    if (announcementText === currentAnnouncement) {
      announcementText = announcementText + '\u00A0';
    }

    this.setState(prevState => ({
      announcement: announcementText
    }));
  }

  render() {
    return (
      <div className="App">
        <Announcer text={this.state.announcement} />
        <div className="App-header">
          <h2>Basic Announcer Example</h2>
          <button type="button" onClick={ () => this.handleClick('test')}>Trigger new announcement</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('container'))

if (module.hot) { module.hot.accept() }
