import React from "react";
import PostCard from "../components/postCard";
import Header from "../components/header";
import { fetchPosts, getHeaders } from "../services/index";
import "./inicial.css";

class Inicial extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pagAtual: 1,
      pagTotal: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { pagAtual } = this.state;
    this.setState({
      data: await fetchPosts(pagAtual),
      pagTotal: await getHeaders(),
    });
  }

  async handleClick(command) {
    const { pagAtual, pagTotal } = this.state;
    if (command === "next") {
      if (pagAtual < pagTotal) {
        await this.setState((state) => ({
          pagAtual: state.pagAtual + 1,
        }));
      }
    } else if (command === "prev") {
      if (pagAtual > 1) {
        await this.setState((state) => ({
          pagAtual: state.pagAtual - 1,
        }));
      }
    }
    this.setState({
      data: await fetchPosts(this.state.pagAtual),
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <header>
          <Header />
        </header>

        <div className="titulo">
          <h1>Blog Apiki</h1>
          <h3>Desenvolvimento</h3>
        </div>

        <div className="container-posts">
          {data.map((post, index) => (
            <PostCard key={index} dados={post} />
          ))}
        </div>

        <footer>
          <div className="container-buttons">
            <div className="button" onClick={() => this.handleClick("prev")}>
              Voltar uma página
            </div>

            <div className="button" onClick={() => this.handleClick("next")}>
              Carregar mais...
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Inicial;
