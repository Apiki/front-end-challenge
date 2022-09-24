import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import parse from 'html-react-parser';
import { CaretLeft } from 'phosphor-react';

import { api } from '../../services/api';

import { Post } from '../../@types/post';

import { PostPageContainer, PostPageContent } from './styles';

interface PostPageProps {
  post: Post;
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <>
      <Head>
        <title>{post.title.rendered} - Apiki Blog</title>
        <meta
          name='description'
          content={`Se liga nisso: ${post.title.rendered}`}
        />
        <meta
          property='og:title'
          content={`${post.title.rendered} - Apiki Blog`}
        />
        <meta
          property='og:description'
          content={`Se liga nisso: ${post.title.rendered}`}
        />
        <meta property='og:type' content='website' />
      </Head>
      <PostPageContainer>
        <h1>{post.title.rendered}</h1>
        <img
          // src={post._embedded['wp:featuredmedia'][0].source_url}
          src={post.yoast_head_json.og_image[0].url}
          alt=''
        />
        <PostPageContent>{parse(post.content.rendered)}</PostPageContent>

        <Link href='/'>
          <footer>
            <CaretLeft /> Voltar à página inicial
          </footer>
        </Link>
      </PostPageContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as IParams;
  const { data } = await api.get('', { params: { slug } });

  const post = data[0];

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 8,
  };
};
