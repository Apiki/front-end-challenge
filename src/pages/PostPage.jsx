import React, { useContext, useEffect } from 'react';
import ApikiBlogContext from '../context/ApikiBlogContext';
import getPost from '../services/getPost';
import PostDetails from '../components/PostDetails';

const PostPage = () => {
  const { loading, setLoading, data, setData } = useContext(ApikiBlogContext);
  const slug = window.location.pathname.slice(9);
  useEffect(() => {
    getPost(slug).then((response) => {
      console.log(response);
      setData(response);
      setLoading(false);
    });
  }, []);
  return (
    !loading ?
      <div>
        <PostDetails />
      </div> : <div>Loading...</div>
  );
};

export default PostPage;
