import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import React, { useEffect, useState } from 'react';

import Post from '../Post';
import { getPosts } from '../../services/v1/posts-service';
import gradient from '../../assets/images/gradient.jpg';
import ButtonLoadMore from '../Button/LoadMore';

export default function Articles() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPage, setTotalPage] = useState(15);
  const [postList, setPostList] = useState([]);

  const boxWrapper = ({ children }) => (
    <div
      style={{
        display: 'block',
        marginBottom: '1.35rem',
      }}
    >
      {children}
    </div>
  );

  const getListPost = async () => {
    try {
      setLoading(true);
      const { data, headers } = await getPosts(page);
      setPosts(data);
      setPostList([...postList, ...data]);
      setTotalPage(headers['x-wp-totalpages']);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getListPost();
    })();
  }, [page]);

  const handleResetWindow = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLoadMoreClick = () => {
    const currentPage = page + 1;
    setPage(currentPage);
  };

  return (
    <section className="c-articles">
      <h2 className="c-articles__title">All Articles</h2>
      <div className="c-articles__wrapper">
        {!loading ? (
          postList.map(
            ({
              slug,
              title,
              _embedded: { 'wp:featuredmedia': featuredMedia },
            }) => (
              <Link
                onClick={() => handleResetWindow()}
                className="c-articles__link"
                key={slug}
                to={`article/${slug}`}
              >
                <Post
                  title={title.rendered}
                  image={
                    featuredMedia
                      ? featuredMedia[0]?.media_details.sizes.medium.source_url
                      : gradient
                  }
                />
              </Link>
            )
          )
        ) : (
          <SkeletonTheme>
            <Skeleton wrapper={boxWrapper} count={2} height={210} />
            <Skeleton wrapper={boxWrapper} count={2} height={210} />
          </SkeletonTheme>
        )}
      </div>
      <ButtonLoadMore
        page={page}
        totalPage={totalPage}
        action={handleLoadMoreClick}
      />
    </section>
  );
}
