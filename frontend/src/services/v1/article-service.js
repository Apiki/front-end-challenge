import { Api } from '../api-service';

async function getArticle(slug) {
  const { data } = await Api.get(`/posts?_embed&slug=${slug}`);
  return data;
}

export { getArticle };
