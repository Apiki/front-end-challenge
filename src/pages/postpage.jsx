import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
      .then((res) => {
        if (res.data.length > 0) {
          setPost(res.data[0]);
        }
      })
      .catch((err) => {
        console.error('Erro ao buscar post:', err);
      });
  }, [slug]);

  if (!post) return <p>Carregando postagem...</p>;

  return (
    
    <div className="post-page">
      <h1 className="post-title">{post.title.rendered}</h1>
      <img
        src={post._embedded['wp:featuredmedia']?.[0]?.source_url}
        alt={post.title.rendered}
      />
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
};

export default PostPage;
