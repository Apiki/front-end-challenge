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
      totalPages: 0,
      loading: true,
    };
  }

  componentDidMount() {
    this.getCards();
  }

  async getCards() {
    const response = await api.fetchData('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518');
    this.setState({
      cards: response.data,
      loading: false,
      totalPages: parseInt(response.totalPages)
    });
  }

  loadMore = async () => {
    const cardList = await api.fetchData(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${this.state.nextPage}`);
    this.setState({ 
      nextPage: this.state.nextPage + 1,
      cards: [...this.state.cards, ...cardList.data]
    });
  }

  render() {
    const { cards, loading, nextPage, totalPages } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
          ) : (
            <div className="container">
              <div className="row">
                {cards.map((card) => <Card key={card.id} card={card}/>)}
              </div>
              {totalPages > nextPage ? (
                <button
                type="button"
                className="btn btn-secondary"
                onClick={this.loadMore}
              >
                Carregar mais
              </button>
              ) : (
                <div></div>
              )}
            </div>
          )
        }
      </div>
    );
  };
};

export default CardList;
