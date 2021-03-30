import React, { Component } from 'react';
import * as api from '../services/api';
import Card from '../components/Card';
import Loading from '../components/Loading';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getCards();
  }

  async getCards() {
    const cardList = await api.fetchData('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518');
    this.setState({ cards: cardList, loading: false});
  }

  render() {
    const { cards, loading } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
          ) : (
            <div>
              {cards.map((card) => <Card key={card.id} card={card}/>)}
              {console.log(cards)}
            </div>
          )
        }
      </div>
    );
  };
};

export default CardList;
