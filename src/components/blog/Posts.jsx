import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Posts() {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)


  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${currentPage}`
      );
      const data = await res.json();
      // console.log(data)
      setPosts(data);
    };

    getPosts();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
    window.scrollTo(0,0)
  }
  const previousPage = () => {
    if (currentPage === 1) {
      setCurrentPage(1)
      window.scrollTo(0,0)
    } else {
      setCurrentPage(currentPage - 1)
      window.scrollTo(0,0)
    }

  }

  return (
    <div className="main container">
      <div className='postList'>
        {posts.map((post) => {

          return <div key={post.title.rendered} className="posts__content">
            <img style={{ maxWidth: "40%" }} src={post._embedded['wp:featuredmedia'][0].source_url} alt="" />
            <div>
              <span className='post__date'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.538a8.462 8.462 0 1 0 0 16.924 8.462 8.462 0 0 0 0-16.924ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" fill="#030D45"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.103a.77.77 0 0 1 .77.769V12a.77.77 0 0 1-.226.544L9.467 15.62a.77.77 0 1 1-1.088-1.088l2.852-2.852V6.87A.77.77 0 0 1 12 6.104Z" fill="#030D45"/></svg>
                {new Date(post.date).toLocaleString("lookup")}
              </span>
              <h2 className="post__title">{post.title.rendered}</h2>
              <p className='post__author'><span>by:</span> {post._embedded['author'][0].name}</p>
              <h5 className="post__text card" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />

              <Link className="btnHover" to={`/${post.slug}`}>
                <div>Saiba mais</div>
              </Link>
            </div>
          </div>;


        })}
      </div>
      <div className='pagination'>
        <button className='btnEffect' onClick={previousPage} id="button">
          <span>
            Anterior
          </span>
          <div className='transition'></div>
        </button>

        <button className='btnEffect' onClick={nextPage} id="button">
          <span>
            Próximo
          </span>
          <div className='transition'></div>
        </button>

      </div>
    </div>
  );
}

export default Posts;