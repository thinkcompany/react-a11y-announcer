

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Announcer from '../../src/Announcer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcement: '',
      modalActive: false
    }

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState(prevState => ({
      announcement: 'A modal has opened',
      modalActive: true
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevState !== this.state.modalActive) {
      this.nameInput.focus();
    }
  }

  render() {
    const modalClasses = this.state.modalActive ? 'modal is-active' : 'modal';
    return (
      <div className="App">
        <Announcer text={this.state.announcement} />
        <div className="App-header">
          <h2>Modal Example</h2>
          <button type="button" onClick={this.openModal}>Open the modal</button>
        </div>
        <div className={modalClasses}>
          <h2>This is a modal</h2>
          <p>There should be some content here, and a button below</p>
          <button ref={(input) => { this.nameInput = input; }} >Close the modal</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('container'))

if (module.hot) { module.hot.accept() }
