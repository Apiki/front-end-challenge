import { GetStaticProps } from 'next';
import { useState } from 'react';
import Posts from '../components/Home';
import { api } from '../services/api';

import styles from  './home.module.scss'

type Post = {
  id: string,
  title: string,
  description: string,
  content: string,
  slug: string,
  thumbnail: string,
}

type HomeProps = {
  posts: Post[];
  pages: number;
}

export default function Home({ posts, pages }: HomeProps) {
  const [postList, setPostList] = useState(posts);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(pages);

  const hasPage = page <= totalPages;

  const loadMorePosts = async () => {
    const nextPage = page + 1;

    setPage(nextPage);

    const response = await getPostsPerPage(nextPage);
    const newPosts = getPostList(response.data);
    const newList = [...postList, ...newPosts];

    setPostList(newList);
  }

  return (
    <div className={styles.homeContainer}>
      <Posts postsToRender={postList}/>
      <div className={styles.morePost}>
        <button onClick={loadMorePosts} disabled={!hasPage}>Carregar mais</button>
      </div>
    </div>
  )
}

export async function getPostsPerPage(page: number) {
  const response = await api.get(`posts?_embed&categories=518&page=${page}`);
  
  return response;
}

export function getPostList(data) {
  const list = data.map(post => {
    return {
      id: post.id,
      title: post.title.rendered,
      description: post.excerpt.rendered,
      content: post.content.rendered,
      slug: post.slug,
      thumbnail: post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url,
    };
  })

  return list;
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await getPostsPerPage(1);
  const posts = getPostList(response.data);
  const totalPages = response.headers['x-wp-totalpages'];
  
  return {
      props: {
          posts,
          pages: totalPages,
      },
      revalidate: 60 * 60 * 24, // 24 hours 
  }
}