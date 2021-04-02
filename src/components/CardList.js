import React, { Component } from 'react';
import * as api from '../services/api';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import Loading from '../components/Loading';
import '../style/cards.css';

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
      <div className="page-wrapper">
        {loading ? (
          <Loading />
          ) : (
            <div className="content clearfix">
              <div className="main-content">
                <h1 className="recent-post-title">Últimas publicações</h1>
                {cards.map((card) => <Card key={card.id} card={card}/>)}
                {totalPages > nextPage ? (
                  <button
                    className="btn read-more"
                    type="button"
                    onClick={this.loadMore}
                  >
                  Carregar mais
                </button>
                ) : (
                  <div></div>
                )}
              </div>
              <Sidebar />
            </div>
          )
        }
      </div>
    );
  };
};

export default CardList;
