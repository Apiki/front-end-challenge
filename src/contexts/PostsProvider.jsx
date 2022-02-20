import PostsContext from "./index";
import { useState } from "react";

export default function PostsProvider(props) {
  const [posts, setPosts] = useState([]);
  const [morePosts, setMorePosts] = useState([]);

  const postsContextValues = {
    posts,
    setPosts,
    morePosts,
    setMorePosts,
  };

  return (
    <PostsContext.Provider value={postsContextValues}>
      {props.children}
    </PostsContext.Provider>
  );
}
