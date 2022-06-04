import { useEffect, useState, useContext } from "react";

import { PageContext } from "../../context/page.context";

import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";


import "./posts.styles.scss";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [maxPage, setMaxPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { setPageSlug } = useContext(PageContext);

  const url =
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        setMaxPage(res.headers.get("x-wp-TotalPages"));
        return res.json();
      })
      .then((data) => setPosts(data));
  }, []);

  const loadMoreHandler = async (e) => {
    await fetch(`${url}&page=${currentPage}`)
      .then((res) => {
        if (currentPage <= maxPage) setCurrentPage(currentPage + 1);
        return res.json();
      })
      .then((data) => {
        setPosts(posts.concat(data));
      });
  };

  const navigate = useNavigate();
  const goToPostHandler = (slug) => {
    setPageSlug(slug);

    navigate(`${slug}`);
  };

  return (
    <div className="main-container">
      <div className="posts-container">
        {posts.map((post, i) => {
          const path = post._embedded["wp:featuredmedia"];

          if (path)
            return (
              <section className="post-container" key={i}>
                <div className="image-container">
                  <img className="image" src={path[0].source_url} />
                </div>

                <h1 className="title">
                  {path[0].title.rendered.replace(/-/g, " ")}
                </h1>

                <Button
                  onClick={() => goToPostHandler(post.slug)}
                  span="Veja a postagem Completa!"
                />
              </section>
            );
        })}
      </div>
      {currentPage <= maxPage && (
        <Button
          className="load"
          span="Carregar mais..."
          onClick={loadMoreHandler}
        />
      )}
    </div>
  );
};

export default Posts;
