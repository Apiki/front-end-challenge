import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";
import api from "../../services/api";

const Inicial = () => {
  const [postagens, setPostagens] = useState([]);

  useEffect(() => {
    const fetchPostagens = async () => {
      const response = await api;

      setPostagens(response.data);
    };

    fetchPostagens();
  }, []);

  return (
    <>
      <Header />
      <section id="container">
        {postagens.map((postagem, index) => (
          <Post key={index} data={postagem} />
        ))}
      </section>
    </>
  );
};

export default Inicial;
