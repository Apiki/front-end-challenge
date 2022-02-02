import React, { useEffect, useState } from "react";
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
      <h1>Página inicial</h1>
      <section id="container">
        {postagens.map((postagem, index) => (
          <Post key={index} data={postagem} />
        ))}
      </section>
    </>
  );
};

export default Inicial;
