import React from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { isNil } from "ramda";
import { Link } from "react-router-dom";


import { useGetPost } from "../../hooks";

import { StyledPost } from "./post-styles";

export const Post = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetPost({
    url: `posts?_embed&slug=${slug}`
  });
  return (
    <>
      <Header />
        <div className="App">
          <StyledPost>
            <Link to={`/`}>Voltar</Link>
            {isLoading && <span>Carregando informações...</span>}
            {!isLoading && !isNil(data) && parse(data.content.rendered)}
          </StyledPost>
        </div>
      <Footer />
    </>
  );
};
