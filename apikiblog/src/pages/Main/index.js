import './style.css';
import Header from '../../components/Header';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Main({ newPosts, setNewPosts, posts, setPosts }) {


  const [click,setClick] = useState(false);

  async function getPosts() {
    try {
      const response = await axios.get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518');

      setPosts(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  async function getNewPosts() {
    try {
      const response = await axios.get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=3');


      setNewPosts(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{  
    getPosts(); 
    getNewPosts();
  },[])

  return (
    <div className="main">
      <Header/>
      <h1 className="main__title">Desenvolvimento WordPress</h1>
      <div className="container-cards">
        {posts.map((post)=>(
          <div className="container-cards__card"key={post.id}>
            
            <img src={post._embedded['wp:featuredmedia'][0].source_url} alt="img-post"/>
            <div className="container-cards__info">
              <h1>{post.title.rendered}</h1>
              <h2>Descrição</h2>
              <span>{post.yoast_head_json.description}</span>
              <span>Saiba mais clicando no link abaixo:</span>
              <Link 
                to={`post/${post.id}`}
                posts={posts}
                newPosts={newPosts}
              >{post.link}</Link>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>setClick(!click)}type="button">Carregar mais...</button>
      {click && <div className="container-cards">
        {newPosts.map((post)=>(
          <div className="container-cards__card"key={post.id}>
            
            <img src={post._embedded['wp:featuredmedia'][0].source_url} alt="img-post"/>
            <div className="container-cards__info">
              <h1>{post.title.rendered}</h1>
              <h2>Descrição</h2>
              <span>{post.yoast_head_json.description}</span>
              <span>Saiba mais clicando no link abaixo:</span>
              <Link 
                to={`post/${post.id}`}
                posts={posts}
                newPosts={newPosts}  
              >{post.link}</Link>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
}

export default Main;
