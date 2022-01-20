import type { NextPage } from 'next'
import Head from 'next/head'
import { Posts } from 'Components/Posts/Posts';
import { PostsPage } from 'types/Post';

const Home = (props: PostsPage) => {
  return (
    <>
      <Head>
        <title>Apiki Dev Blog - GGTest</title>
        <meta name="description" content="Teste usando React, next, react-query e styled components para o desafio da Apiki" />
      </Head>
      <Posts {...props} />
    </>
  )
}

export async function getStaticProps() {
  let props = await fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
    .then(async (res) => {
      const posts = await res.json();
      const total = res.headers.get('x-wp-total');
      const totalPages = res.headers.get('x-wp-totalpages');
      return { posts, total, totalPages }
    })

  return { props, revalidate: 1 }
}

export default Home
