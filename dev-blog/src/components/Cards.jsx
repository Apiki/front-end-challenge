import { Component } from 'react';

class Cards extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="card flex-container">
        <div className="card-picture todo-list"></div>
        <div className="description flex-container">
          <h4 className="card-title">
            <a className="card-link" href="">Projeto ToDo List</a>
          </h4>
          <p className="card-description">
            Projeto acadêmico realizado para praticar a manipulação de objetos
            DOM com JavaScript Vanilla
          </p>
        </div>
      </div>
    );
  }
}

export default Cards;