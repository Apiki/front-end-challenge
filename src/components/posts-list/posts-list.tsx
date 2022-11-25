import React from "react";
import { Link } from "react-router-dom";

import { StyledPostsList, StyledPostsListItem } from "./posts-list-styles";

type TPostsList = {
  posts: any[];
};

export const PostsList = ({ posts }: TPostsList) => {

  return (
    <StyledPostsList>
      {posts.map((post) => (
        <StyledPostsListItem key={post.id}>
          <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} alt={post._embedded['wp:featuredmedia'][0].title} className="thumb-post"/>
          <div className="legend-post">
            <h2 className="title-post">{post.title.rendered}</h2>
            <Link to={`/post/${post.slug}`} className="btn-post">Saiba mais</Link>
          </div>
        </StyledPostsListItem>
      ))}
    </StyledPostsList>
  );
};
