import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const CreateCards = ({ title, image, alt, slug, content }) => (
  <div key={alt} className="content">
    <h1>{title}</h1>
    <img src={image} alt={alt}></img>
    {slug && <Link to={`/${slug}`}><h3>Leia mais sobre a notícia.</h3></Link>}
    {content && content}
  </div>
);

export default CreateCards;
