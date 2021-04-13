import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Paragraph } from './styles';

const PostCard = ({
  post: {
    title: { rendered },
    slug,
    _embedded,
  },
}) => {
  return (
    <Container>
      <img
        style={{ width: '100%', maxHeight: '50%' }}
        src={
          _embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
        }
        alt={`${slug}`}
      />
      <Paragraph>{rendered}</Paragraph>
      <Button>
        <Link to={`/post/${slug}`}>Ler postagem</Link>
      </Button>
    </Container>
  );
};

export default PostCard;
