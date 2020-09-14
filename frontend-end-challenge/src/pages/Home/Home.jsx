import React, { useState, useCallback } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { Button, PostGrid } from '../../components';
import { fetchBlogPosts } from '../../services/apikiAPI';

function Home() {
  const [pageCount, setPageCount] = useState(1);

  // garantido que não haverão renderizações desnecessárias
  const memoizedDataFetch = useCallback(() => fetchBlogPosts(pageCount), [
    pageCount,
  ]);
  const { data, isFetching, error } = useFetchData(memoizedDataFetch);

  return (
    <main>
      {isFetching && <h1>Loading</h1>}
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
              onClick={() => setPageCount((prevCount) => prevCount + 1)}
              disabled={!!(pageCount >= data.headers['x-wp-totalpages'])}
            />
          </div>
        </section>
      )}
    </main>
  );
}

export default Home;
