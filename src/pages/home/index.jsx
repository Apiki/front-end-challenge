import "./styles.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';

const mock = [
  {
    image:
      "https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg",
    date: "21/05/2020",
    title: "Caverna da revista casa e jardim",
    description: "Aqui está a descrição para a tag, para criação de conteudo.",
  },
  {
    image:
      "https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg",
    date: "21/05/2020",
    title: "Caverna da revista casa e jardim",
    description: "Aqui está a descrição para a tag, para criação de conteudo.",
  },
  {
    image:
      "https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg",
    date: "21/05/2022",
    title: "Caverna da revista casa e jardim ok",
    description: "Aqui está a descrição para a tag, para criação de conteudo.",
  },
];

export function Home() {
  const [api, setApi] = useState(
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"
  );
  const [post, setPost] = useState([]);
  const [count, setCount] = useState(1);
  // const[totalPages, setTotalPages] = useState()
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, [api]);
  // useEffect(()=>{
  //     axios.get(api)
  //     .then(response =>{
  //         setTotalPages(response.headers['X-WP-TotalPages'])
  //     })
  // },[api])
  // console.log(totalPages);

  console.log(post);

  function getApi() {
    setCount(count + 1);
    setApi(
      "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=" +
        count
    );
  }
  return (
    <>
      <div class="container-md card">
        {post.map((post) => {
          return (
            <div key={post.id}>
              <div class="row">
                <div class="col-md-5">
                  <img
                  class="image"
                  width="90%"
                    src={
                      post["_embedded"]["wp:featuredmedia"]?.[0]["source_url"]
                    }
                  />
                </div>
                <div class="col-md-7 content">
                  <Link to={`../Post/${post.slug}.jsx`}>
                    <h2>{post.title.rendered}</h2>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      <button class="mb-3" onClick={getApi}>Carregar Mais</button>
      </div>
    </>
  );
}
