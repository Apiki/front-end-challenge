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
    const image = post[0]._embedded["wp:featuredmedia"][0].source_url;
    const altTitle = post[0]._embedded["wp:featuredmedia"][0].alt_text;
    return (
      <>
        <Header single={true} />

        <div id="single">
          <div className="left-container">
            <img src={image} alt={altTitle} />
          </div>
          <div className="right-container"></div>
        </div>
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
