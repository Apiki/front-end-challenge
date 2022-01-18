import './index.scss';
import { useEffect, useState } from 'react';
import PostsList from '../../components/list_posts/postsList';
import { Link } from 'react-router-dom';

export default function Posts(){
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const apiUrl = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";
    const fetchItems = async () => {
      const data = await fetch(`${apiUrl}`);
      const items = await data.json();

      
      setPosts(items);
    }
    fetchItems();
  }, []);

  return (

    <div className="Posts">
        <h1>OI post</h1>

        <PostsList posts={posts} />
        <div className='Footer' >
      <Link to="/">
              <button type="button">
                Carregar Mais
              </button></Link>
      </div>
    </div>
  
    
  );
}

