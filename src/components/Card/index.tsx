import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Container, CardContent, CardImage, CardInfo } from './styles';

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
                width={250}
                height={200}
                blurDataURL={data.thumbnail}
              />
            ) : (
              <Image
                src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png"
                alt="apiki blog logo"
                width={240}
                height={240}
              />
            )}
          </CardImage>
          <CardInfo>
            <h3>{data.title}</h3>
            {data.author ? (
              <span className="post-author">
                BY <strong>{data.author}</strong>
              </span>
            ) : (
              <span className="post-author">No author found!</span>
            )}
            <span className="post-description">{data.description}</span>
            <span className="post-created-at">{data.createdAt}</span>
          </CardInfo>
        </CardContent>
      </Link>
    </Container>
  );
};

export default Card;
