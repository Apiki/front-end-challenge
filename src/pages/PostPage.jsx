import React, { useContext, useEffect } from 'react';
import ApikiBlogContext from '../context/ApikiBlogContext';
import getPost from '../services/getPost';
import PostDetails from '../components/PostDetails';

const PostPage = () => {
  const { setDetails, loading, setLoading } = useContext(ApikiBlogContext);
  const slug = window.location.pathname.slice(9);
  useEffect(() => {
    getPost(slug).then((response) => {
      setLoading(true);
      setDetails(response);
      setLoading(false);
    });
  },[]);
  return (
    !loading ?
      <div>
        <PostDetails />
      </div> : <div>Loading...</div>
  );
};

export default PostPage;
