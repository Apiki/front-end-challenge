import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import api from '~/services/api';

export default async function getSlugPosts(slug: string) {
  try {
    const { data } = await api.get('', {
      params: {
        slug,
      },
    });

    const post = {
      title: data[0].title.rendered,
      description: data[0].excerpt.rendered
        .replace('<p>', '')
        .replace('</p>', ''),
      content: data[0].content.rendered,
      thumbnail:
        data[0]._embedded['wp:featuredmedia'][0].media_details.sizes
          .medium_large.source_url || null,
      createdAt: format(new Date(data[0].date), 'd MMM, yyyy', {
        locale: ptBR,
      }),
      author: data[0]._embedded.author[0].name || null,
      authorAvatar: data[0]._embedded.author[0].avatar_urls['48'] || null,
    };

    return post;
  } catch (err) {
    console.log(err);
  }
}
