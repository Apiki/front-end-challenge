import Head from 'next/head';
import Footer from "../components/footer";
import Header from "../components/header";
import PostsContainer from "../components/postsContainer";
import AppProvider from "../context/AppProvider";
import { requestPosts } from "../services/fetchAPI";

export default function Home({ posts }) {

  return (
    <AppProvider data={posts}>
      <Head>
        <title>Blog da Apiki sobre Desenvolvimento</title>
        <meta name='description' content='Oque você quer saber sobre Desenvolvimento Web ?' />
        <meta property='og:title' content='Blog da Apiki sobre Desenvolvimento' />
        <meta
          property='og:description'
          content='Oque você quer saber sobre Desenvolvimento Web ?'
        />
        <link rel='icon' href='https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/favicon-apiki-magenta-75x75.png' />
      </Head>
      <Header />
      <PostsContainer />
      <Footer />
    </AppProvider>
  )
}

export const getStaticProps = async () => {
  const request = await requestPosts(1);
  const posts = request;
  return {
    props: {
      posts,
    },
    revalidate: 360
  };
};