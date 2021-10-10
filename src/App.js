import React, { useState, useEffect } from "react";
import "./styles/style.css";
import Axios from "axios";
import Logo from "./assets/logo-apiki-blog.png";
import { URL } from "./constants/URL";
import "./styles/style.css";
import Button from "@material-ui/core/Button";
import Loading from "./components/Loading/Loading";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState("center");

  useEffect(() => {
    setIsLoading(true);
    setDisplay("center__none");
    Axios.get(`${URL}`, {
      params: { page: page },
    }).then((response) => {
      setPosts(response.data);
      setIsLoading(false);
      setDisplay("center");
    });
  }, [page, setPosts]);

  const changeNextPage = () => {
    setIsLoading(true);
    setDisplay("center__none");
    const newPage = page + 1 <= 0 ? 1 : page + 1;
    setPage(newPage);
    setIsLoading(false);
    setDisplay("center");
  };

  const changePreviousPage = () => {
    setIsLoading(true);
    setDisplay("center__none");
    const newPage = page - 1 <= 0 ? 1 : page - 1;
    setPage(newPage);
    setIsLoading(false);
    setDisplay("center");
  };

  return (
    <>
      <section className="header">
        <div style={{ position: "fixed" }}>
          <img
            src={Logo}
            alt="Logo APIKI"
            style={{ height: "5vh", marginLeft: "14px" }}
          />
          {isLoading === true ? <Loading /> : ""}
        </div>
        <div className={display}>
          {posts &&
            posts.length &&
            posts.map((post, index) => {
              return (
                <li className="cards">
                  <article key={post.id} className="box-cards">
                    {post._embedded["wp:featuredmedia"] && (
                      <div className="image">
                        <img
                          src={
                            post &&
                            post._embedded &&
                            post._embedded["wp:featuredmedia"][0].source_url
                          }
                          alt={post.id}
                        />
                      </div>
                    )}
                    <div className="box-wraper">
                      <h3>
                        <a href={post.link}>{post.title.rendered}</a>
                      </h3>
                      <br />
                      <h3>
                        <a
                          className="tbn2"
                          href={post.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Detalhes
                        </a>
                      </h3>
                    </div>
                  </article>
                </li>
              );
            })}
          <div className="button_page">
            <Button
              size={"large"}
              onClick={changePreviousPage}
              variant="contained"
            >
              Página anterior
            </Button>
            <Button size={"large"} onClick={changeNextPage} variant="contained">
              Próxima página
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
