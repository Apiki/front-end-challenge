import React from 'react';
import PostCard from '../components/postCard';
import { fetchPosts, getHeaders } from '../services/index';

class Inicial extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pagAtual: 1,
      pagTotal: 1,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { pagAtual } = this.state;
    this.setState({
      data: await fetchPosts(pagAtual),
      pagTotal: await getHeaders(),
    });
  };

  async handleClick() {
    const { pagAtual, pagTotal } = this.state;
    if (pagAtual < pagTotal) {
      await this.setState((state) => ({
        pagAtual: state.pagAtual + 1,
      }))
    }
    this.setState({
      data: await fetchPosts(this.state.pagAtual),
    })
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <h1>PáginaInicial</h1>
        { data.map((post, index) => <PostCard key = { index } dados = { post }/>) }
        <button
          onClick={ () => this.handleClick() }
        >
          Carregar mais...
        </button>
      </div>
    )
  }
}

export default Inicial;
