import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import getPosts from '~/utils/getPosts';
import getSlugPosts from '~/utils/getSlugPosts';

function SlugPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <main>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <div>
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={840}
            height={502}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div>
          <span>By </span>
          {post.author ? <strong>{post.author}</strong> : 'No author found!'}
          <p>{post.createdAt}</p>
        </div>
      </main>
    </div>
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
