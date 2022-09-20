import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import api from '../api'

export default function Posts () {
    const [posts, setPosts] = useState<[]>([]);
    const { id } = useParams();

    const getPosts = async () => {
      await api.get(`/users/${id}/posts`)
        .then((response) => setPosts(response.data));
    }

  useEffect(() => {
    if (id) {getPosts(+id); }
  }, []);

  return (
    <div>
      <h2>Listagem de Posts dos usuários</h2>
      <Link to={`new`}>Criar Posts</Link>
      <ul>
        {posts && posts.map((post) => (
          <li key={post.id}>
            <Link to={`new/${post.id}`}>
              <b>{post.title}</b>
            </Link>
          </li>  
        ))}
      </ul>
    </div>
  );
}