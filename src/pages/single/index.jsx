import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';
import config from '../../config';
import defaultImage from '../../assets/images/default-image.png';
import NotFound from '../notfound';

const Single = () => {
  const location = useLocation();
  if (!location.state) return <NotFound to="/" />;
  const { post } = location.state;

  return (
    <div>
      <Helmet>
        <title>{post.title.rendered}</title>

        <meta name="title" content={post.title.rendered} />
        <meta name="description" content={post.excerpt.rendered} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title.rendered} />
        <meta property="og:description" content={post.excerpt.rendered} />

        <meta property="og:url" content={post.link} />
        <meta
          property="og:image"
          itemProp="image"
          content={
            post._embedded['wp:featuredmedia'][0].media_details.sizes.large
              .source_url
          }
        />
        <meta
          property="og:image:secure_url"
          content={
            post._embedded['wp:featuredmedia'][0].media_details.sizes.large
              .source_url
          }
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:updated_time" content={post.modified} />

        <meta name="twitter:creator" content={config.siteTitle} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={post.title.rendered} />
        <meta name="twitter:description" content={post.excerpt.rendered} />
        <meta
          name="twitter:image"
          content={
            post._embedded['wp:featuredmedia'][0].media_details.sizes.large
              .source_url
          }
        />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title.rendered,
            image:
              post._embedded['wp:featuredmedia'][0].media_details.sizes.large
                .source_url,
            author: {
              '@type': 'Person',
              name: post.author,
            },
            publisher: {
              '@type': 'Organization',
              name: config.siteTitle,
              logo: {
                '@type': 'ImageObject',
                url: '',
              },
            },
            datePublished: post.modified,
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        <div className="wrapper main__content">
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          {post._embedded['wp:featuredmedia'][0].media_details.sizes.large
            .source_url ? (
            <div className="post__thumb">
              <img
                src={
                  post._embedded['wp:featuredmedia'][0].media_details.sizes
                    .large.source_url
                }
                alt={post.title.rendered}
                width="100%"
              />
            </div>
          ) : (
            <div className="">
              <img src={defaultImage} alt="default" width="100%" />
            </div>
          )}
          <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Single;
