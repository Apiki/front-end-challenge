import PostsContext from "./index";
import { useState } from "react";

export default function PostsProvider(props) {
  const [posts, setPosts] = useState([]);

  const postsContextValues = {
    posts,
    setPosts,
  };

  return (
    <PostsContext.Provider value={postsContextValues}>
      {props.children}
    </PostsContext.Provider>
  );
}
