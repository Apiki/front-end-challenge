import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../services/api";
import {  Header } from "../../components/Header"

// Estilos
import { GlobalStyle } from '../../styles/global'
import { 
    Image, 
    Title,
    ContentContainer,
    MainContainer,
    ContainerImg
} from './styles'

export default function Post() {
  //const navigate = useNavigate();
  const { slug } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getInitialPost() {
      const newPost = await getPost(slug);

      setPost(() => newPost);
    }

    getInitialPost();
  }, []);

  console.log(post)

  return (
    <>
        <Header category={"/"} text={"Home"}/>
        {post.map(({ _embedded, title, content }, index) =>
        _embedded["wp:featuredmedia"] ? (
          _embedded["wp:featuredmedia"].map(({ source_url }) => {
            return (
              <>
                <MainContainer key={index}>
                  <ContainerImg>
                    <Image
                        data-testid="featured-details-image-post"
                        src={source_url}
                        alt="destacated"
                    />
                  </ContainerImg>
                  <Title>{title.rendered}</Title>
                  <ContentContainer
                    dangerouslySetInnerHTML={{ __html: content["rendered"] }}
                  ></ContentContainer>
                </MainContainer>
              </>
            );
          })
        ) : (
          <>
            <div className="container-details" key={index}>
              <h1>{title.rendered}</h1>
              <div
                className="container-details-text"
                dangerouslySetInnerHTML={{ __html: content["rendered"] }}
              ></div>
            </div>
          </>
        )
      )}

      <GlobalStyle />
    </>
  );
}