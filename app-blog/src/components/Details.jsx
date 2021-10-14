import React, { useEffect, useState } from 'react';
import { detailsPost } from '../services/apiHome';
import { useHistory } from 'react-router-dom';

function DetailsComp() {
  const [post, setPost] = useState([]);
  const { location } = useHistory();

  const fetchApi = async () => {
    const slug = location.pathname.split("/")[2]
    const data = await detailsPost(slug);
    setPost(data);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  if(post.length < 1) return 'Loading...';

  return (
    <>
      {post[0].title.rendered}
    </>
  );
}

export default DetailsComp;