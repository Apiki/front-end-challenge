import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  Container,
  CardContent,
  CardImage,
  CardInfo,
  CardDescription,
} from './styles';

type CardProps = {
  data: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    createdAt: string;
    slug: string;
    author: string;
  };
};

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <Container>
      <Link href={`/${data.slug}`}>
        <CardContent>
          <CardImage>
            {data.thumbnail ? (
              <Image
                src={data.thumbnail}
                alt={data.title}
                width={180}
                height={180}
                blurDataURL={data.thumbnail}
              />
            ) : (
              <Image
                src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png"
                alt="apiki blog logo"
                width={180}
                height={180}
              />
            )}
          </CardImage>
          <CardInfo>
            <h3>{data.title}</h3>
            <span>{data.description}</span>
          </CardInfo>
          <CardDescription>
            {data.author ? (
              <span>
                By <strong>{data.author}</strong>
              </span>
            ) : (
              <span>No author found!</span>
            )}
            <span>{data.createdAt}</span>
          </CardDescription>
        </CardContent>
      </Link>
    </Container>
  );
};

export default Card;
