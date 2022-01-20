import React, { useState, useEffect } from 'react';
import { fetchLatestPosts, fetchMorePosts } from '../../services/api';
import PostItem from '../../components/PostItem';
import Sidebar from '../../components/Sidebar';
import Breadcrumbs from '../../components/Breadcrumbs';
import ReactLoading from 'react-loading';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [disableButton, setDisableButton] = useState(false);
  const [page, setPage] = useState(2);

  useEffect(() => {
    fetchLatestPosts()
      .then((json) => {
        setPosts(json);
        setIsLoading(false);
      });
  }, []);

  const renderMorePosts = async () => {
    setIsLoading(true)
    fetchMorePosts(page)
      .then((res) => {
        const totalPages = res.headers.get('X-WP-TotalPages')
        if (+page >= totalPages) setDisableButton(true);
        return res.json();
      })
      .then((res) => {
        setPosts([...posts, ...res]);
        setPage(page + 1);
        setIsLoading(false);
      });
  }

  return (
    <div className="home-page">
      <Breadcrumbs></Breadcrumbs>
      <Container>
        <Row>
          <Col xs="12" md="8">
            <Row>
              {posts.map((post) => <PostItem key={post.id} post={post} />)}
            </Row>
            {!isLoading && <Button variant="outline-primary" disabled={disableButton} onClick={renderMorePosts}>Continuar Lendo</Button>}
            {isLoading && <div> <ReactLoading type={"spin"} color={"#28a6ed"} height={150} width={150} /></div>}
          </Col>
          <Col xs="12" md="4">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
