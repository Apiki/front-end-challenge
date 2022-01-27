import React from "react";

export default function PostCard(props) {

  const {posts} = props

  return posts.map((post) => {
    return (
      <div key={post.id}>
        <a href={post.slug}>
        <h2> {post.title.rendered}</h2>
        </a>
        {post._embedded["wp:featuredmedia"] &&
        <img src={post._embedded["wp:featuredmedia"][0].source_url} alt="img" width="350" />}
      </div>)
    }
    );
}
