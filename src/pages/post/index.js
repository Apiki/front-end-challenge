import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import { requestPostInfo } from '../../services/fetchAPI';
import { Article, AuthorDetail, Details, PostDetail } from './style';

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
    <PostDetail>
      <Header />
      {
        post &&
        <Article>
          <h1>{post.title.rendered}</h1>
          <span>{post['yoast_head_json'].description}</span>
          <Details>
            <p>{`Por: ${post['_embedded'].author[0].name}`}</p>
            <p>{new Date(post.date).toLocaleDateString()}</p>
            <p>{`Leitura: ${post['yoast_head_json']['twitter_misc']['Est. tempo de leitura']}`}</p>
          </Details>

          <img
            src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
            alt={post.title.rendered}
          />
          {parse(post.content.rendered)}

          <AuthorDetail>
            {authorInfo.image?.url
              ? <img src={authorInfo.image?.url} alt={post['_embedded'].author[0].name} />
              : <FaUserCircle />
            }

            <div>
              <p>{authorInfo.name}</p>
              <span>{authorInfo.description}</span>
            </div>
          </AuthorDetail>
        </Article>
      }
    </PostDetail>
  )
}
