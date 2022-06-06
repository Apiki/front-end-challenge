import { Api } from '../api-service';

async function getPosts(page = 1) {
  const resultsWithHeaders = await Api.get(
    `/posts?_embed&categories=518&page=${page}`,
  );
  return resultsWithHeaders;
}

async function getArticle(slug) {
  const { data } = await Api.get(`/posts?_embed&slug=${slug}`);
  return data;
}

export { getPosts, getArticle };
