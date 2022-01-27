import React from "react";
import { Link } from "react-router-dom"

export default function PostCard(props) {

  const {posts} = props

  return posts.map((post) => {
    return (
      <div id="post-card" key={post.id}>
        <Link to={post.slug}>
          <h2> {post.title.rendered}</h2>
        </Link>
        {post._embedded["wp:featuredmedia"] ?
          <img src={post._embedded["wp:featuredmedia"][0].source_url} alt="img" width="350" /> :
          <img src="/no-img.png" alt="no-img" width="350" />
        }
      </div>)
    }
    );
}
