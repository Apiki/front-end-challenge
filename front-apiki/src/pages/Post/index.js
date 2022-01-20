import React, { useState, useEffect } from 'react';
import { fetchPostBySlug } from '../../services/api';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Undefined from '../../assets/undefined.png';
import Sidebar from '../../components/Sidebar';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Post = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPostBySlug(slug)
    .then((json) => {
      setPosts(json[0]);
      setIsLoading(false);
    });
  }, [slug]);
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <Container className="post-page">
      <Row>
      <Col xs="12" md="8" className="content">
      <p id="breadcrumbs"><span><a>Início</a> » <span class="breadcrumb_last" aria-current="page">Blog do Desenvolvedor</span></span></p>
      {isLoading && <div className="loader"><ReactLoading type={"spin"} color={"#28a6ed"} height={150} width={150} /></div>}

      {!isLoading && (
        <>
        <div className="post-title-container scale-up-center">
          <h1 dangerouslySetInnerHTML={{ __html: posts.title.rendered }}></h1>
          <p className="subtitle" dangerouslySetInnerHTML={{ __html: posts.excerpt.rendered }}></p>
          <hr></hr>
          <div className="post-author-container">
            <img
            src={ posts._embedded.author[0].avatar_urls ? posts._embedded.author[0].avatar_urls[24] : Undefined }
            alt={ posts._embedded.author[0].name || 'Undefined'}
            />
            <span>Por: { posts._embedded.author[0].name} - { new Date(posts.date).toLocaleDateString('pt-BR', options) }.</span>
          </div>
        </div>
        <div className="post-content scale-up-center" dangerouslySetInnerHTML={{ __html: posts.content.rendered }}></div>
        </>
      )}
      </Col>
      <Col xs="12" md="4">
          <Sidebar/>
        </Col>
      </Row>
    </Container>
  );
}

export default Post;
