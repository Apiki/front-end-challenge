import Image from "next/image";

import { formatPublishedDate } from "@/lib/formatPost";

export default function PostHero({ post }) {
  return (
    <header className="post-hero container">
      <div className="post-hero__media-wrap">
        <div className="post-hero__media">
          {post.imageUrl ? (
            <div className="post-hero__image-frame">
              <Image
                src={post.imageUrl}
                alt={post.imageAlt}
                width={1600}
                height={680}
                priority
                sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 48px), 1152px"
                className="post-hero__image"
              />
            </div>
          ) : null}
        </div>
      </div>

      <div className="post-hero__content">
        <div className="post-hero__meta">
          {post.categoryName ? (
            <span className="post-hero__category">{post.categoryName}</span>
          ) : null}

          <div className="post-hero__byline">
            {post.authorName ? (
              <span className="post-hero__author">{post.authorName}</span>
            ) : null}
            {post.authorName && post.publishedAt ? (
              <span className="post-hero__dot" aria-hidden="true" />
            ) : null}
            {post.publishedAt ? (
              <time dateTime={post.publishedAt}>
                {formatPublishedDate(post.publishedAt)}
              </time>
            ) : null}
          </div>
        </div>

        <h1 className="post-hero__title h1">{post.title}</h1>
        <div className="post-hero__accent" aria-hidden="true" />
      </div>
    </header>
  );
}
