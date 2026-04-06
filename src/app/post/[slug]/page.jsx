import { cache } from 'react';
import { notFound } from 'next/navigation';

import PostContent from '@/components/PostContent';
import PostHero from '@/components/PostHero';
import { getPostBySlug } from '@/lib/api';
import { buildMetadata } from '@/lib/seo';

const getCachedPostBySlug = cache(getPostBySlug);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getCachedPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: 'Post não encontrado',
      description: 'O conteúdo solicitado não foi encontrado.',
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
  });
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getCachedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="page page--post">
      <article className="post">
        <PostHero post={post} />
        <PostContent post={post} />
      </article>
    </main>
  );
}
