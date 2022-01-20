import { useCallback, useEffect, useMemo, useState } from 'react';
import { Card } from 'Components/Card/Card';
import * as S from './Posts.styles';
import { Post, PostsPage } from 'types/Post';

export const Posts = ({ posts = [], totalPages }: PostsPage) => {
  const [morePosts, setMorePosts] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const showLoadMore = useMemo(() => (isLoading || totalPages > page), [isLoading, page])
  
  const fetchMore = useCallback(() => {
    return fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`)
      .then(res => res.json())
      .then(newPosts => setMorePosts([...morePosts, ...newPosts]))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [page, morePosts]);

  const loadMore = useCallback(() => { 
    setIsLoading(true);
    isError ? fetchMore() : setPage(page + 1)
  } , [page, isError, fetchMore]);

  useEffect(() => { page > 1 && fetchMore(); }, [page]);
    
  return (
    <S.Posts>
      <S.PostsList>{[...posts, ...morePosts].map((post: Post) => <Card key={post.id} post={post} />)}</S.PostsList>
      <S.Button showLoadMore={showLoadMore} disabled={isLoading} onClick={loadMore}>
        {isLoading ? 'Carregando...' : 'Carregar mais'}
      </S.Button>
    </S.Posts>
  )
}