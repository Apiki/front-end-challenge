import { useState } from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';
import Link from 'next/link';
import parse from 'html-react-parser';

import { Post } from '../../@types/post';

import { ContentMainCard, FooterMainCard, MainCardContainer } from './styles';

interface MainCardProps {
  lastFourPosts: Post[];
}

export function MainCard({ lastFourPosts }: MainCardProps) {
  const [indexCurrentPost, setIndexCurrentPost] = useState(0);
  const [currentPost, setCurrentPost] = useState(
    lastFourPosts[indexCurrentPost]
  );

  function handleNextPost() {
    if (indexCurrentPost >= lastFourPosts.length - 1) {
      setIndexCurrentPost(0);
      setCurrentPost(lastFourPosts[0]);
    } else
      setIndexCurrentPost((state) => {
        setCurrentPost(lastFourPosts[state + 1]);
        return (state += 1);
      });
  }

  function handlePreviousPost() {
    if (indexCurrentPost <= 0) {
      setIndexCurrentPost(lastFourPosts.length - 1);
      setCurrentPost(lastFourPosts[lastFourPosts.length - 1]);
    } else
      setIndexCurrentPost((state) => {
        setCurrentPost(lastFourPosts[state - 1]);
        return (state -= 1);
      });
  }

  return (
    <MainCardContainer>
      <Link href={`/postpage/${currentPost.slug}`}>
        <img
          // src={currentPost._embedded['wp:featuredmedia'][0].source_url}
          src={currentPost.yoast_head_json.og_image[0].url}
          alt=''
        />
      </Link>
      <div>
        <Link href={`/postpage/${currentPost.slug}`}>
          <ContentMainCard>
            <h2>{currentPost.title.rendered}</h2>
            {parse(currentPost.excerpt.rendered)}
          </ContentMainCard>
        </Link>
        <FooterMainCard>
          <button onClick={handlePreviousPost}>
            <CaretLeft />
          </button>
          <button onClick={handleNextPost}>
            <CaretRight />
          </button>
          <span>{indexCurrentPost + 1} de 4</span>
        </FooterMainCard>
      </div>
    </MainCardContainer>
  );
}
