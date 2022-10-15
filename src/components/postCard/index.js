import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Description } from './style';

export default function PostCard(prop) {
  const { image, title, slug, author, description } = prop.info;
  const navigate = useNavigate();

  const handleClick = () => navigate(`/${slug}`)

  return (
    <Card>
      <img src={image} alt={title} onClick={handleClick} />
      <div onClick={handleClick}>
        <h2>{title}</h2>
        <p>{`Por ${author}`}</p>
        <Description>{description}</Description>
      </div>
    </Card>
  )
}
