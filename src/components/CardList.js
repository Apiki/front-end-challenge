import React, { Component } from 'react';
import * as api from '../services/api';
import Card from '../components/Card';
import Loading from '../components/Loading';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: '',
      nextPage: 2,
      loading: true,
    };
  }

  componentDidMount() {
    this.getCards();
  }

  async getCards() {
    const cardList = await api.fetchData('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518');
    this.setState({ cards: cardList, loading: false });
  }

  loadMore = async () => {
    const cardList = await api.fetchData(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${this.state.nextPage}`);
    this.setState({ nextPage: this.state.nextPage + 1, cards: [...this.state.cards, ...cardList] });
  }

  render() {
    const { cards, loading } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
          ) : (
            <div className="container">
              <div className="row">
                  {cards.map((card) => <Card key={card.id} card={card}/>)}
                </div>
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={this.loadMore}
              >
                Carregar mais
              </button>
            </div>
          )
        }
      </div>
    );
  };
};

export default CardList;
