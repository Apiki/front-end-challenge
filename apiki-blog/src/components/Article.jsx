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
      <Title dangerouslySetInnerHTML={{__html: props.article_title}} />
      <Description dangerouslySetInnerHTML={{__html: props.article_description}} />
      <By>By {props.author}</By>
    </ContainerInfo>
  </Container>
  )
};

export default Article;
