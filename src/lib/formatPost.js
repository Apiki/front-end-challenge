const textOnly = /<[^>]+>/g;
const whitespace = /\s+/g;

function stripHtml(value = '') {
  return value.replace(textOnly, ' ').replace(whitespace, ' ').trim();
}

function getEmbeddedTerms(post = {}) {
  return post?._embedded?.['wp:term'] ?? [];
}

function getCategoryName(post = {}) {
  return getEmbeddedTerms(post)?.[0]?.[0]?.name ?? '';
}

function getTagNames(post = {}) {
  return getEmbeddedTerms(post)?.[1]?.map((tag) => tag.name) ?? [];
}

function getFeaturedImage(post = {}) {
  return post?._embedded?.['wp:featuredmedia']?.[0] ?? null;
}

function getImageUrl(post = {}) {
  const media = getFeaturedImage(post);

  if (!media) {
    return '';
  }

  return (
    media.media_details?.sizes?.large?.source_url ||
    media.media_details?.sizes?.medium_large?.source_url ||
    media.media_details?.sizes?.medium?.source_url ||
    media.source_url ||
    ''
  );
}

export function formatPublishedDate(value) {
  if (!value) {
    return '';
  }

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value));
}

export function formatPublishedDateShort(value) {
  if (!value) {
    return '';
  }

  const parts = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).formatToParts(new Date(value));

  const day = parts.find((part) => part.type === 'day')?.value ?? '';
  const month = (
    parts.find((part) => part.type === 'month')?.value ?? ''
  ).replace('.', '').toUpperCase();
  const year = parts.find((part) => part.type === 'year')?.value ?? '';

  return `${day} ${month}, ${year}`;
}

export function formatPost(post = {}) {
  const image = getFeaturedImage(post);

  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title?.rendered ?? ''),
    excerpt: stripHtml(post.excerpt?.rendered ?? ''),
    content: post.content?.rendered ?? '',
    imageUrl: getImageUrl(post),
    imageAlt: image?.alt_text || stripHtml(image?.title?.rendered ?? '') || stripHtml(post.title?.rendered ?? ''),
    publishedAt: post.date ?? '',
    categoryName: getCategoryName(post),
    authorName: post?._embedded?.author?.[0]?.name ?? '',
    tags: getTagNames(post),
  };
}
