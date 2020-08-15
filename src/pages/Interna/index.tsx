import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../../components/Header';

import { Container, Post, Info, Footer, Content } from './styles';
import { api } from '../../services/api';

interface PostProps {
  id: number;
  title: { rendered: string };
  _embedded: {
    author: [
      {
        id: number;
        name: string;
        description: string;
        avatar_urls: {
          '48': string;
          '96': string;
        };
      },
    ];
    'wp:featuredmedia': [
      {
        id: number;
        source_url: string;
      },
    ];
  };
  modified: string;
  modifiedFormatted: string;
  content: { rendered: string };
  excerpt: { rendered: string };
}

const Interna: React.FC = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    api.get(`posts?_embed&slug=${slug}`).then((response) => {
      const postFormatted = response.data.map((post: PostProps) => ({
        ...post,
        modifiedFormatted: format(
          parseISO(post.modified),
          "dd 'de' MMMM 'de' yyyy",
          {
            locale: ptBR,
          },
        ),
      }));

      setPosts(postFormatted);
    });
  }, [slug]);

  return (
    <Container>
      <Header />

      {posts.map((post) => (
        <Post key={post.id}>
          <a href="/">
            <FiArrowLeft size={30} />
          </a>
          <h1>{post.title.rendered}</h1>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <Info>
            <span>Ultima atualização: {post.modifiedFormatted}</span>

            {post._embedded.author.map(
              (item) =>
                item.avatar_urls && (
                  <div key={item.id} className="authorContent">
                    <div className="author">
                      <span>Autores:</span>
                      <span>{item.name}</span>
                    </div>
                    <img src={item.avatar_urls[48]} alt="" />
                  </div>
                ),
            )}
          </Info>
          {post._embedded['wp:featuredmedia'].map((item) => (
            <img key={item.id} src={item.source_url} alt="" />
          ))}
          <Content
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          <Footer>
            {post._embedded.author.map(
              (item) =>
                item.avatar_urls && (
                  <div key={item.id} className="authorContent">
                    <img src={item.avatar_urls[96]} alt="" />
                    <div className="author">
                      <strong>{item.name}</strong>
                      <span>{item.description}</span>
                    </div>
                  </div>
                ),
            )}
          </Footer>
        </Post>
      ))}
    </Container>
  );
};

export default Interna;
