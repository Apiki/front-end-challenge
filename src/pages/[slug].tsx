import { BsArrowLeftCircle } from 'react-icons/bs';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import {
  Container,
  Content,
  PostImage,
  PostContent,
  PostAbout,
} from '~/styles/pages/postInfo';
import getPosts from '~/utils/getPosts';
import getSlugPosts from '~/utils/getSlugPosts';

function SlugPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Link href="/">
        <BsArrowLeftCircle size={30} className="back-btn" />
      </Link>
      <Content>
        <h2>{post.title}</h2>
        <p className="post-description">{post.description}</p>
        <PostAbout>
          <span>
            By{' '}
            {post.author ? <strong>{post.author}</strong> : 'No author found!'}
          </span>

          <p>{post.createdAt}</p>
        </PostAbout>
        <PostImage>
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={720}
            height={402}
          />
        </PostImage>
        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </Content>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await getPosts(1);

  const paths = posts.map((post: { slug: string }) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;

  const post = await getSlugPosts(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 12,
  };
};

export default SlugPost;
