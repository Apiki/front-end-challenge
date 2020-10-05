import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { image, title, sendTo } = props;
  return (
    <Link to={sendTo}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </Link>
  );
}
