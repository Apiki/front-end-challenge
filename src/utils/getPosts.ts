import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import api from '~/services/api';

type PostProps = {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  _embedded: {
    author: {
      name: string;
    };
  };
};

export default async function getPosts(page: number) {
  const { data, headers } = await api.get('', {
    params: {
      page,
    },
  });

  const posts = data.map((post: PostProps) => {
    return {
      id: post.id,
      title: post.title.rendered,
      description: post.excerpt.rendered.replace('<p>', '').replace('<p>', ''),
      thumbnail:
        post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail
          .source_url || null,
      createdAt: format(new Date(post.date), 'dd MMM, yyyy', {
        locale: ptBR,
      }),
      slug: post.slug,
      author: post._embedded.author[0].name || null,
    };
  });
  const totalPages = headers['x-wp-totalpages'];

  return { posts, totalPages };
}
