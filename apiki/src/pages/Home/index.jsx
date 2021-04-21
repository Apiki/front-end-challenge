import { useState, useEffect } from "react";
import { getPosts } from "../../services/api";
import { Button } from "react-bootstrap";
import CardPost from "../../components/CardPost";
import Scrolltop from "../../components/Scrolltop";

import logo from "../../assets/logo-apiki.png";
import postDefault from "../../assets/post-default.png";
import './style.css';

function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const nextPage = page + 1;

  useEffect(() => {
    getPosts().then(({posts, headers}) => {
      setPosts(posts);
      setTotalPages(+(headers.get("x-wp-totalpages")));
    });
  }, []);

  const loadMore = async (page) => {
    const { posts: newPosts } = await getPosts(page);
    setPosts([...posts, ...newPosts]);
    setPage(nextPage);
  };

  return (
    <div className="home">
      <img src={logo} className="home__logo" alt="Logomarca da APIKI" />
      
      <div className="home__cards-post">
        { 
        posts.map(({ _embedded, title, slug, content }, idx) => (
          <CardPost
            key={ idx }
            srcImg={ _embedded["wp:featuredmedia"] 
              ? _embedded["wp:featuredmedia"][0].source_url
              : postDefault }
            header={ title.rendered } 
            slug={ slug }
            content={ content }
          />
        ))
        }
      </div>
      { page === totalPages || 
        <Button 
          onClick={() => loadMore(nextPage)} 
          className="home__button-load-more"
          type="button" 
          variant="success" 
        >
            Carregar mais...
        </Button>      
      }
      <Scrolltop />
    </div>
  )
};

export default Home;