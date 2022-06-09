import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import * as S from "./styles";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";

import formatDate from "../../utils/format-date";

export type PostCardProps = {
  img: string;
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  category: string;
  isFeatured?: boolean;
};

const PostCard = ({
  img,
  title,
  date,
  slug,
  excerpt,
  category,
  isFeatured,
}: PostCardProps) => {
  const [isCardFeatured, setCardFeatured] = useState(false);

  useEffect(() => {
    if (isFeatured) {
      setCardFeatured(true);
    }
  }, [isFeatured]);

  return (
    <S.Wrapper isCardFeatured={isCardFeatured}>
      <>
        <Link href={`/blog/${slug}`}>
          <S.ImageBox isCardFeatured={isCardFeatured}>
            {!!img && <Image src={img} alt={title} layout="fill" />}
            <S.Category>{category}</S.Category>
          </S.ImageBox>
        </Link>
        <S.Info isCardFeatured={isCardFeatured}>
          <S.Date>{`${formatDate(date)}`}</S.Date>
          <S.Title isCardFeatured={isCardFeatured}>
            <Link href={`/blog/${slug}`}>
              <a>{title}</a>
            </Link>
          </S.Title>
          <S.Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
          <S.ReadMore>
            <Link href={`/blog/${slug}`}>
              <a>
                Ler mais <ArrowRight color="#2A7DE1" size={22} />
              </a>
            </Link>
          </S.ReadMore>
        </S.Info>
      </>
    </S.Wrapper>
  );
};

export default PostCard;
