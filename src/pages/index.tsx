import { useState, useEffect } from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';

import Card from '~/components/Card';
import { Container, Content, LoadMoreBtn } from '~/styles/pages/home';
import getPosts from '~/utils/getPosts';

type HomeProps = {
  totalPages: number;
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
  slug: string;
  author: string;
};

function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<HomeProps[]>(props.posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts: morePosts } = await getPosts(currentPage);
      const allPosts: any = [...posts, ...morePosts];
      setPosts(allPosts);
    };

    if (currentPage > 1 && currentPage <= props.totalPages) fetchPosts();
  }, [currentPage]);

  return (
    <Container>
      <Content>
        {posts.map((post, index) => (
          <Card data={post} key={index} />
        ))}
        <LoadMoreBtn>
          {currentPage < props.totalPages && (
            <span onClick={() => setCurrentPage(currentPage + 1)}>
              Carregar mais
            </span>
          )}
        </LoadMoreBtn>
      </Content>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts, totalPages } = await getPosts(1);

  return {
    props: {
      posts,
      totalPages,
    },
    revalidate: 60 * 60 * 6, // 6 hours
  };
};

export default Home;
