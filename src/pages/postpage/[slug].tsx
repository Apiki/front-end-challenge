import { GetStaticPaths, GetStaticProps } from 'next';
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
    <PostPageContainer>
      <h1>{post.title.rendered}</h1>
      <img src={post._embedded['wp:featuredmedia'][0].source_url} alt='' />
      <PostPageContent>{parse(post.content.rendered)}</PostPageContent>

      <a>
        <CaretLeft /> Voltar à página inicial
      </a>
    </PostPageContainer>
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
