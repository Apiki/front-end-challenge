import React from "react";
import { Link } from "react-router-dom";
import "./postCard.css";
import wordPress from "../images/WordPress.png";

class PostCard extends React.Component {
  render() {
    const {
      title: { rendered },
      slug,
      _embedded,
    } = this.props.dados;
    let imgURL;
    let altTxt;
    if (_embedded["wp:featuredmedia"] != null) {
      imgURL = _embedded["wp:featuredmedia"][0].source_url;
      altTxt = _embedded["wp:featuredmedia"][0].alt_text;
    } else {
      imgURL = wordPress;
      altTxt = "WordPress Logo";
    }
    return (
      <div className="container-card">
        <img className="img-card" src={imgURL} alt={altTxt}></img>
        <p>{rendered}</p>
        <Link to={`/${slug}`}>
          <p>{slug}</p>
        </Link>
      </div>
    );
  }
}

export default PostCard;
