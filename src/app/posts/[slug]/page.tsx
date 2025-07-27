import Link from 'next/link';
import Image from 'next/image';
import { PostType } from '@/types/post';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import { Content } from '../components/content';
import { PostInfo } from '../components/post-info';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const response = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`, {
    next: {
      revalidate: 3600, // 1 hour
    },
    cache: 'force-cache',
  });

  if (!response.ok) {
    throw new Error('Erro ao carregar o post');
  }

  const data: PostType[] = await response.json();

  if (data.length === 0) {
    return notFound();
  }

  const post = data[0];

  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center px-4 py-8 pt-24 space-y-16">
      <div className="space-y-4">
        <h1 className="text-3xl leading-snug font-bold">{post.title.rendered}</h1>
        <p className="text-secondary-foreground">
          <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </p>

        <PostInfo post={post} />
      </div>

      <Image
        src={post._embedded['wp:featuredmedia']?.[0]?.source_url}
        alt={post._embedded['wp:featuredmedia']?.[0]?.alt_text}
        width={post._embedded['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.width}
        height={post._embedded['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.height}
        className="w-full h-auto rounded-lg mb-4"
      />

      <Content content={post.content?.rendered} />

      <Button size="lg" asChild className="text-foreground font-semibold uppercase w-full sm:w-120">
        <Link href="/" className="flex items-center gap-2">
          Voltar para a lista de artigos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </Button>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const response = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`, {
    next: {
      revalidate: 3600, // 1 hour
    },
    cache: 'force-cache',
  });

  if (!response.ok) {
    throw new Error('Erro ao carregar o post');
  }

  const data: PostType[] = await response.json();

  if (data.length === 0) {
    return {};
  }

  const post = data[0];

  return {
    title: `${post.yoast_head_json.title} | Apiki DevBlog`,
    description: post.yoast_head_json.og_description,
    openGraph: {
      title: post.yoast_head_json.og_title,
      description: post.yoast_head_json.og_description,
      siteName: 'Apiki DevBlog',
      images: [
        {
          url: post.yoast_head_json.og_image[0].url,
          width: post.yoast_head_json.og_image[0].width,
          height: post.yoast_head_json.og_image[0].height,
          type: post.yoast_head_json.og_image[0].type,
        },
      ],
      type: post.yoast_head_json.og_type,
      locale: post.yoast_head_json.og_locale,
      publishedTime: post.yoast_head_json.article_published_time,
      modifiedTime: post.yoast_head_json.article_modified_time,
    },
    author: post.yoast_head_json.author,
    twitter: {
      card: post.yoast_head_json.twitter_card,
      title: post.yoast_head_json.title,
      description: post.yoast_head_json.og_description,
      images: [post.yoast_head_json.og_image[0].url],
    },
    robots: {
      index: post.yoast_head_json.robots.index,
      follow: post.yoast_head_json.robots.follow,
      'max-image-preview': post.yoast_head_json.robots['max-image-preview'],
      'max-snippet': post.yoast_head_json.robots['max-snippet'],
      'max-video-preview': post.yoast_head_json.robots['max-video-preview'],
      googleBot: 'index, follow',
    },
  };
}
