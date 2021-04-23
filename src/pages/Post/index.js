import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { api } from '../../services/api';

const Post = () => {
  const [data, setData] = useState();
  let { slug } = useParams();

  useEffect(() => {
    async function getPost() {
      const response = await api.get(`/posts?_embed&slug=${slug}`);

      setData(response.data);
      console.log(response.data);
    }
    getPost();
  }, [slug]);

  return (
    <>
      {data &&
        data.map((post) => {
          return (
            <div key={post.id}>
              <img
                src={
                  post._embedded['wp:featuredmedia'][0].media_details.sizes
                    .medium_large.source_url
                }
                alt='ilustratção'
              />
              <h1>{post.title.rendered}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>
          );
        })}
    </>
  );
};

export default Post;
