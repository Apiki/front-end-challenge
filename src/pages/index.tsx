import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

import { CommonCard } from '../components/CommonCard';
import { MainCard } from '../components/MainCard';

import { Post } from '../@types/post';

import { api } from '../services/api';

import { HomeContainer } from '../styles/home';

interface Header {
  'x-wp-total': number;
  'x-wp-totalpages': number;
}

interface HomeProps {
  initialPosts: Post[];
  header: Header;
}

export default function Home({ initialPosts, header }: HomeProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(2);

  const totalPages = header['x-wp-totalpages'];
  const totalPosts = header['x-wp-total'];

  async function handleGetMorePosts() {
    if (page > totalPages) return;

    const response = await api.get('', { params: { categories: 518, page } });
    const newPosts = response.data as Post[];

    setPosts((state) => state.concat(newPosts));
    setPage((state) => (state += 1));
  }

  useEffect(() => {
    setPosts(initialPosts);
  }, []);

  return (
    <HomeContainer>
      <h1>CONFIRA AS ÚLTIMAS POSTAGENS</h1>
      <MainCard
        lastFourPosts={[
          initialPosts[0],
          initialPosts[1],
          initialPosts[2],
          initialPosts[3],
        ]}
      />

      <hr />
      <h1>Todas as postagens</h1>

      <div>
        {posts.map((post) => (
          <CommonCard
            key={post.id}
            title={post.title.rendered}
            excerpt={post.excerpt.rendered}
            // source_url={post._embedded['wp:featuredmedia'][0].source_url}
            source_url={post.yoast_head_json.og_image[0].url}
            slug={post.slug}
          />
        ))}
      </div>
      <button onClick={handleGetMorePosts} disabled={page === totalPages}>
        Carregar mais postagens
      </button>
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('', { params: { categories: 518 } });

  const initialPosts = response.data as Post[];
  const header = {
    'x-wp-total': Number(response.headers['x-wp-total']),
    'x-wp-totalpages': Number(response.headers['x-wp-totalpages']),
  };

  return {
    props: {
      initialPosts,
      header,
    },
    revalidate: 60 * 60 * 8,
  };
};
