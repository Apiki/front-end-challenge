import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";

const Interna = () => {
  const params = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPostagens = async () => {
      const response = await axios.get(
        "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=" + params.slug
      );

      setPost(response.data);
    };

    fetchPostagens();
  }, []);

  if (post.length != 0) {
    return (
      <>
        <Header />
        <h1>Achei</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Não achei</h1>
      </>
    );
  }
};

export default Interna;
