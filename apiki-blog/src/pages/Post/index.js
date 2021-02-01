import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost } from '../../store/ducks/blog';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import SeoHelmet from '../../components/SeoHelmet/SeoHelmet';
import './index.css';

const Post = (props) => {
  const dispatch = useDispatch();
  const slug = props.match.params.id;

  // Getting the full information of the post from the reducer
  const { post, isFetching } = useSelector((state) => state.blogReducer);

  // when loading page, the API is fetched to return information of the post
  useEffect(() => {
    dispatch(getOnePost(slug));
  }, [dispatch, slug]);

  if (isFetching || typeof post[0] === 'undefined')
    return <Loading />;

  return (
    <div>
      <SeoHelmet title={post[0].title.rendered} pathSlug={slug}></SeoHelmet>
      <Header></Header>
      <div className="post__section flex">
        <div className="post__container flex">
          <h1 dangerouslySetInnerHTML={{ __html: post[0].title.rendered }}></h1>
          <img
            src={`${post[0]._embedded['wp:featuredmedia']['0'].source_url}`}
            alt={post[0].title.rendered}
          ></img>
          <div
            className="post__container__article flex"
            dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
