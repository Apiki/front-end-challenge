import { PostCard } from '@/components/PostCard';
import Head from 'next/head';

import { PostsListWrapper } from './style';

export function HomeScreen() {
  return (
    <>
      <Head>
        <title>Apiki Blog</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      
      <main>
        <PostsListWrapper>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostsListWrapper>
      </main>
    </>
  )
}