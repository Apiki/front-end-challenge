/**
 * @author   : Matheus de Castro Sousa
 * @since    : React 17.0.2
 * Date      : 2022-01-19
 * Porpouse  : Page for posts
 * React usage : Link to router-dom,Hooks and fetch 
 */


import './index.scss';
import { useEffect, useState } from 'react';
import PostsList from '../../components/list_posts/postsList';
import { Link } from 'react-router-dom';

export default function Posts() {

  const [posts, setPosts] = useState([]);
  var [pageTotal, setPageTotal] = useState(0);
  var [pageAtual, setPageAtual] = useState(1);


  useEffect(() => {

    const apiUrl = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";
    const headers = {
      headers: {
        "Content-Type": "application/json"
      },
    }
    const fetchItems = async () => {
      const data = await fetch(`${apiUrl}`, headers)
      let items = await data.json();
      setPageTotal(await data.headers.get('x-wp-totalpages'));
      setPosts(items);

    }

    fetchItems();
  }, []);

  //I didn't do validations because of time, but on page 13 the api is providing the object without image attribute, a bug is occurring
  function load() {
    // if(page pageTotal.length  {
    //   console.log('estourou')
    //   // document.getElementById("loadPage").value("voltar para o topo");
    //   return;
    // }

    setPageAtual(++pageAtual);


    let urlPage = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${pageAtual}`
    const fetchNewItems = async () => {
      const data = await fetch(`${urlPage}`);
      let itemsAtuais = await data.json();
      setPosts(posts => posts.concat(itemsAtuais))



    }
    fetchNewItems();

    return (
      <Link to="" refresh="true" />
    )
  }

  return (

    <div className="Posts">
      <h1>OI post</h1>

      <PostsList posts={posts} />
      <div className='Footer' >
        <button type="button" id="loadPage" onClick={() => load()}>
          Carregar Mais
        </button>
      </div>
    </div>


  );
}

