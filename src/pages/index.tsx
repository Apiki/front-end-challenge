import axios from "axios";
import { useEffect, useState } from "react";
import { PostCard } from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
      .then((res) => setPosts(res.data));
  }, []);

  console.log(posts);

  return (
    <>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  );
}

export default Home;
