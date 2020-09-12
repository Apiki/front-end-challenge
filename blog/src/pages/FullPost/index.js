import React, { useState, useEffect } from "react";
import axios from "../../services/api";
import PostDescription from '../../components/PostDescription';
import "./styles.css";

const FullPost = (props) => {
  const { slug } = props.match.params;
  const [fullPost, setFullPost] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchFullPost(slug);
  }, [slug]);

  const fetchFullPost = (slugPost) => {
    axios
      .get(`posts?_embed&slug=${slugPost}`)
      .then((res) => setFullPost(res.data))
      .catch((err) => setError(true));
  };

  if(fullPost.length === 0 && !error) return 'Loading...';

  return (
    <main className="full-post-container">
      {fullPost.map((post) => <PostDescription key={post.id} post={post} />)}
      {error && <h4>Erro ao carregar Post! Tente novamente!</h4>}
    </main>
  );
};

export default FullPost;
