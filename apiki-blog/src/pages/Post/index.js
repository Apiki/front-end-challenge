import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost } from '../../store/ducks/blog';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Post = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const slug = props.match.params.id;
  const { post, isFetching } = useSelector((state) => state.blogReducer);
  useEffect(() => {
    dispatch(getOnePost(slug));
  }, [dispatch, slug]);

  // const handleRedirect = (blogSlug) => history.push(`/`);

  if (isFetching || typeof post[0] === 'undefined')
    return <h2>Carregando...</h2>;

  return (
    <div>
      <Header></Header>
      {/* <button onClick={() => handleRedirect()}>back Home</button> */}
      <h1 dangerouslySetInnerHTML={{ __html: post[0].title.rendered }}></h1>
      <img
        src={`${post[0]._embedded['wp:featuredmedia']['0'].source_url}`}
        alt={post[0].title.rendered}
        width="300"
      ></img>

      <p dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}></p>
    </div>
  );
};

export default Post;
