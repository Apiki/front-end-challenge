import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestPostInfo } from '../../services/fetchAPI';

export default function Post(prop) {
  const { slug } = useParams();
  const [post, setPost] = useState();
  const [authorInfo, setAuthorInfo] = useState();

  useEffect(() => {
    const getPostInfo = async () => {
      const [data] = await requestPostInfo(slug);
      setPost(data);
      setAuthorInfo(data['yoast_head_json'].schema['@graph'].slice(-1)[0])
    }
    getPostInfo()

  }, [])

  return (
    <div>
      {
        post &&
        <>
          <h1>{post.title.rendered}</h1>
          <h2>{post['yoast_head_json'].description}</h2>
          <p>{new Date(post.date).toLocaleDateString()}</p>
          <p>{`Tempo Est. de leitura: ${post['yoast_head_json']['twitter_misc']['Est. tempo de leitura']}`}</p>

          <img
            src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
            alt={post.title.rendered}
          />
          {parse(post.content.rendered)}

          <div>
            <img src={authorInfo.image.url} alt={post['_embedded'].author[0].name} />
            <p>{authorInfo.name}</p>
            <p>{authorInfo.description}</p>
          </div>
        </>
      }
    </div>
  )
}
