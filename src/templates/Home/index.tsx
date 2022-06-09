import { useState } from "react";
import axios from "axios";

import { Container } from "../../components/Container";
import PostCard, { PostCardProps } from "../../components/PostCard";

import * as S from "./styles";
import Base from "../Base";

export type HomeTemplateProps = {
  posts: PostCardProps[];
  total: number;
};

const Home = ({ posts, total }: HomeTemplateProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [endRequest, setEndRequest] = useState(false);
  const [postsData, setPostsData] = useState(posts);
  const [totalPosts, setTotalPosts] = useState(total);
  const [page, setPage] = useState(1);

  const handleShowMore = async () => {
    setIsLoading(true);
    try {
      const currentPage = page + 1;
      setPage(currentPage);
      if (page < totalPosts) {
        const data = await axios.get(
          `${process.env.WORDPRESS_API_URL}/posts?_embed&categories=518&page=${currentPage}`
        );
        setTotalPosts(parseInt(data.headers["x-wp-totalpages"]));
        const postsResponse = data.data.map((item: any) => ({
          img:
            typeof item._embedded["wp:featuredmedia"] !== "undefined"
              ? item._embedded["wp:featuredmedia"][0].yoast_head_json.og_url
              : null,
          title: item.title.rendered,
          date: item.date,
          slug: item.slug,
          excerpt: item.excerpt.rendered,
          category: item._embedded["wp:term"][0][0].name,
        }));
        setPostsData(postsData.concat(postsResponse));
        setEndRequest(false);
      } else {
        setEndRequest(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  return (
    <Base>
      <Container>
        <S.Title>Últimos posts</S.Title>
        <S.Wrapper>
          {postsData.map((item, index) => (
            <PostCard
              key={index}
              {...item}
              isFeatured={index === 0 ? true : false}
            />
          ))}
        </S.Wrapper>
        <S.ShowMore>
          {isLoading ? (
            <S.ShowMoreButton onClick={handleShowMore}>
              <p>Carregando mais posts...</p>
            </S.ShowMoreButton>
          ) : (
            <S.ShowMoreButton onClick={handleShowMore}>
              <p>{!endRequest ? "Carregar mais..." : "Fim..."}</p>
            </S.ShowMoreButton>
          )}
        </S.ShowMore>
      </Container>
    </Base>
  );
};

export default Home;
