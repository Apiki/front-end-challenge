import Head from 'next/head';
import { getPosts } from '../utils/wordpress';
import Header from '../components/Header';

import Footer from '../components/Footer';

import Post from '../components/Post';

export default function useGetPosts({ posts, error }) {
  const jsxPosts = posts.map((post) => {
    const featuredMedia = post['_embedded']['wp:featuredmedia'][0];

    if (error) return <h1>Something went wrong!</h1>

    if (!posts) return <h1>Loading...</h1>

    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <>
      <Head>
        <title>Tech Blog</title>
        <meta
          name="description"
          content="Keep up to date with the latest trends in tech"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-8 sm:py-4 lg:py-8 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Desenvolvimento</h2>
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6 auto-rows-[minmax(0,_2fr)]">
            {jsxPosts}
          </div>
        </div>
      </div>


      <Footer />

    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}