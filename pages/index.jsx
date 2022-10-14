import Footer from "../components/footer";
import Header from "../components/header";
import PostsContainer from "../components/postsContainer";
import AppProvider from "../context/AppProvider";
import { requestPosts } from "../services/fetchAPI";


export default function Home({ posts }) {

  return (
    <AppProvider data={posts}>
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