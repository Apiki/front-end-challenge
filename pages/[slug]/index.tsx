import type { NextPage } from 'next'
import Head from 'next/head'
import { Post } from 'Components/Post/Post';
import { PostPage } from 'types/Post';

const Home = (props: PostPage) => {
  return (
    <>
      <Head>
        <title>{props.post.title.rendered} - GGTest</title>
        <meta name="description" content={props.post.excerpt.rendered} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post {...props} />
    </>
  )
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }: { params: { slug: string }}) {
  let props = { post: null, error: false }
  await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${params.slug}`)
    .then(async (res) => {
      const [post] = await res?.json();
      if (post) {
        props = { post, error: false }
      } else {
        props = { post: null, error: true }
      }
    }).catch(() => {
      props.error = true
    });
  console.log(props)
  return { props, revalidate: 1 }
}

export default Home
