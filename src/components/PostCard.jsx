import Image from "next/image";
import Link from "next/link";

import { formatPublishedDateShort } from "@/lib/formatPost";

export default function PostCard({ post }) {
  const href = `/post/${post.slug}`;
  const publishedDate = post.publishedAt
    ? formatPublishedDateShort(post.publishedAt)
    : "";

  return (
    <article className="post-card">
      <Link href={href} className="post-card__media">
        {post.imageUrl ? (
          <Image
            src={post.imageUrl}
            alt={post.imageAlt}
            width={840}
            height={500}
            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1024px) calc((100vw - 80px) / 2), (max-width: 1216px) calc((100vw - 96px) / 2), 560px"
            className="post-card__image"
          />
        ) : (
          <div className="post-card__placeholder" aria-hidden="true" />
        )}
      </Link>

      <div className="post-card__content">
        <div className="post-card__body">
          {post.categoryName || publishedDate ? (
            <div className="post-card__meta" aria-label="Informações do post">
              {post.categoryName ? (
                <p className="post-card__eyebrow">{post.categoryName}</p>
              ) : null}

              {publishedDate ? (
                <p className="post-card__date">{publishedDate}</p>
              ) : null}
            </div>
          ) : null}

          <h2 className="post-card__title h4">
            <Link href={href} className="post-card__title-link">
              {post.title}
            </Link>
          </h2>

          <p className="post-card__excerpt">{post.excerpt}</p>
        </div>

        <Link href={href} className="post-card__link">
          Ler mais
          <Image
            src="/icons/arrow-right.svg"
            alt=""
            width={14}
            height={14}
            aria-hidden="true"
            className="post-card__arrow"
          />
        </Link>
      </div>
    </article>
  );
}
