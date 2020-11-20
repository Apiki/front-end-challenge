import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

class Cards extends Component {
  render() {
    const { image, title, slug } = this.props;
    return (
      <div className="card flex">
        <img className="card__image" src={image} alt=""/>
        <div className="card__description flex">
          <h4 className="card__title">{title}</h4>
          <Link to={`/article/${slug}`} ><button className="card__button">Leia esse artigo</button></Link>
        </div>
      </div>
    );
  }
}

export default Cards;