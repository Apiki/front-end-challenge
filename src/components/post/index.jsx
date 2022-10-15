import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import defaultImage from '../../assets/images/default-image.png';

export const Post = ({ post }) => {
  Post.proTypes = {
    post: P.shape({
      id: P.number,
      title: P.string,
      excerpt: P.string,
    }),
  };

  return (
    <Link
      key={post.id}
      to="/post/{post.slug}"
      state={{ post: post }}
      className="post"
    >
      {post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
        .source_url ? (
        <div className="post__thumb">
          <img
            src={
              post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
                .source_url
            }
            alt={post.title.rendered}
            width="300"
          />
        </div>
      ) : (
        <div className="">
          <img src={defaultImage} alt="default" width="300" />
        </div>
      )}
      <div className="post__content">
        <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </div>
    </Link>
  );
};
