import React from 'react';

const CardPost = ({ title, photo, content }) => {
  return (
    <div>
      <h1 style={{ color: '#0098e4'}}>{title}</h1>
      <img src={photo} alt="pictureCard" />
      <p>{content}</p>
    </div>
  );
}

export default CardPost;
