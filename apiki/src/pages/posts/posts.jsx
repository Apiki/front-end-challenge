import './index.scss';
import { useEffect, useState } from 'react';
import PostsList from '../../components/list_posts/postsList';
import { Link } from 'react-router-dom';

export default function Posts(){

  const [posts, setPosts] = useState(null);
  
  useEffect(() => {
    const apiUrl = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";
    const headers = {  headers: {
      "Content-Type": "application/json"
 }, }
    const fetchItems = async () => {
      const data = await fetch(`${apiUrl}`,headers)
      const items = await data.json();
      
      
      setPosts(items);
    }
    fetchItems();
  }, []);

  function load(){
    let page=1;
    let urlPage=`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`
    const fetchItems = async () => {
      const data = await fetch(`${urlPage}`);
      const items = await data.json();

      console.log(data.headers.get('x-wp-totalpages'))
      setPosts(items);
    }
    fetchItems();
    page++;
    return(
      <Link to="" refresh="true"/>
    )

  }
  


  return (

    <div className="Posts">
        <h1>OI post</h1>

        <PostsList posts={posts} />
        <div className='Footer' >
              <button type="button" onClick={()=>load()}>
                Carregar Mais
              </button>
      </div>
    </div>
  
    
  );
}

