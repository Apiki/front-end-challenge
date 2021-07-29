import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import { PostContainer, LoadingDiv } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Post() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});

  const { slug } = useParams();

  useEffect(() => {
    async function loadPost() {
      await api.get(`posts?_embed&slug=${slug}`)
        .then((response) => {
          console.log(response.data[0]);
          const data = response.data[0];

          setPost(data);
          setLoading(false);
        },
        (error) => {
          console.error(error);
        })
    }

    loadPost();
  }, [])

  return (
    <div>
      <Header />
      
      <PostContainer>
        {loading ? (
          <LoadingDiv>
            <p>Loading...</p>
          </LoadingDiv>
        ) : (
          <>
            <img src={post._embedded["wp:featuredmedia"][0].source_url} alt={post.title.rendered} />

            <h1>{post.title.rendered}</h1>

            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </>
        )}
      </PostContainer>

      <Footer />
    </div>
  )
}