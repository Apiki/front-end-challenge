import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import { Button, PostGrid, Loading } from '../../components';
import { fetchBlogPosts } from '../../services/apikiAPI';

function Home() {
  const { data, isFetching, error, setPagination, pagination } = useFetchData(
    fetchBlogPosts,
  );

  return (
    <div className="container is-fluid">
      {isFetching && <Loading />}
      {!isFetching && error && <div>{error}</div>}
      {!isFetching && data && (
        <section className="section">
          <h1>Posts</h1>
          <>
            <PostGrid data={data.data} />
          </>
          <div>
            <Button
              value="Carregar Mais"
              onClick={() => setPagination((prevCount) => prevCount + 1)}
              disabled={!!(pagination >= data.headers['x-wp-totalpages'])}
            />
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
