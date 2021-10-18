import React from "react";
import PostItem from "../PostItem";

import "./style.css";

export default function PostList({ posts }) {
  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  );
}
