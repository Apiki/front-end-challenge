import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { requestPosts } from '../../services/fetchAPI';
import PostCard from '../postCard';
import { Btn, BtnContainer, PageCount, PostContainer } from './style';

export default function PostsContainer() {
  const [page, setPage] = useState(1);
  const { posts, setPosts } = useContext(AppContext);

  useEffect(() => {
    const getPosts = async () => {
      const request = await requestPosts(page);
      setPosts(request);
    };
    getPosts();
  }, [page, setPosts]);

  console.log(posts, 'oi')
  return (
    <PostContainer>
      {posts?.data && posts.data.map((post, i) => (
        <PostCard key={i} info={
          {
            image: post["yoast_head_json"]["og_image"][0].url.replace('.png', '-350x250.png'),
            title: post.title.rendered,
            slug: post.slug,
            author: post["yoast_head_json"]["twitter_misc"]["Escrito por"],
            description: post['yoast_head_json'].description,
          }
        } />
      ))}
      <BtnContainer>
        <Btn onClick={() => setPage(page === 1 ? 1 : page - 1)}>Voltar</Btn>
        <PageCount>{`${page} de ${posts?.totalPages}`}</PageCount>
        <Btn onClick={() => setPage(page < posts.totalPages ? page + 1 : page)}>Carregar mais...</Btn>
      </BtnContainer>

    </PostContainer>
  )
}

