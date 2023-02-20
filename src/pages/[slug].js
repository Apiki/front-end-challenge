import { PostScreen } from '@/screens/PostScreen';
export default PostScreen;

export async function getStaticPaths() {
  const posts = [];
  let pageNumber = 1;

  while(true) {
    const res = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&per_page=100&page=${pageNumber}`)
    const newPosts = await res.json();

    if(newPosts.length === 0) {
      break
    };

    posts.push(...newPosts);
    pageNumber++;

    const paths = posts.map(post => ({
      params: {
        slug: post.slug
      }
    }));

    return {
      paths, 
      fallback: false
    }
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${params.slug}`);
  const post = await res.json();

  return { 
    props: { 
      post,
  }}
}