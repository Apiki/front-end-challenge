import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { getArticle } from '../../services/v1/posts-service';
import BackButton from '../../components/Button/Back';
import gradient from '../../assets/images/gradient.jpg';
import Heading from '../../components/Heading';
import Layout from '../../layout';
import ToTopButton from '../../components/Button/ToTop';
import User from '../../components/User';

function Article() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  const getArticleBySlug = async () => {
    try {
      setLoading(true);
      const result = await getArticle(slug);
      setArticle(result);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getArticleBySlug();
    })();
  }, []);

  const handleToTopButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Layout>
      <section className="container p-article">
        {!loading && article.length > 0
          ? article.map(
            ({
              title,
              excerpt,
              content,
              date_gmt: date,
              _embedded: {
                'wp:featuredmedia': featuredMedia,
                author,
              },
            }) => (
              <div key={title}>
                <Heading
                  title={title?.rendered}
                  subtitle={excerpt?.rendered}
                />

                <figure className="p-article__figure">
                  <LazyLoadImage
                    className="p-article__image"
                    alt="Featured image"
                    effect="blur"
                    src={
                      featuredMedia
                        ? featuredMedia[0]?.media_details.sizes?.large
                          ?.source_url
                        : gradient
                    }
                  />
                </figure>

                <User
                  name={
                    author[0].name ? author[0].name : 'Usuário desconhecido'
                  }
                  avatar={
                    author[0]?.avatar_urls
                      ? author[0]?.avatar_urls['96']
                      : gradient
                  }
                  published={date}
                  link={
                    author[0].link
                      ? author[0].link
                      : 'https://blog.apiki.com/'
                  }
                />

                <div
                  className="p-article__content"
                  dangerouslySetInnerHTML={{ __html: content.rendered }}
                />
              </div>
            ),
          )
          : <div>
            <Skeleton count={1} height={100} />
            <Skeleton count={1} height={60} />
            <Skeleton count={1} height={300} />
          </div>}
        <div className="p-article__actions">
          <BackButton />
          <ToTopButton action={handleToTopButtonClick} />
        </div>
      </section>
    </Layout>
  );
}

export default Article;
