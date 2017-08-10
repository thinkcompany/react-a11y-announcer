import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Announcer from '../../src/Announcer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcement: '',
      cards: [
        {name:'Kitten McMittens'},
        {name:'Cindy Clawford'},
        {name:'Guy Purri'},
        {name:'Chester Fishington'},
        {name:'Bing Clawsby'},
      ]
    }

    this.deleteElement = this.deleteElement.bind(this);
  }

  deleteElement(id, card) {
    this.setState({
      cards: this.state.cards.filter(function (e, i) {
        return i !== id;
      })
    });

    this.pushAnnouncement(`${card.name} has been removed.`);
  }

  pushAnnouncement(announcement) {
    this.setState(prevState => ({
      announcement: announcement
    }));
  }

  render() {

    var cards = this.state.cards.map(function(card, i) {
      return <div className="card" key={ i }>
        <img src="http://lorempixel.com/output/cats-q-c-200-200-6.jpg"/>
        <div className="card-content">
          <p>{card.name}</p>
          <button onClick={ ()=> this.deleteElement(i, card)}  className="card-close-btn" type="button">Remove card</button>
        </div>
      </div>
    }, this);

    return (
      <div className="App">
        <Announcer text={this.state.announcement} />
        <div className="App-header">
          <h2>Delete Card Example</h2>
          <div className="cards-row">
            {cards}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('container'))

if (module.hot) { module.hot.accept() }
