import { PostScreen } from '@/screens/PostScreen';
export default PostScreen;

export async function getStaticPaths() {
  const res = await fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://bl?og.apiki.com/wp-json/wp/v2/posts_embed&slug=${params.slug}`)
  const post = await res.json()



  return { props: { post } }
}
