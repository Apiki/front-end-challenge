import React, { useState, useEffect, useCallback } from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {
  FiArrowLeft,
  FiArrowRight,
  FiSkipBack,
  FiSkipForward,
} from 'react-icons/fi';
import { AiOutlineLoading } from 'react-icons/ai';

import Header from '../../components/Header';

import {
  Loading,
  Container,
  Content,
  Post,
  Info,
  InfoFooter,
  Pages,
} from './styles';
import { api } from '../../services/api';

interface PostProps {
  id: number;
  title: { rendered: string };
  _embedded: {
    author: [
      {
        id: number;
        name: string;
        avatar_urls: { '48': string };
      },
    ];
    'wp:featuredmedia': [
      {
        id: number;
        source_url: string;
      },
    ];
  };
  slug: string;
  modified: string;
  modifiedFormatted: string;
  excerpt: { rendered: string };
}

interface HeaderProps {
  data: [PostProps];
  headers: { 'x-wp-totalpages': string };
}

const Inicial: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState<number>();

  useEffect(() => {
    setLoading(true);
    api
      .get(`posts?_embed&categories=518&page=${pages}`)
      .then((response: HeaderProps) => {
        const postFormatted = response.data.map((post) => ({
          ...post,
          modifiedFormatted: format(
            parseISO(post.modified),
            "dd 'de' MMMM 'de' yyyy",
            {
              locale: ptBR,
            },
          ),
        }));

        setTotalPages(Number(response.headers['x-wp-totalpages']));
        setPosts(postFormatted);
        setLoading(false);
      });
  }, [pages]);

  const handleNextPage = useCallback(() => {
    if (pages === totalPages) {
      return;
    }
    setPages((state) => state + 1);
  }, [pages, totalPages]);

  const handleLastPage = useCallback(() => {
    if (totalPages !== undefined) {
      setPages(totalPages);
    }
  }, [totalPages]);

  const handlePreviousPage = useCallback(() => {
    if (pages === 1) {
      return;
    }
    setPages((state) => state - 1);
  }, [pages]);

  const handleFirstPage = useCallback(() => {
    if (totalPages !== undefined) {
      setPages(1);
    }
  }, [totalPages]);

  return (
    <Container>
      <Header />
      <div className="welcome">
        <h1>Bem-vindo(a) ao Apiki blog</h1>
        <span>Diversos posts sobre WordPress</span>
      </div>

      {loading ? (
        <Loading>
          <AiOutlineLoading />
        </Loading>
      ) : (
        <Content>
          <Pages>
            <div>
              <button type="button" onClick={handleFirstPage}>
                <FiSkipBack size={15} />
              </button>
              <button type="button" onClick={handlePreviousPage}>
                <FiArrowLeft size={15} />
              </button>
            </div>
            <strong>
              Página {pages}/{totalPages}
            </strong>
            <div>
              <button type="button" onClick={handleNextPage}>
                <FiArrowRight size={15} />
              </button>
              <button type="button" onClick={handleLastPage}>
                <FiSkipForward size={15} />
              </button>
            </div>
          </Pages>
          {posts.map((post) => (
            <Post key={post.id} href={post.slug}>
              <strong>{post.title.rendered}</strong>
              <div>
                {post._embedded['wp:featuredmedia'].map((item) => (
                  <img key={item.id} src={item.source_url} alt="" />
                ))}
                <Info>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <InfoFooter>
                    <span>Ultima atualização: {post.modifiedFormatted}</span>

                    {post._embedded.author.map(
                      (item) =>
                        item.avatar_urls && (
                          <div key={item.id}>
                            <div className="author">
                              <span>Autores:</span>
                              <span>{item.name}</span>
                            </div>
                            <img src={item.avatar_urls[48]} alt="" />
                          </div>
                        ),
                    )}
                  </InfoFooter>
                </Info>
              </div>
            </Post>
          ))}
          <Pages>
            <div>
              <button type="button" onClick={handleFirstPage}>
                <FiSkipBack size={20} />
              </button>
              <button type="button" onClick={handlePreviousPage}>
                <FiArrowLeft size={20} />
              </button>
            </div>
            <strong>
              Página {pages}/{totalPages}
            </strong>
            <div>
              <button type="button" onClick={handleNextPage}>
                <FiArrowRight size={20} />
              </button>
              <button type="button" onClick={handleLastPage}>
                <FiSkipForward size={20} />
              </button>
            </div>
          </Pages>
        </Content>
      )}
    </Container>
  );
};

export default Inicial;
