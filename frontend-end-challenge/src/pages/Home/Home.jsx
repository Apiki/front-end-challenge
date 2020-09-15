import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import { Button, PostGrid, Loading } from '../../components';
import { fetchBlogPosts } from '../../services/apikiAPI';

function Home() {
  const { data, isFetching, error, setPagination, pagination } = useFetchData(
    fetchBlogPosts,
  );

  return (
    <section>
      {isFetching && <Loading />}
      {!isFetching && error && <div>{error}</div>}
      {!isFetching && data && (
        <section>
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
    </section>
  );
}

export default Home;
