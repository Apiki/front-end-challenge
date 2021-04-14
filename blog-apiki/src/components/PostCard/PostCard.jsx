import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Paragraph, Image } from './styles';

const PostCard = ({
  post: {
    title: { rendered },
    slug,
    _embedded,
  },
}) => {
  return (
    <Container>
      <Image
        src={
          _embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
        }
        alt={`${slug}`}
      />
      <Paragraph>{rendered}</Paragraph>
      <Link to={`/post/${slug}`}>
        <Button>Ler postagem</Button>
      </Link>
    </Container>
  );
};

export default PostCard;
