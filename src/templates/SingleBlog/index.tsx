/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { NextSeo } from "next-seo";
import Image from "next/image";

import { Container } from "components/Container";

import * as S from "./styles";

import Base from "templates/Base";

import formatDate from "../../utils/format-date";

export type SinglePropertyTemplateProps = {
  slug: string;
  image: string;
  category: string;
  title: string;
  content: string;
  date: string;
};

const SingleBlog = ({
  slug,
  image,
  category,
  title,
  content,
  date,
}: SingleBlogTemplateProps) => {
  return (
    <Base>
      <NextSeo
        title={`${title} | Apiki`}
        description={content}
        canonical={`${process.env.URL_SITE}/${slug}`}
        openGraph={{
          url: `${slug}`,
          title: `${title} | Apiki`,
          description: content,
          images: [
            {
              url: image,
              width: 800,
              height: 600,
              alt: title,
              type: "image/jpeg",
            },
          ],
          site_name:
            "Especialista em WordPress: Desenvolvimento, Suporte e Hospedagem",
        }}
        twitter={{
          handle: "@apikiWordPress",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Container>
        <S.ImageBox>
          {!!image && <Image src={image} alt={`${title}`} layout="fill" />}
        </S.ImageBox>
        <S.Title>
          <h1>{title}</h1>
          <S.Category>
            <span>{category}</span> | <b>{`${formatDate(date)}`}</b>
          </S.Category>
        </S.Title>
        <S.Text>
          <div
            className="text-container"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </S.Text>
      </Container>
    </Base>
  );
};

export default SingleBlog;
