import { Component } from 'react';
import { Link } from 'react-router-dom';

class Cards extends Component {
  render() {
    const { image, title, slug } = this.props;
    return (
      <div className="card flex-container">
        <img src={image} alt=""/>
        <div className="description flex-container">
          <h4 className="card-title">{title}</h4>
          <Link to={`/article/${slug}`} >Veja mais...</Link>
        </div>
      </div>
    );
  }
}

export default Cards;