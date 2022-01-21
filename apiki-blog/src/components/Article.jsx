import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Container, 
        Image, 
        Title, 
        Description, 
        ContainerInfo,
        ContainerImage,
        By} from '../styles/ArticleList'

const Article = (props) => {
  const navigate = useNavigate()
  return (
  <Container onClick={() => navigate(props.slug)}>
    <ContainerImage>
      <Image 
        src={props.img_src}
        alt={props.img_desc}
      />
    </ContainerImage>
    <ContainerInfo>
      <Title>{props.article_title}</Title>
      <Description>
        {props.article_description}
      </Description>
      <By>Por: {props.author}</By>
    </ContainerInfo>
  </Container>
  )
};

export default Article;
