import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { id, title, date } = this.props.card;
    return (
      <div>
        <h1>{title.rendered}</h1>
        <p>{id}</p>
        <p>{date}</p>
      </div>
    )
  };
};

export default Card;
