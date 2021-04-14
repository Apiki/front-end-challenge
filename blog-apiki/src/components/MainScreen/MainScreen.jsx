import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import apiApiki from '../../API/apiApiki';
import Loading from '../../pages/Loading/Loading';
import { Container, Button } from './style';

const MainScreen = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(1);

  const nextPagePost = () => {
    if (pages >= totalPages) {
      setPages(1);
    }
    setPages((prevCount) => prevCount + 1);
  };

  /*  const previousPagePost = () => {
    if (pages > 1) {
      console.log(pages);
      setPages((prevCount) => prevCount - 1);
    }
  }; */

  useEffect(() => {
    apiApiki(pages)
      .then((response) => {
        setTotalPages(response.headers.get('X-WP-TotalPages'));
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [pages]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      {data.map((data) => (
        <PostCard key={data.id.toString()} post={data} />
      ))}
      <Button onClick={nextPagePost}>Carregar mais</Button>
      {/*  <Button onClick={previousPagePost}>Post anterior!</Button> */}
    </Container>
  );
};

export default MainScreen;
