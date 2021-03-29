import React, { Component } from 'react';
import * as api from '../services/api';
import Card from '../components/Card';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    this.getCards();
  }

  async getCards() {
    const cardList = await api.fetchData('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518');
    this.setState({ cards: cardList});
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        {cards.map((card) => <Card key={card.id} card={card}/>)}
        {console.log(cards)}
      </div>
    );
  };
};

export default CardList;
